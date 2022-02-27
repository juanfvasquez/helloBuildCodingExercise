import {useState} from 'react'
import {useNavigate} from 'react-router'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'

import * as userService from '../data/storage/users'

const Signup = () => {
	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const _submit = data => {
		const messages = userService.validateInfo(data)
		if (messages) {
			swal('Error', messages, 'error')
			return
		}
		const exists = userService.validateIfExists(data.username)
		if (exists) {
			swal('Error', 'El usuario ya existe', 'error')
			return
		}
		userService.createUser(data)
		swal('Usuario creado', 'Ahora puedes iniciar sesión', 'success')
		navigate('/login')
	};

	return (
		<div className='w-full h-full p-5 md:p-10 m-auto bg-[#add] flex items-center justify-center'>
			<div className='w-full max-w-xs'>
				<form
					className='bg-white shadow-md rounded p-10'
					onSubmit={handleSubmit(_submit)}
				>
					<div className='mb-10 flex items-center justify-center'>
						<h3 className='font-bold text-2xl'>Registro</h3>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='txtName'
						>
							Nombre
						</label>
						<input
							type='text'
							id='txtName'
							className='w-full'
							placeholder='Nombre'
							{...register('name', { required: true })}
						/>
						{errors.name && (
							<span className='text-xs text-[#f00]'>Nombre requerido</span>
						)}
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
						{errors.username && (
							<span className='text-xs text-[#f00]'>Usuario requerido</span>
						)}
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
						{errors.password && (
							<span className='text-xs text-[#f00]'>Contraseña requerida</span>
						)}
					</div>
					<button
						className='w-full bg-[#add] rounded py-1 text-white mb-3'
						disabled={loading}
					>
						{loading ? 'Cargando...' : 'Ingresar'}
					</button>
					<button
						type="button"
						className='w-full bg-[#add] rounded py-1 text-white'
						disabled={loading}
						onClick={() => navigate('login')}
					>
						Iniciar sesión
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup
