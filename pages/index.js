import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const v= 1;
	return (
		<div>
			<h1 className="text-3xl text-red-600">Econic</h1>
			<nav className='w-max justify-between space-x-5'>
        <Link className="w-10" href="/notes/">
					<a>Go to All Note</a>
				</Link>
				<Link className="w-10" href="/notes/[id]" as={`/notes/${1}`}>
					<a>Go to First Note</a>
				</Link>
			</nav>
		</div>
	);
}
