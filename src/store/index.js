import { createStore } from "redux";
import { validateData } from "../utils/validateData";

const defaultState = [
  {
    type: "panel",
    props: { width: 600, height: 100, visible: true },
    content: [
      { type: "label", props: { caption: "innerTest", visible: true } },
    ],
  },

  { type: "label", props: { caption: "test", visible: true } },
  {
    type: "button",
    props: { caption: "Кнопка", width: 60, height: 20, visible: true },
  },
];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REPLACE_VALUE":
      const arrPath = action.payload.pathArr.slice(1);

      arrPath.reduce((acc, cur, index) => {
        if (arrPath.length - 1 === index) {
          const newValue = validateData(acc[cur], action.payload.newValue);
          return (acc[cur] = newValue);
        }
        return acc[cur];
      }, state);

      return [...state];

    case "ADD_VALUE":
      if (action.payload.pathArr.length > 0) {
        const path = action.payload.pathArr.slice(1);
        const lastIndex = path.findLastIndex((index) => index === "0");
        path.reduce((acc, cur, index) => {
          if (index === lastIndex) {
            acc.push(action.payload.objNewValue);
          }
          return acc[cur];
        }, state);
        return [...state];
      } else return [...state, action.payload.objNewValue];

    default:
      return state;
  }
};

export const store = createStore(reducer);
