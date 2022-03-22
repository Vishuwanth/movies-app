import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import featured from './../../asssets/featured.png'
import './Featured.scss'

const Featured = ({ type }) => {
	return (
		<div className='featured'>
			{type && (
				<div className='category'>
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name='genre' id='genre'>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
						<option value='genre'>Genre</option>
					</select>
				</div>
			)}
			<img src={featured} alt='featured' />
			<div className='info'>
				<h1>Super Man</h1>
				<span className='desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius fuga
					illum sed at. Autem et fugiat hic harum nihil, eligendi dolorem
					corrupti, vero accusamus, similique voluptatibus voluptas dignissimos
					recusandae.
				</span>
				<div className='buttons'>
					<button className='play'>
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className='more'>
						<InfoOutlined />
						<span>info</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Featured
