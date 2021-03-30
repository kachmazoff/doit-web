export const dateFormat = (source: Date | string): string => {
  let d;
  if (typeof source === "string") {
    d = new Date(source);
  } else {
    d = source;
  }

  const hh = ("0" + d.getUTCHours()).slice(-2);
  const mm = ("0" + d.getUTCMinutes()).slice(-2);

  const date = ("0" + d.getUTCDate()).slice(-2);
  const month = ("0" + (d.getUTCMonth() + 1)).slice(-2);
  const year = d.getFullYear();

  const result = `${hh}:${mm} ${date}.${month}.${year}`;

  return result;
};
