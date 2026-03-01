const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedImbuhanPerBerBe = async () => {
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

    const targetId = "imbuhan-per-ber-be";

    const stepsData = [
      {
        title: "Materi: Pengertian dan Jenis Afiks Letak",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian imbuhan (afiksasi) serta jenis-jenisnya berdasarkan letak dan frekuensi penggunaannya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Imbuhan/afiksasi</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Imbuhan merupakan suatu kata lain yang ditambahkan pada kata dasar. Fungsinya untuk membentuk kata baru dengan makna yang lebih jelas atau pun berbeda.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">A. Berdasarkan letaknya</h3>

              <div class="space-y-6">
                
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Prefiks
                  </h4>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Prefiks merupakan imbuhan yang diletakan <span class="font-bold text-red-600">di awal</span> kalimat/awalan.
                  </p>
                  <div class="bg-Grayscale-50 p-4 rounded text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300 space-y-2">
                    <p class="m-0"><span class="font-bold">Contoh prefiks:</span> Di- , ter- , per-/peng- , me-/mer- , meng-</p>
                    <p class="m-0"><span class="font-bold">Contoh kata:</span> Dibaca, tersenyum, pertumbuhan, pengabdian, melihat, merasa, mengarah.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Sufiks
                  </h4>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Sufiks merupakan imbuhan yang diletakkan di akhir kata dasar/akhiran.
                  </p>
                  <div class="bg-Grayscale-50 p-4 rounded text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300 space-y-2">
                    <p class="m-0"><span class="font-bold">Contoh sufiks:</span> -lah , -nya , -kan , -an , -i.</p>
                    <p class="m-0"><span class="font-bold">Contoh kata:</span> Bacalah, tunjukkan, makanan, warnai.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Konfiks
                  </h4>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Konfiks merupakan imbuhan yang terletak di awal dan akhir suatu kata dasar.
                  </p>
                  <div class="bg-Grayscale-50 p-4 rounded text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300 space-y-2">
                    <p class="m-0 font-bold">Contoh sufiks:</p>
                    <ul class="list-none m-0 pl-0 space-y-1">
                      <li>Di- ... -i</li>
                      <li>Di- ... -kan</li>
                      <li>Me-/meng- ... -kan</li>
                      <li>Me-/meng- ... -i</li>
                      <li>Pe-/peng- ... -an</li>
                    </ul>
                    <p class="m-0 mt-3"><span class="font-bold">Contoh kata:</span> Diwarnai, Dibacakan, mengasingkan, meragukan, pengarahan, pe, peregangan.</p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Materi: Afiks Berdasarkan Frekuensi dan Asal",
        type: "reading",
        status: "locked",
        description:
          "Memahami jenis imbuhan berdasarkan seberapa sering digunakan dan asal muasal bahasa pembentuknya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">B. Berdasarkan frekuensi penggunaannya</h3>

              <div class="space-y-6">
                
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Afiks produktif
                  </h4>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Afiks produktif merupakan afiks yang memiliki frekuensi penggunaan tinggi.
                  </p>
                  <div class="bg-Grayscale-50 p-4 rounded text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300 space-y-2">
                    <p class="m-0"><span class="font-bold">Contoh afiks produktif:</span> -wan , meng- , ber- , se- , peng-.</p>
                    <p class="m-0"><span class="font-bold">Contoh:</span> wartawan, semalam, mengajar, bermain, pengajar.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Afiks improduktif
                  </h4>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Afiks improduktif merupakan afiks yang frekuensi penggunaannya rendah.
                  </p>
                  <div class="bg-Grayscale-50 p-4 rounded text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300 space-y-2">
                    <p class="m-0"><span class="font-bold">Contoh afiks improduktif:</span> pra-, a-, -el, -er, -em, -wait, -is, -man, -da, dan -wi.</p>
                    <p class="m-0"><span class="font-bold">Contoh kata:</span> prasekolah, gemetar, gerigi, gerunyut, temali.</p>
                  </div>
                </div>

              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">C. Berdasarkan asal muasalnya</h3>

              <div class="space-y-6">
                
                <div>
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Sufiks dari bahasa sansakerta
                  </h4>
                  <div class="pl-4 md:pl-6 text-body-l text-Grayscale-900 border-l-2 border-Secondary-200 ml-2 space-y-1">
                    <p class="m-0"><span class="font-bold">Contoh imbuhan:</span> -wati , -wan , -man</p>
                    <p class="m-0"><span class="font-bold">Contoh kata:</span> wartawan, budiman, pragawati</p>
                  </div>
                </div>

                <div>
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Sufiks dari bahasa Arab
                  </h4>
                  <div class="pl-4 md:pl-6 text-body-l text-Grayscale-900 border-l-2 border-Secondary-200 ml-2 space-y-1">
                    <p class="m-0"><span class="font-bold">Contoh imbuhan:</span> -i , -wi , -at , -ah , -in.</p>
                    <p class="m-0"><span class="font-bold">Contoh kata:</span> islamiat, manusiawi, alami.</p>
                  </div>
                </div>

                <div>
                  <h4 class="text-h4 font-bold text-Primary-800 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Sufiks dari bahasa barat
                  </h4>
                  <div class="pl-4 md:pl-6 text-body-l text-Grayscale-900 border-l-2 border-Secondary-200 ml-2 space-y-1">
                    <p class="m-0"><span class="font-bold">Contoh imbuhan:</span> -logi , -tas , -isme , -ika , is.</p>
                    <p class="m-0"><span class="font-bold">Contoh kata:</span> ojektif, histologi, komunitas.</p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Materi: Hukum Peleburan (KTSP)",
        type: "reading",
        status: "locked",
        description:
          "Pahami lebih dalam mengenai hukum peleburan awalan (men- dan pen-) saat bertemu kata-kata yang diawali konsoan K, T, S, dan P beserta pengecualiannya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Hukum peleburan KTSP</h3>

              <div class="bg-Primary-50 p-6 rounded-xl border-l-4 border-Primary-500 mb-8 border border-Primary-200">
                <div class="flex flex-col md:flex-row items-center gap-6 justify-center">
                  <div class="text-center">
                    <div class="bg-white text-Primary-900 font-bold px-6 py-4 rounded-lg shadow-sm border border-Primary-200 text-h5">
                      KATA YANG<br/>BERAWALAN K-T-S-P
                    </div>
                  </div>
                  <div class="text-4xl text-Primary-400 font-bold transform rotate-90 md:rotate-0">
                    &#10140;
                  </div>
                  <div class="text-center">
                    <div class="bg-white text-Primary-900 font-bold px-6 py-4 rounded-lg shadow-sm border border-Primary-200 text-h5">
                      BERTEMU IMBUHAN<br/>ME- DAN PE-
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mb-8">
                <p class="text-h4 font-bold text-Grayscale-900">
                  Maka akan berlaku <span class="text-red-600 underline">peluluhan</span>
                </p>
              </div>

              <div class="bg-Grayscale-50 p-5 rounded-lg border-l-4 border-Grayscale-300 text-body-l space-y-3 mb-10">
                <p class="font-bold m-0 text-Grayscale-900">Contoh:</p>
                <ul class="list-none space-y-2 m-0 p-0 text-Grayscale-800 text-body-l">
                  <li>Kunci &rarr; mengunci</li>
                  <li>Tantang &rarr; menantang</li>
                  <li>Panjat &rarr; memanjat</li>
                  <li>Tari &rarr; menari</li>
                </ul>
              </div>

              <div class="space-y-10">
                
                <div>
                  <div class="bg-red-600 text-white p-5 rounded-lg font-bold text-h5 text-center mb-4 shadow-sm">
                    Huruf pertama kata dasar berlawanan K, T, S, P yang huruf keduanya konsonan tidak akan luluh.
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg border border-Grayscale-200 text-body-l">
                    <p class="font-bold m-0 text-Grayscale-900 mb-2">Contoh:</p>
                    <ul class="list-none space-y-1 m-0 p-0 text-Grayscale-800">
                      <li><span class="text-Primary-800 font-bold">Kritis</span> (huruf 2: r) &rarr; <span class="bg-white px-2 py-1 rounded border border-Grayscale-200">mengkritik</span> <span class="text-red-500 italic text-sm ml-2">(bukan mengritik)</span></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div class="bg-red-600 text-white p-5 rounded-lg font-bold text-h5 text-center mb-4 shadow-sm">
                    Huruf pertama kata dasar berlawanan K, T, S, P yang diikuti konsonan tetap luluh jika mendapat awalan -pe
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg border border-Grayscale-200 text-body-l">
                    <p class="font-bold m-0 text-Grayscale-900 mb-2">Contoh:</p>
                    <ul class="list-none space-y-2 m-0 p-0 text-Grayscale-800 text-body-l">
                      <li>Program &rarr; pemograman</li>
                      <li>Praktik &rarr; pemraktikan</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div class="bg-red-600 text-white p-5 rounded-lg font-bold text-h5 text-center mb-4 shadow-sm">
                    Jika terdapat pengimbuhan bertingkat, maka peluluhan tidak terjadi (me dan pe).
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg border border-Grayscale-200 text-body-l">
                    <p class="font-bold m-0 text-Grayscale-900 mb-2">Contoh:</p>
                    <ul class="list-none space-y-2 m-0 p-0 text-Grayscale-800">
                      <li class="flex items-center gap-2"><span class="text-Primary-800">memperhatikan</span> &rarr; <span class="text-red-600 line-through">bukan memerhatikan</span></li>
                      <li class="flex items-center gap-2"><span class="text-Primary-800">memperkaya</span> &rarr; <span class="text-red-600 line-through">bukan memerkaya</span></li>
                      <li class="flex items-center gap-2"><span class="text-Primary-800">memperlihatkan</span> &rarr; <span class="text-red-600 line-through">bukan memerlihatkan</span></li>
                    </ul>
                    <div class="mt-6 pt-4 border-t border-Grayscale-300">
                      <p class="text-red-600 font-bold m-0 flex items-start gap-2">
                        <span>*</span>
                        <span>Aturan tidak berlaku untuk kata: "mengkaji" dan "mempunyai" (Pengecualian).</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Kaidah Peluluhan (KTSP) Bagian 1",
        type: "video",
        status: "active",
        videoUrl: "https://www.youtube.com/embed/-204HD_t9p4",
        description:
          "Penjelasan mengenai aturan peluluhan awalan meN- dan peN- ketika bertemu dengan kata dasar berawalan huruf K, T, S, dan P.",
      },
      {
        title: "Video: Kaidah Peluluhan (KTSP) Bagian 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/a9KBK0BoksM",
        description:
          "Video lanjutan yang membahas pengecualian, contoh kasus, dan latihan kaidah peluluhan imbuhan dalam PUEBI.",
      },
      {
        title: "Kuis Imbuhan Per-, Ber-, dan Be-",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "matrix",
            question:
              "Dilarang memroduksi kekayaan alam secara ilegal. Semua tindakan memerkaya diri dalam bentuk apa pun tanpa perizinan tidak diperbolehkan.\n\nKesalahan penulisan kata di atas terdapat pada kata...",
            rows: [
              { id: "r1", text: "memerkaya" },
              { id: "r2", text: "memroduksi" },
              { id: "r3", text: "perizinan" },
              { id: "r4", text: "kekayaan" },
              { id: "r5", text: "tindakan" },
            ],
            columns: [
              { id: "true", text: "Salah Penulisan" },
              { id: "false", text: "Benar Penulisan" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "false",
              r4: "false",
              r5: "false",
            },
            explanation:
              "Kata 'memerkaya' salah karena kata dasarnya adalah 'kaya' yang huruf awalnya (K) luluh saat diberi awalan me-N menjadi 'mengaya', namun karena diberi imbuhan per- menjadi memperkaya. Kata 'memroduksi' salah karena huruf 'P' pada pro- (gugus konsonan) tidak luluh, seharusnya 'memproduksi'.",
            points: 5,
          },
          {
            id: 2,
            type: "matrix",
            question:
              "Tentukan apakah penulisan kalimat di bawah ini BENAR atau SALAH!",
            rows: [
              {
                id: "r1",
                text: "Pramugari itu memragakan cara melipat bangku",
              },
              { id: "r2", text: "Dia kemarin mengritik tarian ini" },
              { id: "r3", text: "Besok akan ada pemrosesan cuplikan video" },
              {
                id: "r4",
                text: "Malam ini aku akan mengaji ulang tulisan yang ia buat",
              },
              { id: "r5", text: "Pemraktikan itu dilakukan secara legal" },
            ],
            columns: [
              { id: "true", text: "BENAR" },
              { id: "false", text: "SALAH" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "false",
              r3: "true",
              r4: "false",
              r5: "true",
            },
            explanation:
              "r1 salah (seharusnya memperagakan/memeragakan, r2 salah (seharusnya mengkritik, gugus konsonan kr- tidak luluh), r4 salah (seharusnya mengkaji jika maksudnya menganalisis mendalam, mengaji untuk baca Al-Qur'an).",
            points: 5,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Kalimat dibawah ini salah aturan penulisannya, KECUALI...",
            options: [
              { id: "a", text: "Aku berkerja di rumah makan Pak Indarto" },
              {
                id: "b",
                text: "Lahan bermain di sekolah itu sudah dialih fungsikan menjadi kebun bunga",
              },
              {
                id: "c",
                text: "Aku merupakan seorang pegawai yang bertanggung jawab",
              },
              {
                id: "d",
                text: "Paman meminta pertanggung jawaban atas kelalaian yang dilakukan oleh pihak toko itu",
              },
              {
                id: "e",
                text: "Keikut sertaan donatur ini akan segera diproses",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Opsi A salah ('berkerja' seharusnya 'bekerja'). Opsi B salah ('dialih fungsikan' seharusnya dialihfungsikan karena konfiks). Opsi D salah ('pertanggung jawaban' seharusnya 'pertanggungjawaban'). Opsi E salah (keikutsertaan). Opsi C benar ('bertanggung jawab' ditulis terpisah karena hanya mendapat awalan ber-).",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "Ibuku sudah menanda tangani surat kontrak itu.",
            question: "Kalimat di atas dapat diperbaiki dengan cara...",
            options: [
              { id: "a", text: 'Mengubah kata "ibuku" menjadi "ibu ku"' },
              { id: "b", text: 'Menghilangkan kata "itu"' },
              {
                id: "c",
                text: 'Mengubah "menanda tangani" menjadi "menandatangani"',
              },
              {
                id: "d",
                text: 'Mengubah "menanda tangani" menjadi "ditandatangani"',
              },
              { id: "e", text: "Tidak ada yang perlu diubah" },
            ],
            correctAnswer: "c",
            explanation:
              "Bentuk gabungan kata 'tanda tangan' jika mendapat awalan dan akhiran sekaligus (me- dan -i) maka penulisannya harus dirangkai menjadi 'menandatangani'.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Memasuki fase pra ovulasi, hormon estrogen pada wanita akan meningkat.",
            question:
              "Kesalahan dalam penulisan kalimat di atas dapat diperbaiki dengan cara....",
            options: [
              { id: "a", text: 'Mengubah "memasuki" menjadi "masuk"' },
              { id: "b", text: 'Mengubah "meningkat" menjadi "mempertingkat"' },
              { id: "c", text: "Menghilangkan tanda koma" },
              { id: "d", text: 'Menghilangkan kata "akan"' },
              { id: "e", text: 'Mengubah "pra ovulasi" menjadi "praovulasi"' },
            ],
            correctAnswer: "e",
            explanation:
              "Bentuk terikat seperti 'pra-', 'pasca-', 'antar-', 'anti-', penulisannya harus dirangkai/digabungkan dengan kata yang mengikutinya. Oleh karena itu 'pra ovulasi' seharusnya 'praovulasi'.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "Raffi memenangkan pertandingan sepak bola itu",
            question: "Kalimat di atas dapat diperbaiki dengan....",
            options: [
              {
                id: "a",
                text: 'Mengubah "pertandingan" menjadi "per tandingan"',
              },
              { id: "b", text: 'Mengubah "sepak bola" menjadi "sepakbola"' },
              { id: "c", text: 'Mengubah "memenangkan" menjadi "memenangi"' },
              { id: "d", text: 'Mengubah "memenangkan" menjadi "menang"' },
              { id: "e", text: 'Menghilangkan kata "sepak"' },
            ],
            correctAnswer: "c",
            explanation:
              "Penggunaan akhiran -kan dan -i. Kata 'memenangkan' (menjadikan menang) tidak tepat digunakan jika fokusnya Raffi adalah pihak yang meraih kemenangan. Seharusnya menggunakan 'memenangi' (memperoleh kemenangan).",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "Aku merupakan penanggungjawab acara ini.",
            question:
              "Kalimat di atas mengalami kesalahan ejaan, perbaikan ejaan yang tepat adalah...",
            options: [
              {
                id: "a",
                text: 'Mengubah "penanggungjawab" menjadi "penanggung jawab"',
              },
              {
                id: "b",
                text: 'Mengubah "penanggungjawab" menjadi "pertanggungjawab"',
              },
              { id: "c", text: 'Mengubah "merupakan" menjadi "adalah"' },
              {
                id: "d",
                text: 'Mengubah "penanggungjawab" menjadi "dipertanggungjawabkan"',
              },
              { id: "e", text: "Tidak ada kesalahan." },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'tanggung jawab' jika hanya diberi awalan (pen-) maka penulisannya tetap dipisah menjadi 'penanggung jawab'.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Ia selalu mengomentari karya yang kubuat. Komentar yang ia lontarkan juga tak jarang terkesan negatif sehingga aku menjulukinya sebagai pengritik karya orang.",
            question:
              "Kesalahan dalam penulisan kalimat di atas dapat diperbaiki dengan cara...",
            options: [
              { id: "a", text: 'Mengubah "terkesan" menjadi "kesan"' },
              { id: "b", text: 'Mengubah "menjulukinya" menjadi "julukinya"' },
              { id: "c", text: 'Mengubah "lontarkan" menjadi "lontar"' },
              {
                id: "d",
                text: 'Mengubah "mengomentari" menjadi "mengkomentari"',
              },
              { id: "e", text: 'Mengubah "pengritik" menjadi "pengkritik"' },
            ],
            correctAnswer: "e",
            explanation:
              "Kata dasar 'kritik' diawali gugus konsonan 'kr-'. Menurut kaidah peluluhan KTSP, apabila huruf pertama pembentuk kata dasar berupa huruf rangkap/konsonan ganda (seperti pr-, kr-, tr-, sm-, dsb), maka KTSP tidak luluh. Oleh karena itu 'pengritik' seharusnya 'pengkritik'.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Acara ini dikoordinir dengan baik oleh Azril. Tak heran, Azril merupakan seorang siswa yang sangat bertanggung jawab dengan kewajibannya. Pantas saja ia berani mencalonkan diri sebagai koordinator lapangan acara ini.",
            question:
              "Kalimat di atas mengalami kesalahan penulisan (tidak baku) pada kata...",
            options: [
              { id: "a", text: "Bertanggung jawab" },
              { id: "b", text: "mencalonkan" },
              { id: "c", text: "merupakan" },
              { id: "d", text: "dikoordinir" },
              { id: "e", text: "kewajibannya" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'dikoordinir' tidak baku. Imbuhan pungut '-ir' dari bahasa Belanda sudah diserap ke dalam bahasa Indonesia menjadi '-asi', sehingga kata kerjanya yang baku adalah 'dikoordinasikan'.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              "Penggunaan konfiks (awalan dan akhiran sekaligus) yang benar pada gabungan kata di bawah adalah...",
            options: [
              { id: "a", text: "Pertanggung jawaban" },
              { id: "b", text: "Keikutsertaan" },
              { id: "c", text: "menanda tangani" },
              { id: "d", text: "ke keluargaan" },
              { id: "e", text: "Dibebaskan tugas" },
            ],
            correctAnswer: "b",
            explanation:
              "Konfiks 'ke-an' pada gabungan kata dasar 'ikut serta' ditulis serangkai menjadi 'keikutsertaan'. Opsi A seharusnya pertanggungjawaban, C seharusnya menandatangani, D seharusnya kekeluargaan, E seharusnya dibebastugaskan.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Pagi ini, aku akan datang ke sekolah untuk legalisasi ijazah SMA.",
            question: "Kalimat di atas dapat diperbaiki dengan cara...",
            options: [
              { id: "a", text: "Menghilangkan tanda koma" },
              { id: "b", text: 'Menghilangkan kata "akan"' },
              {
                id: "c",
                text: 'Menambahkan tanda koma setelah kata "sekolah"',
              },
              { id: "d", text: 'Menghilangkan "SMA"' },
              { id: "e", text: "Tidak ada yang perlu diperbaiki" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat tersebut telah benar. Penggunaan kata serapan yang sudah diindonesiakan 'legalisasi' (bukan legalisir) sudah sangat tepat.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Minuman ini dibuat dengan cara menyampur air lemon dengan air gula.\nOrang yang memiliki gangguan pencernaan tidak diperbolehkan untuk mengonsumsi minuman ini karena dapat menyebabkan naiknya asam lambung.",
            question: "Kalimat di atas dapat diperbaiki dengan cara...",
            options: [
              { id: "a", text: 'Mengubah "pencernaan" dengan "cerna"' },
              { id: "b", text: 'Mengubah "naiknya" menjadi "naik"' },
              {
                id: "c",
                text: 'Mengubah "mengonsumsi" menjadi "mengkonsumsi"',
              },
              {
                id: "d",
                text: 'Mengubah "diperbolehkan" menjadi "dibolehkan"',
              },
              { id: "e", text: 'Mengubah "menyampur" menjadi "mencampur"' },
            ],
            correctAnswer: "e",
            explanation:
              "Kata dasar 'campur' diawali oleh huruf 'C'. Menurut PUEBI, huruf awalan C, J, atau Ch tidak mengikuti kaidah luluh KTSP, sehingga saat diberikan awalan me-N, huruf c tetap dipertahankan, membentuk 'mencampur'. Kata 'mengonsumsi' pada kalimat kedua justru sudah benar (konsonan K pada kata dasar luluh).",
            points: 6,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Cairan kimia ini sangat menyengat, aku tidak tahan menyium baunya, temanku saja sampai pingsan karena baunya yang sangat tidak sedap.",
            question:
              "Kalimat di atas memiliki kesalahan dalam penulisan imbuhan, kata yang mengalami kesalahan dalam penulisan imbuhan adalah kata ....",
            options: [
              { id: "a", text: "menyengat" },
              { id: "b", text: "menyium" },
              { id: "c", text: "baunya" },
              { id: "d", text: "pingsan" },
              { id: "e", text: "sedap" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata dasar 'cium' diawali oleh huruf 'C'. Seperti aturan sebelumnya, huruf C tidak mengikuti kaidah KTSP, sehingga 'C' tidak luluh jika diberi awalan me-N. Bentuk baku yang benar adalah 'mencium'.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Malam ini aku akan pergi ke ATM untuk menransfer uang bulanan anakku. Semoga rezeki terus datang kepadaku agar anakku bisa berkuliah dengan tenang tanpa memikirkan biaya di perantauan.",
            question:
              "Kesalahan penulisan imbuhan pada kalimat di atas terletak pada kata...",
            options: [
              { id: "a", text: "Menransfer" },
              { id: "b", text: "Berkuliah" },
              { id: "c", text: "Perantauan" },
              { id: "d", text: "Bulanan" },
              { id: "e", text: "Kepadaku" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'transfer' memiliki gugus konsonan di awal kata (tr-). Kata yang memiliki gugus konsonan tidak akan luluh ketika diberi awalan (KTSP) me-N atau pe-N. Sehingga bentuk bakunya adalah 'mentransfer'.",
            points: 6,
          },
          {
            id: 15,
            type: "matrix",
            question:
              "Lengkapi kalimat rumpang di bawah ini secara berurutan dengan penulisan berimbuhan yang benar!\n\n... (salah) ... yang ia lakukan berakibat fatal, ... (tumbuh) ... anaknya menjadi terhambat akibat kelalaiannya dalam menjaga tumbuh kembang anaknya. Pemerintah sudah ... (beri) imbauan terkait hal ini.",
            rows: [
              { id: "r1", text: "kesalahan" },
              { id: "r2", text: "mempersalahkan" },
              { id: "r3", text: "pertumbuhan" },
              { id: "r4", text: "menumbuhkan" },
              { id: "r5", text: "memberi" },
              { id: "r6", text: "memberikan" },
            ],
            columns: [
              { id: "true", text: "Tepat" },
              { id: "false", text: "Tidak Tepat" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "true",
              r4: "false",
              r5: "true",
              r6: "false",
            },
            explanation:
              "Imbuhan yang tepat untuk melengkapi kalimat rumpang tersebut secara gramatikal dan kontekstual berturut-turut adalah: 'kesalahan' (kata benda), 'pertumbuhan' (kata benda abstrak yang berproses), dan 'memberi' (kata kerja aktif transitif).",
            points: 5,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Imbuhan Per-, Ber-, dan Be-";
      moduleDoc.description =
        "Pelajari kaidah dasar pelafalan kata berimbuhan dalam PUEBI serta kaidah peluluhan awalan (KTSP).";
      moduleDoc.subcategory = "Penulisan Imbuhan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Imbuhan Per-, Ber-, dan Be-",
        description:
          "Pelajari kaidah dasar pelafalan kata berimbuhan dalam PUEBI serta kaidah peluluhan awalan (KTSP).",
        subcategory: "Penulisan Imbuhan",
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

seedImbuhanPerBerBe();
