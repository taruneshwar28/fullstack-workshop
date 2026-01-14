package com.revature_training;

public class Circle extends Shape{
	double radius;
	public Circle(double radius) {
		this.radius=radius;
	}
	@Override
	double area() {
		return 3.14*radius*radius;
	}
	@Override
	double perimeter() {
		return 2*3.14*radius;
	}
}
