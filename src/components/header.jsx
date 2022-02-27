import {useSelector, useDispatch} from 'react-redux'

import {showModal} from '../redux/modal/actions'
import fav from '../assets/img/fav.svg';

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user.user)
  const showingModal = useSelector(({ modal }) => modal.showModal)

  const toggleModal = () => {
    dispatch(showModal(!showingModal))
  }

  return (
		<div className='w-full p-3 flex flex-row items-center justify-between border-b-2 border-[#ccc]'>
      <div className='flex flex-row items-center'>
        <img src={user.avatarUrl} alt='Avatar' className="w-[50px] h-[50px] rounded-full mr-4" />
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl text-black">{user.name}</p>
          <p className="text-sm text-[#aaa]">{user.login}</p>
        </div>
      </div>
      <img src={fav} alt='Fav' className="md:hidden w-[32px] h-[32px]" onClick={toggleModal} />
		</div>
	);
}

export default Header