export default async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')

  const posts = await response.json()

  return posts
}
