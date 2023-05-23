import { BookCardsGrid } from "../BookCardsGrid"
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"

const SearchBookPage = () => {
    return (
        <div className="page-container">

            <MainHeader />
            <MainMenu/>
            <BookCardsGrid/>
        </div>

        
    )
}
export default SearchBookPage