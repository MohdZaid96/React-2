function Count2({count, increment, decrement}) {
	return (
		<div>
			<p>{count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Count2