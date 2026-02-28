const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedAntonim = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Pengetahuan dan Pemahaman Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "antonim";

    const stepsData = [
      {
        title: "Materi: Antonim",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian antonim, sifat-sifat antonim, dan contoh kata berantonim.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Antonim -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Antonim</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Antonim?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Antonim adalah hubungan semantik antara dua buah satuan ujaran yang mempunyai <strong>makna berkebalikan atau berlawanan</strong> antara satu sama lain.
                  </p>
                </div>
              </div>
            </section>

            <!-- Sifat-Sifat Antonim -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Sifat-Sifat Antonim</h3>

              <!-- Antonim Mutlak -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Antonim Bersifat Mutlak</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Antonim bersifat mutlak berarti kedua kata memiliki makna yang saling berlawanan secara <strong>mutlak dan tidak dapat dibantah</strong>.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh: Mati >< Hidup</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 text-justify">
                      Mati berantonim mutlak dengan kata hidup karena terdapat batas yang mutlak antara makna kedua kata tersebut. Sesuatu yang hidup tentu tidak mati, begitu pula dengan sesuatu yang mati, maka ia tidak hidup.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Antonim Relatif -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Antonim Bersifat Relatif (Gradasi)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Antonim bersifat relatif sering disebut sebagai antonim gradasi. Hal ini karena masih terdapat <strong>tingkatan makna</strong> pada kedua kata yang berantonim. Tingkatan makna tersebut tidak memiliki batas yang jelas antara satu dengan yang lain.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh: Kaya >< Miskin</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 text-justify">
                      Kedua kata tersebut berantonim relatif karena tidak ada batasan yang jelas antara standar kaya dan miskin. Tingkatan makna tersebut tampak memiliki gradasi, seperti adanya sebutan cukup kaya, kaya, dan sangat kaya.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Antonim Relasional -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Antonim Bersifat Relasional</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Makna kata yang memiliki sifat relasional (hubungan) ini <strong>saling melengkapi</strong>. Kehadiran kata yang satu dengan kata yang lain akan memiliki hubungan.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh: Menjual >< Membeli</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 text-justify">
                      Kata menjual dan membeli memiliki makna yang berlawanan, tetapi dalam proses kejadiannya berlaku serempak. Proses menjual dapat terjadi secara bersamaan dengan proses membeli, maka dapat dijumpai frasa jual-beli.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Antonim Hierarkial -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Antonim Bersifat Hierarkial</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Antonim dengan sifat ini menyatakan suatu <strong>deret jenjang atau tingkatan</strong> pada kata satu dengan kata lainnya. Maka dari itu, kata yang berantonim hierarkial berupa nama satuan ukuran (panjang, isi, dan berat), nama satuan hitungan dan pemenggalan, nama jenjang jabatan, dan lain sebagainya.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh: Meter >< Kilometer</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 text-justify">
                      Kata meter memiliki pasangan antonim kilometer karena kedua kata tersebut berada dalam deretan satuan panjang.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Antonim Majemuk -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Antonim Bersifat Majemuk</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Terdapat kata yang memiliki pasangan antonim <strong>lebih dari satu</strong>, yang disebut dengan antonim majemuk. Hal itu terjadi karena dalam pembendaharaan kosakata Bahasa Indonesia terdapat kata-kata yang memiliki oposisi makna terhadap lebih dari sebuah kata.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0">Duduk >< Berbaring >< Tiarap >< Jongkok</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Contoh Kata Berantonim -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Kata Berantonim</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Tabel 1 -->
                <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-body-l">
                      <thead>
                        <tr class="bg-Primary-600">
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Antonim</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Abadi</td><td class="px-4 py-2">Fana</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Abdi</td><td class="px-4 py-2">Majikan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Abolisi</td><td class="px-4 py-2">Pemberatan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Absen</td><td class="px-4 py-2">Hadir</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Abstrak</td><td class="px-4 py-2">Konkrit</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Absurd</td><td class="px-4 py-2">Rasional</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Adhesi</td><td class="px-4 py-2">Kohesi</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Afirmatif</td><td class="px-4 py-2">Negatif</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Akurat</td><td class="px-4 py-2">Meleset</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Akut</td><td class="px-4 py-2">Ringan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Altruisme</td><td class="px-4 py-2">Egoisme</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Amatir</td><td class="px-4 py-2">Ahli</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Dependen</td><td class="px-4 py-2">Independen</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Destruktif</td><td class="px-4 py-2">Konstruktif</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Dialog</td><td class="px-4 py-2">Monolog</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Diferensiasi</td><td class="px-4 py-2">Ekuivalensi</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Dinamis</td><td class="px-4 py-2">Statis</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Eksternal</td><td class="px-4 py-2">Internal</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Elastis</td><td class="px-4 py-2">Kaku</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Feminim</td><td class="px-4 py-2">Maskulin</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Generik</td><td class="px-4 py-2">Khusus</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Ilegal</td><td class="px-4 py-2">Legal</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Inferior</td><td class="px-4 py-2">Superior</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Jawab</td><td class="px-4 py-2">Tanya</td></tr>
                        <tr><td class="px-4 py-2">Kasar</td><td class="px-4 py-2">Halus</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Tabel 2 -->
                <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-body-l">
                      <thead>
                        <tr class="bg-Secondary-600">
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Antonim</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Anomali</td><td class="px-4 py-2">Normal</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Antipati</td><td class="px-4 py-2">Simpati</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Aktif</td><td class="px-4 py-2">Pasif</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Asli</td><td class="px-4 py-2">Palsu</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Berhasil</td><td class="px-4 py-2">Gagal</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Berubah</td><td class="px-4 py-2">Konstan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Boros</td><td class="px-4 py-2">Hemat</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Bukit</td><td class="px-4 py-2">Lembah</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Cabang</td><td class="px-4 py-2">Pusat</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Cepat</td><td class="px-4 py-2">Lambat</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Ceria</td><td class="px-4 py-2">Muram</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Curam</td><td class="px-4 py-2">Landai</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Kecil</td><td class="px-4 py-2">Besar</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Klasik</td><td class="px-4 py-2">Kontemporer</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Nomaden</td><td class="px-4 py-2">Tetap</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Orisinil</td><td class="px-4 py-2">Plagiat</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Pakar</td><td class="px-4 py-2">Awam</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Pandai</td><td class="px-4 py-2">Bodoh</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Pasca</td><td class="px-4 py-2">Pra</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Pejal</td><td class="px-4 py-2">Berongga</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Pemberani</td><td class="px-4 py-2">Penakut</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Plus</td><td class="px-4 py-2">Minus</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Positif</td><td class="px-4 py-2">Negatif</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Pro</td><td class="px-4 py-2">Kontra</td></tr>
                        <tr><td class="px-4 py-2">Regresif</td><td class="px-4 py-2">Progresif</td></tr>
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
        title: "Video: Antonim",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/-mzVE7-Wh4U",
        description: "Video pembelajaran tentang antonim.",
      },
      {
        title: "Video: Latihan Soal Antonim",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/w5SPKrM_vIE",
        description: "Video latihan soal mengenai antonim.",
      },
      {
        title: "Kuis Antonim",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Sekolah memiliki aturan. Setiap siswa harus mematuhi aturan yang berlaku dan mengetahui konsekuensi jika ada aturan yang tidak dipatuhi. Supaya tercipta kondisi yang tenang dan nyaman, siswa harus menegakkan aturan di sekolah dengan penuh keikhlasan.",
            question:
              "Antonim dari kata menegakkan sesuai makna dalam paragraf tersebut adalah...",
            options: [
              { id: "a", text: "Mengabaikan" },
              { id: "b", text: "Memiringkan" },
              { id: "c", text: "Melaksanakan" },
              { id: "d", text: "Meremehkan" },
              { id: "e", text: "Melakukan" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam konteks 'menegakkan aturan', kata tersebut bermakna mematuhi, melaksanakan, atau mempertahankan. Oleh karena itu, lawan kata (antonim) yang paling tepat adalah mengabaikan (tidak memedulikan aturan).",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question:
              "Tentukan apakah pernyataan berikut benar atau salah (Antonim Kata).",
            rows: [
              {
                id: "r1",
                text: "Antonim dari kata 'progresif' adalah 'statis'",
              },
              {
                id: "r2",
                text: "Antonim dari kata 'inovatif' adalah 'kreatif'",
              },
              {
                id: "r3",
                text: "Antonim dari kata 'eksplisit' adalah 'tersembunyi'",
              },
              {
                id: "r4",
                text: "Antonim dari kata 'dominasi' adalah 'penundukan'",
              },
              {
                id: "r5",
                text: "Antonim dari kata 'subjektif' adalah 'objektif'",
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
              r4: "false",
              r5: "true",
            },
            explanation:
              "1. Progresif (maju) >< Statis (diam) -> Benar. 2. Inovatif dan kreatif adalah bersinonim, bukan antonim -> Salah. 3. Eksplisit (terang-terangan/jelas) >< Implisit/tersembunyi -> Benar. 4. Dominasi dan penundukan memiliki makna yang searah (sinonim) -> Salah. 5. Subjektif >< Objektif -> Benar.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Mahkamah Agung (MA) menolak permohonan kasus tersangka narkoba internasional.",
            question:
              "Menerima merupakan ________ dari kata menolak pada kalimat tersebut.",
            options: [
              { id: "a", text: "Sinonim" },
              { id: "b", text: "Antonim" },
              { id: "c", text: "Homonim" },
              { id: "d", text: "Hiponim" },
              { id: "e", text: "Polisemi" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'menerima' adalah lawan kata atau antonim dari kata 'menolak'.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              '"Strategi yang adaptif sangat penting untuk menghadapi perubahan lingkungan bisnis."',
            question: "Antonim kata adaptif dalam kalimat tersebut adalah...",
            options: [
              { id: "a", text: "Kaku" },
              { id: "b", text: "Fleksibel" },
              { id: "c", text: "Progresif" },
              { id: "d", text: "Inovatif" },
              { id: "e", text: "Responsif" },
            ],
            correctAnswer: "a",
            explanation:
              "Adaptif berarti mudah menyesuaikan diri dengan keadaan. Lawan kata dari sifat mudah menyesuaikan diri (luwes/fleksibel) adalah kaku (tidak dapat diubah/susah menyesuaikan).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              '"Program ini bertujuan untuk meningkatkan kesejahteraan masyarakat."',
            question: "Antonim kata kesejahteraan adalah...",
            options: [
              { id: "a", text: "Kemiskinan" },
              { id: "b", text: "Ketidakadilan" },
              { id: "c", text: "Kesengsaraan" },
              { id: "d", text: "Kekurangan" },
              { id: "e", text: "Keterbatasan" },
            ],
            correctAnswer: "c",
            explanation:
              "Kesejahteraan bermakna hal atau keadaan sejahtera; aman, makmur, dan selamat. Antonim yang paling tepat untuk kesejahteraan adalah kesengsaraan.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              '"Perusahaan harus bersikap transparan dalam memberikan laporan keuangan."',
            question: "Antonim kata transparan adalah...",
            options: [
              { id: "a", text: "Tertutup" },
              { id: "b", text: "Buram" },
              { id: "c", text: "Gelap" },
              { id: "d", text: "Tidak jelas" },
              { id: "e", text: "Sulit dimengerti" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam konteks laporan, 'transparan' bermakna terbuka (tidak ada yang disembunyikan). Maka, antonim yang paling tepat adalah tertutup.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              '"Kebijakan ini bersifat inklusif dan mencakup semua golongan masyarakat."',
            question: "Antonim kata inklusif adalah...",
            options: [
              { id: "a", text: "Eksklusif" },
              { id: "b", text: "Tertutup" },
              { id: "c", text: "Terbatas" },
              { id: "d", text: "Khusus" },
              { id: "e", text: "Spesifik" },
            ],
            correctAnswer: "a",
            explanation:
              "Inklusif berarti memosisikan dirinya ke dalam tata cara yang sama/merangkum semua. Antonim mutlak dari inklusif adalah eksklusif (terpisah dari yang lain/khusus).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              '"Kemajuan teknologi membawa banyak manfaat bagi kehidupan manusia."',
            question: "Antonim kata kemajuan adalah...",
            options: [
              { id: "a", text: "Keterbelakangan" },
              { id: "b", text: "Kemandekan" },
              { id: "c", text: "Penurunan" },
              { id: "d", text: "Kehancuran" },
              { id: "e", text: "Kekacauan" },
            ],
            correctAnswer: "a",
            explanation:
              "Kemajuan berarti keadaan maju (berkembang). Antonim yang paling sesuai untuk menggambarkan lawan dari kemajuan adalah keterbelakangan (atau kemunduran).",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              '"Krisis ekonomi global menimbulkan ketidakstabilan di berbagai sektor."',
            question: "Antonim kata krisis adalah...",
            options: [
              { id: "a", text: "Keberlimpahan" },
              { id: "b", text: "Keseimbangan" },
              { id: "c", text: "Stabilitas" },
              { id: "d", text: "Ketenangan" },
              { id: "e", text: "Kemakmuran" },
            ],
            correctAnswer: "e",
            explanation:
              "Krisis (dalam konteks ekonomi) berarti keadaan yang suram, genting, atau kemelut. Antonim dari keadaan ekonomi yang krisis/suram adalah keadaan yang sejahtera atau kemakmuran.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              '"Produk lokal kini semakin kompetitif di pasar internasional."',
            question: "Antonim kata kompetitif adalah...",
            options: [
              { id: "a", text: "Tidak bersaing" },
              { id: "b", text: "Tidak mampu" },
              { id: "c", text: "Tidak kompeten" },
              { id: "d", text: "Tidak seimbang" },
              { id: "e", text: "Tidak unggul" },
            ],
            correctAnswer: "a",
            explanation:
              "Kompetitif berhubungan dengan kompetisi; bersifat persaingan atau mampu bersaing. Maka antonimnya secara langsung adalah tidak bersaing.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              '"Pembangunan infrastruktur yang masif meningkatkan konektivitas antarwilayah."',
            question: "Antonim kata konektivitas adalah...",
            options: [
              { id: "a", text: "Disintegritas" },
              { id: "b", text: "Ketidakselarasan" },
              { id: "c", text: "Ketidakterhubungan" },
              { id: "d", text: "Fragmentasi" },
              { id: "e", text: "Kekacauan" },
            ],
            correctAnswer: "c",
            explanation:
              "Konektivitas berarti keterhubungan atau kemampuan untuk terhubung. Lawan katanya adalah keadaan di mana hal tersebut tidak terhubung (ketidakterhubungan).",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              '"Pemerintah berupaya menciptakan sistem pendidikan yang merata di seluruh wilayah."',
            question: "Antonim kata merata adalah...",
            options: [
              { id: "a", text: "Tidak adil" },
              { id: "b", text: "Tidak seimbang" },
              { id: "c", text: "Terpusat" },
              { id: "d", text: "Tidak setara" },
              { id: "e", text: "Timpang" },
            ],
            correctAnswer: "e",
            explanation:
              "Merata berarti tersebar/terbagi sama ke seluruh bagian. Antonim dari keadaan yang merata atau seimbang adalah timpang (berat sebelah atau tidak merata).",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              '"Pemimpin yang otoriter cenderung kurang disukai dibandingkan pemimpin yang demokratis."',
            question: "Antonim kata otoriter adalah...",
            options: [
              { id: "a", text: "Liberal" },
              { id: "b", text: "Demokratis" },
              { id: "c", text: "Bebas" },
              { id: "d", text: "Transparan" },
              { id: "e", text: "Adil" },
            ],
            correctAnswer: "b",
            explanation:
              "Otoriter berarti berkuasa sendiri atau sewenang-wenang. Dalam sistem atau gaya kepemimpinan, lawan utama dari otoriter adalah demokratis (melibatkan musyawarah/banyak pihak).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              '"Strategi yang diterapkan cukup fleksibel sehingga mampu menyesuaikan dengan situasi."',
            question: "Antonim kata fleksibel adalah...",
            options: [
              { id: "a", text: "Stabil" },
              { id: "b", text: "Tertutup" },
              { id: "c", text: "Kaku" },
              { id: "d", text: "Sempit" },
              { id: "e", text: "Tidak efektif" },
            ],
            correctAnswer: "c",
            explanation:
              "Fleksibel berarti luwes atau mudah menyesuaikan diri. Antonimnya adalah kaku (tidak mudah berubah atau sukar menyesuaikan diri).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              '"Penanganan bencana membutuhkan langkah yang cepat dan tanggap."',
            question: "Antonim kata tanggap adalah...",
            options: [
              { id: "a", text: "Tidak peduli" },
              { id: "b", text: "Lambat" },
              { id: "c", text: "Tidak responsif" },
              { id: "d", text: "Tidak cekatan" },
              { id: "e", text: "Tidak sadar" },
            ],
            correctAnswer: "c",
            explanation:
              "Tanggap bermakna segera mengetahui keadaan dan memperhatikan (responsif). Lawan kata dari responsif/tanggap adalah tidak responsif.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Antonim";
      moduleDoc.description =
        "Materi mengenai antonim mencakup pengertian antonim, sifat-sifat antonim (mutlak, relatif, relasional, hierarkial, majemuk), dan contoh kata berantonim.";
      moduleDoc.subcategory = "Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Antonim",
        description:
          "Materi mengenai antonim mencakup pengertian antonim, sifat-sifat antonim (mutlak, relatif, relasional, hierarkial, majemuk), dan contoh kata berantonim.",
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

seedAntonim();
