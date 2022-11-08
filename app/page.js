import Link from 'next/link'

export default function HomePage() {
  return (
    <Link href="/nested" prefetch={false}>
      Go to nested page
    </Link>
  )
}
