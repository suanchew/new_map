import "./styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import * as mapboxgl from "mapbox-gl";
import settings from "./settings.json";
import custom from "./custom-style.json";

let map;

async function init() {
    
    const sites = await import("../data/sites.json");
    const neighborhoods = await import("../data/neighborhoods.json");
//waits for this to complete before next step

    const style = map.getStyle();

//use async call so no waiting for loads
    style.sources = {
        ...style.sources,
        ...custom.sources
    };
    style.layers.push(...custom.layers);
    map.setStyle(style);

    map.getSource("sites").setData(sites);
    map.getSource("neighborhoods").setData(neighborhoods);

// const sites imports from /data/sites.json 
}

mapboxgl.accessToken = settings.accessToken;
map = new mapboxgl.Map(settings);
map.on("load", init);
