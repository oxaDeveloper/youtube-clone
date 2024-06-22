import React from "react";
import SignInButton from "../SignInButton";

const InviteToSign = () => {
  return (
    <div className="mx-8 flex flex-col items-start gap-4">
      <p className="w-48 text-sm text-white">
        Sign in to like videos, comment, and subscribe.
      </p>

      <SignInButton />
    </div>
  );
};

export default InviteToSign;
