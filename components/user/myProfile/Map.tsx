import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import React , { useState  } from "react";
import {position} from "dom-helpers";
import { useRouter } from "next/router";
import {I_SEARCH_SITTER} from "../../../models/searchSitter.interface";

const {
  StandaloneSearchBox,
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");
interface I_PROPS {
    props: I_SEARCH_SITTER;
    serviceId: any;
    getSitter: any;
    petType: any;

}


const MyMapComponent = withScriptjs(
  withGoogleMap((props: any) => {
    let latlong = JSON.parse(JSON.stringify(props.latlng ? props.latlng.length ? props.latlng[0] : props.latlng: { lat: -34.397, lng: 150.644 }));
    const [showInfo , setShowInfo] = useState(false)
      const [info , setInfo] = useState([]);
      const router = useRouter();

   const handleClick = (index) =>{
       let path = { pathname: "/sitter-profile/" + props.data[index].id, query: {serviceId: props.serviceId}  }
       router.push(path)
   }

    const handleMouseOver = (index) => {
          setShowInfo(true)
        setInfo(props.data[index].firstname+props.data[index].lastname)

      }
    const handleMouseExit = () =>{
        setShowInfo(false)
    }
    return (
      <GoogleMap
        defaultZoom={15}
        zoom={15}
        center={latlong}
        onClick={props.onChangeLatLng}
      >
        <>
          {props.latlng && props.latlng.length ? props.latlng.map((val, index)=>
                  <Marker
              key={index}
              onDragEnd={props.onChangeLatLng}
              animation={2}
              draggable={props.draggable}
              position={val}
              onMouseOver={(e)=>handleMouseOver(index)}
              onMouseOut={handleMouseExit}
              onClick={(e)=>{handleClick(index)}}
          />
              ):<Marker
              onDragEnd={props.onChangeLatLng}
              animation={2}
              draggable={props.draggable}
              position={latlong}
          />
          }
            {showInfo && <div style={{ position: "relative",
                display: "inline-block",
                borderBottom: "1px dotted black"}}>
                <p style={{width: "120px",
                    backgroundColor: "lightgray",
                    top:"-330px",
                    left:"330px",
                    color: "black",
                    textAlign: "center",
                    padding: "5px 0",
                    borderRadius: "6px",
                    position: "absolute",
                    zIndex: "1"}}> {info}</p>
            </div>}
        </>
      </GoogleMap>
    );
  })
);

export default MyMapComponent;
