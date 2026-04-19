# B&L Worldwide - Technical Architecture (V3)

## 1. Stack Overview
*   **Build Tool**: Vite
*   **Framework**: React 18
*   **Routing**: `react-router-dom` (Hash or BrowserRouter configured for SPA)
*   **Styling**: Tailwind CSS combined with standard CSS custom properties for centralized token management.
*   **Icons**: Web Component based `<iconify-icon>` loaded via CDN (Solar icon set).

## 2. Design Tokens (`index.css`)
```css
:root {
  --color-primary: #274c77;      /* Main Deep Blue */
  --color-primary-dark: #1b3554; /* Darker variant */
  --color-accent: #6096ba;       /* Medium Blue Accent */
  --color-accent-light: #a3cef1; /* Sky Blue Highlight */
  --color-white: #ffffff;
  --color-gray-50: #e7ecef;      /* Light Background */
  --color-gray-500: #8b8c89;     /* Medium Gray Text/Borders */
  --color-gray-900: #1b263b;     /* Deep Text */
}
```

## 3. Component Architecture
*   **`App.jsx`**: Layout root. Injects `ScrollToTop`, `Navbar`, `Routes`, and `Footer`.
*   **`Home.jsx`**: Page orchestrator. Simply stacks the landing page components sequentially.
*   **`Navbar.jsx`**: State-driven navigation (`isScrolled`, `mobileMenuOpen`). Uses `clsx` for dynamic Tailwind class string construction based on scroll position and active route.
*   **`HeroVideo.jsx`**: Manages underlying HTML5 `<video>` tags. Implements a `mix-blend-multiply` gradient overlay to ensure text contrast over variable video backgrounds.
*   **`Missions.jsx`**: The most complex UI component. 
    *   **Desktop**: Uses flex-basis transitions (`flex-[8_8_0%]`) to expand focused cards over 800ms with a `cubic-bezier(0.25,1,0.5,1)` easing.
    *   **Mobile**: Falls back to a horizontal CSS-snap-scrolling carousel (`snap-x snap-mandatory`) with an intersection observer or scroll listener to sync the active state.
*   **`ScrollReveal.jsx`**: (Utility Component) A wrapper that uses `IntersectionObserver` to trigger CSS opacity transitions (`opacity-0` to `opacity-100`) as elements enter the viewport.
*   **`StatsBar.jsx`**: Implements a custom `useCountUp` hook utilizing `requestAnimationFrame` for smooth integer interpolation triggered exclusively when in viewport.
*   **`DivisionsGrid.jsx` & `TrackRecord.jsx`**: Standard grid and flex layouts leveraging Tailwind mapping, relying heavily on `ScrollReveal` for entrance choreography.

## 4. State Management
State is localized entirely to components. No global state provider is required for the landing page scope. Inter-component linkage is handled via standard URL hash fragments (e.g., `#divisions`).
