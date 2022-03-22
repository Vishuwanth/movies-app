import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss'

const listData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const List = () => {
	const [slideNumber, setSlideNumber] = useState(0)
	const [isMoved, setIsMoved] = useState(false)
	const listRef = useRef()
	const handleClick = (direction) => {
		setIsMoved(true)
		var distance = listRef.current.getBoundingClientRect().x - 50
		if (direction === 'left' && slideNumber > 0) {
			setSlideNumber(slideNumber - 1)
			listRef.current.style.transform = `translateX(${230 + distance}px)`
		}
		if (direction === 'right' && slideNumber < 5) {
			setSlideNumber(slideNumber + 1)
			listRef.current.style.transform = `translateX(${-230 + distance}px)`
		}
	}
	return (
		<div className='list'>
			<span className='list-title'>Continue to watch</span>
			<div className='wrapper'>
				<ArrowBackIosOutlined
					className='slider-arrow left'
					onClick={() => handleClick('left')}
					style={{ display: !isMoved && 'none' }}
				/>
				<div className='container' ref={listRef}>
					{listData.map((each) => (
						<ListItem key={each} index={each} />
					))}
				</div>
				<ArrowForwardIosOutlined
					className='slider-arrow right'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	)
}

export default List
