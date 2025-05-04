
import models.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Item item1 = new Item("Pizza", 250);
        Item item2 = new Item("Pasta", 200);
        List<Item> itemList = new ArrayList<>();
        itemList.add(item1);
        itemList.add(item2);

        Order order = new Order("O1234", "U5678", "R9876", itemList);
        order.displayOrderSummary();

        Payment payment = new Payment("P1111", order.getOrderId(), order.getTotalPrice(), "UPI");
        payment.processPayment();

        DeliveryPerson dp = new DeliveryPerson("D4321", "Ravi Kumar");
        dp.assignOrder(order);
        dp.completeDelivery();
        order.displayOrderSummary();
    }
}
