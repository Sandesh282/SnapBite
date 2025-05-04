
package models;

public class DeliveryPerson {
    private String deliveryPersonId;
    private String name;
    private Order assignedOrder;

    public DeliveryPerson(String deliveryPersonId, String name) {
        this.deliveryPersonId = deliveryPersonId;
        this.name = name;
        this.assignedOrder = null;
    }

    public void assignOrder(Order order) {
        this.assignedOrder = order;
        order.updateStatus("Out for Delivery");
        System.out.println("Order " + order.getOrderId() + " assigned to Delivery Person " + name);
    }

    public void completeDelivery() {
        if (assignedOrder != null) {
            assignedOrder.updateStatus("Delivered");
            System.out.println("Order " + assignedOrder.getOrderId() + " delivered by " + name);
            assignedOrder = null;
        } else {
            System.out.println("No order assigned.");
        }
    }
}
