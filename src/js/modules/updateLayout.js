import updatePostString from "./updatePostString";
import checkContentVisibility from "./checkContentVisibility";
import openModal from "./openModal";
import { updateSrcIEHover } from "./updateSrcIEHover";

const updateLayout = (post) => {
  updatePostString(post);
  checkContentVisibility(post);
  openModal(post.attr("id"));
  updateSrcIEHover();
};

export default updateLayout;
