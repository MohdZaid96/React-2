import './App.css'
import { useState } from 'react'
// import Student from './components/Student'
// import Count from './components/Count'
// import Toggle from './components/Toggle'
import Count1 from './components/Count1';
import Count2 from './components/Count2';

const App = () => {
	// const students = [
	// 	{
	// 		firstName: 'Akhil',
	// 		lastName: 'Bharambe',
	// 		batchNo: 5,
	// 		techStack: 'MERN',
	// 		likesIcream: false
	// 	},
	// 	{
	// 		firstName: 'Ram',
	// 		lastName: 'Kumar',
	// 		batchNo: 8,
	// 		techStack: 'MERN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	},
	// 	{
	// 		firstName: 'Laksham',
	// 		lastName: 'Mishra',
	// 		batchNo: 12,
	// 		techStack: 'MEAN',
	// 		likesIcream: true
	// 	}
	// ]
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}

	const decrement = () => {
		setCount(count - 1)
	}

  return (
    <div className="App">
      {/* {students.map((student, index) => (
				<Student
					firstName={student.firstName}
					lastName={student.lastName}
					batchNo={student.batchNo}
					techStack={student.techStack}
					likesIcream={student.likesIcream}
					key={index}
				/>
			))} */}
      {/* <Count />
			<Count /> */}
      {/* <Toggle /> */}
      <Count1 count={count} increment={increment} decrement={decrement} />
      <Count2 count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;

/*
	## Types of data in components:
	- Props: Data passed from parent component to child component (Object)
		- Re-use components with dynamic data
	- State: Data owned by the component/ private data to the component (Object)
		- States could only be used in class based components
		- Hooks: With the introduction of hooks, now you could create states in functional components as well

	- Component re-renders whenever the state or props values are updated
	
	## List rendering:
	- Using Loops 
	- .map method

	## Sharing same state across multiple components
	- Create the state in the parent component
	- Pass the state and handler as props to child components
*/


