import logo from './logo.svg';
import './App.css';
import { Message } from './Message';

function App() {
	const text = 'Компонент Message, отображающий переданный ему пропсом текст';
	return (
		<div className="App">
			<header className="App-header">
				<Message text={text} />
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
