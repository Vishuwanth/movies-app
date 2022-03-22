import './app.scss'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Watch from './pages/Watch/Watch'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route exact path='/movies' element={<HomePage type='movie' />} />
				<Route exact path='/series' element={<HomePage type='series' />} />
				<Route exact path='/series' element={<Watch />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
			</Routes>
		</Router>
	)
}

export default App
