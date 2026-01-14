package com.revature_training;

abstract public class Shape {
	abstract double area();
	abstract double perimeter();
	void displayInfo() {
		System.out.println("Area:"+area());
		System.out.println("Perimeter:"+perimeter());
	}
}
