export type Domain =
	| 'walking'
	| 'flying'
	| 'underwater'
	| 'arms'
	| 'ai'
	| 'simulation'
	| 'rust'
	| 'middleware'
	| 'security'
	| 'hardware'
	| 'datasets';

export type Status = 'ready' | 'coming-soon';

export interface Project {
	name: string;
	slug: string;
	description: string;
	domain: Domain;
	github: string;
	status: Status;
}

export const domainLabels: Record<Domain, string> = {
	walking: 'Walking',
	flying: 'Flying',
	underwater: 'Underwater',
	arms: 'Arms',
	ai: 'AI',
	simulation: 'Simulation',
	rust: 'Rust',
	middleware: 'Middleware',
	security: 'Security',
	hardware: 'Hardware',
	datasets: 'Datasets'
};

export const domainColors: Record<Domain, string> = {
	walking: '#00d4ff',
	flying: '#7c3aed',
	underwater: '#0ea5e9',
	arms: '#f59e0b',
	ai: '#ef4444',
	simulation: '#10b981',
	rust: '#f97316',
	middleware: '#6366f1',
	security: '#ec4899',
	hardware: '#84cc16',
	datasets: '#14b8a6'
};

export const projects: Project[] = [
	// Walking
	{
		name: 'StanfordQuadruped',
		slug: 'stanford-quadruped',
		description: 'Stanford Pupper quadruped robot dog',
		domain: 'walking',
		github: 'https://github.com/carokia-robotics/StanfordQuadruped',
		status: 'coming-soon'
	},
	{
		name: 'Cheetah-Software',
		slug: 'cheetah-software',
		description: 'MIT Mini Cheetah dynamic quadruped',
		domain: 'walking',
		github: 'https://github.com/carokia-robotics/Cheetah-Software',
		status: 'coming-soon'
	},
	{
		name: 'champ',
		slug: 'champ',
		description: 'Multi-robot quadruped framework',
		domain: 'walking',
		github: 'https://github.com/carokia-robotics/champ',
		status: 'coming-soon'
	},
	{
		name: 'OpenCat',
		slug: 'opencat',
		description: 'Arduino/ESP32 quadruped robot pet',
		domain: 'walking',
		github: 'https://github.com/carokia-robotics/OpenCat',
		status: 'coming-soon'
	},
	{
		name: 'upkie',
		slug: 'upkie',
		description: 'Wheeled biped balancing robot',
		domain: 'walking',
		github: 'https://github.com/carokia-robotics/upkie',
		status: 'coming-soon'
	},

	// Flying
	{
		name: 'ardupilot',
		slug: 'ardupilot',
		description: 'Multi-vehicle autopilot (copter, plane, rover, sub)',
		domain: 'flying',
		github: 'https://github.com/carokia-robotics/ardupilot',
		status: 'coming-soon'
	},
	{
		name: 'PX4-Autopilot',
		slug: 'px4-autopilot',
		description: 'Professional drone flight stack',
		domain: 'flying',
		github: 'https://github.com/carokia-robotics/PX4-Autopilot',
		status: 'coming-soon'
	},
	{
		name: 'crazyflie-firmware',
		slug: 'crazyflie-firmware',
		description: 'Nano quadcopter swarm platform',
		domain: 'flying',
		github: 'https://github.com/carokia-robotics/crazyflie-firmware',
		status: 'coming-soon'
	},

	// Underwater
	{
		name: 'BlueOS',
		slug: 'blueos',
		description: 'Open-source OS for marine robots',
		domain: 'underwater',
		github: 'https://github.com/carokia-robotics/BlueOS',
		status: 'coming-soon'
	},

	// Arms
	{
		name: 'PAROL6-Desktop-robot-arm',
		slug: 'parol6-desktop-robot-arm',
		description: '3D-printed 6-DOF robot arm',
		domain: 'arms',
		github: 'https://github.com/carokia-robotics/PAROL6-Desktop-robot-arm',
		status: 'coming-soon'
	},
	{
		name: 'SO-ARM100',
		slug: 'so-arm100',
		description: 'Hugging Face LeRobot collaborative arm',
		domain: 'arms',
		github: 'https://github.com/carokia-robotics/SO-ARM100',
		status: 'coming-soon'
	},

	// AI
	{
		name: 'lerobot',
		slug: 'lerobot',
		description: 'End-to-end robot learning (imitation + RL)',
		domain: 'ai',
		github: 'https://github.com/carokia-robotics/lerobot',
		status: 'coming-soon'
	},
	{
		name: 'ROS-LLM',
		slug: 'ros-llm',
		description: 'LLM integration for ROS robots',
		domain: 'ai',
		github: 'https://github.com/carokia-robotics/ROS-LLM',
		status: 'coming-soon'
	},
	{
		name: 'candle',
		slug: 'candle',
		description: 'Pure-Rust ML inference framework',
		domain: 'ai',
		github: 'https://github.com/carokia-robotics/candle',
		status: 'coming-soon'
	},

	// Simulation
	{
		name: 'mujoco_playground',
		slug: 'mujoco-playground',
		description: 'GPU-accelerated robot learning',
		domain: 'simulation',
		github: 'https://github.com/carokia-robotics/mujoco_playground',
		status: 'coming-soon'
	},
	{
		name: 'legged_gym',
		slug: 'legged-gym',
		description: 'ANYmal/legged robot training',
		domain: 'simulation',
		github: 'https://github.com/carokia-robotics/legged_gym',
		status: 'coming-soon'
	},

	// Rust
	{
		name: 'dora',
		slug: 'dora',
		description: 'Dataflow-oriented robotics architecture',
		domain: 'rust',
		github: 'https://github.com/carokia-robotics/dora',
		status: 'coming-soon'
	},
	{
		name: 'zenoh',
		slug: 'zenoh',
		description: 'Universal communication middleware',
		domain: 'rust',
		github: 'https://github.com/carokia-robotics/zenoh',
		status: 'coming-soon'
	},
	{
		name: 'rig',
		slug: 'rig',
		description: 'Rust LLM agent framework',
		domain: 'rust',
		github: 'https://github.com/carokia-robotics/rig',
		status: 'coming-soon'
	},
	{
		name: 'opencv-rust',
		slug: 'opencv-rust',
		description: 'OpenCV bindings for Rust',
		domain: 'rust',
		github: 'https://github.com/carokia-robotics/opencv-rust',
		status: 'coming-soon'
	},

	// Middleware
	{
		name: 'studio',
		slug: 'studio',
		description: 'Foxglove robotics observability platform',
		domain: 'middleware',
		github: 'https://github.com/carokia-robotics/studio',
		status: 'coming-soon'
	},

	// Security
	{
		name: 'securbot',
		slug: 'securbot',
		description: 'Autonomous security robot',
		domain: 'security',
		github: 'https://github.com/carokia-robotics/securbot',
		status: 'coming-soon'
	},

	// Hardware
	{
		name: 'bldc',
		slug: 'bldc',
		description: 'VESC open motor controller firmware',
		domain: 'hardware',
		github: 'https://github.com/carokia-robotics/bldc',
		status: 'coming-soon'
	},
	{
		name: 'Arduino-FOC',
		slug: 'arduino-foc',
		description: 'Field Oriented Control for Arduino',
		domain: 'hardware',
		github: 'https://github.com/carokia-robotics/Arduino-FOC',
		status: 'coming-soon'
	},

	// Datasets
	{
		name: 'open_x_embodiment',
		slug: 'open-x-embodiment',
		description: '1M+ robot trajectories from 22 robots',
		domain: 'datasets',
		github: 'https://github.com/carokia-robotics/open_x_embodiment',
		status: 'coming-soon'
	}
];

export const domains: Domain[] = [
	'walking',
	'flying',
	'underwater',
	'arms',
	'ai',
	'simulation',
	'rust',
	'middleware',
	'security',
	'hardware',
	'datasets'
];
