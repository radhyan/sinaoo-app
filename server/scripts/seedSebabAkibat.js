const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSebabAkibat = async () => {
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
    const moduleName = "Sebab Akibat";
    const targetNameRaw = "Sebab akibat"; // The specific name user mentioned, but we'll use regex to be safe

    const stepsData = [
      {
        title: "Sebab Akibat",
        type: "reading",
        status: "active",
        description: "Materi Bacaan",
        content: `

      <p class="mb-6 text-body-l text-Grayscale-900">
        Sebab akibat adalah <strong>hubungan antara dua kejadian atau peristiwa</strong>. Satu
        kejadian (<span class="text-Primary-600">sebab</span>) menyebabkan
        terjadinya kejadian lainnya (<span class="text-Primary-600">akibat</span>). Hal ini seperti efek
        domino lho <em>studymates</em>, yaitu ketika satu peristiwa memicu
        peristiwa lainnya.
      </p>

      <div class="overflow-hidden mb-6 rounded-md">
        <table class="w-full text-left border-collapse rounded-md">
          <thead>
            <tr>
              <th class="text-h5 p-4 text-center text-Primary-600 font-bold border border-Primary-400" style="border-color: #3a74ea;">
                Sebab
              </th>
              <th class="text-h5 p-4 text-center text-Primary-600 font-bold border border-Primary-400" style="border-color: #3a74ea;">
                Akibat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea;">
                Peristiwa atau kondisi yang memicu terjadinya suatu peristiwa
                lain. Sebab seringkali menjadi awal mula atau alasan dari suatu
                kejadian.
              </td>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea;">
                Hasil atau dampak dari suatu peristiwa atau kondisi yang terjadi
                sebelumnya. Akibat adalah konsekuensi langsung atau tidak langsung
                dari suatu sebab.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col gap-6 mb-8">
        <div>
          <span class="inline-block px-6 py-1 border-2 border-Primary-600 rounded-lg text-Primary-900 font-bold text-body-l">
            Rumus
          </span>
        </div>

        <div>
          <h5 class="text-body-l font-bold text-Primary-600 mb-2">
            &gt; Penyebab + Kata/Frasa + Akibat
          </h5>
          <div class="bg-white p-4 rounded-lg">
            <div class="flex flex-wrap items-end gap-x-2">
              <!-- Segment 1 -->
              <div class="flex flex-col items-center">
                <p class="text-lg leading-none py-1 px-2 text-center bg-Primary-100 text-Primary-900 rounded-xsm font-medium">Adi tidak memakai jas hujan,</p>
                <span class="text-body-md text-center font-medium px-2 py-1 bg-Primary-100 text-Primary-900 rounded-xsm">penyebab</span>
              </div>
              
              <!-- Segment 2 -->
               <div class="flex flex-col items-center">
                <p class="text-lg leading-none py-1 px-2 text-center bg-Grayscale-100 text-Grayscale-900 rounded-xsm font-medium">sehingga</p>
                <span class="text-body-md text-center font-medium px-2 py-1 bg-Grayscale-100 text-Grayscale-900 rounded-xsm">kata</span>
              </div>

              <!-- Segment 3 -->
               <div class="flex flex-col items-center">
                <p class="text-lg leading-none py-1 px-2 text-center bg-Secondary-100 text-Secondary-900 rounded-xsm font-medium">dia basah kuyup.</p>
                <span class="text-body-md text-center font-medium px-2 py-1 bg-Secondary-100 text-Secondary-900 rounded-xsm">akibat</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 class="text-body-l font-bold text-Primary-600 mb-2">
            &gt; Kata/Frasa + Penyebab, + Akibat
          </h5>
          <div class="bg-white p-4 rounded-lg">
             <div class="flex flex-wrap items-end gap-x-2">
              <!-- Segment 1 -->
              <div class="flex flex-col items-center">
                <p class="text-lg leading-none py-1 px-2 text-center bg-Grayscale-100 text-Grayscale-900 rounded-xsm font-medium">Karena</p>
                <span class="text-body-md text-center font-medium px-2 py-1 bg-Grayscale-100 text-Grayscale-900 rounded-xsm">kata</span>
              </div>
              
              <!-- Segment 2 -->
               <div class="flex flex-col items-center">
                <p class="text-lg leading-none py-1 px-2 text-center bg-Primary-100 text-Primary-900 rounded-xsm font-medium">harganya yang melambung tinggi,</p>
                <span class="text-body-md text-center font-medium px-2 py-1 bg-Primary-100 text-Primary-900 rounded-xsm">penyebab</span>
              </div>

              <!-- Segment 3 -->
               <div class="flex flex-col items-center">
                <p class="text-lg leading-none py-1 px-2 text-center bg-Secondary-100 text-Secondary-900 rounded-xsm font-medium">barang itu tidak laku lagi.</p>
                <span class="text-body-md text-center font-medium px-2 py-1 bg-Secondary-100 text-Secondary-900 rounded-xsm">akibat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6 mb-8">
        <div>
          <span class="inline-block px-6 py-1 border-2 border-Primary-600 rounded-lg text-Primary-900 font-bold text-body-l">
            Kata/Frasa yang Sering digunakan
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-body-l font-bold text-Grayscale-900">
              Kata yang selalu menempel dengan penyebab (P)
            </p>
               <ul class="list-disc pl-5 space-y-1 text-Grayscale-900 m-0" style="margin: 0;">
                <li>Jika (P)</li>
                <li>Apabila (P)</li>
                <li>Karena (P)</li>
                <li>Ketika (P)</li>
                <li>Kalau (P)</li>
                <li>Disebabkan (P)</li>
                <li>Akibat (P)</li>
                <li>Diakibatkan (P)</li>
              </ul>
          </div>
          <div>
            <p class="text-body-l font-bold text-Grayscale-900">
              Kata yang selalu menempel dengan akibat (Q)
            </p>
            <ul class="list-disc pl-5 space-y-1 text-Grayscale-900 m-0" style="margin: 0;">
              <li>Maka (Q)</li>
              <li>Sehingga (Q)</li>
              <li>Menyebabkan (Q)</li>
              <li>Akibatnya (Q)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6 mb-8">
        <div>
          <span class="inline-block px-6 py-1 border-2 border-Primary-600 rounded-lg text-Primary-900 font-bold text-body-l">
            Kata Kunci
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h5 class="font-bold text-Primary-600 text-lg mb-4">
              Akibat - Sebab
            </h5>
            <ul class="space-y-3 text-Grayscale-700 font-medium">
               <li>... karena ...</li>
               <li>... apabila ...</li>
               <li>... diakibatkan ...</li>
               <li>... disebabkan ...</li>
               <li>... akibat ...</li>
               <li>... sebab ...</li>
               <li>... dalam ...</li>
            </ul>
          </div>  
          <div>
            <h5 class="font-bold text-Primary-600 text-lg mb-4">
              Sebab - Akibat
            </h5>
            <ul class="space-y-3 text-Grayscale-700 font-medium">
              <li>Jika ..., maka ...</li>
              <li>... sehingga ...</li>
              <li>... menyebabkan ...</li>
              <li>... mengakibatkan ...</li>
              <li>... dapat ...</li>
            </ul>
          </div>
        </div>
      </div>
      `,
      },
      {
        title: "Video Pembelajaran 1",
        type: "video",
        status: "active",
        videoUrl:
          "https://www.youtube-nocookie.com/embed/gtXJcgyk8kA?si=kWdX1pVY894EtOC6",
        description:
          "Simak video penjelasan mengenai konsep Sebab Akibat berikut ini untuk pemahaman yang lebih mendalam.",
      },
      {
        title: "Video Pembelajaran 2",
        type: "video",
        status: "active",
        videoUrl:
          "https://www.youtube-nocookie.com/embed/Nb4P8Xs2N_w?si=xeggXbZnIJpPJd-M",
        description: "Lanjutan penjelasan mengenai konsep Sebab Akibat.",
      },
      {
        title: "Kuis",
        type: "quiz",
        status: "active",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "(1) pada musim kering tahun ini, petani di Desa Sukamaju gagal panen.\n(2) warga Desa Sukamaju mencari air ke desa lain.",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan di antara kedua pernyataan?",
            options: [
              {
                id: "a",
                text: "pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan",
              },
              {
                id: "e",
                text: "pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam logika soal ini, kegagalan panen (Pernyataan 1) menciptakan kondisi krisis sumber daya di desa tersebut. Akibat dari krisis pangan atau ekonomi akibat gagal panen tersebut, warga terpaksa mencari sumber penghidupan atau kebutuhan dasar (air) ke tempat lain (Pernyataan 2) untuk bertahan hidup.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "(1) jumlah siswa TK yang suka menyanyikan lagu anak-anak semakin meningkat.\n(2) banyak acara di TV menyelenggarakan lomba menyanyi lagu anak-anak.",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan di antara kedua pernyataan?",
            options: [
              {
                id: "a",
                text: "pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan",
              },
              {
                id: "e",
                text: "pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Media massa memiliki pengaruh kuat terhadap perilaku masyarakat. Banyaknya acara lomba menyanyi di TV (Pernyataan 2) memberikan eksposur yang masif kepada anak-anak. Hal ini memicu minat mereka untuk meniru, sehingga jumlah anak yang suka menyanyi pun meningkat (Pernyataan 1).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "(1) agen perumahan memberi penawaran khusus untuk pembelian rumah.\n(2) pemerintah membuat kebijakan ganti rugi bagi warga yang terkena dampak pembangunan.",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan di antara kedua pernyataan?",
            options: [
              {
                id: "a",
                text: "pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan",
              },
              {
                id: "e",
                text: "pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kedua peristiwa ini biasanya muncul karena satu penyebab besar yang sama, misalnya: Pembangunan Infrastruktur Besar. Penyebab: Ada pembangunan jalan tol atau bendungan. Akibat 1: Pemerintah memberi ganti rugi. Akibat 2: Agen perumahan menawarkan rumah baru.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Dalam beberapa tahun terakhir, jumlah kasus obesitas di kalangan anak-anak meningkat secara signifikan. Para ahli kesehatan menyatakan bahwa salah satu faktor utama penyebab obesitas adalah konsumsi makanan cepat saji yang tinggi kalori dan rendah nutrisi. Selain itu, kurangnya aktivitas fisik juga turut berkontribusi terhadap masalah ini. Anak-anak sekarang lebih banyak menghabiskan waktu di depan layar gadget daripada bermain di luar rumah. Hal ini menyebabkan pembakaran kalori yang tidak seimbang dengan asupan makanan yang dikonsumsi.",
            question:
              "Berdasarkan teks di atas, manakah pernyataan berikut yang paling tepat menggambarkan hubungan sebab-akibat?",
            options: [
              {
                id: "a",
                text: "Konsumsi makanan cepat saji yang tinggi kalori menyebabkan anak-anak lebih banyak menghabiskan waktu di depan layar gadget.",
              },
              {
                id: "b",
                text: "Kurangnya aktivitas fisik dan konsumsi makanan cepat saji yang tinggi kalori menyebabkan peningkatan kasus obesitas pada anak-anak.",
              },
              {
                id: "c",
                text: "Anak-anak yang obesitas cenderung lebih suka menghabiskan waktu di depan layar gadget daripada bermain di luar rumah.",
              },
              {
                id: "d",
                text: "Meningkatnya kasus obesitas pada anak-anak disebabkan oleh kurangnya kesadaran orang tua terhadap pentingnya nutrisi.",
              },
              {
                id: "e",
                text: "Aktivitas fisik yang tinggi dapat mengurangi efek negatif dari konsumsi makanan cepat saji.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Jawaban ini adalah rangkuman paling akurat karena menggabungkan dua faktor utama (sebab) yang disebutkan secara eksplisit dalam teks—yaitu pola makan buruk dan kurang gerak—yang secara langsung bermuara pada masalah utama, yaitu obesitas.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Peningkatan suhu global menyebabkan pencairan es di kutub. Hal ini mengakibatkan naiknya permukaan air laut dan berpotensi menenggelamkan pulau-pulau kecil. Selain itu, perubahan iklim juga memengaruhi ekosistem laut, seperti terumbu karang yang mengalami pemutihan.",
            question:
              "Berdasarkan teks di atas, manakah pernyataan yang paling tepat menggambarkan hubungan sebab-akibat?",
            options: [
              {
                id: "a",
                text: "Pencairan es di kutub disebabkan oleh naiknya permukaan air laut.",
              },
              {
                id: "b",
                text: "Terumbu karang yang mengalami pemutihan menyebabkan peningkatan suhu global.",
              },
              {
                id: "c",
                text: "Peningkatan suhu global menyebabkan pencairan es di kutub dan naiknya permukaan air laut.",
              },
              {
                id: "d",
                text: "Naiknya permukaan air laut menyebabkan perubahan iklim.",
              },
              {
                id: "e",
                text: "Perubahan iklim hanya memengaruhi ekosistem darat, bukan laut.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Teks menyajikan rantai kejadian yang berurutan (kausalitas berantai): Suhu naik (Penyebab Awal) → Es mencair (Akibat Antara) → Air laut naik (Akibat Akhir). Pilihan ini merangkum urutan tersebut dengan tepat.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Penggunaan pupuk kimia secara berlebihan dapat menyebabkan pencemaran tanah dan air. Hal ini terjadi karena pupuk kimia mengandung zat-zat berbahaya yang tidak dapat diuraikan oleh alam. Akibatnya, kualitas tanah menurun dan air tanah menjadi tercemar.",
            question:
              "Apa akibat utama dari penggunaan pupuk kimia secara berlebihan?",
            options: [
              {
                id: "a",
                text: "Meningkatnya kesuburan tanah.",
              },
              {
                id: "b",
                text: "Pencemaran tanah dan air.",
              },
              {
                id: "c",
                text: "Menurunnya populasi serangga.",
              },
              {
                id: "d",
                text: "Meningkatnya kualitas air tanah.",
              },
              {
                id: "e",
                text: "Pupuk kimia tidak berpengaruh pada lingkungan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Teks secara spesifik menyebutkan bahwa residu zat kimia yang tidak terurai akan merusak kualitas tanah dan mencemari air tanah. Pilihan lain seperti 'meningkatnya kesuburan' bertentangan dengan konteks dampak negatif.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Kurangnya tidur dapat menyebabkan penurunan konsentrasi dan daya ingat. Hal ini terjadi karena otak tidak mendapatkan waktu yang cukup untuk beristirahat dan memproses informasi. Akibatnya, produktivitas seseorang dapat menurun.",
            question:
              "Mengapa kurang tidur dapat menurunkan produktivitas seseorang?",
            options: [
              {
                id: "a",
                text: "Karena otak tidak mendapatkan waktu yang cukup untuk beristirahat.",
              },
              {
                id: "b",
                text: "Karena tubuh membutuhkan lebih banyak energi saat kurang tidur.",
              },
              {
                id: "c",
                text: "Karena kurang tidur menyebabkan peningkatan stres.",
              },
              {
                id: "d",
                text: "Karena kurang tidur meningkatkan nafsu makan.",
              },
              {
                id: "e",
                text: "Karena kurang tidur membuat seseorang lebih kreatif.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Jawaban ini diambil langsung dari kalimat dalam teks yang menjelaskan mekanisme biologisnya: 'Hal ini terjadi karena otak tidak mendapatkan waktu yang cukup untuk beristirahat...'",
            points: 6,
          },
          {
            id: 8,
            type: "matrix",
            context:
              "Pemanasan global disebabkan oleh meningkatnya konsentrasi gas rumah kaca di atmosfer. Gas rumah kaca ini berasal dari aktivitas manusia seperti pembakaran bahan bakar fosil dan deforestasi. Akibatnya, suhu bumi meningkat dan menyebabkan perubahan iklim.",
            question:
              "Berdasarkan teks di atas, tentukan apakah pernyataan berikut benar atau salah!",
            rows: [
              {
                id: "r1",
                text: "Pemanasan global disebabkan oleh meningkatnya konsentrasi gas rumah kaca",
              },
              {
                id: "r2",
                text: "Deforestasi tidak berkontribusi terhadap pemanasan global.",
              },
              {
                id: "r3",
                text: "Perubahan iklim adalah salah satu akibat dari pemanasan global.",
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
            },
            explanation:
              "Pemanasan global disebabkan gas rumah kaca (Benar). Deforestasi disebutkan sebagai aktivitas manusia yang menyebabkan gas rumah kaca, jadi berkontribusi (Salah). Perubahan iklim disebutkan sebagai akibat pemanasan global (Benar).",
            points: 6,
          },
          {
            id: 9,
            type: "matrix",
            context:
              "Konsumsi gula berlebihan dapat menyebabkan obesitas dan diabetes. Hal ini terjadi karena gula mengandung kalori tinggi yang tidak diimbangi dengan aktivitas fisik. Selain itu, gula juga dapat merusak gigi jika dikonsumsi secara berlebihan.",
            question:
              "Berdasarkan teks di atas, tentukan apakah pernyataan berikut benar atau salah!",
            rows: [
              {
                id: "r1",
                text: "Konsumsi gula berlebihan dapat menyebabkan obesitas.",
              },
              {
                id: "r2",
                text: "Gula tidak memiliki kalori tinggi.",
              },
              {
                id: "r3",
                text: "Kerusakan gigi tidak terkait dengan konsumsi gula.",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "false",
            },
            explanation:
              "Gula berlebihan menyebabkan obesitas (Benar). Gula mengandung kalori tinggi (Salah). Gula dapat merusak gigi (Salah - pernyataan mengatakan tidak terkait).",
            points: 6,
          },
          {
            id: 10,
            type: "matrix",
            context:
              "Penggunaan plastik sekali pakai yang berlebihan menyebabkan pencemaran lingkungan. Plastik tidak dapat terurai secara alami dan dapat mencemari tanah serta air. Akibatnya, ekosistem menjadi terganggu.",
            question:
              "Berdasarkan teks di atas, tentukan apakah pernyataan berikut benar atau salah!",
            rows: [
              {
                id: "r1",
                text: "Plastik sekali pakai dapat terurai secara alami",
              },
              {
                id: "r2",
                text: "Pencemaran lingkungan disebabkan oleh penggunaan plastik sekali pakai.",
              },
              {
                id: "r3",
                text: "Ekosistem tidak terganggu oleh pencemaran plastik.",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "false",
            },
            explanation:
              "Plastik tidak dapat terurai alami (Salah). Pencemaran disebabkan plastik (Benar). Ekosistem menjadi terganggu (Salah - pernyataan mengatakan tidak terganggu).",
            points: 6,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "(1) terjadi peningkatan jumlah impor gula dibandingkan dengan tahun sebelumnya.\n(2) banyak penduduk Indonesia menderita penyakit kencing manis.",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan di antara kedua pernyataan?",
            options: [
              {
                id: "a",
                text: "pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan",
              },
              {
                id: "e",
                text: "pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Peningkatan impor gula (Pernyataan 1) menandakan ketersediaan gula melimpah dan murah. Ini mendorong konsumsi masyarakat tak terkontrol, menyebabkan lonjakan diabetes (Pernyataan 2).",
            points: 8,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Terdapat data dibawah ini;\n- Di kota A, peningkatan jumlah kendaraan bermotor diikuti oleh peningkatan polusi udara.\n- Di kota B, peningkatan jumlah kendaraan bermotor tidak diikuti oleh peningkatan polusi udara.\n\nPeningkatan jumlah kendaraan bermotor selalu menyebabkan peningkatan polusi udara.",
            question: "Apakah pernyataan tersebut benar berdasarkan data?",
            options: [
              {
                id: "a",
                text: "Benar, karena di kota A polusi meningkat seiring dengan peningkatan kendaraan.",
              },
              {
                id: "b",
                text: "Salah, karena di kota B polusi tidak meningkat meskipun jumlah kendaraan bertambah.",
              },
              {
                id: "c",
                text: "Benar, karena peningkatan kendaraan pasti menyebabkan polusi.",
              },
              {
                id: "d",
                text: "Salah, karena tidak ada hubungan antara kendaraan dan polusi.",
              },
              {
                id: "e",
                text: "Benar, karena data kota A mendukung pernyataan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'selalu' berarti mutlak. Data Kota B (kendaraan naik tapi polusi tidak) adalah counter-example yang membatalkan kesimpulan mutlak tersebut.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "(1) Taman kota rajin dibersihkan setiap hari\n(2) Banyak orang suka berkunjung di taman kota",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan antara pernyataan (1) dan (2)?",
            options: [
              {
                id: "a",
                text: "pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan",
              },
              {
                id: "e",
                text: "pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Lingkungan bersih (Pernyataan 1) adalah daya tarik utama yang membuat orang betah berkunjung (Pernyataan 2).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "(1) Penegak hukum tidak menjalankan tugas secara sungguh-sungguh\n(2) Banyak aturan hukum yang sudah tidak relevan dan perlu diperbaharui",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan antara pernyataan (1) dan (2)?",
            options: [
              {
                id: "a",
                text: "pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat",
              },
              {
                id: "b",
                text: "pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat",
              },
              {
                id: "c",
                text: "pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan",
              },
              {
                id: "d",
                text: "pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan",
              },
              {
                id: "e",
                text: "pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Ketika penegak hukum lalai (Pernyataan 1), evaluasi hukum macet. Akibatnya hukum tidak diperbarui dan menjadi usang (Pernyataan 2).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "(1) Terjadi banjir bandang di daerah tersebut.\n(2) Banyak pohon di hutan ditebang secara ilegal.",
            question:
              "Manakah di bawah ini yang menggambarkan hubungan antara pernyataan (1) dan (2)?",
            options: [
              {
                id: "a",
                text: "Pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat.",
              },
              {
                id: "b",
                text: "Pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan.",
              },
              {
                id: "c",
                text: "Pernyataan 1 dan 2 adalah akibat dari dua penyebab yang saling berhubungan.",
              },
              {
                id: "d",
                text: "Pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama.",
              },
              {
                id: "e",
                text: "Pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Penebangan liar (Pernyataan 2) merusak fungsi hutan menyerap air. Akibatnya saat hujan, air langsung mengalir deras menyebabkan banjir (Pernyataan 1).",
            points: 7,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    const moduleSlug = "sebab-akibat";
    let moduleDoc = await Module.findById(moduleSlug);

    if (moduleDoc) {
      console.log(
        `Found existing module: ${moduleDoc.name} (${moduleDoc._id}). Deleting to ensure fresh seed...`,
      );
      await Module.deleteOne({ _id: moduleDoc._id });
    }

    console.log(`Creating new module 'Sebab Akibat' with ID: ${moduleSlug}`);
    moduleDoc = await Module.create({
      _id: moduleSlug,
      courseId: course._id,
      name: "Sebab Akibat",
      description: "Modul mengenai Sebab Akibat",
      subcategory: "Penalaran Induktif",
      steps: stepsData,
    });
    console.log("Module Created.");

    const updatedModule = moduleDoc;

    console.log("Module Seeded:", updatedModule.name);
    console.log("Module ID:", updatedModule._id);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedSebabAkibat();
