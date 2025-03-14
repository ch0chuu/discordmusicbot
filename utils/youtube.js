const axios = require('axios')
require('dotenv').config()

/**
 * YouTube에서 검색하여 첫 번째 동영상 정보를 반환합니다.
 * @param {string} query 검색할 노래 제목
 * @returns {Object|null} { title, url, thumbnail } 또는 null (결과 없음)
 */
async function searchYouTube(query) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    const searchUrl = `https://www.googleapis.com/youtube/v3/search`

    const response = await axios.get(searchUrl, {
      params: {
        key: apiKey,
        part: 'snippet',
        q: query,
        maxResults: 1,
        type: 'video',
      },
    })

    const video = response.data.items[0]
    if (!video) return null

    return {
      title: video.snippet.title,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      thumbnail: video.snippet.thumbnails.default.url,
    }
  } catch (error) {
    console.error('❌ 유튜브 검색 오류:', error.response ? error.response.data : error.message)
    return null
  }
}

module.exports = { searchYouTube }
