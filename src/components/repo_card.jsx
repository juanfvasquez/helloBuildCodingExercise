import {useSelector, useDispatch} from 'react-redux'

import {setFavs} from '../redux/user/actions'
import addFav from '../assets/img/no-fav.svg'
import removeFav from '../assets/img/fav.svg'

const RepoCard = ({ repo }) => {
  const dispatch = useDispatch()
  const favs = useSelector(({ user }) => user.favs)

  const {node} = repo
  const {name, url, description, id} = node

  const isFav = () => {
    const exists = favs.find(fav => fav.node.id === id)
    return exists
  }

  const toggleFav = () => {
    const fav = isFav()
    dispatch(setFavs(fav ? favs.filter(fav => fav.node.id !== id) : [...favs, repo]))
  }

  return (
		<div className='w-full shadow-slate-50 flex flex-col p-5 bg-white mb-3 rounded'>
			<div className='flex flex-row items-center justify-between mb-3'>
				<p className='text-2xl text-black font-bold'>{name}</p>
				<img
					src={isFav() ? removeFav : addFav}
					alt='Fav'
					onClick={toggleFav}
					className='w-[32px] h-[32px]'
				/>
			</div>
			<p className='text-md text-gray-600'>{description}</p>
			<a href={url} className='text-md text-[#3af'>
				Visit
			</a>
		</div>
	);
}

export default RepoCard