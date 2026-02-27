const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module.js");
const Course = require("../models/Course.js");

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const connectDB = async (retries = MAX_RETRIES) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    if (retries > 0) {
      console.log(`Connection failed. Retrying... (${retries} retries left)`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return connectDB(retries - 1);
    }
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

const seedModule = async () => {
  try {
    await connectDB();

    const course = await Course.findOne({
      name: "Pengetahuan dan Pemahaman Umum",
    });

    if (!course) {
      console.log("Course 'Pengetahuan dan Pemahaman Umum' not found!");
      process.exit(1);
    }

    const targetId = "kesimpulan";

    const stepsData = [
      {
        title: "Materi: Konsep Dasar Kesimpulan",
        type: "reading",
        status: "active",
        description:
          "Materi Bacaan mengenai Definisi dan Cara Menentukan Kesimpulan",
        content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Definisi Kesimpulan</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed m-0">
          Kesimpulan merupakan <span class="font-bold text-Primary-600">pernyataan singkat yang diambil dari hasil analisis atau pembahasan suatu topik</span>. Kesimpulan juga dapat diartikan sebagai rangkuman dari seluruh informasi yang telah diterima, baca atau simak, sehingga dapat memberikan sebuah <span class="font-bold text-Primary-600">gambaran umum yang singkat</span> dan <span class="font-bold text-Primary-600">jelas</span>.
        </p>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri-Ciri Kesimpulan</h3>
        <ul class="list-disc pl-6 space-y-3 text-body-l text-Grayscale-900">
          <li><span class="font-bold text-Primary-600">Singkat</span>, <span class="font-bold text-Primary-600">padat</span>, dan <span class="font-bold text-Primary-600">jelas</span>.</li>
          <li>Berisi <span class="font-bold text-Primary-600">intisari</span> dari sebuah tulisan.</li>
          <li><span class="font-bold text-Primary-600">Relevan</span> dengan topik.</li>
          <li>Berdasarkan <span class="font-bold text-Primary-600">fakta</span> atau <span class="font-bold text-Primary-600">data</span> yang ada dalam pembahasan tersebut.</li>
          <li>Dapat <span class="font-bold text-Primary-600">bergabung</span> dengan <span class="font-bold text-Primary-600">kalimat utama</span>.</li>
          <li>Dapat berupa hubungan <span class="font-bold text-Primary-600">sebab akibat</span> atau <span class="font-bold text-Primary-600">akibat sebab</span>.</li>
          <li>Simpulan dapat berupa <span class="font-bold text-Primary-600">tersurat</span> atau <span class="font-bold text-Primary-600">tersirat</span>.</li>
        </ul>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-Jenis Kesimpulan</h3>
        
        <div class="space-y-8">
          <div>
            <h4 class="text-h4 font-heading font-bold text-Primary-900 mb-3">A. Tersurat</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 mt-0">
              <span class="font-bold text-Primary-600">Dinyatakan di dalam teks</span> dengan kalimat yang jelas. Biasanya terdapat <span class="font-bold text-Primary-600">kata-kata petunjuk</span> seperti "<span class="font-bold text-Primary-600">jadi</span>", "<span class="font-bold text-Primary-600">oleh karena itu</span>", "<span class="font-bold text-Primary-600">dengan demikian</span>", atau kata kerja yang menunjukkan kesimpulan (misalnya, "<span class="font-bold text-Primary-600">dapat disimpulkan bahwa</span>").
            </p>
            <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100">
              <p class="text-body-l font-bold text-Primary-900 mb-2 mt-0">Contoh :</p>
              <p class="text-body-l text-Grayscale-900 italic m-0">
                <span class="font-bold text-Error-500">Oleh karena itu</span>, pemerintah perlu memberikan penyuluhan secara langsung kepada masyarakat daerah Wonorejo mengenai pentingnya menjaga kebersihan lingkungan, agar masalah banjir dapat diatasi dan tidak terulang lagi.
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-h4 font-heading font-bold text-Primary-900 mb-3">B. Tersirat</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 mt-0">
              <span class="font-bold text-Primary-600">Tidak secara jelas disampaikan</span> sehingga perlu mencari maksud atau makna yang ada dalam teks. Biasanya berupa <span class="font-bold text-Primary-600">opini</span> atau <span class="font-bold text-Primary-600">pendapat</span> yang disampaikan berdasarkan data dan fakta yang ada.
            </p>
            <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100 space-y-3">
              <p class="text-body-l font-bold text-Primary-900 m-0">Contoh :</p>
              <p class="text-body-l text-Grayscale-900 italic m-0">
                "Meskipun banyak warga sudah memahami pentingnya menjaga kebersihan lingkungan dan membuang sampah pada tempatnya serta melakukan kerja bakti, tetapi di beberapa titik masih terlihat tergenang air saat hujan, hal ini <span class="font-bold text-Error-500">menunjukkan adanya masalah lain</span> yang perlu ditangani secara menyeluruh."
              </p>
              <p class="text-body-l text-Grayscale-900 m-0">
                Kalimat ini menyiratkan bahwa kesimpulan yang bisa diambil adalah bahwa masalah banjir tidak hanya disebabkan oleh sampah, tetapi juga oleh faktor lain yang perlu diperiksa dan diperhatikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Simpulan</h3>
        <ul class="list-disc pl-6 space-y-3 text-body-l text-Grayscale-900 mb-6">
          <li>Baca paragraf atau teks tersebut dengan <span class="font-bold text-Primary-600">cermat</span>.</li>
          <li>Identifikasi <span class="font-bold text-Primary-600">hal-hal penting</span> dalam suatu teks.</li>
          <li>Tentukan <span class="font-bold text-Primary-600">ide pokok</span> dalam suatu teks.</li>
          <li>Buat sebuah <span class="font-bold text-Primary-600">opini atau pendapat pribadi</span> terkait permasalahan yang ada.</li>
          <li>Menarik kesimpulan dengan <span class="font-bold text-Primary-600">jelas</span>.</li>
        </ul>
        
        <div class="bg-Secondary-50 rounded-lg p-6 relative border border-Secondary-200 shadow-sm mt-8">
          <div class="text-Secondary-900 text-body-l font-bold px-1 py-1.5 rounded-full">CATATAN</div>
          <p class="text-body-l text-Grayscale-900 m-0 leading-relaxed mt-2 pt-1">
            Hindari penggunaan kata yang bertele-tele, berikan simpulan yang <span class="font-bold text-Primary-600">jelas dan padat</span> terkait pembahasan tersebut.
          </p>
        </div>
      </section>
        `,
      },
      {
        title: "Video Pembelajaran: Kesimpulan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/yCG45BvVWkQ",
        description: "Video pembahasan materi mengenai Kesimpulan.",
      },
      {
        title: "Kuis: Kesimpulan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "SMK adalah sekolah menengah kejuruan yang dianggap sebagai pencipta lulusan yang terampil dan bermutu. Secara umum, SMK didesain untuk menciptakan lulusan yang siap masuk dunia kerja dengan kemampuan teknis yang mereka miliki. Hal ini terjadi karena pelajaran praktik lebih diutamakan, bahkan siswa akan mendapatkan pengalaman praktek kerja lapangan secara langsung.",
            question:
              "Berdasarkan paragraf di atas, manakah kesimpulan di bawah ini yang BENAR?",
            options: [
              {
                id: "a",
                text: "Banyak orang lebih memilih jenjang pendidikan SMK dibanding jenjang pendidikan yang lainnya.",
              },
              {
                id: "b",
                text: "SMK menjadi pendidikan yang dibanggakan oleh semua orang.",
              },
              {
                id: "c",
                text: "Lulusan SMK terbukti sebagai pencipta lulusan yang terampil dan bermutu.",
              },
              { id: "d", text: "Banyak lulusan SMK yang menganggur." },
              {
                id: "e",
                text: "Lulusan SMK menjadi penyumbang lulusan yang terampil tetapi juga sulit mendapatkan pekerjaan.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Teks di atas memaparkan tentang SMK yang didesain sedemikian rupa untuk menciptakan lulusan terampil dan bermutu berdasarkan bukti fokus pada pelajaran praktik. Oleh karena itu, kesimpulan utamanya adalah lulusan SMK terbukti sebagai pencipta lulusan yang terampil.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "(1) Pengguna internet di Indonesia terus mengalami peningkatan yang sangat tajam. (2) Perkembangan teknologi seperti telepon yang semakin canggih merupakan faktor utama penyebab melonjaknya pengguna internet di Indonesia. (3) Jika teknologi berkembang, pengguna internet akan meningkat. (4) Sementara itu, jika seseorang mengikuti perkembangan zaman, seseorang bisa berkomunikasi dengan berbagai media. (5) Dalam hal ini, tidak ada pengguna internet yang gagap teknologi. (6) Dengan demikian, sebagian dari pengguna internet tersebut memiliki telepon canggih.",
            question:
              "Berdasarkan paragraf di atas, kalimat manakah yang menunjukkan kesimpulan?",
            options: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "5" },
              { id: "e", text: "6" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat nomor 6 memuat kata 'Dengan demikian' yang merupakan penanda khas dari sebuah kesimpulan suatu paragraf.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "(1) Intisari dari sebuah tulisan.\n(2) Fakta baru yang belum terdapat dalam teks.\n(3) Dapat dinyatakan secara tersurat atau tersirat.\n(4) Tidak dapat bergabung dengan kalimat utama.",
            question: "Yang merupakan ciri-ciri dari kesimpulan adalah . . .",
            options: [
              { id: "a", text: "(1) dan (2)" },
              { id: "b", text: "(1) dan (3)" },
              { id: "c", text: "(1) dan (4)" },
              { id: "d", text: "(2) dan (3)" },
              { id: "e", text: "(2) dan (4)" },
            ],
            correctAnswer: "b",
            explanation:
              "Ciri-ciri kesimpulan adalah berisi intisari dari sebuah tulisan dan dapat dinyatakan secara tersurat maupun tersirat. Oleh karena itu (1) dan (3) adalah jawaban yang tepat.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Kesehatan anak selalu menjadi perhatian utama bagi orang tua. Bagaimanapun, semua anak kecil berpotensi mengalami sakit. Sakit yang bisa dialami anak-anak adalah flu, batuk, dan cacar. Sebagian anak yang berpotensi mengalami sakit pada akhirnya harus berobat ke rumah sakit. Sayangnya, tidak semua anak mau dibawa berobat ke rumah sakit. Banyak anak menolak diajak ke rumah sakit, terutama anak laki-laki, apalagi jika harus menjalani rawat inap. Banyaknya pemandangan orang sakit menjadi salah satu alasan mereka menolak ke rumah sakit, begitu juga dengan bau obat yang menyengat dan penampilan staf rumah sakit dengan baju putihnya. Mereka mengira bahwa jika ke rumah sakit, mereka akan disuntik. Membayangkan sakitnya jarum suntik menjadi alasan yang paling banyak ditemui mengapa anak-anak tidak suka ke rumah sakit.",
            question:
              "Berdasarkan paragraf di atas, kesimpulan yang tepat adalah . . .",
            options: [
              {
                id: "a",
                text: "Sebagian anak kecil pada akhirnya harus berobat ke rumah sakit.",
              },
              {
                id: "b",
                text: "Sebagian anak kecil yang sakit sering ke rumah sakit.",
              },
              {
                id: "c",
                text: "Sebagian anak kecil yang ke rumah sakit tidak berpotensi mengalami sakit.",
              },
              {
                id: "d",
                text: "Sebagian anak kecil yang tidak sakit senang ke rumah sakit.",
              },
              {
                id: "e",
                text: "Sebagian anak kecil yang sakit flu dirawat di rumah sakit.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Paragraf tersebut membahas mengenai potensi anak kecil sakit dan konsekuensi pengobatannya ke rumah sakit, meskipun banyak dari mereka yang tidak suka.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Hasil penelitian menunjukkan bahwa rata-rata skor sebelum terapi lebih rendah daripada setelah terapi, baik pada anak laki-laki maupun perempuan. Hal tersebut menunjukkan bahwa jika anak-anak mendapatkan terapi bermain, mereka lebih bersikap kooperatif. Sikap kooperatif misalnya ditunjukkan dalam bentuk kepatuhan dan kemampuan berkomunikasi dengan orang tua. Sikap kooperatif membuat anak merasa lebih nyaman saat menjalani perawatan di rumah sakit. Dalam kondisi ini, terapi diibaratkan sebagai obat yang berfungsi untuk menyembuhkan atau mengurangi sakit.",
            question:
              "Berdasarkan paragraf di atas, simpulan yang tepat adalah . . .",
            options: [
              {
                id: "a",
                text: "Anak merasa lebih nyaman saat menjalani perawatan di rumah sakit apabila mendapatkan terapi bermain.",
              },
              {
                id: "b",
                text: "Anak mendapatkan terapi bermain apabila menjalani perawatan di rumah sakit.",
              },
              {
                id: "c",
                text: "Anak lebih bersikap kooperatif apabila anak nyaman dalam menjalani perawatan di rumah sakit.",
              },
              {
                id: "d",
                text: "Anak mendapatkan terapi bermain apabila mereka bersikap kooperatif.",
              },
              {
                id: "e",
                text: "Anak mendapatkan terapi bermain apabila mereka patuh dan dapat berkomunikasi dengan orang tua.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Keuntungan utama dari terapi sesuai paragraf adalah membangun sikap kooperatif yang pada akhirnya membuat anak merasa nyaman. Jadi, mendapatkan terapi berkorelasi dengan kenyamanan anak di rumah sakit.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Penyakit stroke adalah gangguan fungsi otak akibat aliran darah ke otak mengalami gangguan. Akibatnya, nutrisi dan oksigen yang dibutuhkan otak tidak terpenuhi dengan baik. Penyebab stroke ada dua macam, yaitu adanya sumbatan di pembuluh darah dan adanya pembuluh darah yang pecah. Umumnya stroke diderita oleh orang tua karena proses penuaan yang menyebabkan pembuluh darah mengeras dan menyempit serta lemak yang menyumbat pembuluh darah. Pada beberapa kasus terakhir menunjukkan peningkatan kasus stroke yang terjadi pada usia remaja dan usia produktif (15-40 tahun). Pada golongan ini, penyebab utama stroke adalah stres, faktor keturunan, dan gaya hidup yang tidak sehat, seperti penyalahgunaan narkoba dan alkohol. Pada kasus stroke usia remaja, faktor keturunan merupakan penyebab utama terjadinya stroke. Sering ditemukan kasus stroke yang disebabkan oleh pembuluh darah yang mudah pecah atau kelainan sistem darah, seperti penyakit hemofilia dan thalasemia yang diturunkan oleh orang tua penderita. Jika ayah atau ibu menderita diabetes, hipertensi, atau penyakit jantung, kemungkinan anak terkena stroke menjadi lebih besar.",
            question:
              "Berdasarkan paragraf di atas, kesimpulan yang tepat adalah . . .",
            options: [
              {
                id: "a",
                text: "Penyebab stroke adalah stres, penuaan, gaya hidup, dan keturunan.",
              },
              {
                id: "b",
                text: "Stroke dapat terjadi pada usia remaja, produktif, dan usia lanjut.",
              },
              {
                id: "c",
                text: "Sumbatan atau pecahnya pembuluh darah dapat menyebabkan stroke.",
              },
              {
                id: "d",
                text: "Stroke disebabkan oleh gangguan aliran darah.",
              },
              { id: "e", text: "Stroke kebanyakan dialami oleh orang tua." },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf merinci bahwa stroke tidak hanya diderita oleh orang tua (usia lanjut), namun ada tren peningkatan kasus stroke untuk golongan usia remaja hingga usia produktif. Ini menunjukkan bahwa kesimpulan stroke dapat terjadi di berbagai rentang usia.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Betakaroten atau vitamin A merupakan zat gizi penting yang diperlukan mata. Zat ini memang tidak dapat menyembuhkan kebutaan, tetapi dapat memperbaiki kondisi mata akibat kekurangan vitamin A. Sifatnya yang antioksidan dapat mencegah penyakit katarak yang kerap menimpa para lansia. Untuk itu, anak-anak perlu mengonsumsi betakaroten sejak dini.",
            question: "Simpulan paragraf di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "Betakaroten sangat penting untuk mata sehingga anak-anak perlu mengkonsumsinya.",
              },
              {
                id: "b",
                text: "Betakaroten dapat mencegah penyakit katarak karena bersifat antioksidan.",
              },
              {
                id: "c",
                text: "Betakaroten tidak dapat menyembuhkan kebutaan.",
              },
              { id: "d", text: "Betakaroten disebut juga vitamin A." },
              {
                id: "e",
                text: "Anak-anak tidak perlu mengkonsumsi betakaroten sejak dini.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Paragraf ini menyoroti manfaat utama Betakaroten bagi mata dan memungkasi poinnya dengan imbauan konsumsi sejak dini. Oleh karena itu, simpulan umumnya adalah pentingnya Betakaroten sehingga butuh dikonsumsi anak-anak.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Tidur merupakan salah satu cara menjaga tubuh agar tetap sehat. Orang yang tidur 8 jam per malam, bisa dipastikan lebih sehat dibandingkan orang yang sering bangun sepanjang malam. Tidur yang baik memulihkan sistem imun. Ketika tidur pulas di malam hari, kadar melatonik meningkat dan memperbaiki imunitas.",
            question: "Simpulan yang tepat untuk paragraf di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "Tidur pulas tidak dapat memperbaiki imunitas.",
              },
              {
                id: "b",
                text: "Tidur dengan waktu cukup dan berkualitas dapat melindungi diri dari penyakit.",
              },
              {
                id: "c",
                text: "Tidur yang cukup sebaiknya kurang dari 8 jam sehari.",
              },
              {
                id: "d",
                text: "Tidur yang cukup adalah tidur yang tidak bangun-bangun sepanjang malam.",
              },
              {
                id: "e",
                text: "Tidur yang cukup dapat meningkatkan imunitas diri.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf memaparkan fakta bahwa tidur yang teratur dan baik durasinya berdampak nyata pada pemulihan imunitas (menjaga diri dari penyakit). Kesimpulannya waktu tidur mendikte kualitas kesehatan dan kekebalan tubuh.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Berlaku curang pada saat mengikuti ulangan jika tidak diketahui guru memang menguntungkan. Bayangkan saja, tanpa harus bersusah-susah belajar, siswa yang berlaku curang mendapat nilai bagus untuk mata pelajaran yang diteskan. Namun, mereka tidak sadar bahwa kelakuan mereka ini menimbulkan ketidakadilan antarsiswa dalam penilaian. Siswa yang dengan bersusah payah belajar mempersiapkan ulangan, nilainya lebih rendah daripada siswa yang berlaku curang dengan menjiplak jawaban temannya atau dari buku pelajaran dan catatan. Lebih parah lagi, si pelaku merasa bangga dengan nilai yang didapatkannya. Mereka tidak peduli akan teman lain yang berlaku jujur, nilainya lebih rendah daripada mereka. Bahkan, mereka menyalahkan teman-temannya karena tidak berani berlaku curang. Padahal siswa yang tidak berlaku curang telah berlaku jujur ketika mengikuti ulangan.",
            question: "Simpulan yang tepat untuk paragraf di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "Siswa yang berlaku curang pasti mendapatkan nilai yang bagus.",
              },
              {
                id: "b",
                text: "Tanpa harus belajar, siswa yang berlaku curang akan mendapatkan nilai yang baik.",
              },
              {
                id: "c",
                text: "Si pelaku kecurangan merasa bangga dengan nilai yang didapatkan.",
              },
              {
                id: "d",
                text: "Berlaku curang ketika mengerjakan ulangan menimbulkan ketidakadilan antarsiswa dalam penilaian.",
              },
              {
                id: "e",
                text: "Kita merasa prihatin terhadap tindakan siswa yang suka berlaku curang.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf ini membandingkan usaha siswa jujur versus kecurangan, sambil mengemukakan ketimpangan realita apresiasi yang ada. Inti simpulan adalah kecurangan memproduksi ketidakadilan objektif antar siswa.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Yang bukan merupakan pengertian dari kesimpulan adalah . . .",
            options: [
              { id: "a", text: "Gambaran umum suatu pembahasan." },
              { id: "b", text: "Intisari sebuah tulisan." },
              {
                id: "c",
                text: "Pernyataan singkat yang diambil dari hasil analisis atau pembahasan suatu topik.",
              },
              {
                id: "d",
                text: "Rangkuman dari seluruh informasi yang telah diterima, baca atau simak.",
              },
              {
                id: "e",
                text: "Teori atau pendapat baru yang belum dibahas sebelumnya.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kesimpulan didasarkan pada data/topik yang sudah dibahas sebelumnya. Kesimpulan bukan merupakan teori maupun pendapat yang benar-benar baru di luar struktur pembahasan.",
            points: 10,
          },
          {
            id: "q11",
            type: "multiple-choice",
            question:
              "Simpulan dapat dinyatakan secara tersirat, artinya . . .",
            options: [
              {
                id: "a",
                text: "Tidak secara jelas disampaikan sehingga perlu mencari maksud atau makna yang ada dalam teks.",
              },
              {
                id: "b",
                text: "Dinyatakan di dalam teks dengan kalimat yang jelas.",
              },
              { id: "c", text: "Bergabung dengan kalimat utama." },
              {
                id: "d",
                text: "Berupa hubungan sebab akibat atau akibat sebab.",
              },
              { id: "e", text: "Semua pilihan jawaban benar." },
            ],
            correctAnswer: "a",
            explanation:
              "Tersirat bermakna secara implisit. Makna atau kesimpulannya ada, tetapi dituntut penalaran pembaca untuk mencari makna tersembunyi berdasar data yg ada.",
            points: 10,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Hujan deras sejak pukul 09.00 WIB membuat sejumlah lokasi di Bandung terendam banjir. Akibatnya kemacetan arus lalu lintas langsung terjadi. Berdasarkan pantauan berita, sekitar pukul 10.30 WIB antrean kendaraan mulai terasa di depan Gedung Sate. Padahal, biasanya kemacetan di lokasi tersebut baru terjadi pada sore hari saat jam pulang kantor. Itu pun karena jumlah kendaraan yang menumpuk di jalanan.",
            question:
              "Berdasarkan kutipan teks di atas, simpulan yang tepat adalah . . .",
            options: [
              { id: "a", text: "Hujan mengguyur Bandung sejak kemarin pagi." },
              { id: "b", text: "Hujan deras menyebabkan banjir dan macet." },
              {
                id: "c",
                text: "Pemerintah telah mengantisipasi musibah banjir.",
              },
              { id: "d", text: "Kemacetan membuat kendaraan menumpuk." },
              {
                id: "e",
                text: "Antrean kendaraan penyebab kemacetan lalu lintas.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Sebab dan akibat dapat menjadi relasi kesimpulan dari suatu paragraf rincian peristiwa. Hujan deras menjadi biang keladi banjir dan selanjutnya disusul dengan kemacetan.',",
            points: 10,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Penelitian terbaru menunjukkan bahwa konsumsi makanan cepat saji secara berlebihan dapat meningkatkan risiko obesitas, penyakit jantung, dan diabetes. Kandungan lemak jenuh, gula, dan sodium yang tinggi pada makanan cepat saji menjadi penyebab utama masalah kesehatan tersebut.",
            question: "Kesimpulan yang tepat adalah . . .",
            options: [
              { id: "a", text: "Makanan cepat saji sangat enak." },
              {
                id: "b",
                text: "Semua orang harus menghindari makanan cepat saji.",
              },
              {
                id: "c",
                text: "Makanan cepat saji lebih murah daripada makanan sehat.",
              },
              { id: "d", text: "Makanan cepat saji menyebabkan kanker." },
              { id: "e", text: "Konsumsi makanan cepat saji perlu dibatasi." },
            ],
            correctAnswer: "e",
            explanation:
              "Dampak buruk makanan cepat saji telah dirinci melalui paragraf ini. Dengan mengetahui dampaknya, tindakan terbijak (menjadi simpulan logis teksnya) adalah membatasi tingkat konsumsi tipe makanan tersebut.",
            points: 10,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Polusi udara menjadi masalah serius di kota-kota besar. Peningkatan jumlah kendaraan bermotor, industri, dan pembakaran sampah menjadi penyebab utama. Partikel-partikel halus yang dihasilkan dari aktivitas tersebut dapat terhirup oleh manusia dan menyebabkan berbagai masalah kesehatan, seperti penyakit pernapasan, gangguan jantung, hingga kanker paru-paru. Selain itu, polusi udara juga merusak lingkungan, menyebabkan hujan asam, dan mempercepat pemanasan global. Untuk mengatasi masalah ini, berbagai upaya telah dilakukan, seperti penerapan standar emisi kendaraan yang lebih ketat, pengembangan transportasi umum yang ramah lingkungan, serta penanaman pohon dalam skala besar. Namun, upaya tersebut belum sepenuhnya efektif dalam mengurangi polusi udara. Perlu adanya kesadaran dan partisipasi aktif dari seluruh lapisan masyarakat untuk menjaga kualitas udara agar tetap bersih dan sehat.",
            question:
              "Berdasarkan teks di atas, kesimpulan yang tepat adalah . . .",
            options: [
              {
                id: "a",
                text: "Polusi udara hanya disebabkan oleh kendaraan bermotor.",
              },
              { id: "b", text: "Masalah polusi udara tidak dapat diatasi." },
              {
                id: "c",
                text: "Polusi udara hanya berdampak pada kesehatan manusia.",
              },
              {
                id: "d",
                text: "Upaya mengatasi polusi udara sudah sangat efektif.",
              },
              {
                id: "e",
                text: "Perlu adanya upaya bersama untuk mengatasi masalah polusi udara.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Paragraf membincangkan isu polusi beserta rentetan inefektivitas solusi-solusinya, hingga sampai pada gagasan sentral di kalimat terakhir bahwa peran aktif masyarakat perlu dikerahkan. Kesimpulan tepat berada pada kalimat terakhir.",
            points: 10,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Perkembangan teknologi informasi telah mengubah cara kita hidup dan bekerja. Internet telah menghubungkan manusia di seluruh dunia, memungkinkan akses informasi yang tak terbatas. Media sosial telah menjadi platform bagi orang-orang untuk berinteraksi, berbagi ide, dan membangun komunitas. Namun, dibalik kemudahan dan manfaat yang ditawarkan, teknologi juga membawa dampak negatif. Penyebaran berita bohong atau hoaks, penyalahgunaan data pribadi, dan kecanduan gadget menjadi beberapa masalah yang muncul.",
            question:
              "Berdasarkan teks di atas, kesimpulan yang tepat adalah . . .",
            options: [
              {
                id: "a",
                text: "Teknologi informasi hanya membawa dampak positif bagi kehidupan manusia.",
              },
              {
                id: "b",
                text: "Media sosial adalah penyebab utama penyebaran berita bohong.",
              },
              {
                id: "c",
                text: "Perkembangan teknologi informasi dapat dihindari.",
              },
              {
                id: "d",
                text: "Teknologi informasi telah memberikan kemudahan, namun juga menimbulkan tantangan baru.",
              },
              {
                id: "e",
                text: "Semua orang harus menghindari penggunaan teknologi informasi.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Sifat teknologi di sini dilihat melalui dualisme pemanfaatannya (positif dan negatif). Tantangan baru seperti hoaks lahir mengiringi kemudahannya. Kesimpulan ini menyarikan keseluruhan isi dua belah pihak dari teknologi informasi.",
            points: 10,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kesimpulan";
      moduleDoc.description =
        "Materi mengenai definisi, ciri-ciri, dan cara menentukan Kesimpulan dalam suatu paragraf.";
      moduleDoc.subcategory = "Paragraf 1";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kesimpulan",
        description:
          "Materi mengenai definisi, ciri-ciri, dan cara menentukan Kesimpulan dalam suatu paragraf.",
        subcategory: "Paragraf 1",
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

seedModule();
