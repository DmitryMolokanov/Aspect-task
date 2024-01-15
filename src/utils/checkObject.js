export const checkObject = (str) => {
  try {
    const isObject = JSON.parse(
      str.replace(
        /(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g,
        '$1"$3":'
      )
    );

    if (typeof isObject === "object") return isObject;
  } catch (err) {
    return str;
  }
};
