import { useSelector } from 'react-redux';
import RepoCard from './repo_card';

const Favs = ({ modal }) => {
	const repos = useSelector(({ user }) => user.favs);

	return (
		<div className={`w-full p-10 bg-[#add] ${modal ? '' : 'hidden'} md:block md:flex-1`}>
			<h3 className='font-bold text-black text-2xl'>Favorites</h3>
			<br />
			{repos.map((repo, index) => (
				<RepoCard key={index} repo={repo} />
			))}
		</div>
	);
};

export default Favs;
