import axios from "axios";

const BASE = "https://paisa-challange.herokuapp.com/api/v1/paisapp";

//ENDPOINTS

// GET /contacts
// //Ejemplo de respuesta
// {
// 	success: true,
// 	data: [
// 		{
//             "id": 1,
//             "name": "Belen",
//             "lastName": "Salvador",
//             "phone": "+541155634422",
//             "contacted": "2021-09-19T19:14:16.118Z"
//         },
// 	]
// }
async function getContacts() {
  try {
    const response = await axios.get(`${BASE}/contacts`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response);
    }
  } catch (error) {
    return error;
  }
}

// GET /transactions
// //Ejemplo de respuesta
// {
//     "success": true,
//     "data": [
//         {
//             "id": 1,
//             "type": "PAYMENT",
//             "title": "Adobe",
//             "description": "Pago de suscripción",
//             "total": 125
//         }
//     ]
// }
async function getTransactions() {
  try {
    const response = await axios.get(`${BASE}/transactions`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response);
    }
  } catch (error) {
    return error;
  }
}

// GET /user
// //Ejemplo de respuesta
// {
//     "success": true,
//     "data": {
//         "name": "Soy Paisanx",
//         "cards": [
//             {
//                 "id": 1,
//                 "number": "1234 2345 2345 1234",
//                 "balance": 978.85,
//                 "symbol": "USD",
//                 "expDate": "02/30"
//             }
//         ]
//     }
// }
async function getUser() {
  try {
    const response = await axios.get(`${BASE}/user`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response);
    }
  } catch (error) {
    return error;
  }
}

//   POST /login
//   //Ejemplo de peticion
//   {
//       "email": "hola@paisanos.io",
//       "password": "soypaisanx"
//   }
//   //Ejemplo de respuesta
//   {
//       "success": true,
//       "data": {
//           "success": true
//       }
//   }
async function logInUser(userCredentials) {
  try {
    const response = await axios.post(`${uri}/login`, userCredentials, {
      data: "",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 400) {
      return null;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

export { logInUser, getContacts, getTransactions, getUser };
