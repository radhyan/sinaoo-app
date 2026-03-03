const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedBenarAtauSalah = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Literasi Bahasa Indonesia";
    let course = await Course.findOne({ name: courseName });

    if (!course) {
      console.log(`Course '${courseName}' not found. Creating it...`);
      course = await Course.create({
        name: courseName,
        description:
          "Materi dan latihan soal untuk Literasi Bahasa Indonesia pada UTBK SNBT.",
        image_url: "https://minio.sinaoo.id/sinaoo-assets/course-literasi.png",
        total_modules: 0,
        published: true,
      });
      console.log("Created Course:", course.name);
    } else {
      console.log("Found Course:", course.name);
    }

    const targetId = "benar-atau-salah";

    const stepsData = [
      {
        title: "Materi: Benar atau Salah",
        type: "reading",
        status: "active",
        description:
          "Pahami konsep pernyataan benar dan salah dalam teks, serta cara menentukan kebenaran suatu pernyataan berdasarkan informasi yang tersedia.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Pernyataan Benar</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200 mb-6">
                <ul class="list-disc pl-5 space-y-3 text-body-l text-Grayscale-900">
                  <li>Pernyataan benar merupakan pernyataan yang <span class="font-bold">sesuai</span> dengan fakta atau informasi dalam teks.</li>
                  <li>Dalam KBBI, benar adalah sesuai sebagaimana adanya (seharusnya) dan dapat dipercaya (cocok dengan keadaan yang sesungguhnya).</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Pernyataan Salah</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200 mb-6">
                <ul class="list-disc pl-5 space-y-3 text-body-l text-Grayscale-900">
                  <li>Pernyataan salah merupakan pernyataan yang <span class="font-bold">tidak sesuai</span> dengan fakta atau informasi dalam teks.</li>
                  <li>Salah dalam KBBI artinya tidak benar atau tidak betul.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Benar Salah</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <ol class="list-decimal pl-5 space-y-5 text-body-l text-Grayscale-900">
                  <li>
                    <span class="font-bold">Pahami terlebih dahulu apa yang ditanyakan.</span>
                    <p class="text-body-m text-Grayscale-700 mt-1">Lebih baik membaca pertanyaan terlebih dahulu kemudian kita pahami soal tersebut menanyakan pernyataan yang benar atau yang salah.</p>
                  </li>
                  <li>
                    <span class="font-bold">Temukan kata kunci.</span>
                    <p class="text-body-m text-Grayscale-700 mt-1">Dapat mempermudah kita dalam menemukan informasi tersebut.</p>
                  </li>
                  <li>
                    <span class="font-bold">Lakukan scanning.</span>
                    <p class="text-body-m text-Grayscale-700 mt-1">Mencari kata kunci yang telah kita temukan tadi kemudian cocokkan dengan pilihan jawaban.</p>
                  </li>
                  <li>
                    <span class="font-bold">Analisis tiap pilihan jawaban dan cocokkan dengan teks.</span>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Benar atau Salah",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/yXXQHTfmHkI",
        description:
          "Tonton video berikut untuk memahami cara menentukan pernyataan benar atau salah dalam teks.",
      },
      {
        title: "Video: Latihan Soal Benar atau Salah",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/3AzRdTbCtyA",
        description:
          "Video latihan dan pembahasan soal mengenai pernyataan benar atau salah.",
      },
      {
        title: "Kuis Benar atau Salah",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Lima sekawan Sano, Joko, Adi, Rimba, dan Ratu selalu semangat berangkat bersama menuju sekolah. Joko selalu menjemput Sano, setelah ia dijemput oleh Adi. Rimba menjadi anak terakhir yang dijemput. Sementara rumah Ratu terletak di antara rumah Joko dan rumah Adi.",
            question: "Berikut ini pernyataan yang BENAR adalah \u2026",
            options: [
              { id: "a", text: "Rumah Ratu terletak paling jauh" },
              { id: "b", text: "Rumah Adi terletak paling jauh" },
              { id: "c", text: "Rumah Rimba terletak paling jauh" },
              { id: "d", text: "Rumah Sano terletak paling dekat" },
              { id: "e", text: "Rumah Adi terletak paling dekat" },
            ],
            correctAnswer: "b",
            explanation:
              "Dari teks diketahui urutan penjemputan: Adi menjemput Joko, lalu Joko menjemput Sano, dan Rimba dijemput terakhir. Ratu berada di antara Joko dan Adi. Karena Adi adalah orang pertama yang menjemput (berangkat paling awal dari rumahnya), logikanya rumah Adi terletak paling jauh dari sekolah sehingga ia berangkat pertama kali. Pilihan lain tidak sesuai dengan urutan penjemputan yang disebutkan dalam teks.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              'Kepala BPH Migas M. Fashurullah Asa proyeksi kebutuhan gas bumi di ibu kota baru, yakni di Pulau Kalimantan, naik 92 persen dari saat ini 675,21-696,40 juta standar kaki kubik per hari (MMSCFD) menjadi 1.214 MMSCFD. "Dengan rencana pemindahan ibu kota ke Kalimantan, maka kebutuhan energinya berpotensi meningkat 92 persen dari saat ini," ujarnya seperti dilansir Antara di Pontianak, Selasa (3/12). Oleh karenanya, ia menilai perlu sinergi pembangunan pipa gas bumi Trans Kalimantan. Apalagi, pembangunan pipa gas bumi tersebut merupakan tindak lanjut rencana induk gas bumi 2012-2025. Diketahui, Kementerian ESDM merencanakan pembangunan jalur pipa gas bumi Trans Kalimantan yang membentang dari Bontang-Banjarmasin-Palangkaraya hingga Pontianak sepanjang 2.219 kilometer (KM). Pipa gas bumi itu akan mengangkut gas bumi dari Bontang, Kalimantan Timur, guna memenuhi kebutuhan energi gas alam bagi seluruh masyarakat di Pulau Kalimantan. Rencana pembangunan Kawasan Ekonomi Khusus (KEK) dan Kawasan Industri (KI) di Pulau Kalimantan juga dinilai efektif untuk meningkatkan penyerapan gas di wilayah setempat, termasuk pembangunan jaringan gas.',
            question:
              "Berdasarkan paragraf di atas, manakah di bawah ini pernyataan yang SALAH?",
            options: [
              {
                id: "a",
                text: "Sumber gas yang akan disalurkan ke seluruh Pulau Kalimantan diangkut dari Bontang.",
              },
              {
                id: "b",
                text: "Potensi kebutuhan gas bumi di Kalimantan meningkat karena rencana pemindahan ibu kota.",
              },
              {
                id: "c",
                text: "Peningkatan kebutuhan gas bumi di Kalimantan meningkat lebih dari 50% dari perencanaan awal.",
              },
              {
                id: "d",
                text: "Upaya meningkatkan penyerapan gas dibantu dengan adanya rencana pembangunan Kawasan Ekonomi Khusus.",
              },
              {
                id: "e",
                text: "Satu-satunya cara untuk memenuhi kebutuhan gas bumi di ibu kota baru adalah dengan melakukan pembangunan jalur pipa gas bumi Trans Kalimantan.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pilihan E salah karena teks tidak menyebutkan bahwa pembangunan pipa Trans Kalimantan adalah 'satu-satunya cara'. Teks juga menyebutkan upaya lain seperti pembangunan KEK dan KI untuk meningkatkan penyerapan gas. Kata 'satu-satunya' merupakan generalisasi berlebihan yang tidak sesuai teks. Pilihan A benar (gas dari Bontang). Pilihan B benar (naik karena pemindahan ibu kota). Pilihan C benar (naik 92% > 50%). Pilihan D benar (KEK disebut efektif).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Sebagian siswa tidak meraih nilai ujian tinggi jika mereka tidak belajar dengan tekun. Kondisi tersebut terjadi ketika siswa tidak berdisiplin dalam mengatur waktu.",
            question: "Manakah simpulan berikut yang BENAR?",
            options: [
              {
                id: "a",
                text: "Sebagian siswa tidak meraih nilai ujian tinggi apabila berdisiplin dalam mengatur waktu.",
              },
              {
                id: "b",
                text: "Sebagian siswa meraih nilai ujian tinggi apabila tidak berdisiplin dalam mengatur waktu.",
              },
              {
                id: "c",
                text: "Sebagian siswa tidak meraih nilai ujian tinggi apabila tidak berdisiplin dalam mengatur waktu.",
              },
              {
                id: "d",
                text: "Siswa berdisiplin dalam mengatur waktu apabila sebagian siswa meraih nilai ujian tinggi.",
              },
              {
                id: "e",
                text: "Siswa tidak berdisiplin dalam mengatur waktu apabila sebagian siswa meraih nilai ujian tinggi.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Dari teks: (1) Tidak belajar tekun \u2192 tidak meraih nilai tinggi; (2) Tidak disiplin mengatur waktu \u2192 tidak belajar tekun. Maka simpulannya: tidak disiplin mengatur waktu \u2192 tidak meraih nilai tinggi. Pilihan C tepat menggabungkan kedua premis ini. Pilihan A kontradiktif (berdisiplin seharusnya membuat nilai tinggi). Pilihan B juga kontradiktif. Pilihan D dan E membalik hubungan sebab-akibat.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Seorang mahasiswa X harus bekerja tambahan setelah pulang kuliah. Pekerjaan tambahan tersebut menyebabkan waktu belajarnya berkurang. Meskipun X hanya bekerja di waktu malam, perkuliahannya tetap terganggu karena waktu belajarnya berkurang.",
            question:
              "Berdasarkan informasi di atas, manakah pernyataan di bawah ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "X bekerja pada malam hari karena perkuliahannya terganggu.",
              },
              {
                id: "b",
                text: "Pekerjaan tambahan menyebabkan perkuliahan X terganggu.",
              },
              {
                id: "c",
                text: "Jam kerja di malam hari menyebabkan X mencari pekerjaan tambahan.",
              },
              {
                id: "d",
                text: "X mencari pekerjaan tambahan ketika jam belajarnya berkurang.",
              },
              {
                id: "e",
                text: "Waktu belajar X berkurang ketika perkuliahannya terganggu.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Dari teks: pekerjaan tambahan \u2192 waktu belajar berkurang \u2192 perkuliahan terganggu. Jadi, pekerjaan tambahan menyebabkan perkuliahan X terganggu (pilihan B). Pilihan A membalik sebab-akibat (bukan karena perkuliahan terganggu ia bekerja malam). Pilihan C juga membalik logika. Pilihan D membalik urutan (bukan jam belajar berkurang yang menyebabkan mencari kerja). Pilihan E membalik hubungan (waktu belajar berkurang menyebabkan perkuliahan terganggu, bukan sebaliknya).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Berdasarkan kandungan yang dimilikinya, jenis minuman bisa untuk dikelompokkan menjadi dua yaitu minuman dengan bahan soda dan minuman dengan bahan alkohol. Minuman dengan bahan soda mampu untuk menimbulkan efek yang segar, tetapi kurang baik untuk kondisi lambung. Sementara minuman dengan bahan alkohol sama seperti namanya, memiliki kandungan alkohol yang ada di dalamnya.\nMinuman beralkohol dilarang untuk dikonsumsi oleh agama dan bisa menimbulkan beragam jenis penyakit yang membahayakan tubuh. Misalnya seperti kanker dan juga gangguan pada organ hati.",
            question:
              "Berdasarkan teks diatas, manakah pernyataan berikut ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Minuman bersoda mampu untuk menimbulkan rasa yang segar.",
              },
              {
                id: "b",
                text: "Minuman alkohol tergolong lebih baik daripada minuman bersoda.",
              },
              {
                id: "c",
                text: "Minuman beralkohol bisa menyebabkan gangguan lambung.",
              },
              {
                id: "d",
                text: "Minuman bersoda dilarang untuk dikonsumsi oleh agama.",
              },
              {
                id: "e",
                text: "Minuman bersoda dapat menimbulkan beragam jenis penyakit.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Teks menyatakan: 'Minuman dengan bahan soda mampu untuk menimbulkan efek yang segar' \u2014 ini sesuai dengan pilihan A. Pilihan B tidak disebutkan dalam teks. Pilihan C salah karena yang kurang baik untuk lambung adalah minuman bersoda, bukan beralkohol. Pilihan D salah karena yang dilarang agama adalah minuman beralkohol. Pilihan E salah karena yang menimbulkan beragam penyakit adalah minuman beralkohol (kanker, gangguan hati).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Informasi mengenai negara Indonesia yang menjadi bagian dari paru-paru dunia tentu bukanlah sebuah hal yang baru saja terdengar oleh masyarakatnya. Hal ini didukung dengan banyaknya lokasi di Indonesia yang memiliki hutan lebat dan menjadi tempat untuk dihasilkannya banyak oksigen. Di dalamnya banyak terdapat seperti tanaman, burung cendrawasih, komodo, orang utan, dan masih banyak lagi.",
            question:
              "Berdasarkan paragraf diatas, manakah pernyataan berikut ini yang SALAH?",
            options: [
              {
                id: "a",
                text: "Indonesia memiliki banyak hutan lebat.",
              },
              {
                id: "b",
                text: "Hutan lebat di Indonesia menghasilkan banyak oksigen.",
              },
              {
                id: "c",
                text: "Di dalam hutan di Indonesia terdapat banyak jenis tanaman dan hewan.",
              },
              {
                id: "d",
                text: "Negara Indonesia merupakan bagian dari paru-paru dunia.",
              },
              {
                id: "e",
                text: "Masyarakat Indonesia baru mengetahui bahwa Indonesia merupakan bagian dari paru-paru dunia.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pilihan E salah karena teks justru menyatakan sebaliknya: 'bukanlah sebuah hal yang baru saja terdengar oleh masyarakatnya' \u2014 artinya informasi ini sudah lama diketahui, bukan baru diketahui. Pilihan A, B, C, dan D semuanya sesuai dengan informasi dalam teks: Indonesia memiliki hutan lebat (A), menghasilkan oksigen (B), terdapat tanaman dan hewan (C), dan merupakan paru-paru dunia (D).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Salah satu jenis pohon yang ada yaitu kelapa sawit. Batang dari pohon satu ini bisa mencapai sekitar 24 meter saat tumbuh dengan baik. Ia juga memiliki akar dengan jenis serabut yang arahnya ke bawah dan juga samping. Di sisi lain, juga terdapat akar napas yang tumbuhnya ke arah samping atas dan berfungsi sebagai bagian untuk mendapatkan tambahan oksigen.",
            question:
              "Berdasarkan paragraf diatas, manakah pernyataan berikut ini yang SALAH?",
            options: [
              {
                id: "a",
                text: "Kelapa sawit adalah salah satu jenis pohon.",
              },
              {
                id: "b",
                text: "Batang dari pohon kelapa sawit dapat mencapai lebih dari 30 meter.",
              },
              {
                id: "c",
                text: "Jenis akar dari pohon kelapa sawit adalah akar serabut.",
              },
              {
                id: "d",
                text: "Akarnya dapat tumbuh ke bawah dan samping.",
              },
              {
                id: "e",
                text: "Akarnya yang tumbuh ke samping atas dapat berfungsi untuk mendapatkan tambahan oksigen.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pilihan B salah karena teks menyatakan batang kelapa sawit 'bisa mencapai sekitar 24 meter', bukan 'lebih dari 30 meter'. Angka 30 meter melebihi informasi yang ada di teks. Pilihan A sesuai (kelapa sawit adalah jenis pohon). Pilihan C sesuai (akar serabut). Pilihan D sesuai (arah ke bawah dan samping). Pilihan E sesuai (akar napas ke samping atas untuk oksigen).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Burung merpati terdiri dari berbagai jenis warna yang menarik. Terdapat warna hitam, putih, coklat, atau juga hasil dari perpaduan berbagai warna tersebut. Burung merpati juga memiliki sensor yang letaknya berada di bagian hidungnya dan berfungsi untuk mengenali rumah yang dimilikinya. Hal ini yang menjadi penyebab dari burung merpati bisa kembali lagi ke rumahnya meskipun setelah melakukan terbang dalam jarak yang cukup jauh. Makanan dari burung merpati yaitu seperti kacang hijau, jagung, beras, dan juga jenis biji-bijian yang lainnya. Bahkan, banyak warga yang tinggal di daerah desa yang sedang menjemur gabah akhirnya pasrah karena gabah tersebut banyak dimakan oleh burung merpati yang sedang lewat.",
            question:
              "Berdasarkan paragraf diatas, manakah pernyataan berikut ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Burung merpati hanya terdiri dari warna hitam dan putih.",
              },
              {
                id: "b",
                text: "Burung merpati memiliki sensor di hidungnya untuk mengenali rumahnya.",
              },
              {
                id: "c",
                text: "Burung merpati tidak bisa kembali ke rumahnya setelah terbang jauh.",
              },
              {
                id: "d",
                text: "Burung merpati hanya memakan tanaman hijau.",
              },
              {
                id: "e",
                text: "Burung merpati tidak pernah memakan gabah warga.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pilihan B benar karena teks menyatakan: 'Burung merpati juga memiliki sensor yang letaknya berada di bagian hidungnya dan berfungsi untuk mengenali rumah yang dimilikinya.' Pilihan A salah (bukan hanya hitam dan putih, juga ada coklat dan perpaduan). Pilihan C salah (justru bisa kembali berkat sensor). Pilihan D salah (makanannya kacang hijau, jagung, beras, biji-bijian). Pilihan E salah (teks menyebut gabah dimakan merpati).",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Ekspor nonmigas masih mendominasi total ekspor Indonesia, yakni mencapai US$22,84 miliar pada November 2021. Komoditas unggulan dalam ekspor nonmigas salah satunya adalah batu bara. Indonesia merupakan produsen batu bara terbesar ketiga di dunia setelah China dan India.\nProduksi batu bara bisa mencapai lebih dari 500 juta ton per tahun. Sementara itu, permintaan domestik masih rendah sehingga sebagian besar batu bara atau sekitar 70 persen batu bara nasional dikirim ke luar negeri. Kementerian ESDM mencatat bahwa realisasi ekspor batu bara Indonesia pada 2020 mencapai 405 juta ton atau melebihi target ekspor (102,5 persen) yang ditetapkan di awal sebesar 395 juta ton. Negara tujuan ekspor batu bara meliputi China, India, Filipina, Jepang, Malaysia, Korea Selatan, Vietnam, Taiwan, Thailand, dan Bangladesh.",
            question:
              "Berdasarkan paragraf 1 pada bacaan di atas, manakah pernyataan di bawah ini yang SALAH?",
            options: [
              {
                id: "a",
                text: "Ekspor nonmigas masih mendominasi total ekspor Indonesia.",
              },
              {
                id: "b",
                text: "Ekspor nonmigas mencapai US$22,84 miliar pada November 2021.",
              },
              {
                id: "c",
                text: "Komoditas unggulan dalam ekspor nonmigas salah satunya adalah batu bara.",
              },
              {
                id: "d",
                text: "Ekspor nonmigas mencapai US$22,84 miliar pada Desember 2021.",
              },
              {
                id: "e",
                text: "Indonesia merupakan produsen batu bara terbesar ketiga di dunia setelah China dan India.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Pilihan D salah karena teks menyebutkan ekspor nonmigas mencapai US$22,84 miliar pada 'November 2021', bukan 'Desember 2021'. Ini adalah trik soal yang mengubah detail kecil (bulan). Pernyataan lain semuanya sesuai dengan informasi di paragraf 1: mendominasi ekspor (A), angka US$22,84 miliar November 2021 (B), batu bara sebagai komoditas unggulan (C), dan produsen ketiga setelah China dan India (E).",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Ekspor nonmigas masih mendominasi total ekspor Indonesia, yakni mencapai US$22,84 miliar pada November 2021. Komoditas unggulan dalam ekspor nonmigas salah satunya adalah batu bara. Indonesia merupakan produsen batu bara terbesar ketiga di dunia setelah China dan India.\nProduksi batu bara bisa mencapai lebih dari 500 juta ton per tahun. Sementara itu, permintaan domestik masih rendah sehingga sebagian besar batu bara atau sekitar 70 persen batu bara nasional dikirim ke luar negeri. Kementerian ESDM mencatat bahwa realisasi ekspor batu bara Indonesia pada 2020 mencapai 405 juta ton atau melebihi target ekspor (102,5 persen) yang ditetapkan di awal sebesar 395 juta ton. Negara tujuan ekspor batu bara meliputi China, India, Filipina, Jepang, Malaysia, Korea Selatan, Vietnam, Taiwan, Thailand, dan Bangladesh.",
            question:
              "Berdasarkan paragraf 2 pada bacaan di atas, manakah pernyataan di bawah ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Produksi batu bara tidak pernah mencapai lebih dari 500 juta ton per tahun.",
              },
              {
                id: "b",
                text: "Permintaan domestik batu bara sudah cukup tinggi.",
              },
              {
                id: "c",
                text: "Sebagian besar batu bara nasional dikirim ke luar negeri.",
              },
              {
                id: "d",
                text: "Realisasi ekspor batu bara Indonesia pada 2021 melebihi target ekspor.",
              },
              {
                id: "e",
                text: "Terdapat sembilan negara tujuan ekspor batu bara.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pilihan C benar karena teks menyatakan: 'sebagian besar batu bara atau sekitar 70 persen batu bara nasional dikirim ke luar negeri.' Pilihan A salah karena teks menyatakan produksi 'bisa mencapai lebih dari 500 juta ton'. Pilihan B salah karena teks menyatakan permintaan domestik 'masih rendah'. Pilihan D salah karena data realisasi ekspor adalah tahun 2020, bukan 2021. Pilihan E salah karena ada 10 negara tujuan (China, India, Filipina, Jepang, Malaysia, Korea Selatan, Vietnam, Taiwan, Thailand, Bangladesh).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              '"Spider-Man: No Way Home" meraup 50 juta dolar AS (sekitar 719 miliar rupiah) di bioskop AS dan Kanada selama pekan penayangan perdananya. Hasil penjualan ini memecahkan rekor selama era pandemi. Analis box office memperkirakan total penerimaan domestik \'No Way Home\' hingga akhir pekan mencapai 240 juta dolar AS. Ini sama saja menempatkan film ini di posisi lima besar film debut sepanjang masa.\nFilm "Spider-Man: No Way Home" menekankan pada dilema Parker setelah difitnah dan identitasnya dibongkar oleh Mysterio yang diperankan oleh Jake Gyllenhaal. Kritikus film menyambut hangat kisah Parker dan kawan-kawan. Terbukti pada Jumat kemarin, 95 persen dari 220 ulasan di Rotten Tomatoes menilai positif "Spider-Man No Way Home".',
            question:
              "Berdasarkan paragraf 1 pada bacaan di atas, manakah pernyataan di bawah ini yang SALAH?",
            options: [
              {
                id: "a",
                text: '"Spider-Man: No Way Home" meraup 50 juta dolar AS di bioskop AS dan Kanada selama pekan penayangan perdananya.',
              },
              {
                id: "b",
                text: 'Hasil penjualan tiket penayangan film "Spider-Man: No Way Home" memecahkan rekor selama era pandemi.',
              },
              {
                id: "c",
                text: "Analis box office memperkirakan total penerimaan domestik 'No Way Home' hingga akhir pekan mencapai 240 juta dolar AS.",
              },
              {
                id: "d",
                text: '"Spider-Man: No Way Home" menempati posisi lima besar film debut sepanjang masa.',
              },
              {
                id: "e",
                text: '"Spider-Man: No Way Home" menempati posisi lima besar film sepanjang masa.',
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pilihan E salah karena teks menyebutkan 'posisi lima besar film DEBUT sepanjang masa', bukan 'film sepanjang masa'. Kata 'debut' (penayangan perdana) dihilangkan di pilihan E, sehingga maknanya berubah. Pilihan D benar karena menyebutkan 'film debut sepanjang masa' sesuai teks. Pilihan A, B, dan C semuanya sesuai dengan informasi di paragraf 1.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              '"Spider-Man: No Way Home" meraup 50 juta dolar AS (sekitar 719 miliar rupiah) di bioskop AS dan Kanada selama pekan penayangan perdananya. Hasil penjualan ini memecahkan rekor selama era pandemi. Analis box office memperkirakan total penerimaan domestik \'No Way Home\' hingga akhir pekan mencapai 240 juta dolar AS. Ini sama saja menempatkan film ini di posisi lima besar film debut sepanjang masa.\nFilm "Spider-Man: No Way Home" menekankan pada dilema Parker setelah difitnah dan identitasnya dibongkar oleh Mysterio yang diperankan oleh Jake Gyllenhaal. Kritikus film menyambut hangat kisah Parker dan kawan-kawan. Terbukti pada Jumat kemarin, 95 persen dari 220 ulasan di Rotten Tomatoes menilai positif "Spider-Man No Way Home".',
            question:
              "Berdasarkan paragraf 2 pada bacaan di atas, manakah pernyataan di bawah ini yang SALAH?",
            options: [
              {
                id: "a",
                text: 'Film "Spider-Man: No Way Home" menekankan pada dilema Parker setelah difitnah dan identitasnya dibongkar.',
              },
              {
                id: "b",
                text: 'Film "Spider-Man: No Way Home" menekankan pada perkembangan Parker setelah menjadi Spider Man.',
              },
              {
                id: "c",
                text: "Karakter Mysterio diperankan oleh Jake Gyllenhaal.",
              },
              {
                id: "d",
                text: "Kritikus film menyambut hangat kisah Parker dan kawan-kawan.",
              },
              {
                id: "e",
                text: '95 persen dari 220 ulasan di Rotten Tomatoes menilai positif "Spider-Man No Way Home".',
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pilihan B salah karena teks menyebutkan film menekankan pada 'dilema Parker setelah difitnah dan identitasnya dibongkar oleh Mysterio', bukan pada 'perkembangan Parker setelah menjadi Spider Man'. Pilihan B mengganti inti cerita dengan informasi yang tidak ada di teks. Pilihan A, C, D, dan E semuanya sesuai dengan informasi di paragraf 2.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Cancel culture dapat diartikan sebagai sebuah praktik boikot massal terhadap seseorang atau suatu kelompok. Pemboikotan ini bisa terjadi di dunia nyata, media sosial, atau keduanya. Cancel culture dilakukan dengan cara mengumpulkan dukungan untuk memboikot seseorang atau suatu kelompok yang telah melakukan hal yang tidak pantas atau melanggar nilai dan norma yang berlaku di masyarakat, seperti mengatakan hal yang rasis atau melakukan tindakan kriminal.",
            question:
              "Berdasarkan paragraf 1 pada bacaan di atas, manakah pernyataan di bawah ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Cancel culture dapat diartikan sebagai sebuah praktik boikot massal terhadap seseorang atau suatu kelompok.",
              },
              {
                id: "b",
                text: "Pemboikotan ini hanya terjadi di dunia nyata.",
              },
              {
                id: "c",
                text: "Pemboikotan ini hanya terjadi di media sosial.",
              },
              {
                id: "d",
                text: "Seseorang yang mengalami cancel culture di dunia nyata pasti mengalaminya juga di media sosial",
              },
              {
                id: "e",
                text: "Cancel culture dilakukan kepada seseorang atau kelompok yang melakukan hal yang sesuai dengan norma yang berlaku.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pilihan A benar karena sesuai persis dengan kalimat pertama teks. Pilihan B dan C salah karena teks menyatakan pemboikotan 'bisa terjadi di dunia nyata, media sosial, atau keduanya' \u2014 bukan hanya salah satu. Pilihan D salah karena teks menggunakan kata 'atau keduanya', yang berarti tidak pasti terjadi di kedua tempat. Pilihan E salah karena teks menyatakan cancel culture ditujukan kepada yang 'melakukan hal yang tidak pantas atau melanggar nilai dan norma', bukan yang sesuai norma.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Orang-orang atau kelompok yang mengalami cancel culture biasanya akan diboikot, baik dalam pekerjaannya hingga kehidupan sosialnya. Pada prosesnya, mereka juga akan mendapatkan ujaran kebencian dan dimasukkan ke dalam daftar hitam (blacklist). Hal ini dilakukan masyarakat sebagai bentuk penolakan keberadaan diri mereka di ruang publik. Cancel culture ini sering dialami para figur publik, seperti selebritas dan politisi.",
            question:
              "Berdasarkan paragraf 2 pada bacaan di atas, manakah pernyataan di bawah ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Orang-orang atau kelompok yang mengalami cancel culture biasanya akan disanjung, baik dalam pekerjaannya hingga kehidupan sosialnya.",
              },
              {
                id: "b",
                text: "Korban cancel culture tidak mendapatkan ujaran kebencian dan dimasukkan ke dalam daftar hitam (blacklist).",
              },
              {
                id: "c",
                text: "Sanjungan ini dilakukan masyarakat sebagai bentuk penghormatan keberadaan diri mereka di ruang publik.",
              },
              {
                id: "d",
                text: "Cancel culture ini sering dialami para figur publik, seperti selebritas dan politisi.",
              },
              {
                id: "e",
                text: "Cancel culture ini hanya dialami oleh masyarakat biasa.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Pilihan D benar karena sesuai persis dengan kalimat terakhir paragraf: 'Cancel culture ini sering dialami para figur publik, seperti selebritas dan politisi.' Pilihan A salah (teks menyatakan 'diboikot', bukan 'disanjung'). Pilihan B salah (teks menyatakan mereka AKAN mendapatkan ujaran kebencian). Pilihan C salah (teks menyatakan 'penolakan', bukan 'penghormatan'). Pilihan E salah (teks menyatakan sering dialami figur publik, bukan hanya masyarakat biasa).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Jika ditelusuri lebih lanjut, cancel culture memiliki dampak positif dan negatif. Dampak positif dari gerakan cancel culture adalah gerakan ini bisa berfungsi sebagai alat pengendalian sosial. Hal ini terjadi karena gerakan ini bisa membuat masyarakat, terutama figur publik, akan berhati-hati ketika berucap dan bertindak. Sementara itu, dampak negatifnya adalah menimbulkan cyber bullying terhadap seseorang dan menciptakan rasa malu, tidak percaya diri, hingga depresi pada orang yang mengalaminya. Selain itu, jika terjadi pada figur publik, cancel culture ini tentunya berpotensi besar merusak kehidupan mereka sebagai figur publik.",
            question:
              "Berdasarkan paragraf 3 pada bacaan di atas, manakah pernyataan di bawah ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Cancel culture hanya memiliki dampak positif dan tidak memiliki dampak negatif.",
              },
              {
                id: "b",
                text: "Cancel culture bisa berfungsi sebagai alat pengendalian sosial.",
              },
              {
                id: "c",
                text: "Cancel culture tidak bisa membuat masyarakat, terutama figur publik, berhati-hati ketika berucap dan bertindak.",
              },
              {
                id: "d",
                text: "Cancel culture tidak akan menciptakan rasa malu, tidak percaya diri, hingga depresi pada orang yang mengalaminya.",
              },
              {
                id: "e",
                text: "Jika terjadi pada figur publik, cancel culture tidak berpotensi merusak kehidupan mereka sebagai figur publik.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pilihan B benar karena teks menyatakan: 'Dampak positif dari gerakan cancel culture adalah gerakan ini bisa berfungsi sebagai alat pengendalian sosial.' Pilihan A salah (teks menyatakan ada dampak positif DAN negatif). Pilihan C salah (teks menyatakan BISA membuat berhati-hati). Pilihan D salah (teks menyatakan dampak negatifnya MENIMBULKAN rasa malu, tidak percaya diri, depresi). Pilihan E salah (teks menyatakan BERPOTENSI BESAR merusak kehidupan figur publik).",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Benar atau Salah";
      moduleDoc.description =
        "Pelajari cara menentukan pernyataan benar atau salah berdasarkan informasi dalam teks, termasuk teknik scanning dan analisis pilihan jawaban.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Benar atau Salah",
        description:
          "Pelajari cara menentukan pernyataan benar atau salah berdasarkan informasi dalam teks, termasuk teknik scanning dan analisis pilihan jawaban.",
        subcategory: "Analisis Paragraf",
        steps: stepsData,
        points_available: 100,
      });
    }

    console.log("Module Seeded Successfully:", moduleDoc.name);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedBenarAtauSalah();
