import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router'
import swal from 'sweetalert'

import * as userService from '../data/storage/users'
import * as githubService from '../services/github'
import {setUser, setRepos} from '../redux/user/actions'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false)

  const _submit = data => {
		setLoading(true)
    const {user, error, message} = userService.findUser(data.username, data.password)
		if (error !== 0) {
			swal('No se puede iniciar sesión', message, 'error')
			setLoading(false)
			return
		}
		fetchData(user)
  }
	
	const fetchData = user => {
		githubService.fetchGithubData(user.login)
		.then(({ data }) => {
			if (!data.data.user) {
				swal('No se puede iniciar sesión', 'El usuario no existe en Github', 'error')
				setLoading(false)
				return
			}
			dispatch(setUser(data.data.user))
			dispatch(setRepos(data.data.user.repositories.edges))
			navigate('/profile')
		})
	}

  return (
		<div className='w-full h-full p-5 md:p-10 m-auto bg-[#add] flex items-center justify-center'>
			<div className='w-full max-w-xs'>
				<form
					className='bg-white shadow-md rounded p-10'
					onSubmit={handleSubmit(_submit)}
				>
					<div className='mb-10 flex items-center justify-center'>
						<h3 className='font-bold text-2xl'>Iniciar sesión</h3>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='txtUsername'
						>
							Usuario
						</label>
						<input
							type='text'
							id='txtUsername'
							className='w-full'
							placeholder='Usuario'
							{...register('username', { required: true })}
						/>
					  {errors.username && <span className="text-xs text-[#f00]">Usuario requerido</span>}
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='txPassword'
						>
							Contraseña
						</label>
						<input
							type='password'
							id='txtPassword'
							className='w-full'
							placeholder='Contraseña'
							{...register('password', { required: true })}
              />
              {errors.password && <span className="text-xs text-[#f00]">Contraseña requerida</span>}
					</div>
					<button className='w-full bg-[#add] rounded py-1 text-white mb-3' disabled={loading}>
						{loading ? 'Cargando...' : 'Ingresar'}
					</button>
					<button type="button" className='w-full bg-[#add] rounded py-1 text-white' disabled={loading} onClick={() => navigate('/sign-up')}>
						Registrarse
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login