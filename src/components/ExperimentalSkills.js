const ExperimentalSkills = ({ experimentRating, name, pronoun }) => {
	switch (experimentRating) {
		case 0:
			return "";
		case 2:
			return `Whilst ${pronoun[0]} does take part in experiments, ${pronoun[0]} has difficulty following directions and therefore requires continuous support from ${pronoun[2]} peers. `;
		case 1:
			return `${
				pronoun[0][0].toUpperCase() + pronoun[0].substring(1)
			} is eager to conduct experiments and learn more through practical work. However, ${name} does not bring the necessary maturity and self-discipline to complete practical work without continuous monitoring. `;
		case 3:
			return `When conducting experiments, ${name} is enthusiastic and works well with ${pronoun[2]} classmates, however ${pronoun[0]} could improve by approaching experiments more methodically and with greater care. `;
		case 4:
			return `During experiments, ${name} demonstrates ${pronoun[2]} maturity and care, and will generally produce outstanding results to support ${pronoun[2]} understanding. `;
		case 5:
			return `Furthermore, ${name} conducts experiments methodically with great attention to detail and will frequently assist other students. `;
		default:
			return "";
	}
};

export default ExperimentalSkills;
