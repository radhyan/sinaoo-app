const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedIdePokok = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. Find Course
    const courseName = "Pengetahuan dan Pemahaman Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    // 2. Define the Module Data
    const targetId = "ide-pokok";

    const stepsData = [
      {
        title: "Materi: Konsep Dasar Ide Pokok",
        type: "reading",
        status: "active",
        description: "Materi Bacaan mengenai Ide Pokok",
        content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Definisi Ide Pokok</h3>
        <ul class="list-disc pl-6 space-y-3 text-body-l text-Grayscale-900">
          <li>Ide pokok adalah <span class="font-bold text-Primary-600">gagasan utama</span> atau <span class="font-bold text-Primary-600">inti</span> dari sebuah paragraf.</li>
          <li>Ide pokok juga dapat diartikan sebagai <span class="font-bold text-Primary-600">gagasan pokok, gagasan utama, pikiran utama</span>, atau <span class="font-bold text-Primary-600">pokok pikiran</span>.</li>
          <li>Ide pokok menjadi <span class="font-bold text-Primary-600">dasar pengembangan</span> seluruh paragraf.</li>
          <li>Secara umum, ide pokok terdapat di <span class="font-bold text-Primary-600">kalimat utama</span> dan dalam setiap paragraf hanya terdapat <span class="font-bold text-Primary-600">satu</span> ide pokok.</li>
        </ul>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Perbedaan Ide Pokok dengan Kalimat Utama</h3>
        <ul class="list-disc pl-6 space-y-3 text-body-l text-Grayscale-900 mb-6">
          <li>Kalimat utama adalah kalimat yang secara eksplisit <span class="font-bold text-Primary-600">menyatakan gagasan utama</span> atau ide pokok dari sebuah paragraf.</li>
          <li>Kalimat utama dapat terdapat pada <span class="font-bold text-Primary-600">awal paragraf, akhir paragraf</span>, atau <span class="font-bold text-Primary-600">awal dan akhir paragraf</span>.</li>
          <li>Kalimat utama menjadi <span class="font-bold text-Primary-600">kalimat penjelas dari ide pokok</span> suatu paragraf.</li>
        </ul>

        <div class="bg-Secondary-50 rounded-lg p-6 relative border border-Secondary-200 shadow-sm mt-8">
          <div class="text-Secondary-900 text-body-l font-bold px-1 py-1.5 rounded-full">CATATAN</div>
          <p class="text-body-l text-Grayscale-900 m-0 leading-relaxed mt-2 pt-1">
            Ide pokok adalah <span class="font-bold text-Primary-600">inti dari keseluruhan</span> isi yang ingin disampaikan, sementara kalimat utama adalah kalimat yang <span class="font-bold text-Primary-600">mengungkapkan ide pokok</span> tersebut dalam paragraf.
          </p>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri-Ciri Ide Pokok</h3>
        <ul class="list-disc pl-6 space-y-3 text-body-l text-Grayscale-900">
          <li>Mengandung <span class="font-bold text-Primary-600">inti persoalan</span> dari sebuah paragraf.</li>
          <li>Memiliki <span class="font-bold text-Primary-600">kalimat pendukung</span> atau <span class="font-bold text-Primary-600">kalimat penjelas</span>.</li>
          <li>Bersifat <span class="font-bold text-Primary-600">umum</span>.</li>
          <li>Ide pokok dinyatakan secara <span class="font-bold text-Primary-600">jelas</span>.</li>
          <li>Menjadi <span class="font-bold text-Primary-600">pusat pembahasan</span>.</li>
          <li>Ide pokok dapat dinyatakan secara <span class="font-bold text-Primary-600">tersirat</span> (perlu menafsirkan terlebih dahulu informasi yang terdapat dalam teks) maupun <span class="font-bold text-Primary-600">tersurat</span> (dapat ditemukan langsung pada kalimat utama).</li>
        </ul>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Cara Menentukan Ide Pokok</h3>
        <ul class="list-disc pl-6 space-y-5 text-body-l text-Grayscale-900">
          <li>Baca teks secara <span class="font-bold text-Primary-600">menyeluruh</span>.</li>
          <li>
            Temukan <span class="font-bold text-Primary-600">kalimat utama</span>.
            <p class="m-0 mt-2 text-Grayscale-700">Biasanya terdapat pada <span class="font-bold text-Primary-600">awal</span> paragraf, <span class="font-bold text-Primary-600">akhir</span> paragraf, atau <span class="font-bold text-Primary-600">awal dan akhir</span> paragraf.</p>
          </li>
          <li>Identifikasi <span class="font-bold text-Primary-600">kata kunci</span> yang menunjukkan topik utama pembahasan.</li>
          <li>Temukan kalimat-kalimat yang menjadi <span class="font-bold text-Primary-600">pendukung kalimat utama</span>.</li>
          <li>Tandai <span class="font-bold text-Primary-600">info penting</span> pada tiap <span class="font-bold text-Primary-600">paragraf</span>.</li>
        </ul>
      </section>
        `,
      },
      {
        title: "Video Pembelajaran: Ide Pokok",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/pcVmB-49l8w",
        description: "Video pembahasan materi mengenai Ide Pokok.",
      },
      {
        title: "Video Pembelajaran: Trik Mengerjakan Soal Ide Pokok",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Va0ABDz3LyQ",
        description:
          "Video pembahasan mengenai trik dan tips mengerjakan soal Ide Pokok.",
      },
      {
        title: "Kuis: Ide Pokok",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "PT Pertamina (Persero) mempertahankan peringkat Investment Grade atau BBB dengan prospek stabil dari Lembaga Pemeringkat Dunia Fitch. Capaian ini disebut melegakan karena pada saat yang sama, Fitch Ratings menurunkan peringkat hutang berdaulat (Sovereign Credit Rating) terhadap 33 entitas termasuk negara di sepanjang semester I-2020. Menurut Fitch, penangkapan dan penurunan prospek pemeringkatan negara dan entitas masih akan terus berlanjut di tengah pandemi COVID-19 yang hingga saat ini masih belum menunjukkan tanda-tanda melandai.",
            question: "Ide pokok teks di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "PT Pertamina mempertahankan peringkat Investment Grade.",
              },
              {
                id: "b",
                text: "Peringkat pertamina sama dengan peringkat Indonesia.",
              },
              {
                id: "c",
                text: "Penilaian Fitch Rating terhadap keuangan Pertamina.",
              },
              { id: "d", text: "Peringkat Investment Grade yang stabil." },
              {
                id: "e",
                text: "Harapan PT Pertamina (Persero) terkait Fitch Rating.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Paragraf tersebut membahas tentang PT Pertamina yang berhasil mempertahankan peringkat Investment Grade. Kalimat-kalimat selanjutnya menjelaskan konteks dan detail mengenai pencapaian tersebut di tengah kondisi global.",
            points: 10,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan-pernyataan di bawah ini!\n(1) Dalam setiap paragraf terdapat dua ide pokok.\n(2) Ide pokok adalah pokok pikiran sebuah paragraf.\n(3) Dalam menentukan ide pokok perlu mengetahui letak kalimat utama terlebih dahulu.",
            question: "Pernyataan yang SALAH adalah . . .",
            options: [
              { id: "a", text: "Pernyataan (1)" },
              { id: "b", text: "Pernyataan (2)" },
              { id: "c", text: "Pernyataan (3)" },
              { id: "d", text: "Pernyataan (1) dan (2)" },
              { id: "e", text: "Pernyataan (1) dan (3)" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam setiap paragraf, secara umum hanya terdapat SATU ide pokok. Pernyataan (2) dan (3) adalah benar.",
            points: 10,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Tanaman hidroponik semakin diminati oleh masyarakat. Dengan menggunakan teknik ini, seseorang tidak memerlukan lahan yang luas untuk bercocok tanam. Selain itu, tanaman hidroponik cenderung lebih cepat tumbuh karena nutrisi yang diberikan lebih mudah diserap oleh tanaman.",
            question:
              "Berdasarkan teks di atas, manakah yang merupakan ide pokoknya?",
            options: [
              { id: "a", text: "Tanaman hidroponik lebih cepat tumbuh." },
              {
                id: "b",
                text: "Tanaman hidroponik semakin diminati masyarakat.",
              },
              {
                id: "c",
                text: "Tanaman hidroponik memerlukan lahan yang luas.",
              },
              {
                id: "d",
                text: "Teknik hidroponik tidak memerlukan nutrisi tambahan.",
              },
              {
                id: "e",
                text: "Bercocok tanam hidroponik sulit diserap tanaman.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Ide pokok paragraf tersebut terletak di awal paragraf (deduktif), yaitu mengenai tanaman hidroponik yang semakin diminati. Kalimat berikutnya merupakan kalimat penjelas mengenai alasan mengapa diminati (tidak butuh lahan luas, cepat tumbuh).",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Karena udara di luar ruangan yang tidak sehat itu, sebagian orang lebih memilih untuk tinggal dan menghabiskan waktunya dalam ruangan. Namun, ternyata kualitas udara di dalam ruangan pun tidak sepenuhnya baik dan bebas dari polusi. Studi dari Environmental Protection Agency (EPA) membuktikan, level polutan di dalam ruangan 2-5 kali lebih tinggi dari polutan di luar ruangan, terkadang bisa 100 kali lebih tinggi.",
            question: "Ide pokok dalam paragraf tersebut adalah . . .",
            options: [
              { id: "a", text: "Level polutan di dalam ruangan." },
              {
                id: "b",
                text: "Level polutan di dalam ruangan 2-5 kali lebih tinggi dari polutan di luar ruangan.",
              },
              {
                id: "c",
                text: "Kualitas udara di dalam ruangan tidak sepenuhnya bebas dari polusi.",
              },
              {
                id: "d",
                text: "Sebagian orang memilih tinggal di dalam ruangan.",
              },
              { id: "e", text: "Udara di luar ruangan tidak sehat." },
            ],
            correctAnswer: "c",
            explanation:
              "Gagasan utama teks tersebut menyoroti bahwa kualitas udara di dalam ruangan juga tidak luput dari polusi, yang diuraikan lebih lanjut dengan data dari EPA sebagai kalimat penjelas.",
            points: 10,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Menjadi filatelis atau pengumpul perangko sudah dianggap kuno. Di tengah kemajuan teknologi, banyak pilihan untuk menikmati hobi dan hiburan. Ada hobi game online, fashion, beternak, dll. Mengumpulkan perangko dan benda-benda pos lainnya agaknya mulai ditinggalkan orang.",
            question: "Ide pokok bacaan di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "Banyak pilihan untuk menikmati hobi dan hiburan.",
              },
              { id: "b", text: "Hobi orang masa sekarang." },
              { id: "c", text: "Anggapan filatelis itu kuno." },
              { id: "d", text: "Jenis-jenis hobi." },
              { id: "e", text: "Mengumpulkan perangko." },
            ],
            correctAnswer: "c",
            explanation:
              "Pikiran utama paragraf ini terletak di kalimat pertama, yaitu pandangan bahwa menjadi filatelis (pengumpul perangko) sudah dianggap kuno. Kalimat-kalimat selanjutnya memberikan alasannya.",
            points: 10,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Perayaan tahun baru yang berlangsung meriah di Jakarta meninggalkan sejumlah persoalan. Satu di antara persoalan tersebut adalah rusaknya sejumlah taman kota di Jakarta. Kerusakan taman ini seperti terlihat di Monas Jakarta. Hampir semua tanaman hias yang berada di area tersebut rusak akibat terinjak-injak ribuan pengunjung.",
            question: "Ide pokok bacaan di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "Masalah yang muncul setelah perayaan tahun baru.",
              },
              { id: "b", text: "Tanaman hias rusak diinjak-injak." },
              { id: "c", text: "Perayaan tahun baru berlangsung meriah." },
              { id: "d", text: "Taman kota di Jakarta rusak." },
              { id: "e", text: "Rusaknya tanaman hias pada tahun baru." },
            ],
            correctAnswer: "a",
            explanation:
              "Paragraf membicarakan persoalan atau masalah yang timbul pasca perayaan tahun baru (ide pokok). Contoh masalahnya, seperti rusaknya taman, dijelaskan di kalimat-kalimat berikutnya.",
            points: 10,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Para petani banyak diuntungkan dengan memanfaatkan pupuk organik. Jangka waktu kesuburan tanah menjadi semakin lama. Biaya yang dikeluarkan untuk pembelian pupuk juga semakin murah. Hasil panennya pun lebih menyehatkan apabila dikonsumsi. Harga jual hasil panen dengan pupuk organik di pasaran lebih tinggi. Dengan demikian, petani mendapatkan keuntungan yang berlipat.",
            question: "Ide pokok bacaan di atas adalah . . .",
            options: [
              { id: "a", text: "Hasil panen pupuk organik." },
              { id: "b", text: "Keuntungan memakai pupuk organik." },
              { id: "c", text: "Keuntungan petani yang berlipat." },
              { id: "d", text: "Manfaat pembuatan pupuk organik." },
              { id: "e", text: "Waktu kesuburan tanah." },
            ],
            correctAnswer: "b",
            explanation:
              "Ide pokok bacaan tersebut menjabarkan keuntungan-keuntungan yang didapat ketika memakai pupuk organik, mulai dari kesuburan tanah, biaya, kualitas panen, hingga harga jual.",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Festival rakyat di daerahku sangat meriah. Acara tersebut diadakan di alun-alun dekat keraton. Di sana banyak pedagang yang menjual berbagai macam barang kebutuhan masyarakat, misal baju, sepatu, dan tas. Tidak hanya barang-barang, mereka juga menjual makanan tradisional. Wah, festival ini sangat meriah.",
            question: "Ide pokok bacaan di atas adalah . . .",
            options: [
              { id: "a", text: "Acara di alun-alun dekat keraton." },
              { id: "b", text: "Festival rakyat." },
              { id: "c", text: "Festival rakyat di daerah yang biasa saja." },
              { id: "d", text: "Kemeriahan festival rakyat." },
              { id: "e", text: "Banyaknya pedagang yang berjualan." },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat utama ada di awal paragraf yang menyimpulkan kemeriahan festival rakyat. Penjelasan detail mengenai alun-alun, jenis dagangan merupakan kalimat penjelas pendukung ide pokok.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Insomnia bisa disebabkan oleh banyak faktor. Gangguan tidur ini umumnya disebabkan kecemasan atau beban pikiran, bekerja sampai larut malam, kondisi tempat tidur yang kurang nyaman, hingga kebiasaan memakai peralatan elektronik sebelum tidur. Selain itu, hal-hal yang sering kali sepele tetapi banyak dilakukan juga dapat memicu insomnia. Contohnya adalah kebiasaan berolahraga di malam hari beberapa saat sebelum tidur. Dengan alasan kesibukan, banyak orang di perkotaan yang baru sempat berolahraga pada malam hari. Dengan mengenali penyebabnya, insomnia akan lebih mudah diatasi.",
            question: "Ide pokok bacaan di atas adalah . . .",
            options: [
              { id: "a", text: "Faktor penyebab insomnia." },
              { id: "b", text: "Akibat dari insomnia." },
              { id: "c", text: "Jenis penyakit gangguan tidur." },
              {
                id: "d",
                text: "Gangguan tidur yang disebabkan oleh banyak faktor.",
              },
              { id: "e", text: "Penyebab insomnia." },
            ],
            correctAnswer: "a",
            explanation:
              "Walaupun opsi 'Penyebab insomnia' serupa, opsi 'Faktor penyebab insomnia' lebih merangkum keseluruhan ide di kalimat pertama yang menyatakan bahwa insomnia bisa disebabkan oleh 'banyak faktor'.",
            points: 10,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Penyakit influenza termasuk ke dalam penyakit yang penularannya sangat mudah. Penyakit ini menyebar dari satu orang ke orang lain melalui kontak langsung. Menurut penelitian terbaru, penyebaran virus flu sangat terkait dengan level kelembaban udara. Di negara beriklim sedang seperti Amerika Utara dan Eropa, wabah flu biasanya terjadi di musim dingin. Sementara di negara tropis influenza menyebar di musim penghujan.",
            question: "Ide pokok bacaan di atas adalah . . .",
            options: [
              { id: "a", text: "Jenis penyakit yang penularannya mudah." },
              { id: "b", text: "Mudahnya penularan penyakit." },
              { id: "c", text: "Penyebaran penyakit influenza." },
              { id: "d", text: "Penyebab penyakit influenza." },
              { id: "e", text: "Penyebaran influenza di negara tropis." },
            ],
            correctAnswer: "c",
            explanation:
              "Inti dari paragraf tersebut bukan hanya soal penularannya mudah, namun lebih spesifik kepada 'Penyebaran penyakit influenza' dan bagaimana cara serta faktor cuaca mempengaruhi penyebaran.",
            points: 10,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Kucing adalah hewan peliharaan yang populer. Bulunya yang lembut dan tingkahnya yang lucu membuat banyak orang menyukainya. Kucing juga dikenal sebagai hewan yang bersih. Mereka sering menjilati tubuhnya untuk membersihkan diri. Selain itu, kucing memiliki indera pendengaran dan penglihatan yang sangat tajam.",
            question: "Ide pokok paragraf di atas adalah . . .",
            options: [
              { id: "a", text: "Kucing memiliki bulu yang lembut." },
              { id: "b", text: "Kucing adalah hewan peliharaan yang populer." },
              { id: "c", text: "Kucing sering menjilati tubuhnya." },
              {
                id: "d",
                text: "Kucing memiliki indera pendengaran yang tajam.",
              },
              { id: "e", text: "Kucing adalah hewan yang bersih." },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat pertama (Kucing adalah hewan peliharaan yang populer) bertindak sebagai kalimat utama (deduktif) dan memuat gagasan pokok, sementara kalimat sisanya menjabarkan alasan popularitas tersebut.",
            points: 10,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Indonesia memiliki kekayaan alam yang melimpah. Sumber daya alam seperti minyak bumi, gas alam, dan mineral banyak ditemukan di berbagai wilayah di Indonesia. Selain itu, Indonesia juga memiliki hutan tropis yang luas dan beragam jenis flora dan fauna. Kekayaan alam ini sangat penting bagi pembangunan ekonomi Indonesia.",
            question: "Ide pokok paragraf di atas adalah . . .",
            options: [
              { id: "a", text: "Indonesia memiliki hutan tropis yang luas." },
              { id: "b", text: "Minyak bumi banyak ditemukan di Indonesia." },
              {
                id: "c",
                text: "Indonesia memiliki kekayaan alam yang melimpah.",
              },
              {
                id: "d",
                text: "Kekayaan alam penting bagi pembangunan ekonomi.",
              },
              {
                id: "e",
                text: "Indonesia memiliki beragam jenis flora dan fauna.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf ini mendeskripsikan berbagai macam kekayaan alam Indonesia, yang semuanya merujuk pada inti bahasan di kalimat pertama: 'Indonesia memiliki kekayaan alam yang melimpah'.",
            points: 10,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Cara membuat teh manis sangat mudah. Pertama, siapkan air secukupnya dan panaskan hingga mendidih. Kemudian, masukkan teh celup ke dalam cangkir dan tuangkan air panas. Diamkan beberapa saat agar teh mengeluarkan aroma. Terakhir, tambahkan gula secukupnya sesuai selera dan aduk hingga rata.",
            question: "Ide pokok paragraf di atas adalah . . .",
            options: [
              { id: "a", text: "Cara membuat teh manis sangat mudah." },
              { id: "b", text: "Teh celup harus didiamkan beberapa saat." },
              { id: "c", text: "Tambahkan gula secukupnya sesuai selera." },
              { id: "d", text: "Panaskan air hingga mendidih." },
              { id: "e", text: "Tuangkan air panas ke dalam cangkir." },
            ],
            correctAnswer: "a",
            explanation:
              "Semua kalimat berikutnya merupakan kalimat perintah prosedural yang menjabarkan kalimat 'Cara membuat teh manis sangat mudah' di awal paragraf.",
            points: 10,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Jakarta, 10 Januari 2024 – Gempa bumi berkekuatan 5,2 skala Richter mengguncang wilayah Banten pada dini hari tadi. Gempa tersebut tidak berpotensi menimbulkan tsunami. Namun, beberapa bangunan dilaporkan mengalami kerusakan ringan.",
            question: "Ide pokok paragraf di atas adalah . . .",
            options: [
              { id: "a", text: "Gempa bumi mengguncang Banten." },
              { id: "b", text: "Gempa bumi tidak berpotensi tsunami." },
              { id: "c", text: "Beberapa bangunan rusak akibat gempa." },
              { id: "d", text: "Gempa bumi berkekuatan 5,2 SR." },
              { id: "e", text: "Gempa bumi terjadi pada dini hari." },
            ],
            correctAnswer: "a",
            explanation:
              "Kejadian utama yang diberitakan adalah gempa bumi yang mengguncang Banten. Berita lanjutannya (tsunami, kerusakan bangunan, ukuran RS) hanya keterangan pendukung mengenai kejadian tersebut.",
            points: 10,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Perubahan iklim merupakan ancaman serius bagi kehidupan di Bumi. Peningkatan suhu global menyebabkan es di kutub mencair, naiknya permukaan air laut, dan terjadinya cuaca ekstrem seperti badai dan kekeringan. Upaya untuk mengurangi dampak perubahan iklim harus dilakukan secara global dan melibatkan seluruh negara.",
            question: "Ide pokok paragraf di atas adalah . . .",
            options: [
              {
                id: "a",
                text: "Perubahan suhu global menyebabkan es mencair.",
              },
              { id: "b", text: "Perubahan iklim mengancam kehidupan di Bumi." },
              {
                id: "c",
                text: "Upaya mengurangi dampak perubahan iklim harus dilakukan secara global.",
              },
              {
                id: "d",
                text: "Cuaca ekstrem disebabkan oleh perubahan iklim.",
              },
              {
                id: "e",
                text: "Naiknya permukaan air laut akibat perubahan iklim.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Gagasan yang mendasari pengembangan paragraf ini adalah ancaman perubahan iklim terhadap kehidupan di Bumi. Pernyataan di akhir mengenai upaya mitigasi adalah simpulan tambahan dari urgensi masalah.",
            points: 10,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Ide Pokok";
      moduleDoc.description =
        "Materi mengenai definisi, perbedaan, ciri-ciri, dan cara menentukan Ide Pokok dalam suatu paragraf.";
      moduleDoc.subcategory = "Paragraf 1";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Ide Pokok",
        description:
          "Materi mengenai definisi, perbedaan, ciri-ciri, dan cara menentukan Ide Pokok dalam suatu paragraf.",
        subcategory: "Paragraf 1",
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

seedIdePokok();
