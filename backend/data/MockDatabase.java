package backend.data;
import backend.models.*;
import java.util.ArrayList;
import java.util.List;

public class MockDatabase {
    public static class User {
        private int id;
        private String name;
        private String email;
    
        public User(int id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
    
        // optional getters
        public int getId() { return id; }
        public String getName() { return name; }
        public String getEmail() { return email; }
    }
    
    private static List<User> users = new ArrayList<>();
    private static List<Order> orders = new ArrayList<>();
    private static List<Dish> dishes = new ArrayList<>();
    private static List<Payment> payments = new ArrayList<>();
    private static List<Restaurant> restaurants = new ArrayList<>();
    private static List<DeliveryPerson> deliveryPeople = new ArrayList<>();

    public static void addUser(User user) {
        users.add(user);
    }

    public static User getUserById(int userId) {
        for (User user : users) {
            if (user.getId() == userId) {
                return user;
            }
        }
        return null;
    }

    public static void addOrder(Order order) {
        orders.add(order);
    }

    public static Order getOrderById(int orderId) {
        for (Order order : orders) {
            if (order.getOrderId().equals(String.valueOf(orderId))) {
                return order;
            }
        }
        return null;
    }

    public static void addDish(Dish dish) {
        dishes.add(dish);
    }

    public static Dish getDishById(int dishId) {
        for (Dish dish : dishes) {
            if (dish.getDishId() == dishId) {
                return dish;
            }
        }
        return null;
    }

    public static void addPayment(Payment payment) {
        payments.add(payment);
    }

    public static Payment getPaymentById(int paymentId) {
        for (Payment payment : payments) {
            if (payment.getPaymentId().equals(String.valueOf(paymentId))) {
                return payment;
            }
        }
        return null;
    }

    public static void addRestaurant(Restaurant restaurant) {
        restaurants.add(restaurant);
    }


    public static void addDeliveryPerson(DeliveryPerson deliveryPerson) {
        deliveryPeople.add(deliveryPerson);
    }

    public static DeliveryPerson getDeliveryPersonById(int deliveryPersonId) {
        for (DeliveryPerson deliveryPerson : deliveryPeople) {
            if (deliveryPerson.getId().equals(String.valueOf(deliveryPersonId))) {
                return deliveryPerson;
            }
        }
        return null;
    }

    public static void initializeDatabase() {
        User user1 = new User(1, "John Doe", "john@example.com");
        User user2 = new User(2, "Jane Smith", "jane@example.com");
        addUser(user1);
        addUser(user2);

        Dish dish1 = new Dish(1, "Pizza", 12.99);
        Dish dish2 = new Dish(2, "Burger", 8.99);
        addDish(dish1);
        addDish(dish2);
    }
}
