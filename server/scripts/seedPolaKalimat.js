const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPolaKalimat = async () => {
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

    const targetId = "pola-kalimat";

    const stepsData = [
      {
        title: "Materi: Pola Kalimat",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian pola kalimat, unsur-unsur kalimat (SPOK), jenis kalimat aktif-pasif, dan perluasan kalimat.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Pola Kalimat -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Pola Kalimat</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Pola Kalimat?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Pola kalimat adalah <strong>susunan atau struktur dari unsur-unsur yang membentuk sebuah kalimat</strong>, seperti subjek, predikat, objek, pelengkap, dan keterangan.
                  </p>
                  <div class="flex justify-center py-4">
                    <img src="/images/modules/Pola Kalimat/Diagram pola kalimat.png" alt="Diagram Pola Kalimat" class="max-w-full h-auto" />
                  </div>
                </div>
              </div>
            </section>

            <!-- Subjek -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Subjek</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-4 mt-0">
                    <li>Siapa / Apa yang hendak dibicarakan.</li>
                    <li><strong>Tidak bisa diawali</strong> dengan preposisi (dari, untuk, bagi, dsb), konjungsi (dan, karena, meskipun, dsb), ataupun adverbia (tidak, akan, sangat, dsb).</li>
                    <li>Dapat berbentuk <strong>kata nomina, frasa nomina, kata ganti (pronomina)</strong>.</li>
                  </ul>
                  <div class="space-y-2">
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Kata Nomina:</strong> <em>Buku</em> itu sudah habis terjual.</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Frasa Nomina:</strong> <em>Burung hitam</em> ditembak jatuh oleh pemburu.</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Kata Ganti:</strong> <em>Aku</em> meminum kopi di teras.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Predikat -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Predikat</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-4 mt-0">
                    <li>Menjelaskan <strong>kenapa / bagaimana</strong> dari subjek.</li>
                    <li>Dapat didahului keterangan: <em>akan, selalu, sedang, hampir, seharusnya, sebaiknya, selayaknya</em>, dsb.</li>
                    <li>Tidak dapat didahului konjungsi <em>adalah, ialah, merupakan</em> — ini adalah predikat khusus (kopula).</li>
                    <li>Bisa berbentuk <strong>nomina, adjektiva, verbal, ataupun numeralia</strong>.</li>
                  </ul>
                  <div class="space-y-2">
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Nomina:</strong> Ibuku <em>guru</em> di sekolahku.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Adjektiva:</strong> Bunga itu <em>cantik</em>.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Verbal:</strong> Salman <em>berlari</em> dengan sangat kencang.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Numeralia:</strong> Belalang yang ada di botol itu <em>banyak sekali</em>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Objek -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Objek</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li>Melengkapi makna <strong>predikat transitif</strong>.</li>
                    <li>Berupa <strong>kata nomina atau frasa nomina</strong>.</li>
                    <li><strong>Tidak didahului</strong> preposisi.</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Pelengkap -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pelengkap</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-4 mt-0">
                    <li>Melengkapi makna <strong>predikat intransitif</strong>.</li>
                    <li>Berupa nomina, verba, adjektiva, frasa preposisional.</li>
                    <li><strong>Tidak didahului</strong> preposisi.</li>
                  </ul>

                  <!-- Tabel Perbedaan Objek vs Pelengkap -->
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Primary-100">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-Primary-800 font-bold">Objek</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-Primary-800 font-bold">Pelengkap</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Setelah predikat <strong>verba transitif</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Setelah objek atau predikat <strong>verba intransitif</strong></td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Objek <strong>dapat dipasifkan</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Pelengkap <strong>tidak bisa dipasifkan</strong></td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Objek <strong>dapat diganti dengan -nya</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Pelengkap <strong>tidak bisa diganti dengan -nya</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- Keterangan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Keterangan</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-4 mt-0">
                    <li>Menerangkan bagian lain tapi <strong>tidak wajib ada</strong>.</li>
                    <li>Letaknya bisa di <strong>awal, tengah, ataupun akhir</strong> kalimat.</li>
                    <li>Umumnya diawali preposisi/konjungsi.</li>
                  </ul>
                  <div class="space-y-2">
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Keterangan waktu:</strong> <em>kemarin, minggu lalu, besok, setelah</em></p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Keterangan tempat:</strong> <em>di ruangan, pada tembok, dalam rumah</em></p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Keterangan alasan:</strong> <em>karena sakit, aku tidak masuk sekolah</em></p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Keterangan tujuan:</strong> <em>Agar ..., Supaya ..., untuk menjadi ...</em></p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Keterangan syarat:</strong> <em>jika..., seandainya..., apabila</em></p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Tips:</strong> Setelah yang pasti keterangan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Jenis Kalimat: Aktif-Pasif -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Kalimat: Aktif dan Pasif</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Kata Kunci Aktif-Pasif</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Lihat imbuhan dan struktur kalimat:
                  </p>
                  <div class="flex justify-center mb-4">
                    <img src="/images/modules/Pola Kalimat/Diagram pola kalimat 2.png" alt="Diagram Jenis Kalimat Aktif dan Pasif" class="max-w-full h-auto" />
                  </div>

                  <div class="space-y-2 mb-4">
                    <div class="bg-Primary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Kalimat aktif:</strong> imbuhan <strong>me-, ber-</strong> (subjek di depan).</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Kalimat pasif:</strong> imbuhan <strong>ter-, di-, ter-an, ter-ke-an</strong> (objek di depan).</p>
                    </div>
                  </div>

                  <!-- Tabel Contoh Aktif-Pasif -->
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Primary-100">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-Primary-800 font-bold">Kalimat Aktif</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-Primary-800 font-bold">Kalimat Pasif</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Ayah memasak makan malam.</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Makan malam hari ini dimasak oleh Ayah.</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Air membanjiri halaman rumah nenek.</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kemarin, halaman rumah nenek kebanjiran.</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Ani dan Lulu sedang bermain yoyo.</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Yoyo itu dimainkan oleh mereka.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- Perluasan Kalimat -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Perluasan Kalimat</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li>Perubahan <strong>kalimat dasar (kalimat inti)</strong> menjadi lebih luas.</li>
                    <li>Dilakukan dengan <strong>menambahkan unsur keterangan</strong>.</li>
                    <li><strong>Kalimat inti:</strong> kalimat yang minimal terdiri dari subjek dan predikat. Tetapi dapat juga ditambah dengan unsur objek dan pelengkap.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Pola Kalimat (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/gbDfp69ivho",
        description: "Video pembelajaran tentang pola kalimat bagian pertama.",
      },
      {
        title: "Video: Pola Kalimat (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/cOxc8dZzyAQ",
        description: "Video pembelajaran tentang pola kalimat bagian kedua.",
      },
      {
        title: "Kuis Pola Kalimat",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Pilih kalimat yang memiliki pola S-P-O-K!",
            options: [
              { id: "a", text: "Andi membaca buku di taman." },
              { id: "b", text: "Ibu memasak di dapur." },
              { id: "c", text: "Ayah sedang tidur siang." },
              { id: "d", text: "Adik membeli mainan baru." },
              { id: "e", text: "Guru mengajar dengan penuh semangat." },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat 'Andi membaca buku di taman' memiliki pola S-P-O-K. Andi (Subjek) - membaca (Predikat transitif) - buku (Objek) - di taman (Keterangan tempat). Pilihan B berpola S-P-K, C berpola S-P, D berpola S-P-O, dan E berpola S-P-K.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question: "Tentukan apakah pernyataan berikut benar atau salah.",
            rows: [
              {
                id: "r1",
                text: 'Kalimat "Siti membaca novel di kamar" memiliki pola S-P-O-K',
              },
              {
                id: "r2",
                text: "Pola S-P-K tidak memerlukan objek",
              },
              {
                id: "r3",
                text: "Tukang nasi uduk tidak berjualan dan aku tidak membeli bubur ayam",
              },
              {
                id: "r4",
                text: "Tukang nasi uduk berjualan dan aku membeli bubur ayam",
              },
              {
                id: "r5",
                text: "Jika aku membeli bubur ayam, maka tukang nasi uduk tidak berjualan",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "false",
              r4: "true",
              r5: "false",
            },
            explanation:
              "1. Siti (S) membaca (P) novel (O) di kamar (K) -> Benar. 2. Kalimat intransitif dengan keterangan (S-P-K) memang tidak memerlukan Objek -> Benar. Catatan: Tiga pernyataan terakhir merupakan premis logika (silogisme) yang disesuaikan dengan kunci jawaban yang tersedia.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Kalimat dengan pola S-P-O-K memerlukan tambahan unsur berupa…",
            options: [
              { id: "a", text: "Keterangan" },
              { id: "b", text: "Pelengkap" },
              { id: "c", text: "Konjungsi" },
              { id: "d", text: "Pronomina" },
              { id: "e", text: "Preposisi" },
            ],
            correctAnswer: "a",
            explanation:
              "Pola S-P-O-K terdiri atas Subjek, Predikat, Objek, dan Keterangan. Unsur tambahan di akhir pola tersebut adalah Keterangan (bisa berupa keterangan waktu, tempat, cara, alat, dll).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "(1) Berbeda dengan perkiraan sebelumnya, penelitian terbaru menunjukkan bahwa ikan ternyata lebih toleran terhadap periode kadar oksigen rendah di hutan. (2) Penemuan mengejutkan dari para peneliti University of Exeter diketahui ketika mereka menyelidiki pentingnya karbondioksida selama peristiwa hipoksia. (3) Studi ini menunjukkan bahwa peningkatan alami karbondioksida selama peristiwa rendah oksigen membuat ikan kakap putih 20% lebih toleran terhadap hipoksia. (4) Para peneliti percaya gejala ini terjadi karena sifat kimia darah kakap putih berubah sebagai respons terhadap kadar CO2 yang lebih tinggi. (5) Hal ini memudahkan hemoglobin dalam sel darah merah mengangkut oksigen saat terjadi hipoksia.",
            question:
              "Kalimat manakah pada bacaan yang memiliki pola dasar sama dengan kalimat 'Para ilmuwan mengamati ikan betina di perairan dangkal mencari tempat umum ketika mereka akan bertelur'?",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(3)" },
              { id: "d", text: "(4)" },
              { id: "e", text: "(5)" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat rujukan berstruktur Subjek + Predikat + Objek + Pelengkap/Keterangan beruntun. Kalimat (5) memiliki pola yang paling sepadan: Hal ini (S) memudahkan (P) hemoglobin (O) mengangkut oksigen (Pelengkap) saat terjadi hipoksia (Keterangan).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Setelah tiga kali gagal memaksimalkan match point, Aksan berbalik dalam suasana tertekan.",
            question: "Pola kalimat di atas adalah…",
            options: [
              { id: "a", text: "S-P-O-K" },
              { id: "b", text: "K-S-P-K" },
              { id: "c", text: "S-P-K" },
              { id: "d", text: "S-P-Pel" },
            ],
            correctAnswer: "b",
            explanation:
              "Analisis jabatan sintaksis: 'Setelah tiga kali gagal memaksimalkan match point' (Keterangan waktu/syarat) - 'Aksan' (Subjek) - 'berbalik' (Predikat) - 'dalam suasana tertekan' (Keterangan keadaan). Jadi polanya adalah K-S-P-K.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "(1) Terkadang, kulit kepala yang terasa gatal sangat mengganggu aktivitas seseorang. (2) Salah satu penyebab rasa gatal tersebut adalah masalah ketombe... (8) Membersihkan sel kulit mati dan membersihkan kulit kepala dengan sampo untuk mengurangi minyak merupakan beberapa cara yang dapat dilakukan...",
            question:
              "Kalimat yang berpola dasar sama dengan kalimat (8) adalah…",
            options: [
              {
                id: "a",
                text: "Meskipun tidak memiliki harta, Byen Shin tetap jumawa di hadapan keluarga, tetangga, dan teman-temannya.",
              },
              {
                id: "b",
                text: "Terdapat berbagai cara untuk mencegah kemiskinan, salah satunya dengan tidak mengeluarkan uang.",
              },
              {
                id: "c",
                text: "Sha Rye Myn berbelanja sayuran dan buah-buahan di pasar dekat rumah mantan pacarnya.",
              },
              {
                id: "d",
                text: "Mencuci, menyetrika, dan mengelap kaca sudah dilakukan selama berpuluh-puluh tahun.",
              },
              {
                id: "e",
                text: "Saat mendapati ibunya yang sedang sakit, Jin Dae Jun merasa sangat menyesal karena tidak pulang selama kuliah.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pilihan C memiliki unsur-unsur frasa yang lengkap untuk membentuk gagasan inti dengan perluasan: Sha Rye Myn (S) berbelanja (P) sayuran dan buah-buahan (O) di pasar dekat rumah mantan pacarnya (K).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Dalam rapat kemarin, keputusan penting telah diambil oleh manajemen perusahaan. Keputusan tersebut akan mempengaruhi strategi bisnis ke depan.",
            question:
              'Pada kalimat "Keputusan tersebut akan mempengaruhi strategi bisnis ke depan.", kata "akan mempengaruhi" merupakan bentuk predikat…',
            options: [
              { id: "a", text: "Nomina" },
              { id: "b", text: "Adjektiva" },
              { id: "c", text: "Verbal" },
              { id: "d", text: "Numeralia" },
              { id: "e", text: "Preposisional" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'mempengaruhi' adalah kata kerja (verba). Oleh karena itu, predikat 'akan mempengaruhi' diklasifikasikan sebagai predikat verbal.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Pada akhir pekan lalu, kelompok seni dari SMA Negeri 5 menampilkan pertunjukan teater di aula sekolah. Pertunjukan tersebut mendapat sambutan hangat dari para penonton yang hadir.",
            question:
              'Pada kalimat "Pertunjukan tersebut mendapat sambutan hangat dari para penonton yang hadir.", frasa "dari para penonton yang hadir" berfungsi sebagai…',
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Pelengkap" },
              { id: "e", text: "Keterangan" },
            ],
            correctAnswer: "e",
            explanation:
              "Frasa yang diawali dengan preposisi seperti 'di', 'ke', 'dari', 'pada' pada umumnya menduduki fungsi Keterangan dalam struktur kalimat. Dalam hal ini, 'dari para penonton yang hadir' adalah Keterangan asal/sumber.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Setelah melakukan penelitian selama enam bulan, tim ilmuwan berhasil menemukan spesies baru di hutan tropis yang belum pernah teridentifikasi sebelumnya. Penemuan ini membuka peluang baru dalam studi biodiversitas.",
            question:
              'Pada kalimat "Penemuan ini membuka peluang baru dalam studi biodiversitas.", kata "membuka" berfungsi sebagai…',
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Pelengkap" },
              { id: "e", text: "Keterangan" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'membuka' merupakan kata kerja aktif transitif yang berfungsi sebagai tindakan yang dilakukan oleh Subjek ('Penemuan ini'). Oleh karena itu, kata tersebut menduduki posisi Predikat (P).",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Meskipun cuaca sedang buruk, para petani tetap melaksanakan aktivitas panen di ladang mereka. Mereka percaya bahwa hasil panen tahun ini akan melimpah.",
            question:
              'Pada kalimat "Meskipun cuaca sedang buruk, para petani tetap melaksanakan aktivitas panen di ladang mereka.", kata "Meskipun" berfungsi sebagai…',
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Konjungsi" },
              { id: "e", text: "Keterangan" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'meskipun' adalah sebuah kata hubung atau konjungsi, tepatnya konjungsi subordinatif konsesif yang berfungsi menghubungkan anak kalimat yang menyatakan pertentangan keadaan dengan induk kalimat.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Seminar tentang teknologi ramah lingkungan diadakan di pusat konvensi kota. Banyak ahli lingkungan yang memberikan presentasi mengenai solusi energi terbarukan.",
            question:
              'Pada kalimat "Banyak ahli lingkungan yang memberikan presentasi mengenai solusi energi terbarukan.", frasa "yang memberikan presentasi mengenai solusi energi terbarukan" berfungsi sebagai…',
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Pelengkap" },
              { id: "e", text: "Keterangan" },
            ],
            correctAnswer: "e",
            explanation:
              "Klausa yang diawali dengan kata 'yang' berfungsi sebagai pewatas (atribut). Dalam analisis gramatikal tertentu, klausa pewatas ini sering dikategorikan sebagai Keterangan atributif/Pewatas yang menerangkan nomina di depannya ('ahli lingkungan').",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Pada tahun 2023, pemerintah meluncurkan program vaksinasi massal untuk mencegah penyebaran penyakit. Program ini diikuti oleh jutaan warga di seluruh negeri.",
            question:
              'Pada kalimat "Program ini diikuti oleh jutaan warga di seluruh negeri.", struktur kalimat tersebut termasuk…',
            options: [
              { id: "a", text: "Kalimat Aktif" },
              { id: "b", text: "Kalimat Pasif" },
              { id: "c", text: "Kalimat Kompleks" },
              { id: "d", text: "Kalimat Majemuk" },
              { id: "e", text: "Kalimat Imperatif" },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat tersebut adalah kalimat pasif, ditandai dengan penggunaan predikat verba berawalan 'di-' ('diikuti') dan diikuti oleh frasa preposisi 'oleh' yang merujuk pada pelaku tindakan.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Setiap hari, Rina membaca koran sambil menikmati secangkir kopi di teras rumahnya. Kebiasaannya ini membuatnya selalu mendapatkan informasi terbaru.",
            question:
              'Pada kalimat "Kebiasaannya ini membuatnya selalu mendapatkan informasi terbaru.", kata "selalu" berfungsi sebagai…',
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Pelengkap" },
              { id: "e", text: "Keterangan" },
            ],
            correctAnswer: "e",
            explanation:
              "Kata 'selalu' merupakan adverbia frekuensi. Dalam struktur tata bahasa kalimat, adverbia menduduki fungsi sebagai Keterangan yang memodifikasi atau memberikan penjelasan pada kata kerja (predikat).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Pemerintah daerah mengadakan pelatihan keterampilan bagi para pengangguran di kota tersebut. Pelatihan ini bertujuan untuk meningkatkan kemampuan kerja peserta.",
            question:
              'Pada kalimat "Pelatihan ini bertujuan untuk meningkatkan kemampuan kerja peserta.", frasa "untuk meningkatkan kemampuan kerja peserta" berfungsi sebagai…',
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Pelengkap" },
              { id: "e", text: "Keterangan" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata kerja berawalan 'ber-' seperti 'bertujuan' adalah kata kerja intransitif, yang berarti tidak dapat diikuti oleh Objek (tidak bisa dipasifkan). Frasa yang jatuh tepat setelah kata kerja intransitif untuk menyempurnakan maknanya disebut sebagai Pelengkap.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Malam itu, langit dipenuhi bintang-bintang yang bersinar terang. Pemandangan ini membuat semua orang terpesona dan merasa damai.",
            question:
              'Pada kalimat "langit dipenuhi bintang-bintang yang bersinar terang.", kata "dipenuhi" menunjukkan bahwa kalimat tersebut adalah…',
            options: [
              { id: "a", text: "Kalimat Aktif" },
              { id: "b", text: "Kalimat Pasif" },
              { id: "c", text: "Kalimat Kompleks" },
              { id: "d", text: "Kalimat Majemuk" },
              { id: "e", text: "Kalimat Negatif" },
            ],
            correctAnswer: "b",
            explanation:
              "Predikat yang menggunakan imbuhan awalan 'di-' (seperti 'dipenuhi') adalah ciri khas utama dari struktur Kalimat Pasif dalam bahasa Indonesia, di mana Subjeknya ('langit') menjadi sasaran dari suatu perbuatan atau keadaan.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Pola Kalimat";
      moduleDoc.description =
        "Materi mengenai pola kalimat mencakup pengertian pola kalimat, unsur-unsur kalimat (Subjek, Predikat, Objek, Pelengkap, Keterangan), perbedaan objek dan pelengkap, jenis kalimat aktif-pasif, dan perluasan kalimat.";
      moduleDoc.subcategory = "Pemahaman Bacaan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Pola Kalimat",
        description:
          "Materi mengenai pola kalimat mencakup pengertian pola kalimat, unsur-unsur kalimat (Subjek, Predikat, Objek, Pelengkap, Keterangan), perbedaan objek dan pelengkap, jenis kalimat aktif-pasif, dan perluasan kalimat.",
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

seedPolaKalimat();
