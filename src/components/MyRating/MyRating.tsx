import { setBooksRating } from "../../redux/action-creators";
import Star from "../Icons/Star";
import "./MyRating.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';

const MyRating = (arg: any) => {
	const { myRating, isbn13, visibleStatus } = arg;
	const dispatch = useDispatch()

	const [rating, setRating] = useState(myRating);
	const [rateVisible, setRateVisible] = useState(visibleStatus);
	let starArr = [];
	let rate = +rating;

	for (let i = 0; i < 5; i++) {
		if (rate > 1) {
			starArr.push(1);
			rate -= 1;
		} else if (rate > 0) {
			starArr.push(rate);
			rate = 0;
		} else {
			starArr.push(0);
		}
	}

	const handleToggleVisible = () => {
		console.log(rateVisible);
		if (rateVisible) { 
			setRating(0);
			dispatch(setBooksRating(isbn13, 0))
		} 
		setRateVisible(!rateVisible)
	};

	const handleChangeRating = (e: any) => {
		setRating(e.target.value);
		dispatch(setBooksRating(isbn13, e.target.value))
	};

	return (
		<div className="my-rating">
			<label className="my-rating__label" >
				<input className="my-rating__input" type="checkbox" checked={rateVisible} onChange={handleToggleVisible} />
				Add my rating
			</label>
			<div className="my-rating__container" data-visible={rateVisible}>
				{starArr.map((el: number, index: number) => {
					return (
						<div key={index} className="star-container">
							<Star width="37" height="37" color="#cfcfcf" />
							<div
								className="gold-star"
								style={{ width: `${el * 28}px`, height: "37px" }}>
								<Star width="37" height="37" color="blue" />
							</div>
						</div>
					);
				})}
                <input
                    className="my-range-number"
					type="number"
					min="0"
					max="5"
					step=".1"
					value={`${rating}`}
					onChange={handleChangeRating}
				/>

				<input
					className="star-range"
					type="range"
					min="0"
					max="5"
					step=".1"
					value={`${rating}`}
					onChange={handleChangeRating}
				/>
			</div>
		</div>
	);
};
export default MyRating;
