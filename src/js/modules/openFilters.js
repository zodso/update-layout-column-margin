const ELEMENTS = ".update-layout-open-menu, .update-layout-close-menu",
  OPEN_CLASS = "open";

const toggleClass = () => {
  $(".posts-filters").toggleClass(OPEN_CLASS);
}

const openFilters = () => {
  $(ELEMENTS).on("click", toggleClass);
}

export default openFilters;