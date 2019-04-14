import { imageUrl, filters } from "./globals";
import updateLayout from "./updateLayout";




const getPosts = (posts) => {
  $(".posts-container").html("");
  Object.keys(posts).map(post => {
    let output = `<article id="post-${post}" class="single-post"
            data-show-col="${filters.column}"
            data-show-gap="${filters.margin}"
            data-show-info="${filters.effect}">
            <img src="${imageUrl}"/>
            <div class="single-post__overlay"></div>
            <div class="single-post__info">
              <div class="single-post__content">
                <span class="category">${posts[post].category}</span>
                <h3 class="title">${posts[post].title}</h3>
                <p class="author">${posts[post].author}</p>
                <h4 class="subtitle"><span class="original">${posts[post].subtitle}</span></h4>
              </div>
            </div>
          </article>`;
    $(".posts-container").append(output);
    updateLayout($(".posts-container").find(`#post-${post}`));
  });
};

export default getPosts;
