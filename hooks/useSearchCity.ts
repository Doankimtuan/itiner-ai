import { useMutation } from "@tanstack/vue-query";
import { searchCity } from "~/services/home";

export const useSearchCity = ({
  handleSuccess,
}: {
  handleSuccess: (data: unknown) => void;
}) => {
  return useMutation({
    mutationFn: searchCity,
    onSuccess: (data) => {
      handleSuccess(data);
    },
  });
};
