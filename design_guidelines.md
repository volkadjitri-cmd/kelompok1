# Design Guidelines: Perang Jawa Historical Website

## Design Approach
**Reference-Based**: Documentary/museum aesthetic inspired by National Geographic, Smithsonian digital archives, and historical documentary presentations. Emphasis on storytelling, chronological narrative, and immersive historical atmosphere.

## Core Design Principles
1. **Documentary Authenticity**: Evoke historical gravitas through period-appropriate visual treatment
2. **Chronological Clarity**: Strong timeline-based information architecture
3. **Educational Engagement**: Balance scholarly depth with accessible presentation
4. **Cultural Respect**: Honor Indonesian heritage through thoughtful visual design

## Typography System

**Headings (Serif)**
- Hero/H1: Large display serif (60-72px desktop, 36-48px mobile) - conveys historical weight
- H2: 48px desktop, 32px mobile
- H3: 36px desktop, 24px mobile
- Use case: Article titles, section headers, tokoh names, peristiwa titles

**Body (Sans-Serif)**
- Primary: 16-18px, line-height 1.7 for optimal reading
- Secondary/Captions: 14px
- Navigation: 16px medium weight
- Use case: Descriptions, bios, narratives, UI elements

## Color Palette (Documentary Theme)
- **Deep Black**: Primary backgrounds, creates depth
- **Dark Brown**: (#4A3728 range) Secondary backgrounds, card overlays
- **Warm Cream**: (#F5F1E8 range) Text on dark backgrounds, light sections
- **Accent Gold/Bronze**: (#B8860B range) CTAs, highlights, borders - sparingly for emphasis

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20 consistently
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 desktop, py-12 mobile
- Card gaps: gap-6 to gap-8

## Page-Specific Design Guidelines

### 1. Intro Page (Fullscreen Video)
- Full viewport (100vh) video player
- Subtle overlay gradient (black opacity 20%) for text legibility
- "Skip Intro" button: Fixed top-right, backdrop-blur, cream text with subtle border
- Minimalist - let video dominate

### 2. Homepage
**Hero Section**
- Large hero image or video loop (60-80vh)
- Centered overlay content: Large serif title "Perang Jawa 1825-1830", subtitle, primary CTA
- Backdrop blur on text container for legibility

**Content Sections** (Multi-column where appropriate)
- Ringkasan: Single column, max-w-4xl centered, generous padding
- 3 Tokoh Preview: 3-column grid desktop (grid-cols-1 md:grid-cols-3), cards with portrait images
- 3 Peristiwa Preview: 3-column grid, timeline-style cards with year badges
- Peta Preview: 2-column (image + descriptive text)
- Galeri Preview: 4-column masonry-style grid

### 3. Timeline Page (/timeline)
- Vertical timeline layout with alternating left/right cards
- Year markers: Large serif numbers, bronze accent lines connecting events
- Timeline cards: Image thumbnail, title, brief description, "Baca Selengkapnya" link
- Desktop: Zigzag layout; Mobile: Stacked linear

### 4. Peristiwa Detail (/peristiwa/[slug])
**Layout**
- Hero image: Full-width, 40vh
- Content: Single column, max-w-4xl centered
- Sidebar (desktop): Sticky sidebar with "Tokoh Terkait", "Lokasi", "Referensi"
- Desktop: 2-column (main content + sidebar); Mobile: Stacked

**Components**
- Year badge: Prominent bronze badge with large serif number
- Article text: Generous line-height, justified on desktop
- Related tokoh: Small portrait cards with names
- Reference list: Styled as elegant footnotes

### 5. Tokoh Pages
**Grid Page** (/tokoh)
- 3-4 column responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Portrait cards: Square aspect ratio, name overlay on hover/tap
- Filter by role (optional): Subtle tabs at top

**Detail Page** (/tokoh/[slug])
- 2-column layout: Large portrait (40% width) + Bio content
- Bio sections: Early life, role in war, legacy
- Related events: Timeline mini-view showing their involvement

### 6. Peta Page (/peta)
- Full-width static map image as primary focus
- Interactive markers: Cream circles with bronze borders, numbered
- Side panel or bottom sheet: Location list with brief descriptions
- Click marker → highlight corresponding list item

### 7. Galeri Page (/galeri)
- Masonry grid layout (3-4 columns desktop, 2 mobile)
- Image cards: Subtle hover lift effect
- Lightbox modal: Full-screen dark overlay, image centered, caption below, close button top-right
- Navigation arrows for prev/next in lightbox

## Component Library

### Navigation Bar
- Sticky header with backdrop blur
- Horizontal links: Intro, Beranda, Timeline, Tokoh, Peristiwa, Peta, Galeri
- Mobile: Hamburger menu, slide-in drawer
- Logo: Simple text or emblem representing Perang Jawa

### Footer
- 3-column layout: About project, Quick links, Credits/References
- Dark brown background, cream text
- Copyright and data source attribution

### Cards (TimelineCard, TokohCard, ArticleCard)
- Consistent structure: Image, Title (serif), Description, CTA
- Subtle border or shadow for depth
- Hover: Gentle lift (translate-y-1) and shadow increase

### Gallery Item
- Square or 3:2 aspect ratio
- Caption overlay on hover (gradient from bottom)
- High-quality historical imagery

## Images Strategy
**Required Images**
- Hero: Large atmospheric image of 19th century Java landscape or historical illustration
- Tokoh portraits: 8-10 historical figures (illustrations or period artwork)
- Peristiwa images: 10-15 historical scenes, maps, or period illustrations
- Galeri: 20+ archival images (battles, locations, artifacts, documents)
- Peta: Detailed static map of Java showing key locations (1825-1830)
- Intro video: Historical documentary-style intro (30-60 seconds)

**Image Treatment**
- Sepia or warm tone filters for historical authenticity
- Vignette effect on hero images for focus
- Sharp, high-resolution for educational clarity

## Animations & Interactions
**Minimal, Purposeful**
- Intro skip transition: Smooth fade
- Page transitions: Subtle fade-in on content load
- Scroll-triggered: Cards fade-in-up as they enter viewport
- Timeline: Progressive reveal as user scrolls
- Avoid distracting effects - maintain documentary solemnity

## Accessibility & Usability
- High contrast text (cream on dark backgrounds)
- Touch targets: Minimum 44px for mobile
- Clear focus states for keyboard navigation
- Alt text for all historical images
- Readable font sizes (never below 14px)

## Mobile-First Considerations
- Stack all multi-column grids to single column
- Reduce hero heights (50vh mobile vs 80vh desktop)
- Touch-friendly navigation and CTAs
- Simplified timeline view (linear, no zigzag)
- Hamburger menu for navigation

This design creates an immersive, educational experience that honors the historical significance of Perang Jawa while maintaining modern web standards and accessibility.