import React, { useState } from "react";
import './card.css';
import link from '../assets/link.png';
import { copy, tick } from "../assets";

export default function Card({ title, subtitle, background, websiteLink }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(websiteLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1250);
        });
    };

    return (
        <div className="cardContainer p-2">
            <div className="card" style={{ backgroundImage: `url(${background})` }}>
                <div className="cardBody">
                    <div className="cardText">
                        <h4 className="cardTitle">{title}</h4>
                        <p className="cardSubtitle">{subtitle}</p>
                    </div>
                    <div className="links">
                        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="link">
                            <img src={link} alt="Link to Website" className="website"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="link_card mt-2">
                <div className='copy_btn' onClick={handleCopy}>
                    <img src={copied ? tick : copy} alt="copy icon" className='w-[40%] h-[40%] object-contain'/>
                </div>
                <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                    {websiteLink}
                </p>
            </div>
        </div>
    );
}
