const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKalimatEfektifPBM = async () => {
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

    const targetId = "kalimat-efektif-pbm";

    const stepsData = [
      {
        title: "Materi: Kalimat Efektif",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian kalimat efektif, syarat-syarat kalimat efektif, serta contoh kalimat efektif dan tidak efektif.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Kalimat Efektif -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Kalimat Efektif</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Kalimat Efektif?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kalimat efektif adalah kalimat yang <strong>mampu menyampaikan gagasan penulis atau pembicara secara tepat, jelas, dan mudah dipahami</strong> oleh pembaca atau pendengar. Kalimat efektif harus sesuai dengan kaidah bahasa Indonesia yang berlaku.
                  </p>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Kunci:</strong> Pembaca/pendengar memahami pesan <em>persis seperti yang dimaksud</em> oleh penulis/pembicara.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Syarat Kalimat Efektif -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Syarat-Syarat Kalimat Efektif</h3>

              <!-- 1. Kesepadanan (Kesatuan) -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">1. Kesepadanan (Kesatuan)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Kalimat harus memiliki <strong>struktur yang jelas</strong>, minimal terdiri dari <strong>Subjek (S) dan Predikat (P)</strong>. Kesalahan yang umum terjadi:
                  </p>
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-4 mt-0">
                    <li>Kalimat tidak memiliki subjek karena didahului preposisi (<em>pada, dalam, bagi, untuk</em>).</li>
                    <li>Kalimat tidak memiliki predikat karena terlalu banyak anak kalimat.</li>
                  </ul>
                  <div class="space-y-2">
                    <div class="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <strong>Tidak efektif:</strong> <em>Dalam artikel ini membahas tentang kalimat efektif.</em></p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">✅ <strong>Efektif:</strong> <em>Artikel ini membahas kalimat efektif.</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2. Kehematan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">2. Kehematan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Menghindari <strong>pemborosan kata (pleonasme)</strong>, yaitu penggunaan dua kata atau lebih yang bermakna sama dalam satu kalimat.
                  </p>
                  <div class="overflow-x-auto mb-3">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Secondary-100">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-Secondary-800 font-bold">❌ Boros (Pleonasme)</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-Secondary-800 font-bold">✅ Hemat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">sangat manis <strong>sekali</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">sangat manis / manis sekali</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">agar <strong>supaya</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">agar / supaya</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">diwajibkan <strong>harus</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">diwajibkan / harus</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">saling tolong-<strong>menolong</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">saling menolong / tolong-menolong</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">naik <strong>ke atas</strong></td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">naik</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- 3. Kecermatan / Ketepatan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">3. Kecermatan / Ketepatan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Kalimat harus <strong>tidak menimbulkan makna ganda (ambiguitas)</strong>. Pemilihan kata harus tepat sehingga pesan yang disampaikan tidak disalahartikan.
                  </p>
                  <div class="space-y-2">
                    <div class="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <strong>Ambigu:</strong> <em>Anak istri presiden hadir di acara itu.</em> (Anak dari istri presiden? Anak dan istri presiden?)</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">✅ <strong>Tepat:</strong> <em>Anak dan istri presiden hadir di acara itu.</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 4. Kepaduan -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">4. Kepaduan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Unsur-unsur kalimat harus <strong>saling terkait dengan erat</strong>. Tidak ada sisipan yang tidak perlu di antara subjek dan predikat, atau antara predikat dan objek.
                  </p>
                  <div class="space-y-2">
                    <div class="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <strong>Tidak padu:</strong> <em>Kami daripada kelas XII akan mengadakan pentas seni.</em></p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">✅ <strong>Padu:</strong> <em>Kami dari kelas XII akan mengadakan pentas seni.</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 5. Keparalelan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">5. Keparalelan (Kesejajaran)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Unsur-unsur yang dirincikan dalam kalimat harus memiliki <strong>bentuk yang sejajar/setara</strong>. Jika satu unsur berupa kata benda, maka unsur lainnya juga harus kata benda.
                  </p>
                  <div class="space-y-2">
                    <div class="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <strong>Tidak paralel:</strong> <em>Kegiatan itu meliputi <u>membaca</u>, <u>menulis</u>, dan <u>hitungan</u>.</em></p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">✅ <strong>Paralel:</strong> <em>Kegiatan itu meliputi <u>membaca</u>, <u>menulis</u>, dan <u>menghitung</u>.</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 6. Kelogisan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">6. Kelogisan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Makna kalimat harus <strong>masuk akal dan dapat diterima oleh nalar</strong>. Kalimat tidak boleh bertentangan dengan logika.
                  </p>
                  <div class="space-y-2">
                    <div class="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <strong>Tidak logis:</strong> <em>Waktu dan tempat kami persilakan.</em> (Waktu dan tempat tidak bisa dipersilakan.)</p>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0">✅ <strong>Logis:</strong> <em>Bapak/Ibu dipersilakan menyebutkan waktu dan tempat yang tepat.</em></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 7. Ketegasan -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">7. Ketegasan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Kalimat harus memiliki <strong>penekanan pada bagian yang penting</strong>. Hal ini dapat dilakukan dengan mengubah urutan kata, penggunaan partikel <em>-lah</em> atau <em>-kah</em>, serta penggunaan kata <em>adalah, ialah</em>.
                  </p>
                </div>
              </div>
            </section>

            <!-- Kesalahan Umum -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kesalahan Umum dalam Kalimat</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Subjek hilang karena preposisi:</strong> Penggunaan <em>dalam, pada, bagi, untuk, dari</em> di awal kalimat menyebabkan kalimat kehilangan subjek.</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Pleonasme:</strong> Penggunaan kata berlebihan yang bermakna sama (<em>sangat sekali, agar supaya, diwajibkan harus</em>).</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Ambiguitas:</strong> Kalimat yang menimbulkan penafsiran ganda karena pilihan kata atau struktur yang tidak tepat.</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>4. Ketidaksejajaran:</strong> Rincian dalam kalimat tidak memiliki bentuk yang setara.</p>
                    </div>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>5. Ketidaklogisan:</strong> Makna kalimat tidak masuk akal meskipun secara gramatikal sudah benar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Kalimat Efektif (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/R391jo9peVo",
        description:
          "Video pembelajaran tentang kalimat efektif bagian pertama.",
      },
      {
        title: "Video: Kalimat Efektif (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Dz7kcfnz2IE",
        description: "Video pembelajaran tentang kalimat efektif bagian kedua.",
      },
      {
        title: "Kuis Kalimat Efektif",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Pilihlah kalimat yang termasuk kalimat efektif!",
            options: [
              {
                id: "a",
                text: "Dalam rangka untuk meningkatkan kualitas layanan, maka perusahaan akan mengadakan survei pelanggan.",
              },
              {
                id: "b",
                text: "Kami menyarankan kepada para pelanggan untuk dapat melaporkan keluhan secara langsung.",
              },
              {
                id: "c",
                text: "Demi mencapai target, tim kami bekerja keras dan juga penuh semangat.",
              },
              {
                id: "d",
                text: "Peningkatan layanan dilakukan agar pelanggan merasa lebih puas.",
              },
              {
                id: "e",
                text: "Semua karyawan perusahaan tersebut diwajibkan harus mengikuti pelatihan kerja.",
              },
            ],
            correctAnswer: "d",
            explanation:
              'Pilihan D adalah kalimat efektif karena strukturnya jelas dan tidak mengandung pemborosan kata. Pilihan A boros kata ("Dalam rangka untuk", "maka"). Pilihan B boros kata ("menyarankan kepada", "untuk dapat"). Pilihan C boros kata ("dan juga"). Pilihan E boros kata ("diwajibkan harus").',
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question: "Tentukan apakah pernyataan berikut benar atau salah.",
            rows: [
              {
                id: "r1",
                text: 'Kalimat "Untuk meningkatkan mutu, pelatihan dilakukan secara berkala" adalah contoh kalimat efektif',
              },
              {
                id: "r2",
                text: "Kalimat efektif selalu menggunakan kata berulang untuk mempertegas maksud",
              },
              {
                id: "r3",
                text: 'Kalimat "Kami berharap semua karyawan dapat meningkatkan produktivitas" termasuk kalimat efektif',
              },
              {
                id: "r4",
                text: "Kalimat efektif harus memenuhi unsur kehematan, kejelasan, dan ketepatan struktur",
              },
              {
                id: "r5",
                text: 'Penggunaan kata "agar supaya" dalam kalimat membuat kalimat tersebut lebih efektif',
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
              r4: "true",
              r5: "false",
            },
            explanation:
              'Pernyataan 1, 3, dan 4 benar karena sesuai dengan ciri-ciri kalimat efektif. Pernyataan 2 salah karena pengulangan kata yang tidak perlu justru melanggar prinsip kehematan (pleonasme). Pernyataan 5 salah karena "agar supaya" adalah bentuk pemborosan kata yang maknanya bersinonim.',
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Kalimat efektif harus memenuhi unsur kehematan, kejelasan, dan…",
            options: [
              { id: "a", text: "Ketepatan" },
              { id: "b", text: "Keindahan" },
              { id: "c", text: "Kepanjangan" },
              { id: "d", text: "Kemenarikan" },
              { id: "e", text: "Kerumitan" },
            ],
            correctAnswer: "a",
            explanation:
              "Syarat utama kalimat efektif di antaranya adalah keparalelan, ketegasan, kehematan, kecermatan/ketepatan (pemilihan kata), kepaduan, dan kelogisan.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "(1) Perubahan iklim terhadap kualitas udara di dunia selalu dilaporkan oleh World Meteorological Organization (WMO) setiap tahun. (2) Menurut …, musim panas tahun 2022 merupakan musim panas terpanas yang pernah tercatat di Eropa. \n(3) Rekor ini kemudian dipecahkan pada tahun 2023. (4) Gelombang panas berkepanjangan menyebabkan peningkatan konsentrasi materi partikulat (PM) 2,5 dan ozon di permukaan tanah.\n(5) Ratusan lokasi pemantauan kualitas udara melampaui tingkat pedoman kualitas udara ozon WHO, yakni sebesar 100 mikron per meter kubik untuk paparan selama delapan jam. (6) Hal ini pertama kali terjadi di barat daya Eropa, bergeser ke Eropa tengah, dan kemudian menyebar ke seluruh benua. \n(7) Selama paruh kedua Agustus 2022, terjadi intrusi debu gurun, yang sangat tinggi di Mediterania dan Eropa. (8) Campuran suhu tinggi, jumlah aerosol yang tinggi, dan juga kandungan PM 2,5 berdampak pada kesehatan dan kesejahteraan manusia.",
            question:
              "Kalimat manakah yang paling efektif sebagai hasil penggabungan kalimat (3) dan (4)?",
            options: [
              {
                id: "a",
                text: "Rekor ini kemudian dipecahkan pada tahun 2023 ketika gelombang panas berkepanjangan menyebabkan peningkatan konsentrasi materi partikulat (PM) 2,5 dan ozon di permukaan tanah.",
              },
              {
                id: "b",
                text: "Rekor ini kemudian dipecahkan pada tahun 2023 dengan terjadinya gelombang panas berkepanjangan yang menyebabkan peningkatan konsentrasi materi partikulat (PM) 2,5 dan ozon di permukaan tanah.",
              },
              {
                id: "c",
                text: "Rekor ini kemudian dipecahkan pada tahun 2023 setelah gelombang panas berkepanjangan menyebabkan peningkatan konsentrasi materi partikulat (PM) 2,5 dan ozon di permukaan tanah.",
              },
              {
                id: "d",
                text: "Rekor ini kemudian dipecahkan pada tahun 2023 di mana gelombang panas berkepanjangan menyebabkan peningkatan konsentrasi materi partikulat (PM) 2,5 dan ozon di permukaan tanah.",
              },
              {
                id: "e",
                text: "Rekor ini kemudian dipecahkan pada tahun 2023 bertepatan dengan gelombang panas berkepanjangan yang menyebabkan peningkatan konsentrasi materi partikulat (PM) 2,5 dan ozon di permukaan tanah.",
              },
            ],
            correctAnswer: "a",
            explanation:
              'Penggunaan konjungsi waktu "ketika" sangat tepat untuk menggabungkan dua peristiwa yang terjadi secara bersamaan (pada tahun 2023), serta menjadikan struktur kalimat majemuk bertingkat tersebut lebih padat dan tidak berbelit-belit. Penggunaan "di mana" (opsi D) tidak baku untuk penunjuk waktu/situasi.',
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "(1) Di seluruh dunia, intensitas dan kecemerlangan cahaya meningkat 2 persen per tahun. (2) Oleh karena itu, malam menjadi semakin terang. (3) Sejumlah studi menunjukkan, polusi cahaya mengganggu ekosistem alami.\n(4) Dr. Kamiel Spoelstra, seorang ahli ekologis Belanda, bersama timnya berusaha memahamkan pengaruh cahaya lampu di malam hari terhadap kelelawar. (5) Hewan yang aktif di malam hari ini menggunakan cahaya bulan untuk bernavigasi. (6) Mereka sensitive terhadap spektrum cahaya biru. (7) Semakin terang cahaya biru, semakin mereka terganggu.\n(8) Untuk menguji reaksi kelelawar terhadap spektrum warna, menempatkan sekitar 200 lampu di seluruh negeri yang memancarkan beragam warna. (9) Jika spektrum biru dipadukan dengan sedikit warna merah, spektrum warna yang dihasilkan bisa jadi tidak terlalu mengganggu hewan malam.\n(10) Menempatkan penerangan yang benar tidak sekadar memasang lampu bercahaya terang, tetapi harus memperhatikan efisiensi energi dan efek cahaya. (11) Penerangan yang tepat sangat diperlukan demi efek yang optimal bagi seluruh ekosistem.",
            question:
              "Sebuah kalimat yang efektif dapat memberikan informasi yang jelas kepada pembaca. Pada kalimat (8) dari bacaan di atas, informasi apa yang tidak tercantumkan?",
            options: [
              { id: "a", text: "Jumlah lampu yang dipasang" },
              { id: "b", text: "Tujuan penempatan lampu" },
              { id: "c", text: "Orang yang menempatkan lampu" },
              { id: "d", text: "Lokasi lampu ditempatkan" },
              { id: "e", text: "Jenis warna yang dipancarkan lampu" },
            ],
            correctAnswer: "c",
            explanation:
              'Kalimat (8) berbunyi "...menempatkan sekitar 200 lampu di seluruh negeri...". Kalimat ini kehilangan unsur Subjek. Kata kerja aktif "menempatkan" seharusnya didahului oleh pelaku yang melakukan tindakan tersebut (misalnya: "peneliti menempatkan..."). Karena ketiadaan subjek, informasi mengenai \'Orang yang menempatkan lampu\' menjadi tidak ada.',
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "(1) Perkembangan dunia Ilmu Pengetahuan dan Teknologi (IPTEK) kini makin mengagumkan.\n(2) Perkembangan tersebut telah membawa manfaat yang luar biasa bagi kemajuan peradaban umat manusia.\n(3) Jenis-jenis pekerjaan yang sebelumnya menuntut kemampuan fisik yang cukup besar kini relatif sudah bisa digantikan oleh perangkat mesin-mesin otomatis.\n(4) Seolah sudah mampu menggeser posisi kemampuan otak manusia dalam berbagai bidang ilmu dan aktivitas manusia.\n(5) Kemajuan teknologi saat ini benar-benar telah diakui dan dirasa mampu memberikan banyak kemudahan serta kenyamanan bagi kehidupan umat manusia.\n(6) [...], manusia tidak bisa menipu diri sendiri akan kenyataan bahwa kemajuan teknologi yang sering diagung-agungkan itu juga bisa mendatangkan malapetaka dan kesengsaraan bagi manusia modern.\n(7) Kemajuan teknologi yang semula diciptakan untuk memudahkan manusia ketika urusan itu makin mudah justru memunculkan kesepian dan keterasingan baru, yakni lunturnya rasa solidaritas, kebersamaan, dan silaturahmi.\n(8) Sebagai contoh, penemuan smartphone telah mengakibatkan sebagian besar masyarakat terlena dengan dunia maya.\n(9) Karena hampir segala hal bisa dilakukan lewat smartphone, tak sedikit orang yang akhirnya lebih banyak menghabiskan waktu dengan smartphone daripada dengan orang-orang di lingkungan sekitarnya.",
            question:
              "Perbaikan yang tepat untuk kalimat (7) agar menjadi kalimat yang efektif adalah ....",
            options: [
              { id: "a", text: "Menghilangkan kata yang" },
              { id: "b", text: "Menghilangkan kata lunturnya" },
              {
                id: "c",
                text: "Menambahkan tanda koma (,) setelah kata teknologi",
              },
              {
                id: "d",
                text: "Mengubah penulisan kata silaturahmi menjadi kata silaturahim",
              },
              {
                id: "e",
                text: "Menambahkan tanda koma (,) sebelum kata ketika dan setelah kata mudah",
              },
            ],
            correctAnswer: "e",
            explanation:
              'Dalam kalimat (7), frasa "ketika urusan itu makin mudah" adalah klausa keterangan yang menyela/menyisip di antara subjek dan predikat induk kalimat. Agar struktur dan makna kalimat tidak rancu, klausa penyela tersebut harus diapit oleh tanda koma ganda.',
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "(1) Para peneliti dari Universitas Birmingham, Inggris, menyatakan bahwa kemampuan fisik seseorang dalam berolahraga ditentukan oleh jam biologis tubuh.\n(2) Beberapa aspek kemampuan olahraga dianggap mencapai puncak pada sore hari.\n(3) Akan tetapi, studi yang diterbitkan jurnal Current Biology menunjukkan bahwa kebiasaan tidur memiliki dampak kuat terhadap performa atlet.\n(4) Dalam studi ini meminta 20 pemain hoki perempuan untuk berlari 20 meter di enam periode waktu berbeda antara 07:00 hingga 22:00.\n(5) Hasilnya menunjukkan bahwa puncak performa setiap orang berbeda-beda yang bergantung pada waktu tidur mereka.\n(6) Atlet yang bangun pagi mendapatkan puncak performa pada saat jam makan siang, sedangkan atlet yang tidur larut (bangun siang) mencapai puncak performa pada saat petang.",
            question: "Kalimat yang tidak efektif terdapat pada kalimat...",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(4)" },
              { id: "d", text: "(5)" },
              { id: "e", text: "(6)" },
            ],
            correctAnswer: "c",
            explanation:
              'Kalimat (4) tidak efektif karena tidak memiliki subjek. Penggunaan preposisi "Dalam" di awal kalimat membuat frasa "Dalam studi ini" berfungsi sebagai Keterangan. Diikuti langsung oleh kata kerja aktif transitif "meminta" menyebabkan kalimat tersebut rumpang. Seharusnya preposisi "Dalam" dihilangkan, atau kata "meminta" diubah menjadi pasif "diminta".',
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Stroke atau Cerebrovascular Accident (CVA) adalah kehilangan fungsi otak yang diakibatkan oleh berhentinya suplai darah ke bagian otak secara mendadak (dalam beberapa detik) atau secara cepat (dalam beberapa jam). Kemudian, pada otak timbul gejala dan tanda sesuai dengan daerah yang terganggu sehingga dapat mengakibatkan kematian dan penyebab utama kecacatan. Stroke merupakan salah satu penyakit yang dapat mengakibatkan kematian dan penyebab utama kecacatan tidak hanya pada penderita di usia tua, tetapi juga di usia muda.\nDalam pola kematian penderita rawat inap, stroke menduduki urutan pertama. Sedangkan dari seluruh penyebab kematian, stroke menduduki urutan ketiga terbesar setelah penyakit jantung dan kanker. Stroke dapat terjadi karena seseorang yang sehat memiliki faktor risiko stroke. Terdapat faktor risiko stroke yang dapat dikendalikan dan faktor risiko stroke tidak dapat dikendalikan. Pemahaman akan faktor risiko stroke yang dapat dikendalikan ini penting untuk menurunkan risiko seseorang terkena stroke.",
            question:
              "Dari paragraf bacaan di atas, manakah yang bukan merupakan kalimat efektif?",
            options: [
              { id: "a", text: "Kalimat pertama" },
              { id: "b", text: "Kalimat kedua" },
              { id: "c", text: "Kalimat ketiga" },
              { id: "d", text: "Kalimat keempat" },
              { id: "e", text: "Kalimat kelima" },
            ],
            correctAnswer: "b",
            explanation:
              'Kalimat kedua ("Kemudian, pada otak timbul gejala dan tanda sesuai dengan daerah yang terganggu sehingga dapat mengakibatkan kematian dan penyebab utama kecacatan.") melanggar prinsip keparalelan kalimat efektif. Kata "kematian" tidak sejajar dengan "penyebab utama kecacatan". Seharusnya diperbaiki menjadi "...mengakibatkan kematian dan kecacatan."',
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              '(1) Untuk mengatasi kemacetan di kawasan Jatinangor, mungkinkah jalur transportasi kereta api Bandung - Rancaekek - Tanjungsari dibangun kembali sebagai moda angkutan massal yang efektif? (2) Wacana pembangunan kembali jalur kereta api yang menghubungkan kota Bandung dengan daerah sekitarnya memang pernah mencuat. (3) Antara lain, pembangunan kembali KA Bandung - Ciwidey (Bandung selatan) dan Bandung - Rancaekek-Tanjungsari (Bandung timur). (4) Jalur KA Bandung - Tanjungsari sudah lama. (5) Kabarnya, jalur KA tersebut dirusak serdadu Jepang pada masa pendudukan serdadu negara "Matahari Terbit".',
            question:
              "Dalam kalimat itu, terdapat kalimat yang efektif, kecuali pada kalimat…",
            options: [
              { id: "a", text: "Kalimat 1" },
              { id: "b", text: "Kalimat 2" },
              { id: "c", text: "Kalimat 3" },
              { id: "d", text: "Kalimat 4" },
              { id: "e", text: "Kalimat 5" },
            ],
            correctAnswer: "d",
            explanation:
              'Kalimat (4) berbunyi "Jalur KA Bandung - Tanjungsari sudah lama." Kalimat ini tidak lengkap maknanya dan memicu ambiguitas (bermakna ganda). Kata "lama" membutuhkan keterangan tambahan, misalnya "sudah lama dibangun", "sudah lama tidak beroperasi", atau "sudah lama rusak".',
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "(1) Globalisasi menjadi tantangan untuk semua aspek kehidupan termasuk kebudayaan. (2) Era global menuntut kesiapan kita untuk siap berubah menyesuaikan perubahan zaman dan mampu mengambil setiap kesempatan. (3) Budaya tradisional di Indonesia sebenarnya lebih kreatif dan tidak bersifat meniru, namun yang menjadi masalah adalah bagaimana mempertahankan jati diri bangsa. (4) Sebagai contoh sederhana, budaya gotong royong di Indonesia saat ini hampir terkikis habis, yang digantikan oleh sikap individual dan tidak peduli kepada orang lain. (5) Perlu dipikirkan agar kebudayaan kita tetap dapat mencerminkan kepribadian bangsa.\n(6) Dalam era globalisasi, kebudayaan tradisional mulai mengalami erosi. (7) Semua orang, terutama anak muda, lebih senang menghabiskan waktunya mengakses internet daripada mempelajari tarian dari kebudayaan sendiri. (8) Orang akan merasa bangga ketika dapat meniru gaya berpakaian orang Barat dan menganggap budayanya ketinggalan zaman. (9) Globalisasi akan selalu memberikan perubahan. (10) Oleh karena itu, harus meneliti apakah berbagai budaya yang masuk tersebut bersifat positif atau negatif.",
            question:
              "Kalimat yang tidak efektif dalam teks di atas adalah kalimat ….",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(5)" },
              { id: "d", text: "(8)" },
              { id: "e", text: "(10)" },
            ],
            correctAnswer: "d",
            explanation:
              'Kalimat (8) berbunyi "...dan menganggap budayanya ketinggalan zaman." Kata ganti -nya pada kata "budayanya" tidak memiliki rujukan yang jelas. Apakah merujuk pada budaya si orang tersebut (budaya sendiri) atau merujuk pada budaya orang Barat? Ketidakjelasan rujukan ini membuat kalimat menjadi ambigu dan tidak efektif.',
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "(1) Bahwa banyak laki-laki kerap melakukan sesuatu yang gila atau tidak masuk akal bukanlah rahasia lagi. (2) Daripada perempuan, laki-laki juga diklaim lebih berani dalam bertindak gila. (3) Oleh karena itu, tak hanya kalangan awam, para ilmuwan juga mulai membahas dan mencari tahu alasan di balik hal itu.",
            question:
              "Agar menjadi logis, kalimat (1) harus diperbaiki dengan cara…..",
            options: [
              { id: "a", text: "Menghilangkan kata banyak" },
              { id: "b", text: "Menghilangkan kata bahwa" },
              {
                id: "c",
                text: "Mengganti kata kerap dengan sering",
              },
              {
                id: "d",
                text: "Meletakkan klausa anak di belakang klausa induk",
              },
              {
                id: "e",
                text: "Tidak ada yang perlu diperbaiki",
              },
            ],
            correctAnswer: "b",
            explanation:
              'Penggunaan konjungsi subordinatif "Bahwa" di awal kalimat membuat seluruh bagian awal kalimat tersebut berfungsi sebagai anak kalimat. Akibatnya, kalimat tersebut tidak memiliki induk kalimat (kehilangan subjek utama). Menghilangkan kata "bahwa" akan mengembalikan "banyak laki-laki..." menjadi subjek yang jelas.',
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "(1). Pemberian penghargaan dapat menstimulasi semangat berkarya pemuda.\n(2). Kurangnya apresiasi dapat mengakibatkan malasnya pemuda dalam berkarya.\n(3). Aris menabung dengan tujuan ingin membeli mobil baru.\n(4). Bu Ina menyeduhkan teh hangat yang sangat manis sekali ke dalam cangkir kami",
            question: "Kalimat tidak efektif ditunjukkan pada nomor…",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(3)" },
              { id: "d", text: "(4)" },
              {
                id: "e",
                text: "Tidak ada kalimat tidak efektif",
              },
            ],
            correctAnswer: "d",
            explanation:
              'Kalimat (4) mengandung pleonasme atau pemborosan kata yang maknanya bersinonim, yaitu pada frasa "sangat manis sekali". Kata "sangat" dan "sekali" sama-sama berfungsi untuk menyatakan intensitas tinggi. Penggunaan yang benar adalah "sangat manis" atau "manis sekali".',
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Pada artikel ini akan membahas tentang fenomena penyalah gunaan dalam tes psikologi, serta mengeksplorasi konsekuensinya bagi individu maupun masyarakat.",
            question:
              "Kutipan di atas dapat diperbaiki dengan cara-cara berikut, kecuali…",
            options: [
              {
                id: "a",
                text: "Menghilangkan kata pada di awal kalimat.",
              },
              {
                id: "b",
                text: "Menghilangkan kata tentang.",
              },
              {
                id: "c",
                text: "Mengganti kata maupun dengan dan.",
              },
              {
                id: "d",
                text: "Menulis kata penyalah gunaan dengan penyalahgunaan.",
              },
              {
                id: "e",
                text: "Mengganti kata psikologi dengan psikolog.",
              },
            ],
            correctAnswer: "e",
            explanation:
              'Pilihan A, B, C, dan D adalah bentuk perbaikan kaidah tata bahasa yang tepat. Namun, pilihan E ("Mengganti kata psikologi dengan psikolog") adalah salah karena merujuk pada perubahan makna kalimat. Teks tersebut membahas penyalahgunaan instrumennya (tes psikologi), bukan profesinya (psikolog).',
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "(1). Pemberian penghargaan dapat menstimulasi semangat berkarya pemuda.\n(2). Kurangnya apresiasi dapat mengakibatkan malasnya pemuda dalam berkarya.\n(3). Aris menabung dengan tujuan ingin membeli mobil baru.\n(4). Bu Ina menyeduhkan teh hangat yang sangat manis sekali ke dalam cangkir kami.",
            question: "Kalimat tidak efektif ditunjukkan pada kalimat nomor …",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(3)" },
              { id: "d", text: "(4)" },
              { id: "e", text: "Semua kalimat efektif" },
            ],
            correctAnswer: "d",
            explanation:
              'Sama dengan penjelasan soal sebelumnya, frasa "sangat manis sekali" pada kalimat (4) merupakan bentuk pleonasme (pemborosan kata).',
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "(1) Nuning, tim peneliti ITB, menjelaskan penelitian tersebut dilatarbelakangi kasus Covid-19 di Indonesia yang menjadi bagian pandemi global. (2) Kondisi ini melahirkan riuh rendah serta kontroversi, apakah tindakan yang diambil cukup untuk menangkal penyebaran atau berlebihan. (3) Kesimpangsiuran informasi tentang hal ini dikhawatirkan mengganggu usaha nyata untuk menanggulangi bencana yang sebenarnya.",
            question:
              "Perbaikan yang tepat untuk kalimat (2) agar menjadi kalimat efektif adalah…",
            options: [
              {
                id: "a",
                text: "Kondisi ini melahirkan riuh rendah serta kontroversi apakah tindakan yang diambil cukup untuk menangkal penyebaran atau berlebihan.",
              },
              {
                id: "b",
                text: "Kondisi ini melahirkan riuh rendah serta kontroversi, tindakan yang diambil cukup untuk menangkal penyebaran atau berlebihan",
              },
              {
                id: "c",
                text: "Kondisi ini melahirkan riuh rendah serta kontroversi, yaitu tindakan yang diambil cukup untuk menangkal penyebaran atau berlebihan.",
              },
              {
                id: "d",
                text: "Kondisi ini melahirkan riuh rendah, kontroversi, dan tindakan yang diambil cukup untuk menangkal penyebaran atau berlebihan.",
              },
              {
                id: "e",
                text: "Kondisi ini melahirkan riuh rendah dan serta kontroversi, yaitu tindakan yang diambil cukup untuk menangkal penyebaran atau berlebihan.",
              },
            ],
            correctAnswer: "c",
            explanation:
              'Penggunaan kata tanya "apakah" di tengah kalimat (2) menyebabkan kebingungan karena bagian setelah koma bukan merupakan kalimat tanya langsung, melainkan klausa penjelas/rincian dari kata "kontroversi". Mengganti kata "apakah" dengan konjungsi penjelas "yaitu" akan membuat kalimat menjadi logis dan efektif.',
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kalimat Efektif";
      moduleDoc.description =
        "Materi mengenai kalimat efektif mencakup pengertian kalimat efektif, syarat-syarat kalimat efektif (kesepadanan, kehematan, kecermatan, kepaduan, keparalelan, kelogisan, ketegasan), serta kesalahan umum dalam kalimat.";
      moduleDoc.subcategory = "Pemahaman Bacaan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kalimat Efektif",
        description:
          "Materi mengenai kalimat efektif mencakup pengertian kalimat efektif, syarat-syarat kalimat efektif (kesepadanan, kehematan, kecermatan, kepaduan, keparalelan, kelogisan, ketegasan), serta kesalahan umum dalam kalimat.",
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

seedKalimatEfektifPBM();
