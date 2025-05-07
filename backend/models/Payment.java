package backend.models;
public abstract class Payment {
    // Encapsulation: Protected fields
    protected String paymentId;
    protected double amount;
    protected PaymentStatus status;
    protected String customerId;

    public Payment(String paymentId, double amount, String customerId) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.customerId = customerId;
        this.status = PaymentStatus.PENDING;
    }

    // Abstraction: Abstract method that must be implemented by subclasses
    public abstract boolean processPayment();
    public abstract void showPaymentDetails();

    // Common methods
    public String getPaymentId() { return paymentId; }
    public double getAmount() { return amount; }
    public PaymentStatus getStatus() { return status; }
    public void setStatus(PaymentStatus status) { this.status = status; }
}

// Polymorphism: Different payment implementations
class CreditCardPayment extends Payment {
    private String cardNumber;
    private String expiryDate;
    private String cvv;

    public CreditCardPayment(String paymentId, double amount, String customerId, String cardNumber, String expiryDate, String cvv) {
        super(paymentId, amount, customerId);
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    @Override
    public boolean processPayment() {
        System.out.println("\n=== Processing Credit Card Payment ===");
        showPaymentDetails();
        System.out.println("Validating card details...");
        System.out.println("Processing payment of $" + String.format("%.2f", amount));
        this.status = PaymentStatus.COMPLETED;
        System.out.println("Payment successful!");
        return true;
    }

    @Override
    public void showPaymentDetails() {
        System.out.println("Payment Method: Credit Card");
        System.out.println("Card Number: ****-****-****-" + cardNumber.substring(cardNumber.length() - 4));
        System.out.println("Expiry Date: " + expiryDate);
    }
}

class UpiPayment extends Payment {
    private String upiId;

    public UpiPayment(String paymentId, double amount, String customerId, String upiId) {
        super(paymentId, amount, customerId);
        this.upiId = upiId;
    }

    @Override
    public boolean processPayment() {
        System.out.println("\n=== Processing UPI Payment ===");
        showPaymentDetails();
        System.out.println("Sending payment request to " + upiId);
        System.out.println("Processing payment of $" + String.format("%.2f", amount));
        this.status = PaymentStatus.COMPLETED;
        System.out.println("Payment successful!");
        return true;
    }

    @Override
    public void showPaymentDetails() {
        System.out.println("Payment Method: UPI");
        System.out.println("UPI ID: " + upiId);
    }
}

class CashPayment extends Payment {
    public CashPayment(String paymentId, double amount, String customerId) {
        super(paymentId, amount, customerId);
    }

    @Override
    public boolean processPayment() {
        System.out.println("\n=== Processing Cash Payment ===");
        showPaymentDetails();
        System.out.println("Amount to be paid in cash: $" + String.format("%.2f", amount));
        this.status = PaymentStatus.COMPLETED;
        System.out.println("Payment marked as pending - to be collected on delivery");
        return true;
    }

    @Override
    public void showPaymentDetails() {
        System.out.println("Payment Method: Cash on Delivery");
        System.out.println("Amount: $" + String.format("%.2f", amount));
    }
}

enum PaymentStatus {
    PENDING,
    COMPLETED,
    FAILED,
    REFUNDED
} 