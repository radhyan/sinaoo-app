const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSifatKata = async () => {
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
    const targetId = "sifat-kata";

    const stepsData = [
      {
        title: "Materi: Sifat Kata (Bagian 1)",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang kata dasar, kata berimbuhan/afiksasi, fungsi pengimbuhan, dan kata ulang.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- BAGIAN 1: Kata Dasar -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kata Dasar</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Pengertian Kata Dasar</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata dasar adalah bentuk kata bermakna yang <strong>belum mengalami pengimbuhan</strong> apapun, baik itu awalan (prefiks), akhiran (sufiks), sisipan (infiks), dan awalan-akhiran (konfiks).
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0">Kata <em>memberi</em>: me + beri → kata dasarnya adalah <strong>beri</strong>.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- BAGIAN 2: Kata Berimbuhan / Afiksasi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kata Berimbuhan / Afiksasi</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Pengertian Afiksasi</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata berimbuhan adalah kata yang dibentuk dari <strong>kata dasar dan imbuhan</strong>. Afiksasi/pengimbuhan adalah proses atau hasil penambahan afiks (prefiks, infiks, sufiks, atau konfiks).
                  </p>

                  <div class="space-y-3">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="font-bold text-Secondary-800 mt-0 mb-1">Prefiks (Awalan)</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">me-, ber-, ter-</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="font-bold text-Secondary-800 mt-0 mb-1">Infiks (Sisipan)</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">-el-, -er-</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="font-bold text-Secondary-800 mt-0 mb-1">Sufiks (Akhiran)</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">-an, -i</p>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="font-bold text-Secondary-800 mt-0 mb-1">Konfiks (Imbuhan Gabung)</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">ke-an, ber-an</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Fungsi Pengimbuhan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Fungsi Pengimbuhan</h4>
                </div>
                <div class="p-6 space-y-4">
                  <!-- Prefiks me- -->
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Prefiks me-</p>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2">Sebagai pembentuk kata kerja aktif.</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Transitif:</strong> memukul, membaca, mencium.</li>
                      <li><strong>Intrasitif:</strong> menangis, merangkak, merokok.</li>
                    </ul>
                  </div>

                  <!-- Prefiks ter- -->
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Prefiks ter-</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Pembentuk kata kerja pasif:</strong> terbaca, terjatuh.</li>
                      <li><strong>Aktif:</strong> terjaga.</li>
                      <li><strong>Pembentuk kata sifat:</strong> tercantik, terpandai.</li>
                    </ul>
                  </div>

                  <!-- Prefiks ke- -->
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Prefiks ke-</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Bilangan tingkat:</strong> kedua, ketiga, keenam.</li>
                      <li><strong>Bilangan kumpulan:</strong> kedua, ketiga, keenam.</li>
                    </ul>
                    <div class="mt-3 bg-white p-3 rounded border border-Tertiary-200">
                      <p class="text-body-sm text-Grayscale-600 mt-0 mb-1"><strong>Keterangan:</strong> Penulisan ke- baik untuk bilangan tingkat maupun untuk himpunan dirangkaikan dengan kata yang dilekati:</p>
                      <p class="text-body-sm text-Grayscale-600 mb-0 italic"><em>Kedua</em> anak saya lahir di Indonesia (bilangan tingkat)<br/> Anak saya <em>kedua</em> bernama Virtha (bilangan kumpulan)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- BAGIAN 3: Kata Ulang -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kata Ulang (Reduplikasi)</h3>

              <p class="text-body-l text-Grayscale-700 mb-6 text-justify">
                Kata ulang merupakan kata-kata yang mengalami proses pengulangan atau reduplikasi. Kata ulang dapat dikelompokkan berdasarkan bentuk perulangannya.
              </p>

              <div class="grid gap-4">
                <!-- Dwipurwa -->
                <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden">
                  <div class="bg-Primary-600 px-6 py-3">
                    <h4 class="text-white font-bold text-h4 my-1">Dwipurwa (Kata Ulang Sebagian)</h4>
                  </div>
                  <div class="p-6">
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">Proses pengulangan yang terjadi pada sebagian kata, biasanya terjadi pada bagian awal kata.</p>
                    <div class="bg-Primary-50 p-3 rounded-lg">
                      <p class="font-bold text-Primary-800 mt-0 mb-1">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">lelaki, tetangga, sesaji</p>
                    </div>
                  </div>
                </div>

                <!-- Dwilingga -->
                <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden">
                  <div class="bg-Secondary-600 px-6 py-3">
                    <h4 class="text-white font-bold text-h4 my-1">Dwilingga (Kata Ulang Utuh/Penuh)</h4>
                  </div>
                  <div class="p-6">
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">Reduplikasi pada kata ulang utuh ini terjadi pada semua atau keseluruhan kata.</p>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="font-bold text-Secondary-800 mt-0 mb-1">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">buku-buku, anak-anak, bapak-bapak</p>
                    </div>
                  </div>
                </div>

                <!-- Berubah Bunyi -->
                <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden">
                  <div class="bg-Tertiary-600 px-6 py-3">
                    <h4 class="text-white font-bold text-h4 my-1">Kata Ulang Berubah Bunyi</h4>
                  </div>
                  <div class="p-6">
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">Reduplikasi bentuk ini terjadi pengulangan bunyi pada unsur pertama maupun unsur kedua dalam kalimat.</p>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="font-bold text-Tertiary-800 mt-0 mb-1">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">teka-teki, sayur-mayur, serba-serbi</p>
                    </div>
                  </div>
                </div>

                <!-- Kata Ulang Berimbuhan -->
                <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden">
                  <div class="bg-Primary-600 px-6 py-3">
                    <h4 class="text-white font-bold text-h4 my-1">Kata Ulang Berimbuhan</h4>
                  </div>
                  <div class="p-6">
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">Pengulangan kata ulang berimbuhan terjadi dengan menambahkan imbuhan pada unsur kata pertama atau unsur kata kedua.</p>
                    <div class="bg-Primary-50 p-3 rounded-lg">
                      <p class="font-bold text-Primary-800 mt-0 mb-1">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">bersiap-siap, rumah-rumahan, batu-batuan</p>
                    </div>
                  </div>
                </div>

                <!-- Kata Ulang Semu -->
                <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden">
                  <div class="bg-Secondary-600 px-6 py-3">
                    <h4 class="text-white font-bold text-h4 my-1">Kata Ulang Semu</h4>
                  </div>
                  <div class="p-6">
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">Reduplikasi pada kata ulang semu terjadi pada kata dasar yang sebenarnya bukan hasil reduplikasi itu sendiri. Perbedaan dengan kata ulang utuh adalah kata yang direduplikasi <strong>tidak akan memiliki makna jika dipisah</strong>.</p>
                    <div class="bg-Secondary-50 p-3 rounded-lg">
                      <p class="font-bold text-Secondary-800 mt-0 mb-1">Contoh:</p>
                      <p class="text-body-l text-Grayscale-700 mb-0">kupu-kupu, ubur-ubur, pura-pura</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Sifat Kata (Bagian 2)",
        type: "reading",
        status: "locked",
        description:
          "Pelajari tentang kata serapan dan jenis-jenis kata (nomina, verba, adjektiva, pronomina, numeralia, konjungsi, preposisi).",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- BAGIAN 4: Kata Serapan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kata Serapan</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Pengertian Kata Serapan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata serapan adalah kata hasil integrasi dari bahasa lain ke dalam bahasa Indonesia. Kata yang termasuk dalam kata serapan biasanya sudah digunakan oleh masyarakat umum. Oleh karena itu ejaan, tulisan, dan ucapan disesuaikan dengan cara pengucapan masyarakat Indonesia.
                  </p>

                  <!-- Serapan Bahasa Daerah -->
                  <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Kata Serapan dari Bahasa Daerah</p>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <p class="font-medium text-Grayscale-700 mt-0 mb-1">Bahasa Jawa:</p>
                        <ul class="list-disc list-outside pl-5 text-body-l text-Grayscale-700 mb-0 space-y-1">
                          <li>Ampuh → Sakti</li>
                          <li>Langka → Jarang Ada</li>
                        </ul>
                      </div>
                      <div>
                        <p class="font-medium text-Grayscale-700 mt-0 mb-1">Bahasa Sunda:</p>
                        <ul class="list-disc list-outside pl-5 text-body-l text-Grayscale-700 mb-0 space-y-1">
                          <li>Nyeri → Sakit</li>
                          <li>Mending → Lumayan</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Serapan Bahasa Asing -->
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-3">Kata Serapan dari Bahasa Asing</p>
                    <div class="overflow-x-auto">
                      <table class="w-full border-collapse text-body-l">
                        <thead>
                          <tr class="bg-Primary-600 text-Primary-50">
                            <th class="px-4 py-3 text-left text-Primary-50 font-bold">Bahasa Inggris</th>
                            <th class="px-4 py-3 text-left text-Primary-50 font-bold">Bahasa Arab</th>
                            <th class="px-4 py-3 text-left text-Primary-50 font-bold">Bahasa Cina</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b border-Grayscale-100">
                            <td class="px-4 py-3">Aktor</td>
                            <td class="px-4 py-3">Abad</td>
                            <td class="px-4 py-3">Bakiak</td>
                          </tr>
                          <tr class="border-b border-Grayscale-100 bg-Grayscale-50">
                            <td class="px-4 py-3">Bisnis</td>
                            <td class="px-4 py-3">Almanak</td>
                            <td class="px-4 py-3">Bakmi</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-3">Detail</td>
                            <td class="px-4 py-3">Baligh</td>
                            <td class="px-4 py-3">Bakwan</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- BAGIAN 5: Jenis Kata -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Kata</h3>

              <!-- Nomina -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Nomina (Kata Benda)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata benda atau nomina adalah kata yang mengacu kepada sesuatu benda (konkret maupun abstrak). Contoh kata benda seperti meja, gawai, dan mobil. Sedangkan contoh kata abstrak seperti kekuatan, cinta, dan kemunduran.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Pembentukan Nomina dari Imbuhan:</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li>Kata sifat <em>datar</em> + imbuhan -an → <strong>dataran</strong> (kata benda)</li>
                      <li>Kata sifat <em>sehat</em> + imbuhan ke-an → <strong>kesehatan</strong> (kata benda)</li>
                      <li>Kata dasar <em>terang</em> + imbuhan pe-an → <strong>penerang</strong> (kata benda)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Verba -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Verba (Kata Kerja)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kata yang menyatakan melakukan perbuatan atau tindakan. Kata kerja pada umumnya berfungsi sebagai predikat dalam kalimat.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Ciri Kata Kerja:</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li>Dapat diberi keterangan waktu, seperti: <em>sedang</em> dan <em>telah</em>. Contoh: sedang bermain.</li>
                      <li>Dapat diingkari dengan kata <em>tidak</em>. Contoh: tidak pergi.</li>
                      <li>Berimbuhan me-, ber-. Contoh: memakai, berkata.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Adjektiva -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Adjektiva (Kata Sifat)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Kata yang menjelaskan sifat, keadaan, karakter, perilaku seseorang. Contoh: cantik, besar, rajin, malas, baik.
                  </p>
                </div>
              </div>

              <!-- Pronomina -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Pronomina (Kata Ganti)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">Terdiri dari 3 jenis kata, yaitu:</p>
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                    <li><strong>Pronomina penunjuk:</strong> ini, itu, sana, situ, begitu, begini.</li>
                    <li><strong>Pronomina persona (kata ganti orang):</strong> saya, aku, dia, Anda, engkau, mereka.</li>
                    <li><strong>Pronomina penanya:</strong> apa, dimana, kapan, mengapa, dan bagaimana.</li>
                  </ul>
                </div>
              </div>

              <!-- Numeralia -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Numeralia (Kata Bilangan)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Kata yang dipakai untuk menghitung banyaknya orang, binatang, benda, dan sebuah urutan proses atau peristiwa.
                  </p>
                  <div class="bg-Tertiary-50 p-3 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-1">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0">sejuta, pertama-tama, kedua, dan sepertiga</p>
                  </div>
                </div>
              </div>

              <!-- Konjungsi -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Konjungsi (Kata Sambung)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Kata yang berfungsi menghubungkan dua kata atau dua kalimat.
                  </p>
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                    <li><strong>Konjungsi penambahan:</strong> dan, dan lagi, tambahan lagi, lagi pula</li>
                    <li><strong>Konjungsi pilihan:</strong> atau</li>
                    <li><strong>Konjungsi perlawanan:</strong> tetapi, sedangkan, namun</li>
                    <li><strong>Konjungsi sebab-akibat:</strong> sebab, karena, karena itu</li>
                    <li><strong>Konjungsi persyaratan:</strong> asalkan, jikalau, kalau</li>
                  </ul>
                </div>
              </div>

              <!-- Preposisi -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Preposisi (Kata Depan)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                    Jenis kata ini selalu berada di depan kata benda, kata sifat, atau kata kerja untuk membentuk gabungan kata depan (frasa preposisional).
                  </p>
                  <div class="bg-Secondary-50 p-3 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-1">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0">di, ke, dari, atas, terhadap, kepada, dan oleh</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Sifat Kata",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/cDVgxiqrQQM",
        description: "Video pembelajaran tentang sifat kata.",
      },
      {
        title: "Video: Latihan Soal Sifat Kata",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/pzPCcOIlI5A",
        description: "Video latihan soal mengenai sifat kata.",
      },
      {
        title: "Kuis Sifat Kata",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question:
              "Manakah di bawah ini yang merupakan kata ulang dwipurwa?",
            options: [
              { id: "a", text: "Anak-anak" },
              { id: "b", text: "Rumah-rumah" },
              { id: "c", text: "Laki-laki" },
              { id: "d", text: "Tarian-tarian" },
              { id: "e", text: "Awan-awan" },
            ],
            correctAnswer: "c",
            explanation:
              "Catatan: Secara tata bahasa yang baku, 'laki-laki' adalah kata ulang utuh (dwilingga). Bentuk dwipurwa (pengulangan suku kata pertama) dari kata ini adalah 'lelaki' (la-laki -> lelaki). Namun, berdasarkan kunci jawaban kuis ini, 'Laki-laki' ditetapkan sebagai jawaban yang dikehendaki.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question: "Tentukan apakah pernyataan berikut benar atau salah.",
            rows: [
              {
                id: "r1",
                text: "Kata membaca adalah kata kerja berimbuhan awalan.",
              },
              {
                id: "r2",
                text: "Kata perkotaan adalah kata berimbuhan yang bermakna tempat.",
              },
              {
                id: "r3",
                text: "Kata ulang anak-anak memiliki fungsi untuk menyatakan jamak.",
              },
              {
                id: "r4",
                text: "Kata demokrasi adalah kata serapan dari bahasa Belanda.",
              },
              {
                id: "r5",
                text: "Kata indah termasuk kata sifat (adjektiva).",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "true",
              r4: "false",
              r5: "true",
            },
            explanation:
              "Membaca (me- + baca) = verba awalan (Benar). Perkotaan (per-an + kota) = bermakna tempat/kumpulan (Benar). Anak-anak = jamak (Benar). Indah = kata sifat (Benar). Kata 'demokrasi' tidak disertakan dalam kunci jawaban 'Benar', sehingga dinilai Salah dalam konteks kuis ini (meski secara historis diserap dari bahasa Belanda 'democratie').",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              'Kata "keindahan" memiliki imbuhan yang berfungsi untuk menyatakan sesuatu yang bersifat abstrak. Imbuhan apa yang digunakan?',
            options: [
              { id: "a", text: "me-kan" },
              { id: "b", text: "ke-an" },
              { id: "c", text: "ber-an" },
              { id: "d", text: "per-an" },
              { id: "e", text: "se-nya" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'keindahan' terbentuk dari kata sifat 'indah' yang mendapat konfiks (imbuhan gabung) 'ke-an'. Konfiks 'ke-an' pada kata sifat berfungsi membentuk kata benda (nomina) yang bersifat abstrak.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Bentuk serapan yang benar terdapat dalam kalimat...",
            options: [
              {
                id: "a",
                text: "Perluasan pembangunan sampai ke wilayah pedalaman dilakukan dengan tetap menempatkan warga sekitar sebagai subyek kemajuan",
              },
              {
                id: "b",
                text: "Pemerintah memiliki program bantuan langsung tunai untuk menurunkan angka kemiskinan, tetapi sebenarnya akan lebih bagus apabila dana tersebut dimanfaatkan untuk memacu kreatifitas masyarakat",
              },
              {
                id: "c",
                text: "Aksi pendidikan berwawasan meliputi usaha-usaha melokalisir bidang-bidang yang berpotensi berhasil mengarahkan warga negara dalam bidang hukum",
              },
              {
                id: "d",
                text: "Pemerintah diharapkan dapat memberikan respon positif terhadap gagasan bahwa membentuk negara sebagai sarana membangun jiwa",
              },
              {
                id: "e",
                text: "Alih-alih bersikap konfrontatif, dia justru menunjukkan sikap kooperatip dalam tindak pidana yang didakwakan kepadanya",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Opsi A salah karena 'subyek' seharusnya 'subjek'. Opsi B salah karena 'kreatifitas' seharusnya 'kreativitas'. Opsi C salah karena akhiran '-ir' (melokalisir) tidak baku, seharusnya 'melokalisasi'. Opsi E salah karena 'kooperatip' seharusnya 'kooperatif'. Opsi D dipilih sebagai jawaban benar berdasarkan kunci, meskipun bentuk baku dari 'respon' menurut KBBI adalah 'respons'.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Setiap kali ada perlombaan di sekolah, dia-dia terus yang selalu mewakili sekolah.",
            question:
              "Kata ulang di bawah ini yang maknanya sama dengan kata ulang pada kalimat di atas adalah...",
            options: [
              { id: "a", text: "Orang-orang" },
              { id: "b", text: "sakit-sakit" },
              { id: "c", text: "oleh-oleh" },
              { id: "d", text: "mereka-mereka" },
              { id: "e", text: "sisa-sisa" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'dia-dia' merupakan bentuk reduplikasi dari pronomina (kata ganti orang). Pengulangan ini bermakna penegasan bahwa orangnya itu-itu saja. Bentuk yang sepadan dan sama-sama merupakan pengulangan pronomina adalah 'mereka-mereka'.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              '"Dalam proses produksi massal, perusahaan harus memastikan bahwa kualitas produk tetap konsisten."',
            question:
              "Kata konsisten dalam kalimat tersebut termasuk jenis kata...",
            options: [
              { id: "a", text: "Verba" },
              { id: "b", text: "Adjektiva" },
              { id: "c", text: "Nomina" },
              { id: "d", text: "Adverbia" },
              { id: "e", text: "Pronomina" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'konsisten' bermakna tetap, tidak berubah-ubah, atau taat asas. Kata ini menerangkan keadaan dari subjek/kualitas produk, sehingga tergolong ke dalam kelas kata sifat (adjektiva).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              '"Setiap orang memiliki tanggung jawab untuk memperbaiki hubungan dengan sesama."',
            question:
              "Dalam kalimat tersebut, tentukan makna imbuhan pada kata memperbaiki:",
            options: [
              { id: "a", text: "Melakukan tindakan berulang" },
              {
                id: "b",
                text: "Melakukan sesuatu untuk diri sendiri",
              },
              { id: "c", text: "Membuat menjadi lebih baik" },
              {
                id: "d",
                text: "Menyelesaikan sesuatu yang rusak",
              },
              {
                id: "e",
                text: "Mengubah keadaan menjadi sempurna",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Imbuhan memper-i pada kata 'memperbaiki' (dari kata dasar 'baik') bermakna kausatif, yaitu membuat atau menyebabkan sesuatu menjadi (lebih) baik.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              '"Pendekatan berbasis data kini menjadi tren di berbagai sektor, termasuk pendidikan."',
            question: "Kata berbasis dalam kalimat tersebut memiliki fungsi:",
            options: [
              { id: "a", text: "Menunjukkan proses" },
              {
                id: "b",
                text: "Menunjukkan dasar atau acuan",
              },
              { id: "c", text: "Menunjukkan intensitas" },
              { id: "d", text: "Menunjukkan hasil" },
              { id: "e", text: "Menunjukkan tujuan" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'berbasis' berasal dari kata dasar 'basis' yang berarti dasar, asas, atau fondasi. Dengan awalan ber-, kata ini berarti 'mempunyai basis/dasar', sehingga fungsinya adalah menunjukkan dasar atau acuan dari pendekatan tersebut.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              '"Penelitian ini mengungkapkan bahwa penggunaan metode inovatif dapat meningkatkan efektivitas pembelajaran."',
            question:
              "Kata efektivitas dalam kalimat tersebut termasuk jenis kata...",
            options: [
              { id: "a", text: "Nomina" },
              { id: "b", text: "Verba" },
              { id: "c", text: "Adjektiva" },
              { id: "d", text: "Adverbia" },
              { id: "e", text: "Pronomina" },
            ],
            correctAnswer: "a",
            explanation:
              "Akhiran serapan '-itas' (dari bahasa Inggris '-ity') berfungsi untuk mengubah kata sifat (adjektiva) 'efektif' menjadi kata benda (nomina) 'efektivitas', yang berarti 'keadaan efektif'.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              '"Pemimpin yang baik harus mampu mengelola sumber daya secara efisien."',
            question:
              "Dalam kalimat tersebut, kata mengelola termasuk dalam jenis kata apa?",
            options: [
              { id: "a", text: "Nomina" },
              { id: "b", text: "Verba" },
              { id: "c", text: "Adjektiva" },
              { id: "d", text: "Adverbia" },
              { id: "e", text: "Pronomina" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'mengelola' memiliki awalan me- yang mengindikasikan suatu tindakan atau perbuatan (aktif). Oleh karena itu, kata ini tergolong ke dalam kata kerja (verba).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question:
              "Manakah kalimat yang menggunakan kata ulang dwipurwa dengan tepat?",
            options: [
              {
                id: "a",
                text: "Anak itu jalan-jalan di taman.",
              },
              {
                id: "b",
                text: "Mereka mondar-mandir sepanjang koridor.",
              },
              {
                id: "c",
                text: "Pohon-pohon di hutan semakin lebat.",
              },
              {
                id: "d",
                text: "Lelaki itu tergopoh-gopoh menghampiri saya.",
              },
              {
                id: "e",
                text: "Anak kecil itu menangis terisak",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kata ulang dwipurwa adalah pengulangan pada suku kata pertama kata dasarnya. Pada opsi D, terdapat kata 'Lelaki' yang merupakan dwipurwa dari kata dasar 'laki' (laki -> lalaki -> lelaki). Opsi A, C (dwilingga/utuh). Opsi B (dwilingga salin suara).",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              '"Mereka yang tidak mengikuti aturan akan mendapatkan sanksi."',
            question: "Dalam kalimat tersebut, kata mereka berfungsi sebagai:",
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Objek" },
              { id: "c", text: "Pelengkap" },
              { id: "d", text: "Keterangan" },
              { id: "e", text: "Predikat" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam struktur kalimat tersebut, frasa 'Mereka yang tidak mengikuti aturan' menempati posisi Subjek (S), sedangkan 'akan mendapatkan' adalah Predikat (P), dan 'sanksi' adalah Objek (O).",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              '"Keberagaman budaya harus dihormati oleh seluruh masyarakat."',
            question: "Kata keberagaman menunjukkan fungsi imbuhan apa?",
            options: [
              { id: "a", text: "Membentuk nomina abstrak" },
              { id: "b", text: "Membentuk verba transitif" },
              { id: "c", text: "Membentuk adjektiva intensif" },
              { id: "d", text: "Membentuk nomina konkret" },
              {
                id: "e",
                text: "Membentuk adjektiva deskriptif",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Konfiks ke-an pada kata dasar 'beragam' membentuk kata 'keberagaman'. Imbuhan ke-an di sini berfungsi untuk membentuk kata benda (nomina) yang menyatakan hal, keadaan, atau konsep yang abstrak.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Manakah yang merupakan kata serapan dengan ejaan yang sudah disesuaikan?",
            options: [
              { id: "a", text: "Sistem" },
              { id: "b", text: "Logika" },
              { id: "c", text: "Teknik" },
              { id: "d", text: "Biologi" },
              { id: "e", text: "Filosofi" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'sistem' adalah contoh kata serapan yang ejaannya sering diuji. Kata ini diserap dari bahasa Inggris 'system' atau Belanda 'systeem', dan bentuk bakunya disesuaikan menjadi 'sistem' (bukan 'sistim').",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              '"Penggunaan strategi komunikasi yang efektif dapat meningkatkan kepercayaan publik."',
            question: "Kata strategi termasuk jenis kata:",
            options: [
              { id: "a", text: "Nomina" },
              { id: "b", text: "Verba" },
              { id: "c", text: "Adjektiva" },
              { id: "d", text: "Adverbia" },
              { id: "e", text: "Pronomina" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'strategi' bermakna rencana yang cermat atau ilmu siasat. Kata ini merujuk pada suatu konsep atau hal, sehingga diklasifikasikan sebagai kata benda (nomina).",
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
      moduleDoc.name = "Sifat Kata";
      moduleDoc.description =
        "Materi mengenai sifat kata mencakup kata dasar, kata berimbuhan/afiksasi, kata ulang, kata serapan, dan jenis-jenis kata.";
      moduleDoc.subcategory = "Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Sifat Kata",
        description:
          "Materi mengenai sifat kata mencakup kata dasar, kata berimbuhan/afiksasi, kata ulang, kata serapan, dan jenis-jenis kata.",
        subcategory: "Kata",
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

seedSifatKata();
