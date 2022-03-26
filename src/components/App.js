import React, { useState } from "react";
import Involvement from "./Involvement";
import ExperimentalSkills from "./ExperimentalSkills";
import Rate from "./Rate";
import SeekingHelp from "./SeekingHelp";
import Attainment from "./Attainment";
import Carelessness from "./Carelessness";
import Summary from "./Summary";

const App = () => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("Male");
	const [semester, setSemester] = useState("One");

	const [involementRating, setInvolementRating] = useState(0);
	const [attainmentRating, setAttainmentRating] = useState(0);
	const [experimentRating, setExperimentRating] = useState(0);
	const [helpSeekingRating, setHelpSeekingRating] = useState(0);
	const [carelessnessRating, setCarelessnessRating] = useState(0);
	const [improvement, setImprovement] = useState("");
	const [copyButton, setCopyButton] = useState("Copy to Clipboard");

	let pronoun;
	if (gender === "Male") {
		pronoun = ["he", "him", "his"];
	}
	if (gender === "Female") {
		pronoun = ["she", "her", "her"];
	}

	const resetStars = (event) => {
		console.log("hi");
		setAttainmentRating(0);
		setInvolementRating(0);
		setExperimentRating(0);
		setHelpSeekingRating(0);
		setCarelessnessRating(0);
		setImprovement("");
		setName("");
		setCopyButton("Copy to Clipboard");
	};

	const copyToClipboard = (e) => {
		navigator.clipboard
			.writeText(document.getElementById("output").innerText)
			.then(function () {
				setCopyButton("Copied! 😃");
				setTimeout(function () {
					setCopyButton("Copy to Clipboard");
				}, 1000);
			});
	};
	return (
		<div className='app'>
			<div className='title-button'>
				<h1>Report Generator</h1>
			</div>
			<div className='flex-container'>
				<div className='input-container'>
					<div className='inputs-stars'>
						Name:{" "}
						<input
							type='text'
							value={name}
							placeholder='Type a name'
							autoFocus
							onChange={(event) => setName(event.target.value)}
						/>
						<br />
						<br />
						Gender: {gender}
						<div onChange={(event) => setGender(event.target.value)}>
							<input type='radio' value='Male' name='gender' /> Male{" "}
							<input type='radio' value='Female' name='gender' /> Female
						</div>
						<br />
						Semester: {semester}
						<div onChange={(event) => setSemester(event.target.value)}>
							<input type='radio' value='One' name='semester' /> One{" "}
							<input type='radio' value='Two' name='semester' /> Two
						</div>
						<br />
						<h2>Student Evaluation</h2>
						Attainment: {attainmentRating}
						<Rate
							rating={attainmentRating}
							onRating={(rate) => setAttainmentRating(rate)}
						/>
						<br />
						Involvement: {involementRating}
						<Rate
							rating={involementRating}
							onRating={(rate) => setInvolementRating(rate)}
						/>
						<br />
						Experimental Skill: {experimentRating}
						<Rate
							rating={experimentRating}
							onRating={(rate) => setExperimentRating(rate)}
						/>
						<br />
						Seeks Clarification & Support: {helpSeekingRating}
						<Rate
							rating={helpSeekingRating}
							onRating={(rate) => setHelpSeekingRating(rate)}
						/>
						<br />
						Care on Assessments: {carelessnessRating}
						<Rate
							rating={carelessnessRating}
							onRating={(rate) => setCarelessnessRating(rate)}
						/>
						<br />
					</div>
					<div className='improvements'>
						<h2>Area to Improve:</h2>
						<div className='flex-container-improve'>
							<div
								onChange={(event) => setImprovement(event.target.value)}
								className='radio'>
								<input type='radio' value='Engagement' name='improvement' />{" "}
								Engagement
								<br />
								<br />
								<input
									type='radio'
									value='Seeking Support'
									name='improvement'
								/>{" "}
								Seeking Support
								<br />
								<br />
								<input
									type='radio'
									value='Care on Assessments'
									name='improvement'
								/>{" "}
								Care on Assessments
								<br />
								<br />
								<input
									type='radio'
									value='Vocabulary'
									name='improvement'
								/>{" "}
								Vocabulary
								<br />
								<br />
								<input type='radio' value='Momentum' name='improvement' />{" "}
								Momentum
								<br />
								<br />
								<input
									type='radio'
									value='Revision Strategies'
									name='improvement'
								/>{" "}
								Revision Strategies
								<br />
								<br />
								<input
									type='radio'
									value='Revision Schedule'
									name='improvement'
								/>{" "}
								Revision Schedule
								<br />
								<br />
								<input type='radio' value='Resources' name='improvement' />{" "}
								Resources
								<br />
								<br />
								<input
									type='radio'
									value='Speaking in Class'
									name='improvement'
								/>{" "}
								Speaking in Class
							</div>
						</div>
						<button className='btn-border-pop' onClick={copyToClipboard}>
							{copyButton}
						</button>
						<button onClick={resetStars} className='btn-border-pop'>
							Reset Report
						</button>
					</div>
				</div>
				<h2 className='report-title'>Report:</h2>
				<div className='output' id='output'>
					<Attainment
						attainmentRating={attainmentRating}
						name={name}
						semester={semester}
					/>
					<Involvement
						involementRating={involementRating}
						name={name}
						pronoun={pronoun}
						attainmentRating={attainmentRating}
					/>
					<ExperimentalSkills
						experimentRating={experimentRating}
						name={name}
						pronoun={pronoun}
					/>
					<Carelessness
						carelessnessRating={carelessnessRating}
						name={name}
						pronoun={pronoun}
					/>
					<SeekingHelp
						helpSeekingRating={helpSeekingRating}
						name={name}
						pronoun={pronoun}
					/>
					<Summary improvement={improvement} name={name} pronoun={pronoun} />
				</div>
			</div>
		</div>
	);
};
export default App;
