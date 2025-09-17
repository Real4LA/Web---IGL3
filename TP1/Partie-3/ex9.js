async function getPosts(num) {
  try {
    for (let i = 0; i < num; i++) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${i}`
      );
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

getPosts(5);
