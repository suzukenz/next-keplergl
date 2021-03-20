import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'

const TokenError: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push('/')
    }, 5000)
    return () => clearTimeout(timer)
  })
  return (
    <div>
      トークンを取得できませんでした。
      <br />
      <Link href="/">
        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
          トップページ
        </span>
      </Link>
      に戻り再入力してください。
      <br />
      （５秒後に自動で遷移します...）
    </div>
  )
}

export default TokenError
