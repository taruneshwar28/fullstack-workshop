package com.revature_training;

import java.util.*;

public class Inventory {

    private List<Product> products = new ArrayList<>();
    private Set<String> categories = new HashSet<>();
    private Map<String, Product> productMap = new HashMap<>();
    private Queue<Product> lowStockQueue = new LinkedList<>();

    // Add product
    public void addProduct(Product product) {
        products.add(product);
        categories.add(product.getCategory());
        productMap.put(product.getId(), product);

        if (product.getQuantity() < 10) {
            lowStockQueue.add(product);
        }
    }

    // Update product
    public void updateProduct(Product product) {
        productMap.put(product.getId(), product);
    }

    // Delete product
    public void deleteProduct(String id) {
        Product p = productMap.remove(id);
        if (p != null) {
            products.remove(p);
            lowStockQueue.remove(p);
        }
    }

    // Find by id
    public Product getById(String id) {
        return productMap.get(id);
    }

    // Find by category
    public List<Product> getByCategory(String category) {
        List<Product> result = new ArrayList<>();
        for (Product p : products) {
            if (p.getCategory().equalsIgnoreCase(category)) {
                result.add(p);
            }
        }
        return result;
    }

    // Sort by price
    public List<Product> getAllSortedByPrice() {
        List<Product> sorted = new ArrayList<>(products);
        sorted.sort(Comparator.comparingDouble(Product::getPrice));
        return sorted;
    }

    // Low stock alerts
    public Queue<Product> getLowStockAlerts() {
        return new LinkedList<>(lowStockQueue);
    }
}
