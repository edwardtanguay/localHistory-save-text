import { useState } from 'react';

export const TextFormWithHistory = () => {
	const [textCase, setTextCase] = useState('uppercase');
	return (
		<div>
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
	)
};