import React from "react";
import user from "../img/user.jpg";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";



const Single = () =>{
    return (
    <div className="single">
        <div className="content">
            <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="user">
                <img src={user} alt="" />
                <div className="info">
                    <span>John</span>
                    <p>Posted 2days ago</p>
                </div>
                <div className="edit">
                    <Link to = {`/write?edit=2`}>
                        <img src={Edit} alt="" />
                    </Link>

                    <img src={Delete} alt="" />
                </div>
            </div>
        </div>
        <div className="menu">m</div>
    </div>    
    )
}

export default Single