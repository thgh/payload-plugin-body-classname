import { Config } from 'payload/config'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function bodyClassname(config: Config): Config {
  return {
    ...config,
    admin: {
      ...config.admin,
      components: {
        ...config.admin?.components,
        afterNavLinks: [
          ...(config.admin?.components?.afterNavLinks || []),
          useBodyClassname,
        ],
      },
    },
  }
}

let staleClass = ''

// It's a hook and also a Component!
export function useBodyClassname() {
  const loc = useLocation()

  useLayoutEffect(() => {
    // Start from previous value
    let beforeClass = staleClass
    staleClass = ''

    // Parse the new URL
    let [, _, collections, next] = loc.pathname.split('/')
    next =
      collections === 'collections' || collections === 'globals'
        ? collections.slice(0, -1) + '-' + next
        : ''
    console.log('body', staleClass, beforeClass, next)

    // Keep as is
    if (beforeClass !== next) {
      // Remove the previous class name
      if (beforeClass) document.body.classList.remove(beforeClass)
      if (next) document.body.classList.add(next)
    }

    if (next)
      return () => {
        staleClass = next

        // Delayed cleanup
        setTimeout(() => {
          if (staleClass) {
            document.body.classList.remove(staleClass)
            staleClass = ''
          }
        }, 200) as unknown as number
      }
  }, [loc.pathname])
  return null
}
