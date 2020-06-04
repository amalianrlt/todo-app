// import React, { Component } from "react";
// import { Container, Card } from "reactstrap";
// import axios from 'axios'

// const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1";
// let token;

// export default class UserPage extends Component {
//     async componentDidMount() {
//         token = localStorage.getItem("token");
//         try {
//           const res = await axios.get(`${baseUrl}/user`, {
//             headers: {
//               Authorization: token,
//             },
//           });
//           console.log("ini nyoba lagi:", res.data);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//   render() {
//     return (
//             <Card>
//                 <ul>
//                     <li>amal</li>
//                     <li>My Day</li>
//                     <li>Important</li>
//                     <li>Completed</li>
//                 </ul>
//             </Card>
  
//   );
//   }
// }
