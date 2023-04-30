import React from 'react'
import './css/infobox.css'


function Infobox(props) {

    return (

        <div className="container_3 sc tag" onClick={() => {
            props.i(!props.p)
        }}>

            <article className="arti">
                <div className="under">

                    <h1 className="title">
                        {props.data_3.name}
                    </h1>
                    <p className="details">
                        {props.data_3.description.substring(0, 170)} . .
                    </p>

                    <h1 className="date">
                        {props.data_3.date_time}
                    </h1>
                    <h1 className="registration">
                        {props.data_3.prize} ₹/prize pool
                    </h1>
                </div>
            </article>

        </div>

    )
}

export default Infobox
