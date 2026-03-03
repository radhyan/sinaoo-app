const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedEvaluasiSebabAkibat = async () => {
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

    const targetId = "evaluasi-sebab-akibat-paragraf";

    const stepsData = [
      {
        title: "Materi: Evaluasi Sebab-Akibat Paragraf",
        type: "reading",
        status: "active",
        description:
          "Pahami pengertian paragraf sebab-akibat, jenis-jenis, ciri-ciri, serta cara mengevaluasi hubungan sebab-akibat dalam paragraf.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Itu Paragraf Sebab-Akibat?</h3>
              <p class="text-body-l text-Grayscale-900 mb-6">
                Paragraf sebab-akibat merupakan suatu pola pengembangan paragraf yang kalimat topiknya dikembangkan oleh kalimat-kalimat sebab atau akibat. Paragraf sebab-akibat <span class="font-bold">diawali dengan fakta khusus</span> yang menjadi sebab kemudian <span class="font-bold">diakhiri dengan fakta umum</span> yang menjadi akibat dari penyebab tersebut.
              </p>

              <div class="bg-Primary-50 rounded-xl p-6 border-l-4 border-Primary-500 mb-6 border border-Primary-200">
                <p class="font-bold text-body-l text-Primary-700 mb-2">Ingat!</p>
                <p class="text-body-l text-Grayscale-900 m-0">
                  Sebab akibat diawali dengan menyampaikan <span class="font-bold">sebab</span> dan diakhiri dengan <span class="font-bold">akibat</span> dari sebab tersebut.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-3">Sebab</h4>
                  <p class="text-body-l text-Grayscale-900 m-0">Alasan atau faktor yang memicu terjadinya suatu peristiwa.</p>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-3">Akibat</h4>
                  <p class="text-body-l text-Grayscale-900 m-0">Dampak atau hasil dari peristiwa tersebut.</p>
                </div>
              </div>

              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="font-bold text-body-l text-Primary-700 mb-3">Contoh:</p>
                <p class="text-body-l text-Grayscale-900 m-0">
                  <span class="font-bold text-Error-100">Hujan deras</span> menyebabkan <span class="font-bold text-blue-600">jalanan menjadi banjir</span>.
                </p>
                <div class="flex gap-6 mt-3 text-body-lg">
                  <div class="flex items-center gap-2"><span class="inline-block w-4 h-4 bg-Error-50 rounded"></span> Sebab</div>
                  <div class="flex items-center gap-2"><span class="inline-block w-4 h-4 bg-blue-600 rounded"></span> Akibat</div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Sebab-Akibat</h3>
              <div class="space-y-4 mb-8">
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="font-bold text-body-l text-Primary-700 mb-2">Sebab - Akibat</h4>
                  <p class="text-body-l text-Grayscale-900 m-0">Diawali dengan kalimat khusus yang menjadi penyebab dan diakhiri dengan kalimat umum sebagai akibat.</p>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="font-bold text-body-l text-Primary-700 mb-2">Akibat - Sebab</h4>
                  <p class="text-body-l text-Grayscale-900 m-0">Diawali dengan kalimat khusus yang menjadi akibat dan diakhiri dengan kalimat umum yang menjadi penyebab atau sebab.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Ciri-ciri Sebab-Akibat</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200 mb-8">
                <ol class="list-decimal pl-5 space-y-3 text-body-l text-Grayscale-900">
                  <li>Menggunakan kata hubung seperti: <span class="font-bold">karena, sebab, akibatnya, oleh karena itu, sehingga</span>.</li>
                  <li>Terdapat <span class="font-bold">hubungan logis</span> antara dua hal.</li>
                  <li>Akibat selalu muncul <span class="font-bold">karena adanya sebab tertentu</span>.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Evaluasi Sebab-Akibat</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <ol class="list-decimal pl-5 space-y-5 text-body-l text-Grayscale-900">
                  <li><span class="font-bold">Identifikasi</span> kalimat sebab dan akibat.</li>
                  <li>
                    <span class="font-bold">Analisis logika hubungan keduanya:</span>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-body-m text-Grayscale-800">
                      <li>Apakah sebab sesuai dengan akibat?</li>
                      <li>Apakah hubungan tersebut masuk akal?</li>
                    </ul>
                  </li>
                  <li><span class="font-bold">Tentukan kelogisan</span> isi paragraf.</li>
                </ol>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Evaluasi Sebab-Akibat Paragraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/uOVN2w1aH0A",
        description:
          "Tonton video berikut untuk memahami konsep evaluasi sebab-akibat paragraf.",
      },
      {
        title: "Video: Latihan Soal Sebab-Akibat",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/mxNBI8jqbdI",
        description:
          "Video latihan dan pembahasan soal mengenai evaluasi sebab-akibat paragraf.",
      },
      {
        title: "Kuis Evaluasi Sebab-Akibat Paragraf",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Untuk mempelajari evolusi orang harus digunakan embriologi perbandingan\nSEBAB\nPerkembangan embrio adalah cermin singkat dari kejadian evolusi",
            question:
              "Tentukan hubungan antara pernyataan dan alasan tersebut.",
            options: [
              {
                id: "a",
                text: "Apabila pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
              },
              {
                id: "b",
                text: "Apabila pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
              },
              {
                id: "c",
                text: "Apabila pernyataan benar dan alasan salah",
              },
              {
                id: "d",
                text: "Apabila pernyataan salah dan alasan benar",
              },
              {
                id: "e",
                text: "Apabila pernyataan dan alasan keduanya salah",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan benar: embriologi perbandingan memang digunakan untuk mempelajari evolusi. Alasan benar: perkembangan embrio memang mencerminkan tahapan evolusi (teori rekapitulasi). Keduanya memiliki hubungan sebab-akibat karena alasan (embrio sebagai cermin evolusi) menjadi penyebab mengapa embriologi perbandingan digunakan untuk mempelajari evolusi.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Untuk menanggulangi masalah ledakan penduduk, solusi yang dapat dilakukan adalah menciptakan lapangan kerja baru.\nSEBAB\nLatihan kerja bagi generasi muda bertujuan agar mereka dapat mandiri",
            question:
              "Tentukan hubungan antara pernyataan dan alasan tersebut.",
            options: [
              {
                id: "a",
                text: "Apabila pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat",
              },
              {
                id: "b",
                text: "Apabila pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat",
              },
              {
                id: "c",
                text: "Apabila pernyataan benar dan alasan salah",
              },
              {
                id: "d",
                text: "Apabila pernyataan salah dan alasan benar",
              },
              {
                id: "e",
                text: "Apabila pernyataan dan alasan keduanya salah",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pernyataan benar: menciptakan lapangan kerja baru memang salah satu solusi untuk menanggulangi masalah ledakan penduduk. Alasan benar: latihan kerja bagi generasi muda memang bertujuan agar mereka mandiri. Namun, keduanya tidak memiliki hubungan sebab-akibat karena alasan (tujuan latihan kerja) tidak menjadi sebab langsung dari pernyataan (menciptakan lapangan kerja untuk menanggulangi ledakan penduduk). Keduanya membahas topik yang berbeda meskipun masih dalam konteks ketenagakerjaan.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Dewasa ini masalah kesehatan sudah berubah menjadi barang mahal. Biaya perawatan luar biasa, harga obat melambung, ongkos pemeriksaan naik. Hal ini menjadi beban bagi masyarakat, khususnya di lapisan menengah ke bawah. Tekanan masalah akibat krisis ekonomi sudah merupakan satu penyebab meningkatnya penyakit gangguan mental. Keadaan ini hampir melanda dunia, lebih-lebih di negara-negara yang sedang berkembang seperti di Indonesia.",
            question: "Jenis hubungan paragraf di atas adalah ...",
            options: [
              { id: "a", text: "Khusus - umum" },
              { id: "b", text: "Umum - khusus" },
              { id: "c", text: "Akibat - sebab" },
              { id: "d", text: "Sebab - akibat" },
              { id: "e", text: "Generalisasi" },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf tersebut dimulai dengan menyebutkan sebab-sebab terlebih dahulu: biaya perawatan mahal, harga obat melambung, ongkos pemeriksaan naik, dan tekanan krisis ekonomi. Kemudian diakhiri dengan akibat: meningkatnya penyakit gangguan mental yang melanda dunia. Pola ini menunjukkan hubungan paragraf sebab-akibat karena sebab disebutkan di awal dan akibat di akhir paragraf.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Setiap hari warga Jakarta membuang sampah satu kantong plastik. Setelah sampai ke TPA bisa menjadi gunungan sampah. Dalam sehari saja, Jakarta menghasilkan 6.000 ton sampah. Jika hal itu dibiarkan, seribu satu persoalan siap membelit. Mulai dari bau sampah hingga masalah kesehatan.",
            question:
              "Kalimat berupa akibat yang tepat untuk melengkapi paragraf tersebut adalah ...",
            options: [
              {
                id: "a",
                text: "Jadi, Jakarta penuh dengan sampah yang menimbulkan bau tidak sedap.",
              },
              {
                id: "b",
                text: "Banyak warga di sekitar TPA yang terkena penyakit.",
              },
              {
                id: "c",
                text: "Sampah-sampah di lingkungan Jakarta perlu dimusnahkan.",
              },
              {
                id: "d",
                text: "Warga Jakarta dilarang membuang sampah sembarangan.",
              },
              {
                id: "e",
                text: "Oleh karena itu, untuk mengatasi hal tersebut perlu dicarikan solusi",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat A 'Jadi, Jakarta penuh dengan sampah yang menimbulkan bau tidak sedap' merupakan kalimat akibat yang paling tepat karena: menggunakan kata hubung 'Jadi' yang menandakan simpulan/akibat, dan isinya merupakan dampak langsung dari sebab yang disebutkan (membuang sampah, gunungan sampah, 6.000 ton per hari). Pilihan B terlalu spesifik. Pilihan C dan D merupakan saran, bukan akibat. Pilihan E terlalu umum dan tidak menyebutkan akibat spesifik.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Akhir-akhir ini banyak orang yang menangkap ikan air tawar di sungai dengan cara yang sangat membahayakan kelangsungan hidup ikan air tawar. Semula orang menangkap ikan di sungai dengan cara memancing, tetapi karena dirasa kurang efektif, mereka beralih ke jaring. Cara ini lebih efektif daripada memancing. Akan tetapi, penangkap ikan tidak puas dengan cara itu. Mereka ingin menangkap ikan dengan cara yang lebih mudah, cepat, dan tidak terlampau menguras tenaga fisik. Maka mereka kemudian menggunakan alat penyetrum dengan kekuatan baterai (listrik), bahkan banyak di antaranya yang menangkap ikan dengan cara meracuni air sungai. . . . .",
            question:
              "Kalimat yang tepat untuk melengkapi paragraf sebab-akibat tersebut adalah . . .",
            options: [
              {
                id: "a",
                text: "Akibatnya, ikan kecil kehilangan induknya.",
              },
              {
                id: "b",
                text: "Maka ikan besar selamat sedangkan ikan kecil mati keracunan.",
              },
              {
                id: "c",
                text: "Akibatnya, ikan besar maupun kecil mati keracunan sehingga populasi ikan air tawar terancam punah.",
              },
              {
                id: "d",
                text: "Hal ini menunjukkan bahwa cara berpikir penangkap ikan semakin maju.",
              },
              {
                id: "e",
                text: "Oleh karena itu, marilah kita ciptakan alat penangkap ikan yang efektif dan aman.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat C merupakan akibat yang paling tepat dan logis karena: menggunakan kata hubung 'Akibatnya' yang menandakan akibat; menyebutkan dampak langsung dari penggunaan racun (ikan besar maupun kecil mati keracunan); dan memberikan akibat lanjutan yang relevan (populasi ikan terancam punah). Pilihan A kurang lengkap. Pilihan B tidak logis (racun membunuh semua ikan). Pilihan D bukan akibat melainkan opini. Pilihan E merupakan ajakan/saran.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Membuang sampah sembarangan akan menimbulkan kerugian yang sangat besar bagi lingkungan. Tindakan itu antara lain memampatkan selokan dan merusak aspal jalan. Selokan yang mampat dan aspal yang rusak menjadi sumber kerusakan lingkungan.......",
            question:
              "Kalimat akibat yang tepat untuk melengkapi paragraf tersebut adalah ...",
            options: [
              {
                id: "a",
                text: "Kerusakan lingkungan dapat berskala kecil maupun besar.",
              },
              {
                id: "b",
                text: "Kualitas hidup warga sangat tergantung pada perbaikan kerusakan.",
              },
              {
                id: "c",
                text: "Warga masyarakat diminta peduli terhadap kerusakan lingkungan.",
              },
              {
                id: "d",
                text: "Perangkat desa harus bertanggung jawab terhadap kerusakan lingkungan.",
              },
              {
                id: "e",
                text: "Berbagai penyakit akan mengancam kehidupan warga.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat E merupakan akibat yang paling tepat karena menyebutkan dampak konkret dari kerusakan lingkungan (selokan mampat + aspal rusak): yaitu berbagai penyakit yang mengancam warga. Ini merupakan hubungan sebab-akibat yang logis — lingkungan yang rusak memicu munculnya penyakit. Pilihan A terlalu umum. Pilihan B, C, dan D bukan merupakan akibat langsung, melainkan pernyataan umum, ajakan, atau saran.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Yanti seorang anak yang rajin dan tekun. Ia rajin mengikuti pelajaran di sekolah. Setiap diadakan diskusi di sekolah, ia sering diminta tampil sebagai pembicara. Rata-rata empat jam sehari ia belajar sendiri di rumah. Bahkan, ia tidak segan-segan bertanya kepada guru jika ada hal-hal yang belum dimengerti, atau belum jelas\u2026..",
            question:
              "Kalimat yang berupa akibat untuk melengkapi paragraf tersebut adalah\u2026.",
            options: [
              {
                id: "a",
                text: "Karena itu, tidak heran apabila Yanti meraih juara satu di sekolahnya.",
              },
              {
                id: "b",
                text: "Jadi, Yanti mendapat penghargaan yang pantas dari sekolahnya.",
              },
              {
                id: "c",
                text: "Oleh karena itu, Yanti sangat dicintai dan dihormati teman-temannya.",
              },
              {
                id: "d",
                text: "Makanya Yanti bisa diterima di perguruan tinggi ternama di negeri ini.",
              },
              {
                id: "e",
                text: "Sudah sepantasnyalah Yanti mendapat dukungan dari keluarganya.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat A merupakan akibat yang paling logis karena: menggunakan kata hubung 'Karena itu' yang menandakan akibat; akibat yang disebutkan (meraih juara satu) merupakan hasil yang logis dari sebab-sebab yang disebutkan sebelumnya (rajin, tekun, belajar 4 jam sehari, aktif bertanya). Pilihan B kurang spesifik tentang penghargaan apa. Pilihan C tidak berhubungan langsung dengan kegiatan belajar. Pilihan D melompat terlalu jauh. Pilihan E merupakan opini/saran.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Kemarau tahun ini cukup panjang dan sebelumnya pohon-pohon di hutan sebagai penyerap air banyak yang ditebang. Di samping itu, irigasi di desa ini tidak lancar. Ditambah lagi dengan harga pupuk yang semakin mahal dan kurangnya pengetahuan para petani dalam menggarap lahannya. Oleh karena itu, tidak mengherankan jika panen di desa ini selalu gagal.",
            question:
              "Kalimat yang merupakan akibat pada paragraf di atas adalah\u2026.",
            options: [
              {
                id: "a",
                text: "Kemarau tahun ini cukup panjang.",
              },
              {
                id: "b",
                text: "Pohon-pohon di hutan ditebang.",
              },
              {
                id: "c",
                text: "Pengetahuan para petani sangat kurang.",
              },
              {
                id: "d",
                text: "Harga pupuk semakin mahal.",
              },
              {
                id: "e",
                text: "Panen di desa ini selalu gagal.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat 'Panen di desa ini selalu gagal' merupakan akibat karena ditandai dengan konjungsi 'Oleh karena itu' yang menunjukkan simpulan/akibat. Semua kalimat sebelumnya merupakan sebab: kemarau panjang, pohon ditebang, irigasi tidak lancar, harga pupuk mahal, dan kurangnya pengetahuan petani. Pola paragrafnya adalah sebab-akibat: berbagai faktor penyebab (sebab) mengakibatkan gagal panen (akibat).",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Indonesia memiliki kekayaan alam laut yang sangat melimpah. Semua kekayaan laut yang ada di perairan dari sabang sampai merauke dimiliki oleh Indonesia. Selain itu, Indonesia juga banyak terdapat tambang-tambang, seperti minyak bumi, gas, maupun logam-logam yang lain. Bahkan di Irian Jaya terdapat pertambangan emas terbesar di dunia. Meskipun dikelola oleh pihak asing, tetapi tambang itu terletak di Indonesia. Ditambah lagi dengan tanahnya yang subur. Bahkan diabadikan dalam sebuah lirik lagu, yang berbunyi tongkat kayu dan batu jadi tanaman. Hal itu karena tanah Indonesia bisa ditanami oleh apapun tanpa perlu bantuan pupuk untuk menyuburkannya. Oleh karena kekayaan bumi, dan lautnya yang melimpah itulah Indonesia dijuluki sebagai Negeri Atlantis yang hilang.",
            question:
              "Berikut yang termasuk bagian 'sebab' dari paragraf berikut, kecuali..",
            options: [
              {
                id: "a",
                text: "Indonesia memiliki kekayaan alam yang melimpah",
              },
              {
                id: "b",
                text: "Indonesia banyak tambang-tambang",
              },
              {
                id: "c",
                text: "Indonesia dijuluki Negeri Atlantis yang hilang",
              },
              {
                id: "d",
                text: "Indonesia memiliki tanah yang subur",
              },
              {
                id: "e",
                text: "Indonesia memiliki pertambangan emas terbesar di dunia.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat 'Indonesia dijuluki Negeri Atlantis yang hilang' bukan merupakan bagian sebab, melainkan merupakan AKIBAT dari semua sebab yang disebutkan sebelumnya. Ditandai dengan konjungsi 'Oleh karena... itulah'. Semua pilihan lain merupakan sebab: kekayaan alam melimpah (A), banyak tambang (B), tanah subur (D), dan pertambangan emas terbesar (E) — semuanya menjadi alasan mengapa Indonesia dijuluki Negeri Atlantis.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Upaya pengentasan masyarakat dari buta aksara di Desa Air Glubi, Kecamatan Bintan Pesisir, terkendala. Sebenarnya, Pemerintah sudah membangun beberapa sarana pendidikan seperti PAUD dan SD di wilayah ini. Hanya saja, jumlah guru yang mengajar di wilayah ini masih minim. Hal ini ditambah lagi guru di wilayah itu pindah tugas ke daerah lain. Selain itu, program penuntasan buta aksara yang dikhususkan untuk masyarakat hanya berjalan setahun. Upaya pengentasan masyarakat dari buta aksara tersebut terkendala karena masyarakat lebih sering turun ke laut daripada belajar. Akibatnya, \u2026.",
            question:
              "Pernyataan yang tepat untuk melengkapi paragraf sebab akibat di atas adalah \u2026.",
            options: [
              {
                id: "a",
                text: "Masyarakat dapat memenuhi kebutuhan hidupnya dengan mencari ikan di laut",
              },
              {
                id: "b",
                text: "Masyarakat lebih memilih bekerja daripada belajar baca tulis",
              },
              {
                id: "c",
                text: "Pemerintah menyayangkan terkendalanya program pengentasan buta aksara di Desa Air Glubi",
              },
              {
                id: "d",
                text: "Diperlukan tenaga sukarela di Desa Air Glubi",
              },
              {
                id: "e",
                text: "Saat ini lebih dari 50 persen masyarakat di Desa Air Glubi masih buta aksara",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat E merupakan akibat yang paling tepat karena menyebutkan dampak konkret dan terukur dari semua sebab yang disebutkan: guru minim, program hanya setahun, masyarakat lebih sering ke laut. Akibat logisnya adalah lebih dari 50% masyarakat masih buta aksara. Pilihan A mengulang sebab. Pilihan B juga mengulang sebab. Pilihan C dan D merupakan respons/saran, bukan akibat langsung dari masalah yang dijelaskan.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "(1) Ahim dengan tabah merawat ibunya. Ibunya telah tua renta. (2) Untuk berdiri saja ibunya sudah tak sanggup lagi. (3) Ahim harus memandikan, menyuapi, dan mengurus segala keperluan ibunya. (4) Ahim mengurus ibunya seperti mengurus seorang bayi. (5) Ahim terus berdoa kepada Allah agar hatinya diberi kesabaran dan keikhlasan dalam merawat ibunya dengan kasih sayang. (6) Allah merahmati Ahim dan menjadikan ia dan keluarganya orang-orang yang saleh.",
            question:
              "Kalimat yang merupakan akibat dalam paragraf di atas adalah kalimat nomor\u2026.",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(3)" },
              { id: "c", text: "(4)" },
              { id: "d", text: "(5)" },
              { id: "e", text: "(6)" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat (6) 'Allah merahmati Ahim dan menjadikan ia dan keluarganya orang-orang yang saleh' merupakan akibat karena merupakan hasil/dampak dari semua sebab yang disebutkan sebelumnya: Ahim merawat ibunya dengan tabah (1), mengurus segala keperluannya (3-4), dan terus berdoa meminta kesabaran (5). Karena ketulusan dan ketabahannya itulah, akibatnya Allah merahmati Ahim dan keluarganya.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Tentukan kalimat yang menyatakan hubungan sebab akibat",
            options: [
              {
                id: "a",
                text: "Rina memasak di dapur, sedangkan ibu mencuci di belakang rumah.",
              },
              {
                id: "b",
                text: "Karena Bu Dewi seorang guru yang pintar dan berdedikasi tinggi pada sekolah, para siswa dan guru lain menyukainya, sehingga ia terpilih menjadi guru teladan tahun ini.",
              },
              {
                id: "c",
                text: "Kakak dan adik turut menjadi korban di Palestina.",
              },
              {
                id: "d",
                text: "Aisyah ingin melanjutkan sekolahnya apabila memiliki beasiswa dari SMA terdahulunya.",
              },
              {
                id: "e",
                text: "Rafi bermain bola di lapangan bersama temannya",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat B mengandung hubungan sebab-akibat yang jelas: SEBAB — Bu Dewi pintar dan berdedikasi tinggi; AKIBAT 1 — para siswa dan guru menyukainya; AKIBAT 2 — terpilih menjadi guru teladan. Ditandai dengan konjungsi 'Karena' (sebab) dan 'sehingga' (akibat). Pilihan A menggunakan 'sedangkan' (pertentangan). Pilihan C hanya menyatakan fakta. Pilihan D menggunakan 'apabila' (pengandaian). Pilihan E menyatakan aktivitas biasa.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "(1) Ada banyak pasangan yang ingin menikah tetapi tidak memiliki bekal dan mental yang cukup untuk menjalani kehidupan rumah tangga.\n(2) Sebagian besar pernikahan berakhir pada perceraian",
            question: "Tentukan hubungan pernyataan (1) dan (2) ini.",
            options: [
              {
                id: "a",
                text: "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
              },
              {
                id: "b",
                text: "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
              },
              {
                id: "c",
                text: "Pernyataan (1) dan (2) adalah penyebab namun saling berhubungan.",
              },
              {
                id: "d",
                text: "Pernyataan (2) dan (1) adalah akibat dari dua penyebab yang tidak saling berhubungan.",
              },
              {
                id: "e",
                text: "Pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan (1) merupakan penyebab: pasangan yang tidak memiliki bekal dan mental yang cukup. Pernyataan (2) merupakan akibat: pernikahan berakhir pada perceraian. Hubungannya logis: karena tidak memiliki kesiapan (bekal dan mental), maka banyak pernikahan yang berakhir dengan perceraian. Ini merupakan pola sebab-akibat yang jelas.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Bioinsektisida lebih ramah terhadap lingkungan daripada insektisida kimia.\nSEBAB\nBioinsektisida Baculovirus pada saat tertentu dapat menyebabkan kematian serangga secara massal.",
            question:
              "Tentukan hubungan antara pernyataan dan alasan tersebut.",
            options: [
              {
                id: "a",
                text: "Jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab akibat.",
              },
              {
                id: "b",
                text: "Jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab akibat.",
              },
              {
                id: "c",
                text: "Jika pernyataan benar dan alasan salah.",
              },
              {
                id: "d",
                text: "Jika pernyataan salah dan alasan benar.",
              },
              {
                id: "e",
                text: "Jika pernyataan dan alasan salah.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pernyataan benar: bioinsektisida memang lebih ramah lingkungan daripada insektisida kimia karena terbuat dari bahan alami. Alasan benar: Baculovirus memang dapat menyebabkan kematian serangga secara massal pada saat tertentu. Namun keduanya tidak memiliki hubungan sebab-akibat karena kemampuan membunuh serangga secara massal bukan menjadi alasan mengapa bioinsektisida lebih ramah lingkungan. Keramahan lingkungan ditentukan oleh bahan dan dampak jangka panjangnya, bukan efektivitas membunuh serangga.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "(1) Wabah demam berdarah meningkat setiap musim penghujan\n(2) Angka penjualan jas hujan meningkat selama musim penghujan",
            question: "Tentukan hubungan pernyataan (1) dan (2) ini.",
            options: [
              {
                id: "a",
                text: "Pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "Pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "Pernyataan 1 dan 2 adalah penyebab namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "Pernyataan 1 dan 2 adalah akibat dari dua penyebab yang tidak saling berhubungan",
              },
              {
                id: "e",
                text: "Pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kedua pernyataan tersebut merupakan akibat dari penyebab yang sama, yaitu musim penghujan. Musim penghujan menyebabkan: (1) genangan air yang menjadi sarang nyamuk sehingga wabah demam berdarah meningkat, dan (2) banyak orang membutuhkan jas hujan sehingga angka penjualannya meningkat. Meskipun keduanya terjadi di musim penghujan, pernyataan (1) bukan penyebab dari (2) dan sebaliknya — keduanya merupakan akibat paralel dari faktor yang sama.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Evaluasi Sebab-Akibat Paragraf";
      moduleDoc.description =
        "Pelajari cara mengevaluasi hubungan sebab-akibat dalam paragraf, termasuk jenis, ciri-ciri, dan analisis logika hubungan sebab-akibat.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Evaluasi Sebab-Akibat Paragraf",
        description:
          "Pelajari cara mengevaluasi hubungan sebab-akibat dalam paragraf, termasuk jenis, ciri-ciri, dan analisis logika hubungan sebab-akibat.",
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

seedEvaluasiSebabAkibat();
