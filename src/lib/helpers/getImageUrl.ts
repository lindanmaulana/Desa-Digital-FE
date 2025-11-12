import { IMAGEBASEURL } from "../config"

interface getImageUrlHandlerProps {
  path: string
  filename: string
}

export const getImageUrlHandler = ({path, filename}: getImageUrlHandlerProps): string => {
  return `${IMAGEBASEURL}/${path}/${filename}`
}
