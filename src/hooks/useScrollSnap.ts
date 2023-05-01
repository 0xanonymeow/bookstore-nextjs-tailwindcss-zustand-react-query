import { useEffect, useState } from 'react'
import createScrollSnap, { Settings } from 'scroll-snap'

export default (
  ref: {
    current: HTMLElement | null
  },
  settings: Settings,
  callback?: () => void
) => {
  const [scrollBind, setBind] = useState(() => () => {})
  const [scrollUnbind, setUnbind] = useState(() => () => {})

  useEffect(() => {
    const element = ref.current

    if (element) {
      const { bind, unbind } = createScrollSnap(element, settings, callback)
      setBind(() => bind)
      setUnbind(() => unbind)
    }
  }, [])

  return [scrollBind, scrollUnbind]
}
