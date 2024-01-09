import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const RequiredError = ({ name }: { name?: string }) => {
  return (
    <div className="text-left text-red-600 text-xs mt-1 flex items-center">
      <span className="mr-2">
        <ExclamationCircleIcon width={13} height={13} />
      </span>
      <p> {name ? name : "This field"} is required</p>
    </div>
  );
};

export default RequiredError;
