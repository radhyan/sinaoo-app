const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKataTidakBaku = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Pemahaman Bacaan dan Menulis";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "kata-tidak-baku";

    const stepsData = [
      {
        title: "Materi: Kata Tidak Baku",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian kata tidak baku, fungsi bahasa tidak baku, ciri-ciri kata tidak baku, faktor munculnya, serta trik membedakan kata baku dan tidak baku.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Kata Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Kata Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Kata Tidak Baku?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata tidak baku adalah kata yang <strong>tidak sesuai dengan kaidah bahasa Indonesia yang berlaku</strong>, yaitu tidak mengikuti Ejaan Bahasa Indonesia yang Disempurnakan (EYD) dan Kamus Besar Bahasa Indonesia (KBBI). Kata tidak baku umumnya digunakan dalam <strong>percakapan sehari-hari</strong> atau situasi informal.
                  </p>
                </div>
              </div>
            </section>

            <!-- Perbandingan Kata Baku vs Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Perbandingan Kata Baku dan Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Primary-600">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Kata Baku</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Kata Tidak Baku</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kata baku digunakan dalam situasi resmi dan formal</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kata tidak baku lebih sering digunakan dalam percakapan santai atau dalam kehidupan sehari-hari.</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Digunakan saat membuat laporan, surat resmi, karya tugas ilmiah atau surat lamaran pekerjaan</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Lebih sering digunakan dalam obrolan biasa dengan teman atau sekeluarga</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kata baku mengikuti aturan yang benar dalam bahasa Indonesia dan sering dipakai untuk hal yang lebih serius.</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kata-kata ini tidak mengikuti aturan resmi bahasa Indonesia</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- Fungsi Bahasa Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Fungsi Bahasa Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Menciptakan keakraban:</strong> Kata tidak baku membuat percakapan lebih santai dan akrab, sehingga cocok digunakan dalam komunikasi sehari-hari.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Digunakan dalam karya sastra:</strong> Cerpen, novel atau dialog dalam cerita sering menggunakan kata tidak baku agar terasa lebih alami dan <em>relatable</em>.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Tidak cocok untuk situasi formal:</strong> Kata tidak baku sebaiknya dihindari dalam ujian SNBT, dokumen resmi atau karya ilmiah agar komunikasi tetap sesuai kaidah bahasanya.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Ciri Bahasa Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri Bahasa Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Digunakan dalam bahasa sehari-hari:</strong> Kata tidak baku lebih santai dan sering dipakai dalam obrolan, misalnya "ngobrol" (tidak baku) dibanding berbicara (baku).</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Dipengaruhi oleh bahasa asing atau daerah:</strong> Beberapa kata mengalami perubahan karena pengaruh bahasa lain, misalnya kacau balau (dari bahasa daerah) atau nge-<em>print</em> (dari Bahasa Inggris).</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Dipengaruhi perkembangan zaman:</strong> Kata-kata baku muncul mengikuti tren seperti gabut (tidak baku) untuk menggambarkan kebosanan.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>4. Bentuknya mudah berubah:</strong> Kata tidak sering mengalami modifikasi seperti nggak, gak, atau ga yang semuanya berasal dari kata tidak.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>5. Artinya sama tapi terkesan berbeda:</strong> Kata tidak baku sering memiliki arti yang sama dengan kata baku, tetapi terdengar lebih sama, contohnya praktek (tidak baku) dan praktik (baku) sama-sama berarti pelaksanaan suatu teori.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Faktor Munculnya Bahasa Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Faktor Munculnya Bahasa Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Primary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Tidak tahu bentuk yang benar:</strong> Banyak orang menggunakan kata tidak baku karena tidak tahu cara penulisan yang sesuai KBBI, misalnya mereka mengira praktek benar padahal bakunya adalah praktik.</p>
                    </div>
                    <div class="bg-Primary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Tidak membiasakan diri untuk memperbaiki:</strong> Jika kesalahan terus dibiarkan, orang akan terbiasa menggunakan kata tidak baku tanpa berusaha mencari bentuk yang benar.</p>
                    </div>
                    <div class="bg-Primary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Terpengaruh lingkungan:</strong> Kalau kita sering mendengar teman atau orang disekitar kita menggunakan kata tidak baku, kita juga bisa ikut-ikutan menggunakan kata yang sama tanpa sadar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Trik Membedakan Kata Baku dan Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Trik Membedakan Kata Baku dan Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Cek KBBI:</strong> Sebelum SNBT untuk mencari tahu kata-kata yang sering membuat bingung dalam KBBI. Buat catatan kecil atau daftar kata yang kamu rasa perlu di ingat agar bisa menghindari kesalahan.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Latihan menulis dan membaca:</strong> Biasakan menulis dan membaca dengan menggunakan kata baku, terutama dalam latihan soal atau menulis esai. Ini membantu kamu lebih terbiasa dengan kata yang benar.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Perhatikan konteks dan gaya bahasa:</strong> Kalau kamu ragu kata baku dan tidak baku, lihat konteks soal yang lebih formal. Kalau terdengar serius, kemungkinan itu bukan baku.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>4. Pilih kata terdengar lebih serius dan formal:</strong> Pilih kata yang terdengar lebih tegas dan formal karena kata baku sering digunakan dalam konteks seperti ini, sementara kata tidak baku biasanya lebih ringan dan santai.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Contoh Kata Baku vs Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Kata Baku dan Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Primary-600">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Kata Baku ✅</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Kata Tidak Baku ❌</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Praktik</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Praktek</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Risiko</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Resiko</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Aktivitas</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Aktifitas</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Nasihat</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Nasehat</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Apotek</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Apotik</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Atlet</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Atlit</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kuitansi</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kwitansi</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Karier</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Karir</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Mengapa</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kenapa</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Menganalisis</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Menganalisa</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Kata Tidak Baku (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/-sQ83BYS4Ew",
        description:
          "Video pembelajaran tentang kata tidak baku bagian pertama.",
      },
      {
        title: "Video: Kata Tidak Baku (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/eD0AUU5j1do",
        description: "Video pembelajaran tentang kata tidak baku bagian kedua.",
      },
      {
        title: "Kuis Kata Tidak Baku",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question:
              "Manakah kalimat berikut yang menggunakan bahasa tidak baku?",
            options: [
              {
                id: "a",
                text: "Saya sudah memberitahukan hal tersebut kepada Anda.",
              },
              {
                id: "b",
                text: "Saya sudah ngasih tahu hal itu ke kamu.",
              },
              {
                id: "c",
                text: "Saya telah menginformasikan hal tersebut kepada Anda.",
              },
              {
                id: "d",
                text: "Saya sudah memberitahukan hal itu kepada Anda.",
              },
              {
                id: "e",
                text: "Saya telah memberi tahu hal tersebut kepada Anda.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Frasa 'ngasih tahu' merupakan ragam bahasa lisan/percakapan (informal). Bentuk bakunya adalah 'memberi tahu' atau 'memberitahukan'.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question:
              "Pilih kalimat yang tidak sesuai dengan kaidah bahasa baku.",
            options: [
              {
                id: "a",
                text: "Kami akan segera ngerjain tugas itu.",
              },
              {
                id: "b",
                text: "Kami akan segera melaksanakan tugas tersebut.",
              },
              {
                id: "c",
                text: "Kami akan segera menyelesaikan tugas tersebut.",
              },
              {
                id: "d",
                text: "Kami akan segera mengerjakan tugas itu.",
              },
              {
                id: "e",
                text: "Kami akan segera menyelesaikan tugas tersebut.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'ngerjain' mendapat pengaruh dialek percakapan dengan akhiran '-in'. Bentuk baku yang diakui dalam tata bahasa formal adalah 'mengerjakan'.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Manakah kalimat berikut yang menggunakan bahasa tidak baku?",
            options: [
              {
                id: "a",
                text: "Saya akan pergi ke pasar besok pagi.",
              },
              {
                id: "b",
                text: "Saya akan ke pasar besok pagi.",
              },
              {
                id: "c",
                text: "Saya akan pergi pasar besok pagi.",
              },
              {
                id: "d",
                text: "Saya akan ke pasar besok pagi.",
              },
              {
                id: "e",
                text: "Saya akan pergi ke pasar besok pagi.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat 'Saya akan pergi pasar...' tidak baku karena melesapkan (menghilangkan) kata depan 'ke' sebagai penunjuk arah tujuan. Sedangkan kalimat 'Saya akan ke pasar' (opsi B/D) masih tergolong baku dengan predikat yang dilesapkan namun arahnya jelas.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              "Pilih kalimat yang tidak sesuai dengan kaidah bahasa baku.",
            options: [
              {
                id: "a",
                text: "Kami akan segera melaksanakan tugas tersebut.",
              },
              {
                id: "b",
                text: "Kami akan segera ngerjain tugas itu.",
              },
              {
                id: "c",
                text: "Kami akan segera menyelesaikan tugas tersebut.",
              },
              {
                id: "d",
                text: "Kami akan segera mengerjakan tugas itu.",
              },
              {
                id: "e",
                text: "Kami akan segera menyelesaikan tugas tersebut.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Sama seperti pada soal nomor 2, penggunaan kata 'ngerjain' merupakan bentuk tidak baku dari 'mengerjakan'.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Manakah kalimat berikut yang menggunakan bahasa tidak baku?",
            options: [
              {
                id: "a",
                text: "Saya telah mengerjakan tugas tersebut dengan baik",
              },
              {
                id: "b",
                text: "Kita harus mematuhi peraturan yang berlaku.",
              },
              {
                id: "c",
                text: "Dia udah kasih tau aku tentang rencana itu.",
              },
              {
                id: "d",
                text: "Kami akan menghadiri rapat besok pagi.",
              },
              {
                id: "e",
                text: "Mereka sedang berdiskusi mengenai proyek baru.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'udah' dan 'kasih tau' adalah bentuk tidak baku. Bentuk baku dari kalimat tersebut seharusnya 'Dia sudah memberi tahu saya tentang rencana itu.'",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Manakah kalimat berikut yang menggunakan bahasa tidak baku?",
            options: [
              {
                id: "a",
                text: "Saya telah menyelesaikan tugas sekolah.",
              },
              {
                id: "b",
                text: "Kita bakal pergi ke rumah nenek besok.",
              },
              {
                id: "c",
                text: "Mereka sedang berdiskusi di kelas.",
              },
              {
                id: "d",
                text: "Kami akan menghadiri acara resmi.",
              },
              {
                id: "e",
                text: "Dia sudah membaca buku itu.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'bakal' merupakan ragam bahasa lisan atau cakapan informal. Dalam bahasa Indonesia baku, kata yang seharusnya digunakan adalah 'akan'.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              "Manakah kalimat berikut yang menggunakan bahasa tidak baku dalam kehidupan sehari-hari?",
            options: [
              {
                id: "a",
                text: "Saya sudah makan siang.",
              },
              {
                id: "b",
                text: "Kami akan berangkat ke kantor pagi ini.",
              },
              {
                id: "c",
                text: "Dia lagi nonton film di rumah.",
              },
              {
                id: "d",
                text: "Mereka sedang belajar untuk ujian besok.",
              },
              {
                id: "e",
                text: "Saya telah menyelesaikan pekerjaan rumah.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat yang tidak baku adalah C karena menggunakan kata 'lagi' (sebagai pengganti kata 'sedang') dan 'nonton' (sebagai pengganti kata 'menonton').",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Manakah kata yang termasuk dalam bahasa tidak baku?",
            options: [
              { id: "a", text: "Apotek" },
              { id: "b", text: "Kegiatan" },
              { id: "c", text: "Resiko" },
              { id: "d", text: "Sekolah" },
              { id: "e", text: "Analisis" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan KBBI, ejaan yang benar dan baku adalah 'risiko' (menggunakan huruf 'i'), bukan 'resiko'.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Kalimat mana yang menggunakan kata tidak baku?",
            options: [
              {
                id: "a",
                text: "Saya sedang beraktivitas di rumah.",
              },
              {
                id: "b",
                text: "Kemarin saya pergi ke apotek untuk membeli obat.",
              },
              {
                id: "c",
                text: "Seminar itu membahas tentang analisis data.",
              },
              {
                id: "d",
                text: "Pekerjaannya penuh dengan resiko.",
              },
              {
                id: "e",
                text: "Kami mendapatkan pelayanan yang baik dari staf hotel.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'resiko' pada opsi D adalah bentuk tidak baku dari 'risiko'. Sementara itu, kata 'beraktivitas', 'apotek', dan 'analisis' sudah ditulis secara baku.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Manakah kata yang termasuk dalam bahasa tidak baku?",
            options: [
              { id: "a", text: "Kreatif" },
              { id: "b", text: "Efektif" },
              { id: "c", text: "Aktifitas" },
              { id: "d", text: "Analisis" },
              { id: "e", text: "Perspektif" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'Aktifitas' adalah bentuk tidak baku. Kata dasarnya adalah 'aktif', tetapi ketika mendapat akhiran serapan -itas, huruf 'f' berubah menjadi 'v', sehingga bentuk bakunya adalah 'Aktivitas'.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question: "Manakah bentuk tidak baku dari kata praktik?",
            options: [
              { id: "a", text: "Pratek" },
              { id: "b", text: "Praktek" },
              { id: "c", text: "Prakteg" },
              { id: "d", text: "Pratic" },
              { id: "e", text: "Praktech" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata serapan dari bahasa Belanda 'praktijk' diserap ke dalam bahasa Indonesia menjadi 'praktik' (menggunakan huruf i). Maka, 'praktek' adalah ejaan yang tidak baku.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Kalimat mana yang menggunakan kata baku dengan benar?",
            options: [
              {
                id: "a",
                text: "Ayah pergi ke kantor untuk rapat penting.",
              },
              {
                id: "b",
                text: "Saya menganalisa data sebelum membuat laporan.",
              },
              {
                id: "c",
                text: "Ibu membeli gula di warung dekat rumah.",
              },
              {
                id: "d",
                text: "Kita harus mendisiplinkan diri dalam belajar.",
              },
              {
                id: "e",
                text: "Paman membuka praktek dokter di rumahnya.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Opsi B salah karena kata bakunya adalah 'menganalisis'. Opsi E salah karena kata bakunya adalah 'praktik'. Opsi A, C, dan D pada dasarnya menggunakan kata-kata baku yang benar, namun opsi A sering dijadikan jawaban percontohan kalimat dengan predikat dan tujuan yang lugas.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question: "Manakah kata yang tidak baku dalam daftar berikut?",
            options: [
              { id: "a", text: "Aktivitas" },
              { id: "b", text: "Efektif" },
              { id: "c", text: "Karier" },
              { id: "d", text: "Februari" },
              { id: "e", text: "Atlit" },
            ],
            correctAnswer: "e",
            explanation:
              "Berdasarkan KBBI, kata 'atlit' adalah bentuk tidak baku. Penulisan yang benar dan baku adalah 'atlet'.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Manakah pasangan kata baku dan tidak baku yang benar? (Format: Baku - Tidak Baku)",
            options: [
              { id: "a", text: "Efektif - Epektif" },
              { id: "b", text: "Kuitansi - Kwitansi" },
              { id: "c", text: "Nasehat - Nasihat" },
              { id: "d", text: "Karier - Karir" },
              { id: "e", text: "Apotik - Apotek" },
            ],
            correctAnswer: "b",
            explanation:
              "Bentuk baku adalah 'kuitansi' dan bentuk tidak bakunya adalah 'kwitansi'. Pada opsi C dan E susunannya terbalik (Nasehat dan Apotik adalah bentuk tidak baku, sedangkan Nasihat dan Apotek adalah bentuk baku).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question: "Manakah kalimat yang menggunakan kata tidak baku?",
            options: [
              {
                id: "a",
                text: "Kita harus meneliti data dengan cermat.",
              },
              {
                id: "b",
                text: "Manajer sedang mengevaluasi proyek terbaru.",
              },
              {
                id: "c",
                text: "Ibu pergi ke apotek untuk membeli obat.",
              },
              {
                id: "d",
                text: "Ayah memberikan nasehat kepada adik.",
              },
              {
                id: "e",
                text: "Tim melakukan analisis terhadap hasil penelitian.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'nasehat' adalah bentuk tidak baku. Berasal dari bahasa Arab 'nasiha', kata ini diserap ke dalam bahasa Indonesia dengan ejaan baku 'nasihat'.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kata Tidak Baku";
      moduleDoc.description =
        "Materi mengenai kata tidak baku mencakup pengertian kata tidak baku, perbandingan kata baku dan tidak baku, fungsi bahasa tidak baku, ciri-ciri kata tidak baku, faktor munculnya bahasa tidak baku, trik membedakan kata baku dan tidak baku, serta contoh-contoh kata baku dan tidak baku.";
      moduleDoc.subcategory = "Kata Baku-Tidak Baku";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kata Tidak Baku",
        description:
          "Materi mengenai kata tidak baku mencakup pengertian kata tidak baku, perbandingan kata baku dan tidak baku, fungsi bahasa tidak baku, ciri-ciri kata tidak baku, faktor munculnya bahasa tidak baku, trik membedakan kata baku dan tidak baku, serta contoh-contoh kata baku dan tidak baku.",
        subcategory: "Kata Baku-Tidak Baku",
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

seedKataTidakBaku();
