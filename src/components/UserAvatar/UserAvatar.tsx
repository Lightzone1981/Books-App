import "./UserAvatar.css";
import UserIcon from "../Icons/UserIcon";
import { IUserAvatar } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import { Link } from "react-router-dom";
import { setProfileModalVisibleStatus } from "../../redux/action-creators";

const UserAvatar = () => {
	const dispatch = useDispatch();
	const authorizedUserName = useSelector(
		(state: IStoreState) => state.user.authorizedUser.username	);

	return (
		<div
			className="user-avatar"
			onClick={() => dispatch(setProfileModalVisibleStatus(true))}
			>
			{authorizedUserName === "" ? (
				<div className="user-avatar__button" title="Sign In">
						<UserIcon width="20" height="20" color="#fff" />
				</div>
			) : (
				<>
					<div className="user-avatar__container"  title="Your profile">
						<div className="user-avatar__short-name">
							{authorizedUserName[0]}
						</div>
						<span className="user-avatar__name">{authorizedUserName}</span>
					</div>
				</>
			)}
		</div>
	);
};

export default UserAvatar;
