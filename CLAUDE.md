# Personal Website

## Stack
- Next.js 16 (App Router), Tailwind 3, MDX

## Structure
- /src/lib → helper functions for MDX parsing
- /src/content/posts → blog posts (.mdx)
- /src/content/works → project pages (.mdx)
- /src/components/layouts → common sections and layout components
- /src/components/ui → reusable UI primitives
- /src/components/icons → icon components

## Conventions
- camelCase for variables and functions
- PascalCase for components and types
- kebab-case for file names (e.g. blog-card.tsx)
- No console.log in production

## Key Decisions
- MDX frontmatter fields: title, date, description, tags
- Images go in /public/images/[post-slug]/
- No external UI libraries (only Tailwind + custom components)

## Do Not
- Don't install new dependencies without asking
- Don't modify /src/content files unless asked

## Session End Protocol
- Before ending, update CLAUDE.md with any new decisions, patterns, or mistakes to avoid.
