package backend.models;
import java.util.ArrayList;
import java.util.List;

public class Order {
    // Encapsulation: Private fields
    private String orderId;
    private String customerId;
    private List<OrderItem> items;
    private double totalAmount;
    private String deliveryAddress;
    private OrderStatus status;
    private DeliveryPerson deliveryPerson;

    public Order(String orderId, String customerId, String deliveryAddress) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.deliveryAddress = deliveryAddress;
        this.items = new ArrayList<>();
        this.totalAmount = 0.0;
        this.status = OrderStatus.PENDING;
    }

    // Getters and Setters
    public String getOrderId() { return orderId; }
    public String getCustomerId() { return customerId; }
    public List<OrderItem> getItems() { return items; }
    public double getTotalAmount() { return totalAmount; }
    public String getDeliveryAddress() { return deliveryAddress; }
    public OrderStatus getStatus() { return status; }
    public DeliveryPerson getDeliveryPerson() { return deliveryPerson; }

    public void setDeliveryPerson(DeliveryPerson deliveryPerson) {
        this.deliveryPerson = deliveryPerson;
    }

    public void addItem(OrderItem item) {
        items.add(item);
        totalAmount += item.getPrice() * item.getQuantity();
    }

    public void updateStatus(OrderStatus newStatus) {
        this.status = newStatus;
        System.out.println("Order " + orderId + " status updated to: " + newStatus);
    }
}

enum OrderStatus {
    PENDING,
    CONFIRMED,
    PREPARING,
    READY_FOR_DELIVERY,
    OUT_FOR_DELIVERY,
    DELIVERED,
    CANCELLED
} 