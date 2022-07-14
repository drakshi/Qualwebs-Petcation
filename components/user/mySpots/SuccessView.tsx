import { useRouter } from "next/router";
import React from "react";

export default function SuccessView() {
  const router = useRouter();
  return (
    <div className="bg-white main-background successful">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className="successfully-details text-center">
            <div className="success-checkmark text-center mb-4">
              <img
                src="/images/confirm.png"
                className="img-fluid"
                alt="checkmark"
              />
            </div>
            <h5 className="font-20 font-semibold">Spot listed successfully</h5>
            <p className="font-14 font-medium">
              We have received your spot listing request, our moderator will get
              back to you once reviewed your spot profile.
            </p>
            <div className="spot-btn1">
              <button
                onClick={() => router.push('/user/my-spots/add-pet-spot')}
                className="btn btn-primary"
              >
                Add another spot
              </button>
            </div>
            <div className="back">
              <a href="/user/my-spots" className="font-14 font-semibold">
                Go to spot list
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
