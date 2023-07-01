const Student = ({ firstName, lastName, batchNo, techStack, likesIcream }) => {
	return (
		<ul>
			<li>First Name: {firstName}</li>
			<li>Last Name: {lastName}</li>
			<li>Batch: {batchNo}</li>
			<li>Tech Stack: {techStack}</li>
			{likesIcream && <li>This student likes icecream</li>}
		</ul>
	)
}

export default Student