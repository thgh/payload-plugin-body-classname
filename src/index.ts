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
  const { slug } = useDocumentInfo()
  useLayoutEffect(() => {
    if (!slug) return
    document.body.classList.add('collection-' + slug)
    return () => document.body.classList.remove('collection-' + slug)
  }, [slug])
  return null
}
