import { useState } from 'react'

const Toggle = () => {
	const [showHeading, setShowHeading] = useState(true);

	const toggleVisibility = () => {
		setShowHeading(!showHeading)
	}

	return (
		<div className='container'>
			{showHeading && <h1>Toggle this heading</h1>}
			<button onClick={toggleVisibility}>Toggle</button>
		</div>
	)
}

export default Toggle