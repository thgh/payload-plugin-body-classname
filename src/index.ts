import { Config } from 'payload/config'
import { useDocumentInfo } from 'payload/components/utilities'
import { useLayoutEffect } from 'react'

export function bodyClassname(config: Config): Config {
  return {
    ...config,
    collections: config.collections?.map((collection) => ({
      ...collection,
      fields: collection.fields.concat({
        type: 'ui',
        name: 'bodyClassname',
        admin: {
          components: {
            Field: BodyClassname,
            Cell: BodyClassname,
          },
        },
      }),
    })),
  }
}

function BodyClassname() {
  // @ts-expect-error Slug is missing in types
  const { type, slug } = useDocumentInfo()
  useLayoutEffect(() => {
    if (!type || !slug) return
    document.body.classList.add(type + '-' + slug)
    return () => document.body.classList.remove(type + '-' + slug)
  }, [slug])
  return null
}
