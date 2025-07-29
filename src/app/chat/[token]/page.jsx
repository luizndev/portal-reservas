// app/chat/[token]/page.jsx
'use client'

import { useParams } from 'next/navigation'

export default function ChatPage() {
  const { token } = useParams()

  return (
    <div>
      <h1>Chat</h1>
      <p>Token recebido: {token}</p>
    </div>
  )
}
