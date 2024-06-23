import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 rounded-full border border-[#3d3d3d] px-3 py-1.5 hover:border-[#20406a] hover:bg-[#20406a]"
      onClick={() => signIn("google")}
    >
      <PermIdentityIcon sx={{ color: "#147aff" }} />
      <span className="text-sm font-semibold text-[#147aff]">Sign in</span>
    </div>
  );
};

export default SignInButton;
