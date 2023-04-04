import { useEffect, useState } from "react";
import axios from 'axios';


interface Repo{
  name: string;
}

const App = () => {
  const [repos,setRepos] = useState<Repo[]>([]);
  const [search,setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/gallodev/repos').then((res) => {
      setRepos(res.data);
    });
  },[]);

  const filteredValue = search.length > 0 ? repos.filter(repo => repo.name.includes(search)) : []

  return (
    <>
      <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {search.length > 0 ? (
        <ul>
          {filteredValue.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      ): (<ul>
        {repos.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>)}
    </>
  )
}

export default App;