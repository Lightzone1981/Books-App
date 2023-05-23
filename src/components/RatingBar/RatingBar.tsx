import Star from '../Icons/Star';
import './RatingBar.css'

const RatingBar = (arg:any) => {
    const { rating } = arg
    let starArr = []
    let rate = +rating

    for (let i = 0; i < 5; i++){
        if (rate > 1) {
            starArr.push(1)
            rate -= 1
        } else if (rate > 0) {
            starArr.push(rate)
            rate =0
        } else {
            starArr.push(0)
        }
    }


    return (
        <div className="rate">
                {
                    starArr.map((el: number, index:number) => {
                        return <div key={index} className="star-container">
                            <Star width='16' height='16' color='#cfcfcf'/>
                            <div className="gold-star" style={{width:`${el*22}px`, height:'22px'}}>
                                <Star width='16' height='16' color='#ED8A19'/>
                            </div>
                        </div>
                    })
            }
            <span className="rate__count">{`(${rating}/5)`}</span>
        </div>
    )
}
export default RatingBar