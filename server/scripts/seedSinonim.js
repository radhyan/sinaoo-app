const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSinonim = async () => {
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

    const targetId = "sinonim";

    const stepsData = [
      {
        title: "Materi: Sinonim",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian sinonim, jenis-jenis sinonim, dan contoh kata bersinonim.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Sinonim -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Sinonim</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Sinonim?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Menurut Kamus Besar Bahasa Indonesia (KBBI), sinonim adalah bahasa yang memiliki <strong>makna mirip atau sama</strong> dengan bentuk bahasa lain. Jika terdapat dua kata dengan makna yang mirip, maka dapat dikatakan bahwa kata tersebut bersinonim.
                  </p>
                </div>
              </div>
            </section>

            <!-- Jenis-Jenis Sinonim -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-Jenis Sinonim</h3>

              <p class="text-body-l text-Grayscale-700 mb-6 text-justify">
                Kata-kata yang bersinonim dapat saling menggantikan tanpa mengubah makna dalam berbagai konteks, namun bisa juga tidak. Hal tersebut bergantung pada jenis sinonim.
              </p>

              <!-- Sinonim Persis -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Sinonim Persis (Sinonim Mutlak/Absolut)</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Sinonim persis merupakan kata-kata dengan <strong>makna sama</strong> dan dapat saling menggantikan dalam berbagai konteks kalimat.
                  </p>

                  <div class="bg-Secondary-50 p-4 rounded-lg mb-4">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Bisa</strong> = <strong>dapat</strong></li>
                      <li><strong>Ahli</strong> = <strong>pakar</strong></li>
                    </ul>
                  </div>

                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Kata-kata tersebut dapat digunakan untuk saling menggantikan dalam berbagai konteks kalimat.
                  </p>

                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh dalam kalimat:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li>Semua orang <em>bisa</em> mengikuti festival tersebut = Semua orang <em>dapat</em> mengikuti festival tersebut.</li>
                      <li>Kuliah umum kali ini akan disampaikan oleh <em>ahli</em> kesehatan = Kuliah umum kali ini akan disampaikan oleh <em>pakar</em> kesehatan.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Sinonim Mirip -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Sinonim Mirip</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Sinonim mirip merupakan kata-kata dengan <strong>makna mirip</strong> dan dapat saling menggantikan dalam konteks kalimat tertentu. Jadi, tidak semua kalimat yang memuat kata tersebut dapat digantikan oleh kata lainnya yang memiliki makna mirip.
                  </p>

                  <div class="bg-Tertiary-50 p-4 rounded-lg mb-4">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh: Bagus = Baik</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li>Artikel tersebut sangat <em>bagus</em> untuk dibaca. = Artikel tersebut sangat <em>baik</em> untuk dibaca. ✅</li>
                      <li><em>Baik</em>, bu, saya akan mengingat nasihat ibu. ≠ <em>Bagus</em>, bu, saya akan mengingat nasihat ibu. ❌</li>
                    </ul>
                  </div>

                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Pada kedua kalimat tersebut, kata <em>bagus</em> dan <em>baik</em> memiliki makna berbeda saat digunakan dalam konteks kalimat yang sama. Dua kata yang bersinonim tersebut <strong>tidak selalu bisa saling menggantikan</strong>. Kalaupun dipaksakan untuk saling menggantikan dalam konteks tertentu, maknanya akan berbeda.
                  </p>
                </div>
              </div>
            </section>

            <!-- Contoh Kata Bersinonim -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Kata Bersinonim</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Tabel 1 -->
                <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden">
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-body-l">
                      <thead>
                        <tr class="bg-Primary-600">
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Sinonim</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Abolisi</td><td class="px-4 py-2">Penghapusan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Abrasi</td><td class="px-4 py-2">Pengikisan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Absen</td><td class="px-4 py-2">Bolos</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Absolut</td><td class="px-4 py-2">Mutlak</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Absorpsi</td><td class="px-4 py-2">Penyerapan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Adagium</td><td class="px-4 py-2">Pepatah</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Adaptasi</td><td class="px-4 py-2">Penyesuaian</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Adiktif</td><td class="px-4 py-2">Bersifat candu</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Ad interim</td><td class="px-4 py-2">Sementara</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Anulir</td><td class="px-4 py-2">Penghapusan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Apatis</td><td class="px-4 py-2">Acuh tak acuh</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Aristokrat</td><td class="px-4 py-2">Bangsawan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Artifisial</td><td class="px-4 py-2">Buatan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Asa</td><td class="px-4 py-2">Harapan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Autentik</td><td class="px-4 py-2">Asli</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Bagak</td><td class="px-4 py-2">Berani</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Baku</td><td class="px-4 py-2">Pokok</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Bergeming</td><td class="px-4 py-2">Diam</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Bibliografi</td><td class="px-4 py-2">Daftar pustaka</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Citra</td><td class="px-4 py-2">Gambaran</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Daur</td><td class="px-4 py-2">Siklus</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Dispensasi</td><td class="px-4 py-2">Pengecualian</td></tr>
                        <tr><td class="px-4 py-2">Divestasi</td><td class="px-4 py-2">Pelepasan</td></tr>
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
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Sinonim</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Afeksi</td><td class="px-4 py-2">Kasih sayang</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Afirmasi</td><td class="px-4 py-2">Penegasan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Agitasi</td><td class="px-4 py-2">Hasutan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Agresi</td><td class="px-4 py-2">Serangan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Akreditasi</td><td class="px-4 py-2">Pengakuan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Amatir</td><td class="px-4 py-2">Pemula</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Ambigu</td><td class="px-4 py-2">Makna ganda</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Anemia</td><td class="px-4 py-2">Kurang darah</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Anomali</td><td class="px-4 py-2">Menyimpang</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Dedikasi</td><td class="px-4 py-2">Pengabdian</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">De facto</td><td class="px-4 py-2">Kenyataan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Defleksi</td><td class="px-4 py-2">Penyimpangan</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Degradasi</td><td class="px-4 py-2">Kemerosotan</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Dekade</td><td class="px-4 py-2">Dasawarsa</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Dekadensi</td><td class="px-4 py-2">Kemerosotan moral</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Delik</td><td class="px-4 py-2">Tidak pidana</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Dependen</td><td class="px-4 py-2">Tergantung</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Dikotomi</td><td class="px-4 py-2">Dibagi dua</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="px-4 py-2">Dinamis</td><td class="px-4 py-2">Bergerak</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="px-4 py-2">Doktrin</td><td class="px-4 py-2">Ajaran</td></tr>
                        <tr><td class="px-4 py-2">Egaliter</td><td class="px-4 py-2">Sama, sederajat</td></tr>
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
        title: "Video: Sinonim",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/8qXNjmZklW4",
        description: "Video pembelajaran tentang sinonim.",
      },
      {
        title: "Video: Latihan Soal Sinonim",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/w5SPKrM_vIE",
        description: "Video latihan soal mengenai sinonim.",
      },
      {
        title: "Kuis Sinonim",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: '"Siang itu, sampah berserakan di halaman sekolah."',
            question:
              "Sinonim kata bergaris bawah dalam kalimat tersebut adalah...",
            options: [
              { id: "a", text: "Beterbangan" },
              { id: "b", text: "Mengonggok" },
              { id: "c", text: "Berhamburan" },
              { id: "d", text: "Bertebaran" },
              { id: "e", text: "Bergantungan" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'berserakan' memiliki arti berantakan atau tersebar ke mana-mana. Sinonim yang paling tepat untuk kata ini adalah 'bertebaran' (atau berhamburan). Pilihan 'bertebaran' mengindikasikan sesuatu yang tersebar tidak beraturan.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question:
              "Tentukan apakah pernyataan di kolom pertama benar atau salah.",
            rows: [
              {
                id: "r1",
                text: "Kata elaborasi bersinonim dengan penjabaran.",
              },
              {
                id: "r2",
                text: "Kata validasi memiliki sinonim penguatan.",
              },
              {
                id: "r3",
                text: "Kata komprehensif berarti sebagian.",
              },
              {
                id: "r4",
                text: "Kata paradigma memiliki arti yang sama dengan kerangka pikir.",
              },
              {
                id: "r5",
                text: "Kata subjektif memiliki sinonim tidak berpihak.",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "false",
              r4: "true",
              r5: "false",
            },
            explanation:
              "1. Elaborasi = penjelasan/penjabaran lebih lanjut (Benar). 2. Validasi = pengesahan/penguatan kebenaran (Benar). 3. Komprehensif = menyeluruh/luas, bukan sebagian (Salah). 4. Paradigma = model/kerangka pikir (Benar). 5. Subjektif = menurut pandangan sendiri/berpihak, lawan dari tidak berpihak/objektif (Salah).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Dispensasi merupakan ________ dari kata pengecualian.",
            options: [
              { id: "a", text: "Antonim" },
              { id: "b", text: "Sinonim" },
              { id: "c", text: "Homonim" },
              { id: "d", text: "Hiponim" },
              { id: "e", text: "Polisemi" },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan KBBI, dispensasi berarti pengecualian dari aturan karena adanya pertimbangan yang khusus. Maka, keduanya memiliki hubungan kemaknaan yang sama atau bersinonim.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              '"Langkah pemerintah dalam meregulasi sistem distribusi bahan pokok mendapat apresiasi dari berbagai pihak."',
            question: "Sinonim kata meregulasi dalam kalimat tersebut adalah:",
            options: [
              { id: "a", text: "Menetapkan" },
              { id: "b", text: "Mengatur" },
              { id: "c", text: "Menyediakan" },
              { id: "d", text: "Meninjau" },
              { id: "e", text: "Memprioritaskan" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'meregulasi' berasal dari kata dasar regulasi yang berarti aturan atau pengaturan. Oleh karena itu, meregulasi berarti mengatur atau menertibkan sesuai aturan.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              '"Penelitian ini bertujuan untuk mengidentifikasi faktor-faktor yang memengaruhi perilaku konsumen."',
            question: "Sinonim kata mengidentifikasi adalah:",
            options: [
              { id: "a", text: "Menentukan" },
              { id: "b", text: "Menggali" },
              { id: "c", text: "Mengenali" },
              { id: "d", text: "Menyesuaikan" },
              { id: "e", text: "Memahami" },
            ],
            correctAnswer: "c",
            explanation:
              "Mengidentifikasi berarti menentukan atau menetapkan identitas (orang, benda, dsb). Sinonim yang paling sepadan dalam bahasa Indonesia baku adalah mengenali (mengetahui ciri-ciri atau identitas).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              '"Perusahaan itu harus mampu beradaptasi dengan dinamika pasar global."',
            question: "Sinonim kata dinamika adalah...",
            options: [
              { id: "a", text: "Perubahan" },
              { id: "b", text: "Tantangan" },
              { id: "c", text: "Kesulitan" },
              { id: "d", text: "Perkembangan" },
              { id: "e", text: "Interaksi" },
            ],
            correctAnswer: "d",
            explanation:
              "Dinamika berarti gerak (dari dalam) atau sesuatu yang terus bergerak dan berkembang. Dalam konteks ekonomi atau pasar, dinamika sering disinonimkan dengan perkembangan atau perubahan yang progresif.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              '"Upaya pemerintah dalam memitigasi dampak bencana perlu diapresiasi."',
            question: "Sinonim kata memitigasi adalah...",
            options: [
              { id: "a", text: "Mengurangi" },
              { id: "b", text: "Menyelesaikan" },
              { id: "c", text: "Mencegah" },
              { id: "d", text: "Mengelola" },
              { id: "e", text: "Mengantisipasi" },
            ],
            correctAnswer: "a",
            explanation:
              "Mitigasi adalah tindakan atau upaya untuk mengurangi keparahan, penderitaan, atau dampak dari suatu bencana. Jadi, memitigasi sama dengan mengurangi (risiko/dampak).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              '"Diskusi yang produktif ini berhasil menghasilkan konsensus yang menguntungkan semua pihak."',
            question: "Sinonim kata konsensus adalah...",
            options: [
              { id: "a", text: "Kesepakatan" },
              { id: "b", text: "Pemahaman" },
              { id: "c", text: "Kerja sama" },
              { id: "d", text: "Keputusan" },
              { id: "e", text: "Pendapat" },
            ],
            correctAnswer: "a",
            explanation:
              "Konsensus berarti kesepakatan kata atau permufakatan bersama (mengenai pendapat, pendirian, dan sebagainya) yang dicapai melalui kebulatan suara.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              '"Perluasan wilayah industri tanpa perencanaan dapat menimbulkan dampak yang signifikan."',
            question: "Sinonim kata signifikan adalah...",
            options: [
              { id: "a", text: "Besar" },
              { id: "b", text: "Penting" },
              { id: "c", text: "Berarti" },
              { id: "d", text: "Berpengaruh" },
              { id: "e", text: "Fundamental" },
            ],
            correctAnswer: "c",
            explanation:
              "Signifikan berarti penting atau berarti. Dalam frasa 'dampak yang signifikan', artinya dampaknya sangat berarti atau sangat terasa.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              '"Penggunaan teknologi modern menjadi katalis dalam proses produksi."',
            question: "Sinonim kata katalis adalah...",
            options: [
              { id: "a", text: "Pendorong" },
              { id: "b", text: "Perantara" },
              { id: "c", text: "Penyebab" },
              { id: "d", text: "Pelaksana" },
              { id: "e", text: "Pelopor" },
            ],
            correctAnswer: "a",
            explanation:
              "Secara kiasan, katalis (atau katalisator) adalah seseorang atau sesuatu yang menyebabkan terjadinya perubahan dan menimbulkan kejadian baru atau mempercepat suatu peristiwa. Sinonim paling pas adalah pendorong.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              '"Penanganan masalah sosial membutuhkan sinergi antara pemerintah dan masyarakat."',
            question: "Sinonim kata sinergi adalah...",
            options: [
              { id: "a", text: "Kerja sama" },
              { id: "b", text: "Komunikasi" },
              { id: "c", text: "Hubungan" },
              { id: "d", text: "Integrasi" },
              { id: "e", text: "Koordinasi" },
            ],
            correctAnswer: "a",
            explanation:
              "Sinergi adalah kegiatan atau operasi gabungan. Kata ini bersinonim dengan kerja sama yang menghasilkan efek yang lebih besar ketimbang jika dilakukan secara individu.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              '"Strategi yang diterapkan perusahaan telah menunjukkan efisiensi yang optimal."',
            question:
              "Sinonim kata efisiensi berdasarkan konteks kalimat tersebut adalah...",
            options: [
              { id: "a", text: "Produktivitas" },
              { id: "b", text: "Ketepatan" },
              { id: "c", text: "Kecermatan" },
              { id: "d", text: "Kehematan" },
              { id: "e", text: "Keteraturan" },
            ],
            correctAnswer: "d",
            explanation:
              "Efisiensi berarti ketepatan cara (usaha, kerja) dalam menjalankan sesuatu (dengan tidak membuang-buang waktu, tenaga, biaya). Sinonim yang tepat adalah kehematan atau daya guna.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              '"Reformasi sistem pendidikan menjadi agenda prioritas pemerintah."',
            question:
              "Sinonim kata reformasi berdasarkan konteks kalimat tersebut adalah...",
            options: [
              { id: "a", text: "Perubahan" },
              { id: "b", text: "Perbaikan" },
              { id: "c", text: "Penyesuaian" },
              { id: "d", text: "Pemutakhiran" },
              { id: "e", text: "Transformasi" },
            ],
            correctAnswer: "b",
            explanation:
              "Reformasi secara harfiah berarti perubahan yang bersifat radikal/drastis untuk perbaikan di berbagai bidang (sosial, politik, atau agama). Oleh karena itu, intinya adalah perbaikan struktur atau sistem yang sudah ada.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: '"Keputusan itu dibuat berdasarkan asas transparansi."',
            question: "Sinonim kata transparansi adalah...",
            options: [
              { id: "a", text: "Keterbukaan" },
              { id: "b", text: "Kejujuran" },
              { id: "c", text: "Keadilan" },
              { id: "d", text: "Keseimbangan" },
              { id: "e", text: "Ketepatan" },
            ],
            correctAnswer: "a",
            explanation:
              "Transparansi berasal dari kata transparan yang berarti nyata, jelas, atau dapat dilihat (tembus pandang). Dalam tata kelola, transparansi bermakna keterbukaan informasi.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              '"Para ahli menyarankan adanya diversifikasi produk untuk meningkatkan daya saing."',
            question: "Sinonim kata diversifikasi adalah...",
            options: [
              { id: "a", text: "Pengembangan" },
              { id: "b", text: "Penyederhanaan" },
              { id: "c", text: "Penambahan" },
              { id: "d", text: "Penyesuaian" },
              { id: "e", text: "Peningkatan" },
            ],
            correctAnswer: "a",
            explanation:
              "Diversifikasi berarti penganekaragaman atau pembuatan menjadi beragam. Dalam bisnis, diversifikasi identik dengan proses inovasi atau pengembangan ragam produk baru.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Sinonim";
      moduleDoc.description =
        "Materi mengenai sinonim mencakup pengertian sinonim, jenis-jenis sinonim (persis dan mirip), serta contoh kata bersinonim.";
      moduleDoc.subcategory = "Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Sinonim",
        description:
          "Materi mengenai sinonim mencakup pengertian sinonim, jenis-jenis sinonim (persis dan mirip), serta contoh kata bersinonim.",
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

seedSinonim();
