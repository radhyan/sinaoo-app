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
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Kualitas Simpulan?</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-6">
          Kualitas simpulan adalah kemampuan untuk menarik kesimpulan yang didukung oleh seberapa tepat dan kuatnya bukti dari informasi yang ada. Dalam soal TPS, kita sering diminta menentukan apakah suatu pernyataan itu benar, salah, atau tidak relevan berdasarkan teks.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div class="bg-white border-2 border-Success-100 rounded-md p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Success-400 mb-2 font-heading">Pasti Benar</h5>
            <p class="text-body-l m-0 text-Grayscale-700">Semua informasi pada kesimpulan sama dengan yang ada di teks.</p>
          </div>
          <div class="bg-white border-2 border-Error-100 rounded-md p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Error-400 mb-2 font-heading">Pasti Salah</h5>
            <p class="text-body-l m-0 text-Grayscale-700">Semua informasi pada kesimpulan bertentangan/kebalikan dengan informasi teks.</p>
          </div>
          <div class="bg-white border-2 border-Secondary-200 rounded-md p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Secondary-400 mb-2 font-heading">Mungkin Benar/Salah</h5>
            <p class="text-body-l m-0 text-Grayscale-700">Informasi teks benar, namun kesimpulan memiliki dua kemungkinan hasil.</p>
          </div>
          <div class="bg-white border-2 border-Grayscale-200 rounded-md p-6 shadow-sm">
            <h5 class="text-h5 font-bold text-Grayscale-600 mb-2 font-heading">Tidak Relevan</h5>
            <p class="text-body-l m-0 text-Grayscale-700">Informasi cukup, tapi simpulan membahas hal di luar topik pembahasan.</p>
          </div>
          <div class="bg-white border-2 border-Grayscale-200 rounded-md p-6 shadow-sm overflow-hidden border-dashed">
            <h5 class="text-h5 font-bold text-Grayscale-500 mb-2 font-heading">Informasi Tidak Cukup</h5>
            <p class="text-body-l m-0 text-Grayscale-700">Teks kekurangan premis sehingga simpulan tidak dapat dinilai.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Analisis Kasus (Contoh Soal)</h3>
        <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100 mb-4">
          <p class="italic text-justify m-0 text-body-l text-Primary-900">"Sebuah survei dilakukan terhadap 100 siswa di sekolah A untuk mengetahui preferensi metode belajar. Sebanyak 70% siswa memilih metode diskusi kelompok, sementara 30% lainnya memilih metode ceramah. Alasan utama siswa memilih metode diatas adalah kenyamanan pribadi. Namun, survei tidak mencakup data dari sekolah lain."</p>
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-Grayscale-100">
            <div class="w-8 h-8 rounded-full bg-Success-50/50 flex items-center justify-center text-Success-400 font-bold shrink-0 shadow-sm">1</div>
            <div>
              <p class="font-bold m-0 text-body-l mb-1">Simpulan: Sebagian besar siswa di sekolah A lebih menyukai metode diskusi kelompok.</p>
              <p class="text-body-l m-0 text-Grayscale-600"><span class="text-Success-400 font-bold">Pasti Benar.</span> 70% > 50% (mayoritas).</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-Grayscale-100">
            <div class="w-8 h-8 rounded-full bg-Grayscale-100 flex items-center justify-center text-Grayscale-800 font-bold shrink-0 shadow-l">2</div>
            <div>
              <p class="font-bold m-0 text-body-l mb-1">Simpulan: Metode diskusi kelompok adalah metode paling efektif untuk meningkatkan pemahaman.</p>
              <p class="text-body-l m-0 text-Grayscale-600"><span class="text-Grayscale-800 font-bold">Informasi Tidak Cukup.</span> Teks membahas preferensi, bukan efektivitas.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-Grayscale-100">
            <div class="w-8 h-8 rounded-full bg-Error-50/50 flex items-center justify-center text-Error-400 font-bold shrink-0 shadow-l">3</div>
            <div>
              <p class="font-bold m-0 text-body-l mb-1">Simpulan: Seluruh siswa di sekolah A lebih menyukai metode diskusi kelompok.</p>
              <p class="text-body-l m-0 text-Grayscale-600"><span class="text-Error-400 font-bold">Pasti Salah.</span> Karena 30% memilih ceramah.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Opini, Fakta, dan Argumen</h3>
        <div class="bg-white rounded-lg border border-Primary-400 overflow-hidden mb-6">
          <table class="w-full text-left border-collapse my-0 border-hidden">
            <thead class="bg-Primary-50">
              <tr>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5">Kriteria</th>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5">Fakta</th>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5">Opini</th>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5">Argumen</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                <td class="p-4 border border-Primary-100 text-center font-bold text-body-l">Definisi</td>
                <td class="p-4 border border-Primary-100 text-body-l">Informasi yang dapat dibuktikan kebenarannya secara objektif.</td>
                <td class="p-4 border border-Primary-100 text-body-l">Pandangan atau pendapat pribadi yang bersifat subjektif.</td>
                <td class="p-4 border border-Primary-100 text-body-l">Alasan yang digunakan untuk mendukung opini (Premis + Konklusi).</td>
              </tr>
              <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                <td class="p-4 border border-Primary-100 text-center font-bold text-body-l">Contoh</td>
                <td class="p-4 border border-Primary-100 text-body-l">
                  <ul class="list-disc pl-4 space-y-1">
                    <li>Nusantara adalah ibu kota Indonesia.</li>
                    <li>Suhu rata-rata Semarang mencapai 30°C.</li>
                  </ul>
                </td>
                <td class="p-4 border border-Primary-100 text-body-l">
                  <ul class="list-disc pl-4 space-y-1">
                    <li>Metode diskusi lebih efektif dari ceramah.</li>
                    <li>Membaca buku lebih menyenangkan dari TV.</li>
                  </ul>
                </td>
                <td class="p-4 border border-Primary-100 text-body-l italic">
                  "Tidur cukup meningkatkan konsentrasi. Siswa yang tidur cukup lebih mudah ingat pelajaran. Maka, siswa tidur cukup lebih berhasil."
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Memperlemah vs Tidak Memperlemah</h3>
        <div class="flex flex-col md:flex-row gap-6 mb-8">
          <div class="flex-1 bg-white p-6 rounded-lg border-2 border-Error-50 shadow-sm">
            <h5 class="text-h5 font-bold text-Error-400 mb-3 font-heading">Memperlemah</h5>
            <p class="text-body-l text-Grayscale-900">Pernyataan yang menentang argumen atau memberikan data yang bertentangan.</p>
          </div>
          <div class="flex-1 bg-white p-6 rounded-lg border-2 border-Success-50 shadow-sm">
            <h5 class="text-h5 font-bold text-Success-400 mb-3 font-heading">Tidak Memperlemah</h5>
            <p class="text-body-l text-Grayscale-900">Pernyataan yang mendukung (memperkuat) atau bersifat netral terhadap argumen.</p>
          </div>
        </div>

        <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100 mb-8">
          <p class="text-body-l text-Grayscale-900 leading-relaxed italic">
            "Jumlah anak yang menggunakan gadget saat ini semakin banyak. Ahli psikologi anak menyebutkan bahwa penggunaan gadget yang berlebihan pada anak-anak dapat mempengaruhi perkembangan sosial dan emosional mereka. Manakah pernyataan-pernyataan berikut yang MEMPERLEMAH dan TIDAK MEMPERLEMAH pendapat ahli psikologi anak tersebut?"
          </p>
        </div>

        <div class="bg-white rounded-lg border border-Primary-400 overflow-hidden mb-6">
          <table class="w-full text-left border-collapse my-0 border-hidden">
            <thead class="bg-Primary-50">
              <tr>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5" style="width: 40%;">Pernyataan</th>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5" style="width: 15%;">Tidak Memperlemah</th>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5" style="width: 15%;">Memperlemah</th>
                <th class="p-4 text-center text-Primary-900 font-bold border border-Primary-400 text-h5" style="width: 30%;">Alasan</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                <td class="p-4 border border-Primary-100 text-body-l">Studi menunjukkan anak yang terlalu banyak bermain gadget cenderung sulit berkomunikasi dengan teman sebaya.</td>
                <td class="p-4 border border-Primary-100 text-center text-h4 text-Success-500">✓</td>
                <td class="p-4 border border-Primary-100 text-center text-h4"></td>
                <td class="p-4 border border-Primary-100 text-body-l">Relevan dengan pendapat ahli bahwa penggunaan gadget berlebihan mengganggu perkembangan sosial anak.</td>
              </tr>
              <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                <td class="p-4 border border-Primary-100 text-body-l">Banyak anak yang menggunakan gadget untuk belajar dan meningkatkan keterampilan akademik.</td>
                <td class="p-4 border border-Primary-100 text-center text-h4"></td>
                <td class="p-4 border border-Primary-100 text-center text-h4 text-Error-500">✓</td>
                <td class="p-4 border border-Primary-100 text-body-l">Bertentangan dengan pendapat ahli karena menyoroti manfaat gadget.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      `,
      },
      {
        title: "Video Pembelajaran: Kualitas Simpulan",
        type: "video",
        status: "locked",
        videoUrl:
          "https://www.youtube.com/embed/mj8GEdMqM24?si=DFBMhCa4JkdWWotw",
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
            question:
              "Pohon durian dapat berbuah baik jika diberi pupuk DAN disiram. Niki mempunyai pohon durian yang berbuah TIDAK baik. Manakah simpulan yang BENAR?",
            options: [
              { id: "a", text: "Simpulan tersebut pasti benar." },
              { id: "b", text: "Simpulan tersebut pasti salah." },
              { id: "c", text: "Simpulan tersebut mungkin benar." },
              {
                id: "d",
                text: "Simpulan tidak relevan dengan informasi yang diberikan.",
              },
              {
                id: "e",
                text: "Simpulan tidak dapat dinilai karena informasi tidak cukup.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Syarat berbuah baik adalah (Pupuk AND Siram). Jika berbuah TIDAK baik, artinya syarat tidak terpenuhi. Penyebabnya bisa tiga kemungkinan: (1) Tidak Pupuk tapi Siram, (2) Pupuk tapi Tidak Siram, atau (3) Tidak Pupuk dan Tidak Siram. Simpulan 'Tidak Pupuk dan Tidak Siram' hanyalah SALAH SATU kemungkinan, jadi statusnya 'Mungkin Benar'.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "Energi terbarukan dianggap lebih ramah lingkungan karena menghasilkan polusi dan emisi karbon jauh lebih rendah. Manakah pernyataan yang PASTI BENAR?",
            options: [
              {
                id: "a",
                text: "Energi terbarukan memerlukan biaya yang jauh lebih rendah daripada bahan bakar fosil.",
              },
              {
                id: "b",
                text: "Penggunaan energi terbarukan dapat menurunkan kualitas udara.",
              },
              {
                id: "c",
                text: "Energi terbarukan hanya dapat menggantikan sebagian kecil kebutuhan energi fosil.",
              },
              {
                id: "d",
                text: "Peningkatan gas di udara bisa diatasi dengan penggunaan energi terbarukan.",
              },
              {
                id: "e",
                text: "Dampak perubahan iklim berkurang jika energi terbarukan banyak digunakan.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Teks menyatakan energi terbarukan menghasilkan emisi karbon jauh lebih rendah. Emisi karbon adalah penyebab utama perubahan iklim. Maka, secara logis, penggunaan energi terbarukan akan mengurangi dampak perubahan iklim.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Pakar A: Transportasi efisien -> Macet rendah. Pakar B: Transportasi umum tak signifikan tanpa batasan kendaraan pribadi. Data: Kota Y (Transport efisien) macet turun 50%. Kota Z (Tanpa batasan pribadi) macet turun 10%.",
            options: [
              { id: "a", text: "Memperkuat pernyataan pakar transportasi A." },
              { id: "b", text: "Memperlemah pernyataan pakar transportasi A." },
              { id: "c", text: "Memperkuat pernyataan pakar transportasi B." },
              {
                id: "d",
                text: "Memperkuat pernyataan pakar transportasi A dan B.",
              },
              {
                id: "e",
                text: "Tidak relevan dengan pernyataan pakar transportasi A dan B.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Data Kota Y menunjukkan penurunan macet drastis (50%) hanya dengan transportasi umum yang efisien (tanpa disebutkan adanya pembatasan kendaraan). Ini secara langsung membuktikan klaim Pakar A bahwa transportasi efisien menurunkan kemacetan, dan melemahkan klaim Pakar B yang bilang itu 'tidak signifikan'.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Penelitian: Deterjen alami ramah lingkungan tapi butuh waktu/tenaga ekstra. Deterjen kimia lebih efektif cepat. Manakah yang MEMPERKUAT hasil penelitian?",
            options: [
              {
                id: "a",
                text: "Deterjen alami memiliki kekurangan dalam hal efisiensi waktu dan tenaga dibandingkan deterjen kimia.",
              },
              {
                id: "b",
                text: "Deterjen berbahan alami secara signifikan efektif menghilangkan noda dan kotoran dibandingkan deterjen kimia.",
              },
              {
                id: "c",
                text: "Banyak orang memilih deterjen berbahan kimia karena mereka lebih mudah digunakan.",
              },
              {
                id: "d",
                text: "Masyarakat yang beralih ke deterjen alami cenderung tidak peduli dengan efisiensi waktu selama proses pencucian.",
              },
              {
                id: "e",
                text: "Deterjen alami hanya efektif dalam membersihkan noda ringan.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Hasil penelitian menyatakan deterjen alami butuh 'waktu lebih lama dan tenaga ekstra'. Pernyataan ini menegaskan kembali (memperkuat) temuan tersebut bahwa memang ada kekurangan dari segi efisiensi dibandingkan deterjen kimia.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Wisatawan asing ke Indonesia turun karena: bencana alam, kurang promosi, harga tiket mahal dibanding tetangga (Thailand/Vietnam). Faktor PALING MUNGKIN penyebab penurunan?",
            options: [
              {
                id: "a",
                text: "Peningkatan promosi pariwisata negara-negara Asia Tenggara lainnya yang lebih modern.",
              },
              {
                id: "b",
                text: "Tingginya harga tiket masuk ke destinasi wisata domestik dibandingkan dengan negara tetangga.",
              },
              {
                id: "c",
                text: "Banyaknya pemberitaan terkait bencana alam yang terjadi di kawasan wisata Indonesia.",
              },
              {
                id: "d",
                text: "Kebijakan pemerintah terkait pengurangan anggaran promosi pariwisata di luar negeri.",
              },
              {
                id: "e",
                text: "Destinasi wisata di Indonesia dikenal memiliki infrastruktur yang tertinggal di kawasan Asia Tenggara.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Teks secara eksplisit mengontraskan Indonesia dengan Thailand/Vietnam yang strateginya 'lebih terjangkau dari segi biaya'. Akibatnya wisatawan memilih ke sana. Ini menjadikan faktor harga (ekonomi) sebagai penyebab langsung perpindahan wisatawan tersebut.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "Ahli A: Berhenti alkohol 2 bulan. Ahli B: Minuman pengganti. Penelitian: Orang gagal meski coba 'beberapa cara'.",
            options: [
              { id: "a", text: "Memperkuat pernyataan ahli A." },
              { id: "b", text: "Memperkuat pernyataan ahli B." },
              { id: "c", text: "Memperlemah pernyataan ahli A." },
              { id: "d", text: "Memperlemah pernyataan ahli B." },
              {
                id: "e",
                text: "Tidak relevan dengan pernyataan ahli A dan ahli B.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Penelitian hanya menyebut 'mencoba beberapa cara' secara umum tanpa spesifik menyebut metode Ahli A atau Ahli B. Kegagalan umum ini tidak bisa dijadikan bukti untuk menilai efektivitas saran spesifik dari kedua ahli tersebut.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Sektor pariwisata, transportasi, hotel rugi besar. TAPI, beberapa sektor hotel & transport yang fokus layanan online/pengantaran untung karena diversifikasi.",
            options: [
              {
                id: "a",
                text: "Hanya sektor perhotelan dengan diversifikasi usaha online yang tidak terkena dampak pandemi COVID-19.",
              },
              {
                id: "b",
                text: "Hampir semua sektor perhotelan dan transportasi tidak mengalami kerugian akibat pandemi COVID-19.",
              },
              {
                id: "c",
                text: "Sebagian sektor perhotelan yang terkena dampak pandemi COVID-19 memperoleh keuntungan dengan melakukan diversifikasi usaha online.",
              },
              {
                id: "d",
                text: "Sektor pariwisata dan transportasi mengalami kerugian lebih besar daripada sektor perhotelan.",
              },
              {
                id: "e",
                text: "Sektor pariwisata dan transportasi tidak mengalami kerugian karena pandemi COVID-19.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Ini adalah parafrase langsung dari kalimat terakhir teks. 'Beberapa sektor perhotelan... mendapatkan keuntungan karena melakukan diversifikasi usaha'.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "White noise -> Meningkatkan konsentrasi. Suasana hati positif -> Meningkatkan ingatan.",
            options: [
              {
                id: "a",
                text: "Mendengarkan white noise secara rutin dapat meningkatkan keterampilan belajar siswa.",
              },
              {
                id: "b",
                text: "White noise dapat membantu seseorang dalam mengingat materi pelajaran.",
              },
              {
                id: "c",
                text: "Orang yang mendengarkan white noise lebih mudah terpengaruh oleh suasana hati.",
              },
              {
                id: "d",
                text: "Seseorang yang memiliki daya ingat yang baik sering mendengarkan white noise.",
              },
              {
                id: "e",
                text: "White noise selalu membuat seseorang berada dalam suasana hati yang positif.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Logika transitif (implisit): White noise meningkatkan konsentrasi. Konsentrasi yang baik adalah syarat untuk mengingat pelajaran (memori). Maka, white noise dapat membantu mengingat.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "1950-an: 70% pasien hidup 5 tahun. 1990-an: 80% pasien hidup 10 tahun.",
            options: [
              {
                id: "a",
                text: "Tahun 1950-an, hanya 70% pasien penyakit jantung yang menerima pengobatan yang memadai.",
              },
              {
                id: "b",
                text: "Pada tahun 1990-an, 20% pasien penyakit jantung tidak mendapatkan pengobatan tepat.",
              },
              {
                id: "c",
                text: "Pada tahun 1950-an, tidak ada metode deteksi awal yang efektif.",
              },
              {
                id: "d",
                text: "Pada tahun 1990-an, lebih banyak pasien penyakit jantung yang ditangani dengan lebih baik dibandingkan dengan pasien pada tahun 1950-an.",
              },
              {
                id: "e",
                text: "Pada tahun 1990-an, jumlah pasien penyakit jantung lebih banyak daripada tahun 1950-an.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kenaikan persentase kesintasan (survival rate) dari 70% (5 tahun) menjadi 80% (10 tahun) adalah indikator kuat bahwa penanganan medis telah membaik secara signifikan.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Fotosintesis butuh cahaya matahari, air, CO2. Menghasilkan glukosa & oksigen. Manakah yang PASTI SALAH?",
            options: [
              {
                id: "a",
                text: "Tanaman mengubah energi cahaya menjadi energi kimia dalam bentuk glukosa.",
              },
              {
                id: "b",
                text: "Oksigen yang dihasilkan oleh tanaman pada proses fotosintesis digunakan kembali oleh tanaman untuk pertumbuhannya.",
              },
              {
                id: "c",
                text: "Fotosintesis hanya dapat terjadi di siang hari, saat cahaya matahari tersedia.",
              },
              {
                id: "d",
                text: "Tanaman memerlukan karbon dioksida dalam jumlah yang lebih banyak daripada air untuk proses fotosintesis.",
              },
              {
                id: "e",
                text: "Proses fotosintesis dapat terjadi selama ada cukup cahaya matahari dan karbon dioksida.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pernyataan ini PASTI SALAH karena kurang satu syarat mutlak: AIR. Teks jelas menyebutkan fotosintesis butuh cahaya, CO2, DAN air. Tanpa air, proses tidak bisa terjadi.",
            points: 10,
          },
          {
            id: "q11",
            type: "multiple-choice",
            question:
              "Dulu curah hujan tropis stabil. Sekarang meningkat signifikan. Penjelasan paling mungkin?",
            options: [
              {
                id: "a",
                text: "Curah hujan di wilayah subtropis menjadi lebih rendah daripada di wilayah tropis.",
              },
              {
                id: "b",
                text: "Teknologi pengukur curah hujan saat ini lebih akurat daripada dua dekade sebelumnya.",
              },
              {
                id: "c",
                text: "Perubahan pola angin dan atmosfer di daerah tropis menyebabkan peningkatan curah hujan.",
              },
              {
                id: "d",
                text: "Masyarakat daerah tropis saat ini memiliki kesadaran yang lebih tinggi mengenai pengelolaan air hujan.",
              },
              {
                id: "e",
                text: "Luas wilayah yang mengalami hujan meningkat secara signifikan di sebagian daerah tropis.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Hujan adalah fenomena atmosfer. Perubahan signifikan pada pola hujan (iklim) paling logis dijelaskan oleh perubahan pada sistem atmosfer itu sendiri (pola angin, suhu global, dll).",
            points: 10,
          },
          {
            id: "q12",
            type: "multiple-choice",
            question:
              "Biota laut langka punah jika tercemar & diambil ilegal. Laut X tercemar & Udang Vannamei diambil ilegal. Simpulan: Udang Vannamei terancam punah.",
            options: [
              { id: "a", text: "Simpulan tersebut pasti benar." },
              { id: "b", text: "Simpulan tersebut pasti salah." },
              { id: "c", text: "Simpulan tersebut mungkin benar." },
              {
                id: "d",
                text: "Simpulan tidak relevan dengan informasi yang diberikan.",
              },
              {
                id: "e",
                text: "Simpulan tidak dapat dinilai karena informasi tidak cukup.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Premis mayor: Biota laut LANGKA yang terancam punah. Premis minor: Udang Vannamei diambil ilegal. Missing Link: Kita tidak tahu apakah Udang Vannamei termasuk 'biota laut langka' atau bukan. Tanpa info itu, simpulan tidak bisa divalidasi.",
            points: 10,
          },
          {
            id: "q13",
            type: "matrix",
            image: "/images/modules/kualitas-simpulan/quiz-13.jpg",
            context:
              "Pakar kesehatan: Program makan bergizi gratis sangat efektif meningkatkan status gizi masyarakat.",
            question:
              "Manakah pernyataan yang MEMPERLEMAH (M) dan TIDAK MEMPERLEMAH (TM)?",
            rows: [
              {
                id: "r1",
                text: "Program makan bergizi gratis belum menjangkau kelompok masyarakat gizi buruk terparah.",
              },
              {
                id: "r2",
                text: "Banyak masyarakat yang merasa program ini kurang adil karena distribusinya tidak merata.",
              },
              {
                id: "r3",
                text: "Distribusi makanan bergizi gratis dilakukan melalui lembaga pendidikan.",
              },
              {
                id: "r4",
                text: "Setelah program berjalan, prevalensi stunting pada anak-anak di wilayah sasaran menurun drastis.",
              },
            ],
            columns: [
              { id: "M", text: "Memperlemah" },
              { id: "TM", text: "Tidak Memperlemah" },
            ],
            correctAnswers: {
              r1: "M",
              r2: "M",
              r3: "TM",
              r4: "TM",
            },
            explanation:
              "1 & 2 (M): Jika program tidak menjangkau target utama (gizi buruk) atau tidak merata, efektivitasnya diragukan. 4 (TM): Penurunan stunting justru membuktikan efektivitas (Memperkuat). 3 (TM): Info teknis distribusi netral.",
            points: 10,
          },
          {
            id: "q14",
            type: "matrix",
            image: "/images/modules/kualitas-simpulan/quiz-14.jpg",
            context:
              "Ahli kesehatan: Penggunaan elektronik berlebihan (video receh) menyebabkan 'brain rot' (penurunan fungsi otak).",
            question:
              "Manakah pernyataan yang MEMPERLEMAH (M) dan TIDAK MEMPERLEMAH (TM)?",
            rows: [
              {
                id: "r1",
                text: "Teknologi saat ini sudah dirancang untuk membantu meningkatkan kemampuan kognitif penggunanya.",
              },
              {
                id: "r2",
                text: "Menonton video receh secara berlebihan berkontribusi pada penurunan kinerja otak dalam jangka panjang.",
              },
              {
                id: "r3",
                text: "Menonton video pendek atau konten receh secara berlebihan dapat memberikan hiburan yang menyegarkan pikiran.",
              },
              {
                id: "r4",
                text: "Penggunaan perangkat elektronik dalam kehidupan sehari-hari telah mempermudah komunikasi dan akses informasi.",
              },
              {
                id: "r5",
                text: "Penggunaan perangkat elektronik yang berlebihan tidak selalu berhubungan dengan penurunan fungsi otak pada semua individu.",
              },
            ],
            columns: [
              { id: "M", text: "Memperlemah" },
              { id: "TM", text: "Tidak Memperlemah" },
            ],
            correctAnswers: {
              r1: "M",
              r2: "TM",
              r3: "M",
              r4: "TM",
              r5: "M",
            },
            explanation:
              "1 (M): Teknologi meningkatkan kognitif = Lawan dari 'menurunkan fungsi otak'. 2 (TM): Mendukung pernyataan ahli (Memperkuat). 3 (M): Menyegarkan pikiran = Dampak positif (lawan dari negatif). 4 (TM): Netral (fungsi lain alat). 5 (M): Menyatakan hubungan sebab-akibat tidak selalu terjadi (menyerang validitas generalisasi ahli).",
            points: 10,
          },
          {
            id: "q15",
            type: "matrix",
            image: "/images/modules/kualitas-simpulan/quiz-15.jpg",
            context:
              "Ahli budaya: Korean Wave membawa dampak POSITIF terhadap pemahaman budaya dan hubungan antarnegara.",
            question:
              "Manakah pernyataan yang MEMPERLEMAH (M) dan TIDAK MEMPERLEMAH (TM)?",
            rows: [
              {
                id: "r1",
                text: "Hanya sebagian kecil dari masyarakat yang tertarik pada budaya Korea, sementara mayoritas tetap setia pada budaya tradisional mereka.",
              },
              {
                id: "r2",
                text: "Korean Wave mempengaruhi banyak industri, dari musik hingga fashion, dengan memberikan dampak yang signifikan pada tren global.",
              },
              {
                id: "r3",
                text: "Musik K-pop dan drama Korea semakin populer di banyak negara, meningkatkan pemahaman lintas budaya.",
              },
              {
                id: "r4",
                text: "Beberapa negara merasa terancam oleh pengaruh budaya Korea yang kuat, menyebabkan ketegangan budaya.",
              },
            ],
            columns: [
              { id: "M", text: "Memperlemah" },
              { id: "TM", text: "Tidak Memperlemah" },
            ],
            correctAnswers: {
              r1: "M",
              r2: "TM",
              r3: "TM",
              r4: "M",
            },
            explanation:
              "1 (M): Jika dampaknya kecil (hanya sebagian kecil orang), klaim 'dampak positif signifikan' melemah. 2 (TM): Mendukung dampak luas. 3 (TM): Mendukung klaim positif ahli. 4 (M): 'Ketegangan budaya' adalah dampak NEGATIF, bertentangan langsung dengan klaim ahli.",
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
