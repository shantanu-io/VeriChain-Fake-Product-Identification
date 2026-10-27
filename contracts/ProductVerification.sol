
 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProductVerification {
    struct Product {
        string productId;
        string name;
        string manufacturer;
        string batchNumber;
        string category;
        string origin;
        address registeredBy;
        uint256 registeredAt;
        bool exists;
    }

    mapping(string => Product) private products;
    string[] private productIds;

    event ProductRegistered(
        string productId,
        string name,
        string manufacturer,
        address registeredBy
    );

    function registerProduct(
        string calldata productId,
        string calldata name,
        string calldata manufacturer,
        string calldata batchNumber,
        string calldata category,
        string calldata origin
    ) external {
        require(bytes(productId).length > 0, "Product ID required");
        require(bytes(name).length > 0, "Name required");
        require(bytes(manufacturer).length > 0, "Manufacturer required");
        require(!products[productId].exists, "Product ID already registered");

        products[productId] = Product({
            productId: productId,
            name: name,
            manufacturer: manufacturer,
            batchNumber: batchNumber,
            category: category,
            origin: origin,
            registeredBy: msg.sender,
            registeredAt: block.timestamp,
            exists: true
        });

        productIds.push(productId);

        emit ProductRegistered(productId, name, manufacturer, msg.sender);
    }

    function verifyProduct(string calldata productId)
        external
        view
        returns (
            bool exists,
            string memory name,
            string memory manufacturer,
            string memory batchNumber,
            string memory category,
            string memory origin,
            address registeredBy,
            uint256 registeredAt
        )
    {
        Product storage p = products[productId];

        return (
            p.exists,
            p.name,
            p.manufacturer,
            p.batchNumber,
            p.category,
            p.origin,
            p.registeredBy,
            p.registeredAt
        );
    }

    function getProductCount() external view returns (uint256) {
        return productIds.length;
    }

    function getProductIdAt(uint256 index)
        external
        view
        returns (string memory)
    {
        require(index < productIds.length, "Index out of range");
        return productIds[index];
    }
}
