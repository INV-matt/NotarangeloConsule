import React, { useState, useEffect } from 'react';

import logo from "./imgs/dike_blk_bg.png"

const Home = () => {

    // @media queries
    const [s_screen, setS_screen] = useState(
        window.matchMedia("(max-width: 768px)").matches
      );

      
    useEffect(() => {
        window
        .matchMedia("(max-width: 768px)")
        .addEventListener('change', e => setS_screen( e.matches ));
    }, []);
        
    /*const [m_screen, setM_screen] = useState(
            window.matchMedia("(min-width: 768px)").matches
        );

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setS_screen( e.matches ));
    }, []);*/

    const quotes = [
        {
            quote: "“Arriva il momento in cui bisogna scegliere tra ciò che è facile e ciò che è giusto.”",
            author: "Albus Percival Wulfric Brian Silente",
        },
        {
            quote: "“Scegli il meglio, scegli E-CAMPUS. Ti aspecto!”",
            author: "Cristiano “THE SIUUUUU” Ronaldo",
        },
        
    ]
    const idx = Math.floor(Math.random() * quotes.length);

    return (
        <div>
            { !s_screen && (
                    <div className="home">
                        <div className="img-container">
                            <a href="https://youtu.be/QJJYpsA5tv8">
                                <img className="img" src={logo} alt=''/>
                            </a>
                        </div>
                        <div className="text">
                            <p className="quote">
                                {quotes[idx].quote}
                            </p>
                            <p className="author">{quotes[idx].author}</p>

                        </div>
                    </div>
                )
            }

            { s_screen && (
                    <div className="s_home">
                        <a href="https://youtu.be/QJJYpsA5tv8">
                            <img className="s_img" src={logo} alt=''/>
                        </a>
                        <div className="s_text">
                            <p className="quote">
                                {quotes[idx].quote}
                            </p>
                            <p className="author">{quotes[idx].author}</p>

                        </div>
                    </div>
                )
            }
        </div>
    );
}
 
export default Home;