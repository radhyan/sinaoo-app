const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedTitikKomaTitikKoma = async () => {
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

    const targetId = "titik-koma-dan-titik-koma";

    const stepsData = [
      {
        title: "Materi: Titik, Koma, dan Titik Koma",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian dasar penulisan tanda baca, fungsi titik (.), koma (,), dan titik koma (;), serta hal-hal yang perlu diperhatikan dalam penggunaannya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Dasar Penulisan Tanda -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Dasar Penulisan Tanda</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 mt-0 mb-0 text-justify">
                    Penulisan tanda baca adalah bagian penting dalam bahasa tulis yang berfungsi untuk membantu pembaca memahami maksud dan struktur kalimat dengan lebih baik. Tanda baca tidak hanya memperjelas makna, tetapi juga memberikan ritme dan logika dalam tulisan. Dalam Bahasa Indonesia, tanda baca seperti titik (.), koma (,), dan titik koma (;) memiliki peran yang berbeda sesuai dengan kaidah penggunaannya.
                  </p>
                </div>
              </div>
            </section>

            <!-- Titik (.) -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Titik (.)</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 my-0 text-justify">
                    Titik digunakan untuk menunjukkan akhir dari sebuah pernyataan, singkatan tertentu, atau format angka. Berikut adalah aturan penggunaannya:
                  </p>
                </div>
              </div>

              <!-- Fungsi Titik -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Fungsi Titik</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>1. Mengakhiri kalimat pernyataan.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Saya pergi ke pasar.</li>
                        <li class="text-body-l text-Grayscale-900">Hari ini sangat cerah.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>2. Digunakan dalam singkatan.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">dkk. (dan kawan-kawan)</li>
                        <li class="text-body-l text-Grayscale-900">a.n. (atas nama)</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>3. Menunjukkan angka desimal.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Berat kue itu adalah 1.5 kg.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hal yang perlu diperhatikan (Titik) -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Hal yang Perlu Diperhatikan</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0 text-justify">Titik tidak digunakan di akhir judul atau subjudul.</p>
                      <p class="text-body-l text-Tertiary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Judul yang benar: Penggunaan Tanda Titik</li>
                        <li class="text-body-l text-Grayscale-900">Judul yang salah: Penggunaan Tanda Titik.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Koma (,) -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Koma (,)</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 mt-0 mb-0 text-justify">
                    Koma digunakan untuk memisahkan elemen dalam sebuah kalimat agar lebih terstruktur dan mudah dipahami.
                  </p>
                </div>
              </div>

              <!-- Fungsi Koma -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Fungsi Koma</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>1. Memisahkan unsur dalam daftar.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Saya membeli apel, jeruk, mangga, dan anggur.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>2. Membatasi anak kalimat dari induk kalimat jika anak kalimat mendahului induk kalimat.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Karena hujan deras, kami memutuskan untuk menunda perjalanan.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>3. Digunakan setelah kata seru atau sapaan.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Wah, luar biasa sekali!</li>
                        <li class="text-body-l text-Grayscale-900">Ibu, tolong ambilkan buku itu.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>4. Memisahkan keterangan tambahan dalam kalimat.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Jakarta, ibu kota Indonesia, adalah kota yang padat penduduk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hal yang perlu diperhatikan (Koma) -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Hal yang Perlu Diperhatikan</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0 text-justify">Jangan gunakan koma sebelum kata penghubung seperti "dan" atau "atau" dalam sebuah daftar, kecuali untuk menghindari ambiguitas.</p>
                      <p class="text-body-l text-Tertiary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Saya membeli buku, pena, dan pensil (benar).</li>
                        <li class="text-body-l text-Grayscale-900">Saya membeli buku, dan pena (salah).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Titik Koma (;) -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Titik Koma (;)</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 mt-0 mb-0 text-justify">
                    Titik koma memiliki fungsi unik untuk memisahkan bagian-bagian dalam kalimat yang sudah kompleks atau elemen dalam daftar yang memiliki rincian tambahan.
                  </p>
                </div>
              </div>

              <!-- Fungsi Titik Koma -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Fungsi Titik Koma</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>1. Memisahkan kalimat yang setara dalam sebuah hubungan erat.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Saya ingin pergi ke bioskop; dia lebih memilih tetap di rumah.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>2. Memisahkan elemen dalam daftar yang memiliki rincian tambahan.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Dalam acara itu hadir tiga pembicara: Dr. Ahmad, pakar ekonomi; Dr. Siti, pakar pendidikan; dan Prof. Budi, pakar teknologi.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hal yang perlu diperhatikan (Titik Koma) -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Hal yang Perlu Diperhatikan</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-0 mt-0 text-justify">Jangan mengganti titik atau koma dengan titik koma secara sembarangan. Titik koma hanya digunakan jika diperlukan untuk memperjelas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Titik, Koma, dan Titik Koma (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/lrvKrubKLPs",
        description:
          "Video pembelajaran tentang tanda titik, koma, dan titik koma bagian pertama.",
      },
      {
        title: "Video: Titik, Koma, dan Titik Koma (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/oLQZCRU0QTM",
        description:
          "Video pembelajaran tentang tanda titik, koma, dan titik koma bagian kedua.",
      },
      {
        title: "Kuis Titik, Koma, dan Titik Koma",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Manakah penggunaan tanda titik yang benar di bawah ini?",
            options: [
              { id: "a", text: "Saya tinggal. di Jakarta" },
              { id: "b", text: "Ibu pergi ke pasar setiap. pagi" },
              { id: "c", text: "Saya sedang belajar mengetik" },
              { id: "d", text: "Siti membeli kue, minuman. dan permen" },
              { id: "e", text: "Saya suka membaca buku." },
            ],
            correctAnswer: "e",
            explanation:
              "Tanda titik digunakan untuk mengakhiri kalimat pernyataan. Opsi E adalah satu-satunya kalimat pernyataan yang strukturnya utuh dan diakhiri dengan tanda titik secara tepat pada akhir kalimat.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Tanda koma digunakan untuk:",
            options: [
              { id: "a", text: "Mengakhiri sebuah kalimat pernyataan" },
              { id: "b", text: "Memisahkan elemen dalam daftar" },
              { id: "c", text: "Mengganti kata penghubung" },
              { id: "d", text: "Menutup sebuah kutipan langsung" },
              { id: "e", text: "Menghubungkan dua kalimat setara" },
            ],
            correctAnswer: "b",
            explanation:
              "Menurut kaidah ejaan bahasa Indonesia, salah satu fungsi utama tanda koma adalah dipakai di antara unsur-unsur dalam suatu pemerincian atau pembilangan (daftar) yang terdiri atas tiga unsur atau lebih.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Kalimat berikut menggunakan tanda koma dengan benar, kecuali:",
            options: [
              { id: "a", text: "Wah, cantik sekali bunga itu!" },
              { id: "b", text: "Hari ini, cuaca sangat cerah." },
              { id: "c", text: "Saya suka apel jeruk, dan anggur." },
              {
                id: "d",
                text: "Karena hujan, saya memutuskan untuk tinggal di rumah.",
              },
              {
                id: "e",
                text: 'Ibu berkata, "Ayo, kita pergi ke pasar."',
              },
            ],
            correctAnswer: "c",
            explanation:
              "Opsi C salah karena kehilangan satu tanda koma di antara pemerincian pertama dan kedua. Sesuai PUEBI, seharusnya ditulis dengan pemisah yang jelas: 'Saya suka apel, jeruk, dan anggur.'",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Manakah penggunaan tanda titik koma yang benar?",
            options: [
              {
                id: "a",
                text: "Saya sedang belajar; karena itu saya tidak bisa pergi.",
              },
              {
                id: "b",
                text: "Ali ingin makan nasi; dan dia sangat lapar.",
              },
              {
                id: "c",
                text: "Saya ingin belajar di luar negeri; dia lebih suka kuliah di dalam negeri.",
              },
              {
                id: "d",
                text: "Dia, sangat bahagia; setelah memenangkan lomba.",
              },
              {
                id: "e",
                text: "Karena hari hujan; saya tidak pergi keluar.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Tanda titik koma (;) digunakan sebagai pengganti kata penghubung untuk memisahkan bagian-bagian kalimat yang setara di dalam kalimat majemuk. Opsi C memisahkan dua klausa setara ('Saya ingin belajar...' dan 'dia lebih suka...') tanpa menggunakan konjungsi.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Tanda koma digunakan dalam semua situasi berikut, kecuali:",
            options: [
              { id: "a", text: "Memisahkan unsur dalam daftar" },
              { id: "b", text: "Setelah kata sapaan" },
              { id: "c", text: "Sebelum mengakhiri sebuah kalimat" },
              { id: "d", text: "Memisahkan induk dan anak kalimat" },
              { id: "e", text: "Membatasi keterangan tambahan" },
            ],
            correctAnswer: "c",
            explanation:
              "Tanda koma diletakkan di tengah kalimat untuk jeda atau pemisah antar unsur. Untuk mengakhiri sebuah kalimat, tanda baca yang digunakan adalah tanda titik (.), tanda tanya (?), atau tanda seru (!).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Saya membeli buku, pena, dan pensil."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan ini BENAR karena menerapkan kaidah penggunaan tanda koma secara tepat pada perincian tiga unsur (buku, pena, pensil), termasuk pemakaian koma wajib sebelum konjungsi 'dan'.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Titik digunakan di akhir kalimat tanya."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation:
              "Pernyataan ini SALAH. Tanda titik (.) digunakan untuk mengakhiri kalimat pernyataan/berita. Kalimat tanya harus diakhiri dengan tanda tanya (?).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: Ali berkata; "Mari kita mulai pelajaran."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation:
              'Pernyataan ini SALAH. Untuk mengapit atau mendahului petikan langsung (kalimat langsung), tanda baca yang tepat digunakan adalah tanda koma (,), bukan tanda titik koma (;). Seharusnya: Ali berkata, "Mari kita mulai pelajaran."',
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: Tanda koma digunakan setelah kata "Wah,".',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan ini BENAR. Tanda koma wajib digunakan di belakang kata seru (interjeksi) seperti o, ya, wah, aduh, atau kasihan yang terdapat pada awal kalimat.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Saya suka makan apel jeruk dan anggur."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation:
              'Pernyataan ini SALAH karena kalimat tersebut tidak menggunakan tanda koma dalam pemerinciannya. Seharusnya ditulis dengan koma: "Saya suka makan apel, jeruk, dan anggur."',
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question:
              "Ali ingin pergi ke pasar; ____ sedang menunggu hujan reda.",
            options: [
              { id: "a", text: "Dia" },
              { id: "b", text: "Aku" },
              { id: "c", text: "Kami" },
              { id: "d", text: "Mereka" },
              { id: "e", text: "Kamu" },
            ],
            correctAnswer: "a",
            explanation:
              'Kata ganti orang (pronomina) yang tepat untuk merujuk kembali kepada "Ali" (orang ketiga tunggal) adalah "dia".',
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Saya membeli mangga, jeruk, ____ anggur di pasar.",
            options: [
              { id: "a", text: "Dan" },
              { id: "b", text: "Kemudian" },
              { id: "c", text: "Atau" },
              { id: "d", text: "Lalu" },
              { id: "e", text: "Sedangkan" },
            ],
            correctAnswer: "a",
            explanation:
              'Kata hubung (konjungsi) penambahan yang diletakkan sebelum unsur terakhir dalam suatu rincian atau daftar adalah "dan".',
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: "Ali, Andi, dan Anton",
            question:
              '"Karena hujan deras, ____ memutuskan untuk tidak pergi ke sekolah."',
            options: [
              { id: "a", text: "Aku" },
              { id: "b", text: "Kamu" },
              { id: "c", text: "Kami" },
              { id: "d", text: "Mereka" },
              { id: "e", text: "Dia" },
            ],
            correctAnswer: "c",
            explanation:
              'Berdasarkan kunci jawaban kuis, jawabannya adalah "Kami". Hal ini logis jika kalimat tersebut diucapkan oleh salah satu dari mereka bertiga (misalnya diucapkan oleh Ali), sehingga ia merujuk kelompoknya sebagai "Kami".',
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Jakarta, ____ kota terbesar di Indonesia, merupakan pusat ekonomi.",
            options: [
              { id: "a", text: "Ibu Kota" },
              { id: "b", text: "Kota" },
              { id: "c", text: "Desa" },
              { id: "d", text: "Pemerintah" },
              { id: "e", text: "Wali" },
            ],
            correctAnswer: "a",
            explanation:
              'Frasa tersebut merupakan frasa aposisi (keterangan tambahan) yang menjelaskan Jakarta. Jakarta adalah "Ibu Kota" sekaligus kota terbesar di Indonesia.',
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question: "Saya membeli alpukat, melon, ____ semangka di mall.",
            options: [
              { id: "a", text: "Dan" },
              { id: "b", text: "Atau" },
              { id: "c", text: "Kemudian" },
              { id: "d", text: "Lalu" },
              { id: "e", text: "Sedangkan" },
            ],
            correctAnswer: "a",
            explanation:
              'Seperti pada soal nomor 12, untuk menutup sebuah rincian yang bersifat setara/penambahan, digunakan kata hubung "dan".',
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Titik, Koma, dan Titik Koma";
      moduleDoc.description =
        "Materi mengenai penggunaan tanda baca titik (.), koma (,), dan titik koma (;) dalam bahasa Indonesia, mencakup fungsi, aturan penggunaan, serta hal-hal yang perlu diperhatikan.";
      moduleDoc.subcategory = "Penulisan Tanda";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Titik, Koma, dan Titik Koma",
        description:
          "Materi mengenai penggunaan tanda baca titik (.), koma (,), dan titik koma (;) dalam bahasa Indonesia, mencakup fungsi, aturan penggunaan, serta hal-hal yang perlu diperhatikan.",
        subcategory: "Penulisan Tanda",
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

seedTitikKomaTitikKoma();
