import React from 'react';


function FeedAudit() {
	const [count, setCount] = React.useState<number>(0);

  return (
		<div>
			<h3>Feed Audit</h3>
			<button onClick={() => setCount(c => c + 1)}>Increase</button>
			<div>{count}</div>
		</div>
  )
}

export default FeedAudit;
