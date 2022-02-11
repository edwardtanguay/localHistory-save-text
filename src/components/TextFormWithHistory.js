import { useState } from 'react';

export const TextFormWithHistory = () => {
	const [textCase, setTextCase] = useState('uppercase');
	const [text, setText] = useState('');
	
	const handleButtonClick = () => {
		const textForHistory = textCase === 'uppercase' ? text.toUpperCase() : text.toLowerCase();
		console.log(textForHistory);
	}
	
	return (
		<div>
			<form>
				<input id="uppercase" type="radio" name="textCase" value="uppercase" checked={textCase === "uppercase"} onChange={(e) => setTextCase(e.target.value)} />
				<label htmlFor="uppercase">Großschrift</label>

				<input id="lowercase" type="radio" name="textCase" value="lowercase" checked={textCase === "lowercase"} onChange={(e) => setTextCase(e.target.value)} />
				<label htmlFor="lowercase">KleinSchrift</label>
			</form>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={(e) => handleButtonClick(e)}>In History hinzufügen</button>
			<div className="history">
				History:
				<div className="content">

				</div>
			</div>
		</div>
	)
};