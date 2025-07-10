# MUGIFUMI Website

Website untuk produk UMKM MUGIFUMI - Shokupan roti artisan Jepang yang lembut dan berkualitas tinggi.

## Struktur Project

```
Web BB/
├── index.html          # File HTML utama
├── styles.css          # File CSS untuk styling
├── script.js           # File JavaScript untuk interaktivitas
├── assets/             # Folder untuk gambar-gambar
│   ├── logo.png        # Logo MUGIFUMI (diperlukan)
│   ├── logo-pattern.png # Pattern logo untuk header kanan (diperlukan)
│   ├── hero-main.jpg    # Background utama hero (diperlukan)
│   ├── hero-middle.jpg  # Container image tengah (diperlukan)
│   ├── hero-bottom.png  # Background bawah hero (diperlukan)
│   ├── about-bread.jpg # Gambar produk untuk about section (diperlukan)
│   ├── product-1.jpg   # Shokupan With Ice Cream (diperlukan)
│   ├── product-2.jpg   # Shokupan With Milk (diperlukan)
│   ├── product-3.jpg   # Shokupan With Coffee (diperlukan)
│   └── product-4.jpg   # Shokupan Toast With Strawberry Jam (diperlukan)
└── README.md           # File dokumentasi ini
```

## Gambar yang Diperlukan

Silakan tambahkan gambar-gambar berikut ke folder `assets/`:

### Header & Logo
- **logo.png** - Logo MUGIFUMI (ukuran: 40x40px, format: PNG dengan background transparan)
- **logo-pattern.png** - Pattern atau motif untuk bagian kanan header (40x40px)

### Hero Section (Satu view dengan 3 layer + container image)
- **hero-main.jpg** - Background untuk area atas dengan text overlay (landscape)  
- **hero-middle.jpg** - Container image di tengah area coklat (landscape)
- **hero-bottom.png** - Background untuk area bawah (landscape)
- **Brown color** - Background area tengah dengan container image di atasnya

Layout urutan: hero-main.jpg → brown + container image → hero-bottom.png

### About Section  
- **about-bread.jpg** - Gambar produk MUGIFUMI dengan packaging (square/landscape)

### Products Section
- **product-1.jpg** - Shokupan With Ice Cream
- **product-2.jpg** - Shokupan With Milk  
- **product-3.jpg** - Shokupan With Coffee
- **product-4.jpg** - Shokupan Toast With Strawberry Jam

*Semua gambar produk sebaiknya berukuran sama dan menampilkan produk dengan jelas.*

## Fitur Website

### ✨ Desain Modern & Responsif
- Layout yang clean dan modern
- Warna warm brown yang sesuai dengan tema roti
- Fully responsive untuk desktop, tablet, dan mobile
- Smooth animations dan hover effects

### 🧭 Navigasi
- Fixed header dengan navigasi smooth scroll
- Active state navigation yang update otomatis saat scroll
- Mobile-friendly hamburger menu (otomatis muncul di layar kecil)

### 📱 Sections
- **Home** - Hero section dengan pengenalan MUGIFUMI
- **History** - About section dengan cerita brand
- **Product** - Gallery produk dengan rating bintang
- **Contact** - Form kontak dengan validasi

### 🎯 Interactive Features
- Smooth scrolling navigation
- Form validation untuk contact form
- Hover animations pada cards dan buttons
- Scroll-triggered animations
- Responsive mobile menu

## Cara Menggunakan

1. **Tambahkan Gambar**: Upload semua gambar yang diperlukan ke folder `assets/`
2. **Buka Website**: Double-click file `index.html` atau buka dengan browser
3. **Customize Content**: Edit teks di `index.html` sesuai kebutuhan
4. **Styling**: Modifikasi warna dan styling di `styles.css` jika diperlukan

## Browser Support

Website ini kompatibel dengan:
- Chrome (recommended)
- Firefox
- Safari
- Microsoft Edge

## Tips Optimasi Gambar

- Gunakan format JPG untuk foto produk
- Gunakan format PNG untuk logo (dengan background transparan)
- Kompres gambar untuk loading yang lebih cepat
- Ukuran maksimal: 1920px untuk gambar landscape, 800px untuk gambar square

## Color Scheme

```css
Hero Green: #4A7C59
Red Accent: #E74C3C
Primary Brown: #7a5734
Secondary Brown: #A0522D  
Light Brown: #D2B48C
Cream: #F5DEB3
Orange Accent: #FF8C00
Text Dark: #5D4037
```

## Font

Website menggunakan Google Font **Poppins** dengan berbagai weight (300, 400, 500, 600, 700).

---

*Website ini dibuat dengan HTML5, CSS3, dan Vanilla JavaScript untuk performa yang optimal.* 