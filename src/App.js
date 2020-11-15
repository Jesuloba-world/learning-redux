import classes from "./App.module.css";
import Counter from "./Containers/Counter/Counter";

function App() {
	return (
		<div className={classes.App}>
			<Counter />
		</div>
	);
}

export default App;
