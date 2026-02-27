const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSikapTujuanPenulis = async () => {
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
    const targetId = "sikap-dan-tujuan-penulis";

    const stepsData = [
      {
        title: "Materi: Sikap dan Tujuan Penulis",
        type: "reading",
        status: "active",
        description:
          "Materi Bacaan mengenai pengertian Sikap Penulis, Tujuan Penulis, dan cara menentukannya.",
        content: `
      <section class="mb-12">
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8" style="text-align: justify;">
          Sikap penulis adalah pandangannya terhadap suatu topik, pendapat, atau masalah. Sementara tujuan penulis adalah hal yang ingin dicapai atau dihasilkan dari tulisan yang dibuatnya.
        </p>

        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Sikap Penulis</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-6" style="text-align: justify;">
          Sikap penulis dapat dinyatakan dalam tiga bentuk, yaitu <span class="font-bold text-Primary-600">positif</span>, <span class="font-bold text-Primary-600">negatif</span>, atau <span class="font-bold text-Primary-600">netral</span>.
        </p>

        <div class="space-y-6 mb-10">
          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-3">1. Positif</h4>
            <p class="text-body-l font-semibold text-Grayscale-700 my-0">Ciri-ciri :</p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-900 leading-relaxed">
              <li>Ada keberpihakan, mendorong, memotivasi, dan mengajak.</li>
              <li>Ciri-ciri sikap penulis yang positif biasanya muncul pada jenis <span class="font-bold text-Primary-600">paragraf persuasi</span>.</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-3">2. Negatif</h4>
            <p class="text-body-l font-semibold text-Grayscale-700 my-0">Ciri-ciri :</p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-900 leading-relaxed">
              <li>Kesal, marah, mengkritik, dan ada kekhawatiran.</li>
              <li>Ciri-ciri sikap penulis yang negatif biasanya muncul pada jenis <span class="font-bold text-Primary-600">paragraf argumentasi</span>.</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-3">3. Netral</h4>
            <p class="text-body-l font-semibold text-Grayscale-700 my-0">Ciri-ciri :</p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-900 leading-relaxed">
              <li>Tidak memihak, realistis, tidak condong pada suatu sifat, dan moderat.</li>
              <li>Ciri-ciri sikap penulis yang netral biasanya muncul pada jenis <span class="font-bold text-Primary-600">paragraf eksposisi</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Tujuan Penulis</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-6" style="text-align: justify;">
          Tujuan penulis dapat dinyatakan dalam bentuk paragraf, yaitu <span class="font-bold text-Primary-600">deskripsi</span>, <span class="font-bold text-Primary-600">eksposisi</span>, <span class="font-bold text-Primary-600">persuasi</span>, <span class="font-bold text-Primary-600">argumentasi</span>, dan <span class="font-bold text-Primary-600">narasi</span>.
        </p>

        <div class="space-y-6 mb-10">
          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-2">1. Deskripsi</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0" style="text-align: justify;">
              Paragraf yang bertujuan untuk <span class="font-bold text-Primary-600">memberi gambaran tentang suatu objek atau keadaan sejelas-jelasnya</span>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-2">2. Eksposisi</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0" style="text-align: justify;">
              Paragraf yang bertujuan untuk <span class="font-bold text-Primary-600">memberi informasi sesuatu sehingga memperluas pengetahuan pembaca</span>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-2">3. Persuasi</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0" style="text-align: justify;">
              Paragraf yang bertujuan untuk <span class="font-bold text-Primary-600">mengajak pembaca untuk melakukan sesuatu sesuai keinginan penulis</span>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-2">4. Argumentasi</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0" style="text-align: justify;">
              Paragraf yang bertujuan untuk <span class="font-bold text-Primary-600">membuktikan pendapat penulis agar pembaca menerima pendapatnya</span>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h4 class="text-h4 mt-0 font-heading font-bold text-Primary-900 mb-2">5. Narasi</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0" style="text-align: justify;">
              Paragraf yang bertujuan untuk <span class="font-bold text-Primary-600">memberi tahu pembaca tentang suatu hal yang diketahui atau dialami penulis agar pembaca terkesan</span>.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Sikap & Tujuan Penulis</h3>

        <div class="space-y-8">
          <div>
              <h4 class="text-h4 font-heading font-bold m-0">1. Mencari Kesimpulan</h4>
            <p class="text-body-l mt-1 text-Grayscale-900 leading-relaxed ml-2" style="text-align: justify;">
              Mencari kesimpulan dapat dilakukan dengan mencari gagasan utama setiap paragraf, lalu simpulkanlah isi teks tersebut dari gagasan utama yang telah ditemukan.
            </p>
          </div>

          <div>
              <h4 class="text-h4 font-heading font-bold m-0">2. Sudut Pandang</h4>
            <p class="text-body-l mt-1 text-Grayscale-900 leading-relaxed ml-2" style="text-align: justify;">
              Posisikan pembaca sebagai penulis, dengan cara seperti ini, pembaca dapat lebih mudah menerka apa yang disampaikan oleh penulis.
            </p>
          </div>

          <div>
              <h4 class="text-h4 font-heading font-bold m-0">3. Cari Kata Kunci</h4>
            <p class="text-body-l mt-1 text-Grayscale-900 leading-relaxed ml-2" style="text-align: justify;">
              Mencari kata kunci adalah strategi yang tepat karena di dalam teks biasanya terdapat kata yang bersifat persuasif, naratif, dan lain-lain.
            </p>
          </div>

          <div>
              <h4 class="text-h4 font-heading font-bold m-0">4. Eliminasi Opsi Jawaban</h4>
            <p class="text-body-l mt-1 text-Grayscale-900 leading-relaxed ml-2" style="text-align: justify;">
              Pembaca harus berhati-hati dalam memilih opsi, pilih lah opsi jawaban yang logis, tidak keluar dari topik dan tidak bertele-tele.
            </p>
          </div>
        </div>
      </section>
        `,
      },
      {
        title: "Video Pembelajaran: Sikap dan Tujuan Penulis",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/o0jphRZUkWY",
        description:
          "Video pembahasan materi mengenai Sikap dan Tujuan Penulis.",
      },
      {
        title: "Video Pembelajaran: Latihan Soal Sikap dan Tujuan Penulis",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ZGfKD_qanO0",
        description:
          "Video pembahasan latihan soal mengenai Sikap dan Tujuan Penulis.",
      },
      {
        title: "Kuis: Sikap dan Tujuan Penulis",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Ciri-ciri sikap penulis: Mendukung, menyanjung, memuji, setuju, optimis, dan memberikan harapan.",
            question:
              "Ciri-ciri tersebut merupakan ciri-ciri dari sikap penulis?",
            options: [
              { id: "a", text: "Sikap penulis Negatif" },
              { id: "b", text: "Sikap penulis positif" },
              { id: "c", text: "Sikap penulis campuran" },
              { id: "d", text: "Sikap penulis netral" },
              { id: "e", text: "Sikap penulis biasa saja" },
            ],
            correctAnswer: "b",
            explanation:
              "Sikap positif ditunjukkan ketika penulis memandang suatu topik dengan pandangan yang baik, mendukung gagasan, optimis, atau memberikan dorongan/pujian terhadap hal yang dibahas.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              'Dalam sebuah artikel yang membahas pentingnya menjaga lingkungan hidup, penulis menyatakan, "Kita semua harus berperan aktif dalam menjaga kebersihan dan kelestarian alam, agar generasi mendatang dapat menikmati bumi yang sehat dan sejahtera."',
            question: "Sikap penulis dalam pernyataan tersebut adalah...",
            options: [
              { id: "a", text: "Netral" },
              { id: "b", text: "Persuasif" },
              { id: "c", text: "Kritis" },
              { id: "d", text: "Apatis" },
              { id: "e", text: "Deskriptif" },
            ],
            correctAnswer: "b",
            explanation:
              "Penggunaan kata 'harus berperan aktif' merupakan bentuk ajakan atau imbauan yang kuat kepada pembaca. Sikap yang bertujuan mengajak, membujuk, atau memengaruhi pembaca disebut sikap persuasif.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Seni pertunjukkan wayang kulit bukanlah hal yang baru. Seni pertunjukan ini sudah ada sejak zaman kuno dan berkembang di berbagai wilayah Asia Tenggara. Wayang kulit diperkirakan berasal dari tradisi penceritaan yang sudah ada berabad-abad lalu, di mana cerita-cerita epik seperti Ramayana dan Mahabharata diadaptasi menjadi pertunjukan bayangan. Oleh karena itu, secara historis dapat dikatakan bahwa wayang berperan sebagai media diplomasi pertemuan budaya serta kepercayaan lokal antara Asia Tenggara dan India.",
            question: "Sikap penulis pada teks bacaan tersebut adalah...",
            options: [
              { id: "a", text: "Apolitis" },
              { id: "b", text: "Sugestif" },
              { id: "c", text: "Netral" },
              { id: "d", text: "Kritis" },
              { id: "e", text: "Apatis" },
            ],
            correctAnswer: "c",
            explanation:
              "Penulis memaparkan sejarah dan penyebaran wayang kulit secara objektif berdasarkan fakta historis tanpa memihak, tanpa mengkritik, dan tanpa emosi yang berlebihan. Oleh karena itu, sikapnya adalah netral atau objektif.",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Tujuan penulis dapat dinyatakan dalam berbagai bentuk paragraf.",
            question:
              "Tujuan penulis dapat dinyatakan dalam bentuk paragraf berikut, kecuali...",
            options: [
              { id: "a", text: "Argumentasi" },
              { id: "b", text: "Eksposisi" },
              { id: "c", text: "Dekskripsi" },
              { id: "d", text: "Campuran" },
              { id: "e", text: "Narasi" },
            ],
            correctAnswer: "d",
            explanation:
              "Berdasarkan tujuannya (tujuan penulisan), paragraf dibagi menjadi 5 jenis: Narasi, Deskripsi, Eksposisi, Argumentasi, dan Persuasi. 'Campuran' bukanlah jenis paragraf berdasarkan tujuan, melainkan berdasarkan letak kalimat utama (Deduktif-Induktif).",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "(1) Selama ini, banyak orang dewasa yang menenangkan bayinya dengan cara mengayun atau mengguncangnya. (2) Namun, ternyata, mengguncang atau mengayun bayi dengan cara yang tidak benar dapat membahayakan keselamatan bayi. (3) Berdasarkan penelitian, mengguncang atau mengayun bayi dengan terlalu keras dapat menyebabkan shaken baby syndrome (SBS).",
            question:
              "Tujuan penulis menuliskan kalimat (3) pada teks diatas adalah...",
            options: [
              {
                id: "a",
                text: "Menguatkan informasi yang dibahas pada kalimat sebelumnya",
              },
              {
                id: "b",
                text: "Memperluas informasi yang telah dijelaskan pada kalimat sebelumnya",
              },
              {
                id: "c",
                text: "Menjelaskan hubungan sebab akibat atas informasi pada kalimat sebelumnya",
              },
              {
                id: "d",
                text: "Memerinci informasi yang disebutkan pada kalimat sebelumnya",
              },
              {
                id: "e",
                text: "Membuktikan penelitian yang dibahas pada kalimat sebelumnya",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (2) menyatakan bahwa mengguncang bayi itu berbahaya. Kalimat (3) memberikan bukti berupa hasil 'penelitian' yang menyebutkan dampak spesifiknya (SBS). Fungsi bukti penelitian ini adalah untuk menguatkan klaim pada kalimat (2).",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Ciri-ciri sikap penulis :\nTerdapat kekhawatiran, kesal, marah, mengkritik",
            question:
              "Ciri-ciri tersebut merupakan ciri-ciri dari sikap penulis?",
            options: [
              { id: "a", text: "Sikap penulis netral" },
              { id: "b", text: "Sikap penulis negatif" },
              { id: "c", text: "Sikap penulis biasa saja" },
              { id: "d", text: "Sikap penulis positif" },
              { id: "e", text: "Sikap penulis campuran" },
            ],
            correctAnswer: "b",
            explanation:
              "Kekhawatiran, kekesalan, kemarahan, dan kritikan adalah bentuk emosi atau penilaian yang menentang atau tidak menyukai suatu kondisi. Ini secara definitif merupakan indikator dari sikap negatif.",
            points: 6,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              'Lina selalu merasa cemas setiap kali ujian mendekat. Setiap malam, ia belajar dengan giat, tetapi kecemasannya tak kunjung hilang. Suatu hari, ibunya memberi nasihat, "Jangan terlalu cemas, nak. Lakukan yang terbaik, dan percayalah pada dirimu sendiri." Nasihat ibunya membuat Lina sedikit lebih tenang. Ia mulai mengubah cara pandangnya terhadap ujian. Ketika ujian tiba, Lina merasa lebih siap dan bisa menghadapinya dengan percaya diri.',
            question:
              "Sikap penulis terhadap kecemasan lina dalam teks narasi di atas adalah...",
            options: [
              {
                id: "a",
                text: "Menganggap kecemasan adalah hal yang tidak perlu",
              },
              {
                id: "b",
                text: "Menyatakan bahwa kecemasan tidak bisa dihilangkan",
              },
              {
                id: "c",
                text: "Mengkritik Lina karena terlalu cemas",
              },
              {
                id: "d",
                text: "Mendorong Lina untuk berhenti belajar karena kecemasan",
              },
              {
                id: "e",
                text: "Menunjukkan bahwa kecemasan adalah hal yang wajar dan dapat diatasi",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Penulis menceritakan proses Lina dari yang awalnya cemas menjadi bisa mengatasinya berkat dukungan (nasihat). Ini menunjukkan sikap penulis yang memandang kecemasan sebagai masalah nyata yang wajar, namun bisa diselesaikan (dapat diatasi).",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              'Lina selalu merasa cemas setiap kali ujian mendekat. Setiap malam, ia belajar dengan giat, tetapi kecemasannya tak kunjung hilang. Suatu hari, ibunya memberi nasihat, "Jangan terlalu cemas, nak. Lakukan yang terbaik, dan percayalah pada dirimu sendiri." Nasihat ibunya membuat Lina sedikit lebih tenang. Ia mulai mengubah cara pandangnya terhadap ujian. Ketika ujian tiba, Lina merasa lebih siap dan bisa menghadapinya dengan percaya diri.',
            question:
              "Tujuan penulis menuliskan nasihat ibu lina dalam teks diatas adalah...",
            options: [
              {
                id: "a",
                text: "Untuk menunjukkan bahwa ibu selalu benar",
              },
              {
                id: "b",
                text: "Untuk menekankan bahwa kecemasan harus dihindari",
              },
              {
                id: "c",
                text: "Untuk mengajarkan bahwa belajar tidak penting",
              },
              {
                id: "d",
                text: "Untuk memberikan contoh bagaimana menghadapi kecemasan dengan cara yang positif",
              },
              {
                id: "e",
                text: "Untuk menyarankan agar Lina tidak belajar terlalu keras",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Nasihat ibu ('Lakukan yang terbaik, dan percayalah pada dirimu sendiri') berfungsi sebagai solusi konkret atau contoh cara berpikir positif (mindset) untuk melawan rasa cemas yang dialami Lina.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              'Lina selalu merasa cemas setiap kali ujian mendekat. Setiap malam, ia belajar dengan giat, tetapi kecemasannya tak kunjung hilang. Suatu hari, ibunya memberi nasihat, "Jangan terlalu cemas, nak. Lakukan yang terbaik, dan percayalah pada dirimu sendiri." Nasihat ibunya membuat Lina sedikit lebih tenang. Ia mulai mengubah cara pandangnya terhadap ujian. Ketika ujian tiba, Lina merasa lebih siap dan bisa menghadapinya dengan percaya diri.',
            question:
              "Dalam narasi di atas, penulis ingin menunjukkan bahwa...",
            options: [
              {
                id: "a",
                text: "Lina seharusnya tidak mengikuti nasihat ibunya",
              },
              {
                id: "b",
                text: "Kecemasan bisa diatasi dengan percaya pada diri sendiri",
              },
              {
                id: "c",
                text: "Hanya dengan belajar keras seseorang bisa sukses",
              },
              {
                id: "d",
                text: "Semua orang harus mengikuti nasihat orang tua mereka",
              },
              {
                id: "e",
                text: "Ujian itu tidak penting sama sekali",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pesan moral atau gagasan utama yang ingin disampaikan penulis lewat cerita Lina adalah inti dari nasihat yang berhasil mengubah Lina: yaitu dengan memercayai diri sendiri, kecemasan menjelang ujian bisa diatasi.",
            points: 7,
          },
          {
            id: "q10",
            type: "matrix",
            context:
              "Sikap penulis dapat dianalisis dari pilihan kata dan cara penyampaian informasinya.",
            question:
              "Berikut ciri-ciri sikap penulis netral (Tentukan Benar/Salah)",
            rows: [
              { id: "r1", text: "Memihak" },
              { id: "r2", text: "Realistis" },
              { id: "r3", text: "Moderat" },
              { id: "r4", text: "Mendorong" },
              { id: "r5", text: "Tidak condong" },
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
              r5: "true",
            },
            explanation:
              "Sikap netral berarti objektif, apa adanya (realistis), berada di tengah-tengah (moderat), dan tidak memihak (tidak condong) pada satu kubu. Oleh karena itu, 'Memihak' dan 'Mendorong' (persuasif) adalah ciri yang salah untuk sikap netral.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "(1) Tol laut berbeda dengan tol yang ada di darat. Tol laut merupakan jalur pelayaran yang menghubungkan pelabuhan-pelabuhan besar di Indonesia. (2) Tujuannya untuk memperlancar arus logistik dan perdagangan antarwilayah. (3) Pembangunan tol laut ini memiliki berbagai dampak positif bagi Indonesia sebagai negara kepulauan. (4) Salah satu contoh dampak positif dari pembangunan tol laut yang nantinya akan dijalankan adalah membuat penduduk yang ada di Pulau Papua makin mudah berdagang dengan penduduk yang ada di Pulau Jawa. (5) Dengan melihat dampak positif yang ada, pada pemerintahan saat ini, pembangunan tol laut makin digencarkan demi meningkatkan kesejahteraan masyarakat di seluruh penjuru Indonesia.",
            question: "Tujuan penulis menuliskan kalimat (4) adalah...",
            options: [
              {
                id: "a",
                text: "Menggambarkan dampak positif pembangunan tol laut dengan perumpamaan yang lebih mudah ditangkap oleh orang awam",
              },
              {
                id: "b",
                text: "Mengungkapkan data terkait banyaknya dampak positif yang dirasakan oleh penduduk sebelum dibangunnya tol laut",
              },
              {
                id: "c",
                text: "Menunjukkan bahwa dampak positif pembangunan tol laut bisa dirasakan oleh penduduk di Pulau Jawa dan Papua",
              },
              {
                id: "d",
                text: "Memerinci dampak-dampak positif yang dirasakan oleh penduduk Papua dan Jawa setelah adanya tol laut",
              },
              {
                id: "e",
                text: "Memberitahukan bahwa jalur tol laut nantinya hanya dari Pulau Papua ke Pulau Jawa",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (3) menyatakan ada 'berbagai dampak positif'. Kalimat (4) memberikan satu ilustrasi atau contoh spesifik dari dampak positif tersebut, yaitu kemudahan berdagang antara penduduk di Jawa dan Papua.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "(1) Tol laut berbeda dengan tol yang ada di darat. Tol laut merupakan jalur pelayaran yang menghubungkan pelabuhan-pelabuhan besar di Indonesia. (2) Tujuannya untuk memperlancar arus logistik dan perdagangan antarwilayah. (3) Pembangunan tol laut ini memiliki berbagai dampak positif bagi Indonesia sebagai negara kepulauan. (4) Salah satu contoh dampak positif dari pembangunan tol laut yang nantinya akan dijalankan adalah membuat penduduk yang ada di Pulau Papua makin mudah berdagang dengan penduduk yang ada di Pulau Jawa. (5) Dengan melihat dampak positif yang ada, pada pemerintahan saat ini, pembangunan tol laut makin digencarkan demi meningkatkan kesejahteraan masyarakat di seluruh penjuru Indonesia.",
            question: "Dalam teks tersebut penulis berpihak kepada?",
            options: [
              {
                id: "a",
                text: "Kelompok masyarakat yang menolak tol laut",
              },
              { id: "b", text: "Penduduk di papua" },
              { id: "c", text: "Para elite politik" },
              { id: "d", text: "Penduduk di pulau jawa" },
              { id: "e", text: "Pemerintah saat ini" },
            ],
            correctAnswer: "e",
            explanation:
              "Keberpihakan penulis terlihat pada kalimat (5) dan nada keseluruhan teks yang menekankan sisi positif. Penulis merasionalkan alasan pemerintah untuk terus melanjutkan program (karena meningkatkan kesejahteraan), yang menunjukkan dukungan terhadap langkah pemerintah.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "(1) Tol laut berbeda dengan tol yang ada di darat. Tol laut merupakan jalur pelayaran yang menghubungkan pelabuhan-pelabuhan besar di Indonesia. (2) Tujuannya untuk memperlancar arus logistik dan perdagangan antarwilayah. (3) Pembangunan tol laut ini memiliki berbagai dampak positif bagi Indonesia sebagai negara kepulauan. (4) Salah satu contoh dampak positif dari pembangunan tol laut yang nantinya akan dijalankan adalah membuat penduduk yang ada di Pulau Papua makin mudah berdagang dengan penduduk yang ada di Pulau Jawa. (5) Dengan melihat dampak positif yang ada, pada pemerintahan saat ini, pembangunan tol laut makin digencarkan demi meningkatkan kesejahteraan masyarakat di seluruh penjuru Indonesia.",
            question:
              "Berdasarkan cara penulis menuangkan ide dan gagasannya, bagaimana sikap penulis yang tergambar dalam teks tersebut?",
            options: [
              {
                id: "a",
                text: "Kecewa akan adanya kemungkinan sarana yang digunakan untuk pembangunan tol laut sepenuhnya barang impor",
              },
              {
                id: "b",
                text: "Menyetujui pemikiran bahwa tol laut dapat memberikan banyak dampak positif bagi negara kepulauan",
              },
              {
                id: "c",
                text: "Bersikap netral dan tidak memberikan opini dari dampak yang mungkin ditimbulkan atas pembangunan tol laut",
              },
              {
                id: "d",
                text: "Menolak ide adanya tol laut karena pembangunan fasilitas ini akan dimanfaatkan sebagai kampanye para elite politik",
              },
              {
                id: "e",
                text: "Mendukung orang-orang yang menolak gagasan pemerintah terkait pembangunan tol laut",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Sejak awal paragraf (kalimat 3), penulis secara gamblang menyatakan 'Pembangunan tol laut ini memiliki berbagai dampak positif...'. Penulis memfokuskan bahasannya pada manfaat program ini bagi kesejahteraan, menunjukkan sikap menyetujui program tersebut.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Gaya hidup sehat mencakup rutinitas yang mendukung kebugaran fisik dan mental.",
            question:
              "Jika terdapat seorang penulis sebuah artikel tentang gaya hidup sehat yang mengajak pembaca untuk mulai berolahraga dan menjaga pola makan yang baik, penulis tersebut bertujuan untuk...",
            options: [
              {
                id: "a",
                text: "Mempengaruhi pembaca untuk melakukan perubahan positif",
              },
              {
                id: "b",
                text: "Menjelaskan fakta ilmiah tentang kesehatan tubuh",
              },
              {
                id: "c",
                text: "Menceritakan pengalaman pribadi penulis dalam berolahraga",
              },
              {
                id: "d",
                text: "Menggambarkan kondisi kesehatan masyarakat saat ini",
              },
              {
                id: "e",
                text: "Membuktikan bahwa olahraga lebih penting daripada pola makan",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kata kunci 'mengajak' menunjukkan bahwa tujuan tulisan tersebut bersifat persuasif, yaitu membujuk atau memengaruhi pembaca agar melakukan tindakan tertentu (dalam hal ini, hidup lebih sehat).",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            question:
              "1. Mencari kesimpulan\n2. Sudut pandang\n3. Mencari kata kunci\n4. Eliminasi opsi jawaban\nMerupakan cara dalam?",
            options: [
              { id: "a", text: "Mencari kesimpulan" },
              { id: "b", text: "Cara mencari jawaban yang salah" },
              {
                id: "c",
                text: "Cara menentukan sikap dan tujuan penulis",
              },
              { id: "d", text: "Cara mencari kalimat utama" },
              { id: "e", text: "Cara mencari jawaban yang benar" },
            ],
            correctAnswer: "c",
            explanation:
              "Langkah-langkah tersebut (mencari kesimpulan akhir, melihat sudut pandang/keberpihakan, dan memperhatikan kata kunci adjektiva/emosi) adalah teknik standar untuk mengidentifikasi sikap dan tujuan seorang penulis dalam sebuah teks panjang.",
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
      moduleDoc.name = "Sikap dan Tujuan Penulis";
      moduleDoc.description =
        "Materi mengenai sikap penulis (positif, negatif, netral), tujuan penulis, dan cara menentukannya.";
      moduleDoc.subcategory = "Paragraf 2";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Sikap dan Tujuan Penulis",
        description:
          "Materi mengenai sikap penulis (positif, negatif, netral), tujuan penulis, dan cara menentukannya.",
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

seedSikapTujuanPenulis();
