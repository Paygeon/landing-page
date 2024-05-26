
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined) => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}
