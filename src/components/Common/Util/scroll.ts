export const playScroll = () => {
  document.documentElement.classList.remove("fixed");
};

export const stopScroll = () => {
  document.documentElement.classList.add("fixed");
};
