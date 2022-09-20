// import trending from '../dummy/trending.json'
import memes from '../dummy/list.json'
import axios from "axios";

export interface TrendingMeme {
  created_utc: number
  title: string
  url: string
}

export interface Meme {
  name: string
  image: string
}

export const useApi = () => {
  const getTrending = async (): Promise<TrendingMeme[]> => {
    const baseUrl = window.location.origin;
    const result = await axios.get(`${baseUrl}/.netlify/functions/reddit-memes`)
    return result.data
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(trending)
    //   }, 2000)
    // })
  }

  const getMemes = (): Promise<Meme[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = memes.map(meme => {
          return {
            name: meme,
            image: `/img/${meme}.jpeg`
          }
        })
        resolve(result)
      }, 20)
    })
  }

  const createMeme = async (top: string, bottom: string, meme: string): Promise<any> => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(async () => {
    //    const result = await fetch('/img/10-Guy.jpeg')
    //    const blog = await result.blob()
    //    const objectURL = URL.createObjectURL(blog)
    //    resolve(objectURL)
    //   }, 20)
    // })

    const result = await axios.get('https://ronreiter-meme-generator.p.rapidapi.com/meme', {
      params: {
        top,
        bottom,
        meme,
      },
      headers: {
        'X-RapidAPI-Key': 'c2ab155906msh00bad49db0b1685p103d71jsn0d57e02981d9',
        'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
      },
      responseType: 'blob'
    })
    console.log('after call: ', result);

    return URL.createObjectURL(result.data)
  }

  return {
    getTrending,
    getMemes,
    createMeme
  }
}