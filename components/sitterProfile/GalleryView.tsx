import React from "react";

interface Iprops {
  images: any;
}

export default function GalleryView(props: Iprops) {
  return (
    <div className="bg-white main-background">
      <div className="row gallery-view1">
        <div className="gallery-img1">
          <div className="first-img">
            <img
              src={props.images.length > 0 ? props.images[0].path : null}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="gallery-img1">
          {props.images.slice(1, 4).map((value, index) => {
            return (
              <div className="image1">
                <img src={value.path} className="img-fluid" />
              </div>
            );
          })}
          {props.images.length > 4 ? (
            <div className="image1 spot-image pb-0">
              <img src={props.images[4].path} className="img-fluid" />
              <div className="overlay">
                <h3 className="mb-0">+</h3>
              </div>
            </div>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
}
