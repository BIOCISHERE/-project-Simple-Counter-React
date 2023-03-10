import React, {Component, useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Button from "./button.jsx";
import Display from "./display.jsx";


//create your first component
const App = () => {
	const [tiempo, setTiempo] = useState({s:0, m:0, h:0});
	const [intervalo, setIntervalo] = useState();
	const [estado, setEstado] = useState(0)
	// useState = 0, --> no a empezado
	// useState = 1, --> a empezado
	// useState = 2, --> esta en pausa
	
	const start = () => {
		run();
		setEstado(1);
		setIntervalo(setInterval(run, 1000));
	};
	useEffect(() => {
		start()
	}, [1000])

	var updatedS = tiempo.s, updatedM = tiempo.m, updatedH = tiempo.h;
	const run  = () => {
		if(updatedM === 60){
			updatedH++;
			updatedM = 0;
		}
		if(updatedS === 60){
			updatedM++;
			updatedS = 0;
		}
		updatedS++;
		return setTiempo({s: updatedS, m: updatedM, h: updatedH})
	};

	const stop = () => {
		clearInterval(intervalo);
		setEstado(2);
	};
	const reset = () => {
		clearInterval(intervalo);
		setEstado(0);
		setTiempo({s: 0, m: 0, h: 0})
	};
	const resume = () => start();


	return (
		<div className="caja">
			<div className="cajaReloj">
				<div className="Reloj">
					<Display tiempo={tiempo} />
					<Button estado={estado} resume={resume} reset={reset} stop={stop} start={start}/>
				</div>
			</div>
		</div>
	);
};

export default App;
