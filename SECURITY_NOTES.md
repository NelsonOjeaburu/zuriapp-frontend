# Known accepted findings

## npm audit: vitest/esbuild dev-tooling vulnerabilities (moderate/high/critical)
`npm audit` flags vulnerabilities in `esbuild` (Vite's dev server) and `@vitest/mocker`.
Both are devDependencies used only to build and test the app locally and in CI.
The production Docker image is multi-stage: only the compiled static output in
`dist/` is copied into the final nginx-based image (see Dockerfile). `node_modules`,
where these vulnerable packages live, never exists in the shipped image, and Trivy's
scan of the final image confirms this (0 findings from node-pkg sources). Not
force-upgrading now to avoid breaking Vite/Vitest major-version changes under a
tight deadline; revisit post-submission.
