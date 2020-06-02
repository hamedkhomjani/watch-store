import React, { Component } from "react";
import "./history.css";

export default class History extends Component {
    render() {
        return (
            <div className="history">
                <h1>History</h1>

                <h3>Early History</h3>
                <p>Tissot was founded in 1853 by Charles-Félicien Tissot and his son Charles-Émile Tissot in the Swiss city of Le Locle, in the Neuchâtel area of the Jura Mountains.[3] Charles-Emile Tissot left for Russia in 1858 and succeeded in selling their savonnette pocket watches across the Russian Empire.[5] Tissot merged with Omega in 1930 and Tissot-Omega watches from this era are sought after by collectors.</p>
                <p>Tissot was used for downhill skiing in Switzerland in 1938 and the Davis Cup in 1957. Tissot's first engagement as an official timekeeper was in 1938 where they timed a series of Ski races in Villars-sur-Ollon, near the company's hometown in the Jura mountains.</p>

                <img  src="./assets/images/early-history.webp" alt="Early History"/>

                <h3>Recent Development</h3>
                <p>Tissot has been a subsidiary of the Swiss Swatch Group since 1983, the largest watch producer and distributor in the world.[4][6] After joining Swatch, Tissot was still based in Le Locle, Switzerland and marketed in 160 countries around the world. Tissot watches are currently classified by the Swatch Group as "mid-range market" products.</p>
                <p>Tissot is an official timekeeper for the world championships in cycling, motorcycling, fencing and ice hockey, etc. Tissot was also a key sponsor for the Formula One teams Lotus, Renault, and Sauber. For early events, handheld stopwatches were sufficient to provide official timings. Today, Tissot works with various sporting bodies to develop systems to produce ever more accurate timings for specific events. In competitive cycling, for instance, sensors are placed on the bikes and track which are then linked by computers to provide track timings and performance data.</p>
                <p>Tissot also unveiled its brand new worldwide campaign, 'Tissot, This is Your Time'. The message at the heart of the campaign emphasises the watch that relates to the milestones in one's life. A new tagline, new visuals and powerful communication all serve to emphasise Tissot's position in the market.</p>

                <img src="./assets/images/recent-development.webp" alt="Recent Development" />
            </div>
        );
    }
}