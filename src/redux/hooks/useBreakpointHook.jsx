import { useEffect, useState } from "react"


export function useBreakpoint(bp = 768) {
  const [match, setMatch] = useState(window.innerWidth <= bp)

  useEffect(() => {
    const onResize = () => setMatch(window.innerWidth <= bp)

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [bp])

  return match
}