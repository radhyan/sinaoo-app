const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedGabunganKata = async () => {
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

    const targetId = "gabungan-kata";

    const stepsData = [
      {
        title: "Materi: Pengertian dan Unsur Gabungan Kata",
        type: "reading",
        status: "active",
        description:
          "Pelajari materi mengenai pengertian, unsur pembentuk, dan jenis-jenis distribusi dari gabungan kata.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Definisi</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Gabungan kata merupakan kata majemuk yang terdiri dari sejumlah kata yang digabungkan dan membentuk makna baru. Berdasarkan PUEBI gabungan kata dapat ditulis terpisah atau bersambung. Gabungan kata selain dapat membentuk makna baru juga dapat membentuk kata, kata majemuk, dan frasa.
              </p>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Unsur Gabungan Kata</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4 font-bold text-body-l">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Gabungan kata yang membentuk kata
                        <p class="text-body-l font-normal mt-1 text-Grayscale-800">Gabungan kata yang terdiri atas gabungan antara kata bentuk terikat dengan kata dasar.</p>
                        <p class="text-body-l font-normal mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>pasca + sarjana = pascasarjana</li>
                          <li>ekstra + kurikuler = ekstrakurikuler</li>
                        </ul>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        Gabungan kata yang membentuk kata majemuk
                        <p class="text-body-l font-normal mt-1 text-Grayscale-800">Gabungan kata yang terdiri antara kata dasar dan kata dasar yang membentuk makna baru.</p>
                        <p class="text-body-l font-normal mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>anak emas</li>
                          <li>meja makan</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Gabungan kata yang membentuk frasa
                        <p class="text-body-l font-normal mt-1 text-Grayscale-800">Gabungan dua kata atau lebih yang memiliki sifat tidak predikatif (frasa).</p>
                        <p class="text-body-l font-normal mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>rumah besar</li>
                          <li>rambut panjang</li>
                        </ul>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Jenis Gabungan Kata</h4>
              
              <h5 class="text-h5 font-bold text-Grayscale-900 mb-3 ml-2">Gabungan Kata Distribusi</h5>
              <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500 mb-6">
                <ol class="list-decimal pl-5 mt-0 mb-0 space-y-4 text-body-l text-Grayscale-900">
                  <li class="text-body-l text-Grayscale-900">
                    <span class="font-bold">Gabungan kata eksosentris</span>
                    <p class="text-body-l mt-1">Bentuk gabungan kata yang tidak memiliki inti frasa yang dicirikan dengan pemakaian kata depan atau preposisi.</p>
                    <p class="text-body-l font-bold mt-2">Contoh :</p>
                    <ul class="list-disc pl-5 mt-1 space-y-1 text-body-l text-Grayscale-800">
                      <li>ke alun-alun</li>
                      <li>tahun kabisat</li>
                    </ul>
                  </li>
                  <li class="text-body-l text-Grayscale-900">
                    <span class="font-bold">Gabungan kata endosentris</span>
                    <p class="text-body-l mt-1 bg-Primary-50">Memiliki inti kata gabungan yang disebut frasa endosentris dan dibedakan menjadi tiga, yaitu:</p>
                    <ul class="list-disc pl-5 mt-2 space-y-3 text-body-l">
                      <li>
                        <span class="font-bold">Gabungan kata koordinatif</span> = Terdiri dari unsur-unsur setara yang di antara unsur-unsur tersebut dapat disisipi kata 'dan' serta 'atau'.<br/>
                        <span class="font-bold">Contoh :</span>
                        <ul class="list-disc pl-5 mt-1 text-body-l text-Grayscale-800">
                          <li>gula semut = gula dan semut</li>
                          <li>keluar masuk = keluar atau masuk</li>
                        </ul>
                      </li>
                      <li>
                        <span class="font-bold">Gabungan kata atributif</span> = Terdiri dari unsur-unsur tidak setara yang dalam hal ini bisa disisipi kata 'yang', 'tentang', atau 'untuk'.<br/>
                        <span class="font-bold">Contoh :</span>
                        <ul class="list-disc pl-5 mt-1 text-body-l text-Grayscale-800">
                          <li>anak manis > anak yang manis</li>
                          <li>buku petunjuk > buku untuk petunjuk</li>
                        </ul>
                      </li>
                      <li>
                        <span class="font-bold">Gabungan kata aposisi</span> = Terdiri dari unsur atributif yang berupa keterangan tambahan.<br/>
                        <span class="font-bold">Contoh :</span>
                        <ul class="list-disc pl-5 mt-1 text-body-l text-Grayscale-800">
                          <li>Kevin, pebulutangkis nasional</li>
                          <li>Rina, teman Adi</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

            </section>

          </div>
        `,
      },
      {
        title: "Materi: Kategori dan Tata Cara Penulisan",
        type: "reading",
        status: "locked",
        description:
          "Pelajari kategori gabungan kata serta pedoman penulisan gabungan kata berdasarkan aturan PUEBI.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Gabungan Kata Kategori</h3>
              
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4 text-body-l">
                      
                      <li class="text-body-l text-Grayscale-900">
                        <span class="font-bold">Kata gabungan nominal</span>
                        <p class="text-body-l mt-1 text-Grayscale-800">Kata berinduk satu yang induknya berupa kata benda atau nomina dan modifikatornya berupa nomina, verba, atau adjektiva yang disebut frasa nominal.</p>
                        <p class="text-body-l font-bold mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>kamar tidur</li>
                          <li>tembok tinggi</li>
                        </ul>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        <span class="font-bold">Gabungan kata adjektiva</span>
                        <p class="text-body-l mt-1 text-Grayscale-800">Kata berinduk satu yang induknya berupa kata kerja atau verba dan modifikatornya berupa partikel modal atau yang disebut sebagai frasa verbal.</p>
                        <p class="text-body-l font-bold mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>sangat kuat</li>
                          <li>terlalu keras</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        <span class="font-bold">Gabungan kata adverbia</span>
                        <p class="text-body-l mt-1 text-Grayscale-800">Kata berinduk satu yang induknya berupa keterangan adverbia dan modifikatornya berupa adverbial lain atau partikel yang disebut frasa adverbial.</p>
                        <p class="text-body-l font-bold mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>dengan senang</li>
                          <li>kurang lebih</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        <span class="font-bold">Kata gabungan preposisional</span>
                        <p class="text-body-l mt-1 text-Grayscale-800">Kata berinduk satu yang induknya berupa kata depan atau preposisi dan modifikatornya berupa nomina yang disebut frasa preposisional.</p>
                        <p class="text-body-l font-bold mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>ke kantor</li>
                          <li>di kamar</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        <span class="font-bold">Gabungan kata verbal</span>
                        <p class="text-body-l mt-1 text-Grayscale-800">Kata berinduk satu yang induknya berupa kata kerja atau verba dan modifikatornya berupa partikel modal yang disebut frasa verbal.</p>
                        <p class="text-body-l font-bold mt-2 text-Grayscale-800">Contoh :</p>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-body-l text-Grayscale-800">
                          <li>sudah datang</li>
                          <li>telah pergi</li>
                        </ul>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Tata Cara Penulisan Gabungan Kata</h3>

              <div class="space-y-6">
                
                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">1. Gabungan kata yang terdiri dari kata majemuk atau istilah khusus, ditulis dipisah</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2"><span class="font-bold">Contoh :</span> Acara di sekolah harus di hadiri oleh orang tua.</p>
                  <p class="text-body-l text-Grayscale-700 italic">Kata "orang tua" merupakan bentuk unsur gabungan kata yang terdiri dari kata majemuk dan penulisannya terpisah.</p>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">2. Gabungan kata yang berpotensi menimbulkan salah persepsi, ditulis dengan tanda penghubung</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2"><span class="font-bold">Contoh :</span> Anak-istri petinggi negara itu hadir di acara tepat waktu</p>
                  <p class="text-body-l text-Grayscale-700 italic">Kata "anak-istri" merujuk pada artian anak dan istri dari petinggi negara tersebut.</p>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">3. Gabungan kata yang diberi imbuhan pada awal atau akhir kata, ditulis terpisah</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2"><span class="font-bold">Contoh :</span> Para penonton bertepuk tangan setelah menyaksikan penampilan</p>
                  <p class="text-body-l text-Grayscale-700 italic">Kata "bertepuk tangan" merupakan bentuk gabungan kata yang mendapat awalan ber-</p>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">4. Gabungan kata yang mendapat awalan dan akhiran ditulis menyambung atau serangkai.</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2"><span class="font-bold">Contoh :</span> Pria itu telah dimintai pertanggungjawaban atas kasus tabrak lari</p>
                  <p class="text-body-l text-Grayscale-700 italic">Kata "pertanggungjawaban" merupakan gabungan kata yang meiliki awalan per- dan -an</p>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">5. Gabungan kata yang sudah padu ditulis serangkai</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2"><span class="font-bold">Contoh :</span> Olahraga pagi merupakan kebiasaan yang baik</p>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Gabungan Kata (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/9yrS3lxUE68",
        description:
          "Penjelasan visual mengenai pengertian, makna idiomatis, dan kaidah dasar penulisan gabungan kata.",
      },
      {
        title: "Video: Gabungan Kata (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/zttlVo9oGv8",
        description:
          "Video lanjutan mengenai studi kasus, perbedaan frasa majemuk, dan tata cara kepenulisan PUEBI.",
      },
      {
        title: "Kuis Gabungan Kata",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "matrix",
            question: "Tentukan apakah penulisan gabungan kata berikut Benar atau Salah sesuai dengan PUEBI!",
            rows: [
              { id: "r1", text: "Bertepuktangan" },
              { id: "r2", text: "Melipatgandakan" },
              { id: "r3", text: "Bergotongroyong" },
              { id: "r4", text: "Apalagi" },
              { id: "r5", text: "Keaneka ragaman" }
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" }
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "false",
              r4: "true",
              r5: "false"
            },
            explanation: "1) 'Bertepuk tangan' ditulis terpisah karena hanya mendapat awalan. 2) 'Melipatgandakan' ditulis serangkai karena mendapat awalan dan akhiran sekaligus (me-kan). 3) 'Bergotong royong' ditulis terpisah. 4) 'Apalagi' adalah gabungan kata yang sudah padu sehingga ditulis serangkai. 5) 'Keanekaragaman' ditulis serangkai karena mendapat awalan dan akhiran (ke-an).",
            points: 5
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Penulisan gabungan kata yang tidak tepat terdapat pada kalimat ...",
            options: [
              { id: "a", text: "Kami menyampaikan ikut belasungkawa atas wafatnya Ibu Kepala Sekolah" },
              { id: "b", text: "Menurut pengakuannya, tidak pernah sekalipun ia menggunakan obat terlarang itu" },
              { id: "c", text: "Sungguh pun sudah larut malam, keramaian di kota tersebut masih tetap terasa" },
              { id: "d", text: "Kami mengucapkan terima kasih kepada semua pihak yang telah membantu" },
              { id: "e", text: "Adakalanya, pengemudi taksi tersebut membawa pulang uang komisi yang hanya cukup untuk naik angkutan umum" }
            ],
            correctAnswer: "c",
            explanation: "Kata 'sungguhpun' adalah kata penghubung (konjungsi) yang sudah dianggap padu, sehingga penulisannya harus serangkai, bukan dipisah menjadi 'sungguh pun'.",
            points: 7
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Yang tidak termasuk gabungan kata yang membentuk frasa adalah ...",
            options: [
              { id: "a", text: "Gunung tinggi" },
              { id: "b", text: "Sangat cantik" },
              { id: "c", text: "Rambut coklat" },
              { id: "d", text: "Larut malam" },
              { id: "e", text: "Gelas kaca" }
            ],
            correctAnswer: "d",
            explanation: "Frasa adalah gabungan dua kata atau lebih yang bersifat non-predikatif. 'Larut malam' lebih dikategorikan sebagai kata majemuk/gabungan kata yang memiliki makna khusus (idiomatis/keterangan waktu), berbeda dengan frasa biasa yang maknanya masih bisa diurai langsung dari unsur-unsurnya.",
            points: 6
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Penulisan gabungan kata yang tepat adalah, KECUALI...",
            options: [
              { id: "a", text: "Karya wisata" },
              { id: "b", text: "Sukarela" },
              { id: "c", text: "Fotokopi" },
              { id: "d", text: "Sukacita" },
              { id: "e", text: "Saripati" }
            ],
            correctAnswer: "a",
            explanation: "Kata 'karyawisata' merupakan gabungan kata yang sudah padu, sehingga menurut KBBI penulisannya harus serangkai (tidak dipisah).",
            points: 6
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Gabungan kata <i>merdeka berdaulat</i> sepola dan setara dengan gabungan kata dalam kalimat...",
            options: [
              { id: "a", text: "Mereka mengobrol sambil sesekali bersenda gurau" },
              { id: "b", text: "Kami merasa senasib sepenanggungan" },
              { id: "c", text: "Pelari itu bersiap-siap sambil pasang kuda-kuda" },
              { id: "d", text: "Dia menjadi hilang semangat setelah mengetahui pembalap unggulannya kalah" },
              { id: "e", text: "Orang itu malu-malu kucing ketika dipersilakan makan oleh tuan rumah" }
            ],
            correctAnswer: "b",
            explanation: "Frasa 'merdeka berdaulat' adalah gabungan kata yang bersifat koordinatif (setara). Pola yang sama terdapat pada 'senasib sepenanggungan' yang juga merupakan dua kata yang kedudukannya setara.",
            points: 6
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "<i>Layanan streaming video dari Singapura, Hooq dinyatakan _____ (bangkrut) dan tak lagi beroperasi 30 April mendatang.</i><br/><br/>Gabungan kata (idiom) yang tepat untuk mengisi bagian kosong pada pernyataan di atas adalah...",
            options: [
              { id: "a", text: "banting tulang" },
              { id: "b", text: "gulung tikar" },
              { id: "c", text: "angkat tangan" },
              { id: "d", text: "gigit jari" },
              { id: "e", text: "unjuk gigi" }
            ],
            correctAnswer: "b",
            explanation: "Gabungan kata kiasan (idiom) yang memiliki makna 'bangkrut' atau tutup usaha adalah 'gulung tikar'.",
            points: 7
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Penulisan gabungan kata yang salah adalah...",
            options: [
              { id: "a", text: "pascasarjana" },
              { id: "b", text: "terima kasih" },
              { id: "c", text: "dilipatgandakan" },
              { id: "d", text: "menyebar luaskan" },
              { id: "e", text: "angkat tangan" }
            ],
            correctAnswer: "d",
            explanation: "Gabungan kata dasar (sebar luas) jika mendapat awalan dan akhiran sekaligus (me-kan) harus ditulis serangkai menjadi 'menyebarluaskan'.",
            points: 7
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Penulisan gabungan kata di bawah ini salah, KECUALI...",
            options: [
              { id: "a", text: "Puspa warna" },
              { id: "b", text: "Barangkali" },
              { id: "c", text: "Radio aktif" },
              { id: "d", text: "di bebastugaskan" },
              { id: "e", text: "dilipat gandakan" }
            ],
            correctAnswer: "b",
            explanation: "Kata 'barangkali' ditulis benar (serangkai karena sudah padu). Opsi lain salah; seharusnya: puspawarna, radioaktif, dibebastugaskan, dan dilipatgandakan.",
            points: 7
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Penulisan gabungan kata berikut yang salah adalah...",
            options: [
              { id: "a", text: "Ayo kita bergotong royong membersihkan sekolah" },
              { id: "b", text: "Kita tidak boleh berputus asa dalam meraih impian" },
              { id: "c", text: "Adi merupakan tulang punggung keluarganya" },
              { id: "d", text: "Mereka sedang melakukan kerjasama di kelas" },
              { id: "e", text: "Semua orang bertepuk tangan dengan meriah" }
            ],
            correctAnswer: "d",
            explanation: "Penulisan 'kerjasama' salah. Sesuai PUEBI, gabungan kata dasar ditulis terpisah jika tidak mendapat awalan dan akhiran secara bersamaan. Seharusnya ditulis 'kerja sama'.",
            points: 7
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Yang merupakan gabungan kata yang bersifat idiom adalah...",
            options: [
              { id: "a", text: "Banyak akal" },
              { id: "b", text: "Awan kelabu" },
              { id: "c", text: "Angkat tangan" },
              { id: "d", text: "Anak emas" },
              { id: "e", text: "Semua benar" }
            ],
            correctAnswer: "e",
            explanation: "Semua opsi merupakan gabungan kata yang memiliki makna kiasan (idiom). Anak emas (anak kesayangan), angkat tangan (menyerah), awan kelabu (kesedihan), dan banyak akal (cerdik).",
            points: 7
          },
          {
            id: 11,
            type: "multiple-choice",
            question: "Gabungan kata yang memiliki makna berbeda dengan kata dasar pembentuknya (bermakna kias) adalah...",
            options: [
              { id: "a", text: "Garam impor" },
              { id: "b", text: "Jarak jauh" },
              { id: "c", text: "Adu mulut" },
              { id: "d", text: "Lari cepat" },
              { id: "e", text: "Lompat tali" }
            ],
            correctAnswer: "c",
            explanation: "Adu mulut adalah idiom/ungkapan yang artinya 'bertengkar' atau 'berdebat'. Makna ini sudah bergeser dari makna leksikal kata 'adu' dan 'mulut'.",
            points: 7
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Gabungan kata yang sesuai dengan PUEBI adalah...",
            options: [
              { id: "a", text: "Bumi putra" },
              { id: "b", text: "Darma bakti" },
              { id: "c", text: "Sekali pun" },
              { id: "d", text: "Berputusasa" },
              { id: "e", text: "Belasungkawa" }
            ],
            correctAnswer: "e",
            explanation: "Kata 'belasungkawa' termasuk kelompok kata yang penulisannya sudah dianggap padu sehingga wajib ditulis serangkai. (Bumiputra dan darmabakti juga harus serangkai; berputus asa harus dipisah).",
            points: 7
          },
          {
            id: 13,
            type: "multiple-choice",
            question: "Penulisan gabungan kata dalam kalimat berikut benar, KECUALI...",
            options: [
              { id: "a", text: "Orang utan dapat kalian lihat di kebun binatang" },
              { id: "b", text: "Kaca mata kakak berwarna hijau" },
              { id: "c", text: "Saya tidak memberi tahu siapa pun soal kedatangannya" },
              { id: "d", text: "Astronot sedang berlatih beradaptasi di wilayah antigravitasi" },
              { id: "e", text: "Kami mengucapkan terima kasih kepada semua pihak yang telah membantu" }
            ],
            correctAnswer: "b",
            explanation: "Gabungan kata 'kaca mata' telah mengalami proses pembentukan kata majemuk yang padu, sehingga harus ditulis serangkai menjadi 'kacamata'.",
            points: 7
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Gabungan kata yang sesuai dengan PUEBI adalah...",
            options: [
              { id: "a", text: "Sapu tangan" },
              { id: "b", text: "Biomokuler" },
              { id: "c", text: "Dukacita" },
              { id: "d", text: "Adi daya" },
              { id: "e", "text: "Cipta kerja" }
            ],
            correctAnswer: "c",
            explanation: "Kata 'dukacita' adalah gabungan kata yang sudah padu dan harus ditulis serangkai (sama seperti sukacita, belasungkawa). Adidaya juga harus serangkai.",
            points: 7
          },
          {
            id: 15,
            type: "multiple-choice",
            question: "Dua kata yang disusun menjadi satu dan menghasilkan makna lain atau makna baru disebut...",
            options: [
              { id: "a", text: "Kata ulang" },
              { id: "b", text: "Kata serapan" },
              { id: "c", text: "Gabungan kata" },
              { id: "d", text: "Kata berimbuhan" },
              { id: "e", text: "Kata dasar" }
            ],
            correctAnswer: "c",
            explanation: "Gabungan kata (atau sering disebut kata majemuk) adalah penggabungan dua kata dasar atau lebih yang menghasilkan suatu kesatuan makna baru.",
            points: 7
          }
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Gabungan Kata";
      moduleDoc.description =
        "Pelajari materi mengenai pengertian, unsur pembentuk, jenis-jenis, dan tata cara penulisan gabungan kata (kata majemuk).";
      moduleDoc.subcategory = "Penulisan Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Gabungan Kata",
        description:
          "Pelajari materi mengenai pengertian, unsur pembentuk, jenis-jenis, dan tata cara penulisan gabungan kata (kata majemuk).",
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

seedGabunganKata();
