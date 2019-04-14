import "../scss/main.scss";

require("es6-promise").polyfill();
require("isomorphic-fetch");

import $ from "jquery";
window.$ = $;

import loader from "./modules/loader";
import appendHeader from "./modules/stickyHeader";
import openFilters from "./modules/openFilters";
import fetchApis from "./modules/fetchApis";
import { imageUrl } from "./modules/globals";
import setFilters from "./modules/filters";

$(document).ready(() => {
  let img = new Image();
  img.src = imageUrl;
  loader(true);
  fetchApis();
  appendHeader();
  openFilters();
  setFilters();
});
