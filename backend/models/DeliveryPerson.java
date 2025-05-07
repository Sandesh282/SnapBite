package backend.models;
public class DeliveryPerson extends User {
    // Encapsulation: Private fields
    private String vehicleType;
    private boolean isAvailable;
    private double rating;

    public DeliveryPerson(String id, String name, String email, String phone, String vehicleType) {
        super(id, name, email, phone);
        this.vehicleType = vehicleType;
        this.isAvailable = true;
        this.rating = 0.0;
    }

    // Getters and Setters
    public String getVehicleType() { return vehicleType; }
    public void setVehicleType(String vehicleType) { this.vehicleType = vehicleType; }
    public boolean isAvailable() { return isAvailable; }
    public void setAvailable(boolean available) { isAvailable = available; }
    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    // Polymorphism: Override the abstract method from User class
    @Override
    public String getRole() {
        return "Delivery Person";
    }

    public void deliverOrder(Order order) {
        System.out.println("Delivering order " + order.getOrderId() + " to " + order.getDeliveryAddress());
        this.isAvailable = false;
    }

    public void completeDelivery(Order order) {
        System.out.println("Order " + order.getOrderId() + " delivered successfully!");
        this.isAvailable = true;
    }
} 