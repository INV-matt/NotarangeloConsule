import logo from "../imgs/logo.png"
import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

    const menuToggleIcon = document.querySelector('#toggle-menu');

    const ToggleMenu = () => {
        const _ = document.querySelector('.menu');
        _.classList.toggle('act');
        menuToggleIcon.classList.toggle('act')
    } 

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/about" className="brand">
                        <img className="logo" src={logo} alt=""></img>
                        { !s_screen && (<p className="name">NotaForPresident</p>)}
                </Link>
                
                <div id="link_list">
                    
                    { s_screen && (<>
                        <div className="menu act" id="menu">
                            <ul className="list">
                                <li>
                                    <Link className="page_link" to="/">
                                        <p className="nerd-icons pg_icons"></p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="page_link" to="/desk">
                                        <p className="nerd-icons pg_icons"></p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="page_link" to="/bulletin">
                                        <p className="nerd-icons pg_icons"></p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </>)
                    }
                    
                    { !s_screen && (<> 
                        <Link className="page_link" to="/">
                            <p className="nerd-icons pg_icons"></p>
                        </Link>
                        
                        <Link className="page_link" to="/desk">
                            <p className="nerd-icons pg_icons"></p>
                        </Link>
                        <Link className="page_link" to="/bulletin">
                            <p className="nerd-icons pg_icons"></p>
                        </Link> 
                        </>)
                    }

                    <button className="page_link theme-switch" onClick={ToggleTheme}>
                        <i className="ri-sun-line sun-icon pg_icons"></i>
                        <i className="ri-moon-line moon-icon pg_icons"></i>
                    </button>
                        
                    { s_screen &&
                        (<button className="page_link" id="toggle-menu" onClick={ToggleMenu}>
                            <i className="ri-menu-3-line open-menu-icon pg_icons"></i>
                            <i className="ri-close-menu close-menu-icon pg_icons"></i>
                        </button>)
                    }

                </div>

            </nav>
        </header>
    );
}

export default Header;