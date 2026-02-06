const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("dotenv").config();

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKesesuaian = async () => {
  try {
    console.log("Connecting to MongoDB...");
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected.");

    const moduleName = "Kesesuaian Pernyataan";

    const stepsData = [
      {
        title: "Kesesuaian Pernyataan",
        type: "reading",
        status: "active",
        description: "Materi Bacaan",
        content: `
      <p class="mb-6 text-body-l text-Grayscale-900">
        Kesesuaian pernyataan merupakan materi yang menguji kemampuan dalam <strong>menentukan pernyataan yang sesuai berdasarkan teks, tabel, grafik, atau diagram</strong>. <em>Studymates</em> perlu <strong>mencari informasi yang sesuai pada pilihan jawaban</strong>.
      </p>

      <p class="mb-6 text-body-l text-Grayscale-900">
        Informasi yang diperoleh dapat berupa pernyataan tersurat maupun tersirat.
      </p>

      <div class="overflow-hidden mb-6 rounded-md">
        <table class="w-full text-left border-collapse rounded-md">
           <thead>
            <tr>
              <th class="text-h5 p-4 text-center text-Primary-600 font-bold border border-Primary-400" style="border-color: #3a74ea;">
                Tersurat
              </th>
              <th class="text-h5 p-4 text-center text-Primary-600 font-bold border border-Primary-400" style="border-color: #3a74ea;">
                Tersirat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea;">
                Pernyataan tertulis yang dapat ditemukan secara langsung dan jelas dalam teks.
              </td>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea;">
                Pernyataan yang disampaikan secara tidak langsung (tersembunyi) & hanya dapat ditemukan setelah menyimpulkan keseluruhan isi teks.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col gap-6 mb-8">
        <div>
           <span class="inline-block px-6 py-1 border-2 border-Primary-600 rounded-lg text-Primary-900 font-bold text-body-l">
            Kesesuaian Pernyataan Berdasarkan Teks
          </span>
        </div>

        <p class="text-body-l text-Grayscale-900 italic">
          Menentukan pernyataan yang sesuai dengan teks.
        </p>

        <ul class="list-disc pl-5 space-y-4 text-Grayscale-900">
          <li>
            <strong class="text-Primary-600 text-h5">Pernyataan Benar</strong><br/>
            Informasi pada pilihan jawaban <span class="text-Primary-600">sesuai</span> atau <span class="text-Primary-600">sama</span> dengan informasi pada teks.
          </li>
          <li>
            <strong class="text-Primary-600 text-h5">Pernyataan Salah</strong><br/>
            Informasi pada pilihan jawaban <span class="text-Primary-600">tidak sesuai</span> atau <span class="text-Primary-600">berbeda</span> dengan informasi pada teks.
          </li>
          <li>
            <strong class="text-Primary-600 text-h5">Pernyataan yang Relevan</strong><br/>
            Informasi pada pilihan jawaban <span class="text-Primary-600">relevan</span> atau <span class="text-Primary-600">nyambung dengan premis</span> pada teks.
          </li>
          <li>
            <strong class="text-Primary-600 text-h5">Pernyataan yang Tidak Relevan</strong><br/>
            Informasi pada pilihan jawaban <span class="text-Primary-600">tidak relevan</span> atau <span class="text-Primary-600">tidak nyambung dengan premis</span> pada teks.
          </li>
          <li>
            <strong class="text-Primary-600 text-h5">Pernyataan Memperkuat</strong><br/>
            Informasi baru yang <span class="text-Primary-600">mendukung</span> atau <span class="text-Primary-600">sesuai dengan informasi</span> yang ada.
          </li>
          <li>
            <strong class="text-Primary-600 text-h5">Pernyataan Memperlemah</strong><br/>
            Informasi baru yang <span class="text-Primary-600">bertentangan dengan inti teks</span> atau <span class="text-Primary-600">tidak sesuai</span> dengan informasi yang ada.
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-6 mb-8">
        <div>
          <span class="inline-block px-6 py-1 border-2 border-Primary-600 rounded-lg text-Primary-900 font-bold text-body-l">
            Kesesuaian Pernyataan Berdasarkan Tabel
          </span>
        </div>
        <p class="text-body-l text-Grayscale-900">
           Menentukan pernyataan yang sesuai dengan tabel. <br/>
           <strong>Tabel</strong>: Menampilkan data dalam baris dan kolom.
        </p>
      </div>

      <div class="flex flex-col gap-6 mb-8">
        <div>
          <span class="inline-block px-6 py-1 border-2 border-Primary-600 rounded-lg text-Primary-900 font-bold text-body-l">
            Kesesuaian Pernyataan Berdasarkan Grafik/Diagram
          </span>
        </div>
        <p class="text-body-l text-Grayscale-900">
           Menentukan pernyataan yang sesuai dengan grafik atau diagram.
        </p>
        <ul class="list-disc pl-5 space-y-1 text-Grayscale-900">
          <li>Diagram Batang</li>
          <li>Diagram Garis</li>
          <li>Diagram Lingkaran</li>
        </ul>
      </div>
      `,
      },
      {
        title: "Video Pembelajaran 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Nb4P8Xs2N_w",
        description:
          "Simak video penjelasan mengenai konsep Kesesuaian Pernyataan.",
      },
      {
        title: "Video Pembelajaran 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/gtXJcgyk8kA",
        description:
          "Lanjutan penjelasan mengenai konsep Kesesuaian Pernyataan.",
      },
      {
        title: "Kuis",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Jati yang tumbuh di Indonesia, terutama di Pulau Jawa telah diakui kualitasnya di dunia karena kayunya besar, batangnya melurus, dan polanya unik. Saat ini, harga kayu jati makin mahal karena jumlah hutan di Pulau Jawa yang makin berkurang pengalihan fungsi hutan jati menjadi lahan pertanian merupakan penyebab jumlah hutan jati di Pulau Jawa yang semakin berkurang. Namun, mahalnya harga kayu jati tidak menurunkan permintaan kayu jati karena kayu jati lebih kuat, awet, dan indah dibandingkan kayu lainnya. Selain itu, kayu jati merupakan jenis kayu pertukangan yang sangat mudah diolah. Meskipun keras, kayu jati mudah dipotong dan dikerjakan.",
            question:
              'Manakah informasi berikut yang dapat memperkuat pernyataan "Mahalnya harga kayu jati tidak menurunkan permintaan kayu jati"?',
            options: [
              {
                id: "a",
                text: "Kayu jati adalah salah satu komoditas penting bagi negara.",
              },
              {
                id: "b",
                text: "Mebel berbahan kayu jati yang dibuat perajin selalu habis terjual.",
              },
              {
                id: "c",
                text: "Belakangan ini, banyak perajin kayu jati mengganti kayu jati dengan kayu jenis lain.",
              },
              {
                id: "d",
                text: "Tinggi rendahnya permintaan kayu jati ditentukan oleh strategi pemasarannya.",
              },
              {
                id: "e",
                text: "Pemerintah membuat aturan yang mempermudah perajin kayu jati untuk mendapatkan bahan baku kayu jati.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pernyataan ini memberikan bukti empiris (fakta lapangan). Jika mebel jati 'selalu habis terjual' meskipun harganya mahal, ini adalah bukti terkuat bahwa permintaan pasar tetap tinggi.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Jati yang tumbuh di Indonesia, terutama di Pulau Jawa telah diakui kualitasnya di dunia karena kayunya besar, batangnya melurus, dan polanya unik. ... Selain itu, kayu jati merupakan jenis kayu pertukangan yang sangat mudah diolah. Meskipun keras, kayu jati mudah dipotong dan dikerjakan.",
            question:
              'Manakah informasi berikut yang memperlemah pernyataan "Kayu jati merupakan jenis kayu pertukangan yang sangat mudah diolah"?',
            options: [
              {
                id: "a",
                text: "Perajin kayu jati banyak yang merugi karena tingkat kegagalan saat mengolah kayu jati menjadi mebel tinggi.",
              },
              {
                id: "b",
                text: "Penjualan kayu jati telah menjadi mebel lebih menguntungkan dibandingkan kayu jati mentah",
              },
              {
                id: "c",
                text: "Perajin pemula dapat membuat mebel berbahan kayu jati dalam waktu singkat.",
              },
              {
                id: "d",
                text: "Makin tua umurnya, kayu jati makin mudah untuk dipotong.",
              },
              { id: "e", text: "Hasil olahan kayu jati terutama berupa mebel" },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan ini menyerang langsung klaim 'mudah diolah'. Jika tingkat kegagalan pengolahan tinggi dan menyebabkan kerugian, ini membantah secara logis bahwa kayu tersebut mudah dikerjakan.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Saat ini pemerintah daerah A sedang giat membangun hotel untuk meningkatkan pariwisata. Pemerintah berpendapat bahwa hotel dapat menarik minat wisatawan untuk berkunjung.",
            question:
              "Manakah pernyataan berikut yang akan memperlemah pendapat pemerintah tersebut?",
            options: [
              {
                id: "a",
                text: "Banyak wisatawan yang lebih tertarik berwisata ke daerah yang tidak memiliki fasilitas hotel.",
              },
              {
                id: "b",
                text: "Banyak hotel di daerah wisata yang menetapkan biaya sewa yang mahal.",
              },
              {
                id: "c",
                text: "Banyak wilayah pemukiman yang terkena dampak pembangunan hotel.",
              },
              {
                id: "d",
                text: "Pembangunan hotel membutuhkan waktu cukup lama.",
              },
              {
                id: "e",
                text: "Semua hotel yang baru dibangun telah penuh terisi oleh wisatawan.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pemerintah berasumsi Hotel -> Wisatawan Datang. Pilihan ini menunjukkan bahwa preferensi wisatawan justru sebaliknya (suka tempat tanpa hotel), sehingga strategi pemerintah menjadi tidak relevan.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              'Ahli A menyatakan, "Seseorang yang ingin berhenti merokok hendaknya menghentikan konsumsi nikotin selama 2 bulan berturut-turut"\n\nAhli B menyatakan, "Penggunaan permen karet yang mengandung nikotin mempermudah seseorang berhenti merokok."\n\nHasil penelitian menunjukkan bahwa sebagian besar orang yang gagal menghentikan kebiasaan merokok telah mencoba beberapa cara untuk menghentikan kebiasaan tersebut.',
            question:
              "Manakah pernyataan berikut yang PALING TEPAT mengenai hasil penelitian tersebut?",
            options: [
              { id: "a", text: "Memperkuat pernyataan ahli A" },
              { id: "b", text: "Memperkuat pernyataan ahli B" },
              { id: "c", text: "Memperlemah pernyataan ahli A" },
              { id: "d", text: "Memperlemah pernyataan ahli B" },
              {
                id: "e",
                text: "Tidak relevan dengan pernyataan ahli A dan ahli B",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Hasil penelitian menyebutkan penyebab kegagalan adalah 'mencoba beberapa cara' secara umum. Ini tidak membuktikan atau membantah efektivitas metode spesifik yang disarankan oleh Ahli A maupun Ahli B.",
            points: 7,
          },
          {
            id: 5,
            type: "matrix",
            context:
              "Penggunaan kompor listrik oleh masyarakat saat ini semakin meningkat. Pakar energi menyebutkan pemanfaatan kompor listrik dapat menghemat biaya rumah tangga dan ramah lingkungan.",
            question:
              "Manakah pernyataan-pernyataan berikut yang MEMPERLEMAH dan TIDAK MEMPERLEMAH pendapat pakar energi tersebut?",
            rows: [
              {
                id: "r1",
                text: "Penjualan kompor listrik di toko perlengkapan rumah tangga mengalami kenaikan sejak beberapa bulan terakhir.",
              },
              {
                id: "r2",
                text: "Harga kompor listrik semakin murah karena produsen menyadari kebutuhan",
              },
              {
                id: "r3",
                text: "Pemerintah masih menggunakan bahan bakar fosil sebagai bahan bakar pembangkit listrik.",
              },
              {
                id: "r4",
                text: "Biaya untuk membayar listrik yang dikeluarkan untuk penggunaan kompor listrik lebih tinggi daripada harga gas LPG.",
              },
              {
                id: "r5",
                text: "Agar efisien, migrasi dari kompor gas ke kompor listrik harus dibarengi dengan mengganti alat masak.",
              },
            ],
            columns: [
              { id: "weakens", text: "Memperlemah" },
              { id: "not_weakens", text: "Tidak Memperlemah" },
            ],
            correctAnswers: {
              r1: "not_weakens",
              r2: "not_weakens",
              r3: "weakens",
              r4: "weakens",
              r5: "not_weakens",
            },
            explanation:
              "Pernyataan r3 melemahkan klaim 'ramah lingkungan' karena sumber energinya masih fosil. Pernyataan r4 melemahkan klaim 'hemat biaya' karena biaya listrik lebih mahal dari gas. Sedangkan r1 dan r2 mendukung tren penggunaan tanpa membantah manfaatnya, dan r5 adalah konsekuensi teknis yang tidak langsung membatalkan manfaat ekonomi jangka panjang.",
            points: 7,
          },
          {
            id: 6,
            type: "matrix",
            context:
              "Hidroponik merupakan teknik budidaya tanaman konsumsi maupun dekoratif tanpa menggunakan media tanam berupa tanah. Para pedagang sayur menyebutkan bahwa penjualan sayurnya menurun drastis karena banyak masyarakat yang menanam tanaman hidroponik di rumah.",
            question:
              "Manakah pernyataan-pernyataan berikut yang MEMPERLEMAH dan TIDAK MEMPERLEMAH pendapat pedagang sayur tersebut?",
            rows: [
              {
                id: "r1",
                text: "Mayoritas masyarakat yang menanam tanaman hidroponik adalah pecinta tanaman hias yang terkendala lahan.",
              },
              {
                id: "r2",
                text: "Tanaman hidroponik yang ditanam masyarakat mampu memenuhi kebutuhan pangan harian.",
              },
              {
                id: "r3",
                text: "Pola hidup sehat yang sedang tren membuat masyarakat gemar mengonsumsi sayur dan buah.",
              },
              {
                id: "r4",
                text: "Kebanyakan masyarakat lebih memilih membeli masakan dari warung daripada harus memasak sendiri.",
              },
              {
                id: "r5",
                text: "Teknik hidroponik harus menggunakan media tanah supaya hasilmya bagus.",
              },
            ],
            columns: [
              { id: "weakens", text: "Memperlemah" },
              { id: "not_weakens", text: "Tidak Memperlemah" },
            ],
            correctAnswers: {
              r1: "not_weakens",
              r2: "not_weakens",
              r3: "not_weakens",
              r4: "weakens",
              r5: "weakens",
            },
            explanation:
              "Pernyataan r4 melemahkan pendapat pedagang karena memberikan alasan lain (orang beli masakan jadi) sebagai penyebab turunnya penjualan sayur mentah. r5 melemahkan karena bertentangan dengan prinsip hidroponik (tanpa tanah) yang menjadi dasar asumsi pedagang. r1-r3 tidak secara langsung membantah kaitan antara hidroponik sayur dan penurunan penjualan menurut data di kunci jawaban.",
            points: 7,
          },
          {
            id: 7,
            type: "matrix",
            context:
              "Bekerja adalah kegiatan yang dilakukan seseorang untuk mencari nafkah dan simbol pembuktian diri. Menurut ahli, rutin berpindah-pindah kerja atau menjadi kutu loncat berdampak positif pada karier seseorang.",
            question:
              "Manakah pernyataan-pernyataan berikut yang MEMPERKUAT dan TIDAK MEMPERKUAT pendapat ahli tersebut?",
            rows: [
              {
                id: "r1",
                text: "Berpindah-pindah kerja dapat memperluas jaringan profesional.",
              },
              {
                id: "r2",
                text: "Banyak pegiat sumber daya manusia mengatakan bahwa sering berpindah kerja menimbulkan citra buruk pada karier seseorang.",
              },
              {
                id: "r3",
                text: "Kesehatan mental menjadi penyebab seseorang sering berpindah kerja.",
              },
              {
                id: "r4",
                text: "Beragam pengalaman karena sering berpindah kerja menjadi daya tarik bagi perekrut.",
              },
              {
                id: "r5",
                text: "Perempuan lebih sering berpindah kerja dibandingkan laki-laki.",
              },
            ],
            columns: [
              { id: "strengthens", text: "Memperkuat" },
              { id: "not_strengthens", text: "Tidak Memperkuat" },
            ],
            correctAnswers: {
              r1: "strengthens",
              r2: "not_strengthens",
              r3: "not_strengthens",
              r4: "strengthens",
              r5: "not_strengthens",
            },
            explanation:
              "r1 (jaringan luas) dan r4 (daya tarik bagi perekrut) secara langsung mendukung klaim bahwa berpindah kerja berdampak positif bagi karier. r2 (citra buruk) justru melemahkan, r3 (kesehatan mental) adalah penyebab bukan dampak, dan r5 (gender) tidak relevan dengan dampak positif terhadap karier.",
            points: 7,
          },
          {
            id: 8,
            type: "matrix",
            context:
              "Lahir and tumbuh di era digital sangat memengaruhi keterkaitan generasi Z dengan smartphone. Ahli psikologi perilaku mengatakan bahwa generasi Z cenderung mengidap kecanduan terhadap penggunaan smartphone.",
            question:
              "Manakah pernyataan-pernyataan berikut yang MEMPERKUAT and TIDAK MEMPERKUAT pendapat ahli tersebut?",
            rows: [
              {
                id: "r1",
                text: "Banyak orang tua dari generasi Z yang mengeluhkan anaknya yang menggunakan smartphone secara berlebihan",
              },
              {
                id: "r2",
                text: "Generasi Z hanya menggunakan smartphone secukupnya.",
              },
              {
                id: "r3",
                text: "Generasi Z selalu ingin menggunakan smartphone meski bukan untuk urusan penting.",
              },
              {
                id: "r4",
                text: "Banyak orang tua generasi Z yang mengapresiasi anaknya karena tahu batasan dalam menggunakan smartphone.",
              },
              {
                id: "r5",
                text: "Generasi Z terlampau sering mengabaikan tanggung jawab ketika sedang memegang smartphone",
              },
            ],
            columns: [
              { id: "strengthens", text: "Memperkuat" },
              { id: "not_strengthens", text: "Tidak Memperkuat" },
            ],
            correctAnswers: {
              r1: "strengthens",
              r2: "not_strengthens",
              r3: "strengthens",
              r4: "not_strengthens",
              r5: "strengthens",
            },
            explanation:
              "r1 (penggunaan berlebihan), r3 (penggunaan non-esensial), dan r5 (pengabaian tanggung jawab) adalah indikator perilaku kecanduan yang mendukung pendapat ahli. Sebaliknya, r2 (secukupnya) dan r4 (tahu batasan) adalah bukti kontrol diri yang menentang klaim kecanduan.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Manakah pernyataan yang SESUAI with grafik di atas? (Grafik kepemilikan rumah)",
            imageUrl: "/images/modules/kesesuaian/grafik_kepemilikan_rumah.png",
            question: "Manakah pernyataan yang SESUAI with grafik di atas?",
            options: [
              {
                id: "a",
                text: "Sebanyak 56,13% masyarakat DKI Jakarta tidak memiliki rumah.",
              },
              {
                id: "b",
                text: "Masyarakat yang tidak punya rumah biasanya tinggal di jalanan.",
              },
              {
                id: "c",
                text: "Kalsel merupakan provinsi with kepemilikan rumah terendah.",
              },
              {
                id: "d",
                text: "Masyarakat Sulawesi Utara yang memiliki rumah adalah sebanyak 79,12%",
              },
              {
                id: "e",
                text: "Masyarakat Kalteng yang tidak memiliki rumah lebih dari 20%",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Jawaban ini didasarkan pada pembacaan data statistik spesifik pada grafik untuk wilayah Sulawesi Utara (79,12%).",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Berdasarkan grafik di atas, provinsi manakah yang kurang dari 25% masyarakatnya tidak memiliki rumah? (Grafik kepemilikan rumah)",
            imageUrl: "/images/modules/kesesuaian/grafik_kepemilikan_rumah.png",
            question:
              "Provinsi manakah yang kurang dari 25% masyarakatnya tidak memiliki rumah?",
            options: [
              {
                id: "a",
                text: "DKI Jakarta, Kepulauan Riau, and Sumatera Utara",
              },
              {
                id: "b",
                text: "Sumatera Utara, Sumatera Barat, and Kalimantan Timur",
              },
              {
                id: "c",
                text: "Sumatera Utara, Kalimantan Timur, and Kalimantan Tengah",
              },
              { id: "d", text: "Sumatera Utara, Kalimantan Tengah, and Riau" },
              { id: "e", text: "Riau, Sulawesi Utara, and Kalimantan Selatan" },
            ],
            correctAnswer: "e",
            explanation:
              "Berdasarkan visualisasi data, ketiga provinsi ini (Riau, Sulut, Kalsel) memiliki tingkat ketidakpunyaan rumah yang paling rendah (batang grafik di bawah angka 25%).",
            points: 8,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Berikut adalah data jumlah kementerian/lembaga with jumlah lowongan pekerjaan terbanyak pada CPNS 2019: Kemenag (5.815), Kejaksaan, Kemenkumham, dll.",
            imageUrl: "/images/modules/kesesuaian/cpns_2019.png",
            question:
              "Berdasarkan gambar di atas, kementerian/lembaga manakah yang memiliki jumlah lowongan terbanyak keenam?",
            options: [
              { id: "a", text: "Kementerian Kesehatan" },
              { id: "b", text: "Kementerian Perhubungan" },
              { id: "c", text: "Sekretariat Mahkamah Agung" },
              { id: "d", text: "Kementerian Hukum and HAM" },
              { id: "e", text: "Kementerian Pendidikan and Kebudayaan" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan urutan data: 1. Kemenag, 2. Kejaksaan, 3. Kemenkumham, 4. Kemenkes, 5. Kemendikbud, 6. Sekretariat Mahkamah Agung.",
            points: 8,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Berikut ini adalah data pengunjung dua fasilitas umum, yaitu perpustakaan and museum, pada bulan Januari 2022 dari hari Senin sampai with Jumat.",
            imageUrl: "/images/modules/kesesuaian/pengunjung_fasilitas.png",
            question:
              "Berdasarkan data di atas, jumlah pengunjung terendah kedua terjadi pada hari ....",
            options: [
              { id: "a", text: "Senin" },
              { id: "b", text: "Selasa" },
              { id: "c", text: "Rabu" },
              { id: "d", text: "Kamis" },
              { id: "e", text: "Jumat" },
            ],
            correctAnswer: "a",
            explanation:
              "Melalui interpretasi grafik garis, titik terendah absolut diidentifikasi terlebih dahulu, kemudian titik terendah berikutnya (urutan kedua dari bawah) jatuh pada hari Senin.",
            points: 8,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Grafik menunjukkan data jumlah pasien positif, persentase pasien sembuh, and pasien dirawat di ICU karena virus X di sebuah rumah sakit sejak bulan April sampai with bulan Agustus.",
            imageUrl: "/images/modules/kesesuaian/pasien_virus_x.png",
            question:
              "Berdasarkan data dalam grafik tersebut, manakah pernyataan PALING TEPAT untuk menggambarkan kondisi pasien Virus X di rumah sakit tersebut pada bulan Agustus?",
            options: [
              {
                id: "a",
                text: "Jumlah pasien virus X pada bulan september meningkat dibandingkan with bulan Agustus",
              },
              {
                id: "b",
                text: "Jumlah pasien virus X sembuh pada bulan september lebih besar daripada bulan Agustus",
              },
              {
                id: "c",
                text: "Jumlah pasien virus X yang dirawat di ICU lebih besar dari bulan sebelumnya.",
              },
              {
                id: "d",
                text: "Persentase pasien virus X yang dirawat ICU paling kecil pada bulan Agustus",
              },
              {
                id: "e",
                text: "Persentase pasien virus X sembuh paling kecil pada bulan Agustus",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Melihat tren pada grafik, data pasien ICU pada bulan Agustus menunjukkan peningkatan posisi (lebih tinggi) dibandingkan bulan Juli (bulan sebelumnya).",
            points: 8,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Kadar gula yang tinggi dalam darah meningkatkan risiko penyakit kardioviskular. Upaya untuk mencegah meningkatnya kadar gula dalam darah dapat dicegah with diet karbohidrat. Risiko terjadinya penyakit kardiovaskular dapat berkurang jika jumlah karbohidrat yang dikonsumsi dapat dikendalikan.",
            question:
              "Berdasarkan informasi tersebut, manakah pernyataan yang BENAR?",
            options: [
              {
                id: "a",
                text: "Kadar gula yang tinggi dalam darah tidak berpengaruh terhadap risiko penyakit kardiovaskular.",
              },
              {
                id: "b",
                text: "Diet karbohidrat tidak berpengaruh terhadap kadar gula dalam darah.",
              },
              {
                id: "c",
                text: "Mengurangi konsumsi karbohidrat dapat membantu mengendalikan kadar gula dalam darah.",
              },
              {
                id: "d",
                text: "Penyakit kardiovaskular hanya disebabkan oleh kadar gula dalam darah yang tinggi.",
              },
              {
                id: "e",
                text: "Konsumsi karbohidrat yang berlebihan tidak berhubungan with peningkatan kadar gula dalam darah.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Simpulan logis: Teks menyatakan diet karbohidrat mencegah kenaikan gula darah. Maka, tindakan mengurangi karbohidrat (bagian dari diet) akan membantu mengendalikan kadar gula.",
            points: 8,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Seorang mahasiswa X harus bekerja tambahan setelah pulang kuliah. Pekerjaan tambahan tersebut menyebabkan waktu belajarnya berkurang. Meskipun X hanya bekerja di waktu malam, perkuliahannya tetap terganggu karena waktu belajarnya berkurang.",
            question:
              "Berdasarkan informasi tersebut, manakah pernyataan yang SALAH?",
            options: [
              {
                id: "a",
                text: "Mahasiswa X harus bekerja tambahan setelah pulang kuliah.",
              },
              {
                id: "b",
                text: "Waktu belajar mahasiswa X berkurang karena pekerjaan tambahan.",
              },
              {
                id: "c",
                text: "Pekerjaan tambahan mahasiswa X dilakukan pada waktu malam.",
              },
              {
                id: "d",
                text: "Perkuliahan mahasiswa X terganggu karena waktu belajarnya berkurang.",
              },
              {
                id: "e",
                text: "Mahasiswa X tetap bisa belajar with optimal meskipun bekerja tambahan.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pernyataan ini kontradiktif (salah) berdasarkan teks. Teks secara eksplisit menyebutkan 'perkuliahannya tetap terganggu', yang berarti proses belajarnya tidak optimal.",
            points: 8,
          },
        ],
      },
    ];

    console.log(`Updating all modules named: ${moduleName}`);
    const result = await Module.updateMany(
      { name: { $regex: new RegExp(moduleName, "i") } },
      { $set: { steps: stepsData } },
    );

    console.log(
      `Matched ${result.matchedCount} modules and updated ${result.modifiedCount} modules.`,
    );
    console.log("Module Seeded successfully.");
    process.exit(0);
  } catch (error) {
    console.error("CRITICAL SEED ERROR:");
    console.error(error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
};

seedKesesuaian();
