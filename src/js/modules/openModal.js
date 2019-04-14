import loader from "./loader";
import updatePostString from "./updatePostString";

const _openModal = (content, id) => {
  let modal = `<div class="update-layout-content__overlay">
    <article id="${id}" class="single-post">
      ${content}
      <button class="close__modal"></button>
    </article>
    <div class="__overlay"></div>
  </div>`;
  $("body").append(modal);
  updatePostString($(".update-layout-content__overlay").find(`#${id}`));
  _closeModal();
};

const _closeModal = () => {
  let $modal = $(".update-layout-content__overlay");
  let $buttonClose = $modal.find("button");
  $buttonClose.on("click", function () {
    $modal.remove();
  });
};

const openModal = id => {
  $(`#${id}`).on("click", function () {
    let $post = $(this).clone();
    $post.find(".single-post__content").removeAttr("style").removeClass("truncated").find(".subtitle").removeAttr("style").siblings(".subtitle-truncated").remove();
    let html = $post.html();
    loader(true);
    _openModal(html, id);
  });
};

export default openModal;
