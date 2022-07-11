import React, { useState, useEffect } from 'react';

import logo from "./imgs/dike_blk_bg.png"

const Home = () => {

    // @media queries
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);


    const quotes = [
        {
            quote: "“Arriva il momento in cui bisogna scegliere tra ciò che è facile e ciò che è giusto.”",
            author: "Albus Percival Wulfric Brian Silente",
        },
        {
            quote: "“Time to conquer west Russia”",
            author: "Putin, probably",
        }
    ]
    const idx = Math.floor(Math.random() * quotes.length);

    return (
        <div>
            { matches && (<div className="home">
                    <img className="img" src={logo} alt=''/>
                    <div className="text debug">
                        <p className="quote">
                            {quotes[idx].quote}
                        </p>
                        <p className="author">{quotes[idx].author}</p>

                    </div>
                </div>)
            }

            { !matches && (<div className="s_home">
                    <img className="s_img" src={logo} alt=''/>
                    <div className="text debug">
                        <p className="quote">
                            {quotes[idx].quote}
                        </p>
                        <p className="author">{quotes[idx].author}</p>

                    </div>
                </div>)
            }
        </div>
    );
}
 
export default Home;