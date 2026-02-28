const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedAnalisisBacaanKepaduanParagraf = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. Find Course
    const courseName = "Pengetahuan dan Pemahaman Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    // 2. Define the Module Data
    const targetId = "analisis-bacaan-kepaduan-paragraf";

    const stepsData = [
      {
        title: "Materi: Analisis Bacaan & Kepaduan Paragraf",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang kepaduan paragraf, jenis-jenis kohesi dan koherensi, serta cara menganalisis bacaan.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Definisi Kepaduan Paragraf -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Kepaduan Paragraf?</h3>
              <p class="text-body-l leading-relaxed text-justify">
                Kepaduan paragraf adalah kekompakkan hubungan antara sebuah kalimat dengan kalimat lain yang membentuk paragraf tersebut. Paragraf yang padu membuat setiap kalimat memiliki hubungan dan <strong>tidak bisa dipisahkan satu sama lain</strong>.
              </p>
              <div class="mt-4 p-6 bg-Primary-50 rounded-lg border border-Primary-100">
                <h4 class="text-h5 font-bold text-Primary-800 mb-1 mt-0">Pentingnya Kepaduan Paragraf:</h4>
                <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700">
                  <li>Paragraf nyaman dibaca</li>
                  <li>Paragraf memiliki makna</li>
                  <li>Isi paragraf logis dan mudah dipahami</li>
                  <li>Isi paragraf fokus pada gagasan utama</li>
                  <li>Isi paragraf menyajikan informasi yang lengkap</li>
                </ul>
              </div>
            </section>

            <!-- Jenis Kepaduan Paragraf -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Kepaduan Paragraf</h3>

              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="bg-Primary-50 rounded-lg p-6 border border-Primary-100">
                  <h4 class="text-h4 font-bold text-Primary-800 mt-0 mb-2">1. Kohesi</h4>
                  <p class="text-body-l text-Grayscale-700 mb-0">Hubungan paragraf yang padu secara <strong>maknanya</strong>.</p>
                </div>
                <div class="bg-Secondary-50 rounded-lg p-6 border border-Secondary-100">
                  <h4 class="text-h4 font-bold text-Secondary-800 mt-0 mb-2">2. Koherensi</h4>
                  <p class="text-body-l text-Grayscale-700 mb-0">Hubungan paragraf yang padu secara <strong>bentuknya</strong>.</p>
                </div>
              </div>
            </section>

            <!-- KOHESI -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kohesi</h3>

              <!-- Kohesi Gramatikal -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Kohesi Gramatikal</h4>
                </div>
                <div class="p-6 space-y-5">
                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">1. Referensi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Pengacuan terhadap kata atau frasa yang sudah disebutkan sebelumnya.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Bapak dan ibu kelaparan. <strong>Mereka</strong> belum makan.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">2. Substitusi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Penggantian kata atau kelompok kata dengan kata lain yang memiliki makna sama.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Mereka bekerja keras. Kami <strong>pun</strong>.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">3. Elipsis</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Pelesapan atau penghilangan kata yang sudah disebutkan sebelumnya.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Danu sakit sehingga <strong>(ia)</strong> tidak masuk sekolah.</p>
                    </div>
                  </div>

                  <div>
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">4. Konjungsi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Kata penghubung yang menghubungkan antarkalimat atau antarparagraf.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Kakak dan adik kelaparan, <strong>tetapi</strong> mereka tidak mau makan.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Kohesi Leksikal -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Kohesi Leksikal</h4>
                </div>
                <div class="p-6 space-y-5">
                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Secondary-800 mt-0 mb-2">1. Sinonimi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Penggunaan kata yang memiliki makna sama atau mirip.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Berita <strong>surat kabar</strong> sekarang penuh dengan pertentangan elite politik.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Secondary-800 mt-0 mb-2">2. Antonimi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Penggunaan kata yang berlawanan makna.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Buku Danu berukuran <strong>kecil</strong> sedangkan buku Adi berukuran <strong>besar</strong>.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Secondary-800 mt-0 mb-2">3. Hiponimi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Hubungan kata khusus terhadap kata umum (bagian dari kelompok yang lebih besar).</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Umumnya <strong>minuman kekinian</strong> seperti boba, thai tea, es kopi, soda, bubble tea dan sejenisnya, mengandung kadar gula yang tinggi.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Secondary-800 mt-0 mb-2">4. Meronimi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Hubungan kata yang merupakan bagian dari keseluruhan.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Rumah kosong yang menjadi lokasi film horor itu tampak menyeramkan. <strong>Catnya</strong> kusam. <strong>Lampunya</strong> redup dan kadang berkedip.</p>
                    </div>
                  </div>

                  <div>
                    <h5 class="text-h5 font-bold text-Secondary-800 mt-0 mb-2">5. Repetisi</h5>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Pengulangan kata untuk memberikan penekanan.</p>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Dalam kehidupan demokrasi, rakyat harus <strong>berani</strong>. <strong>Berani</strong> menyatakan pendapat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- KOHERENSI -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Koherensi</h3>

              <!-- Koherensi Antarhubungan Aditif -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Koherensi Antarhubungan Aditif</h4>
                </div>
                <div class="p-6 space-y-5">
                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Tertiary-800 mt-0 mb-2">1. Hubungan Penambahan</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Pertama-tama potong tahu menjadi dua bagian. <strong>Selanjutnya</strong> masukkan ke dalam wadah.</p>
                    </div>
                  </div>

                  <div>
                    <h5 class="text-h5 font-bold text-Tertiary-800 mt-0 mb-2">2. Hubungan Kontras</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Ayah membersihkan halaman <strong>sedangkan</strong> ibu memasak di dapur.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Koherensi Antarhubungan Kausal -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Koherensi Antarhubungan Kausal</h4>
                </div>
                <div class="p-6 space-y-5">
                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">1. Hubungan Sebab</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Kakak menangis <strong>sebab</strong> bukunya rusak.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">2. Hubungan Alasan</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Tasya mendapatkan sepedah baru <strong>karena</strong> ia juara kelas.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">3. Hubungan Cara</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Untuk membuat kue bolu yang lembut, kamu harus mengaduk adonan <strong>dengan perlahan dan merata</strong>.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">4. Hubungan Konsekuensi</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Adi sangat malas belajar. <strong>Akibatnya</strong>, nilai ujiannya rendah.</p>
                    </div>
                  </div>

                  <div class="border-b border-Grayscale-100 pb-4">
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">5. Hubungan Tujuan</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Kita harus rajin belajar <strong>untuk</strong> meraih cita-cita di masa depan.</p>
                    </div>
                  </div>

                  <div>
                    <h5 class="text-h5 font-bold text-Primary-800 mt-0 mb-2">6. Hubungan Syarat</h5>
                    <div class="bg-Grayscale-50 p-4 rounded-lg">
                      <p class="text-body-md text-Grayscale-600 mt-0 mb-1 font-semibold">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0 italic">Siswa kelas 5 akan mendapatkan hadiah <strong>jika</strong> tertib saat upacara.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Analisis Bacaan & Kepaduan Paragraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/b4KJMAE-El0",
        description:
          "Video pembelajaran tentang analisis bacaan dan kepaduan paragraf.",
      },
      {
        title: "Video: Latihan Soal Kepaduan Paragraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/UbccnW7MHlw",
        description: "Video latihan soal mengenai kepaduan paragraf.",
      },
      {
        title: "Kuis Analisis Bacaan & Kepaduan Paragraf",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Kohesi gramatikal memiliki beberapa jenis, salah satunya konjungsi.",
            question:
              "Kalimat berikut ini yang merupakan contoh dari kohesi gramatikal konjungsi adalah",
            options: [
              {
                id: "a",
                text: "Rina dan Adi kehausan. Mereka belum minum",
              },
              {
                id: "b",
                text: "Dia sudah belajar dengan giat, namun nilai ujiannya tetap rendah",
              },
              {
                id: "c",
                text: "Saya suka berlari setiap pagi. Berlari membuat tubuh saya lebih sehat",
              },
              {
                id: "d",
                text: "Dia memelihara hewan peliharaan, seperti kucing dan anjing",
              },
              {
                id: "e",
                text: "Mereka sedang makan. Kami pun",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'namun' merupakan kata penghubung (konjungsi) yang menghubungkan dua klausa yang bertentangan. Ini merupakan contoh kohesi gramatikal jenis konjungsi.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Kohesi leksikal memiliki beberapa jenis yang menunjukkan hubungan makna antarkata.",
            question:
              "Kalimat berikut ini yang merupakan contoh dari kohesi leksikal hiponimi adalah",
            options: [
              {
                id: "a",
                text: "Mereka sedang makan. Kami pun",
              },
              {
                id: "b",
                text: "Dia memelihara hewan peliharaan, seperti kucing dan anjing",
              },
              {
                id: "c",
                text: "Saya suka berlari setiap pagi. Berlari membuat tubuh saya lebih sehat",
              },
              {
                id: "d",
                text: "Rina dan Adi kehausan. Mereka belum minum",
              },
              {
                id: "e",
                text: "Dia sudah belajar dengan giat, namun nilai ujiannya tetap rendah",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'kucing' dan 'anjing' merupakan kata-kata khusus dari kata umum 'hewan peliharaan'. Ini merupakan contoh hiponimi, yaitu hubungan kata khusus terhadap kata umum.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Kohesi gramatikal memiliki beberapa jenis, salah satunya substitusi.",
            question:
              "Kalimat berikut ini yang merupakan contoh dari kohesi gramatikal substitusi adalah",
            options: [
              {
                id: "a",
                text: "Dia sudah belajar dengan giat, namun nilai ujiannya tetap rendah",
              },
              {
                id: "b",
                text: "Rina dan Adi kehausan. Mereka belum minum",
              },
              {
                id: "c",
                text: "Mereka sedang makan. Kami pun",
              },
              {
                id: "d",
                text: "Saya suka berlari setiap pagi. Berlari membuat tubuh saya lebih sehat",
              },
              {
                id: "e",
                text: "Dia memelihara hewan peliharaan, seperti kucing dan anjing",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'pun' menggantikan kata 'sedang makan' yang sudah disebutkan sebelumnya. Ini merupakan contoh substitusi, yaitu penggantian kata atau kelompok kata dengan kata lain.",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context: "Koherensi antarhubungan kausal memiliki beberapa jenis.",
            question:
              "Kalimat berikut ini yang merupakan contoh dari koherensi antarhubungan konsekuensi adalah",
            options: [
              {
                id: "a",
                text: "Saya membawa payung karena cuaca terlihat mendung",
              },
              {
                id: "b",
                text: "Untuk membuat kue ini, kamu harus mencampurkan bahan-bahan dengan hati-hati",
              },
              {
                id: "c",
                text: "Dia merasa sakit, sebab dia terlalu banyak begadang semalam",
              },
              {
                id: "d",
                text: "Hujan deras sepanjang malam, akibatnya jalanan tergenang banjir",
              },
              {
                id: "e",
                text: "Jika kamu belajar dengan tekun, kamu akan lulus ujian",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'akibatnya' menunjukkan hubungan konsekuensi, yaitu hubungan yang menyatakan akibat atau dampak dari peristiwa sebelumnya.",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context: "Koherensi antarhubungan kausal memiliki beberapa jenis.",
            question:
              "Kalimat berikut ini yang merupakan contoh dari koherensi antarhubungan syarat adalah",
            options: [
              {
                id: "a",
                text: "Jika kamu belajar dengan tekun, kamu akan lulus ujian",
              },
              {
                id: "b",
                text: "Hujan deras sepanjang malam, akibatnya jalanan tergenang banjir",
              },
              {
                id: "c",
                text: "Dia merasa sakit, sebab dia terlalu banyak begadang semalam",
              },
              {
                id: "d",
                text: "Untuk membuat kue ini, kamu harus mencampurkan bahan-bahan dengan hati-hati",
              },
              {
                id: "e",
                text: "Saya membawa payung karena cuaca terlihat mendung",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'Jika' menunjukkan hubungan syarat, yaitu hubungan yang menyatakan persyaratan yang harus dipenuhi agar sesuatu terjadi.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context: "Koherensi antarhubungan kausal memiliki beberapa jenis.",
            question:
              "Kalimat berikut ini yang merupakan contoh dari koherensi antarhubungan cara adalah",
            options: [
              {
                id: "a",
                text: "Saya membawa payung karena cuaca terlihat mendung",
              },
              {
                id: "b",
                text: "Untuk membuat kue ini, kamu harus mencampurkan bahan-bahan dengan hati-hati",
              },
              {
                id: "c",
                text: "Dia merasa sakit, sebab dia terlalu banyak begadang semalam",
              },
              {
                id: "d",
                text: "Hujan deras sepanjang malam, akibatnya jalanan tergenang banjir",
              },
              {
                id: "e",
                text: "Jika kamu belajar dengan tekun, kamu akan lulus ujian",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat tersebut menjelaskan cara membuat kue, yaitu dengan mencampurkan bahan-bahan dengan hati-hati. Ini merupakan contoh hubungan cara, yaitu hubungan yang menyatakan cara atau metode melakukan sesuatu.",
            points: 6,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Sekolah kami memiliki fasilitas yang lengkap, seperti perpustakaan yang luas, lapangan olahraga, dan ruang kelas yang nyaman. Selain itu, kami juga memiliki kantin yang menyediakan makanan sehat. Banyak siswa yang suka berkunjung ke kantin saat istirahat. Walaupun sekolah kami sudah memiliki fasilitas yang baik, kami merasa perlu adanya lebih banyak kegiatan ekstrakurikuler. Kegiatan ekstrakurikuler di sekolah kami sangat bervariasi dan menarik.",
            question:
              "Kalimat mana yang menyebabkan paragraf tersebut tidak padu?",
            options: [
              {
                id: "a",
                text: "Sekolah kami memiliki fasilitas yang lengkap, seperti perpustakaan yang luas, lapangan olahraga, dan ruang kelas yang nyaman",
              },
              {
                id: "b",
                text: "Selain itu, kami juga memiliki kantin yang menyediakan makanan sehat",
              },
              {
                id: "c",
                text: "Banyak siswa yang suka berkunjung ke kantin saat istirahat",
              },
              {
                id: "d",
                text: "Kegiatan ekstrakurikuler di sekolah kami sangat bervariasi dan menarik",
              },
              {
                id: "e",
                text: "Walaupun sekolah kami sudah memiliki fasilitas yang baik, kami merasa perlu adanya lebih banyak kegiatan ekstrakurikuler",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat 'Walaupun sekolah kami sudah memiliki fasilitas yang baik, kami merasa perlu adanya lebih banyak kegiatan ekstrakurikuler' tidak padu karena mengubah topik dari fasilitas sekolah ke kegiatan ekstrakurikuler yang tidak berkaitan dengan paragraf sebelumnya.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Saya tidak bisa ikut serta dalam acara tersebut karena saya harus menyelesaikan tugas yang mendesak.",
            question: "Kalimat tersebut mengandung unsur?",
            options: [
              { id: "a", text: "Koherensi hubungan cara" },
              { id: "b", text: "Koherensi hubungan syarat" },
              { id: "c", text: "Koherensi hubungan tujuan" },
              { id: "d", text: "Koherensi hubungan alasan" },
              { id: "e", text: "Koherensi hubungan konsekuensi" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'karena' menunjukkan hubungan alasan, yaitu memberikan alasan mengapa saya tidak bisa ikut serta dalam acara tersebut.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Dia suka bermain sepak bola, _____ dia juga aktif dalam organisasi sekolah.",
            question: "Lengkapilah kalimat di atas dengan koherensi yang tepat",
            options: [
              { id: "a", text: "dan" },
              { id: "b", text: "selain itu" },
              { id: "c", text: "tetapi" },
              { id: "d", text: "karena" },
              { id: "e", text: "oleh karena itu" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'selain itu' merupakan koherensi hubungan penambahan yang tepat untuk melengkapi kalimat tersebut, karena kalimat kedua memberikan informasi tambahan tentang aktivitas yang dilakukan.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Di kota kami, banyak tempat wisata yang menarik. Ada pantai yang indah dengan pasir putih yang bersih. Selain itu, ada juga taman hiburan yang menyenangkan untuk dikunjungi bersama keluarga. Di kota ini juga banyak restoran yang menyediakan berbagai jenis makanan. Namun, kota kami juga menghadapi masalah kemacetan yang semakin parah setiap harinya.",
            question:
              "Kalimat mana yang menyebabkan paragraf tersebut tidak padu?",
            options: [
              {
                id: "a",
                text: "Di kota kami, banyak tempat wisata yang menarik",
              },
              {
                id: "b",
                text: "Ada pantai yang indah dengan pasir putih yang bersih",
              },
              {
                id: "c",
                text: "Selain itu, ada juga taman hiburan yang menyenangkan untuk dikunjungi bersama keluarga",
              },
              {
                id: "d",
                text: "Namun, kota kami juga menghadapi masalah kemacetan yang semakin parah setiap harinya",
              },
              {
                id: "e",
                text: "Di kota ini juga banyak restoran yang menyediakan berbagai jenis makanan",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat 'Namun, kota kami juga menghadapi masalah kemacetan yang semakin parah setiap harinya' tidak padu karena membahas masalah kemacetan yang tidak berkaitan dengan topik utama paragraf tentang tempat wisata yang menarik.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Cuaca hari ini sangat panas, tetapi kemarin sangat dingin.",
            question: "Kalimat tersebut mengandung unsur?",
            options: [
              { id: "a", text: "Kohesi gramatikal konjungsi" },
              { id: "b", text: "Koherensi hubungan kontras" },
              { id: "c", text: "Kohesi leksikal antonimi" },
              { id: "d", text: "Kohesi leksikal sinonimi" },
              { id: "e", text: "Kohesi gramatikal substitusi" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'panas' dan 'dingin' merupakan pasangan antonimi (kata berlawanan makna). Ini merupakan contoh kohesi leksikal jenis antonimi.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Dia selalu berusaha keras dalam segala hal. Berusaha keras adalah kunci kesuksesan baginya.",
            question: "Kalimat tersebut mengandung unsur?",
            options: [
              { id: "a", text: "Kohesi leksikal hiponimi" },
              { id: "b", text: "Kohesi leksikal meronimi" },
              { id: "c", text: "Kohesi leksikal antonimi" },
              { id: "d", text: "Kohesi leksikal sinonimi" },
              { id: "e", text: "Kohesi leksikal repetisi" },
            ],
            correctAnswer: "e",
            explanation:
              "Kata 'berusaha keras' diulang pada kalimat kedua untuk memberikan penekanan. Ini merupakan contoh repetisi, yaitu pengulangan kata untuk memberikan penekanan.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Saya ingin pergi ke pantai, tetapi cuacanya sedang buruk.",
            question: "Kalimat tersebut mengandung unsur?",
            options: [
              { id: "a", text: "Kohesi gramatikal substitusi" },
              { id: "b", text: "Kohesi gramatikal konjungsi" },
              { id: "c", text: "Kohesi gramatikal elipsis" },
              { id: "d", text: "Kohesi leksikal hiponimi" },
              { id: "e", text: "Kohesi leksikal repetisi" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'tetapi' merupakan kata penghubung (konjungsi) yang menghubungkan dua klausa yang bertentangan. Ini termasuk kohesi gramatikal jenis konjungsi.",
            points: 7,
          },
          {
            id: "q14",
            type: "matrix",
            context:
              "Koherensi antarhubungan kausal dan aditif memiliki berbagai jenis.",
            question:
              "Berikut ini adalah koherensi antarhubungan kausal (Tentukan Benar/Salah)",
            rows: [
              { id: "r1", text: "Hubungan cara" },
              { id: "r2", text: "Hubungan alasan" },
              { id: "r3", text: "Hubungan sebab" },
              { id: "r4", text: "Hubungan penambahan" },
              { id: "r5", text: "Hubungan kontras" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "true",
              r4: "false",
              r5: "false",
            },
            explanation:
              "Hubungan cara, alasan, dan sebab merupakan koherensi antarhubungan kausal. Hubungan penambahan dan kontras merupakan koherensi antarhubungan aditif, bukan kausal.",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Kohesi memiliki dua jenis, yaitu kohesi gramatikal dan kohesi leksikal.",
            question: "Manakah yang termasuk dalam kohesi leksikal?",
            options: [
              { id: "a", text: "Referensi" },
              { id: "b", text: "Konjungsi" },
              { id: "c", text: "Hiponimi" },
              { id: "d", text: "Kontras" },
              { id: "e", text: "Elipsis" },
            ],
            correctAnswer: "c",
            explanation:
              "Hiponimi merupakan salah satu jenis kohesi leksikal. Referensi, konjungsi, dan elipsis termasuk kohesi gramatikal, sedangkan kontras termasuk koherensi aditif.",
            points: 7,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Analisis Bacaan & Kepaduan Paragraf";
      moduleDoc.description =
        "Materi mengenai kepaduan paragraf, jenis-jenis kohesi dan koherensi, serta cara menganalisis bacaan.";
      moduleDoc.subcategory = "Paragraf 2";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Analisis Bacaan & Kepaduan Paragraf",
        description:
          "Materi mengenai kepaduan paragraf, jenis-jenis kohesi dan koherensi, serta cara menganalisis bacaan.",
        subcategory: "Paragraf 2",
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

seedAnalisisBacaanKepaduanParagraf();
