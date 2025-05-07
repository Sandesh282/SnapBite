// File: Main.java
package backend.models;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Create restaurant
        Restaurant restaurant = new Restaurant(1, "Food Haven", "123 Main Street");

        // Add dishes to the restaurant menu
        Dish dish1 = new Dish(101, "Pizza", 9.99);
        Dish dish2 = new Dish(102, "Burger", 5.49);
        Dish dish3 = new Dish(103, "Pasta", 7.99);
        Dish dish4 = new Dish(104, "Salad", 4.99);
        Dish dish5 = new Dish(105, "Ice Cream", 3.99);

        restaurant.addDish(dish1);
        restaurant.addDish(dish2);
        restaurant.addDish(dish3);
        restaurant.addDish(dish4);
        restaurant.addDish(dish5);

        // View restaurant menu
        System.out.println("=== Welcome to Food Delivery System ===");
        restaurant.viewMenu();

        // Create a delivery person
        DeliveryPerson deliveryPerson = new DeliveryPerson(
            "DP001",
            "John Doe",
            "john@example.com",
            "1234567890",
            "Bike"
        );

        User customer = new User("CUST001", "Alice Smith", "alice@example.com", "9876543210") {
            @Override
            public String getRole() {
                return "Customer";
            }
        };

        while (true) {
            System.out.println("\nEnter dish ID to add to cart (0 to finish): ");
            int dishId = scanner.nextInt();
            if (dishId == 0) break;

            Dish selectedDish = null;
            for (Dish dish : restaurant.getMenu()) {
                if (dish.getDishId() == dishId) {
                    selectedDish = dish;
                    break;
                }
            }

            if (selectedDish != null) {
                customer.addToCart(selectedDish);
            } else {
                System.out.println("Invalid dish ID!");
            }
        }

        System.out.println("\n=== Order Summary ===");
        customer.viewCart();

        double totalAmount = customer.calculateTotal();
        System.out.println("\n=== Payment Options ===");
        System.out.println("1. Credit Card");
        System.out.println("2. UPI");
        System.out.println("3. Cash on Delivery");
        System.out.print("Select payment option (1-3): ");
        
        int paymentChoice = scanner.nextInt();
        Payment payment = null;

        switch (paymentChoice) {
            case 1:
                System.out.print("Enter card number: ");
                String cardNumber = scanner.next();
                System.out.print("Enter expiry date (MM/YY): ");
                String expiryDate = scanner.next();
                System.out.print("Enter CVV: ");
                String cvv = scanner.next();
                payment = new CreditCardPayment("PAY001", totalAmount, customer.getId(), 
                    cardNumber, expiryDate, cvv);
                break;
            
            case 2:
                System.out.print("Enter UPI ID: ");
                String upiId = scanner.next();
                payment = new UpiPayment("PAY001", totalAmount, customer.getId(), upiId);
                break;
            
            case 3:
                payment = new CashPayment("PAY001", totalAmount, customer.getId());
                break;
            
            default:
                System.out.println("Invalid payment option!");
                return;
        }

        if (payment.processPayment()) {
            System.out.print("Enter delivery address: ");
            scanner.nextLine();
            String address = scanner.nextLine();
            
            Order order = new Order("ORD001", customer.getId(), address);
            order.setDeliveryPerson(deliveryPerson);
            order.updateStatus(OrderStatus.CONFIRMED);
            
            deliveryPerson.deliverOrder(order);
            order.updateStatus(OrderStatus.OUT_FOR_DELIVERY);
            deliveryPerson.completeDelivery(order);
            order.updateStatus(OrderStatus.DELIVERED);
            
            customer.clearCart();
        }

        scanner.close();
    }
} 