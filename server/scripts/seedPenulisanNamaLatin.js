const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPenulisanNamaLatin = async () => {
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

    const targetId = "penulisan-nama-latin-dalam-judul";

    const stepsData = [
      {
        title: "Materi: Penulisan Nama Latin dalam Judul",
        type: "reading",
        status: "active",
        description:
          "Pelajari materi mengenai kaidah tata cara penulisan nama ilmiah atau binomial nomenklatur.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <!-- Definisi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Definisi</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed">
                Penulisan nama latin dalam judul merujuk adalah <span class="text-Primary-700 font-bold">cara penulisan nama ilmiah suatu organisme</span> (misalnya tanaman, hewan, atau mikroorganisme) yang mengikuti aturan tata cara penulisan dalam sistem klasifikasi ilmiah. Nama latin ini terdiri dari dua kata, yaitu nama <span class="text-Primary-700 font-bold">genus</span> dan <span class="text-Primary-700 font-bold">spesies</span>, yang biasanya ditulis dengan huruf miring atau digarisbawahi.
              </p>
            </section>

            <!-- Aturan -->
            <section>
              <h4 class="text-h4 font-bold text-Grayscale-900 mb-4">Aturan yang Perlu Diperhatikan</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ul class="list-disc pl-5 mt-0 mb-4 space-y-4">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Ditulis dengan <span class="text-Primary-700 font-bold">huruf miring</span> dan terdiri dari dua kata, <span class="text-Primary-700 font-bold">kata depan menunjukan genus</span> sedangkan <span class="text-Primary-700 font-bold">kata di belakang menunjukan spesies</span>.
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        <span class="text-Primary-700 font-bold">Huruf pertama pada genus</span> menggunakan <span class="text-Primary-700 font-bold">huruf kapital</span>, sedangkan <span class="text-Primary-700 font-bold">huruf pertama spesies</span> adalah <span class="text-Primary-700 font-bold">non kapital</span>.
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Apabila <span class="text-Primary-700 font-bold">diketik</span>, nama latin genus dan spesies harus ditulis dalam <span class="text-Primary-700 font-bold">huruf miring</span> (italic), sedangkan jika <span class="text-Primary-700 font-bold">ditulis tangan</span> harus <span class="text-Primary-700 font-bold">digarisbawahi</span>.
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Jika <span class="text-Primary-700 font-bold">nama spesiesnya terdiri dari dua kata</span>, maka kata kedua dapat digabung dengan kata pertama atau <span class="text-Primary-700 font-bold">diberi tanda strip (-)</span>.
                        <p class="text-body-l text-Grayscale-900 mb-1 mt-1">Contoh : <span class="text-red-600 font-bold italic">Hibiscus rosasinensis</span> atau <span class="text-red-600 font-bold italic">Hibiscus rosa-sinensis</span> (bunga sepatu).</p>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Jika ingin mencantumkan <span class="text-Primary-700 font-bold">nama penemu</span> hewan atau tumbuhan tersebut, maka harus <span class="text-Primary-700 font-bold">diletakkan di belakang nama spesies</span> baik dalam bentuk nama singkatan atau bisa juga secara lengkap. Syaratnya, nama tersebut <span class="text-Primary-700 font-bold">tidak dicetak miring, tidak digarisbawahi</span> dan ditulis dengan <span class="text-Primary-700 font-bold">awalan huruf kapital</span>.
                        <p class="text-body-l text-Grayscale-900 mb-1 mt-1">Contoh : <span class="text-red-600 font-bold">Glycine max Merr</span>.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Contoh Penulisan Nama Latin -->
            <section>
              <h4 class="text-h4 font-bold text-Grayscale-900 mb-4">Contoh Penulisan Nama Latin</h4>
              <ul class="list-disc pl-5 mt-0 mb-4 space-y-2">
                <li class="text-body-l text-Grayscale-900"><span class="italic">Oryza sativa</span> (padi)</li>
                <li class="text-body-l text-Grayscale-900"><span class="italic">Cocos nucifera</span> (kelapa)</li>
                <li class="text-body-l text-Grayscale-900"><span class="italic">Panthera tigris</span> (harimau)</li>
              </ul>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Penulisan Nama Latin (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/etQ7Nhm9Jog",
        description: "Penjelasan mengenai aturan binomial nomenklatur.",
      },
      {
        title: "Video: Penulisan Nama Latin (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/s6XMyeg-rZg",
        description:
          "Pembahasan mengenai tata letak italic dan garis bawah dalam huruf atau tulis tangan.",
      },
      {
        title: "Kuis Penulisan Nama Latin",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan-pernyataan di bawah ini!<br/>(1) Canis Familiaris : Anjing<br/>(2) Elephas Maximus : Gajah<br/>(3) Allium sativum : Bawang putih<br/>(4) Capsicum annum : Cabai merah",
            question:
              "Berdasarkan pernyataan-pernyataan di atas, manakah pernyataan yang penulisan nama latinnya benar?",
            options: [
              { id: "a", text: "Pernyataan (1) dan (2)" },
              { id: "b", text: "Pernyataan (2) dan (3)" },
              { id: "c", text: "Pernyataan (3) dan (4)" },
              { id: "d", text: "Pernyataan (1) dan (4)" },
              { id: "e", text: "Pernyataan (1) dan (3)" },
            ],
            correctAnswer: "c",
            explanation:
              "Aturan Binomial Nomenklatur mengharuskan kata pertama (genus) diawali huruf kapital dan kata kedua (spesies) diawali huruf kecil. Pada pernyataan 1 dan 2, kata kedua diawali huruf kapital (Familiaris, Maximus), sehingga salah.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Beberapa cara penulisan nama latin:<br/>1) Nama penemunya tidak boleh dicantumkan.<br/>2) Kata pertama dimulai dengan huruf kapital besar, kata kedua dimulai dengan huruf kecil.<br/>3) Apabila diketik, nama latin genus dan spesies harus ditulis dengan garis miring (italic). Sedangkan jika ditulis tangan harus digaris bawahi.<br/>4) Kata depan menunjukkan genus, sedangkan kata di belakang menunjukkan kata spesies.",
            question:
              "Berdasarkan beberapa cara penulisan nama latin di atas, nomor berapa yang merupakan cara SALAH dalam penulisan nama latin?",
            options: [
              { id: "a", text: "Pernyataan 1" },
              { id: "b", text: "Pernyataan 2" },
              { id: "c", text: "Pernyataan 3" },
              { id: "d", text: "Pernyataan 4" },
              { id: "e", text: "Semua pernyataan benar" },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan 1 salah karena nama penemu (autoritas) yang pertama kali mendeskripsikan spesies tersebut justru diizinkan dan sering dicantumkan di akhir nama ilmiah (misalnya diringkas dengan satu huruf kapital seperti 'L.' untuk Linnaeus).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              '"Studi Tentang Tanaman Mangifera Indica di Wilayah Tropis Indonesia"',
            question:
              "Tulis judul berikut ini dengan penulisan nama latin yang benar sesuai dengan kaidah penulisan ilmiah.",
            options: [
              {
                id: "a",
                text: "Studi tentang Tanaman Mangifera Indica di Wilayah Tropis Indonesia.",
              },
              {
                id: "b",
                text: "Studi tentang Tanaman Mangifera indica Di Wilayah Tropis Indonesia.",
              },
              {
                id: "c",
                text: "Studi tentang Tanaman <i>Mangifera indica</i> di Wilayah Tropis Indonesia.",
              },
              {
                id: "d",
                text: "Studi tentang Tanaman <i>Mangifera indica</i> di wilayah Tropis Indonesia.",
              },
              { id: "e", text: "Tidak perlu diperbaiki." },
            ],
            correctAnswer: "c",
            explanation:
              "Dalam judul, kata tugas seperti 'tentang' dan 'di' diawali huruf kecil. Nama ilmiah harus dicetak miring dengan Genus berawalan kapital dan spesies berawalan kecil (<i>Mangifera indica</i>).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              "Cara penulisan nama tumbuhan jahe yang benar adalah . . .",
            options: [
              { id: "a", text: "Zingiber Offisinale" },
              { id: "b", text: "zingiber Offisinale" },
              { id: "c", text: "zingiber offisinale" },
              { id: "d", text: "Zingiberoffisinale" },
              { id: "e", text: "<i>Zingiber offisinale</i>" },
            ],
            correctAnswer: "e",
            explanation:
              "Penulisan yang tepat adalah memisahkan dua kata tersebut, menggunakan huruf kapital hanya pada awal kata genus (Zingiber), huruf kecil pada spesies (offisinale), dan dicetak miring.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Cara penulisan nama tumbuhan jagung menurut penulisan nama ilmiah adalah . . .",
            options: [
              { id: "a", text: "ZEA MAYS" },
              { id: "b", text: "Zea Mays" },
              { id: "c", text: "zea Mays" },
              { id: "d", text: "<i>Zea mays</i>" },
              { id: "e", text: "zea mays" },
            ],
            correctAnswer: "d",
            explanation:
              "Format penulisan yang baku adalah huruf pertama genus kapital, spesies huruf kecil seluruhnya, dan nama dicetak miring: <i>Zea mays</i>.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "Padi memiliki nama ilmiah <i>Oryza sativa</i>.",
            question: "Kata Oryza merupakan petunjuk nama . . .",
            options: [
              { id: "a", text: "Spesies." },
              { id: "b", text: "Genus." },
              { id: "c", text: "Famili." },
              { id: "d", text: "Ordo." },
              { id: "e", text: "Divisi." },
            ],
            correctAnswer: "b",
            explanation:
              "Dalam Binomial Nomenklatur, kata pertama dari nama ilmiah menunjukkan takson Genus (marga), sedangkan kata kedua menunjukkan spesies (jenis).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "“Pengaruh Suhu terhadap Respirasi Ikan Nila (oreochromis niloticus)”",
            question: "Bagaimana penulisan nama latin yang benar?",
            options: [
              {
                id: "a",
                text: "Pengaruh Suhu terhadap Respirasi Ikan Nila (Oreochromis niloticus)",
              },
              {
                id: "b",
                text: "Pengaruh Suhu Terhadap Respirasi Ikan Nila (<i>Oreochromis niloticus</i>)",
              },
              {
                id: "c",
                text: "Pengaruh Suhu terhadap Respirasi Ikan Nila (<i>Oreochromis Niloticus</i>)",
              },
              {
                id: "d",
                text: "Pengaruh Suhu terhadap Respirasi Ikan Nila (OREOCHROMIS NILOTICUS)",
              },
              {
                id: "e",
                text: "Pengaruh Suhu terhadap Respirasi Ikan Nila (<i>Oreochromis niloticus</i>)",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kata depan dalam judul 'terhadap' tetap kecil. Nama ilmiah wajib dicetak miring, Genus huruf besar, spesies huruf kecil: <i>Oreochromis niloticus</i>.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "“Studi Daya Tahan Tanaman Cabai (capsicum annuum) terhadap Hama”",
            question: "Manakah penulisan nama latin yang tepat?",
            options: [
              {
                id: "a",
                text: "Studi Daya Tahan Tanaman Cabai (Capsicum Annuum)",
              },
              {
                id: "b",
                text: "Studi Daya Tahan Tanaman Cabai (<i>Capsicum annuum</i>)",
              },
              {
                id: "c",
                text: "Studi Daya Tahan Tanaman Cabai (<i>capsicum annuum</i>)",
              },
              {
                id: "d",
                text: "Studi Daya Tahan Tanaman Cabai (CAPSICUM ANNUUM)",
              },
              {
                id: "e",
                text: "Studi Daya Tahan Tanaman Cabai (<i>Capsicum Annuum</i>)",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Hanya opsi B yang menerapkan semua aturan dengan tepat: huruf pertama Genus besar (Capsicum), spesies kecil (annuum), dan tulisan dicetak miring.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Apa alasan utama mengapa nama ilmiah ditulis dengan huruf miring atau digarisbawahi?",
            options: [
              {
                id: "a",
                text: "Untuk membedakan nama ilmiah dengan kata-kata lain dalam teks.",
              },
              {
                id: "b",
                text: "Karena merupakan aturan baku dalam penulisan ilmiah.",
              },
              { id: "c", text: "Agar terlihat lebih formal dan ilmiah." },
              {
                id: "d",
                text: "Untuk menunjukkan bahwa nama tersebut berasal dari bahasa latin.",
              },
              { id: "e", text: "Semua jawaban di atas benar." },
            ],
            correctAnswer: "e",
            explanation:
              "Penulisan dengan cetak miring (atau garis bawah) berfungsi ganda: sebagai aturan konvensi internasional (ICZN/ICN), menandai serapan bahasa Latin, serta membedakan secara visual taksonomi organisme dari kata biasa dalam suatu naskah.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              'Apa yang dimaksud dengan "autoritas" dalam penulisan nama ilmiah (seperti L. pada <i>Oryza sativa L.</i>)?',
            options: [
              { id: "a", text: "Nama spesies." },
              { id: "b", text: "Nama genus." },
              {
                id: "c",
                text: "Nama penemu atau orang yang pertama kali mendeskripsikan spesies tersebut.",
              },
              { id: "d", text: "Sinonim dari nama spesies." },
              { id: "e", text: "Nama umum dari spesies tersebut." },
            ],
            correctAnswer: "c",
            explanation:
              "Autoritas (nama rujukan penulis) mencantumkan nama ilmuwan yang pertama kali mempublikasikan dan mendeskripsikan spesies tersebut secara sah, contohnya 'L.' singkatan untuk Carolus Linnaeus.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question:
              "Manakah pernyataan berikut yang benar mengenai penulisan nama ilmiah?",
            options: [
              {
                id: "a",
                text: "Nama ilmiah dapat disingkat menjadi huruf pertama saja, misalnya E. coli untuk Escherichia coli.",
              },
              {
                id: "b",
                text: "Nama ilmiah dapat ditulis dengan huruf kapital semua jika ingin menonjolkan nama tersebut.",
              },
              {
                id: "c",
                text: "Nama ilmiah harus selalu diikuti oleh nama penemu, misalnya Oryza sativa L.",
              },
              {
                id: "d",
                text: "Nama ilmiah dapat ditulis dengan huruf biasa tanpa perlu dimiringkan atau digarisbawahi.",
              },
              {
                id: "e",
                text: "Nama ilmiah terdiri dari dua kata atau lebih, yang menunjukkan genus dan spesies.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Sistem yang berlaku disebut Binomial Nomenklatur, yang secara fundamental mengharuskan pemberian dua kata (atau lebih, jika ada subspesies) yang mewakili genus dan spesifik epitet (spesies).",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Jika ingin mencantumkan nama penemu hewan atau tumbuhan, bagaimana penulisan yang tepat?",
            options: [
              { id: "a", text: "Diletakkan di depan nama genus." },
              { id: "b", text: "Diletakkan di belakang nama spesies." },
              { id: "c", text: "Nama penemu harus dicetak miring." },
              { id: "d", text: "Nama penemu harus digarisbawahi." },
              {
                id: "e",
                text: "Nama penemu hanya boleh ditulis dalam bentuk nama singkatan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Nama penemu (autoritas) diletakkan di akhir susunan, yakni setelah kata yang menunjukkan spesies, dan ditulis menggunakan huruf tegak biasa (tidak miring).",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question:
              "Jika nama ilmiah akan ditulis tangan, bagaimana penulisan yang tepat?",
            options: [
              {
                id: "a",
                text: "Nama latin genus dan spesies ditulis dengan bentuk miring.",
              },
              {
                id: "b",
                text: "Nama latin genus dan spesies ditulis dengan bentuk biasa.",
              },
              {
                id: "c",
                text: "Nama latin genus dan spesies ditulis dengan digaris bawahi.",
              },
              {
                id: "d",
                text: "Nama latin genus dan spesies ditulis dengan huruf kapital.",
              },
              {
                id: "e",
                text: "Nama latin genus dan spesies ditulis dengan huruf latin.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Apabila diketik, nama taksonomi dicetak miring. Namun apabila ditulis tangan atau diketik menggunakan mesin tik manual, nama tersebut harus diberi garis bawah secara terpisah per katanya.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Pilihlah penulisan yang benar untuk nama ilmiah dalam konteks berikut:",
            options: [
              {
                id: "a",
                text: "<i>Loxodonta africana</i> adalah spesies gajah terbesar yang ada di Afrika.",
              },
              {
                id: "b",
                text: "<i>loxodonta africana</i> adalah spesies gajah terbesar yang ada di Afrika.",
              },
              {
                id: "c",
                text: "Loxodonta africana adalah spesies gajah terbesar yang ada di Afrika.",
              },
              {
                id: "d",
                text: "<i>Loxodonta Africana</i> adalah spesies gajah terbesar yang ada di Afrika.",
              },
              {
                id: "e",
                text: "Loxodonta africana adalah spesies gajah terbesar yang ada di Afrika.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Huruf pertama (Genus) kapital, huruf kedua (spesies) kecil, serta format cetak miring (<i>Loxodonta africana</i>).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              "Pilihlah penulisan yang benar untuk nama ilmiah dalam judul buku berikut:",
            options: [
              { id: "a", text: "<i>Lynx lynx</i>: The Eurasian Lynx" },
              { id: "b", text: "<i>Lynx Lynx</i>: The Eurasian Lynx" },
              { id: "c", text: "Lynx lynx: The Eurasian Lynx" },
              { id: "d", text: "<i>lynx lynx</i>: The Eurasian Lynx" },
              { id: "e", text: "Lynx Lynx: The Eurasian Lynx" },
            ],
            correctAnswer: "a",
            explanation:
              "Meskipun diletakkan di dalam judul (di mana kata-kata biasanya menggunakan awalan huruf kapital), aturan taksonomi tidak boleh dilanggar. Spesies tetap harus diawali dengan huruf kecil (<i>Lynx lynx</i>).",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Penulisan Nama Latin dalam Judul";
      moduleDoc.description =
        "Pelajari materi mengenai tata cara penulisan sistem klasifikasi ilmiah nama organisme beserta penerapannya.";
      moduleDoc.subcategory = "Penulisan Huruf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Penulisan Nama Latin dalam Judul",
        description:
          "Pelajari materi mengenai tata cara penulisan sistem klasifikasi ilmiah nama organisme beserta penerapannya.",
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

seedPenulisanNamaLatin();
