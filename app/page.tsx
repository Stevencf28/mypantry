export default function Home() {
	return (
		<section className="">
			{/* background video */}
			<div className="absolute inset-0 w-full -z-10">
				<div className="absolute inset-0 bg-black/60 z-10" />
				<video
					preload="auto"
					autoPlay
					loop
					muted
					className="absolute w-full h-full object-cover"
				>
					<source src="/video/cooking.mp4" type="video/mp4" />
				</video>
			</div>
			{/* content */}
			<div className="relative ">
				<h1 className="font-bold">Home</h1>
			</div>
		</section>
	);
}
