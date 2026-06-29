# @org/npm-package-cloudscaile-demo

> CloudScaile Demo — a TypeScript-first npm package.

## Installation

```bash
npm install @org/npm-package-cloudscaile-demo
```

## Development

```bash
# Install dependencies
npm install

# Type-check (no emit)
npm run lint

# Watch mode (rebuilds on save)
npm run dev

# Run tests
npm test

# Production build
npm run build
```

## Publishing

### Manual

1. Log in to npm:
   ```bash
   npm login
   ```
2. Bump the version:
   ```bash
   npm version patch   # or minor / major
   ```
3. Publish:
   ```bash
   npm publish --access public
   ```

### Automated via GitHub Actions

1. Add your npm token as a repository secret named **`NPM_TOKEN`**  
   *(GitHub → Settings → Secrets → Actions → New repository secret)*
2. Create a GitHub Release — the workflow in `.github/workflows/publish.yml`  
   runs tests, builds, and publishes automatically.

## License

MIT
