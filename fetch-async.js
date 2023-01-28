const loadData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();
    const posts = data;
    console.log(posts);
}

loadData();