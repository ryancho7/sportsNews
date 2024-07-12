import React from "react";
import sinner from '../assets/sinner.jpg';
import spain from '../assets/spain.webp';
import usa from '../assets/teamusa.webp';
import './cards.css';
import Card from "./card";

export default function Cards() {
    return (
        <div className="cardBox">
            <Card 
                title="World No. 1 Jannik Sinner Defeated" 
                subtitle="CNN Sports" 
                background={sinner} 
                websiteLink="https://www.cnn.com/2024/07/09/sport/jannik-sinner-wimbledon-quarterfinals-daniil-medvedev-spt-intl/index.html" 
            />
            <Card 
                title="Team USA Basketball Roster" 
                subtitle="CBS Sports" 
                background={usa} 
                websiteLink="https://www.cbssports.com/nba/news/team-usa-basketball-roster-schedule-for-2024-olympics-as-lebron-james-kevin-durant-more-eye-gold-in-paris/" 
            />
            <Card 
                title="Spain beats France - Euro Final" 
                subtitle="CNN Sports" 
                background={spain} 
                websiteLink="https://www.cnn.com/2024/07/09/sport/spain-france-euro-2024-semifinal-lamine-yamal-spt-intl/index.html" 
            />
        </div>
    )
}