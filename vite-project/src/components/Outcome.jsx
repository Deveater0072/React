import React from "react";
import "./Outcome.css";

const Outcome = ({ count }) => {
	return (
		<h3 className="Outcome">
			<span className="one">K</span>
			<span className="two">L</span>
			<span className="three">I</span>
			<span className="four">K</span>
			<span className="five">N</span>
			<span className="six">I</span>
			<span className="seven">Ę</span>
			<span className="eight">C</span>
			<span className="nine">I</span>
      <span className="zero">A </span>
      <span className="counter"> {count}</span>
		</h3>
	);
};
export default Outcome;
