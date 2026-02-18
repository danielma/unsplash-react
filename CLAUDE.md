# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```fish
# Development server (requires Unsplash API key)
UNSPLASH_ACCESS_KEY=<key> yarn run dev
# Serves examples at http://localhost:10001/

# Production build (outputs to dist/)
yarn run build

# Lint (no separate command; run via eslint directly)
./node_modules/.bin/eslint src/
```

Note: There are no tests in this project (`yarn test` exits with error).

## Architecture

This is a React component library for selecting and uploading photos from Unsplash. It bundles to three formats: CJS, ESM, and UMD.

### Core Components

**`UnsplashPicker`** (`src/index.js`) - The main exported component. Handles:
- Search UI with debounced queries
- Photo grid display with infinite scroll (via IntersectionObserver)
- Photo selection and download orchestration

**`UnsplashWrapper`** (`src/unsplash_wrapper.js`) - Thin wrapper around the `unsplash-js` SDK. Abstracts API calls for listing, searching, and downloading photos.

### Uploader Pattern

The library uses a **component injection pattern** for uploading. `UnsplashPicker` accepts an `Uploader` prop (a React component) that receives:
- `unsplashPhoto` - The selected photo object from Unsplash API
- `downloadPhoto(photo)` - Function that returns a `Promise<Response>` for the photo blob
- `onFinishedUploading` - Callback to signal completion

Built-in uploaders in `src/uploaders/`:
- `Base64Uploader` - Encodes blob as base64 in a hidden input
- `BlobUploader` - Passes blob via callback for custom handling
- `ExternalLocationUploader` - POSTs blob to a configured URL (e.g., S3)
- `InsertIntoApplicationUploader` - Returns the photo URL directly
- `DataTransferUploader` - Experimental; sets blob as file input value

### Utilities

- `withDefaultProps(Component, defaultProps)` - HOC for passing default props to uploaders
- Custom `debounce` and `throttle` implementations in `src/utils.js`

## Code Style

- Prettier with no semicolons, ES5 trailing commas
- Prefix unused variables with underscore (`_unusedVar`)
- React component method order: lifecycle → everything else → handlers → getters → render methods → render
