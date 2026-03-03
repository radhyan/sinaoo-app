const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedFaktaDataRelevan = async () => {
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

    const targetId = "fakta-data-relevan";

    const stepsData = [
      {
        title: "Materi: Fakta atau Data Relevan",
        type: "reading",
        status: "active",
        description:
          "Pahami perbedaan antara kalimat fakta dan kalimat opini serta cara mengidentifikasi data relevan dalam suatu teks.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Itu Fakta?</h3>
              <p class="text-body-l text-Grayscale-900 mb-6">
                Fakta adalah kenyataan atau peristiwa yang <span class="font-bold">benar-benar ada atau terjadi</span>. Fakta biasanya dapat menjawab pertanyaan <span class="font-bold">apa</span>, <span class="font-bold">siapa</span>, <span class="font-bold">di mana</span>, atau <span class="font-bold">berapa</span>.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Kalimat Fakta</h3>
              <p class="text-body-l text-Grayscale-900 mb-6">
                Secara umum kita dapat membedakan jenis-jenis dari kalimat fakta agar dapat mudah menggolongkannya. Berikut adalah jenis dari kalimat fakta:
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Primary-200">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4 text-center">Fakta Umum</h4>
                  <div class="bg-Primary-50 rounded-xl p-5 mb-4 border border-Primary-100">
                    <p class="text-body-l text-Grayscale-900 m-0">
                      Kalimat fakta umum adalah kalimat fakta yang kebenarannya <span class="font-bold">berlaku selamanya atau sepanjang zaman</span>.
                    </p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-m text-Primary-700 mb-2">Contoh:</p>
                    <p class="text-body-m text-Grayscale-900 m-0">Matahari terbit di sebelah timur dan terbenam di sebelah barat.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-sm border border-Primary-200">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4 text-center">Fakta Khusus</h4>
                  <div class="bg-Primary-50 rounded-xl p-5 mb-4 border border-Primary-100">
                    <p class="text-body-l text-Grayscale-900 m-0">
                      Kalimat fakta khusus adalah kalimat fakta yang kebenarannya <span class="font-bold">hanya berlaku sementara atau dalam kurun waktu tertentu</span>.
                    </p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-m text-Primary-700 mb-2">Contoh:</p>
                    <p class="text-body-m text-Grayscale-900 m-0">Saat ini hampir seluruh dunia mengalami wabah yang sama, yaitu corona virus.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Ciri-ciri Kalimat Fakta</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200 mb-8">
                <ol class="list-decimal pl-5 space-y-3 text-body-l text-Grayscale-900">
                  <li>Dapat <span class="font-bold">dibuktikan kebenarannya</span>.</li>
                  <li>Berisi data yang bersifat <span class="font-bold">kuantitatif</span> (berupa angka) dan <span class="font-bold">kualitatif</span> (berupa pertanyaan).</li>
                  <li>Mempunyai data yang akurat baik <span class="font-bold">waktu, tanggal,</span> dan <span class="font-bold">tempat</span>.</li>
                  <li>Dikumpulkan dari <span class="font-bold">narasumber terpercaya</span>.</li>
                  <li>Bersifat <span class="font-bold">objektif</span> (data sebenarnya bukan dibuat-buat).</li>
                  <li>Menjawab pertanyaan <span class="font-bold">5W+1H</span>.</li>
                  <li>Menyatakan <span class="font-bold">kejadian yang sedang atau telah dan pernah terjadi</span>.</li>
                  <li>Informasi berasal dari <span class="font-bold">kejadian yang sebenarnya</span>.</li>
                  <li>Pengungkapan fakta cenderung deskriptif dan <span class="font-bold">apa adanya</span>.</li>
                  <li>Penalaran fakta cenderung <span class="font-bold">induktif</span>.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Contoh Kalimat Fakta</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <div class="space-y-6">
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-l text-Primary-700 mb-2">Berdasarkan kejadian yang sebenarnya</p>
                    <p class="text-body-l text-Grayscale-900 m-0">Ir. Soekarno adalah presiden pertama Republik Indonesia.</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-l text-Primary-700 mb-2">Berdasarkan kebenaran umum</p>
                    <p class="text-body-l text-Grayscale-900 m-0">Jantung bertugas memompa darah.</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="font-bold text-body-l text-Primary-700 mb-2">Berdasarkan peristiwa yang benar terjadi</p>
                    <p class="text-body-l text-Grayscale-900 m-0">Gunung Semeru meletus pada <span class="font-bold text-red-500">Sabtu, 4 Desember 2021</span> dan mengeluarkan awan panas guguran.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Fakta dan Opini",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/5J-UuvkpTIo",
        description:
          "Tonton video berikut untuk memahami perbedaan fakta dan opini dalam teks.",
      },
      {
        title: "Video: Latihan Soal Fakta dan Data",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/i2mBcUv8I0s",
        description:
          "Video latihan dan pembahasan soal mengenai fakta dan data relevan.",
      },
      {
        title: "Kuis Fakta atau Data Relevan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "(1) Pemerintah telah banyak mengalokasikan dana untuk pengadaan mesin pengering gabah. (2) Kedepannya, mesin pengering gabah ini mampu menaikkan daya tawar petani di hadapan Bulog maupun pedagang lainnya. (3) Oleh karena itu, pemerintah harus senantiasa memperhatikan nasib petani. (4) Bukan hanya sekedar janji tanpa tindakan lalu berani mengklaim telah memperhatikan petani.",
            question: "Kalimat yang merupakan fakta, terdapat pada nomor ...",
            options: [
              { id: "a", text: "Kalimat (1)" },
              { id: "b", text: "Kalimat (2)" },
              { id: "c", text: "Kalimat (3)" },
              { id: "d", text: "Kalimat (4)" },
              { id: "e", text: "Semua benar" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (1) 'Pemerintah telah banyak mengalokasikan dana untuk pengadaan mesin pengering gabah' merupakan fakta karena menyatakan tindakan nyata yang telah dilakukan pemerintah dan dapat diverifikasi. Kalimat (2) mengandung kata 'Kedepannya' dan 'mampu' yang menunjukkan perkiraan/harapan (opini). Kalimat (3) mengandung kata 'harus' yang merupakan saran (opini). Kalimat (4) merupakan penilaian/kritik subjektif (opini).",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question:
              "Manakah kalimat di bawah ini yang termasuk ke dalam fakta ...",
            options: [
              {
                id: "a",
                text: "Udara Bogor terasa sangat dingin",
              },
              {
                id: "b",
                text: "Suhu udara di Bogor mencapai 24\u00BA",
              },
              {
                id: "c",
                text: "Kali ini dinginnya melebihi hari-hari sebelumnya",
              },
              {
                id: "d",
                text: "Para pengguna jalan menyambut penertiban lalu lintas dengan senang",
              },
              {
                id: "e",
                text: "Warga berharap pembangunan tol Semarang \u2013 Solo supaya bisa dipercepat",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat 'Suhu udara di Bogor mencapai 24\u00BA' merupakan fakta karena menyebutkan data angka yang terukur dan dapat dibuktikan kebenarannya. Pilihan A mengandung kata 'sangat' (subjektif). Pilihan C menggunakan perbandingan subjektif 'melebihi'. Pilihan D mengandung kata 'senang' yang merupakan perasaan subjektif. Pilihan E mengandung kata 'berharap' yang menandakan harapan (opini).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Manakah kalimat di bawah ini yang termasuk ke dalam kalimat fakta ...",
            options: [
              {
                id: "a",
                text: "Hotel ini cukup representatif untuk dijadikan sebagai tempat beristirahat selama kunjunganku ke Yogyakarta.",
              },
              {
                id: "b",
                text: "Badan Pertahanan Nasional menyatakan ada sekitar 73 juta hektar lahan di Indonesia yang terlantar.",
              },
              {
                id: "c",
                text: "Pemerintah dituntut memiliki kebijakan yang jelas untuk lahan pertanian, industri, dan lainnya.",
              },
              {
                id: "d",
                text: "Masyarakat berharap Indonesia mampu untuk terus meningkatkan pertumbuhan ekonomi.",
              },
              {
                id: "e",
                text: "Udara di Bandung terasa sangat dingin.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat 'Badan Pertahanan Nasional menyatakan ada sekitar 73 juta hektar lahan di Indonesia yang terlantar' merupakan fakta karena bersumber dari lembaga resmi (BPN) dan menyebutkan data angka (73 juta hektar). Pilihan A mengandung kata 'cukup representatif' (penilaian subjektif). Pilihan C mengandung kata 'dituntut' (saran/opini). Pilihan D mengandung kata 'berharap' (harapan/opini). Pilihan E mengandung kata 'sangat' (subjektif).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Kalimat berikut yang merupakan fakta adalah ...",
            options: [
              {
                id: "a",
                text: "Tingginya air yang menggenangi ruas jalan di Wonokromo memang tak seberapa.",
              },
              {
                id: "b",
                text: "Berdasarkan rilis BMG kelas I Juanda, kondisi berawan hingga hujan masih akan turun mewarnai langit Surabaya.",
              },
              {
                id: "c",
                text: "Terhambatnya penurunan tinggi air di ruas jalan Tenggelis kemungkinan disebabkan oleh tersumbatnya air.",
              },
              {
                id: "d",
                text: "Aksi blokir di jalan tol Pondok Aren Jakarta kembali terjadi.",
              },
              {
                id: "e",
                text: "Semua orang setuju bahwa membaca buku itu menyenangkan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat 'Berdasarkan rilis BMG kelas I Juanda...' merupakan fakta karena bersumber dari lembaga resmi (BMG/Badan Meteorologi dan Geofisika) yang merupakan sumber informasi cuaca yang kredibel. Meskipun berisi prediksi cuaca, data tersebut dikeluarkan oleh lembaga yang berwenang berdasarkan pengamatan ilmiah. Pilihan A mengandung kata 'tak seberapa' (subjektif). Pilihan C mengandung kata 'kemungkinan' (perkiraan). Pilihan D tidak menyebutkan sumber resmi dan kurang data spesifik. Pilihan E mengandung generalisasi 'semua orang' yang tidak bisa dibuktikan.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "1) Peserta Perkebunan Inti Rakyat (PIR) kelapa sawit, di Desa Suka Makmur bukan hanya memerlukan rumah yang layak huni. 2) Mereka tahu betul, arti rumah yang sehat dan indah. 3) Untuk bisa memilih rumah, mereka melakukan arisan di antara kelompok tani. 4) Sekarang di desa yang ditempati tahun 1986 itu telah berdiri 200 rumah permanen dengan ukuran rata-rata 12 x 14 meter. 5) Dua puluh anggota kelompok tani Bunga Kantil memiliki rumah baru dan permanen.",
            question: "Kalimat yang berisi fakta terdapat pada nomor ...",
            options: [
              { id: "a", text: "1 dan 2" },
              { id: "b", text: "1 dan 3" },
              { id: "c", text: "3 dan 4" },
              { id: "d", text: "4 dan 5" },
              { id: "e", text: "3 dan 5" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat (4) menyebutkan data konkret: 'tahun 1986', '200 rumah permanen', dan 'ukuran rata-rata 12 x 14 meter' yang semuanya merupakan angka terukur dan dapat diverifikasi. Kalimat (5) menyebutkan data spesifik: 'Dua puluh anggota' dan 'kelompok tani Bunga Kantil' yang juga dapat dibuktikan. Kalimat lain bersifat opini: (1) mengandung kata 'layak' (subjektif), (2) mengandung kata 'sehat dan indah' (penilaian), (3) mendeskripsikan upaya tanpa data spesifik.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "1) RSU ini direncanakan merupakan satu di antara alternatif tepat pemilihan pengobatan di kota ini. 2) Di RSU ini dipasang dua alat canggih/ECG untuk mendeteksi kelainan jantung buatan Jerman. 3) Pengelola RSU berusaha melengkapi pengobatan setingkat RSU di kota besar. 4) Jika pertambahan penduduk meningkat 2 persen per tahun, RSU ini menjadi alternatif pertama dalam pemilihan kesehatan. 5) Ada kasus bahwa pelayanan kesehatan bermutu lebih mudah dikenal dari kecanggihan infrastruktur klinik maupun rumah sakit.",
            question: "Kalimat yang mengandung fakta terdapat pada nomor ...",
            options: [
              { id: "a", text: "Kalimat 1" },
              { id: "b", text: "Kalimat 2" },
              { id: "c", text: "Kalimat 3" },
              { id: "d", text: "Kalimat 4" },
              { id: "e", text: "Kalimat 5" },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat (2) 'Di RSU ini dipasang dua alat canggih/ECG untuk mendeteksi kelainan jantung buatan Jerman' merupakan fakta karena menyebutkan data konkret berupa jumlah alat ('dua alat'), jenis alat ('ECG'), fungsi ('mendeteksi kelainan jantung'), dan asal pembuatan ('buatan Jerman'). Kalimat (1) mengandung kata 'direncanakan' dan 'tepat' (opini). Kalimat (3) mengandung kata 'berusaha' (upaya/harapan). Kalimat (4) mengandung kata 'Jika' (pengandaian). Kalimat (5) mengandung kata 'bermutu' dan 'lebih mudah' (penilaian subjektif).",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "1) Udara yang dihirup makhluk hidup mempunyai kadar oksigen 21 persen. 2) Kadar tersebut harus tetap terpelihara. 3) Namun setiap tahun, diperkirakan dunia industri akan menghabiskan kira-kira 41 persen oksigen untuk menggerakkan roda perindustriannya. 4) Kalau diperkirakan dalam bilangan nyata, oksigen dihabiskan oleh industri kurang lebih 400 ton setiap menit yang akan diambil dari udara tanpa pengembalian. 5) Meskipun bilangan itu cukup besar, keadaan itu diperkirakan belum sampai membuat kita sesak napas.",
            question:
              "Kalimat fakta dalam paragraf tersebut terdapat pada kalimat nomor ...",
            options: [
              { id: "a", text: "Kalimat 1" },
              { id: "b", text: "Kalimat 2" },
              { id: "c", text: "Kalimat 3" },
              { id: "d", text: "Kalimat 4" },
              { id: "e", text: "Kalimat 5" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat (4) menyebutkan data yang spesifik dan terukur: 'oksigen dihabiskan oleh industri kurang lebih 400 ton setiap menit'. Meskipun ada kata 'diperkirakan' dan 'kurang lebih', data 400 ton per menit merupakan bilangan nyata yang disebut sebagai hasil perhitungan. Kalimat (1) sekilas terlihat fakta (21 persen), tetapi merupakan pengetahuan umum yang menjadi konteks. Kalimat (2) mengandung kata 'harus' (saran). Kalimat (3) mengandung kata 'diperkirakan' dan 'kira-kira' tanpa bilangan nyata. Kalimat (5) mengandung kata 'cukup besar' dan 'diperkirakan' (subjektif).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "1) Sebagai satu di antara negara dengan hutan terluas di dunia, Indonesia menjadi incaran investor kegiatan ekonomi ekstraktif. 2) Kini luas hutan di Indonesia yang mengalami deforestasi atau penggundulan dan degradasi atau penurunan kualitas tutupan hutan mencapai 56 juta hektar. 3) Perbaikan hutan pada tahun ini diharapkan dapat mencapai 1 juta hektar. 4) Akan tetapi, itu tergantung pada anggaran. 5) Tahun ini Departemen Kehutanan mengajukan anggaran Rp8,5 triliun ke Departemen Keuangan.",
            question:
              "Kalimat fakta dalam paragraf di atas terdapat pada nomor ...",
            options: [
              { id: "a", text: "1 dan 2" },
              { id: "b", text: "1 dan 3" },
              { id: "c", text: "2 dan 3" },
              { id: "d", text: "2 dan 5" },
              { id: "e", text: "3 dan 4" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat (2) menyebutkan data konkret '56 juta hektar' mengenai luas hutan yang mengalami deforestasi — ini merupakan fakta yang terukur. Kalimat (5) menyebutkan data anggaran spesifik 'Rp8,5 triliun' yang diajukan oleh lembaga resmi (Departemen Kehutanan) — ini juga merupakan fakta. Kalimat (1) merupakan pernyataan umum tanpa data spesifik. Kalimat (3) mengandung kata 'diharapkan' (harapan/opini). Kalimat (4) mengandung kata 'tergantung' yang bersifat opini/dugaan.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Olahraga sangat membantu pertahanan tubuh agar terhindar dari berbagai penyakit. Rajin berolahraga, antara lain, membuat kita dapat tidur nyenyak. Olahraga juga membuat kita menjadi orang yang selalu ceria, sehingga terhindar dari berbagai macam penyakit termasuk kanker.",
            question:
              "Fakta yang diperlukan untuk pendapat-pendapat yang ada pada cuplikan itu adalah ...",
            options: [
              {
                id: "a",
                text: "Jumlah penyakit yang biasa menyerang tubuh.",
              },
              {
                id: "b",
                text: "Pengalaman tentang orang-orang yang biasa berolahraga.",
              },
              {
                id: "c",
                text: "Cara-cara berolahraga yang baik.",
              },
              {
                id: "d",
                text: "Proses perkembangbiakan kanker.",
              },
              {
                id: "e",
                text: "Jenis penyakit yang muncul akibat berolahraga.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Teks tersebut berisi pendapat/opini tentang manfaat olahraga (tidur nyenyak, ceria, terhindar penyakit). Untuk mendukung pendapat tersebut agar lebih kuat, diperlukan fakta berupa pengalaman nyata dari orang-orang yang biasa berolahraga sebagai bukti empiris. Pilihan A tidak relevan karena teks membahas manfaat olahraga, bukan jenis penyakit. Pilihan C membahas cara berolahraga, bukan mendukung klaim manfaat. Pilihan D tidak berhubungan langsung. Pilihan E justru bertentangan dengan isi teks.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "1) Perempuan memang paling rentan terhadap anemia, terutama anemia karena kekurangan zat besi. 2) Darah memang sangat penting bagi perempuan, terutama pada saat hamil zat besi itu dibagi dua, yaitu bagi si ibu dan janinnya. 3) Apabila si ibu anemia, bisa terjadi abortus, lahir prematur, dan juga kematian ibu melahirkan. 4) Padahal, kita ingat, di Indonesia, angka kematian ibu melahirkan dan kematian bayi masih cukup tinggi. 5) Bahkan, bagi janin, zat besi juga dibutuhkan, terutama juga ada kaitannya dengan kecerdasan.",
            question:
              "Fakta yang mendasari pengembangan cuplikan itu dinyatakan dalam kalimat...",
            options: [
              { id: "a", text: "1 dan 2" },
              { id: "b", text: "1 dan 3" },
              { id: "c", text: "2 dan 3" },
              { id: "d", text: "3 dan 4" },
              { id: "e", text: "4 dan 5" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat (3) menyebutkan dampak medis yang dapat dibuktikan secara ilmiah: 'bisa terjadi abortus, lahir prematur, dan juga kematian ibu melahirkan' — ini merupakan fakta medis yang dapat diverifikasi. Kalimat (4) menyatakan 'di Indonesia, angka kematian ibu melahirkan dan kematian bayi masih cukup tinggi' yang merupakan fakta berdasarkan data statistik kesehatan di Indonesia. Kalimat (1) mengandung kata 'paling rentan' (penilaian). Kalimat (2) mengandung kata 'sangat penting' (subjektif). Kalimat (5) menggunakan kata 'bahkan' dan hubungan yang masih bersifat umum.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "1) Doni memang pantas disebut sebagai maniak bola. 2) Sejak usia 11 tahun, Doni telah mendedikasikan hidupnya untuk terjun ke dunia sepak bola. 3) Kini ia berusia 30 tahun. 4) Ia mengaku tidak bisa memisahkan hidupnya dengan sepak bola.",
            question: "Manakah kalimat di atas yang berupa fakta ...",
            options: [
              { id: "a", text: "1 dan 2" },
              { id: "b", text: "3 dan 4" },
              { id: "c", text: "2 dan 3" },
              { id: "d", text: "4 dan 1" },
              { id: "e", text: "1 dan 3" },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (2) 'Sejak usia 11 tahun, Doni telah mendedikasikan hidupnya untuk terjun ke dunia sepak bola' merupakan fakta karena menyebutkan data usia yang spesifik dan peristiwa yang dapat diverifikasi. Kalimat (3) 'Kini ia berusia 30 tahun' merupakan fakta karena menyebutkan usia yang jelas dan terukur. Kalimat (1) mengandung kata 'pantas' dan 'maniak' yang merupakan penilaian subjektif (opini). Kalimat (4) merupakan pengakuan/perasaan pribadi yang bersifat subjektif.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Manakah kalimat di bawah ini yang tidak termasuk ke dalam kalimat fakta ...",
            options: [
              {
                id: "a",
                text: "Seluruh karyawan di PT Sumber Jaya harus mengajukan cuti apabila menghendaki untuk libur bekerja.",
              },
              {
                id: "b",
                text: "Kandang besi yang kotor bisa membuat hewan peliharaan merasa tidak nyaman.",
              },
              {
                id: "c",
                text: "Guru saya pernah berkata bahwa Benua Antartika merupakan tempat yang paling dingin di bumi.",
              },
              {
                id: "d",
                text: "Jika kamu ingin mendapati sekolah tersebut dalam keadaan kosong, maka datanglah pada hari minggu.",
              },
              {
                id: "e",
                text: "Penangkapan teroris terjadi dua hari yang lalu, tepatnya berada di Blok Mekar, Kecamatan Kertarahayu, Blitar.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat 'Kandang besi yang kotor bisa membuat hewan peliharaan merasa tidak nyaman' bukan fakta karena mengandung kata 'bisa' (kemungkinan) dan 'merasa tidak nyaman' yang merupakan penilaian subjektif terhadap perasaan hewan yang tidak dapat diukur secara pasti. Kalimat lain termasuk fakta: A merupakan aturan perusahaan yang berlaku, C merupakan kutipan pernyataan seseorang, D menyatakan kondisi yang dapat dibuktikan, dan E menyebutkan peristiwa nyata dengan lokasi spesifik.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "(1) Pada tahun 2013 kualitas masyarakat Indonesia semakin rendah. (2) Hal ini dilihat dari semakin meningkatnya angka pengangguran di Indonesia. (3) Tahun 2012 angka pengangguran hanya 30% dan tahun 2013 bertambah menjadi 43%. (4) Angka kriminalitas di Indonesia juga semakin meningkat. (5) Hal paling parah banyak masyarakat Indonesia yang tidak mengikuti program pemerintah wajib belajar 9 tahun.",
            question:
              "Kalimat yang berisi fakta pada paragraf tersebut adalah nomor...",
            options: [
              { id: "a", text: "Kalimat 1" },
              { id: "b", text: "Kalimat 2" },
              { id: "c", text: "Kalimat 3" },
              { id: "d", text: "Kalimat 4" },
              { id: "e", text: "Kalimat 5" },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (3) 'Tahun 2012 angka pengangguran hanya 30% dan tahun 2013 bertambah menjadi 43%' merupakan fakta karena menyebutkan data statistik berupa persentase yang spesifik (30% dan 43%) beserta tahunnya (2012 dan 2013) yang dapat diverifikasi. Kalimat (1) mengandung kata 'semakin rendah' (penilaian subjektif). Kalimat (2) menggunakan kata 'semakin meningkat' tanpa data spesifik. Kalimat (4) menggunakan kata 'semakin meningkat' (opini). Kalimat (5) mengandung kata 'paling parah' (penilaian subjektif).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "(1) Badan Pertahanan Nasional menyatakan ada 73 juta hektar lahan terlantar. (2) Lahan jutaan hektar tersebut selayaknya tidak dibiarkan terlantar. (3) Undang-undang Agraria menyebutkan semua hak atas tanah mempunyai fungsi sosial. (4) Pemerintah dituntut memiliki kebijakan dan strategi pertahanan nasional, membagi dengan jelas peruntukan lahan pertanian, industri, pemukiman, dan hutan. (5) Hal itu akan menjamin kepastian hukum sehingga setiap orang dapat bekerja dan berproduksi dengan tenang.",
            question: "Dari paragraf di atas, kalimat fakta terdapat pada ....",
            options: [
              { id: "a", text: "Kalimat (1) dan (3)" },
              { id: "b", text: "Kalimat (1) dan (4)" },
              { id: "c", text: "Kalimat (2) dan (3)" },
              { id: "d", text: "Kalimat (3) dan (4)" },
              { id: "e", text: "Kalimat (4) dan (5)" },
            ],
            correctAnswer: "a",
            explanation:
              "Kalimat (1) merupakan fakta karena bersumber dari lembaga resmi (Badan Pertahanan Nasional) dan menyebutkan data konkret '73 juta hektar'. Kalimat (3) merupakan fakta karena mengutip ketentuan hukum yang tercantum dalam Undang-undang Agraria, yang merupakan dokumen resmi negara. Kalimat (2) mengandung kata 'selayaknya' (saran/opini). Kalimat (4) mengandung kata 'dituntut' (opini/saran). Kalimat (5) mengandung kata 'akan menjamin' yang merupakan harapan/prediksi (opini).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "(1) Sebagai salah satu negara dengan hutan terluas di dunia, Indonesia menjadi incaran investor kegiatan ekonomi ekstraktif. (2) Kini luas hutan di Indonesia yang mengalami disorientasi atau penggundulan atau degradasi atau penurunan kualitas tutupan mencapai 5 juta hektar. (3) Perbaikan hutan pada tahun ini diharapkan dapat mencapai 1 juta hektar. (4) Akan tetapi, itu bergantung pada anggaran. (5) Tahun ini Departemen Kehutanan mengajukan anggaran Rp 8,5 triliun Departemen Keuangan.",
            question:
              "Kalimat fakta dalam paragraf di atas terdapat pada nomor...",
            options: [
              { id: "a", text: "(1) dan (2)" },
              { id: "b", text: "(1) dan (3)" },
              { id: "c", text: "(2) dan (4)" },
              { id: "d", text: "(2) dan (5)" },
              { id: "e", text: "(4) dan (5)" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat (2) menyebutkan data angka konkret: 'luas hutan... mencapai 5 juta hektar' yang merupakan fakta terukur tentang kondisi hutan Indonesia. Kalimat (5) menyebutkan data anggaran spesifik 'Rp 8,5 triliun' dan lembaga resmi ('Departemen Kehutanan' dan 'Departemen Keuangan') yang dapat diverifikasi. Kalimat (1) merupakan pernyataan umum. Kalimat (3) mengandung kata 'diharapkan' (harapan/opini). Kalimat (4) mengandung kata 'bergantung' yang bersifat spekulatif (opini).",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Fakta atau Data Relevan";
      moduleDoc.description =
        "Pelajari cara membedakan kalimat fakta dan opini serta mengidentifikasi data relevan dalam suatu teks.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Fakta atau Data Relevan",
        description:
          "Pelajari cara membedakan kalimat fakta dan opini serta mengidentifikasi data relevan dalam suatu teks.",
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

seedFaktaDataRelevan();
