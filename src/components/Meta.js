import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, fab);

export default function Meta() {
    return (
        <div className="business-card--meta">
            <h1>Christopher Johansson</h1>
            <p className="business-card--meta_title">Frontend Developer</p>
            <p className="business-card--meta_website">chris.website</p>

            <div className="business-card--meta_buttons">
                <a href="#" className="btn btn-white">
                    <FontAwesomeIcon icon="envelope" size="1x" />
                    Email</a>
                <a href="#" className="btn btn-blue">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" />
                    LinkedIn</a>
            </div>
        </div>
    )
}