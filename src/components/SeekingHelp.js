const SeekingHelp = ({ helpSeekingRating, name, pronoun }) => {
	switch (helpSeekingRating) {
		case 0:
			return "";
		case 1:
			return `${name} would benefit by asking more questions during lessons to clarify ${pronoun[2]} understanding of more complex topics rather than carrying forward misconceptions into future classes. `;
		case 2:
			return `${name} will occasionally ask questions in lessons, but needs to enhance this positive behaviour by seeking additional support, either by asking more questions or seeking help outside of class to clarify any misconceptions. `;
		case 3:
			return `${
				pronoun[0][0].toUpperCase() + pronoun[0].substring(1)
			} has been proactive in the past, seeking support during breaks; however, ${name} needs to make seeking support a routine part of ${
				pronoun[2]
			} study process, both inside and outside of lessons. `;
		case 4:
			return `${name} will frequently send questions after class or seek support during breaks in ${pronoun[2]} spare time. `;
		case 5:
			return `${name} has deeply invested in doing ${pronoun[2]} best and will routinely stay behind in class, send questions or seek support during breaks to clarify all misunderstandings. `;
		default:
			return "";
	}
};

export default SeekingHelp;
