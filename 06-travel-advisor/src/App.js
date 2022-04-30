import React, {useEffect, useState} from "react";
import {CssBaseline, Grid} from "@material-ui/core"
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { withStyles } from '@material-ui/core/styles';

import { getPlacesData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({lat:0, lng:0});
    const [bounds, setBounds] = useState(null);
    
    // useEffect(async () => {
    //     const data = await getPlacesData(bounds.sw, bounds.ne);
    //     console.log(data, "API Data");
    //     setPlaces(data);
    // }, [coordinates, bounds])
    
    useEffect(async() => {
        await navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
            setCoordinates({lat:latitude, lng:longitude});
        })
    }, [])
    return (
    <div>
    <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width:"100%"}}>
            <Grid item xs={12} md={4}>
                <List places={places} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                 setCoordinates={setCoordinates}
                 setBounds={setBounds}
                 coordinates={coordinates}
                 />
            </Grid>
        </Grid>
    </div>
    )
}

export default App;