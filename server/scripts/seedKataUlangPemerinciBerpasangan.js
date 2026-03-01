const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKataUlangPemerinciBerpasangan = async () => {
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

    const targetId = "kata-ulang-pemerinci-berpasangan";

    const stepsData = [
      {
        title: "Materi: Kata Ulang",
        type: "reading",
        status: "active",
        description:
          "Pelajari materi mengenai jenis-jenis dan fungsi dari kata ulang, baik berdasarkan bentuk maupun maknanya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Kata Ulang</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Kata Ulang merupakan kata yang mengalami proses pengulangan, baik sebagian maupun seluruhnya, baik disertai perubahan bunyi maupun tidak.
              </p>
              <p class="text-body-l text-Grayscale-900 font-bold mb-2">Kata ulang memiliki beberapa fungsi, di antaranya:</p>
              <ul class="list-disc pl-5 mt-0 mb-6 space-y-1">
                <li>Memberikan penegasan atau penguatan makna</li>
                <li>Menyatakan tindakan berulang</li>
                <li>Memberikan nuansa emosional</li>
                <li>Membuat kalimat menjadi padu</li>
                <li>Digunakan sebagai perumpamaan.</li>
              </ul>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Jenis dan Contoh Kata Ulang (berdasarkan bentuk)</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4 font-bold">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Kata Ulang Penuh (Dwilingga)
                        <p class="font-normal mt-1">Dwilingga adalah bentuk pengulangan atas seluruh bentuk dasar tanpa variasi fonem dan afiksasi.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Orang = Orang-Orang</li>
                          <li>Ibu = Ibu-Ibu</li>
                        </ul>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        Kata Ulang Sebagian (Dwipurwa)
                        <p class="font-normal mt-1">Kata yang tidak diulang seluruhnya, melainkan hanya diulang sebagian saja.</p>
                        <ul class="list-disc pl-5 font-normal mt-2 space-y-2">
                          <li>Pengulangan sebagian dengan kata dasar bentuk tunggal.<br/>Contoh : Laki menjadi lelaki, bukan laki-laki</li>
                          <li>Pengulangan sebagian dengan kata dasar bentuk kompleks.<br/>Contoh : Dibesarkan menjadi dibesar-besarkan</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Kata Ulang Berimbuhan atau Afiksasi
                        <p class="font-normal mt-1">Proses pengulangan kata dasar dengan imbuhan (afiksasi) yang terjadi secara bersamaan. Imbuhan ini bisa ditambahkan pada salah satu atau kedua kata yang diulang.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Masak - masakan</li>
                          <li>Berlari - lari</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Kata Ulang Berubah Bunyi
                        <p class="font-normal mt-1">Perulangan yang terjadi dengan cara mengulang bentuk dasar disertai dengan perubahan bunyi pada salah satu suku.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div>
                            <p class="font-normal text-Primary-700">Perulangan dengan variasi vokal</p>
                            <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                              <li>Serba-serbi</li>
                              <li>Gerak-gerik</li>
                            </ul>
                          </div>
                          <div>
                            <p class="font-normal text-Primary-700">Perulangan dengan variasi konsonan</p>
                            <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                              <li>Lauk-pauk</li>
                              <li>Sayur-mayur</li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Kata Ulang Semu
                        <p class="font-normal mt-1">Pengulangan kata ini disebut semu karena tidak bermakna jika berdiri sendiri.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Kupu-kupu</li>
                          <li>Pura-pura</li>
                        </ul>
                      </li>

                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h4 class="text-h4 font-bold text-Primary-800 mb-4">Jenis dan Contoh Kata Ulang (berdasarkan makna)</h4>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    <ol class="list-decimal pl-5 mt-0 mb-4 space-y-4 font-bold">
                      
                      <li class="text-body-l text-Grayscale-900">
                        Bermakna Mirip/Menyerupai
                        <p class="font-normal mt-1">Menunjukkan adanya kesamaan, maupun keidentikkan baik untuk subjek maupun objek.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Motor - motoran</li>
                          <li>Orang - orangan</li>
                        </ul>
                      </li>
                      
                      <li class="text-body-l text-Grayscale-900">
                        Bermakna jamak
                        <p class="font-normal mt-1">Menunjukkan kondisi subjek atau objek dengan jumlah lebih dari satu.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Murid - murid</li>
                          <li>Buah - buahan</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Bermakna Saling
                        <p class="font-normal mt-1">Setiap kata pengulangannya memiliki makna untuk saling membalas.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Pandang - memandang</li>
                          <li>Bersalam - salaman</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Bermakna Kolektif / Bilangan
                        <p class="font-normal mt-1">Memiliki arti adanya suatu angka pembagi satu sama lainnya.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Mereka bermain basket dengan jumlah lima-lima di lapangan.</li>
                        </ul>
                      </li>

                      <li class="text-body-l text-Grayscale-900">
                        Menyatakan Pekerjaan yang Diulang - Ulang
                        <p class="font-normal mt-1">Memiliki arti perbuatan dasar yang dilakukan secara berulang.</p>
                        <p class="font-normal mt-2">Contoh :</p>
                        <ul class="list-disc pl-5 font-normal mt-1 space-y-1">
                          <li>Merobek - robek</li>
                          <li>Menarik - narik</li>
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
        title: "Materi: Kata Pemerinci dan Kata Berpasangan Tetap",
        type: "reading",
        status: "locked",
        description:
          "Pelajari materi lanjutan mengenai jenis-jenis kata pemerinci dan daftar kata berpasangan tetap.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Kata Pemerinci</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Kata Pemerinci atau Kata yang dipakai untuk memberikan suatu daftar. Kata Pemerinci dikelompokkan menjadi dua, yaitu :
              </p>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-8">
                <div class="grid grid-cols-2 text-center text-body-l font-bold text-Primary-900">
                  <div class="p-4 bg-Secondary-100 border-r border-b border-Secondary-300">Lengkap</div>
                  <div class="p-4 bg-Secondary-100 border-b border-Secondary-300">Taklengkap</div>
                  
                  <div class="p-4 border-r border-b border-Secondary-200 bg-Primary-50">..., terdiri atas ...</div>
                  <div class="p-4 border-b border-Secondary-200 bg-Secondary-50">..., antara lain ...</div>
                  
                  <div class="p-4 border-r border-b border-Secondary-200 bg-Primary-50">..., mencakup ...</div>
                  <div class="p-4 border-b border-Secondary-200 bg-Secondary-50">..., seperti ...</div>
                  
                  <div class="p-4 border-r border-b border-Secondary-200 bg-Primary-50">..., meliputi ...</div>
                  <div class="p-4 border-b border-Secondary-200 bg-Secondary-50">..., contohnya ...</div>
                  
                  <div class="p-4 border-r border-b border-Secondary-200 bg-Primary-50">..., yaitu ...</div>
                  <div class="p-4 border-b border-Secondary-200 bg-Secondary-50">..., misalnya ...</div>
                  
                  <div class="p-4 border-r border-Secondary-200 bg-Primary-50">..., yakni ...</div>
                  <div class="p-4 bg-Secondary-50"></div>
                </div>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">Kata Pemerinci - Lengkap</h5>
                  <ul class="list-disc pl-5 mt-0 mb-0 space-y-1 text-body-l text-Grayscale-900">
                    <li>
                      Kata Pemerinci lengkap <span class="text-Primary-700 font-bold">diikuti oleh semua anggotanya</span>.<br/>
                      <span class="font-bold">Contoh:</span> Pertemuan itu diikuti empat negara, yaitu Indonesia, Singapura, Malaysia, dan Brunei.
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">Kata Pemerinci - Taklengkap</h5>
                  <ul class="list-disc pl-5 mt-0 mb-0 space-y-1 text-body-l text-Grayscale-900">
                    <li>
                      Kata Pemerinci taklengkap <span class="text-Primary-700 font-bold">hanya diikuti oleh sebagian anggotanya</span>.<br/>
                      <span class="font-bold">Contoh:</span> Saya membeli banyak perabot baru, antara lain, meja dan kursi.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500 mt-6">
                <p class="text-body-l text-Grayscale-900">
                  Kata Pemerinci lengkap dapat diikuti oleh daftar yang ditutup dengan frasa <span class="font-bold">dan sebagainya (dsb.) , dan lain-lain (dll.) , atau dan seterusnya (dst).</span> Sebaliknya, Frasa-frasa ini <span class="text-red-600 font-bold">tidak dapat dipakai setelah Kata Pemerinci tidak lengkap</span>.
                </p>
              </div>

            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Kata Berpasangan Tetap</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Kata yang berpasangan tetap merupakan kombinasi dua kata atau frasa yang selalu muncul bersama-sama dalam bahasa tertentu dan dianggap sebagai pasangan yang tidak dapat dipisahkan. Kata pasangan kata ini memiliki makna tertentu ketika digunakan bersama, dan seringkali menggambarkan hubungan yang erat antara dua konsep atau objek.
              </p>

              <h4 class="text-h4 font-bold text-Grayscale-900 mb-3 mt-6">Contoh Kata Berpasangan Tetap</h4>
              <ul class="list-disc pl-5 mt-0 mb-0 space-y-2 text-body-l text-Grayscale-900">
                <li><span class="text-Primary-700 font-bold">Panas - Dingin</span> = Saat musim panas, cuaca bisa sangat panas di siang hari dan sangat dingin di malam hari.</li>
                <li><span class="text-Primary-700 font-bold">Kanan - Kiri</span> = Ketika Anda berada di persimpangan, periksalah ke kanan dan kiri sebelum melanjutkan perjalanan.</li>
                <li><span class="text-Primary-700 font-bold">Keluar - Masuk</span> = Ayu sedang mules sampai keluar-masuk kamar mandi.</li>
              </ul>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Kata Ulang",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/h0FwMjMn_P4",
        description:
          "Penjelasan mengenai klasifikasi kata ulang berdasarkan bentuk dan maknanya.",
      },
      {
        title: "Video: Kata Pemerinci dan Pasangan Tetap",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/dMKciMQj_5A",
        description:
          "Video lanjutan mengenai studi kasus dan contoh-contoh praktis kata pemerinci.",
      },
      {
        title: "Kuis Kata Ulang, Pemerinci, dan Pasangan Tetap",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question:
              "Kata ulang yang menyatakan berbalasan/resiprok/saling adalah...",
            options: [
              { id: "a", text: "Berhari-hari" },
              { id: "b", text: "Pandang-memandang" },
              { id: "c", text: "Sekali-kali" },
              { id: "d", text: "Gerak-gerik" },
              { id: "e", text: "Kering-kerontang" },
            ],
            correctAnswer: "b",
            explanation:
              "Bentuk perulangan berimbuhan me-N (pandang-memandang) memiliki makna perbuatan yang dilakukan oleh dua pihak secara berbalasan (saling memandang/resiprok).",
            points: 8,
          },
          {
            id: 2,
            type: "matrix",
            question:
              "Tentukan apakah pernyataan tentang kata ulang berikut ini Benar atau Salah!",
            rows: [
              {
                id: "r1",
                text: "Kata ulang utuh adalah kata yang diulang seutuhnya, misalnya jalan-jalan",
              },
              {
                id: "r2",
                text: "Kata ulang semu adalah kata ulang yang bukan kata ulang, misalnya kuda-kuda, burung-burung, beterbangan",
              },
              {
                id: "r3",
                text: "Makna pengulangan dari kata mobil-mobilan adalah menyerupai/tiruan",
              },
              {
                id: "r4",
                text: "Contoh kata ulang dwipurwa adalah bebatuan, dedaunan, berlari-lari",
              },
              {
                id: "r5",
                text: "Kata kura-kura, biri-biri, dan kupu-kupu merupakan kata ulang semu",
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
              "Pernyataan 2 Salah karena 'beterbangan' bukan kata ulang semu, melainkan kata berimbuhan. Pernyataan 4 Salah karena 'berlari-lari' bukan dwipurwa (pengulangan suku kata awal), melainkan kata ulang berimbuhan. Sisa pernyataan bernilai Benar.",
            points: 5,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Perulangan yang mempunyai arti “sangat…” terdapat pada kalimat...",
            options: [
              {
                id: "a",
                text: "Asik menangis ketakutan karena ada laba-laba.",
              },
              { id: "b", text: "Sepanjang hari ia hanya luntang-lantung." },
              {
                id: "c",
                text: "Rumah itu porak-poranda setelah tertimpa bencana.",
              },
              {
                id: "d",
                text: "Ibu menggali lubang untuk tanaman itu dalam-dalam.",
              },
              {
                id: "e",
                text: "Kumpulan anak itu sedang bermain rumah-rumahan.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Pengulangan kata sifat 'dalam' menjadi 'dalam-dalam' berfungsi untuk menegaskan intensitas, yang bermakna 'sangat dalam'.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Yang termasuk kata ulang penuh / dwilingga adalah...",
            options: [
              { id: "a", text: "Batu-batu" },
              { id: "b", text: "Asal-usul" },
              { id: "c", text: "Bolak-balik" },
              { id: "d", text: "Lauk-pauk" },
              { id: "e", text: "Ugal-ugalan" },
            ],
            correctAnswer: "a",
            explanation:
              "Dwilingga atau kata ulang utuh adalah pengulangan seluruh kata dasar tanpa adanya perubahan bunyi fonem atau penambahan imbuhan. Contoh yang tepat adalah 'batu-batu'.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Perulangan yang menyatakan makna “berulang kali / selalu / intensitas frekuentatif” adalah...",
            options: [
              { id: "a", text: "Selesai berdiskusi mereka berjalan-jalan" },
              { id: "b", text: "Dari tadi ia memanggil-manggil nama adiknya" },
              { id: "c", text: "Kupu-kupu itu sungguh indah dan menawan hati" },
              { id: "d", text: "Kakak membelikan sayur-mayur" },
              {
                id: "e",
                text: "Ia sudah hafal dengan gerak-gerik yang dilakukannya",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'memanggil-manggil' menunjukkan bahwa tindakan 'memanggil' tersebut dilakukan secara berulang-ulang atau berkali-kali (frekuentatif).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Berikut ini termasuk kata pemerinci tak lengkap, kecuali...",
            options: [
              { id: "a", text: "..., antara lain ..." },
              { id: "b", text: "..., seperti ..." },
              { id: "c", text: "..., contohnya ..." },
              { id: "d", text: "..., misalnya ..." },
              { id: "e", text: "..., meliputi ..." },
            ],
            correctAnswer: "e",
            explanation:
              "Kata 'meliputi' adalah kata pemerinci lengkap (exhaustive), yang berarti seluruh rincian yang ada disebutkan semuanya tanpa tersisa. Sementara opsi lain digunakan untuk memberikan sebagian contoh saja.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              "Kalimat dengan penggunaan kata pemerinci yang tepat, KECUALI...",
            options: [
              {
                id: "a",
                text: "Ketika berkemah banyak barang yang harus disiapkan, contohnya tenda dan bahan makanan.",
              },
              {
                id: "b",
                text: "Laporan tahunan perusahaan meliputi analisis keuangan, strategi pemasaran, dan pencapaian target.",
              },
              {
                id: "c",
                text: "Rapat tahunan itu diikuti oleh 3 sekolah, yakni SMAN 79, SMAN 88, dan SMAN 05.",
              },
              {
                id: "d",
                text: "Ibu membeli berbagai macam sayur, yaitu kangkung dan wortel.",
              },
              {
                id: "e",
                text: "Banyak buah yang kaya akan vitamin C, misalnya jeruk, kiwi, dan stroberi.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat D tidak tepat. Frasa 'berbagai macam' mengindikasikan banyak jenis, tetapi kata pemerinci 'yaitu' mewajibkan seluruh anggota disebutkan. Menyebutkan hanya dua jenis (kangkung dan wortel) tidak sesuai dengan penggunaan 'yaitu'. Seharusnya menggunakan 'seperti' atau 'misalnya'.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Manakah yang tidak termasuk kata berpasangan tetap...",
            options: [
              { id: "a", text: "Tua-muda" },
              { id: "b", text: "Asli-Akurat" },
              { id: "c", text: "Kaya-miskin" },
              { id: "d", text: "Makan-minum" },
              { id: "e", text: "Baik-buruk" },
            ],
            correctAnswer: "b",
            explanation:
              "Pasangan kata tetap yang umum untuk kata 'asli' adalah 'palsu'. 'Asli' dan 'akurat' tidak memiliki relasi pasangan tetap yang bermakna idiomatis maupun antonim mutlak.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Manakah yang termasuk kata berpasangan tetap...",
            options: [
              { id: "a", text: "Manis-asin" },
              { id: "b", text: "Suka-suka" },
              { id: "c", text: "Tangan-mulut" },
              { id: "d", text: "Terbit-tenggelam" },
              { id: "e", text: "Rendah-pendek" },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'terbit' dan 'tenggelam' adalah pasangan antonim tetap yang sangat lazim digunakan secara berurutan, contohnya saat merujuk pada pergerakan matahari.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Di kalangan pelajar telah tumbuh kebiasaan ... buku bacaan.",
            question:
              "Kata ulang yang tepat untuk melengkapi kalimat tersebut adalah...",
            options: [
              { id: "a", text: "Tukar-menukar" },
              { id: "b", text: "Menukar-nukar" },
              { id: "c", text: "Tukar-tukaran" },
              { id: "d", text: "Tukaran-tukaran" },
              { id: "e", text: "Menukar-tukar" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata ulang berimbuhan 'tukar-menukar' paling tepat karena menyatakan makna saling (resiprok) melakukan aktivitas pertukaran antar pelajar.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question:
              "Kalimat yang memuat kata ulang berubah bunyi dan kata ulang semu adalah...",
            options: [
              {
                id: "a",
                text: "Saya berkali-kali mencari ibu kandung anak ini",
              },
              {
                id: "b",
                text: "Tidak dapat diduga bahwa kuda-kuda rumah tercerai-berai",
              },
              { id: "c", text: "Ibu itu bolak-balik mengejar kupu-kupu" },
              { id: "d", text: "Mereka mencari lauk-pauk dan sayur-mayur" },
              {
                id: "e",
                text: "Beberapa helai dedaunan jatuh menimpai laba-laba",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pada kalimat C, kata 'bolak-balik' adalah kata ulang berubah bunyi (salin swara), sedangkan 'kupu-kupu' adalah kata ulang semu (tidak bisa dipisahkan bentuk dasarnya).",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Anak kecil itu berusaha menarik-narik benang layangan yang menyangkut di pohon.",
            question:
              "Makna kata ulang pada kalimat di atas sama dengan makna kata ulang pada kalimat...",
            options: [
              {
                id: "a",
                text: "Petugas terpaksa mengobrak-abrik persembunyian penjahat itu",
              },
              {
                id: "b",
                text: "Janganlah engkau suka mengada-ada, nanti akibatnya tidak baik!",
              },
              {
                id: "c",
                text: "Setelah pertandingan selesai, para atlet bersalam-salaman",
              },
              {
                id: "d",
                text: "Adi dan teman-temannya pergi ke sekolah memakai mobil",
              },
              {
                id: "e",
                text: "Karena kesal, ia memukul-mukulkan tangannya ke meja",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kata 'menarik-narik' bermakna melakukan pekerjaan secara berulang kali. Makna frekuentatif ini sama persis dengan tindakan 'memukul-mukulkan' pada opsi E.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question: "Berikut ini termasuk kata pemerinci lengkap, KECUALI...",
            options: [
              { id: "a", text: "..., mencakup ..." },
              { id: "b", text: "..., contohnya ..." },
              { id: "c", text: "..., meliputi ..." },
              { id: "d", text: "..., yaitu ..." },
              { id: "e", text: "..., terdiri atas ..." },
            ],
            correctAnswer: "b",
            explanation:
              "Mencakup, meliputi, yaitu, dan terdiri atas adalah kata pemerinci lengkap yang menuntut seluruh anggota disebutkan. Kata 'contohnya' digunakan untuk rincian tak lengkap.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Kata ulang berubah bunyi yang komponen pokoknya (dasarnya) terletak pada kata PERTAMA adalah...",
            options: [
              { id: "a", text: "Bolak-balik" },
              { id: "b", text: "Corat-coret" },
              { id: "c", text: "Lauk-pauk" },
              { id: "d", text: "Selang-seling" },
              { id: "e", text: "Desas-desus" },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'lauk-pauk' berasal dari kata dasar 'lauk' (komponen pertama). Sebaliknya, bolak-balik berasal dari kata dasar 'balik', corat-coret dari 'coret', dan selang-seling dari 'seling' (komponen dasar terletak di kata kedua).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Kegiatan seminar ini membahas berbagai topik, ______ teknologi, inovasi, dan keberlanjutan.",
            question:
              "Kata pemerinci yang tepat untuk melengkapi bagian rumpang di kalimat tersebut adalah...",
            options: [
              { id: "a", text: "antara lain" },
              { id: "b", text: "yaitu" },
              { id: "c", text: "yakni" },
              { id: "d", text: "adalah" },
              { id: "e", text: "merupakan" },
            ],
            correctAnswer: "a",
            explanation:
              "Terdapat kata 'berbagai topik', yang menunjukkan adanya banyak topik yang tidak terhitung jumlah pastinya. Namun, hanya disebutkan tiga buah rincian (teknologi, inovasi, keberlanjutan). Oleh karena perinciannya tidak lengkap secara utuh, digunakan kata pemerinci tak lengkap seperti 'antara lain' atau 'misalnya'.",
            points: 6,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kata Ulang, Pemerinci, Berpasangan Tetap";
      moduleDoc.description =
        "Pelajari materi mengenai jenis-jenis dan fungsi dari kata ulang, baik berdasarkan bentuk maupun maknanya serta fungsi dari kata pemerinci.";
      moduleDoc.subcategory = "Penulisan Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kata Ulang, Pemerinci, Berpasangan Tetap",
        description:
          "Pelajari materi mengenai jenis-jenis dan fungsi dari kata ulang, baik berdasarkan bentuk maupun maknanya serta fungsi dari kata pemerinci.",
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

seedKataUlangPemerinciBerpasangan();
