import { detect } from "detect-browser";
const browser = detect();
const IMG_NAME = "articles_background";
const IMG_NAME_GRAY = "articles_background_gray";

const changeSrcImgOnHover = element => {
  $(element).mouseenter(
    function() {
      $(this)
        .find("img")
        .attr("src", function(i, attr) {
          return attr.replace(IMG_NAME_GRAY, IMG_NAME);
        });
    }).mouseleave(function() {
      $(this)
        .find("img")
        .attr("src", function(i, attr) {
          return attr.replace(IMG_NAME, IMG_NAME_GRAY);
        });
    }
  );
};

export const updateSrcIEHover = () => {
  if (browser && browser.name === "ie") {
    if ($("[data-show-info='filter']").length > 0) {
      $(".single-post").each(function() {
        if (
          $(this)
            .find("img")
            .attr("src")
            .indexOf(IMG_NAME_GRAY) !== -1
        )
          return;
        let graySrc = $(this)
          .find("img")
          .attr("src")
          .replace(IMG_NAME, IMG_NAME_GRAY);
        $(this)
          .find("img")
          .attr("src", graySrc);
        changeSrcImgOnHover(this);
      });
    } else {
      $(".single-post").each(function() {
        if (
          $(this)
            .find("img")
            .attr("src")
            .indexOf(IMG_NAME_GRAY) === -1
        )
          return;
        let graySrc = $(this)
          .find("img")
          .attr("src")
          .replace(IMG_NAME_GRAY, IMG_NAME);
        $(this)
          .find("img")
          .attr("src", graySrc);
        $(this).unbind('mouseenter').unbind('mouseleave');
      });
    }
  }
};
