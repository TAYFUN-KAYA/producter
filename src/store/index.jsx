import { createStore } from "redux";
import reducers from "./reducers";

const STORE = createStore(reducers);

export default STORE;



// import { createStore } from "redux";
// import reducers from "./reducers";

// const STORE = createStore(reducers, {
//   tasks: {
//     todo: {
//       backlog: [
//         {
//           id: 1,
//           title:
//             "Being able to rename and edit users lorem rename and edit users",
//           type: "epic",
//           priority: 3,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "EPC-02",
//           uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
//           status: "backlog",
//         },
//         {
//           id: 12,
//           title:
//             "Being able to rename and edit users lorem rename and edit users",
//           type: "epic",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 44,
//           desctext: "EPC-02",
//           uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4493",
//           status: "backlog",
//         },
//       ],

//       todo: [
//         {
//           id: 2,
//           title:
//             "To do Being able to rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
//           status: "todo",
//         },
//         {
//           id: 42,
//           title:
//             "42 To do Being able to rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "42f9df20-9393-4c4d-b72c-7bfa4398a442",
//           status: "todo",
//         },
//         {
//           id: 52,
//           title:
//             "To do Being able to rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a453",
//           status: "todo",
//         },
//         {
//           id: 62,
//           title:
//             "62To do Being able to rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "62f9df20-9393-4c4d-b72c-7bfa4398a462",
//           status: "todo",
//         },
//         {
//           id: 99,
//           title: "99To rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "99f9df20-9393-4c4d-b72c-7bfa4398a499",
//           status: "todo",
//         },
//         {
//           id: 199,
//           title: "199To rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "199f9df20-9393-4c4d-b72c-7bfa4398a4199",
//           status: "todo",
//         },
//         {
//           id: 299,
//           title: "299To rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "299f9df20-9393-4c4d-b72c-7bfa4398a4299",
//           status: "todo",
//         },
//         {
//           id: 399,
//           title: "399To rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "399f9df20-9393-4c4d-b72c-7bfa4398a4399",
//           status: "todo",
//         },
//         {
//           id: 499,
//           title: "499To rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "499f9df20-9393-4c4d-b72c-7bfa4398a4499",
//           status: "todo",
//         },
//         {
//           id: 599,
//           title: "599To rename and edit users lorem rename and edit users",
//           type: "task",
//           priority: 2,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "Task-03",
//           uuid: "599f9df20-9393-4c4d-b72c-7bfa4398a4599",
//           status: "todo",
//         },
//       ],
//       inprogress: [
//         {
//           id: 3,
//           title: "rename and edit users lorem rename and edit users",
//           type: "epic",
//           priority: 1,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "EPC-04",
//           uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
//           status: "inprogress",
//         },
//       ],
//     },
//     done: {
//       test: [
//         {
//           id: 4,
//           title:
//             "test Being able to rename and edit users lorem rename and edit users",
//           type: "epic",
//           priority: 3,
//           user: {
//             name: "Nguyen Van A",
//             surname: "Nguyen Van A",
//             image: "https://picsum.photos/200/300",
//           },
//           subtotal: 13,
//           desctext: "EPC-05",
//           uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a460",
//           status: "test",
//         },
//       ],
//     },
//   },
// });

// export default STORE;
