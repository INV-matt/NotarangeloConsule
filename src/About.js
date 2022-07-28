const About = ({s_screen}) => {
    return (
        <div>
            { !s_screen && (
                <div className="about">

                    <div className="abt-profile">
                        <p className="name">Michele Notarangelo</p>
                        <ul className="abt-links">
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                            <a href="https://discordapp.com/users/622438595835461633" className="nerd-icons">ﭮ</a>
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                        </ul>
                    </div>

                    <div className="abt-profile">
                        <p className="name">Matteo Marini</p>
                        <ul className="abt-links">
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                            <a href="https://discordapp.com/users/622438595835461633" className="nerd-icons">ﭮ</a>
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                        </ul>
                    </div>

                </div>
            )}
            { s_screen && (
                <div className="about s_about fl-dr-column">

                    <div className="abt-profile">
                        <p className="name">Michele Notarangelo</p>
                        <ul className="abt-links">
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                            <a href="https://discordapp.com/users/622438595835461633" className="nerd-icons">ﭮ</a>
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                        </ul>
                    </div>

                    <div className="abt-profile">
                        <p className="name">Matteo Marini</p>
                        <ul className="abt-links">
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                            <a href="https://discordapp.com/users/622438595835461633" className="nerd-icons">ﭮ</a>
                            <a href="https://matteomarini888@gmail.com" className="nerd-icons"></a>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
}
 
export default About;