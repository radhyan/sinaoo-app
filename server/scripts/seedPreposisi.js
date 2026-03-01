const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPreposisi = async () => {
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

    const targetId = "preposisi";

    const stepsData = [
      {
        title: "Materi: Pengertian dan Fungsi Preposisi",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian preposisi serta ragam fungsinya dalam merangkai kalimat yang efektif.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Preposisi?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                <span class="font-bold">Preposisi</span> adalah kata yang ditulis di depan kata benda, kata kerja, dan jenis kata lainnya yang fungsinya untuk menyatakan hubungan waktu, tempat, arah, tujuan, dan cara dari kata yang diikuti.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Fungsi Preposisi</h3>

              <div class="space-y-6">
                
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Menyatakan posisi/tempat
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Preposisi menjadi suatu penjelas atas letak/posisi dari unsur yang sedang dibicarakan dalam suatu kalimat.<br/>
                    Terdiri atas: <span class="font-bold text-red-600">pada, di, dalam, antara</span>
                  </p>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-l text-Grayscale-800">
                    <span class="font-bold block mb-1">Contoh:</span>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Aku sedang makan <span class="font-bold text-red-600">di</span> kereta</li>
                      <li>Dokter itu sedang manangani pasien <span class="font-bold text-red-600">dalam</span> kamar operasi</li>
                      <li>Sekolah ini terletak <span class="font-bold text-red-600">antara</span> kantor A dan kantor B</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Menyatakan arah
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Preposisi juga menyatakan arah (asal serta tujuan) dari unsur yang sedang dibicarakan dalam suatu kalimat.<br/>
                    Terdiri atas: <span class="font-bold text-red-600">ke, dari, kepada, terhadap</span>
                  </p>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-l text-Grayscale-800">
                    <span class="font-bold block mb-1">Contoh:</span>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Perjalanannya berlangsung <span class="font-bold text-red-600">dari</span> Malang <span class="font-bold text-red-600">ke</span> Purwokerto</li>
                      <li>Dia menyerahkan zakat itu <span class="font-bold text-red-600">kepada</span> yang membutuhkan</li>
                      <li>Hal ini untuk menanggulangi masalah <span class="font-bold text-red-600">terhadap</span> demam berdarah</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Menyatakan tujuan
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Preposisi dalam hal ini befungsi untuk menyatakan suatu fungsi/untuk apa unsur yang sedang dibicarakan tersebut.<br/>
                    Terdiri atas: <span class="font-bold text-red-600">bagi, untuk, guna, demi</span>
                  </p>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-l text-Grayscale-800">
                    <span class="font-bold block mb-1">Contoh:</span>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Rancangan ini dibuat <span class="font-bold text-red-600">untuk</span> menangani isu wabah penyakit</li>
                      <li><span class="font-bold text-red-600">Guna</span> penanggulangan hutan gundul, reboisasi dilakukan kembali</li>
                      <li>Ia memberanikan diri untuk buka suara ke depan <span class="font-bold text-red-600">demi</span> kesuksesan acara itu</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Menyatakan perihal terkait
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Preposisi berfungsi untuk memberikan keterangan mengenai hal apa yang sedang dibahas dalam unsur terkait.<br/>
                    Terdiri atas: <span class="font-bold text-red-600">tentang</span> dan <span class="font-bold text-red-600">mengenai</span>
                  </p>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-l text-Grayscale-800">
                    <span class="font-bold block mb-1">Contoh:</span>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Isi dari surat tersebut adalah sebuah kisah <span class="font-bold text-red-600">tentang</span> kita berdua</li>
                      <li>Peraturan ini berisi sanksi <span class="font-bold text-red-600">mengenai</span> kelalaian siswa</li>
                      <li>Dia bercerita <span class="font-bold text-red-600">tentang</span> perjuangannya masuk PTN</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Menyatakan perbandingan
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3">
                    Preposisi berfungsi sebagai pembanding kedudukan 2 unsur atau lebih.<br/>
                    Terdiri atas: <span class="font-bold text-red-600">daripada</span> dan <span class="font-bold text-red-600">seperti</span>
                  </p>
                  <div class="bg-Grayscale-50 p-3 rounded text-body-l text-Grayscale-800">
                    <span class="font-bold block mb-1">Contoh:</span>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Malik lebih tinggi <span class="font-bold text-red-600">daripada</span> Akmal</li>
                      <li>Perilaku Dinda <span class="font-bold text-red-600">seperti</span> Banu</li>
                      <li>Aku lebih aktif <span class="font-bold text-red-600">daripada</span> kamu</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Menyatakan pelaku, akibat, dan alat
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-4">
                    Terdapat fungsi spesifik lain dari kata depan:
                  </p>
                  <ul class="list-disc pl-5 space-y-3 mb-2 text-body-l text-Grayscale-900">
                    <li>
                      <span class="font-bold">Pelaku:</span> memberikan keterangan "oleh siapa" unsur tersebut terjadi. (Terdiri atas: <span class="font-bold text-red-600">oleh</span>)<br/>
                      <span class="text-body-l italic">Contoh: Makanan ini dimasak oleh Bu Susi</span>
                    </li>
                    <li>
                      <span class="font-bold">Akibat:</span> menerangkan suatu akibat dari kejadian yang terjadi di dalam kalimat. (Terdiri atas: <span class="font-bold text-red-600">hingga, sehingga, sampai</span>)<br/>
                      <span class="text-body-l italic">Contoh: Dinda belajar dengan giat sehingga dia dinyatakan lulus tes SNBT</span>
                    </li>
                    <li>
                      <span class="font-bold">Alat:</span> menerangkan cara atau alat yang digunakan oleh suatu unsur pada kalimat. (Terdiri atas: <span class="font-bold text-red-600">dengan</span> dan <span class="font-bold text-red-600">berkat</span>)<br/>
                      <span class="text-body-l italic">Contoh: Nayla lulus tes SNBT karna belajar dengan modul LetStudy</span>
                    </li>
                  </ul>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Materi: Aturan Penulisan dan Jenis Preposisi",
        type: "reading",
        status: "locked",
        description:
          "Pahami aturan penulisan preposisi yang sering mengecoh dan pelajari berbagai jenis kata depan tunggal maupun majemuk.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Aturan Dalam Penulisan Preposisi</h3>

              <div class="space-y-6">
                
                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">1. Preposisi sebagai imbuhan/awalan</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2">
                    Beberapa preposisi juga dapat menjadi imbuhan/awalan dari suatu kata kerja, kata benda, serta kata lainnya. Contoh preposisi yang biasa digunakan sebagai imbuhan/awalan adalah <span class="font-bold text-red-600">di, ke,</span> dan <span class="font-bold text-red-600">dari</span>. Penulisan preposisi sebagai imbuhan/awalan <span class="font-bold text-red-600">ditulis secara gabung dengan kata setelahnya</span>.
                  </p>
                  <p class="text-body-l text-Grayscale-900 mt-3 font-bold">Contoh :</p>
                  <ul class="list-disc pl-5 text-Grayscale-900 space-y-1">
                    <li>Surat ini <span class="font-bold text-red-600">di</span>tulis oleh Astrid</li>
                    <li>Dinda lebih rajin <span class="font-bold text-red-600">dari</span>pada Nayla</li>
                    <li>Danu sudah mencoba tes SNBT untuk yang <span class="font-bold text-red-600">ke</span>sekian kalinya</li>
                  </ul>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">2. Preposisi dalam penulisan judul</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2">
                    Dalam penulisan judul, preposisi <span class="font-bold text-red-600">ditulis dengan huruf kecil bila letaknya tidak di awal kalimat</span> dan <span class="font-bold text-red-600">ditulis dengan huruf besar jika letaknya di awal kalimat</span>.
                  </p>
                  <p class="text-body-l text-Grayscale-900 mt-3 font-bold">Contoh :</p>
                  <ul class="list-disc pl-5 text-Grayscale-900 space-y-1">
                    <li>Peran Ibu <span class="font-bold text-red-600">dalam</span> Tumbuh Kembang Anak</li>
                    <li><span class="font-bold text-red-600">Oleh</span> Ibunda Tercinta, Surat Ini Dituliskan</li>
                    <li>Kota Tua <span class="font-bold text-red-600">dan</span> Sebuah Kenangan Manis</li>
                  </ul>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">3. Preposisi untuk menyatakan tempat</h5>
                  <p class="text-body-l text-Grayscale-900 mb-2">
                    Preposisi yang digunakan dengan tujuan menyatakan tempat <span class="font-bold text-red-600">ditulis secara terpisah</span> dengan kata setelahnya.
                  </p>
                  <p class="text-body-l text-Grayscale-900 mt-3 font-bold">Contoh :</p>
                  <ul class="list-disc pl-5 text-Grayscale-900 space-y-1">
                    <li>Nayla sedang belajar <span class="font-bold text-red-600">di</span> sekolah.</li>
                    <li>Bus ini berangkat <span class="font-bold text-red-600">dari</span> Jakarta</li>
                    <li>Aku ingin pindah <span class="font-bold text-red-600">ke</span> tempat yang lebin tenang.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa Saja Jenis-jenis Preposisi?</h3>

              <div class="space-y-8">
                
                <div>
                  <h4 class="text-h4 font-bold text-Primary-800 mb-3">A. Kata Depan Tunggal</h4>
                  <p class="text-body-l text-Grayscale-900 mb-4">
                    Preposisi kata depan tunggal merupakan preposisi yang digunakan untuk menghubungkan kata yang menunjukkan hubungan antara 2 kata tersebut. Preposisi ini terdiri dari satu kata saja, tanpa digabung dengan kata lain.
                  </p>

                  <div class="pl-4 border-l-2 border-Secondary-300 space-y-4">
                    <div>
                      <h5 class="font-bold text-Grayscale-900 text-lg">Kata Dasar</h5>
                      <p class="text-Grayscale-900 mt-1">Preposisi sebegai kata dasar merupakan kata dengan bentuk asli tanpa adanya imbuhan lainnya. Kata ini punya makna yang paling sederhana.</p>
                      <div class="bg-red-50 text-red-800 p-3 rounded mt-2 text-body-l border border-red-200">
                        <span class="font-bold">Aturan penulisan:</span> Jika preposisi mengacu pada letak/posisi maka ditulis secara terpisah, namun jika preposisi tidak mengacu pada letak/posisi maka ditulis secara gabung dengan kata setelahnya.
                      </div>
                      <p class="mt-2 text-body-l text-Grayscale-800">
                        Contoh: Alat ini <span class="font-bold text-red-600">di</span>gunakan untuk merekan video (gabung). Telfon aku <span class="font-bold text-red-600">di</span> mana pun kamu berada (pisah).
                      </p>
                    </div>

                    <div>
                      <h5 class="font-bold text-Grayscale-900 text-lg">Kata Imbuhan</h5>
                      <p class="text-Grayscale-900 mt-1">Sebagai kata imbuhan, preposisi berfungsi untuk memberi makna tambahan atau memperjelas suatu kata dasar.</p>
                      <p class="mt-2 text-body-l text-Grayscale-800">
                        Contoh preposisi: <span class="font-bold text-red-600">Selama, Sebanyak, Sekitar, Sepanjang.</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 class="text-h4 font-bold text-Primary-800 mb-3">B. Kata Depan Majemuk</h4>
                  <p class="text-body-l text-Grayscale-900 mb-4">
                    Kata depan majemuk adalah gabungan dari kata depan tunggal yang berfungsi untuk menunjukkan hubungan antara unsur-unsur dalam kalimat. Gabungan kata depan ini memiliki makna tertentu yang lebih spesifik.
                  </p>

                  <div class="pl-4 border-l-2 border-Secondary-300 space-y-4">
                    <div>
                      <h5 class="font-bold text-Grayscale-900 text-lg">Kata depan berdampingan</h5>
                      <p class="text-Grayscale-900 mt-1">Kata depan berdampingan merupakan gabungan kata depan tunggal berbeda yang ditulis secara berurutan.</p>
                      <p class="mt-2 text-body-l text-Grayscale-800">
                        Contoh preposisi: <span class="font-bold">Oleh karena, sampai dengan, selain dari, sampai ke, sebab itu.</span>
                      </p>
                    </div>

                    <div>
                      <h5 class="font-bold text-Grayscale-900 text-lg">Kata depan berkorelasi</h5>
                      <p class="text-Grayscale-900 mt-1">Merupakan kata depan yang terdiri atas dua kata depan yang letaknya tidak berurutan dipisahkan oleh beberapa frasa dalam satu kalimat.</p>
                      <p class="mt-2 text-body-l text-Grayscale-800">
                        Contoh preposisi: <span class="font-bold text-red-600">antara ... dan ..., dari ... hingga ..., sejak ... sampai ....</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </section>

          </div>
        `,
      },
      {
        title: "Video: Pengenalan Preposisi (Part 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/MJVAkrKZPS0",
        description:
          "Penjelasan yang interaktif tentang apa itu preposisi dan bagaimana cara kerjanya dalam kalimat.",
      },
      {
        title: "Video: Kaidah dan Contoh Preposisi (Part 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/GWJpsg4lp7M",
        description:
          "Video lanjutan yang berfokus pada contoh preposisi majemuk dan pengecualian dalam PUEBI.",
      },
      {
        title: "Kuis Preposisi",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Aku dituduh mencuri di supermarket itu, aku heran dimana letak kesalahanku yang membuat satpam supermarket itu mencurigaiku.",
            question: "Perbaikan yang tepat untuk kalimat di atas adalah...",
            options: [
              { id: "a", text: 'Mengubah "dituduh" menjadi "di tuduh"' },
              { id: "b", text: 'Mengubah "dimana" menjadi "di mana"' },
              { id: "c", text: 'Mengubah "mencurigai" menjadi "mencuriga i"' },
              { id: "d", text: 'Mengubah "membuat" menjadi "mem buat"' },
              { id: "e", text: "Tidak ada yang perlu diubah" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'di mana' merupakan preposisi yang menunjukkan tempat (posisi), sehingga penulisannya harus dipisah antara 'di' dan 'mana'.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Karena itu, peraturan ini dibuat agar tidak ada yang ceroboh dalam menjalankan tugas.",
            question:
              "Salah satu preposisi dalam kalimat di atas mengalami kesalahan, perbaikan yang harus dilakukan adalah...",
            options: [
              { id: "a", text: 'Mengubah "dibuat" menjadi "di buat"' },
              { id: "b", text: 'Menghilangkan kata "yang"' },
              { id: "c", text: 'Menghilangkan kata "dalam"' },
              { id: "d", text: 'Mengubah "karena" menjadi "oleh karena"' },
              { id: "e", text: "Tidak ada yang perlu diubah" },
            ],
            correctAnswer: "d",
            explanation:
              "Di awal kalimat, lebih tepat menggunakan preposisi majemuk 'oleh karena' untuk menyatakan hubungan sebab yang baku sebagai konjungsi antarkalimat.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Manakah kalimat yang tidak mengalami kesalahan dalam penulisan preposisi nya?",
            options: [
              {
                id: "a",
                text: "Sejak tahun lalu ke tahun ini, ada banyak anak kucing yang mati kelaparan",
              },
              {
                id: "b",
                text: "Aku akan selalu ingat dengan kewajibanku dimana pun aku berada",
              },
              { id: "c", text: "kakak jalan-jalan di mall" },
              { id: "d", text: "Sayur ini dimasak oleh ibu" },
              { id: "e", text: "Kalimat C dan D benar" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat C benar ('di' dipisah karena menunjukkan tempat 'mall'). Kalimat D benar ('dimasak' dirangkai karena 'di-' sebagai awalan verba pasif, dan 'oleh' sebagai preposisi).",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "Alat ini digunakan .... memanggang kue",
            question:
              "Lengkapi kalimat rumpang di atas dengan preposisi yang tepat!",
            options: [
              { id: "a", text: "kepada" },
              { id: "b", text: "untuk" },
              { id: "c", text: "mengenai" },
              { id: "d", text: "daripada" },
              { id: "e", text: "sampai" },
            ],
            correctAnswer: "b",
            explanation:
              "Preposisi 'untuk' (atau bisa juga 'guna') merupakan preposisi yang berfungsi menyatakan tujuan atau peruntukan suatu benda.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "Di tahun 2006, aku duduk di bangku kelas lima SD",
            question: "Perbaikan untuk kalimat di atas adalah...",
            options: [
              { id: "a", text: 'Mengganti "di bangku" menjadi "dibangku"' },
              { id: "b", text: 'Mengubah "di tahun" menjadi "ditahun"' },
              { id: "c", text: 'Mengubah "di tahun" menjadi "pada tahun"' },
              { id: "d", text: 'Menghapus "di tahun 2006"' },
              { id: "e", text: "Tidak ada yang perlu diubah" },
            ],
            correctAnswer: "c",
            explanation:
              "Preposisi 'di' hanya digunakan untuk menyatakan letak atau tempat ruang. Untuk menyatakan waktu, preposisi yang baku dan tepat adalah 'pada' (pada tahun 2006).",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "Acara ini berlangsung di siang hari",
            question:
              "Kesalahan penggunaan kata dalam kalimat di atas terdapat pada kata...",
            options: [
              { id: "a", text: "Berlangsung" },
              { id: "b", text: "Di siang hari" },
              { id: "c", text: "Acara" },
              { id: "d", text: "Acara ini" },
              { id: "e", text: "Tidak ada kesalahan penggunaan kata" },
            ],
            correctAnswer: "b",
            explanation:
              "Sama seperti kasus 'di tahun', preposisi untuk waktu (siang hari) seharusnya menggunakan 'pada' (pada siang hari), bukan 'di' (di siang hari).",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              "Manakah kalimat yang mengalami kesalahaan dalam penggunaan preposisi di bawah ini?",
            options: [
              { id: "a", text: "Aku tahu di mana rumahmu" },
              { id: "b", text: "Bila sedang membaca buku tentang alam" },
              { id: "c", text: "Nayla sedang tidak mau di ganggu" },
              { id: "d", text: "Kaca ini boleh di hias sesuka hati" },
              { id: "e", text: "Kalimat C dan D salah" },
            ],
            correctAnswer: "e",
            explanation:
              "Pada opsi C awalan 'di-' pada 'diganggu' seharusnya dirangkai karena merupakan kata kerja pasif. Sama halnya dengan opsi D, 'dihias' seharusnya dirangkai.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Penulisan kata depan yang benar adalah...",
            options: [
              { id: "a", text: "Dimana pintu keluar?" },
              {
                id: "b",
                text: "Lebih baik belajar di dalam negeri dari pada di luar negeri",
              },
              { id: "c", text: "Surat itu ditujukan ke pada keluarganya" },
              { id: "d", text: "Setiap minggu, Pak Ahmad pergi keluar kota" },
              {
                id: "e",
                text: "Seminar itu bertempat di Lembaga Pengabdian kepada Masyarakat UGM",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Opsi E benar karena kata 'di' digabung dengan 'bertempat' (opsional) atau dipisah saat menunjukkan tempat 'di Lembaga'. Kesalahan lainnya: dimana -> di mana, dari pada -> daripada, ke pada -> kepada, keluar kota -> ke luar kota.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "Malam ini bus akan berangkat ..... Jakarta ke Solo.",
            question:
              "Preposisi tujuan yang tepat untuk melengkapi kalimat di atas adalah...",
            options: [
              { id: "a", text: "dari" },
              { id: "b", text: "menuju" },
              { id: "c", text: "pada" },
              { id: "d", text: "di" },
              { id: "e", text: "kepada" },
            ],
            correctAnswer: "a",
            explanation:
              "Preposisi berkorelasi yang menunjukkan titik awal dan akhir suatu pergerakan adalah 'dari ... ke ...'. Jadi isian yang tepat adalah 'dari'.",
            points: 6,
          },
          {
            id: 10,
            type: "matrix",
            question:
              "Berikut ini sudah benar penggunaan preposisi nya, kecuali...",
            rows: [
              {
                id: "r1",
                text: "Kekalahan itu diantaranya disebabkan oleh ketidaktahuan peran anggota",
              },
              {
                id: "r2",
                text: "Sejak tahun lalu, banyak penggemar yang mengikutinya ke mana pun dia pergi",
              },
              {
                id: "r3",
                text: "Walau sudah dipancing berkali-kali, tidak sekali pun dia mengajukan pertanyaan.",
              },
              {
                id: "r4",
                text: "Untuk memasuki ruang studio, satu per satu pengunjung diperiksa",
              },
              {
                id: "r5",
                text: "Pada lima tahun lalu, ia mampu menyumbangkan 5 medali emas",
              },
            ],
            columns: [
              { id: "true", text: "BENAR" },
              { id: "false", text: "SALAH" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "true",
              r4: "true",
              r5: "true",
            },
            explanation:
              "Pernyataan 1 SALAH, karena seharusnya adalah 'di antaranya' (dipisah), karena menunjukkan keterangan letak/tempat abstrak dalam suatu kelompok.",
            points: 10,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: "...... 3 ekor sapi dibeli oleh tetanggaku.",
            question:
              "Lengkapilah kalimat di atas dengan preposisi yang seharusnya!",
            options: [
              { id: "a", text: "Selama" },
              { id: "b", text: "Sebanyak" },
              { id: "c", text: "Sekitar" },
              { id: "d", text: "Sepanjang" },
              { id: "e", text: "Seorang" },
            ],
            correctAnswer: "b",
            explanation:
              "Preposisi berimbuhan 'Sebanyak' tepat digunakan untuk menghubungkan dan menegaskan suatu jumlah atau kuantitas pada suatu subjek/objek.",
            points: 6,
          },
          {
            id: 12,
            type: "multiple-choice",
            question: "Penulisan preposisi berikut benar, kecuali...",
            options: [
              { id: "a", text: "Aku tahu di mana kesalahan yang aku lakukan" },
              {
                id: "b",
                text: "Justru cara ini lebih baik dari pada cara sebelumnya",
              },
              { id: "c", text: "Adik dimarahi oleh ibu" },
              {
                id: "d",
                text: "Selama aku belajar di sini, aku sangat menikmati pembelajarannya",
              },
              { id: "e", text: "Selama dua tahun, aku bersekolah di sini" },
            ],
            correctAnswer: "b",
            explanation:
              "Kata 'daripada' merupakan kata depan (preposisi) yang menyatakan perbandingan, dan menurut PUEBI penulisannya harus dirangkai/digabungkan (bukan 'dari pada').",
            points: 6,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Perhatikan list prosedur memasak mie instant berikut:\n1. Nyalakan kompor dengan api sedang\n2. Tuangkan 1 liter air ke dalam panci\n3. Masukkan 1 bungkus mie instant ke dalam panci berisi air\n4. Tunggu sampai mie berubah tekstur menjadi lunak\n5. Tiriskan air, pindahkan mie kedalam piring, beri bumbu, lalu aduk sampai merata",
            question:
              "Penggunaan preposisi di setiap kalimat ini sudah benar, KECUALI kalimat...",
            options: [
              { id: "a", text: "Kalimat nomor 1" },
              { id: "b", text: "Kalimat nomor 2" },
              { id: "c", text: "Kalimat nomor 3" },
              { id: "d", text: "Kalimat nomor 4" },
              { id: "e", text: "Kalimat nomor 5" },
            ],
            correctAnswer: "e",
            explanation:
              "Pada langkah kelima, penulisan 'kedalam' salah. Oleh karena 'dalam' menunjukkan posisi atau tempat tujuan, preposisi 'ke' harus ditulis terpisah menjadi 'ke dalam piring'.",
            points: 6,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Soal ini berisikan pertanyaan ______ aturan dalam penulisan preposisi yang baik dan benar.",
            question:
              "Preposisi untuk menyatakan perihal terkait yang tepat untuk kalimat di atas adalah...",
            options: [
              { id: "a", text: "tentang" },
              { id: "b", text: "perihal" },
              { id: "c", text: "mengenai" },
              { id: "d", text: "Semua jawaban benar" },
              { id: "e", text: "Semua jawaban salah" },
            ],
            correctAnswer: "d",
            explanation:
              "Preposisi 'tentang', 'perihal', maupun 'mengenai' memiliki makna leksikal yang sama, yaitu berfungsi mengantarkan masalah atau hal yang sedang dibicarakan.",
            points: 6,
          },
          {
            id: 15,
            type: "multiple-choice",
            question: "Penulisan judul di bawah sudah tepat, kecuali...",
            options: [
              {
                id: "a",
                text: "Pengaruh Budaya Barat dalam Tumbuh Kembang Generasi Z",
              },
              { id: "b", text: "Makanan Lezat Buatan Adinda" },
              {
                id: "c",
                text: "Efektivitas Sumber Belajar Mandiri Untuk Siswa Sekolah Menengah Atas",
              },
              { id: "d", text: "Kegiatan Seru di Jakarta" },
              { id: "e", text: "Tidak ada penulisan judul yang salah" },
            ],
            correctAnswer: "c",
            explanation:
              "Pada opsi C, kata 'Untuk' merupakan preposisi. Sesuai aturan PUEBI, kata tugas atau preposisi di tengah judul harus ditulis menggunakan awalan huruf kecil mutlak. (Seharusnya: 'untuk').",
            points: 6,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Preposisi";
      moduleDoc.description =
        "Pelajari pengertian, fungsi, aturan penulisan, dan jenis-jenis preposisi dalam tata bahasa Indonesia.";
      moduleDoc.subcategory = "Penulisan Imbuhan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Preposisi",
        description:
          "Pelajari pengertian, fungsi, aturan penulisan, dan jenis-jenis preposisi dalam tata bahasa Indonesia.",
        subcategory: "Penulisan Imbuhan",
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

seedPreposisi();
