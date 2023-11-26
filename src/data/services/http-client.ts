import { RequestInit } from 'next/dist/server/web/spec-extension/request'

export async function request(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  const response = await fetch(url, init)

  return response.json()
}
