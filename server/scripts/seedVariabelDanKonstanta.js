const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");
const Module = require("../models/Module");

const seedVariabelDanKonstanta = async () => {
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

    const targetId = "variabel-dan-konstanta";

    const stepsData = [
      {
        title: "Materi: Variabel dan Konstanta",
        type: "reading",
        status: "active",
        description:
          "Pengertian variabel dan konstanta, contoh penggunaan dalam aljabar dan logaritma.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Pengertian Variabel dan Konstanta</h3>
            <div class="space-y-6">
              <div class="p-6 bg-white rounded-xl border border-Grayscale-200 shadow-sm">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-10 h-10 rounded-full bg-Primary-100 flex items-center justify-center flex-shrink-0">
                    <span class="text-Primary-600 font-bold">V</span>
                  </div>
                  <div>
                    <h4 class="text-h5 font-heading text-Primary-800 mb-1">Variabel</h4>
                    <p class="text-body-l text-Grayscale-900 leading-relaxed">
                      Simbol (biasanya huruf) yang mewakili nilai yang belum diketahui atau bisa berubah.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-Secondary-100 flex items-center justify-center flex-shrink-0">
                    <span class="text-Secondary-600 font-bold">K</span>
                  </div>
                  <div>
                    <h4 class="text-h5 font-heading text-Primary-800 mb-1">Konstanta</h4>
                    <p class="text-body-l text-Grayscale-900 leading-relaxed">
                      Nilai tetap yang tidak berubah dalam suatu persamaan atau rumus.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-8 bg-Primary-50/30 rounded-2xl border border-Primary-100 relative overflow-hidden text-center">
                <p class="text-body-md text-Primary-600 font-semibold mb-4 uppercase tracking-wider">Contoh Bentuk Aljabar</p>
                <div class="flex flex-col items-center justify-center space-y-4">
                  <div class="text-h1 font-heading text-Primary-900 mb-2">3<span class="text-Secondary-500">x</span> + 2</div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg">
                    <div class="p-3 bg-white rounded-lg border border-Primary-100">
                      <p class="text-Secondary-600 font-bold">x</p>
                      <p class="text-body-s text-Grayscale-600">Variabel</p>
                    </div>
                    <div class="p-3 bg-white rounded-lg border border-Primary-100">
                      <p class="text-Primary-700 font-bold">3x</p>
                      <p class="text-body-s text-Grayscale-600">Koefisien</p>
                    </div>
                    <div class="p-3 bg-white rounded-lg border border-Primary-100">
                      <p class="text-Primary-900 font-bold">2</p>
                      <p class="text-body-s text-Grayscale-600">Konstanta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">2. Hubungan Variabel dan Konstanta</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-h5 font-heading text-Primary-800 mb-4 flex items-center gap-2">
                  <span class="w-8 h-8 rounded-lg bg-Primary-200/50 flex items-center justify-center text-Primary-700 text-body-s">1</span>
                  Dalam Aljabar
                </h4>
                <div class="bg-white p-4 rounded-lg text-center mb-4 border border-Grayscale-100">
                  <p class="text-h4 font-heading text-Primary-900">ax + b = 0</p>
                </div>
                <div class="space-y-2 text-body-m text-Grayscale-700">
                  <p><span class="inline-block w-4 h-4 rounded-full bg-Primary-500 mr-2"></span><strong>a, b:</strong> Konstanta</p>
                  <p><span class="inline-block w-4 h-4 rounded-full bg-Secondary-500 mr-2"></span><strong>x:</strong> Variabel</p>
                </div>
              </div>
              
              <div class="p-6 bg-Grayscale-50 rounded-xl border border-Grayscale-200">
                <h4 class="text-h5 font-heading text-Primary-800 mb-4 flex items-center gap-2">
                  <span class="w-8 h-8 rounded-lg bg-Primary-200/50 flex items-center justify-center text-Primary-700 text-body-s">2</span>
                  Dalam Logaritma
                </h4>
                <div class="bg-white p-4 rounded-lg text-center mb-4 border border-Grayscale-100">
                  <p class="text-h4 font-heading text-Primary-900">y = log<sub>b</sub>(x)</p>
                </div>
                <div class="space-y-2 text-body-m text-Grayscale-700">
                  <p><span class="inline-block w-4 h-4 rounded-full bg-Primary-500 mr-2"></span><strong>b:</strong> Konstanta</p>
                   <p><span class="inline-block w-4 h-4 rounded-full bg-Secondary-500 mr-2"></span><strong>x:</strong> Variabel</p>
                  <p><span class="inline-block w-4 h-4 rounded-full bg-Accent-500 mr-2"></span><strong>y:</strong> Hasil</p>
                </div>
              </div>
            </div>
          </section>

          <section class="p-6 bg-Accent-50 rounded-2xl border-2 border-dashed border-Accent-200">
            <div class="flex items-center gap-3 mb-3 text-Accent-700 font-bold uppercase tracking-widest text-body-s">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Did You Know?
            </div>
            <p class="text-body-l text-Accent-900 leading-relaxed italic">
              "Huruf <strong>x</strong> sering dipakai sebagai variabel karena dipopulerkan oleh matematikawan Prancis, <strong>Ren\u00e9 Descartes</strong>!"
            </p>
          </section>
        `,
      },
      {
        title: "Video 1: Memahami Variabel dan Konstanta",
        type: "video",
        status: "active",
        description: "Penjelasan mendalam mengenai variabel dan konstanta.",
        videoUrl: "https://www.youtube.com/watch?v=t338145FJKk",
      },
      {
        title: "Video 2: Latihan Soal Variabel dan Konstanta",
        type: "video",
        status: "active",
        description: "Contoh pengerjaan soal terkait variabel dan konstanta.",
        videoUrl: "https://www.youtube.com/watch?v=oxcnqSiZpPw",
      },
      {
        title: "Kuis: Variabel dan Konstanta",
        type: "quiz",
        status: "active",
        description:
          "Uji pemahamanmu mengenai variabel dan konstanta dengan menjawab 10 pertanyaan berikut.",
        questions: [
          {
            id: 1,
            question: "Diketahui y = 2x + 5. Jika x = 3, maka nilai y adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "5" },
              { id: "B", text: "7" },
              { id: "C", text: "9" },
              { id: "D", text: "11" },
              { id: "E", text: "15" },
            ],
            correctAnswer: "D",
            explanation:
              "Substitusikan x = 3 ke dalam persamaan: y = 2(3) + 5 = 6 + 5 = 11.",
          },
          {
            id: 2,
            question:
              "Jika a = 3, b = 2, dan c = -1, maka nilai 2a - b + c adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "1" },
              { id: "B", text: "3" },
              { id: "C", text: "5" },
              { id: "D", text: "7" },
              { id: "E", text: "9" },
            ],
            correctAnswer: "B",
            explanation: "2a - b + c = 2(3) - 2 + (-1) = 6 - 2 - 1 = 3.",
          },
          {
            id: 3,
            question:
              "Persamaan p = 5m - n. Jika m = 3 dan n = -2, maka nilai p adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "10" },
              { id: "B", text: "13" },
              { id: "C", text: "15" },
              { id: "D", text: "17" },
              { id: "E", text: "18" },
            ],
            correctAnswer: "D",
            explanation: "p = 5(3) - (-2) = 15 + 2 = 17.",
          },
          {
            id: 4,
            question: "Jika f(x) = 2x\u00b2 + 3x - 4, maka nilai f(2) adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "10" },
              { id: "B", text: "12" },
              { id: "C", text: "14" },
              { id: "D", text: "16" },
              { id: "E", text: "18" },
            ],
            correctAnswer: "A",
            explanation:
              "f(2) = 2(2\u00b2) + 3(2) - 4 = 2(4) + 6 - 4 = 8 + 6 - 4 = 10.",
          },
          {
            id: 5,
            question: "Jika k = 3n + 4 dan n = 5, maka nilai k adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "15" },
              { id: "B", text: "16" },
              { id: "C", text: "17" },
              { id: "D", text: "18" },
              { id: "E", text: "19" },
            ],
            correctAnswer: "E",
            explanation: "k = 3(5) + 4 = 15 + 4 = 19.",
          },
          {
            id: 6,
            question:
              "Diketahui persamaan 2x + y = 10. Jika x = 3, maka nilai y adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "2" },
              { id: "B", text: "3" },
              { id: "C", text: "4" },
              { id: "D", text: "5" },
              { id: "E", text: "6" },
            ],
            correctAnswer: "C",
            explanation: "2(3) + y = 10 -> 6 + y = 10 -> y = 10 - 6 = 4.",
          },
          {
            id: 7,
            question:
              "Persamaan x = 2m + 3n. Jika m = 4 dan n = 2, maka nilai x adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "10" },
              { id: "B", text: "12" },
              { id: "C", text: "14" },
              { id: "D", text: "16" },
              { id: "E", text: "18" },
            ],
            correctAnswer: "C",
            explanation: "x = 2(4) + 3(2) = 8 + 6 = 14.",
          },
          {
            id: 8,
            question:
              "Diketahui p = 3a + 2b - c. Jika a = 2, b = 4, dan c = 3, maka nilai p adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "9" },
              { id: "B", text: "11" },
              { id: "C", text: "13" },
              { id: "D", text: "15" },
              { id: "E", text: "17" },
            ],
            correctAnswer: "B",
            explanation: "p = 3(2) + 2(4) - 3 = 6 + 8 - 3 = 11.",
          },
          {
            id: 9,
            question:
              "Jika x\u00b2 - 4x + 3 = 0, salah satu nilai x yang memenuhi adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "1" },
              { id: "B", text: "2" },
              { id: "C", text: "3" },
              { id: "D", text: "-1" },
              { id: "E", text: "-3" },
            ],
            correctAnswer: "A",
            explanation:
              "x\u00b2 - 4x + 3 = 0 -> (x-1)(x-3) = 0. Maka x = 1 atau x = 3. Di antara pilihan, 1 dan 3 tersedia. Kita pilih A.",
          },
          {
            id: 10,
            question:
              "Diketahui y\u00b2 - 5y + 6 = 0. Salah satu nilai y yang memenuhi adalah:",
            type: "multiple-choice",
            points: 10,
            options: [
              { id: "A", text: "2" },
              { id: "B", text: "3" },
              { id: "C", text: "5" },
              { id: "D", text: "6" },
              { id: "E", text: "-2" },
            ],
            correctAnswer: "A",
            explanation:
              "y\u00b2 - 5y + 6 = 0 -> (y-2)(y-3) = 0. Maka y = 2 atau y = 3. Di antara pilihan, 2 dan 3 tersedia. Kita pilih A.",
          },
        ],
      },
    ];

    const existingModule = await Module.findOne({ _id: targetId });

    if (existingModule) {
      await Module.updateOne(
        { _id: targetId },
        {
          name: "Variabel dan Konstanta",
          category: "Pengetahuan Kuantitatif dan Penalaran Matematika",
          subcategory: "Variabel dan Konstanta",
          steps: stepsData,
        },
      );
      console.log("Module 'Variabel dan Konstanta' updated.");
    } else {
      const newModule = new Module({
        _id: targetId,
        name: "Variabel dan Konstanta",
        category: "Pengetahuan Kuantitatif dan Penalaran Matematika",
        subcategory: "Variabel dan Konstanta",
        courseId: course._id,
        steps: stepsData,
      });
      await newModule.save();
      console.log("Module 'Variabel dan Konstanta' created.");
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedVariabelDanKonstanta();
