const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKepaduanParagraf = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Literasi Bahasa Indonesia";
    let course = await Course.findOne({ name: courseName });

    if (!course) {
      console.log(`Course '${courseName}' not found. Creating it...`);
      course = await Course.create({
        name: courseName,
        description:
          "Materi dan latihan soal untuk Literasi Bahasa Indonesia pada UTBK SNBT.",
        image_url: "https://minio.sinaoo.id/sinaoo-assets/course-literasi.png",
        total_modules: 0,
        published: true,
      });
      console.log("Created Course:", course.name);
    } else {
      console.log("Found Course:", course.name);
    }

    const targetId = "kepaduan-paragraf";

    const stepsData = [
      {
        title: "Materi: Kepaduan Paragraf",
        type: "reading",
        status: "active",
        description:
          "Pahami pengertian kepaduan paragraf, jenis-jenis kohesi (pengacuan, substitusi, repetisi, pelesapan, konjungsi), dan koherensi.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Itu Kepaduan Paragraf?</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                Kepaduan paragraf adalah keterpaduan/keterkaitan antara kalimat yang satu dengan kalimat lainnya pada satu paragraf sehingga membentuk kesatuan yang utuh, kompak, logis, dan saling mendukung terhadap gagasan yang menjadi pokok pembahasan.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis-Jenis Kepaduan Paragraf</h3>

              <div class="space-y-8">
                <div>
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4">1. Kohesi</h4>
                  <p class="text-body-l text-Grayscale-900 mb-6">
                    Kohesi adalah keserasian hubungan antarunsur (kalimat atau teks) dalam sebuah paragraf sehingga membentuk kesatuan yang jelas dan mudah dipahami. Adapun bentuk-bentuk kohesi sebagai berikut.
                  </p>

                  <div class="space-y-6">
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                      <h5 class="font-bold text-body-l text-Primary-700 mb-3">a. Pengacuan</h5>
                      <p class="text-body-l text-Grayscale-900 mb-4">
                        Terdapat penggunaan kata ganti persona (orang) atau tunjuk sebagai penanda pengacuannya.
                      </p>
                      <div class="space-y-3 text-body-l text-Grayscale-900">
                        <div class="bg-Grayscale-50 p-4 rounded-lg">
                          <p class="font-bold mb-2">• Kata ganti persona (orang)</p>
                          <ul class="list-disc pl-5 space-y-1 text-body-m text-Grayscale-800">
                            <li>Kata ganti orang pertama: <span class="italic">saya, aku, hamba, beta, awak, daku, dan kami</span>.</li>
                            <li>Kata ganti orang kedua: <span class="italic">kamu, kamu sekalian, Anda, engkau, kau, kalian, dan kalian sekalian</span>.</li>
                            <li>Kata ganti orang ketiga: <span class="italic">dia, ia, beliau, -nya, mereka, dan orang itu</span>.</li>
                          </ul>
                        </div>
                        <div class="bg-Grayscale-50 p-4 rounded-lg">
                          <p class="font-bold mb-2">• Kata tunjuk</p>
                          <p class="text-body-m text-Grayscale-800 mb-2">Kata ganti tunjuk meliputi <span class="italic">ini, itu,</span> dan <span class="italic">tersebut</span>.</p>
                          <div class="bg-Primary-50 p-3 rounded-lg border-l-4 border-Primary-400">
                            <p class="text-body-m text-Grayscale-900 m-0">
                              <span class="font-bold">Contoh:</span> Pencak silat memiliki <span class="font-bold">gerakan yang dinamis dan elegan</span>. Gerakan <span class="font-bold">tersebut</span> memerlukan latihan yang intensif dan dedikasi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                      <h5 class="font-bold text-body-l text-Primary-700 mb-3">b. Substitusi</h5>
                      <p class="text-body-l text-Grayscale-900 mb-4">
                        Penggantian dengan unsur lain, tetapi menunjukkan maksud yang sama.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg border-l-4 border-Primary-400">
                        <p class="text-body-m text-Grayscale-900 m-0">
                          <span class="font-bold">Contoh:</span> <span class="font-bold">Dodol Garut</span> merupakan salah satu oleh-oleh khas dari Kabupaten Garut, Jawa Barat, yang terkenal dengan teksturnya yang lembut dan rasanya yang manis. <span class="font-bold">Makanan khas</span> tersebut dibuat dari bahan-bahan alami seperti gula merah, santan, dan tepung beras.
                        </p>
                      </div>
                    </div>

                    <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                      <h5 class="font-bold text-body-l text-Primary-700 mb-3">c. Repetisi</h5>
                      <p class="text-body-l text-Grayscale-900 mb-4">
                        Pengulangan unsur yang sama dari satu kalimat dengan kalimat selanjutnya.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg border-l-4 border-Primary-400">
                        <p class="text-body-m text-Grayscale-900 m-0">
                          <span class="font-bold">Contoh:</span> <span class="font-bold">Bika Ambon</span> terkenal dengan rasanya yang khas. <span class="font-bold">Bika Ambon</span> memiliki aroma yang sangat menggugah selera.
                        </p>
                      </div>
                    </div>

                    <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                      <h5 class="font-bold text-body-l text-Primary-700 mb-3">d. Pelesapan</h5>
                      <p class="text-body-l text-Grayscale-900 mb-4">
                        Pelesapan unsur karena adanya kesamaan, baik dari segi kata maupun makna.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg border-l-4 border-Primary-400">
                        <p class="text-body-m text-Grayscale-900 m-0">
                          <span class="font-bold">Contoh:</span> Apakah kamu <span class="font-bold">sudah mencuci mobil ayah</span>? <span class="font-bold">Jika sudah</span>, mengapa masih terlihat kotor?
                        </p>
                      </div>
                    </div>

                    <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                      <h5 class="font-bold text-body-l text-Primary-700 mb-3">e. Konjungsi</h5>
                      <p class="text-body-l text-Grayscale-900 mb-4">
                        Penggunaan konjungsi antarkalimat dapat membuat satu kalimat dengan kalimat yang lainnya utuh dan logis.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg border-l-4 border-Primary-400">
                        <p class="text-body-m text-Grayscale-900 m-0">
                          <span class="font-bold">Contoh:</span> Berolahraga secara teratur dapat meningkatkan kesehatan tubuh. <span class="font-bold">Oleh karena itu</span>, penting untuk memilih jenis olahraga yang sesuai dengan minat dan kemampuan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4">2. Koherensi</h4>
                  <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                    <p class="text-body-l text-Grayscale-900 m-0">
                      Kepaduan antarinformasi yang disampaikan di dalam suatu paragraf. Koherensi ini juga mengandung arti bahwa informasi-informasi yang disampaikan dalam paragraf <span class="font-bold">harus membicarakan satu topik yang sama</span>.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Kepaduan Paragraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/z9tnhPEDSNE",
        description:
          "Tonton video berikut untuk memahami konsep kepaduan paragraf secara mendalam.",
      },
      {
        title: "Video: Latihan Soal Kepaduan Paragraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/TcKGam_mF6A",
        description:
          "Video latihan dan pembahasan soal mengenai kepaduan paragraf.",
      },
      {
        title: "Kuis Kepaduan Paragraf",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Bahasa Indonesia lahir dan dideklarasikan sebagai bahasa resmi negara bertepatan dengan hari Sumpah Pemuda yaitu 28 Oktober 1928. Bahasa Indonesia merupakan bahasa nasional dan bahasa persatuan yang digunakan oleh masyarakat untuk berkomunikasi antardaerah di nusantara. Bahasa Indonesia juga menjadi identitas bagi bangsa Indonesia.",
            question: "Jenis kohesi dari kepaduan paragraf tersebut adalah?",
            options: [
              { id: "a", text: "Pengacuan" },
              { id: "b", text: "Substitusi" },
              { id: "c", text: "Repetisi" },
              { id: "d", text: "Pelesapan" },
              { id: "e", text: "Konjungsi" },
            ],
            correctAnswer: "c",
            explanation:
              "Dalam paragraf tersebut, frasa 'Bahasa Indonesia' diulang pada setiap kalimat (kalimat 1, 2, dan 3) tanpa digantikan oleh kata ganti atau unsur lain. Pengulangan unsur yang sama secara berulang dari satu kalimat ke kalimat berikutnya merupakan ciri khas kohesi jenis repetisi (pengulangan).",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "(1) Tanaman daun kelor merupakan pohon berkayu yang tingginya bisa mencapai 6 meter. (2) Daun kelor bermanfaat untuk mencegah sel kanker, mencegah kerusakan sel akibat radikal bebas, dan meningkatkan produk ASI pada ibu menyusui. (3) ..........",
            question:
              "Pilihlah kalimat yang tepat sebagai penutup pada kalimat 3!",
            options: [
              {
                id: "a",
                text: "Demikian orang-orang rebutan daun kelor dan mencarinya kemana-mana.",
              },
              {
                id: "b",
                text: "Oleh karena itu, banyak orang mencari tanaman tersebut untuk ditanam di sekitar rumah sebagai tanaman obat keluarga (toga).",
              },
              {
                id: "c",
                text: "Namun, daun kelor pun memiliki sisi mistis yang dianggap memiliki kekuatan ajaib dan gaib yang dipercaya dapat mengusir roh jahat.",
              },
              {
                id: "d",
                text: "Di samping itu, daun keor dapat diolah menjadi berbagai jenis makanan seperti sayur daun kelor atau puding daun kelor.",
              },
              {
                id: "e",
                text: "Akan tetapi, tidaklah perlu menanam pohon kelor karena tidak semua orang senang mengonsumsinya.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat (1) dan (2) membahas tentang tanaman daun kelor dan manfaat kesehatannya. Kalimat penutup yang padu harus masih relevan dengan topik tersebut dan bersifat menyimpulkan. Pilihan B menggunakan konjungsi 'Oleh karena itu' yang berfungsi menyimpulkan bahwa karena manfaatnya yang banyak, maka banyak orang mencarinya untuk ditanam sebagai tanaman obat keluarga. Pilihan lain tidak padu karena: A tidak logis, C melenceng ke topik mistis, D ada typo dan tidak menyimpulkan, E bertentangan dengan isi paragraf.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: `<p class="text-body-l text-Grayscale-900 mb-4">Perhatikan tabel contoh dan jenis kohesi berikut:</p>
              <div class="overflow-x-auto mb-6">
                <table class="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-Secondary-200">
                  <thead>
                    <tr class="bg-Secondary-100 text-Primary-900 font-heading">
                      <th class="p-4 border-b border-Secondary-200 w-16 text-center">Tabel</th>
                      <th class="p-4 border-b border-Secondary-200">Contoh</th>
                      <th class="p-4 border-b border-Secondary-200 w-40">Jenis Kohesi</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-m text-Grayscale-900">
                    <tr class="border-b border-Secondary-100">
                      <td class="p-4 text-center">1</td>
                      <td class="p-4"><span class="font-bold">Bangka Belitung</span> terkenal dengan penghasil timah putih. <span class="font-bold">Bangka Belitung</span> juga memiliki pantai yang indah.</td>
                      <td class="p-4 font-semibold text-Primary-700">Substitusi</td>
                    </tr>
                    <tr class="bg-Secondary-50">
                      <td class="p-4 text-center">2</td>
                      <td class="p-4"><span class="font-bold">Daerah Bandung</span> sedang diguyur hujan seharian. <span class="font-bold">Kota Kembang</span> sedang menadah rezeki yang turun dari langit.</td>
                      <td class="p-4 font-semibold text-Primary-700">Substitusi</td>
                    </tr>
                  </tbody>
                </table>
              </div>`,
            question:
              "Analisislah kesesuaian contoh dan jenis kohesi pada tabel di bawah ini!",
            options: [
              {
                id: "a",
                text: "Tabel 1 sesuai, tabel 2 tidak sesuai",
              },
              { id: "b", text: "Keduanya tidak sesuai" },
              { id: "c", text: "Tidak dapat dianalisis" },
              { id: "d", text: "Keduanya sesuai" },
              {
                id: "e",
                text: "Tabel 1 tidak sesuai, tabel 2 sesuai",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Tabel 1 tidak sesuai karena frasa 'Bangka Belitung' diulang secara persis pada kalimat kedua tanpa ada penggantian unsur. Ini adalah ciri kohesi repetisi (pengulangan), bukan substitusi. Tabel 2 sesuai karena 'Daerah Bandung' digantikan dengan 'Kota Kembang' yang merujuk pada hal yang sama (nama lain untuk Bandung). Penggantian unsur dengan unsur lain yang bermakna sama merupakan ciri khas kohesi substitusi (penggantian).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "(1) Pantun merupakan salah satu jenis puisi lama. (2) Pantun terdiri dari empat baris dengan rima a-b-a-b. (3) Pada baris kesatu dan kedua merupakan sampiran, baris ketiga dan keempat merupakan isi. (4) Pantun adalah sastra budaya yang berasal dari Indonesia (Melayu) tepatnya Minangkabau. (5) Jika syair berasal dari Persia dan memiliki pengaruh dari kebudayaan Arab, tetapi sama dengan pantun masih termasuk puisi lama.",
            question: "Kalimat TIDAK PADU ditunjukkan dalam kalimat ke-?",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(3)" },
              { id: "d", text: "(4)" },
              { id: "e", text: "(5)" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat (1) sampai (4) seluruhnya membahas tentang pantun: definisinya, struktur rimanya, bagian-bagiannya, dan asalnya. Kalimat (5) tiba-tiba membahas tentang 'syair' yang berasal dari Persia. Meskipun syair juga termasuk puisi lama, pembahasannya tidak lagi berkaitan dengan topik utama paragraf yaitu pantun. Oleh karena itu, kalimat (5) tidak padu karena melenceng dari pokok bahasan paragraf (melanggar koherensi).",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Aktivitas masyarakat dalam menyambut tahun baru bagai angin lalu yang pergi begitu saja tanpa makna. Penyambutan tahun baru itu hanya berupa pesta pora hura-hura yang tidak memberikan keuntungan sedikit pun kepada masyarakat. Berbeda dengan penjual kembang api yang nyaris laku keras di beberapa titik lokasi penyambutan tahun baru.",
            question: "Apa penyebab paragraf di atas tidak padu?",
            options: [
              {
                id: "a",
                text: "Tidak adanya bagian penutup kalimat dalam paragraf.",
              },
              { id: "b", text: "Tidak ada kohesi yang muncul." },
              {
                id: "c",
                text: "Kalimat kedua tidak padu dengan kalimat kesatu.",
              },
              {
                id: "d",
                text: "Kalimat ketiga tidak padu dengan kalimat kedua.",
              },
              {
                id: "e",
                text: "Setiap kalimat (3 kalimat) memiliki pembahasan yang berbeda.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat pertama dan kedua masih dalam satu topik yang sama, yaitu menyoroti aktivitas masyarakat menyambut tahun baru yang dianggap tidak bermakna dan hanya berupa pesta pora. Namun, kalimat ketiga tiba-tiba beralih membahas tentang penjual kembang api yang laku keras. Topik keuntungan ekonomi penjual kembang api berbeda dengan topik kritik terhadap aktivitas penyambutan tahun baru. Inilah yang menyebabkan kalimat ketiga tidak padu dengan kalimat kedua.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Rencana pembangunan megaproyek jembatan yang menghubungkan Pulau Jawa dan Pulau Sumatera diharapkan tidak sampai menelantarkan ekosistem hutan yang ada di sekitar lokasi pembangunan. Namun, kemungkinan besar pembangunan jembatan tersebut akan mengonversi lahan pertanian di Provinsi Banten. Selain itu, berpotensi juga pada pembabatan hutan dan perusakan lingkungan di Sumatera. Oleh karena itu, pemerintah mengadakan kesepakatan kerja sama secara terbuka dengan masyarakat agar tidak merusak hutan, mempertahankan lahan pertanian, dan memperhatikan industri maritim.",
            question:
              "Bentuk kohesi yang lebih dominan pada paragraf tersebut adalah?",
            options: [
              { id: "a", text: "Pengacuan" },
              { id: "b", text: "Penggantian" },
              { id: "c", text: "Pengulangan" },
              { id: "d", text: "Pelesapan" },
              { id: "e", text: "Konjungsi" },
            ],
            correctAnswer: "e",
            explanation:
              "Paragraf tersebut menggunakan beberapa konjungsi antarkalimat secara dominan untuk menghubungkan kalimat satu dengan lainnya, yaitu: 'Namun' (menunjukkan pertentangan), 'Selain itu' (menunjukkan penambahan informasi), dan 'Oleh karena itu' (menunjukkan simpulan/akibat). Keberadaan tiga konjungsi antarkalimat dalam satu paragraf menunjukkan bahwa kohesi konjungsi adalah jenis yang paling dominan di sini.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "(1) Jawa Tengah dikenal sebagai provinsi dengan lansia terpadat kedua. (2) Lansia yang tinggal di Jawa disebut dengan lansia Jawa. (3) Pada usia lanjut, biasanya manusia rentan terkena penyakit stres. (4) Penurunan fungsi tubuh, perubahan status ekonomi, pensiun, kehilangan orang-orang yang dicintai, dan perubahan tempat tinggal adalah beberapa contoh stresor yang dialami oleh lansia.\n(5) Lansia Jawa memiliki tiga sikap dalam hidup, yaitu takut (wedi), malu (isin), dan segan (sungkan). (6) [.....] memungkinkan lansia akan menyimpan masalah atau stres daripada mengungkapkannya kepada orang lain. (7) Solusi untuk mengatasi masalah yang dialami diperlukan strategi intervensi yang tepat dalam mengatasi stres bagi lansia. (8) Sebuah penelitian melakukan strategi intervensi untuk mengatasi permasalahan yang dihadapi masyarakat, khususnya lansia Jawa, dengan memperhatikan budaya melalui terapi musik campursari dan supportive group therapy (SGT).",
            question:
              "Konjungsi yang tepat untuk melengkapi bagian rumpang pada kalimat 6 adalah?",
            options: [
              { id: "a", text: "Selanjutnya" },
              { id: "b", text: "Oleh karena itu" },
              { id: "c", text: "Akan tetapi" },
              { id: "d", text: "Demikian hal ini" },
              { id: "e", text: "Bahkan" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat (5) menjelaskan tiga sikap lansia Jawa: takut (wedi), malu (isin), dan segan (sungkan). Kalimat (6) menjelaskan akibat/dampak dari sikap tersebut, yaitu lansia cenderung menyimpan masalah. Konjungsi 'Demikian hal ini' berfungsi menegaskan dan merujuk pada pernyataan sebelumnya (tiga sikap tersebut) sebagai penyebab yang memungkinkan lansia menyimpan masalahnya. Pilihan lain tidak tepat karena: 'Selanjutnya' menunjukkan urutan, 'Oleh karena itu' terlalu menyimpulkan, 'Akan tetapi' menunjukkan pertentangan, dan 'Bahkan' menunjukkan penekanan berlebih.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "(1) Jawa Tengah dikenal sebagai provinsi dengan lansia terpadat kedua. (2) Lansia yang tinggal di Jawa disebut dengan lansia Jawa. (3) Pada usia lanjut, biasanya manusia rentan terkena penyakit stres. (4) Penurunan fungsi tubuh, perubahan status ekonomi, pensiun, kehilangan orang-orang yang dicintai, dan perubahan tempat tinggal adalah beberapa contoh stresor yang dialami oleh lansia.\n(5) Lansia Jawa memiliki tiga sikap dalam hidup, yaitu takut (wedi), malu (isin), dan segan (sungkan). (6) [.....] memungkinkan lansia akan menyimpan masalah atau stres daripada mengungkapkannya kepada orang lain. (7) Solusi untuk mengatasi masalah yang dialami diperlukan strategi intervensi yang tepat dalam mengatasi stres bagi lansia. (8) Sebuah penelitian melakukan strategi intervensi untuk mengatasi permasalahan yang dihadapi masyarakat, khususnya lansia Jawa, dengan memperhatikan budaya melalui terapi musik campursari dan supportive group therapy (SGT).",
            question:
              "Ketidakpaduan kalimat ditunjukkan pada kalimat nomor berapa ke berapa?",
            options: [
              { id: "a", text: "Nomor 2 ke-1" },
              { id: "b", text: "Nomor 3 ke-2" },
              { id: "c", text: "Nomor 4 ke-3" },
              { id: "d", text: "Nomor 6 ke-5" },
              { id: "e", text: "Nomor 8 ke-7" },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat (2) membahas tentang definisi 'lansia Jawa', yaitu lansia yang tinggal di Jawa. Kalimat (3) tiba-tiba membahas tentang 'manusia' secara umum yang rentan terkena penyakit stres pada usia lanjut, tanpa adanya keterkaitan langsung dan spesifik dengan lansia Jawa yang baru saja diperkenalkan di kalimat sebelumnya. Peralihan dari subjek spesifik (lansia Jawa) ke subjek umum (manusia) tanpa penghubung logis membuat kalimat (3) tidak padu dengan kalimat (2).",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "(1) Jawa Tengah dikenal sebagai provinsi dengan lansia terpadat kedua. (2) Lansia yang tinggal di Jawa disebut dengan lansia Jawa. (3) Pada usia lanjut, biasanya manusia rentan terkena penyakit stres. (4) Penurunan fungsi tubuh, perubahan status ekonomi, pensiun, kehilangan orang-orang yang dicintai, dan perubahan tempat tinggal adalah beberapa contoh stresor yang dialami oleh lansia.\n(5) Lansia Jawa memiliki tiga sikap dalam hidup, yaitu takut (wedi), malu (isin), dan segan (sungkan). (6) [.....] memungkinkan lansia akan menyimpan masalah atau stres daripada mengungkapkannya kepada orang lain. (7) Solusi untuk mengatasi masalah yang dialami diperlukan strategi intervensi yang tepat dalam mengatasi stres bagi lansia. (8) Sebuah penelitian melakukan strategi intervensi untuk mengatasi permasalahan yang dihadapi masyarakat, khususnya lansia Jawa, dengan memperhatikan budaya melalui terapi musik campursari dan supportive group therapy (SGT).",
            question: "Cara agar kalimat 8 menjadi logis adalah?",
            options: [
              {
                id: "a",
                text: "Menambahkan frasa sebuah penelitian dengan nama peneliti",
              },
              {
                id: "b",
                text: "Menambahkan kata stres setelah frasa strategi intervensi",
              },
              {
                id: "c",
                text: "Menghilangkan frasa supportive group therapy",
              },
              {
                id: "d",
                text: "Mengganti frasa strategi intervensi dengan kata riset",
              },
              {
                id: "e",
                text: "Menghilangkan klausa khususnya lansia Jawa",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat 8 dapat menjadi logis apabila informasi terkait penelitian ditambahkan dengan nama peneliti, yaitu terdapat dalam jawaban A. Jawaban B salah karena jika ditambahkan kata 'stres' setelah frasa 'strategi intervensi' maka kalimatnya menjadi rancu. Jawaban C salah karena jika frasa 'supportive group therapy' dihilangkan maka informasi menjadi kurang karena tidak tahu SGT itu singkatan dari apa. Jawaban D salah karena penggunaan frasa 'strategi intervensi' sudah tepat tanpa harus diganti menjadi kata 'riset'. Jawaban E salah karena jika klausa 'khususnya lansia Jawa' dihilangkan maka kalimat tersebut tidak padu dengan pembahasan paragraf.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              'Contoh kohesi yang ditandai dengan kata "dia" sebagai rujukan terhadap subjek yang diceritakan disebut?',
            options: [
              { id: "a", text: "Pengacuan" },
              { id: "b", text: "Substitusi" },
              { id: "c", text: "Repetisi" },
              { id: "d", text: "Pelesapan" },
              { id: "e", text: "Konjungsi" },
            ],
            correctAnswer: "a",
            explanation:
              "Jenis kohesi yang ditandai dengan kata ganti persona (orang) sebagai pengacuan terhadap subjek yang sedang dibahas disebut pengacuan. Kata 'dia' merupakan kata ganti orang ketiga yang merujuk pada subjek sebelumnya. Kata ganti persona juga terdiri dari beberapa jenis, yaitu: kata ganti orang pertama (saya, aku, hamba, daku); kata ganti orang kedua (kamu, Anda, kau, kalian); dan kata ganti orang ketiga (dia, beliau, -nya, mereka).",
            points: 6,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Kereta api merupakan salah satu alat transportasi masyarakat yang sering digunakan. Kereta api menjadi moda transportasi yang mengangkut orang atau barang di atas rel. Kereta api biasanya ditarik atau didorong oleh lokomotif, meskipun ada pula yang dapat digerakan sendiri, seperti kereta rel atau rangkaian kereta rel.",
            question:
              "Jenis kohesi yang terdapat dalam paragraf di atas adalah repetisi (pengulangan), alasannya?",
            options: [
              {
                id: "a",
                text: 'Terdapat kata ganti orang ketiga yaitu "masyarakat".',
              },
              {
                id: "b",
                text: 'Terdapat penggantian unsur lain tetapi masih satu rujukan yaitu "moda transportasi".',
              },
              {
                id: "c",
                text: 'Terdapat pengulangan unsur yang sama yaitu "Kereta api".',
              },
              {
                id: "d",
                text: 'Terdapat pelesapan karena adanya kesamaan yaitu "seperti kereta rel".',
              },
              {
                id: "e",
                text: 'Terdapat konjungsi yaitu "meskipun".',
              },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf tersebut mengulang frasa 'Kereta api' di awal setiap kalimat (kalimat 1, 2, dan 3) tanpa mengganti atau melesapkannya. Pengulangan unsur yang persis sama dari satu kalimat ke kalimat berikutnya merupakan definisi dari kohesi repetisi. Pilihan lain merujuk pada jenis kohesi yang berbeda: A (pengacuan), B (substitusi), D (pelesapan), E (konjungsi).",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Contoh yang tepat untuk menunjukkan jenis kohesi pelesapan adalah?",
            options: [
              {
                id: "a",
                text: "Apakah kamu belum mendapatkan teman sebangku? Jika belum, kamu boleh duduk di kursi sebelahku, mari jadi teman sebangku!",
              },
              {
                id: "b",
                text: "Bangka Belitung terkenal dengan penghasil timah putih (stannum) di pasar internasional. Bangka Belitung juga memiliki pantai yang indah. Bangka Belitung pun memiliki warisan budaya seperti dambus, adat nganggung, perang ketupat, dan lain-lain.",
              },
              {
                id: "c",
                text: "Capung merupakan hewan yang sudah ada sejak zaman purba. Hewan tersebut memiliki dua sayap seperti jaring, antena pendek yang berbentuk rambut, dan mulut tipe pengunyah.",
              },
              {
                id: "d",
                text: "Daerah Bandung sedang diguyur hujan seharian sehingga beberapa penjual bakso cuanki terlihat laris manis. Kota Kembang sedang menadah rezeki yang turun dari langit, barangkali salah satu bentuk rezeki pula bagi para pedagang bakso cuanki.",
              },
              {
                id: "e",
                text: "Estimasi waktu yang standard diperlukan untuk menempuh pusat kota adalah 45 menit, sedangkan Herman diberi kelonggaran waktu 30 menit lagi untuk sampai di pusat kota.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Jenis kohesi pelesapan terdapat dalam kalimat jawaban A karena ditandai dengan pelesapan frasa 'mendapatkan teman sebangku' pada kalimat kedua — 'Jika belum' melesapkan/menghilangkan frasa tersebut karena maknanya sudah dipahami dari kalimat sebelumnya. Jawaban B salah karena itu termasuk jenis kohesi repetisi yang ditandai dengan pengulangan 'Bangka Belitung'. Jawaban C salah karena itu termasuk jenis kohesi pengacuan yang ditandai dengan 'capung' lalu 'hewan tersebut'. Jawaban D salah karena itu termasuk jenis kohesi substitusi yang ditandai dengan 'Daerah Bandung' lalu 'Kota Kembang'. Jawaban E salah karena itu termasuk jenis kohesi konjungsi yang ditandai dengan konjungsi intrakalimat yaitu 'sedangkan'.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "(1) Samudra Arktik terletak di belahan Bumi bagian utara. (2) Di antara kelima samudra, Arktik menjadi samudra paling kecil di dunia. (3) Mayoritas permukaannya tertutupi es laut sepanjang tahun. (4) Dilansir dari WWF, ilmuan memperhitungan jika luas Samudra Arktik 1,5 kali lebih besar dibanding Amerika Serikat. (5) Walaupun lebih besar, ukuran samudera ini masih menjadi yang paling kecil di antara kelima samudra.\n(6) Sebagian besar permukaan Samudra Arktik tertutup es sehingga banyak ditinggali organisme. (7) Selain itu, suhunya juga tidak pernah naik di atas titik beku dan samudra ini tidak pernah tandus. (8) Es yang mencair akan membentuk kolam di atasnya. (9) Dampaknya, proses tersebut membentuk daerah yang menjadi tempat tinggal bagi sejumlah organisme. (10) Beruang kutub dan walrus bisa ditemui di area permukaan Samudra Arktik yang tertutupi es. (11) Sementara itu, di bagian airnya yang dingin banyak organisme kecil seperti plankton, ganggang, serta bakteri yang menjadi dasar rantai makanan Arktik. (12) Organisme kecil tersebut mengubah karbon dioksida menjadi bahan organik.",
            question:
              "Pengacuan kata ganti ini pada kalimat ke-7 merujuk pada?",
            options: [
              { id: "a", text: "Permukaan yang mencair" },
              { id: "b", text: "Bumi bagian utara" },
              { id: "c", text: "Lima samudra di dunia" },
              {
                id: "d",
                text: "Proses terbentuknya daerah di Arktik",
              },
              { id: "e", text: "Arktik" },
            ],
            correctAnswer: "e",
            explanation:
              "Pada kalimat (7) tertulis: 'Selain itu, suhunya juga tidak pernah naik di atas titik beku dan samudra ini tidak pernah tandus.' Kata ganti tunjuk 'ini' pada frasa 'samudra ini' merujuk pada subjek yang sedang dibahas dalam konteks paragraf kedua, yaitu Samudra Arktik. Kata 'ini' berfungsi sebagai pengacuan (kohesi) yang menggantikan penyebutan ulang nama 'Samudra Arktik'.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "(1) Samudra Arktik terletak di belahan Bumi bagian utara. (2) Di antara kelima samudra, Arktik menjadi samudra paling kecil di dunia. (3) Mayoritas permukaannya tertutupi es laut sepanjang tahun. (4) Dilansir dari WWF, ilmuan memperhitungan jika luas Samudra Arktik 1,5 kali lebih besar dibanding Amerika Serikat. (5) Walaupun lebih besar, ukuran samudera ini masih menjadi yang paling kecil di antara kelima samudra.\n(6) Sebagian besar permukaan Samudra Arktik tertutup es sehingga banyak ditinggali organisme. (7) Selain itu, suhunya juga tidak pernah naik di atas titik beku dan samudra ini tidak pernah tandus. (8) Es yang mencair akan membentuk kolam di atasnya. (9) Dampaknya, proses tersebut membentuk daerah yang menjadi tempat tinggal bagi sejumlah organisme. (10) Beruang kutub dan walrus bisa ditemui di area permukaan Samudra Arktik yang tertutupi es. (11) Sementara itu, di bagian airnya yang dingin banyak organisme kecil seperti plankton, ganggang, serta bakteri yang menjadi dasar rantai makanan Arktik. (12) Organisme kecil tersebut mengubah karbon dioksida menjadi bahan organik.",
            question: "Paragraf satu dikatakan padu karena, kecuali?",
            options: [
              {
                id: "a",
                text: "Paragraf satu membahas tentang letak geografis Samudra Arktik.",
              },
              {
                id: "b",
                text: "Paragraf satu membahas tentang organisme yang hidup di Samudra Arktik.",
              },
              {
                id: "c",
                text: "Paragraf satu berada pada satu pembahasan.",
              },
              {
                id: "d",
                text: "Paragraf satu tidak timpang dengan paragraf dua.",
              },
              {
                id: "e",
                text: "Tidak ada salah satu kalimat yang tidak padu di dalam paragraf satu.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf satu (kalimat 1-5) secara khusus membahas tentang letak geografis, ukuran, dan karakteristik fisik Samudra Arktik, bukan tentang organisme. Pembahasan tentang organisme yang hidup di Samudra Arktik terdapat di paragraf dua (kalimat 6-12). Oleh karena itu, pernyataan bahwa paragraf satu membahas tentang organisme adalah pernyataan yang SALAH dan merupakan pengecualian dari alasan kepaduan paragraf satu.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "(1) Samudra Arktik terletak di belahan Bumi bagian utara. (2) Di antara kelima samudra, Arktik menjadi samudra paling kecil di dunia. (3) Mayoritas permukaannya tertutupi es laut sepanjang tahun. (4) Dilansir dari WWF, ilmuan memperhitungan jika luas Samudra Arktik 1,5 kali lebih besar dibanding Amerika Serikat. (5) Walaupun lebih besar, ukuran samudera ini masih menjadi yang paling kecil di antara kelima samudra.\n(6) Sebagian besar permukaan Samudra Arktik tertutup es sehingga banyak ditinggali organisme. (7) Selain itu, suhunya juga tidak pernah naik di atas titik beku dan samudra ini tidak pernah tandus. (8) Es yang mencair akan membentuk kolam di atasnya. (9) Dampaknya, proses tersebut membentuk daerah yang menjadi tempat tinggal bagi sejumlah organisme. (10) Beruang kutub dan walrus bisa ditemui di area permukaan Samudra Arktik yang tertutupi es. (11) Sementara itu, di bagian airnya yang dingin banyak organisme kecil seperti plankton, ganggang, serta bakteri yang menjadi dasar rantai makanan Arktik. (12) Organisme kecil tersebut mengubah karbon dioksida menjadi bahan organik.",
            question: "Jenis kohesi yang muncul dalam paragraf dua adalah?",
            options: [
              { id: "a", text: "Pengacuan" },
              { id: "b", text: "Pengulangan" },
              { id: "c", text: "Pelesapan" },
              { id: "d", text: "Penggantian" },
              { id: "e", text: "Konjungsi" },
            ],
            correctAnswer: "e",
            explanation:
              "Paragraf dua (kalimat 6-12) menggunakan beberapa konjungsi antarkalimat untuk menghubungkan kalimat-kalimatnya, yaitu: 'sehingga' pada kalimat (6), 'Selain itu' pada kalimat (7), 'Dampaknya' pada kalimat (9), dan 'Sementara itu' pada kalimat (11). Dominannya penggunaan konjungsi untuk menjadi penghubung logis antarkalimat menunjukkan bahwa jenis kohesi yang paling menonjol dalam paragraf dua adalah konjungsi.",
            points: 6,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kepaduan Paragraf";
      moduleDoc.description =
        "Pelajari kepaduan paragraf melalui konsep kohesi (pengacuan, substitusi, repetisi, pelesapan, konjungsi) dan koherensi.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kepaduan Paragraf",
        description:
          "Pelajari kepaduan paragraf melalui konsep kohesi (pengacuan, substitusi, repetisi, pelesapan, konjungsi) dan koherensi.",
        subcategory: "Analisis Paragraf",
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

seedKepaduanParagraf();
