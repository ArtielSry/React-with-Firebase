import firebaseApp from '../credencials.js';
import { getAuth, signOut } from 'firebase/auth';
import style from './home.module.css';
import { useEffect, useState } from 'react';

// destructuring de lo que necesitamo de firebase
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
	setDoc
} from 'firebase/firestore';
import User from './User.jsx';
import FormCreatePlan from './FormCreatePlan.jsx';
import ListOfPlans from './ListOfPlans.jsx';

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const Home = ({ emailUser }) => {
	// valores al inicio
	const initialValue = {
		plan: '',
		place: '',
		more: '',
		date: ''
	};

	// variables de estado
	const [plan, setPlan] = useState(initialValue);
	const [list, setList] = useState([]);
	const [subId, setSubId] = useState('');

	// función para capturar inputs
	const capturingInput = e => {
		const { name, value } = e.target;
		setPlan({ ...plan, [name]: value });
	};

	// función para enviar los datos a la base de datos - POST
	const savePlan = async e => {
		e.preventDefault();
		if (subId === '') {
			try {
				await addDoc(collection(db, 'plans'), {
					...plan
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			await setDoc(doc(db, 'plans', subId), {
				...plan
			});
		}

		setPlan({ ...initialValue });
		setSubId('');
	};

	// funcion para renderizar la lista de planes - GET
	useEffect(() => {
		const getList = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'plans'));
				const docs = [];
				querySnapshot.forEach(doc => {
					docs.push({ ...doc.data(), id: doc.id });
				});
				setList(docs);
			} catch (error) {
				console.log(error);
			}
		};

		getList();
	}, [list]); // SE RENDERIZA CADA VEZ QUE HAYA CAMBIOS EN LIST

	// funcion para eliminar el plan - DELETE
	const deletePlan = async id => {
		await deleteDoc(doc(db, 'plans', id));
	};

	// funcion para actualizar el plan - PUT
	const updatePlan = async id => {
		try {
			const docRef = doc(db, 'plans', id);
			const docSnap = await getDoc(docRef);
			setPlan(docSnap.data());
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (subId !== '') updatePlan(subId);
	}, [subId]);

	return (
		<>
			<User emailUser={emailUser} signOut={signOut} auth={auth} />
			<div className={style.containerFirst}>
				<FormCreatePlan
					savePlan={savePlan}
					capturingInput={capturingInput}
					plan={plan.plan}
					place={plan.place}
					more={plan.more}
					subId={subId}
					date={plan.date}
				/>
				<ListOfPlans list={list} deletePlan={deletePlan} setSubId={setSubId} />
			</div>
		</>
	);
};

export default Home;
