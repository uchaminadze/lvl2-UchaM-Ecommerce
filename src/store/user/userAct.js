// import {setToken, setUser} from "./userActionCretor";

// export const loginUser = (email, password) =>  (dispatch, getState) => {
//     fetch('http://159.65.126.180/api/auth/login', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             accept: "application/json",
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({email, password}),
//     }).then((res) => {
//             console.log(res)
//             if (res.ok) {
//                 return res.json()
//             } else {
//                 throw new Error('');
//             }
//         }).then(data => {

//         console.log(data);
//         dispatch(setUser(data.user))
//         dispatch(setToken(data.token.access_token))
//     })
// }
