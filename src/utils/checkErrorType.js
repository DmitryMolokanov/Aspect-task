export const checkErrorType = (path, newValue, setValue, setError) => {
  let type;
  const lastElPath = path[path.length - 1];

  switch (lastElPath) {
    case "visible":
      type = "boolean";
      break;
    case "caption":
      type = "string";
      break;
    case "width":
      type = "number";
      break;
    case "height":
      type = "number";
      break;
    default:
      return null;
  }

  if (type === "boolean" && (newValue === "true" || newValue === "false"))
    return true;

  if (type === "number") {
    if (
      type === typeof Number(newValue) &&
      !isNaN(Number(newValue)) &&
      newValue !== ""
    )
      return true;
  }
  if (type === "string") return true;

  setValue("");
  setError(`Веедите данные ${type} типа`);
};
