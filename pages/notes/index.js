import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Notes = () => {
	const router = useRouter();
	const listOfNotes = [1, 2, 3, 4, 5];
	return (
		<>
			<p>Notes Index Path</p>
			<p>Our notes</p>
			<ul>
				{listOfNotes.map((noteId, i) => (
					<li key={`${noteId}-${i}`}>
						<button onClick={(e) => router.push(`/notes/[id]`, `/notes/${noteId}`)}>
							{noteId}
						</button>
					</li>
				))}
			</ul>
            <p>
                <Link href={'/'}>
                    <a>Go Back Home</a>
                </Link>
            </p>
		</>
	);
};

export default Notes;
