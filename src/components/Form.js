import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkObject } from "../utils/checkObject";
import { checkErrorType } from "../utils/checkErrorType";
import { checkLengthArr } from "../utils/checkLengthArr";

function Form() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state);

  const [path, setPath] = useState("");
  const [newValue, setNewValue] = useState("");
  const [errType, setErrType] = useState("");

  const getPathValue = (e) => {
    setPath(e.target.value);
  };

  const getNewValue = (e) => {
    setNewValue(e.target.value);
  };

  const changeValue = (e) => {
    e.preventDefault();
    const pathArr = path.split(/[.[\]]/g).filter((el) => el);

    if (!checkLengthArr(pathArr, content, setErrType)) return;
    const objNewValue = checkObject(newValue);
    if (typeof checkObject(newValue) === "object") {
      dispatch({ type: "ADD_VALUE", payload: { pathArr, objNewValue } });
    } else {
      if (!checkErrorType(pathArr, newValue, setNewValue, setErrType)) return;

      dispatch({ type: "REPLACE_VALUE", payload: { pathArr, newValue } });
    }

    setErrType("");
    setNewValue("");
    setPath("");
  };

  return (
    <form className="form-container">
      <div className="input-container">
        <label className="label">Путь</label>
        <input className="input" value={path} onChange={getPathValue} />
      </div>
      <div className="input-container">
        <label className="label">Новое значение</label>
        <input
          className="input"
          placeholder={errType}
          value={newValue}
          onChange={getNewValue}
        />
      </div>
      <button className="btn" onClick={changeValue}>
        Применить
      </button>
    </form>
  );
}

export default Form;
