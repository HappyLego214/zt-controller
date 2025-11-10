import './App.css'

function App() {

	const fetchData = async () => {
		const response = await fetch("http://127.0.0.1:3050/")
		const data = await response.json()
		console.log(data)
	}

	return (
		<>
			<div>
				<button onSubmit={fetchData}>Testing Backend!</button>
			</div>
		</>
	)
}

export default App
