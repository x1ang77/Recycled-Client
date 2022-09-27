import React, { useState, Fragment } from "react";
import {
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import locIcon from "../images/location.svg";

const Location = () => {
    const [mapRef, setMapRef] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    // const [center, setCenter] = useState({
    //     lat: 44.076613,
    //     lng: -98.362239833,
    // });
    const [zoom, setZoom] = useState(5);
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [infoOpen, setInfoOpen] = useState(false);

    const { isLoaded } = useLoadScript({
        // Enter your own Google Maps API key
        googleMapsApiKey: "AIzaSyB-aYU6D9LKJvNfHNo9_Nd6CZwVD78wEZY",
    });

    const myPlaces = [
        {
            id: "Deposit 1",
            pos: { lat: 5.416505, lng: 100.336568 },
        },
        {
            id: "Deposit 2",
            pos: { lat: 5.42273, lng: 100.324397 },
        },
        {
            id: "Deposit 3",
            pos: { lat: 5.404502, lng: 100.312139 },
        },
    ];

    const fitBounds = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        myPlaces.map((place) => {
            bounds.extend(place.pos);
            return place.id;
        });
        map.fitBounds(bounds);
    };

    const loadHandler = (map) => {
        // Store a reference to the google map instance in state
        setMapRef(map);
        // Fit map bounds to contain all markers
        fitBounds(map);
    };

    const markerLoadHandler = (marker, place) => {
        return setMarkerMap((prevState) => {
            return { ...prevState, [place.id]: marker };
        });
    };

    const markerClickHandler = (event, place) => {
        // Remember which place was clicked
        setSelectedPlace(place);

        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);

        // If you want to zoom in a little on marker click
        if (zoom < 13) {
            setZoom(13);
        }

        // if you want to center the selected Marker
        //setCenter(place.pos)
    };

    const renderMap = () => {
        return (
            <>
                <div className="flex justify-center ">
                    <img src={locIcon} alt="" />
                    <h2 className="text-green-800 font-bold text-4xl my-3 mx-2">
                        Drop-Off Locations
                    </h2>
                </div>
                <Fragment>
                    <GoogleMap
                        // Do stuff on map initial laod
                        onLoad={loadHandler}
                        // Save the current center position in state
                        // onCenterChanged={() =>
                        //     setCenter(mapRef.getCenter().toJSON())
                        // }
                        // Save the user's map click position
                        onClick={(e) => setClickedLatLng(e.latLng.toJSON())}
                        // center={center}
                        zoom={zoom}
                        mapContainerStyle={{
                            height: "70vh",
                            width: "100%",
                        }}
                    >
                        {myPlaces.map((place) => (
                            <Marker
                                key={place.id}
                                position={place.pos}
                                onLoad={(marker) =>
                                    markerLoadHandler(marker, place)
                                }
                                onClick={(event) =>
                                    markerClickHandler(event, place)
                                }
                                // Not required, but if you want a custom icon:
                                icon={{
                                    path: "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",
                                    fillColor: "#0000ff",
                                    fillOpacity: 1.0,
                                    strokeWeight: 0,
                                    scale: 1.25,
                                }}
                            />
                        ))}

                        {infoOpen && selectedPlace && (
                            <InfoWindow
                                anchor={markerMap[selectedPlace.id]}
                                onCloseClick={() => setInfoOpen(false)}
                            >
                                <div>
                                    <h3>{selectedPlace.id}</h3>
                                    <div>
                                        Set location to deposit your recycled
                                        items
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                    {/* Our center position always in state
                    <h3>
                        Center {center.lat}, {center.lng}
                    </h3> */}
                    {/* Position of the user's map click */}
                    {/* {clickedLatLng && (
                        <h3>
                            You clicked: {clickedLatLng.lat},{" "}
                            {clickedLatLng.lng}
                        </h3>
                    )}
                    {/* Position of the user's map click */}
                    {/* {selectedPlace && (
                        <h3>Selected Marker: {selectedPlace.id}</h3>
                    )} */}
                </Fragment>

                <div class="container my-12 mx-auto px-4 md:px-12 flex">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
                        <div className="my-1 px-1 mx-2 py-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12 shadow-2xl rounded-lg">
                            <h1 className="font-bold text-3xl">Location 1</h1>
                            <h2>
                                Address: 152, Lebuh Carnarvon, George Town,
                                10100 George Town, Pulau Pinang, Malaysia{" "}
                            </h2>
                            <h2 className="py-3">Opening Times: 8am - 6pm</h2>
                            <a href="https://www.google.com/maps/dir//Forward+School,+2,+Lebuh+Acheh,+Georgetown,+10300+George+Town,+Penang/@5.4140968,100.3349923,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x304ac349409f38cd:0xa0ccd7a8be794d3a!2m2!1d100.337172!2d5.4140881">
                                <button className="bg-blue-600 rounded p-2 my-2 text-white ">
                                    Go there now
                                </button>
                            </a>
                        </div>
                        <div className="my-1 px-1 py-4 mx-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12 shadow-2xl rounded-lg">
                            <h1 className="font-bold text-3xl">Location 2</h1>
                            <h2>
                                Address: Harmony View, Taman Desa Green, 11600
                                Jelutong, Pulau Pinang, Malaysia
                            </h2>
                            <h2 className="py-3">Opening Times: 8am - 6pm</h2>
                            <a href="https://www.google.com/maps/dir//Forward+School,+2,+Lebuh+Acheh,+Georgetown,+10300+George+Town,+Penang/@5.4140968,100.3349923,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x304ac349409f38cd:0xa0ccd7a8be794d3a!2m2!1d100.337172!2d5.4140881">
                                <button className="bg-blue-600 rounded p-2 my-2 text-white">
                                    Go there now
                                </button>
                            </a>
                        </div>
                        <div className="my-1 px-2 py-4 mx-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12 shadow-2xl rounded-lg">
                            <h1 className="font-bold text-3xl">Location 3</h1>
                            <h2>
                                Address: Jalan Burma, 10450 George Town, Pulau
                                Pinang, Malaysia
                            </h2>

                            <h2 className="my-3">Opening Times: 8am - 6pm</h2>
                            <a href="https://www.google.com/maps/dir//Forward+School,+2,+Lebuh+Acheh,+Georgetown,+10300+George+Town,+Penang/@5.4140968,100.3349923,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x304ac349409f38cd:0xa0ccd7a8be794d3a!2m2!1d100.337172!2d5.4140881">
                                <button className="bg-blue-600 rounded p-2 my-2 text-white">
                                    Go there now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    return isLoaded ? renderMap() : null;
};

export default Location;
