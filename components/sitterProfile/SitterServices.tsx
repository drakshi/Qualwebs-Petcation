import { sitterServices } from "../../public/appData/AppData";
import { strings } from "../../public/lang/Strings";

export default function SitterServices(props: any) {
  return (
    <div className="bg-white main-background p-0 pb-2">
      <div className="sitter-services">
        <h3 className="mb-0">{`${props.name}’s Service`}s</h3>
      </div>
      <div className="sitter-services-details">
        {props.service.map((v,index) => {
          return (
            <div key={index} className="row mb-3">
              <div className="col-12 col-md-6 col-lg-6 col-xl-8">
                <h5 className="font-semibold">{v.service.name}</h5>
                <p className="mb-0 font-14">{""}</p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-4 alignment">
                <h5 className="font-semibold">{""}</h5>
                <p className="font-14 mb-0">{""}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="read-more">
          <a href="#">{strings.SeeAdditionalServicesRates}</a>
          <p className="font-12">Pick-up & drop-off, bathing / Grooming... </p>
        </div>
      </div>
    </div>
  );
}
