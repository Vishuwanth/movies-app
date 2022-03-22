import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import './homePage.scss'

const HomePage = ({ type }) => {
	return (
		<div className='home'>
			<Navbar />
			<Featured type={type} />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
		</div>
	)
}

export default HomePage
