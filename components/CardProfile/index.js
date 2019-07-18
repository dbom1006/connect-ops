import css from "./styles.scss";
import Link from "next/link";

const CardProfile = ({ profile }) => {
	return (
		<div className={css.profile}>
			<a><img src={profile.avatar} title={profile.name}></img></a>
			<p>{profile.name}</p>
		</div>
	);
}

export default CardProfile;