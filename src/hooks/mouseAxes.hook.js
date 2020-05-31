import { useRef, useEffect } from 'react'

export const useMouseAxes = percent => {
	const ref = useRef(null)

	percent = 100 / percent

	useEffect(() => {
		try {
			ref.current.onmousemove = function({ clientX, clientY }) {
				const mouseX = clientX / percent
				const mouseY = clientY / percent
				this.style.setProperty('--mouse-x', `${mouseX}%`)
				this.style.setProperty('--mouse-y', `${mouseY}%`)
			}
		} catch (err) {
			console.error(`Some Error in useMouseAxes: ${err.message}`)
		}
	}, [percent])

	return { ref }
}
