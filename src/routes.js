import React from "react";
import SkipMarketplace from "views/admin/marketplace";


// Icon Imports
import {
  MdPinDrop,
  MdOutlineDateRange,
  MdDelete,
} from "react-icons/md";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";



const routes = [
  {
    name: "Postcode",
    layout: "/admin",
    path: "Postcode",
    icon: <MdPinDrop className="h-6 w-6" />,
    component: "<Postcode />",
    processed: true
  },
  {
    name: "Waste Type",
    layout: "/admin",
    path: "WasteType",
    icon: <MdDelete className="h-6 w-6" />,
    component: "<WasteType />",
    secondary: true,
    processed: true
  },
  {
    name: "Skip Marketplace",
    layout: "/admin",
    path: "skip-marketplace",
    icon: <BsMinecartLoaded className="h-6 w-6" />,
    component: <SkipMarketplace />,
    secondary: true,
    processed: true
  },

  {
    name: "Permit Check",
    layout: "/admin",
    path: "PermitCheck",
    icon: <IoShieldCheckmarkOutline className="h-6 w-6" />,
    component: "<PermitCheck />",
    processed: false
  },
  {
    name: "Choose Date",
    layout: "/admin",
    path: "ChooseDate",
    icon: <MdOutlineDateRange className="h-6 w-6" />,
    component: "<ChooseDate />",
    secondary: true,
    processed: false
  },

  {
    name: "Payment",
    layout: "/admin",
    path: "Payment",
    icon: <FaCreditCard className="h-6 w-6" />,
    component: "<Payment />",
    processed: false
  },
];
export default routes;
