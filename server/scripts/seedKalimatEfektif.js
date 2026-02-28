const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedKalimatEfektif = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Pengetahuan dan Pemahaman Umum";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "kalimat-efektif";

    const stepsData = [
      {
        title: "Materi: Kalimat Efektif",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian kalimat efektif, ciri-ciri, dan syarat-syarat kalimat efektif.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Kalimat Efektif -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Kalimat Efektif</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Apa Itu Kalimat Efektif?</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-0 text-justify">
                    Kalimat efektif adalah sebuah kalimat yang <strong>jelas, tidak bertele-tele, dan bisa dimengerti pembaca dengan mudah</strong>. Jenis kalimat ini terdiri dari Subjek, Predikat, Objek, dan Keterangan (SPOK), atau minimal unsur Subjek (S) dan Predikat (P).
                  </p>
                </div>
              </div>
            </section>

            <!-- Ciri-Ciri Kalimat Efektif -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ciri-Ciri Kalimat Efektif</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li>Memiliki unsur penting atau pokok, minimal unsur Subjek (S) dan Predikat (P).</li>
                    <li>Taat terhadap tata aturan ejaan yang berlaku.</li>
                    <li>Menggunakan diksi yang tepat.</li>
                    <li>Menggunakan kesepadanan antara struktur bahasa dan jalan pikiran yang logis dan sistematis.</li>
                    <li>Menggunakan kesejajaran bentuk bahasa yang dipakai.</li>
                    <li>Melakukan penekanan ide pokok.</li>
                    <li>Mengacu pada kehematan penggunaan kata.</li>
                    <li>Menggunakan variasi struktur kalimat.</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Syarat-Syarat Kalimat Efektif -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Syarat-Syarat Kalimat Efektif</h3>

              <!-- Kelogisan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">1. Kelogisan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Suatu kalimat dapat dipahami apabila penulisan yang digunakan sesuai dengan ejaan yang berlaku. Selain itu, unsur-unsur dalam kalimat juga harus memiliki <strong>hubungan yang logis dan masuk akal</strong>.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li>❌ Tidak efektif: <em>Untuk <u>mempersingkat</u> waktu, saya akan mengakhiri presentasi kali ini.</em></li>
                      <li>✅ Efektif: <em>Untuk <u>menghemat</u> waktu, saya akan mengakhiri presentasi kali ini.</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Ketegasan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">2. Ketegasan</h4>
                </div>
                <div class="p-6">
                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0 mt-0">
                    <li>Meletakkan kata yang ditonjolkan di awal kalimat.</li>
                    <li>Membuat urutan kata yang logis.</li>
                    <li>Melakukan penegasan dengan repetisi (pengulangan kata).</li>
                    <li>Melakukan pertentangan terhadap ide yang ditonjolkan.</li>
                    <li>Menggunakan partikel penekan/penegas (-lah).</li>
                  </ul>
                </div>
              </div>

              <!-- Kehematan -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">3. Kehematan</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <div>
                      <p class="font-bold text-Primary-800 mt-0 mb-2">Hindari pengulangan subjek</p>
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                        Jika subjek dalam kalimat hanya satu, penyebutannya tidak perlu diulang.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg">
                        <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <em>Karena <u>dia</u> rajin, <u>dia</u> menjadi juara kelas.</em></p>
                      </div>
                    </div>

                    <div>
                      <p class="font-bold text-Primary-800 mt-0 mb-2">Hindari sinonim kata</p>
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                        Jika dalam sebuah kalimat terdapat dua kata yang memiliki makna serupa, cukup gunakan salah satunya.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg">
                        <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <em>Yani rajin belajar <u>agar supaya</u> pintar.</em></p>
                      </div>
                    </div>

                    <div>
                      <p class="font-bold text-Primary-800 mt-0 mb-2">Perhatikan bentuk kata jamak</p>
                      <p class="text-body-l text-Grayscale-700 mt-0 mb-2 text-justify">
                        Jika sebuah kata telah memiliki makna jamak, maka tidak perlu ditambahkan kata yang bermakna jamak lagi.
                      </p>
                      <div class="bg-Primary-50 p-3 rounded-lg">
                        <p class="text-body-l text-Grayscale-700 mb-0 mt-0">❌ <em><u>Para alumni</u> dipersilakan untuk memasuki ruangan.</em></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Ketepatan dan Kecermatan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">4. Ketepatan dan Kecermatan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Informasi yang akan disampaikan dalam suatu kalimat harus <strong>jitu (sesuai dengan sasaran) dan tidak memiliki makna ganda</strong>. Beberapa hal yang perlu diperhatikan untuk menciptakan ketepatan kalimat yaitu; memakai kata yang tepat, kata berpasangan harus sesuai, dan hindari peniadaan preposisi.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li>❌ <em>Buku Kakak <u>yang sudah lawas</u> itu dijual dengan harga murah.</em></li>
                      <li>✅ <em>Buku <u>lawas milik Kakak itu</u> dijual dengan harga murah.</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Kepaduan -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">5. Kepaduan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Informasi yang disampaikan <strong>tidak terpecah-pecah dan tidak bertele-tele</strong>. Tidak perlu menyisipkan kata seperti 'daripada' atau 'tentang' antara predikat kata kerja dan objek penderita.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li>❌ <em>Artikel ini membahas <u>tentang</u> pencemaran udara di Jakarta.</em></li>
                      <li>✅ <em>Artikel ini membahas pencemaran udara di Jakarta.</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Kesejajaran -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">6. Kesejajaran</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Kalimat efektif harus memiliki <strong>kesamaan bentuk kata atau makna</strong> yang dipakai dalam kalimat. Kesejajaran terletak pada penggunaan imbuhan, sedangkan dalam hal struktur, kesejajaran ada pada klausa-klausa yang mengisi kalimat majemuk.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li>❌ <em>Nara membantu nenek tersebut dengan <u>dipapahnya</u> ke pinggir jalan.</em></li>
                      <li>✅ <em>Nara membantu nenek tersebut dengan <u>memapahnya</u> ke pinggir jalan.</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Kesepadanan -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">7. Kesepadanan</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Struktur kalimat efektif wajib memenuhi <strong>unsur gramatikal yaitu unsur SPOK</strong>, minimal Subjek (S) dan Predikat (P).
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-0">Contoh: <em><u>Johan</u> <u>belajar</u> di kelas.</em> (S + P + Ket.)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Kalimat Efektif",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/js8s9nAAccw",
        description: "Video pembelajaran tentang kalimat efektif.",
      },
      {
        title: "Kuis Kalimat Efektif",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question:
              "Pilihlah kalimat yang paling efektif di antara pilihan berikut:",
            options: [
              {
                id: "a",
                text: "Para siswa telah menyelesaikan tugas-tugasnya dengan tepat waktu dan dengan baik.",
              },
              {
                id: "b",
                text: "Tugas siswa telah diselesaikan oleh para siswa dengan waktu yang tepat.",
              },
              {
                id: "c",
                text: "Siswa telah menyelesaikan tugasnya dengan baik dan tepat waktu.",
              },
              {
                id: "d",
                text: "Tugas-tugas para siswa telah selesai dikerjakan dengan waktu yang tepat.",
              },
              {
                id: "e",
                text: "Telah selesai siswa menyelesaikan tugasnya dengan baik pada waktu yang tepat.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kalimat (c) adalah yang paling efektif, padat, dan jelas. Kalimat lainnya mengandung pemborosan kata (seperti pengulangan preposisi 'dengan') atau struktur subjek-predikat yang berbelit-belit.",
            points: 6,
          },
          {
            id: 2,
            type: "matrix",
            question:
              "Tentukan apakah pernyataan berikut benar atau salah terkait syarat kalimat efektif.",
            rows: [
              {
                id: "r1",
                text: "Kalimat efektif harus memiliki subjek dan predikat yang jelas",
              },
              {
                id: "r2",
                text: 'Penggunaan kata yang berlebihan seperti "para siswa-siswa" adalah contoh kalimat efektif',
              },
              {
                id: "r3",
                text: "Kalimat efektif selalu menghindari penggunaan sinonim atau variasi kata",
              },
              {
                id: "r4",
                text: "Kalimat efektif harus logis dan sesuai dengan tata bahasa yang berlaku",
              },
              {
                id: "r5",
                text: "Kalimat yang berbentuk pasif selalu dianggap tidak efektif",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "false",
              r4: "true",
              r5: "false",
            },
            explanation:
              "1. Jelas fungsi S-P adalah syarat utama (Benar). 2. 'Para siswa-siswa' adalah pleonasme/pemborosan (Salah). 3. Variasi kata justru dianjurkan agar kalimat tidak monoton, yang dihindari adalah repetisi yang mubazir (Salah). 4. Kelogisan (nalar) dan keparalelan adalah syarat kalimat efektif (Benar). 5. Kalimat pasif bisa efektif jika digunakan pada konteks yang tepat (Salah).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              '"Penggunaan teknologi yang tepat dapat meningkatkan produktivitas kerja."',
            question:
              "Frasa 'penggunaan teknologi' merupakan _________ dalam kalimat tersebut.",
            options: [
              { id: "a", text: "Subjek" },
              { id: "b", text: "Predikat" },
              { id: "c", text: "Objek" },
              { id: "d", text: "Keterangan" },
              { id: "e", text: "Pelengkap" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam struktur kalimat tersebut, frasa nominal 'Penggunaan teknologi yang tepat' menduduki fungsi Subjek (S), sedangkan 'dapat meningkatkan' adalah Predikat (P), dan 'produktivitas kerja' adalah Objek (O).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              '"Dalam usaha perlindungan tersebut tidak terlepas dari kegiatan manusia dalam memanipulasi komponen lingkungan."',
            question: "Kalimat tersebut dapat diperbaiki dengan cara…",
            options: [
              {
                id: "a",
                text: "Menghilangkan kata dalam di awal kalimat",
              },
              {
                id: "b",
                text: "Menambahkan kata melakukan sebelum kata usaha",
              },
              {
                id: "c",
                text: "Mengganti kata terlepas dengan lepas",
              },
              {
                id: "d",
                text: "Mengganti kata dalam sebelum kata memanipulasi dengan kata untuk",
              },
              {
                id: "e",
                text: "Mengganti kata memengaruhi menjadi berpengaruh pada",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Penggunaan preposisi ('dalam', 'bagi', 'untuk', 'pada') di awal kalimat akan membuat fungsi Subjek berubah menjadi Keterangan, sehingga kalimat kehilangan subjek. Menghilangkan kata 'Dalam' membuat 'usaha perlindungan tersebut' menjadi Subjek yang jelas.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "(1) Besudut adalah orang rimba pertama yang lulus seleksi sebagai mahasiswa di sebuah universitas di Jambi. (2) Dia berasal dari kelompok orang rimba yang tinggal di daerah aliran Sungai Bernai, Jambi. (3) Besudut kuliah dengan mendapat banyak bantuan dari berbagai pihak. (4) Kementerian Pendidikan dan Kebudayaan memberinya uang bulanan sebesar Rp600.000,00. (5) Dukungan dan fasilitas tersebut yang dianggap masyarakat rimba sebagai gaji dari pemerintah. (6) Sejak kuliah, setiap Jumat sore Besudut pulang ke rumahnya di kawasan transmigrasi Tanagaro, Kabupaten Tebo dan kembali Minggu sore.",
            question:
              "Kalimat yang tidak logis dalam bacaan tersebut adalah kalimat...",
            options: [
              { id: "a", text: "(1)" },
              { id: "b", text: "(2)" },
              { id: "c", text: "(3)" },
              { id: "d", text: "(4)" },
              { id: "e", text: "(5)" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat (5) tidak memiliki predikat utama karena penggunaan konjungsi perluasan 'yang'. Strukturnya hanya menjadi Subjek yang diperluas. Agar efektif, kata 'yang' harus dihilangkan menjadi: 'Dukungan dan fasilitas tersebut dianggap masyarakat rimba sebagai gaji...'.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              '"Seseorang yang akan merasa ditinggalkan atau dikucilkan saat ia melihat orang lain di media sosial bersenang-senang."',
            question:
              "Kalimat manakah yang merupakan perbaikan dari kalimat di atas?",
            options: [
              {
                id: "a",
                text: "Seseorang merasa ditinggalkan atau dikucilkan saat ia melihat orang lain di media sosial bersenang-senang.",
              },
              {
                id: "b",
                text: "Seseorang akan merasa ditinggalkan atau dikucilkan saat dirinya melihat orang lain di media sosial bersenang-senang.",
              },
              {
                id: "c",
                text: "Seseorang merasa ditinggalkan atau dikucilkan saat melihat orang lain di media sosial bersenang-senang.",
              },
              {
                id: "d",
                text: "Seseorang yang merasa ditinggalkan atau dikucilkan saat melihat orang lain di media sosial bersenang-senang.",
              },
              {
                id: "e",
                text: "Seseorang yang merasa ditinggalkan atau dikucilkan saat ia melihat orang lain di media sosial bersenang-senang.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Menghilangkan kata 'yang' agar kalimat memiliki predikat utama, serta menghilangkan pronomina 'ia' setelah konjungsi 'saat' untuk menghindari pemborosan subjek.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              '"Sekalipun tanam-menanam masih menjadi idola, fakta yang menunjukkan bahwa orang Indonesia pada umumnya baru suka menanam tanaman dalam pot."',
            question: "Kalimat tersebut dapat disempurnakan dengan cara…",
            options: [
              { id: "a", text: "Menghapus sekalipun" },
              { id: "b", text: "Menghapus masih" },
              { id: "c", text: "Menambahkan masyarakat setelah idola" },
              { id: "d", text: "Mengganti bahwa dengan kalau" },
              { id: "e", text: "Menghilangkan yang setelah fakta" },
            ],
            correctAnswer: "e",
            explanation:
              "Klausa kedua ('fakta yang menunjukkan...') tidak memiliki predikat karena ada perluasan 'yang'. Menghilangkan 'yang' akan membuat 'fakta' menjadi Subjek dan 'menunjukkan' menjadi Predikat.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              '"Para mahasiswa sedang mengerjakan tugas mereka masing-masing di ruang kelas."',
            question: "Kalimat tersebut kurang efektif karena...",
            options: [
              {
                id: "a",
                text: 'Penggunaan kata "para" tidak diperlukan.',
              },
              {
                id: "b",
                text: 'Kata "mahasiswa" sudah menunjukkan bentuk jamak.',
              },
              {
                id: "c",
                text: 'Kata "mereka" redundan.',
              },
              {
                id: "d",
                text: "Pilihan A, B, dan C benar.",
              },
              {
                id: "e",
                text: "Tidak ada yang salah dengan kalimat tersebut.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Terdapat pleonasme (pemborosan makna jamak). Kata 'para', 'mahasiswa', 'mereka', dan 'masing-masing' sudah saling tumpang tindih dalam menyatakan kejamakan subjek.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              '"Dia menjelaskan bahwa akibat dari hujan deras yang terjadi adalah banjir di beberapa wilayah."',
            question: "Kalimat efektif dari pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: '"Dia menjelaskan akibat hujan deras adalah banjir di beberapa wilayah."',
              },
              {
                id: "b",
                text: '"Dia menjelaskan bahwa hujan deras menyebabkan banjir di beberapa wilayah."',
              },
              {
                id: "c",
                text: '"Hujan deras menyebabkan banjir di beberapa wilayah, jelas dia."',
              },
              {
                id: "d",
                text: '"Akibat hujan deras, banjir terjadi di beberapa wilayah."',
              },
              {
                id: "e",
                text: '"Dia menjelaskan bahwa banjir di beberapa wilayah akibat hujan deras."',
              },
            ],
            correctAnswer: "b",
            explanation:
              "Bentuk 'akibat dari... yang terjadi adalah...' sangat berbelit-belit. Menyederhanakannya menjadi subjek ('hujan deras') dan predikat aktif ('menyebabkan') membuat kalimat jauh lebih lugas dan efektif.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Kalimat berikut yang tidak efektif adalah...",
            options: [
              {
                id: "a",
                text: '"Pemerintah akan segera menyelesaikan proyek ini."',
              },
              {
                id: "b",
                text: '"Untuk mencapai keberhasilan, diperlukan kerja keras dan dedikasi."',
              },
              {
                id: "c",
                text: '"Para peserta diwajibkan untuk mendaftarkan diri masing-masing secara mandiri."',
              },
              {
                id: "d",
                text: '"Banjir terjadi akibat hujan deras selama dua hari berturut-turut."',
              },
              {
                id: "e",
                text: '"Langkah ini diambil untuk mengurangi dampak negatif terhadap masyarakat."',
              },
            ],
            correctAnswer: "c",
            explanation:
              "Terdapat pemborosan pada frasa 'masing-masing secara mandiri'. Keduanya mengandung makna perbuatan yang dilakukan sendiri-sendiri, sehingga cukup digunakan salah satunya saja.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              '"Kami akan mengundang seluruh warga masyarakat untuk hadir pada acara tersebut."',
            question: "Kalimat efektif dari pernyataan tersebut adalah:",
            options: [
              {
                id: "a",
                text: '"Kami mengundang warga untuk hadir pada acara tersebut."',
              },
              {
                id: "b",
                text: '"Kami mengundang masyarakat untuk menghadiri acara tersebut."',
              },
              {
                id: "c",
                text: '"Kami mengundang semua warga masyarakat untuk acara tersebut."',
              },
              {
                id: "d",
                text: '"Kami mengundang masyarakat untuk hadir pada acara itu."',
              },
              {
                id: "e",
                text: '"Kami mengundang seluruh warga untuk acara tersebut."',
              },
            ],
            correctAnswer: "a",
            explanation:
              "Penggunaan frasa 'warga masyarakat' adalah bentuk pleonasme karena 'warga' sudah merujuk pada anggota masyarakat. Pemilihan opsi A menjadikan kalimat lebih ringkas dan hemat kata.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              '"Kegiatan ini bertujuan untuk supaya masyarakat dapat meningkatkan kesadaran terhadap lingkungan."',
            question: "Kalimat efektif dari pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: '"Kegiatan ini bertujuan supaya masyarakat meningkatkan kesadaran terhadap lingkungan."',
              },
              {
                id: "b",
                text: '"Kegiatan ini bertujuan agar masyarakat sadar terhadap lingkungan."',
              },
              {
                id: "c",
                text: '"Kegiatan ini bertujuan meningkatkan kesadaran masyarakat terhadap lingkungan."',
              },
              {
                id: "d",
                text: '"Kegiatan ini bertujuan agar masyarakat meningkatkan kesadaran lingkungan."',
              },
              {
                id: "e",
                text: '"Kegiatan ini bertujuan supaya masyarakat sadar terhadap lingkungan."',
              },
            ],
            correctAnswer: "c",
            explanation:
              "Konjungsi 'untuk supaya' berlebihan (pleonastis) karena keduanya menyatakan tujuan. Mengubah strukturnya menjadi langsung 'bertujuan meningkatkan...' membuat kalimat lebih padat.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question: "Kalimat berikut yang tidak efektif adalah...",
            options: [
              {
                id: "a",
                text: '"Hasil penelitian menunjukkan adanya hubungan antara pola makan dan kesehatan."',
              },
              {
                id: "b",
                text: '"Peraturan baru itu diterapkan untuk meningkatkan kedisiplinan karyawan."',
              },
              {
                id: "c",
                text: '"Mereka saling membantu satu sama lain dalam menyelesaikan tugas."',
              },
              {
                id: "d",
                text: '"Para siswa harus mengikuti kegiatan ekstrakurikuler yang telah ditentukan."',
              },
              {
                id: "e",
                text: '"Pemimpin harus dapat memotivasi anggota tim untuk mencapai tujuan bersama."',
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'saling' sudah memiliki makna resiprokal (berbalasan/satu sama lain). Penggunaan 'saling' berdampingan dengan 'satu sama lain' merupakan pemborosan kata.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question: "Kalimat berikut yang tidak efektif adalah...",
            options: [
              {
                id: "a",
                text: '"Perubahan sistem dilakukan untuk meningkatkan efisiensi kerja."',
              },
              {
                id: "b",
                text: '"Dia tidak hadir karena sakit sehingga tugasnya tertunda."',
              },
              {
                id: "c",
                text: '"Kami memberikan penghargaan kepada siswa yang berprestasi."',
              },
              {
                id: "d",
                text: '"Kami semua saling bekerja sama untuk menyelesaikan proyek ini."',
              },
              {
                id: "e",
                text: '"Pekerjaan ini akan selesai apabila kita saling membantu."',
              },
            ],
            correctAnswer: "d",
            explanation:
              "Frasa 'saling bekerja sama' tidak efektif. 'Bekerja sama' dengan sendirinya sudah bermakna kegiatan yang melibatkan lebih dari satu pihak yang bertindak secara bersama-sama. Tambahan kata 'saling' menjadi mubazir.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              '"Kami sedang menunggu kedatangan dari tamu penting yang dijadwalkan hadir sore ini."',
            question: "Kalimat efektif dari pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: '"Kami menunggu kedatangan tamu penting yang dijadwalkan hadir sore ini."',
              },
              {
                id: "b",
                text: '"Kami sedang menunggu tamu penting yang dijadwalkan sore ini."',
              },
              {
                id: "c",
                text: '"Kami menunggu kedatangan tamu penting sore ini."',
              },
              {
                id: "d",
                text: '"Kami menunggu tamu penting yang hadir sore ini."',
              },
              {
                id: "e",
                text: '"Kami sedang menunggu tamu penting sore ini."',
              },
            ],
            correctAnswer: "a",
            explanation:
              "Menghilangkan preposisi 'dari' yang tidak berfungsi secara tata bahasa di posisi tersebut. Objek dari kata kerja 'menunggu' bisa langsung diikuti oleh frasa nomina 'kedatangan tamu penting...'.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Kalimat Efektif";
      moduleDoc.description =
        "Materi mengenai kalimat efektif mencakup pengertian, ciri-ciri, dan syarat-syarat kalimat efektif (kelogisan, ketegasan, kehematan, ketepatan, kepaduan, kesejajaran, kesepadanan).";
      moduleDoc.subcategory = "Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Kalimat Efektif",
        description:
          "Materi mengenai kalimat efektif mencakup pengertian, ciri-ciri, dan syarat-syarat kalimat efektif (kelogisan, ketegasan, kehematan, ketepatan, kepaduan, kesejajaran, kesepadanan).",
        subcategory: "Kata",
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

seedKalimatEfektif();
