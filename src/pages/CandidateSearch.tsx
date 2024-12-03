
import GitUserData from '../api/gitinfo.tsx';
import infoCard from '../components/card';

let handleInfo:string = ''



const CandidateSearch = () => {
  
  const searchUser = GitUserData()
  handleInfo = JSON.stringify(searchUser);
  
  // const gitU =gitUser()
  
  console.log(handleInfo)
console.log(import.meta.env)
  return (
    <div>
  <h1>CandidateSearch</h1>
  {infoCard(searchUser,handleInfo)}
    {/* <h1>{gitUser()}</h1> */}
  </div>
  )
  
};

export default CandidateSearch;
