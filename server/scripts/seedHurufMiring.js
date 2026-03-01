const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedHurufMiring = async () => {
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

    const targetId = "huruf-miring";

    const stepsData = [
      {
        title: "Materi: Huruf Miring",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang aturan penggunaan huruf miring dalam bahasa Indonesia berdasarkan pedoman ejaan yang berlaku.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Aturan Penggunaan Huruf Miring</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    
                    <!-- Judul Buku, Jurnal, Majalah, Surat Kabar -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Huruf miring digunakan untuk <span class="text-Primary-700 font-bold">menulis judul buku</span>, <span class="text-Primary-700 font-bold">judul jurnal</span>, <span class="text-Primary-700 font-bold">nama majalah</span>, atau <span class="text-Primary-700 font-bold">nama surat kabar</span> yang dikutip dalam tulisan, karya ilmiah, atau daftar pustaka.
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ol class="list-decimal pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">Khair sedang membaca buku <span class="text-red-600 font-bold italic">Semua Ikan di Langit</span> karya Ziggy Zezsyazeoviennazabrizkie.</li>
                        <li class="text-body-l text-Grayscale-900">Adik sangat ingin membeli majalah <span class="text-red-600 font-bold italic">Bobo</span>.</li>
                        <li class="text-body-l text-Grayscale-900">Chaer, Abdul. 2009. <span class="text-red-600 font-bold italic">Sintaksis Bahasa Indonesia</span>. Jakarta: Rineka Cipta.</li>
                      </ol>
                    </div>

                    <!-- Bahasa Asing dan Daerah -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Huruf miring digunakan untuk menuliskan <span class="text-Primary-700 font-bold">kata atau ungkapan</span> dalam <span class="text-Primary-700 font-bold">bahasa asing</span> atau <span class="text-Primary-700 font-bold">bahasa daerah</span>.
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ol class="list-decimal pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">Nama ilmiah jamur adalah <span class="text-red-600 font-bold italic">Fungi</span>.</li>
                        <li class="text-body-l text-Grayscale-900">Ungkapan <span class="text-red-600 font-bold italic">Bhineka Tunggal Ika</span> berasal dari Kitab Sutasoma yang berarti berbeda-beda tetapi tetap satu.</li>
                      </ol>
                    </div>

                    <!-- Catatan -->
                    <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                      <h4 class="text-h4 font-bold text-Primary-800 mb-3 mt-0">CATATAN</h4>
                      <ul class="list-disc pl-5 mt-0 mb-4 space-y-2">
                        <li class="text-body-l text-Grayscale-900">
                          Bagian yang akan ditulis atau dicetak miring dalam <span class="font-bold">mesin tik</span> atau <span class="font-bold">naskah tulisan tangan</span> akan ditandai dengan <span class="font-bold">garis bawah</span>.
                        </li>
                        <li class="text-body-l text-Grayscale-900">
                          Nama diri, seperti nama orang, lembaga yang dalam bahasa daerah atau bahasa asing tidak ditulis dengan huruf miring.
                          <p class="text-body-l text-Grayscale-900 mt-1 mb-1">Contoh :</p>
                          <ol class="list-decimal pl-5 mt-0 mb-0 space-y-1">
                            <li>Wachirawit Ruangwiwat.</li>
                            <li>World Health Organization</li>
                          </ol>
                        </li>
                      </ul>
                    </div>

                    <!-- Menegaskan Huruf atau Kata -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Huruf miring digunakan untuk <span class="text-Primary-700 font-bold">menegaskan huruf</span>, <span class="text-Primary-700 font-bold">bagian kata</span>, atau <span class="text-Primary-700 font-bold">kelompok kata</span> dalam kalimat.
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ol class="list-decimal pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">Dia bukan <span class="text-red-600 font-bold italic">me</span>minta tetapi <span class="text-red-600 font-bold italic">me</span>nerima.</li>
                        <li class="text-body-l text-Grayscale-900">Penggunaan <span class="text-red-600 font-bold italic">di</span> dalam kata <span class="text-red-600 font-bold italic">di</span> rumah harus menggunakan spasi.</li>
                      </ol>
                    </div>

                  </div>
                </div>
              </div>

            </section>
          </div>
        `,
      },
      {
        title: "Video: Huruf Miring (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/gVGb_byEyFM",
        description:
          "Video pembelajaran tentang penggunaan huruf miring bagian pertama.",
      },
      {
        title: "Video: Huruf Miring (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/X9ma3MeMK6k",
        description:
          "Video pembelajaran tentang penggunaan huruf miring bagian kedua.",
      },
      {
        title: "Kuis Huruf Miring",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Badan Pengkajian dan Penerapan Teknologi (BPPT) siap mendukung terwujudnya Smart and Green City sebagai konsep yang diusung untuk ibu kota baru di Kalimantan Timur. Teknologi dari perencanaan untuk ibu kota baru bisa disiapkan untuk teknologi lingkungan seperti kebutuhan air dan energi listrik.",
            question:
              "Bagaimana perbaikan yang benar untuk frasa bercetak tebal (Smart and Green City) tersebut?",
            options: [
              { id: "a", text: "Smart And Green City" },
              { id: "b", text: "<i>Smart And Green City</i>" },
              { id: "c", text: "Smart and Green City" },
              { id: "d", text: "<i>Smart and Green City</i>" },
              { id: "e", text: "Tidak perlu diperbaiki" },
            ],
            correctAnswer: "d",
            explanation:
              "Istilah asing yang belum diserap sepenuhnya ke dalam bahasa Indonesia harus ditulis menggunakan huruf miring. Karena ini merujuk pada sebuah nama konsep/judul program spesifik, huruf awalnya kapital (kecuali konjungsi 'and'). Jadi, penulisan yang tepat adalah <i>Smart and Green City</i>.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question:
              "Perhatikan pernyataan-pernyataan di bawah ini!<br/>(1) Berdasarkan laporan yang diterbitkan dalam <i>Journal of Fisheries Science</i>, Indonesia tercatat sebagai salah satu eksportir ikan...<br/>(2) Selain itu, penelitian yang dipublikasikan dalam <i>Aquaculture Economics and Management</i> menunjukkan...<br/>(3) Pemerintah Indonesia melalui Kementerian Kelautan dan Perikanan telah mengimplementasikan kebijakan blue economy, yang bertujuan...<br/><br/>Berdasarkan pernyataan di atas, manakah pernyataan yang BENAR (penulisan huruf miringnya)?",
            options: [
              { id: "a", text: "Pernyataan (1)" },
              { id: "b", text: "Pernyataan (2)" },
              { id: "c", text: "Pernyataan (3)" },
              { id: "d", text: "Pernyataan (1) dan (2)" },
              { id: "e", text: "Pernyataan (2) dan (3)" },
            ],
            correctAnswer: "d",
            explanation:
              "Pernyataan (1) dan (2) benar karena nama jurnal/majalah/buku ditulis menggunakan huruf miring. Pernyataan (3) salah karena frasa bahasa asing 'blue economy' seharusnya juga ditulis dengan huruf miring (<i>blue economy</i>).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "(1) Berasal dari nama latin citrus maxima, jeruk bali mempunyai nama yang berbeda-beda di berbagai wilayah. (2) Jeruk bali merupakan buah khas dari Asia Tenggara... (3) Berdasarkan penelitian yang dipublikasikan dalam <i>Journal of Food Science and Technology</i>, jeruk bali kaya akan senyawa bioaktif...",
            question:
              "Berdasarkan paragraf di atas, penggunaan huruf miring yang SALAH terdapat pada kalimat nomor?",
            options: [
              { id: "a", text: "Kalimat (1)" },
              { id: "b", text: "Kalimat (2)" },
              { id: "c", text: "Kalimat (3)" },
              { id: "d", text: "Kalimat (1) dan (2)" },
              { id: "e", text: "Kalimat (2) dan (3)" },
            ],
            correctAnswer: "a",
            explanation:
              "Pada kalimat (1), penulisan nama ilmiah bahasa Latin harus dicetak miring, DENGAN huruf pertama penunjuk genus kapital dan spesies kecil. Seharusnya ditulis: <i>Citrus maxima</i>, bukan <i>citrus maxima</i> (huruf c kecil).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              "Berikut merupakan pemakaian huruf miring yang benar, kecuali ....",
            options: [
              { id: "a", text: "Menuliskan nama ilmiah" },
              { id: "b", text: "Menuliskan ungkapan asing" },
              { id: "c", text: "Menuliskan nama atau judul buku" },
              { id: "d", text: "Nama instansi atau lembaga" },
              { id: "e", text: "Menegaskan bagian kata dari sebuah kalimat" },
            ],
            correctAnswer: "d",
            explanation:
              "Menurut kaidah EYD/PUEBI, nama instansi, lembaga, atau organisasi baik dalam bahasa Indonesia maupun bahasa asing TIDAK ditulis dengan huruf miring (contoh: World Health Organization).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Penggunaan huruf miring yang tepat terdapat pada kalimat …",
            options: [
              { id: "a", text: "Biru sangat ingin membeli majalah bobo" },
              { id: "b", text: "Nama ilmiah padi adalah Oryza sativa" },
              {
                id: "c",
                text: "Ocean membaca buku <i>Bumi Manusia</i> karangan Pramoedya Ananta Toer.",
              },
              { id: "d", text: "Dia sedang membaca novel Romeo dan Juliet." },
              { id: "e", text: "Sky ingin menulis artikel di harian Kompas." },
            ],
            correctAnswer: "c",
            explanation:
              "Huruf miring dipakai untuk menuliskan judul buku, nama majalah, atau nama surat kabar yang dikutip dalam tulisan. Pada opsi C, judul buku <i>Bumi Manusia</i> telah ditulis dengan huruf miring secara tepat.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Apa yang ditunjukkan oleh penggunaan huruf miring dalam sebuah teks?",
            options: [
              { id: "a", text: "Penggalan percakapan antar karakter." },
              { id: "b", text: "Kata-kata yang harus ditekankan." },
              { id: "c", text: "Istilah dalam bahasa Indonesia" },
              { id: "d", text: "Nama tempat yang penting." },
              { id: "e", text: "Bagian penting dari sebuah narasi" },
            ],
            correctAnswer: "b",
            explanation:
              "Salah satu fungsi huruf miring adalah untuk menegaskan atau mengkhususkan huruf, bagian kata, kata, atau kelompok kata dalam sebuah kalimat.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              "Pilihlah kalimat-kalimat di bawah ini yang penggunaan huruf miringnya tepat, kecuali?",
            options: [
              {
                id: "a",
                text: "Nama ilmiah buah manggis adalah <i>Garcinia mangostana</i>.",
              },
              {
                id: "b",
                text: "Dia tidak di<i>antar</i>, tetapi <i>meng</i>antar.",
              },
              {
                id: "c",
                text: "Majalah <i>Poedjangga Baroe</i> menggelorakan semangat kebangsaan.",
              },
              {
                id: "d",
                text: "Rangkumlah bab <i>ini</i> dengan menggunakan bahasamu sendiri.",
              },
              {
                id: "e",
                text: "Novel Dikta dan Hukum menjadi salah satu novel yang paling diminati di kalangan remaja.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Opsi E salah karena judul novel 'Dikta dan Hukum' tidak dicetak miring. Seharusnya ditulis: Novel <i>Dikta dan Hukum</i>.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question:
              "Pilih kalimat yang benar dalam penggunaan huruf miring berikut:",
            options: [
              {
                id: "a",
                text: "Buku Bumi Manusia adalah karya Pramoedya Ananta Toer.",
              },
              {
                id: "b",
                text: "Buku <i>Bumi manusia</i> adalah karya Pramoedya Ananta Toer.",
              },
              {
                id: "c",
                text: "Buku Bumi <i>Manusia</i> adalah karya Pramoedya Ananta Toer.",
              },
              {
                id: "d",
                text: "Buku <i>Bumi Manusia</i> adalah karya Pramoedya Ananta Toer.",
              },
              {
                id: "e",
                text: "Buku Bumi Manusia adalah karya <i>Pramoedya Ananta Toer</i>.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Judul buku harus ditulis menggunakan huruf miring. Selain itu, karena berupa judul, setiap awal kata (kecuali konjungsi) harus menggunakan huruf kapital. Maka penulisan yang tepat adalah <i>Bumi Manusia</i>.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Manakah penulisan yang benar untuk istilah asing berikut ini?",
            options: [
              {
                id: "a",
                text: "Teknologi ini menggunakan Artificial intelligence untuk mengolah data.",
              },
              {
                id: "b",
                text: "Teknologi ini menggunakan artificial intelligence untuk mengolah data.",
              },
              {
                id: "c",
                text: "Teknologi ini menggunakan <i>Artificial intelligence</i> untuk mengolah data.",
              },
              {
                id: "d",
                text: "Teknologi ini menggunakan <i>artificial intelligence</i> untuk mengolah data.",
              },
              {
                id: "e",
                text: "Teknologi ini menggunakan <i>Artificial Intelligence</i> untuk mengolah data.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Istilah asing di tengah kalimat biasa ditulis dengan huruf miring. Karena 'artificial intelligence' bukan nama diri (proper noun) atau judul, maka ditulis dengan huruf kecil semua: <i>artificial intelligence</i>.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              "Pilih penulisan yang benar untuk penggunaan huruf miring dalam konteks istilah ilmiah:",
            options: [
              {
                id: "a",
                text: "Istilah homo sapiens digunakan untuk merujuk pada manusia modern.",
              },
              {
                id: "b",
                text: "Istilah Homo sapiens digunakan untuk merujuk pada manusia modern.",
              },
              {
                id: "c",
                text: "Istilah <i>homo sapiens</i> digunakan untuk merujuk pada manusia modern.",
              },
              {
                id: "d",
                text: "Istilah <i>Homo sapiens</i> digunakan untuk merujuk pada manusia modern.",
              },
              {
                id: "e",
                text: "Istilah <i>Homo Sapiens</i> digunakan untuk merujuk pada manusia modern.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Penulisan tata nama taksonomi (binomial nomenklatur) harus dicetak miring. Kata pertama (genus) diawali huruf kapital, dan kata kedua (spesies) diawali huruf kecil. Sehingga menjadi: <i>Homo sapiens</i>.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Dalam era digital saat ini, penggunaan istilah seperti Cloud computing dan Machine learning semakin sering kita jumpai. Kedua istilah ini merupakan bagian dari teknologi mutakhir yang membantu berbagai sektor...",
            question:
              "Penggunaan huruf miring yang tepat untuk kata “Cloud computing dan Machine learning” adalah...",
            options: [
              { id: "a", text: "Cloud computing dan Machine learning" },
              {
                id: "b",
                text: "<i>Cloud computing</i> dan <i>Machine learning</i>",
              },
              { id: "c", text: "cloud computing dan machine learning" },
              {
                id: "d",
                text: "<i>cloud computing</i> dan <i>machine learning</i>",
              },
              { id: "e", text: "Cloud Computing dan Machine Learning" },
            ],
            correctAnswer: "d",
            explanation:
              "Kedua frasa tersebut adalah istilah bahasa Inggris (asing) yang bukan nama diri. Oleh karena itu, harus dicetak miring dan menggunakan huruf kecil: <i>cloud computing</i> dan <i>machine learning</i>.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Mengapa istilah <i>cloud computing</i> dan <i>machine learning</i> ditulis dengan huruf miring?",
            options: [
              {
                id: "a",
                text: "Karena keduanya adalah istilah asing yang belum diserap ke dalam bahasa Indonesia.",
              },
              { id: "b", text: "Karena keduanya adalah istilah ilmiah." },
              {
                id: "c",
                text: "Karena keduanya adalah istilah teknis dalam bidang teknologi.",
              },
              { id: "d", text: "Karena keduanya adalah nama perangkat lunak." },
              { id: "e", text: "Karena keduanya adalah istilah populer." },
            ],
            correctAnswer: "a",
            explanation:
              "Sesuai pedoman EYD/PUEBI, huruf miring dipakai untuk menuliskan kata atau ungkapan dalam bahasa daerah atau bahasa asing yang belum diserap sepenuhnya ejaannya ke dalam bahasa Indonesia.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Nama ilmiah untuk harimau adalah Panthera tigris. Hewan ini dikenal sebagai salah satu karnivora besar yang mendominasi ekosistem hutan.",
            question: "Penulisan nama ilmiah harimau yang benar adalah . . .",
            options: [
              { id: "a", text: "panthera tigris" },
              { id: "b", text: "Panthera Tigris" },
              { id: "c", text: "<i>Panthera Tigris</i>" },
              { id: "d", text: "<i>Panthera tigris</i>" },
              { id: "e", text: "<i>panthera tigris</i>" },
            ],
            correctAnswer: "d",
            explanation:
              "Sama seperti aturan pada <i>Homo sapiens</i> dan <i>Citrus maxima</i>, penulisan nama ilmiah biologi dicetak miring dengan huruf pertama kapital (genus) dan sisanya kecil (spesies) -> <i>Panthera tigris</i>.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Pemakaian huruf miring yang tepat adalah?",
            options: [
              { id: "a", text: "Berita itu dimuat di koran Tempo." },
              { id: "b", text: "Aku ingin menikmati senja di sore hari." },
              {
                id: "c",
                text: "Majalah <i>Femina</i> merupakan salah satu majalah terbaik.",
              },
              { id: "d", text: "Anne lahir di Palembang pada tahun 2003." },
              {
                id: "e",
                text: "Berdasarkan survei WHO (World Health Organization).",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Nama majalah ('Femina') wajib dicetak miring. Opsi A salah karena 'Tempo' tidak dicetak miring. Opsi E benar tidak menggunakan huruf miring untuk 'World Health Organization' (karena nama instansi asing tidak dimiringkan), namun opsi C adalah contoh penerapan huruf miring yang langsung terlihat kebenarannya pada struktur opsinya.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question: "Pemakaian huruf miring yang tepat adalah?",
            options: [
              {
                id: "a",
                text: "Buku “Manajemen Pemasaran Konvensional” akan terbit bulan depan.",
              },
              {
                id: "b",
                text: "Buku “Manajemen pemasaran konvensional” akan terbit bulan depan.",
              },
              {
                id: "c",
                text: "Buku ‘Manajemen Pemasaran Konvensional’ akan terbit bulan depan.",
              },
              {
                id: "d",
                text: "Buku <i>Manajemen Pemasaran Konvensional</i> akan terbit bulan depan.",
              },
              {
                id: "e",
                text: "Buku Manajemen Pemasaran Konvensional akan terbit bulan depan.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Judul buku yang dipakai dalam sebuah kalimat tidak diapit oleh tanda petik (ganda maupun tunggal), melainkan ditulis dengan menggunakan huruf miring.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Huruf Miring";
      moduleDoc.description =
        "Materi mengenai pedoman penggunaan huruf miring dalam bahasa Indonesia beserta contohnya pada berbagai situasi.";
      moduleDoc.subcategory = "Penulisan Huruf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Huruf Miring",
        description:
          "Materi mengenai pedoman penggunaan huruf miring dalam bahasa Indonesia beserta contohnya pada berbagai situasi.",
        subcategory: "Penulisan Huruf",
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

seedHurufMiring();
