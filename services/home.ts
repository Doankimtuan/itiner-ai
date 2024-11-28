export const searchCity = async (city: string) => {
  const response = await $fetch(
    `https://countriesnow.space/api/v0.1/countries/population/cities`,
    {
      method: "POST",
      body: JSON.stringify({ city }),
    },
  );
  const data = response as { data: unknown };
  return data.data;
};
