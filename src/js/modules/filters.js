import { filters, posts } from "./globals";
import loader from "./loader";
import getPosts from "./getPosts";

const getFilters = filters => {
  Object.keys(filters).map(f => {
    $(`select[name="${f}"]`).find(`option[value="${filters[f]}"]`).attr("selected", true);
  })
}

const setFilters = () => {
  getFilters(filters);
  $("select").on("change", (e) => {
    loader(true);
    filters[e.target.name] = e.target.value;
    $(".update-layout-close-menu").click();
    return getPosts(posts);
  });
}

export default setFilters;