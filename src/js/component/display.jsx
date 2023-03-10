import React from "react";
import {FaClock} from 'react-icons/fa'

const Display = (props) => {
	return (
		<div className="text-center display-5 my-5">
            <span><FaClock /></span>&nbsp;
            <span>{(props.tiempo.h >= 10) ? props.tiempo.h : "0"+ props.tiempo.h}Hr</span>&nbsp;:&nbsp;
            <span>{(props.tiempo.m >= 10) ? props.tiempo.m : "0"+ props.tiempo.m}Min</span>&nbsp;:&nbsp;
            <span>{(props.tiempo.s >= 10) ? props.tiempo.s : "0"+ props.tiempo.s}Sec</span>&nbsp;
        </div>
	);
};

export default Display;