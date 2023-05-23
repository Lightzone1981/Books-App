import { BookCardsGrid } from "../BookCardsGrid"
import { MainHeader } from "../MainHeader"
import { MainMenu } from "../MainMenu"

const NewBookPage = () => {
    return (
        <div className="page-container">

            <MainHeader />
            <MainMenu/>
            <BookCardsGrid/>
        </div>

        
    )
}
export default NewBookPage