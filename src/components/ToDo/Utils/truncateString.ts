const truncate = (string: string, count: number) => {
  return string?.length > count ? string.substring(0, count) + "..." : string;
};

export default truncate;
