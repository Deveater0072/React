import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Outcome from "./components/OutCome";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Klikaj</h1>
			<div className="card">
				<Button className="Button" setCount={setCount} />
				<Outcome className="Outcome" count={count} />
			</div>
		</>
	);
}

export default App;
