const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedBahasaPanda = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Pengetahuan dan Pemahaman Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "bahasa-panda";

    const stepsData = [
      {
        title: "Materi: Bahasa Panda",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian bahasa panda (kriptografi sederhana) dan cara mengerjakan soalnya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Bahasa Panda -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Bahasa Panda</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Bahasa Panda?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    'Bahasa panda' adalah bagian dari ilmu <strong>kriptografi</strong>. Nama 'kriptografi' sendiri merupakan perpaduan antara dua kata Yunani, yaitu <em>kryptos</em> yang artinya tersembunyi, dan <em>graphein</em> yang artinya menulis. Dari perpaduan dua kata tersebut, dapat diartikan bahwa kriptografi adalah ilmu yang mempelajari tentang teknik matematika serta seni yang digunakan untuk <strong>menjaga kerahasiaan data dan keamanan suatu informasi</strong> dengan menggunakan tulisan atau kata-kata.
                  </p>
                </div>
              </div>
            </section>

            <!-- Cara Mengerjakan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Mengerjakan Soal Bahasa Panda</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Langkah-Langkah</h4>
                </div>
                <div class="p-6">
                  <ol class="list-decimal list-outside pl-5 space-y-3 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li><strong>Uraikan terlebih dahulu</strong> bahasa aneh yang terdapat pada soal.</li>
                    <li><strong>Mencari pola</strong> — Identifikasi kesamaan kata atau suku kata antara bahasa buatan dan terjemahannya.</li>
                    <li><strong>Eliminasi jawaban</strong> — Gunakan pola yang ditemukan untuk mengeliminasi pilihan jawaban yang tidak sesuai.</li>
                  </ol>
                </div>
              </div>
            </section>

            <!-- Contoh Soal -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Soal Bahasa Panda</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Soal</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Perhatikan kata-kata yang diterjemahkan dari bahasa buatan berikut!
                  </p>
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-4">
                    <li><strong>al!sdew</strong> berarti <em>peliharaan baru</em></li>
                    <li><strong>wefkohm</strong> berarti <em>baju lama</em></li>
                    <li><strong>lilkfo ukohmal!sm mil</strong> berarti <em>anak-anak menyukai baju baru</em></li>
                  </ul>
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Berdasarkan terjemahan di atas, bahasa buatan yang mungkin untuk kalimat <em>peliharaan menyukai anak-anak</em> adalah...
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <ul class="list-none space-y-1 text-body-l text-Grayscale-700 mb-0 mt-0">
                      <li>A. lilkfo ukohmdewm mil</li>
                      <li>B. lilkfo udewm mil</li>
                      <li>C. dew ulilkfom mil</li>
                      <li>D. dew ual!sm mil</li>
                      <li>E. al!s ulilkfom mil</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Pembahasan -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Pembahasan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Perhatikan kata yang sama pada kata yang sudah diartikan pada soal. Kata yang sama adalah sebagai berikut:
                  </p>
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-4">
                    <li><strong>al!sdew</strong> berarti peliharaan baru</li>
                    <li><strong>wefkohm</strong> berarti baju lama</li>
                    <li><strong>lilkfo ukohmal!sm mil</strong> berarti anak-anak menyukai baju baru</li>
                  </ul>

                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                        Dari kata yang sama di atas dapat dipastikan bahwa <strong>al!s</strong> berarti <strong>baru</strong> dan <strong>kohm</strong> berarti <strong>baju</strong>. Oleh karena itu, <strong>dew</strong> berarti <strong>peliharaan</strong> dan <strong>wef</strong> berarti <strong>lama</strong>.
                      </p>
                    </div>

                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                        Kemudian, perhatikan <strong>"menyukai baju baru"</strong> dalam bahasa buatannya adalah <strong>"ukohmal!sm mil"</strong>. Karena telah diketahui bahwa al!s berarti baru dan kohm berarti baju, maka untuk <strong>menyukai</strong> didapat <strong>u(sesuatu yang disuka)m mil</strong>.
                      </p>
                    </div>

                    <div class="bg-Primary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                        Selanjutnya, akan didapatkan bahwa <strong>lilkfo</strong> berarti <strong>anak-anak</strong>.
                      </p>
                    </div>

                    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                        Dengan demikian, bahasa buatan yang mungkin untuk <strong>"peliharaan menyukai anak-anak"</strong> adalah <strong>"dew ulilkfom mil"</strong>. <strong>(Jawaban: C)</strong>
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
        title: "Video: Bahasa Panda",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/8-o5_uXzAFU",
        description:
          "Video pembelajaran tentang bahasa panda (kriptografi sederhana).",
      },
      {
        title: "Kuis Bahasa Panda",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Perhatikan bahasa buatan berikut!\ntvanias: singa, seekor singa\nwabaduaw: banyak harimau\nrasahagaku: harimau, seekor harimau\nbawabaduawit fitien tvanias: seekor singa bertarung dengan banyak harimau",
            question:
              'Berdasarkan informasi di atas, penulisan untuk kalimat "seekor harimau bertarung dengan singa" adalah...',
            options: [
              { id: "a", text: "tvanias fitien rasahagaku" },
              { id: "b", text: "rasahagaku fitien tvanias" },
              { id: "c", text: "fitien batvaniasit wabaduaw" },
              { id: "d", text: "barasahagakuit fitien tvanias" },
              { id: "e", text: "batvaniasit fitien rasahagaku" },
            ],
            correctAnswer: "d",
            explanation:
              "Pola kalimat: [Objek dengan imbuhan ba-...-it] + [fitien (bertarung dengan)] + [Subjek]. Kalimat: 'Singa (Subjek) bertarung dengan banyak harimau (Objek)' = 'ba-wabaduaw-it fitien tvanias'. \nKalimat yang dicari: 'Seekor harimau bertarung dengan singa'. Maka polanya: ba-rasahagaku-it fitien tvanias.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            context:
              "Perhatikan bahasa buatan berikut!\ngulapi: seekor kucing\nlapikawu: banyak burung\ngulapifin: seekor kucing bermain\nlapikawufit gulapi: banyak burung bermain dengan seekor kucing",
            question: "Tentukan apakah pernyataan berikut benar atau salah.",
            rows: [
              {
                id: "r1",
                text: 'Kata "gulapifin" berarti "seekor kucing sedang bermain"',
              },
              {
                id: "r2",
                text: 'Kata penghubung dalam bahasa buatan di atas adalah "fit"',
              },
              {
                id: "r3",
                text: "Urutan kalimat dalam bahasa buatan selalu dimulai dari objek, lalu diikuti subjek",
              },
              {
                id: "r4",
                text: 'Kalimat "lapikawufit gulapi" berarti "seekor burung bermain dengan banyak kucing"',
              },
              {
                id: "r5",
                text: 'Kata "lapikawu" berarti "banyak burung"',
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "false",
              r4: "false",
              r5: "true",
            },
            explanation:
              "1. 'gulapifin' = kucing bermain (Benar). 2. 'fit' menempel pada kata pertama untuk arti 'bermain dengan' (Benar). 3. Struktur lapikawufit (S) gulapi (O) = Subjek di depan (Salah). 4. Artinya 'banyak burung bermain dengan kucing', bukan sebaliknya (Salah). 5. 'lapikawu' = banyak burung (Benar).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Perhatikan bahasa buatan berikut!\ndaniku: seekor anjing\nlapiran: banyak ikan\ndanikufit lapiran: seekor anjing bermain dengan banyak ikan",
            question:
              'Penulisan untuk "seekor anjing" dalam bahasa buatan tersebut adalah...',
            options: [
              { id: "a", text: "daniku" },
              { id: "b", text: "lapiran" },
              { id: "c", text: "danikufit" },
              { id: "d", text: "lapiku" },
              { id: "e", text: "danifit" },
            ],
            correctAnswer: "a",
            explanation:
              "Dari kamus yang diberikan, terjemahan langsung untuk 'seekor anjing' adalah 'daniku'.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Wang ing ung king = kemarin juga hujan\nNung ing ung = kemarin cerah\nMung = besok",
            question: "Maka, nung ing mung king memiliki arti…",
            options: [
              { id: "a", text: "Besok juga cerah" },
              { id: "b", text: "Kemarin dan besok cerah" },
              { id: "c", text: "Besok cerah dan juga hujan" },
              { id: "d", text: "Besok hujan, hari ini hujan" },
              { id: "e", text: "Besok juga hujan" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata yang sama: 'ing ung' ada di kalimat 1 & 2, artinya 'kemarin'. Maka 'wang' + 'king' = 'juga hujan'. Di kalimat 2: 'nung' = 'cerah'. Kalimat 1: jika 'king' = 'juga', maka 'wang' = 'hujan'. Kalimat tanya: nung (cerah) ing mung (besok) king (juga) -> Besok juga cerah.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Yi?oni = jalan pulang\nYoinino = jalan kembali\nO?ina = jalan pergi\nO?ina oyi?oni ioi?ai = jalan pulang menuju jalan pergi",
            question:
              "Bahasa buatan untuk jalan kembali menuju jalan pulang adalah…",
            options: [
              { id: "a", text: "Ioi?ai yi?oni oyoinino" },
              { id: "b", text: "Yoinino oyi?oni ioi?ai" },
              { id: "c", text: "O?ina oyi?oni ioi?ai" },
              { id: "d", text: "Yi?oni oyoinino ioi?ai" },
              { id: "e", text: "O?ina ioi?ai oyi?oni" },
            ],
            correctAnswer: "b",
            explanation:
              "Pola kalimat asli: 'jalan pulang menuju jalan pergi' ditulis 'O?ina oyi?oni ioi?ai'. Pola: Subjek di depan dengan awalan 'o' pada objek. Maka 'jalan kembali menuju jalan pulang': Yoinino (kembali) o-yi?oni (pulang) ioi?ai (menuju).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Okino = papa\nAkuno = ananda\nOkina = mama\nOkino nakuno aminik = ananda cinta papa",
            question: "Maka, bahasa kode dari papa cinta mama adalah…",
            options: [
              { id: "a", text: "Okina nakino aminik" },
              { id: "b", text: "Aminik nokina nakuno" },
              { id: "c", text: "Akuno akuno naminik" },
              { id: "d", text: "Akunoaminik nokina" },
              { id: "e", text: "Nokina aminik akuno" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat asli: 'ananda cinta papa' ditulis 'Okino (papa) n-akuno (ananda) aminik (cinta)'. Polanya: [Objek] n-[Subjek] [Predikat]. Maka 'papa cinta mama' (Subjek: papa, Objek: mama) ditulis: [mama] n-[papa] [cinta] -> Okina n-okino aminik -> Okina nakino aminik.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "Skain onkie = buku biru\nOnkie Mier = biru laut",
            question: "Bahasa panda dari buku bagus adalah…",
            options: [
              { id: "a", text: "Skain mier" },
              { id: "b", text: "Skain obrie" },
              { id: "c", text: "Onkie obrie" },
              { id: "d", text: "Obrie mier" },
              { id: "e", text: "Obrie skain" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata yang sama adalah 'onkie' = 'biru'. Maka 'Skain' = 'buku' dan 'Mier' = 'laut'. Buku = Skain. Bagus = kata baru (obrie). Maka 'buku bagus' = Skain obrie.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Rupi adalah kapten kapal: Rupi aw! sench0u nEfv.\nRojo sebagai wakil kapten: Rojo wa v!c3 sench0u.\nKapal yang berlayar: nEfv ing vm13.",
            question:
              '"Wakil kapten kapal yang berlayar adalah Rojo" dalam bahasa Nowa adalah….',
            options: [
              { id: "a", text: "v!ce senchOu nEfv ing vm1E aw! Rojo" },
              { id: "b", text: "v!c3 sench0u n3fv !ng vm13 wa Rojo" },
              { id: "c", text: "v!c3 senchOu nEfv ing vm13 wa Rojo" },
              { id: "d", text: "v!c3 sench0u nEfv ing vm13 aw! Rojo" },
              { id: "e", text: "v!c3 sench0u nEfu !ng vm!3 aw! Rojo" },
            ],
            correctAnswer: "d",
            explanation:
              "Kosakata: sench0u = kapten, nEfv = kapal, aw! = adalah, v!c3 = wakil, ing vm13 = yang berlayar. Wakil kapten kapal yang berlayar adalah Rojo = v!c3 sench0u nEfv ing vm13 aw! Rojo.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Kimul VorvtO eazH: Kimul bermain telepon genggam.\nMob3l l3g3ng !z 3g43 eazH: mubil ligan adalah permainan telepon genggam.\ncavex VorvtO: lelah bermain.",
            question:
              '"Kimul lelah bermain permainan mubil ligan" dalam bahasa tersebut adalah ….',
            options: [
              { id: "a", text: "Kimul cauex VorutO 3g43 mob3l l3g3ng" },
              { id: "b", text: "Kimul cavex Vorvt0 3gA3 mob3l !3g3ng" },
              { id: "c", text: "Kimul cavex VorvtO 3g43 Mob3l l3g3ng" },
              { id: "d", text: "Kimul cavex vorvt0 3g43 MobEl l3g3ng" },
              { id: "e", text: "Kimvl cauex Vorvt0 3g43 MobE! I3g3ng" },
            ],
            correctAnswer: "c",
            explanation:
              "Kosakata: Kimul = Kimul, VorvtO = bermain, eazH = telepon genggam, 3g43 = permainan, cavex = lelah. Kalimat: Kimul cavex VorvtO 3g43 Mob3l l3g3ng.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Skrify walle briskin bermakna bunga berwarna merah.\nNansra reine briskin bermakna baju berwarna kuning.",
            question:
              '"Baju bermotif bunga" dalam bahasa buatan tersebut adalah ….',
            options: [
              { id: "a", text: "nansra prisren briskin" },
              { id: "b", text: "nansra prisren skrify" },
              { id: "c", text: "nansra skrify prisren" },
              { id: "d", text: "reine prisren briskin" },
              { id: "e", text: "reine skrify prisren" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata yang sama: 'briskin' = 'berwarna'. Kalimat 1: Skrify = bunga, walle = merah. Kalimat 2: Nansra = baju, reine = kuning. 'Baju bermotif bunga' = Nansra skrify prisren.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "gnoe praque slobbrocho = Ibu membeli tas merah.\nbygok praque aajin = Kakak membeli sepatu.\nele aajin ku rocho = Sepatu adik berwarna merah.",
            question:
              "Kalimat yang berarti Ayah membeli mobil berwarna biru adalah ….",
            options: [
              { id: "a", text: "gnop praque slobb ku azgul" },
              { id: "b", text: "gnop praque doumba ku azgul" },
              { id: "c", text: "gnop praque doumbazgul" },
              { id: "d", text: "gnoe praque slobb ku rocho" },
              { id: "e", text: "gnoe praque doumba ku azgul" },
            ],
            correctAnswer: "b",
            explanation:
              "Kosakata: praque = membeli, rocho = merah, aajin = sepatu. gnoe = Ibu, bygok = Kakak. 'Slobbrocho' = tas (slobb) merah (rocho). 'ku' = berwarna. Ayah = gnop, mobil = doumba, biru = azgul. Maka: gnop praque doumba ku azgul.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "sing sang sung = tukang dagang sayur\nang sung = tukang daging\nning sung = tukang sayuran",
            question:
              "Berdasarkan informasi tersebut, kode yang mengartikan sayur dagangan adalah ….",
            options: [
              { id: "a", text: "sung sang" },
              { id: "b", text: "nung sang" },
              { id: "c", text: "sing nang" },
              { id: "d", text: "nang sing" },
              { id: "e", text: "sang nung" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'sung' muncul di semua kalimat = 'tukang'. Kalimat 1: sing = sayur, sang = dagang. Perubahan bentuk: s-ing -> n-ing (sayuran). Maka s-ang (dagang) -> n-ang (dagangan). Sayur dagangan = nang sing.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Crept trojs let nept = terus semangat untuk menang.\nCrept seff let zuts = terus melangkah untuk maju.",
            question:
              '"Untuk menang terus berusaha" dapat dituliskan sebagai ….',
            options: [
              { id: "a", text: "let nept crept zuts" },
              { id: "b", text: "let nash crept zuts" },
              { id: "c", text: "let crept trojs nash" },
              { id: "d", text: "let nash crept nept" },
              { id: "e", text: "let nept crept nash" },
            ],
            correctAnswer: "e",
            explanation:
              "Kata yang sama: Crept = terus, let = untuk. Maka: trojs = semangat, nept = menang, seff = melangkah, zuts = maju. Untuk (let) menang (nept) terus (crept) berusaha (nash) -> let nept crept nash.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "sako ilo nimalar = tangan kanan memberi\nsaka iro nitirowo = kaki kiri melangkah\nsako ilo p sako iro malariba rewo = tangan kanan dan tangan kiri pemberian alam",
            question:
              'Kalimat "mata kiri dan mata kanan melihat petunjuk alam" dapat dituliskan sebagai ….',
            options: [
              { id: "a", text: "sango iro p sako ilo nikoman sukur rewo" },
              { id: "b", text: "sango iro p sango ilo koman ni sukur rewo" },
              { id: "c", text: "sango iro sango ilo nikoman rewo sukur" },
              { id: "d", text: "sango iro p sango ilo nikoman sukur rewo" },
              { id: "e", text: "sango ilo p sango iro nikoman sukur rewoni" },
            ],
            correctAnswer: "d",
            explanation:
              "Kosakata: ilo = kanan, iro = kiri. sako = tangan, saka = kaki. p = dan. ni-malar = memberi, malar-iba = pemberian. rewo = alam. Mata = sango. Melihat = ni-koman. Petunjuk = sukur. Mata kiri (sango iro) dan (p) mata kanan (sango ilo) melihat (nikoman) petunjuk (sukur) alam (rewo).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Kriptografi: \nPYTHAGORAS -> QXUGBFPQBR\nCOPERNICUS -> DNQDSMJBVR",
            question: 'Maka "FAHRENHEIT" ditulis sebagai …',
            options: [
              { id: "a", text: "GBISFOIFJU" },
              { id: "b", text: "EZGQDMGDHS" },
              { id: "c", text: "EBGSDOGFHU" },
              { id: "d", text: "GZIQFMIDJS" },
              { id: "e", text: "GBIQDMGFJS" },
            ],
            correctAnswer: "d",
            explanation:
              "Pola pergeseran huruf (Caesar cipher bertingkat) selang-seling +1, -1: F(+1)=G, A(-1)=Z, H(+1)=I, R(-1)=Q, E(+1)=F, N(-1)=M, H(+1)=I, E(-1)=D, I(+1)=J, T(-1)=S. Hasilnya: GZIQFMIDJS.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Bahasa Panda";
      moduleDoc.description =
        "Materi mengenai bahasa panda (kriptografi sederhana) mencakup pengertian, cara mengerjakan soal, dan contoh pembahasan.";
      moduleDoc.subcategory = "Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Bahasa Panda",
        description:
          "Materi mengenai bahasa panda (kriptografi sederhana) mencakup pengertian, cara mengerjakan soal, dan contoh pembahasan.",
        subcategory: "Kata",
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

seedBahasaPanda();
