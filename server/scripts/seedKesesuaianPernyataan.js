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

        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kesesuaian Pernyataan Berdasarkan Teks</h3>

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

        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kesesuaian Pernyataan Berdasarkan Tabel</h3>
        <p class="text-body-l text-Grayscale-900">
           Menentukan pernyataan yang sesuai dengan tabel. <br/>
           <strong>Tabel</strong>: Menampilkan data dalam baris dan kolom.
        </p>
      </div>

        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Kesesuaian Pernyataan Berdasarkan Grafik/Diagram</h3>
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
              'Pernyataan "Mebel berbahan kayu jati selalu habis terjual" memberikan bukti empiris/fakta di lapangan. Jika mebel selalu habis terjual meskipun harganya mahal, hal ini secara langsung membuktikan dan memperkuat argumen bahwa permintaan masyarakat terhadap kayu jati tidak mengalami penurunan.',
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Jati yang tumbuh di Indonesia, terutama di Pulau Jawa telah diakui kualitasnya di dunia karena kayunya besar, batangnya melurus, dan polanya unik. Saat ini, harga kayu jati makin mahal karena jumlah hutan di Pulau Jawa yang makin berkurang pengalihan fungsi hutan jati menjadi lahan pertanian merupakan penyebab jumlah hutan jati di Pulau Jawa yang semakin berkurang. Namun, mahalnya harga kayu jati tidak menurunkan permintaan kayu jati karena kayu jati lebih kuat, awet, dan indah dibandingkan kayu lainnya. Selain itu, kayu jati merupakan jenis kayu pertukangan yang sangat mudah diolah. Meskipun keras, kayu jati mudah dipotong dan dikerjakan.",
            question:
              'Manakah informasi berikut yang memperlemah pernyataan "Kayu jati merupakan jenis kayu pertukangan yang sangat mudah diolah"?',
            options: [
              {
                id: "a",
                text: "Perajin kayu jati banyak yang merugi karena tingkat kegagalan saat mengolah kayu jati menjadi mebel tinggi.",
              },
              {
                id: "b",
                text: "Penjualan kayu jati telah menjadi mebel lebih menguntungkan dibandingkan kayu jati mentah.",
              },
              {
                id: "c",
                text: "Perajin pemula dapat membuat mebel berbahan kayu jati dalam waktu singkat.",
              },
              {
                id: "d",
                text: "Makin tua umurnya, kayu jati makin mudah untuk dipotong.",
              },
              {
                id: "e",
                text: "Hasil olahan kayu jati terutama berupa mebel.",
              },
            ],
            correctAnswer: "a",
            explanation:
              'Pernyataan ini menyerang dan membantah langsung klaim "mudah diolah". Jika kayu jati benar-benar mudah diolah, tingkat kegagalannya seharusnya rendah. Tingkat kegagalan yang tinggi hingga menyebabkan kerugian membuktikan bahwa kayu tersebut sebenarnya sulit untuk diolah.',
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
              'Pemerintah berasumsi bahwa "Ada Hotel = Wisatawan Datang". Opsi A mematahkan logika sebab-akibat tersebut dengan menunjukkan bahwa target pasar (wisatawan) justru memiliki preferensi sebaliknya (menyukai daerah tanpa hotel). Hal ini membuat strategi pemerintah menjadi tidak efektif.',
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              'Ahli A menyatakan, "Seseorang yang ingin berhenti merokok hendaknya menghentikan konsumsi nikotin selama 2 bulan berturut-turut".\nAhli B menyatakan, "Penggunaan permen karet yang mengandung nikotin mempermudah seseorang berhenti merokok."\nHasil penelitian menunjukkan bahwa sebagian besar orang yang gagal menghentikan kebiasaan merokok telah mencoba beberapa cara untuk menghentikan kebiasaan tersebut.',
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
              'Hasil penelitian hanya menyebutkan bahwa kegagalan disebabkan karena orang "mencoba beberapa cara" (ketidakkonsistenan metode). Penelitian ini tidak menyebutkan secara spesifik apakah metode Ahli A atau metode Ahli B yang digunakan. Oleh karena itu, hasilnya tidak relevan untuk menilai kebenaran argumen kedua ahli tersebut.',
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
                text: "Harga kompor listrik semakin murah karena produsen menyadari kebutuhan.",
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
              r5: "weakens",
            },
            explanation:
              "Pernyataan (1) dan (2) mendukung tren adopsi kompor listrik sehingga 'Tidak Memperlemah'. Pernyataan (3) menyerang klaim 'ramah lingkungan'. Pernyataan (4) dan (5) menunjukkan adanya pengeluaran tambahan atau biaya yang lebih mahal, sehingga secara langsung menyerang klaim 'menghemat biaya rumah tangga' (Memperlemah).",
            points: 5,
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
                text: "Teknik hidroponik harus menggunakan media tanah supaya hasilnya bagus.",
              },
            ],
            columns: [
              { id: "weakens", text: "Memperlemah" },
              { id: "not_weakens", text: "Tidak Memperlemah" },
            ],
            correctAnswers: {
              r1: "weakens",
              r2: "not_weakens",
              r3: "not_weakens",
              r4: "weakens",
              r5: "weakens",
            },
            explanation:
              "Jika warga menanam 'tanaman hias' (R1), maka bukan itu penyebab sayur pedagang tak laku (Memperlemah). Jika warga pilih beli matang (R4), maka itu penyebab utamanya, bukan karena hidroponik (Memperlemah). Jika hidroponik butuh tanah (R5), itu membantah definisi awal teks (Memperlemah). Sebaliknya, jika hidroponik warga bisa dimakan (R2) atau warga suka makan sayur (R3), hal itu membenarkan/tidak membantah alasan pedagang (Tidak Memperlemah).",
            points: 5,
          },
          {
            id: 7,
            type: "matrix",
            context:
              "Bekerja adalah kegiatan yang dilakukan seseorang untuk mencari nafkah dan simbol pembuktian diri. Menurut ahli, rutin berpindah-pindah kerja atau menjadi kutu loncat berdampak positif pada karier seseorang.",
            question:
              "Manakah pernyataan-pernyataan berikut yang MEMPERKUAT dan TIDAK MEMPERKUAT pendapat pakar/ahli tersebut?",
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
              "Ahli menyatakan pindah kerja itu POSITIF. Pernyataan (1) tentang 'memperluas jaringan' dan (4) tentang 'daya tarik perekrut' adalah dampak positif, sehingga Memperkuat. Sementara (2) citra buruk, (3) masalah mental, dan (5) sekadar fakta gender tidak mendukung klaim positif tersebut (Tidak Memperkuat).",
            points: 5,
          },
          {
            id: 8,
            type: "matrix",
            context:
              "Lahir dan tumbuh di era digital sangat memengaruhi keterkaitan generasi Z dengan smartphone. Ahli psikologi perilaku mengatakan bahwa generasi Z cenderung mengidap kecanduan terhadap penggunaan smartphone.",
            question:
              "Manakah pernyataan-pernyataan berikut yang MEMPERKUAT dan TIDAK MEMPERKUAT pendapat ahli psikologi tersebut?",
            rows: [
              {
                id: "r1",
                text: "Banyak orang tua dari generasi Z yang mengeluhkan anaknya yang menggunakan smartphone secara berlebihan.",
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
                text: "Generasi Z terlampau sering mengabaikan tanggung jawab ketika sedang memegang smartphone.",
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
              "Klaim ahli: Gen Z KECANDUAN smartphone. Perilaku 'menggunakan berlebihan' (R1), 'selalu ingin pakai walau tidak penting' (R3), dan 'mengabaikan tanggung jawab' (R5) adalah ciri-ciri kecanduan (Memperkuat). Sedangkan 'pakai secukupnya' (R2) dan 'tahu batasan' (R4) membuktikan adanya kontrol diri yang mematahkan diagnosis kecanduan (Tidak Memperkuat).",
            points: 5,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "Perhatikan grafik kepemilikan rumah di berbagai wilayah.",
            imageUrl: "/images/modules/kesesuaian/grafik_kepemilikan_rumah.png",
            question: "Manakah pernyataan yang SESUAI dengan grafik di atas?",
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
                text: "Kalsel merupakan provinsi dengan kepemilikan rumah terendah.",
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
              "Berdasarkan pembacaan data statistik dari grafik (merujuk pada kunci jawaban), persentase warga yang memiliki rumah di Sulawesi Utara sesuai secara presisi di angka 79,12%.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Perhatikan grafik tentang persentase masyarakat yang tidak memiliki rumah di berbagai provinsi.",
            imageUrl: "/images/modules/kesesuaian/grafik_kepemilikan_rumah.png",
            question:
              "Berdasarkan grafik di atas, provinsi manakah yang kurang dari 25% masyarakatnya tidak memiliki rumah?",
            options: [
              {
                id: "a",
                text: "DKI Jakarta, Kepulauan Riau, dan Sumatera Utara",
              },
              {
                id: "b",
                text: "Sumatera Utara, Sumatera Barat, dan Kalimantan Timur",
              },
              {
                id: "c",
                text: "Sumatera Utara, Kalimantan Timur, dan Kalimantan Tengah",
              },
              {
                id: "d",
                text: "Sumatera Utara, Kalimantan Tengah, dan Riau",
              },
              {
                id: "e",
                text: "Riau, Sulawesi Utara, dan Kalimantan Selatan",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Berdasarkan visualisasi batang pada grafik, tiga provinsi tersebut (Riau, Sulawesi Utara, dan Kalimantan Selatan) memiliki angka persentase ketidakpunyaan rumah yang paling rendah, yaitu berada di bawah garis 25%.",
            points: 8,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Pemerintah pusat membuka 37.425 lowongan yang tersebar di 68 instansi pada rekrutmen CPNS 2019. Kementerian Agama membuka lowongan terbanyak (5.815 lowongan). Terdapat data kementerian/lembaga dengan jumlah lowongan terbanyak.",
            imageUrl: "/images/modules/kesesuaian/cpns_2019.png",
            question:
              "Berdasarkan gambar di atas, kementerian/lembaga manakah yang memiliki jumlah lowongan terbanyak keenam?",
            options: [
              { id: "a", text: "Kementerian Kesehatan" },
              { id: "b", text: "Kementerian Perhubungan" },
              { id: "c", text: "Sekretariat Mahkamah Agung" },
              { id: "d", text: "Kementerian Hukum dan HAM" },
              { id: "e", text: "Kementerian Pendidikan dan Kebudayaan" },
            ],
            correctAnswer: "c",
            explanation:
              "Setelah mengurutkan data pada tabel/gambar dari yang terbesar hingga terkecil, Sekretariat Mahkamah Agung berada di posisi/ranking keenam.",
            points: 8,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Berikut ini adalah data pengunjung dua fasilitas umum, yaitu perpustakaan dan museum, pada bulan Januari 2022 dari hari Senin sampai dengan Jumat.",
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
              "Berdasarkan grafik garis harian, setelah menemukan titik paling bawah (terendah pertama), titik data paling rendah berikutnya (terendah kedua) jatuh pada hari Senin.",
            points: 8,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Grafik berikut menunjukkan data jumlah pasien positif, persentase pasien sembuh, dan pasien dirawat di ICU karena virus X di sebuah rumah sakit sejak bulan April sampai dengan bulan Agustus.",
            imageUrl: "/images/modules/kesesuaian/pasien_virus_x.png",
            question:
              "Berdasarkan data dalam grafik tersebut, manakah pernyataan PALING TEPAT untuk menggambarkan kondisi pasien Virus X di rumah sakit tersebut pada bulan Agustus?",
            options: [
              {
                id: "a",
                text: "Jumlah pasien virus X pada bulan september meningkat dibandingkan dengan bulan Agustus",
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
              "Melihat tren garis/batang pada kategori pasien ICU di bulan Agustus dibandingkan dengan bulan Juli, terlihat bahwa grafiknya mengalami kenaikan.",
            points: 8,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Kadar gula yang tinggi dalam darah meningkatkan risiko penyakit kardiovaskular. Upaya untuk mencegah meningkatnya kadar gula dalam darah dapat dicegah dengan diet karbohidrat. Risiko terjadinya penyakit kardiovaskular dapat berkurang jika jumlah karbohidrat yang dikonsumsi dapat dikendalikan.",
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
                text: "Konsumsi karbohidrat yang berlebihan tidak berhubungan dengan peningkatan kadar gula dalam darah.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pernyataan ini merupakan kesimpulan deduktif langsung dari teks. Teks menyebutkan bahwa diet (pengurangan) karbohidrat dapat mencegah naiknya gula darah. Ini ekuivalen dengan menyatakan bahwa mengurangi karbohidrat membantu mengendalikan gula darah.",
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
                text: "Mahasiswa X tetap bisa belajar dengan optimal meskipun bekerja tambahan.",
              },
            ],
            correctAnswer: "e",
            explanation:
              'Pernyataan ini SALAH dan bertentangan dengan fakta eksplisit dalam teks. Teks secara jelas menyatakan bahwa "perkuliahannya tetap terganggu karena waktu belajarnya berkurang", yang berarti mahasiswa X TIDAK belajar dengan optimal.',
            points: 8,
          },
        ],
      },
    ];

    // Find parent course
    const courseName = "Penalaran Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "kesesuaian-pernyataan";

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.courseId = course._id;
      moduleDoc.steps = stepsData;
      moduleDoc.name = moduleName;
      moduleDoc.description =
        "Materi mengenai kesesuaian pernyataan berdasarkan teks, tabel, grafik, dan diagram.";
      moduleDoc.subcategory = "Penalaran Induktif";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: moduleName,
        description:
          "Materi mengenai kesesuaian pernyataan berdasarkan teks, tabel, grafik, dan diagram.",
        subcategory: "Penalaran Induktif",
        steps: stepsData,
        points_available: 100,
      });
    }

    console.log("Module Seeded Successfully:", moduleDoc.name);
    process.exit(0);
  } catch (error) {
    console.error("CRITICAL SEED ERROR:");
    console.error(error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
};

seedKesesuaian();
