

export default function loader(isLoading) {
  const $loader = $(".update-layout-page__overlay");
  if (isLoading) {
    $loader.show()
  } else {
    $loader.hide();
  }
}