import style from './formCreatePlan.module.css';

// eslint-disable-next-line react/prop-types
const FormCreatePlan = ({
	savePlan,
	capturingInput,
	plan,
	place,
	more,
	subId,
}) => {
	return (
		<div className={style.containerCreate}>
					
					<h2>{subId === '' ? 'Create plan' : 'Update plan'}</h2>
					
					<form onSubmit={savePlan}>
						<div className={style.containerForm}>
							<input
								type='text'
								name='plan'
								placeholder='What'
								onChange={capturingInput}
								value={plan}
								required
							></input>
							<input
								type='text'
								name='place'
								placeholder='Where'
								onChange={capturingInput}
								value={place}
							></input>
							<textarea
								name='more'
								placeholder='More about'
								onChange={capturingInput}
								value={more}
								maxLength='50'
							></textarea>
							<button>{subId === '' ? 'Save plan' : 'Update plan'}</button>
						</div>
					</form>
				</div>
	);
};


export default FormCreatePlan;
