import {
  apis,
  imageUrl,
  categories,
  authors,
  authorsNames,
  posts
} from "./globals";
import getPosts from "./getPosts";
const fetchPosts = () => {
  fetch(apis.posts)
    .then(response => response.json())
    .then(data => {
      data.map(post => {
        posts[post.id] = {
          img: imageUrl,
          category: categories[Math.floor(Math.random() * categories.length)],
          title: post.title,
          author: authorsNames[post.userId],
          subtitle: post.body
        };
      });
    })
    .then(() => {
      getPosts(posts);
    })
    .catch(error => console.log(error));
};

const fetchUsers = () => {
  fetch(apis.users)
    .then(response => response.json())
    .then(data => {
      authors.map(author => {
        authorsNames[author] = data[author].name;
      });
    })
    .then(() => {
      fetchPosts();
    })
    .catch(error => console.log(error));
};

const fetchApis = () => {
  fetchUsers();
};

export default fetchApis;
