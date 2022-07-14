import { strings } from "../../../public/lang/Strings";

export default function NewsFeed() {
  return (
    <div className="bg-white main-background pr-0">
      <div className="row mb-3">
        <div className="col-12 col-md-7 col-lg-7 col-xl-8 my-auto">
          <h6 className="mb-0 font-semibold">{strings.NewsFeeds}</h6>
        </div>
      </div>
      <div className="news-content">
        <div className="news-section">
          <div className="news-feeds-details">
            <div className="d-flex">
              <div className="news-img">
                <img src="/images/dash-img1.png" className="img-fluid" alt="" />
              </div>
              <div className="news-details my-3">
                <h6 className="font-12 mb-2">
                  Alex <span>provided feedback for completing the job</span> day
                  sitting for moly on 21st July 2021
                </h6>
                <p className="mb-0 font-8">19 days ago</p>
              </div>
            </div>
          </div>

          <div className="news-feeds-details">
            <div className="d-flex">
              <div className="news-img">
                <img src="/images/img3.png" className="img-fluid" alt="" />
              </div>
              <div className="news-details my-3">
                <h6 className="font-12 mb-2">
                  {" "}
                  <span>
                    You are getting noticed! 3 potential clients seen your
                    profile.
                  </span>
                </h6>
                <p className="mb-0 font-8">about 19hours ago</p>
              </div>
            </div>
          </div>

          <div className="posted-details">
            <div className="earn-section post-section">
              <p className="mb-0 font-8 text-white">
                Posted on 07/10/2021, 3PM
              </p>
            </div>
            <p className="font-12 mb-0 px-2">
              Petcation website will be on maintenance from 3PM to 6PM on
              21July 2021 (Japan Time). We apologise for the inconvinience
              caused.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
