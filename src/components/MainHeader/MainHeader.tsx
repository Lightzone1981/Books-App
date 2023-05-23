import { CartButton } from '../CartButton'
import { UserAvatar } from '../UserAvatar'
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="logo">IT-BOOKS</div>
            <UserAvatar/>
            <CartButton/>
        </div>
    )
}
export default MainHeader