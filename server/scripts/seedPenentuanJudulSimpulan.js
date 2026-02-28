const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPenentuanJudulSimpulan = async () => {
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

    const targetId = "penentuan-judul-simpulan";

    const stepsData = [
      {
        title: "Materi: Penentuan Judul dan Simpulan",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian paragraf, judul, simpulan, ciri judul teks, serta cara menentukan judul dan simpulan paragraf.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Definisi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Definisi</h3>

              <!-- Paragraf -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Paragraf</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Paragraf merupakan <strong>gabungan beberapa kalimat yang saling berhubungan</strong> dan menghasilkan suatu tema tertentu.
                  </p>
                </div>
              </div>

              <!-- Judul -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Judul</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Judul merupakan <strong>gambaran dari keseluruhan isi teks bacaan</strong>, yang ditulis secara jelas, singkat, dan menarik.
                  </p>
                </div>
              </div>

              <!-- Simpulan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Simpulan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Simpulan merupakan <strong>opini atau pendapat akhir dari informasi</strong> yang ada di kalimat-kalimat sebelumnya.
                  </p>
                </div>
              </div>
            </section>

            <!-- Ciri Judul Teks -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri Judul Teks</h3>

              <!-- Menarik dan tidak bertele-tele -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Judul harus menarik dan tidak bertele-tele</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Tidak boleh menggunakan kalimat yang panjang. <strong>Gunakan kalimat yang ringkas</strong>.
                  </p>
                </div>
              </div>

              <!-- Berupa frasa, bukan klausa -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Berupa frasa, bukan klausa</h4>
                </div>
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li><strong>Frasa:</strong> gabungan dua kata atau lebih yang bersifat nonpredikatif.</li>
                    <li><strong>Klausa:</strong> Kelompok kata yang terdiri dari minimal subjek dan predikat serta berpotensi menjadi kalimat.</li>
                  </ul>
                </div>
              </div>

              <!-- Memuat ide pokok paragraf -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Memuat ide pokok paragraf</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Ide pokok menggambarkan <strong>inti paragraf</strong>, hal yang dibahas dalam paragraf tersebut.
                  </p>
                </div>
              </div>

              <!-- Mewakili keseluruhan isi teks -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Mewakili keseluruhan isi teks</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Judul harus menggambarkan <strong>keseluruhan isi teks</strong>.
                  </p>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>TIPS:</strong> Cari kata dalam paragraf yang sering disebut secara berulang.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Cara Menentukan Judul -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Judul Sebuah Teks</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="flex flex-col items-center gap-0">
                    <!-- Step 1 -->
                    <div class="bg-Primary-50 rounded-full px-6 py-3 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 font-bold mb-0 mt-0">Cari kalimat utama dari setiap paragraf</p>
                    </div>
                    <div class="text-Primary-500 text-2xl my-1">▼</div>

                    <!-- Step 2 -->
                    <div class="bg-Primary-50 rounded-full px-6 py-3 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 font-bold mb-0 mt-0">Tentukan gagasan utama/ide pokok/inti/isi dari setiap paragraf.</p>
                    </div>
                    <div class="text-Primary-500 text-2xl my-1">▼</div>

                    <!-- Step 3 -->
                    <div class="bg-Primary-50 rounded-full px-6 py-3 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 font-bold mb-0 mt-0">Tentukan gagasan utama/ide pokok/inti/isi teks (Gabungkan seluruh ide pokok paragraf).</p>
                    </div>
                    <div class="text-Primary-500 text-2xl my-1">▼</div>

                    <!-- Step 4 -->
                    <div class="bg-Primary-50 rounded-full px-6 py-3 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 font-bold mb-0 mt-0">Tentukan tema teks, dan buatlah judul yang menarik.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Letak Kalimat Utama -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Letak Kalimat Utama dalam Paragraf</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">
                    Paragraf dibagi menjadi tiga, A (awal), B (belakang), dan C (campuran).
                  </p>
                  <div class="space-y-2">
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Awal paragraf (Deduktif)</strong>, kalimat utama terletak di awal paragraf atau kalimat pertama. Kalimat selanjutnya adalah kalimat penjelas.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Akhir paragraf (Induktif)</strong>, kalimat utama terletak di akhir paragraf atau kalimat terakhir. Kalimat sebelumnya sebagai kalimat penjelas.</p>
                    </div>
                    <div class="bg-Tertiary-50 p-3 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mb-0 mt-0"><strong>Campuran (Awal dan Akhir)</strong>, jika kalimat pertama dan terakhir memenuhi keduanya, berarti kalimat pertama dan terakhir adalah kalimat utama.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Cara Menentukan Simpulan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Simpulan Paragraf</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="flex flex-col items-center gap-0">
                    <!-- Step 1 -->
                    <div class="bg-Primary-50 rounded-2xl px-6 py-4 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 mb-0 mt-0"><strong>Tentukan ide pokok:</strong> Ide pokok menggambarkan inti/simpulan dari paragraf</p>
                    </div>
                    <div class="text-Primary-500 text-2xl my-1">▼</div>

                    <!-- Step 2 -->
                    <div class="bg-Primary-50 rounded-2xl px-6 py-4 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 mb-0 mt-0"><strong>Perhatikan kalimat terakhir paragraf:</strong> Ditandai dengan kata → <em>jadi, dengan demikian, oleh sebab itu, oleh karena itu, maka dari itu, dll.</em></p>
                    </div>
                    <div class="text-Primary-500 text-2xl my-1">▼</div>

                    <!-- Step 3 -->
                    <div class="bg-Primary-50 rounded-2xl px-6 py-4 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 mb-0 mt-0"><strong>Cek hubungan antar kalimat</strong> (dari kalimat-kalimat sebelumnya) atau hubungan sebab akibat</p>
                    </div>
                    <div class="text-Primary-500 text-2xl my-1">▼</div>

                    <!-- Step 4 -->
                    <div class="bg-Primary-50 rounded-2xl px-6 py-4 text-center w-full max-w-lg">
                      <p class="text-body-l text-Grayscale-800 mb-0 mt-0">Uraian gagasan yang tercapai pada akhir pembicaraan <strong>(paragraf terakhir).</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Penentuan Judul dan Simpulan (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/jTjYrGYdP-o",
        description:
          "Video pembelajaran tentang penentuan judul dan simpulan bagian pertama.",
      },
      {
        title: "Video: Penentuan Judul dan Simpulan (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Y69yBiOr_SM",
        description:
          "Video pembelajaran tentang penentuan judul dan simpulan bagian kedua.",
      },
      {
        title: "Kuis Penentuan Judul dan Simpulan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Penelitian menunjukkan bahwa membaca buku selama 20 menit setiap hari dapat meningkatkan kemampuan berpikir kritis dan memperluas wawasan. Selain itu, kebiasaan membaca juga membantu mengurangi stres dan meningkatkan konsentrasi. Oleh karena itu, membaca buku seharusnya menjadi bagian penting dari rutinitas harian kita.",
            question: "Judul yang paling sesuai untuk teks di atas adalah...",
            options: [
              { id: "a", text: "Pentingnya Wawasan Luas" },
              { id: "b", text: "Membaca sebagai Solusi Stres" },
              { id: "c", text: "Manfaat Membaca Buku Setiap Hari" },
              { id: "d", text: "Kebiasaan Membaca di Era Modern" },
              { id: "e", text: "Meningkatkan Konsentrasi dengan Buku" },
            ],
            correctAnswer: "c",
            explanation:
              "Judul yang baik harus merangkum seluruh isi teks. Teks ini membahas berbagai dampak positif dari membaca rutin setiap hari (berpikir kritis, wawasan luas, mengurangi stres, meningkatkan konsentrasi). Oleh karena itu, 'Manfaat Membaca Buku Setiap Hari' adalah judul yang paling representatif.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            context:
              "Penelitian menunjukkan bahwa membaca buku selama 20 menit setiap hari dapat meningkatkan kemampuan berpikir kritis dan memperluas wawasan. Selain itu, kebiasaan membaca juga membantu mengurangi stres dan meningkatkan konsentrasi. Oleh karena itu, membaca buku seharusnya menjadi bagian penting dari rutinitas harian kita.",
            question:
              "Berdasarkan bacaan tersebut, tentukan apakah pernyataan berikut benar atau salah.",
            rows: [
              {
                id: "r1",
                text: "Kebiasaan membaca dapat membantu mengurangi stress",
              },
              {
                id: "r2",
                text: "Penelitian menunjukkan bahwa membaca buku tidak memengaruhi konsentrasi",
              },
              {
                id: "r3",
                text: 'Judul "Manfaat Membaca Buku Setiap Hari" mencerminkan isi teks dengan tepat',
              },
              {
                id: "r4",
                text: "Teks tersebut membahas kebiasaan membaca di era digital",
              },
              {
                id: "r5",
                text: "Simpulan teks adalah membaca buku memiliki banyak manfaat positif bagi manusia",
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
              "1. Sesuai dengan kalimat kedua teks (Benar). 2. Bertentangan dengan teks yang menyebutkan membaca meningkatkan konsentrasi (Salah). 3. Judul tersebut memang merangkum isi (Benar). 4. Teks tidak menyebutkan secara spesifik 'era digital' (Salah). 5. Simpulan mengarah pada manfaat positif membaca (Benar).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Penelitian menunjukkan bahwa membaca buku selama 20 menit setiap hari dapat meningkatkan kemampuan berpikir kritis dan memperluas wawasan. Selain itu, kebiasaan membaca juga membantu mengurangi stres dan meningkatkan konsentrasi. Oleh karena itu, membaca buku seharusnya menjadi bagian penting dari rutinitas harian kita.",
            question:
              "Simpulan dari teks adalah bahwa membaca buku memiliki banyak…",
            options: [
              { id: "a", text: "Manfaat" },
              { id: "b", text: "Tantangan" },
              { id: "c", text: "Kerugian" },
              { id: "d", text: "Hambatan" },
              { id: "e", text: "Risiko" },
            ],
            correctAnswer: "a",
            explanation:
              "Teks tersebut memaparkan kebaikan-kebaikan dari kegiatan membaca (mengurangi stres, menambah wawasan, dll) yang secara kolektif disebut sebagai manfaat (kegunaan/keuntungan).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "(1) Di sepanjang tahun 2022, terdapat banyak bahasa gaul yang muncul di media sosial. (2) Bahasa gaul ini kemudian menjadi bahasa sehari-hari para pemakai, baik di Twitter, Instagram, maupun TikTok. (3) Bahasa-bahasa gaul ini dibuat dari singkatan hingga pelesetan yang sedang ramai dibahas anak muda... (9) Berbeda dengan MLYT dan bestie, salty sendiri dalam bahasa Inggris (…), tetapi dalam bahasa gaul anak muda, salty diartikan sebagai 'rasa geram'...",
            question: "Apa judul yang tepat untuk teks tersebut?",
            options: [
              {
                id: "a",
                text: "MLYT, Bestie, dan Salty sebagai Contoh Bahasa Gaul",
              },
              {
                id: "b",
                text: "Kemunculan Bahasa Gaul di Twitter, Instagram, dan TikTok",
              },
              {
                id: "c",
                text: "Bahasa Gaul dan Makna yang Terkandung di Dalamnya",
              },
              {
                id: "d",
                text: "Munculnya Bahasa Gaul Terbaru di Media Sosial",
              },
              {
                id: "e",
                text: "Terbentuknya Bahasa Gaul Terbaru di Medsos dengan Singkatan dan Pelesetan",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Teks ini secara umum membahas fenomena kemunculan bahasa gaul baru di media sosial pada tahun 2022 beserta contoh-contohnya. Judul D adalah yang paling pas mencakup ide pokok paragraf pertama sebagai pengantar gagasan utamanya.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Rasa sakit pada lambung dan usus halus dapat disebabkan oleh faktor psikologis, seperti perasaan tegang atau stres... Namun, dalam banyak kasus, gangguannya dapat terasa pada seluruh proses pencernaan penderita, tetapi tidak untuk gangguan psikologinya. Jalan keluar yang memungkinkan adalah mengombinasikan makanan serasi dengan terapi relaksasi secara tepat. Misalnya, pijat refleksi...",
            question:
              "Simpulan yang dapat diambil dari paragraf tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Rasa sakit pada lambung disebabkan oleh perasaan tegang dan stres.",
              },
              {
                id: "b",
                text: "Rasa sakit pada lambung dapat diatasi dengan terapi makanan sehat dan pijat refleksi.",
              },
              {
                id: "c",
                text: "Rasa sakit pada lambung disebabkan oleh luka pada lambung atau ketegangan.",
              },
              {
                id: "d",
                text: "Hindarilah perasaan tegang dan juga stres.",
              },
              {
                id: "e",
                text: "Jalan keluar yang memungkinkan adalah mengombinasikan makanan serasi dengan terapi relaksasi secara tepat",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Simpulan adalah hasil akhir dari suatu uraian. Pada paragraf ini, penulis mendeskripsikan masalah lalu menyimpulkan solusinya secara eksplisit pada kalimat: 'Jalan keluar yang memungkinkan adalah mengombinasikan makanan serasi dengan terapi relaksasi secara tepat.'",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Teknologi komunikasi modern telah memungkinkan informasi menyebar secara cepat. Masyarakat kini dapat mengakses berita terkini melalui ponsel pintar, televisi, atau radio. Namun, derasnya arus informasi ini juga memunculkan tantangan berupa penyebaran hoaks. Oleh sebab itu, masyarakat perlu meningkatkan literasi digital agar mampu membedakan informasi yang benar dan yang palsu.",
            question: "Judul yang paling sesuai untuk bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Pentingnya Televisi dan Radio untuk Penyebaran Berita",
              },
              {
                id: "b",
                text: "Derasnya Arus Informasi pada Era Modern",
              },
              {
                id: "c",
                text: "Tantangan Memfilter Berita dan Meningkatkan Literasi Digital",
              },
              {
                id: "d",
                text: "Ponsel Pintar: Sumber Informasi Tercepat",
              },
              {
                id: "e",
                text: "Hoaks dan Dampaknya Bagi Masyarakat",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Teks tersebut menyoroti masalah utama (penyebaran hoaks akibat cepatnya informasi) dan solusinya (meningkatkan literasi digital). Judul C sangat tepat untuk menggambarkan kedua elemen penting tersebut.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Pariwisata berbasis lingkungan kini menjadi tren di berbagai negara. Wisatawan tidak sekadar menikmati pemandangan, tetapi juga mempelajari budaya lokal dan turut serta menjaga kelestarian alam. Dengan demikian, pengembangan ekowisata dapat meningkatkan kesadaran lingkungan sekaligus memberikan manfaat ekonomi bagi masyarakat setempat.",
            question: "Simpulan yang paling tepat dari bacaan di atas adalah…",
            options: [
              {
                id: "a",
                text: "Pariwisata berbasis lingkungan tidak memengaruhi budaya lokal.",
              },
              {
                id: "b",
                text: "Ekowisata hanya meningkatkan manfaat ekonomi tanpa dampak lain.",
              },
              {
                id: "c",
                text: "Ekowisata membantu menjaga lingkungan dan menguntungkan masyarakat.",
              },
              {
                id: "d",
                text: "Wisatawan saat ini mengabaikan kelestarian alam.",
              },
              {
                id: "e",
                text: "Ekowisata menurunkan kesadaran lingkungan karena fokus ekonomi.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Simpulan paragraf berada pada kalimat terakhir: 'Dengan demikian, pengembangan ekowisata dapat meningkatkan kesadaran lingkungan sekaligus memberikan manfaat ekonomi...'. Opsi C adalah bentuk parafrasa yang sangat akurat dari kalimat tersebut.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Penggunaan transportasi umum di kota besar semakin ditingkatkan guna mengurangi kemacetan. Pemerintah menyediakan bus dan kereta yang terjadwal secara tepat waktu. Selain itu, pembangunan jalur sepeda di pusat kota juga mulai digalakkan. Dengan demikian, masyarakat memiliki alternatif moda transportasi yang lebih ramah lingkungan.",
            question: "Judul yang paling tepat untuk bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Pentingnya Menggunakan Sepeda dalam Kehidupan Sehari-hari",
              },
              {
                id: "b",
                text: "Transportasi Umum: Solusi Kemacetan di Kota Besar",
              },
              {
                id: "c",
                text: "Alternatif Transportasi Berbasis Sepeda Motor",
              },
              {
                id: "d",
                text: "Pembangunan Kota Tanpa Kendaraan Pribadi",
              },
              {
                id: "e",
                text: "Pemerintah dan Pengaturan Jadwal Kereta",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Ide pokok teks ini adalah tentang upaya meningkatkan penggunaan transportasi umum untuk mengatasi masalah kemacetan di kota besar. Judul B mencerminkan gagasan utama tersebut dengan lugas.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Penelitian menunjukkan bahwa konsumsi sayuran hijau secara rutin dapat meningkatkan sistem kekebalan tubuh. Selain itu, pola makan seimbang dan olahraga teratur juga membantu menjaga kondisi fisik tetap prima. Oleh sebab itu, menjaga pola hidup sehat sangat penting untuk mencegah berbagai penyakit.",
            question:
              "Simpulan yang dapat diambil dari bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Sayuran hijau tidak berpengaruh pada sistem kekebalan tubuh.",
              },
              {
                id: "b",
                text: "Pola makan seimbang dan olahraga tidak diperlukan jika sudah makan sayur hijau.",
              },
              {
                id: "c",
                text: "Menjaga pola hidup sehat penting untuk mencegah penyakit.",
              },
              {
                id: "d",
                text: "Penyakit hanya dapat dicegah dengan konsumsi sayuran hijau.",
              },
              {
                id: "e",
                text: "Olahraga lebih penting daripada makanan seimbang.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Teks tersebut bersifat deduktif-induktif, ditutup dengan sebuah penegasan simpulan yang ditandai dengan konjungsi 'Oleh sebab itu...'. Opsi C mengutip langsung inti simpulan pada kalimat terakhir.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Belakangan ini, banyak masyarakat yang tertarik mempelajari bahasa asing. Mereka menyadari bahwa kemampuan berbahasa asing dapat membuka peluang karier yang lebih luas. Tidak hanya itu, penguasaan bahasa asing juga memudahkan komunikasi saat bepergian ke luar negeri.",
            question: "Judul yang paling sesuai dengan bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Peluang Karier dalam Negeri yang Sempit",
              },
              {
                id: "b",
                text: "Dampak Negatif Perjalanan ke Luar Negeri",
              },
              {
                id: "c",
                text: "Pentingnya Belajar Bahasa Asing untuk Kesempatan Lebih Luas",
              },
              {
                id: "d",
                text: "Cara Cepat Belajar Bahasa Asing",
              },
              {
                id: "e",
                text: "Tantangan Masyarakat Modern dalam Berbahasa Daerah",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Teks ini berfokus pada urgensi dan manfaat menguasai bahasa asing, seperti melebarkan karier dan mempermudah komunikasi lintas negara. Judul C menangkap esensi pesan pentingnya belajar bahasa asing.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Pemanasan global menyebabkan perubahan iklim yang ekstrem. Akibatnya, pola cuaca tidak menentu dan sering terjadi bencana alam, seperti banjir atau kekeringan. Oleh karena itu, upaya mengurangi emisi gas rumah kaca menjadi sangat penting untuk menekan laju pemanasan global.",
            question:
              "Simpulan yang dapat diambil dari bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Pemanasan global tidak berhubungan dengan perubahan iklim.",
              },
              {
                id: "b",
                text: "Mengurangi emisi gas rumah kaca sangat penting untuk mengatasi pemanasan global.",
              },
              {
                id: "c",
                text: "Pola cuaca yang tidak menentu disebabkan oleh aktivitas manusia yang tidak diketahui.",
              },
              {
                id: "d",
                text: "Bencana alam tidak dipengaruhi oleh perubahan iklim ekstrem.",
              },
              {
                id: "e",
                text: "Emisi gas rumah kaca tidak berkaitan dengan pemanasan global.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat penutup dalam teks (Oleh karena itu...) adalah simpulan utamanya. Penulis merekomendasikan solusi berupa pengurangan emisi gas rumah kaca untuk mengatasi masalah dampak pemanasan global. Opsi B selaras dengan kalimat penutup tersebut.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Perkembangan teknologi pertanian telah meningkatkan hasil panen. Petani kini dapat menggunakan bibit unggul dan pupuk organik yang efisien. Akibatnya, produksi pangan meningkat dan mampu memenuhi kebutuhan masyarakat. Dengan demikian, inovasi dalam bidang pertanian sangat diperlukan untuk menjaga ketahanan pangan.",
            question: "Judul yang paling sesuai untuk bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Bibit Unggul Menurunkan Produksi Pangan",
              },
              {
                id: "b",
                text: "Peran Teknologi Pertanian dalam Mendukung Ketahanan Pangan",
              },
              {
                id: "c",
                text: "Penggunaan Pupuk Kimia dalam Pertanian Modern",
              },
              {
                id: "d",
                text: "Penurunan Hasil Panen karena Minimnya Teknologi",
              },
              {
                id: "e",
                text: "Masyarakat Kekurangan Pangan di Era Modern",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Judul harus merepresentasikan keseluruhan gagasan pokok. Topik teks ini berkisar dari 'perkembangan teknologi' hingga 'produksi pangan meningkat/ketahanan pangan'. Pilihan B adalah judul yang paling merangkum proses dari teknologi hingga hasil akhirnya pada ketahanan pangan.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Maraknya penggunaan plastik sekali pakai menimbulkan masalah lingkungan serius. Limbah plastik sulit terurai sehingga mencemari tanah dan laut. Beberapa negara mulai melarang pemakaian kantong plastik di toko-toko, serta mendorong penggunaan tas belanja ramah lingkungan. Dengan demikian, pengurangan plastik sekali pakai penting untuk kelestarian lingkungan.",
            question:
              "Simpulan yang dapat ditarik dari bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Penggunaan plastik tidak memengaruhi lingkungan.",
              },
              {
                id: "b",
                text: "Kantong plastik sekali pakai mudah terurai dan aman.",
              },
              {
                id: "c",
                text: "Beberapa negara sudah mengambil langkah membatasi penggunaan plastik demi lingkungan.",
              },
              {
                id: "d",
                text: "Limbah plastik tidak mencemari laut dan tanah.",
              },
              {
                id: "e",
                text: "Tidak perlu pengurangan penggunaan plastik sekali pakai.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan kunci jawaban kuis ini, opsi C dianggap sebagai simpulan (ringkasan fakta) yang paling relevan dengan inti teks yang membahas kesadaran dan upaya restriksi dari berbagai pihak/negara terhadap polusi plastik.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Riset kesehatan menunjukkan bahwa tidur yang cukup sangat berpengaruh pada kualitas hidup. Orang yang cukup istirahat cenderung lebih fokus, produktif, dan memiliki suasana hati yang stabil. Sebaliknya, kurang tidur dapat meningkatkan risiko masalah kesehatan, seperti obesitas dan tekanan darah tinggi. Oleh karena itu, menjaga pola tidur yang baik sangatlah penting.",
            question: "Judul yang paling tepat untuk bacaan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Bahaya Tekanan Darah Tinggi di Usia Muda",
              },
              {
                id: "b",
                text: "Pentingnya Tidur Cukup bagi Kesehatan dan Produktivitas",
              },
              {
                id: "c",
                text: "Risiko Obesitas Hanya Disebabkan Kurang Olahraga",
              },
              {
                id: "d",
                text: "Cara Mengobati Gangguan Tidur dengan Obat Kimia",
              },
              {
                id: "e",
                text: "Fokus Pekerjaan Tidak Ada Hubungannya dengan Tidur",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Teks menjabarkan dua sisi efek tidur: manfaat psikologis/produktivitas bila cukup tidur, dan risiko kesehatan bila kurang tidur. Judul B merangkum semua aspek tersebut dengan baik.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Di beberapa kota besar, ruang terbuka hijau semakin berkurang akibat pembangunan permukiman yang kurang terencana. Akibatnya, kualitas udara menurun, suhu meningkat, dan keseimbangan ekosistem terganggu. Beberapa ahli lingkungan menyarankan penambahan taman kota, pohon-pohon peneduh, serta pengaturan zona bangunan untuk memulihkan keseimbangan tersebut. Dengan kata lain, pengelolaan ruang terbuka hijau yang baik akan memberikan manfaat signifikan bagi kesehatan dan lingkungan masyarakat kota.",
            question: "Simpulan yang paling tepat dari bacaan di atas adalah…",
            options: [
              {
                id: "a",
                text: "Ruang terbuka hijau di kota besar tidak lagi diperlukan.",
              },
              {
                id: "b",
                text: "Pengurangan ruang terbuka hijau tidak memengaruhi kualitas udara.",
              },
              {
                id: "c",
                text: "Pengelolaan ruang terbuka hijau yang baik dapat mengembalikan keseimbangan lingkungan.",
              },
              {
                id: "d",
                text: "Pembangunan permukiman tidak berkaitan dengan lingkungan.",
              },
              {
                id: "e",
                text: "Menambah taman kota tidak diperlukan untuk memperbaiki kualitas udara.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf tersebut ditutup dengan kesimpulan yang ditandai dengan konjungsi 'Dengan kata lain...'. Pernyataan pada opsi C mencerminkan inti kalimat penutup tersebut secara tepat.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Penentuan Judul, Simpulan";
      moduleDoc.description =
        "Materi mengenai penentuan judul dan simpulan mencakup definisi paragraf, judul, simpulan, ciri judul teks, cara menentukan judul sebuah teks, letak kalimat utama, dan cara menentukan simpulan paragraf.";
      moduleDoc.subcategory = "Pemahaman Bacaan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Penentuan Judul, Simpulan",
        description:
          "Materi mengenai penentuan judul dan simpulan mencakup definisi paragraf, judul, simpulan, ciri judul teks, cara menentukan judul sebuah teks, letak kalimat utama, dan cara menentukan simpulan paragraf.",
        subcategory: "Pemahaman Bacaan",
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

seedPenentuanJudulSimpulan();
