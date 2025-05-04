
package models;

public class Payment {
    private String paymentId;
    private String orderId;
    private double amount;
    private String paymentMethod;
    private String status;

    public Payment(String paymentId, String orderId, double amount, String paymentMethod) {
        this.paymentId = paymentId;
        this.orderId = orderId;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
        this.status = "Pending";
    }

    public void processPayment() {
        try {
            validatePaymentMethod();
            this.status = "Success";
            System.out.println("Payment Successful for Order " + orderId);
        } catch (Exception e) {
            this.status = "Failed";
            System.out.println("Payment Failed: " + e.getMessage());
        }
    }

    private void validatePaymentMethod() throws Exception {
        if (!(paymentMethod.equals("Card") || paymentMethod.equals("UPI") || paymentMethod.equals("Cash"))) {
            throw new Exception("Invalid Payment Method");
        }
    }
}
