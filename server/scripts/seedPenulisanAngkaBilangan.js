const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPenulisanAngkaBilangan = async () => {
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

    const targetId = "penulisan-angka-bilangan";

    const stepsData = [
      {
        title: "Materi: Penulisan Angka dan Bilangan",
        type: "reading",
        status: "active",
        description:
          "Pelajari materi mengenai pedoman dan aturan dalam penulisan angka dan bilangan dalam bahasa Indonesia yang baku.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Aturan Penulisan Angka dan Bilangan</h3>
              <p class="text-body-l text-Grayscale-900 mb-6">Terdapat beberapa aturan dalam penulisan angka dan bilangan, yaitu sebagai berikut.</p>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    
                    <!-- Bilangan Tingkatan -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          <span class="font-bold">Bilangan tingkatan ditulis dengan cara :</span>
                          <ol class="list-decimal pl-5 mt-2 mb-0 space-y-2">
                            <li>
                              <span class="text-Primary-700 font-bold">Angka Romawi</span>, sistem penomoran yang menggunakan huruf latin.<br/>
                              Seperti : <span class="text-Primary-700 font-bold">I, II, III, IV, V, VI, VII, VIII, IX, X</span><br/>
                              <span class="font-bold mt-1 block">Contoh :</span>
                              <ul class="list-[lower-alpha] pl-5 mt-0 mb-0 space-y-1">
                                <li>Perang Dunia <span class="text-red-600 font-bold">II</span></li>
                                <li>Ujian matematika hari ini akan diadakan di ruang <span class="text-red-600 font-bold">I</span> dan <span class="text-red-600 font-bold">III</span>.</li>
                              </ul>
                            </li>
                            <li>
                              <span class="text-Primary-700 font-bold">Angka Arab</span><br/>
                              Seperti : <span class="text-Primary-700 font-bold">1, 2, 3, 4, 5, 6, 7, 8, 9</span>, dst.<br/>
                              Penulisan bilangan yang menggunakan angka Arab, biasanya menggunakan <span class="text-Primary-700 font-bold">awalan ke-</span><br/>
                              <span class="font-bold mt-1 block">Contoh :</span> Perang Dunia <span class="text-red-600 font-bold">ke-2</span>
                            </li>
                            <li>
                              <span class="text-Primary-700 font-bold">Menggunakan huruf</span><br/>
                              Seperti : <span class="text-Primary-700 font-bold">kedua, ketiga</span>, dst.<br/>
                              <span class="font-bold mt-1 block">Contoh :</span> Perang Dunia <span class="text-red-600 font-bold">kedua</span>.
                            </li>
                          </ol>
                        </li>
                      </ul>
                    </div>

                    <!-- Angka awal kalimat -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Angka <span class="text-Primary-700 font-bold">tidak boleh ditulis pada awal kalimat</span>, penulisan angka pada awal kalimat dapat <span class="text-Primary-700 font-bold">didahului</span> dengan kata <span class="text-Primary-700 font-bold">'sejumlah', 'sebanyak'</span> atau <span class="text-Primary-700 font-bold">'sebesar'</span>.
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ul class="list-[lower-alpha] pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900"><span class="text-red-600 font-bold">Sejumlah 350</span> orang telah mendaftar seminar ini.</li>
                        <li class="text-body-l text-Grayscale-900"><span class="text-red-600 font-bold">Sebanyak 5</span> siswa berhasil mencapai semi final olimpiade matematika.</li>
                      </ul>
                    </div>

                    <!-- Bilangan perincian -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Bilangan <span class="text-Primary-700 font-bold">perincian</span> ditulis dengan <span class="text-Primary-700 font-bold">angka</span>, meskipun kurang dari tiga kata.
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 mb-0 mt-0"><span class="font-bold">Contoh :</span> Adik besok harus membawa <span class="text-red-600 font-bold">3</span> kertas lipat, <span class="text-red-600 font-bold">2</span> gunting, dan <span class="text-red-600 font-bold">5</span> spidol berwarna.</p>
                    </div>

                    <!-- Ukuran -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Bilangan yang disertai <span class="text-Primary-700 font-bold">ukuran panjang, berat, luas, isi, waktu, volume,</span> dan luas harus ditulis dengan <span class="text-Primary-700 font-bold">angka</span>.
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ul class="list-[lower-alpha] pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">10 <span class="text-red-600 font-bold">kilogram</span></li>
                        <li class="text-body-l text-Grayscale-900">4 <span class="text-red-600 font-bold">bulan</span></li>
                        <li class="text-body-l text-Grayscale-900">50 <span class="text-red-600 font-bold">sentimeter</span></li>
                        <li class="text-body-l text-Grayscale-900">3 <span class="text-red-600 font-bold">jam</span> 12 <span class="text-red-600 font-bold">menit</span></li>
                      </ul>
                    </div>
                    
                    <!-- Satu atau dua kata -->
                    <div>
                      <ul class="list-disc pl-5 mt-0 mb-2 space-y-1">
                        <li class="text-body-l text-Grayscale-900">
                          Bilangan yang terdiri dari <span class="text-Primary-700 font-bold">satu</span> atau <span class="text-Primary-700 font-bold">dua kata tidak ditulis dengan angka</span>, melainkan dengan huruf. Sedangkan bilangan yang terdiri <span class="text-Primary-700 font-bold">lebih dari dua kata ditulis dengan angka.</span>
                        </li>
                      </ul>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ul class="list-[lower-alpha] pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">15 = <span class="text-red-600 font-bold">lima belas</span> (terdiri dari dua kata, sehingga ditulis dengan huruf)</li>
                        <li class="text-body-l text-Grayscale-900">160 = <span class="text-red-600 font-bold">160</span> (terdiri lebih dari dua kata, sehingga ditulis dengan angka)</li>
                      </ul>
                    </div>

                    <!-- Catatan Penomoran -->
                    <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                      <h4 class="text-h4 font-bold text-Primary-800 mb-3 mt-0">CATATAN</h4>
                      <p class="text-body-l text-Grayscale-900 mb-2">
                        Bilangan <span class="text-Primary-700 font-bold">penomoran</span> harus tetap <span class="text-Primary-700 font-bold">ditulis dengan angka</span> meskipun hanya terdiri dari satu atau dua kata.
                      </p>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh :</p>
                      <ul class="list-[lower-alpha] pl-5 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">Novel halaman <span class="text-red-600 font-bold">20</span>.</li>
                        <li class="text-body-l text-Grayscale-900">
                          <span class="text-red-600 font-bold">1.</span> Bab I Pendahuluan<br/>
                          <span class="text-red-600 font-bold">2.</span> Bab II Isi
                        </li>
                      </ul>
                    </div>

                    <!-- Tanda Titik & Koma -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mt-4 mb-2">
                        <span class="font-bold">Menggunakan <span class="text-Primary-700">tanda titik (.)</span> untuk <span class="text-Primary-700">memisahkan ribuan</span> dan setiap <span class="text-Primary-700">tiga angka dari belakang</span> dipisahkan dengan tanda titik (.)</span><br/>
                        <span class="font-bold">Contoh :</span> Rp1<span class="text-red-600 font-bold">.</span>000<span class="text-red-600 font-bold">.</span>000
                      </p>

                      <p class="text-body-l text-Grayscale-900 mt-4 mb-2">
                        <span class="font-bold">Menggunakan tanda koma (,)</span><br/>
                        Menambahkan <span class="text-Primary-700 font-bold">tanda koma (,)</span> dan <span class="text-Primary-700 font-bold">dua bilangan nol (0)</span> pada belakang nominal.<br/>
                        <span class="font-bold mt-1 block">Contoh :</span> Rp10.000<span class="text-red-600 font-bold">,00</span>
                      </p>

                      <p class="text-body-l text-Grayscale-900 mt-4 mb-2">
                        <span class="font-bold">Penulisan dalam dokumen resmi</span><br/>
                        Dalam dokumen resmi, seperti kwitansi atau faktur, penulisan nominal rupiah biasanya lebih lengkap, dengan <span class="text-Primary-700 font-bold">menambahkan penulisan dalam huruf</span>.<br/>
                        <span class="font-bold mt-1 block">Contoh : <span class="text-red-600">Seratus ribu rupiah</span></span> (Rp100.000,00)
                      </p>

                      <p class="text-body-l text-Grayscale-900 mt-4 mb-2">
                        Bilangan dengan jumlah yang <span class="text-Primary-700 font-bold">terlalu besar</span> harus <span class="text-Primary-700 font-bold">ditulis sebagian dengan huruf</span> dan <span class="text-Primary-700 font-bold">sebagian dengan angka</span>.<br/>
                        <span class="font-bold mt-1 block">Contoh :</span> 100 juta
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
        title: "Video: Penulisan Angka dan Bilangan (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/4r3-DlW8OVM",
        description:
          "Penjelasan mendalam tentang aturan-aturan dasar mengenai angka dan bilangan.",
      },
      {
        title: "Video: Penulisan Angka dan Bilangan (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/I4XF44w9WR8",
        description:
          "Video lanjutan mengenai studi kasus penggunaan angka dan bilangan dalam kalimat.",
      },
      {
        title: "Kuis Penulisan Angka dan Bilangan",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "(1) Mobil mewah itu mencapai 950 juta rupiah.<br/>(2) Ibu akan membeli sepuluh kilogram telur dan lima kilogram ayam untuk stok selama dua bulan.<br/>(3) Aku baru saja membeli baju seharga Rp156.000,00",
            question:
              "Berdasarkan pernyataan di atas, pernyataan nomor berapa yang penulisan angka dan bilangannya SALAH?",
            options: [
              { id: "a", text: "Pernyataan (1)" },
              { id: "b", text: "Pernyataan (2)" },
              { id: "c", text: "Pernyataan (3)" },
              { id: "d", text: "Pernyataan (1) dan (2)" },
              { id: "e", text: "Pernyataan (1) dan (3)" },
            ],
            correctAnswer: "b",
            explanation:
              "Pada pernyataan (2), ukuran takaran, berat, atau panjang yang menggunakan lambang/satuan ukuran harus ditulis dengan angka. Seharusnya: '10 kilogram telur dan 5 kilogram ayam'.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "(1) Sebanyak 5 rumah di Kampung Koceang, Kelurahan, Kranggan, Kecamatan Setu, Tangerang Selatan, hancur. (2) Rumah tersebut runtuh akibat pergerakan tanah di tebing dekat pemukiman warga. (3) “Ada lima rumah yang ambles. Kejadiannya tadi malam sekitar pukul 20.00 WIB,” kata Rusli, petugas Satpol PP yang berjaga di lokasi pada 10 Mei 2017.",
            question:
              "Berdasarkan teks di atas, penulisan angka dan bilangan yang TIDAK TEPAT terdapat pada kalimat nomor?",
            options: [
              { id: "a", text: "Kalimat (1)" },
              { id: "b", text: "Kalimat (2)" },
              { id: "c", text: "Kalimat (3)" },
              { id: "d", text: "Kalimat (1) dan (2)" },
              { id: "e", text: "Kalimat (2) dan (3)" },
            ],
            correctAnswer: "a",
            explanation:
              "Pada kalimat (1), bilangan yang dapat dinyatakan dengan satu atau dua kata (yaitu 'lima') harus ditulis dengan huruf, kecuali jika dipakai secara berurutan dalam pemerincian. Seharusnya: 'Sebanyak lima rumah...'.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Penulisan angka dan bilangan yang tepat terdapat pada kalimat . . .",
            options: [
              {
                id: "a",
                text: "Biaya tiket konser NCT pada tahun 2024 mencapai Rp. 6.000.000,00",
              },
              {
                id: "b",
                text: "Perwakilan sekolah untuk acara lomba cerdas cermat terdiri atas tiga orang kelas 1, tujuh orang kelas 2, empat orang kelas 3, lima orang kelas 4, dan dua orang kelas 5.",
              },
              {
                id: "c",
                text: "Jalan raya ini memiliki panjang lima belas kilometer.",
              },
              { id: "d", text: "Jumlah peserta olimpiade mencapai 538 orang." },
              {
                id: "e",
                text: "Gedung pencakar langit itu memiliki tinggi dua puluh lima meter.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Opsi D benar karena 538 adalah bilangan yang lebih dari dua kata, sehingga harus ditulis dengan angka. Kesalahan opsi lain: (A) Rp tidak diikuti titik atau spasi; (B) Angka kelas harusnya I, II, III (romawi) atau 1, 2, 3 tetapi perincian (tiga, tujuh, empat) harus ditulis dengan angka (3, 7, 4) karena dipakai berurutan; (C & E) ukuran panjang dengan satuan harus ditulis angka (15 kilometer, 25 meter).",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              'Bilangan yang sesuai untuk kalimat berikut:<br/>\n"Harga penggaris itu adalah __________ "',
            options: [
              { id: "a", text: "Lima ratus ribu" },
              { id: "b", text: "500000" },
              { id: "c", text: "500.000" },
              { id: "d", text: "Lima ratus ribu,00" },
              { id: "e", text: "Rp500.000,00" },
            ],
            correctAnswer: "e",
            explanation:
              "Penulisan nilai mata uang yang baku menggunakan simbol mata uang (Rp) disambung tanpa spasi dengan angka, titik sebagai pemisah ribuan, koma, dan dua nol di akhir (00).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Penulisan huruf yang benar untuk menyebutkan nominal Rp1.250.000 adalah?",
            options: [
              { id: "a", text: "Satu juta dua ratus lima puluh ribu rupiah" },
              { id: "b", text: "Satu juta dua ratus lima puluh ribu,00" },
              { id: "c", text: "1.250.000" },
              { id: "d", text: "Satu juta dua lima ratus ribu rupiah" },
              { id: "e", text: "Seribu dua ratus lima puluh ribu rupiah" },
            ],
            correctAnswer: "a",
            explanation:
              "Simbol 'Rp' dilafalkan atau ditulis utuh menjadi kata 'rupiah' di akhir ejaan bilangan.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Kalimat yang penulisan angkanya sudah benar adalah . . .",
            options: [
              { id: "a", text: "Ia memiliki 3 buku." },
              { id: "b", text: "Harga minuman itu Rp. 5.000" },
              {
                id: "c",
                text: "Kakak akan membeli 4 bulpoin, 2 spidol hitam dan 2 penghapus.",
              },
              { id: "d", text: "35 orang siswa yang tidak hadir." },
              { id: "e", text: "Semua jawaban benar." },
            ],
            correctAnswer: "c",
            explanation:
              "Opsi C benar karena bilangan dipakai secara berurutan dalam suatu perincian, sehingga harus ditulis dengan angka (4, 2, 2). Kesalahan opsi lain: (A) bilangan '3' seharusnya ditulis 'tiga' karena hanya satu kata; (B) Rp tidak diikuti titik/spasi; (D) angka tidak boleh berada di awal kalimat.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              "Kalimat yang penulisan bilangannya paling tepat adalah . . .",
            options: [
              { id: "a", text: "Saya membeli 2½ kg beras." },
              { id: "b", text: "Harga apel itu Rp10.000 per buah." },
              { id: "c", text: "Dia menempuh jarak 50 km dalam waktu 1 jam." },
              {
                id: "d",
                text: "Sejumlah 12 siswa yang mendaftar kelas fotografi.",
              },
              { id: "e", text: "Semua jawaban benar." },
            ],
            correctAnswer: "e",
            explanation:
              "Semua penulisan sudah sesuai EYD: (A) pecahan dan satuan berat; (B) penulisan mata uang standar; (C) penulisan satuan jarak dan waktu; (D) nominal di atas dua kata atau daftar nominal yang bukan awal kalimat ditulis angka.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question:
              "Kendaraan yg dipesan untuk angkutan umum terdiri atas . . . , . . . , dan . . .",
            options: [
              {
                id: "a",
                text: "Limapuluh bus, seratus minibus, dua puluh lima sedan",
              },
              { id: "b", text: "50bus, seratus minibus,25sedan" },
              { id: "c", text: "50 bus, 100 minibus, 25 sedan" },
              { id: "d", text: "Sebanyak 50 bus, 100 minibus, 25 sedan." },
              {
                id: "e",
                text: "Sebanyak lima puluh bus, seratus minibus, dua puluh lima sedan",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Aturan PUEBI/EYD: Bilangan yang digunakan secara berurutan dalam suatu perincian atau pemaparan harus ditulis dengan angka semua (meskipun sebagiannya bisa dinyatakan dengan satu kata). Oleh karena itu, 50, 100, dan 25 harus ditulis dengan angka.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Berikut pernyataan yang salah terkait penulisan angka dan bilangan adalah?",
            options: [
              {
                id: "a",
                text: "Bilangan yang disertai dengan ukuran panjang, berat, luas, isi, waktu, dan nilai uang harus ditulis dengan angka.",
              },
              {
                id: "b",
                text: "Bilangan dengan jumlah yang terlalu besar ditulis sebagian dengan huruf dan sebagian dengan angka.",
              },
              {
                id: "c",
                text: "Bilangan yang terdiri lebih dari dua kata ditulis dengan huruf.",
              },
              {
                id: "d",
                text: "Bilangan tingkatan ditulis dengan tiga cara, yaitu angka romawi, angka arab, dan menggunakan huruf.",
              },
              {
                id: "e",
                text: "Bilangan perincian harus ditulis dengan angka meskipun kurang dari tiga kata.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pernyataan C salah. Aturannya adalah: Bilangan yang TIDAK DAPAT dinyatakan dengan satu atau dua kata (alias lebih dari dua kata) harus ditulis dengan ANGKA (kecuali jika terletak di awal kalimat, maka seluruhnya harus dieja dengan huruf atau kalimatnya dirombak).",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              "Pernyataan berikut yang benar terkait penulisan nominal rupiah adalah . . .",
            options: [
              {
                id: "a",
                text: "Dalam simbol rupiah huruf ‘r’ ditulis dengan huruf kapital, sedangkan huruf ‘p’ ditulis dengan huruf kecil.",
              },
              {
                id: "b",
                text: "Dalam simbol rupiah huruf ‘r’ dan ‘p’ ditulis dengan huruf kecil.",
              },
              {
                id: "c",
                text: "Simbol rupiah digunakan setelah penulisan nominal rupiah.",
              },
              {
                id: "d",
                text: "Perlu ada spasi antara simbol rupiah dengan nominal rupiah.",
              },
              {
                id: "e",
                text: "Perlu menggunakan titik setelah simbol rupiah.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Simbol resmi mata uang Indonesia adalah 'Rp'. R ditulis kapital dan p ditulis kecil. Penempatannya di depan nominal tanpa titik dan tanpa spasi.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            question:
              "Kalimat yang penulisan angkanya sudah benar adalah . . .",
            options: [
              { id: "a", text: "Dia memiliki 3 kucing dan 2 anjing." },
              { id: "b", text: "Harga buku itu Rp. 15.000" },
              { id: "c", text: "Aku sudah membaca 50 halaman buku ini." },
              { id: "d", text: "Semua benar." },
              { id: "e", text: "Semua salah." },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan kunci yang diberikan, opsi (A) bisa jadi dianggap salah karena jika bilangan bukan bagian dari perincian panjang, angka di bawah tiga kata ('tiga', 'dua') sebaiknya ditulis dengan huruf (walau dalam praktiknya A sering dianggap perincian). Opsi B salah karena ada titik (Rp.). Opsi C benar karena '50' bisa digunakan untuk takaran/satuan ukuran halaman.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              'Bilangan yang tepat untuk melengkapi kalimat \n"Ibu membeli ... buah apel, ... buah jeruk dan ... semangka"',
            options: [
              { id: "a", text: "tiga, dua, satu." },
              { id: "b", text: "Tiga, dua, satu." },
              { id: "c", text: "3, 2, satu." },
              { id: "d", text: "3, 2, 1" },
              { id: "e", text: "Semua pilihan jawaban salah." },
            ],
            correctAnswer: "d",
            explanation:
              "Seperti pada soal sebelumnya, bilangan yang digunakan secara berurutan dalam suatu perincian (daftar apel, jeruk, semangka) harus ditulis menggunakan angka untuk semuanya (3, 2, 1).",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question: "Pernyataan berikut yang penulisannya tepat adalah?",
            options: [
              {
                id: "a",
                text: "Pekerjaan rumah ini harus segera diselesaikan sebelum tanggal tujuh belas november 2024.",
              },
              {
                id: "b",
                text: "Pekerjaan rumah ini harus segera diselesaikan sebelum tanggal 17 november 2024.",
              },
              {
                id: "c",
                text: "Pekerjaan rumah ini harus segera diselesaikan sebelum tanggal 17 November 2024.",
              },
              {
                id: "d",
                text: "Pekerjaan rumah ini harus segera diselesaikan sebelum tanggal tujuh belas November 2024.",
              },
              { id: "e", text: "Semua pilihan jawaban benar." },
            ],
            correctAnswer: "c",
            explanation:
              "Tanggal ditulis dengan angka (17) dan nama bulan diawali dengan huruf kapital (November).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Untuk mengikuti ujian ini, peserta harus membayar biaya pendaftaran sebesar ________",
            question:
              "Penulisan yang tepat untuk mengisi bagian rumpang di atas adalah?",
            options: [
              { id: "a", text: "RP. 130.000" },
              { id: "b", text: "Rp. 130.000" },
              { id: "c", text: "Seratus tiga puluh rupiah." },
              { id: "d", text: "Rp. seratus tiga puluh." },
              { id: "e", text: "Rp130.000" },
            ],
            correctAnswer: "e",
            explanation:
              "Sesuai kaidah baku: Rp (R kapital, p kecil), tanpa titik, tanpa spasi, disambung langsung dengan angka.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan-pernyataan berikut ini.<br/>(1) Dalam dokumen resmi, seperti kwitansi atau faktur, penulisan nominal rupiah biasanya lebih lengkap, dengan menambahkan penulisan dalam huruf.<br/>(2) Menggunakan tanda titik (.) untuk memisahkan ribuan dan setiap tiga angka dari belakang.<br/>(3) Bilangan dengan jumlah yang terlalu besar ditulis sebagian dengan huruf dan sebagian dengan angka.<br/>(4) Tidak ada spasi antara simbol dengan nominal rupiah.",
            question:
              "Berdasarkan pernyataan-pernyataan di atas, pernyataan yang salah adalah . . .",
            options: [
              { id: "a", text: "Pernyataan (1)" },
              { id: "b", text: "Pernyataan (2)" },
              { id: "c", text: "Pernyataan (3)" },
              { id: "d", text: "Pernyataan (4)" },
              { id: "e", text: "Tidak ada pernyataan yang salah." },
            ],
            correctAnswer: "e",
            explanation:
              "Semua pernyataan mengenai aturan dan kelaziman penulisan angka, bilangan, dan mata uang resmi (Rupiah) menurut PUEBI dan tata naskah dinas tersebut adalah BENAR.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Penulisan Angka dan Bilangan";
      moduleDoc.description =
        "Pelajari materi mengenai pedoman dan aturan dalam penulisan angka dan bilangan dalam bahasa Indonesia yang baku.";
      moduleDoc.subcategory = "Penulisan Huruf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Penulisan Angka dan Bilangan",
        description:
          "Pelajari materi mengenai pedoman dan aturan dalam penulisan angka dan bilangan dalam bahasa Indonesia yang baku.",
        subcategory: "Penulisan Huruf",
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

seedPenulisanAngkaBilangan();
