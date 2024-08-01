import React from "react";
import { AiOutlineDatabase, AiOutlineLayout } from "react-icons/ai";
import { HiOutlineAcademicCap, HiOutlineChartSquareBar } from "react-icons/hi";
import {
  RiBarChart2Line,
  RiCustomerService2Line,
  RiDashboardLine,
  RiEqualizerLine,
  RiShieldUserLine,
  RiTodoLine,
} from "react-icons/ri";
import {
  BiBookReader,
  BiCartAlt,
  BiData,
  BiDollar,
  BiErrorCircle,
  BiRss,
  BiTask,
} from "react-icons/bi";
import {
  MdDevicesOther,
  MdInvertColors,
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
  MdTimeline,
} from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,

  BsQuestionDiamond,
  BsReverseListColumnsReverse,
  BsTable,
} from "react-icons/bs";
import { GiCloverSpiked } from "react-icons/gi";
import { FaRegCalendarAlt, FaRegHospital, FaRegImages } from "react-icons/fa";
import { CgAttachment, CgFeed, CgUserList } from "react-icons/cg";
import { TiMap } from "react-icons/ti";
import { FiMail, FiMap, FiUsers } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { DiHtml5Multimedia } from "react-icons/di";
import { RoutePermittedRole } from "@crema/constants/AppEnums";
import { GrUserAdmin } from "react-icons/gr";
import { TbFileInvoice } from "react-icons/tb";


import UserProfile from "modules/account/MyProfile";


const routesConfig = [

 
  {
    id: "apps",
    title: "Apps",
    messageId: "sidebar.apps",
    type: "group",
    children: [
      {
        id: "chat",
        title: "Chat",
        icon: <BsChatDots />,
        messageId: "sidebar.apps.chat",
        path: "/apps/chat",
      }
      
    ],
  },


];
export default routesConfig;
