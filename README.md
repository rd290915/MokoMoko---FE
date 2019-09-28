- List Pages:
  - Homepage: [domain]/home.html
  - Genki: [domain]/genki.html
  - Contact Us: [domain]/contact-us.html
  - Aktifitas: [domain]/aktifitas.html
  - Tips Mama: [domain]/tips.html
  - Omba: [domain]/omba.html
  - Tips Mama Detail: [domain]/tips-detail.html
  - Producs: [domain]/products.html

- Pages:

- Components:

- Effects:
  
- Feedback:

- Revisi:

- Responsive:
  - [o] [Component] [ShoppingCart] Hilangkan background
  - [o] [Component] [ShoppingCart] Gambar dibuat tiak bulat
  - [o] [Component] [Olshop] Item list dibuat justify content center
  - [o] [Component] [Olshop] Omba dibuat disamping text title
  - [o] [Homepage] [Video] Video dibaut sama seperti halaman Produk
  - [o] [Component] [Video] Background dibuat ukuran asli image
  - [o] [Produk] Text omba dibuat berdekatan dengan omba
  - [o] [Tips] Tabs Filter dibuat justify content center
  - [o] [TipsDetail] List item harus bulat
  - [o] [TipsDetail] Popok dibuat lebih turun
  - [o] [Component] [Form] [Select] Padding-X mengikuti Input text
  - [o] [ContactUs] Perihal dihapus, Ketegori diubah jadi perihal
  - [o] [ContactUs] Tambah input image (Attachtment Image)
 dibawah kategori
  - [o] [ContactUs] Textare dibuat tinggi seperti frame dikiri
  - [o] [ContactUs] Form grid lebih panjang
  - [o] [Layout] [Navbar] Genki Jepang > Genki Japan
  - [o] [Genki] Tambahkan content image 2 buah dengan descr, dan link button (Kunjungi),(dummy gunakan image produk pada halaman tips detail)
  - [o] [Aktifitas] Buat popup (title, photo, text), dibuat rounded 10px, background image abu2
  - [o] [AllPage] Check Responsive
  - [RequestToBackend] [ContactUs] Buat popup message untuk success submit

- Stacks:
  - [stack] [Produk] Hilangkan bugs garis hitam yg ada di tengah2 layar
- Noted:
  - [stack] [Product] Buat JS change descr popok

- Catatan untuk Mas Waffi:
  - Pada element "<h2 class="comp-olshop-title">",
  pindahkan element tersebut kedalam "<div class="comp-olshop-domba">",
  diletakan dibawah img
  - Pada halaman Produk, element "<div class="m-prod-descr-cloud">",
  pindahkan element tersebut kedalam "<div class="m-prod-descr-domba">",
  diletakkan dibawah img
  - Pada halaman Contact Us, comment "<!-- descr -->",
  pindahkan "<div class="button">" letakan dibawah "<div class="m-field textarea">",
  lalau "<div class="button">" ubah class menjadi "m-contact-form-button",
  sehingga menjadi "<div class="m-contact-form-button">",
  lalu isi content nya disesuaikan seperti frontend
  - Ubah menu Navbar "Genki Jepang" > "Genki Japan"
  - Lihat halaman Aktifitas & Promo,
  Lihat bagian promo, terjadi perombakan besar, jadi untuk mas waffi bisa diliat pelan2