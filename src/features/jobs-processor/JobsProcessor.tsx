import React from 'react';


function JobsProcessor() {
	const [name, setName] = React.useState<string>('');
	const [value, setValue] = React.useState<string>('');

  return (
		<div>
			<h3>Jobs Processor</h3>
			<div>
				<label htmlFor='name'>Name</label>
				<input id='name' type="text" onChange={(e) => setName(e.target.value)} value={name} />
			</div>
			<div>
				<label htmlFor='value'>Value</label>
				<input id='value' type="text" onChange={(e) => setValue(e.target.value)} value={value} />
			</div>
		</div>
  )
}

export default JobsProcessor;
