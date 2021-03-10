const Layout = ({ children }) => {
	return (
		<div
			style={{ maxWidth: '42rem', margin: '0 auto', padding: '1rem 1.7rem' }}
		>
			<header
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					position: 'sticky',
					zIndex: '10',
					top: 0,
					backdropFilter: 'saturate(180%) blur(20px)',
				}}
			>
				<h3>logo</h3>
				<nav>
					<ul style={{ display: 'flex', flexDirection: 'row' }}>
						<li>something</li>
						<li>something</li>
						<li>something</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
