import { CartButton } from '../CartButton'
import { UserAvatar } from '../UserAvatar'
import './MainHeader.css'
import { useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import Loader2 from '../LoaderBook/Loader2';

const MainHeader = () => {
    const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUser.username	);
    return (
        <div className="main-header">
            <Loader2/>
            <div className="logo">IT-BOOKS</div>
            {authorizedUserName ?
            <><UserAvatar/>
            <CartButton /></>
            : <></>
        }
        </div>
    )
}
export default MainHeader