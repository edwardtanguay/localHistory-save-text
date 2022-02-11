import { useState } from 'react';
import './App.scss';

function App() {
	const [textCase, setTextCase] = useState('uppercase');
	return (
		<div className="App">

			<form>
				<input id="uppercase" type="radio" name="textCase" value="uppercase" checked={textCase === "uppercase"} onChange={(e) => setTextCase(e.target.value)} />
				<label htmlFor="uppercase">Großschrift</label>

				<input id="lowercase" type="radio" name="textCase" value="lowercase" checked={textCase === "lowercase"} onChange={(e) => setTextCase(e.target.value)} />
				<label htmlFor="lowercase">KleinSchrift</label>
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