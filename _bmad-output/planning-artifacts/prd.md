# B&L Worldwide - Product Requirements Document (V3 Pivot)

## 1. Executive Summary
B&L Worldwide requires a premium, authoritative corporate landing page. This iteration officially pivots the brand identity to a Deep Navy and Sky Blue palette (`#274c77` and `#a3cef1`). The design must convey the gravity of a global infrastructure and defense leader, utilizing the `Inter` font family and sophisticated glassmorphism.

## 2. Brand Identity & Design System
*   **Primary Colors**: Deep Blue (`#274c77`), Primary Dark (`#1b3554`)
*   **Accent Colors**: Medium Blue (`#6096ba`), Sky Blue (`#a3cef1`)
*   **Neutral/Backgrounds**: Light Gray (`#e7ecef`), Deep Navy/Black (`#1b263b`)
*   **Typography**: `Inter` (system-ui fallbacks), clean sans-serif.
*   **Vibe**: Authoritative, Global, Deep-Tech, Political, Defense, Aerospace.

## 3. Scope & Features
The single-page application (SPA) will consist of the following sequenced sections:

### 3.1 Global Navigation (`Navbar.jsx`)
*   Transparent to glassmorphic transition on scroll.
*   Fixed top header, discarding the "floating pill" style.
*   Seamless responsive mobile drawer with `has-backdrop-blur`.

### 3.2 Immersive Hero (`HeroVideo.jsx`)
*   Dual-source `<video>` element for responsive viewport handling.
*   Gradient overlay (`#1b263b` to transparent) with `mix-blend-multiply` for deep contrast.
*   "Connecting Continents" core messaging with a glowing radar/status ping indicator.

### 3.3 Core Missions Accordion (`Missions.jsx`)
*   Full-width horizontal layout on mobile, expanding vertical flex accordion on desktop.
*   Requires precise `cubic-bezier` pure CSS flex transitions for premium "weight".
*   Iconography via `iconify-icon` (Solar icons).

### 3.4 Data Validation (`StatsBar.jsx`)
*   Intersection-Observer powered "count-up" statistics.
*   Deep Blue background (`#274c77`) with Sky Blue (`#a3cef1`) accents.
*   Metrics: 1500+ Projects, 85+ Countries, 45B Capital.

### 3.5 Sector Matrix (`DivisionsGrid.jsx`)
*   6-card grid with image headers and glassmorphic content areas.
*   Subtle hover elevations (`-translate-y-2`) and shadow expansions.
*   Background image overlay with `#e7ecef` wash to maintain light-mode readability.

### 3.6 Chronological History (`TrackRecord.jsx`)
*   Alternating left/right vertical timeline layout.
*   Scroll-reveal animations for each milestone.
*   Connecting central vertical line with node markers.

## 4. Technical Constraints
*   **Framework**: React (Vite).
*   **Styling**: TailwindCSS + bespoke CSS Modules/globals.
*   **Icons**: Iconify (`solar` collection).
*   **Deployment**: Firebase Hosting.
