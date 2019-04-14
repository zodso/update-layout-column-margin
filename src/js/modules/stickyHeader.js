const appendHeader = () => {
  const delta = 5;
  const filtersBar = $(".posts-filters");
  const filtersBarHeight = filtersBar.height();
  let didScroll;
  let lastScrollTop = 0;

  $(window).scroll(() => {
    didScroll = true;
  });
  const hasScrolled = () => {
    let st = $(window).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > filtersBarHeight) {
      $(filtersBar).attr("id", "nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $(filtersBar).removeAttr("id", "nav-up");
      }
    }
    lastScrollTop = st;
  }

  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
};

export default appendHeader;
