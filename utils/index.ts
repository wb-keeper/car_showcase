const url =
  "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&min_city_mpg=1&min_comb_mpg=-2";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "73270bb7eamsh9e55a5460de75fbp1769d8jsna77335678dff",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "73270bb7eamsh9e55a5460de75fbp1769d8jsna77335678dff",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers },
  );
  const result = await
}
