import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Button from "./button.jsx";
import Display from "./display.jsx";


//create your first component
const App = () => {
	const [tiempo, setTiempo] = useState({u:0, d:0, c:0, um:0, dm:0, cm:0, umm:0}); // u = unidad , d = decena, c = centena, um = unidad de mil, dm = decena de mil, cm = centena de mil , um = unidad de millon
	const [intervalo, setIntervalo] = useState(); // indica cada cuanto se renderiza(con start se renderiza a 10ms)
	const [estado, setEstado] = useState(0)
	//  en estado --> useState = 0, --> no a empezado
	//  en estado --> useState = 1, --> a empezado
	//  en estado --> useState = 2, --> esta en pausa
	
	const start = () => {
		run();
		setEstado(1);
		setIntervalo(setInterval(run, 10));
	};
	useEffect(() => {
		start()
	}, [1000])

	var updatedU = tiempo.u, updatedD = tiempo.d, updatedC = tiempo.c, updatedUm = tiempo.um, updatedDm = tiempo.dm, updatedCm = tiempo.cm, updatedUmm = tiempo.umm;
	const run  = () => {
		if(updatedCm === 10){
			updatedUmm++;
			updatedCm = 0;
		}
		if(updatedDm === 10){
			updatedCm++;
			updatedDm = 0;
		}
		if(updatedUm === 10){
			updatedDm++;
			updatedUm = 0;
		}
		if(updatedC === 10){
			updatedUm++;
			updatedC = 0;
		}
		if(updatedD === 10){
			updatedC++;
			updatedD = 0;
		}
		if(updatedU === 100){
			updatedD++;
			updatedU = 0;
		}
		updatedU++;
		return setTiempo({u: updatedU, d: updatedD, c: updatedC, um: updatedUm, dm: updatedDm, cm: updatedCm, umm: updatedUmm})
	};

	const stop = () => {
		clearInterval(intervalo);
		setEstado(2);
	};
	const reset = () => {
		clearInterval(intervalo);
		setEstado(0);
		setTiempo({u: 0, d: 0, c: 0, um: 0, dm: 0, cm: 0, umm:0})
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
