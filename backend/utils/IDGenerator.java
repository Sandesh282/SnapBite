package backend.utils;
import java.util.UUID;

public class IDGenerator {

    public static String generateUUID() {
        return UUID.randomUUID().toString();
    }

    public static String generateShortID() {
        return UUID.randomUUID().toString().split("-")[0];
    }
}
