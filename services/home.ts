export const getCity = async (textSearch: string) => {
  const query = {
    search: textSearch,
    page: "1",
    size: "10",
  };
  const params = new URLSearchParams(query);

  const response = await $fetch(
    `https://api.thecompaniesapi.com/v2/locations/cities?${params}`
  );

  return response;
};
