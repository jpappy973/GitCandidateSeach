import Table from 'react-bootstrap/Table';

const tabledatagen =()=>{

  const localdata:any=[]

  
  const getlocalData = ()=>{
    for(let i=0;i<localStorage.length;i++){
      const key :any= localStorage.key(i);
      const value:any= localStorage.getItem(key);
      localdata.push(JSON.parse(value));
    }
  
    }
    
    getlocalData()

    
      
    

    return localdata
    
  }

  




const SavedCandidates = () => {

   const data:any = tabledatagen()
  console.log(data)

  if(data.length === 0 ){
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
  
          </tr>
        </thead>
        <tbody>
       
        </tbody>
      </Table>)

  }else{
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>

        </tr>
      </thead>
      <tbody>
      <tr>
        <td><img style={{width:'100px',height:'100px'}}src={data[0].avatar_url} alt="" /></td>
        <td>{data[0].login}</td>
        <td>{data[0].location}</td>
        <td>{data[0].email}</td>
        <td>{data[0].company}</td>
        <td>{data[0].bio}</td>
        
      </tr>
      <tr>
      <td><img style={{width:'100px',height:'100px'}}src={data[1].avatar_url} alt="" /></td>
      <td>{data[1].login}</td>
        <td>{data[1].location}</td>
        <td>{data[1].email}</td>
        <td>{data[1].company}</td>
        <td>{data[1].bio}</td>
        
      </tr>
      <tr>
      <td><img style={{width:'100px',height:'100px'}}src={data[3].avatar_url} alt="" /></td>
      <td>{data[3].login}</td>
        <td>{data[3].location}</td>
        <td>{data[3].email}</td>
        <td>{data[3].company}</td>
        <td>{data[3].bio}</td>
        
      </tr>
      <tr>
      <td><img style={{width:'100px',height:'100px'}}src={data[4].avatar_url} alt="" /></td>
      <td>{data[4].login}</td>
        <td>{data[4].location}</td>
        <td>{data[4].email}</td>
        <td>{data[4].company}</td>
        <td>{data[4].bio}</td>
      </tr>
      <tr>
      <td><img style={{width:'100px',height:'100px'}}src={data[5].avatar_url} alt="" /></td>
      <td>{data[5].login}</td>
        <td>{data[5].location}</td>
        <td>{data[5].email}</td>
        <td>{data[5].company}</td>
        <td>{data[5].bio}</td>
      </tr>
      </tbody>
    </Table>
  );
};
}

export default SavedCandidates;
