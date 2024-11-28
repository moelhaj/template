import { BellRing } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
	return (
		<div className="min-h-screen text-white relative bg-gray-100">
			<div className="absolute inset-0 w-full z-20 bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-[90%] gradient" />

			<div className="w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row">
				<div className="relative flex-1 py-20">
					<div className="relative z-30 flex flex-col gap-4 items-center justify-center lg:justify-start">
						<div className="lg:hidden flex w-full justify-center gap-4 mx-auto p-4">
							<Button variant="outline">View All</Button>
							<Button variant="outline">Corporate</Button>
							<Button variant="outline">SME</Button>
						</div>
						<h2 className="lg:hidden text-center font-bold text-2xl">
							Flynas signature credit card
						</h2>
						<p className="lg:hidden text-center">Miles Card</p>
						<Carousel />
						<h2 className="hidden lg:block font-bold text-xl">Travel Pluse</h2>
						<p className="hidden lg:block">Credit Card</p>
					</div>
				</div>
				<div className="relative z-40 flex-1 p-4 flex flex-col gap-4 items-center justify-center lg:justify-start ">
					<div className="hidden lg:flex justify-end w-full p-20">
						<Button
							variant="outline"
							className="bg-white border-blue-600 text-blue-600"
						>
							Compare cards
						</Button>
					</div>
					<Cards />
					{/* buttons */}
					<div className="flex gap-4 mt-56">
						<Button className="rounded-lg h-10 bg-blue-600 text-white">
							Apply Now
						</Button>
						<Button
							className="rounded-lg h-10 border-blue-600 text-blue-600"
							variant="outline"
						>
							Learn More
						</Button>
					</div>
					<Button
						variant="outline"
						className="lg:hidden bg-white border-blue-600 text-blue-600"
					>
						Compare cards
					</Button>
				</div>
			</div>
		</div>
	);
}

const Cards = () => {
	return (
		<div className="absolute -top-10 lg:top-1/4 flex flex-col gap-4">
			<div className="min-w-[300px] lg:min-w-[400px] lg:ml-20 bg-white flex items-center space-x-4 rounded-2xl px-4 py-3 text-gray-800">
				<div className="bg-gray-200 rounded-full p-3 grid place-content-center">
					<BellRing />
				</div>
				<div className="flex-1 space-y-1">
					<p className="text-sm font-medium leading-none">Push Notifications</p>
					<p className="text-sm text-muted-foreground">Send notifications to device.</p>
				</div>
			</div>
			<div className="min-w-[300px] lg:min-w-[400px] lg:ml-10 bg-white flex items-center space-x-4 rounded-2xl px-4 py-3 text-gray-800">
				<div className="bg-gray-200 rounded-full p-3 grid place-content-center">
					<BellRing />
				</div>
				<div className="flex-1 space-y-1">
					<p className="text-sm font-medium leading-none">Push Notifications</p>
					<p className="text-sm text-muted-foreground">Send notifications to device.</p>
				</div>
			</div>
			<div className="min-w-[300px] lg:min-w-[400px] bg-white flex items-center space-x-4 rounded-2xl px-4 py-3 text-gray-800">
				<div className="bg-gray-200 rounded-full p-3 grid place-content-center">
					<BellRing />
				</div>
				<div className="flex-1 space-y-1">
					<p className="text-sm font-medium leading-none">Push Notifications</p>
					<p className="text-sm text-muted-foreground">Send notifications to device.</p>
				</div>
			</div>
		</div>
	);
};

const Carousel = () => {
	return (
		<>
			<div className="bg-gray-200 w-80 h-80 rounded-xl"></div>
			<div className="flex gap-2">
				<div className="w-2 h-2 rounded-full bg-white" />
				<div className="w-2 h-2 rounded-full bg-white/40" />
				<div className="w-2 h-2 rounded-full bg-white/40" />
				<div className="w-2 h-2 rounded-full bg-white/40" />
				<div className="w-2 h-2 rounded-full bg-white/40" />
			</div>
		</>
	);
};
