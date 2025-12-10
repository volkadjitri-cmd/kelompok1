# Website Sejarah Perang Jawa 1825-1830

## Overview
Website dokumentasi sejarah Perang Jawa (1825-1830), perjuangan heroik Pangeran Diponegoro dan rakyat Jawa melawan kolonialisme Belanda. Website ini sepenuhnya statis tanpa backend, semua data disimpan dalam file JSON.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS dengan tema dokumenter (warna hitam, coklat tua, krem)
- **Routing**: Wouter
- **Data**: Static JSON files (tanpa backend/API)
- **Typography**: Playfair Display (serif) untuk judul, Open Sans (sans-serif) untuk body

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer component
│   │   ├── IntroPlayer.tsx  # Intro video player
│   │   ├── TimelineCard.tsx # Timeline event card
│   │   ├── TokohCard.tsx    # Character/hero card
│   │   ├── ArticleCard.tsx  # Article/event card
│   │   └── GalleryItem.tsx  # Gallery item + Lightbox
│   ├── data/
│   │   ├── tokoh.json       # Data tokoh/pahlawan
│   │   ├── peristiwa.json   # Data peristiwa/artikel
│   │   ├── timeline.json    # Data timeline 1825-1830
│   │   ├── galeri.json      # Data galeri gambar
│   │   └── peta.json        # Data lokasi peta
│   ├── pages/
│   │   ├── intro.tsx        # Halaman intro video
│   │   ├── home.tsx         # Homepage
│   │   ├── timeline.tsx     # Timeline page
│   │   ├── tokoh.tsx        # Grid tokoh
│   │   ├── tokoh-detail.tsx # Detail tokoh
│   │   ├── peristiwa-detail.tsx # Detail peristiwa
│   │   ├── galeri.tsx       # Gallery page
│   │   ├── peta.tsx         # Map page
│   │   └── not-found.tsx    # 404 page
│   ├── App.tsx              # Main app with routing
│   └── index.css            # Global styles + theme
├── public/
│   ├── img/                 # Static images
│   └── video/               # Intro video
└── index.html               # Entry point with SEO meta

server/                       # Minimal server for dev
shared/                       # Shared types (not used)
```

## Routes
- `/intro` - Intro video dengan skip button
- `/` - Homepage dengan hero, ringkasan, preview tokoh/peristiwa/galeri/peta
- `/timeline` - Timeline interaktif 1825-1830
- `/tokoh` - Grid semua tokoh
- `/tokoh/:slug` - Detail tokoh individual
- `/peristiwa/:slug` - Detail peristiwa/artikel
- `/galeri` - Gallery dengan filter kategori dan lightbox
- `/peta` - Peta interaktif dengan marker lokasi

## Features
1. **Intro Page**: Video fullscreen dengan localStorage skip (hanya tampil sekali)
2. **Homepage**: Hero section, ringkasan, preview 3 tokoh, 3 peristiwa, galeri, peta
3. **Timeline**: Vertical timeline dengan cards per tahun (1825-1830)
4. **Tokoh**: Grid cards dengan detail page untuk setiap tokoh
5. **Peristiwa**: Artikel lengkap dengan tokoh terkait dan referensi
6. **Galeri**: Grid dengan filter kategori + lightbox modal
7. **Peta**: Peta statis dengan marker interaktif

## Design Theme
- **Colors**: Hitam, coklat tua (#4A3728), krem (#F5F1E8), gold/bronze accent
- **Typography**: Serif untuk judul, sans-serif untuk body
- **Style**: Documentary/museum aesthetic, educational, respectful

## Data Format

### tokoh.json
```json
{
  "name": "Pangeran Diponegoro",
  "slug": "diponegoro",
  "image": "/img/tokoh/diponegoro.jpg",
  "bio": "...",
  "role": "Pemimpin Utama Perlawanan",
  "birthYear": 1785,
  "deathYear": 1855,
  "relatedEvents": ["perang-dimulai", "gerilya-1827"]
}
```

### peristiwa.json
```json
{
  "title": "Perang Jawa Dimulai",
  "slug": "perang-dimulai",
  "year": 1825,
  "month": "Juli",
  "image": "/img/peristiwa/perang-dimulai.jpg",
  "summary": "...",
  "content": "...",
  "tokoh": ["diponegoro", "kiai-mojo"],
  "lokasi": "Tegalrejo, Yogyakarta",
  "referensi": ["Buku A", "Arsip Leiden"]
}
```

## Running the Project
```bash
npm run dev
```

The application runs on port 5000.

## Notes
- All images are placeholder - actual historical images should be added
- No backend required - fully static content
- localStorage used for intro skip functionality
- Mobile-first responsive design
