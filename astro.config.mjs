import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://rudresh-kar.github.io' : 'https://globalselfhealthcare.pages.dev',
  base: isGitHubPages ? '/GSHER' : '/',
});
