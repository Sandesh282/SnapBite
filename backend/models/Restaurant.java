package backend.models;
import java.util.ArrayList;
import java.util.List;

public class Restaurant {
    private int restaurantId;
    private String name;
    private String address;
    private List<Dish> menu;

    public Restaurant(int restaurantId, String name, String address) {
        this.restaurantId = restaurantId;
        this.name = name;
        this.address = address;
        this.menu = new ArrayList<>();
    }

    public void addDish(Dish dish) {
        menu.add(dish);
        System.out.println(dish.getName() + " added to the menu.");
    }

    public void viewMenu() {
        if (menu.isEmpty()) {
            System.out.println("Menu is empty.");
        } else {
            System.out.println("\n" + name + " Menu:");
            System.out.println("Address: " + address);
            System.out.println("------------------------");
            for (Dish dish : menu) {
                dish.getDetails();
                System.out.println("------------------------");
            }
        }
    }

    public List<Dish> getMenu() {
        return menu;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }
} 