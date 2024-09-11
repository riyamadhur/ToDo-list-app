import React, { useState } from "react";
//getting styles
import styles from "./Navbar.module.css"
//getting context
import { useValue } from "../TodoContext";


export default function Navbar(){
    const [isClicked,setIsClicked]=useState(false);
    const {handleAdd}=useValue();
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [id,setId]=useState("");
    //open add box
    function handleAddListClick() {
        setIsClicked(true);
      }
      //on submit to add
      function handleSubmit(e){
        e.preventDefault();
        handleAdd(id,userId,title);

        setTitle("");
        setUserId("");
        setId("");
        setIsClicked(false);
      }
    return(
        <div className={styles.Navbar}>
        <div className={styles.left}>TODO List</div>
        <div className={styles.right}><p className={styles.p} onClick={handleAddListClick}>Add-List</p>

        {isClicked?<form className={styles.from} onSubmit={handleSubmit}>
          <div className={styles.cross} onClick={()=>setIsClicked(false)}>x</div>
            <input placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input placeholder="Enter UserId" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
            <input placeholder="Enter Id" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button>Submit</button>
        </form>:null}
        </div>
        </div>
    )
}