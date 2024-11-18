import React, { useEffect, useState } from 'react';
import './feed.css';
import Post from './post/post';
import axios from 'axios';
import Skeleton from './skeleton/Skeleton';


const Feed = () => {
    const [isloading,setIsloading]=useState(true);
    const [videos,setVideos]=useState([]);

useEffect(()=>{

    const getvideos=async()=>{
        setIsloading(true);
        try{
           const res=await axios.get('/api/videos/1');
           setVideos(res.data);
        }catch(err){}
            setIsloading(false)
        
    };
    getvideos();
   

},[]);
console.log(videos);



  return (
    <div className='feed'>
      {/* {videos.map((abdul)=>(
        <Post  videovarname={abdul}/>
      ))} */}

      {isloading ? (
        <Skeleton type='feedddd' /> 
      ) :(
        videos.map((abdul)=>(
          <Post  videovarname={abdul}/> 
        ))
      )}
     
    
        
      
    </div>

  )
}

export default Feed;