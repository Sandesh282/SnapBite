public class Dish {
    private int dishId;
    private String name;
    private double price;

    public Dish(int dishId, String name, double price) {
        this.dishId = dishId;
        this.name = name;
        this.price = price;
    }

    public void getDetails() {
        System.out.println("Dish ID: " + dishId);
        System.out.println("Name: " + name);
        System.out.println("Price: $" + price);
    }

    public int getDishId() {
        return dishId;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}