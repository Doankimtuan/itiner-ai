import { getCity } from "~/services/home";
import { safeGlobal } from "./safeGlobal";
import { STORE_KEY } from "./key";
import type { ICity } from "~/types/home";

export const useHomeStore = defineStore(STORE_KEY.HOME, () => {
  const loadingSearchCity = ref<boolean>(false);

  const searchCity = async (text: string) => {
    const result = await safeGlobal({
      action: getCity,
      params: [text],
      loadingState: loadingSearchCity,
    });
    return (result as { cities: ICity[] }).cities;
  };

  return {
    loadingSearchCity,
    searchCity,
  };
});
