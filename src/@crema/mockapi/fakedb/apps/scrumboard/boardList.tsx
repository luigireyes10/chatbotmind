import dayjs from "dayjs";
import { BoardObjType } from "@crema/types/models/apps/ScrumbBoard";

const boardList: BoardObjType[] = [
  {
    id: 2001,
    name: "Dashboard Frontend Applicatasasdadadadadadadion",
    list: [
      {
        id: 3001,
        name: "In Progress",
        cards: [
          // {
          //   id: 4001,
          //   title: "Call Adam to review the documentation",
          //   attachments: [
          //     {
          //       id: 4434343,
          //       file: {
          //         path: "asantha.jpg",
          //         name: "asantha.jpg",
          //         lastModified: 1579117694243,
          //         lastModifiedDate:
          //           "Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)",
          //       },
          //       preview: "/assets/images/avatar/A5.jpg",
          //     },
          //     {
          //       id: 456544,
          //       file: {
          //         path: "rahul.jpg",
          //         name: "rahul.jpg",
          //         lastModified: 1579117694535,
          //         lastModifiedDate:
          //           "Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)",
          //       },
          //       preview: "/assets/images/avatar/A10.jpg",
          //     },
          //   ],
          //   label: [
          //     { id: 301, name: "High Priority", type: 1, color: "red" },
          //     { id: 302, name: "Important", type: 2, color: "green" },
          //   ],
          //   date: dayjs("10-12-2019", "MM-DD-YYYY"),
          //   comments: [],
          //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          //   members: [
          //     {
          //       id: 501,
          //       name: "Johnson",
          //       image: "/assets/images/avatar/A23.jpg",
          //     },
          //     {
          //       id: 505,
          //       name: "Andy Caddick",
          //       image: "/assets/images/avatar/A27.jpg",
          //     },
          //   ],
          //   checkedList: [
          //     { id: 2001, title: "Call Adam to check the latest development" },
          //     { id: 2002, title: "Meet Roman for further discussion." },
          //   ],
          // },
          {
            id: 4002,
            title: "Fix meeting with John",
            attachments: [
              {
                id: 4353435,
                file: {
                  path: "narayan.jpg",
                  name: "narayan.jpg",
                  lastModified: 1579117694999,
                  lastModifiedDate:
                    "Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)",
                },
                preview: "/assets/images/avatar/A15.jpg",
              },
            ],
            label: [
              { id: 303, name: "Crema", type: 3, color: "#0A8FDC" },
              {
                id: 304,
                name: "Work Place",
                type: 4,
                color: "rgb(229, 231, 235)",
              },
            ],
            date: dayjs("10-13-2019", "MM-DD-YYYY"),
            comments: [],
            desc: "Lorem Ipsuxt ever since the 1500s, when an unknpecimen book.",
            members: [
              {
                id: 502,
                name: "Joe Root",
                image: "/assets/images/avatar/A24.jpg",
              },
            ],
            checkedList: [
              { id: 2003, title: "Meet Roman for further discussion." },
              { id: 2004, title: "Call Adam to check the latest development" },
              { id: 2005, title: "Select Restaurant for meeting." },
            ],
          },
          {
            id: 4003,
            title: "",
            attachments: [],
            label: [
              { id: 302, name: "Important", type: 2, color: "green" },
              {
                id: 304,
                name: "Work Place",
                type: 4,
                color: "rgb(229, 231, 235)",
              },
            ],
            date: dayjs("10-14-2019", "MM-DD-YYYY"),
            comments: [],
            desc: "Lorem Ipsum is simply dummy te the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 504,
                name: "Darren Gough",
                image: "/assets/images/avatar/A26.jpg",
              },
              {
                id: 503,
                name: "Monty Panesar",
                image: "/assets/images/avatar/A25.jpg",
              },
            ],
            checkedList: [
              { id: 2006, title: "Meet Roman for further discussion." },
              { id: 2007, title: "Call Adam to check the latest development" },
              { id: 2008, title: "Select Restaurant for meeting." },
            ],
          },
        ],
      },
 
    ],
  },
];
export default boardList;
