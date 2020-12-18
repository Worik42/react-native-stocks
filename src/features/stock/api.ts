export const stockRequest = async () => {
  try {
    const response = await fetch(
      'https://poloniex.com/public?command=returnTicker',
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
