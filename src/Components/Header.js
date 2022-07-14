import logo from "../imgs/logo.png"

const Header = ({s_screen}) => {
    /*~~~~~THEME SELECTOR~~~~~*/
    var b = document.body;
    const currentTheme = localStorage.getItem('currentTheme');
    if (currentTheme){
        b.classList.add('light-theme');
    }
    
    const ToggleTheme = () => {
        b.classList.toggle('light-theme');
        if (b.classList.contains('light-theme')){
            localStorage.setItem('currentTheme', 'themeActive');
        } else {
            localStorage.removeItem('currentTheme');
        }
    }


    return (
        <header className="header">
            <nav className="navbar">
                <div className="brand">
                    <img className="logo" src={logo} alt=""></img>
                    { !s_screen && (<p className="name">NotaForPresident</p>)}                    
                </div>
                <button className="theme-switch" onClick={ToggleTheme}>
                    <i className="ri-sun-line sun-icon"></i>
                    <i className="ri-moon-line moon-icon"></i>
                </button>
            </nav>
        </header>
    );
}

export default Header;