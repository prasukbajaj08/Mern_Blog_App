import { useEffect } from 'react';
import  './sidebar.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
    },[]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihTE60AR5qQgnyJdK1OBydyUgV0OwxHi8jw&usqp=CAU"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita maxime tempore quo iure eius nulla repellat nemo cupiditate. Pariatur ratione?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES
        </span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className='link'>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}  
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
