const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedStrategiMembaca = async () => {
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
        image_url: "https://minio.sinaoo.id/sinaoo-assets/course-literasi.png", // Assuming a placeholder image or similar
        total_modules: 0,
        published: true,
      });
      console.log("Created Course:", course.name);
    } else {
      console.log("Found Course:", course.name);
    }

    const targetId = "strategi-membaca";

    const stepsData = [
      {
        title: "Materi: Pengenalan Strategi Membaca UTBK",
        type: "reading",
        status: "active",
        description:
          "Pahami apa itu Literasi Bahasa Indonesia dalam konteks UTBK serta 4 strategi utama yang efektif.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Pengantar Literasi Bahasa Indonesia</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                <span class="font-bold">Literasi Bahasa Indonesia</span> dalam UTBK (Ujian Tulis Berbasis Komputer) adalah soal yang <span class="font-bold">menguji kemampuan</span> calon mahasiswa <span class="font-bold">untuk</span> benar-benar <span class="font-bold">memahami esensi</span> dari suatu <span class="font-bold">bacaan</span> serta dapat <span class="font-bold">menganalisis argumen</span> yang ada di dalamnya.
              </p>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Jenis soal ini hampir mirip dengan UTBK Pemahaman Bacaan serta AKM Literasi, dimana terdapat pertanyaan mengenai ide pokok, permasalahan, atau kesimpulan dari teks bacaan yang disajikan.
              </p>
            </section>

            <section>
              <div class="bg-gradient-to-br from-Primary-50 to-blue-50 rounded-xl p-6 md:p-8 border border-Primary-200">
                <p class="text-body-l text-Grayscale-800 mb-6">
                  Untuk menghadapi UTBK, khususnya pada bagian tes membaca seperti Literasi Bahasa Indonesia, <span class="font-bold">strategi membaca</span> yang digunakan <span class="font-bold text-Primary-800">harus efektif dan efisien</span>.
                </p>
                <div class="bg-white p-5 rounded-lg border border-Primary-200">
                  <h5 class="font-bold text-Primary-800 text-h5 mb-3 border-b border-Primary-100 pb-2">
                    Berikut adalah beberapa strategi membaca yang bisa digunakan:
                  </h5>
                  <ul class="list-decimal pl-5 space-y-2 text-body-l font-bold text-Grayscale-900">
                    <li>Membaca Cepat (Skimming dan Scanning)</li>
                    <li>Membaca Kritis</li>
                    <li>Membaca Intensif</li>
                    <li>Membaca Ekstensif</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Materi: Skimming, Scanning, dan Kritis",
        type: "reading",
        status: "locked",
        description:
          "Memahami teknik membaca cepat (Skimming & Scanning) serta membaca kritis beserta tipe soalnya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Membaca Cepat (Skimming dan Scanning)
              </h3>

              <div class="space-y-6">
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-blue-700 flex items-center gap-2 mb-3">
                    &bull; Skimming
                  </h4>
                  <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 border-l-2 border-Grayscale-300 pl-3">
                    Skimmimg adalah <span class="text-red-500 font-bold">membaca cepat</span> untuk <span class="text-red-500 font-bold">menemukan inti teks</span> atau <span class="text-red-500 font-bold">ide pokok</span> tanpa harus membaca secara detail.
                  </p>
                  <div class="space-y-2 text-body-l text-Grayscale-800 mt-4 bg-Grayscale-50 p-4 rounded-lg">
                    <p class="m-0"><span class="font-bold text-Grayscale-900">Cara &rarr;</span> membaca judul, awal dan akhir kalimat di setiap paragraf, serta kesimpulannya.</p>
                    <p class="m-0"><span class="font-bold text-Grayscale-900">Tipe soal &rarr;</span> soal yang menanyakan ide pokok atau kesimpulan.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-blue-700 flex items-center gap-2 mb-3">
                    &bull; Scanning
                  </h4>
                  <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 border-l-2 border-Grayscale-300 pl-3">
                    Scanning adalah <span class="text-red-500 font-bold">membaca cepat</span> untuk <span class="text-red-500 font-bold">menemukan informasi spesifik</span>, seperti <span class="text-red-500 font-bold">angka</span>, <span class="text-red-500 font-bold">nama</span>, atau <span class="text-red-500 font-bold">istilah tertentu.</span>
                  </p>
                  <div class="space-y-2 text-body-l text-Grayscale-800 mt-4 bg-Grayscale-50 p-4 rounded-lg">
                    <p class="m-0"><span class="font-bold text-Grayscale-900">Cara &rarr;</span> fokus mencari kata kunci yang relevan dengan pertanyaan.</p>
                    <p class="m-0"><span class="font-bold text-Grayscale-900">Tipe soal &rarr;</span> soal yang menanyakan data, fakta, atau detail tertentu dalam teks.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Membaca Kritis
              </h3>
              
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                  Membaca kritis adalah <span class="text-red-500 font-bold">kegiatan membaca</span> yang dilakukan <span class="text-red-500 font-bold">guna memberikan respon</span> atas ide-ide yang dituangkan pengarang dalam teks yang ditulisnya. Membaca kritis juga dapat <span class="text-red-500 font-bold">mengidentifikasi kelebihan, kekurangan</span> dari <span class="text-red-500 font-bold">opini</span> dan <span class="text-red-500 font-bold">argumen</span> dalam teks.
                </p>
                <div class="space-y-3 text-body-l text-Grayscale-800 bg-Primary-50 p-4 rounded-lg border-l-4 border-Primary-400">
                  <p class="m-0"><span class="font-bold text-Grayscale-900">Cara &rarr;</span> fokus pada argumen, fakta, dan opini dalam bacaan lalu diidentifikasi untuk menemukan kekurangan atau kelemahan.</p>
                  <p class="m-0"><span class="font-bold text-Grayscale-900">Tipe soal &rarr;</span> soal yang meminta tanggapan terhadap opini, argumen, dan ide yang terdapat dalam teks serta soal yang menanyakan kelebihan dan kekurangan teks.</p>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Materi: Intensif dan Ekstensif",
        type: "reading",
        status: "locked",
        description:
          "Memahami strategi lanjutan membaca teliti yang menyeluruh, serta membaca meluas untuk mendapatkan gagasan utuh.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Membaca Intensif
              </h3>

              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                  Membaca intensif adalah kegiatan <span class="text-red-500 font-bold">membaca</span> dengan <span class="text-red-500 font-bold">cermat, teliti</span>, dan <span class="text-red-500 font-bold">seksama</span>. Membaca secara intensif juga dikenal sebagai <span class="text-red-500 font-bold">membaca hati-hati dan menyeluruh</span>. Mengapa harus hati-hati dan teliti? Karena tujuannya adalah <span class="text-red-500 font-bold">untuk memiliki pemahaman</span> yang <span class="text-red-500 font-bold">rinci</span> dan <span class="text-red-500 font-bold">komprehensif</span> dari teks yang dibaca.
                </p>

                <div class="space-y-3 text-body-l text-Grayscale-800 bg-Primary-50 p-4 rounded-lg border-l-4 border-Primary-400">
                  <p class="m-0"><span class="font-bold text-Grayscale-900">Cara &rarr;</span> membaca dan memahami teks secara menyeluruh, teliti, rinci, seksama dan berhati-hati.</p>
                  <p class="m-0"><span class="font-bold text-Grayscale-900">Tipe soal &rarr;</span> soal yang teksnya berupa artikel ilmiah, ulasan buku atau film, dan kutipan literatur.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Membaca Ekstensif
              </h3>

              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                  Membaca ekstensif adalah <span class="text-red-500 font-bold">membaca secara luas untuk memahami isi</span> atau <span class="text-red-500 font-bold">gagasan utama</span> dari <span class="text-red-500 font-bold">teks secara keseluruhan</span> tanpa terlalu memperhatikan detail kecil.
                </p>

                <div class="space-y-3 text-body-l text-Grayscale-800 bg-Primary-50 p-4 rounded-lg border-l-4 border-Primary-400">
                  <p class="m-0"><span class="font-bold text-Grayscale-900">Cara &rarr;</span> fokus pada pemahaman isi teks secara umum, tanpa menitikberatkan pada detail spesifik kecuali diperlukan oleh pertanyaan.</p>
                  <p class="m-0"><span class="font-bold text-Grayscale-900">Tipe soal &rarr;</span> soal yang menanyakan tema atau topik utama dari sebuah teks.</p>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Strategi dan Teknis Membaca - Bagian 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/iNakSCi-KOE",
        description:
          "Video pengantar tentang berbagai teknik dan strategi membaca teks pada soal-soal berbasis literasi pemahaman.",
      },
      {
        title: "Video: Strategi dan Teknis Membaca - Bagian 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/NLWVqN0eMlc",
        description:
          "Video lanjutan mengenai analisis argumen dan simulasi soal LBI UTBK secara mendalam.",
      },
      {
        title: "Kuis Strategi Membaca LBI",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Permasalahan yang paling besar dihadapi Indonesia saat ini adalah sampah karena sudah tidak terkontrol lagi. Ada plastik, yang menjadi salah satu diantara banyak kendala yang sangat berpengaruh besar bagi Indonesia. Perlu adanya langkah efektif yang bisa memangkas jumlah sampah plastik ini.\nSampah yang tidak terkontrol menimbulkan banyak bencana seperti banjir, masyarakat masih banyak membuang sampah sembarangan. Maka, perlu adanya pendidikan mengenai sampah dan cara membuang sampah dengan baik supaya tidak salah. Pemerintah pun perlu memberi sanksi tegas jika ada masyarakat yang membuang sampah sembarangan.",
            question:
              "Berdasarkan opini dalam teks tersebut, manakah tanggapan yang paling tepat dan menunjukkan pemahaman kritis terhadap solusi yang ditawarkan?",
            options: [
              {
                id: "a",
                text: "Masalah utama yang dihadapi Indonesia bukanlah sampah, melainkan kurangnya fasilitas pengelolaan sampah yang memadai",
              },
              {
                id: "b",
                text: "Pendidikan mengenai sampah dan sanksi tegas adalah langkah efektif yang sepenuhnya dapat mengatasi permasalahan sampah di Indonesia.",
              },
              {
                id: "c",
                text: "Meningkatkan kesadaran masyarakat melalui pendidikan lingkungan dan pengelolaan sampah yang baik harus diimbangi dengan infrastruktur dan regulasi yang mendukung",
              },
              {
                id: "d",
                text: "Sampah plastik tidak dapat dikendalikan karena masyarakat Indonesia tidak mampu mengubah kebiasaan membuang sampah sembarangan.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Tanggapan kritis yang paling logis adalah menyadari bahwa pendidikan dan regulasi (sanksi tegas) dalam teks harus didukung oleh infrastruktur yang baik agar dapat mengatasi masalah lingkungan secara menyeluruh.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Judul: Dia | Penyanyi: Anji | Pencipta: Fredy | Produser: Fredy Harahap\n\nCinta yang romantis, itulah sesuatu yang bisa ditangkap dari lagu Dia yang dinyanyikan dan dipopulerkan oleh Anji dan dirilis pada bulan April 2016 silam ini. Lagu ini mengusung aliran atau genre musik pop serta melibatkan partisipasi dari dua anggota band Govinda, yaitu Jeje dan Ade.\n\nLirik-lirik yang terkandung dalam lagu Dia mengantarkan pendengar pada seseorang yang sungguh-sungguh diinginkan. Lagu ini menggambarkan betapa dalamnya cinta seseorang hingga dia memohon kepada Tuhan supaya mengukuhkan hati penyanyi agar lebih mencintainya lagi.\n\nSalah satu lagu bertemakan cinta ini memiliki lirik-lirik yang mudah diingat dan nada yang indah. Secara umum, lagu Dia cocok untuk orang yang sedang dimabuk cinta dan mengingatkan pendengar kepada Tuhan yang sudah mempertemukannya kepada orang yang dicintainya.",
            question:
              "Berdasarkan teks di atas, manakah pernyataan yang paling sesuai dengan makna dan pesan lagu “Dia”?",
            options: [
              {
                id: "a",
                text: "Lagu “Dia” hanya cocok untuk pendengar yang sedang dimabuk cinta dan melupakan unsur spiritual",
              },
              {
                id: "b",
                text: "Lirik dalam lagu “Dia” menggambarkan seseorang yang berharap pada Tuhan agar bisa mencintai orang yang dicintainya dengan lebih mendalam.",
              },
              {
                id: "c",
                text: "Lagu “Dia” mengutamakan genre musik pop dengan lirik yang kompleks dan sulit dipahami oleh pendengar",
              },
              {
                id: "d",
                text: "Lirik lagu “Dia” mengajak pendengar untuk lebih mencintai sesama manusia tanpa memperhatikan hubungan dengan Tuhan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan paragraf kedua, secara eksplisit disebutkan bahwa 'Lagu ini menggambarkan betapa dalamnya cinta seseorang hingga dia memohon kepada Tuhan supaya mengukuhkan hati penyanyi agar lebih mencintainya lagi'.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Jagung (Zea mays) merupakan salah satu tumbuhan pangan yang memiliki peran signifikan dalam sektor pertanian dan penyediaan makanan. Jagung telah menjadi bahan makanan utama bagi berbagai komunitas di berbagai belahan dunia, termasuk Indonesia.\n\nTidak hanya sebagai penyedia karbohidrat, jagung juga memiliki dampak positif dalam aspek ekonomi, budaya, dan lingkungan yang sangat penting. Jagung merupakan sumber utama karbohidrat yang memberikan energi yang penting bagi manusia. Produk olahan dari jagung, seperti nasi jagung atau jagung rebus, menjadi alternatif yang kaya serat untuk pangan karbohidrat.\n\nSelain itu, jagung mengandung beragam nutrisi penting seperti vitamin B kompleks, vitamin E, serta mineral seperti magnesium dan fosfor. Jagung juga mengandung senyawa antioksidan seperti lutein dan zeaxanthin, yang memberikan manfaat khusus untuk kesehatan mata. Melalui kontribusinya terhadap gizi dan kesehatan manusia, jagung memiliki peran yang tidak dapat digantikan dalam pola makan kita.",
            question:
              "Berdasarkan teks di atas, senyawa antioksidan apa saja yang terkandung dalam jagung yang memberikan manfaat khusus untuk kesehatan mata?",
            options: [
              { id: "a", text: "Zeaxanthin dan lutein" },
              { id: "b", text: "Beta-karoten dan lutein" },
              { id: "c", text: "Vitamin E dan fosfor" },
              { id: "d", text: "Magnesium dan fosfor" },
            ],
            correctAnswer: "a",
            explanation:
              "Di dalam paragraf terakhir secara jelas (eksplisit) disebutkan bahwa 'Jagung juga mengandung senyawa antioksidan seperti lutein dan zeaxanthin, yang memberikan manfaat khusus untuk kesehatan mata'.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Sagu telah dikonsumsi oleh masyarakat Papua dan Maluku sejak berabad-abad yang lalu. Nenek moyang suku-suku di pedalaman Papua telah mengolah sagu dengan cara sangat sederhana.\nKandungan gizi dan zat karbohidrat yang tinggi pada sagu telah membuat masyarakat Papua tidak kekurangan dalam suplai makanan pokoknya. Sagu telah menjadi makanan pokok sebelum mereka mengenal beras yang dibawa oleh pendatang khususnya dari Jawa.\nOleh karena itu, kita sebaiknya menghidupkan kembali kearifan lokal dengan mengembalikan sagu sebagai makanan pokok di Papua.",
            question:
              "Berdasarkan teks tersebut, apa alasan utama sagu menjadi makanan pokok masyarakat Papua sebelum mengenal beras?",
            options: [
              {
                id: "a",
                text: "Karena sagu mudah diolah dengan teknologi modern.",
              },
              {
                id: "b",
                text: "Karena sagu mengandung gizi dan karbohidrat yang tinggi.",
              },
              {
                id: "c",
                text: "Karena sagu merupakan hasil pertanian utama di Papua.",
              },
              {
                id: "d",
                text: "Karena sagu diperkenalkan oleh pendatang dari Jawa.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Teks menjabarkan perlunya dan alasan pemakaian sagu di paragraf kedua: 'Kandungan gizi dan zat karbohidrat yang tinggi pada sagu telah membuat masyarakat Papua tidak kekurangan dalam suplai makanan pokoknya.'",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Artificial Intelligence (AI) adalah salah satu teknologi yang mengalami perkembangan pesat dalam beberapa dekade terakhir. Teknologi ini digunakan dalam berbagai bidang, mulai dari industri, pendidikan, hingga kesehatan. AI mampu memproses data dengan cepat, mempelajari pola-pola, dan membuat keputusan berdasarkan data tersebut. Di masa depan, teknologi AI diprediksi akan semakin terintegrasi dalam kehidupan manusia, seperti dalam sistem kendaraan otonom, robotika, serta aplikasi kesehatan yang dapat mendiagnosis penyakit secara otomatis. Meskipun demikian, perkembangan AI juga menimbulkan berbagai tantangan, terutama dalam hal etika dan keamanan data.",
            question: "Apa ide pokok dari paragraf tersebut?",
            options: [
              {
                id: "a",
                text: "Perkembangan teknologi AI akan sangat terbatas pada sektor industri saja.",
              },
              {
                id: "b",
                text: "Teknologi AI memiliki potensi besar untuk berkembang dalam berbagai bidang, namun juga menimbulkan tantangan etika dan keamanan data.",
              },
              {
                id: "c",
                text: "AI akan menggantikan sepenuhnya tenaga manusia dalam bidang pendidikan dan kesehatan.",
              },
              {
                id: "d",
                text: "Teknologi AI hanya bermanfaat dalam aplikasi kendaraan otonom dan robotika.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Kalimat-kalimat pada paragraf tersebut memaparkan berbagai manfaat/potensi AI dan diakhiri dengan peringatan akan tantangan etika (kalimat utamanya mencakup gagasan potensi dan tantangan). Oleh karena itu opsi B merangkum semua bahasan teks tersebut.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Sagu masih menjadi salah satu makanan pokok di beberapa daerah di Indonesia, memiliki manfaat kesehatan yang luar biasa. Salah satu manfaat utamanya adalah kemampuannya dalam menjaga kesehatan tulang dan gigi. Sagu mengandung kalsium dan fosfor yang penting untuk mempertahankan kekuatan dan kepadatan tulang serta gigi.\nDengan mengonsumsi sagu secara teratur, kita dapat mencegah masalah kesehatan seperti osteoporosis dan kerusakan gigi. Selain itu, sagu juga berperan penting dalam menjaga kesehatan jantung. Kandungan antioksidan dalam sagu membantu melindungi jantung dari kerusakan akibat radikal bebas.Ternyata, sagu juga membantu mengurangi kadar kolesterol dan trigliserida dalam darah, yang merupakan faktor risiko utama penyakit jantung. Dengan demikian, sagu dapat menjadi solusi alami untuk menjaga kesehatan jantung.\nOleh sebab itu, sagu dapat menjadi pilihan bahan makanan yang sangat baik untuk menjaga kesehatan tubuh. Kalian dapat mencoba memanfaatkan sagu sebagai bahan baku sajian makanan sehari-hari yang dapat menyehatkan tubuh.",
            question:
              "Apa saja manfaat utama dari mengonsumsi sagu secara teratur?",
            options: [
              {
                id: "a",
                text: "Meningkatkan daya ingat dan meningkatkan energi tubuh.",
              },
              {
                id: "b",
                text: "Membantu melawan infeksi dan meningkatkan kekebalan tubuh.",
              },
              {
                id: "c",
                text: "Menjaga kesehatan tulang, gigi, dan jantung, serta mengurangi kolesterol.",
              },
              {
                id: "d",
                text: "Mengurangi stres dan meningkatkan kualitas tidur.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Seperti yang dijabarkan dalam teks, sagu bermanfaat untuk menjaga kesehatan tulang dan gigi (karena kandungannya) serta menjaga kesehatan jantung dengan mengurangi kolesterol dan trigliserida.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Di tahun 1927, Cipto Mangunkusumo dianggap Belanda terlibat upaya sabotase, sehingga Cipto Mangunkusumo dibuang ke Banda Neira. Dalam pembuangan, penyakit asmanya kambuh. Saat Cipto Mangunkusumo diminta tanda tangan perjanjian yang meminta ia melepaskan hak politiknya agar beliau bisa kembali ke Jawa untuk berobat, Cipto Mangunkusumo dengan tegas menyatakan bahwa lebih baik beliau mati di Banda.\nCipto kemudian dipindahkan ke Makassar, lalu ke Sukabumi pada tahun 1940. Sayangnya, udara Sukabumi cukup dingin sehingga kurang baik bagi kesehatan beliau. Untuk itu, beliau dipindahkan kembali ke Jakarta hingga Dokter Cipto Mangunkusumo wafat pada 8 Maret 1943.",
            question: "Kapan Dokter Cipto Mangunkusumo wafat?",
            options: [
              { id: "a", text: "1927" },
              { id: "b", text: "1940" },
              { id: "c", text: "8 Maret 1940" },
              { id: "d", text: "8 Maret 1943" },
            ],
            correctAnswer: "d",
            explanation:
              "Kalimat terakhir dalam teks yang menceritakan riwayatnya dengan tegas menyatakan '...hingga Dokter Cipto Mangunkusumo wafat pada 8 Maret 1943.'",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Kesehatan gigi dan mulut sering kali dianggap sepele, padahal kesehatan mulut yang buruk dapat menyebabkan berbagai masalah kesehatan yang lebih serius. Sisa makanan yang menempel pada gigi bisa menyebabkan penumpukan plak, yang jika tidak dibersihkan, akan memicu infeksi pada gusi.\nSelain itu, kesehatan mulut yang buruk juga berisiko menyebabkan penyakit lain seperti diabetes dan penyakit jantung. Oleh karena itu, sangat penting untuk menjaga kebersihan mulut dengan rajin menyikat gigi minimal dua kali sehari, menggunakan benang gigi, dan rutin memeriksakan diri ke dokter gigi.",
            question:
              "Apa dampak langsung dari kesehatan mulut yang buruk yang disebutkan dalam teks?",
            options: [
              {
                id: "a",
                text: "Menyebabkan penurunan daya ingat dan gangguan tidur.",
              },
              {
                id: "b",
                text: "Menyebabkan penumpukan plak yang dapat memicu infeksi pada gusi",
              },
              {
                id: "c",
                text: "Mengurangi kecerdasan dan kemampuan motorik tubuh.",
              },
              { id: "d", text: "Menghambat proses pencernaan makanan." },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf pertama memuat fakta tersebut: 'Sisa makanan yang menempel pada gigi bisa menyebabkan penumpukan plak, yang jika tidak dibersihkan, akan memicu infeksi pada gusi.'",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Perubahan iklim yang terjadi saat ini memberikan dampak besar terhadap ekosistem laut di seluruh dunia. Peningkatan suhu air laut menyebabkan pemutihan terumbu karang yang merupakan habitat bagi berbagai jenis ikan. Selain itu, kenaikan permukaan air laut juga mengancam keberlangsungan hidup spesies laut yang bergantung pada ekosistem pesisir.\nPenurunan populasi ikan akibat perubahan iklim ini tidak hanya berdampak pada ekosistem laut, tetapi juga pada manusia yang bergantung pada hasil laut sebagai sumber pangan. Oleh karena itu, upaya untuk mengurangi emisi gas rumah kaca dan menjaga keseimbangan ekosistem laut menjadi sangat penting untuk dilakukan.",
            question:
              "Apa yang menjadi alasan utama mengapa perubahan iklim berdampak pada kehidupan manusia?",
            options: [
              {
                id: "a",
                text: "Peningkatan suhu air laut yang menyebabkan pemutihan terumbu karang dan menurunnya populasi ikan.",
              },
              {
                id: "b",
                text: "Penurunan kualitas air laut yang menyebabkan kelangkaan air bersih.",
              },
              {
                id: "c",
                text: "Kenaikan permukaan air laut yang merusak sumber daya alam di daratan.",
              },
              {
                id: "d",
                text: "Perubahan pola cuaca yang mengganggu musim tanam pertanian.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Teks menjelaskan secara terperinci bahwa rentetan dampak dari peningkatan suhu, mulai dari matinya terumbu karang yang menyusutkan populasi ikan, berimbas langsung pada manusia karena ikan merupakan sumber makanan penting.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Kemacetan di Jakarta telah mencapai tahap yang memprihatinkan. Setiap pagi, jejeran kendaraan roda empat maupun roda dua memenuhi setiap jalan di Jakarta. Bahkan, bukan hanya pagi hari saja, sore hari pun jalan-jalan di Jakarta akan mengalami penumpukan kendaraan.\nKurangnya minat pengguna jalan untuk memilih transportasi umum menjadi salah satu penyebabnya. Mereka lebih memilih untuk mengendarai kendaraan pribadi daripada naik kendaraan umum. Selain itu, jumlah kendaraan yang selalu meningkat setiap tahun tidak diimbangi dengan perluasan jalan-jalan di Jakarta. Akibatnya, kemacetan di Jakarta mencapai tahap yang sangat memprihatinkan.",
            question:
              "Apa penyebab utama kemacetan di Jakarta menurut teks tersebut?",
            options: [
              { id: "a", text: "Transportasi umum yang terlalu murah." },
              {
                id: "b",
                text: "Kurangnya minat masyarakat menggunakan transportasi umum.",
              },
              { id: "c", text: "Perluasan jalan yang terlalu cepat." },
              { id: "d", text: "Banyaknya jalan alternatif di Jakarta." },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf kedua kalimat pertama yang merupakan ide utamanya menyatakan 'Kurangnya minat pengguna jalan untuk memilih transportasi umum menjadi salah satu penyebabnya.'",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Tubuh manusia tak ubahnya lingkungan hidup di sekitarnya. Tubuh sejatinya harus dirawat dan dijaga. Jika tidak, tubuh akan mudah terkena berbagai penyakit. Sama seperti dalam menjaga lingkungan hidup di sekitar kita.\nLingkungan sekitar sejatinya harus kita rawat dan kita jaga, agar lingkungan tidak mudah rusak. Jika lingkungan di sekitar terlantar atau bahkan rusak, maka lingkungan tersebut akan membahayakan manusia itu sendiri.\nMaka, kita harus merawat lingkungan hidup di sekitar seperti saat merawat tubuh kita sendiri. Hal ini yang dimaksud dengan melestarikan lingkungan. Lingkungan yang sehat dan terawat, mencerminkan kita sendiri yang hidup di sekitarnya.",
            question: "Apa kesimpulan utama dari teks tersebut?",
            options: [
              {
                id: "a",
                text: "Merawat tubuh manusia lebih penting daripada lingkungan.",
              },
              {
                id: "b",
                text: "Lingkungan yang rusak tidak berpengaruh pada manusia.",
              },
              {
                id: "c",
                text: "Merawat lingkungan sama pentingnya dengan merawat tubuh.",
              },
              {
                id: "d",
                text: "Lingkungan hanya perlu dirawat saat sudah rusak.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kesimpulan logis ini didapat dari keseluruhan teks yang sering kali menganalogikan tubuh manusia dengan lingkungan secara ekuivalen dan menyarankan perlunya merawat keduanya secara seimbang.",
            points: 6,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Judul Novel: Perahu Kertas | Karya: Dewi Lestari\n\nPerahu Kertas menceritakan kisah Kugy, seorang gadis yang senang berkhayal dan menulis. Khayalan-khayalannya acap kali absurd. Salah satunya adalah membayangkan bertemu Dewa Neptunus.\nIa bercita-cita menjadi pendongeng dan mendapat halangan dari orang tuanya. Di pertengahan cerita, ia bertemu dengan sosok Keenan yang mempunyai hobi berbeda. Perkenalan Kugy dengan Keenan membuat alur cerita makin kompleks. Pasalnya, Keenan memiliki kegemaran melukis. Keduanya pun mulai menjalin ikatan pertemanan dan memadukan hobi masing-masing. Kugy sebagai pendongeng sementara Keenan yang menggambarkan cerita-ceritanya.\nSetelah sempat bersatu, konflik muncul karena Keenan dekat dengan Wanda, pacarnya. Selain kisah asmara, novel Perahu Kertas juga menyisipi mengenai pendewasaan diri serta perjuangan menuju mimpi.\nNovel ini mempunyai kedekatan dengan hidup banyak orang. Cinta, mimpi, dan rintangan. Selain itu, penulisannya pun sangat sederhana sehingga mudah dimengerti oleh pembaca. Salah satu yang juga menjadi kelebihan dari novel ini adalah plotnya yang tidak membosankan.\nNamun, karena halaman yang cukup tebal dengan alur yang terkadang cepat kemudian tiba-tiba lambat, acap kali pembaca kurang fokus dan kehilangan konsentrasi.",
            question:
              "Apa hal yang membuat novel Perahu Kertas memiliki kedekatan dengan hidup banyak orang?",
            options: [
              { id: "a", text: "Kisah tentang cinta, mimpi, dan rintangan." },
              { id: "b", text: "Hubungan persahabatan antara Kugy dan Keenan" },
              { id: "c", text: "Kisah tentang perjuangan menjadi pendongeng" },
              { id: "d", text: "Hubungan cinta antara Keenan dan Wanda" },
            ],
            correctAnswer: "a",
            explanation:
              "Pada paragraf keempat, secara eksplisit disebutkan 'Novel ini mempunyai kedekatan dengan hidup banyak orang. Cinta, mimpi, dan rintangan.'",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Sebenarnya belajar tak harus di sekolah, tetapi sekarang baik orang tua maupun anak anak telah mempunyai mind set bahwa belajar ya dari sekolah. Belajar otodidak membuktikan kemampuan seorang anak akan lebih meningkat diambil dari hasil sebuah penelitian.\nSeseorang akan belajar sesuai dengan visi misi yang ia ciptakan dan mengatur apa yang mereka ingin dicapai dengan ini banyak sekali pembelajaran yang mereka dapat, seperti bagaimana mengatur waktu, memasang target, dan memecahkan masalah sendiri.",
            question:
              "Berdasarkan teks, apa yang menjadi keunggulan belajar otodidak dibandingkan belajar di sekolah?",
            options: [
              {
                id: "a",
                text: "Belajar otodidak membutuhkan bantuan orang tua secara langsung.",
              },
              {
                id: "b",
                text: "Belajar otodidak meningkatkan kemampuan anak berdasarkan hasil penelitian.",
              },
              {
                id: "c",
                text: "Belajar otodidak membantu anak-anak bersosialisasi lebih baik.",
              },
              {
                id: "d",
                text: "Belajar otodidak membatasi pembelajaran sesuai kurikulum sekolah.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan teks tertulis secara lugas pada paragraf pertama bahwa 'Belajar otodidak membuktikan kemampuan seorang anak akan lebih meningkat diambil dari hasil sebuah penelitian.'",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Dua tahun terakhir, terhitung semenjak Boeing B-737 milik perusahaan penerbangan Aloha Airlines kecelakaan, berita pesawat tua mencuat ke permukaan. Hal Ini mampu dimaklumi karena pesawat yang badannya koyak sepanjang empat meter itu telah dioperasikan lebih dari 19 tahun.\nHal ini, membuat orang beralasan dan cemas terbang menggunakan pesawat berusia tua. Di Indonesia, lebih mengejutkan, menurut data statistik ada 60% pesawat yang beroperasi merupakan pesawat tua. Amankah? Kalau memang aman, kemudian bagaimana cara merawatnya dan seberapa biayanya sebagai akibat perawatan pesawat tua tersebut?\nUntuk menaikkan perekonomian negara, kita wajib menaikkan pembangunan pada bidang industri penerbangan.",
            question:
              "Berdasarkan teks, berapa persen pesawat yang beroperasi di Indonesia merupakan pesawat tua?",
            options: [
              { id: "a", text: "40%" },
              { id: "b", text: "50%" },
              { id: "c", text: "60%" },
              { id: "d", text: "70%" },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf kedua menyebutkan secara gamblang 'Di Indonesia, lebih mengejutkan, menurut data statistik ada 60% pesawat yang beroperasi merupakan pesawat tua.'",
            points: 6,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Donor darah adalah tindakan yang dapat menyelamatkan nyawa banyak orang. Dalam kondisi darurat, seperti kecelakaan atau operasi besar, pasien sering kali membutuhkan transfusi darah dalam jumlah besar. Melalui donor darah, stok darah di rumah sakit dan bank darah dapat terjaga, sehingga siap digunakan kapan pun dibutuhkan.\nSelain itu, donor darah juga memiliki manfaat kesehatan bagi pendonornya, seperti meningkatkan produksi sel darah baru dan membantu mendeteksi penyakit sejak dini. Oleh karena itu, partisipasi aktif masyarakat dalam program donor darah sangat dibutuhkan untuk menjaga ketersediaan stok darah yang memadai.",
            question:
              "Mengapa partisipasi aktif masyarakat dalam donor darah dianggap sangat penting?",
            options: [
              {
                id: "a",
                text: "Untuk meningkatkan jumlah pendonor secara signifikan",
              },
              {
                id: "b",
                text: "Untuk memastikan stok darah selalu tersedia saat dibutuhkan",
              },
              {
                id: "c",
                text: "Untuk memberikan manfaat kesehatan bagi pasien operasi",
              },
              {
                id: "d",
                text: "Untuk membantu mengurangi jumlah kecelakaan yang membutuhkan darah",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Di paragraf penutup teks disimpulkan bahwa 'Oleh karena itu, partisipasi aktif masyarakat dalam program donor darah sangat dibutuhkan untuk menjaga ketersediaan stok darah yang memadai.'",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Strategi Membaca";
      moduleDoc.description =
        "Pelajari esensi Literasi Bahasa Indonesia di UTBK serta 4 strategi utama: Skimming, Scanning, Kritis, Ekstensif, dan Intensif.";
      moduleDoc.subcategory = "Teknik Membaca";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Strategi Membaca",
        description:
          "Pelajari esensi Literasi Bahasa Indonesia di UTBK serta 4 strategi utama: Skimming, Scanning, Kritis, Ekstensif, dan Intensif.",
        subcategory: "Teknik Membaca",
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

seedStrategiMembaca();
