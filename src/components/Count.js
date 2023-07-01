import { useState } from 'react'
import styles from './Count.module.css'

const Count = () => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}

	const decrement = () => {
		setCount(count - 1)
	}

	return (
		<div className={styles.container}>
			<p>{count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Count


/*
	Hooks: Inbuilt function in react used for some execution purpose
	- useState: Creating state inside the component
		Syntax: const [stateName, stateHandlerName] = useState(defaultValue)
*/