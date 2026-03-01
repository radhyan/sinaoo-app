const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKaidahPeleburanKTSP = async () => {
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

    const targetId = "kaidah-peleburan-ktsp";

    const stepsData = [
      {
        title: "Materi: Kaidah Peleburan KTSP",
        type: "reading",
        status: "active",
        description:
          "Pelajari materi mengenai aturan, konsep, dan contoh peleburan kata dengan awalan K, T, S, dan P yang diberi imbuhan me- dan pe-.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Definisi Peleburan "KTSP"</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed">
                Peleburan “KTSP” merujuk pada kata-kata dasar yang berawalan dengan huruf <span class="text-Primary-700 font-bold">K, T, S, dan P</span> maka kata tersebut secara otomatis akan <span class="text-Primary-700 font-bold">melebur jika diberi imbuhan me- dan pe-</span>.
              </p>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Konsep Penggunaan KTSP</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Kata dasar yang melebur adalah kata dasar berawalan huruf K, T, S, dan P dan akan <span class="text-Primary-700 font-bold">melebur hanya ketika huruf berikutnya berupa huruf vokal</span>.
                        <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 mt-0 mb-0 space-y-1">
                          <li>Kejar > <span class="text-red-600 font-bold">Meng</span>ejar</li>
                          <li>Tendang > <span class="text-red-600 font-bold">Men</span>endang</li>
                        </ul>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        Kata dasar berawalan huruf K, T, S, dan P dengan <span class="text-Primary-700 font-bold">huruf kedua berupa huruf konsonan tidak akan melebur</span>.
                        <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 mt-0 mb-0 space-y-1">
                          <li>Traktir > <span class="text-red-600 font-bold">Men</span>traktir</li>
                          <li>Kritik > <span class="text-red-600 font-bold">Meng</span>kritik</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Kata dasar berawalan huruf K, T, S, dan P dengan huruf kedua berupa huruf konsonan <span class="text-Primary-700 font-bold">bisa melebur hanya jika mendapat awalan pe-</span>.
                        <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 mt-0 mb-0 space-y-1">
                          <li>Proses > <span class="text-red-600 font-bold">Pem</span>roses</li>
                          <li>Protes > <span class="text-red-600 font-bold">Pem</span>rotes</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Beberapa aturan yang tadi disebutkan berlaku <span class="text-Primary-700 font-bold">kecuali</span> pada kata-kata tertentu, misalnya <span class="text-Primary-700 font-bold italic">mengkaji</span> dan <span class="text-Primary-700 font-bold italic">mempunyai</span>.
                        <ul class="list-disc pl-5 mt-2 mb-0 space-y-1">
                          <li>Kata “<span class="text-red-600 font-bold">meng</span>kaji” tidak dileburkan agar dapat dibedakan dengan kata “mengaji”.</li>
                          <li>Kata dasar “punya” menjadi “<span class="text-red-600 font-bold">mem</span>punyai”. Hal ini karena “memunyai” kurang diterima oleh masyarakat dan tidak disosialisasikan dengan baik.</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Perhatikan kata-kata yang mengalami <span class="text-Primary-700 font-bold">pengimbuhan me- dan pe- sekaligus</span> (imbuhan bertingkat). Pada kasus ini, harus diingat kata dasarnya.
                        <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 mt-0 mb-0 space-y-1">
                          <li>“Memperhatikan” bukan “Memerhatikan”, karena ia berasal dari kata “Hati” yang diberi imbuhan bertingkat <span class="text-red-600 font-bold">me-</span> dan <span class="text-red-600 font-bold">per-</span>.</li>
                        </ul>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Contoh Peleburan Kata KTSP</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg shadow-sm border border-Secondary-200">
                  <thead>
                    <tr class="bg-Secondary-100 text-Primary-900 font-heading">
                      <th class="p-4 border-b border-Secondary-200">Bentuk Benar (✓)</th>
                      <th class="p-4 border-b border-Secondary-200">Bentuk Salah (✗)</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-900">
                    <tr class="border-b border-Secondary-100">
                      <td class="p-4"><span class="text-Primary-700 font-bold">Menyiram</span></td>
                      <td class="p-4">Mensiram</td>
                    </tr>
                    <tr class="border-b border-Secondary-100 bg-Secondary-50">
                      <td class="p-4"><span class="text-Primary-700 font-bold">Mensterilkan</span></td>
                      <td class="p-4">Menyeterilkan</td>
                    </tr>
                    <tr class="border-b border-Secondary-100">
                      <td class="p-4"><span class="text-Primary-700 font-bold">Mengawal</span></td>
                      <td class="p-4">Mengkawal</td>
                    </tr>
                    <tr class="border-b border-Secondary-100 bg-Secondary-50">
                      <td class="p-4"><span class="text-Primary-700 font-bold">Memaku</span></td>
                      <td class="p-4">Mempaku</td>
                    </tr>
                    <tr>
                      <td class="p-4"><span class="text-Primary-700 font-bold">Menangkap</span></td>
                      <td class="p-4">Mentangkap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Kaidah Peleburan KTSP (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ImnNaU693Ao",
        description:
          "Penjelasan mengenai hukum peleburan KTSP beserta contoh-contohnya.",
      },
      {
        title: "Video: Kaidah Peleburan KTSP (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/qwhLYQIzWiM",
        description:
          "Video lanjutan mengenai studi kasus dan pengecualian peleburan.",
      },
      {
        title: "Kuis Kaidah Peleburan KTSP",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Jika sedang ujian kita tidak boleh ....",
            options: [
              { id: "a", text: "mencontek" },
              { id: "b", text: "menyontek" },
              { id: "c", text: "mengcontek" },
              { id: "d", text: "mecontek" },
              { id: "e", text: "mensontek" },
            ],
            correctAnswer: "a",
            explanation:
              "Berdasarkan kunci jawaban kuis ini, jawabannya adalah 'mencontek'. Namun, perlu dicatat bahwa bentuk baku menurut KBBI adalah 'menyontek' yang berasal dari kata dasar 'sontek' (huruf S luluh menjadi 'ny'). 'Mencontek' adalah bentuk tidak baku yang lazim digunakan dalam percakapan sehari-hari.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question:
              'Jika kata dasar “tulis” diberi awalan pe-, bagaimana bentuk penulisan "orang yang melakukan pekerjaan menulis"?',
            options: [
              { id: "a", text: "Petulis" },
              { id: "b", text: "Pentulis" },
              { id: "c", text: "Penulis" },
              { id: "d", text: "Penyenulis" },
              { id: "e", text: "Penetulis" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan hukum K-T-S-P, kata dasar yang diawali huruf T (tulis) jika mendapat awalan me-/pe- akan luluh menjadi N. Sehingga pe- + tulis menjadi 'penulis'.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Secara kaidah, kata “punya” seharusnya jika melebur menjadi “memunya”. Tetapi bentuk “mempunyai” adalah bentuk yang benar. Mengapa demikian?",
            options: [
              { id: "a", text: 'Karena kata "mempunyai" tidak bermakna' },
              {
                id: "b",
                text: "Karena aturan KTSP tidak berlaku pada konteks ini",
              },
              { id: "c", text: 'Karena "punya" bukan kata asli' },
              {
                id: "d",
                text: 'Karena masyarakat sudah terbiasa dengan "mempunyai"',
              },
              { id: "e", text: 'Karena "memunya" tidak lazim' },
            ],
            correctAnswer: "d",
            explanation:
              "Terdapat beberapa anomali atau pengecualian dalam bahasa Indonesia yang terjadi karena faktor historis dan kelaziman di masyarakat. Kata 'punya' seharusnya luluh menjadi 'memunya', namun karena penggunaannya sudah mengakar, KBBI membakukan kata 'mempunyai'.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Doni dan Adi ... pengetahuannya dengan membaca buku",
            options: [
              { id: "a", text: "Menambah" },
              { id: "b", text: "Mentambah" },
              { id: "c", text: "Metambah" },
              { id: "d", text: "Menyambah" },
              { id: "e", text: "Menetambah" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata dasar 'tambah' berawalan huruf T. Jika diberi awalan me-, huruf T akan luluh menjadi N, membentuk kata 'menambah'.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Peneliti akan ... data mereka sebelum menyimpulkan",
            options: [
              { id: "a", text: "Mengolah" },
              { id: "b", text: "Mengkaji" },
              { id: "c", text: "Menguji" },
              { id: "d", text: "Menkaji" },
              { id: "e", text: "Menyaji" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata dasar 'kaji' berawalan huruf K. Secara aturan harusnya luluh menjadi 'mengaji'. Namun, untuk membedakan maknanya dengan 'mengaji' (membaca Al-Quran), kata 'mengkaji' (menyelidiki/mempelajari) dikecualikan dan huruf K-nya dipertahankan agar tidak luluh.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Seluruh siswa kelas 9 ditugaskan untuk ... karangan cerita pendek",
            options: [
              { id: "a", text: "Menyulis" },
              { id: "b", text: "Menutlis" },
              { id: "c", text: "Mentulis" },
              { id: "d", text: "Metulis" },
              { id: "e", text: "Menulis" },
            ],
            correctAnswer: "e",
            explanation:
              "Kata dasar 'tulis' berawalan huruf T. Mendapat awalan me-, maka T luluh menjadi N, menghasilkan kata 'menulis'.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Ibu ... sayur - sayuran yang segar di supermarket",
            options: [
              { id: "a", text: "Mempilihi" },
              { id: "b", text: "Menyilih" },
              { id: "c", text: "Mepilih" },
              { id: "d", text: "Memilih" },
              { id: "e", text: "Mempilih" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata dasar 'pilih' berawalan huruf P. Menurut hukum K-T-S-P, P luluh menjadi M ketika bertemu dengan awalan me-, sehingga menjadi 'memilih'.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Seorang penjahit akan ... kain sebelum menjahitnya",
            options: [
              { id: "a", text: "Mempilah" },
              { id: "b", text: "Memilah" },
              { id: "c", text: "Menpilah" },
              { id: "d", text: "Menyilah" },
              { id: "e", text: "Mengpilah" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata dasar 'pilah' berawalan huruf P. Huruf P luluh menjadi M. Oleh karena itu, bentuk yang tepat adalah 'memilah'.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Kata saring + pe- (alat atau orang yang menyaring) adalah",
            options: [
              { id: "a", text: "Pensaringan" },
              { id: "b", text: "Penyaringkan" },
              { id: "c", text: "Pensaring" },
              { id: "d", text: "Penyaring" },
              { id: "e", text: "Pesaring" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata dasar 'saring' berawalan huruf S. Huruf S akan luluh menjadi 'ny' jika ditambahkan awalan pe- atau me-. Hasilnya adalah 'penyaring'.",
            points: 7,
          },
          {
            id: 10,
            type: "matrix",
            question: "Manakah penggunaan peleburan KTSP yang benar?",
            rows: [
              { id: "r1", text: "Mengkupas" },
              { id: "r2", text: "Menyalin" },
              { id: "r3", text: "Memesona" },
              { id: "r4", text: "Memeras" },
              { id: "r5", text: "Mensikat" },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "true",
              r4: "true",
              r5: "false",
            },
            explanation:
              "Mengkupas SALAH (K luluh jadi ng -> mengupas). Menyalin BENAR (S luluh jadi ny -> menyalin). Memesona BENAR (P luluh jadi m -> memesona). Memeras BENAR (P luluh jadi m -> memeras). Mensikat SALAH (S luluh jadi ny -> menyikat).",
            points: 10,
          },
          {
            id: 11,
            type: "multiple-choice",
            question: "Jika kata pukul diberi awalan me-, maka menjadi",
            options: [
              { id: "a", text: "Mepukul" },
              { id: "b", text: "Menpukul" },
              { id: "c", text: "Memukul" },
              { id: "d", text: "Mempukul" },
              { id: "e", text: "Mengpukul" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata dasar 'pukul' berawalan P. Saat dilekatkan awalan me-, huruf P luluh menjadi M, membentuk kata 'memukul'.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Aini ... paket untuk temannya yang berada di bandung",
            options: [
              { id: "a", text: "Menkirim" },
              { id: "b", text: "Mengkirim" },
              { id: "c", text: "Mekirim" },
              { id: "d", text: "Mengirimi" },
              { id: "e", text: "Mengirim" },
            ],
            correctAnswer: "e",
            explanation:
              "Kata dasar 'kirim' berawalan K. Menurut hukum K-T-S-P, K luluh menjadi 'ng', sehingga penulisannya adalah 'mengirim'.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question: 'Orang yang melakukan "proses" adalah',
            options: [
              { id: "a", text: "Peproses" },
              { id: "b", text: "Pemroses" },
              { id: "c", text: "Pemproses" },
              { id: "d", text: "Penroses" },
              { id: "e", text: "Pemporses" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata dasar 'proses' berawalan kluster konsonan 'pr-'. Sebenarnya, kluster konsonan tidak boleh luluh (memproses). Namun dalam pembentukan nominanya, KBBI mencatat bentuk 'pemroses' (P luluh) sebagai bentuk yang baku akibat anomali kelaziman linguistik Indonesia.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Ibu ... barang yang suda tidak terpakai untuk disumbangkan",
            options: [
              { id: "a", text: "Mensortir" },
              { id: "b", text: "Mesortir" },
              { id: "c", text: "Menyortir" },
              { id: "d", text: "Mensortiri" },
              { id: "e", text: "Menortir" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'sortir' adalah kata serapan yang telah sepenuhnya disesuaikan dengan ejaan Indonesia, sehingga ia tunduk pada aturan KTSP. Huruf S luluh menjadi 'ny', membentuk kata 'menyortir'.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question: 'Kata "tuduh" + pe- (orang yang menuduh) adalah',
            options: [
              { id: "a", text: "pentuduh" },
              { id: "b", text: "penyuduh" },
              { id: "c", text: "penuduh" },
              { id: "d", text: "petuduh" },
              { id: "e", text: "pengtuduh" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata dasar 'tuduh' berawalan huruf T. Ketika digabung dengan awalan pe-, huruf T luluh menjadi N. Hasilnya adalah 'penuduh'.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kaidah Peleburan KTSP";
      moduleDoc.description =
        "Pelajari materi mengenai aturan, konsep, dan contoh peleburan kata dengan awalan K, T, S, dan P yang diberi imbuhan me- dan pe-.";
      moduleDoc.subcategory = "Penulisan Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kaidah Peleburan KTSP",
        description:
          "Pelajari materi mengenai aturan, konsep, dan contoh peleburan kata dengan awalan K, T, S, dan P yang diberi imbuhan me- dan pe-.",
        subcategory: "Penulisan Kata",
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

seedKaidahPeleburanKTSP();
