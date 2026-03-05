const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedSifatHimpunanPKPM = async () => {
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

    const targetId = "sifat-himpunan";

    const stepsData = [
      {
        title: "Materi: Sifat Himpunan",
        type: "reading",
        status: "active",
        description:
          "Definisi himpunan, operasi dasar himpunan, dan sifat-sifat operasi himpunan.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Apa itu Himpunan?</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-3">
              Himpunan adalah sekumpulan objek yang didefinisikan dengan jelas sehingga tidak menimbulkan keraguan tentang siapa saja anggotanya.
            </p>
            <p class="text-body-l text-Grayscale-900 mb-2"><strong>Contoh himpunan:</strong></p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800">
              <li>Himpunan bilangan genap: {2,4,6,8,...}</li>
              <li>Himpunan planet di Tata Surya</li>
            </ul>
            <p class="text-body-l text-Grayscale-900 mt-3 mb-2"><strong>Contoh bukan himpunan:</strong></p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800">
              <li>"Himpunan buah-buahan yang lezat"</li>
              <li>"Himpunan siswa yang pandai"</li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">2. Notasi dan Keanggotaan</h3>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1">
              <li>Simbol anggota: ∈</li>
              <li>Simbol bukan anggota: ∉</li>
              <li>Contoh: 4 ∈ {2,4,6,8} dan 5 ∉ {2,4,6,8}</li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">3. Jenis Himpunan Penting</h3>
            <div class="space-y-3 text-body-l text-Grayscale-800">
              <p><strong>Himpunan Bagian (Subset):</strong> A ⊆ B jika semua anggota A ada di B.</p>
              <p><strong>Himpunan Bagian Sejati:</strong> A ⊂ B jika A ⊆ B dan A ≠ B.</p>
              <p><strong>Superset:</strong> B ⊇ A jika A adalah himpunan bagian dari B.</p>
              <p><strong>Himpunan Kosong:</strong> ∅, tidak memiliki anggota.</p>
              <p><strong>Himpunan Semesta:</strong> U, himpunan yang mencakup seluruh elemen pada konteks pembahasan.</p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">4. Operasi Dasar pada Himpunan</h3>
            <div class="space-y-4 text-body-l text-Grayscale-800">
              <p><strong>Gabungan (A ∪ B):</strong> semua elemen yang ada di A atau B.</p>
              <p><strong>Irisan (A ∩ B):</strong> elemen yang sama-sama ada di A dan B.</p>
              <p><strong>Selisih (A − B):</strong> elemen di A tetapi tidak ada di B.</p>
              <p><strong>Komplemen (A^c):</strong> elemen di semesta U yang tidak ada di A.</p>
            </div>
          </section>

          <section>
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">5. Sifat-Sifat Operasi Himpunan</h3>
            <div class="space-y-4 text-body-l text-Grayscale-800">
              <p><strong>Komutatif:</strong> A ∪ B = B ∪ A, A ∩ B = B ∩ A</p>
              <p><strong>Asosiatif:</strong> (A ∪ B) ∪ C = A ∪ (B ∪ C), (A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
              <p><strong>Distributif:</strong> A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C), A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
              <p><strong>Idempoten:</strong> A ∪ A = A, A ∩ A = A</p>
              <p><strong>Hukum De Morgan:</strong> (A ∪ B)^c = A^c ∩ B^c, (A ∩ B)^c = A^c ∪ B^c</p>
            </div>
          </section>
        `,
      },
      {
        title: "Video: Sifat Himpunan (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/FlLP7o7YL7s",
        description: "Pembahasan dasar konsep himpunan dan operasinya.",
      },
      {
        title: "Video: Sifat Himpunan (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/n9sUVzxdhhk",
        description: "Latihan dan pembahasan soal sifat-sifat himpunan.",
      },
      {
        title: "Kuis Sifat Himpunan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Diberikan A={2,4,6,8} dan B={4,8,12,16}. Berapakah A∩B?",
            options: [
              { id: "a", text: "{2,6}" },
              { id: "b", text: "{4,8}" },
              { id: "c", text: "{4,6}" },
              { id: "d", text: "{6,8}" },
              { id: "e", text: "{2,4,8}" },
            ],
            correctAnswer: "b",
            explanation: "Irisan adalah elemen yang sama di kedua himpunan: {4,8}.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "A={1,2,3,4,5}, B={4,5,6,7,8}. Jika C=A∪B dan D=A−B, banyak elemen C∩D adalah ...",
            options: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" },
              { id: "e", text: "5" },
            ],
            correctAnswer: "c",
            explanation: "D={1,2,3}. Karena D subset dari C, maka C∩D=D, jumlahnya 3.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "A={x∈Z|-3≤x≤3}, B={x∈Z|x genap, -4≤x≤4}, C={x∈Z|x>0}. Banyak elemen (A∩B)∪C adalah ...",
            options: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
              { id: "e", text: "9" },
            ],
            correctAnswer: "e",
            explanation:
              "A∩B={-2,0,2}. C={1,2,3,...}. Dalam konteks bilangan di rentang A/B yang relevan menghasilkan 9 elemen unik hingga 4.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "A={x∈Z|x^2<16}, B={x∈Z|x ganjil}, C={x∈Z|-3≤x≤3}. Banyak elemen (A∩B)−C adalah ...",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "a",
            explanation:
              "A={-3,-2,-1,0,1,2,3}, A∩B={-3,-1,1,3}, semuanya ada di C, jadi selisihnya kosong.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "X={y∈Z|y=2x+1, -4≤x≤3}. Pernyataan benar adalah ...",
            options: [
              { id: "a", text: "1 dan 3 benar" },
              { id: "b", text: "1, 3, dan 4 benar" },
              { id: "c", text: "2 dan 5 benar" },
              { id: "d", text: "1, 3, 4, dan 5 benar" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "e",
            explanation:
              "X berisi bilangan ganjil dari -7 sampai 7, berjumlah 8, tanpa irisan dengan bilangan genap.",
            points: 10,
          },
          {
            id: "q6",
            type: "short-answer",
            question:
              "Kasus tiket M, B, H: total 100 orang, 40 hanya H, 30 menerima B, 20 menerima M, M subset B, dan H tidak beririsan dengan M/B. Berapa orang menerima lebih dari satu jenis tiket?",
            correctAnswer: "20",
            explanation:
              "Karena M subset B, semua penerima M juga menerima B. Jadi yang menerima lebih dari satu tiket adalah M∩B = 20.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Jika M∩S={x,y}, M\\S={a,b,c}, S\\M={d,e}, pernyataan yang benar adalah ...",
            options: [
              { id: "a", text: "M∪S={a,b,c,d,e,x,y}" },
              { id: "b", text: "(M∩S)∪(M\\S)=M" },
              { id: "c", text: "M\\(M∩S)={a,b,c}" },
              { id: "d", text: "S\\(M∩S)={d,e}" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "e",
            explanation: "Keempat pernyataan merupakan identitas himpunan yang benar.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Survei O, S, B: O subset S, tidak ada irisan tiga, hanya S=10, S∩B=5, total S=20. Jumlah siswa yang hanya mengikuti olahraga adalah ...",
            options: [
              { id: "a", text: "3 siswa" },
              { id: "b", text: "5 siswa" },
              { id: "c", text: "7 siswa" },
              { id: "d", text: "10 siswa" },
              { id: "e", text: "Tidak cukup data" },
            ],
            correctAnswer: "b",
            explanation:
              "Total S = (hanya S) + (S∩B) + (O). Maka O = 20 - 10 - 5 = 5.",
            points: 10,
          },
          {
            id: "q9",
            type: "matrix",
            question:
              "Tentukan benar/salah untuk pernyataan berikut berdasarkan relasi himpunan A, B, C yang diberikan.",
            rows: [
              { id: "r1", text: "(A∩B)∪(B∩C)=C" },
              { id: "r2", text: "A∪B=C" },
              { id: "r3", text: "(A∪B)∩C=A∩C" },
              { id: "r4", text: "A∩B∩C=∅" },
              { id: "r5", text: "A∪B∪C=∅" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "false",
              r3: "false",
              r4: "false",
              r5: "false",
            },
            explanation:
              "Pernyataan-pernyataan tersebut tidak otomatis benar dari informasi yang diberikan.",
            points: 10,
          },
          {
            id: "q10",
            type: "short-answer",
            question:
              "Diketahui |A∪B|=60, |B∪C|=70, |A∪C|=80, |A∪B∪C|=100, |A∩B∩C|=15. Nilai |A∩B|+|B∩C|+|A∩C| adalah ...",
            correctAnswer: "125",
            explanation:
              "Gunakan identitas penjumlahan tiga himpunan untuk menurunkan jumlah irisan berpasangan.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Sifat Himpunan",
      description: "Materi konsep, operasi, dan sifat-sifat himpunan.",
      subcategory: "Himpunan",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module seeded successfully: Sifat Himpunan");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedSifatHimpunanPKPM();
