import { useEffect, useState } from "react";
import axios from 'axios';


interface Repo{
  name: string;
}

const App = () => {
  const [repos,setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/gallodev/repos').then((res) => {
      setRepos(res.data);
    });
  },[]);


  return (
    <>
      {repos.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </>
  )
}

export default App;