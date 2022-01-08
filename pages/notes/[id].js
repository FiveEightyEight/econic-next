import React from 'react';
import { useRouter } from 'next/router';

const Notes = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<p>Note Page: {id}</p>
			<div>
				<button onClick={(e) => router.push('/')}>Go Back Home</button>
			</div>
		</>
	);
};

export default Notes;
