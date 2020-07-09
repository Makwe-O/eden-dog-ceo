// import axios from 'axios';

// export const apiInstance = axios.create({
//   baseURL: 'https://dog.ceo/api',
// });

// export const makeRequest = (url, options = { method: 'GET' }) => {
//   return apiInstance({
//     url,
//     method: options.method,
//     data: options.body,
//     params: options.params,
//     headers: {
//       Accept: 'application/json',
//       'Content-type': 'application/json',
//     },
//   })
//     .then((response) => response.data)
//     .catch((err) => {
//       if (err.response) {
//         // client received an error response (5xx, 4xx)
//         console.log('There was an issue with the reponse', err.response.status);
//       } else if (err.request) {
//         // client never received a response, or request never left
//         console.log('There was an issue with the request');
//       } else {
//         // anything else
//         console.log('An error occured please try again');
//       }
//     });
// };
