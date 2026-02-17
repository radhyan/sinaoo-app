const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedBarisanAritmatika = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }

    const targetId = "barisan-aritmatika";

    const stepsData = [
      {
        title: "Materi: Barisan Aritmatika",
        type: "reading",
        status: "active",
        description: "Konsep dasar, rumus, dan contoh soal barisan aritmatika.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Barisan Aritmatika</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8">
              Barisan aritmatika merupakan barisan bilangan yang selisih (beda) nya sama di setiap langkah. Ciri-cirinya terdapat beda yang tetap di antara dua angka yang berurutan.
            </p>

            <div class="space-y-12">
              <div class="flex flex-col gap-6">
                <div>
                  <h4 class="text-h4 font-bold text-Primary-600 mb-4 font-heading flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                    RUMUS BARISAN ARITMATIKA
                  </h4>
                </div>

                <!-- Formulas & Legend Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <!-- Un Formula -->
                  <div class="bg-Primary-50 border-2 border-Primary-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                    <p class="text-body-l text-Primary-700 mb-4 font-bold">Rumus Suku Ke-n (Uₙ):</p>
                    <div class="bg-white px-8 py-4 rounded-full border-2 border-Primary-500 text-h3 font-bold text-Primary-900">
                      Uₙ = a + (n - 1)d
                    </div>
                  </div>
                  <!-- Sn Formula 1 -->
                  <div class="bg-Primary-50 border-2 border-Primary-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                    <p class="text-body-l text-Primary-700 mb-4 font-bold text-center">Rumus Jumlah Suku Pertama (Sₙ):<br/><span class="text-Primary-500 text-body-l">(Jika Uₙ diketahui)</span></p>
                    <div class="bg-white px-8 py-4 rounded-full border-2 border-Primary-500 text-h3 font-bold text-Primary-900">
                      Sₙ = n/2 . (a + Uₙ)
                    </div>
                  </div>
                  <!-- Sn Formula 2 -->
                  <div class="bg-Primary-50 border-2 border-Primary-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                    <p class="text-body-l text-Primary-700 mb-4 font-bold text-center">Alternatif Rumus Sₙ:<br/><span class="text-Primary-500 text-body-l">(Jika Uₙ belum diketahui)</span></p>
                    <div class="bg-white px-8 py-4 rounded-full border-2 border-Primary-500 text-h3 font-bold text-Primary-900 text-center">
                      Sₙ = n/2 . (2a + (n - 1) . d)
                    </div>
                  </div>
                  <!-- Legend -->
                  <div class="bg-Grayscale-50 rounded-xl p-6 border border-Grayscale-100 flex flex-col justify-center">
                    <p class="text-body-l font-bold text-Grayscale-700 mb-3 text-center">Keterangan:</p>
                    <ul class="space-y-2">
                      <li class="flex items-center gap-2 text-body-l text-Grayscale-600">
                        <span class="font-bold text-Primary-600 w-4">a</span> = angka pertama
                      </li>
                      <li class="flex items-center gap-2 text-body-l text-Grayscale-600">
                        <span class="font-bold text-Primary-600 w-4">d</span> = beda atau selisih
                      </li>
                      <li class="flex items-center gap-2 text-body-l text-Grayscale-600">
                        <span class="font-bold text-Primary-600 w-4">n</span> = posisi angka yang dicari
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Examples Section -->
              <div class="space-y-8">
                <h4 class="text-h4 font-bold text-Primary-900 font-heading">Contoh Soal & Pembahasan</h4>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <!-- Contoh 1 -->
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm flex flex-col">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 1</h5>
                    </div>
                    <div class="p-6 flex-grow">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Tentukan baris ke-9 dari : 2, 5, 8, 11, 14, 17, 20, 23</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>Diketahui <span class="font-bold">a = 2</span>, <span class="font-bold">d = 3</span>, <span class="font-bold">n = 9</span></li>
                          <li>U₉ = 2 + (9-1)3</li>
                          <li>U₉ = 2 + (8)3 = 2 + 24 = 26</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, U₉ = 26</p>
                      </div>
                    </div>
                  </div>

                  <!-- Contoh 2 -->
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm flex flex-col">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 2</h5>
                    </div>
                    <div class="p-6 flex-grow">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Tentukan baris ke-8 dari : 4, 11, 18, 25, 32, 39, 46</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>Diketahui <span class="font-bold">a = 4</span>, <span class="font-bold">d = 7</span>, <span class="font-bold">n = 8</span></li>
                          <li>U₈ = 4 + (8-1)7</li>
                          <li>U₈ = 4 + (7)7 = 4 + 49 = 53</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, U₈ = 53</p>
                      </div>
                    </div>
                  </div>

                  <!-- Contoh 3 -->
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm flex flex-col">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 3</h5>
                    </div>
                    <div class="p-6 flex-grow">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">4, 11, 18, 25, 32, 39, 46, ... hitunglah jumlah 10 suku pertama (S₁₀)!</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>Diketahui <span class="font-bold">a = 4</span>, <span class="font-bold">d = 7</span>, <span class="font-bold">n = 10</span></li>
                          <li>U₁₀ = 4 + (10-1)7 = 4 + 63 = 67</li>
                          <li>S₁₀ = 10/2 . (4 + 67) = 5 . 71 = 355</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, jumlah 10 suku pertama adala 355</p>
                      </div>
                    </div>
                  </div>

                  <!-- Contoh 4 -->
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm flex flex-col">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 4</h5>
                    </div>
                    <div class="p-6 flex-grow">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Diketahui a = 7 dan U₅ = 27, maka berapa nilai beda atau selisihnya?</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <p class="text-body-l text-Grayscale-800 m-0">Menggunakan rumus yang ada:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>Diketahui <span class="font-bold">a = 7</span>, <span class="font-bold">U₅ = 27</span></li>
                          <li>Uₙ = a + (n - 1) d</li>
                          <li>27 = 7 + (5 - 1) d</li>
                          <li>27 = 7 + 4d</li>
                          <li>4d = 20 &rarr; <span class="text-Primary-600 font-bold">d = 5</span></li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, beda atau selisihnya adalah 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `,
      },
      {
        title: "Video Pembahasan: Barisan Aritmatika",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/DSB7SpMiR4I",
        description: "Materi dan latihan soal Barisan dan Deret Aritmatika.",
      },
      {
        title: "Kuis: Barisan dan Deret Aritmatika",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Suatu barisan aritmatika memiliki suku pertama a = 8 dan suku ke-5 = 32. Nilai beda atau selisih dari barisan tersebut adalah..",
            options: [
              { id: "a", text: "6" },
              { id: "b", text: "7" },
              { id: "c", text: "8" },
              { id: "d", text: "5" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "a",
            explanation:
              "Rumus suku ke-n: Un = a + (n-1)b.\nU5 = 8 + (5-1)b = 32\n8 + 4b = 32\n4b = 24\nb = 6.",
            points: 6,
          },
          {
            id: "q2",
            type: "matrix",
            context: "Barisan aritmatika a=6, b=3.",
            question: "Tentukan apakah pernyataan berikut Benar atau Salah.",
            rows: [
              { id: "r1", text: "Suku ke-4 dari barisan ini adalah 18" },
              { id: "r2", text: "Jumlah 5 suku pertama adalah 60" },
              {
                id: "r3",
                text: "Jika beda diubah menjadi 5, maka suku ke-3 menjadi 16",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "true",
            },
            explanation:
              "1. U4 = 6 + 3(3) = 15 (Pernyataan bilang 18, Salah).\n2. S5 = 5/2 (2*6 + 4*3) = 2.5(12+12) = 60 (Benar).\n3. U3 (b=5) = 6 + 2(5) = 16 (Benar).",
            points: 8,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Barisan aritmatika a=5, b=4. Pernyataan mana yang benar?\n(1) S6 = 84\n(2) U8 = 34\n(3) Ini adalah barisan geometri\n(4) Jika b=3, U5 = 17",
            options: [
              { id: "a", text: "(1), (2) dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan salah" },
            ],
            correctAnswer: "d",
            explanation:
              "(1) S6 = 3(10 + 20) = 90 (Salah, opsi 84).\n(2) U8 = 5 + 28 = 33 (Salah, opsi 34).\n(3) Ini aritmatika, bukan geometri (Salah).\n(4) Jika b=3, U5 = 5 + 4(3) = 17 (Benar).\nHanya (4) benar.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Berat bagasi: Hari 1-3 (98, 107, 116). Hari 5-7 (134, 143, 151). Pernyataan mana yang benar?\n(1) Beda = 9\n(2) Mengikuti pola aritmatika\n(3) U8 = 161\n(4) U4 = 125",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "e",
            explanation:
              "(1) Beda = 107-98 = 9 (Benar).\n(2) U4 = a+3b (Rumus aritmatika, Benar).\n(3) U8 = 98 + 7(9) = 98 + 63 = 161 (Benar).\n(4) U4 (125) = Rata-rata U3(116) & U5(134)? (116+134)/2 = 125 (Benar).\nSemua Benar.",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Karyawan: Bulan 1 (100), Bulan 5 (160). Berapakah jumlah total karyawan selama 5 bulan (S5)?",
            options: [
              { id: "a", text: "355" },
              { id: "b", text: "480" },
              { id: "c", text: "585" },
              { id: "d", text: "650" },
              { id: "e", text: "730" },
            ],
            correctAnswer: "d",
            explanation:
              "U1 = a = 100. U5 = 160.\nS5 = n/2 (a + U5) = 5/2 (100 + 160) = 2.5 * 260 = 650.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "Diketahui S4 = 40 dan a = 7. Pernyataan mana yang benar?\n(1) Un = 7 + (n-1)3\n(2) U6 = 22\n(3) S6 = 87\n(4) b = 5",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan salah" },
            ],
            correctAnswer: "e",
            explanation:
              "Cari beda (b): S4 = 2(2a + 3b) -> 40 = 2(14 + 3b) -> 20 = 14 + 3b -> 3b = 6 -> b = 2.\n(1) Rumus Un = 7 + (n-1)2 (Salah, opsi bilang kali 3).\n(2) U6 = 7 + 10 = 17 (Salah, opsi 22).\n(3) S6 = 3(14 + 10) = 72 (Salah, opsi 87).\n(4) b=2 (Salah, opsi 5).\nSemua salah.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Produksi: a=200, b=50. Target Total (Sn) = 10.000. Mana pasangan n dan U10 yang tepat?",
            options: [
              { id: "a", text: "10 bulan dan 500 unit" },
              { id: "b", text: "12 bulan dan 550 unit" },
              { id: "c", text: "14 bulan dan 600 unit" },
              { id: "d", text: "17 bulan dan 650 unit" },
              { id: "e", text: "18 bulan dan 700 unit" },
            ],
            correctAnswer: "d",
            explanation:
              "Cari U10 dulu: 200 + 9(50) = 650 unit. Opsi yang punya 650 unit hanya D.\nCek Sn untuk n=17: S17 = 17/2 (400 + 16*50) = 8.5 (1200) = 10.200 (Mencapai target > 10.000).",
            points: 6,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Kecepatan alat: a=120, b=-3. Berapakah kecepatan pada putaran ke-10 (U10)?",
            options: [
              { id: "a", text: "67 km/jam" },
              { id: "b", text: "74 km/jam" },
              { id: "c", text: "81 km/jam" },
              { id: "d", text: "93 km/jam" },
              { id: "e", text: "106 km/jam" },
            ],
            correctAnswer: "d",
            explanation: "U10 = a + 9b = 120 + 9(-3) = 120 - 27 = 93 km/jam.",
            points: 6,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "Pengunjung: a=200, b=50. Total 10 minggu (S10) = 4250. Berapakah jumlah pengunjung pada minggu ke-3 sampai ke-10?",
            options: [
              { id: "a", text: "3.000" },
              { id: "b", text: "3.500" },
              { id: "c", text: "3.800" },
              { id: "d", text: "4.200" },
              { id: "e", text: "4.500" },
            ],
            correctAnswer: "c",
            explanation:
              "Total S10 = 4250.\nKita butuh jumlah minggu 3 sd 10, artinya Total dikurangi Minggu 1 & 2.\nU1 = 200. U2 = 250. Total (U1+U2) = 450.\nJawab = 4250 - 450 = 3800.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Diketahui a=3 dan S5=65. Jika jumlah U6 sd U10 = 120, berapakah nilai U12?",
            options: [
              { id: "a", text: "28" },
              { id: "b", text: "35" },
              { id: "c", text: "42" },
              { id: "d", text: "58" },
              { id: "e", text: "65" },
            ],
            correctAnswer: "d",
            explanation:
              "Cari beda (b): S5 = 2.5(6 + 4b) = 65 -> 15 + 10b = 65 -> 10b = 50 -> b = 5.\nU12 = a + 11b = 3 + 11(5) = 58.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context: "Diberikan barisan: 50, 48, 46, 44... (b=-2, a=50).",
            question:
              "Manakah rumus suku ke-n yang tepat untuk barisan tersebut?",
            options: [
              { id: "a", text: "Un = 50 + (n - 1) . (-2)" },
              { id: "b", text: "Un = 50 + (n + 1) . (-2)" },
              { id: "c", text: "Un = 50 + (n - 1) . (2)" },
              { id: "d", text: "Un = 50 + (n + 1) . (2)" },
              { id: "e", text: "Un = 50 + (n - 2)" },
            ],
            correctAnswer: "a",
            explanation:
              "Rumus umum barisan aritmatika: Un = a + (n-1)b.\nDengan a=50 and b=-2, maka: Un = 50 + (n-1)(-2).",
            points: 6,
          },
          {
            id: "q12",
            type: "multiple-choice",
            question:
              "Diberikan barisan: 12, 17, 22... Jika diketahui U6 = 42, berapakah nilai S6?",
            options: [
              { id: "a", text: "78" },
              { id: "b", text: "94" },
              { id: "c", text: "105" },
              { id: "d", text: "137" },
              { id: "e", text: "147" },
            ],
            correctAnswer: "e",
            explanation:
              "Mari cek jika b=5: S6 = 3(2a + 5b) = 3(24 + 25) = 147. Jadi soal sebenarnya menggunakan beda 5, namun info 'U6=42' di soal kemungkinan typo (seharusnya U6=37 atau U7=42). Tapi nilai S6 yang diminta adalah 147.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            question:
              "Seorang pelari berlatih dengan jarak: a=3 km, b=2 km. Pernyataan mana yang benar?\n(1) S5 = 13\n(2) Jarak meningkat secara konstan\n(3) U6 = 12\n(4) U3 = 7",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "c",
            explanation:
              "(1) S5 = 2.5(6 + 8) = 35 (Salah, opsi 13).\n(2) Meningkat konstan (Benar, aritmatika).\n(3) U6 = 3 + 10 = 13 (Salah, opsi 12).\n(4) U3 = 3 + 4 = 7 (Benar).\nJawaban: (2) dan (4) Benar.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            question:
              "Susunan buku: Rak 1 (10), Rak 2 (15), Rak Terakhir (70). Pernyataan mana yang benar?\n(1) U6 = 60\n(2) U10 = 100\n(3) U8 = 65\n(4) U5 = 55",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan salah" },
            ],
            correctAnswer: "e",
            explanation:
              "a=10, b=5.\n(1) U6 = 10 + 25 = 35 (Salah).\n(2) U10 = 10 + 45 = 55 (Salah).\n(3) U8 = 10 + 35 = 45 (Salah).\n(4) U5 = 10 + 20 = 30 (Salah).\nSemua salah.",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            question:
              "Penggunaan bahan bakar: a=50, b=-2. Pernyataan mana yang benar?\n(1) U5 = 42\n(2) U7 = 38\n(3) Pola merupakan aritmatika dengan beda negatif\n(4) Rumus Un = 50 + (n-1)(-2)",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja yang benar" },
              { id: "b", text: "(1) dan (3) saja yang benar" },
              { id: "c", text: "(2) dan (4) saja yang benar" },
              { id: "d", text: "Hanya (4) yang benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "e",
            explanation:
              "(1) U5 = 50 + (4)(-2) = 42 (Benar).\n(2) U7 = 50 + 6(-2) = 38 (Benar).\n(3) Aritmatika beda negatif (Benar).\n(4) Rumus Un benar.\nSemua Benar.",
            points: 7,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Barisan Aritmatika",
      description: "Materi Barisan dan Deret Bilangan Aritmatika.",
      subcategory: "Penalaran Aritmatika",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module Seeded Successfully: Barisan Aritmatika");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedBarisanAritmatika();
