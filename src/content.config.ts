import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.string(), // e.g., "Web App", "Mobile", "API", "Tool"
			status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
			featured: z.boolean().default(false),
			startDate: z.string(), // Format: "June 2021" or "Jun 2021"
			endDate: z.string().optional(), // Format: "June 2024" or "Present"
			heroImage: image().optional(),
			technologies: z.array(z.string()).default([]), // Tech stack
			githubUrl: z.string().url().optional(),
			liveUrl: z.string().url().optional(),
			demoUrl: z.string().url().optional(),
		}),
});

export const collections = { blog, projects };
