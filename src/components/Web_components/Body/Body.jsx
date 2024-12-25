import "./Body.css"
import "./Body2.css"
import React, { useEffect, useState, Component } from "react";

export default function Body() {

    const apiKey = import.meta.env.VITE_API_KEY;
    // const secret = import.meta.env.VITE_SECRET;

    const [hotNews, setHotNews] = useState([])

    const [sideNews, setSideNews] = useState([])

    
    const fetchDataUs = async () => {
        const section = "home";
        
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
        
        try {
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();

            const pepsi = data.results;
            const worldNews = pepsi.filter(article => article.section === 'us')
            

            setHotNews(worldNews)
            

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchDataSide = async () => {
        const section1 = "movies";
        
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${section1}.json?api-key=${apiKey}`;
        
        try {
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            
            const pepsi = data.results;
            console.log(pepsi)

            const bsNews = pepsi.filter(article => article.section === `${section1}`)
            console.log(bsNews)

            setSideNews(bsNews)

            

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchDataUs();
        fetchDataSide();
    }, []);


    return (
        <>
        <div className="body">
            <div className="content-left-container ">

                <div className="section">

                    <div className="content-item-left">

                        <div className="content">
                            <a href={hotNews && hotNews[0]?.url}>

                                <h1>{hotNews && hotNews[0]?.title}</h1>
                                <p>{hotNews && hotNews[0]?.abstract}</p>
                                <h5>{hotNews && hotNews[0]?.byline}</h5>

                            </a>
                        </div>

                        <hr />

                        <div className="content">
                            <a href={hotNews && hotNews[1]?.url}>

                                <h1>{hotNews && hotNews[1]?.title}</h1>
                                <p>{hotNews && hotNews[1]?.abstract}</p>
                                <h5>{hotNews && hotNews[1]?.byline}</h5>

                            </a>
                        </div>
                        
                    </div>

                    <div className="content-item-right">
                    <img src={hotNews && hotNews[0]?.multimedia[0].url} alt="" />
                    <h6>{hotNews && hotNews[0]?.multimedia[0].copyright}</h6>
                    </div>

                </div>
                
                <hr />

                <div className="undersection">

                    <div className="undersection-content">
                        <a href={hotNews && hotNews[2]?.url}>
                            <h1>{hotNews && hotNews[2]?.title}</h1>
                            <p>{hotNews && hotNews[2]?.byline}</p>
                        </a>                        
                    </div>

                    <hr />

                    <div className="undersection-content">
                        <a href={hotNews && hotNews[3]?.url}>
                            <h1>{hotNews && hotNews[3]?.title}</h1>
                            <p>{hotNews && hotNews[3]?.byline}</p>
                        </a>
                    </div>
                    
                </div>

            </div>

            
            <div className="content-right-container">
                <div className="content-right-wrapper">

                    <div className="top-stories">

                        <div className="media-section">
                            <a href={sideNews && sideNews[0]?.url}>
                                <img src={sideNews && sideNews[0]?.multimedia[0].url} alt="" />
                                <p>{sideNews && sideNews[0].byline}</p>
                                <h1>{sideNews && sideNews[0].title}</h1>
                                <p>{sideNews && sideNews[0].abstract}</p>
                            </a>
                            
                        </div>

                        <div className="content-section">
                            <a href="">
                                <h1></h1>
                                <p></p>
                                <p></p>
                            </a>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}