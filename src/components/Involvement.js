const Involvement = ({ involementRating, name, pronoun }) => {
	switch (involementRating) {
		case 0:
			return "";
		case 1:
			return `In lessons, ${pronoun[0]} is reserved and reluctant to ask questions or answer them unless addressed directly. `;
		case 2:
			return `In lessons, ${pronoun[0]} is usually quiet, but will make thoughtful contributions when called upon. `;
		case 3:
			return ` In lessons, ${pronoun[0]} is good-humoured and makes frequent contributions to class discussions but hesitates to ask questions to clarify ${pronoun[2]} understanding. `;
		case 4:
			return `In lessons, ${pronoun[0]} frequently contributes to class discussions and will regularly ask questions to develop a better understanding. `;
		case 5:
			return `In lessons, ${pronoun[0]} frequently contributes thoughtful and well-considered responses to questions. `;
		default:
			return "";
	}
};

export default Involvement;
