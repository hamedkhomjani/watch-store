import React, { Component } from "react";
import "./ambassadors.css";

export default class Ambassadors extends Component {
    render() {
        return (
            <div className="ambassadors">
                <h1>Ambassadors</h1>
                <div className="ambassador">
                    <img className="ambassador-image" src="./assets/images/ambassadors/trae-young.webp" alt="Trae Young" />
                    <div className="ambassador-text">
                        <h3>Trae Young</h3>
                        <p>Trae Young represents the latest addition to the Tissot ambassador family. At his young age, he already took over as the new floor general of the Atlanta Hawks, leading his team like a maestro displaying impressive poise combined with flashy and innovative skills. Trae is the next generation, setting sights on record breaking achievements and innovative basketball play.</p>
                    </div>
                </div>

                <div className="ambassador">
                    <div className="ambassador-text">
                        <h3>Klay Thompson</h3>
                        <p>Tissot is delighted to welcome talented NBA player Klay Thompson to the Tissot family. The three-time NBA Champion has also claimed an Olympic gold medal and an NBA 3-point contest, as well as playing a vital role in the Golden State Warriors’ success, helping his team claim their third championship in the past four years alone. Klay himself says: “Tissot is a brand that embodies both performance and reliability, which are two critical parts of my game on and off the court.”</p>
                    </div>
                    <img className="ambassador-image" src="./assets/images/ambassadors/klay-thompson.webp" alt="Klay Thompson" />
                </div>

                <div className="ambassador">
                    <img className="ambassador-image" src="./assets/images/ambassadors/tony-parker.webp" alt="Tony Parker" />
                    <div className="ambassador-text">
                        <h3>Tony Parker</h3>
                        <p>Tony Parker was a French professional basketball player with the San Antonio Spurs and Charlotte Hornets of the National Basketball Association (NBA). He was selected by the San Antonio Spurs with the 28th overall pick in the draft and quickly became their starting point guard. Parker has helped the Spurs win four NBA championships in 2003, 2005, 2007 and 2014. Tony Parker says: " I don't like wasting time, which is why I am the ambassador for Tissot."</p>
                    </div>
                </div>

                <div className="ambassador">
                    <div className="ambassador-text">
                        <h3>Arthur Chen</h3>
                        <p>Arthur Chen’s life has already inspired his fans to dream and to live without limits and with infinite possibilities. His credo is imagine and pursue your imagination. In his World, “my time is mine to decide”. Reflecting this belief, his work and his life perfectly mirror Tissot’s attitude towards time. Arthur grew up in China and entered the entertainment world at an early age, performing in his first film Sacrifice when he was only 10. Since then, he has won numerous awards as he embraces the challenge of playing characters with different personalities. His aim for new challenges echoes Tissot’s claim of being “Innovators by Tradition”.</p>
                    </div>
                    <img className="ambassador-image" src="./assets/images/ambassadors/arthur-chen.webp" alt="Arthur Chen" />
                </div>


                <div className="ambassador" >
                    <img className="ambassador-image" src="./assets/images/ambassadors/liu-yifei.webp" alt="Liu Yifei" />
                    <div className="ambassador-text">
                        <h3>Liu Yifei</h3>
                        <p>Liu Yifei is a  famous Chinese actress and singer who studied at the Performance Institute of the Beijing Film Academy. She started her acting career in 2002, when she was only 15 years old. She very quickly gained in popularity thanks to her amazing performances and incredible charm onscreen while playing various roles.</p>
                    </div>
                </div>

            </div>
        );
    }
}