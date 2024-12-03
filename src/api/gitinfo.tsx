import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const GitUserData = ()=>{
    const [userdata,setUserdata]:any = useState('')
  
    useEffect(()=>{
      
      const data = async()=>{
        const gitinfo= await searchGithub()
        const gitdata = await searchGithubUser(gitinfo[0].login)
        setUserdata(gitdata)
        
        
        
      }
      
      data()
      
      
    },[])
  
   
    return userdata
  }
  
  export default GitUserData