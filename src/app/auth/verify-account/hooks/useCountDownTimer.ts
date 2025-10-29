import { useCountDown } from "@/hooks/useCountDown"
import { useCallback, useEffect, useState } from "react"

export const useCountDownTimer = () => {
  const [play, setPlay] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)


  const handleSetCountDown = useCallback((countDown: number) => {
    setPlay(true)
    setCount(countDown)
  }, [])

  const timer = useCountDown({count, play})

  useEffect(() => {

    if (timer <= 0) setPlay(false)

  }, [timer])

  return {
    play, handleSetCountDown, timer
  }
}
