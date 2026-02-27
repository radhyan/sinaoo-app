const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedHubunganAntarparagraf = async () => {
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
    const targetId = "hubungan-antarparagraf";

    const stepsData = [
      {
        title: "Materi: Hubungan Antarparagraf",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang hubungan antarparagraf, jenis-jenis konjungsi antarparagraf, dan tips mengerjakan soal.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Definisi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Hubungan Antarparagraf?</h3>
              <p class="text-body-lg leading-relaxed text-justify">
                Hubungan antarparagraf adalah hubungan antara satu paragraf dengan paragraf lainnya yang dihubungkan oleh <strong>konjungsi antarparagraf</strong>.
              </p>
              <div class="mt-4 p-4 bg-Primary-50 rounded-lg border border-Primary-100">
                <p class="font-bold text-Primary-800 mb-2">Fungsi Konjungsi Antar Paragraf:</p>
                <ul class="list-disc list-outside pl-5 space-y-2 text-body-lg text-Grayscale-700">
                  <li>Mengawali paragraf yang memiliki hubungan dengan paragraf sebelumnya</li>
                  <li>Menunjukkan bahwa paragraf tersebut terhubung dengan paragraf sebelumnya</li>
                  <li>Memudahkan pembaca untuk memahami hubungan antara paragraf</li>
                </ul>
              </div>
            </section>

            <!-- Jenis-Jenis Konjungsi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-Jenis Konjungsi Antar Paragraf</h3>

              <!-- 1. Tambahan -->
              <div class="bg-white rounded-xl shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">1. Menyatakan Tambahan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-lg text-Grayscale-700 mb-4 text-justify">
                    Jenis kata hubung antar paragraf ini digunakan ketika paragraf berikutnya isinya memberi tambahan penjelasan atau suatu tambahan lain.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mb-2">Contoh:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">begitu pula</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">demikian juga</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">di samping itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">akhirnya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2. Perbandingan -->
              <div class="bg-white rounded-xl shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">2. Menyatakan Perbandingan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-lg text-Grayscale-700 mb-4 text-justify">
                    Konjungsi antar paragraf yang ditambahkan dengan maksud menjelaskan suatu kondisi kontradiktif dengan isi paragraf pertama.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mb-2">Contoh:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">sebagaimana</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">sama halnya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 3. Pertentangan -->
              <div class="bg-white rounded-xl shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">3. Menyatakan Pertentangan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-lg text-Grayscale-700 mb-4 text-justify">
                    Konjungsi antar paragraf yang ditambahkan dengan maksud menyatakan suatu pertentangan. Jika paragraf pertama bertentangan dengan paragraf kedua, maka bisa menambahkan kata hubung jenis ini.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mb-2">Contoh:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">bagaimanapun juga</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">sebaliknya</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">namun</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 4. Akibat -->
              <div class="bg-white rounded-xl shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">4. Menyatakan Akibat</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-lg text-Grayscale-700 mb-4 text-justify">
                    Konjungsi antar paragraf yang ditambahkan dengan maksud untuk menyatakan atau menjelaskan akibat atau dampak dari penjelasan di paragraf sebelumnya.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mb-2">Contoh:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">jadi</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">oleh karena itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">akibatnya</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Primary-200 text-body-md font-medium">dampaknya</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 5. Tujuan -->
              <div class="bg-white rounded-xl shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">5. Menyatakan Tujuan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-lg text-Grayscale-700 mb-4 text-justify">
                    Konjungsi antar paragraf yang ditambahkan dengan maksud untuk menjelaskan tujuan dari paragraf sebelumnya.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mb-2">Contoh:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">untuk maksud itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">untuk mencapai hal itu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Secondary-200 text-body-md font-medium">untuk itulah</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 6. Waktu -->
              <div class="bg-white rounded-xl shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">6. Menyatakan Waktu</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-lg text-Grayscale-700 mb-4 text-justify">
                    Konjungsi antar paragraf yang ditambahkan dengan maksud untuk menjelaskan bahwa paragraf kedua memiliki kesamaan maupun perbedaan waktu kejadian dengan penjelasan di paragraf pertama.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mb-2">Contoh:</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">kemudian</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">lalu</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-Tertiary-200 text-body-md font-medium">sementara itu</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Tips & Trik -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Tips & Trik Mengerjakan Soal Hubungan Antarparagraf</h3>

              <div class="space-y-4">
                <div class="bg-white rounded-xl shadow-sm border border-Grayscale-200 p-6">
                  <h4 class="text-h4 font-bold text-Primary-800 mb-2">1. Tenang dan Fokus</h4>
                  <p class="text-body-lg text-Grayscale-700 text-justify">
                    Tenang dan fokus merupakan kunci utama dalam menyelesaikan soal.
                  </p>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-Grayscale-200 p-6">
                  <h4 class="text-h4 font-bold text-Primary-800 mb-2">2. Membaca Soal Pertanyaan di Awal</h4>
                  <p class="text-body-lg text-Grayscale-700 text-justify">
                    Tips ini bertujuan agar waktu yang digunakan dapat lebih efisien. Karena teks literasi dalam soal sudah pasti panjang.
                  </p>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-Grayscale-200 p-6">
                  <h4 class="text-h4 font-bold text-Primary-800 mb-2">3. Mencari Konjungsi</h4>
                  <p class="text-body-lg text-Grayscale-700 text-justify">
                    Setelah fokus dan membaca soal dengan seksama, pembaca dapat langsung mencari konjungsi yang tepat untuk mengetahui korelasi antarparagraf.
                  </p>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Hubungan Antarparagraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/3oDR6_n8Qcg",
        description: "Video pembelajaran tentang hubungan antarparagraf.",
      },
      {
        title: "Video: Latihan Soal Hubungan Antarparagraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/VMkCwR8gj2A",
        description: "Video latihan soal mengenai hubungan antarparagraf.",
      },
      {
        title: "Kuis Hubungan Antarparagraf",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "short-answer",
            context:
              "Presiden RI Joko Widodo meninjau langsung Grab Vaccine Center untuk gelombang kedua vaksinasi yang berlokasi di Jogja Expo Center, Bantul, Daerah Istimewa Yogyakarta (DIY). Diketahui, pusat vaksinasi ini dihadirkan melalui kolaborasi Grab dan Good Doctor bersama Kementerian Kesehatan Republik Indonesia dan Dinas Kesehatan Provinsi Daerah Istimewa Yogyakarta (DIY).\n\nDalam kesempatan ini, Presiden Jokowi menyampaikan apresiasinya kepada masyarakat dan seluruh pihak yang telah membantu menyukseskan program vaksinasi COVID-19, seperti Grab. Sebab, Jokowi menilai vaksinasi merupakan bentuk upaya pencegahan dari virus corona yang tidak mungkin hilang secara total.",
            question:
              "Hubungan antarparagraf dari teks di atas adalah paragraf kedua _____ paragraf pertama",
            correctAnswer: "menjelaskan",
            explanation:
              "Paragraf kedua memberikan penjelasan lebih lanjut tentang apa yang terjadi saat kunjungan Presiden ke Grab Vaccine Center yang disebutkan di paragraf pertama. Kata 'Dalam kesempatan ini' menunjukkan kelanjutan penjelasan.",
            points: 6,
          },
          {
            id: "q2",
            type: "matrix",
            context:
              "Konjungsi antarparagraf memiliki berbagai fungsi tergantung tujuannya.",
            question:
              "Berikut konjungsi antarparagraf yang digunakan dengan tujuan untuk menyatakan waktu (Tentukan Benar/Salah)",
            rows: [
              { id: "r1", text: "Untuk maksud itu" },
              { id: "r2", text: "Kemudian" },
              { id: "r3", text: "Sebagaimana" },
              { id: "r4", text: "Lalu" },
              { id: "r5", text: "Dampaknya" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "false",
              r4: "true",
              r5: "false",
            },
            explanation:
              "Konjungsi untuk menyatakan waktu antara lain: kemudian, lalu, sementara itu. 'Untuk maksud itu' adalah konjungsi tujuan, 'sebagaimana' untuk perbandingan, dan 'dampaknya' untuk akibat.",
            points: 6,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Sebagai manusia, kita harus mampu membiasakan diri untuk senantiasa bersikap sopan, hormat, dan ramah. Tidak hanya kepada orang yang lebih tua, tetapi juga ke semua orang yang kita jumpa.\n\nMengenai hal itu, saya sarankan untuk membiasakan diri melatih sikap hormat, sopan, dan ramah, sejak dini. Ini bisa ditanamkan kepada anak-anak kita sejak mereka masih duduk di bangku TK atau SD.",
            question: "Apakah hubungan antara kedua paragraf dalam teks diatas",
            options: [
              {
                id: "a",
                text: "Paragraf pertama membahas pentingnya sikap sopan terhadap orang tua, sedangkan paragraf kedua membahas cara menanamkan sikap tersebut kepada anak-anak.",
              },
              {
                id: "b",
                text: "Paragraf pertama menguraikan manfaat sikap sopan, hormat, dan ramah, sedangkan paragraf kedua menjelaskan bagaimana sikap tersebut memengaruhi anak-anak.",
              },
              {
                id: "c",
                text: "Paragraf pertama menjelaskan pentingnya bersikap sopan, hormat, dan ramah, sedangkan paragraf kedua memberikan saran untuk melatih sikap tersebut sejak dini.",
              },
              {
                id: "d",
                text: "Paragraf pertama memberikan contoh sikap sopan, sedangkan paragraf kedua membahas pentingnya mengajarkan sikap itu kepada anak-anak.",
              },
              {
                id: "e",
                text: "Paragraf pertama dan kedua sama-sama membahas pentingnya sikap sopan, hormat, dan ramah tanpa memberikan saran khusus.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf pertama menjelaskan pentingnya bersikap sopan, hormat, dan ramah, sedangkan paragraf kedua memberikan saran untuk melatih sikap tersebut sejak dini.",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Indonesia memiliki kekayaan alam yang melimpah, mulai dari hasil tambang, hutan, hingga keanekaragaman hayati. Potensi ini memberikan peluang besar bagi Indonesia untuk menjadi negara yang maju dan mandiri.\n\nNamun, pengelolaan sumber daya alam yang kurang optimal dan maraknya eksploitasi tanpa memikirkan dampak jangka panjang sering menjadi hambatan utama dalam mewujudkan potensi tersebut.",
            question: "Apa hubungan antara kedua paragraf dalam teks di atas?",
            options: [
              {
                id: "a",
                text: "Paragraf kedua menegaskan keunggulan Indonesia dalam pengelolaan sumber daya alam.",
              },
              {
                id: "b",
                text: "Paragraf kedua menyimpulkan bahwa Indonesia tidak dapat memanfaatkan kekayaan alamnya.",
              },
              {
                id: "c",
                text: "Paragraf kedua memberikan solusi atas permasalahan yang disebutkan dalam paragraf pertama.",
              },
              {
                id: "d",
                text: "Paragraf kedua menjelaskan hambatan yang dapat menghalangi potensi yang disebutkan dalam paragraf pertama.",
              },
              {
                id: "e",
                text: "Paragraf kedua memberikan alasan mengapa Indonesia memiliki kekayaan alam yang melimpah.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf kedua menjelaskan hambatan yang dapat menghalangi potensi yang disebutkan dalam paragraf pertama. Kata 'Namun' menunjukkan hubungan pertentangan.",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Konjungsi antarparagraf memiliki berbagai fungsi tergantung tujuannya.",
            question:
              "Manakah konjungsi antarparagraf yang digunakan dengan tujuan untuk menyatakan tujuan?",
            options: [
              { id: "a", text: "untuk maksud itu" },
              { id: "b", text: "sementara itu" },
              { id: "c", text: "sebaliknya" },
              { id: "d", text: "sebagaimana" },
              { id: "e", text: "kemudian" },
            ],
            correctAnswer: "a",
            explanation:
              "Konjungsi 'untuk maksud itu' digunakan untuk menyatakan tujuan. 'Sementara itu' untuk waktu, 'sebaliknya' untuk pertentangan, 'sebagaimana' untuk perbandingan, dan 'kemudian' untuk waktu.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Indonesia memiliki keanekaragaman budaya yang sangat kaya. Setiap daerah di Indonesia memiliki tradisi, bahasa, dan seni yang berbeda-beda. Salah satu contoh yang terkenal adalah seni tari dari Bali yang sudah diakui dunia internasional.\n\nBali memang terkenal dengan seni tari tradisionalnya, seperti tari Kecak dan tari Legong. Tari-tari ini tidak hanya menjadi bagian dari upacara keagamaan, tetapi juga menjadi daya tarik wisata yang mendatangkan banyak turis dari luar negeri.",
            question: "Hubungan antarparagraf dari teks di atas adalah",
            options: [
              {
                id: "a",
                text: "Paragraf kedua membandingkan paragraf pertama",
              },
              {
                id: "b",
                text: "Paragraf kedua memberikan contoh dari paragraf pertama",
              },
              {
                id: "c",
                text: "Paragraf kedua menentang paragraf pertama",
              },
              {
                id: "d",
                text: "Paragraf kedua akibat paragraf pertama",
              },
              {
                id: "e",
                text: "Paragraf kedua menyimpulkan paragraf pertama",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf pertama menyebutkan keanekaragaman budaya Indonesia secara umum, lalu paragraf kedua memberikan contoh spesifik tentang seni tari Bali yang terkenal.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Konjungsi antarparagraf memiliki berbagai fungsi tergantung tujuannya.",
            question:
              "Manakah konjungsi antarparagraf yang digunakan dengan tujuan untuk menyatakan tambahan?",
            options: [
              { id: "a", text: "sama halnya" },
              { id: "b", text: "bagaimanapun juga" },
              { id: "c", text: "jadi" },
              { id: "d", text: "untuk itulah" },
              { id: "e", text: "begitu pula" },
            ],
            correctAnswer: "e",
            explanation:
              "Konjungsi 'begitu pula' digunakan untuk menyatakan tambahan. 'Sama halnya' untuk perbandingan, 'bagaimanapun juga' untuk pertentangan, 'jadi' untuk akibat, dan 'untuk itulah' untuk tujuan.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              '"Aku juga pernah dipecat. Tapi tanpa test. Tanpa wasasan. Tanpa kebangsaan. Bahkan tanpa agama menurutku. Lalu aku lawan saja sendiri. Alhamdulillah aku menang melawan mereka yang bersekongkol dari belakang. Jangan putus asa kawan! Jangan mudah patah! Jangan mudah dikalahkan!" cuit Fahri.\n\nMenurut Fahri, inilah perjuangan atau pertarungan Novel dkk sesungguhnya. Dia berpendapat selama ini Novel dkk selalu berkerumun dalam pertarungan. Tetapi sebenarnya perjuangan itu selalu sendiri, bahkan sepi.',
            question: "Hubungan antarparagraf dari teks diatas adalah",
            options: [
              {
                id: "a",
                text: "Paragraf pertama menyimpulkan paragraf kedua",
              },
              {
                id: "b",
                text: "Paragraf kedua menentang paragraf pertama",
              },
              {
                id: "c",
                text: "Paragraf kedua akibat paragraf pertama",
              },
              {
                id: "d",
                text: "Paragraf kedua membandingkan paragraf pertama",
              },
              {
                id: "e",
                text: "Paragraf kedua sebab paragraf pertama",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf kedua membandingkan pengalaman Fahri dengan pengalaman Novel. Kata 'Tetapi sebenarnya' menunjukkan adanya perbandingan antara perjuangan berkerumun dan perjuangan sendiri.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Tiga orang warga Majalengka, masing-masing ES, AS dan P sukses menguras uang sebesar Rp9 juta dari Idik Abul Basyir, warga Desa Genteng, Kecamatan Dawuan, Kabupaten Majalengka. Ketiganya berhasil memeras korban setelah mereka mengaku sebagai anggota polisi dari Polres Subang.\n\nAksi pemerasan yang dilakukan polisi gadungan itu berawal ketika ES mendatangi toko korban di Desa Padahanteun, Kecamatan Sukahaji pada awal Agustus malam lalu. Dengan mengaku sebagai anggota polisi dari Polres Subang, ES meminta sejumlah uang kepada korban, tanpa alasan yang logis.",
            question: "Hubungan antarparagraf 1 dan 2 adalah",
            options: [
              {
                id: "a",
                text: "Paragraf kedua akibat paragraf pertama",
              },
              {
                id: "b",
                text: "Paragraf kedua sebab paragraf pertama",
              },
              {
                id: "c",
                text: "Paragraf kedua membandingkan paragraf pertama",
              },
              {
                id: "d",
                text: "Paragraf pertama menyimpulkan paragraf kedua",
              },
              {
                id: "e",
                text: "Paragraf kedua menentang paragraf pertama",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf pertama menyatakan hasil (pemerasan berhasil), sedangkan paragraf kedua menjelaskan penyebab atau awal mula kejadian tersebut. Kata 'berawal ketika' menunjukkan hubungan sebab.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Sampah plastik menjadi salah satu masalah lingkungan terbesar di dunia. Plastik membutuhkan waktu ratusan tahun untuk terurai, sehingga menumpuk dan mencemari tanah, air, dan udara.\n\nUntuk mengurangi dampak negatif sampah plastik, banyak negara mulai menerapkan kebijakan seperti pelarangan kantong plastik sekali pakai dan mendorong penggunaan bahan alternatif yang ramah lingkungan.",
            question: "Apa hubungan antara kedua paragraf dalam teks diatas",
            options: [
              {
                id: "a",
                text: "Paragraf kedua menyimpulkan bahwa sampah plastik sulit diatasi.",
              },
              {
                id: "b",
                text: "Paragraf kedua menjelaskan alasan mengapa plastik mencemari lingkungan.",
              },
              {
                id: "c",
                text: "Paragraf kedua membantah pernyataan di paragraf pertama tentang bahaya sampah plastik.",
              },
              {
                id: "d",
                text: "Paragraf kedua memberikan solusi untuk masalah yang dibahas di paragraf pertama.",
              },
              {
                id: "e",
                text: "Paragraf kedua membahas dampak lain dari sampah plastik yang tidak disebutkan di paragraf pertama.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf kedua memberikan solusi untuk masalah yang dibahas di paragraf pertama. Kata 'Untuk mengurangi dampak negatif' menunjukkan hubungan tujuan/solusi.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Konjungsi antarparagraf memiliki berbagai fungsi tergantung tujuannya.",
            question:
              "Manakah konjungsi antarparagraf yang digunakan dengan tujuan untuk menyatakan tambahan, kecuali?",
            options: [
              { id: "a", text: "Begitu pula" },
              { id: "b", text: "Demikian juga" },
              { id: "c", text: "Oleh karena itu" },
              { id: "d", text: "Di samping itu" },
              { id: "e", text: "Akhirnya" },
            ],
            correctAnswer: "c",
            explanation:
              "'Oleh karena itu' adalah konjungsi untuk menyatakan akibat, bukan tambahan. Begitu pula, demikian juga, di samping itu, dan akhirnya merupakan konjungsi untuk menyatakan tambahan.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Pendidikan karakter sangat penting diterapkan sejak usia dini karena dapat membentuk kepribadian anak yang baik. Nilai-nilai seperti kejujuran, tanggung jawab, dan disiplin perlu ditanamkan secara konsisten oleh orang tua dan guru.\n\nNamun, tantangan dalam menerapkan pendidikan karakter tidaklah sedikit. Kurangnya pemahaman orang tua dan guru tentang metode yang efektif sering kali menjadi kendala utama dalam proses pembelajaran ini.",
            question: "Apa hubungan antara kedua paragraf dalam teks di atas?",
            options: [
              {
                id: "a",
                text: "Paragraf kedua memberikan solusi atas pentingnya pendidikan karakter yang dijelaskan di paragraf pertama.",
              },
              {
                id: "b",
                text: "Paragraf kedua memperkuat argumen tentang pentingnya pendidikan karakter yang disebutkan di paragraf pertama.",
              },
              {
                id: "c",
                text: "Paragraf kedua membandingkan manfaat pendidikan karakter dengan tantangan yang dihadapi.",
              },
              {
                id: "d",
                text: "Paragraf kedua menyimpulkan bahwa pendidikan karakter sulit untuk diterapkan.",
              },
              {
                id: "e",
                text: "Paragraf kedua menjelaskan tantangan dalam menerapkan pendidikan karakter yang dibahas di paragraf pertama.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Paragraf kedua menjelaskan tantangan dalam menerapkan pendidikan karakter yang dibahas di paragraf pertama. Kata 'Namun' menunjukkan hubungan pertentangan, yaitu sisi lain dari pendidikan karakter.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Truk bermuatan pakan ayam menyeruduk pagar rumah warga di Kabupaten Sukabumi. Tidak ada korban jiwa akibat kecelakaan tersebut.\n\nPeristiwa itu bermula saat truk bernomor polisi B-9545-TYX melaju dari arah Cicantayan akan mengantarkan pakan menuju Kampung Cijati, Sukabumi. Kendaraan itu diduga patah roda sehingga mengakibatkan oleng.",
            question: "Hubungan antarparagraf diatas adalah",
            options: [
              {
                id: "a",
                text: "Paragraf kedua menjelaskan paragraf pertama",
              },
              {
                id: "b",
                text: "Paragraf kedua sebab dari paragraf pertama",
              },
              {
                id: "c",
                text: "Paragraf kedua akibat dari paragraf pertama",
              },
              {
                id: "d",
                text: "Paragraf kedua menyimpulkan paragraf pertama",
              },
              {
                id: "e",
                text: "Paragraf kedua menentang paragraf pertama",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf pertama menyatakan kejadian (truk menyeruduk pagar), sedangkan paragraf kedua menjelaskan penyebabnya (patah roda). Kata 'bermula saat' menunjukkan hubungan sebab-akibat.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Rina masuk seorang diri ke bangunan tua itu. Ia mengenyit dan menatap heran rumah tua itu yang seolah tidak terawat, tetapi kesannya ada orang yang tinggal di situ.\n\nKonon, rumah itu berhantu. Rina yang tak mudah percaya dengan apa pun sampai ia melihatnya sendiri, tetap memaksa diri masuk dan menjelajahi bangunan tua itu.",
            question: "Apa hubungan antara kedua paragraf dalam teks diatas",
            options: [
              {
                id: "a",
                text: "Paragraf pertama menjelaskan latar tempat, sedangkan paragraf kedua menggambarkan karakter Rina.",
              },
              {
                id: "b",
                text: "Paragraf pertama menceritakan tentang keberanian Rina, sedangkan paragraf kedua menguraikan deskripsi rumah tua.",
              },
              {
                id: "c",
                text: "Paragraf pertama memberikan gambaran umum tentang rumah tua, sedangkan paragraf kedua menjelaskan alasan Rina masuk ke rumah tersebut.",
              },
              {
                id: "d",
                text: "Paragraf pertama menjelaskan suasana rumah tua, sedangkan paragraf kedua menggambarkan tindakan Rina yang takut tetapi tetap masuk.",
              },
              {
                id: "e",
                text: "Paragraf pertama dan kedua sama-sama menjelaskan keberadaan rumah tua tanpa menjelaskan tindakan tokoh.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf pertama memberikan gambaran umum tentang rumah tua, sedangkan paragraf kedua menjelaskan alasan Rina masuk ke rumah tersebut (karena sifatnya yang tidak mudah percaya).",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Konjungsi antarparagraf memiliki berbagai fungsi tergantung tujuannya.",
            question:
              "Manakah konjungsi antarparagraf yang digunakan dengan tujuan untuk menyatakan akibat, kecuali?",
            options: [
              { id: "a", text: "Jadi" },
              { id: "b", text: "Oleh karena itu" },
              { id: "c", text: "Namun" },
              { id: "d", text: "Akibatnya" },
              { id: "e", text: "Dampaknya" },
            ],
            correctAnswer: "c",
            explanation:
              "'Namun' adalah konjungsi untuk menyatakan pertentangan, bukan akibat. Jadi, oleh karena itu, akibatnya, dan dampaknya merupakan konjungsi untuk menyatakan akibat.",
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
      moduleDoc.name = "Hubungan Antarparagraf";
      moduleDoc.description =
        "Materi mengenai hubungan antarparagraf, jenis-jenis konjungsi antarparagraf, dan tips mengerjakan soal.";
      moduleDoc.subcategory = "Paragraf 2";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Hubungan Antarparagraf",
        description:
          "Materi mengenai hubungan antarparagraf, jenis-jenis konjungsi antarparagraf, dan tips mengerjakan soal.",
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

seedHubunganAntarparagraf();
