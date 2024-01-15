export const checkLengthArr = (path, content, setErr) => {
  const length = path.filter((el) => {
    return parseInt(el) || el === "0";
  });

  if (Number(length[0]) > content.length - 1) {
    setErr("Введите корректный путь");
    return false;
  }

  return true;
};
