const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedHubunganAntarKalimat = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. Find Course
    const courseName = "Pengetahuan dan Pemahaman Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    // 2. Define the Module Data
    const targetId = "hubungan-antar-kalimat";

    const stepsData = [
      {
        title: "Materi: Hubungan Antar Kalimat",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang hubungan antar kalimat dan jenis-jenis konjungsi antarkalimat berdasarkan sifat hubungan dan fungsinya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Definisi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Hubungan Antar Kalimat?</h3>
              <p class="text-body-l leading-relaxed text-justify">
                Hubungan / konjungsi antarkalimat adalah konjungsi atau kata penghubung yang berfungsi untuk menghubungkan antar satu kalimat dengan kalimat lainnya dalam suatu paragraf sehingga menghasilkan makna tertentu. Umumnya, konjungsi antarkalimat selalu ditulis setelah tanda baca, seperti <strong>tanda titik, tanda seru, dan tanda tanya</strong>.
              </p>
            </section>

            <!-- Jenis-Jenis -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Konjungsi Antarkalimat Berdasarkan Sifat Hubungan & Fungsinya</h3>

              <!-- 1. Penegasan / Konsesif -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">1. Penegasan / Konsesif</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang berfungsi untuk menyatakan pertentangan dengan yang dinyatakan.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">biarpun demikian/begitu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">sekalipun demikian/begitu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">walaupun demikian/begitu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">meskipun demikian/begitu</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2. Perurutan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">2. Perurutan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang menyatakan urutan atau lanjutan dalam suatu peristiwa atau keadaan pada kalimat.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">sesudah itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">setelah itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">selanjutnya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 3. Penambahan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">3. Penambahan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk menambahkan hal, atau keadaan lain di luar dari kalimat yang telah dinyatakan sebelumnya.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">tambahan pula</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">lagi pula</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">selain itu</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 4. Pertentangan -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">4. Pertentangan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan jika kamu ingin menyatakan pertentangan dengan keadaan sebelumnya.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">sebaliknya</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">namun</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">akan tetapi</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 5. Kebalikan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">5. Kebalikan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk menyatakan kebalikan dari pernyataan sebelumnya.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">sebaliknya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 6. Pembenaran -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">6. Pembenaran</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk menyatakan keadaan yang sebenarnya dari suatu kejadian atau peristiwa.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">sesungguhnya</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">bahwasanya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 7. Penguatan -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">7. Penguatan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk memberi penguatan terhadap keadaan yang telah dinyatakan sebelumnya.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">malahan</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">bahkan</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 8. Konsekuensi -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">8. Konsekuensi</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk menyatakan konsekuensi atau risiko yang akan diterima dari keadaan sebelumnya.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">demikian</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">akhirnya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 9. Akibat -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">9. Akibat</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk menerangkan akibat yang diterima dari suatu kejadian.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">oleh sebab itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">oleh karena itu</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 10. Waktu -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">10. Waktu</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata hubung yang digunakan untuk menyatakan hubungan waktu dengan dua hal atau peristiwa yang terjadi.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh konjungsi:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">sebelum itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">setelah itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">sesudah itu</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Hubungan Antar Kalimat",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/nGKvxaUMVgc",
        description:
          "Video pembelajaran tentang hubungan antar kalimat dan konjungsi antarkalimat.",
      },
      {
        title: "Kuis Hubungan Antar Kalimat",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Konjungsi antarkalimat memiliki berbagai jenis berdasarkan sifat hubungan dan fungsinya.",
            question: "Apa yang dimaksud dengan konjungsi antarkalimat?",
            options: [
              {
                id: "a",
                text: "Kata penghubung yang menghubungkan antarkata dalam satu kalimat",
              },
              {
                id: "b",
                text: "Kata penghubung yang menghubungkan antar satu kalimat dengan kalimat lainnya dalam suatu paragraf",
              },
              {
                id: "c",
                text: "Kata penghubung yang menghubungkan antarparagraf",
              },
              {
                id: "d",
                text: "Kata penghubung yang menghubungkan subjek dan predikat",
              },
              {
                id: "e",
                text: "Kata penghubung yang menghubungkan dua teks yang berbeda",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Konjungsi antarkalimat adalah kata penghubung yang berfungsi untuk menghubungkan antar satu kalimat dengan kalimat lainnya dalam suatu paragraf sehingga menghasilkan makna tertentu.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Konjungsi antarkalimat selalu ditulis setelah tanda baca tertentu.",
            question:
              "Konjungsi antarkalimat umumnya ditulis setelah tanda baca apa?",
            options: [
              { id: "a", text: "Tanda koma dan tanda titik dua" },
              { id: "b", text: "Tanda kurung dan tanda petik" },
              { id: "c", text: "Tanda titik, tanda seru, dan tanda tanya" },
              { id: "d", text: "Tanda hubung dan tanda pisah" },
              { id: "e", text: "Tanda koma saja" },
            ],
            correctAnswer: "c",
            explanation:
              "Konjungsi antarkalimat selalu ditulis setelah tanda baca, seperti tanda titik, tanda seru, dan tanda tanya.",
            points: 6,
          },
          {
            id: "q3",
            type: "matrix",
            context:
              "Konjungsi antarkalimat memiliki berbagai jenis berdasarkan fungsinya.",
            question:
              "Tentukan konjungsi berikut termasuk jenis yang tepat (Benar/Salah):",
            rows: [
              { id: "r1", text: "'Selanjutnya' termasuk konjungsi perurutan" },
              { id: "r2", text: "'Bahkan' termasuk konjungsi penambahan" },
              { id: "r3", text: "'Oleh karena itu' termasuk konjungsi akibat" },
              { id: "r4", text: "'Namun' termasuk konjungsi pertentangan" },
              {
                id: "r5",
                text: "'Sesungguhnya' termasuk konjungsi pembenaran",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "true",
              r4: "true",
              r5: "true",
            },
            explanation:
              "'Bahkan' termasuk konjungsi penguatan, bukan penambahan. Contoh konjungsi penambahan adalah: tambahan pula, lagi pula, dan selain itu.",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Andi sudah belajar dengan giat untuk menghadapi ujian. Walaupun demikian, ia tetap merasa gugup saat memasuki ruang ujian.",
            question:
              "Konjungsi 'Walaupun demikian' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Pertentangan" },
              { id: "b", text: "Perurutan" },
              { id: "c", text: "Penegasan / konsesif" },
              { id: "d", text: "Penambahan" },
              { id: "e", text: "Kebalikan" },
            ],
            correctAnswer: "c",
            explanation:
              "'Walaupun demikian' merupakan konjungsi penegasan/konsesif, yaitu kata hubung yang berfungsi untuk menyatakan pertentangan dengan yang dinyatakan sebelumnya.",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Pertama, cuci beras hingga bersih. Setelah itu, masukkan beras ke dalam panci dan tambahkan air secukupnya.",
            question:
              "Konjungsi 'Setelah itu' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Penambahan" },
              { id: "b", text: "Perurutan" },
              { id: "c", text: "Waktu" },
              { id: "d", text: "Akibat" },
              { id: "e", text: "Konsekuensi" },
            ],
            correctAnswer: "b",
            explanation:
              "'Setelah itu' merupakan konjungsi perurutan, yaitu kata hubung yang menyatakan urutan atau lanjutan dalam suatu peristiwa atau keadaan pada kalimat.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Ia sudah berusaha semaksimal mungkin dalam pertandingan itu. Namun, hasil yang didapatkan tidak sesuai harapan.",
            question:
              "Konjungsi 'Namun' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Penegasan" },
              { id: "b", text: "Kebalikan" },
              { id: "c", text: "Pembenaran" },
              { id: "d", text: "Pertentangan" },
              { id: "e", text: "Penguatan" },
            ],
            correctAnswer: "d",
            explanation:
              "'Namun' merupakan konjungsi pertentangan, yaitu kata hubung yang digunakan untuk menyatakan pertentangan dengan keadaan sebelumnya.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Dia tidak hanya pandai dalam pelajaran matematika. Bahkan, dia juga menguasai beberapa bahasa asing.",
            question:
              "Konjungsi 'Bahkan' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Penambahan" },
              { id: "b", text: "Perurutan" },
              { id: "c", text: "Penguatan" },
              { id: "d", text: "Pembenaran" },
              { id: "e", text: "Konsekuensi" },
            ],
            correctAnswer: "c",
            explanation:
              "'Bahkan' merupakan konjungsi penguatan, yaitu kata hubung yang digunakan untuk memberi penguatan terhadap keadaan yang telah dinyatakan sebelumnya.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Banyak warga yang membuang sampah sembarangan di sungai. Oleh karena itu, sungai menjadi tercemar dan menyebabkan banjir.",
            question:
              "Konjungsi 'Oleh karena itu' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Konsekuensi" },
              { id: "b", text: "Pertentangan" },
              { id: "c", text: "Akibat" },
              { id: "d", text: "Pembenaran" },
              { id: "e", text: "Penegasan" },
            ],
            correctAnswer: "c",
            explanation:
              "'Oleh karena itu' merupakan konjungsi akibat, yaitu kata hubung yang digunakan untuk menerangkan akibat yang diterima dari suatu kejadian.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Banyak orang mengira bahwa dia tidak mampu menyelesaikan tugas itu. Sesungguhnya, dia sudah menyelesaikan semuanya sejak minggu lalu.",
            question:
              "Konjungsi 'Sesungguhnya' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Penguatan" },
              { id: "b", text: "Pembenaran" },
              { id: "c", text: "Penegasan" },
              { id: "d", text: "Pertentangan" },
              { id: "e", text: "Kebalikan" },
            ],
            correctAnswer: "b",
            explanation:
              "'Sesungguhnya' merupakan konjungsi pembenaran, yaitu kata hubung yang digunakan untuk menyatakan keadaan yang sebenarnya dari suatu kejadian atau peristiwa.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Konjungsi antarkalimat memiliki berbagai jenis berdasarkan fungsinya.",
            question:
              "Manakah yang merupakan contoh konjungsi antarkalimat yang menyatakan <b>penambahan</b>?",
            options: [
              { id: "a", text: "sebaliknya" },
              { id: "b", text: "oleh karena itu" },
              { id: "c", text: "selain itu" },
              { id: "d", text: "bahkan" },
              { id: "e", text: "sesungguhnya" },
            ],
            correctAnswer: "c",
            explanation:
              "'Selain itu' merupakan konjungsi penambahan, yaitu kata hubung yang digunakan untuk menambahkan hal atau keadaan lain di luar dari kalimat yang telah dinyatakan sebelumnya.",
            points: 7,
          },
          {
            id: "q11",
            type: "matrix",
            context:
              "Konjungsi antarkalimat memiliki berbagai jenis berdasarkan fungsinya.",
            question:
              "Tentukan konjungsi berikut termasuk konjungsi akibat (Benar/Salah):",
            rows: [
              { id: "r1", text: "Oleh sebab itu" },
              { id: "r2", text: "Selanjutnya" },
              { id: "r3", text: "Oleh karena itu" },
              { id: "r4", text: "Demikian" },
              { id: "r5", text: "Akan tetapi" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "true",
              r4: "false",
              r5: "false",
            },
            explanation:
              "Konjungsi akibat meliputi: oleh sebab itu dan oleh karena itu. 'Selanjutnya' termasuk perurutan, 'demikian' termasuk konsekuensi, dan 'akan tetapi' termasuk pertentangan.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Hujan deras mengguyur kota sejak pagi. Selain itu, angin kencang juga melanda beberapa wilayah di sekitar kota.",
            question:
              "Konjungsi 'Selain itu' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Perurutan" },
              { id: "b", text: "Pertentangan" },
              { id: "c", text: "Penambahan" },
              { id: "d", text: "Akibat" },
              { id: "e", text: "Penguatan" },
            ],
            correctAnswer: "c",
            explanation:
              "'Selain itu' merupakan konjungsi penambahan, yaitu kata hubung yang digunakan untuk menambahkan informasi lain di luar dari kalimat yang telah dinyatakan sebelumnya.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Semua orang mengira dia akan gagal dalam kompetisi itu. Sebaliknya, dia justru berhasil meraih juara pertama.",
            question:
              "Konjungsi 'Sebaliknya' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Pertentangan" },
              { id: "b", text: "Kebalikan" },
              { id: "c", text: "Pembenaran" },
              { id: "d", text: "Penegasan" },
              { id: "e", text: "Konsekuensi" },
            ],
            correctAnswer: "b",
            explanation:
              "'Sebaliknya' merupakan konjungsi kebalikan, yaitu kata hubung yang digunakan untuk menyatakan kebalikan dari pernyataan sebelumnya.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Para siswa tidak disiplin dalam mengikuti pelajaran. Akhirnya, nilai rata-rata kelas mereka menurun drastis.",
            question:
              "Konjungsi 'Akhirnya' pada kalimat di atas merupakan konjungsi antarkalimat jenis apa?",
            options: [
              { id: "a", text: "Akibat" },
              { id: "b", text: "Perurutan" },
              { id: "c", text: "Konsekuensi" },
              { id: "d", text: "Penguatan" },
              { id: "e", text: "Waktu" },
            ],
            correctAnswer: "c",
            explanation:
              "'Akhirnya' merupakan konjungsi konsekuensi, yaitu kata hubung yang digunakan untuk menyatakan konsekuensi atau risiko yang akan diterima dari keadaan sebelumnya.",
            points: 7,
          },
          {
            id: "q15",
            type: "matrix",
            context:
              "Konjungsi antarkalimat memiliki berbagai jenis berdasarkan fungsinya.",
            question:
              "Berikut ini adalah konjungsi antarkalimat yang menyatakan penegasan/konsesif (Tentukan Benar/Salah)",
            rows: [
              { id: "r1", text: "Akan tetapi" },
              { id: "r2", text: "Sekalipun begitu" },
              { id: "r3", text: "Walaupun demikian" },
              { id: "r4", text: "Lagi pula" },
              { id: "r5", text: "Sesudah itu" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "true",
              r4: "false",
              r5: "false",
            },
            explanation:
              "'Sekalipun begitu' dan 'Walaupun demikian' merupakan konjungsi penegasan/konsesif. 'Akan tetapi' termasuk pertentangan, 'Lagi pula' termasuk penambahan, dan 'Sesudah itu' termasuk perurutan.",
            points: 7,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Hubungan Antar Kalimat";
      moduleDoc.description =
        "Materi mengenai hubungan antar kalimat dan jenis-jenis konjungsi antarkalimat berdasarkan sifat hubungan dan fungsinya.";
      moduleDoc.subcategory = "Paragraf 2";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Hubungan Antar Kalimat",
        description:
          "Materi mengenai hubungan antar kalimat dan jenis-jenis konjungsi antarkalimat berdasarkan sifat hubungan dan fungsinya.",
        subcategory: "Paragraf 2",
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

seedHubunganAntarKalimat();
