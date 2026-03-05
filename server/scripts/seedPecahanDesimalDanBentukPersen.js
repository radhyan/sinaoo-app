const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedPecahanDesimalDanBentukPersen = async () => {
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

    const targetId = "pecahan-desimal-dan-bentuk-persen";

    const stepsData = [
      {
        title: "Materi: Pecahan, Desimal, dan Bentuk Persen",
        type: "reading",
        status: "active",
        description:
          "Pengertian pecahan, operasi pecahan, desimal, persen, dan konversinya.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Pecahan</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Pecahan adalah bilangan yang menyatakan bagian dari keseluruhan atau pembagian dari suatu bilangan.
              Pecahan terdiri atas:
            </p>
            <ul class="list-disc pl-6 space-y-2 text-body-l text-Grayscale-800">
              <li><strong>Pembilang</strong>: angka di atas garis pecahan.</li>
              <li><strong>Penyebut</strong>: angka di bawah garis pecahan.</li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-jenis Pecahan</h3>
            <div class="space-y-4 text-body-l text-Grayscale-800">
              <p><strong>Pecahan Biasa</strong><br/>Pecahan yang dituliskan dalam bentuk a/b, di mana a adalah pembilang dan b adalah penyebut.<br/>Contoh: 3/4, 5/6.</p>
              <p><strong>Pecahan Campuran</strong><br/>Gabungan antara bilangan bulat dan pecahan biasa.<br/>Contoh: 2 1/3, 3 2/5.</p>
              <p><strong>Pecahan Desimal</strong><br/>Pecahan yang dinyatakan dalam bentuk desimal.<br/>Contoh: 0,5 dan 0,75.</p>
              <p><strong>Pecahan Senilai</strong><br/>Dua pecahan yang memiliki nilai sama meskipun pembilang dan penyebut berbeda.<br/>Contoh: 1/2 = 2/4 = 3/6.</p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Operasi pada Pecahan</h3>
            <div class="space-y-4 text-body-l text-Grayscale-800">
              <p><strong>Penjumlahan dan Pengurangan</strong><br/>Samakan penyebut terlebih dahulu.<br/>Contoh: 1/4 + 3/4 = (1+3)/4 = 4/4 = 1.</p>
              <p><strong>Perkalian</strong><br/>Kalikan pembilang dengan pembilang dan penyebut dengan penyebut.<br/>Contoh: 2/3 x 4/5 = (2x4)/(3x5) = 8/15.</p>
              <p><strong>Pembagian</strong><br/>Kalikan pecahan pertama dengan kebalikan dari pecahan kedua.<br/>Contoh: 2/3 : 4/5 = 2/3 x 5/4 = 10/12 = 5/6.</p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Desimal</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Desimal adalah bilangan yang menggunakan tanda koma (atau titik pada beberapa sistem)
              untuk memisahkan bilangan bulat dengan bilangan pecahan.
            </p>
            <ul class="list-disc pl-6 space-y-2 text-body-l text-Grayscale-800">
              <li>Contoh: 0,25</li>
              <li>Contoh: 1,75</li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Mengubah Pecahan ke Desimal</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Untuk mengubah pecahan ke desimal, bagi pembilang dengan penyebut.
            </p>
            <ul class="list-disc pl-6 space-y-2 text-body-l text-Grayscale-800">
              <li>1/4 = 1 : 4 = 0,25</li>
              <li>7/8 = 7 : 8 = 0,875</li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Operasi pada Bilangan Desimal</h3>
            <div class="space-y-4 text-body-l text-Grayscale-800">
              <p><strong>Penjumlahan/Pengurangan</strong><br/>Lakukan seperti penjumlahan biasa, pastikan koma sejajar.<br/>Contoh: 2,5 + 1,75 = 4,25.</p>
              <p><strong>Perkalian</strong><br/>Kalikan seperti biasa, lalu hitung jumlah tempat desimal.<br/>Contoh: 0,5 x 0,2 = 0,10.</p>
              <p><strong>Pembagian</strong><br/>Lakukan pembagian seperti biasa, sesuaikan posisi desimal.<br/>Contoh: 1,25 : 0,5 = 2,5.</p>
            </div>
          </section>

          <section>
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Persen</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Persen berarti "per seratus" dan ditulis dengan simbol %.
            </p>
            <ul class="list-disc pl-6 space-y-2 text-body-l text-Grayscale-800 mb-6">
              <li>Contoh: 25% berarti 25/100 atau 0,25.</li>
            </ul>

            <div class="space-y-4 text-body-l text-Grayscale-800">
              <p><strong>Mengubah Persen ke Pecahan</strong><br/>Tuliskan persen sebagai pecahan dengan penyebut 100, lalu sederhanakan.<br/>Contoh: 50% = 50/100 = 1/2 dan 75% = 75/100 = 3/4.</p>
              <p><strong>Mengubah Persen ke Desimal</strong><br/>Bagi angka persen dengan 100.<br/>Contoh: 25% = 25/100 = 0,25 dan 10% = 10/100 = 0,1.</p>
              <p><strong>Mengubah Desimal ke Persen</strong><br/>Kalikan desimal dengan 100 dan tambahkan simbol %.<br/>Contoh: 0,25 = 0,25 x 100 = 25% dan 0,05 = 0,05 x 100 = 5%.</p>
            </div>
          </section>
        `,
      },
      {
        title: "Video: Pecahan, Desimal, dan Persen (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/fBXFf6TjwKo",
        description: "Pembahasan konversi dasar pecahan, desimal, dan persen.",
      },
      {
        title: "Video: Pecahan, Desimal, dan Persen (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/hvyuNvTLluM",
        description:
          "Latihan soal pecahan, desimal, dan persen untuk memperkuat konsep.",
      },
      {
        title: "Kuis Pecahan, Desimal, dan Bentuk Persen",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Pecahan 3/5 jika diubah menjadi bentuk desimal adalah:",
            options: [
              { id: "a", text: "0,3" },
              { id: "b", text: "0,4" },
              { id: "c", text: "0,5" },
              { id: "d", text: "0,6" },
              { id: "e", text: "0,7" },
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
              { id: "b", text: "2,5%" },
              { id: "c", text: "0,025%" },
              { id: "d", text: "250%" },
              { id: "e", text: "0,25%" },
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
              { id: "b", text: "3/5" },
              { id: "c", text: "1/2" },
              { id: "d", text: "5/8" },
              { id: "e", text: "6/10" },
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
              { id: "a", text: "0,3" },
              { id: "b", text: "0,5" },
              { id: "c", text: "0,8" },
              { id: "d", text: "0,75" },
              { id: "e", text: "1,25" },
            ],
            correctAnswer: "c",
            explanation: "30% = 0,3 dan 1/2 = 0,5, jadi total 0,8.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Bentuk pecahan dari 0.375 yang sudah disederhanakan adalah:",
            options: [
              { id: "a", text: "3/8" },
              { id: "b", text: "6/10" },
              { id: "c", text: "9/24" },
              { id: "d", text: "12/32" },
              { id: "e", text: "15/40" },
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
              { id: "a", text: "Tidak" },
              { id: "b", text: "Benar" },
              { id: "c", text: "Bisa Jadi" },
            ],
            correctAnswer: "b",
            explanation: "4/10 = 0,4.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "50% = 2/4",
            options: [
              { id: "a", text: "Bisa Jadi" },
              { id: "b", text: "Benar" },
              { id: "c", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation: "50% = 1/2 dan 2/4 juga = 1/2.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "Bentuk persen dari 0.125 adalah 12.5%.",
            options: [
              { id: "a", text: "Salah" },
              { id: "b", text: "Benar" },
              { id: "c", text: "Bisa Jadi" },
            ],
            correctAnswer: "b",
            explanation: "0,125 x 100% = 12,5%.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "0,8 = 2/5",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Bisa Jadi" },
              { id: "c", text: "Salah" },
            ],
            correctAnswer: "c",
            explanation: "2/5 = 0,4, bukan 0,8.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "75% sama dengan 3/4.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
              { id: "c", text: "Bisa Jadi" },
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
      name: "Pecahan, Desimal, dan Bentuk Persen",
      description: "Materi konversi pecahan, desimal, dan persen.",
      subcategory: "Bilangan",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log(
      "Module seeded successfully: Pecahan, Desimal, dan Bentuk Persen",
    );
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedPecahanDesimalDanBentukPersen();
