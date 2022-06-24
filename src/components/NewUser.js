// import React from 'react'

// function NewUser() {
//     const [email, setEmail] = useState("")

//     function handleSubmit(e) {
//         e.preventDefault();
//         const newUser = { email }
//         handlePost(newUser)
//     }

//     function handlePost(newUser) { 
//         fetch("http://localhost:9292/customer", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newUser)
//         })
//         .then((r) => r.json())
//         .then((data) => )
//     }
//   return (
//       <div>
//           <form className="form" onSubmit={handleSubmit}>
//               <label className="label"><strong>Add New User</strong></label>
//               <br />
//               <input
//                   type="text"
//                   placeholder="Enter Email..."
//                   name="email"
//                   value={email}
//                   onChange={handleEmailChange}
//               />
//               </form>
//     </div>
//   )
// }

// export default NewUser