import { strings } from "../../public/lang/Strings";

export default function WhyChoosePetcation() {
  return (
    <div className="bg-white padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-lg-8 col-xl-9 mx-auto">
            <div className="text-center main-title">
              <h2 className="font-semibold">{strings.whyChoosePetcation}</h2>
              <p className="mb-0">{strings.findThePerfectHouseKeeper}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="why-choose text-center">
              <div className="icons-verify">
                <img src="images/verified.png" className="img-fluid" />
              </div>
              <h3 className="my-3 font-semibold">{strings.verifiedSitters}</h3>
              <p className="font-14 mb-0">
                {strings.allPetcationSittersHavePassedOur}
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="why-choose text-center">
              <div className="icons-verify">
                <img src="images/insurance.png" className="img-fluid" />
              </div>
              <h3 className="my-3 font-semibold">{strings.professionalCare}</h3>
              <p className="font-14 mb-0">
                {strings.yourPetsSafetyIsOurTopPriority}
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="why-choose text-center">
              <div className="icons-verify">
                <img src="images/support.png" className="img-fluid" />
              </div>
              <h3 className="my-3 font-semibold">{strings.s247support}</h3>
              <p className="font-14 mb-0">
                {strings.WeAreHereToHelpYouAndYourPet}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
