export const makeRequest = (url, options) =>
  fetch(url, options).then((response) =>
    response.json().then((data) => {
      if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
          data,
          code: response.status,
        };
      }
      return data;
    }),
  );

export default makeRequest;
