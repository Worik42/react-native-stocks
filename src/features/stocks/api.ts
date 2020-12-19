export const stockRequest = async () => {
  try {
    const response = await fetch(
      'https://poloniex.com/public?command=returnTicker',
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
