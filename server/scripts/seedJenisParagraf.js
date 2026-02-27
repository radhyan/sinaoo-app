const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedJenisParagraf = async () => {
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
    const targetId = "jenis-jenis-paragraf";

    const stepsData = [
      {
        title: "Materi: Definisi dan Jenis-Jenis Paragraf",
        type: "reading",
        status: "active",
        description:
          "Materi Bacaan mengenai Pengertian dan Pembagian Jenis Paragraf",
        content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Paragraf</h3>
        <ul class="list-disc pl-6 space-y-3 text-body-l text-Grayscale-900 leading-relaxed">
          <li>Paragraf adalah <span class="font-bold text-Primary-600">gabungan beberapa kalimat</span> yang saling berhubungan dan berfokus pada satu ide atau topik tertentu.</li>
          <li>Secara umum, paragraf <span class="font-bold text-Primary-600">minimal terdiri dari dua kalimat</span>, namun biasanya terdiri dari <span class="font-bold text-Primary-600">empat sampai sepuluh kalimat</span>.</li>
          <li>Paragraf mengandung <span class="font-bold text-Primary-600">satu ide pokok</span> dan <span class="font-bold text-Primary-600">beberapa kalimat penjelas</span>.</li>
        </ul>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-Jenis Paragraf</h3>
        <h4 class="text-h4 font-heading font-bold text-Primary-900 mb-6">1. Berdasarkan Letak Gagasan Utamanya</h4>

        <div class="space-y-8">
          <div>
            <h5 class="text-h5 font-heading font-bold text-Primary-900 mb-3 uppercase">Paragraf Deduktif</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 mt-0">
              Paragraf yang <span class="font-bold text-Primary-600">gagasan utamanya terletak di awal paragraf</span> dan <span class="font-bold text-Primary-600">diikuti dengan kalimat-kalimat penjelas</span> yang mendukung gagasan utama tersebut.
            </p>
            <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100">
              <p class="text-body-l font-bold text-Primary-900 mb-2 mt-0">Contoh :</p>
              <p class="text-body-l text-Grayscale-900 italic m-0">
                <span class="font-bold text-Error-500">(1) Pendidikan memiliki peran yang sangat penting dalam kehidupan seseorang.</span> (2) Hal ini karena pendidikan dapat membuka peluang untuk memperoleh pengetahuan, keterampilan, dan pengalaman yang diperlukan untuk meraih kesuksesan. (3) Dengan pendidikan yang baik, seseorang dapat memahami berbagai aspek kehidupan dan membuat keputusan yang lebih bijak. (4) Selain itu, pendidikan juga berkontribusi pada peningkatan kualitas hidup dan perkembangan masyarakat secara keseluruhan. (5) Oleh karena itu, penting bagi setiap individu untuk mendapatkan pendidikan yang layak demi masa depan yang lebih cerah.
              </p>
              <div class="mt-4 pt-4 border-t border-Primary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  Pada paragraf di atas, <span class="font-bold text-Error-500">kalimat (1) adalah kalimat utama</span>, sedangkan kalimat <span class="font-bold text-Error-500">(2), (3), (4), dan (5)</span> adalah <span class="font-bold text-Error-500">kalimat-kalimat penjelas</span> yang menjadi pendukung kalimat utama.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 class="text-h5 font-heading font-bold text-Primary-900 mb-3 uppercase">Paragraf Induktif</h4>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 mt-0">
              Paragraf yang <span class="font-bold text-Primary-600">gagasan utamanya terletak pada akhir paragraf</span>, sedangkan <span class="font-bold text-Primary-600">kalimat-kalimat penjelasnya</span> berada pada <span class="font-bold text-Primary-600">awal hingga menjelang akhir</span> paragraf.
            </p>
            <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100">
              <p class="text-body-l font-bold text-Primary-900 mb-2 mt-0">Contoh :</p>
              <p class="text-body-l text-Grayscale-900 italic m-0">
                (1) Banyak orang yang merasa lebih produktif setelah berolahraga di pagi hari. (2) Mereka merasa lebih segar dan fokus dalam menjalani aktivitas sehari-hari. (3) Beberapa penelitian juga menunjukkan bahwa olahraga dapat meningkatkan energi dan konsentrasi. (4) Dengan tubuh yang sehat, seseorang bisa lebih efisien dalam bekerja dan belajar. <span class="font-bold text-Error-500">(5) Oleh karena itu, olahraga di pagi hari dapat meningkatkan kualitas hidup.</span>
              </p>
              <div class="mt-4 pt-4 border-t border-Primary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  Pada paragraf di atas, <span class="font-bold text-Error-500">kalimat (5) adalah kalimat utama</span>, sedangkan <span class="font-bold text-Error-500">kalimat (1), (2), (3), dan (4)</span> adalah <span class="font-bold text-Error-500">kalimat-kalimat penjelas</span> yang mendukung dan memberikan contoh serta diletakkan terlebih dahulu sebelum kalimat utama.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 class="text-h5 font-heading font-bold text-Primary-900 mb-3 uppercase">Paragraf Campuran (Deduktif-Induktif)</h5>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4 mt-0">
              Paragraf campuran adalah paragraf yang <span class="font-bold text-Primary-600">gagasan utamanya terletak pada awal dan akhir paragraf</span>. Ide pokok akan dinyatakan melalui <span class="font-bold text-Primary-600">awal paragraf kemudian ditegaskan lagi pada akhir paragraf</span>. Oleh sebab itu, <span class="font-bold text-Primary-600">kalimat-kalimat penjelas</span> yang mendukung gagasan utama terletak mulai <span class="font-bold text-Primary-600">kalimat kedua hingga menjelang akhir</span> paragraf.
            </p>
            <div class="bg-Primary-50/50 rounded-lg p-6 border border-Primary-100">
              <p class="text-body-l font-bold text-Primary-900 mb-2 mt-0">Contoh :</p>
              <p class="text-body-l text-Grayscale-900 italic m-0">
                <span class="font-bold text-Error-500">(1) Pendidikan merupakan faktor utama dalam kemajuan suatu bangsa.</span> (2) Dengan pendidikan yang baik, masyarakat akan lebih terampil, lebih produktif, dan mampu berkontribusi lebih besar terhadap kemajuan ekonomi dan sosial. (3) Sebagai contoh, negara-negara maju seperti Jepang dan Finlandia memiliki sistem pendidikan yang sangat baik, yang membekali generasi mudanya dengan keterampilan dan pengetahuan yang diperlukan untuk berinovasi. <span class="font-bold text-Error-500">(4) Oleh karena itu, investasi dalam sektor pendidikan sangat penting untuk memastikan masa depan yang lebih baik bagi negara dan masyarakatnya.</span>
              </p>
              <div class="mt-4 pt-4 border-t border-Primary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  Pada paragraf di atas, <span class="font-bold text-Error-500">kalimat (1) dan kalimat (4) adalah kalimat utama</span>, sedangkan <span class="font-bold text-Error-500">kalimat (2) dan (3) adalah kalimat pendukung</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h4 class="text-h4 font-heading font-bold text-Primary-900 mb-6">2. Berdasarkan Gaya Ekspresi</h4>
        
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h5 class="text-h5 mt-0 font-heading font-bold text-Primary-900 mb-2 uppercase">Paragraf Deskripsi</h5>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0">
              Paragraf yang <span class="font-bold text-Primary-600">menggambarkan suatu keadaan</span> dan bertujuan untuk memberikan <span class="font-bold text-Primary-600">kesan kepada pembaca</span> terhadap gagasan atau peristiwa yang ingin disampaikan oleh penulis.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h5 class="text-h5 mt-0 font-heading font-bold text-Primary-900 mb-2 uppercase">Paragraf Argumentasi</h5>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0">
              Paragraf yang <span class="font-bold text-Primary-600">meyakinkan pembaca</span> dengan disertai <span class="font-bold text-Primary-600">penjelasan dan alasan</span> yang kuat.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h5 class="text-h5 mt-0 font-heading font-bold text-Primary-900 mb-2 uppercase">Paragraf Narasi</h5>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0">
              Paragraf yang <span class="font-bold text-Primary-600">menceritakan atau memaparkan rangkaian kejadian atau peristiwan</span> berdasarkan perkembangannya dari <span class="font-bold text-Primary-600">waktu ke waktu</span>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h5 class="text-h5 mt-0 font-heading font-bold text-Primary-900 mb-2 uppercase">Paragraf Eksposisi</h5>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0">
              Paragraf yang menjelaskan <span class="font-bold text-Primary-600">fakta secara objektif</span>. Paragraf eksposisi <span class="font-bold text-Primary-600">bersifat ilmiah</span> atau non fiksi, sehingga bertujuan untuk <span class="font-bold text-Primary-600">memperluas pengetahuan</span> pembaca.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-Grayscale-200 shadow-sm">
            <h5 class="text-h5 mt-0 font-heading font-bold text-Primary-900 mb-2 uppercase">Paragraf Persuasif</h5>
            <p class="text-body-l text-Grayscale-900 leading-relaxed m-0">
              Paragraf yang berisi <span class="font-bold text-Primary-600">ajakan</span> terhadap sesuatu dan bertujuan untuk <span class="font-bold text-Primary-600">membujuk dan mempengaruhi pembaca</span> agar setuju melakukan sesuatu yang diharapkan oleh penulis.
            </p>
          </div>
        </div>
      </section>
        `,
      },
      {
        title: "Video Pembelajaran: Jenis Paragraf",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/kuy4MAxBryo",
        description: "Video pembahasan materi mengenai Jenis Paragraf.",
      },
      {
        title:
          "Video Pembelajaran: Paragraf Narasi, Deskripsi, Eksposisi, Persuasi, Argumentasi",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/S6OZfTOGWBU",
        description:
          "Video pembahasan materi mengenai jenis paragraf narasi, deskripsi, eksposisi, persuasi, dan argumentasi.",
      },
      {
        title: "Kuis: Jenis-Jenis Paragraf",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question: "Teks yang merupakan paragraf induktif adalah teks . . .",
            options: [
              {
                id: "a",
                text: "Kemajuan teknologi membawa dampak besar dalam kehidupan manusia... Namun, tidak dapat dipungkiri bahwa teknologi juga membawa dampak negatif seperti kecanduan media sosial dan penurunan interaksi sosial secara langsung.",
              },
              {
                id: "b",
                text: "Banyak orang kini menghabiskan waktu berjam-jam menggunakan media sosial setiap hari. Interaksi langsung dengan keluarga dan teman mulai berkurang... Fenomena ini menunjukkan bahwa penggunaan media sosial yang tidak terkendali dapat membawa dampak negatif pada kehidupan sosial dan keseharian manusia.",
              },
              {
                id: "c",
                text: "Olahraga secara teratur sangat penting untuk menjaga kesehatan tubuh... Bahkan, aktivitas fisik ini juga dapat mengurangi risiko berbagai penyakit, seperti diabetes, penyakit jantung, dan tekanan darah tinggi.",
              },
              {
                id: "d",
                text: "Membaca buku memiliki banyak manfaat bagi perkembangan diri... Oleh karena itu, membaca buku merupakan kebiasaan yang sebaiknya dilakukan secara rutin oleh semua orang.",
              },
              {
                id: "e",
                text: "Makanan sehat sangat penting untuk menjaga kesehatan tubuh... Jika kebiasaan makan sehat diterapkan, risiko penyakit kronis seperti diabetes dan penyakit jantung dapat diminimalkan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf induktif adalah paragraf yang diawali dengan kalimat-kalimat penjelas (khusus) dan diakhiri dengan kesimpulan atau kalimat utama (umum). Opsi B diawali dengan contoh-contoh kebiasaan buruk medsos, lalu diakhiri dengan kesimpulan umum: 'Fenomena ini menunjukkan bahwa penggunaan media sosial... membawa dampak negatif...'.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Kebersihan lingkungan sangat penting untuk menjaga kesehatan masyarakat. Lingkungan yang bersih dapat mencegah berkembangnya berbagai penyakit... Dengan menjaga kebersihan, masyarakat dapat menikmati kualitas hidup yang lebih baik. Oleh karena itu, menjaga kebersihan lingkungan merupakan tanggung jawab bersama yang harus dilakukan secara konsisten.",
            question:
              "Berdasarkan letak gagasan utamanya, teks di atas merupakan paragraf?",
            options: [
              { id: "a", text: "Paragraf deduktif." },
              { id: "b", text: "Paragraf induktif." },
              { id: "c", text: "Paragraf campuran." },
              { id: "d", text: "Paragraf narasi." },
              { id: "e", text: "Paragraf eksposisi." },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf ini diawali dengan gagasan utama ('Kebersihan lingkungan sangat penting...'), diikuti kalimat penjelas, dan diakhiri dengan penegasan ulang dari gagasan utama tersebut ('Oleh karena itu, menjaga kebersihan lingkungan merupakan tanggung jawab bersama...'). Ini adalah ciri khas paragraf campuran (deduktif-induktif).",
            points: 6,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan-pernyataan di bawah ini!\n(1) Paragraf tidak mengandung ide pokok dan kalimat-kalimat penjelas.\n(2) Pada paragraf induktif, kalimat-kalimat penjelasnya berada di awal hingga menjelang akhir paragraf.\n(3) Paragraf argumentasi adalah paragraf yang meyakinkan pembaca disertai dengan alasan dan penjelasan yang kuat.",
            question:
              "Berdasarkan pernyataan-pernyataan di atas, manakah pernyataan yang SALAH?",
            options: [
              { id: "a", text: "Pernyataan pertama." },
              { id: "b", text: "Pernyataan kedua." },
              { id: "c", text: "Pernyataan ketiga." },
              { id: "d", text: "Pernyataan pertama dan kedua." },
              { id: "e", text: "Pernyataan kedua dan ketiga." },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan pertama SALAH karena definisi dari paragraf yang baik justru harus memiliki satu ide pokok (gagasan utama) dan didukung oleh kalimat-kalimat penjelas.",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Paragraf yang memaparkan pengetahuan agar pembaca mendapatkan informasi dengan data dan fakta untuk memperjelas, merupakan pengertian dari?",
            options: [
              { id: "a", text: "Paragraf eksposisi." },
              { id: "b", text: "Paragraf narasi." },
              { id: "c", text: "Paragraf deskripsi." },
              { id: "d", text: "Paragraf argumentasi." },
              { id: "e", text: "Paragraf persuasif." },
            ],
            correctAnswer: "a",
            explanation:
              "Tujuan utama paragraf eksposisi adalah memaparkan, menjelaskan, menyampaikan informasi, mengajarkan, dan menerangkan suatu topik kepada pembaca agar pengetahuannya bertambah, biasanya disertai data dan fakta.",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Menggambarkan suatu keadaan terhadap gagasan atau peristiwa yang ingin disampaikan oleh penulis, merupakan ciri dari paragraf?",
            options: [
              { id: "a", text: "Paragraf argumentasi" },
              { id: "b", text: "Paragraf persuasi." },
              { id: "c", text: "Paragraf eksposisi." },
              { id: "d", text: "Paragraf deskripsi." },
              { id: "e", text: "Paragraf narasi." },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf deskripsi bertujuan untuk melukiskan atau menggambarkan suatu keadaan, bentuk, atau suasana tertentu sehingga pembaca seolah-olah melihat, mendengar, atau merasakannya sendiri.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "Di bawah ini yang merupakan jenis paragraf berdasarkan letak gagasan utamanya adalah?",
            options: [
              { id: "a", text: "Paragraf persuasif." },
              { id: "b", text: "Paragraf argumentasi." },
              { id: "c", text: "Paragraf eksposisi." },
              { id: "d", text: "Paragraf narasi." },
              { id: "e", text: "Paragraf induktif." },
            ],
            correctAnswer: "e",
            explanation:
              "Berdasarkan letak gagasan utamanya, paragraf dibagi menjadi: Deduktif (di awal), Induktif (di akhir), Campuran (awal dan akhir), dan Ineratif (di tengah). Opsi lainnya (persuasif, argumentasi, eksposisi, narasi) adalah jenis paragraf berdasarkan tujuannya.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Tidak dapat disangkal bahwa praktik berpidato menjadi semacam ‘obat kuat’ untuk membangun rasa percaya diri... Oleh karena itu, marilah kita melaksanakan praktik berpidato agar kita segera memperoleh keterampilan atau bahkan Kemahiran berpidato.",
            question:
              "Berdasarkan tujuannya, paragraf di atas termasuk paragraf?",
            options: [
              { id: "a", text: "Paragraf narasi." },
              { id: "b", text: "Paragraf persuasif." },
              { id: "c", text: "Paragraf argumentasi." },
              { id: "d", text: "Paragraf eksposisi." },
              { id: "e", text: "Paragraf deskripsi." },
            ],
            correctAnswer: "b",
            explanation:
              "Kata kunci ada pada kalimat terakhir: 'Oleh karena itu, marilah kita melaksanakan praktik berpidato...'. Penggunaan kata ajakan 'marilah' adalah ciri khas paragraf persuasif yang bertujuan membujuk atau mengajak pembaca.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Tumbuhan sangat bermanfaat bagi manusia. Salah satu manfaatnya adalah memberi asupan oksigen di bumi yang kemudian digunakan manusia untuk bernafas. Selain itu, manusia juga dapat memanfaatkan tumbuhan sebagai sumber makanan, obat, tempat tinggal dan masih banyak lagi.",
            question:
              "Berdasarkan letak kalimat utamanya, paragraf di atas termasuk paragraf?",
            options: [
              { id: "a", text: "Paragraf induktif." },
              { id: "b", text: "Paragraf campuran." },
              { id: "c", text: "Paragraf deduktif." },
              { id: "d", text: "Paragraf narasi." },
              { id: "e", text: "Paragraf persuasif." },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat utama (umum) terletak di awal paragraf, yaitu 'Tumbuhan sangat bermanfaat bagi manusia.' Kalimat-kalimat selanjutnya merinci manfaat-manfaat tersebut secara khusus. Ini adalah ciri paragraf Deduktif.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "Paragraf yang berisi suatu pemaparan berdasarkan bukti, alasan serta suatu contoh dari kejadian nyata yang dimaksudkan untuk mempengaruhi pembaca sehingga yakin dengan permasalahan tersebut disebut paragraf?",
            options: [
              { id: "a", text: "Paragraf induktif." },
              { id: "b", text: "Paragraf deduktif." },
              { id: "c", text: "Paragraf eksposisi." },
              { id: "d", text: "Paragraf argumentasi." },
              { id: "e", text: "Paragraf narasi." },
            ],
            correctAnswer: "d",
            explanation:
              "Paragraf argumentasi bertujuan untuk menyampaikan pendapat (argumen) yang disertai dengan fakta, bukti, atau alasan yang kuat agar pembaca meyakini kebenaran pendapat penulis tersebut.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Paragraf yang memiliki tujuan untuk meyakinkan pembaca untuk melakukan sesuatu atau setuju dengan yang dikehendaki oleh penulis, disebut dengan paragraf?",
            options: [
              { id: "a", text: "Paragraf persuasif." },
              { id: "b", text: "Paragraf eksposisi." },
              { id: "c", text: "Paragraf argumentasi." },
              { id: "d", text: "Paragraf narasi." },
              { id: "e", text: "Paragraf deskripsi." },
            ],
            correctAnswer: "a",
            explanation:
              "Persuasi berarti membujuk. Paragraf persuasif menggunakan pendekatan emosional atau logis untuk mendorong pembaca melakukan suatu tindakan atau menyetujui ajakan penulis.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Pendidikan yang berkualitas sangat penting untuk kemajuan suatu negara... Oleh karena itu, pendidikan harus menjadi prioritas utama dalam pembangunan nasional.",
            question:
              "Berdasarkan letak gagasan utamanya, paragraf di atas termasuk paragraf?",
            options: [
              { id: "a", text: "Paragraf deduktif." },
              { id: "b", text: "Paragraf induktif." },
              { id: "c", text: "Paragraf campuran." },
              { id: "d", text: "Paragraf deskripsi." },
              { id: "e", text: "Paragraf narasi." },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraf diawali dengan pernyataan umum ('Pendidikan... sangat penting...'), diikuti contoh-contoh (Jepang, Finlandia), dan ditutup dengan simpulan yang menegaskan ulang gagasan awal ('Oleh karena itu...'). Ini adalah paragraf Campuran.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Teh terbuat dari daun teh yang sudah dirajang kecil-kecil dan dikeringkan kemudian diproses sedemikian rupa, ada yang dicampur kembang melati agar baunya wangi dan masih banyak lagi campurannya sehingga menimbulkan dampak yang enak pada rasanya.",
            question: "Paragraf di atas termasuk paragraf?",
            options: [
              { id: "a", text: "Paragraf narasi" },
              { id: "b", text: "Paragraf deskripsi" },
              { id: "c", text: "Paragraf argumentasi" },
              { id: "d", text: "Paragraf eksposisi" },
              { id: "e", text: "Paragraf persuasif." },
            ],
            correctAnswer: "d",
            explanation:
              "Teks ini memaparkan informasi tentang proses pembuatan teh secara informatif dan objektif (dirajang, dikeringkan, dicampur melati). Tujuannya untuk menambah wawasan pembaca, yang merupakan ciri teks eksposisi.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Pantai Nusa Penida memiliki tata keindahan alam yang menarik, khususnya bagi wisatawan yang mendambakan suasana nyaman, tenang, jauh dari kebisingan kota. Pohon-pohonnya rindang. Bentangan lautnya luas. Bagi penyelam , Pantai Nusa Penida juga menawarkan keindahan ikan laut yang sedang berenang.",
            question: "Paragraf di atas termasuk paragraf?",
            options: [
              { id: "a", text: "Paragraf narasi" },
              { id: "b", text: "Paragraf deskripsi" },
              { id: "c", text: "Paragraf argumentasi" },
              { id: "d", text: "Paragraf eksposisi" },
              { id: "e", text: "Paragraf persuasif." },
            ],
            correctAnswer: "b",
            explanation:
              "Teks ini melukiskan suasana Pantai Nusa Penida dengan detail inderawi (pohon rindang, laut luas, keindahan ikan berenang) sehingga pembaca seolah bisa membayangkannya. Ini adalah ciri utama paragraf deskripsi.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            question:
              "Di bawah ini pernyataan yang salah terkait paragraph adalah?",
            options: [
              {
                id: "a",
                text: "Paragraf biasanya terdiri dari satu hingga dua kalimat.",
              },
              {
                id: "b",
                text: "Paragraf adalah gabungan dari beberapa kalimat.",
              },
              { id: "c", text: "Paragraf mengandung satu ide pokok." },
              {
                id: "d",
                text: "Dalam paragraf terdapat beberapa kalimat penjelas.",
              },
              {
                id: "e",
                text: "Paragraf deduktif adalah paragraf yang gagasan utamanya terletak di awal paragraf dan diikuti dengan kalimat-kalimat penjelas yang mendukung gagasan utama tersebut.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan A SALAH karena paragraf yang ideal biasanya terdiri dari lebih dari dua kalimat untuk memastikan ide pokok dijelaskan dengan memadai oleh beberapa kalimat penjelas.",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            question:
              "Paragraf yang gagasan utamanya terletak pada awal dan akhir paragraf serta ide pokok yang dinyatakan melalui awal paragraf kemudian ditegaskan lagi pada akhir paragraf merupakan pengertian dari paragraf?",
            options: [
              { id: "a", text: "Paragraf induktif." },
              { id: "b", text: "Paragraf narasi." },
              { id: "c", text: "Paragraf eksposisi." },
              { id: "d", text: "Paragraf deduktif." },
              { id: "e", text: "Paragraf campuran." },
            ],
            correctAnswer: "e",
            explanation:
              "Ini adalah definisi literal dari paragraf Campuran (Deduktif-Induktif). Ide pokok disampaikan di kalimat utama pada awal paragraf, lalu ditegaskan atau disimpulkan kembali di akhir paragraf.",
            points: 7,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Jenis-Jenis Paragraf";
      moduleDoc.description =
        "Materi mengenai pengertian paragraf serta jenis-jenis paragraf berdasarkan ide pokok dan gaya bahasanya.";
      moduleDoc.subcategory = "Paragraf 1";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Jenis-Jenis Paragraf",
        description:
          "Materi mengenai pengertian paragraf serta jenis-jenis paragraf berdasarkan ide pokok dan gaya bahasanya.",
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

seedJenisParagraf();
