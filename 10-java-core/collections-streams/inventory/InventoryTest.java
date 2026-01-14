package com.revature_training;

import java.util.List;
import java.util.Queue;

public class InventoryTest {

    public static void main(String[] args) {

        Inventory inventory = new Inventory();

        inventory.addProduct(new Product("P001", "Laptop", "Electronics", 999.99, 50));
        inventory.addProduct(new Product("P002", "Mouse", "Electronics", 29.99, 5));
        inventory.addProduct(new Product("P003", "Desk", "Furniture", 299.99, 15));

        // Get by category
        List<Product> electronics = inventory.getByCategory("Electronics");
        System.out.println("Electronics:");
        for (Product p : electronics) {
            System.out.println(p.getName());
        }

        // Get sorted by price
        System.out.println("\nSorted by price:");
        List<Product> sorted = inventory.getAllSortedByPrice();
        for (Product p : sorted) {
            System.out.println(p.getName() + " - $" + p.getPrice());
        }

        // Low stock alerts
        System.out.println("\nLow stock alerts:");
        Queue<Product> lowStock = inventory.getLowStockAlerts();
        while (!lowStock.isEmpty()) {
            Product p = lowStock.poll();
            System.out.println("Low stock: " + p.getName());
        }
    }
}
