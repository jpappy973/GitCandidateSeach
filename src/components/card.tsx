import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function infoCard(info:any,addToLocal:string) {
    
    const saveToLocal = ()=>{
        const ranKey = JSON.stringify(Math.floor(Math.random() * 1000));
        localStorage.setItem(ranKey ,addToLocal)
        window.location.reload()

       
    }

  return (
    <Card style={{ width: '18rem',border:'1px soild black'}}>
      <Card.Img style={{width:'200px',position:'relative',left:'100px'}}variant="top" src ={`${info.avatar_url}`} />
      <Card.Body>
        <Card.Title style={{textAlign:'center',fontSize:'25px',position:'relative',left:'50px'}}>{info.login}</Card.Title>
        <Card.Text style={{textAlign:'center',position:'relative',left:'50px'}}>
          {`Email: ${info.email}`}<br/>
          {`Location: ${info.location}`}<br/>
          {`Bio: ${info.bio}`}
        </Card.Text>
        <div style={{position:'relative',left:'90px'}}>
        <Button onClick={()=>window.location.reload()}style={{borderRadius:'50px',width:'80px',height:'80px',backgroundColor:'red',marginRight:'40px'}}variant="primary">NEXT</Button>
        <Button onClick={saveToLocal} style={{borderRadius:'50px',width:'80px',height:'80px',backgroundColor:'green'}}variant="primary">ADD</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default infoCard;