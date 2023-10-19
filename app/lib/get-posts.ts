import matter from 'gray-matter'
import path from 'path'
import type { Post } from './types'
import fs from 'fs/promises'
import { cache } from 'react'
// import supabase from '@lib/supabase/private'

const thirdPartyPosts: Post[] = [
  // {
  //   title: 'Next 13 homepage',
  //   description: 'next-13-homepage',
  //   body: '',
  //   date: '2023-08-24T13:00:00.000Z',
  //   slug: '',
  //   tags: [],
  //   lastModified: 0,
  //   isThirdParty: true,
  //   href: 'https://nextjs.org/',
  // },
]
// todo
// async function getMenuPosts(dir: string[]): Promise<string[]> {
//   const nestPosts = await Promise.all(
//     dir.map(async (menu) => {
//       const result = await fs.readdir(`./posts/${menu}`)
//       return result.map((el) => (menu ? `${menu}/${el}` : el))
//     }),
//   )
//   return nestPosts.flat()
// }

export const getPosts = cache(async (includeThirdPartyPosts?: boolean) => {
  // const posts = await getMenuPosts(['', 'next-13'])
  const posts = await fs.readdir(`./posts/`)

  const postsWithMetadata = await Promise.all(
    posts
      .filter(
        (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx',
      )
      .map(async (file) => {
        const filePath = `./posts/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }
        const lastModified = 0

        return { ...data, body: content, lastModified } as Post
      }),
  )

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyPosts ? thirdPartyPosts : []),
  ]

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0,
    ) as Post[]

  return filtered
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

export default getPosts
