export const selectChair = ({ chairs }, id) => {
  const chair = chairs[id] || {};
  return chair;
};

export const asArray = ({ chairs }) => (
  Object.keys(chairs).map(key => chairs[key])
);
