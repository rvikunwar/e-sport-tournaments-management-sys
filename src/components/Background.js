import React from 'react'
import './css/background.css'
import Particles from 'react-particles-js'
import particleconfig from '../config/particle-config.js'
function Background() {


    return (
        <div className="background_2" >
            <Particles height="100vh" width="100vw" config={particleconfig}/>
        </div>
    )
}

export default Background
