const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedPermodelanOperasiAljabar = async () => {
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

    const targetId = "permodelan-dan-operasi-aljabar";

    const stepsData = [
      {
        title: "Materi: Permodelan dan Operasi Aljabar",
        type: "reading",
        status: "active",
        description:
          "Pengenalan unsur-unsur aljabar, sifat-sifatnya, serta berbagai jenis operasi dasar aljabar didalam matematika.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Aljabar Itu Apa Sih?</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Aljabar adalah salah satu cabang ilmu matematika yang mempelajari struktur, hubungan, dan kuantitas. Mempelajari aljabar akan membantumu memahami pola-pola bilangan dan memecahkan berbagai masalah logika dengan memformulasikannya ke dalam bentuk persamaan.
            </p>
            <div class="p-4 bg-Primary-50/30 rounded-xl border border-Primary-100 flex items-start gap-3 mt-4">
              <span class="text-Primary-600 font-bold">FYI!</span>
              <p class="text-body-md text-Grayscale-800">
                Istilah aljabar berasal dari bahasa Arab yaitu <strong>al-jabr</strong> yang berarti pertemuan, hubungan, perampungan.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">2. Unsur Penting Aljabar</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Dalam mempelajari aljabar, kamu harus terlebih dahulu memahami unsur-unsur yang membentuknya.
            </p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-2 mb-6">
              <li><strong>Variabel:</strong> lambang aljabar yang dinyatakan dalam huruf kecil.</li>
              <li><strong>Koefisien:</strong> bilangan yang memuat sebuah variabel.</li>
              <li><strong>Konstanta:</strong> bilangan yang tidak memuat sebuah variabel.</li>
              <li><strong>Suku:</strong> bagian dari bentuk aljabar yang dipisahkan oleh operasi hitung.</li>
              <li><strong>Faktor:</strong> bagian dari suatu hasil kali.</li>
            </ul>

            <div class="p-6 bg-Secondary-50/30 rounded-xl border border-Secondary-100">
              <h4 class="text-h4 font-heading text-Primary-800 mb-3">Contoh Identifikasi Unsur Aljabar</h4>
              <p class="text-body-l text-Grayscale-800 mb-4">
                Diberikan bentuk model aljabar sebagai berikut: <strong>3x + 2</strong>
              </p>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1">
                <li><strong>x</strong> adalah variabel</li>
                <li><strong>3</strong> adalah koefisien (bilangan yang melekat pada variabel x)</li>
                <li><strong>2</strong> adalah konstanta</li>
              </ul>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">3. Sifat-Sifat Aljabar</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Polinom atau bentuk aljabar mengikuti beberapa sifat operasi dasar:
            </p>
            <div class="space-y-4">
              <div class="p-5 bg-Tertiary-50/30 rounded-xl border border-Tertiary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Sifat Komutatif</h4>
                <p class="font-bold text-body-l text-Grayscale-900">a . b = b . a</p>
              </div>
              <div class="p-5 bg-Tertiary-50/30 rounded-xl border border-Tertiary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Sifat Asosiatif</h4>
                <p class="font-bold text-body-l text-Grayscale-900">a + (b + c) = (a + b) + c</p>
              </div>
              <div class="p-5 bg-Tertiary-50/30 rounded-xl border border-Tertiary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Sifat Distributif</h4>
                <p class="font-bold text-body-l text-Grayscale-900 mb-1">a . (b + c) = a . b + a . c <span class="text-Grayscale-600 font-normal">-> untuk penjumlahan</span></p>
                <p class="font-bold text-body-l text-Grayscale-900">a . (b - c) = a . b - a . c <span class="text-Grayscale-600 font-normal">-> untuk pengurangan</span></p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">4. Derajat dan Suku Jenis Aljabar</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Setiap bentuk aljabar memiliki derajat yang ditentukan oleh pangkat tertinggi dari variabelnya.
            </p>
            <div class="p-6 bg-Primary-50/30 rounded-xl border border-Primary-100">
              <p class="font-bold text-h4 text-Primary-900 text-center mb-6">
                5x⁴ + 3x³ + 7x² + x + 4 = 0
              </p>
              <p class="text-body-l text-Grayscale-800">
                Dapat dilihat pada contoh bentuk aljabar diatas bahwa bentuk aljabar tersebut memiliki <strong>derajat 4</strong> (karena pangkat tertinggi variabelnya adalah 4) dan memiliki <strong>5 suku</strong> yang terdiri dari 5 suku tak sejenis.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">5. Operasi Aljabar</h3>
            
            <div class="space-y-6">
              <div class="p-5 border-l-4 border-Secondary-500 pl-5">
                <h4 class="text-h4 font-heading text-Primary-900 mb-2">Penjumlahan</h4>
                <p class="text-body-l text-Grayscale-800 mb-3">
                  Operasi penjumlahan pada bentuk aljabar <strong>hanya</strong> dapat dilakukan pada <strong>suku sejenis</strong> lalu lakukan penjumlahan seperti pada angka biasa.
                </p>
                <div class="bg-Grayscale-50 p-4 rounded-lg">
                  <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh:</p>
                  <p class="font-bold text-body-l text-Primary-800">5x + 2x + 4y = 7x + 4y</p>
                  <p class="text-body-md text-Grayscale-600 mt-2">Pada suku 4y kita tidak menambahnya karena ia tak sejenis dengan suku-suku yang lainnya.</p>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Secondary-500 pl-5">
                <h4 class="text-h4 font-heading text-Primary-900 mb-2">Pengurangan</h4>
                <p class="text-body-l text-Grayscale-800 mb-3">
                  Operasi pengurangan pada bentuk aljabar <strong>hanya</strong> dapat dilakukan pada <strong>suku sejenis</strong> lalu lakukan pengurangan seperti pada angka biasa.
                </p>
                <div class="bg-Grayscale-50 p-4 rounded-lg">
                  <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh:</p>
                  <p class="font-bold text-body-l text-Primary-800">3x - 6xy - 8x = -5x - 6xy</p>
                  <p class="text-body-md text-Grayscale-600 mt-2">Pada suku 6xy kita tidak mengurangnya karena ia tak sejenis dengan suku-suku yang lainnya.</p>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Secondary-500 pl-5">
                <h4 class="text-h4 font-heading text-Primary-900 mb-2">Perkalian</h4>
                <p class="text-body-l text-Grayscale-800 mb-3">
                  Operasi perkalian <strong>tidak memandang</strong> apakah suatu suku itu sejenis atau tidak, sehingga operasi perkalian dilakukan di <strong>semua suku</strong> dan dilakukan dengan cara mengkali masuk dengan bilangan yang ada di dalam kurung.
                </p>
                <div class="bg-Grayscale-50 p-4 rounded-lg space-y-2">
                  <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh:</p>
                  <p class="font-bold text-body-l text-Primary-800">(a+b).(a+b) = a.a + a.b + a.b + b.b = a² + 2ab + b²</p>
                  <p class="font-bold text-body-l text-Primary-800">a.(a+b) = a.a + a.b = a² + ab</p>
                  <p class="font-bold text-body-l text-Primary-800">a.(a-b) = a.a + a.(-b) = a² - ab</p>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Secondary-500 pl-5">
                <h4 class="text-h4 font-heading text-Primary-900 mb-2">Pembagian</h4>
                <p class="text-body-l text-Grayscale-800 mb-3">
                  Pembagian <strong>hanya</strong> dapat membagi <strong>variabel yang sama</strong> dan melakukan pembagian seperti biasa.
                </p>
                <div class="bg-Grayscale-50 p-4 rounded-lg">
                  <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh:</p>
                  <p class="font-bold text-body-l text-Primary-800">6x²y / 2xy = 3x</p>
                  <p class="text-body-md text-Grayscale-600 mt-2">Variabel x² dibagi x menjadi x, variabel y dibagi y habis, lalu 6 dibagi 2 adalah 3.</p>
                </div>
              </div>

              <div class="p-5 border-l-4 border-Secondary-500 pl-5">
                <h4 class="text-h4 font-heading text-Primary-900 mb-2">Faktorisasi</h4>
                <p class="text-body-l text-Grayscale-800 mb-3">
                  Faktorisasi pada bentuk aljabar dapat dilakukan dengan mencari <strong>FPB</strong> dari masing masing variabel yang ingin difaktorkan.
                </p>
                <div class="bg-Grayscale-50 p-4 rounded-lg">
                  <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh 1 (Angka Biasa):</p>
                  <p class="font-bold text-body-l text-Primary-800 mb-2">12 + 30 = 6.(2 + 5) = 6.7 = 42</p>
                  <p class="text-body-md text-Grayscale-800 mb-4">Dapat terlihat bahwa 12 dan 30 mempunyai FPB yang bernilai 6, lalu kita mengeluarkan nilai 6 dari persamaan itu menggunakan sifat distributif.</p>
                  
                  <p class="font-semibold text-Grayscale-700 text-sm mb-1">Contoh 2 (Aljabar):</p>
                  <p class="font-bold text-body-l text-Primary-800 mb-2">5x² + 15x = 5x.(x + 3)</p>
                  <p class="text-body-md text-Grayscale-800">Dari contoh di atas, dapat dilihat bahwa faktor dari persamaan 5x² + 15x adalah 5x.(x + 3).</p>
                </div>
              </div>
            </div>
          </section>
        `,
      },
      {
        title: "Video: Aljabar (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/G7uxd_p-cSU",
        description: "Pengenalan dan Dasar-Dasar Operasi Aljabar",
      },
      {
        title: "Video: Aljabar (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/JNJTHI7jIKU",
        description: "Latihan Soal dan Pemecahan Masalah Aljabar",
      },
      {
        title: "Kuis Permodelan dan Operasi Aljabar",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Pada sebuah tes yang terdiri dari 20 soal dibuat aturan sebagai berikut: Jika benar dapat skor 4, salah dapat skor -1 dan tidak dijawab dapat skor -2. Sandi menjawab benar 14 soal dan 1 soal dijawab salah sementara sisanya tidak dijawab. Skor maksimal yang diperoleh Sandi adalah...",
            options: [
              { id: "a", text: "35" },
              { id: "b", text: "37" },
              { id: "c", text: "56" },
              { id: "d", text: "55" },
              { id: "e", text: "45" },
            ],
            correctAnswer: "e",
            explanation:
              "Benar 14 soal: 14 × 4 = 56. Salah 1 soal: 1 × (-1) = -1. Tidak dijawab: (20 - 14 - 1) = 5 soal × (-2) = -10. Total skor = 56 - 1 - 10 = 45.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "Sebidang tanah berbentuk persegi panjang dengan panjang 6 m lebih dari lebarnya. Jika lebarnya adalah x m, maka luas tanah tersebut adalah...",
            options: [
              { id: "a", text: "x² + 5x" },
              { id: "b", text: "x² + 6x" },
              { id: "c", text: "x² - 5x" },
              { id: "d", text: "x² + 5" },
              {
                id: "e",
                text: "Tidak ada satupun dari jawaban ini yang benar",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Lebar = x. Panjang = x + 6. Luas = p × l = (x + 6) × x = x² + 6x.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Suatu persegi panjang memiliki panjang berbanding lebar adalah 9 : 2. Jika lebarnya b cm, maka keliling persegi panjang itu adalah...",
            options: [
              { id: "a", text: "12b" },
              { id: "b", text: "14b" },
              { id: "c", text: "11b" },
              { id: "d", text: "10b" },
              { id: "e", text: "9b" },
            ],
            correctAnswer: "c",
            explanation:
              "p : l = 9 : 2. Jika lebar (l) = b, maka p = (9/2)b. Keliling = 2(p + l) = 2((9/2)b + b) = 2((11/2)b) = 11b.",
            points: 10,
          },
          {
            id: "q4",
            type: "short-answer",
            question:
              "Tinggi bola yang dilempar vertikal ke atas setiap detiknya memenuhi rumus h(t)=(35t−t²) m. Tinggi bola pada detik ke 8 adalah...",
            correctAnswer: "216",
            explanation:
              "Substitusi t = 8 ke dalam rumus: h(8) = 35(8) - (8)² = 280 - 64 = 216 meter.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Bu Siti memiliki sejumlah uang. Sepertiganya ia belanjakan di pasar dan seperdua dari sisanya ia gunakan untuk ongkos. Jika sekarang uang Bu Siti tersisa Rp 25.000,-, maka banyak uang Bu Siti mula mula adalah...",
            options: [
              { id: "a", text: "Rp 75.000,00" },
              { id: "b", text: "Rp 80.000,00" },
              { id: "c", text: "Rp 50.000,00" },
              { id: "d", text: "Rp 150.000,00" },
              { id: "e", text: "Rp 175.000,00" },
            ],
            correctAnswer: "a",
            explanation:
              "Misal total uang = x. Uang sisa 1 (setelah pasar) = x - (1/3)x = (2/3)x. Uang untuk ongkos = (1/2) × (2/3)x = (1/3)x. Sisa uang = (2/3)x - (1/3)x = (1/3)x. Karena sisa uang = Rp 25.000, maka (1/3)x = 25.000, sehingga x = 75.000.",
            points: 10,
          },
          {
            id: "q6",
            type: "short-answer",
            question:
              "Sebuah toko buku menjual buku jenis A seharga Rp20.000 dan buku jenis B seharga Rp30.000. Jika total penjualan adalah Rp1.200.000 dengan jumlah buku yang terjual sebanyak 50 buah, maka banyaknya buku jenis B yang terjual adalah...",
            correctAnswer: "20",
            explanation:
              "Sistem persamaan: A + B = 50 dan 20.000A + 30.000B = 1.200.000 (disederhanakan 2A + 3B = 120). Substitusi A = 50 - B ke persamaan 2: 2(50 - B) + 3B = 120 → 100 - 2B + 3B = 120 → B = 20.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Perhatikan persamaan berikut lalu tentukan akar-akarnya!!\n\na² - 6a + 8 = 0",
            options: [
              { id: "a", text: "-2" },
              { id: "b", text: "-4" },
              { id: "c", text: "2" },
              { id: "d", text: "4" },
              { id: "e", text: "-3" },
            ],
            correctAnswer: "c",
            explanation:
              "Faktorisasi dari persamaan a² - 6a + 8 = 0 adalah (a - 2)(a - 4) = 0. Sehingga akar-akarnya adalah a = 2 atau a = 4. Pada pilihan jawaban, 2 atau 4 adalah benar. (Opsi C atau D).",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Perhatikan fungsi berikut lalu tentukan nilai K nya!!\n\nf(x) = 2x² + 3x - 5. Jika f(k) = 0,",
            options: [
              { id: "a", text: "-5/2" },
              { id: "b", text: "-1" },
              { id: "c", text: "1" },
              { id: "d", text: "-1/2" },
              { id: "e", text: "5/2" },
            ],
            correctAnswer: "a",
            explanation:
              "Mencari nilai k sama dengan mencari akar persamaan 2x² + 3x - 5 = 0. Faktorisasinya adalah (2x + 5)(x - 1) = 0. Sehingga akarnya adalah x = -5/2 atau x = 1. Pada pilihan ganda, -5/2 (A) dan 1 (C) memenuhi.",
            points: 10,
          },
          {
            id: "q9",
            type: "short-answer",
            question:
              "Sebuah perusahaan menghasilkan persamaan berikut: P(x) = 2x² + 5x - 3. Tentukan nilai P(2) !!",
            correctAnswer: "15",
            explanation:
              "Substitusi nilai x = 2 ke dalam persamaan: P(2) = 2(2)² + 5(2) - 3 = 2(4) + 10 - 3 = 8 + 10 - 3 = 15.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Diketahui persamaan berikut: a + b = 7 dan a² + b² = 37. Nilai a.b adalah..",
            options: [
              { id: "a", text: "6" },
              { id: "b", text: "7" },
              { id: "c", text: "8" },
              { id: "d", text: "9" },
              { id: "e", text: "10" },
            ],
            correctAnswer: "a",
            explanation:
              "Gunakan identitas aljabar: (a + b)² = a² + b² + 2ab. Masukkan nilai yang diketahui: (7)² = 37 + 2ab → 49 = 37 + 2ab → 12 = 2ab → ab = 6.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Permodelan dan Operasi Aljabar",
      description:
        "Pengenalan unsur-unsur aljabar, sifat-sifatnya, serta berbagai jenis operasi dasar aljabar didalam matematika.",
      subcategory: "Aljabar dan Logaritma",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: Permodelan dan Operasi Aljabar");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedPermodelanOperasiAljabar();
