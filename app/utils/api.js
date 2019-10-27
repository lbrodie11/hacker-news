
async function getTopStoriesId(storyType) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${storyType}.json`)
  return res.json()
}

async function getStory(id) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return res.json()
}

