const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedEksponenDanAkar = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({
      name: "Pengetahuan Kuantitatif dan Penalaran Matematika",
    });

    if (!course) {
      console.error(
        "Course 'Pengetahuan Kuantitatif dan Penalaran Matematika' not found.",
      );
      process.exit(1);
    }

    const targetId = "eksponen-dan-akar";

    const stepsData = [
      {
        title: "Materi: Eksponen dan Akar",
        type: "reading",
        status: "active",
        description:
          "Pengenalan eksponen dan bentuk akar, sifat-sifat matematisnya, dan langkah-langkah merasionalkan bentuk akar.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Apa itu Eksponen?</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              <strong>Eksponen</strong> adalah suatu bentuk perkalian dengan bilangan yang sama kemudian diulang-ulang (berpangkat).
            </p>
            <div class="p-4 bg-Primary-50/30 rounded-xl border border-Primary-100 flex items-start gap-3 mt-4">
              <span class="text-Primary-600 font-bold">FYI!</span>
              <p class="text-body-md text-Grayscale-800">
                Konsep eksponen dalam matematika pertama kali ditemukan oleh Rene Descartes, seorang filsuf dan matematikawan asal Prancis.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">2. Sifat-Sifat Eksponen</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Dalam operasi eksponen, terdapat beberapa sifat dasar yang perlu dikuasai:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Perkalian Bilangan Berpangkat</h4>
                <p class="font-bold text-h5 text-Primary-800">aᵐ · aⁿ = aᵐ⁺ⁿ</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Pembagian Bilangan Berpangkat</h4>
                <p class="font-bold text-h5 text-Primary-800">aᵐ / aⁿ = aᵐ⁻ⁿ <span class="text-body-md text-Grayscale-600 font-normal ml-2">, a ≠ 0</span></p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Pangkat dari Pangkat</h4>
                <p class="font-bold text-h5 text-Primary-800">(aᵐ)ⁿ = aᵐ·ⁿ</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Pangkat dari Perkalian</h4>
                <p class="font-bold text-h5 text-Primary-800">(a · b)ⁿ = aⁿ · bⁿ</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Pangkat dari Pembagian</h4>
                <p class="font-bold text-h5 text-Primary-800">(a/b)ⁿ = aⁿ / bⁿ <span class="text-body-md text-Grayscale-600 font-normal ml-2">, b ≠ 0</span></p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Bilangan Berpangkat Nol</h4>
                <p class="font-bold text-h5 text-Primary-800">a⁰ = 1 <span class="text-body-md text-Grayscale-600 font-normal ml-2">, a ≠ 0</span></p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Bilangan Berpangkat Negatif</h4>
                <p class="font-bold text-h5 text-Primary-800">a⁻ⁿ = 1 / aⁿ <span class="text-body-md text-Grayscale-600 font-normal ml-2">, a ≠ 0</span></p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Pangkat Pecahan</h4>
                <p class="font-bold text-h5 text-Primary-800">a^(m/n) = ⁿ√(aᵐ) <span class="text-body-md text-Grayscale-600 font-normal ml-2">, n > 0</span></p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Pangkat Satu</h4>
                <p class="font-bold text-h5 text-Primary-800">a¹ = a</p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">3. Apa itu Akar?</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              <strong>Bentuk akar</strong> merupakan suatu operasi aljabar yang dapat digunakan untuk menyelesaikan masalah bilangan. Akar saling berkaitan erat dengan eksponen pecahan.
            </p>
            <h4 class="text-h4 font-heading text-Primary-800 mt-6 mb-4">Sifat-Sifat Akar</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-Secondary-50/30 rounded-xl border border-Secondary-100">
                <h5 class="text-body-md font-bold text-Grayscale-700 mb-2">Akar dari Perkalian</h5>
                <p class="font-bold text-h5 text-Primary-800">√(a · b) = √a · √b</p>
              </div>
              <div class="p-5 bg-Secondary-50/30 rounded-xl border border-Secondary-100">
                <h5 class="text-body-md font-bold text-Grayscale-700 mb-2">Akar dari Pembagian</h5>
                <p class="font-bold text-h5 text-Primary-800">√(a/b) = √a / √b <span class="text-body-md text-Grayscale-600 font-normal ml-2">, b ≠ 0</span></p>
              </div>
              <div class="p-5 bg-Secondary-50/30 rounded-xl border border-Secondary-100">
                <h5 class="text-body-md font-bold text-Grayscale-700 mb-2">Akar Kuadrat dari Pangkat</h5>
                <p class="font-bold text-h5 text-Primary-800">√(a²) = |a|</p>
              </div>
              <div class="p-5 bg-Secondary-50/30 rounded-xl border border-Secondary-100">
                <h5 class="text-body-md font-bold text-Grayscale-700 mb-2">Akar Pangkat n</h5>
                <p class="font-bold text-h5 text-Primary-800">ⁿ√(aᵐ) = a^(m/n) <span class="text-body-md text-Grayscale-600 font-normal ml-2">, n > 0</span></p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">4. Syarat-Syarat Rasional Bentuk Akar</h3>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-4 mb-6">
              <li>
                <strong>Tidak Ada Penyebut Akar Nol:</strong><br />
                <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded text-Primary-700">b ≠ 0</span> pada bentuk <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded">√a / √b</span>
              </li>
              <li>
                <strong>Tidak Ada Bilangan Negatif Dalam Akar:</strong><br />
                <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded text-Primary-700">a ≥ 0</span> pada <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded">√a</span>
              </li>
              <li>
                <strong>Akar Dalam Penyebut Harus Dirasionalkan:</strong><br />
                <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded text-Primary-700">1/√2 → 1/√2 · √2/√2 = √2 / 2</span>
              </li>
              <li>
                <strong>Penyederhanaan Bentuk Akar:</strong><br />
                <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded text-Primary-700">√18 = √(9 · 2) = 3√2</span>
              </li>
              <li>
                <strong>Perkalian dan Pembagian Akar Memenuhi Sifat Akar:</strong><br />
                <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded text-Primary-700">√(a·b) = √a · √b</span> dan <span class="font-mono bg-Grayscale-100 px-2 py-1 rounded">√(a/b) = √a / √b</span>
              </li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">5. Langkah-Langkah Merasionalkan Bentuk Akar</h3>
            
            <div class="space-y-6">
              <div class="p-5 border-l-4 border-Tertiary-500 pl-5 bg-Tertiary-50/20">
                <h4 class="text-h4 font-heading text-Primary-900 mb-4">Kasus 1: Bilangan Pokok Memiliki Pangkat Lebih Besar dari Indeks Akar</h4>
                <div class="space-y-4">
                  <div>
                    <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh 1:</p>
                    <p class="font-bold text-body-l text-Primary-800 bg-white p-3 rounded border border-Grayscale-200 inline-block">
                      √(x⁵) = √(x⁴ · x¹) = √(x⁴) · √x = x² √x
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh 2:</p>
                    <p class="font-bold text-body-l text-Primary-800 bg-white p-3 rounded border border-Grayscale-200 inline-block">
                      √20 = √(4 · 5) = √4 · √5 = 2√5
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Tertiary-500 pl-5 bg-Tertiary-50/20">
                <h4 class="text-h4 font-heading text-Primary-900 mb-4">Kasus 2: Terdapat Akar di Bagian Penyebut</h4>
                <div class="space-y-6">
                  <div>
                    <h5 class="text-body-l font-bold text-Grayscale-800 mb-2">1. Pecahan Bentuk a / √b</h5>
                    <p class="text-body-md text-Grayscale-700 mb-2">Kalikan pembilang dan penyebut dengan √b :</p>
                    <p class="font-bold text-body-l text-Primary-800 bg-white p-3 rounded border border-Grayscale-200 inline-block">
                      a / √b = (a / √b) · (√b / √b) = (a√b) / b
                    </p>
                  </div>
                  
                  <div>
                    <h5 class="text-body-l font-bold text-Grayscale-800 mb-2">2. Pecahan Bentuk a / (b + √c)</h5>
                    <p class="text-body-md text-Grayscale-700 mb-2">Kalikan pembilang dan penyebut dengan sekawan (b - √c) :</p>
                    <div class="font-bold text-body-l text-Primary-800 bg-white p-4 rounded border border-Grayscale-200 overflow-x-auto">
                      <p class="text-center">a / (b + √c) = [ a / (b + √c) ] · [ (b - √c) / (b - √c) ] = a(b - √c) / (b² - c)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `,
      },
      {
        title: "Video: Eksponen",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Av6-oM-_2cM",
        description: "Pengenalan dan Dasar-Dasar Operasi Eksponen",
      },
      {
        title: "Video: Bentuk Akar",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/QAyv1MnWFxs",
        description: "Latihan Soal dan Merasionalkan Bentuk Akar",
      },
      {
        title: "Kuis Eksponen dan Akar",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Manakah nilai x yang memenuhi persamaan berikut: 2^(x+2) * 2^(3x) = 2^8",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "1" },
              { id: "c", text: "3/2" },
              { id: "d", text: "6/4" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan sifat eksponen penjabaran pangkat dengan basis yang sama: 2^(x+2) * 2^(3x) = 2^(x + 2 + 3x) = 2^(4x+2). Karena 2^(4x+2) = 2^8, maka pangkatnya harus sama: 4x + 2 = 8. Maka 4x = 6, dan x = 6/4 = 3/2. Jawaban C atau D bernilai sama-sama 3/2, namun umumnya kita pilih bentuk paling sederhana yaitu C (3/2).",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "Manakah nilai x yang memenuhi pertidaksamaan berikut: 2^(x+1) ≤ 16",
            options: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "0" },
              { id: "e", text: "-1" },
            ],
            correctAnswer: "c",
            explanation:
              "2^(x+1) ≤ 16 dapat ditulis menjadi 2^(x+1) ≤ 2^4. Karena basisnya sama dan > 1, maka pertidaksamaan pangkatnya adalah x + 1 ≤ 4, sehingga x ≤ 3. Dari pilihan ganda, nilai maksimum yang memenuhi adalah 3 (C).",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Manakah bentuk yang paling sederhana?\n√50 - √18",
            options: [
              { id: "a", text: "5√2 - 3√2" },
              { id: "b", text: "2√5 - 2√3" },
              { id: "c", text: "4√5 - 3√2" },
              { id: "d", text: "7√2" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "e",
            explanation:
              "Sederhanakan masing-masing bentuk akar: √50 = √(25 * 2) = 5√2 dan √18 = √(9 * 2) = 3√2. Jadi, operasinya menjadi 5√2 - 3√2 (Opsi A). Namun, bentuk ini belum paling sederhana. Bentuk paling sederhana adalah 2√2. Karena opsi 2√2 tidak ada, jawaban yang tepat adalah Semua Salah (E).",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Berapakah nilai k yang memenuhi persamaan berikut:\n√8 + √32 = k√2",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "8" },
              { id: "e", text: "10" },
            ],
            correctAnswer: "c",
            explanation:
              "Sederhanakan persamaan di kiri: √8 = √(4 * 2) = 2√2. √32 = √(16 * 2) = 4√2. Jadi, 2√2 + 4√2 = 6√2. Karena persamaannya 6√2 = k√2, maka k = 6.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Manakah nilai x yang memenuhi?\n√(x+1) < 3",
            options: [
              { id: "a", text: "x < 9" },
              { id: "b", text: "x > 9" },
              { id: "c", text: "x < 8" },
              { id: "d", text: "x > 8" },
              { id: "e", text: "Semua Salah" },
            ],
            correctAnswer: "c",
            explanation:
              "Untuk menghilangkan akar, kuadratkan kedua ruas: (√(x+1))² < 3², maka x + 1 < 9, sehingga x < 8. Syarat akar adalah x + 1 ≥ 0 atau x ≥ -1. Jadi penyelesaian aslinya adalah -1 ≤ x < 8, namun dari pilihan yang tersedia, batas x < 8 adalah jawaban yang dicari.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "Nilai dari ((2018 - 2017)² + (2018 + 2017)²) / (2017² + 2018²) adalah...",
            options: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "2017" },
              { id: "e", text: "2018" },
            ],
            correctAnswer: "b",
            explanation:
              "Gunakan pemisalan a = 2018 dan b = 2017. Bentuknya menjadi ((a-b)² + (a+b)²) / (a² + b²). Jabarkan pembilang: (a² - 2ab + b²) + (a² + 2ab + b²) = 2a² + 2b² = 2(a² + b²). Hasil akhirnya adalah 2(a² + b²) / (a² + b²) = 2.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Jika nilai (x + y)² = 324 dan (x - y)² = 16, maka nilai dari xy adalah...",
            options: [
              { id: "a", text: "77" },
              { id: "b", text: "66" },
              { id: "c", text: "55" },
              { id: "d", text: "44" },
              { id: "e", text: "33" },
            ],
            correctAnswer: "a",
            explanation:
              "Jabarkan kedua persamaan: x² + 2xy + y² = 324 dan x² - 2xy + y² = 16. Kurangkan persamaan pertama dengan yang kedua: (x² + 2xy + y²) - (x² - 2xy + y²) = 324 - 16. Maka 4xy = 308, dan xy = 308 / 4 = 77.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Jika nilai (x - 5)² + (y - 2)² + (z - 9)² = 0, maka nilai dari (x + y - z) adalah...",
            options: [
              { id: "a", text: "-2" },
              { id: "b", text: "-4" },
              { id: "c", text: "-6" },
              { id: "d", text: "-8" },
              { id: "e", text: "Tidak ada solusi" },
            ],
            correctAnswer: "a",
            explanation:
              "Karena kuadrat bilangan real tidak pernah negatif, jumlah kuadrat bisa bernilai 0 hanya jika masing-masing suku bernilai 0. Maka x-5 = 0 (x=5), y-2 = 0 (y=2), z-9 = 0 (z=9). Nilai dari x+y-z = 5+2-9 = -2.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "Hasil dari 81^(1/4) × 4^(3/2) adalah...",
            options: [
              { id: "a", text: "676" },
              { id: "b", text: "576" },
              { id: "c", text: "24" },
              { id: "d", text: "26" },
              { id: "e", text: "23" },
            ],
            correctAnswer: "c",
            explanation:
              "Sederhanakan dengan perpangkatan pecahan: 81^(1/4) = (3^4)^(1/4) = 3^1 = 3. 4^(3/2) = (2^2)^(3/2) = 2^3 = 8. Maka 3 × 8 = 24.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "Hasil dari (-4)³ + (-4)² + (-4)¹ + (-4)⁰ = ...",
            options: [
              { id: "a", text: "51" },
              { id: "b", text: "-51" },
              { id: "c", text: "-68" },
              { id: "d", text: "72" },
              { id: "e", text: "-54" },
            ],
            correctAnswer: "b",
            explanation:
              "Hitung masing-masing suku: (-4)³ = -64. (-4)² = 16. (-4)¹ = -4. (-4)⁰ = 1 (bilangan apa pun pangkat nol adalah 1). Dijumlahkan semua: -64 + 16 - 4 + 1 = -51.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Eksponen dan Akar",
      description:
        "Pengenalan eksponen dan bentuk akar, sifat-sifat matematisnya, dan langkah-langkah merasionalkan bentuk akar.",
      subcategory: "Aljabar dan Logaritma",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: Eksponen dan Akar");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedEksponenDanAkar();
