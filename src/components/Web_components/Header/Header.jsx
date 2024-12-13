import "./Header.css"

import IconMagnifyingGlass from "../../Icon_Magnifying_Glass/IconMagnifyingGlass"
import IconAccountOutline from '../../IconAccountOutline/IconAccountOutline.jsx';
import IconHamburgerMenu from '../../IconHamburgerMenu/IconHamburgerMenu';

let isShow = false;

export default function Header() {
    

    function toggleSearch (){
        
        
        if (isShow) {
            document.getElementById('input-search1').style.display = 'none';
            document.getElementById('input-search2').style.display = 'none';
            isShow = false;   
        }
        else {
            document.getElementById('input-search1').style.display = 'flex';
            document.getElementById('input-search2').style.display = 'flex';
            isShow = true;   
        }
    }

    return (
    <>
        <header id="header-top">

            <div className="top-header" id="top-header">

                <div className="searchbar-section">

                    <div className="button-container" >
                        <button onClick={toggleSearch}>
                            <IconMagnifyingGlass />
                        </button>
                    </div>

                    <div className="search-toggle"  >
                        <input type="text" placeholder="SEARCH" id="input-search1"/>
                        <button id="input-search2">GO</button>
                    </div>
                    
                </div>

                <div className="region-section">
                    <ul>
                        <li><a href="#">U.S.</a></li>
                        <li><a href="#">INTERNATIONAL</a></li>
                        <li><a href="#">CANADA</a></li>
                        <li><a href="#">ESPANOL</a></li>
                        <li><a href="#">CHINA</a></li>
                        
                    </ul>
                </div>

                <div className="account-section">
                    <a href="" id="account-section-text"><span>SUBSCRIBE FOR $0.50 (CDN)/WEEK</span></a>
                    <a href="" id="account-section-text2"><span>LOG IN</span></a>
                </div>

                
                
            </div>

            <div className="title-header">
                <div className="title-left">
                    <div className="time-date">
                        <h3></h3>
                        <h3></h3>
                    </div>
                    <div className="hamburger">
                        <IconHamburgerMenu/>
                    </div>
                </div>
                <div className="title-middle">
                    <h1></h1>
                </div>
                <div className="title-right">
                    <div className="trade-info">
                        <h3></h3>
                    </div>
                    <div className="personal-account">
                        <button>
                            <IconAccountOutline/>
                        </button>
                    </div>
                </div>


            </div>

            <div className="navigation-bar"></div>
        </header>
    </>
    
    )
 
}