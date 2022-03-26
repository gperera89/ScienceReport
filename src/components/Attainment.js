const Attainment = ({ attainmentRating, name, semester }) => {
	switch (attainmentRating) {
		case 0:
			return "";
		case 1:
			return `${name} has made some progress in Science in Semester ${semester}. `;
		case 2:
			return `${name} has made inconsistent progress in Science in Semester ${semester}. `;
		case 3:
			return `${name} has made satisfactory progress in Science in Semester ${semester}. `;
		case 4:
			return `${name} has made good progress in Science in Semester ${semester}. `;
		case 5:
			return `${name} has made excellent progress in Science in Semester ${semester}. `;
		default:
			return "";
	}
};

export default Attainment;
