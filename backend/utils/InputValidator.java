package backend.utils;

import java.util.regex.Pattern;

public class InputValidator {

    public static boolean isValidString(String input) {
        return input != null && !input.trim().isEmpty();
    }

    public static boolean isValidEmail(String email) {
        if (email == null) return false;
        String emailRegex = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
        return Pattern.matches(emailRegex, email);
    }

    public static boolean isValidPhoneNumber(String phoneNumber) {
        if (phoneNumber == null) return false;
        String phoneRegex = "\\d{10}";
        return Pattern.matches(phoneRegex, phoneNumber);
    }

    public static boolean isPositiveNumber(double number) {
        return number > 0;
    }
}
