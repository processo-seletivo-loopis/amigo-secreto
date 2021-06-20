import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Title from './components/Title';
import Home from './components/Home';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';
import './App.css';

export default function App() {

	return (
		<BrowserRouter>
			<Title />
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/addFriend" component={AddFriend} />
				<Route path="/editFriend" component={EditFriend} />
			</Switch>
		</BrowserRouter>
	);
}