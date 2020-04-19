// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Time from './component/Time'

import React, { Component } from 'react'
import Form from './component/Form'
import Edit from './component/Edit'
import StudentTable from './component/StudentTable'
import Fragment from './component/Fragment'
import Table from './component/Table'
import ParentComp from './component/ParentComp'
import RefsDemo from './component/RefsDemo'
import FocusInput from './component/FocusInput'
import FRParentInput from './component/FRParentInput'
import Parent from './component/Parent'


  function App() {
    // const usersData = [
    //   // { id: 1, name: 'Tania', username: 'floppydiskette' },
    //   // { id: 2, name: 'Craig', username: 'siliconeidolon' },
    //   // { id: 3, name: 'Ben', username: 'benisphere' },
    // ]
  

    // const initialFormState = { id: null, name: '', username: '' }
  
    // // Setting state
    // const [ users, setUsers ] = useState(usersData)
    // const [ currentUser, setCurrentUser ] = useState(initialFormState)
    // const [ editing, setEditing ] = useState(false)
  
    // // CRUD operations
    // const addUser = user => {
    //   user.id = users.length + 1
    //   setUsers([ ...users, user ])
    // }
  
    // const deleteUser = id => {
    //   setEditing(false)
  
    //   setUsers(users.filter(user => user.id !== id))
    // }
  
    // const updateUser = (id, updatedUser) => {
    //   setEditing(false)
  
    //   setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    // }
  
    // const editRow = user => {
    //   setEditing(true)
  
    //   setCurrentUser({ id: user.id, name: user.name, username: user.username })
    // }
  
  //const App = () => {
    // Data
    
    return ( 
      <div className="App">
        <Parent />
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* < RefsDemo /> */}
        {/* < ParentComp/> */}
        {/* <Fragment/> */}
        {/* < Table/> */}
      </div>
    )
  //     <div className="container">
  //       {/* <h1>CRUD App with Hooks</h1> */}
  //       <div className="flex-row">
  //         <div className="flex-large">
  //           {editing ? (
  //             <Fragment>
  //               <h2>Edit user</h2>
  //               <Edit
  //                 editing={editing}
  //                 setEditing={setEditing}
  //                 currentUser={currentUser}
  //                 updateUser={updateUser}
  //               />
  //             </Fragment>
  //           ) : (
  //             <Fragment>
  //               <h2>Add user</h2>
  //               <Form addUser={addUser} />
  //             </Fragment>
  //           )}
  //         </div>
  //         <div className="flex-large">
  //           <h2>View users</h2>
  //           <StudentTable users={users} editRow={editRow} deleteUser={deleteUser} />
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
//   return (
//     <div className="container">
//       <h1>Dynamic Table</h1>
//     </div>
//     // <div className="App">
//     //   <h1> Hello Sweta </h1>
//     //   <Time />
//     // </div>
   
 }

export default App;
