const Summary = ({ improvement, name, pronoun }) => {
	switch (improvement) {
		case "Engagement":
			return `${name} could improve most by engaging more during class discussions and asking more questions to clarify ${pronoun[2]} understanding. With more engagement, ${name} will continue to progress in Science.`;
		case "Seeking Support":
			return `With more support, ${name} will continue to make progress in Science.`;
		case "Care on Assessments":
			return `With more care and improved strategies for proofreading ${pronoun[2]} tests, ${name} will develop further in Science.`;
		case "Vocabulary":
			return `${name} would benefit greatly from increasing ${pronoun[2]} use of Quizlet to develop ${pronoun[2]} vocabulary in Science and taking more opportunities in lessons to practice using it in English. With further development of ${pronoun[2]} language skills, ${name} will continue to progress in Science.`;
		case "Momentum":
			return `These excellent habits, developed over many years, are being rewarded with outstanding grades in all of ${pronoun[2]} assessments. ${name} should endeavour to maintain this momentum in the coming years.`;
		case "Revision Strategies":
			return `${name} should use his time to practice questions, instead of memorising material from OneNote. With more thoughtful revision strategies, ${name} will continue to progress in Science.`;
		case "Revision Schedule":
			return `${name} would benefit greatly from regularly reviewing the material so that coursework and revision do not accumulate until it becomes stressful. With more a strategic revision schedule and confidence in asking for support, ${name} will continue to progress in Science.`;
		case "Resources":
			return ` ${name} would benefit greatly from more regularly reviewing the material using the range of resources developed to support ${pronoun[2]}. With better utilisation of ${pronoun[2]} revision resources, ${name} will continue to progress in Science.`;
		case "Speaking in Class":
			return `${name} should aim to develop ${pronoun[2]} articulation of scientific ideas further, as this will extend ${pronoun[2]} understanding and build skills which will be crucial in ${pronoun[2]} future. With more involvement in class, ${name} will continue to make progress in Science.`;
		default:
			return "";
	}
};

export default Summary;
