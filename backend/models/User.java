package backend.models;
import java.util.ArrayList;
import java.util.List;

public abstract class User {
    // Encapsulation: Private fields with public getters/setters
    private String id;
    private String name;
    private String email;
    private String phone;
    private List<Dish> cart;
    private static final double TAX_RATE = 0.18;
    private static final double DELIVERY_FEE = 2.99;

    public User(String id, String name, String email, String phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.cart = new ArrayList<>();
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    // Cart functionality
    public void addToCart(Dish dish) {
        cart.add(dish);
        System.out.println(dish.getName() + " added to cart.");
    }

    public void viewCart() {
        if (cart.isEmpty()) {
            System.out.println("Your cart is empty.");
        } else {
            System.out.println("\n=== Your Cart ===");
            double subtotal = 0;
            for (Dish dish : cart) {
                dish.getDetails();
                subtotal += dish.getPrice();
            }
            double tax = subtotal * TAX_RATE;
            double total = subtotal + tax + DELIVERY_FEE;
            
            System.out.println("\n=== Bill Summary ===");
            System.out.println("Subtotal: $" + String.format("%.2f", subtotal));
            System.out.println("Tax (18%): $" + String.format("%.2f", tax));
            System.out.println("Delivery Fee: $" + String.format("%.2f", DELIVERY_FEE));
            System.out.println("Total: $" + String.format("%.2f", total));
        }
    }

    public double calculateTotal() {
        if (cart.isEmpty()) return 0;
        double subtotal = cart.stream().mapToDouble(Dish::getPrice).sum();
        return subtotal + (subtotal * TAX_RATE) + DELIVERY_FEE;
    }

    public List<Dish> getCart() {
        return cart;
    }

    public void clearCart() {
        cart.clear();
    }

    // Abstraction: Abstract method that must be implemented by subclasses
    public abstract String getRole();
} 