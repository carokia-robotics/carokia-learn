<script lang="ts">
	import { base } from '$app/paths';
	import {
		projects,
		domains,
		domainLabels,
		domainColors,
		type Domain,
		type Project
	} from '$lib/data/projects';

	let activeDomain: Domain | 'all' = $state('all');

	let filtered = $derived(
		activeDomain === 'all' ? projects : projects.filter((p) => p.domain === activeDomain)
	);

	const projectCount = projects.length;
	const domainCount = domains.length;
</script>

<div class="page">
	<!-- Hero -->
	<header class="hero">
		<div class="hero-glow"></div>
		<div class="container">
			<p class="hero-badge">Powered by Codeilus</p>
			<h1 class="hero-title">
				Carokia <span class="accent">Learning Hub</span>
			</h1>
			<p class="hero-subtitle">
				Study the world's best open-source robots
			</p>
			<p class="hero-description">
				Interactive code exploration for {projectCount} projects across {domainCount} domains
			</p>
		</div>
	</header>

	<!-- Domain Filter -->
	<section class="filters">
		<div class="container">
			<div class="filter-bar">
				<button
					class="filter-btn"
					class:active={activeDomain === 'all'}
					onclick={() => (activeDomain = 'all')}
				>
					All ({projects.length})
				</button>
				{#each domains as domain}
					{@const count = projects.filter((p) => p.domain === domain).length}
					<button
						class="filter-btn"
						class:active={activeDomain === domain}
						style="--domain-color: {domainColors[domain]}"
						onclick={() => (activeDomain = domain)}
					>
						{domainLabels[domain]} ({count})
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Project Grid -->
	<section class="projects">
		<div class="container">
			<div class="grid">
				{#each filtered as project (project.slug)}
					<article class="card">
						<div class="card-header">
							<span
								class="domain-badge"
								style="background-color: {domainColors[project.domain]}20; color: {domainColors[project.domain]}; border-color: {domainColors[project.domain]}40"
							>
								{domainLabels[project.domain]}
							</span>
							<span
								class="status-badge"
								class:ready={project.status === 'ready'}
								class:coming-soon={project.status === 'coming-soon'}
							>
								{project.status === 'ready' ? 'Ready' : 'Coming Soon'}
							</span>
						</div>
						<h3 class="card-title">{project.name}</h3>
						<p class="card-description">{project.description}</p>
						<div class="card-actions">
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="card-link github-link"
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
									<path
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
									/>
								</svg>
								GitHub
							</a>
							{#if project.status === 'ready'}
								<a href="{base}/projects/{project.slug}/" class="card-link learn-link">
									Start Learning
								</a>
							{:else}
								<span class="card-link disabled-link">Coming Soon</span>
							{/if}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			<p>
				Built by <a href="https://github.com/carokia-robotics" target="_blank" rel="noopener noreferrer" class="footer-link">Carokia Robotics</a>
				&middot; Learning exports powered by <span class="accent">Codeilus</span>
			</p>
		</div>
	</footer>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Hero */
	.hero {
		position: relative;
		padding: 5rem 0 3rem;
		text-align: center;
		overflow: hidden;
	}

	.hero-glow {
		position: absolute;
		top: -200px;
		left: 50%;
		transform: translateX(-50%);
		width: 800px;
		height: 500px;
		background: radial-gradient(ellipse, rgba(0, 212, 255, 0.08) 0%, rgba(124, 58, 237, 0.04) 50%, transparent 70%);
		pointer-events: none;
	}

	.hero-badge {
		display: inline-block;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		font-weight: 500;
		color: #7c3aed;
		background: rgba(124, 58, 237, 0.1);
		border: 1px solid rgba(124, 58, 237, 0.3);
		border-radius: 100px;
		padding: 0.35rem 1rem;
		margin-bottom: 1.5rem;
		letter-spacing: 0.05em;
	}

	.hero-title {
		font-size: clamp(2.2rem, 5vw, 3.5rem);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.accent {
		background: linear-gradient(135deg, #00d4ff, #7c3aed);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: clamp(1.1rem, 2.5vw, 1.4rem);
		color: #94a3b8;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.hero-description {
		font-size: 0.95rem;
		color: #64748b;
		font-family: 'JetBrains Mono', monospace;
	}

	/* Filters */
	.filters {
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}

	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.filter-btn {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		font-weight: 500;
		color: #94a3b8;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 100px;
		padding: 0.4rem 0.9rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.filter-btn:hover {
		color: #e2e8f0;
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.15);
	}

	.filter-btn.active {
		color: var(--domain-color, #00d4ff);
		background: color-mix(in srgb, var(--domain-color, #00d4ff) 10%, transparent);
		border-color: color-mix(in srgb, var(--domain-color, #00d4ff) 30%, transparent);
	}

	/* Projects Grid */
	.projects {
		padding: 2.5rem 0;
		flex: 1;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.25rem;
	}

	/* Card */
	.card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		transition: all 0.2s;
	}

	.card:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.12);
		transform: translateY(-2px);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	.domain-badge {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.2rem 0.6rem;
		border-radius: 100px;
		border: 1px solid;
	}

	.status-badge {
		font-size: 0.7rem;
		font-weight: 500;
		padding: 0.2rem 0.6rem;
		border-radius: 100px;
	}

	.status-badge.ready {
		color: #10b981;
		background: rgba(16, 185, 129, 0.1);
		border: 1px solid rgba(16, 185, 129, 0.3);
	}

	.status-badge.coming-soon {
		color: #64748b;
		background: rgba(100, 116, 139, 0.1);
		border: 1px solid rgba(100, 116, 139, 0.2);
	}

	.card-title {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.4rem;
		font-family: 'JetBrains Mono', monospace;
		color: #f1f5f9;
	}

	.card-description {
		font-size: 0.9rem;
		color: #94a3b8;
		line-height: 1.5;
		margin-bottom: 1rem;
		flex: 1;
	}

	.card-actions {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}

	.card-link {
		font-size: 0.8rem;
		font-weight: 500;
		padding: 0.4rem 0.8rem;
		border-radius: 6px;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		transition: all 0.2s;
	}

	.github-link {
		color: #94a3b8;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.github-link:hover {
		color: #e2e8f0;
		background: rgba(255, 255, 255, 0.1);
	}

	.learn-link {
		color: #0a0a0f;
		background: linear-gradient(135deg, #00d4ff, #7c3aed);
		font-weight: 600;
	}

	.learn-link:hover {
		opacity: 0.9;
	}

	.disabled-link {
		color: #475569;
		cursor: default;
	}

	/* Footer */
	.footer {
		padding: 2rem 0;
		text-align: center;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		font-size: 0.85rem;
		color: #64748b;
	}

	.footer-link {
		color: #94a3b8;
		transition: color 0.2s;
	}

	.footer-link:hover {
		color: #00d4ff;
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.hero {
			padding: 3rem 0 2rem;
		}
	}
</style>
