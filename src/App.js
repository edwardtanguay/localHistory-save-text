import './App.scss';

function App() {
	return (
		<div className="App">

			<form>
				<input id="row" type="radio" name="flexDirection" value="row" checked={flexDirection === "row"} onChange={(e) => setFlexDirection(e.target.value)} />
				<label htmlFor="row">Großschrift</label>

				<input id="column" type="radio" name="flexDirection" value="column" checked={flexDirection === "column"} onChange={(e) => setFlexDirection(e.target.value)} />
				<label htmlFor="column">KleinSchrift</label>
			</form>

			<input type="text" />

			<div className="history">
				History:
				<div className="content">

				</div>
			</div>
		</div>
	);
}

export default App;