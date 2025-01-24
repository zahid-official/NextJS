

const getBlogs = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=25')
    return res.json();
};

export default getBlogs;