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
    children: [{ id: "1-1", title: "children-1" }],
  },
];
