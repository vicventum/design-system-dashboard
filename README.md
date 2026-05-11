# Design System Dashboard

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://design-system-dashboard-git-main-vicventums-projects.vercel.app/?path=/docs/guides-introduction--docs) [![NPM Version](https://img.shields.io/npm/v/@vicventum/design-system-dashboard?style=for-the-badge)](https://www.npmjs.com/package/@vicventum/design-system-dashboard) [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

<hr class="mt-4" />

This project is a **Nuxt Layer** that functions as a design system for Nuxt applications. It contains shared components, styles, and configurations.

## Usage as Nuxt Layer

To use this project as a library in another Nuxt project, follow these steps:

### 1. Installation

Install the package using NPM (or your preferred package manager):

```bash
npm install @vicventum/design-system-dashboard
```

### 2. Configuration in Nuxt

In the project where you want to use the design system, add the package to the `extends` property in your `nuxt.config.ts` file:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
    extends: ['@vicventum/design-system-dashboard'],
})
```

And that's it! Nuxt will automatically load the components, composables, assets, and configuration from this layer into your project.

> [!note]
> 🚀 The component library is currently being migrated from an older version, so you'll see new pieces arriving here very soon!

## Local Development

If you want to contribute or test this project locally:

### Dependency Installation

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

### Storybook

To view and test components in isolation:

```bash
npm run storybook
```

## Production

To build the project for production (as a standalone application):

```bash
npm run build
```
