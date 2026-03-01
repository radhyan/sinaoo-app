const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedAkronimSingkatan = async () => {
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

    const targetId = "akronim-dan-singkatan";

    const stepsData = [
      {
        title: "Materi: Akronim dan Singkatan",
        type: "reading",
        status: "active",
        description:
          "Pelajari materi mengenai perbedaan serta tata cara penggunaan akronim dan singkatan yang sesuai dengan PUEBI/KBBI.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Definisi</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Menurut KBBI, singkatan dan akronim adalah dua hal yang berbeda. <span class="text-Primary-700 font-bold">Singkatan</span> adalah hasil singkatan yang berupa huruf atau gabungan huruf. Sedangkan <span class="text-Primary-700 font-bold">Akronim</span> adalah kependekan yang berupa gabungan huruf, suku kata, atau bagian lain yang ditulis dan dilafalkan sebagai kata.
              </p>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Perbedaan Singkatan dan Akronim:</h4>
              <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500 mb-6">
                <ul class="list-disc pl-5 mt-0 mb-0 space-y-2">
                  <li class="text-body-l text-Grayscale-900">Singkatan dan akronim dibedakan dari <span class="underline font-bold">cara pengucapannya.</span></li>
                  <li class="text-body-l text-Grayscale-900">Singkatan dan akronim dibedakan dari <span class="underline font-bold">cara penulisannya.</span></li>
                  <li class="text-body-l text-Grayscale-900">Pada <span class="underline font-bold">akronim</span>, kata yang disebutkan <span class="underline font-bold">mengandung makna yang sebenarnya.</span></li>
                  <li class="text-body-l text-Grayscale-900"><span class="underline font-bold">Singkatan tidak mengandung makna yang sebenarnya</span> dan cenderung <span class="underline font-bold">dibaca per huruf.</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Macam - Macam Penulisan Akronim</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4 font-bold">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Akronim Nama Diri
                        <p class="font-normal mt-1">Terdiri atas huruf awal setiap kata dan ditulis dengan huruf kapital tanpa titik.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>BIG = Badan Informasi Geospasial</li>
                          <li>LIPI = Lembaga Ilmu Pengetahuan Indonesia</li>
                        </ul>
                        <p class="font-normal mt-2">Akronim yang berupa gabungan suku kata dan ditulis dengan huruf kapital diawal.</p>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        Nama Diri Berupa Gabungan Suku Kata
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Suramadu = Surabaya Madura</li>
                          <li>Kemenristek = Kementerian Riset dan Teknologi</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Gabungan Huruf Awal dan Suku Kata
                        <p class="font-normal mt-1">Berupa gabungan huruf awal dan suku kata yang ditulis dengan huruf kecil.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>iptek = ilmu pengetahuan dan teknologi</li>
                          <li>pemilu = pemilihan umum</li>
                        </ul>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Macam - Macam Penulisan Singkatan</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4 font-bold">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Nama Orang, Gelar, Sapaan, Jabatan, dan Pangkat
                        <p class="font-normal mt-1">Penulisan nama orang, gelar, sapaan, jabatan, dan pangkat diikuti dengan tanda titik pada setiap unsur singkatan.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>W.R. Supratman = Wage Rudolf Supratman</li>
                          <li>M.B.A. = master of business administration</li>
                        </ul>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        Huruf Awal setiap Kata Nama Lembaga
                        <p class="font-normal mt-1">Terdiri dari huruf awal setiap kata lembaga dan ditulis dengan huruf kapital.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>PGRI = Persatuan Guru Republik Indonesia</li>
                          <li>UI = Universitas Indonesia</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Singkatan yang Terdiri dari Tiga Kata dengan Tanda Titik
                        <p class="font-normal mt-1">Singkatan yang terdiri dari tiga huruf atau lebih dan diikuti dengan tanda titik.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>yth. = yang terhormat</li>
                          <li>ttd. = tertanda</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Huruf Awal Setiap Kata
                        <p class="font-normal mt-1">Terdiri atas huruf awal setiap kata tapi bukan nama diri ditulis dengan huruf kapital tanpa titik.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>SIM = surat izin mengemudi</li>
                          <li>NIP = nomor induk pegawai</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Lambang Kimia dan Satuan Ukuran
                        <p class="font-normal mt-1">Kata yang merujuk pada lambang kimia, satuan ukur, takaran, timbangan, dan mata uang dapat ditulis singkat tanpa diikuti tanda titik.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>kg = kilogram</li>
                          <li>Rp = rupiah</li>
                        </ul>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Akronim dan Singkatan (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/0bz2Pw1dCGI",
        description:
          "Penjelasan mengenai pengertian, ciri-ciri, dan letak perbedaan antara akronim dan singkatan.",
      },
      {
        title: "Video: Akronim dan Singkatan (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ScBoowVxcqk",
        description:
          "Video lanjutan mengenai studi kasus, contoh penggunaan yang benar dan salah.",
      },
      {
        title: "Kuis Akronim dan Singkatan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question:
              "Penulisan gelar yang tepat sesuai dengan kaidah bahasa Indonesia adalah …",
            options: [
              { id: "a", text: "M. Rizky Akbar SH seorang pengacara terkenal" },
              {
                id: "b",
                text: "M. Rizky Akbar, S.H. seorang pengacara terkenal",
              },
              {
                id: "c",
                text: "M. Rizky Akbar SH. seorang pengacara terkenal",
              },
              {
                id: "d",
                text: "M. Rizky Akbar S.H. seorang pengacara terkenal",
              },
              {
                id: "e",
                text: "M. Rizky Akbar s.H. seorang pengacara terkenal",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Penulisan gelar akademik di belakang nama harus didahului dengan tanda koma (,). Setiap unsur singkatan gelar juga harus diakhiri dengan tanda titik (S.H. untuk Sarjana Hukum).",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question:
              "Gabungan huruf, suku kata, atau bagian lain yang ditulis dan dilafalkan sebagai kata dinamakan...",
            options: [
              { id: "a", text: "Sinonim" },
              { id: "b", text: "Singkatan" },
              { id: "c", text: "Akronim" },
              { id: "d", text: "Antonim" },
              { id: "e", text: "Pantomim" },
            ],
            correctAnswer: "c",
            explanation:
              "Akronim adalah kependekan yang berupa gabungan huruf atau suku kata atau bagian lain yang ditulis dan dilafalkan sebagai kata wajar (contoh: Puskesmas, pemilu, rudal).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Puskesmas merupakan akronim dari...",
            options: [
              { id: "a", text: "Pos kesehatan manusia" },
              { id: "b", text: "Pusat kesehatan manusia" },
              { id: "c", text: "Pos kesehatan masyarakat" },
              { id: "d", text: "Pusat kesehatan masyarakat" },
              { id: "e", text: "Tidak ada yang benar" },
            ],
            correctAnswer: "d",
            explanation:
              "Puskesmas adalah kependekan resmi dari Pusat Kesehatan Masyarakat.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "SIM = Surat Izin Mengemudi. Abreviasi apakah ini?",
            options: [
              { id: "a", text: "Akronim" },
              { id: "b", text: "Penggalan" },
              { id: "c", text: "Singkatan" },
              { id: "d", text: "Sinonim" },
              { id: "e", text: "Kontraksi" },
            ],
            correctAnswer: "c",
            explanation:
              "SIM merupakan singkatan karena dilafalkan huruf demi huruf (es-i-em), bukan dibaca sebagai satu kata utuh seperti akronim.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Yang manakah penulisan singkatan yang tepat?",
            options: [
              { id: "a", text: "K.U.H.P" },
              { id: "b", text: "KUHP" },
              { id: "c", text: "kuhp" },
              { id: "d", text: "K.UHP" },
              { id: "e", text: "k.u.h.p" },
            ],
            correctAnswer: "b",
            explanation:
              "Singkatan yang terdiri atas huruf awal setiap kata nama lembaga, dokumen resmi, atau ketatanegaraan ditulis dengan huruf kapital tanpa tanda titik.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Manakah kalimat di bawah ini yang penulisan akronimnya SALAH?",
            options: [
              { id: "a", text: "Saya tinggal tepat di samping Puskesmas." },
              { id: "b", text: "Tahun 2024 akan kembali dilaksanakan pemilu." },
              { id: "c", text: "Saya tinggal tepat di samping Bappenas." },
              { id: "d", text: "Ayah saya anggota abri." },
              { id: "e", text: "Dia bekerja di Bulog." },
            ],
            correctAnswer: "d",
            explanation:
              "Akronim nama diri yang berupa gabungan huruf awal dari deret kata ditulis seluruhnya dengan huruf kapital (ABRI - Angkatan Bersenjata Republik Indonesia). Penulisan 'abri' menggunakan huruf kecil adalah salah.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Penulisan singkatan yang benar adalah...",
            options: [
              { id: "a", text: "dkk" },
              { id: "b", text: "Ttd." },
              { id: "c", text: "yth" },
              { id: "d", text: "hlm." },
              { id: "e", text: "an." },
            ],
            correctAnswer: "d",
            explanation:
              "Singkatan 'hlm.' (halaman) sudah benar karena diakhiri satu titik. Kesalahan opsi lain: 'dkk' (kurang titik), 'Ttd.' (seharusnya ttd.), 'yth' (kurang titik), 'an.' (seharusnya a.n.).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question:
              "Tanggal 2 Mei merupakan tanggal yang diperingati sebagai ______<br/>Akronim yang tepat untuk melengkapi pernyataan di atas adalah...",
            options: [
              { id: "a", text: "Harkitnas" },
              { id: "b", text: "Hardiknas" },
              { id: "c", text: "Harpenas" },
              { id: "d", text: "Hardikbud" },
              { id: "e", text: "Harlah" },
            ],
            correctAnswer: "b",
            explanation:
              "Tanggal 2 Mei diperingati sebagai Hari Pendidikan Nasional yang diakronimkan menjadi Hardiknas.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "ROBOT adalah akronim dari...",
            options: [
              { id: "a", text: "Recycle official board of technology" },
              { id: "b", text: "Replying otobot board of technology" },
              { id: "c", text: "Restricted online board of technology" },
              { id: "d", text: "Residents official board of technology" },
              { id: "e", text: "Redesign otomotive board of technology" },
            ],
            correctAnswer: "d",
            explanation:
              "Meskipun secara etimologis 'robot' berasal dari bahasa Ceko 'robota' (pekerja paksa), dalam beberapa modul trivia teknologi sering diplesetkan/dibackronym-kan menjadi 'Residents official board of technology'.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              "Bentuk kependekan dari kata atau kalimat yang terdiri dari huruf atau gabungan huruf merupakan pengertian dari...",
            options: [
              { id: "a", text: "Singkatan" },
              { id: "b", text: "Sinonim" },
              { id: "c", text: "Akronim" },
              { id: "d", text: "Penggalan" },
              { id: "e", text: "Antonim" },
            ],
            correctAnswer: "a",
            explanation:
              "Singkatan adalah bentuk yang dipendekkan yang terdiri atas satu huruf atau lebih (misalnya DPR, dll., kg).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question: "Di bawah ini singkatan yang artinya SALAH adalah...",
            options: [
              { id: "a", text: "KBBI = Kamus Besar Bahasa Indonesia" },
              { id: "b", text: "KTP = Kartu Tanda Penduduk" },
              { id: "c", text: "VIP = Very Important People" },
              { id: "d", text: "SMP = Sekolah Menengah Pertama" },
              { id: "e", text: "PBB = Perserikatan Bangsa-Bangsa" },
            ],
            correctAnswer: "c",
            explanation:
              "Singkatan VIP yang tepat adalah 'Very Important Person', bukan People.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Di bawah ini akronim yang artinya SALAH adalah...",
            options: [
              {
                id: "a",
                text: "FISIP = Fakultas Ilmu Sosial dan Ilmu Politik",
              },
              { id: "b", text: "Dirut = Direktur Utama" },
              { id: "c", text: "Angkot = Angkutan Umum" },
              { id: "d", text: "Baksos = Bakti Sosial" },
              { id: "e", text: "Lapas = Lembaga Pelepasan" },
            ],
            correctAnswer: "e",
            explanation:
              "Lapas adalah akronim dari Lembaga Pemasyarakatan, bukan Lembaga Pelepasan.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question:
              "Manakah kalimat di bawah ini yang penulisan singkatannya SALAH?",
            options: [
              {
                id: "a",
                text: "Adik saya baru saja lulus dari SMP dan melanjutkan ke SMA.",
              },
              {
                id: "b",
                text: "Laporan keuangan perusahaan sudah diserahkan kepada DPRD.",
              },
              { id: "c", text: "Berat badan adik 30 kg." },
              { id: "d", text: "Tahun ini Karin akan berkuliah di ui." },
              {
                id: "e",
                text: "Surat tersebut ditujukan kepada PT Dirgantara.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Singkatan nama perguruan tinggi (Universitas Indonesia) yang terdiri dari huruf awal setiap kata harus ditulis dengan huruf kapital tanpa titik, yaitu 'UI', bukan 'ui'.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "RS = Rumah Sakit. Abreviasi apakah ini?",
            options: [
              { id: "a", text: "Akronim" },
              { id: "b", text: "Sinonim" },
              { id: "c", text: "Singkatan" },
              { id: "d", text: "Antonim" },
              { id: "e", text: "Penggalan" },
            ],
            correctAnswer: "c",
            explanation:
              "RS dilafalkan secara mengeja per huruf (er-es), sehingga dikategorikan sebagai singkatan, bukan akronim.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              'Kata sapaan "yang terhormat" jika dijadikan singkatan yang tepat (di tengah kalimat) akan berubah menjadi...',
            options: [
              { id: "a", text: "yth" },
              { id: "b", text: "y.t.h." },
              { id: "c", text: "Yth." },
              { id: "d", text: "Yth" },
              { id: "e", text: "yth." },
            ],
            correctAnswer: "e",
            explanation:
              "Sesuai pedoman umum, singkatan yang terdiri atas tiga huruf atau lebih diakhiri dengan satu tanda titik. Jika berada di tengah kalimat, ditulis huruf kecil menjadi 'yth.'. Jika di awal alamat surat, huruf pertama dikapitalisasi menjadi 'Yth.'.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Akronim dan Singkatan";
      moduleDoc.description =
        "Pelajari materi mengenai perbedaan serta tata cara penggunaan akronim dan singkatan yang sesuai dengan PUEBI/KBBI.";
      moduleDoc.subcategory = "Penulisan Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Akronim dan Singkatan",
        description:
          "Pelajari materi mengenai perbedaan serta tata cara penggunaan akronim dan singkatan yang sesuai dengan PUEBI/KBBI.",
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

seedAkronimSingkatan();
