import { useEffect, useState } from "react"
import { getGifs, Gif } from "../helpers/getGifs"

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Gif[]>([])
  const [loading, setLoading] = useState(true)
  const handleSetImages = async () => {
    setLoading(true)
    try {
      const {gifs} = await getGifs(category)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      gifs && setImages(gifs)

    }
    catch (error: unknown) {
      console.error((error as Error).message)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    handleSetImages()

    // cleanup: return a function that will be executed when the component is unmounted
    // and is used to cancel any pending request and avoid memory leaks, and clean events
  }, [])
  return {
    gifs: images,
    loading
  }
}
