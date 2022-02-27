import {useSelector, useDispatch} from 'react-redux'
import Modal from 'react-modal'

import Header from '../components/header'
import Repos from '../components/repos'
import Favs from '../components/favs'
import { showModal } from '../redux/modal/actions'


Modal.setAppElement('#root')

const Profile = () => {
  const dispatch = useDispatch()
  const showingModal = useSelector(({ modal }) => modal.showModal)

  const closeModal = () => {
    dispatch(showModal(false))
  }

  return <div className="w-full h-full">
    <Header />
    <div className="flex flex-row">
      <Repos />
      <Favs />
    </div>
    <Modal
      isOpen={showingModal}
      onRequestClose={closeModal}
    >
      <Favs modal />
    </Modal>
  </div>
}

export default Profile