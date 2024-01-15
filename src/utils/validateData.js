export const validateData = (initialValue, newValue) => {
  const initialType = typeof initialValue;

  if (
    initialType === "boolean" &&
    (newValue === "true" || newValue === "false")
  ) {
    if (newValue === "true") return true;
    if (newValue === "false") return false;
  }

  if (initialType === "number") {
    if (
      initialType === typeof Number(newValue) &&
      !isNaN(Number(newValue)) &&
      newValue !== ""
    )
      return Number(newValue);
  }

  if (initialType === "string") return newValue;

  return initialValue;
};
