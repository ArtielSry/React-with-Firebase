import LogoutIcon from '@mui/icons-material/Logout';
import style from './user.module.css'

const User = ({emailUser, signOut, auth}) => {
	return (
		<div className={style.user}>
			<p>Welcome {emailUser}!</p>
			<div className={style.green}></div>
			<button className={style.btnExit} onClick={() => signOut(auth)}>
				{' '}
				<LogoutIcon />
			</button>
		</div>
	);
};

export default User;
