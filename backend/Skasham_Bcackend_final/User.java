import java.util.ArrayList;
import java.util.List;

public class User {
    private int userId;
    private String name;
    private String email;
    private String password;
    private List<Dish> cart;

    public User(int userId, String name, String email, String password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cart = new ArrayList<>();
    }

    public void addToCart(Dish dish) {
        cart.add(dish);
        System.out.println(dish.getName() + " added to cart.");
    }

    public void viewCart() {
        if (cart.isEmpty()) {
            System.out.println("Your cart is empty.");
        } else {
            System.out.println("Your cart:");
            for (Dish dish : cart) {
                dish.getDetails();
            }
        }
    }

    public void placeOrder() {
        if (cart.isEmpty()) {
            System.out.println("Cart is empty. Add items before placing an order.");
        } else {
            System.out.println("Order placed successfully! Items:");
            for (Dish dish : cart) {
                System.out.println("- " + dish.getName());
            }
            cart.clear();
        }
    }
}