const joinName = (name) => {
  const newName = name?.trim().toLowerCase()?.replace(" ", "_");
  return newName;
};

const splitName = (name) => {
  const newName = name?.trim().toLowerCase()?.replace("_", " ");
  return newName;
};

export { joinName, splitName };
