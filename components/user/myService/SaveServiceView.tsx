import Link from "next/link";
import React from "react";

export const SaveServiceView = ({ onSave, preview }) => {
  const getLink = () => {
    switch (preview) {
      case 1:
        return "/user/my-services/boarding-preview";
      case 2:
        return "/user/my-services/house-sitting-preview";
      case 3:
        return "/user/my-services/drop-in-visits-preview";
      case 4:
        return "/user/my-services/pet-day-care-preview";
      case 5:
        return "/user/my-services/dog-walking-preview";
      case 6:
        return "/user/my-services/grooming-preview";
      case 7:
        return "/user/my-services/house-call-preview";
      default:
        return "/user/my-services/boarding-preview";
    }
  };
  return (
    <div className="text-right mt-4">
      <Link href={getLink()}>
        {/*<a href="javascript:void(0)" className="preview">*/}
        <a href="#" className="preview">
          Preview
        </a>
      </Link>
      <button onClick={onSave} className="btn btn-primary">
        Save &amp; Continue
      </button>
    </div>
  );
};

export default SaveServiceView;
