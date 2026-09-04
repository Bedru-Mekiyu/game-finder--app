<p align="center">
  <img src="src/assets/logo.webp" alt="GameHub Logo" width="120" />
</p>

<h1 align="center">GameHub</h1>

<p align="center">
  <strong>A modern video game discovery platform</strong>
  <br />
  Browse, search, and explore thousands of games from a unified interface.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-4.0-646CFF?logo=vite" alt="Vite 4" />
  <img src="https://img.shields.io/badge/Chakra_UI-2.5-319795?logo=chakraui" alt="Chakra UI" />
  <img src="https://img.shields.io/badge/React_Query-4.28-FF4154?logo=reactquery" alt="React Query" />
  <img src="https://img.shields.io/badge/Zustand-4.3-443e38" alt="Zustand" />
  <img src="https://img.shields.io/badge/RAWG_API-powered-blue" alt="RAWG API" />
  <br />
  <img src="https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions" alt="CI: GitHub Actions" />
  <img src="https://img.shields.io/badge/status-active-success" alt="Status: Active" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License: MIT" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Component Tree](#component-tree)
- [Data Flow](#data-flow)
- [API Reference](#api-reference)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Development Workflow](#development-workflow)
- [Build & Deployment](#build--deployment)
- [CI/CD](#cicd)
- [Security](#security)
- [Limitations & Known Issues](#limitations--known-issues)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

**GameHub** is a single-page application (SPA) that provides a fast, modern interface for discovering video games. It consumes the [RAWG Video Games Database API](https://rawg.io/apidocs) — the largest open video game database — to surface game data including descriptions, ratings, screenshots, trailers, platforms, genres, and publishers.

Built with **React 18**, **TypeScript**, and **Vite**, GameHub focuses on delivering a polished browsing experience with real-time search, multi-dimensional filtering, infinite scroll, and smooth responsive layouts.

> **Note:** GameHub is a frontend-only application. It has no backend server, database, or user authentication. All data is fetched directly from the RAWG API on the client side.

---

## Problem Statement

The video game landscape is vast — thousands of new titles release every year across multiple platforms (PC, PlayStation, Xbox, Nintendo, mobile, etc.). Existing discovery tools are often:

- **Platform-specific** — tied to a single store (Steam, Epic, PlayStation Store)
- **Slow** — heavy pages with poor loading UX
- **Cluttered** — ads, reviews, and social features competing with discovery
- **Inflexible** — limited filtering, sorting, and search capabilities

GameHub solves this by providing a **unified, lightweight, and distraction-free** game browser powered by the comprehensive RAWG database.

---

## Features

### Core

| Feature | Status | Description |
|---------|--------|-------------|
| Game Browsing | ✅ Implemented | Infinite-scroll grid of game cards |
| Genre Filtering | ✅ Implemented | Filter by genre (Action, RPG, Shooter, etc.) |
| Platform Filtering | ✅ Implemented | Filter by platform family (PC, PlayStation, Xbox, etc.) |
| Sorting | ✅ Implemented | Sort by relevance, name, release date, popularity, rating |
| Search | ✅ Implemented | Real-time game search with debounced input |
| Game Details | ✅ Implemented | Detail page with description, screenshots, trailer, attributes |
| Dark Mode | ✅ Implemented | Toggle between light and dark themes |
| Responsive Design | ✅ Implemented | Mobile-friendly with adaptive grid layout |

### Detail View

- **Expandable description** — long descriptions truncated with "Read More" toggle
- **Game trailers** — embedded video player with poster
- **Screenshots gallery** — grid of game screenshots
- **Game attributes** — platforms, Metacritic score, genres, publishers
- **Emoji indicators** — visual rating cues (meh, recommended, exceptional)
- **Platform icons** — recognizable icons for each platform family

### UX

- Loading skeletons during data fetch
- Error boundaries with user-friendly messages
- Hover scale animation on game cards
- Infinite scroll pagination
- Route-based navigation with browser back/forward support

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 18.2 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Vite](https://vitejs.dev/) | 4.x | Build tool & dev server |
| [Chakra UI](https://chakra-ui.com/) | 2.5 | Component library & theming |
| [TanStack React Query](https://tanstack.com/query/v4) | 4.28 | Server state management & caching |
| [Zustand](https://github.com/pmndrs/zustand) | 4.3 | Client state management |
| [React Router](https://reactrouter.com/) | 6.10 | Routing & navigation |
| [Axios](https://axios-http.com/) | 1.3 | HTTP client |
| [Framer Motion](https://www.framer.com/motion/) | 10.0 | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | 4.7 | Icon library |
| [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) | 6.1 | Infinite scroll |

### API

| Service | Type | Description |
|---------|------|-------------|
| [RAWG API](https://rawg.io/apidocs) | External REST API | Video games database (500k+ games) |

### Development & CI

| Tool | Purpose |
|------|---------|
| ESLint (typescript-eslint) | Code linting |
| TypeScript | Type checking |
| GitHub Actions | Continuous Integration (Lint & Build verification) |

---

## Architecture

GameHub follows a **Component-Based Architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────┐
│                    Browser                          │
│  ┌───────────────────────────────────────────────┐  │
│  │            React Application                   │  │
│  │  ┌─────────┐  ┌──────────┐  ┌─────────────┐  │  │
│  │  │  Pages  │  │Components│  │   Hooks     │  │  │
│  │  ├─────────┤  ├──────────┤  ├─────────────┤  │  │
│  │  │ HomePage│  │ GameCard │  │ useGames    │  │  │
│  │  │ GameDtl │  │ GenreList│  │ useGenres   │  │  │
│  │  │ Layout  │  │ NavBar   │  │ useGame     │  │  │
│  │  │ ErrPage │  │ ...      │  │ usePlatforms│  │  │
│  │  └─────────┘  └──────────┘  └──────┬──────┘  │  │
│  │                                     │         │  │
│  │  ┌──────────────────────────────────┘         │  │
│  │  │  ┌──────────┐  ┌──────────────────────┐   │  │
│  │  │  │ Services │  │   State (Zustand)    │   │  │
│  │  │  ├──────────┤  ├──────────────────────┤   │  │
│  │  │  │ api-clnt │  │ GameQueryStore       │   │  │
│  │  │  │ image-url│  │  genreId, platformId │   │  │
│  │  │  └────┬─────┘  │  sortOrder, searchTxt│   │  │
│  │  │       │        └──────────────────────┘   │  │
│  │  │  ┌────▼─────┐                              │  │
│  │  │  │  Axios   │                              │  │
│  │  │  └────┬─────┘                              │  │
│  │  │       │                                     │  │
│  └──┼───────┼─────────────────────────────────────┘  │
│     │       │                                         │
│  ┌──▼───────▼──────────────────────────────────────┐  │
│  │            RAWG API (rawg.io)                    │  │
│  │  /games  /genres  /platforms  /screenshots      │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

1. **React Query for Server State** — All API data is managed through React Query, providing automatic caching, background refetching, and deduplication out of the box.

2. **Zustand for Client State** — The GameQuery (filter/sort/search parameters) is held in a lightweight Zustand store, separate from server data.

3. **Generic API Client** — The `APIClient<T>` class provides typed, reusable HTTP methods for all endpoints.

4. **Custom Hooks as Data Adapters** — Each data domain (games, genres, platforms, screenshots, trailers) has a dedicated hook that encapsulates query logic.

5. **Static Initial Data** — Genres and platforms are shipped with pre-bundled static data (`src/data/`) to eliminate initial loading flash.

6. **Image Cropping Utility** — A utility function crops RAWG images to 600×400 to reduce payload size.

---

## Project Structure

```
game-hub/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow
├── public/
│   └── vite.svg                 # App favicon
├── src/
│   ├── assets/                  # Static assets (images, icons)
│   │   ├── logo.webp
│   │   ├── bulls-eye.webp
│   │   ├── meh.webp
│   │   ├── thumbs-up.webp
│   │   └── no-image-placeholder.webp
│   ├── components/              # Reusable UI components
│   │   ├── ColorModeSwitch.tsx       # Dark mode toggle
│   │   ├── CriticScore.tsx           # Metacritic badge
│   │   ├── DefinitionItem.tsx        # Key-value pair display
│   │   ├── Emoji.tsx                 # Rating emoji indicator
│   │   ├── ExpandableText.tsx        # Truncated text with toggle
│   │   ├── GameAttributes.tsx        # Game metadata display
│   │   ├── GameCard.tsx              # Individual game card
│   │   ├── GameCardContainer.tsx     # Card wrapper (hover effect)
│   │   ├── GameCardSkeleton.tsx      # Loading skeleton
│   │   ├── GameGrid.tsx              # Infinite scroll grid
│   │   ├── GameHeading.tsx           # Dynamic page heading
│   │   ├── GameScreenshots.tsx       # Screenshot gallery
│   │   ├── GameTrailer.tsx           # Video trailer player
│   │   ├── GenreList.tsx             # Genre sidebar
│   │   ├── NavBar.tsx                # Top navigation bar
│   │   ├── PlatformIconList.tsx      # Platform icon row
│   │   ├── PlatformSelector.tsx      # Platform dropdown
│   │   ├── SearchInput.tsx           # Search form
│   │   └── SortSelector.tsx          # Sort dropdown
│   ├── data/                    # Static fallback data
│   │   ├── genres.ts                 # Pre-bundled genre list
│   │   └── platforms.ts              # Pre-bundled platform list
│   ├── entities/                # TypeScript interfaces (models)
│   │   ├── Game.ts
│   │   ├── Genre.ts
│   │   ├── Platform.ts
│   │   ├── Publisher.ts
│   │   ├── Screenshot.ts
│   │   └── Trailer.ts
│   ├── hooks/                   # Custom React hooks
│   │   ├── useData.ts                # Generic data fetcher hook
│   │   ├── useGame.ts                # Single game query
│   │   ├── useGames.ts               # Infinite games query
│   │   ├── useGenre.ts               # Single genre lookup
│   │   ├── useGenres.ts              # Genre list query
│   │   ├── usePlatform.ts            # Single platform lookup
│   │   ├── usePlatforms.ts           # Platform list query
│   │   ├── useScreenshots.ts         # Screenshot query
│   │   └── useTrailers.ts            # Trailer query
│   ├── pages/                   # Route-level page components
│   │   ├── ErrorPage.tsx
│   │   ├── GameDetailPage.tsx
│   │   ├── HomePage.tsx
│   │   └── Layout.tsx
│   ├── services/                # Infrastructure layer
│   │   ├── api-client.ts             # Axios instance & APIClient class
│   │   └── image-url.ts              # Image cropping utility
│   ├── App.css                  # (empty - unused)
│   ├── App.tsx                  # Root app component
│   ├── index.css                # Global styles
│   ├── main.tsx                 # Application entry point
│   ├── routes.tsx               # Route definitions
│   ├── store.ts                 # Zustand game query store
│   ├── theme.ts                 # Chakra UI theme customization
│   └── vite-env.d.ts            # Vite type declarations
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── tsconfig.app.json            # TypeScript app configuration
├── tsconfig.node.json           # TypeScript Node configuration
├── vite.config.ts               # Vite configuration
├── eslint.config.js             # ESLint flat config
└── .gitignore
```

---

## Component Tree

```
<App> (or <RouterProvider>)
├── <Layout>
│   ├── <NavBar>
│   │   ├── <Logo> (Image)
│   │   ├── <SearchInput>
│   │   └── <ColorModeSwitch>
│   └── <Outlet>
│       ├── <HomePage>
│       │   ├── <GenreList>
│       │   │   └── <GenreItem> × N
│       │   ├── <GameHeading />
│       │   ├── <PlatformSelector />
│       │   ├── <SortSelector />
│       │   └── <GameGrid>
│       │       └── <InfiniteScroll>
│       │           └── <GameCardContainer>
│       │               └── <GameCard>
│       │                   ├── <Image>
│       │                   ├── <PlatformIconList />
│       │                   ├── <CriticScore />
│       │                   ├── <GameTitle> (Link)
│       │                   └── <Emoji />
│       └── <GameDetailPage>
│           ├── <Heading>
│           ├── <ExpandableText>
│           ├── <GameAttributes>
│           │   ├── <DefinitionItem> × 4
│           │   └── <CriticScore>
│           ├── <GameTrailer>
│           └── <GameScreenshots>
│               └── <Image> × N
└── <ErrorPage>
    └── <NavBar>
```

---

## Data Flow

```
User Action                    Store Update                   Query Invalidation
─────────────                  ────────────                   ─────────────────
Select Genre    ──► setGenreId(id)     ──► React Query key changes
Select Platform ──► setPlatformId(id)  ──► React Query key changes
Sort            ──► setSortOrder(val)  ──► React Query key changes
Search          ──► setSearchText(val) ──► React Query key changes
                                                              │
                                                              ▼
                                                        API Call
                                                     (useGames hook)
                                                              │
                                                              ▼
                                                     GameGrid re-renders
                                                     with new results
```

---

## API Reference

GameHub relies on the [RAWG API](https://rawg.io/apidocs). Only public endpoints are used (no authentication required beyond the API key).

### Endpoints Used

| Endpoint | Method | Hook | Purpose |
|----------|--------|------|---------|
| `/games` | GET | `useGames` | Paginated list of games with filters |
| `/games/{slug}` | GET | `useGame` | Single game details |
| `/games/{id}/screenshots` | GET | `useScreenshots` | Game screenshots |
| `/games/{id}/movies` | GET | `useTrailers` | Game trailers |
| `/genres` | GET | `useGenres` | List of game genres |
| `/platforms/lists/parents` | GET | `usePlatforms` | List of platform families |

### Query Parameters (for `/games`)

| Parameter | Type | Source | Description |
|-----------|------|--------|-------------|
| `genres` | number | Zustand store | Genre ID filter |
| `parent_platforms` | number | Zustand store | Platform ID filter |
| `ordering` | string | Zustand store | Sort order (e.g., `-metacritic`, `name`) |
| `search` | string | Zustand store | Search query |
| `page` | number | React Query | Pagination (auto-managed) |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x (recommended)
- **npm** ≥ 9.x (or pnpm/yarn)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/<your-org>/game-hub.git
cd game-hub

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Environment Variables

> ⚠️ **Current State:** The RAWG API key is configured in `src/services/api-client.ts`.

To configure your own RAWG API key:

```bash
# .env
VITE_RAWG_API_KEY=your_api_key_here
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server (with HMR)
npm run dev

# Run ESLint check
npm run lint

# Type-check and build project
npm run build
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start Vite dev server with HMR |
| `build` | `tsc && vite build` | Type-check and build for production |
| `lint` | `eslint .` | Lint source code using ESLint |
| `preview` | `vite preview` | Preview production build locally |

---

## Development Workflow

1. **Pick a feature or fix** from the [Roadmap](#roadmap) or issues list
2. **Create a branch**: `git checkout -b feat/your-feature`
3. **Make changes** following existing patterns:
   - Components in `src/components/`
   - Hooks in `src/hooks/`
   - Entities in `src/entities/`
   - Services in `src/services/`
4. **Lint**: `npm run lint`
5. **Build & Type-check**: `npm run build`
6. **Commit**: Use descriptive commit messages
7. **Push and open a PR**

### Coding Conventions

- **Components**: Arrow function components with explicit `interface Props` typing
- **State**: Zustand for client state, React Query for server state
- **API**: Use the generic `APIClient<T>` class for new endpoints
- **Styling**: Chakra UI props
- **Exports**: Default exports for components and hooks

---

## Build & Deployment

### Production Build

```bash
npm run build
```

Output is written to `dist/`. The build runs TypeScript type checking before Vite bundling.

### Deployment

**Recommended deployment platforms:**

| Platform | Setup |
|----------|-------|
| **Vercel** | Connect Git repo → auto-detects Vite → deploys `dist/` |
| **Netlify** | Connect Git repo → build command `npm run build` → publish `dist/` |
| **Cloudflare Pages** | Connect Git repo → build command `npm run build` → output `dist/` |

---

## CI/CD

Automated validation is executed via GitHub Actions on every `push` and `pull_request` to `main`/`master` branches:

- **Environment**: Node.js 20
- **Steps**:
  1. Dependencies installation (`npm ci`)
  2. ESLint code checking (`npm run lint`)
  3. Production compilation & TypeScript check (`npm run build`)

---

## Security

- All external API communications use HTTPS.
- Client-side input rendering utilizes React's built-in XSS protection mechanisms.

---

## Limitations & Known Issues

- **Client-Side API Key** — API requests are made client-side directly to RAWG.
- **No Native Testing Suite** — Automated testing currently focuses on static analysis (ESLint) and TypeScript compilation.

---

## Roadmap

- [ ] Add unit and integration testing suite (Vitest + React Testing Library)
- [ ] Implement backend proxy for API key shielding
- [ ] Add dark/light mode preference persistence

---

## License

This project is open source under the [MIT License](LICENSE).
