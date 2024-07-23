import React from 'react'
import Table from "./Table";


const Content: React.FC = () => {

    const columns = [
      "Website Image",
      "Name of Website",
      "Devices",
      "Category",
      "Page Type",
      "Last Modified",
        "Status",
      "",
    ];
    const data = [
      {
        "Website Image":
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718621035/utilities/webspirre/Frame_676_dtojuh.svg",
        "Name of Website": "Gaming Landing Page",
        Devices: "Web | Mobile",
        Category: "E-commerce",
        "Page Type": "Home",
        "Last Modified": "12 Jun 2024 12:55 am",
        Status: "Live",
        // "": "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718621241/utilities/webspirre/Frame_34_1_prp0wr.svg",
      },
      {
        "Website Image":
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718621035/utilities/webspirre/Frame_676_dtojuh.svg",
        "Name of Website": "Gaming Landing Page",
        Devices: "Web | Mobile",
        Category: "Blog",
        "Page Type": "Article",
        "Last Modified": "12 Jun 2024 12:55 am",
        Status: "Inactive",
        // "": "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718621241/utilities/webspirre/Frame_34_1_prp0wr.svg",
      },
      // Add more data as needed
    ];


  return (
    <div>
      <div className="p-4 px-[50px] rounded-[20px] w-full  m-4 bg-white">
        <div className="flex text-[#888888] text-[12px] gap-4">
          <div className="px-2 py-1 flex items-center border-2 border-[#C7C7C7] gap-4 rounded-full">
            <div className="border-2 border-[#C7C7C7] rounded-full w-4 h-4"></div>
            <p>Bulk action</p>
            <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718618172/utilities/webspirre/Expand_down_zyhxny.svg"
              alt=""
            />
          </div>
          <div className="px-2 pr-8 py-1 flex items-center border-2 border-[#C7C7C7] gap-2 rounded-full">
            <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718618334/utilities/webspirre/magnifier_cqcusg.svg"
              alt=""
            />
            <p>Search uploads</p>
          </div>
          <div className="px-4 py-1 flex items-center bg-[#F1F0EE] text-black font-semibold  gap-2 rounded-full">
            <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1718618177/utilities/webspirre/Vector_13_xsbfy6.svg"
              alt=""
            />
            <p>Filter</p>
          </div>
          <div className="px-4 py-1 flex items-center bg-[black] text-white font-semibold  gap-2 rounded-full">
            <p>All</p>
          </div>
          <div className="px-4 py-1 font-semibold flex items-center border-2 border-[#C7C7C7] gap-2 rounded-full">
            <p>Software & SaaS</p>
            <p className="bg-[#F1F0EE] p-1 rounded-full ">123</p>
          </div>
          <div className="px-4 py-1 font-semibold flex items-center border-2 border-[#C7C7C7] gap-2 rounded-full">
            <p>AI</p>
            <p className="bg-[#F1F0EE] p-1 rounded-full ">123</p>
          </div>
        </div>

        <div className=" px-4 py-6">
          <Table columns={columns} data={data} />
        </div>
      </div>
      {/* website image, Name of Website, Devices, Category, Page Type, Last
      modified, Status, */}
    </div>
  );
};

export default Content
