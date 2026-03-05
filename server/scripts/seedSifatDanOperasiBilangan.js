const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedSifatDanOperasiBilangan = async () => {
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

    const targetId = "sifat-dan-operasi-bilangan";

    const stepsData = [
      {
        title: "Materi: Sifat dan Operasi Bilangan",
        type: "reading",
        status: "active",
        description:
          "Pengertian bilangan, sifat-sifat bilangan, operasi dasar, serta konversi pecahan-desimal-persen.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Dasar</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Bilangan adalah konsep dasar dalam matematika yang digunakan untuk menghitung, mengukur, dan menggambarkan besaran atau urutan.
              Dalam kehidupan sehari-hari, bilangan dipakai pada aktivitas seperti perhitungan, pengukuran waktu, dan pembelian barang.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Sifat Bilangan</h3>
            <div class="space-y-6 text-body-l text-Grayscale-900">
              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Sifat Komutatif</h4>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Penjumlahan: a + b = b + a</li>
                  <li>Perkalian: a x b = b x a</li>
                </ul>
              </div>
              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Sifat Asosiatif</h4>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Penjumlahan: (a + b) + c = a + (b + c)</li>
                  <li>Perkalian: (a x b) x c = a x (b x c)</li>
                </ul>
              </div>
              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Sifat Distributif</h4>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Perkalian terhadap penjumlahan: a x (b + c) = (a x b) + (a x c)</li>
                </ul>
              </div>
              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Sifat Identitas</h4>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Identitas penjumlahan: a + 0 = a</li>
                  <li>Identitas perkalian: a x 1 = a</li>
                </ul>
              </div>
              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Sifat Invers</h4>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Invers penjumlahan: a + (-a) = 0</li>
                  <li>Invers perkalian: a x (1/a) = 1, untuk a != 0</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Operasi Bilangan</h3>
            <div class="space-y-4 text-body-l text-Grayscale-900">
              <p><strong>Penjumlahan (+)</strong> untuk menghitung total dua atau lebih bilangan. Contoh: 3 + 5 = 8.</p>
              <p><strong>Pengurangan (-)</strong> untuk mencari selisih dua bilangan. Contoh: 10 - 3 = 7.</p>
              <p><strong>Perkalian (x)</strong> untuk menghitung hasil kali dua atau lebih bilangan. Contoh: 4 x 3 = 12.</p>
              <p><strong>Pembagian (/)</strong> untuk membagi satu bilangan dengan bilangan lain. Contoh: 12 / 4 = 3.</p>
              <p><strong>Pangkat dan akar</strong>: a^b adalah hasil perkalian berulang, sedangkan akar kuadrat dari a adalah bilangan yang jika dikuadratkan menjadi a.</p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-jenis Bilangan</h3>
            <ul class="list-disc pl-6 space-y-2 text-body-l text-Grayscale-900">
              <li><strong>Bilangan Asli:</strong> 1, 2, 3, ...</li>
              <li><strong>Bilangan Bulat:</strong> ..., -2, -1, 0, 1, 2, ...</li>
              <li><strong>Bilangan Rasional:</strong> dapat ditulis dalam bentuk a/b, b != 0</li>
              <li><strong>Bilangan Irasional:</strong> tidak dapat ditulis sebagai a/b</li>
              <li><strong>Bilangan Prima:</strong> memiliki tepat dua faktor positif (1 dan dirinya sendiri)</li>
              <li><strong>Bilangan Ganjil:</strong> tidak habis dibagi 2</li>
              <li><strong>Bilangan Genap:</strong> habis dibagi 2</li>
            </ul>
          </section>
        `,
      },
      {
        title: "Video: Sifat dan Operasi Bilangan (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ACPwqR4fu2k",
        description: "Pembahasan konsep sifat bilangan dan operasi dasar.",
      },
      {
        title: "Video: Sifat dan Operasi Bilangan (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/xVJySCHEVpA",
        description:
          "Latihan konversi pecahan, desimal, dan persen beserta contoh soal.",
      },
      {
        title: "Kuis Sifat dan Operasi Bilangan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Pecahan 3/5 jika diubah menjadi bentuk desimal adalah:",
            options: [
              { id: "a", text: "0,12" },
              { id: "b", text: "2,5" },
              { id: "c", text: "5,5" },
              { id: "d", text: "0,6" },
              { id: "e", text: "1,2" },
            ],
            correctAnswer: "d",
            explanation: "3 dibagi 5 = 0,6.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Bentuk persen dari 0,25 adalah:",
            options: [
              { id: "a", text: "25%" },
              { id: "b", text: "30%" },
              { id: "c", text: "12%" },
              { id: "d", text: "40%" },
              { id: "e", text: "2,5%" },
            ],
            correctAnswer: "a",
            explanation: "0,25 x 100% = 25%.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Pecahan senilai dengan 2/3 adalah:",
            options: [
              { id: "a", text: "4/6" },
              { id: "b", text: "7/2" },
              { id: "c", text: "3/2" },
              { id: "d", text: "7/3" },
              { id: "e", text: "6/3" },
            ],
            correctAnswer: "a",
            explanation: "2/3 dikali 2/2 menjadi 4/6.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Hasil dari 30% + 1/2 dalam bentuk desimal adalah:",
            options: [
              { id: "a", text: "3,2" },
              { id: "b", text: "9,3" },
              { id: "c", text: "0,8" },
              { id: "d", text: "2" },
              { id: "e", text: "2,5" },
            ],
            correctAnswer: "c",
            explanation: "30% = 0,3 dan 1/2 = 0,5, sehingga totalnya 0,8.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Bentuk pecahan dari 0.375 yang sudah disederhanakan adalah:",
            options: [
              { id: "a", text: "3/8" },
              { id: "b", text: "2/4" },
              { id: "c", text: "9/4" },
              { id: "d", text: "8/3" },
              { id: "e", text: "12" },
            ],
            correctAnswer: "a",
            explanation: "0,375 = 375/1000 = 3/8.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "Pecahan 4/10 sama dengan 0.4.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Hampir Benar" },
              { id: "c", text: "Kurang Tepat" },
              { id: "d", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation: "4/10 disederhanakan menjadi 2/5 dan nilainya 0,4.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "50% = 2/4",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Hampir Benar" },
              { id: "c", text: "Kurang Tepat" },
              { id: "d", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation: "50% = 0,5 = 1/2, dan 2/4 juga sama dengan 1/2.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "Bentuk persen dari 0.125 adalah 12.5%.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Hampir Benar" },
              { id: "c", text: "Kurang Tepat" },
              { id: "d", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation: "0,125 x 100% = 12,5%.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "0,8 = 2/5",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Hampir Benar" },
              { id: "c", text: "Kurang Tepat" },
              { id: "d", text: "Salah" },
            ],
            correctAnswer: "d",
            explanation: "2/5 = 0,4, bukan 0,8.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "75% sama dengan 3/4.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Hampir Benar" },
              { id: "c", text: "Kurang Tepat" },
              { id: "d", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation: "75% = 0,75 = 3/4.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Sifat dan Operasi Bilangan",
      description:
        "Materi sifat bilangan, operasi dasar, dan konversi pecahan-desimal-persen.",
      subcategory: "Bilangan",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: Sifat dan Operasi Bilangan");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedSifatDanOperasiBilangan();
