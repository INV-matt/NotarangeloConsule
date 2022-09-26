const About = ({ s_screen }) => {
    
    
    return (
        <div>
            {!s_screen &&  (
                <div className="about">

                    <div className="abt-profile box" style={{width: 650}} >
                        <p className="name">Michele Ferdinando Notarangelo</p>
                        <ul className="abt-links">
                            <a rel="noreferrer" target="_blank" href="mailto:micheleferdinando.notarangelo@liceocalini.edu.it" className="nerd-icons"></a>
                            <a rel="noreferrer" target="_blank" href="https://discordapp.com/users/736160149462581308" className="nerd-icons">ﭮ</a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/inv_matt/" className="nerd-icons"></a>
                        </ul>
                    </div>

                    <div className="abt-profile box" style={{width: 650}} >
                        <p className="name">Il Programmatore</p>
                        <ul className="abt-links">
                            <a rel="noreferrer" target="_blank" href="mailto:https://matteomarini888@gmail.com" className="nerd-icons"></a>
                            <a rel="noreferrer" target="_blank" href="https://discordapp.com/users/622438595835461633" className="nerd-icons">ﭮ</a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/inv_matt/" className="nerd-icons"></a>
                        </ul>
                    </div>

                </div>
            )}
            {s_screen && (
                <div className="about s_about fl-dr-column">

                    <div className="abt-profile box" style={{height: 200}} >
                        <p className="name">Michele Notarangelo</p>
                        <ul className="abt-links">
                            <a rel="noreferrer" target="_blank" href="mailto:micheleferdinando.notarangelo@liceocalini.edu.it" className="nerd-icons"></a>
                            <a rel="noreferrer" target="_blank" href="https://discordapp.com/users/736160149462581308" className="nerd-icons">ﭮ</a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/inv_matt/" className="nerd-icons"></a>
                        </ul>
                    </div>

                    <div className="abt-profile box" style={{height: 200}} >
                        <p className="name">Il Programmatore</p>
                        <ul className="abt-links">
                            <a rel="noreferrer" target="_blank" href="mailto:https://matteomarini888@gmail.com" className="nerd-icons"></a>
                            <a rel="noreferrer" target="_blank" href="https://discordapp.com/users/622438595835461633" className="nerd-icons">ﭮ</a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/inv_matt/" className="nerd-icons"></a>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
}


export default About;