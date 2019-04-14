import loader from "./loader";

const getContainerHeight = (subtitle, originalString) => {
  let containerHeight = originalString.css("line-height").replace("px", "") * 3;
  return subtitle.css({
    height: containerHeight + "px"
  });
};

const getOnlyVisibleWords = (container, elements, array) => {
  elements.each(function (i) {
    if (
      $(this).offset().top + $(this).height() <
      container.offset().top + container.height()
    ) {
      array.push($(this).text());
    }
  });
};

const setNewStringValue = (array, postContent, originalString, string) => {
  let updatedString = `<h4 class="subtitle-truncated"><span class="updated">${array.join(
    " "
  )}</span></h4>`;
  postContent.append(updatedString);
  originalString.text(string);
  postContent.addClass("truncated");
};

const updatePostString = (post) => {
  let $post = $(post),
    $postContent = $post.find(".single-post__content"),
    $subtitle = $post.find(".subtitle"),
    $originalString = $subtitle.find(".original"),
    string = $.trim($originalString.text().replace(/(?:\r\n|\r|\n)/g, " ")),
    array = new Array();
  getContainerHeight($subtitle, $originalString);
  if ($originalString.height() > $subtitle.height()) {
    let formattedString = `<span class="word">${string
      .split(" ")
      .join('</span> <span class="word">')}</span>`;
    $originalString.html(formattedString);
    getOnlyVisibleWords($subtitle, $subtitle.find(".word"), array);
    setNewStringValue(array, $postContent, $originalString, string);
    loader(false);
  } else {
    loader(false);
  }
};

export default updatePostString;
