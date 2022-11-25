import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/userOperations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.userData.name);
    const onExitBtnHandle = () => {
        dispatch(logOut());
    };
    return (
        <div className={s.userMenuWrapper}>
            <p className={s.loginName}>{userName}</p>
            <button className={s.exitBtn} type="button" onClick={onExitBtnHandle}>
                Exit
            </button>
        </div>
    );
};
export default UserMenu;