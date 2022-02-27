import { useSelector } from "react-redux"
import RepoCard from "./repo_card"

const Repos = () => {
  const repos = useSelector(({ user }) => user.repos)
  
  return <div className='w-full p-10 bg-[#add] flex-1'>
    <h3 className='font-bold text-black text-2xl'>Repositories</h3>
    <br />
    {repos.map((repo, index) => <RepoCard key={index} repo={repo} />)}
  </div>
}

export default Repos