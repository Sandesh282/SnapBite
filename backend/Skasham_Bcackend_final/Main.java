public class Main {
    public static void main(String[] args) {
        // Create restaurant
        Restaurant restaurant = new Restaurant(1, "Food Haven", "123 Main Street");

        // Add dishes to the restaurant menu
        Dish dish1 = new Dish(101, "Pizza", 9.99);
        Dish dish2 = new Dish(102, "Burger", 5.49);
        Dish dish3 = new Dish(103, "Pasta", 7.99);

        restaurant.addDish(dish1);
        restaurant.addDish(dish2);
        restaurant.addDish(dish3);

        // View restaurant menu
        restaurant.viewMenu();

        // Create user
        User user = new User(1, "John Doe", "john@example.com", "password123");

        // User adds dishes to cart
        user.addToCart(dish1);
        user.addToCart(dish3);

        // View user cart
        user.viewCart();

        // Place order
        user.placeOrder();
    }
}