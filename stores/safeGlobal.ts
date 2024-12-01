interface ISafeGlobal<T = unknown, A extends unknown[] = unknown[]> {
  action: (...args: A) => Promise<T>;
  params?: A;
  errorHandler?: (error: unknown) => void;
  successMessage?: string;
  loadingState?: Ref<boolean>;
}

export const safeGlobal = async <T = unknown, A extends unknown[] = unknown[]>({
  action,
  params = [] as unknown as A,
  errorHandler,
  successMessage,
  loadingState,
}: ISafeGlobal<T, A>): Promise<T | null> => {
  const toast = useToast();

  try {
    // Set loading state to true if provided
    if (loadingState) {
      loadingState.value = true;
    }

    // Call the action with spread parameters
    const result = await action(...params);

    // Show success toast if message provided
    if (successMessage) {
      toast.add({
        id: "success_global",
        title: "Success",
        description: successMessage,
        icon: "i-heroicons-check-circle",
        color: "green",
        timeout: 3000,
      });
    }

    return result;
  } catch (error) {
    console.error("========== error", error);

    // Show error toast
    toast.add({
      id: "error_global",
      title: "Error",
      description:
        error instanceof Error ? error.message : "An unexpected error occurred",
      icon: "i-heroicons-exclamation-triangle",
      color: "red",
      timeout: 3000,
    });

    // Call custom error handler if provided
    if (errorHandler) {
      errorHandler(error);
    }

    return null;
  } finally {
    // Always set loading state to false if provided
    if (loadingState) {
      loadingState.value = false;
    }
  }
};
