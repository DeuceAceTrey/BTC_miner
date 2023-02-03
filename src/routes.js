/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Admin_Panel from "views/Admin.js";
import Client from "views/Client.js";
import Monitoring from "views/Monitoring.js";
import Register from "views/Register.js"
import Login from "views/Login.js"
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import Users from "views/Users.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {  
    path: "/register",
    name: "Register",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Register,
    layout: "/admin",
  },
  {  
    path: "/login",
    name: "Login",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/client",
    name: "BTC Miner",
    rtlName: "خرائط",
    icon: "tim-icons icon-world",
    component: Client,
    layout: "/admin"
  },
  {
    path: "/admin",
    name: "BTC Miner",
    rtlName: "خرائط",
    icon: "tim-icons icon-world",
    component: Admin_Panel,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Manager",
    rtlName: "خرائط",
    icon: "tim-icons icon-world",
    component: Users,
    layout: "/admin"
  }
  // {
  //   path: "/Monitoring",
  //   name: "Monitoring",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-sound-wave",
  //   component: Monitoring,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-pin",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
