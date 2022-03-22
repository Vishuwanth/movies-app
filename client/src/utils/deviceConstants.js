import { useMediaQuery } from 'react-responsive'

const DeviceConstants = () => {
	const smallScreen = useMediaQuery({
		maxWidth: 319,
	})
	const mobileS = useMediaQuery({
		minWidth: 320,
		maxWidth: 479,
	})
	const mobileL = useMediaQuery({
		minWidth: 480,
		maxWidth: 599,
	})
	const tabletS = useMediaQuery({
		minWidth: 600,
		maxWidth: 767,
	})
	const tabletL = useMediaQuery({
		minWidth: 768,
		maxWidth: 899,
	})
	const desktopS = useMediaQuery({
		minWidth: 900,
		maxWidth: 1023,
	})
	const desktopL = useMediaQuery({
		minWidth: 1024,
		maxWidth: 1440,
	})
	const isBigScreen = useMediaQuery({ minWidth: 1441 })
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
	const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

	return {
		smallScreen,
		mobileS,
		mobileL,
		tabletS,
		tabletL,
		desktopS,
		desktopL,
		isBigScreen,
		isPortrait,
		isRetina,
	}
}
export default DeviceConstants
