import { faq } from "../../public/appData/AppData";

export default function FAQ() {
  return (
    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
      <div className="events-details latest-news">
        <div className="news-bg d-flex justify-content-between">
          <div>
            <h3 className="mb-0 font-semibold text-white">FAQs</h3>
          </div>
          <div className="my-auto">
            <a href="#" className=" text-white">
              See all
            </a>
          </div>
        </div>

        <div className="scrollbar" id="style-8">
          <div className="force-overflow">
            <div className="accordion">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {faq.map((value, index) => (
                  <div key={index} className="panel panel-default">
                    <div
                      className="panel-heading"
                      role="tab"
                      id={"heading" + value.id}
                    >
                      <h3 className="panel-title mb-0">
                        <a
                          className="collapsed"
                          role="button"
                          title=""
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={"#collapse" + value.id}
                          aria-expanded="true"
                          aria-controls={"collapse" + value.id}
                        >
                          {value.question}
                        </a>
                      </h3>
                    </div>
                    <div
                      id={"collapse" + value.id}
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby={"heading" + value.id}
                    >
                      <div className="panel-body content">
                        <p>{value.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
