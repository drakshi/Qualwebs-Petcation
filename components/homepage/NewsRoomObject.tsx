import React from "react";
import { strings } from "../../public/lang/Strings";

type IProps = {
  image: string;
  title: string;
  desciption: string;
  date: string;
};

const NewsRoomObject: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div className="events-details">
        <div className="event-img">
          <img src="images/img2.jpg" className="img-fluid" />
        </div>
        <div className="care-details">
          <div className="d-flex justify-content-between">
            <div className="care-btn">
              <h6 className="mb-0">{strings.Petcare}</h6>
            </div>
            <div>
              <p className="mb-0 font-10">{props.date}</p>
            </div>
          </div>
        </div>
        <div className="event-title">
          <h6 className="font-semibold">{props.title}</h6>
          <p className="font-12">{props.desciption}</p>
          <a
            href="http://159.65.142.31/petcation-design/single-blog.html"
            className="btn btn-primary border-btn px-3 py-1"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsRoomObject;
