package com.revature_training;

import java.util.Scanner;

class Person{
	private String name;
	private int age;
	private String email;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Person {name=" +"'"+ name +"'"+ ", age=" +"'"+ age +"'"+", email=" +"'"+ email +"'"+ "}";
	}
	public Person1(String name,int age,String email) {
		this.name=name;
		this.age=age;
		this.email=email;
	}
	public Person1() {
		
	}
	
}

 class Main{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		String name=sc.next();
		int age=sc.nextInt();
		String email=sc.next();
		if((age>=0 && age<=150) && (email.indexOf('@')!=-1)) {
		Person1 p1=new Person1(name,age,email);
		System.out.println(p1);
		}
	}
}
