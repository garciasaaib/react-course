import { GiphyResponseSuccess } from "../api/giphy"


export type Gif = {
  id: string
  title: string
  url: string
}

export type GifFetchResult =
  | { success: true; gifs: Gif[], error: false }
  | { success: false; gifs: false, error: string }

const api_key = "Go84so0o7WglUIx6lqnHAbYWvgdwEdOR"
const host = "https://api.giphy.com/v1/gifs/search"
const limit = "10"

export const getGifs = async (category: string): Promise<GifFetchResult>  => {
  const url = `${host}?api_key=${api_key}&q=${encodeURI(category)}&limit=${limit}`
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`)
    }
    const { data }: GiphyResponseSuccess = await resp.json()
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }))
    return { success: true, gifs, error: false }
  } catch (error: unknown) {
    return { success: false, gifs: false, error: (error as Error).message }
  }
}