<script lang="ts">
	import { base } from '$app/paths';
	import {
		projects,
		domains,
		domainLabels,
		domainColors,
		readyCount,
		totalCount,
		type Domain
	} from '$lib/data/projects';

	let activeDomain: Domain | 'all' = $state('all');

	let filtered = $derived(
		activeDomain === 'all' ? projects : projects.filter((p) => p.domain === activeDomain)
	);
</script>

<div class="page">
	<header class="header">
		<div class="container">
			<a href="{base}/" class="back-link">&larr; Back to Hub</a>
			<h1 class="title">All Projects</h1>
			<p class="subtitle">
				<span class="stats-ready">{readyCount}</span> of {totalCount} projects ready for learning
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

	<!-- Project List -->
	<section class="project-list">
		<div class="container">
			{#each filtered as project (project.slug)}
				<div class="project-row" class:disabled={project.status === 'coming-soon'}>
					<div class="project-info">
						<div class="project-meta">
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
						<h3 class="project-name">{project.name}</h3>
						<p class="project-description">{project.description}</p>
					</div>
					<div class="project-actions">
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							class="action-link github-link"
						>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
								<path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								/>
							</svg>
							GitHub
						</a>
						{#if project.status === 'ready'}
							<a href={project.learnUrl} class="action-link learn-link">
								Start Learning
							</a>
						{:else}
							<span class="action-link disabled-link">Coming Soon</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
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

	.header {
		padding: 3rem 0 2rem;
	}

	.back-link {
		display: inline-block;
		font-size: 0.85rem;
		color: #64748b;
		margin-bottom: 1rem;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: #00d4ff;
	}

	.title {
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 800;
		margin-bottom: 0.5rem;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 0.95rem;
		color: #94a3b8;
		font-family: 'JetBrains Mono', monospace;
	}

	.stats-ready {
		color: #10b981;
		font-weight: 700;
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

	/* Project List */
	.project-list {
		padding: 1.5rem 0;
		flex: 1;
	}

	.project-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.25rem 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 10px;
		margin-bottom: 0.75rem;
		background: rgba(255, 255, 255, 0.02);
		transition: all 0.2s;
	}

	.project-row:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.12);
	}

	.project-row.disabled {
		opacity: 0.6;
	}

	.project-info {
		flex: 1;
		min-width: 0;
	}

	.project-meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		margin-bottom: 0.4rem;
	}

	.domain-badge {
		font-size: 0.65rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.15rem 0.5rem;
		border-radius: 100px;
		border: 1px solid;
	}

	.status-badge {
		font-size: 0.65rem;
		font-weight: 500;
		padding: 0.15rem 0.5rem;
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

	.project-name {
		font-size: 1rem;
		font-weight: 700;
		font-family: 'JetBrains Mono', monospace;
		color: #f1f5f9;
		margin-bottom: 0.2rem;
	}

	.project-description {
		font-size: 0.85rem;
		color: #94a3b8;
	}

	.project-actions {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		flex-shrink: 0;
		margin-left: 1.5rem;
	}

	.action-link {
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

	@media (max-width: 640px) {
		.project-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.project-actions {
			margin-left: 0;
		}
	}
</style>
