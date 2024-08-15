import React from "react";
import ReactPlayer from "react-player/youtube"
import getYouTbeID from "get-youtube-id";

export default function Video({link}){
    console.log(link)
    
    return (

        <>
            <ReactPlayer url={link}> /</ReactPlayer>
        </>
    );
}