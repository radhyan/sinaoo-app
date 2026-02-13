const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSimpulanLogis = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }

    const moduleId = "simpulan-logis";

    const stepsData = [
      {
        title: "Pernyataan dan Kalimat Majemuk",
        type: "reading",
        status: "active",
        description: "Dasar-dasar Logika Matematika",
        content: `
          <div class="space-y-6 text-Grayscale-900">
            <h2 class="text-h3 font-heading text-Primary-600">Pengertian Pernyataan</h2>
            <p class="text-body-l">Pernyataan adalah kalimat yang bernilai <strong>benar saja</strong> atau <strong>salah saja</strong>, tidak bisa bernilai benar dan salah sekaligus.</p>

            <h2 class="text-h3 font-heading text-Primary-600 mt-8">Pernyataan Majemuk</h2>
            <p class="text-body-l">Pernyataan majemuk adalah kalimat yang dibentuk oleh dua pernyataan atau lebih dan dihubungkan dengan kata hubung tertentu.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="border-2 border-Primary-400 rounded-lg overflow-hidden">
                <div class="bg-Primary-100 p-3 text-center font-heading text-h5 border-b-2 border-Primary-400">Konjungsi</div>
                <div class="p-4 space-y-3">
                  <ul class="list-disc list-inside text-body-md">
                    <li>Dihubungkan dengan kata <strong>'dan'</strong></li>
                    <li>Disimbolkan dengan <strong>^</strong></li>
                    <li>Contoh: p ^ q dibaca 'p dan q'</li>
                  </ul>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-sm italic">
                    <strong>Contoh:</strong><br/>p: Kakak belajar<br/>q: Adik bermain<br/>p ^ q: Kakak belajar dan adik bermain
                  </div>
                  <div class="bg-warning-100 p-2 rounded-full text-center font-bold border border-warning-400">
                    dan ⮕ ^
                  </div>
                </div>
              </div>
              <div class="border-2 border-Primary-400 rounded-lg overflow-hidden">
                <div class="bg-Primary-100 p-3 text-center font-heading text-h5 border-b-2 border-Primary-400">Disjungsi</div>
                <div class="p-4 space-y-3">
                  <ul class="list-disc list-inside text-body-md">
                    <li>Dihubungkan dengan kata <strong>'atau'</strong></li>
                    <li>Disimbolkan dengan <strong>v</strong></li>
                    <li>Contoh: p v q dibaca 'p atau q'</li>
                  </ul>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-sm italic">
                    <strong>Contoh:</strong><br/>p: Kakak belajar<br/>q: Adik bermain<br/>p v q: Kakak belajar atau adik bermain
                  </div>
                   <div class="bg-warning-100 p-2 rounded-full text-center font-bold border border-warning-400">
                    atau ⮕ v
                  </div>
                </div>
              </div>
              <div class="border-2 border-Primary-400 rounded-lg overflow-hidden">
                <div class="bg-Primary-100 p-3 text-center font-heading text-h5 border-b-2 border-Primary-400">Implikasi</div>
                <div class="p-4 space-y-3">
                  <ul class="list-disc list-inside text-body-md">
                    <li>Dihubungkan dengan kata <strong>'Jika..., maka...'</strong></li>
                    <li>Disimbolkan dengan <strong>⇒</strong></li>
                    <li>Contoh: p ⇒ q dibaca 'jika p, maka q'</li>
                  </ul>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-sm italic">
                    <strong>Contoh:</strong><br/>p: Kakak belajar<br/>q: Adik bermain<br/>p ⇒ q: Jika kakak belajar, maka adik bermain
                  </div>
                </div>
              </div>
              <div class="border-2 border-Primary-400 rounded-lg overflow-hidden">
                <div class="bg-Primary-100 p-3 text-center font-heading text-h5 border-b-2 border-Primary-400">Biimplikasi</div>
                <div class="p-4 space-y-3">
                  <ul class="list-disc list-inside text-body-md">
                    <li>Dihubungkan dengan kata <strong>'... jika dan hanya jika ...'</strong></li>
                    <li>Disimbolkan dengan <strong>⇔</strong></li>
                    <li>Contoh: p ⇔ q dibaca 'p jika dan hanya jika q'</li>
                  </ul>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-sm italic">
                    <strong>Contoh:</strong><br/>p: Kakak belajar<br/>q: Adik bermain<br/>p ⇔ q: Kakak belajar jika dan hanya jika adik bermain
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "Ingkaran dan Ekuivalensi",
        type: "reading",
        status: "locked",
        description: "Memahami hubungan antar pernyataan",
        content: `
          <div class="space-y-6 text-Grayscale-900">
            <h2 class="text-h3 font-heading text-Primary-600">Jenis Implikasi</h2>
            <ul class="list-disc list-inside space-y-2 text-body-l">
              <li><strong>Konvers</strong> dari p ⇒ q adalah <strong>q ⇒ p</strong></li>
              <li><strong>Invers</strong> dari p ⇒ q adalah <strong>~p ⇒ ~q</strong></li>
              <li><strong>Kontraposisi</strong> dari p ⇒ q adalah <strong>~q ⇒ ~p</strong></li>
            </ul>
            <h2 class="text-h3 font-heading text-Primary-600 mt-8">Ingkaran (Negasi)</h2>
            <p class="text-body-l"><strong>Ingkaran atau negasi (~)</strong> adalah pernyataan baru yang merupakan lawan dari pernyataan semula.</p>
            <div class="bg-red-50 p-4 border-l-4 border-red-500 rounded text-center font-bold text-Primary-600">
              ~p = ingkaran dari p
            </div>
            <h2 class="text-h3 font-heading text-Primary-600 mt-8">Ekuivalensi (≡)</h2>
            <p class="text-body-l">Ekuivalensi adalah dua pernyataan yang memiliki nilai kebenaran yang sama walaupun bentuknya diubah.</p>
            <div class="bg-red-50 p-4 border-l-4 border-red-500 rounded text-center font-bold text-Primary-600">
              p ⇒ q ≡ ~p v q ≡ ~q ⇒ ~p
            </div>
          </div>
        `,
      },
      {
        title: "Penarikan Kesimpulan",
        type: "reading",
        status: "locked",
        description: "Modus Ponens, Tollens, dan Silogisme",
        content: `
          <div class="space-y-6 text-Grayscale-900">
             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <h3 class="text-h4 font-heading text-Primary-600 mb-4">1. Modus Ponens</h3>
                   <div class="space-y-2 mb-4">
                      <p>Premis 1: p ⇒ q</p>
                      <p>Premis 2: p</p>
                      <p class="border-t border-Grayscale-300 pt-1 font-bold">Kesimpulan: q</p>
                   </div>
                </div>
                <div>
                   <h3 class="text-h4 font-heading text-Primary-600 mb-4">2. Modus Tollens</h3>
                   <div class="space-y-2 mb-4">
                      <p>Premis 1: p ⇒ q</p>
                      <p>Premis 2: ~q</p>
                      <p class="border-t border-Grayscale-300 pt-1 font-bold">Kesimpulan: ~p</p>
                   </div>
                </div>
             </div>
             <h3 class="text-h4 font-heading text-Primary-600 mt-8 mb-4">3. Silogisme</h3>
             <div class="space-y-2 mb-4 max-w-xs">
                <p>Premis 1: p ⇒ q</p>
                <p>Premis 2: q ⇒ r</p>
                <p class="border-t border-Grayscale-300 pt-1 font-bold">Kesimpulan: p ⇒ r</p>
             </div>
          </div>
        `,
      },
      {
        title: "Video 1: Penarikan Kesimpulan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/uv9X26Gzfyk",
        description: "Penjelasan mendalam mengenai logika matematika.",
      },
      {
        title: "Video 2: Strategi Cepat Logika",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/00clYmXcPTE",
        description: "Tips dan trik mengerjakan soal penalaran logis.",
      },
      {
        title: "Kuis Simpulan Logis",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nJika Haikal berlatih dance di sanggar, maka Mahen akan datang\nEkuivalensi dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Haikal tidak berlatih dance di sanggar atau Mahen akan datang.",
              },
              {
                id: "b",
                text: "Jika Mahen akan datang, maka Haikal berlatih dance di sanggar.",
              },
              {
                id: "c",
                text: "Haikal tidak berlatih dance di sanggar dan Mahen akan datang.",
              },
              {
                id: "d",
                text: "Mahen akan datang atau Haikal berlatih di sanggar.",
              },
              { id: "e", text: "Tidak dapat disimpulkan." },
            ],
            correctAnswer: "a",
            explanation:
              "Rumus Ekuivalensi Implikasi: p ⇒ q ≡ ~p ∨ q.\n(p) Haikal berlatih dance.\n(q) Mahen akan datang.\nMaka ekuivalensinya adalah (~p) Haikal TIDAK berlatih dance ATAU (q) Mahen akan datang.",
            points: 7,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nJika aku belajar giat, maka aku akan diterima di PTN impian.\nIngkaran dari pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: "Aku tidak belajar giat atau aku diterima di PTN impian.",
              },
              {
                id: "b",
                text: "Aku diterima di PTN impian dan aku belajar giat.",
              },
              {
                id: "c",
                text: "Aku tidak diterima di PTN impian dan aku tidak belajar giat.",
              },
              {
                id: "d",
                text: "Aku belajar giat dan aku tidak diterima di PTN impian.",
              },
              {
                id: "e",
                text: "Aku tidak diterima di PTN impian dan aku belajar giat.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Rumus Negasi Implikasi: ~(p ⇒ q) ≡ p ∧ ~q.\nIngkaran dari 'Jika P maka Q' adalah 'P terjadi DAN Q tidak terjadi'.\nJadi: Aku belajar giat DAN aku TIDAK diterima di PTN impian.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nDani tidak pergi ke hutan sendiri atau ia tersesat.\nJika ia tersesat, maka ia tidak bisa pulang.\nKesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Dani pergi ke hutan sendiri atau ia tidak bisa pulang.",
              },
              {
                id: "b",
                text: "Jika Dani pergi ke hutan sendirian, maka ia tidak bisa pulang.",
              },
              { id: "c", text: "Dani tidak bisa pulang." },
              {
                id: "d",
                text: "Jika Dani tersesat, maka ia tidak bisa pulang.",
              },
              { id: "e", text: "Dani pergi ke hutan sendiri." },
            ],
            correctAnswer: "b",
            explanation:
              "Ubah Premis 1 ke bentuk implikasi: (~p ∨ q ≡ p ⇒ q). 'Jika Dani ke hutan sendiri, maka ia tersesat'.\nPremis 2: 'Jika ia tersesat, maka ia tidak bisa pulang' (q ⇒ r).\nSilogisme (p ⇒ q, q ⇒ r, maka p ⇒ r): Jika Dani pergi ke hutan sendirian, maka ia tidak bisa pulang.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nJika Dong Yeon tidak pergi ke sekolah, maka ia sakit.\nHari ini, Dong Yeon pergi ke sekolah.\nBerdasarkan informasi tersebut, kesimpulan yang paling tepat…",
            options: [
              { id: "a", text: "Dong Yeon sehat." },
              { id: "b", text: "Dong Yeon sakit." },
              { id: "c", text: "Dong Yeon sehat dan tidak pergi ke sekolah." },
              {
                id: "d",
                text: "Dong Yeon tidak sehat dan tidak pergi ke sekolah.",
              },
              { id: "e", text: "Tidak dapat disimpulkan." },
            ],
            correctAnswer: "e",
            explanation:
              "Premis 1: ~p ⇒ q (Jika tidak sekolah, maka sakit).\nPremis 2: p (Dong Yeon pergi sekolah/sebaliknya dari ~p).\nIni tidak memenuhi modus ponens maupun tollens. Kita tidak bisa menyimpulkan q (sakit/sehat) hanya karena syarat p tidak terpenuhi (Denying the antecedent fallacy).",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nRitsuki tidak tidur dengan cukup atau ia berolahraga.\nJika ia tidak tumbuh tinggi, maka ia tidak berolahraga.\nRitsuki tidak tumbuh tinggi atau orang-orang akan menyukainya.\nNegasi dari kesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Jika Ritsuki tidur dengan cukup, maka orang-orang akan menyukainya.",
              },
              {
                id: "b",
                text: "Ritsuki tidak tumbuh tinggi atau ia berolahraga.",
              },
              {
                id: "c",
                text: "Ritsuki tidur dengan cukup dan orang-orang tidak akan menyukainya.",
              },
              {
                id: "d",
                text: "Ritsuki tidak tidur dengan cukup and ia berolahraga.",
              },
              {
                id: "e",
                text: "Ritsuki tidur dengan cukup atau orang-orang tidak akan menyukainya.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Langkah 1 (Cari Kesimpulan):\nP1: Tidur Cukup ⇒ Olahraga\nP2: ~Tinggi ⇒ ~Olahraga (Ekuivalen: Olahraga ⇒ Tinggi)\nP3: ~Tinggi ∨ Disukai (Ekuivalen: Tinggi ⇒ Disukai)\nRantai Silogisme: Tidur Cukup ⇒ Olahraga ⇒ Tinggi ⇒ Disukai.\nKesimpulan: Jika Tidur Cukup maka Disukai (p ⇒ q).\n\nLangkah 2 (Cari Negasi):\nNegasi (p ⇒ q) adalah p ∧ ~q.\nJawab: Ritsuki tidur dengan cukup DAN orang-orang TIDAK menyukainya.",
            points: 7,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nJika aku mendapatkan beasiswa, maka aku tidak membayar UKT.\nJika aku tidak membayar UKT, maka aku meringankan beban ibu.\nJika aku meringankan beban ibu, maka adik bisa sekolah.\nAdik tidak bisa sekolah.\nKesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              { id: "a", text: "Aku mendapatkan beasiswa." },
              { id: "b", text: "Aku tidak meringankan beban ibu." },
              { id: "c", text: "Aku tetap membayar UKT." },
              { id: "d", text: "Aku tidak mendapatkan beasiswa." },
              { id: "e", text: "Aku meringankan beban ibu." },
            ],
            correctAnswer: "d",
            explanation:
              "Tarik kesimpulan berantai dari P1 sampai P3: 'Jika aku dapat beasiswa, maka adik bisa sekolah' (p ⇒ q).\nFakta P4: 'Adik tidak bisa sekolah' (~q).\nModus Tollens (p ⇒ q, ~q, maka ~p): Maka, Aku TIDAK mendapatkan beasiswa.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nSemua penipu pandai bicara dan ramah.\nTuan D tidak ramah, tetapi pandai berbicara.\nKesimpulan yang paling tepat adalah…",
            options: [
              { id: "a", text: "Tuan D seorang penipu yang pandai bicara." },
              {
                id: "b",
                text: "Tuan D seorang penipu yang tidak pandai bicara dan tidak ramah.",
              },
              {
                id: "c",
                text: "Tuan D bukan seorang penipu, meskipun pandai bicara.",
              },
              {
                id: "d",
                text: "Tuan D bukan seorang penipu, meskipun tidak ramah.",
              },
              { id: "e", text: "Tuan D bukan seorang penipu yang ramah." },
            ],
            correctAnswer: "c",
            explanation:
              "Syarat mutlak menjadi penipu adalah (Pandai Bicara) DAN (Ramah). Karena Tuan D TIDAK RAMAH, ia gagal memenuhi salah satu syarat wajib. Maka, Tuan D pasti bukan penipu.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nJehan tidak lolos seleksi atau ia menjadi relawan.\nJika Jehan menjadi relawan, maka ia mendapatkan teman baru.\nJika Jehan tidak senang, maka ia tidak mendapatkan teman baru.\nKesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Jehan tidak lolos seleksi atau ia menjadi relawan.",
              },
              {
                id: "b",
                text: "Jika Jehan lolos seleksi, maka ia mendapatkan teman baru.",
              },
              { id: "c", text: "Jehan tidak lolos seleksi atau ia senang." },
              {
                id: "d",
                text: "Jika Jehan tidak lolos seleksi, maka iatidak senang.",
              },
              { id: "e", text: "Jika Jehan lolos seleksi, maka ia senang." },
            ],
            correctAnswer: "e",
            explanation:
              "Ubah ke Implikasi:\nP1: ~Lolos ∨ Relawan ≡ Lolos ⇒ Relawan.\nP2: Relawan ⇒ Teman Baru.\nP3: ~Senang ⇒ ~Teman Baru (Kontraposisi: Teman Baru ⇒ Senang).\nRantai Silogisme: Lolos ⇒ Relawan ⇒ Teman Baru ⇒ Senang.\nKesimpulan: Jika Jehan lolos seleksi, maka ia senang.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nSemua calon mahasiswa menempuh tes bahasa Inggris.\nSebagian calon mahasiswa memiliki skor TOEFL diatas 450.\nSimpulan yang tepat adalah…",
            options: [
              {
                id: "a",
                text: "Sebagian calon mahasiswa yang tidak memiliki skor TOEFL diatas 450 menempuh tes bahasa Inggris.",
              },
              {
                id: "b",
                text: "Semua calon mahasiswa yang memiliki skor TOEFL diatas 450 tidak menempuh tes bahasa Inggris.",
              },
              {
                id: "c",
                text: "Semua calon mahasiswa yang tidak memiliki skor TOEFL diatas 450 tidak menempuh tes bahasa Inggris.",
              },
              {
                id: "d",
                text: "Sebagian calon mahasiswa yang tidak memiliki skor TOEFL diatas 450 tidak menempuh tes bahasa Inggris.",
              },
              {
                id: "e",
                text: "Semua calon mahasiswa yang menempuh tes bahasa Inggris tidak memiliki skor TOEFL diatas 450.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Himpunan 'Semua calon mahasiswa' wajib tes Inggris. Kelompok 'Sebagian' yang punya TOEFL > 450 maupun kelompok sisa yang TIDAK punya TOEFL > 450, keduanya adalah bagian dari 'Calon Mahasiswa'. Jadi, mereka (yang tidak punya skor tinggi pun) tetap menempuh tes bahasa Inggris.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nTidak ada buah stroberi kecuali berwarna putih dan merah.\nYuko menerima stroberi bukan putih, bukan merah.\nSimpulan yang tepat tentang buah yang diterima oleh Yuko adalah….",
            options: [
              { id: "a", text: "Buah stroberi warna putih." },
              { id: "b", text: "Buah stroberi warna merah." },
              { id: "c", text: "Buah bukan stroberi." },
              { id: "d", text: "Buah stroberi bukan warna putih." },
              { id: "e", text: "Buah stroberi bukan merah dan bukan putih." },
            ],
            correctAnswer: "c",
            explanation:
              "Premis menyatakan Stroberi WAJIB berwarna Putih atau Merah. Yuko menerima buah yang TIDAK Putih dan TIDAK Merah. Karena syarat warna tidak terpenuhi, maka buah tersebut pasti BUKAN Stroberi.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nSemua cangkir berbentuk oval.\nSebagian cangkir berisi kopi.\nSimpulan yang tepat adalah...",
            options: [
              { id: "a", text: "Cangkir berisi susu bentuknya tidak oval." },
              {
                id: "b",
                text: "Semua cangkir yang berbentuk oval berisi kopi.",
              },
              {
                id: "c",
                text: "Cangkir yang berisi kopi bentuknya tidak oval.",
              },
              {
                id: "d",
                text: "Beberapa cangkir berbentuk oval dan semuanya berisi kopi.",
              },
              {
                id: "e",
                text: "Ada cangkir yang berisi susu and berbentuk oval.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Karena 'Semua cangkir berbentuk oval', maka cangkir apapun (termasuk yang berisi kopi) pasti oval. Karena 'Sebagian cangkir berisi kopi', maka kesimpulannya adalah irisan keduanya: Ada beberapa cangkir yang oval DAN berisi kopi.",
            points: 6,
          },
          {
            id: "q12",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nSemua kerabat dekat menghadiri pesta keluarga.\nPutu menghadiri pesta keluarga, sedangkan Made tidak hadir.\nSimpulan yang tepat adalah...",
            options: [
              { id: "a", text: "Putu bukan kerabat dekat keluarga." },
              { id: "b", text: "Made bukan kerabat dekat keluarga." },
              { id: "c", text: "Made dan Putu kerabat dekat keluarga." },
              { id: "d", text: "Made dan Putu bukan kerabat dekat keluarga." },
              { id: "e", text: "Made dan Putu dua orang kerabat dekat." },
            ],
            correctAnswer: "b",
            explanation:
              "Syarat menjadi kerabat dekat adalah 'Hadir di pesta'. Karena Made 'Tidak Hadir', maka ia secara otomatis gugur dari kategori kerabat dekat (Modus Tollens). Untuk Putu, dia hadir, tapi belum tentu kerabat dekat (bisa jadi teman), tapi Made PASTI bukan kerabat.",
            points: 6,
          },
          {
            id: "q13",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nPada hari libur nasional, toko pakaian tutup kecuali untuk toko yang menjual kebutuhan pokok.\nHari Jumat adalah salah satu hari libur nasional.\nSimpulan yang tepat adalah…",
            options: [
              { id: "a", text: "Toko pakaian buka, meskipun pada hari Jumat." },
              {
                id: "b",
                text: "Toko pakaian tetap buka, kecuali pada hari Jumat.",
              },
              {
                id: "c",
                text: "Toko kebutuhan pokok buka, kecuali pada hari Jumat.",
              },
              {
                id: "d",
                text: "Toko pakaian dan toko kebutuhan pokok buka pada hari Jumat.",
              },
              {
                id: "e",
                text: "Toko pakaian dan toko kebutuhan pokok libur pada hari Jumat.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Karena Jumat adalah hari libur nasional, maka aturan libur berlaku: Toko pakaian TUTUP. Pernyataan 'Toko pakaian tetap buka, kecuali pada hari Jumat' secara logika berarti: Hari biasa buka, Hari Jumat (Libur) tutup. Ini konsisten dengan premis.",
            points: 6,
          },
          {
            id: "q14",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nAli tidak menonton film atau Ali bisa bermain gitar.\nJika Ali bisa bermain gitar, maka Ali bisa bermain musik di acara keluarga.\nSimpulan yang tepat dari dua pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: "Ali menonton film atau Ali bisa bermain musik di acara keluarga.",
              },
              {
                id: "b",
                text: "Ali menonton film atau Ali tidak bisa bermain musik di acara keluarga.",
              },
              {
                id: "c",
                text: "Jika Ali menonton film, maka Ali bisa bermain musik di acara keluarga.",
              },
              {
                id: "d",
                text: "Jika Ali tidak menonton film, maka Ali bisa bermain musik di acara keluarga.",
              },
              {
                id: "e",
                text: "Jika Ali tidak menonton film, maka Ali tidak bisa bermain musik di acara keluarga.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "P1: ~Nonton ∨ Gitar ≡ Nonton ⇒ Gitar.\nP2: Gitar ⇒ Musik Keluarga.\nSilogisme (p ⇒ q, q ⇒ r, maka p ⇒ r): Jika Ali menonton film, maka Ali bisa bermain musik di acara keluarga.",
            points: 6,
          },
          {
            id: "q15",
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan berikut!\nJika hari ini tidak hujan, maka Dimas latihan basket.\nJika Dimas main sepak bola maka ia tidak latihan basket.\nDimas main sepak bola.\nMaka kesimpulan yang tepat adalah....",
            options: [
              { id: "a", text: "Dimas malas latihan basket." },
              { id: "b", text: "Dimas tidak latihan basket." },
              { id: "c", text: "Dimas latihan basket and main bola." },
              { id: "d", text: "Hari ini tidak hujan." },
              { id: "e", text: "Hari ini hujan." },
            ],
            correctAnswer: "e",
            explanation:
              "Fakta: Dimas main bola. Dari P2: Jika main bola ⇒ tidak latihan basket. Dari P1 (Kontraposisi): Jika TIDAK latihan basket ⇒ HARI INI HUJAN. Kesimpulan: Hari ini hujan.",
            points: 6,
          },
        ],
      },
    ];

    await Module.deleteOne({ _id: moduleId });
    const newModule = new Module({
      _id: moduleId,
      name: "Simpulan Logis",
      description: "Materi penalaran logis dan penarikan kesimpulan.",
      courseId: course._id,
      steps: stepsData,
      points_available: 100,
    });

    await newModule.save();
    console.log(
      "Module 'Simpulan Logis' created successfully with 15 questions and 100 total points.",
    );
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedSimpulanLogis();
