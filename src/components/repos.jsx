import {useState} from 'react'
import { useSelector } from "react-redux"
import RepoCard from "./repo_card"

const Repos = () => {
  const repos = useSelector(({ user }) => user.repos)
  const [search, setSearch] = useState("")
  
  return <div className='w-full p-10 bg-[#add] flex-1'>
    <h3 className='font-bold text-black text-2xl'>Repositories</h3>
    <br />
    <input className='mb-3 p-3 w-full' placeholder='Buscar...' type="text" value={search} onChange={evt => setSearch(evt.target.value)}/>
    <br />
    {
      repos
      .filter(repo => JSON.stringify(repo).toLowerCase().includes(search.toLowerCase()))
      .map((repo, index) => <RepoCard key={index} repo={repo} />)
    }
  </div>
}

export default Repos