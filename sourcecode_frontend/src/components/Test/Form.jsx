import { useState } from 'react';

const Form = ({ createNotification }) => {
	const [id, setId] = useState(0);
	const [title, setTitle] = useState('Lorem ipsum');
	const [subTitle, setSubTitle] = useState('');
	const [content, setContent] = useState('Dolor sit amet');
	const [timeout, setTimeout] = useState(15);
	const [type, setType] = useState(1);
	const [position, setPosition] = useState(0);
	const [stack, setStack] = useState(0);

	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				width: 175,
				background: 'rgb(56, 63, 13)',
				borderRadius: '0.25rem',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '7.5px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
			}}
		>
			<h1 style={{ marginBottom: '5px', fontSize: '12px' }}>
				Submit Notification
			</h1>

			<div style={{ width: '100%', display: 'flex', marginBottom: '5px' }}>
				<div style={{ width: '50%', paddingRight: '2.5px' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '2.5px',
							fontSize: '8px'
						}}
					>
						Title
					</label>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={{
							width: '100%',
							padding: '2px',
							borderRadius: '2px',
							border: '1px solid #ccc',
							fontSize: '8px',
							color: 'whitesmoke'
						}}
					/>
				</div>
				<div style={{ width: '50%', paddingLeft: '2.5px' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '2.5px',
							fontSize: '8px'
						}}
					>
						Subtitle
					</label>
					<input
						type='text'
						value={subTitle}
						onChange={(e) => setSubTitle(e.target.value)}
						style={{
							width: '100%',
							padding: '2px',
							borderRadius: '2px',
							border: '1px solid #ccc',
							fontSize: '8px',
							color: 'whitesmoke'
						}}
					/>
				</div>
			</div>

			<div style={{ width: '100%', marginBottom: '5px' }}>
				<label
					style={{
						display: 'block',
						marginBottom: '2.5px',
						fontSize: '8px'
					}}
				>
					Content
				</label>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					style={{
						width: '100%',
						padding: '2px',
						borderRadius: '2px',
						border: '1px solid #ccc',
						minHeight: '40px',
						fontSize: '8px',
						lineHeight: 1.15,
						color: 'whitesmoke'
					}}
				/>
			</div>

			<div style={{ width: '100%', display: 'flex', marginBottom: '5px' }}>
				<div style={{ width: '50%', paddingRight: '2.5px' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '2.5px',
							fontSize: '8px'
						}}
					>
						Duration (second)
					</label>
					<input
						type='number'
						value={timeout}
						onChange={(e) => setTimeout(Number(e.target.value))}
						style={{
							width: '100%',
							padding: '2px',
							borderRadius: '2px',
							border: '1px solid #ccc',
							fontSize: '8px',
							color: 'whitesmoke'
						}}
					/>
				</div>
				<div style={{ width: '50%', paddingLeft: '2.5px' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '2.5px',
							fontSize: '8px'
						}}
					>
						Type
					</label>
					<select
						value={type}
						onChange={(e) => setType(Number(e.target.value))}
						style={{
							width: '100%',
							padding: '2px',
							borderRadius: '2px',
							border: '1px solid #ccc',
							fontSize: '8px',
							color: 'whitesmoke'
						}}
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
					</select>
				</div>
			</div>

			<div style={{ width: '100%', display: 'flex', marginBottom: '5px' }}>
				<div
					style={{ width: '75%', marginBottom: '5px', paddingRight: '2.5px' }}
				>
					<label
						style={{ display: 'block', marginBottom: '2.5px', fontSize: '8px' }}
					>
						Position
					</label>
					<select
						value={position}
						onChange={(e) => setPosition(Number(e.target.value))}
						style={{
							width: '100%',
							padding: '2px',
							borderRadius: '2px',
							border: '1px solid #ccc',
							fontSize: '8px',
							color: 'whitesmoke'
						}}
					>
						<option value={0}>0</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
					</select>
				</div>

				<div style={{ width: '25%', paddingLeft: '2.5px' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '2.5px',
							fontSize: '8px'
						}}
					>
						Stack
					</label>
					<select
						value={stack}
						onChange={(e) => setStack(Number(e.target.value))}
						style={{
							width: '100%',
							padding: '2px',
							borderRadius: '2px',
							border: '1px solid #ccc',
							fontSize: '8px',
							color: 'whitesmoke'
						}}
					>
						<option value={1}>Yes</option>
						<option value={0}>No</option>
					</select>
				</div>
			</div>

			<button
				onClick={() => {
					createNotification(
						title,
						subTitle,
						content,
						timeout * 1000,
						type,
						position,
						stack === 0 ? false : true
					);
					setId(id + 1);
				}}
				style={{
					width: '100%',
					padding: '4px',
					background: 'red',
					color: 'white',
					border: 'none',
					borderRadius: '2px',
					cursor: 'pointer',
					fontSize: '8px'
				}}
			>
				Create Notification
			</button>
		</div>
	);
};

export default Form;
