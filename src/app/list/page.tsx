// @ts-nocheck
import { getServerSession } from "next-auth/next"
import { authOptions }      from "@/lib/authOptions"
import { prisma }           from "@/lib/prisma"

export default async function ListPage() {
  const session: any = await getServerSession(authOptions)
  const owner = session?.user?.email ?? ""

  const items = await (prisma as any).item.findMany({
    where: { ownerEmail: owner },
  })

  return (
    <main>
      <h1>Your Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}
