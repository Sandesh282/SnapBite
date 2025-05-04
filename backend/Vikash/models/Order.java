
package models;
import java.util.List;

public class Order {
    private String orderId;
    private String userId;
    private String restaurantId;
    private List<Item> items;
    private double totalPrice;
    private String status;

    public Order(String orderId, String userId, String restaurantId, List<Item> items) {
        this.orderId = orderId;
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.items = items;
        this.totalPrice = calculateTotal();
        this.status = "Preparing";
    }

    private double calculateTotal() {
        double sum = 0;
        for (Item item : items) {
            sum += item.getPrice();
        }
        return sum;
    }

    public void updateStatus(String newStatus) {
        if (newStatus.equals("Preparing") || newStatus.equals("Ready for Pickup") ||
            newStatus.equals("Out for Delivery") || newStatus.equals("Delivered")) {
            this.status = newStatus;
        } else {
            System.out.println("Invalid Status");
        }
    }

    public void displayOrderSummary() {
        System.out.println("Order ID: " + orderId);
        System.out.println("User ID: " + userId);
        System.out.println("Restaurant ID: " + restaurantId);
        System.out.println("Items:");
        for (Item item : items) {
            System.out.println("- " + item.getName() + ": ₹" + item.getPrice());
        }
        System.out.println("Total Price: ₹" + totalPrice);
        System.out.println("Status: " + status);
    }

    public double getTotalPrice() { return totalPrice; }
    public String getOrderId() { return orderId; }
}
