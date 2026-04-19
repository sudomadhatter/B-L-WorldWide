# B&L Worldwide - UI Design Plan

## 1. Aesthetic Thesis
The UI design represents a shift to "Deep Corporate." It leaves behind both the aggressive dark mode (V1) and the overly stark clinical light mode (V2). V3 uses maritime and aerospace blues, combined with soft grays, to create a sense of established authority, reliability, and immense scale.

## 2. Key UI Patterns
*   **Glassmorphism over Gradients**: Instead of solid blocks, the design heavily leans on `bg-white/60 backdrop-blur-2xl` styles. This allows the complex industrial photography underneath to faintly show through, adding texture without sacrificing legibility.
*   **Motion & Weight**: Animations are intentionally slow and "heavy". Transitions use `duration-700` and `duration-[1500ms]` with custom `cubic-bezier` curves to mimic the movement of massive physical objects (cranes, ships, satellites).
*   **Typography Hierarchy**:
    *   **Eyebrow**: Tracking-widest uppercase (e.g., `CORE MISSIONS`).
    *   **Headers**: `tracking-tight` avoiding pure black and instead using Deep Blue (`#274c77`).
    *   **Body Text**: High line height (`leading-relaxed`) in neutral gray (`#8b8c89`).

## 3. High-Fidelity Component Upgrades
### The Hero Sequence
*   The inclusion of a simulated radar "ping" animation (`animate-ping`) in the status badge establishes a connection to defense/aerospace immediately upon page load.
*   The CTA grouping pairs a solid accent button with a translucent glass alternate for optimal contrast.

### The Accordion Flow
*   The un-expanded states are highly desaturated (`grayscale-[40%]`), turning full color upon hover/expansion to direct the user's eye.
*   A time-based progress bar sits at the bottom of the active panel, hinting to the user that the accordion will auto-advance if left alone.

### The Grid Flow
*   The divisions grid acts as a grounding element. Its background is an image completely washed out by a very thick overlay (`bg-[#e7ecef]/85`). This gives the grid items a clean canvas while subtly whispering the industrial theme.
