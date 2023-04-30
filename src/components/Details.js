import React, { useState, useEffect, useCallback } from 'react'
import "./css/details.css"
// import axios from '../axios.js'

import {
    useParams,
} from "react-router-dom";
import { getTournamentDetails } from '../services';


function Details() {
    let { page } = useParams();
    //calling for data
    const [data, setdata] = useState({ 
        "name": "", 
        "description": "", 
        "date_time": "", 
        "timeline": "", 
        "submission": "", 
        "rules": "", 
        "registration": "", 
        "contact": "", 
        "prize": "", 
        "amount": "", 
        "open_closed": "", 
        "link": "" })

    const getData = useCallback(
        async () => {
            let data = await getTournamentDetails({ id: page })
            setdata(data??{})
        },
        [setdata, page],
    )

    useEffect(() => {
        getData()
        // axios.get(`${parseInt(page)}`).then((res) => {
        //     setdata(res.data)
        // })
    }, [page, getData])
    const [linked, setLinked] = useState(false)

    useEffect(() => {
        if (data.open_closed === "1") {
            setLinked(true)
        }
    }, [data])


    document.addEventListener("scroll", function () {
        let a = document.getElementsByClassName("last")
        for (let i = 0; i < a.length; i++) {
            let tag = a[i];
            let pageTop = window.pageYOffset
            let pageBottom = pageTop + window.screen.height;

            if (tag.offsetTop < pageBottom - 300) {
                tag.classList.add("visible_1")
            } else {
                tag.classList.remove("visible_1");
            }
        }
    });


    document.addEventListener("scroll", function () {
        let a = document.getElementsByClassName("part_1")

        for (let i = 0; i < a.length; i++) {
            let tag = a[i];
            let pageTop = window.pageYOffset
            let pageBottom = pageTop + window.screen.height;

            if (tag.offsetTop < pageBottom - 300) {
                tag.classList.add("visible_1")
            } else {
                tag.classList.remove("visible_1");
            }
        }
    });
    
    return (
        <div className="details" id="top_1">
            <div className="top" >
                <p className="main_1">{data.name}</p>

            </div>
            <div className="mid">
                { data.date_time && <div className="part_1 tag_1">
                    <p className="left_1"> Date & Time</p>
                    <p className="right_1">{data.date_time}</p>
                </div> }

                { data.description && <div className="part_1  tag_1">
                    <p className="left_1"> Description</p>
                    <p className="right_1">{data.description}</p>
                </div> }

                { data.timeline && <div className="part_1  tag_1">
                    <p className="left_1"> Timeline</p>
                    <p className="right_1">{data.timeline}</p>
                </div> }

                { data.submission && <div className="part_1  tag_1">
                    <p className="left_1">Submission</p>
                    <p className="right_1">{data.submission}</p>
                </div> }

                { data.rules && <div className="part_1  tag_1">
                    <p className="left_1">Rules</p>
                    <p className="right_1">{data.rules}</p>
                </div>}

                { data.registration && <div className="part_1  tag_1">
                    <p className="left_1">Registration</p>
                    <p className="right_1">{data.registration}</p>
                </div> }

                { data.contact && <div className="part_1  tag_1">
                    <p className="left_1">Contact</p>
                    <p className="right_1">{data.contact}</p>
                </div>}
            </div>

            <div className="last tag_1">
                <p className="prize">PRIZE WORTH ₹{data.prize}</p>
                <p className="regis">REGISTRATION ₹{data.amount} PER TEAM</p>
                <p className="interest">INTRESTED?</p>
                {
                    linked ? (
                        <a href={linked} className="regi">REGISTER NOW . . .</a>
                    ) :
                        <a href=" " className="regi">REGISTRATION CLOSED . . .</a>
                }
            </div>
        </div>
    )
}

export default Details
