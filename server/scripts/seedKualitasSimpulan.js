const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKualitasSimpulan = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. Find 'Penalaran Umum' Course
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    // 2. Define the Module Data
    const targetId = "kualitas-simpulan";

    const stepsData = [
      {
        title: "Materi: Kualitas Simpulan & Opini/Fakta",
        type: "reading",
        status: "active",
        description: "Materi Bacaan",
        content: `
      <section class="mb-12">
        <h4 class="text-h4 font-heading text-Primary-800 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Kualitas Simpulan?</h4>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-6">
          Kualitas simpulan adalah kemampuan untuk menarik kesimpulan yang didukung oleh seberapa tepat dan kuatnya bukti dari informasi yang ada. Dalam soal TPS, kita sering diminta menentukan apakah suatu pernyataan itu benar, salah, atau tidak relevan berdasarkan teks.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div class="bg-white border-2 border-Success-100 rounded-xl p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Success-500 mb-2 font-heading">Pasti Benar</h5>
            <p class="text-body-md text-Grayscale-700">Semua informasi pada kesimpulan sama dengan yang ada di teks.</p>
          </div>
          <div class="bg-white border-2 border-Error-100 rounded-xl p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Error-200 mb-2 font-heading">Pasti Salah</h5>
            <p class="text-body-md text-Grayscale-700">Semua informasi pada kesimpulan bertentangan/kebalikan dengan informasi teks.</p>
          </div>
          <div class="bg-white border-2 border-Secondary-100 rounded-xl p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Secondary-500 mb-2 font-heading">Mungkin Benar/Salah</h5>
            <p class="text-body-md text-Grayscale-700">Informasi teks benar, namun kesimpulan memiliki dua kemungkinan hasil.</p>
          </div>
          <div class="bg-white border-2 border-Grayscale-200 rounded-xl p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Grayscale-600 mb-2 font-heading">Tidak Relevan</h5>
            <p class="text-body-md text-Grayscale-700">Informasi cukup, tapi simpulan membahas hal di luar topik pembahasan.</p>
          </div>
          <div class="bg-white border-2 border-Grayscale-200 rounded-xl p-6 shadow-sm overflow-hidden border-dashed">
            <h5 class="text-h5 font-bold text-Grayscale-500 mb-2 font-heading">Informasi Tidak Cukup</h5>
            <p class="text-body-md text-Grayscale-700">Teks kekurangan premis sehingga simpulan tidak dapat dinilai.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h4 class="text-h4 font-heading text-Primary-800 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Analisis Kasus (Contoh Soal)</h4>
        <div class="bg-Primary-50 rounded-xl p-8 border border-Primary-100 mb-8">
          <p class="italic text-body-md text-Primary-900 mb-4">"Sebuah survei dilakukan terhadap 100 siswa di sekolah A untuk mengetahui preferensi metode belajar. Sebanyak 70% siswa memilih metode diskusi kelompok, sementara 30% lainnya memilih metode ceramah. Alasan utama siswa memilih metode diatas adalah kenyamanan pribadi. Namun, survei tidak mencakup data dari sekolah lain."</p>
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-Grayscale-100">
            <div class="w-8 h-8 rounded-full bg-Success-100 flex items-center justify-center text-Success-500 font-bold shrink-0 shadow-sm">1</div>
            <div>
              <p class="font-bold text-body-md mb-1">Simpulan: Sebagian besar siswa di sekolah A lebih menyukai metode diskusi kelompok.</p>
              <p class="text-body-sm text-Grayscale-600"><span class="text-Success-500 font-bold">Pasti Benar.</span> 70% > 50% (mayoritas).</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-Grayscale-100">
            <div class="w-8 h-8 rounded-full bg-Grayscale-100 flex items-center justify-center text-Grayscale-500 font-bold shrink-0 shadow-sm">2</div>
            <div>
              <p class="font-bold text-body-md mb-1">Simpulan: Metode diskusi kelompok adalah metode paling efektif untuk meningkatkan pemahaman.</p>
              <p class="text-body-sm text-Grayscale-600"><span class="text-Grayscale-500 font-bold">Informasi Tidak Cukup.</span> Teks membahas preferensi, bukan efektivitas.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-Grayscale-100">
            <div class="w-8 h-8 rounded-full bg-Error-100 flex items-center justify-center text-Error-200 font-bold shrink-0 shadow-sm">3</div>
            <div>
              <p class="font-bold text-body-md mb-1">Simpulan: Seluruh siswa di sekolah A lebih menyukai metode diskusi kelompok.</p>
              <p class="text-body-sm text-Grayscale-600"><span class="text-Error-200 font-bold">Pasti Salah.</span> Karena 30% memilih ceramah.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h4 class="text-h4 font-heading text-Primary-800 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Opini, Fakta, dan Argumen</h4>
        <div class="overflow-x-auto rounded-xl border-2 border-Primary-100 shadow-sm">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-Primary-50">
                <th class="p-4 font-heading border-b border-Primary-100 text-Primary-800">Definisi</th>
                <th class="p-4 font-heading border-b border-Primary-100 text-Primary-800">Fakta</th>
                <th class="p-4 font-heading border-b border-Primary-100 text-Primary-800">Opini</th>
                <th class="p-4 font-heading border-b border-Primary-100 text-Primary-800">Argumen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border-b border-Grayscale-100 font-bold text-Secondary-600 bg-Secondary-50/20">Definisi</td>
                <td class="p-4 border-b border-Grayscale-100 text-body-sm text-Grayscale-700">Informasi yang dapat dibuktikan kebenarannya secara objektif.</td>
                <td class="p-4 border-b border-Grayscale-100 text-body-sm text-Grayscale-700">Pandangan atau pendapat pribadi yang bersifat subjektif.</td>
                <td class="p-4 border-b border-Grayscale-100 text-body-sm text-Grayscale-700">Alasan yang digunakan untuk mendukung opini (Premis + Konklusi).</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-Primary-600 bg-Primary-50/20">Contoh</td>
                <td class="p-4 text-body-sm text-Grayscale-700">
                  <ul class="list-disc pl-4 space-y-1">
                    <li>Nusantara adalah ibu kota Indonesia.</li>
                    <li>Suhu rata-rata Semarang mencapai 30°C.</li>
                  </ul>
                </td>
                <td class="p-4 text-body-sm text-Grayscale-700">
                  <ul class="list-disc pl-4 space-y-1">
                    <li>Metode diskusi lebih efektif dari ceramah.</li>
                    <li>Membaca buku lebih menyenangkan dari TV.</li>
                  </ul>
                </td>
                <td class="p-4 text-body-sm text-Grayscale-700 italic">
                  "Tidur cukup meningkatkan konsentrasi. Siswa yang tidur cukup lebih mudah ingat pelajaran. Maka, siswa tidur cukup lebih berhasil."
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-12">
        <h4 class="text-h4 font-heading text-Primary-800 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Memperlemah vs Tidak Memperlemah</h4>
        <div class="flex flex-col md:flex-row gap-6 mb-8">
          <div class="flex-1 bg-white p-6 rounded-xl border-2 border-Error-50 shadow-sm">
            <h5 class="text-h5 font-bold text-Error-200 mb-3 font-heading">Memperlemah</h5>
            <p class="text-body-md text-Grayscale-700">Pernyataan yang menentang argumen atau memberikan data yang bertentangan.</p>
          </div>
          <div class="flex-1 bg-white p-6 rounded-xl border-2 border-Success-50 shadow-sm">
            <h5 class="text-h5 font-bold text-Success-500 mb-3 font-heading">Tidak Memperlemah</h5>
            <p class="text-body-md text-Grayscale-700">Pernyataan yang mendukung (memperkuat) atau bersifat netral terhadap argumen.</p>
          </div>
        </div>
      </section>
      `,
      },
      {
        title: "Video Pembelajaran: Kualitas Simpulan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Video pembahasan materi TPS TPS Penalaran Umum.",
      },
      {
        title: "Kuis: Kualitas Simpulan & Opini",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Sebuah survei dilakukan terhadap 100 siswa di sekolah A untuk mengetahui preferensi metode belajar. Sebanyak 70% siswa memilih metode diskusi kelompok, sementara 30% lainnya memilih metode ceramah. Alasan utama siswa memilih metode diatas adalah kenyamanan pribadi. Namun, survei tidak mencakup data dari sekolah lain.",
            question:
              "Manakah kualitas simpulan berikut yang benar untuk pernyataan: 'Sebagian besar siswa di sekolah A menyukai metode diskusi kelompok'?",
            options: [
              { id: "a", text: "Pasti Benar" },
              { id: "b", text: "Pasti Salah" },
              { id: "c", text: "Mungkin Benar" },
              { id: "d", text: "Tidak Relevan" },
              { id: "e", text: "Informasi Tidak Cukup" },
            ],
            correctAnswer: "a",
            explanation:
              "Karena 70% siswa memilih metode tersebut, yang berarti mayoritas atau sebagian besar.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Sebuah survei terhadap 100 siswa di sekolah A: 70% diskusi, 30% ceramah. Alasan: kenyamanan. Tidak ada data sekolah lain.",
            question:
              "Simpulan: 'Metode diskusi kelompok adalah metode paling efektif untuk meningkatkan pemahaman siswa.' Kualitas simpulan tersebut adalah...",
            options: [
              { id: "a", text: "Pasti Benar" },
              { id: "b", text: "Pasti Salah" },
              { id: "c", text: "Mungkin Benar" },
              { id: "d", text: "Informasi Tidak Cukup" },
              { id: "e", text: "Tidak Relevan" },
            ],
            correctAnswer: "d",
            explanation:
              "Teks hanya membahas preferensi dan kenyamanan, bukan efektivitas pembelajaran.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Teks: 'Jumlah anak yang menggunakan gadget saat ini semakin banyak. Psikolog menyebutkan gadget berlebihan mempengaruhi perkembangan sosial mereka.'",
            question:
              "Argumen: 'Penggunaan gadget berlebihan mengganggu perkembangan sosial anak.' Manakah pernyataan berikut yang TIDAK MEMPERLEMAH argumen tersebut?",
            options: [
              {
                id: "a",
                text: "Anak yang bermain gadget cenderung sulit berkomunikasi dengan teman sebaya.",
              },
              {
                id: "b",
                text: "Gadget dapat meningkatkan kemampuan kognitif dan akademik anak.",
              },
              {
                id: "c",
                text: "Program edukasi gadget terbukti efektif di beberapa sekolah.",
              },
              {
                id: "d",
                text: "Banyak orang tua yang mengawasi penggunaan gadget anak mereka.",
              },
              {
                id: "e",
                text: "Harga gadget semakin terjangkau bagi kalangan menengah ke bawah.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan (a) justru memperkuat atau mendukung argumen bahwa gadget mengganggu perkembangan sosial (komunikasi).",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context: "Analisis fakta dan opini.",
            question:
              "Manakah dari pernyataan berikut yang merupakan sebuah FAKTA?",
            options: [
              {
                id: "a",
                text: "Nusantara adalah ibu kota masa depan Indonesia.",
              },
              {
                id: "b",
                text: "Membaca buku jauh lebih seru daripada berolahraga.",
              },
              {
                id: "c",
                text: "Matematika adalah mata pelajaran tersulit di sekolah.",
              },
              {
                id: "d",
                text: "Kopi adalah minuman paling nikmat di pagi hari.",
              },
              {
                id: "e",
                text: "Cuaca hari ini sangat menyegarkan dan tenang.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan (a) adalah fakta administratif yang dapat dibuktikan, sedangkan pilihan lainnya bersifat subjektif (opini).",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Teks: '70% siswa sekolah A memilih diskusi, 30% ceramah. Alasan utama kenyamanan. Tidak ada data sekolah lain.'",
            question:
              "Kualitas untuk simpulan: 'Beberapa siswa di sekolah A menyukai metode belajar visual.'",
            options: [
              { id: "a", text: "Pasti Benar" },
              { id: "b", text: "Pasti Salah" },
              { id: "c", text: "Mungkin Benar" },
              { id: "d", text: "Tidak Relevan" },
              { id: "e", text: "Informasi Tidak Cukup" },
            ],
            correctAnswer: "d",
            explanation:
              "Teks sama sekali tidak membahas metode visual, sehingga simpulan ini tidak relevan dengan informasi yang diberikan.",
            points: 10,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kualitas Simpulan & Opini atau Fakta Teks";
      moduleDoc.description =
        "Materi mengenai penentuan kualitas kesimpulan, serta perbedaan opini dan fakta.";
      moduleDoc.subcategory = "Penalaran Deduktif";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kualitas Simpulan & Opini atau Fakta Teks",
        description:
          "Materi mengenai penentuan kualitas kesimpulan, serta perbedaan opini dan fakta.",
        subcategory: "Penalaran Deduktif",
        steps: stepsData,
        points_available: 100,
      });
    }

    console.log("Module Seeded Successfully:", moduleDoc.name);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedKualitasSimpulan();
