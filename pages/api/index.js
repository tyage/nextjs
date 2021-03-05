// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ data: { allPosts: [
    {
      "id": "171a70dd-5834-494e-a8dd-e1be2c2c10c9",
      "title": "ciao",
      "votes": 0,
      "url": "https://cua",
      "createdAt": "2021-03-05T08:12:10.440Z",
      "__typename": "Post"
    }
  ] } })
}
