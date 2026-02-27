const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPenalaranAritmatika = async () => {
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
    const targetId = "penalaran-aritmatika";

    const stepsData = [
      {
        title: "Materi: Pola & Operasi Bilangan",
        type: "reading",
        status: "active",
        description: "Materi Bacaan",
        content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Pola Bilangan?</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8">
          Pola bilangan merupakan suatu kumpulan atau susunan bilangan yang diurutkan melalui aturan atau pola tertentu. Pola bilangan dapat berupa pola fibonacci, pola larik, pola bertingkat, dan pola kombinasi.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 pb-8">
          <!-- Pola Fibonacci -->
          <div class="flex flex-col gap-6 items-stretch">
            <div class="">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA FIBONACCI
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Urutan angka di mana setiap angkanya didapat dari hasil penjumlahan dua angka sebelumnya. Pola ini biasanya berbentuk susunan biji matahari.
              </p>
            </div>
            <div class="bg-none rounded-lg p-6 border border-Primary-100">
              <h5 class="text-h5 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h5>
              <p class="text-body-l font-mono text-Primary-900 m-0 inline-block">1, 1, 2, 3, 5, 8, 13, 21, ...</p>
              <ul class="space-y-2 text-body-l text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2">
                  <span class="text-Primary-500">●</span>
                  Angka pertama dan kedua = 1
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-Primary-500">●</span>
                  Angka ketiga = 1 + 1 = 2
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-Primary-500">●</span>
                  Angka keempat = 1 + 2 = 3, dan seterusnya
                </li>
              </ul>
            </div>
          </div>

          <!-- Pola Bertingkat -->
          <div class="flex flex-col gap-6 items-stretch">
            <div class="">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA BERTINGKAT
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Pola angka, bentuk, atau simbol yang tersusun seperti tangga atau piramida, yang mana tiap tingkatnya memiliki jumlah elemen yang berbeda.
              </p>
            </div>
            <div class="bg-none rounded-lg p-6 border border-Primary-100">
              <h5 class="text-h5 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h5>
              <p class="text-body-l font-mono text-Primary-900 m-0 inline-block">1, 3, 6, 10, 15, 21, 28, ...</p>
              <p class="text-body-l text-Grayscale-800 mb-2 italic">Menjumlahkan angka sebelumnya dengan urutan bilangan asli:</p>
              <ul class="space-y-2 text-body-l text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2"><span class="text-Primary-500">●</span> Angka pertama = 1</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka kedua = 1 + 2 = 3</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka ketiga = 3 + 3 = 6, dan seterusnya</li>
              </ul>
            </div>
          </div>

          <!-- Pola Larik -->
          <div class="flex flex-col gap-6 items-stretch">
            <div class="">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA LARIK
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Susunan angka atau simbol dalam bentuk baris dan kolom yang teratur. Tiap baris, pola angkanya pasti naik atau berubah. Biasanya, pola ini terlihat seperti tabel atau grid.
              </p>
            </div>
            <div class="bg-none rounded-lg p-6 border border-Primary-100">
              <h5 class="text-h5 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h5>
              <p class="text-body-l font-mono text-Primary-900 m-0 inline-block">1, 3, 5, 7, 9, 11, 13, 15, ...</p>
              <ul class="space-y-2 text-body-l text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka pertama = 1</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka kedua = 1 + 2 = 3</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka ketiga = 3 + 2 = 5, dan seterusnya</li>
              </ul>
            </div>
          </div>

          

          <!-- Pola Kombinasi -->
          <div class="flex flex-col gap-6 items-stretch">
            <div class="">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA KOMBINASI
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Pola yang terbentuk dari gabungan dua atau lebih pola, seperti fibonacci dan larik atau pola larik dan pola bertingkat. Lebih kompleks karena menggabungkan dua aturan sekaligus.
              </p>
            </div>
            <div class="bg-none rounded-lg p-6 border border-Primary-100">
              <h5 class="text-h5 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h5>
              <p class="text-body-l font-mono text-Primary-900 m-0 inline-block">1, 3, 5, 8, 10, 14, 16, ...</p>
              <p class="text-body-l text-Grayscale-800 mb-2 italic">Urutan bilangan asli lalu ditambah 2:</p>
              <ul class="space-y-2 text-body-l text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2"><span class="text-Primary-500">●</span> Angka pertama = 1</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka kedua = 1 + 2 = 3</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka ketiga = 3 + 2 = 5</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">●</span> Angka keempat = 5 + 3 = 8, dan seterusnya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Operasi Bilangan</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8">
          Operasi bilangan merupakan proses atau langkah matematis untuk mengolah dua atau lebih bilangan dengan aturan tertentu. Dalam UTBK-SNBT, seringkali dibuat dalam bentuk simbol kreatif seperti #, @, *, &Delta;, dan sebagainya.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contoh 1 -->
          <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-50 p-4 text-Primary-900">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 1</h5>
            </div>
            <div class="p-6">
              <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Diketahui x * y = (x + y) - 1, maka berapa nilai dari 3 * (2 * 3)?</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Kerjakan yang berada di dalam kurung terlebih dahulu</li>
                  <li>2 * 3 = (2 + 3) - 1 = 5 - 1 = <span class="font-bold text-Primary-600">4</span></li>
                  <li>3 * <span class="text-Primary-600">4</span> = (3 + 4) - 1 = 7 - 1 = <span class="font-bold text-Primary-600">6</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai dari 3 * (2 * 3) = 6</p>
              </div>
            </div>
          </div>

          <!-- Contoh 2 -->
          <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-50 p-4 text-Primary-900">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 2</h5>
            </div>
            <div class="p-6">
              <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Jika @ = (x/y) dan &Delta; = (x+y) - 1, maka berapa nilai dari 12 @ (5 &Delta; 2)?</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Kerjakan yang berada di dalam kurung terlebih dahulu</li>
                  <li>5 &Delta; 2 = (5 + 2) - 1 = 7 - 1 = <span class="font-bold text-Primary-600">6</span></li>
                  <li>12 @ <span class="text-Primary-600">6</span> = 12 / 6 = <span class="font-bold text-Primary-600">2</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai dari 12 @ (5 &Delta; 2) = 2</p>
              </div>
            </div>
          </div>

          <!-- Contoh 3 -->
          <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-50 p-4 text-Primary-900">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 3</h5>
            </div>
            <div class="p-6">
              <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Jika a @ b = a² - 2b, b # c = b + c², dengan x=4, y=3, z=5, maka berapa <br> nilai (x @ y) # z?</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Kerjakan di dalam kurung: x @ y (4 @ 3)</li>
                  <li>4 @ 3 = 4² - 2(3) = 16 - 6 = <span class="font-bold text-Primary-600">10</span></li>
                  <li><span class="text-Primary-600">10</span> # 5 = 10 + 5² = 10 + 25 = <span class="font-bold text-Primary-600">35</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai (x @ y) # z = 35</p>
              </div>
            </div>
          </div>

          <!-- Contoh 4 -->
          <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-50 p-4 text-Primary-900">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 4</h5>
            </div>
            <div class="p-6">
              <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Diketahui a o b = a + &radic;b. Jika (2 o 4) o 4 = x, maka nilai x o 4 adalah...</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Kerjakan di dalam kurung: 2 o 4 = 2 + &radic;4 = 2 + 2 = <span class="font-bold text-Primary-600">4</span></li>
                  <li>Cari nilai x: <span class="text-Primary-600">4</span> o 4 = 4 + &radic;4 = 4 + 2 = <span class="font-bold text-Primary-600">6</span> (x = 6)</li>
                  <li>Hitung x o 4: <span class="text-Primary-600">6</span> o 4 = 6 + &radic;4 = 6 + 2 = <span class="font-bold text-Primary-600">8</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai x o 4 = 8</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `,
      },
      {
        title: "Video Pembahasan: Pola Bilangan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/byjSFbn0d_4",
        description:
          "Simak video penjelasan mengenai strategi dan tips mengerjakan soal Pola Bilangan.",
      },
      {
        title: "Video Pembahasan: Operasi Bilangan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/kvJm5d3tcvw",
        description:
          "Simak video penjelasan mengenai strategi dan tips mengerjakan soal Operasi Bilangan.",
      },
      {
        title: "Kuis Pola dan Operasi Bilangan",
        type: "quiz",
        status: "active",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Seorang siswa mendapatkan nilai ujian secara berturut-turut: 78, 83, 80, 85, 82, dan 87.",
            question:
              "Jika nilai siswa tersebut konsisten, berapakah nilai ujian pada tes ketujuh?",
            options: [
              { id: "a", text: "81" },
              { id: "b", text: "82" },
              { id: "c", text: "83" },
              { id: "d", text: "84" },
              { id: "e", text: "85" },
            ],
            correctAnswer: "d",
            explanation:
              "Pola deret angka: +5, -3, +5, -3, +5.\n78 + 5 = 83\n83 - 3 = 80\n80 + 5 = 85\n85 - 3 = 82\n82 + 5 = 87\nLangkah selanjutnya adalah -3.\n87 - 3 = 84.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context: "Diketahui suatu pola Fibonacci: 1, 1, 2, 3, 5, 8, 13, …",
            question:
              "Pernyataan mana saja yang benar berdasarkan informasi di atas?\n(1) Suku ke-8 dari pola ini adalah 21.\n(2) Jumlah 7 suku pertama dari pola ini adalah 33.\n(3) Jika pola ini dimulai dari 2, maka suku ke-5 menjadi 10.\n(4) Pola ini memiliki selisih yang tetap.",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan salah" },
            ],
            correctAnswer: "a",
            explanation:
              "(1) Benar. Suku ke-8 = 8 + 13 = 21.\n(2) Benar. Jumlah 7 suku = 1+1+2+3+5+8+13 = 33.\n(3) Benar. Jika mulai dari 2 (2, 2, 4, 6, 10...), suku ke-5 adalah 10.\n(4) Salah. Fibonacci tidak memiliki selisih tetap.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context: "Diketahui suatu bilangan ganjil : 1, 3, 5, 7, 9, ..",
            question:
              "Berdasarkan informasi di atas, pernyataan mana saja yang benar di bawah ini?\n(1) Suku ke-20 dari bilangan ini adalah 39.\n(2) Jumlah 10 suku pertama dari bilangan ini adalah 100.\n(3) Jika bilangan diubah menjadi bilangan genap, maka suku ke-15 menjadi 30.\n(4) Selisih dari bilangan ini konstan.",
            options: [
              { id: "a", text: "(1), (2) dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "e",
            explanation:
              "(1) Benar. U20 = 2(20)-1 = 39.\n(2) Benar. S10 = n^2 = 10^2 = 100.\n(3) Benar. Pola genap (2,4,6...), U15 = 2(15) = 30.\n(4) Benar. Selisih konstan yaitu 2.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Berat angkatan atlet angkat besi pada latihan pertama sampai ketiga: 98, 107, 105. Latihan kelima sampai ketujuh: 112, 121, 119.",
            question:
              "Jika tren berat angkatan tersebut bersifat konstan, berapa kilogram berat angkatan atlet tersebut pada latihan keempat?",
            options: [
              { id: "a", text: "116" },
              { id: "b", text: "115" },
              { id: "c", text: "114" },
              { id: "d", text: "113" },
              { id: "e", text: "112" },
            ],
            correctAnswer: "c",
            explanation:
              "Pola deret: +9, -2, +9, -2.\n98 (+9) = 107\n107 (-2) = 105\n105 (+9) = 114 (Latihan ke-4)\n114 (-2) = 112 (Cocok dengan data latihan ke-5).",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Seorang pelari mencatat waktu tempuhnya: 52 menit, 50 menit, 51 menit, 49 menit, dan 50 menit.",
            question:
              "Jika pola waktu lari ini mengikuti siklus tertentu, berapa waktu yang dibutuhkan pada hari keenam?",
            options: [
              { id: "a", text: "48 menit" },
              { id: "b", text: "49 menit" },
              { id: "c", text: "50 menit" },
              { id: "d", text: "51 menit" },
              { id: "e", text: "52 menit" },
            ],
            correctAnswer: "a",
            explanation:
              "Pola: -2, +1, -2, +1.\n52 (-2) = 50\n50 (+1) = 51\n51 (-2) = 49\n49 (+1) = 50\nLangkah selanjutnya -2.\n50 - 2 = 48 menit.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Jumlah siswa: Minggu 1-3 (30, 35, 33). Minggu 5-7 (40, 45, 43).",
            question:
              "Pernyataan mana saja di bawah ini yang benar?\n(1) Jumlah siswa pada minggu keempat adalah 38.\n(2) Jumlah siswa pada minggu keempat lebih sedikit dibandingkan minggu ketiga.\n(3) Jumlah siswa pada minggu keempat lebih banyak dibandingkan minggu ketiga.\n(4) Jumlah siswa pada minggu keempat adalah 39.",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "b",
            explanation:
              "Pola: +5, -2, +5, -2.\n30 (+5) = 35\n35 (-2) = 33\n33 (+5) = 38 (Minggu ke-4)\n38 (-2) = 40 (Cocok dengan minggu ke-5).\nNilai minggu ke-4 adalah 38. 38 > 33 (Benar).",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Jarak tempuh: Perjalanan 1-3 (60, 70, 68). Perjalanan 5-7 (76, 86, 84).",
            question:
              "Berdasarkan informasi tersebut, pernyataan mana di bawah ini yang benar?\n(1) Jarak yang ditempuh pada perjalanan keempat adalah 74 km.\n(2) Jarak yang ditempuh pada perjalanan keempat lebih jauh dibandingkan perjalanan ketiga.\n(3) Jarak yang ditempuh pada perjalanan keempat lebih dekat dibandingkan perjalanan kelima.\n(4) Jarak yang ditempuh pada perjalanan keempat adalah 78 km.",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan salah" },
            ],
            correctAnswer: "c",
            explanation:
              "Pola: +10, -2, +10, -2.\n60 (+10) = 70\n70 (-2) = 68\n68 (+10) = 78 (Perjalanan ke-4)\n78 (-2) = 76 (Cocok dengan perjalanan ke-5).\nNilai = 78. Pernyataan (2) Benar (78 > 68) dan (4) Benar.",
            points: 7,
          },
          {
            id: "q8",
            type: "matrix",
            context: "Terdapat beberapa bilangan : 1, 4, 9, 16, 25, 36,...",
            question: "Berikan tanda ✔️ pada kolom berikut yang sesuai.",
            rows: [
              {
                id: "r1",
                text: "Bilangan ini merupakan hasil dari bilangan kuadrat sempurna",
              },
              { id: "r2", text: "Bilangan ke-7 dalam bilangan ini adalah 49" },
              {
                id: "r3",
                text: "Selisih antar bilangan bertambah secara konstan",
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
            },
            explanation:
              "Barisan adalah kuadrat bilangan asli (n^2). Suku ke-7 adalah 7^2 = 49. Selisih antar bilangan (3, 5, 7, 9, 11) bertambah secara konstan (beda 2).",
            points: 6,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Diketahui a Δ b = 2a + b².\nJika diketahui p = 4 Δ 5, maka hitunglah (p Δ 2) Δ 3.",
            question: "Nilai dari (p Δ 2)Δ 3  adalah…",
            options: [
              { id: "a", text: "149" },
              { id: "b", text: "153" },
              { id: "c", text: "155" },
              { id: "d", text: "167" },
              { id: "e", text: "169" },
            ],
            correctAnswer: "a",
            explanation:
              "Langkah 1: Cari p = 4 Δ 5 = 2(4) + 5^2 = 8 + 25 = 33.\nLangkah 2: Cari (33 Δ 2) = 2(33) + 2^2 = 66 + 4 = 70.\nLangkah 3: Cari 70 Δ 3 = 2(70) + 3^2 = 140 + 9 = 149.",
            points: 6,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context: "Diketahui a ○ b = a² + √b. Jika (2 ○ 4) ○ 4 = x.",
            question: "Nilai dari x ○ 4  adalah…",
            options: [
              { id: "a", text: "1.440" },
              { id: "b", text: "1.442" },
              { id: "c", text: "1.444" },
              { id: "d", text: "1.446" },
              { id: "e", text: "1.448" },
            ],
            correctAnswer: "d",
            explanation:
              "Langkah 1: (2 ○ 4) = 2^2 + √4 = 4 + 2 = 6.\nLangkah 2: (6 ○ 4) = 6^2 + √4 = 36 + 2 = 38. Jadi x = 38.\nLangkah 3: x ○ 4 = 38^2 + √4 = 1444 + 2 = 1446.",
            points: 6,
          },
          {
            id: "q11",
            type: "multiple-choice",
            imageUrl: "/images/modules/pola-dan-operasi-bilangan/q11.png",
            context:
              "Diberikan dua operasi bilangan seperti pada gambar di atas.",
            question:
              "Jika (5 # 3) * (4 # 2) = x, maka hasil dari x * 1 adalah...",
            options: [
              { id: "a", text: "1.050" },
              { id: "b", text: "1.052" },
              { id: "c", text: "1.054" },
              { id: "d", text: "1.056" },
              { id: "e", text: "1.058" },
            ],
            correctAnswer: "d",
            explanation:
              "Langkah 1: Hitung (5 # 3). a # b = a + 2b. 5 # 3 = 5 + 2(3) = 11.\nLangkah 2: Hitung (4 # 2). 4 # 2 = 4 + 2(2) = 8.\nLangkah 3: Cari nilai x. x = (5 # 3) * (4 # 2) = 11 * 8.\nOperasi * adalah a * b = a² - ab. x = 11 * 8 = 11² - (11 * 8) = 121 - 88 = 33.\nLangkah 4: Hitung x * 1 = 33 * 1 = 33² - (33 * 1) = 1089 - 33 = 1056.",
            points: 7,
          },
          {
            id: "q12",
            type: "short-answer",
            context: "Diberikan sebuah deret angka: 1, 1, 2, 3, 5, 8, 13, ...",
            question: "Berapakah suku berikutnya dari deret angka tersebut?",
            correctAnswer: "21",
            explanation:
              "Deret tersebut merupakan pola bilangan Fibonacci, di mana suku selanjutnya adalah jumlah dari dua suku sebelumnya (8 + 13 = 21).",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context: "Didefinisikan operasi bilangan a # b = (a + b)² - ab.",
            question:
              "Pernyataan mana saja di bawah ini yang benar berdasarkan informasi tersebut?\n(1) Hasil dari 2 # 3 adalah 19.\n(2) Jika b = 0, maka a # b = a².\n(3) Operasi ini menghasilkan bilangan genap jika a dan b adalah bilangan genap.\n(4) Operasi ini tidak bersifat komutatif.",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan salah" },
            ],
            correctAnswer: "a",
            explanation:
              "(1) Benar. (2+3)^2 - 6 = 25 - 6 = 19.\n(2) Benar. (a+0)^2 - 0 = a^2.\n(3) Benar. (Genap+Genap)^2 - Genap = Genap - Genap = Genap.\n(4) Salah. Operasi ini komutatif karena (a+b) sama dengan (b+a) dan ab sama dengan ba.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context: "Diketahui suatu operasi a Δ b = a² - 2ab + b².",
            question:
              "Berdasarkan informasi tersebut, pernyataan mana saja yang benar di bawah ini?\n(1) Hasil dari 3 Δ 2 adalah 1.\n(2) Jika b = 0, maka a Δ b = a².\n(3) Operasi ini dapat ditulis dalam bentuk (a - b)².\n(4) Operasi ini menghasilkan nilai negatif jika a > b.",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "a",
            explanation:
              "Persamaan ini ekuivalen dengan (a-b)^2.\n(1) Benar. (3-2)^2 = 1.\n(2) Benar. (a-0)^2 = a^2.\n(3) Benar. Faktorisasi aljabar a^2 - 2ab + b^2 adalah (a-b)^2.\n(4) Salah. Bilangan kuadrat (real) tidak pernah negatif.",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            imageUrl: "/images/modules/pola-dan-operasi-bilangan/q15.png",
            context:
              "Didefinisikan dua operasi bilangan seperti pada gambar di atas.",
            question:
              "Pernyataan mana saja yang benar berdasarkan informasi tersebut?",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "b",
            explanation:
              "Langkah 1: Periksa (1). 3 * 2 = 3 + 2 + (3*2) = 5 + 6 = 11 (Benar).\nLangkah 2: Periksa (2). Jika a = b, a * b = a + a + a^2 = 2a + a^2 (Pernyataan 3a + a^2 Salah).\nLangkah 3: Periksa (3). 4 Δ 2 = (4^2 + 2^2) / 2 = (16 + 4) / 2 = 10 (Benar).\nLangkah 4: Periksa (4). Δ menghasilkan nilai lebih besar? Misal a=1, b=0. 1 * 0 = 1. 1 Δ 0 = 0.5. (Salah, tidak selalu lebih besar).",
            points: 7,
          },
        ],
      },
    ];

    // 3. Find and Update Module using Raw Driver
    console.log(`Searching for existing module with ID: ${targetId}`);
    const moduleCollection = mongoose.connection.collection("modules");

    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Pola dan Operasi Bilangan",
      description: "Materi Pola Bilangan dan Operasi Bilangan kreatif.",
      subcategory: "Penalaran Aritmatika",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    console.log("Upserting module data...");
    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module Seeded Successfully: Pola dan Operasi Bilangan");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:");
    console.error(error);
    process.exit(1);
  }
};

seedPenalaranAritmatika();
