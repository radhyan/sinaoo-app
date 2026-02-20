const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedTabel = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. Find 'Penalaran Umum' Course
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    // 2. Define the Module Data
    const targetId = "tabel";

    const stepsData = [
      {
        title: "Materi: Interpretasi Data Tabel",
        type: "reading",
        status: "active",
        description: "Materi Bacaan tentang Tabel",
        content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Pengertian Tabel</h3>
        <div class="bg-white rounded-lg border-2 border-Primary-100 p-8 shadow-sm mb-6">
          <p class="text-body-l text-Grayscale-900 mb-4">
            <strong>Tabel</strong> adalah daftar yang berisi ikhtisar sejumlah (besar) data informasi, biasanya berupa kata-kata dan bilangan yang tersusun secara bersistem, urut ke bawah dalam lajur dan berderet tertentu dengan garis pembatas sehingga dapat dengan mudah disimak.
          </p>
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-1">
              <p class="text-body-l text-Grayscale-900 mb-4">
                <strong>Interpretasi data pada tabel</strong> adalah kemampuan untuk memahami dan menganalisis informasi yang tersaji dalam tabel. Ini mencakup:
              </p>
              <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800">
                <li>Mengidentifikasi informasi penting</li>
                <li>Membaca pola atau tren</li>
                <li>Menarik kesimpulan atau membuat prediksi berdasarkan data yang ada.</li>
              </ul>
            </div>
            
            <!-- Example Table Visualization based on image -->
            <div class="flex-1 bg-white border border-Grayscale-300 rounded-md overflow-hidden self-center w-full md:w-auto">
              <table class="w-full text-center border-collapse">
                <thead>
                  <tr class="bg-white border-b-2 border-Grayscale-900">
                    <th class="p-2 border-r-2 border-Grayscale-900 font-bold text-body-m">Jenis Permainan</th>
                    <th class="p-2 border-r-2 border-Grayscale-900 font-bold text-body-m">Laki-Laki</th>
                    <th class="p-2 font-bold text-body-m">Perempuan</th>
                  </tr>
                </thead>
                <tbody class="text-body-m">
                  <tr class="border-b-2 border-Grayscale-900">
                    <td class="p-2 border-r-2 border-Grayscale-900">Bola</td>
                    <td class="p-2 border-r-2 border-Grayscale-900">35</td>
                    <td class="p-2">20</td>
                  </tr>
                  <tr class="border-b-2 border-Grayscale-900">
                    <td class="p-2 border-r-2 border-Grayscale-900">Monopoli</td>
                    <td class="p-2 border-r-2 border-Grayscale-900">27</td>
                    <td class="p-2">33</td>
                  </tr>
                  <tr>
                    <td class="p-2 border-r-2 border-Grayscale-900">Ular tangga</td>
                    <td class="p-2 border-r-2 border-Grayscale-900">32</td>
                    <td class="p-2">24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Secondary-500 pl-4 py-1">2. Jenis-Jenis Tabel</h3>
        <p class="text-body-l text-Grayscale-900 mb-6">Dalam UTBK, tabel yang muncul bisa berbeda-beda antara lain:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-Primary-50 rounded-lg p-6 border border-Primary-200">
            <h5 class="text-h5 font-bold text-Primary-800 mb-2">a. Tabel Tunggal</h5>
            <p class="text-body-l text-Grayscale-700 m-0">Tabel yang hanya menyajikan satu jenis data atau variabel, misalnya tabel jumlah siswa berdasarkan jurusan.</p>
          </div>
          
          <div class="bg-Secondary-50 rounded-lg p-6 border border-Secondary-200">
            <h5 class="text-h5 font-bold text-Secondary-800 mb-2">b. Tabel Ganda</h5>
            <p class="text-body-l text-Grayscale-700 m-0">Tabel yang menyajikan lebih dari satu jenis data atau variabel, misalnya tabel yang menunjukkan jumlah siswa berdasarkan jurusan dan jenis kelamin.</p>
          </div>
          
          <div class="bg-Tertiary-50 rounded-lg p-6 border border-Tertiary-200">
            <h5 class="text-h5 font-bold text-Tertiary-800 mb-2">c. Tabel Distribusi Frekuensi</h5>
            <p class="text-body-l text-Grayscale-700 m-0">Tabel yang menunjukkan distribusi data dalam kelas-kelas interval, misalnya distribusi nilai ujian dalam kelompok tertentu.</p>
          </div>
          
          <div class="bg-Grayscale-50 rounded-lg p-6 border border-Grayscale-200">
            <h5 class="text-h5 font-bold text-Grayscale-800 mb-2">d. Tabel Perbandingan</h5>
            <p class="text-body-l text-Grayscale-700 m-0">Tabel yang menunjukkan data yang bisa dibandingkan, misalnya perbandingan jumlah pendapatan dari beberapa toko dalam waktu tertentu.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Tertiary-500 pl-4 py-1">3. Tipe-Tipe Soal Tabel Dalam UTBK</h3>
        <p class="text-body-l text-Grayscale-900 mb-6">Soal yang sering muncul dalam UTBK terkait tabel biasanya menguji kemampuan seperti:</p>
        
        <div class="space-y-4">
          <div class="bg-white border rounded-lg p-5 border-Grayscale-200 shadow-sm hover:border-Primary-300 transition-colors">
            <h5 class="font-bold text-body-l text-Primary-900 mb-1">a. Soal Aritmatika Sederhana</h5>
            <p class="text-body-l text-Grayscale-700 mb-1">Menjumlahkan, mengurangkan, atau menghitung rata-rata dari data dalam tabel.</p>
            <p class="text-sm text-Grayscale-500 italic">Contoh: "Berapa total nilai penjualan dari Toko A dan Toko B?"</p>
          </div>

          <div class="bg-white border rounded-lg p-5 border-Grayscale-200 shadow-sm hover:border-Primary-300 transition-colors">
            <h5 class="font-bold text-body-l text-Primary-900 mb-1">b. Soal Perbandingan</h5>
            <p class="text-body-l text-Grayscale-700 mb-1">Membandingkan nilai antarbaris atau kolom.</p>
            <p class="text-sm text-Grayscale-500 italic">Contoh: "Berapa persen peningkatan jumlah siswa tahun ini dibandingkan tahun lalu?"</p>
          </div>

          <div class="bg-white border rounded-lg p-5 border-Grayscale-200 shadow-sm hover:border-Primary-300 transition-colors">
            <h5 class="font-bold text-body-l text-Primary-900 mb-1">c. Soal Persentase dan Rasio</h5>
            <p class="text-body-l text-Grayscale-700 mb-1">Menghitung persentase atau rasio data dari tabel.</p>
            <p class="text-sm text-Grayscale-500 italic">Contoh: "Jika total siswa adalah 300, berapa persen siswa dari jurusan IPA?"</p>
          </div>

          <div class="bg-white border rounded-lg p-5 border-Grayscale-200 shadow-sm hover:border-Primary-300 transition-colors">
            <h5 class="font-bold text-body-l text-Primary-900 mb-1">d. Soal Analisis Tren</h5>
            <p class="text-body-l text-Grayscale-700 mb-1">Menemukan pola, tren, atau anomali dari data tabel.</p>
            <p class="text-sm text-Grayscale-500 italic">Contoh: "Berdasarkan tabel, di bulan apa penjualan mencapai puncaknya?"</p>
          </div>

          <div class="bg-white border rounded-lg p-5 border-Grayscale-200 shadow-sm hover:border-Primary-300 transition-colors">
            <h5 class="font-bold text-body-l text-Primary-900 mb-1">e. Soal Kombinasi Grafik</h5>
            <p class="text-body-l text-Grayscale-700 mb-1">Soal yang menggabungkan tabel dengan grafik (batang, garis, atau lingkaran).</p>
            <p class="text-sm text-Grayscale-500 italic">Contoh: "Berdasarkan tabel dan grafik, berapa selisih total pendapatan dari dua toko tersebut?"</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Tertiary-500 pl-4 py-1">4. Tips Mengerjakan Soal Tabel di UTBK</h3>
        <div class="bg-Tertiary-50/50 rounded-lg p-6 border border-Tertiary-200">
          <ol class="list-decimal list-outside pl-5 space-y-3 text-body-l text-Grayscale-800 font-medium">
            <li>Baca Judul dan Label Tabel dengan cermat.</li>
            <li>Identifikasi Variabel Penting dalam soal.</li>
            <li>Gunakan Langkah Sistematis untuk menghitung data, jangan tergesa-gesa.</li>
            <li>Periksa Kembali Jawaban untuk memastikan tidak ada kesalahan hitung.</li>
          </ol>
        </div>
      </section>
        `,
      },
      {
        title: "Video Pembelajaran 1: Interpretasi Data Tabel",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/cnB2HFyR3rE",
        description: "Video pembahasan materi TPS Penalaran Umum - Tabel.",
      },
      {
        title: "Video Pembelajaran 2: Latihan Soal Tabel",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/_tO5XDcgAys",
        description:
          "Video pembahasan latihan soal TPS Penalaran Umum - Tabel.",
      },
      {
        title: "Kuis: Interpretasi Data Tabel",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Perhatikan tabel nilai Matematika kelas 12 AKL 3 di bawah ini!",
            imageUrl: "/images/modules/tabel/image 1.png",
            question: "Berapakah rata-rata nilai Matematika kelas 12 AKL 3?",
            options: [
              { id: "a", text: "73,5" },
              { id: "b", text: "70,5" },
              { id: "c", text: "75,3" },
              { id: "d", text: "78,3" },
              { id: "e", text: "73,8" },
            ],
            correctAnswer: "c",
            explanation:
              "Nilai rata-rata (mean) didapatkan dengan menjumlahkan hasil kali nilai tengah setiap interval dengan frekuensinya, lalu dibagi dengan total frekuensi. Berdasarkan data tabel, hasil perhitungan rata-ratanya adalah 75,3.",
            points: 7,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Perhatikan tabel nilai Matematika kelas 12 AKL 3 di bawah ini!",
            imageUrl: "/images/modules/tabel/image 1.png",
            question:
              "Jika batas kompeten nilai matematika siswa adalah 75 maka…",
            options: [
              {
                id: "a",
                text: "Lebih banyak yang kompeten daripada yang tidak kompeten",
              },
              {
                id: "b",
                text: "Lebih banyak yang tidak kompeten daripada yang kompeten",
              },
              {
                id: "c",
                text: "Jumlah siswa yang kompeten dan tidak kompeten sama banyaknya",
              },
              { id: "d", text: "Semua siswa kompeten" },
              { id: "e", text: "Semua siswa tidak kompeten" },
            ],
            correctAnswer: "b",
            explanation:
              "Dengan menjumlahkan frekuensi siswa yang nilainya di bawah 75, didapatkan bahwa angka tersebut lebih besar dibandingkan jumlah siswa yang nilainya berada di interval 75 ke atas.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Perhatikan tabel nilai Matematika kelas 12 AKL 3 di bawah ini!",
            imageUrl: "/images/modules/tabel/image 1.png",
            question:
              "Jika frekuensi pada interval 75-79 berubah menjadi 17, manakah pernyataan yang tepat?",
            options: [
              {
                id: "a",
                text: "Lebih banyak yang tidak kompeten daripada yang kompeten",
              },
              { id: "b", text: "Rata-rata nilai siswa akan turun menjadi <70" },
              { id: "c", text: "Total frekuensi menjadi 77" },
              {
                id: "d",
                text: "Siswa yang kompeten dan tidak kompeten menjadi sama banyak",
              },
              { id: "e", text: "Rata-rata nilai siswa akan naik menjadi >80" },
            ],
            correctAnswer: "d",
            explanation:
              "Perubahan frekuensi pada interval nilai tinggi (75-79) menambah jumlah total siswa kompeten. Penambahan ini membuat kuantitas kelompok siswa kompeten menjadi ekuivalen (sama banyak) dengan kelompok yang tidak kompeten.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Perhatikan tabel nilai ujian bahasa inggris siswa kelas 10 di SMA Negeri 38 Jakarta!",
            imageUrl: "/images/modules/tabel/image 2.png",
            question:
              "Kelas manakah yang mempunyai nilai bahasa inggris tertinggi?",
            options: [
              { id: "a", text: "10 IPS 1" },
              { id: "b", text: "10 IPS 2" },
              { id: "c", text: "10 IPS 3" },
              { id: "d", text: "10 IPS 1 & 2" },
              { id: "e", text: "10 IPS 2 & 3" },
            ],
            correctAnswer: "b",
            explanation:
              "Dilihat dari tabel rekapitulasi nilai rata-rata, kelas 10 IPS 2 memiliki akumulasi dan/atau rata-rata nilai bahasa Inggris yang paling tinggi di antara kelas lainnya.",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Perhatikan tabel nilai ujian bahasa inggris siswa kelas 10 di SMA Negeri 38 Jakarta!",
            imageUrl: "/images/modules/tabel/image 2.png",
            question:
              "Jika jumlah laki-laki pada kelas 10 IPS 1 berjumlah 3 orang lebih banyak dari kelas 10 IPS 2, namun memiliki jumlah siswa yang sama yaitu 50 orang dan siswa perempuan di ips 2 sebanyak 24. Maka berapa selisih antara total nilai bahasa inggris kelas 10 IPS 1 & 10 IPS 2?",
            options: [
              { id: "a", text: "60" },
              { id: "b", text: "50" },
              { id: "c", text: "40" },
              { id: "d", text: "30" },
              { id: "e", text: "20" },
            ],
            correctAnswer: "b",
            explanation:
              "Dari informasi demografi: IPS 2 perempuan 24, maka laki-lakinya 26 (total 50). IPS 1 laki-laki 3 lebih banyak (26+3 = 29), maka perempuannya 21 (total 50). Dengan mengalikan masing-masing sub-populasi tersebut dengan rata-rata nilainya di tabel, didapatkan selisih total nilainya adalah 50.",
            points: 7,
          },
          {
            id: "q6",
            type: "matrix",
            context:
              "Perhatikan tabel nilai ujian bahasa inggris siswa kelas 10 di SMA Negeri 38 Jakarta untuk menjawab soal berikut!",
            imageUrl: "/images/modules/tabel/image 2.png",
            question:
              "Kondisi yang memungkinkan untuk membuat rata-rata nilai bahasa inggris kelas 10 IPS 1 menjadi yang tertinggi adalah.... (Tentukan Benar/Salah)",
            rows: [
              {
                id: "r1",
                text: "Nilai rata-rata siswa laki-laki kelas 10 IPS 1 naik 10 Poin",
              },
              {
                id: "r2",
                text: "Nilai rata-rata siswa perempuan kelas 10 IPS 3 naik 5 Poin",
              },
              {
                id: "r3",
                text: "Nilai rata-rata siswa laki-laki kelas 10 IPS 2 berkurang 2 poin",
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
            },
            explanation:
              "Menaikkan nilai siswa di kelas 10 IPS 1 (Pernyataan 1) atau mengurangi pesaing terdekatnya yaitu 10 IPS 2 (Pernyataan 3) adalah cara logis agar rata-rata IPS 1 menjadi tertinggi. Sebaliknya, menaikkan nilai di kelas lain (IPS 3) tidak membantu IPS 1 untuk menjadi yang tertinggi.",
            points: 18,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context: "Perhatikan tabel berikut!",
            imageUrl: "/images/modules/tabel/image 3.png",
            question:
              "Jika pada hari selasa terjual kaos sebanyak 3 buah dan kemeja sebanyak 5 buah. Maka keuntungan yang diperoleh butik arunika pada hari tersebut adalah sebesar.... (penulisan harga sesuai tabel)",
            options: [
              { id: "a", text: "Rp 60.000" },
              { id: "b", text: "Rp 65.000" },
              { id: "c", text: "Rp 67.000" },
              { id: "d", text: "Rp 70.000" },
              { id: "e", text: "Rp 75.000" },
            ],
            correctAnswer: "c",
            explanation:
              "Dihitung berdasarkan selisih harga jual dan modal di tabel. (3 × keuntungan kaos) + (5 × keuntungan kemeja) menghasilkan total keuntungan hari itu sebesar Rp 67.000.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Perhatikan tabel data warga di pulau jawa yang mempunyai pekerjaan berikut ini!",
            imageUrl: "/images/modules/tabel/image 4.png",
            question:
              "Provinsi yang paling membutuhkan program kartu prakerja dari pemerintah adalah provinsi.....",
            options: [
              { id: "a", text: "Jawa Tengah" },
              { id: "b", text: "Jawa Barat" },
              { id: "c", text: "Jawa Timur" },
              { id: "d", text: "Jakarta" },
              { id: "e", text: "Banten" },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan tabel ketenagakerjaan, rasio atau jumlah pengangguran (warga yang belum mempunyai pekerjaan) paling besar berada di provinsi Jawa Barat, sehingga paling membutuhkan program tersebut.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Perhatikan tabel data warga di pulau jawa yang mempunyai pekerjaan berikut ini!",
            imageUrl: "/images/modules/tabel/image 4.png",
            question:
              "Jika warga jawa barat berjumlah 1500 orang dan warga jawa tengah berjumlah 2000 orang. Maka selisih warga yang sudah bekerja di jawa barat dan jawa tengah adalah... orang",
            options: [
              { id: "a", text: "200" },
              { id: "b", text: "215" },
              { id: "c", text: "230" },
              { id: "d", text: "250" },
              { id: "e", text: "275" },
            ],
            correctAnswer: "c",
            explanation:
              "Gunakan persentase tingkat pekerja dari tabel dikali total populasi tiap provinsi. (Persentase pekerja Jabar × 1500) dikurangkan dengan (Persentase pekerja Jateng × 2000), sehingga ditemukan selisihnya adalah 230 orang.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Perhatikan tabel data warga di pulau jawa yang mempunyai pekerjaan berikut ini!",
            imageUrl: "/images/modules/tabel/image 4.png",
            question:
              "Jika kuota yang mendapatkan bantuan kartu prakerja hanya 100.000 orang, dan untuk pulau jawa hanya 10%. Jika total orang di pulau jawa berjumlah 20.000 orang. Maka berapa orang dari jawa tengah yang akan mendapatkan bantuan ini ...",
            options: [
              { id: "a", text: "700" },
              { id: "b", text: "800" },
              { id: "c", text: "760" },
              { id: "d", text: "860" },
              { id: "e", text: "670" },
            ],
            correctAnswer: "c",
            explanation:
              "Total kuota pulau jawa = 10% x 100.000 = 10.000 orang. Menggunakan proporsi dari jumlah populasi yang membutuhkan di Jawa Tengah dibanding total Jawa, didapatkan angka 760 orang.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context: "Perhatikan tabel berikut (Data Penjualan Motor)!",
            imageUrl: "/images/modules/tabel/image 5.png",
            question:
              "Manakah jenis motor yang paling baik untuk dijadikan usaha di masa depan?",
            options: [
              { id: "a", text: "Beat" },
              { id: "b", text: "PCX" },
              { id: "c", text: "Vario & Mio" },
              { id: "d", text: "Beat dan Mio" },
              { id: "e", text: "Mio" },
            ],
            correctAnswer: "d",
            explanation:
              "Berdasarkan analisis tren data di tabel, Beat dan Mio menunjukkan performa penjualan (atau proyeksi pertumbuhan) yang sangat menjanjikan dan konsisten, sehingga paling direkomendasikan.",
            points: 6,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context: "Perhatikan tabel berikut (Data Penjualan Motor)!",
            imageUrl: "/images/modules/tabel/image 5.png",
            question:
              "Pernyataan manakah yang paling tidak sesuai dengan isi tabel dibawah ini adalah....",
            options: [
              {
                id: "a",
                text: "Penjualan motor beat selalu meningkat setiap tahunnya",
              },
              {
                id: "b",
                text: "Motor vario mempunyai penjualan yang fluktuatif",
              },
              { id: "c", text: "Penjualan motor PCX cenderung stabil" },
              {
                id: "d",
                text: "PCX mempunyai penjualan yang tertinggi pada tahun 2021",
              },
              {
                id: "e",
                text: "Beat menjadi satu-satunya motor yang penjualannya selalu meningkat",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pernyataan ini tidak sesuai (salah), karena jika dilihat pada tabel, tidak hanya Beat saja yang angka penjualannya memiliki grafik atau tren yang selalu meningkat (ada merek lain yang juga selalu naik).",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context: "Perhatikan tabel berikut (Data Penjualan Motor)!",
            imageUrl: "/images/modules/tabel/image 5.png",
            question:
              "Motor manakah yang memiliki total penjualan diatas 5000?",
            options: [
              { id: "a", text: "Beat" },
              { id: "b", text: "PCX" },
              { id: "c", text: "Vario dan PCX" },
              { id: "d", text: "PCX dan Beat" },
              { id: "e", text: "Mio" },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan penjumlahan angka di seluruh periode pada tabel, hanya PCX yang berhasil menembus akumulasi (total) penjualan di atas 5.000 unit.",
            points: 6,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Tabel";
      moduleDoc.description =
        "Materi mengenai interpretasi data dalam bentuk tabel.";
      moduleDoc.subcategory = "Interpretasi Data";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Tabel",
        description: "Materi mengenai interpretasi data dalam bentuk tabel.",
        subcategory: "Interpretasi Data",
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

seedTabel();
