import java.util.Optional;

@FunctionalInterface
interface ThrowingSupplier<T> {
    T get() throws Exception;
}

public class SafeExecutor {

    public static <T> Optional<T> safeExecute(ThrowingSupplier<T> supplier) {
        try {
            return Optional.ofNullable(supplier.get());
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public static void main(String[] args) {
        System.out.println(safeExecute(() -> Integer.parseInt("123")));
        System.out.println(safeExecute(() -> Integer.parseInt("abc")));
    }
}
