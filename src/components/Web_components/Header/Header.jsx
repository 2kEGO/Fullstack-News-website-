import "./Header.css"

import IconMagnifyingGlass from "../../Icon_Magnifying_Glass/IconMagnifyingGlass"

export default function Header() {
    
    return (
    <>
        <header>

            <div className="top-header">

                <div className="searchbar-section">

                    <button>
                        <IconMagnifyingGlass />
                    </button>

                    <input type="text" placeholder="SEARCH"/>
                    <button>GO</button> 


                    {/* <div className="button-container">
                        <button>
                            <IconMagnifyingGlass />
                        </button>
                    </div>

                    <div className="search-toggle">
                        <input type="text" placeholder="SEARCH"/>
                        <button>GO</button>
                    </div> */}
                    
                </div>

                <div className="region-section">
                    <ul>
                        <li><a href="#">U.S</a></li>
                        <li><a href="#">INTERNATIONAL</a></li>
                        <li><a href="#">CANADA</a></li>
                        <li><a href="#">ESPANOL</a></li>
                        <li><a href="#">CHINA</a></li>
                        
                    </ul>
                </div>

                <div className="account-section">
                    <span><a href="">SUBSCRIBE FOR $0.50 (Cdn)/WEEK</a></span>
                    <span><a href="">LOG IN</a></span>
                </div>
                
            </div>

            <div className="title-header"></div>

            <div className="navigation-bar"></div>
        </header>
    </>
    
    )
 
}