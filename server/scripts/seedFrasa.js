const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedFrasa = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Pemahaman Bacaan dan Menulis";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "frasa";

    const stepsData = [
      {
        title: "Materi: Frasa",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian frasa, ciri-ciri, jenis-jenis frasa, dan cara menentukan pola frasa.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Frasa -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Frasa</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Frasa?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Frasa adalah <strong>gabungan dua kata atau lebih yang memiliki makna</strong>. Jadi, frasa juga merupakan penyusun sebuah kalimat.
                  </p>
                </div>
              </div>
            </section>

            <!-- Ciri-Ciri Frasa -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri-Ciri Frasa</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li>Terdiri dari <strong>dua kata atau lebih</strong>. Kata-kata yang digunakan dalam frasa jika digabungkan akan memiliki makna yang lebih spesifik.</li>
                    <li><strong>Tidak memiliki subjek atau predikat yang lengkap</strong>. Frasa hanya berfungsi sebagai makna tambahan.</li>
                    <li>Memiliki <strong>peran gramatikal yang beda</strong>. Misal: anak perempuan, 'anak' adalah kata benda dan 'perempuan' adalah kata sifat.</li>
                    <li><strong>Dapat disisipi</strong>. Contoh: <em>rumah biru</em>, di antara keduanya dapat disisipi kata, menjadi <em>rumah <u>berwarna</u> biru</em>.</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Jenis Frasa berdasarkan Distribusi Unsur -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Frasa berdasarkan Distribusi Unsur</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Eksosentris</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Frasa eksosentris adalah frasa yang sebagian atau seluruhnya <strong>tidak mempunyai perilaku sintaksis yang sama dengan komponennya</strong>.
                  </p>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Endosentris</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Frasa endosentris adalah frasa yang keseluruhannya <strong>mempunyai perilaku sintaksis yang sama dengan salah satu bagiannya</strong>.
                  </p>
                </div>
              </div>
            </section>

            <!-- Jenis Frasa berdasarkan Kedudukan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Frasa berdasarkan Kedudukan</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Setara</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa setara adalah frasa yang memiliki <strong>unsur penyusun setara</strong>.
                  </p>
                  <div class="bg-Secondary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>bolak-balik, suami istri, tua muda, hitam putih</em>.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Bertingkat</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa bertingkat memiliki kedudukan yang <strong>tidak setara antar unsurnya</strong>. Terdapat bagian yang menjadi inti dari frasa tersebut.
                  </p>
                  <div class="bg-Tertiary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>baju hitam, tanah air, pisau tajam, uang tunai</em>.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Jenis Frasa berdasarkan Kelas Kata pada Inti -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Frasa berdasarkan Kelas Kata pada Inti</h3>

              <!-- Frasa Preposisional -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Preposisional (Kata Depan)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa yang <strong>diawali dengan kata depan</strong> yang kemudian diikuti oleh kata atau kelompok kata lain.
                  </p>
                  <div class="bg-Primary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>di sepanjang jalan kenangan, kepada guru yang terhormat, bagi mantan yang tersakiti</em>.</p>
                  </div>
                </div>
              </div>

              <!-- Frasa Nominal -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Nominal (Kata Benda)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa yang <strong>berinti pada kata berkelas kata nomina</strong>.
                  </p>
                  <div class="bg-Secondary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>burung biru, sehamparan alun-alun, ketinggian pesawat</em>.</p>
                  </div>
                </div>
              </div>

              <!-- Frasa Verbal -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Verbal (Kata Kerja)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa yang <strong>berinti pada kata berkelas kata kerja</strong>.
                  </p>
                  <div class="bg-Tertiary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>memperoleh hadiah, memakan buah-buahan, melompati pagar</em>.</p>
                  </div>
                </div>
              </div>

              <!-- Frasa Adjektiva -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Adjektiva (Kata Sifat)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa yang <strong>berinti pada kata berkelas kata sifat</strong>.
                  </p>
                  <div class="bg-Primary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>sangat merah, tidak pernah bersih, selalu baik</em>.</p>
                  </div>
                </div>
              </div>

              <!-- Frasa Adverbial -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Frasa Adverbial (Kata Keterangan)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Frasa yang <strong>berinti pada kata berkelas kata keterangan</strong>.
                  </p>
                  <div class="bg-Secondary-50 p-3 rounded-lg">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Contoh:</strong> <em>tidak pernah sekalipun, hanya sesekali, tidak akan</em>.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Cara Menentukan Pola Frasa -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Pola Frasa</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ol class="list-decimal list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li><strong>Tentukan inti dari frasa</strong> — Identifikasi konsep diterangkan (D) dan pembatas atau keterangan atau konsep menerangkan (M) dari frasa tersebut. Misalnya, frasa <em>kecerdasan buatan</em> berinti pada kata <em>kecerdasan</em>.</li>
                    <li><strong>Tentukan kelas kata</strong> — Tentukan apakah inti dan keterangan termasuk nomina, verba, adjektiva, adverbia, atau preposisi.</li>
                    <li><strong>Perhatikan bentuk</strong> — Apakah inti atau keterangan berbentuk kata dasar atau kata berimbuhan.</li>
                    <li><strong>Perhatikan hubungan inti dan pembatas</strong> — Misalnya, frasa <em>pintu belakang</em>, hubungan antara inti (pintu) dan belakang (keterangan) adalah letak atau posisi.</li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Frasa (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/OIfi4ljS-vk",
        description: "Video pembelajaran tentang frasa bagian pertama.",
      },
      {
        title: "Video: Frasa (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/p3FV9aK0qHs",
        description: "Video pembelajaran tentang frasa bagian kedua.",
      },
      {
        title: "Kuis Frasa",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Pilihlah frasa yang termasuk frasa nominal!",
            options: [
              { id: "a", text: "Sangat cepat" },
              { id: "b", text: "Rumah besar" },
              { id: "c", text: "Berjalan santai" },
              { id: "d", text: "Menulis puisi" },
              { id: "e", text: "Di bawah meja" },
            ],
            correctAnswer: "b",
            explanation:
              "Frasa nominal adalah frasa yang intinya berupa kata benda (nomina). Pada frasa 'Rumah besar', kata intinya (yang diterangkan) adalah 'Rumah' (nomina), sedangkan 'besar' adalah kata sifat (adjektiva) yang menerangkan. Oleh karena itu, frasa ini tergolong frasa nominal.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question:
              "Tentukan apakah pernyataan berikut benar atau salah terkait jenis dan unsur frasa.",
            rows: [
              {
                id: "r1",
                text: 'Frasa "rumah kecil" adalah contoh frasa nominal',
              },
              {
                id: "r2",
                text: 'Frasa "berlari cepat" adalah contoh frasa adjektiva',
              },
              {
                id: "r3",
                text: 'Frasa "di atas kursi" adalah contoh frasa preposisional',
              },
              {
                id: "r4",
                text: "Frasa nominal selalu menggunakan kata kerja sebagai inti",
              },
              {
                id: "r5",
                text: 'Frasa "sangat indah" adalah contoh frasa adjektiva karena "indah" adalah kata sifat',
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "true",
              r4: "false",
              r5: "true",
            },
            explanation:
              "1. 'rumah kecil' berinti nomina 'rumah' (Benar). 2. 'berlari cepat' berinti verba 'berlari', jadi ini frasa verbal, bukan adjektiva (Salah). 3. 'di atas kursi' diawali preposisi 'di', jadi ini frasa preposisional (Benar). 4. Frasa nominal berinti nomina/kata benda, bukan kata kerja (Salah). 5. 'sangat indah' berinti kata sifat 'indah' (Benar).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              'Lengkapi pernyataan berikut: "Frasa nominal adalah frasa yang memiliki _____ sebagai inti frasa."',
            options: [
              { id: "a", text: "Nomina" },
              { id: "b", text: "Verba" },
              { id: "c", text: "Adjektiva" },
              { id: "d", text: "Adverbia" },
              { id: "e", text: "Preposisi" },
            ],
            correctAnswer: "a",
            explanation:
              "Nomina (kata benda) adalah kelas kata yang menjadi unsur pusat atau inti dalam pembentukan sebuah frasa nominal.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "(1) Ilmuwan yang bekerja di wilayah Antartika telah menemukan sejenis rumput laut baru. (2) Rumput laut itu hidup di perairan dalam, yakni di kedalaman sekitar 100 meter di bawah permukaan Antartika... (5) Menurutnya, rumput laut ini memiliki potensi untuk memainkan peran besar dalam melindungi lingkungan...",
            question:
              "Dari bacaan di atas, frasa yang berpola sama dengan frasa 'perairan dalam' di bawah ini adalah…",
            options: [
              { id: "a", text: "Ekor kuda" },
              { id: "b", text: "Peran besar" },
              { id: "c", text: "Orang tua" },
              { id: "d", text: "Gaun pengantin" },
              { id: "e", text: "Belum selesai" },
            ],
            correctAnswer: "b",
            explanation:
              "Frasa 'perairan dalam' terbentuk dari Nomina (perairan) + Adjektiva (dalam). Frasa yang memiliki pola kelas kata yang sama adalah 'Peran besar', yang terbentuk dari Nomina (peran) + Adjektiva (besar).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "(1) Selain kopi, ternyata ada buah yang dikonsumsi manusia setelah melalui proses pencernaan hewan, yakni durian... (4) Pembuatan durian tahi gajah mirip dengan kopi luwak, yakni buah durian dimakan oleh gajah secara utuh terlebih dahulu... (6) Durian inilah yang akan dinikmati dan dinilai memiliki rasa yang lebih lezat... (9) Hal ini disebabkan daging buahnya yang masih dilapisi kulit durian yang sangat tebal sehingga kehigienisannya masih terjaga...",
            question:
              'Dari bacaan di atas, frasa yang berpola sama dengan frasa bercetak tebal pada kalimat "Jarjit belum pulang sejak dimarahi oleh nenek Susanti" adalah ....',
            options: [
              { id: "a", text: "Proses pencernaan pada kalimat (1)" },
              { id: "b", text: "Secara utuh pada kalimat (4)" },
              { id: "c", text: "Terlebih dahulu pada kalimat (4)" },
              { id: "d", text: "Lebih lezat pada kalimat (6)" },
              { id: "e", text: "Masih terjaga pada kalimat (9)" },
            ],
            correctAnswer: "e",
            explanation:
              "Pola frasa 'belum pulang' adalah Adverbia (belum) + Verba (pulang). Frasa yang memiliki pola serupa adalah 'masih terjaga', yang terdiri atas Adverbia (masih) + Verba (terjaga).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Junta militer Myanmar menolak resolusi Majelis Umum PBB yang menyerukan embargo senjata ke negara itu... Mereka juga telah mengirimkan surat keberatan kepada Sekjen dan presiden Majelis Umum PBB.",
            question:
              "Frasa yang berpola sama dengan 'surat keberatan' pada teks berita di atas adalah…",
            options: [
              { id: "a", text: "Tidak sah" },
              { id: "b", text: "Telah didakwa" },
              { id: "c", text: "Penuh semangat" },
              { id: "d", text: "Dari posisinya" },
              { id: "e", text: "Komunitas internasional" },
            ],
            correctAnswer: "e",
            explanation:
              "Frasa 'surat keberatan' adalah Frasa Nominal yang intinya berada di depan (Hukum DM). 'Surat' (D) dan 'keberatan' (M). Frasa 'Komunitas internasional' juga merupakan frasa nominal dengan pola DM, di mana 'komunitas' (D) diterangkan oleh 'internasional' (M).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Pulang pergi memiliki pola yang sama dengan…",
            options: [
              { id: "a", text: "Baju berwarna merah" },
              { id: "b", text: "Kegiatan jual beli" },
              { id: "c", text: "Secawan rindu" },
              { id: "d", text: "Mondar mandir" },
              { id: "e", text: "Baju bagus" },
            ],
            correctAnswer: "d",
            explanation:
              "Frasa 'pulang pergi' adalah frasa verba koordinatif (terdiri dari dua kata kerja yang setara dan menunjukkan aktivitas berlawanan arah). Pola yang persis sama ditemukan pada 'mondar mandir' (verba koordinatif aktivitas bolak-balik).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Frasa yang memiliki pola sama dengan bola biru adalah…",
            options: [
              { id: "a", text: "Puisi terbaik" },
              { id: "b", text: "Rumput mengering" },
              { id: "c", text: "Anak muda" },
              { id: "d", text: "Atlet basket" },
              { id: "e", text: "Sangkar burung" },
            ],
            correctAnswer: "c",
            explanation:
              "Frasa 'bola biru' dibentuk dari pola Nomina (bola) + Adjektiva dasar (biru). Pola ini sama persis dengan frasa 'Anak muda' yang terbentuk dari Nomina (anak) + Adjektiva dasar (muda).",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Penjualan sisiknya untuk pengobatan tradisional Tiongkok dan dagingnya sebagai makanan lezat, telah menjadikan trenggiling sebagai mamalia yang … diperdagangkan di dunia. Kelangsungan hidup trenggiling … sehingga pada 2016, perdagangan komersial internasional melarang perdagangan hewan tersebut. Namun begitu, … yang disampaikan eksklusif kepada National Geographic menemukan bahwa, perdagangan sisik dan daging trenggiling masih tinggi pada 2019.",
            question:
              "Frasa yang tepat untuk melengkapi bagian rumpang paragraf tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Tidak banyak, akan terancam, dan selembar laporan baru",
              },
              {
                id: "b",
                text: "Paling banyak, sangat terancam, dan sebuah laporan baru",
              },
              {
                id: "c",
                text: "Kurang banyak, tidak terancam, dan sebuah laporan baru",
              },
              {
                id: "d",
                text: "Akan banyak, cukup mengkhawatirkan, dan sebagian laporan baru",
              },
              {
                id: "e",
                text: "Paling banyak, belum terancam, dan seluruh laporan baru",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan konteks logika kalimat: trenggiling banyak diburu menjadikannya mamalia 'paling banyak' diperdagangkan, sehingga keberadaannya 'sangat terancam'. Bukti data baru mengacu pada 'sebuah laporan baru'. Pilihan B adalah yang paling logis secara struktur frasa dan konteks.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "(1) Kroasia secara resmi diterima Uni Eropa untuk menggunakan mata uang euro... (8) Sebelum akhirnya resmi menggunakan mata uang euro, negara ini masih harus melalui perjalanan panjang dan memenuhi berbagai syarat...",
            question:
              "Frasa yang berpola makna sama dengan frasa 'makanan termahal' adalah…",
            options: [
              { id: "a", text: "Mata uang pada kalimat (1)" },
              { id: "b", text: "Menteri keuangan pada kalimat (2)" },
              { id: "c", text: "Keputusan hukum pada kalimat (3)" },
              { id: "d", text: "Hari bersejarah pada kalimat (5)" },
              { id: "e", text: "Perjalanan panjang pada kalimat (8)" },
            ],
            correctAnswer: "e",
            explanation:
              "Frasa 'makanan termahal' merupakan frasa nominal dengan susunan Nomina (makanan) + Adjektiva (termahal). Pola Nomina + Adjektiva dimiliki oleh frasa 'perjalanan panjang' (Nomina: perjalanan, Adjektiva: panjang).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question: "Frasa 'buku tebal' berpola sama dengan….",
            options: [
              { id: "a", text: "Seekor ikan" },
              { id: "b", text: "Sepotong roti" },
              { id: "c", text: "Baju baru" },
              { id: "d", text: "Bolak balik" },
              { id: "e", text: "Sebatang pensil" },
            ],
            correctAnswer: "c",
            explanation:
              "Pola frasa 'buku tebal' adalah Nomina (buku) + Adjektiva (tebal). 'Baju baru' memiliki pola yang tepat sama, yaitu Nomina (baju) + Adjektiva (baru).",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Frasa berikut ini sepola dengan frasa 'kuliah daring', kecuali…",
            options: [
              { id: "a", text: "Buku tebal" },
              { id: "b", text: "Buku elektronik" },
              { id: "c", text: "Karya parodi" },
              { id: "d", text: "Segelas susu" },
              { id: "e", text: "Meja kotak" },
            ],
            correctAnswer: "d",
            explanation:
              "Frasa 'kuliah daring', 'buku tebal', 'buku elektronik', 'karya parodi', dan 'meja kotak' merupakan frasa endosentrik atributif berinti nomina di depan (DM). Sebaliknya, 'segelas susu' adalah frasa kuantitatif (Numeralia + Nomina) yang polanya MD.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question:
              "Frasa yang memiliki pola makna yang sama dengan frasa 'kemampuan fisik' adalah…",
            options: [
              { id: "a", text: "Gula pasir" },
              { id: "b", text: "Kekuatan ajaib" },
              { id: "c", text: "Adaptasi cahaya" },
              { id: "d", text: "Olahraga kardio" },
              { id: "e", text: "Ikan asin" },
            ],
            correctAnswer: "b",
            explanation:
              "Frasa 'kemampuan fisik' terbentuk dari Nomina abstrak (kemampuan) dan Adjektiva (fisik). Pola struktur Nomina abstrak + Adjektiva juga dimiliki oleh frasa 'kekuatan ajaib' (Nomina: kekuatan, Adjektiva: ajaib).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Frasa 'warga termiskin' memiliki pola yang sama dengan…",
            options: [
              { id: "a", text: "Anak pintar" },
              { id: "b", text: "Buku memasak" },
              { id: "c", text: "Berjalan kaki" },
              { id: "d", text: "Tipu daya" },
              { id: "e", text: "Kamar depan" },
            ],
            correctAnswer: "a",
            explanation:
              "Pola 'warga termiskin' adalah Nomina (warga) + Adjektiva (termiskin). Meskipun adjektivanya berbentuk superlatif, pola dasarnya tetap N + Adj. Hal ini selaras dengan frasa 'anak pintar' (Nomina + Adjektiva).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              "Frasa yang berjenis sama dengan frasa 'pertemuan khusus' adalah…",
            options: [
              { id: "a", text: "Penyakit kronis" },
              { id: "b", text: "Pemerintah pusat" },
              { id: "c", text: "Masih bersifat" },
              { id: "d", text: "Masa mendatang" },
              { id: "e", text: "Zaman lampau" },
            ],
            correctAnswer: "a",
            explanation:
              "Frasa 'pertemuan khusus' adalah frasa nominal (Nomina + Adjektiva). Di antara pilihan yang ada, frasa yang berstruktur murni Nomina + Adjektiva adalah 'penyakit kronis'.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Frasa";
      moduleDoc.description =
        "Materi mengenai frasa mencakup pengertian, ciri-ciri, jenis frasa berdasarkan distribusi unsur, kedudukan, dan kelas kata pada inti, serta cara menentukan pola frasa.";
      moduleDoc.subcategory = "Pemahaman Bacaan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Frasa",
        description:
          "Materi mengenai frasa mencakup pengertian, ciri-ciri, jenis frasa berdasarkan distribusi unsur, kedudukan, dan kelas kata pada inti, serta cara menentukan pola frasa.",
        subcategory: "Pemahaman Bacaan",
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

seedFrasa();
