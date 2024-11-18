
import { useEffect, useState } from 'react';
import './App.css';
import Feed from './components/feed';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import axios from 'axios';


function App() {
  const [isloading,setIsloading]=useState(true);
  const [user,setUser]=useState([]);

useEffect(()=>{

  const getuser=async()=>{

      setIsloading(true);
      try{
         const res=await axios.get('/api/user/1');
         setUser(res.data);
      }catch(err){}
          setIsloading(false)
      
  };
  getuser();
 

},[]);
console.log(user);
  return (
    <div className="container">
      <Sidebar  isloading={isloading}/>

      <div className='home'>
        <Topbar isloading={isloading} user={user} />
        <Feed />

      </div>
    </div>
  );
}

export default App;
