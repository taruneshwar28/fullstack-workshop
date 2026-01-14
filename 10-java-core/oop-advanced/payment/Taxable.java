package com.revature_training;

public interface Taxable {
	double calculateTax();

    static double getTaxRate() {
        return 0.18; // 18% tax
    }
}
