const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedJenisBilanganPKPM = async () => {
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

    const targetId = "jenis-bilangan";

    const stepsData = [
      {
        title: "Materi: Jenis Bilangan",
        type: "reading",
        status: "active",
        description:
          "Pengertian bilangan, jenis-jenis bilangan, dan hubungan antar himpunan bilangan.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Bilangan</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed">
              Bilangan adalah konsep dasar dalam matematika yang digunakan untuk menghitung, mengukur, dan memberi label.
              Bilangan dapat berupa simbol, angka, atau representasi lain yang menyatakan jumlah atau posisi dalam suatu urutan.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-jenis Bilangan</h3>
            <div class="space-y-5 text-body-l text-Grayscale-800">
              <p><strong>Bilangan Asli</strong><br/>Bilangan positif yang dimulai dari 1, 2, 3, dan seterusnya.<br/>Notasi: N = {1, 2, 3, 4, 5, ...}</p>
              <p><strong>Bilangan Cacah</strong><br/>Bilangan asli yang ditambahkan angka 0.<br/>Notasi: C = {0, 1, 2, 3, 4, 5, ...}</p>
              <p><strong>Bilangan Bulat</strong><br/>Mencakup bilangan negatif, nol, dan bilangan positif.<br/>Notasi: B = {..., -2, -1, 0, 1, 2, ...}</p>
              <p><strong>Bilangan Rasional</strong><br/>Bilangan yang dapat dinyatakan sebagai p/q, dengan p dan q bilangan bulat, q != 0.<br/>Contoh: 1/2, -3/4, 0,75, 2.</p>
              <p><strong>Bilangan Irasional</strong><br/>Bilangan yang tidak dapat dinyatakan dalam bentuk p/q dan desimalnya tidak berakhir serta tidak berulang.<br/>Contoh: pi, akar(2).</p>
              <p><strong>Bilangan Real/Riil</strong><br/>Mencakup bilangan rasional dan irasional.<br/>Contoh: -3, 0, akar(2), pi.</p>
              <p><strong>Bilangan Prima</strong><br/>Bilangan asli yang hanya memiliki dua pembagi, yaitu 1 dan dirinya sendiri.<br/>Contoh: 2, 3, 5, 7, 11, 13.</p>
              <p><strong>Bilangan Komposit</strong><br/>Bilangan asli yang memiliki lebih dari dua pembagi.<br/>Contoh: 4, 6, 8, 9, 10.</p>
              <p><strong>Bilangan Ganjil</strong><br/>Bilangan bulat yang tidak habis dibagi 2.<br/>Contoh: 1, 3, 5, 7, 9.</p>
              <p><strong>Bilangan Genap</strong><br/>Bilangan bulat yang habis dibagi 2.<br/>Contoh: 2, 4, 6, 8, 10, ...</p>
              <p><strong>Bilangan Kompleks</strong><br/>Bilangan yang terdiri dari bagian real dan imajiner, ditulis dalam bentuk a + bi.</p>
            </div>
          </section>

          <section>
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Hubungan Antar Jenis Bilangan</h3>
            <ul class="list-disc pl-6 space-y-2 text-body-l text-Grayscale-800">
              <li>Bilangan asli adalah bagian dari bilangan cacah.</li>
              <li>Bilangan cacah adalah bagian dari bilangan bulat.</li>
              <li>Bilangan bulat termasuk bilangan rasional.</li>
              <li>Bilangan rasional dan irasional membentuk bilangan real.</li>
              <li>Bilangan real adalah bagian dari bilangan kompleks.</li>
            </ul>
          </section>
        `,
      },
      {
        title: "Video: Jenis Bilangan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ohHx-wIKYts",
        description: "Pembahasan jenis-jenis bilangan dan contohnya.",
      },
      {
        title: "Kuis Jenis Bilangan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Bilangan asli yang terkecil adalah ...",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "-1" },
              { id: "d", text: "2" },
              { id: "e", text: "Tidak Ada" },
            ],
            correctAnswer: "b",
            explanation:
              "Pada materi ini, bilangan asli dimulai dari 1, sehingga yang terkecil adalah 1.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Bilangan 7/4 termasuk ke dalam jenis bilangan ...",
            options: [
              { id: "a", text: "Bulat" },
              { id: "b", text: "Asli" },
              { id: "c", text: "Rasional" },
              { id: "d", text: "Irasional" },
              { id: "e", text: "Kompleks" },
            ],
            correctAnswer: "c",
            explanation: "7/4 dapat ditulis dalam bentuk p/q, jadi termasuk rasional.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "Bilangan genap di antara berikut ini adalah ...",
            options: [
              { id: "a", text: "11" },
              { id: "b", text: "17" },
              { id: "c", text: "23" },
              { id: "d", text: "30" },
              { id: "e", text: "35" },
            ],
            correctAnswer: "d",
            explanation: "30 habis dibagi 2, sehingga termasuk bilangan genap.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Bilangan yang bukan termasuk bilangan prima adalah ...",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "9" },
              { id: "d", text: "7" },
              { id: "e", text: "11" },
            ],
            correctAnswer: "c",
            explanation: "9 memiliki pembagi 1, 3, dan 9 sehingga bukan bilangan prima.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Bilangan akar(3) adalah contoh dari bilangan ...",
            options: [
              { id: "a", text: "Bulat" },
              { id: "b", text: "Rasional" },
              { id: "c", text: "Kompleks" },
              { id: "d", text: "Irasional" },
              { id: "e", text: "Real" },
            ],
            correctAnswer: "d",
            explanation:
              "akar(3) tidak dapat ditulis dalam bentuk p/q dan desimalnya tak berulang.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "Bilangan 0 adalah bilangan asli.",
            options: [
              { id: "a", text: "Salah" },
              { id: "b", text: "Benar" },
            ],
            correctAnswer: "a",
            explanation:
              "Pada materi ini, bilangan asli dimulai dari 1 sehingga 0 bukan bilangan asli.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "Bilangan genap terkecil adalah 2.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation: "Dalam konteks contoh bilangan genap positif, yang terkecil adalah 2.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "Bilangan prima terkecil adalah 2.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation: "2 adalah bilangan prima terkecil.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "Bilangan akar(5) adalah rasional.",
            options: [
              { id: "a", text: "Salah" },
              { id: "b", text: "Benar" },
            ],
            correctAnswer: "a",
            explanation: "akar(5) adalah bilangan irasional.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "Bilangan komposit adalah bilangan cacah.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation:
              "Bilangan komposit merupakan bilangan asli lebih dari 1, sehingga termasuk bilangan cacah.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Jenis Bilangan",
      description: "Materi pengenalan jenis-jenis bilangan.",
      subcategory: "Bilangan",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: Jenis Bilangan");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedJenisBilanganPKPM();
