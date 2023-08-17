import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import './styles/App.css';

import firebaseApp from './credencials.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function App() {
	const [user, setUser] = useState(null);

	onAuthStateChanged(auth, userFirebase => {
		if (userFirebase) {
			setUser(userFirebase);
		} else {
			setUser(null);
		}
	});

	return <>{user ? <Home emailUser={user.email} /> : <Login />}</>;
}

export default App;
