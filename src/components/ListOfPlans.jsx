import style from './listOfPlans.module.css';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const ListOfPlans = ({ list, deletePlan, setSubId }) => {
	return (
		<div className={style.containerList}>
			{list.map(lst => (
				<div key={lst.id} className={style.card}>
					<div className={style.cardInfo}>
						<p className={style.date}>{lst.date}</p>
						<div className={style.cardInfoSpan}>
							<p>Plan: {lst.plan}</p>
						</div>
						<div className={style.cardInfoSpan}>
							<p>Place: {lst.place}</p>
							<span>
								<PlaceOutlinedIcon />
							</span>
						</div>
						<div className={style.cardInfoSpan}>
							<p>More: {lst.more}</p>
						</div>
					</div>
					<div className={style.actions}>
						<button className={style.update} onClick={() => setSubId(lst.id)}>
							<EditOutlinedIcon />
						</button>
						<button className={style.delete} onClick={() => deletePlan(lst.id)}>
							<DeleteForeverOutlinedIcon />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListOfPlans;
