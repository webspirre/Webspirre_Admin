"use client";

import Image from "next/image";
import React, { useState } from "react";
import Upload from "../app/dashboard/upload";
import { User } from "@supabase/supabase-js";
import Loader from "./Loader";
import Content from "@/app/dashboard/Content";

interface DashboardProps {
  user: User | null;
}

const DashboardLayout: React.FC<DashboardProps> = () => {
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(true); // state to track which part is visible

  const handleLoading = () => {
    setLoading((prev) => !prev);
  };

  return (
    <>
      {loading && (
        <Loader handleLoading={handleLoading} loaderText="Loading Asset" />
      )}
      <div className="flex ">
        <div className="w-[350px] min-h-screen px-6 bg-white ">
          <button
            className={`flex gap-4 items-center mt-[200px]  px-4 py-4 text-[18px] mb-6 font-semibold ${
              showUpload ? "bg-[#F2F2F7] rounded-[12px] w-full" : ""
            }`}
            onClick={() => setShowUpload(true)}
          >
            <Image
              height={60}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1708059974/utilities/Laptop_Upload_vzergq.svg"
              alt="Upload"
            />
            Upload
          </button>
          <button
            className={`flex gap-4 items-center mt-[200px]  px-4 py-4 text-[18px] mb-6 font-semibold ${
              showUpload ? "bg-[#F2F2F7] rounded-[12px] w-full" : ""
            }`}
            onClick={() => setShowUpload(false)}
          >
            <Image
              height={60}
              width={20}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718468606/utilities/webspirre/Document_fh5fso.svg"
              alt="Content"
            />
            Content
          </button>
        </div>
        <div className="flex w-full pt-[2px] mt-[100px] bg-[#ececec]">
          <div className="w-full pr-6">
            {showUpload ? (
              <Upload handleLoading={handleLoading} loading={loading} />
            ) : (
              <Content />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
