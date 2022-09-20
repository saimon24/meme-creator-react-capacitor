import { Handler } from '@netlify/functions'
import axios from 'axios';

const { RAPID_KEY } = process.env;

export const handler: Handler = async (event, context) => {
  const result = await axios.get('https://reddit-meme.p.rapidapi.com/memes/trending', {
    headers: {
      'X-RapidAPI-Key': RAPID_KEY!,
      'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(result.data),
  }
}
