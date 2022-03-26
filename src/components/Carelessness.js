const Carelessness = ({ carelessnessRating, name, pronoun }) => {
	switch (carelessnessRating) {
		case 0:
			return "";
		case 1:
			return `${name} will rarely reflect ${pronoun[2]} understanding in written assessments due to misreading or mininterpreting questions. `;
		case 2:
			return `${name} frequently misreads questions during tests and consequently, ${pronoun[2]} results rarely reflect the understanding ${pronoun[0]} possesses during lessons. `;
		case 3:
			return `${name} can improve most by approaching assessments and tests more calmly to enhance ${pronoun[2]} care with reading and improve the clarity of ${pronoun[2]} writing. `;
		case 4:
			return `On assessments, ${name} will occasionally deviate from the scope of the question being asked which often detracts from the fluency and coherency on ${pronoun[2]} response.  `;
		case 5:
			return `${name} demonstrates excellent exam technique and will write highly detailed and relevant responses to questions. `;
		default:
			return "";
	}
};

export default Carelessness;
