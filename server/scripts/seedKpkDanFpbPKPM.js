const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedKpkDanFpbPKPM = async () => {
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

    const targetId = "kpk-dan-fpb";

    const stepsData = [
      {
        title: "Materi: KPK dan FPB",
        type: "reading",
        status: "active",
        description:
          "Pengertian FPB dan KPK, metode penentuan, contoh soal, serta pohon faktor.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian FPB</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              FPB adalah bilangan bulat positif terbesar yang dapat membagi dua atau lebih bilangan tanpa menyisakan sisa.
              FPB sering digunakan untuk menyederhanakan pecahan atau mencari jumlah maksimum pembagian suatu benda.
            </p>

            <h3 class="text-h3 font-heading text-Primary-900 mb-6 mt-8 border-l-4 border-Primary-500 pl-4 py-1">Pengertian KPK</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed">
              KPK adalah bilangan bulat positif terkecil yang dapat dibagi habis oleh dua atau lebih bilangan.
              KPK sering digunakan untuk menyamakan penyebut pada operasi pecahan atau menentukan waktu kejadian berulang.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan FPB dan KPK</h3>
            <div class="space-y-6 text-body-l text-Grayscale-800">
              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Cara Menentukan FPB</h4>
                <p class="font-semibold mb-1">Metode Faktor Prima</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Uraikan bilangan menjadi faktor prima.</li>
                  <li>Cari faktor yang sama dari masing-masing bilangan.</li>
                  <li>Kalikan faktor yang sama dengan pangkat terkecilnya.</li>
                </ul>
                <p class="font-semibold mb-1 mt-3">Metode Pengurangan atau Pembagian Berulang</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Kurangi bilangan terbesar dengan bilangan terkecil hingga sisanya 0, atau gunakan pembagian berulang untuk mencari sisa 0.</li>
                  <li>Bilangan terakhir yang tersisa adalah FPB.</li>
                </ul>
              </div>

              <div>
                <h4 class="text-h4 font-bold text-Primary-700 mb-2">Cara Menentukan KPK</h4>
                <p class="font-semibold mb-1">Metode Faktor Prima</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Uraikan bilangan menjadi faktor prima.</li>
                  <li>Kalikan semua faktor prima yang muncul dengan pangkat terbesar.</li>
                </ul>
                <p class="font-semibold mb-1 mt-3">Metode Kelipatan</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Tulis kelipatan dari setiap bilangan.</li>
                  <li>Cari bilangan terkecil yang sama di antara kelipatan tersebut.</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh FPB dan KPK</h3>
            <div class="space-y-5 text-body-l text-Grayscale-800">
              <p><strong>FPB dari 24 dan 36</strong><br/>
              24 = 2^4 x 3<br/>
              36 = 2^2 x 3^2<br/>
              Ambil faktor yang sama dengan pangkat terkecil: 2^2 dan 3.<br/>
              FPB = 2^2 x 3 = 12.</p>

              <p><strong>KPK dari 24 dan 36</strong><br/>
              24 = 2^4 x 3<br/>
              36 = 2^2 x 3^2<br/>
              Ambil semua faktor dengan pangkat terbesar: 2^4 dan 3^2.<br/>
              KPK = 2^4 x 3^2 = 144.</p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Perbedaan FPB dan KPK</h3>
            <div class="overflow-x-auto">
              <table class="w-full border border-Grayscale-300 text-body-l">
                <thead>
                  <tr class="bg-Primary-50">
                    <th class="border border-Grayscale-300 p-3 text-left">Aspek</th>
                    <th class="border border-Grayscale-300 p-3 text-left">FPB</th>
                    <th class="border border-Grayscale-300 p-3 text-left">KPK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-Grayscale-300 p-3">Definisi</td>
                    <td class="border border-Grayscale-300 p-3">Bilangan terbesar yang membagi habis bilangan</td>
                    <td class="border border-Grayscale-300 p-3">Bilangan terkecil yang dapat dibagi habis</td>
                  </tr>
                  <tr>
                    <td class="border border-Grayscale-300 p-3">Proses</td>
                    <td class="border border-Grayscale-300 p-3">Faktor yang sama dengan pangkat terkecil</td>
                    <td class="border border-Grayscale-300 p-3">Faktor yang muncul dengan pangkat terbesar</td>
                  </tr>
                  <tr>
                    <td class="border border-Grayscale-300 p-3">Penggunaan Umum</td>
                    <td class="border border-Grayscale-300 p-3">Penyederhanaan pecahan, pembagian maksimal</td>
                    <td class="border border-Grayscale-300 p-3">Penyamaan penyebut pecahan, siklus kejadian</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Pohon Faktor</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-3">
              Pohon faktor adalah cara memecah bilangan menjadi faktor primanya secara bertahap menggunakan cabang-cabang seperti struktur pohon.
              Metode ini mempermudah pemahaman tentang faktorisasi prima.
            </p>
            <p class="font-semibold text-body-l text-Grayscale-900 mb-2">Langkah-langkah</p>
            <ol class="list-decimal pl-6 space-y-1 text-body-l text-Grayscale-800">
              <li>Buat pohon faktor untuk setiap bilangan dengan memecahnya menjadi faktor prima.</li>
              <li>Tulis hasil faktorisasi prima untuk setiap bilangan.</li>
              <li>Untuk FPB: ambil faktor prima yang sama dengan pangkat terkecil.</li>
              <li>Untuk KPK: ambil semua faktor prima yang muncul dengan pangkat terbesar.</li>
            </ol>
            <div class="mt-4 text-body-l text-Grayscale-800">
              <p><strong>Contoh FPB dan KPK dari 36 dan 48:</strong></p>
              <p>36 = 2^2 x 3^2, 48 = 2^4 x 3</p>
              <p>FPB = 2^2 x 3 = 12</p>
              <p>KPK = 2^4 x 3^2 = 144</p>
            </div>
            <div class="mt-6 flex flex-col items-center">
              <p class="font-semibold text-body-l text-Primary-700 mb-3">Diagram Pohon Faktor 36</p>
              <svg width="220" height="190" viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram pohon faktor 36">
                <line x1="110" y1="30" x2="75" y2="60" stroke="#374151" stroke-width="2" />
                <line x1="110" y1="30" x2="145" y2="60" stroke="#374151" stroke-width="2" />
                <line x1="75" y1="70" x2="55" y2="102" stroke="#374151" stroke-width="2" />
                <line x1="75" y1="70" x2="95" y2="102" stroke="#374151" stroke-width="2" />
                <line x1="145" y1="70" x2="125" y2="102" stroke="#374151" stroke-width="2" />
                <line x1="145" y1="70" x2="165" y2="102" stroke="#374151" stroke-width="2" />

                <text x="110" y="25" text-anchor="middle" font-size="34" fill="#111827" font-weight="600">36</text>
                <text x="75" y="74" text-anchor="middle" font-size="34" fill="#111827">6</text>
                <text x="145" y="74" text-anchor="middle" font-size="34" fill="#111827">6</text>

                <circle cx="55" cy="115" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <circle cx="95" cy="115" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <circle cx="125" cy="115" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <circle cx="165" cy="115" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <text x="55" y="122" text-anchor="middle" font-size="28" fill="#111827">2</text>
                <text x="95" y="122" text-anchor="middle" font-size="28" fill="#111827">3</text>
                <text x="125" y="122" text-anchor="middle" font-size="28" fill="#111827">2</text>
                <text x="165" y="122" text-anchor="middle" font-size="28" fill="#111827">3</text>
              </svg>
            </div>
            <div class="mt-8 flex flex-col items-center">
              <p class="font-semibold text-body-l text-Primary-700 mb-3">Diagram Pohon Faktor 48</p>
              <svg width="220" height="250" viewBox="0 0 220 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram pohon faktor 48">
                <line x1="110" y1="30" x2="75" y2="62" stroke="#374151" stroke-width="2" />
                <line x1="110" y1="30" x2="145" y2="62" stroke="#374151" stroke-width="2" />
                <line x1="75" y1="72" x2="55" y2="104" stroke="#374151" stroke-width="2" />
                <line x1="75" y1="72" x2="95" y2="104" stroke="#374151" stroke-width="2" />
                <line x1="145" y1="72" x2="125" y2="104" stroke="#374151" stroke-width="2" />
                <line x1="145" y1="72" x2="165" y2="104" stroke="#374151" stroke-width="2" />
                <line x1="165" y1="115" x2="145" y2="147" stroke="#374151" stroke-width="2" />
                <line x1="165" y1="115" x2="185" y2="147" stroke="#374151" stroke-width="2" />

                <text x="110" y="25" text-anchor="middle" font-size="34" fill="#111827" font-weight="600">48</text>
                <text x="75" y="76" text-anchor="middle" font-size="34" fill="#111827">6</text>
                <text x="145" y="76" text-anchor="middle" font-size="34" fill="#111827">8</text>

                <circle cx="55" cy="117" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <circle cx="95" cy="117" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <circle cx="125" cy="117" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <text x="55" y="124" text-anchor="middle" font-size="28" fill="#111827">2</text>
                <text x="95" y="124" text-anchor="middle" font-size="28" fill="#111827">3</text>
                <text x="125" y="124" text-anchor="middle" font-size="28" fill="#111827">2</text>
                <text x="165" y="121" text-anchor="middle" font-size="34" fill="#111827">4</text>

                <circle cx="145" cy="160" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <circle cx="185" cy="160" r="16" fill="#ffffff" stroke="#a5b4fc" stroke-width="2" />
                <text x="145" y="167" text-anchor="middle" font-size="28" fill="#111827">2</text>
                <text x="185" y="167" text-anchor="middle" font-size="28" fill="#111827">2</text>
              </svg>
            </div>
          </section>
        `,
      },
      {
        title: "Video: KPK dan FPB",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/balLto5to0s",
        description: "Pembahasan konsep dan soal KPK serta FPB.",
      },
      {
        title: "Kuis KPK dan FPB",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "KPK dari 15 dan 20 adalah...",
            options: [
              { id: "a", text: "60" },
              { id: "b", text: "120" },
              { id: "c", text: "90" },
              { id: "d", text: "300" },
              { id: "e", text: "180" },
            ],
            correctAnswer: "a",
            explanation: "Kelipatan persekutuan terkecil 15 dan 20 adalah 60.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question: "Faktorisasi prima dari 60 adalah...",
            options: [
              { id: "a", text: "2² x 3 x 5" },
              { id: "b", text: "2³ x 3 x 5" },
              { id: "c", text: "2 x 3² x 5" },
              { id: "d", text: "2 x 3 x 5²" },
              { id: "e", text: "3² x 5" },
            ],
            correctAnswer: "a",
            explanation: "60 = 2 x 2 x 3 x 5 = 2² x 3 x 5.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question: "FPB dari 36 dan 48 adalah...",
            options: [
              { id: "a", text: "4" },
              { id: "b", text: "6" },
              { id: "c", text: "12" },
              { id: "d", text: "18" },
              { id: "e", text: "24" },
            ],
            correctAnswer: "c",
            explanation: "FPB(36,48)=12.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question: "Bilangan 84 memiliki faktor prima...",
            options: [
              { id: "a", text: "2, 3, 5" },
              { id: "b", text: "2, 3, 7" },
              { id: "c", text: "3, 5, 7" },
              { id: "d", text: "2, 5, 7" },
              { id: "e", text: "2, 3, 11" },
            ],
            correctAnswer: "b",
            explanation: "84 = 2² x 3 x 7, sehingga faktor primanya 2, 3, dan 7.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Dua bilangan yang FPB-nya adalah 4 dan KPK-nya adalah 36 adalah...",
            options: [
              { id: "a", text: "4 dan 36" },
              { id: "b", text: "12 dan 24" },
              { id: "c", text: "4 dan 12" },
              { id: "d", text: "6 dan 24" },
              { id: "e", text: "12 dan 36" },
            ],
            correctAnswer: "c",
            explanation: "FPB(4,12)=4 dan KPK(4,12)=12, opsi paling sesuai dari pilihan yang diberikan adalah c untuk FPB 4.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question: "FPB dari 18 dan 24 adalah 6?",
            options: [
              { id: "a", text: "Salah" },
              { id: "b", text: "Benar" },
              { id: "c", text: "Bisa Jadi" },
            ],
            correctAnswer: "b",
            explanation: "FPB(18,24)=6.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question: "KPK dari 9 dan 12 adalah 18.",
            options: [
              { id: "a", text: "Bisa Jadi" },
              { id: "b", text: "Benar" },
              { id: "c", text: "Salah" },
            ],
            correctAnswer: "c",
            explanation: "KPK(9,12)=36, bukan 18.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question: "Faktorisasi prima dari 45 adalah 3² x 5.",
            options: [
              { id: "a", text: "Salah" },
              { id: "b", text: "Benar" },
              { id: "c", text: "Bisa Jadi" },
            ],
            correctAnswer: "b",
            explanation: "45 = 3 x 3 x 5 = 3² x 5.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question: "FPB dari 20 dan 30 adalah 5.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Bisa Jadi" },
              { id: "c", text: "Salah" },
            ],
            correctAnswer: "c",
            explanation: "FPB(20,30)=10, bukan 5.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question: "KPK dari 8 dan 14 adalah 56.",
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
              { id: "c", text: "Bisa Jadi" },
            ],
            correctAnswer: "a",
            explanation: "8 = 2³ dan 14 = 2 x 7, jadi KPK = 2³ x 7 = 56.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "KPK dan FPB",
      description: "Materi konsep dan penerapan KPK serta FPB.",
      subcategory: "Bilangan",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: KPK dan FPB");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedKpkDanFpbPKPM();
