import "./Body.css"
import "./Body2.css"
import React, { useEffect, useState, Component } from "react";
import catImg from "../../../assets/catStanding.webp"

export default function Body() {

    const apiKey = import.meta.env.VITE_API_KEY;
    // const secret = import.meta.env.VITE_SECRET;

    const [hotNews, setHotNews] = useState([])


    
    const fetchData = async () => {
        const section = "home";
        
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
        
        try {
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log(data.results)

            const pepsi = data.results;
            const worldNews = pepsi.filter(article => article.section === 'us')
            console.log(worldNews)

            setHotNews(worldNews)
            

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
        <div className="body">
            <div className="content-left-container ">
                <div className="content-item-left">

                    <div className="content">
                        <a href={hotNews && hotNews[0]?.url}>

                            <h1>{hotNews && hotNews[0]?.title}</h1>
                            <p>{hotNews && hotNews[0]?.abstract}</p>
                            <h5>{hotNews && hotNews[0]?.byline}</h5>
        
                        </a>
                    </div>

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
            
            <div className="content-right-container"></div>
        </div>
        </>
    )
}