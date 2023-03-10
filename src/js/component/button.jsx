import React from "react";

const Button = (props) => {
	return (
        <div className="text-center">
            {(props.estado === 0) ? 
            <button type="button" className="btn btn-success btn-lg m-2" onClick={props.start}>Start</button> : ""
            }
            {(props.estado === 1) ?
            <div>
                <button type="button" className="btn btn-danger btn-lg m-2" onClick={props.stop}>Stop</button>
                <button type="button" className="btn btn-warning btn-lg m-2" onClick={props.reset}>Reset</button>
            </div> : ""
            }
            {(props.estado === 2) ?
            <div>
                <button type="button" className="btn btn-success btn-lg m-2" onClick={props.resume}>Resume</button>
                <button type="button" className="btn btn-warning btn-lg m-2" onClick={props.reset}>Reset</button>
            </div> : ""
            }
        </div>
        
    )
};

export default Button;