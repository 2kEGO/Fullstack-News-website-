import "./Body.css"
import { useEffect, useState } from "react";

export default function Body() {

    const apiKey = import.meta.env.VITE_API_KEY;
    // const secret = import.meta.env.VITE_SECRET;

    
    const fetchData = async () => {
        const section = "art";
        
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
        try {
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log(data.results); // Process the data as needed
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
                <div className="content-item-left"></div>
                <div className="content-item-right"></div>
            </div>
            
            <div className="content-right-container"></div>
        </div>
        </>
    )
}