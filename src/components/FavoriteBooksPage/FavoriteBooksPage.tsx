import { BookCardsGrid } from "../BookCardsGrid"
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"
import SubMenu from "../SubMenu/SubMenu"

const FavoriteBooksPage = () => {
    return (
        <div className="page-container">
            <MainHeader />
            <MainMenu />
            <SubMenu/>
            <BookCardsGrid/>
        </div>
        
    )
}
export default FavoriteBooksPage