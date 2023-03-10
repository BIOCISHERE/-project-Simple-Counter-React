import React from "react";
import {FaClock} from 'react-icons/fa'

const Display = (props) => {
	return (
		<div className="text-center display-5 my-5">
            <span><FaClock /></span>&nbsp;
            <span>{props.tiempo.umm}</span>&nbsp;
            <span>{props.tiempo.cm}</span>&nbsp;
            <span>{props.tiempo.dm}</span>&nbsp;
            <span>{props.tiempo.um}</span>&nbsp;
            <span>{props.tiempo.c}</span>&nbsp;
            <span>{props.tiempo.d} Sec</span><br />
            <span><span>{props.tiempo.u} Ms</span></span>
                
            
        </div>
	);
};

export default Display;