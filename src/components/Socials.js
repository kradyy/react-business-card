import React from 'react'
import TwitterIcon from '../images/Twitter Icon.svg'
import FacebookIcon from '../images/Facebook Icon.svg'
import InstagramIcon from '../images/Instagram Icon.svg'
import GithubIcon from '../images/GitHub Icon.svg'

export default function Socials() {
    return (
        <ul class="business-card--socials">
            <li class="twitter">
                <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
            </li>
            <li class="facebook">
                <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
            </li>
            <li class="instagram">
                <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
            </li>
            <li class="github">
                <a href="#"><img src={GithubIcon} alt="Github" /></a>
            </li>
        </ul>
    )
}