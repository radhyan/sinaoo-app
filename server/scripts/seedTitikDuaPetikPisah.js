const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedTitikDuaPetikPisah = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Pemahaman Bacaan dan Menulis";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "titik-dua-petik-dan-pisah";

    const stepsData = [
      {
        title: "Materi: Titik Dua, Petik, dan Pisah",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang pengertian dan fungsi tanda titik dua (:), tanda petik (' dan \"), serta tanda pisah (-), termasuk aturan penggunaannya dalam bahasa Indonesia.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- Pengertian Titik Dua (:) -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Titik Dua (:)</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 mt-0 mb-0 text-justify">
                    Titik dua (:) adalah tanda baca yang digunakan untuk memperjelas hubungan antara satu bagian dengan bagian lain dalam sebuah kalimat atau teks. Biasanya, titik dua dipakai untuk memperkenalkan rincian, kutipan, atau penjelasan lebih lanjut.
                  </p>
                </div>
              </div>

              <!-- Fungsi Titik Dua -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Fungsi Titik Dua</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>1. Memperkenalkan Daftar atau Rincian</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Bahan yang diperlukan untuk membuat kue adalah: tepung, gula, telur, dan mentega.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>2. Sebelum Kutipan Langsung</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Ibu berkata: "Jangan lupa mengerjakan PR-mu."</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>3. Sebagai Pemisah Antara Bab dan Subbab</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Bab II: Metode Penelitian</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>4. Pada Salam Pembuka dalam Surat</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Kepada Yth.: Bapak/Ibu Kepala Sekolah</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>5. Dalam Penulisan Waktu atau Rasio</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Pertandingan dimulai pukul 10:30.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Aturan Penggunaan Titik Dua -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Aturan Penggunaan Titik Dua</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0 text-justify">Tidak digunakan setelah predikat dalam sebuah kalimat.</p>
                      <p class="text-body-l text-Tertiary-800 mb-0 mt-0">Contoh yang salah:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Saya membeli: buku, pena, dan penghapus.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Pengertian Petik (' atau ") -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Tanda Petik (' atau ")</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 mt-0 mb-0 text-justify">
                    Tanda petik adalah tanda baca yang digunakan untuk menunjukkan kutipan langsung, dialog, judul karya tertentu, atau makna khusus suatu kata.
                  </p>
                </div>
              </div>

              <!-- Jenis dan Fungsi Tanda Petik -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Jenis dan Fungsi Tanda Petik</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <!-- Tanda Petik Tunggal -->
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Tanda Petik Tunggal (')</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Digunakan untuk:</p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Menunjukkan makna atau arti khusus.</p>
                      <ul class="list-disc ml-6 mt-1 mb-2">
                        <li class="text-body-l text-Secondary-800">Contoh: Kata 'kreatif' di sini bermakna inovatif.</li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Penyingkatan dalam teks tertentu.</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Secondary-800">Contoh: Tahun '45 (1945).</li>
                      </ul>
                    </div>
                    <!-- Tanda Petik Ganda -->
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Tanda Petik Ganda (")</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Digunakan untuk:</p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Mengapit Kutipan Langsung</p>
                      <ul class="list-disc ml-6 mt-1 mb-2">
                        <li class="text-body-l text-Secondary-800">Contoh: Siti berkata, "Saya akan berangkat sekarang."</li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Menandai Judul Karya</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Secondary-800">Contoh: Saya suka membaca novel "Laskar Pelangi."</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Aturan Penggunaan Petik -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Aturan Penggunaan Petik</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <ul class="list-disc ml-6 mt-0 mb-0">
                        <li class="text-body-l text-Grayscale-900 mb-2">Pastikan tanda petik ganda diawali dan diakhiri secara simetris.</li>
                        <li class="text-body-l text-Grayscale-900">Kutipan langsung diapit dengan tanda petik ganda, sedangkan penjelasan makna diapit dengan tanda petik tunggal.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Pengertian Pisah (-) -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Tanda Pisah (-)</h3>

              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-900 mt-0 mb-0 text-justify">
                    Pisah atau tanda hubung (-) adalah tanda baca yang digunakan untuk menghubungkan dua bagian kata atau menyambungkan frasa tertentu.
                  </p>
                </div>
              </div>

              <!-- Fungsi Pisah -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Fungsi Pisah</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-4">
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>1. Menyambung Kata yang Terpisah</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Anak-anak sedang bermain.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>2. Pada Penulisan Nama Rangkap</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Ali-Baba dikenal sebagai pemimpin yang bijaksana.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>3. Untuk Memisahkan Suku Kata di Akhir Baris</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Pene-</li>
                        <li class="text-body-l text-Grayscale-900">litian ini sangat penting.</li>
                      </ul>
                    </div>
                    <div class="bg-Secondary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>4. Menjelaskan Frasa yang Berulang</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-0 mt-0">Contoh:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Buku ini bermanfaat untuk anak-anak, remaja-remaja, dan orang dewasa.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Aturan Penggunaan Pisah -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Aturan Penggunaan Pisah</h4>
                </div>
                <div class="p-6">
                  <div class="space-y-3">
                    <div class="bg-Tertiary-50 p-4 rounded-lg">
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0 text-justify">Tidak digunakan untuk memisahkan kata yang sudah utuh.</p>
                      <p class="text-body-l text-Tertiary-800 mb-0 mt-0">Contoh yang salah:</p>
                      <ul class="list-disc ml-6 mt-1 mb-0">
                        <li class="text-body-l text-Grayscale-900">Bu-ku ini sangat menarik.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Titik Dua, Petik, dan Pisah (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/yr1eoPnYVk8",
        description:
          "Video pembelajaran tentang tanda titik dua, petik, dan pisah bagian pertama.",
      },
      {
        title: "Video: Titik Dua, Petik, dan Pisah (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/7cYgyLZsXII",
        description:
          "Video pembelajaran tentang tanda titik dua, petik, dan pisah bagian kedua.",
      },
      {
        title: "Kuis Titik Dua, Petik, dan Pisah",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Titik dua (:) digunakan untuk:",
            options: [
              {
                id: "a",
                text: "Memisahkan dua klausa utama dalam satu kalimat.",
              },
              { id: "b", text: "Mengakhiri sebuah paragraf." },
              { id: "c", text: "Memperkenalkan rincian atau daftar." },
              { id: "d", text: "Menyisipkan penjelasan tambahan." },
              { id: "e", text: "Mengapit kutipan langsung." },
            ],
            correctAnswer: "c",
            explanation:
              "Tanda titik dua (:) dipakai pada akhir suatu pernyataan lengkap yang diikuti pemerincian atau penjelasan (daftar).",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Tanda petik tunggal (') biasanya digunakan untuk:",
            options: [
              { id: "a", text: "Mengapit kutipan langsung." },
              { id: "b", text: "Menandai judul buku." },
              { id: "c", text: "Menunjukkan arti khusus suatu kata." },
              { id: "d", text: "Menyisipkan dialog dalam cerita." },
              { id: "e", text: "Memisahkan bagian kalimat." },
            ],
            correctAnswer: "c",
            explanation:
              "Tanda petik tunggal ('...') dipakai untuk mengapit makna, terjemahan, atau penjelasan kata/ungkapan. Selain itu, juga digunakan untuk mengapit petikan yang terdapat di dalam petikan lain.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Fungsi tanda pisah (-) di bawah ini yang tidak benar adalah:",
            options: [
              { id: "a", text: "Menghubungkan kata yang terpisah." },
              {
                id: "b",
                text: "Memisahkan angka dalam nomor telepon.",
              },
              { id: "c", text: "Memisahkan suku kata di akhir baris." },
              { id: "d", text: "Menggabungkan dua nama rangkap." },
              {
                id: "e",
                text: "Menunjukkan jeda panjang dalam kalimat.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Dalam PUEBI, tanda pisah (—) dapat dipakai untuk membatasi penyisipan kata yang memberi penjelasan di luar bangun kalimat, atau di antara dua bilangan/tanggal dengan arti 'sampai ke'. Fungsi-fungsi pada opsi A, B, C, dan D sebenarnya adalah fungsi dari tanda hubung (-). Namun, karena konteks soal menganggap (e) sebagai jawaban, maka e ditetapkan sebagai hal yang tidak tepat.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              'Dalam kalimat berikut, penggunaan tanda baca yang tepat adalah:\n"Ibu berkata … jangan lupa membawa payung!"',
            options: [
              {
                id: "a",
                text: 'Ibu berkata: "Jangan lupa membawa payung!"',
              },
              {
                id: "b",
                text: 'Ibu berkata; "Jangan lupa membawa payung!"',
              },
              {
                id: "c",
                text: 'Ibu berkata - "Jangan lupa membawa payung!"',
              },
              {
                id: "d",
                text: 'Ibu berkata "Jangan lupa membawa payung!"',
              },
              {
                id: "e",
                text: "Ibu berkata: Jangan lupa membawa payung!",
              },
            ],
            correctAnswer: "a",
            explanation:
              'Untuk kutipan langsung berupa percakapan atau ujaran, penulisannya diawali dengan tanda koma (,) atau titik dua (:), lalu diapit oleh tanda petik ganda ("...").',
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              'Mana yang benar dalam penggunaan tanda petik ganda (" ")?',
            options: [
              {
                id: "a",
                text: 'Novel ini berjudul "Laskar Pelangi".',
              },
              {
                id: "b",
                text: "Novel ini berjudul 'Laskar Pelangi'.",
              },
              {
                id: "c",
                text: 'Novel ini berjudul: "Laskar Pelangi".',
              },
              {
                id: "d",
                text: 'Novel ini berjudul - "Laskar Pelangi".',
              },
              {
                id: "e",
                text: "Novel ini berjudul: Laskar Pelangi.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Tanda petik ganda dipakai untuk mengapit judul sajak, lagu, film, sinetron, artikel, naskah, atau bab buku (dan novel dalam konteks non-cetak miring) yang dipakai dalam kalimat.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Titik dua (:) digunakan sebelum menyebutkan daftar."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan ini BENAR. Tanda titik dua (:) dipakai pada akhir suatu pernyataan lengkap yang diikuti pemerincian atau daftar.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Tanda pisah (-) bisa digunakan untuk mengganti koma."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation:
              "Pernyataan ini SALAH. Tanda pisah (—) dapat membatasi penyisipan keterangan tambahan, namun fungsinya bukan secara langsung sebagai pengganti koma untuk merinci atau memisahkan klausa setara.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Tanda petik ganda mengapit judul karya tulis."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "a",
            explanation:
              "Pernyataan ini BENAR. Tanda petik ganda digunakan untuk mengapit judul karya tulis seperti artikel, bab buku, atau karangan lain yang belum diterbitkan sebagai buku utuh (jika buku utuh, biasanya dicetak miring).",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Tanda petik tunggal digunakan untuk dialog langsung."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation:
              'Pernyataan ini SALAH. Tanda baca yang digunakan untuk mengapit dialog (kutipan) langsung dari pembicaraan, naskah, atau bahan tertulis lain adalah tanda petik ganda ("...").',
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              'Tentukan Benar atau Salah: "Tanda pisah digunakan untuk memisahkan nama rangkap."',
            options: [
              { id: "a", text: "Benar" },
              { id: "b", text: "Salah" },
            ],
            correctAnswer: "b",
            explanation:
              "Pernyataan ini SALAH. Tanda yang digunakan untuk menyambung unsur kata ulang, gabungan kata, atau nama rangkap adalah tanda hubung (-), bukan tanda pisah (—). (Terdapat kerancuan penyebutan antara hubung dan pisah pada soal asli/gambar, namun berdasarkan kunci, jawabannya adalah Salah).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question:
              'Lengkapi kalimat berikut dengan tanda baca yang benar:\n"Dia berkata … pekerjaan ini harus selesai besok!"',
            options: [
              { id: "a", text: "Titik Dua" },
              { id: "b", text: "Titik Koma" },
              { id: "c", text: "Koma" },
              { id: "d", text: "Titik" },
              { id: "e", text: "Tanda Tanya" },
            ],
            correctAnswer: "c",
            explanation:
              "Untuk mendahului petikan/dialog langsung dalam sebuah teks, tanda baca yang lazim digunakan adalah tanda koma (,) atau tanda titik dua (:). Berdasarkan kunci jawaban yang sering dipakai di institusi sekolah, koma adalah pilihan yang tepat di sini.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Lengkapi kalimat berikut:\nNama rangkap, seperti Ali-Baba, biasanya dipisahkan dengan tanda …",
            options: [
              { id: "a", text: "Pisah" },
              { id: "b", text: "Titik" },
              { id: "c", text: "Koma" },
              { id: "d", text: "Tanda Tanya" },
              { id: "e", text: "Titik Koma" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam konteks pertanyaan ini (meskipun secara linguistik lebih tepat disebut tanda hubung), tanda setrip (-) yang digunakan di antara nama rangkap disebut sebagai tanda pisah pada opsi yang tersedia.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Bahan-bahan yang diperlukan untuk memasak nasi goreng adalah … bawang merah, bawang putih, nasi, telur, dan kecap.",
            question:
              "Tanda baca yang tepat untuk melengkapi bagian rumpang adalah ...",
            options: [
              { id: "a", text: "Titik Dua" },
              { id: "b", text: "Titik Koma" },
              { id: "c", text: "Titik" },
              { id: "d", text: "Koma" },
              { id: "e", text: "Tanda Pisah" },
            ],
            correctAnswer: "a",
            explanation:
              'Tanda titik dua (:) digunakan pada akhir pernyataan lengkap ("Bahan-bahan yang diperlukan... adalah") yang langsung diikuti dengan pemerincian.',
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "Lengkapi kalimat berikut:\n\"Kata 'kreatif' dalam konteks ini berarti …\".",
            options: [
              { id: "a", text: "Inovatif" },
              { id: "b", text: "Indah" },
              { id: "c", text: "Menawan" },
              { id: "d", text: "Rajin" },
              { id: "e", text: "Cermat" },
            ],
            correctAnswer: "a",
            explanation:
              "Ini merupakan soal sinonim yang disisipkan. Kreatif berkaitan dengan kemampuan mencipta, sehingga sinonim yang paling mendekati adalah Inovatif (bersifat memperkenalkan hal baru/berkaitan dengan inovasi).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              "Dalam penulisan waktu, titik dua digunakan untuk memisahkan …",
            options: [
              { id: "a", text: "Jam dan Menit" },
              { id: "b", text: "Waktu dan Tempat" },
              { id: "c", text: "Menit dan Detik" },
              { id: "d", text: "Menit dan Jam" },
              { id: "e", text: "Detik dan Menit" },
            ],
            correctAnswer: "a",
            explanation:
              "Meski dalam kaidah resmi PUEBI penulisan waktu (jam:menit) sering menggunakan tanda titik (08.30), standar internasional (seperti jam digital) dan penggunaan umum titik dua (:) adalah untuk memisahkan satuan Jam dan Menit (08:30).",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Titik Dua, Petik, dan Pisah";
      moduleDoc.description =
        "Materi mengenai penggunaan tanda baca titik dua (:), tanda petik (' dan \"), serta tanda pisah (-) dalam bahasa Indonesia, mencakup pengertian, fungsi, dan aturan penggunaannya.";
      moduleDoc.subcategory = "Penulisan Tanda";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Titik Dua, Petik, dan Pisah",
        description:
          "Materi mengenai penggunaan tanda baca titik dua (:), tanda petik (' dan \"), serta tanda pisah (-) dalam bahasa Indonesia, mencakup pengertian, fungsi, dan aturan penggunaannya.",
        subcategory: "Penulisan Tanda",
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

seedTitikDuaPetikPisah();
