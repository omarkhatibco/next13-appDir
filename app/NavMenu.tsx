import { fetcher } from 'utls/fetcher';
import Link from 'next/link';

export default async function NavMenu() {
  const topics = await fetcher('topics');

  return (
    <header className='bg-gray-100 p-4 space-x-4'>
      {topics.map(({ id, slug, title }) => (
        <Link key={id} href={`/${slug}`}>
          {title}
        </Link>
      ))}
    </header>
  );
}
