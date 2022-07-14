import Link from "next/link";
import { newsAndEvents } from "../../public/appData/AppData";
import { strings } from "../../public/lang/Strings";

export default function EventAndNews() {
  return (
    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
      <div className="events-details latest-news">
        <div className="news-bg d-flex justify-content-between">
          <div>
            <h3 className="mb-0 font-semibold text-white">
              {strings.eventsAndUpdates}
            </h3>
          </div>
          <div className="my-auto">
            <Link href="/static/Press">
              <a className="text-white">{strings.Seeall}</a>
            </Link>
          </div>
        </div>

        <div className="scrollbar" id="style-8">
          <div className="force-overflow">
            {newsAndEvents.map((value, index) => (
              <Link
                key={index}
                href="/static/Single-News-Event"
              >
                <div key={value.key} className="news-details">
                  <span style={{ fontSize: "11px" }}>{value.posted}</span>
                  <p className="font-12 mb-0 font-normal">{value.post}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
