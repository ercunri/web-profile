import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div class="flex gap-4 pt-3">
            <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
           
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/ercunri"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}