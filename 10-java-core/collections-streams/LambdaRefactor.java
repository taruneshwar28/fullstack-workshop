package com.revature_training;

import java.util.*;
import java.util.function.*;

public class LambdaRefactor {

    public static void main(String[] args) {

        List<String> names = Arrays.asList("Java", "Spring", "API", "Microservices");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        /* =====================================================
           1. Sort list of strings by length
           ===================================================== */

        // ❌ Original (Anonymous class)
        /*
        Collections.sort(names, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return Integer.compare(s1.length(), s2.length());
            }
        });
        */

        // ✅ Lambda
        names.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));

        // ✅ Method reference (Comparator helper)
        names.sort(Comparator.comparingInt(String::length));


        /* =====================================================
           2. Filter even numbers
           ===================================================== */

        // ❌ Original (for loop)
        /*
        List<Integer> evens = new ArrayList<>();
        for (Integer n : numbers) {
            if (n % 2 == 0) {
                evens.add(n);
            }
        }
        */

        // ✅ Lambda + Predicate
        Predicate<Integer> isEven = n -> n % 2 == 0;
        List<Integer> evens = numbers.stream()
                                     .filter(isEven)
                                     .toList();


        /* =====================================================
           3. Print each element
           ===================================================== */

        // ❌ Original
        /*
        for (String s : names) {
            System.out.println(s);
        }
        */

        // ✅ Lambda
        names.forEach(s -> System.out.println(s));

        // ✅ Method reference (instance method)
        names.forEach(System.out::println);


        /* =====================================================
           4. Create thread
           ===================================================== */

        // ❌ Original
        /*
        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Running");
            }
        });
        */

        // ✅ Lambda (Runnable is functional interface)
        Thread t = new Thread(() -> System.out.println("Running"));
        t.start();


        /* =====================================================
           5. Transform strings to uppercase
           ===================================================== */

        // ❌ Original
        /*
        List<String> upper = new ArrayList<>();
        for (String s : names) {
            upper.add(s.toUpperCase());
        }
        */

        // ✅ Lambda + Function
        Function<String, String> toUpper = s -> s.toUpperCase();
        List<String> upper = names.stream()
                                  .map(toUpper)
                                  .toList();

        // ✅ Method reference
        List<String> upper2 = names.stream()
                                   .map(String::toUpperCase)
                                   .toList();

        System.out.println("Uppercase: " + upper2);
    }
}
