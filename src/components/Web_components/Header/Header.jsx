import "./Header.css"
import "./Header2.css"
import "./Header3.css"

import IconMagnifyingGlass from "../../Icon_Magnifying_Glass/IconMagnifyingGlass"
import IconAccountOutline from '../../IconAccountOutline/IconAccountOutline.jsx';
import IconHamburgerMenu from '../../IconHamburgerMenu/IconHamburgerMenu';
import IconArrowsDown from '../../IconArrows_down/IconArrowsDown.jsx';

import { useState } from 'react'

let isShow = false;

export default function Header() {
    
    const [stock, setStock] = useState(['current'])
    const [currentDate, setCurrentDate] = useState(['today'])
    const [liveNews, setLiveNews] = useState(['Trumps', 'news'])

    const [region, setRegion] = useState(['U.S.','INTERNATIONAL', 'CANADA', 'ESPANOL', 'CHINA'])
    const [navItems, setNavItems] = useState(['U.S.', 'World', 'Business', 'Art', 'Lifestyle', 'Opinion', 'Audio', 'Games', 'Cooking', 'Wirecutter', 'The Athletic'])

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
                        {region.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
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
                        <h3>{currentDate}</h3>
                        <a href="#">Today&#39;s Paper</a>
                    </div>
                    <div className="hamburger" id="hamburger">
                        <IconHamburgerMenu/>
                    </div>

                </div>

                <div className="title-middle">
                    <a href="">
                        <h1>THE DAILY PROPHET</h1>
                    </a>
                </div>

                <div className="title-right">

                    <div className="trade-info">
                        <h3>{stock}</h3>
                    </div>

                    <div className="personal-account">
                        <button>
                            <IconAccountOutline/>
                        </button>
                    </div>
                </div>


            </div>

            <div className="navigation-bar">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                            <IconArrowsDown/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="live-bar">
                <ul>
                    <h5>LIVE</h5>
                    {liveNews.map((item, index ) => (
                        <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    ))}
                </ul>
                
                
            </div>
        </header>
    </>
    
    )
 
}