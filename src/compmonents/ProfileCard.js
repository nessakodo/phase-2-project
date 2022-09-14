import React from "react";
import Login from "./Login"

export default function ProfileCard({ onAddUser, onCurrentUser }) {

    

 return (
    <div>
        <Login 
            onAddUser={onAddUser}
            onCurrentUser={onCurrentUser} 
         />
    </div>
 );
}