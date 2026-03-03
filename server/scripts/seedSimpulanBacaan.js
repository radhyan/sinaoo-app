const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSimpulanBacaan = async () => {
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

    const targetId = "simpulan-bacaan";

    const stepsData = [
      {
        title: "Materi: Simpulan Bacaan",
        type: "reading",
        status: "active",
        description:
          "Pahami pengertian, fungsi, ciri-ciri, hingga tip dalam mengerjakan soal menentukan simpulan suatu bacaan.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Itu Simpulan?</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                Secara sederhana, simpulan atau menyimpulkan berarti sesuatu yang disimpulkan atau pendapat akhir yang berdasarkan pada uraian sebelumnya.
              </p>
              
              <p class="text-body-l text-Grayscale-900 mb-4">
                Berdasarkan KBBI edisi VI, kata simpulan atau menyimpulkan memiliki arti "mengikhtisarkan (menetapkan, menyarikan/proses mengambil atau memilih bagian-bagian penting dari teks, informasi, pendapat, data, atau yang lainnya yang dirasa penting) berdasarkan apa-apa yang diuraikan dalam karangan dan disajikan dalam bentuk yang lebih singkat, padat, dan mudah dipahami.
              </p>

              <div class="bg-Primary-50 rounded-xl p-6 border-l-4 border-Primary-500 mb-8 border border-Primary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  Menurut Siahaan, dkk. (2022: 10137) mengemukakan, "Menyimpulkan adalah <span class="font-bold">kegiatan merangkum gagasan-gagasan penting hingga menjadi simpul atau ringkas (pendek/singkat) yang runtut dan mudah dipahami</span>".
                </p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Fungsi Simpulan?</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                Adapun fungsi simpulan bacaan sebagai berikut.
              </p>
              <ol class="list-decimal pl-5 space-y-2 text-body-l text-Grayscale-900 mb-8">
                <li>Menuliskan kembali isi bacaan secara singkat dan jelas.</li>
                <li>Menyajikan inti atau esensi bacaan.</li>
                <li>Membantu pembaca untuk memahami dan mengingat poin-poin penting dari bacaan.</li>
                <li>Menyediakan penutup yang logis dan memuaskan.</li>
                <li>Membantu pembaca memahami dan mengevaluasi suatu bacaan.</li>
              </ol>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Ciri-ciri Simpulan?</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                Adapun ciri-ciri suatu simpulan bacaan sebagai berikut.
              </p>
              <div class="space-y-4 text-body-l text-Grayscale-900 mb-8">
                <p>1. Biasanya diawali dengan konjungsi antarkalimat, seperti:</p>
                <ul class="list-disc pl-5 space-y-4">
                  <li>
                    <span class="font-bold">Jadi,</span><br>
                    Konjungsi antarkalimat "Jadi" berfungsi menyimpulkan suatu gagasan menjadi runtut dan bersifat final berdasarkan pernyataan yang dijelaskan sebelumnya.
                  </li>
                  <li>
                    <span class="font-bold">Dengan demikian,</span><br>
                    Konjungsi antarkalimat "Dengan demikian" berfungsi menyatakan akibat atau konsekuensi dari suatu tindakan atau kejadian.
                  </li>
                  <li>
                    <span class="font-bold">Oleh karena itu,</span><br>
                    Konjungsi antarkalimat "Oleh karena itu" berfungsi menjelaskan akibat dari suatu sebab yang telah disampaikan sebelumnya.
                  </li>
                  <li>
                    <span class="font-bold">Oleh sebab itu,</span><br>
                    Konjungsi antarkalimat "Oleh sebab itu" berfungsi menyatakan akibat atau konsekuensi dari suatu tindakan atau kejadian.
                  </li>
                  <li>
                    <span class="font-bold">Maka dari itu,</span><br>
                    Konjungsi antarkalimat "Maka dari itu" memiliki fungsi yang sama juga dengan konjungsi antarkalimat "Dengan demikian" yaitu menyatakan kesimpulan atau hasil dari suatu proses/kejadian yang disampaikan sebelumnya. Dalam penggunaannya dapat dipilih salah satu.
                  </li>
                  <li>
                    <span class="font-bold">Namun,</span><br>
                    Konjungsi antarkalimat "Namun" berfungsi menunjukkan pertentangan atau perlawanan dari pernyataan-pernyataan yang telah dijelaskan sebelumnya.
                  </li>
                </ul>

                <p>2. Ada juga simpulan yang <span class="font-bold">tidak diawali</span> dengan konjungsi antarkalimat dan langsung masuk ke pembahasan yang ingin disampaikan. Hal tersebut dapat dikatakan juga sebagai simpulan bacaan yang utuh. Akan tetapi, perlu diperhatikan kembali bahwa simpulan teks/bacaan <span class="font-bold">mencakup keseluruhan inti yang disampaikan dari teks/bacaan tersebut (Tidak hanya sebagian teks saja)</span>.</p>
                <p>3. Singkat, jelas, dan tidak ditambah dengan <span class="font-bold">gagasan baru dan opini</span> yang tidak sesuai dengan bacaan.</p>
                <p>4. Berisi <span class="font-bold">ide pokok atau pokok pikiran</span> berdasarkan pernyataan yang telah dijelaskan pada paragraf-paragraf sebelumnya.</p>
                <p>5. Menggunakan bahasa yang sederhana dan mudah dipahami oleh pembaca.</p>
                <p>6. Memakai kosakata baku sesuai Kamus Besar Bahasa Indonesia (KBBI) dan Pedoman Umum Ejaan Bahasa Indonesia (PUEBI), serta tidak memakai istilah yang tidak ada dalam bacaan dan tidak diketahui orang secara umum.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Tip Mengerjakan Soal Menentukan Simpulan Suatu Bacaan</h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <div class="space-y-6">
                  <div>
                    <h4 class="font-bold text-body-l text-Grayscale-900 mb-2">Sebelum Membaca</h4>
                    <ol class="list-decimal pl-5 space-y-1 text-body-l text-Grayscale-900">
                      <li>Baca instruksi soal dengan teliti.</li>
                      <li>Kalian harus mengetahui jenis pertanyaan simpulannya seperti apa terlebih dahulu, apakah menanyakan simpulan isi teks atau simpulan dari suatu paragraf tertentu saja.</li>
                    </ol>
                  </div>
                  <div>
                    <h4 class="font-bold text-body-l text-Grayscale-900 mb-2">Saat Membaca</h4>
                    <ol class="list-decimal pl-5 space-y-1 text-body-l text-Grayscale-900">
                      <li>Baca bacaan secara keseluruhan untuk memahami konteks.</li>
                      <li>Catat atau berikan tanda kata-kata kunci, istilah penting, dan kalimat yang mengandung ide utama.</li>
                      <li>Perhatikan struktur teks (pengantar, isi, dan kesimpulan).</li>
                      <li>Identifikasi kalimat topik dan pendukung.</li>
                    </ol>
                  </div>
                  <div>
                    <h4 class="font-bold text-body-l text-Grayscale-900 mb-2">Menentukan Simpulan</h4>
                    <ol class="list-decimal pl-5 space-y-1 text-body-l text-Grayscale-900">
                      <li>Buat kesimpulan berdasarkan informasi yang diberikan.</li>
                      <li>Pastikan simpulan logis dan konsisten dengan bacaan.</li>
                      <li>Hindari menambahkan pendapat pribadi.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Membedakan Kesimpulan dan Ringkasan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/7oEVGzHMyvY",
        description:
          "Pelajari lebih lanjut perbedaan antara kesimpulan dan ringkasan dari video ini.",
      },
      {
        title: "Video: Simpulan dan Ringkasan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/zOCFFCPu3oA",
        description:
          "Tonton video berikut untuk pemahaman mendalam tentang simpulan bacaan.",
      },
      {
        title: "Kuis Simpulan Bacaan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question:
              "Apa perbedaan simpulan dan ringkasan dalam suatu bacaan?",
            options: [
              {
                id: "a",
                text: "Simpulan merupakan rangkuman poin-poin teks, sedangkan ringkasan adalah akhir pembahasan yang maknanya sama.",
              },
              {
                id: "b",
                text: "Simpulan merupakan akhir pembahasan yang mencakup keseluruhan teks dengan kalimat yang tidak persis sama, sedangkan ringkasan berisi poin-poin yang dibahas pada teks.",
              },
              {
                id: "c",
                text: "Simpulan dan ringkasan memiliki arti dan fungsi yang sama dalam menyajikan teks secara ringkas.",
              },
              {
                id: "d",
                text: "Simpulan ditulis sebelum teks dibuat, sedangkan ringkasan ditulis setelah teks selesai.",
              },
              {
                id: "e",
                text: "Simpulan hanya berisi opini pribadi pembaca, sedangkan ringkasan berisi fakta dari penulis.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Sering kali kita selalu menyamakan antara simpulan dengan ringkasan, padahal keduanya berbeda. Simpulan merupakan akhir dari pembahasan yang mencakup keseluruhan teks dan biasanya menggunakan kalimat/bahasa yang tidak persis sama dengan yang ada di teks, tetapi maknanya tetap sama, sedangkan ringkasan merupakan rangkuman yang berisi poin-poin yang dibahas pada teks.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            question:
              "Manakah pernyataan di bawah ini yang bukan merupakan fungsi simpulan?",
            options: [
              {
                id: "a",
                text: "Menuliskan kembali kalimat isi bacaan yang sama dengan teks secara singkat dan jelas.",
              },
              {
                id: "b",
                text: "Menyajikan inti atau esensi bacaan.",
              },
              {
                id: "c",
                text: "Membantu pembaca untuk memahami dan mengingat poin-poin penting dari bacaan.",
              },
              {
                id: "d",
                text: "Menyediakan penutup yang logis dan memuaskan.",
              },
              {
                id: "e",
                text: "Membantu pembaca memahami dan mengevaluasi suatu bacaan.",
              },
            ],
            correctAnswer: "a",
            explanation:
              'Untuk menjawab soal ini kalian harus cermat dan teliti pada apa yang ditanyakan oleh soal. Soal menginginkan jawaban yang bukan merupakan fungsi simpulan bacaan. Jawaban dari soal ini adalah "a. Menuliskan kembali kalimat isi bacaan yang sama dengan teks secara singkat dan jelas". Di sini ada frasa "bacaan yang sama", frasa "bacaan yang sama" bukan merepresentasikan fungsi simpulan, melainkan ringkasan. Hal itu karena simpulan menuliskan kembali isi bacaan secara singkat dan jelas serta tidak menggunakan kalimat yang sama dengan teks, tetapi dari segi makna sesuai dengan apa yang disampaikan oleh teks.',
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Pendidikan karakter sangat penting dalam membentuk generasi yang baik. Karakter yang baik akan membuat seseorang menjadi lebih bijak dan bertanggung jawab.",
            question: "Simpulan yang tepat berdasarkan teks tersebut adalah...",
            options: [
              {
                id: "a",
                text: "Pendidikan karakter sebagai bekal masa depan.",
              },
              {
                id: "b",
                text: "Pendidikan karakter membentuk generasi berkualitas.",
              },
              {
                id: "c",
                text: "Pendidikan karakter yang baik membuat orang tua menjadi bijak dan tanggung jawab.",
              },
              {
                id: "d",
                text: "Pendidikan karakter penting untuk anak-anak.",
              },
              {
                id: "e",
                text: "Pendidikan karakter sangat penting.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Teks di atas menonjolkan bagaimana pendidikan karakter memengaruhi pembentukan generasi secara keseluruhan. Oleh karena itu, simpulan yang paling utuh adalah pendidikan karakter membentuk generasi berkualitas.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              "Apakah simpulan dapat ditambahkan dengan gagasan baru dan/atau opini?",
            options: [
              {
                id: "a",
                text: "Bisa, karena simpulan harus memberikan sudut pandang baru yang lebih menarik bagi pembaca.",
              },
              {
                id: "b",
                text: "Bisa, asalkan opini tersebut didukung oleh data-data yang kuat.",
              },
              {
                id: "c",
                text: "Tidak bisa, karena simpulan adalah penegasan dari teks, bukan mengubah makna dengan gagasan baru.",
              },
              {
                id: "d",
                text: "Tidak bisa, karena simpulan hanya boleh mengulang kata per kata dari teks asli tanpa berubah sedikit pun.",
              },
              {
                id: "e",
                text: "Tergantung pada penulisnya, apakah ingin menambahkan pandangan pribadi atau tidak.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Simpulan tidak dapat ditambahkan dengan gagasan baru dan/atau opini. Hal ini karena simpulan merupakan hasil akhir atau sebuah penegasan berdasarkan apa yang disampaikan pada teks. Kalaupun ditambahkan gagasan baru dan/atau opini, tentu akan mengubah makna yang sebenarnya disampaikan pada teks tersebut.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Penggunaan energi terbarukan sangat penting untuk mengurangi polusi lingkungan. Energi terbarukan seperti energi surya dan angin dapat mengurangi ketergantungan pada bahan bakar fosil. Dengan demikian, kita dapat mengurangi emisi gas rumah kaca.\n\nPenggunaan energi terbarukan membantu meningkatkan keamanan energi dan mengurangi biaya produksi. Oleh karena itu, kita harus meningkatkan penggunaan energi terbarukan dalam kehidupan sehari-hari.",
            question:
              "Simpulan paragraf kesatu berdasarkan bacaan tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Penggunaan energi terbarukan sangat penting untuk mengurangi polusi lingkungan dan meningkatkan keamanan energi.",
              },
              {
                id: "b",
                text: "Penggunaan energi terbarukan dapat mengurangi emisi gas rumah kaca.",
              },
              {
                id: "c",
                text: "Penggunaan energi terbarukan dapat menekan biaya produksi yang digunakan.",
              },
              {
                id: "d",
                text: "Oleh karena itu, kita harus meningkatkan penggunaan energi terbarukan dalam kehidupan sehari-hari.",
              },
              {
                id: "e",
                text: "Penggunaan energi terbarukan membawa banyak manfaat bagi semua orang.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Paragraf pertama berfokus pada manfaat energi terbarukan terhadap lingkungan, yang puncaknya ditandai dengan konjungsi antarkalimat 'Dengan demikian, kita dapat mengurangi emisi gas rumah kaca'. Jadi simpulan khusus paragraf pertama adalah mengurangi emisi gas rumah kaca.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Konjungsi yang bisa digunakan untuk mengawali sebuah simpulan bacaan adalah?",
            options: [
              { id: "a", text: "Oleh sebab itu" },
              { id: "b", text: "Karena" },
              { id: "c", text: "Sehingga" },
              { id: "d", text: "Sedangkan" },
              { id: "e", text: "Maka" },
            ],
            correctAnswer: "a",
            explanation:
              'Konjungsi yang hanya dapat digunakan untuk mengawali suatu simpulan adalah konjungsi antarkalimat. Pada pilihan jawaban, pilihan yang menunjukkan konjungsi antarkalimat hanya pilihan jawaban "Oleh sebab itu" dan sisanya termasuk ke dalam konjungsi intrakalimat.',
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Makanan seimbang sangat penting untuk menjaga kesehatan tubuh. Makanan seimbang akan membuat tubuh kita kuat dan sehat. Dengan demikian, kita dapat melakukan aktivitas sehari-hari dengan lebih baik.\n\nMakanan seimbang juga membantu mencegah penyakit kronis, seperti diabetes dan jantung. Oleh karena itu, kita harus memperhatikan keseimbangan gizi dalam makanan kita. Makanan seimbang tidak hanya baik untuk kesehatan, tetapi juga untuk meningkatkan produktivitas.",
            question: "Simpulan yang tepat berdasarkan bacaan tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Makanan seimbang tidak sangat penting untuk menjaga kesehatan tubuh.",
              },
              {
                id: "b",
                text: "Dengan demikian, kita dapat melakukan aktivitas sehari-hari.",
              },
              {
                id: "c",
                text: "Oleh karena itu, kita harus memperhatikan keseimbangan gizi dalam makanan kita.",
              },
              {
                id: "d",
                text: "Makanan seimbang tidak hanya untuk kesehatan, tetapi juga untuk meningkatkan produktivitas.",
              },
              {
                id: "e",
                text: "Dengan mengonsumsi makanan seimbang, kita dapat menjaga kesehatan dan mencegah dari berbagai penyakit.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Simpulan utuh dari teks di atas adalah bahwa dengan mengonsumsi makanan seimbang, kita memperoleh manfaat utama berupa terjaganya kesehatan tubuh dan tercegahnya diri dari berbagai penyakit kronis sebagaimana diuraikan dalam teks.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Kebudayaan Indonesia sangat kaya dan beragam. Kebudayaan ini perlu dilestarikan agar tidak hilang. Oleh karena itu, kita harus memahami dan menghargai kebudayaan kita sendiri.\n\nDengan memahami kebudayaan, kita dapat meningkatkan kesadaran akan identitas nasional. Kita juga dapat mempromosikan kebudayaan kita ke dunia internasional. Oleh karena itu, pelestarian kebudayaan harus menjadi prioritas.",
            question: "Simpulan yang tepat berdasarkan teks tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Kebudayaan Indonesia harus menjadi prioritas kita bersama.",
              },
              {
                id: "b",
                text: "Kebudayaan Indonesia sangat kaya dan beragam.",
              },
              {
                id: "c",
                text: "Kebudayaan Indonesia perlu dilestarikan dan dipromosikan.",
              },
              {
                id: "d",
                text: "Kebudayaan Indonesia sangat terkenal di dunia internasional.",
              },
              {
                id: "e",
                text: "Oleh karena itu, kita harus saling bekerja sama dalam merawat kebudayaan Indonesia dengan cara terus mengenalkan, salah satunya di lingkungan pendidikan.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Inti sari dari kedua paragraf tersebut adalah urgensi untuk menjaga, melestarikan warisan budaya yang ada, dan kemudian mempromosikannya. Oleh karena itu simpulan yang paling merangkum adalah kebudayaan Indonesia perlu dilestarikan dan dipromosikan.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Manakah pernyataan di bawah ini yang bukan ciri-ciri simpulan bacaan?",
            options: [
              {
                id: "a",
                text: "Memakai kosakata baku sesuai kamus besar bahasa Indonesia (KBBI) dan pedoman umum ejaan bahasa Indonesia (PUEBI).",
              },
              {
                id: "b",
                text: "Singkat, jelas, dan tidak dapat ditambahkan dengan pandangan pribadi.",
              },
              {
                id: "c",
                text: "Menggunakan bahasa yang sederhana dan mudah dipahami oleh pembaca.",
              },
              {
                id: "d",
                text: "Biasanya diawali dengan konjungsi intrakalimat.",
              },
              {
                id: "e",
                text: "Sesuai dengan apa yang dibicarakan dalam teks.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Ciri-ciri simpulan bacaan salah satunya adalah umumnya diawali dengan konjungsi ANTARKALIMAT (contohnya: 'Jadi,', 'Oleh karena itu,' dll). Penggunaan konjungsi intrakalimat (seperti 'dan', 'karena', 'sehingga') dalam mengawali kalimat simpulan adalah pernyataan yang salah.",
            points: 6,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Ondel-ondel merupakan salah satu warisan budaya Betawi yang sangat kaya dan beragam. Sebagai simbol kebudayaan Betawi, ondel-ondel harus dilestarikan dan dikembangkan agar tidak hilang. Ondel-ondel tidak hanya sekedar hiburan, tetapi juga memiliki makna yang mendalam tentang kehidupan masyarakat Betawi. Dengan melestarikan ondel-ondel, kita dapat memahami dan menghargai kebudayaan Betawi lebih dalam.\n\nDalam upaya melestarikan ondel-ondel, peran serta masyarakat sangat penting. Masyarakat dapat berpartisipasi dalam kegiatan-kegiatan pelestarian ondel-ondel, seperti workshop, pelatihan, dan pertunjukan. Selain itu, pemerintah juga harus berperan aktif dalam melestarikan ondel-ondel dengan memberikan dukungan dan fasilitas yang memadai. (.........) antara masyarakat dengan pemerintah harus senantiasa bekerja sama supaya ondel-ondel dapat terus hidup dan berkembang sebagai warisan budaya Betawi yang sangat berharga.",
            question:
              "Konjungsi yang tepat untuk melengkapi kalimat terakhir adalah?",
            options: [
              { id: "a", text: "Maka" },
              { id: "b", text: "Sehingga" },
              { id: "c", text: "Jika" },
              { id: "d", text: "Selanjutnya" },
              { id: "e", text: "Oleh karena itu" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat terakhir berfungsi sebagai kesimpulan dan rekomendasi final dari kalimat-kalimat rincian sebelumnya. Untuk menutup paragraf dengan sebuah akibat dari argumentasi itu, konjungsi antarkalimat penanda kesimpulan yang paling tepat adalah 'Oleh karena itu'.",
            points: 6,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Media sosial telah menjadi bagian penting dalam kehidupan sehari-hari. Dengan media sosial, kita dapat berkomunikasi dengan orang lain dari seluruh dunia. Media sosial juga memungkinkan kita untuk berbagi informasi, foto, dan video dengan mudah.\n\nNamun, media sosial juga memiliki dampak negatif. Salah satu dampak negatifnya adalah penyebaran informasi palsu atau hoax. Informasi palsu dapat menyebabkan kepanikan dan kerugian bagi masyarakat. Oleh karena itu, kita harus berhati-hati dalam menggunakan media sosial dan memastikan bahwa informasi yang kita bagikan adalah benar.\n\nSelain itu, media sosial juga dapat mempengaruhi kesehatan mental kita. Penggunaan media sosial yang berlebihan dapat menyebabkan stres, kecemasan, dan depresi. Oleh karena itu, kita harus menggunakan media sosial dengan bijak dan membatasi waktu penggunaannya.\n\nDalam menghadapi dampak negatif media sosial, kita harus memiliki kesadaran dan tanggung jawab. Kita harus menggunakan media sosial dengan bijak dan memastikan bahwa informasi yang kita bagikan adalah benar. Dengan demikian, kita dapat memanfaatkan media sosial secara positif dan menghindari dampak negatifnya.",
            question: "Simpulan yang tepat dari teks tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Media sosial memiliki dampak positif dan negatif.",
              },
              {
                id: "b",
                text: "Media sosial memudahkan kita untuk saling bertukar informasi dengan banyak orang.",
              },
              {
                id: "c",
                text: "Media sosial memiliki dampak positif dan negatif, dan kita harus menggunakan media sosial dengan bijak.",
              },
              {
                id: "d",
                text: "Oleh karena itu, media sosial harus kita gunakan dengan bijak.",
              },
              {
                id: "e",
                text: "Media sosial menjadi wadah untuk memperbanyak teman.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Teks memaparkan dua sisi penggunaan media sosial (positif dan negatif) serta memberikan pesan kuat tentang bagaimana cara kita merespons hal tersebut. Maka simpulan gabungan dari intisari teks ini adalah: 'Media sosial memiliki dampak positif dan negatif, dan kita harus menggunakan media sosial dengan bijak.'",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Tari Jaipong adalah salah satu tarian tradisional Sunda yang berasal dari Jawa Barat. Tarian ini memiliki gerakan yang dinamis dan ekspresif, dengan irama musik yang cepat dan menghentak. Tari Jaipong biasanya dibawakan oleh penari perempuan yang mengenakan kostum tradisional Sunda.\n\nTari Jaipong memiliki sejarah yang panjang dan kompleks. Tarian ini awalnya merupakan bagian dari ritual keagamaan dan perayaan adat Sunda. Namun, seiring waktu, Tari Jaipong berkembang menjadi sebuah bentuk seni yang mandiri dan memiliki nilai estetika yang tinggi.\n\nDalam beberapa tahun terakhir, Tari Jaipong telah mengalami revitalisasi dan telah menjadi salah satu ikon budaya Sunda yang paling populer. Tarian ini telah dibawakan dalam berbagai pertunjukan dan festival budaya, baik di dalam maupun di luar negeri.\n\nDalam konteks budaya Sunda, Tari Jaipong memiliki makna yang sangat penting. Tarian ini tidak hanya merupakan sebuah bentuk seni, tetapi juga merupakan sebuah simbol identitas budaya Sunda dan sebuah sarana untuk melestarikan tradisi dan nilai-nilai budaya Sunda.",
            question: "Simpulan yang tepat berdasarkan teks tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Tari Jaipong merupakan simbol identitas budaya Sunda dan memiliki makna yang sangat penting dalam konteks budaya Sunda.",
              },
              {
                id: "b",
                text: "Tari Jaipong dari tahun ke tahun mengalami revitalisasi sehingga dapat terus bersaing di kancah internasional.",
              },
              {
                id: "c",
                text: "Tari Jaipong dapat dibawakan dalam ritual keagamaan dan perayaan adat Sunda.",
              },
              {
                id: "d",
                text: "Tari Jaipong memiliki sejarah yang panjang dan kompleks.",
              },
              {
                id: "e",
                text: "Tari Jaipong dapat dimainkan oleh semua kalangan.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Teks tersebut menjelaskan tentang Tari Jaipong sebagai sebuah bentuk seni yang memiliki makna yang sangat penting dalam konteks budaya Sunda. Teks juga menjelaskan tentang sejarah dan perkembangan Tari Jaipong, serta nilai-nilai budaya Sunda yang terkait dengan tarian ini. Oleh karena itu, simpulan yang tepat adalah bahwa Tari Jaipong merupakan sebuah simbol identitas budaya Sunda dan memiliki makna yang sangat penting dalam konteks budaya Sunda.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Shin Tae Young adalah seorang pelatih sepak bola asal Korea Selatan yang telah memiliki karir yang panjang dan sukses. Ia telah melatih beberapa tim sepak bola terkemuka di Korea Selatan dan telah memenangkan beberapa gelar juara. Shin Tae Young dikenal sebagai pelatih yang memiliki visi dan strategi yang jelas, serta memiliki kemampuan untuk memotivasi dan mengembangkan pemain-pemainnya.\n\nShin Tae Young memulai karirnya sebagai pelatih sepak bola pada tahun 2000, ketika ia menjadi asisten pelatih tim sepak bola Universitas Korea. Ia kemudian menjadi pelatih kepala tim sepak bola Universitas Korea dan memenangkan beberapa gelar juara. Pada tahun 2010, Shin Tae Young menjadi pelatih kepala tim sepak bola FC Seoul dan memenangkan beberapa gelar juara, termasuk gelar juara Liga Champions Asia.\n\nShin Tae Young dikenal sebagai pelatih yang memiliki kemampuan untuk mengembangkan pemain-pemain muda. Ia telah melatih beberapa pemain muda yang kemudian menjadi pemain sepak bola terkemuka di Korea Selatan. Shin Tae Young juga dikenal sebagai pelatih yang memiliki kemampuan untuk memotivasi dan mengembangkan timnya.\n\nPada tahun 2020, Shin Tae Young menjadi pelatih kepala tim sepak bola nasional Korea Selatan. Ia telah memimpin tim sepak bola nasional Korea Selatan dalam beberapa pertandingan internasional dan telah memenangkan beberapa gelar juara.",
            question: "Simpulan yang tepat berdasarkan teks tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Shin Tae Young memiliki kemampuan memenangkan gelar juara.",
              },
              {
                id: "b",
                text: "Shin Tae Young adalah seorang pelatih sepak bola yang sukses dan memiliki karier yang panjang, serta memiliki kemampuan untuk mengembangkan pemain-pemain muda dan memotivasi timnya.",
              },
              {
                id: "c",
                text: "Shin Tae Young memiliki karier sebagai pelatih sepak bola.",
              },
              {
                id: "d",
                text: "Shin Tae Young memiliki kemampuan untuk mengembangkan pemain-pemain muda yang berbakat.",
              },
              {
                id: "e",
                text: "Shin Tae Young memiliki karier sepak bola dan memenangkan beberapa gelar juara.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Seluruh paragraf menceritakan tentang karier, kemampuan manajerial, hingga pencapaiannya. Kesimpulan yang paling utuh untuk merangkum hal tersebut adalah Shin Tae Young adalah seorang pelatih sepak bola yang sukses, bisa mengembangkan pemain muda, dan punya kemampuan memotivasi.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Apa yang dimaksud dengan simpulan bacaan?",
            options: [
              {
                id: "a",
                text: "Kegiatan merangkum gagasan-gagasan penting hingga menjadi simpul atau ringkas yang runtut dan mudah dipahami.",
              },
              {
                id: "b",
                text: "Proses memberikan komentar dan kritikan terhadap teks yang telah dibaca.",
              },
              {
                id: "c",
                text: "Membaca teks secara cepat untuk menemukan kata-kata sulit di dalamnya.",
              },
              {
                id: "d",
                text: "Menulis ulang seluruh isi bacaan dengan kata-kata sendiri agar lebih panjang dan detail.",
              },
              {
                id: "e",
                text: "Mencari kesalahan ejaan dan tanda baca dalam sebuah teks.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Menyimpulkan adalah kegiatan merangkum gagasan-gagasan penting hingga menjadi pendek/singkat yang runtut dan mudah dipahami.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Menuntut ilmu adalah salah satu kewajiban yang paling penting dalam hidup. Ilmu adalah sumber kekuatan dan kebijaksanaan yang dapat membantu kita dalam menghadapi berbagai tantangan hidup. Dengan menuntut ilmu, kita dapat meningkatkan pengetahuan dan kemampuan kita, sehingga kita dapat menjadi lebih mandiri dan sukses.\n\nNamun, menuntut ilmu tidak hanya tentang memperoleh pengetahuan, tetapi juga tentang mengembangkan karakter dan akhlak yang baik. Ilmu yang diperoleh harus digunakan untuk kebaikan dan kemaslahatan orang lain, bukan untuk kepentingan pribadi semata. Oleh karena itu, menuntut ilmu harus dilakukan dengan niat yang tulus dan hati yang bersih.\n\nDalam menuntut ilmu, kita harus memiliki semangat dan motivasi yang kuat. Kita harus siap untuk menghadapi berbagai tantangan dan kesulitan, serta siap untuk belajar dari kesalahan dan kegagalan. Dengan demikian, kita dapat mencapai tujuan kita dan menjadi orang yang lebih baik.\n\nMenuntut ilmu adalah proses yang berkelanjutan dan tidak pernah berhenti. Kita harus terus belajar dan mengembangkan diri kita, sehingga kita dapat tetap relevan dan kompetitif dalam menghadapi perubahan zaman.",
            question: "Simpulan yang tepat berdasarkan teks tersebut adalah?",
            options: [
              {
                id: "a",
                text: "Menuntut ilmu akan mendapatkan wawasan dan pengetahuan baru",
              },
              {
                id: "b",
                text: "Menuntut ilmu adalah proses yang berkelanjutan dan tidak pernah berhenti.",
              },
              {
                id: "c",
                text: "Untuk mencapai tujuan kita menjadi orang yang lebih baik, menuntut ilmu dengan baik merupakan salah satu jalan untuk mencapai tujuan tersebut.",
              },
              {
                id: "d",
                text: "Menuntut ilmu tidak hanya tentang memperoleh pengetahuan, tetapi juga tentang mengembangkan karakter dan akhlak yang baik.",
              },
              {
                id: "e",
                text: "Menuntut ilmu adalah proses yang berkelanjutan dan harus dilakukan dengan niat yang tulus dan hati yang bersih.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Paragraf-paragraf di atas membawa ide tentang kewajiban menuntut ilmu tanpa henti (berkelanjutan) dan dilandasi oleh niat/akhlak yang tulus. Maka simpulan utuhnya adalah menuntut ilmu adalah proses yang berkelanjutan dan harus dilakukan dengan niat yang tulus dan hati yang bersih.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Simpulan Bacaan";
      moduleDoc.description =
        "Pelajari pengertian, fungsi, ciri-ciri, dan tip dalam menentukan simpulan dari suatu teks bacaan.";
      moduleDoc.subcategory = "Analisis Paragraf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Simpulan Bacaan",
        description:
          "Pelajari pengertian, fungsi, ciri-ciri, dan tip dalam menentukan simpulan dari suatu teks bacaan.",
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

seedSimpulanBacaan();
