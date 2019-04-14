const replaceContentWithCTA = (container, content) => {
  content.hide();
  container.append(
    '<div class="single-post__view-more"><p>View more</p></div>'
  );
};

const checkContentVisibility = (post) => {
    let $post = $(post),
      $container = $post.find(".single-post__info"),
      $content = $post.find(".single-post__content");
    if ($container.height() > $content.height()) return;
    replaceContentWithCTA($container, $content);
};

export default checkContentVisibility;
