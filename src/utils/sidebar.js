import Generic from "../view/Generic";
export const sidebar = [
  {
    id: 1,
    title: "Analitika",
    path: "/analitics",
    icon: "",
    element: Generic,
    isPrived: true,
    role: ["admin"],
  },
  {
    id: 2,
    title: "Talabalar",
    path: "/students",
    icon: "",
    element: Generic,
    isPrived: true,
    role: ["admin"],
    children: [
      {
        id: "2-1",
        title: "children-1",
        path: "/students/table",
        element: Generic,
      },
    ],
  },
];
