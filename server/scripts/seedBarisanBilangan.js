const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedBarisanBilangan = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }

    const targetId = "barisan-bilangan";

    const stepsData = [
      {
        title: "Materi: Barisan Bilangan Geometri",
        type: "reading",
        status: "active",
        description: "Konsep dasar dan rumus barisan geometri.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Barisan Bilangan</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8">
              Barisan bilangan merupakan suatu deretan angka yang diatur dengan aturan tertentu. Aturan itu yang disebut pola atau rumus dari barisan bilangan. Barisan bilangan terbagi menjadi barisan bilangan aritmatika dan barisan bilangan geometri.
            </p>

            <div class="space-y-12">
              <div class="flex flex-col gap-6">
                <div>
                  <h4 class="text-h4 font-bold text-Primary-600 mb-4 font-heading flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                    BARISAN BILANGAN GEOMETRI
                  </h4>
                  <p class="text-body-l text-Grayscale-700 leading-relaxed">
                    Barisan bilangan yang setiap bilangannya dikalikan dengan angka sebelumnya dengan suatu bilangan yang tetap (rasio). 
                    <span class="font-bold text-Primary-700">Ciri-cirinya:</span> terdapat rasio tetap dan dikali terus dengan angka yang sama.
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-Primary-50 border-2 border-Primary-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                    <p class="text-body-l text-Primary-700 mb-4 font-bold">Rumus Suku Ke-n (Uₙ):</p>
                    <div class="bg-white px-8 py-4 rounded-full border-2 border-Primary-500 text-h3 font-bold text-Primary-900">
                      Uₙ = a . rⁿ⁻¹
                    </div>
                  </div>
                  <div class="bg-Primary-50 border-2 border-Primary-100 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                    <p class="text-body-l text-Primary-700 mb-4 font-bold">Rumus Jumlah Suku Pertama (Sₙ):</p>
                    <div class="bg-white px-8 py-4 rounded-full border-2 border-Primary-500 text-h3 font-bold text-Primary-900">
                      Sₙ = a . (rⁿ - 1) / (r - 1)
                    </div>
                  </div>
                </div>

                <div class="bg-Grayscale-50 rounded-xl p-6 border border-Grayscale-100 max-w-md">
                   <p class="text-body-l font-bold text-Grayscale-700 mb-3">Keterangan:</p>
                   <ul class="space-y-2">
                     <li class="flex items-center gap-2 text-body-l text-Grayscale-600">
                       <span class="font-bold text-Primary-600">a</span> = angka pertama
                     </li>
                     <li class="flex items-center gap-2 text-body-l text-Grayscale-600">
                       <span class="font-bold text-Primary-600">r</span> = rasio (angka pengali)
                     </li>
                     <li class="flex items-center gap-2 text-body-l text-Grayscale-600">
                       <span class="font-bold text-Primary-600">n</span> = posisi angka yang dicari
                     </li>
                   </ul>
                </div>
              </div>

              <div class="space-y-8">
                <h4 class="text-h4 font-bold text-Primary-900 font-heading">Contoh Soal & Pembahasan</h4>
                <div class="grid grid-cols-1 gap-6">
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 1</h5>
                    </div>
                    <div class="p-6 pb-0">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">3, 6, 12, 24, 48, 96, 192, ... Berapakah suku ke-8 (U₈)?</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50 mb-6">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>Diketahui <span class="font-bold">a = 3</span>, <span class="font-bold">r = 2</span>, <span class="font-bold">n = 8</span></li>
                          <li>Uₙ = a . rⁿ⁻¹</li>
                          <li>U₈ = 3 . 2⁷ = 384</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, U₈ = 384</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 2</h5>
                    </div>
                    <div class="p-6 pb-0">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">250, 150, 90, 54, ... Berapakah suku ke-5 (U₅)?</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50 mb-6">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>Diketahui <span class="font-bold">a = 250</span>, <span class="font-bold">r = 3/5</span>, <span class="font-bold">n = 5</span></li>
                          <li>U₅ = 250 . (3/5)⁴ = 32,4</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, U₅ = 32,4</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 3</h5>
                    </div>
                    <div class="p-6 pb-0">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Diketahui barisan geometri a=8, r=2. Berapa jumlah suku ke-4 hingga ke-6?</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50 mb-6">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>U₄=64, U₅=128, U₆=256</li>
                          <li>Total = 448</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, jumlahnya adalah 448</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm">
                    <div class="bg-Primary-50 p-4 text-Primary-900">
                      <h5 class="text-h5 font-bold m-0 font-heading">Contoh 4</h5>
                    </div>
                    <div class="p-6 pb-0">
                      <p class="m-0 text-body-l font-bold text-Grayscale-900 mb-4">Tali 2, 6, 18, 54, ... Berapa panjang total hingga tahap ke-7? (r=3)</p>
                      <div class="space-y-3 bg-Primary-50/30 p-4 rounded-sm border border-Primary-50 mb-6">
                        <p class="text-body-l font-bold text-Primary-800 m-0">Cara kerja:</p>
                        <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                          <li>a=2, r=3, n=7</li>
                          <li>S₇ = 2(3⁷-1)/(3-1) = 2186</li>
                        </ul>
                        <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, S₇ = 2.186</p>
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
        title: "Video Pembahasan: Barisan Geometri 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Y-idUbRsuBQ",
        description: "Dasar-dasar barisan dan deret geometri.",
      },
      {
        title: "Video Pembahasan: Barisan Geometri 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/WXUgIQODZcA",
        description: "Pembahasan soal-soal variatif barisan geometri.",
      },
      {
        title: "Kuis: Barisan dan Deret Geometri",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Diketahui barisan 5, 15, 45, 135. Jika S4=200, rasionya?",
            options: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "6" },
              { id: "e", text: "7" },
            ],
            correctAnswer: "a",
            explanation: "r = 15/5 = 3. Cek S4: 5+15+45+135=200.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "3, 6, 12, 24... Pernyataan benar?\n(1) U6=96\n(2) r=2\n(3) S4=45\n(4) r=3",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "a",
            explanation:
              "a=3, r=2. (1) Benar. (2) Benar. (3) Benar. (4) Salah.",
            points: 6,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Bakteri 100, 200, 400, 800... Pernyataan benar?\n(1) S5=3100\n(2) S3=700\n(3) Geometri\n(4) U5 > S3",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua benar" },
            ],
            correctAnswer: "e",
            explanation:
              "a=100, r=2. (1) S5=100(31)=3100. (2) S3=700. (3) Benar. (4) U5=1600 > 700.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Benda 4, 12, 36... Pernyataan benar?\n(1) r=4\n(2) U5=243\n(3) S4=140\n(4) U7=S5",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "e",
            explanation: "a=4, r=3. Semua opsi salah.",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question: "Tali 1, 2, 4, 8... Berapa S7? (r=2)",
            options: [
              { id: "a", text: "125" },
              { id: "b", text: "126" },
              { id: "c", text: "127" },
              { id: "d", text: "128" },
              { id: "e", text: "129" },
            ],
            correctAnswer: "c",
            explanation: "S7 = 1(2⁷-1) = 127.",
            points: 6,
          },
          {
            id: "q6",
            type: "matrix",
            context: "Barisan geometri a=6, r=3.",
            question: "Benar atau Salah?",
            rows: [
              { id: "r1", text: "U4 = 162" },
              { id: "r2", text: "Jika r=2, U3=24" },
              { id: "r3", text: "Bukan geometri" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: { r1: "true", r2: "true", r3: "false" },
            explanation: "U4=162. r=2 => U3=24. Geometri.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Pohon 2, 4, 8... Pernyataan benar?\n(1) U7=74\n(2) r=2\n(3) S5=31\n(4) U5=32",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "c",
            explanation: "a=2, r=2. (2) Benar. (4) Benar.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Barisan a=4, r=2. Pernyataan benar?\n(1) S6=127\n(2) U6=256\n(3) r=3 => U6=729\n(4) r=1/2 => U6 < 4",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua benar" },
            ],
            correctAnswer: "d",
            explanation: "a=4, r=2. (4) Benar, U6=1/8.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "1, 1/2, 1/4, 1/8... Berapa U7?",
            options: [
              { id: "a", text: "1/16" },
              { id: "b", text: "1/32" },
              { id: "c", text: "1/64" },
              { id: "d", text: "1/128" },
              { id: "e", text: "1/296" },
            ],
            correctAnswer: "c",
            explanation: "U7 = 1(1/2)⁶ = 1/64.",
            points: 6,
          },
          {
            id: "q10",
            type: "short-answer",
            context: "a=9, r=3.",
            question: "U4 + U5 + U6?",
            correctAnswer: "3159",
            explanation: "243 + 729 + 2187 = 3159.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            question: "Truk 10, 30, 90... Jika S4=400, rasio?",
            options: [
              { id: "a", text: "3" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "13" },
              { id: "e", text: "18" },
            ],
            correctAnswer: "a",
            explanation: "S4 = 10+30+90+270=400. r=3.",
            points: 6,
          },
          {
            id: "q12",
            type: "multiple-choice",
            question: "2, 8, 32, 128... Nilai U7+S4?",
            options: [
              { id: "a", text: "6.218" },
              { id: "b", text: "7.583" },
              { id: "c", text: "8.362" },
              { id: "d", text: "9.268" },
              { id: "e", text: "10.674" },
            ],
            correctAnswer: "c",
            explanation: "U7=8192, S4=170. Total=8362.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            question:
              "3, 9, 27... Pernyataan benar?\n(1) r=3\n(2) U5=243\n(3) S4=120\n(4) S4=100",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "a",
            explanation: "a=3, r=3. (1), (2), (3) benar.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            question:
              "2, 10, 50, 250... Pernyataan benar?\n(1) U5=1200\n(2) S3=60\n(3) r=10\n(4) S5 > U10",
            options: [
              { id: "a", text: "(1), (2), dan (3) saja" },
              { id: "b", text: "(1) dan (3) saja" },
              { id: "c", text: "(2) dan (4) saja" },
              { id: "d", text: "Hanya (4)" },
              { id: "e", text: "Semua salah" },
            ],
            correctAnswer: "e",
            explanation: "a=2, r=5. Semua opsi salah.",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            question: "320, 160, 80, [X], 20, 10, 5. Berapa X?",
            options: [
              { id: "a", text: "30" },
              { id: "b", text: "40" },
              { id: "c", text: "50" },
              { id: "d", text: "60" },
              { id: "e", text: "70" },
            ],
            correctAnswer: "b",
            explanation: "r=1/2. 80/2 = 40.",
            points: 7,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Barisan Bilangan",
      description: "Materi Barisan dan Deret Bilangan Geometri.",
      subcategory: "Penalaran Aritmatika",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module Seeded Successfully: Barisan Bilangan");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedBarisanBilangan();
