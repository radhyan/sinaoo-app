const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedMenentukanTemaBacaan = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Literasi Bahasa Indonesia";
    let course = await Course.findOne({ name: courseName });

    // Create course if it doesn't exist yet
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

    const targetId = "menentukan-tema-bacaan";

    const stepsData = [
      {
        title: "Materi: Menentukan Tema Bacaan",
        type: "reading",
        status: "active",
        description:
          "Memahami definisi, fungsi, cara menentukan, dan tips menemukan tema dalam sebuah bacaan.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Itu Tema?</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                Tema adalah <span class="font-bold">gagasan utama dalam sebuah karya</span> yang menjadi acuan penulis dalam mengembangkan cerita seperti menentukan alur/plot, konflik, dan penyelesaian konflik. Dalam KBBI, tema dijelaskan sebagai pokok pikiran atau dasar cerita.
              </p>
              
              <p class="text-body-l text-Grayscale-900 mb-6">
                Menentukan tema bacaan artinya mampu menemukan pokok pikiran dalam sebuah bacaan yang disajikan. <span class="font-bold">Tema</span> tentu saja <span class="font-bold">berbeda</span> dengan <span class="font-bold">judul</span>, supaya tidak keliru cara membedakannya adalah tema merupakan dasar yang ditentukan oleh penulis <span class="font-bold">ketika akan membuat suatu karya</span>, sedangkan judul adalah cerminan/rangkuman sederhana dari seluruh isi cerita dan ditentukan oleh penulis <span class="font-bold">ketika selesai membuat karya</span>. Berbeda pula dengan topik, tema akan lebih spesifik dalam membahas cerita yang dibuat, sedangkan topik cakupannya masih umum.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Fungsi Tema?</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                Tema menjadi pembatas bagi penulis dalam mengembangkan cerita supaya tersusun secara jelas dan tidak keluar dari lingkup cerita yang ditulis/dibuat.
              </p>

              <p class="text-body-l text-Grayscale-900 mb-4">
                Menentukan tema bertujuan untuk pula untuk menyampaikan pesan/amanat yang terkandung dalam cerita, misalnya tema “sosial lingkungan” yang menceritakan tentang pembuangan sampah sembarangan dan/atau dibuang ke sungai yang dapat mencemari ekosistem serta menyebabkan banjir, maka amanat yang nantinya dapat dipetik dari cerita tersebut adalah jagalah kebersihan lingkungan supaya tidak menyebabkan permasalahan sosial atau bencana alam.
              </p>

              <div class="bg-Primary-50 rounded-xl p-6 border-l-4 border-Primary-500 mb-8 border border-Primary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  <span class="font-bold">Jadi, tema adalah unsur penting dan utama</span> dalam membuat sutau cerita serta merupakan pondasi dalam menentukan alur, konflik, dan penyelesaian konflik dalam cerita yang dibuat serta menjadi pembatas bagi penulis supaya tidak berantakan dan tersusun dengan jelas.
                </p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Tema dalam Bacaan</h3>
              <ol class="list-decimal pl-5 space-y-2 text-body-l text-Grayscale-900 mb-8">
                <li>Membaca teks secara cermat.</li>
                <li>Mencatat tokoh dan konflik yang dihadapi.</li>
                <li>Menelaah kata yang sering muncul.</li>
                <li>Menentukan sudut pandang penulis (apakah menggunakan kata aku, dia, atau nama tokoh).</li>
                <li>Menentukan pesan/amanat yang terkandung.</li>
                <li>Menentukan simpulan dari catatan-catatan di atas (poin-poin sebelumnya).</li>
              </ol>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Tip Menentukan Tema Ketika Mengerjakan SoAL</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  Teks yang panjang akan menghabiskan waktu jika dibaca secara keseluruhan dan biasanya teks tersebut digunakan untuk menjawab 3-5 soal. Maka, tipsnya adalah langsung <span class="font-bold text-red-500">membaca soalnya terlebih dahulu</span>. Setelah mengetahui apa yang ditanyakan dari soal, langkah selanjutnya barulah bisa mencari jawaban dari teks dengan teknik membaca <em>skipping</em>.
                </p>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Menentukan Tema",
        type: "video",
        status: "locked",
        description:
          "Tonton video berikut untuk pemahaman lebih dalam tentang tema dan ide pokok bacaan.",
        videoUrl: "https://www.youtube.com/embed/yx68EHlRNXE",
      },
      {
        title: "Video: Latihan Soal Tema",
        type: "video",
        status: "locked",
        description:
          "Latihan dan pembahasan mengenai soal-soal penentuan tema.",
        videoUrl: "https://www.youtube.com/embed/mlSgvlJ_P_M",
      },
      {
        title: "Kuis: Menentukan Tema Bacaan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Apa alasan tema harus ditentukan terlebih dahulu?",
            options: [
              { id: "a", text: "Supaya cerita dapat dikembangkan" },
              { id: "b", text: "Supaya cerita menjadi seru" },
              {
                id: "c",
                text: "Supaya cerita lebih tersusun dan tidak berantakan",
              },
              { id: "d", text: "Supaya cerita menjadi panjang" },
              {
                id: "e",
                text: "Supaya cerita mendapatkan konflik yang tepat",
              },
            ],
            correctAnswer: "c",
            explanation:
              '<p class="text-body-l text-Grayscale-900">Tema adalah kerangka dasar dari sebuah cerita. Dengan menentukan tema di awal, penulis memiliki batasan dan acuan sehingga alur cerita lebih terarah, tersusun rapi, dan tidak berantakan atau melenceng dari topik utama.</p>',
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Ternyata kami berjumpa untuk berpisah. Setelah persidangan singkat itu, ayah melambaikan tangan untukku. Tiba-tiba ada yang berembun di sudut mata. Harapan dan mimpi menjadi penyanyi yang pernah kami ceritakan dulu saat berboncengan sepeda bersama ke sekolah hingga sepatuku kadang loncat terlepas, bermain busa-busa dalam ketelanjangan saat mandi sambil mengepalkan tangan ke angkasa, berjanji akan jadi dua Power Rangers merah yang akan mendamaikan dunia, musnah sudah.<br><br>Di depan kursi-kursi hadirin, aku digandeng ibu untuk ikut menyalami para hakim dan pengacara. Aku digendongnya. Tanganku belum sampai menjangkau meja yang terlalu tinggi. Dalam detak jantung yang tak berirama, aku merasa semua ini mimpi. Tetapi ibu memelukku dan bilang semuanya nyata. Biarkan ayah bersama pilihannya. Ibu bisa. Jawabnya sambil lebih erat memelukku.",
            question: "Tema dalam penggalan teks cerpen di atas adalah?",
            options: [
              { id: "a", text: "Kasih sayang seorang ibu" },
              { id: "b", text: "Kesedihan seorang ayah" },
              { id: "c", text: "Persidangan anak" },
              { id: "d", text: "Mimpi yang menyedihkan" },
              { id: "e", text: "Kesedihan perceraian orang tua" },
            ],
            correctAnswer: "e",
            explanation:
              'Teks tersebut menceritakan sudut pandang seorang anak yang berada di ruang persidangan melihat ayahnya pergi meninggalkannya bersama ibunya, dan ibunya menenangkan dengan berkata "Biarkan ayah bersama pilihannya. Ibu bisa." Hal ini jelas merujuk pada peristiwa perceraian yang menyedihkan.',
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Di toko daring Mimpy terpampang slogan: segalanya bisa dibeli kecuali waktu. Kau tinggal buka gawai, ketik apa yang kau mau, tentukan detailnya; bentuk, warna, atau sifat, generator cerdas akan hadiahimu kado impian lewat mesin cetak tiga dimensi paling mutakhir. Tipenya bervariasi. Semakin mahal akun berlangganan, kado impianmu akan terlihat makin sempurna.",
            question: "Tentukan tema yang tepat untuk paragraf tersebut!",
            options: [
              { id: "a", text: "Toko daring" },
              { id: "b", text: "Teknologi" },
              { id: "c", text: "Kado impian" },
              { id: "d", text: "Gawai" },
              { id: "e", text: "Mesin cetak tiga dimensi" },
            ],
            correctAnswer: "a",
            explanation:
              "Paragraf tersebut menceritakan tentang tata cara pembelian dan penjualan secara online (daring). Adanya kata kunci 'toko daring', 'gawai', dan 'akun berlangganan' merujuk pada aktivitas jual beli digital, sehingga tema yang mewakili keseluruhan gagasan paragraf tersebut adalah toko daring.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              'Kami tersihir dalam senyap. Mulai saat itu, kami tak pernah memprotes keadaan sekolah kami. Pernah suatu ketika hujan turun sangat lebat, petir sambar-menyambar. Trapani dan Mahar memakai terindak, topi kerucut dari daun lais khas tentara Vietkong, untuk melindungi jambul mereka. Kucai, Borek, dan Sahara memakai jas hujan kuning bergambar gerigi metal besar di punggungnya dengan tulisan besar "UPT Bel" (Unit Penambangan Timah Belitong)-jas hujan PT Timah milik bapaknya. Kami sisanya hampir basah kuyup. Tapi kami sehari pun tak pernah bolos dan kami tak pernah mengeluh, tidak, sedikit pun kami tak pernah mengeluh.',
            question: "Tema yang tepat untuk cerita di atas adalah?",
            options: [
              { id: "a", text: "Keadaan bangunan sekolah" },
              { id: "b", text: "Hujan mengguyur sekolah" },
              { id: "c", text: "Persahabatan" },
              { id: "d", text: "Kegigihan para siswa dalam menuntut ilmu" },
              { id: "e", text: "Pendidikan di sekolah" },
            ],
            correctAnswer: "d",
            explanation:
              'Fokus penggalan cerita tersebut ada pada kalimat terakhir: "Tapi kami sehari pun tak pernah bolos dan kami tak pernah mengeluh...". Hal ini menunjukkan betapa kuatnya tekad dan kegigihan mereka untuk tetap bersekolah meski di tengah keterbatasan fasilitas dan cuaca yang buruk.',
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Tentukan paragraf mana yang sesuai dengan tema persahabatan!",
            options: [
              {
                id: "a",
                text: "Setelah kuburan Tionghoa aku tak meminta Syahdan menggantikanku. Karena aku sedang bersukacita. Seluruh energi kosmis telah memberiku kekuatan ajaib. Semua terasa adil kalau sedang jatuh cinta.",
              },
              {
                id: "b",
                text: "Tak susah melukiskan sekolah kami, karena sekolah kami adalah salah satu dari ratusan atau mungkin ribuan sekolah miskin di seantero negeri ini yang jika disenggol sedikit saja oleh kambing yang senewen ingin kawin, bisa rubuh berantakan.",
              },
              {
                id: "c",
                text: "Tuhan memberikan Belitong dengan timah bukan agar kapal yang berlayar ke pulau itu tidak menyimpang ke Laut Cina Selatan, tetapi timah dialirkan-Nya ke sana untuk menjadi mercusuar bagi penduduk pulau itu sendiri.",
              },
              {
                id: "d",
                text: "Kami adalah sepuluh umpan nasib dan kami seumpama kerang-kerang halus yang melekat erat satu sama lain dihantam deburan ombak ilmu, kami hidup dengan persepsi tentang kesenangan sekolah dan persahabatan yang kami terjemahkan sendiri.",
              },
              {
                id: "e",
                text: "Sekarang sudah hampir tengah hari, udara semakin panas. Berada di toko ini serasa direbus dalam panci sayur lodeh yang mendidih. Cuaca mendung tapi gerahnya tak terkira.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Pada opsi D, terdapat frasa 'melekat erat satu sama lain' dan penyebutan langsung kata 'persahabatan' yang diartikan dari persepsi mereka dalam menjalani masa sekolah secara bersama-sama.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Aku berpikir inilah akhir hayatku, akhir hayat kami semua. Laut ini akan segera memerah karena ikan-ikan hiu berpesta pora. Namun pada saat paling genting itu aku mendengar samar-samar suara orang berteriak. Rupanya syahbandar melepaskan pegangannya dari tiang layar dan mengumandangkan azan berulang-ulang. Kami masih terlonjak-lonjak dengan hebat dan air menggenangi geladak tapi lonjakan perahu tiba-tiba reda. Anehnya setelah azan itu selesai perlahan-lahan gelombang turun.<br><br>Meskipun kami tak tahu sedang berada di perairan mana namun kami bersyukur kepada Allah berulang-ulang, bahkan menangis haru. Setidaknya harapan muncul kembali. Lalu kami bergegas menimba air yang memenuhi perahu.",
            question: "Tema yang tepat untuk cerita di atas adalah, KECUALI?",
            options: [
              { id: "a", text: "Religi" },
              { id: "b", text: "Keagamaan" },
              { id: "c", text: "Ketuhanan" },
              { id: "d", text: "Kemanusiaan" },
              { id: "e", text: "Kebesaran Tuhan" },
            ],
            correctAnswer: "d",
            explanation:
              "Teks tersebut sangat kental dengan nuansa memohon perlindungan kepada Tuhan melalui azan dan rasa syukur kepada Allah setelah badai reda. Religi, keagamaan, ketuhanan, dan kebesaran Tuhan adalah tema yang cocok. Kemanusiaan (hubungan antarmanusia/kemanusiaan) tidak menjadi fokus pada cerita penyelamatan spiritual tersebut.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: `
              <p class="text-body-l text-Grayscale-900 mb-4">Perhatikan tabel cerita dan tema berikut:</p>
              <div class="overflow-x-auto mb-6">
                <table class="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-Secondary-200">
                  <thead>
                    <tr class="bg-Secondary-100 text-Primary-900 font-heading">
                      <th class="p-4 border-b border-Secondary-200 w-16 text-center">No</th>
                      <th class="p-4 border-b border-Secondary-200">Cerita (Bacaan)</th>
                      <th class="p-4 border-b border-Secondary-200 w-40">Tema</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-m text-Grayscale-900">
                    <tr class="border-b border-Secondary-100">
                      <td class="p-4 text-center">1</td>
                      <td class="p-4">Kami dibukakan Allah sebuah lembar kitab yang nyata bahwa kuasa-Nya demikian besar tak terbatas...</td>
                      <td class="p-4 font-semibold text-Primary-700">Religi</td>
                    </tr>
                    <tr class="border-b border-Secondary-100 bg-Secondary-50">
                      <td class="p-4 text-center">2</td>
                      <td class="p-4">Aku tersenyum mengenang nostalgia di Toko Sinar Harapan dan teringat bahwa dulu aku pernah memiliki cinta yang ternyata tak hanya sedalam...</td>
                      <td class="p-4 font-semibold text-Primary-700">Horor misteri</td>
                    </tr>
                    <tr class="border-b border-Secondary-100">
                      <td class="p-4 text-center">3</td>
                      <td class="p-4">Malam itu, Josuke berderap memasuki stadion. Langkahnya panjang-panjang. Di lapangan yang luas, di bawah lampu jalanan, anak-anak marching band berlatih.</td>
                      <td class="p-4 font-semibold text-Primary-700">Olahraga</td>
                    </tr>
                    <tr class="border-b border-Secondary-100 bg-Secondary-50">
                      <td class="p-4 text-center">4</td>
                      <td class="p-4">Wajah kuyu Lahang menekuri tubuh bapaknya yang meringkuk di depan. Mulut bapaknya menganga lebar... Lahang berdoa, semoga bapaknya lekas sembuh.</td>
                      <td class="p-4 font-semibold text-Primary-700">Keluarga</td>
                    </tr>
                    <tr>
                      <td class="p-4 text-center">5</td>
                      <td class="p-4">Chiong Si Ku atau sembahyang rebut diadakan setiap tahun. Sebuah acara semarak di mana seluruh warga Tionghoa berkumpul...</td>
                      <td class="p-4 font-semibold text-Primary-700">Sosial budaya</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `,
            question:
              "Pada tabel nomor berapa cerita (bacaan) dan tema yang memiliki kesesuaian?",
            options: [
              { id: "a", text: "1, 2, dan 5" },
              { id: "b", text: "2, 3, dan 4" },
              { id: "c", text: "1, 3, dan 4" },
              { id: "d", text: "2, 4, dan 5" },
              { id: "e", text: "1, 4, dan 5" },
            ],
            correctAnswer: "e",
            explanation:
              "Nomor 1 sesuai (Religi). Nomor 2 salah karena isinya romansa/nostalgia masa lalu, bukan horor misteri. Nomor 3 salah karena membahas latihan 'marching band' (seni/musik) meskipun latarnya di stadion, bukan berfokus pada olahraga fisik. Nomor 4 sesuai (Keluarga). Nomor 5 sesuai (Sosial budaya). Jadi yang benar adalah 1, 4, dan 5.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Apa perbedaan antara tema dan judul?",
            options: [
              { id: "a", text: "Tidak ada perbedaan" },
              {
                id: "b",
                text: "Tema ditentukan sebelum membuat cerita dan judul ditentukan setelah membuat cerita",
              },
              {
                id: "c",
                text: "Tema adalah ide pokok begitupun dengan judul",
              },
              {
                id: "d",
                text: "Tema ditentukan sebelum membuat cerita dan judul ditentukan sebelum membuat cerita",
              },
              {
                id: "e",
                text: "Tema dan judul sama-sama dibuat sebelum menulis cerita",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Tema adalah kerangka utama yang harus ditentukan penulis sebelum menulis cerita. Judul adalah nama atau 'kepala' karangan yang bisa dibuat fleksibel, biasanya ditentukan atau disempurnakan setelah cerita selesai ditulis untuk merangkum isinya.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Dalam membuat cerita, hal yang harus ditentukan paling dasar dan utama adalah?",
            options: [
              { id: "a", text: "Judul" },
              { id: "b", text: "Alur atau plot cerita" },
              { id: "c", text: "Konflik" },
              { id: "d", text: "Tema" },
              { id: "e", text: "Tokoh dan penokohan" },
            ],
            correctAnswer: "d",
            explanation:
              "Tema adalah akar dan dasar dari seluruh elemen fiksi lainnya. Tanpa tema, penulis tidak memiliki pondasi untuk merancang plot, tokoh, atau penyelesaian konflik cerita.",
            points: 6,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Jogja mengajarkan keramahan dan kesederhanaan dalam balutan anggun dan teduhnya kota tersebut. Jogja menjelma untaian puisi dan bentuk estetika seni lainnya. Jogja melebur dalam malam serta menyatu dalam keramaian, lalu mengendap dalam hati dan menuntun langkah kaki untuk kembali pulang ke kota itu. Cerita kian banyak terukir di balik kota istimewa tersebut dan kerap menjadi kenangan yang dalam bagi diri.",
            question: "Tema yang mendasari cerita tersebut adalah?",
            options: [
              { id: "a", text: "Kasih sayang" },
              { id: "b", text: "Estetika kota" },
              { id: "c", text: "Keramahan Jogja" },
              { id: "d", text: "Keistimewaan Jogja" },
              { id: "e", text: "Cinta yang tumbuh di Jogja" },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf tersebut merangkum berbagai unsur pesona Jogja: keramahan, kesederhanaan, estetika, keramaian malam, hingga julukan sebagai 'kota istimewa' yang mengukir kenangan. Semua ini terakumulasi dalam satu tema sentral yaitu keistimewaan yang dimiliki oleh Jogja.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Langkah-langkah menentukan tema adalah sebagai berikut:\n1) Membaca teks secara cermat.\n2) Mencatat tokoh dan konflik yang dihadapi.\n3) Menelaah kata yang sering muncul.\n4) Menentukan sudut pandang penulis (apakah menggunakan kata aku, dia, atau nama tokoh).\n5) ......\n6) Menentukan simpulan dari catatan-catatan di atas (poin-poin sebelumnya).",
            question:
              "Isian yang tepat untuk langkah-langkah menentukan tema dalam nomor 5 adalah?",
            options: [
              { id: "a", text: "Menentukan pesan/amanat yang terkandung" },
              { id: "b", text: "Menuliskan siapa saja tokohnya" },
              { id: "c", text: "Menentukan sudut pandang dan alur" },
              { id: "d", text: "Mencermati kata yang sering muncul" },
              { id: "e", text: "Menuliskan judul" },
            ],
            correctAnswer: "a",
            explanation:
              "Tema memiliki hubungan yang sangat erat dengan amanat. Dengan menelaah tujuan penulis membuat cerita tersebut (pesan/amanat yang ingin disampaikan), kita dapat menarik benang merah yang akan mengarah langsung pada tema pokok karangan.",
            points: 6,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Sintong masih menunduk. Ini persis seperti yang dia duga. Bisnis ini sudah seperti lingkaran mafia, bisa masuk, tak bisa keluar. Tapi dia bukan tahanan. Dia adalah manusia merdeka. Apa pun harganya, dia mau keluar. Seberapa pahit percakapan ini, seberapa marah Bulik Ningrum, dia mau berhenti. Tidak ada negosiasi.",
            question:
              "Pilihlah tema yang tepat untuk penggalan cerita di atas!",
            options: [
              { id: "a", text: "Ketidakpekaan" },
              { id: "b", text: "Tekad dan ketegasan" },
              { id: "c", text: "Kegelisahan" },
              { id: "d", text: "Keinginan yang bimbang" },
              { id: "e", text: "Ketegangan dalam keluarga" },
            ],
            correctAnswer: "b",
            explanation:
              "Penggalan cerita ini menonjolkan kalimat-kalimat seperti 'Apa pun harganya, dia mau keluar', 'dia mau berhenti', and 'Tidak ada negosiasi'. Ini mencerminkan kehendak yang sangat kuat, konsisten, and tidak bisa ditawar lagi, yang merupakan perwujudan dari tekad and ketegasan tokoh.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Orang-orang Dayak tak terbiasa menyampaikan simpati dengan kata-kata. Atau dengan sentuhan. Jika ada orang yang meninggal seperti ini, orang Dayak tak akan berbondong-bondong berusaha menghibur yang berdua. Apalagi dengan kalimat-kalimat penghiburan yang standar, seperti, “Sabar, ya, semua ini pasti ada maksudnya.”<br><br>Maka mereka berempati dengan cara lain. Dengan tindakan nyata. Dengan menemani si penduka sampai dia—atau mereka—betul-betul siap lagi menghadapi hidup.",
            question: "Apa tema yang terdapat dalam paragraf 1 di atas?",
            options: [
              { id: "a", text: "Budaya orang Dayak jika ada yang meninggal" },
              { id: "b", text: "Simpatisasi orang Dayak" },
              {
                id: "c",
                text: "Orang Dayak tidak terbiasa menyampaikan simpati dengan kata-kata",
              },
              { id: "d", text: "Sikap yang dilakukan orang Dayak" },
              { id: "e", text: "Kehidupan bersosial orang Dayak" },
            ],
            correctAnswer: "a",
            explanation:
              "Paragraf pertama secara khusus menjabarkan kebiasaan mendasar Suku Dayak dalam menanggapi peristiwa kematian, yang mana mereka tidak menggunakan kata-kata penghiburan klise. Kebiasaan sosial yang berulang and melekat ini adalah cerminan dari budaya mereka.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Tema memiliki fungsi sebagai?",
            options: [
              { id: "a", text: "Acuan penulis untuk menyelesaikan cerita" },
              { id: "b", text: "Dasar menentukan konflik cerita" },
              {
                id: "c",
                text: "Pembatas bagi penulis dalam mengembangkan cerita",
              },
              { id: "d", text: "Pembatas dalam menentukan alur" },
              { id: "e", text: "Ide pokok yang harus diuraikan" },
            ],
            correctAnswer: "c",
            explanation:
              "Tema bertindak sebagai rel and batasan imajinasi penulis agar saat proses pengembangan (menentukan konflik, memperluas alur, menyusun tokoh), cerita tidak keluar konteks atau melenceng jauh dari tujuan awalnya.",
            points: 6,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              "Jelaskan definisi tema yang paling tepat berdasarkan kaidah kebahasaan dan sastra!",
            options: [
              {
                id: "a",
                text: "Gagasan utama atau pokok pikiran dalam sebuah karya yang menjadi acuan penulis dalam mengembangkan seluruh unsur cerita.",
              },
              {
                id: "b",
                text: "Rangkaian peristiwa yang membentuk jalannya sebuah cerita dari awal perkenalan hingga penyelesaian.",
              },
              {
                id: "c",
                text: "Karakteristik atau sifat yang dimiliki oleh setiap tokoh di dalam sebuah narasi.",
              },
              {
                id: "d",
                text: "Kalimat memikat yang diletakkan di bagian paling atas karangan untuk menarik minat pembaca.",
              },
              {
                id: "e",
                text: "Pesan moral atau nasihat kehidupan yang tersirat di bagian akhir sebuah karya sastra.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Berdasarkan Kamus Besar Bahasa Indonesia (KBBI), tema adalah pokok pikiran atau dasar cerita. Definisi lengkapnya adalah gagasan utama yang menjadi pijakan dasar penulis dalam mengembangkan plot, konflik, and penokohan di sebuah karya.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Menentukan Tema Bacaan";
      moduleDoc.description =
        "Pelajari cara menentukan tema dari suatu teks atau bacaan secara efektif.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Menentukan Tema Bacaan",
        description:
          "Pelajari cara menentukan tema dari suatu teks atau bacaan secara efektif.",
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

seedMenentukanTemaBacaan();
