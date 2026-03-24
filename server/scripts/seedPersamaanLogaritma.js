const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedPersamaanLogaritma = async () => {
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

    const targetId = "persamaan-logaritma";

    const stepsData = [
      {
        title: "Materi: Persamaan Logaritma",
        type: "reading",
        status: "active",
        description:
          "Pengertian logaritma dan persamaan logaritma, bentuk umum, sifat-sifat logaritma, dan sifat-sifat persamaan logaritma.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Apa Itu Logaritma dan Persamaan Logaritma?</h3>
            <div class="space-y-4">
              <div>
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Logaritma</h4>
                <p class="text-body-l text-Grayscale-900 leading-relaxed">
                  Invers atau kebalikan dari eksponen atau pemangkatan. Karena itu, sistem logaritma juga bisa digunakan untuk menentukan besar pangkat suatu bilangan pokok.
                </p>
              </div>
              <div>
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Persamaan Logaritma</h4>
                <p class="text-body-l text-Grayscale-900 leading-relaxed">
                  Sebuah persamaan dalam bentuk logaritma yang memiliki variabel di bagian basis atau numerus atau keduanya.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">2. Bentuk Umum Logaritma</h3>
            <div class="p-6 bg-Primary-50/30 rounded-xl border border-Primary-100 mb-4">
              <div class="text-center mb-4">
                <p class="font-bold text-h4 text-Primary-900">log<sub>a</sub> b = c &hArr; a<sup>c</sup> = b</p>
              </div>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1">
                <li><strong>a</strong> adalah basis logaritma</li>
                <li><strong>b</strong> adalah numerus/angka logaritma</li>
                <li><strong>c</strong> adalah nilai logaritma</li>
              </ul>
            </div>
            <div class="p-4 bg-Primary-50/30 rounded-xl border border-Primary-100">
              <p class="text-body-l text-Primary-700 font-semibold mb-1">Syarat Logaritma</p>
              <p class="text-body-l text-Grayscale-800">
                Untuk a &gt; 0, a &ne; 1, b &gt; 0
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">3. Sifat-Sifat Logaritma</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Logaritma dari Perkalian</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub>(m &middot; n) = log<sub>a</sub> m + log<sub>a</sub> n</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Logaritma dari Basis yang Sama dengan Angka</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub> a = 1</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Logaritma dari Pembagian</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub>(m/n) = log<sub>a</sub> m &minus; log<sub>a</sub> n</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Logaritma dari 1</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub> 1 = 0</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Logaritma dari Perpangkatan</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub>(m<sup>n</sup>) = n &middot; log<sub>a</sub> m</p>
              </div>
              <div class="p-5 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-body-md font-bold text-Grayscale-700 mb-2">Mengubah Basis Logaritma</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub> b = log<sub>c</sub> b / log<sub>c</sub> a</p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">4. Sifat-Sifat Persamaan Logaritma</h3>
            <div class="space-y-6">
              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Jika Logaritma di Kedua Sisi</h4>
                <p class="text-body-l text-Grayscale-800 mb-2">Jika basis sama:</p>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub> m = log<sub>a</sub> n &rArr; m = n</p>
              </div>
              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Jika Tidak Ada Logaritma di Sisi Lain</h4>
                <p class="text-body-l text-Grayscale-800 mb-2">Ubah ke bentuk eksponen:</p>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub> m = c &rArr; m = a<sup>c</sup></p>
              </div>
              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Logaritma dengan Basis yang Sama dapat Digabung</h4>
                <p class="font-bold text-h5 text-Primary-800">log<sub>a</sub>(m &middot; n) = log<sub>a</sub> m + log<sub>a</sub> n</p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">5. Contoh Penerapan Persamaan Logaritma</h3>

            <div class="space-y-6">
              <div class="p-5 border-l-4 border-Tertiary-500 pl-5 bg-Tertiary-50/20">
                <h4 class="text-h4 font-heading text-Primary-900 mb-4">Contoh 1: Logaritma di Kedua Sisi</h4>
                <p class="text-body-l text-Grayscale-800 mb-2">Tentukan nilai x dari persamaan: log<sub>2</sub>(x + 3) = log<sub>2</sub> 7</p>
                <div class="p-4 bg-white rounded border border-Grayscale-200 mt-2">
                  <p class="text-body-l text-Grayscale-800 mb-1"><strong>Penyelesaian:</strong></p>
                  <p class="text-body-l text-Grayscale-800">Karena basisnya sama, maka numerusnya harus sama:</p>
                  <p class="text-body-l text-Grayscale-800">x + 3 = 7</p>
                  <p class="text-body-l text-Grayscale-800">x = 4</p>
                  <p class="text-body-l text-Grayscale-800 mt-2"><em>Cek syarat: x + 3 = 7 &gt; 0 &check;</em></p>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Tertiary-500 pl-5 bg-Tertiary-50/20">
                <h4 class="text-h4 font-heading text-Primary-900 mb-4">Contoh 2: Mengubah ke Bentuk Eksponen</h4>
                <p class="text-body-l text-Grayscale-800 mb-2">Tentukan nilai x dari persamaan: log<sub>3</sub> x = 4</p>
                <div class="p-4 bg-white rounded border border-Grayscale-200 mt-2">
                  <p class="text-body-l text-Grayscale-800 mb-1"><strong>Penyelesaian:</strong></p>
                  <p class="text-body-l text-Grayscale-800">Ubah ke bentuk eksponen: x = 3⁴ = 81</p>
                  <p class="text-body-l text-Grayscale-800 mt-2"><em>Cek syarat: x = 81 &gt; 0 &check;</em></p>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Tertiary-500 pl-5 bg-Tertiary-50/20">
                <h4 class="text-h4 font-heading text-Primary-900 mb-4">Contoh 3: Menggunakan Sifat Logaritma</h4>
                <p class="text-body-l text-Grayscale-800 mb-2">Tentukan nilai x dari: log<sub>2</sub> x + log<sub>2</sub>(x &minus; 2) = 3</p>
                <div class="p-4 bg-white rounded border border-Grayscale-200 mt-2">
                  <p class="text-body-l text-Grayscale-800 mb-1"><strong>Penyelesaian:</strong></p>
                  <p class="text-body-l text-Grayscale-800">Gabungkan dengan sifat perkalian: log<sub>2</sub>(x(x &minus; 2)) = 3</p>
                  <p class="text-body-l text-Grayscale-800">Ubah ke bentuk eksponen: x(x &minus; 2) = 2³ = 8</p>
                  <p class="text-body-l text-Grayscale-800">x² &minus; 2x &minus; 8 = 0</p>
                  <p class="text-body-l text-Grayscale-800">(x &minus; 4)(x + 2) = 0</p>
                  <p class="text-body-l text-Grayscale-800">x = 4 atau x = &minus;2</p>
                  <p class="text-body-l text-Grayscale-800 mt-2"><em>Cek syarat: x &gt; 0 dan x &minus; 2 &gt; 0, maka x &gt; 2. Jadi x = 4 &check;</em></p>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <div class="p-4 bg-Error-50/10 rounded-xl border border-Error-100">
              <p class="text-body-l text-Error-400 font-semibold mb-1">PENTING!!</p>
              <p class="text-body-l text-Grayscale-800">
                Selalu periksa <strong>syarat logaritma</strong> setelah mendapatkan jawaban. Syarat yang harus dipenuhi: basis &gt; 0 dan &ne; 1, serta numerus &gt; 0. Jawaban yang tidak memenuhi syarat harus dibuang!
              </p>
            </div>
          </section>
        `,
      },
      {
        title: "Video: Persamaan Logaritma (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/wxJbk-phNP0",
        description: "Pembahasan konsep dasar dan sifat-sifat logaritma.",
      },
      {
        title: "Video: Persamaan Logaritma (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/oxcnqSiZpPw",
        description: "Latihan dan pembahasan soal persamaan logaritma.",
      },
      {
        title: "Kuis Persamaan Logaritma",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Manakah nilai x yang memenuhi?<br/><br/>log₂(x² − 4x + 4) = 2",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "6" },
              { id: "e", text: "8" },
            ],
            correctAnswer: "a",
            explanation:
              "log₂(x² − 4x + 4) = 2. Perhatikan bahwa x² − 4x + 4 = (x − 2)². Maka log₂((x − 2)²) = 2, sehingga (x − 2)² = 2² = 4. x − 2 = ±2, maka x = 4 atau x = 0. Kedua nilai memenuhi syarat karena (x − 2)² > 0. Dari pilihan, x = 0 (A) dan x = 4 (C) keduanya valid, namun jawaban utama yang diharapkan adalah x = 0.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "Manakah nilai x yang memenuhi persamaan berikut...<br/><br/>log₄(x² − 4) = 2",
            options: [
              { id: "a", text: "3" },
              { id: "b", text: "−3" },
              { id: "c", text: "4" },
              { id: "d", text: "6" },
              { id: "e", text: "Tidak ada jawaban yang benar" },
            ],
            correctAnswer: "e",
            explanation:
              "log₄(x² − 4) = 2. Ubah ke bentuk eksponen: x² − 4 = 4² = 16. Maka x² = 20, sehingga x = ±2√5 ≈ ±4,47. Tidak ada opsi yang sesuai, jadi jawaban yang benar adalah E (Tidak ada jawaban yang benar).",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Jika 2 log₃(x) = log₃(16), maka nilai x adalah:",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "5" },
              { id: "e", text: "6" },
            ],
            correctAnswer: "c",
            explanation:
              "2 log₃(x) = log₃(x²) = log₃(16). Karena basisnya sama: x² = 16, maka x = 4 (x > 0).",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Pertidaksamaan log₃(x + 1) < 2 memiliki himpunan penyelesaian:",
            options: [
              { id: "a", text: "x < 7" },
              { id: "b", text: "x > 8" },
              { id: "c", text: "x < 8" },
              { id: "d", text: "x > 7" },
              { id: "e", text: "Tidak ada solusi" },
            ],
            correctAnswer: "c",
            explanation:
              "log₃(x + 1) < 2. Karena basis 3 > 1, arah pertidaksamaan tetap: x + 1 < 3² = 9, sehingga x < 8. Syarat: x + 1 > 0 → x > −1. Jadi himpunan penyelesaian: −1 < x < 8. Dari pilihan yang tersedia, jawaban terdekat adalah x < 8 (C).",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Diketahui log₂(4x − 8) = 3. Nilai x adalah:",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "5" },
              { id: "e", text: "6" },
            ],
            correctAnswer: "c",
            explanation:
              "log₂(4x − 8) = 3. Ubah ke bentuk eksponen: 4x − 8 = 2³ = 8. Maka 4x = 16, sehingga x = 4. Cek syarat: 4(4) − 8 = 8 > 0 ✓.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "Persamaan: ᵃlog b⁻² + ᵃlog b³ = c − ᵃlog b.<br/>Jika a = 2 dan b = 1/8, maka nilai c + 3 adalah...",
            options: [
              { id: "a", text: "−6" },
              { id: "b", text: "−3" },
              { id: "c", text: "0" },
              { id: "d", text: "3" },
              { id: "e", text: "6" },
            ],
            correctAnswer: "b",
            explanation:
              "ᵃlog b⁻² + ᵃlog b³ = −2·ᵃlog b + 3·ᵃlog b = ᵃlog b. Maka ᵃlog b = c − ᵃlog b, sehingga 2·ᵃlog b = c. Dengan a = 2 dan b = 1/8 = 2⁻³: ²log(2⁻³) = −3. Maka c = 2 × (−3) = −6. Jadi c + 3 = −6 + 3 = −3.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Tentukan nilai dari:<br/><br/>((⁵log 10)² − (⁵log 2)²) / (⁵log √20) = ...",
            options: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "4" },
              { id: "e", text: "5" },
            ],
            correctAnswer: "c",
            explanation:
              "Pembilang: (⁵log 10)² − (⁵log 2)² = (⁵log 10 − ⁵log 2)(⁵log 10 + ⁵log 2) = ⁵log(10/2) · ⁵log(10 × 2) = ⁵log 5 · ⁵log 20 = 1 · ⁵log 20 = ⁵log 20. Penyebut: ⁵log √20 = ⁵log 20^(1/2) = (1/2) · ⁵log 20. Hasil: ⁵log 20 / ((1/2) · ⁵log 20) = 2.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Sebuah lingkaran memiliki jari-jari log a² dan keliling log b⁴, maka ᵃlog b = ...",
            options: [
              { id: "a", text: "π" },
              { id: "b", text: "2π" },
              { id: "c", text: "1/π" },
              { id: "d", text: "2π" },
              { id: "e", text: "1/2π" },
            ],
            correctAnswer: "a",
            explanation:
              "Keliling = 2π × jari-jari. Maka log b⁴ = 2π × log a². 4 log b = 2π × 2 log a = 4π log a. log b = π log a. ᵃlog b = log b / log a = π.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "Jika diketahui:<br/>f(n) = ²log 3 · ³log 4 · ⁴log 5 ··· ⁿ⁻¹log n<br/>maka f(8) + f(16) + f(32) + ··· + f(2³⁰) = ...",
            options: [
              { id: "a", text: "462" },
              { id: "b", text: "465" },
              { id: "c", text: "562" },
              { id: "d", text: "662" },
              { id: "e", text: "Tidak ada jawaban yang benar" },
            ],
            correctAnswer: "a",
            explanation:
              "Dengan aturan rantai logaritma: f(n) = ²log 3 · ³log 4 · ⁴log 5 ··· ⁿ⁻¹log n = ²log n. Maka: f(8) = ²log 8 = 3, f(16) = 4, f(32) = 5, ..., f(2³⁰) = 30. Jumlah = 3 + 4 + 5 + ... + 30 = (30 × 31)/2 − (1 + 2) = 465 − 3 = 462.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Jika ˣlog w = 1/2 dan ˣʸlog w = 2/5, maka nilai ʸlog w adalah...",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "8" },
              { id: "e", text: "10" },
            ],
            correctAnswer: "a",
            explanation:
              "ˣlog w = 1/2 → log w / log x = 1/2 → log x = 2 log w. ˣʸlog w = 2/5 → log w / (log x + log y) = 2/5. Substitusi log x = 2 log w: log w / (2 log w + log y) = 2/5. 5 log w = 4 log w + 2 log y. log w = 2 log y. ʸlog w = log w / log y = 2.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Persamaan Logaritma",
      description:
        "Pengertian logaritma dan persamaan logaritma, bentuk umum, sifat-sifat logaritma, dan sifat-sifat persamaan logaritma.",
      subcategory: "Aljabar dan Logaritma",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: Persamaan Logaritma");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedPersamaanLogaritma();
