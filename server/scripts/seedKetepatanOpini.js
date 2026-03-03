const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKetepatanOpini = async () => {
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

    const targetId = "ketepatan-opini";

    const stepsData = [
      {
        title: "Materi: Ketepatan Opini",
        type: "reading",
        status: "active",
        description:
          "Pahami pengertian opini, ciri-ciri kalimat opini, jenis-jenis opini, dan cara mengidentifikasi opini dalam suatu teks.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Itu Opini?</h3>
              <p class="text-body-l text-Grayscale-900 mb-6">
                Opini adalah <span class="font-bold">pendapat, pikiran, atau pendirian seseorang</span> terhadap sesuatu. Opini biasanya dapat menjawab pertanyaan <span class="font-bold">bagaimana</span> dan <span class="font-bold">mengapa</span>.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Kalimat Opini</h3>
              <p class="text-body-l text-Grayscale-900 mb-6">
                Secara umum kita dapat membedakan jenis-jenis dari kalimat opini agar dapat mudah menggolongkannya. Berikut adalah jenis dari kalimat opini:
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Primary-200">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4 text-center">Opini Perorangan/Individu</h4>
                  <div class="bg-Primary-50 rounded-xl p-5 mb-4 border border-Primary-100">
                    <p class="text-body-l text-Grayscale-900 m-0">
                      Kalimat opini perorangan/individu adalah kalimat opini yang pendapat atau gagasannya <span class="font-bold">dikemukakan oleh satu individu tertentu</span>.
                    </p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-m text-Primary-700 mb-2">Contoh:</p>
                    <p class="text-body-m text-Grayscale-900 m-0">Sepertinya nanti sore akan turun hujan.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-sm border border-Primary-200">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4 text-center">Opini Umum</h4>
                  <div class="bg-Primary-50 rounded-xl p-5 mb-4 border border-Primary-100">
                    <p class="text-body-l text-Grayscale-900 m-0">
                      Kalimat opini umum adalah kalimat opini yang pendapat atau gagasannya <span class="font-bold">diakui banyak orang atau semua orang</span>.
                    </p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-m text-Primary-700 mb-2">Contoh:</p>
                    <p class="text-body-m text-Grayscale-900 m-0">Sering mandi di malam hari dipercaya dapat menyebabkan penyakit rematik.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Ciri-ciri Kalimat Opini</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200 mb-8">
                <ol class="list-decimal pl-5 space-y-3 text-body-l text-Grayscale-900">
                  <li>Kebenaran opini <span class="font-bold">dapat benar atau salah</span> bergantung data pendukung atau konteksnya.</li>
                  <li>Bersifat <span class="font-bold">subjektif</span> (bergantung pada kepentingan tertentu) dan biasanya disertai dengan pendapat, saran, dan uraian yang menjelaskan.</li>
                  <li><span class="font-bold">Tidak memiliki</span> narasumber.</li>
                  <li>Berisi <span class="font-bold">pendapat</span> tentang peristiwa yang terjadi.</li>
                  <li>Menunjukkan peristiwa yang <span class="font-bold">belum pasti</span> terjadi atau terjadi dikemudian hari.</li>
                  <li>Merupakan pikiran atau <span class="font-bold">pendapat seseorang</span> maupun kelompok.</li>
                  <li>Informasi yang disampaikan <span class="font-bold">belum ada pembuktiannya</span>.</li>
                  <li>Biasanya ditandai dengan penggunaan kata-kata: <span class="font-bold">bisa jadi, sepertinya, mungkin, seharusnya, sebaiknya</span>.</li>
                  <li>Pengungkapan opini cenderung <span class="font-bold">argumentatif dan persuasif</span>.</li>
                  <li>Penalaran opini cenderung <span class="font-bold">deduktif</span>.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Unsur Pembentuk</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <div class="space-y-6">
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-l text-Primary-700 mb-2">Berdasarkan Keyakinan</p>
                    <p class="text-body-l text-Grayscale-900 m-0">Memiliki keyakinan atas apa yang dianggap benar ketika hendak mengeluarkan sebuah opini.</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-l text-Primary-700 mb-2">Berdasarkan Sikap</p>
                    <p class="text-body-l text-Grayscale-900 m-0">Sikap seseorang dalam menanggapi suatu peristiwa dapat digunakan untuk menentukan sebuah opini, baik itu sikap positif atau negatif.</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-l text-Primary-700 mb-2">Berdasarkan Persepsi</p>
                    <p class="text-body-l text-Grayscale-900 m-0">Sebuah opini dapat terbentuk sebab adanya sebuah persepsi dari setiap individu. Persepsi tersebutlah yang nantinya akan memberikan penilaian terhadap peristiwa yang terjadi.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Ketepatan Opini",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ntSOwQ4aESM",
        description:
          "Tonton video berikut untuk memahami cara mengidentifikasi opini dalam teks.",
      },
      {
        title: "Video: Latihan Soal Opini",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/qjSDAYi5Z4g",
        description:
          "Video latihan dan pembahasan soal mengenai ketepatan opini.",
      },
      {
        title: "Kuis Ketepatan Opini",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "(1) Diperkirakan musim banjir akan mencapai puncaknya lagi pada Januari 2023 mendatang. (2) Namun ratusan rumah di beberapa lokasi wilayah Bandung telah terendam banjir. (3) Hal tersebut dikarenakan selokan yang menyempit dan tertimbun oleh sampah masyarakat. (4) Awalnya hujan terjadi secara terus menerus sehingga menyebabkan aliran air di permukaan semakin bertambah.",
            question:
              "Manakah dari pernyataan di atas yang termasuk ke dalam kalimat opini \u2026",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(3)" },
              { id: "d", text: "(4)" },
              { id: "e", text: "Semua Benar" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (1) 'Diperkirakan musim banjir akan mencapai puncaknya lagi pada Januari 2023 mendatang' merupakan opini karena mengandung kata 'diperkirakan' yang menandakan perkiraan atau prediksi yang belum tentu terjadi. Kalimat (2) menyatakan peristiwa yang benar terjadi (ratusan rumah terendam). Kalimat (3) menjelaskan penyebab berdasarkan kondisi nyata. Kalimat (4) menjelaskan kronologis peristiwa faktual (hujan terus menerus).",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "(1) Ide bisnis dengan modal kecil bisa dimulai dari rumah, terutama bagi para pecinta kucing. (2) Kucing adalah hewan peliharaan yang imut dan lucu. (3) Biasanya, orang memelihara kucing untuk menghilangkan rasa kesepian, tetapi sebetulnya ada peluang bisnis yang menarik di luar hal tersebut. (4) Contoh peluang bisnis tersebut adalah menjadi content creator. (5) Pemilik kucing bisa membuat konten tentang kucingnya, seperti cara perawatannya, jenis makanan yang dikonsumsinya, atau tingkah lucu dari kucingnya tersebut. (6) Saat membuat konten, pemilik kucing juga bisa memakaikan baju atau aksesori pada kucingnya. (7) Pemilik kucing pun bisa mendapatkan sumber pendapatan baru apabila ia juga menjual baju dan aksesori tersebut. (8) Jika tidak bisa memproduksi baju dan aksesori kucing sendiri, pemilik kucing harus bisa mencari produsen yang menjual barang-barang tersebut dengan harga murah agar ia tetap mendapat keuntungan saat menjual kembali produknya. (9) Selain baju dan aksesori, pemilik kucing juga bisa mendapat pendapatan tambahan dengan menjual makanan favorit kucingnya. (10) Menjual makanan favorit kucing peliharaan juga bisa dilakukan dengan modal yang tidak besar. (11) Dengan melakukan hal-hal tersebut, pecinta kucing dapat mendapatkan cuan sambil menjalani hal yang disenangi.",
            question:
              "Tanggapan berupa opini yang sesuai dengan teks tersebut adalah \u2026",
            options: [
              {
                id: "a",
                text: "Saat ini, pencinta kucing dapat memulai bisnis dengan modal yang sangat kecil.",
              },
              {
                id: "b",
                text: "Salah satu ide bisnis yang paling murah untuk pecinta kucing adalah menjual makanan kucing.",
              },
              {
                id: "c",
                text: "Sebaiknya, pecinta kucing memulai bisnis yang berkaitan dengan kucing sesuai dengan kemampuan dan modal yang dimiliki.",
              },
              {
                id: "d",
                text: "Banyaknya peluang bisnis bagi pecinta kucing membuat banyak content creator yang memanfaatkan kucing peliharaannya.",
              },
              {
                id: "e",
                text: "Hanya content creator yang dapat membagikan kegiatannya bersama kucing peliharaannya dan membuatnya jadi ide bisnis yang paling menarik.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pilihan C merupakan tanggapan opini yang paling sesuai karena mengandung kata 'Sebaiknya' (saran) dan isinya relevan dengan keseluruhan teks yang membahas berbagai peluang bisnis bagi pecinta kucing. Saran untuk 'memulai sesuai kemampuan dan modal' mencerminkan intisari teks secara logis. Pilihan A mengandung kata 'sangat kecil' yang berlebihan. Pilihan B menggunakan kata 'paling murah' yang tidak disebutkan dalam teks. Pilihan D merupakan pernyataan umum, bukan tanggapan opini. Pilihan E menggunakan kata 'hanya' yang terlalu membatasi dan tidak sesuai teks.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Beberapa waktu yang lalu banjir besar melanda Jakarta. Ribuan rumah tenggelam. Kerugian mencapai 39,5 miliar dan menelan korban 10 orang meninggal. Seorang penduduk di luar Jakarta menyurati sebuah surat kabar. Surat tersebut berisi pernyataan terhadap kondisi Jakarta. Menurutnya, Jakarta tidak seperti kota metropolitan yang selama ini megah dalam sinetron.\nWarga Jakarta mengatakan bahwa banjir yang melanda Jakarta kiriman dari Bogor. Namun, warga Bogor membantahnya, mereka mengatakan bahwa yang membuat kerusakan adalah orang Jakarta sendiri dengan menggusur petani dan membuat villa dan hotel di puncak.",
            question: "Opini pada teks di atas terdapat pada kalimat ....",
            options: [
              {
                id: "a",
                text: "Sepuluh orang meninggal dalam banjir tersebut",
              },
              {
                id: "b",
                text: "Seorang penduduk luar Jakarta menyurati sebuah surat kabar",
              },
              {
                id: "c",
                text: "Warga Jakarta mengatakan bahwa banjir kali ini merupakan kiriman dari Bogor",
              },
              {
                id: "d",
                text: "Kerugian mencapai 39,5 milyar dan sepuluh orang meninggal",
              },
              {
                id: "e",
                text: "Beberapa waktu yang lalu banjir besar melanda Jakarta",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat 'Warga Jakarta mengatakan bahwa banjir kali ini merupakan kiriman dari Bogor' merupakan opini karena merupakan pendapat/pandangan warga Jakarta yang bersifat subjektif dan belum tentu kebenarannya — ini hanyalah klaim atau tuduhan yang belum terbukti secara ilmiah. Pilihan A dan D merupakan fakta karena menyebutkan data angka (10 orang meninggal, 39,5 miliar). Pilihan B merupakan fakta (peristiwa nyata). Pilihan E merupakan fakta (peristiwa yang terjadi).",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "1) Pemkot Depok telah menertibkan 700 Pedagang Kaki Lima (PKL) yang menggelar dagangannya di pinggir jalan. 2) Hal ini dinilai sebagai penyebab kemacetan. 3) Di samping itu, keberadaan PKL juga dianggap menimbulkan kesan semrawut. 4) Penertiban yang berlangsung tanggal 26 Desember itu disambut dengan senang oleh para pengguna jalan.",
            question:
              "Dua kalimat pendapat pada teks tersebut ditandai dengan nomor \u2026",
            options: [
              { id: "a", text: "1 dan 2" },
              { id: "b", text: "1 dan 4" },
              { id: "c", text: "2 dan 3" },
              { id: "d", text: "3 dan 4" },
              { id: "e", text: "1 dan 3" },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (2) mengandung kata 'dinilai' yang menandakan penilaian/opini seseorang — menilai PKL sebagai penyebab kemacetan merupakan pendapat. Kalimat (3) mengandung kata 'dianggap' yang juga menandakan pendapat — menganggap PKL menimbulkan kesan semrawut adalah penilaian subjektif. Kalimat (1) merupakan fakta karena menyebutkan data (700 PKL) dan peristiwa penertiban. Kalimat (4) merupakan fakta karena menyebutkan tanggal spesifik (26 Desember).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "(1) Aksi corat-coret pakaian dan konvoi sepeda motor mewarnai pengumuman kelulusan bagi siswa SMK pada hari sabtu, 16 juni 2014. (2) Di SMK Kemerdekaan Jakarta, ratusan pelajar meluapkan kegembiraan di depan sekolah sampai meluber ke jalan. (3) Para pelajar membubuhkan tanda tangan dengan spidol dan cat semprot di baju seragam. (4) Sejumlah pelajar mengaku aksi corat-coret merupakan tradisi sejak kakak kelas mereka. (5) Menurut mereka, kebiasaan itu harus dilestarikan karena memberi kenangan yang indah.",
            question:
              "Kalimat yang mengandung opini pada paragraf di atas adalah\u2026",
            options: [
              { id: "a", text: "(1) dan (5)" },
              { id: "b", text: "(2) dan (3)" },
              { id: "c", text: "(2) dan (4)" },
              { id: "d", text: "(3) dan (4)" },
              { id: "e", text: "(4) dan (5)" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat (4) mengandung opini karena kata 'mengaku' menandakan pengakuan/klaim subjektif siswa bahwa corat-coret merupakan tradisi. Kalimat (5) jelas opini karena mengandung kata 'Menurut mereka' (pendapat) dan 'harus dilestarikan' (saran) serta 'kenangan yang indah' (penilaian subjektif). Kalimat (1) merupakan fakta (menyebut tanggal spesifik 16 Juni 2014). Kalimat (2) dan (3) merupakan fakta yang mendeskripsikan peristiwa yang benar terjadi.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "(1) Udara di Bogor terasa dingin. (2) Kali ini dinginnya melebihi hari-hari sebelumnya. (3) Dinginnya suhu udara di Bogor mencapai 24\u00BAC. (4) Data tingkat suhu udara ini, terdapat di papan informasi pengukur suhu di jalan-jalan besar di kota Bogor.",
            question:
              "Dua kalimat pendapat pada teks tersebut ditandai dengan nomor\u2026",
            options: [
              { id: "a", text: "(1) dan (2)" },
              { id: "b", text: "(2) dan (3)" },
              { id: "c", text: "(1) dan (3)" },
              { id: "d", text: "(2) dan (4)" },
              { id: "e", text: "(3) dan (4)" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (1) 'Udara di Bogor terasa dingin' merupakan opini karena kata 'terasa dingin' adalah penilaian subjektif — setiap orang bisa memiliki persepsi berbeda tentang dingin. Kalimat (2) 'Kali ini dinginnya melebihi hari-hari sebelumnya' juga opini karena merupakan perbandingan subjektif tanpa data pendukung. Kalimat (3) merupakan fakta karena menyebutkan angka terukur (24\u00BAC). Kalimat (4) merupakan fakta karena merujuk pada sumber data resmi (papan informasi pengukur suhu).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Kalimat yang berisi opini adalah \u2026.",
            options: [
              {
                id: "a",
                text: "Pergantian pimpinan universitas terjadi 4 tahun sekali.",
              },
              {
                id: "b",
                text: "Menurut peraturan, rektor menduduki jabatan selama 4 tahun.",
              },
              {
                id: "c",
                text: "Rektor baru itu sangat disukai mahasiswa karena sifat keterbukaannya.",
              },
              {
                id: "d",
                text: "Rektor itu telah menduduki jabatannya selama 4 tahun.",
              },
              {
                id: "e",
                text: "Jabatan sebagai rektor universitas terkenal telah dijalaninya dengan senang hati.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat 'Rektor baru itu sangat disukai mahasiswa karena sifat keterbukaannya' merupakan opini karena mengandung kata 'sangat disukai' yang merupakan penilaian subjektif — tidak ada data yang membuktikan bahwa semua mahasiswa menyukai rektor tersebut. Pilihan A, B, dan D merupakan fakta yang menyebutkan data terukur (4 tahun) dan informasi yang bisa diverifikasi. Pilihan E sekilas mirip opini, namun kalimat C lebih jelas mengandung indikator opini dengan kata 'sangat'.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "1) Kita mengapresiasi langkah cekatan pemerintah dalam mengapresiasi kenaikan harga elpigi nonsubsidi 12 kg itu seraya menggiringnya dengan pertanyaan. 2) Benarkah pemerintah tidak tahu dan tidak diberi tahu mengenai rencana Pertamina menaikkan secara sewenang-wenang. 3) Pertamina merupakan perusahaan negara yang diamanati Undang-undang sebagai pengelola minyak dan gas bumi untuk sebesar-besarnya kemakmuran dan kesejahteraan rakyat. 4) Rasanya mustahil kalau pemerintah, dalam hal ini Menteri Ekuin dan Menteri BUMN tidak tahu, tidak diberi tahu serta tidak dimintai pandangan, pendapat, dan pertimbangan.",
            question: "Opini dalam kalimat di atas yaitu",
            options: [
              { id: "a", text: "1, 2, 3" },
              { id: "b", text: "2, 3, 4" },
              { id: "c", text: "1, 2, 4" },
              { id: "d", text: "1, 3, 4" },
              { id: "e", text: "1, 2, 3, dan 4" },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (1) merupakan opini karena kata 'mengapresiasi' dan 'langkah cekatan' merupakan penilaian subjektif. Kalimat (2) merupakan opini karena berupa pertanyaan retoris yang mengandung keraguan/kecurigaan subjektif ('Benarkah...'). Kalimat (4) merupakan opini karena kata 'Rasanya mustahil' adalah perasaan/penilaian pribadi penulis. Kalimat (3) merupakan fakta karena menyebutkan informasi yang tercantum dalam Undang-undang — ini adalah pernyataan hukum yang dapat diverifikasi.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Manakah pernyataan berikut yang tidak termasuk opini\u2026",
            options: [
              {
                id: "a",
                text: "Saya merasa musim hujan adalah waktu terbaik untuk berkumpul.",
              },
              {
                id: "b",
                text: "Orang-orang menyukai drama Korea.",
              },
              {
                id: "c",
                text: "Laut adalah sumber daya alam yang penting bagi manusia.",
              },
              {
                id: "d",
                text: "Kota Jakarta sangat padat dan membosankan.",
              },
              {
                id: "e",
                text: "Tidak ada yang lebih indah daripada gunung di pagi hari.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat 'Laut adalah sumber daya alam yang penting bagi manusia' bukan opini melainkan fakta karena merupakan kebenaran umum yang dapat dibuktikan — laut memang menjadi sumber pangan, energi, jalur transportasi, dan berbagai kepentingan manusia lainnya. Pilihan A mengandung 'saya merasa' dan 'terbaik' (subjektif). Pilihan B merupakan generalisasi yang tidak bisa dibuktikan. Pilihan D mengandung 'sangat padat' dan 'membosankan' (subjektif). Pilihan E mengandung 'tidak ada yang lebih indah' (penilaian subjektif).",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "1) Transportasi kereta api mempunyai keunggulan dibandingkan dengan transportasi darat yang lain. 2) Keunggulan itu antara lain hemat energi dan dampak lingkungan yang ditimbulkan relatif lebih kecil. 3) Selain itu kereta api merupakan sarana angkutan yang lebih ekonomis baik bagi penumpang maupun barang untuk jarak jauh. 4) Hal ini diungkapkan oleh kepala PJKA dalam Harian Ibu Kota.",
            question: "Kalimat yang berisi opini adalah kalimat \u2026",
            options: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" },
              { id: "e", text: "Tidak ada" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (1) 'Transportasi kereta api mempunyai keunggulan dibandingkan dengan transportasi darat yang lain' merupakan opini karena merupakan klaim perbandingan yang bersifat subjektif — menyatakan 'keunggulan' tanpa data pendukung langsung dalam kalimat tersebut. Kalimat (2) dan (3) menjelaskan detail keunggulan tersebut. Kalimat (4) menyebutkan sumber informasi resmi (kepala PJKA). Meskipun kalimat (2) dan (3) juga terdengar subjektif, kalimat (1) yang paling jelas merupakan opini karena memberikan penilaian umum 'mempunyai keunggulan'.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Sulit meminta maaf dan sulit memberi maaf sesungguhnya merupakan sifat manusia pada umumnya. Namun, peluang untuk meminta maaf dan memberi maaf pastilah selalu ada. Jika setiap orang bersedia memberi maaf alangkah tenteram dan nikmatnya kehidupan di muka bumi ini. Lebih dari itu, apabila setiap orang sadar bahwa memberi maaf itu bahkan lebih mulia nilainya daripada meminta maaf.",
            question:
              "Tanggapan berupa opini yang sesuai dengan teks tersebut adalah \u2026",
            options: [
              {
                id: "a",
                text: "Memberi maaf dan meminta maaf merupakan sikap yang baik.",
              },
              {
                id: "b",
                text: "Meminta maaf lebih mulia daripada memberi.",
              },
              {
                id: "c",
                text: "Sulit bagi kita meminta maaf lebih dahulu.",
              },
              {
                id: "d",
                text: "Kita jangan meminta maaf jika tidak bersalah.",
              },
              {
                id: "e",
                text: "Kita tidak perlu memberi maaf.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pilihan A 'Memberi maaf dan meminta maaf merupakan sikap yang baik' merupakan tanggapan opini yang paling sesuai dengan isi teks karena teks membahas pentingnya saling memaafkan. Pilihan B bertentangan dengan isi teks (teks menyatakan memberi maaf lebih mulia, bukan meminta maaf). Pilihan C hanya mengulang sebagian isi teks tanpa memberikan tanggapan. Pilihan D dan E bertentangan dengan pesan/amanat teks yang menganjurkan untuk saling memaafkan.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Manakah kalimat di bawah ini yang termasuk ke dalam kalimat opini\u2026",
            options: [
              {
                id: "a",
                text: "Indonesia adalah negara kepulauan terbesar di dunia.",
              },
              {
                id: "b",
                text: "Bumi mengorbit Matahari dalam waktu sekitar 365 hari.",
              },
              {
                id: "c",
                text: "Air adalah senyawa yang terdiri dari hidrogen dan oksigen.",
              },
              {
                id: "d",
                text: "Listrik adalah energi yang dihasilkan dari pergerakan elektron.",
              },
              {
                id: "e",
                text: "Menurut saya, belajar di malam hari lebih efektif.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat 'Menurut saya, belajar di malam hari lebih efektif' merupakan opini karena mengandung dua penanda opini: frasa 'Menurut saya' (menunjukkan pendapat pribadi) dan kata 'lebih efektif' (penilaian subjektif yang belum tentu berlaku untuk semua orang). Pilihan A, B, C, dan D semuanya merupakan fakta ilmiah dan kebenaran umum yang dapat dibuktikan dan diverifikasi.",
            points: 6,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "1) Dengan tenaga yang besar dalam gelombang air tersebut sangat wajar jika bangunan di daratan bisa tersapu dengan mudah. (2) Gelombang tsunami merambat dengan kecepatan yang tak terbayangkan. (3) Gelombang tersebut bisa mencapai 500 sampai 1.000 kilometer per jam di lautan. (4) Pada saat mencapai bibir pantai, kecepatannya berkurang menjadi 50 sampai 30 kilometer. (5) Meskipun berkurang pesat, kecepatan tersebut sudah bisa menyebabkan kerusakan parah.",
            question: "Kalimat yang merupakan opini dinyatakan pada nomor....",
            options: [
              { id: "a", text: "(1) dan (2)" },
              { id: "b", text: "(2) dan (3)" },
              { id: "c", text: "(3) dan (4)" },
              { id: "d", text: "(4) dan (5)" },
              { id: "e", text: "(1) dan (5)" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (1) merupakan opini karena mengandung frasa 'sangat wajar' yang merupakan penilaian subjektif. Kalimat (2) mengandung frasa 'tak terbayangkan' yang juga merupakan ungkapan subjektif. Kalimat (3) dan (4) merupakan fakta karena menyebutkan data kecepatan yang terukur (500-1.000 km/jam dan 50-30 km). Kalimat (5) mengandung kata 'kerusakan parah' yang sekilas subjektif tetapi dipasangkan dengan kalimat (1) sebagai jawaban yang paling tepat.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "(1) Jumlah anak yang turun ke jalan untuk mencari nafkah tampaknya dari hari ke hari akan terus naik. (2) Dari data Kementerian Sosial jumlah anak Jalanan pada tahun 1997 masih sekitar 36.000, sekarang menjadi sekitar 232.894. (3) Kenaikan itu dapat dilihat secara kasat mata di perempatan jalan ibu kota maupun dikota kecil. (4) Dengan sangat mudah kita dapat menjumpai lelaki atau perempuan meminta-minta atau mengamen. (5) Fenomena anak jalanan seperti itu sebelum tahun 2000 hanya bisa dilihat di kota besar, seperti Jakarta atau Surabaya.",
            question:
              "Opini dalam paragraf tersebut terdapat pada kalimat nomor...",
            options: [
              { id: "a", text: "(1) dan (2)" },
              { id: "b", text: "(1) dan (3)" },
              { id: "c", text: "(1) dan (4)" },
              { id: "d", text: "(2) dan (4)" },
              { id: "e", text: "(2) dan (5)" },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (1) mengandung kata 'tampaknya' yang menandakan dugaan/perkiraan subjektif, dan juga frasa 'akan terus naik' yang merupakan prediksi (opini). Kalimat (4) mengandung frasa 'Dengan sangat mudah' yang merupakan penilaian subjektif — 'sangat mudah' bagi satu orang belum tentu sama bagi orang lain. Kalimat (2) merupakan fakta karena bersumber dari Kementerian Sosial dan menyebutkan data angka (36.000 dan 232.894). Kalimat (3) dan (5) mendeskripsikan fenomena yang bisa diamati.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Bank Dunia mengingatkan beban berat yang ditanggung anggaran pendapatan dan belanja Negara terkait subsidi bahan bakar minyak (BBM). Peringatan itu bukanlah yang pertama. Bahkan, bukan sekadar peringatan juga disertai saran dan jalan keluar. Pemerintah pun bukan tidak menyadari ancaman pembengkakan subsidi itu. Sejak awal, pemerintah telah menugaskan kalangan perguruan tinggi untuk melakukan kajian yang akan dipakai sebagai dasar penetapan kebijakan pengelolaan BBM bersubsidi. Beberapa opsi telah dihasilkan, seperti menaikkan harga dan membatasi pemakaian. Jika pemerintah mengambil opsi menaikkan harga BBM bersubsidi secara terukur disertai kompensasi bagi masyarakat miskin, mungkin lebih bisa diterima masyarakat. Apalagi, jika penghematan anggaran subsidi itu benar-benar untuk alokasi peningkatan anggaran belanja pembangunan infrastruktur.",
            question: "Opini penulis dari tajuk tersebut adalah...",
            options: [
              {
                id: "a",
                text: "Bank dunia harus turun tangan mengatasi masalah BBM bersubsidi di tanah air ini",
              },
              {
                id: "b",
                text: "Penghematan anggaran subsidi harus dialokasikan untuk anggaran belanja pembangunan infrastruktur",
              },
              {
                id: "c",
                text: "Pemerintah hendaknya menyadari ancaman pembengkakan subsidi di tanah air ini",
              },
              {
                id: "d",
                text: "Pemerintah sebaiknya menaikkan harga BBM bersubsidi disertai kompensasi bagi masyarakat miskin",
              },
              {
                id: "e",
                text: "Penghematan anggaran subsidi BBM digunakan untuk peningkatan belanja negara",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Pilihan D merupakan opini penulis yang paling tepat karena mencerminkan inti dari paragraf terakhir tajuk: 'Jika pemerintah mengambil opsi menaikkan harga BBM bersubsidi secara terukur disertai kompensasi bagi masyarakat miskin, mungkin lebih bisa diterima masyarakat.' Kata 'sebaiknya' merupakan saran/rekomendasi penulis yang sejalan dengan isi teks. Pilihan A tidak ada dalam teks. Pilihan B dan E terlalu menyederhanakan isi teks. Pilihan C tidak sesuai karena teks menyatakan pemerintah sudah menyadari ancaman tersebut.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Ketepatan Opini";
      moduleDoc.description =
        "Pelajari pengertian opini, ciri-ciri kalimat opini, dan cara mengidentifikasi serta membedakan opini dari fakta dalam teks.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Ketepatan Opini",
        description:
          "Pelajari pengertian opini, ciri-ciri kalimat opini, dan cara mengidentifikasi serta membedakan opini dari fakta dalam teks.",
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

seedKetepatanOpini();
