const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKataBaku = async () => {
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

    const targetId = "kata-baku";

    const stepsData = [
      {
        title: "Materi: Kata Baku",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian kata baku, fungsi bahasa baku, ciri bahasa Indonesia baku, tabel kata baku dan tidak baku, gejala bahasa, serta pemakaian kata yang tidak tepat.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Kata Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Kata Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Kata Baku?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata baku adalah kata yang <strong>sesuai dengan kaidah bahasa Indonesia yang berlaku</strong>, yakni mengikuti Ejaan Bahasa Indonesia yang Disempurnakan (EYD) dan Kamus Besar Bahasa Indonesia (KBBI). Kata baku digunakan dalam <strong>situasi resmi</strong> seperti surat-menyurat dinas, karya ilmiah, dan pidato resmi.
                  </p>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Kunci:</strong> Kata baku = kata yang penulisan dan pengucapannya sesuai dengan kaidah bahasa Indonesia standar.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Fungsi Bahasa Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Fungsi Bahasa Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Sebagai alat komunikasi resmi:</strong> Misalnya surat-menyurat resmi, pengumuman yang dikeluarkan oleh instansi resmi, undang-undang, surat keputusan, dan sebagainya.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Dipergunakan dalam wacana resmi:</strong> Misalnya karangan-karangan ilmiah, buku pelajaran, laporan resmi, dan sebagainya.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Dipakai dalam pembicaraan resmi yang bersifat keilmuan atau penyampaian ide-ide:</strong> Misalnya mengajar, memberi ceramah, berkhotbah, berdiskusi, dan lain sebagainya.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>4. Siaran resmi:</strong> Misalnya siaran radio, televisi, majalah dan lain sebagainya.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>5. Dipakai dalam pembicaraan dengan orang-orang yang dihormati</strong> termasuk orang yang belum dikenal atau belum akrab.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Ciri Bahasa Indonesia Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri Bahasa Indonesia Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Menggunakan ucapan baku (pada bahasa lisan):</strong> Ucapan yang digunakan tidak dipengaruhi oleh ucapan bahasa daerah maupun dialek yang tidak ada.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Menggunakan atau berpedoman pada ejaan yang berlaku:</strong> Bahasa Indonesia baku menggunakan Ejaan Bahasa Indonesia yang Disempurnakan (EYD) sebagai pedoman umum.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>3. Memiliki peristilahan resmi:</strong> Bahasa Indonesia baku berpedoman pada pedoman umum untuk pembentukan istilah.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>4. Menghindari pemakaian unsur yang dipengaruhi oleh bahasa dialek atau bahasa tutur sehari-hari:</strong> Hal ini berlaku baik pada aspek leksikal (kosakata) maupun gramatikal (tata bahasa).</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Tabel Kata Baku vs Tidak Baku -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Kata Baku dan Tidak Baku</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Primary-600">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Bahasa Baku</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Bahasa Tidak Baku</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Bagaimana</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Gimana</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Mengatakan</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Bilang</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Pergi</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Pegi</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Mengapa</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kenapa</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Mereka sudah datang?</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Sudah datangkah mereka?</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Beritahukan mengapa mereka</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Ada banyak hal yang ingin saya katakan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- Menghindari Gejala Bahasa -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Menghindari Gejala Bahasa</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>1. Gejala bahasa</strong> ialah peristiwa dalam bahasa yang menyebabkan terjadinya bentukan kata, susunan kata atau kalimat yang menyimpang dari ketentuan umum bahasa yang bersangkutan.</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>2. Gejala kontaminasi</strong> ialah ragam kesalahan yang berupa bentuk yang kacau karena tumpang tindihnya dua bentuk yang masing-masing betul bila berdiri sendiri.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Pemakaian Kata Yang Tidak Tepat -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pemakaian Kata Yang Tidak Tepat</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse border border-Grayscale-300 text-body-l">
                      <thead>
                        <tr class="bg-Primary-600">
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Kesalahan</th>
                          <th class="border border-Grayscale-300 px-4 py-3 text-left text-white font-bold">Pembetulan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Hari ulang tahun <strong>dari</strong> adik saya dirayakan secara sederhana</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Hari ulang adik saya dirayakan secara sederhana</td>
                        </tr>
                        <tr class="bg-Grayscale-50">
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Anak <strong>dari</strong> tetangga saya akan dilantik menjadi dokter senin besok</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Anak tetangga saya akan dilantik menjadi dokter senin besok</td>
                        </tr>
                        <tr>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kebijaksaan itu diambil untuk memenuhi keinginan <strong>daripada</strong> rakyat</td>
                          <td class="border border-Grayscale-300 px-4 py-3 text-Grayscale-700">Kebijaksaan itu diambil untuk memenuhi keinginan rakyat.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200 mt-4">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Tips:</strong> Preposisi <em>dari</em> dan <em>daripada</em> sering dipakai secara berlebihan. Kata <em>dari</em> untuk asal/sumber, sedangkan <em>daripada</em> untuk perbandingan. Keduanya tidak perlu digunakan untuk menyatakan kepemilikan.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Kata Baku (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/GkeNmQi2d8I",
        description: "Video pembelajaran tentang kata baku bagian pertama.",
      },
      {
        title: "Video: Kata Baku (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/xG_au-pi9jw",
        description: "Video pembelajaran tentang kata baku bagian kedua.",
      },
      {
        title: "Kuis Kata Baku",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Manakah kalimat yang menggunakan bahasa baku?",
            options: [
              {
                id: "a",
                text: "Saya telah pergi ke toko untuk membeli beberapa barang.",
              },
              {
                id: "b",
                text: "Saya sudah pergi ke toko untuk beli beberapa barang.",
              },
              {
                id: "c",
                text: "Saya telah pergi ke toko untuk beli barang.",
              },
              {
                id: "d",
                text: "Saya sudah pergi ke toko buat membeli barang.",
              },
              {
                id: "e",
                text: "Saya telah pergi ke toko untuk membeli barang-barang.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kata kerja harus memiliki imbuhan yang lengkap ('membeli', bukan 'beli' atau 'buat membeli'). Berdasarkan kunci jawaban kuis ini, bentuk 'membeli barang-barang' dipilih sebagai bentuk baku yang tepat.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Pilih kalimat yang benar secara baku.",
            options: [
              {
                id: "a",
                text: "Kami akan bertanya ke Anda tentang masalah itu.",
              },
              {
                id: "b",
                text: "Kami akan bertanya kepada Anda tentang masalah itu.",
              },
              {
                id: "c",
                text: "Kami akan bertanya pada Anda tentang masalah itu.",
              },
              {
                id: "d",
                text: "Kami akan bertanya kepada kamu tentang masalah itu.",
              },
              {
                id: "e",
                text: "Kami akan bertanya pada kamu tentang masalah itu.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata depan 'kepada' digunakan untuk merujuk pada orang atau objek yang dituju. Kata 'ke' digunakan untuk arah tempat, sedangkan 'pada' untuk waktu atau tempat abstrak. Sapaan 'Anda' lebih formal dan baku dibandingkan 'kamu'.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Manakah kalimat yang sesuai dengan kaidah bahasa baku?",
            options: [
              {
                id: "a",
                text: "Kami belum sempat menyelesaikan tugas itu.",
              },
              {
                id: "b",
                text: "Kami belum sempat menyelesaikan tugas tersebut.",
              },
              {
                id: "c",
                text: "Kami tidak sempat menyelesaikan tugas itu.",
              },
              {
                id: "d",
                text: "Kami belum bisa menyelesaikan tugas tersebut.",
              },
              {
                id: "e",
                text: "Kami belum menyelesaikan tugas tersebut.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat E adalah bentuk yang paling lugas, efektif, dan baku tanpa penambahan kata 'sempat' yang membuat kalimat menjadi kurang tegas dalam ragam bahasa formal.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Pilih kalimat yang benar menurut kaidah bahasa baku!",
            options: [
              {
                id: "a",
                text: "Dia akan menyelesaikan tugas pada pagi besok.",
              },
              {
                id: "b",
                text: "Dia akan menyelesaikan tugas pada besok pagi.",
              },
              {
                id: "c",
                text: "Dia akan menyelesaikan tugas besok pagi.",
              },
              {
                id: "d",
                text: "Dia akan menyelesaikan tugas besok pagi sekali.",
              },
              {
                id: "e",
                text: "Dia akan menyelesaikan tugas di besok pagi.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Keterangan waktu seperti 'besok', 'kemarin', atau 'nanti' dapat berdiri sendiri sebagai penunjuk waktu, sehingga penambahan preposisi 'pada' atau 'di' merupakan pemborosan kata (tidak efektif).",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Manakah kalimat yang sesuai dengan kaidah bahasa baku?",
            options: [
              {
                id: "a",
                text: "Mereka harus mengikuti aturan yang berlaku.",
              },
              {
                id: "b",
                text: "Mereka harus ikut aturan yang berlaku.",
              },
              {
                id: "c",
                text: "Mereka harus ikut peraturan yang berlaku.",
              },
              {
                id: "d",
                text: "Mereka harus mengikuti peraturan yang berlaku.",
              },
              {
                id: "e",
                text: "Mereka harus mengikuti semua aturan yang berlaku.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kata kerja aktif dalam kalimat baku harus memakai awalan me- (mengikuti, bukan ikut). 'Peraturan' merupakan kata baku yang tepat untuk merujuk pada ketentuan yang mengikat.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "Kalimat manakah yang benar dalam bahasa baku?",
            options: [
              {
                id: "a",
                text: "Saya akan menjelaskan kenapa ini terjadi.",
              },
              {
                id: "b",
                text: "Saya akan menjelaskan mengapa ini terjadi.",
              },
              {
                id: "c",
                text: "Saya akan menjelaskan apa sebabnya ini terjadi.",
              },
              {
                id: "d",
                text: "Saya akan menjelaskan sebab mengapa ini terjadi.",
              },
              {
                id: "e",
                text: "Saya akan menjelaskan sebab kenapa ini terjadi.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata tanya 'mengapa' adalah bentuk yang baku untuk menanyakan alasan. Kata 'kenapa' adalah ragam bahasa cakapan (informal). Penggunaan 'sebab mengapa' adalah bentuk pleonasme (pemborosan).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Pilih kalimat tepat dalam bahasa baku!",
            options: [
              {
                id: "a",
                text: "Saya sudah mengerjakan tugas tersebut.",
              },
              {
                id: "b",
                text: "Saya sudah mengerjakan tugas itu.",
              },
              {
                id: "c",
                text: "Saya telah mengerjakan tugas tersebut.",
              },
              {
                id: "d",
                text: "Saya telah mengerjakan tugas itu.",
              },
              {
                id: "e",
                text: "Saya mengerjakan tugas tersebut.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'telah' dan 'sudah' bersinonim, namun 'telah' sering dianggap lebih formal dalam teks tertulis baku. Penggunaan kata penunjuk 'tersebut' juga lebih resmi sebagai rujukan anaforis dibandingkan 'itu'.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Manakah kalimat yang menggunakan bahasa baku?",
            options: [
              {
                id: "a",
                text: "Saya sudah pergi ke toko untuk beli beberapa barang.",
              },
              {
                id: "b",
                text: "Saya telah pergi ke toko untuk beli barang.",
              },
              {
                id: "c",
                text: "Saya sudah pergi ke toko buat membeli barang.",
              },
              {
                id: "d",
                text: "Saya telah pergi ke toko untuk membeli barang-barang.",
              },
              {
                id: "e",
                text: "Saya telah pergi ke toko untuk membeli beberapa barang.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Sama seperti kasus di Soal 1, penggunaan kata 'telah', verba berimbuhan 'membeli' (bukan beli/buat), dan 'beberapa barang' menciptakan kalimat formal dan baku.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Pilih kalimat yang benar secara baku.",
            options: [
              {
                id: "a",
                text: "Kami akan bertanya ke Anda tentang masalah itu.",
              },
              {
                id: "b",
                text: "Kami akan bertanya pada Anda tentang masalah itu.",
              },
              {
                id: "c",
                text: "Kami akan bertanya kepada Anda tentang masalah itu.",
              },
              {
                id: "d",
                text: "Kami akan bertanya kepada kamu tentang masalah itu.",
              },
              {
                id: "e",
                text: "Kami akan bertanya pada kamu tentang masalah itu.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Preposisi 'kepada' wajib digunakan ketika merujuk pada persona/orang yang dituju dari sebuah tindakan (bertanya kepada...).",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Manakah kalimat yang sesuai dengan kaidah bahasa baku?",
            options: [
              {
                id: "a",
                text: "Kami belum sempat menyelesaikan tugas tersebut.",
              },
              {
                id: "b",
                text: "Kami belum sempat menyelesaikan tugas itu.",
              },
              {
                id: "c",
                text: "Kami tidak sempat menyelesaikan tugas itu.",
              },
              {
                id: "d",
                text: "Kami belum bisa menyelesaikan tugas tersebut.",
              },
              {
                id: "e",
                text: "Kami belum menyelesaikan tugas tersebut.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat yang langsung pada intinya ('belum menyelesaikan') merupakan bentuk paling efektif untuk ragam bahasa resmi.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question: "Pilih kalimat yang benar menurut kaidah bahasa baku!",
            options: [
              {
                id: "a",
                text: "Dia akan menyelesaikan tugas pada besok pagi.",
              },
              {
                id: "b",
                text: "Dia akan menyelesaikan tugas pada pagi besok.",
              },
              {
                id: "c",
                text: "Dia akan menyelesaikan tugas besok pagi.",
              },
              {
                id: "d",
                text: "Dia akan menyelesaikan tugas di besok pagi.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Keterangan penunjuk waktu absolut ('besok pagi') dalam bahasa Indonesia tidak memerlukan imbuhan preposisi ('pada', 'di').",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Manakah kalimat yang sesuai dengan kaidah bahasa baku?",
            options: [
              {
                id: "a",
                text: "Mereka harus mengikuti aturan yang berlaku.",
              },
              {
                id: "b",
                text: "Mereka harus ikut aturan yang berlaku.",
              },
              {
                id: "c",
                text: "Mereka harus ikut peraturan yang berlaku.",
              },
              {
                id: "d",
                text: "Mereka harus mengikuti peraturan yang berlaku.",
              },
              {
                id: "e",
                text: "Mereka harus mengikuti semua aturan yang berlaku.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Verba 'mengikuti' (aktif-transitif) dipasangkan dengan kata benda resmi 'peraturan' membangun pola kalimat bahasa Indonesia baku (S-P-O).",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question: "Kalimat manakah yang benar dalam bahasa baku?",
            options: [
              {
                id: "a",
                text: "Saya akan menjelaskan kenapa ini terjadi.",
              },
              {
                id: "b",
                text: "Saya akan menjelaskan apa sebabnya ini terjadi.",
              },
              {
                id: "c",
                text: "Saya akan menjelaskan mengapa ini terjadi.",
              },
              {
                id: "d",
                text: "Saya akan menjelaskan sebab mengapa ini terjadi",
              },
              {
                id: "e",
                text: "Saya akan menjelaskan sebab kenapa ini terjadi.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kata penanya baku untuk menanyakan sebab adalah 'mengapa', bukan 'kenapa' (informal) dan tidak boleh digabungkan dengan kata 'sebab' karena menjadi redundan.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Pilih kalimat yang tepat dalam bahasa baku!",
            options: [
              {
                id: "a",
                text: "Saya sudah mengerjakan tugas itu.",
              },
              {
                id: "b",
                text: "Saya sudah mengerjakan tugas tersebut.",
              },
              {
                id: "c",
                text: "Saya telah mengerjakan tugas tersebut.",
              },
              {
                id: "d",
                text: "Saya telah mengerjakan tugas itu.",
              },
              {
                id: "e",
                text: "Saya mengerjakan tugas tersebut.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Dalam set ini, jawaban berfokus pada keseimbangan penggunaan 'sudah' dengan kata rujukan formal 'tersebut'.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question: "Manakah kalimat yang benar menurut kaidah bahasa baku?",
            options: [
              {
                id: "a",
                text: "Kami ingin berbicara tentang masalah ini.",
              },
              {
                id: "b",
                text: "Kami ingin berbicara mengenai mengenai masalah ini.",
              },
              {
                id: "c",
                text: "Kami ingin berbicara perihal masalah ini.",
              },
              {
                id: "d",
                text: "Kami ingin berbicara perihal masalah ini",
              },
              {
                id: "e",
                text: "Kami ingin berbicara mengenai masalah ini.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat ini adalah bentuk yang paling efektif. Opsi B salah karena ada repetisi ('mengenai mengenai'). Opsi 'mengenai' berfungsi baik sebagai konjungsi/preposisi untuk menggantikan kata 'tentang' dengan nuansa yang sedikit lebih formal.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kata Baku";
      moduleDoc.description =
        "Materi mengenai kata baku mencakup pengertian kata baku, fungsi bahasa baku, ciri bahasa Indonesia baku, contoh kata baku dan tidak baku, gejala bahasa dan kontaminasi, serta pemakaian kata yang tidak tepat.";
      moduleDoc.subcategory = "Kata Baku-Tidak Baku";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kata Baku",
        description:
          "Materi mengenai kata baku mencakup pengertian kata baku, fungsi bahasa baku, ciri bahasa Indonesia baku, contoh kata baku dan tidak baku, gejala bahasa dan kontaminasi, serta pemakaian kata yang tidak tepat.",
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

seedKataBaku();
