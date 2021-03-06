import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Rate = ({ count, rating, color, onRating }) => {
	const [hoverRating, setHoverRating] = useState(0);

	const starRating = useMemo(() => {
		const getColor = (index) => {
			if (hoverRating >= index) {
				return color.filled;
			} else if (!hoverRating && rating >= index) {
				return color.filled;
			}

			return color.unfilled;
		};
		return Array(count)
			.fill(0)
			.map((_, i) => i + 1)
			.map((idx) => (
				<FaStar
					key={idx}
					className='cursor-pointer'
					icon='star'
					onClick={() => onRating(idx)}
					style={{ color: getColor(idx) }}
					onMouseEnter={() => setHoverRating(idx)}
					onMouseLeave={() => setHoverRating(0)}
				/>
			));
	}, [color.filled, color.unfilled, count, hoverRating, onRating, rating]);

	return <div>{starRating}</div>;
};

Rate.propTypes = {
	count: PropTypes.number,
	rating: PropTypes.number,
	onChange: PropTypes.func,
	color: PropTypes.object,
};

Rate.defaultProps = {
	count: 5,
	rating: 0,
	color: {
		filled: "#0047AB",
		unfilled: "#DADBDD",
	},
};

export default Rate;
