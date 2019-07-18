import css from "./styles.scss";

const CardCover = ({ cover }) => {
	const logo = '/static/images/favv.png';
	return (
		<div className={css.cover}>
			<img src={cover.cover} title={cover.name}></img>
			<div className={css.overlay}>
				<div><img src={logo}></img></div>
				<div>
					<p className={css.name}>{cover.name}</p>
					<p>{cover.description}</p>
				</div>
			</div>
		</div>
	);
}

export default CardCover;