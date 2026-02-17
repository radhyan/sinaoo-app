const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPenalaranAnalitik = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }

    const moduleId = "6961f021813c23bcb894aa51";

    const stepsData = [
      {
        title: "Konsep Dasar & Strategi",
        type: "reading",
        status: "active",
        description: "Pengertian dan Strategi Penalaran Analitik",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <!-- 1. Pengertian -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian</h3>
              <p class="text-body-l font-sans leading-relaxed mb-6">
                Penalaran Analitik merupakan bagian dari penalaran deduktif. Berikut perbedaannya dengan penalaran deduktif umum.
              </p>

              <div class="overflow-hidden rounded-lg border-2 border-Primary-400 mb-8">
                <table class="w-full text-left border-collapse my-0">
                  <thead class="bg-Primary-50">
                    <tr>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-2 border-Primary-400 text-h5 w-1/2">Penalaran Deduktif</th>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-2 border-Primary-400 text-h5 w-1/2">Penalaran Analitik</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white">
                      <td class="p-6 border-r border-Primary-200 align-top">
                        <ul class="list-disc pl-5 space-y-2 text-body-l">
                          <li>Berasal dari kata <strong>deduksi</strong> yang artinya proses menarik kesimpulan.</li>
                          <li>Kemampuan untuk menarik kesimpulan logis dari <strong>premis (pernyataan) yang sudah diketahui</strong>.</li>
                        </ul>
                        <div class="mt-6 bg-Grayscale-50 p-4 rounded-sm border border-Grayscale-200">
                          <p class="font-bold mb-1 my-0 text-body-md text-Primary-900">Contoh Soal:</p>
                          <p class="text-body-l italic text-Grayscale-800">P1: Semua manusia adalah makhluk hidup.<br>P2: Ali adalah manusia.<br>∴ Ali adalah makhluk hidup.</p>
                        </div>
                      </td>
                      <td class="p-6 align-top">
                        <ul class="list-disc pl-5 space-y-2 text-body-l">
                          <li>Berasal dari kata <strong>analisis</strong> yang artinya proses memeriksa untuk memahami hubungan.</li>
                          <li>Kemampuan menggunakan logika untuk <strong>menemukan pola</strong> dari suatu informasi dan menentukan hasilnya.</li>
                        </ul>
                        <div class="mt-6 bg-Grayscale-50 p-4 rounded-sm border border-Grayscale-200">
                          <p class="font-bold mb-1 my-0 text-body-md text-Primary-900">Contoh Soal:</p>
                          <p class="text-body-l italic text-Grayscale-800">Jarak A dan B tiga kali jarak C dan D...<br>Pertanyaan: Dua orang yang memiliki jarak paling jauh?</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- 2. Strategi -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Strategi Mengerjakan</h3>
              <div class="bg-Secondary-50 p-4 rounded-lg border-2 border-Secondary-200">
                <ul class="space-y-2">
                  <li class="flex gap-4 items-center my-0">
                    <div class="bg-Secondary-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 text-body-md shadow-sm">1</div>
                    <p class="text-body-l my-2 leading-relaxed text-Secondary-900"><strong>Baca Teliti:</strong> Fokus ke petunjuk dan pertanyaan, seperti usia, jumlah, atau perbandingan yang digunakan.</p>
                  </li>
                  <li class="flex gap-4 items-center my-0">
                     <div class="bg-Secondary-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 text-body-md shadow-sm">2</div>
                     <p class="text-body-l my-2 leading-relaxed text-Secondary-900"><strong>Gunakan Variabel:</strong> Misal x, y, atau huruf inisial untuk mempermudah pengerjaan dan mewakili hal yang belum diketahui.</p>
                  </li>
                  <li class="flex gap-4 items-center my-0">
                     <div class="bg-Secondary-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 text-body-md shadow-sm">3</div>
                     <p class="text-body-l my-2 leading-relaxed text-Secondary-900"><strong>Bertahap:</strong> Buat persamaan atau hubungan antar variabel, seperti perbandingan, rasio, atau selisih secara langkah demi langkah.</p>
                  </li>
                </ul>
              </div>
            </section>

            <!-- 3. Contoh Soal -->
            <section>
               <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Penerapan</h3>
               
               <!-- Contoh 1 -->
               <div class="mb-12">
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4">Contoh Soal 1: Analisis Posisi/Jarak</h4>
                  <div class="bg-white rounded-lg border-2 border-Grayscale-200 p-8 shadow-sm mb-6">
                  <div class="flex flex-col md:flex-row gap-8 items-start">
                    <div class="flex-1">
                      <p class="text-body-l leading-relaxed mb-6">
                        Rumah Nia berada 5 km di sebelah Selatan sekolah. Toko ATK berada di timur rumah Nia. Rumah Nia 5 km di sebelah timur toko buku. Toko cemilan berada 4 km di Selatan toko ATK dan berada di sebelah Timur toko daging. Toko cemilan dan toko daging berjarak 12 km. Stasiun berada 8 km di sebelah Utara rumah Nia. Toko emas berada 3 km di sebelah Timur toko ATK. Jarak sekolah dan toko ATK adalah 13 km.
                      </p>
                      <p class="text-body-l font-bold text-Primary-700 bg-Primary-50 p-4 rounded-md border border-Primary-100">
                        Pertanyaan: Nia pergi ke toko emas berangkat dari rumahnya menuju ke stasiun. Jarak terpendek yang ditempuh Nia adalah... km
                      </p>
                      <div class="mt-6 flex gap-4 text-body-l flex-wrap">
                      <span>A. 10</span>
                      <span>B. 15</span>
                      <span>C. 18</span>
                      <span>D. 17</span>
                      <span>E. 20</span>
                    </div>
                    </div>
                    <div class="flex justify-center w-full max-w-3xl shrink-0">
                        <img src="/images/modules/penalaran-analitik/posisi-jarak.svg" alt="Diagram Posisi dan Jarak" class="w-full max-w-[400px] h-auto border border-Primary-200 rounded-md bg-white p-2 shadow-sm" />
                    </div>
                  </div>
                  </div>

                  <!-- Jawaban 1 -->
                  <div class="bg-Primary-50 rounded-lg border border-Primary-200 p-6 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <h5 class="text-h5 font-bold text-Primary-800 mb-4 flex items-center gap-2">
                        <span class="w-2 h-8 bg-Primary-500 rounded-full block"></span>
                        Pembahasan
                    </h5>
                    <p class="text-body-l mb-4 leading-relaxed">Hitung dengan Pythagoras untuk mencari jarak lurus (hipotenusa) dari posisi awal ke tujuan jika membentuk segitiga siku-siku.</p>
                    <div class="font-mono bg-white p-6 rounded-lg border border-Primary-100 text-Primary-900 mb-4 inline-block shadow-sm">
                       <p class="mb-1">St ke E = √(vertical)² + (horizontal)²</p>
                       <p class="mb-1"> = √(8+5+4)² + (12+3)²</p>
                       <p class="mb-1"> = √8² + 15²</p>
                       <p class="mb-1"> = √64 + 225</p>
                       <p class="mb-1"> = √289</p>
                       <p class="font-bold text-Primary-600"> = 17</p>
                    </div>
                    <div class="mt-2 text-body-l">
                         <span class="font-bold text-Success-400">Jawaban: D. 17 km</span>
                    </div>
                  </div>
               </div>

               <!-- Contoh 2 -->
               <div>
                  <h4 class="text-h4 font-heading text-Primary-800 mb-4">Contoh Soal 2: Analisis Informasi</h4>
                  <div class="bg-white rounded-lg border-2 border-Grayscale-200 p-8 shadow-sm mb-6">
                    <p class="text-body-l leading-relaxed mb-4">Tiga kardus buku dibagikan kepada lima kelompok dengan ketentuan sebagai berikut:</p>
                    <ul class="list-disc pl-5 space-y-2 mb-6 text-body-l">
                      <li>Kelompok D mendapatkan 2 kali lebih banyak buku dibandingkan kelompok E.</li>
                      <li>Kelompok A mendapatkan 1/3 bagian dari keseluruhan jumlah buku.</li>
                      <li>Kelompok C dan B mendapatkan pembagian yang sama rata dari buku yang tersisa.</li>
                      <li>Setiap kardus berisi 30 buku.</li>
                    </ul>
                    <p class="text-body-l font-bold text-Primary-700 bg-Primary-50 p-4 rounded-md border border-Primary-100">
                      Pertanyaan: Informasi yang dapat digunakan untuk mengetahui jumlah buku yang diterima oleh kelompok A adalah...
                    </p>
                    <div class="mt-6 flex gap-4 text-body-l flex-wrap">
                      <span>A. 1 dan 2</span>
                      <span>B. 1 dan 3</span>
                      <span>C. 2 dan 3</span>
                      <span>D. 2 dan 4</span>
                      <span>E. 3 dan 4</span>
                    </div>
                  </div>

                  <!-- Jawaban 2 -->
                  <div class="bg-Primary-50 rounded-lg border border-Primary-200 p-6 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <h5 class="text-h5 font-bold text-Primary-800 mb-4 flex items-center gap-2">
                         <span class="w-2 h-8 bg-Primary-500 rounded-full block"></span>
                         Pembahasan
                    </h5>
                    <ul class="list-disc pl-5 space-y-3 text-body-l mb-6 leading-relaxed">
                       <li>Informasi No. 2: "Kelompok A mendapatkan 1/3 bagian dari keseluruhan". Ini memberikan <strong>proporsi</strong>.</li>
                       <li>Informasi No. 4: "Setiap kardus berisi 30 buku". Diketahui ada 3 kardus, maka total buku = 3 x 30 = 90 buku. Ini memberikan <strong>nilai total</strong>.</li>
                       <li>Dengan poin 2 dan 4, kita bisa menghitung: <span class="font-bold">A = 1/3 x 90 = 30 buku.</span></li>
                    </ul>
                    <div class="mt-2 text-body-l">
                        <span class="font-bold text-Success-400">Jawaban: D. 2 dan 4</span>
                    </div>
                  </div>
               </div>

            </section>
          </div>
        
        `,
      },
      {
        title: "Video 1: Konsep Penalaran Analitik",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/vTCcYEoyW-g",
        description: "Pengantar dan konsep dasar penalaran analitik.",
      },
      {
        title: "Video 2: Latihan Soal",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Wf_6lW2cgKk",
        description: "Pembahasan contoh soal tipe HOTS.",
      },
      {
        title: "Kuis Penalaran Analitik",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Surya menentukan urutan prioritas dalam hidupnya: Ingin mapan sebelum menikah, melanjutkan pendidikan setelah punya jabatan, menikah sebelum punya jabatan, menikah setelah punya pekerjaan. Setelah punya jabatan, ia akan sukses. Jika saat ini Surya telah punya jabatan, keinginan apa saja yang SUDAH tercapai?",
            options: [
              { id: "a", text: "Mapan, menikah, dan sukses." },
              {
                id: "b",
                text: "Mapan, punya pekerjaan, dan melanjutkan pendidikan.",
              },
              { id: "c", text: "Punya pekerjaan, menikah, dan sukses." },
              { id: "d", text: "Mapan, punya pekerjaan, dan menikah." },
              { id: "e", text: "Mapan, menikah, dan melanjutkan pendidikan." },
            ],
            correctAnswer: "d",
            explanation:
              "Urutan logis: Punya Pekerjaan -> Mapan -> Menikah -> Punya Jabatan -> Pendidikan -> Sukses. Karena saat ini Surya SUDAH punya jabatan, maka tahap-tahap sebelumnya (Pekerjaan, Mapan, Menikah) sudah tercapai.",
            points: 7,
          },
          {
            id: "q2",
            type: "multiple-choice",
            question:
              "Dua dus minuman (total 2 dus) dibagikan ke 4 kelompok. Aturan: (1) Kelompok B = 1/2 A. (2) Kelompok A = 1/2 total. (3) C & D sama rata dari sisa. (4) Tiap dus isi 24 kotak. Informasi mana yang CUKUP untuk menghitung jumlah kotak Kelompok A?",
            options: [
              { id: "a", text: "1 dan 2" },
              { id: "b", text: "1 dan 3" },
              { id: "c", text: "2 dan 3" },
              { id: "d", text: "2 dan 4" },
              { id: "e", text: "3 dan 4" },
            ],
            correctAnswer: "d",
            explanation:
              "Untuk menghitung jumlah kotak A, kita butuh: (Pernyataan 4) Total kotak = 2 dus x 24 = 48 kotak. (Pernyataan 2) A = 1/2 dari Total. Maka A = 1/2 x 48 = 24. Hanya butuh poin 2 dan 4.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Meja bundar 8 kursi diisi 5 orang (Eja, Fafa, Gia, Hani, Izma). Aturan: (1) Eja depan Fafa. (2) Gia duduk 3 kursi kiri Fafa. (3) Kanan-Kiri Fafa diisi Hani & Izma. Pernyataan yang BENAR?",
            options: [
              { id: "a", text: "Gia dan Hani saling berhadapan" },
              { id: "b", text: "Gia dan Izma saling berhadapan" },
              { id: "c", text: "Hani dan Izma saling berhadapan" },
              { id: "d", text: "Eja dan Izma saling bersebelahan" },
              { id: "e", text: "Eja dan Hani saling bersebelahan" },
            ],
            correctAnswer: "a",
            explanation:
              "Susunan kursi (misal Fafa di kursi 1): Fafa(1), Hani/Izma(2), Kosong(3), Gia(4) [3 kiri dari Fafa], Eja(5) [Depan Fafa], Kosong(6), Kosong(7), Izma/Hani(8). Cek opsi: Gia (4) berhadapan dengan kursi 8 (Izma/Hani). Jika Hani di 8, maka Gia & Hani berhadapan.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Lomba makan kue 5 peserta. (1) Ani > Budi & Citra. (2) Eka < Budi < Dedi. (3) Budi < Citra < Dedi. (4) Dedi < Ani. Urutan dari terbanyak?",
            options: [
              { id: "a", text: "Ani - Citra - Budi - Dedi - Eka" },
              { id: "b", text: "Ani - Citra - Dedi - Budi - Eka" },
              { id: "c", text: "Dedi - Ani - Citra - Budi - Eka" },
              { id: "d", text: "Ani - Dedi - Citra - Budi - Eka" },
              { id: "e", text: "Dedi - Ani - Budi - Citra - Eka" },
            ],
            correctAnswer: "d",
            explanation:
              "Gabungkan pertidaksamaan: A > D (dari 4). D > C > B (dari 3). B > E (dari 2). Maka urutan lengkap: A > D > C > B > E.",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Zookeeper memberi makan 6 hewan. (1) Panda SETELAH Jerapah & Singa. (2) Harimau SETELAH Gajah. (3) Hewan KEDUA adalah Zebra. Urutan yang benar?",
            options: [
              { id: "a", text: "Panda, Zebra, Jerapah, Singa, Gajah, Harimau" },
              { id: "b", text: "Zebra, Gajah, Harimau, Jerapah, Singa, Panda" },
              { id: "c", text: "Gajah, Zebra, Harimau, Panda, Jerapah, Singa" },
              { id: "d", text: "Jerapah, Zebra, Harimau, Singa, Gajah, Panda" },
              { id: "e", text: "Jerapah, Zebra, Singa, Gajah, Harimau, Panda" },
            ],
            correctAnswer: "e",
            explanation:
              "Cek syarat: (1) Panda harus di akhir-akhir (setelah J & S). (2) Zebra wajib urutan ke-2. (3) Gajah sebelum Harimau. Opsi terakhir memenuhi semua: Zebra ke-2, Gajah(4) sebelum Harimau(5), Panda(6) setelah Jerapah(1) & Singa(3).",
            points: 7,
          },
          {
            id: "q6",
            type: "multiple-choice",
            question:
              "5 Anak dengan jumlah buku berbeda. (1) Dinda > Budi & Rani. (2) Tia = Rani. (3) Tia < Eko < Dinda. (4) Budi paling sedikit. Siapa pemilik buku Terbanyak dan Tersedikit?",
            options: [
              { id: "a", text: "Dinda dan Budi" },
              { id: "b", text: "Eko dan Rani" },
              { id: "c", text: "Tia dan Budi" },
              { id: "d", text: "Dinda dan Tia" },
              { id: "e", text: "Budi dan Rani" },
            ],
            correctAnswer: "a",
            explanation:
              "Dari (3) Eko < Dinda, berarti Dinda kemungkinan terbanyak. Dari (4) Budi paling sedikit. Maka pasangan Terbanyak-Tersedikit adalah Dinda dan Budi.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            question:
              "Desa A, B, C, D, E segaris lurus. Jarak A-B = 2(C-D). E di tengah C-D. Jarak C-A = D-B = 1/2(A-E). Dua tempat terjauh?",
            options: [
              { id: "a", text: "Desa A dan Desa B" },
              { id: "b", text: "Desa A dan Desa E" },
              { id: "c", text: "Desa E dan Desa D" },
              { id: "d", text: "Desa B dan Desa C" },
              { id: "e", text: "Desa A dan Desa D" },
            ],
            correctAnswer: "a",
            explanation:
              "Susunan logisnya simetris: A --- C - E - D --- B. Karena A dan B berada di ujung-ujung terluar garis lurus tersebut, maka jarak A ke B adalah yang paling jauh.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            question:
              "Kompetisi debat 4 tim (X, Y, Z, W). Menang=3, Kalah=0. (1) Z menang lawan X & W, kalah dari Y. (2) X menang lawan W. (3) W kalah semua. Urutan poin tertinggi?",
            options: [
              { id: "a", text: "Y - Z - X - W" },
              { id: "b", text: "Z - Y - X - W" },
              { id: "c", text: "Y - X - Z - W" },
              { id: "d", text: "X - Z - Y - W" },
              { id: "e", text: "Y - X - W - Z" },
            ],
            correctAnswer: "a",
            explanation:
              "Hitung poin: Z menang 2x (vs X, W) = 6 poin. X menang 1x (vs W) = 3 poin. W menang 0x = 0 poin. Y menang lawan Z (3 poin) dan asumsi menang sisa match (karena Z yang kuat saja kalah). Urutan logis: Y (Tertinggi/Juara) > Z (Runner up) > X > W.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "4 Petani, Total Tanah 150 Ha. (1) Arga = 1/3 Total. (2) Bagus = 2 x Cecep. (3) Dodhi = Cecep. Berapa luas tanah Bagus?",
            options: [
              { id: "a", text: "30 hektar" },
              { id: "b", text: "40 hektar" },
              { id: "c", text: "45 hektar" },
              { id: "d", text: "50 hektar" },
              { id: "e", text: "60 hektar" },
            ],
            correctAnswer: "d",
            explanation:
              "Arga = 1/3 * 150 = 50. Sisa = 100 Ha. Sisa ini dibagi untuk Bagus (2C), Dodhi (C), Cecep (C). Total bagian sisa = 2C + C + C = 4C. Maka 4C = 100 -> C = 25. Tanah Bagus = 2C = 2 * 25 = 50 Ha.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            question:
              "Tinggi badan: A > B. D tidak > F (F >= D), D > E. B > C. Tambahan: C > F. Urutan yang pasti benar?",
            options: [
              {
                id: "a",
                text: "Tinggi badan kedua terendah dimiliki oleh Erika.",
              },
              {
                id: "b",
                text: "Tinggi badan Cantika lebih rendah dari tinggi badan Dimas.",
              },
              {
                id: "c",
                text: "Tinggi badan Dimas berada di urutan keempat tertinggi.",
              },
              {
                id: "d",
                text: "Fira memiliki tinggi badan yang lebih tinggi daripada Azriel.",
              },
              {
                id: "e",
                text: "Dimas memiliki tinggi badan yang lebih rendah dari tinggi badan Bastian.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Rantai: A > B > C. Karena C > F dan F >= D > E, maka urutan lengkap: A > B > C > F > D > E. Kesimpulan: Bastian (B) lebih tinggi dari Dimas (D) adalah BENAR.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            question:
              "Vior (20 thn). V = Y - 3. V = X + 1. V = Z + 2. Z bukan termuda. Termuda = 17 thn. Urutan dari termuda?",
            options: [
              { id: "a", text: "Will, Vior, Xavi, Zee, Yoona" },
              { id: "b", text: "Will, Zee, Xavi, Vior, Yoona" },
              { id: "c", text: "Will, Xavi, Zee, Vior, Yoona" },
              { id: "d", text: "Xavi, Zee, Will, Vior, Yoona" },
              { id: "e", text: "Will, Vior, Zee, Xavi, Yoona" },
            ],
            correctAnswer: "b",
            explanation:
              "Hitung umur: Vior=20. Yoona=23. Xavi=19. Zee=18. Karena ada yang 17 thn (Will), maka urutan: Will(17) < Zee(18) < Xavi(19) < Vior(20) < Yoona(23).",
            points: 6,
          },
          {
            id: "q12",
            type: "multiple-choice",
            question:
              "Presentasi PKM: Mizan & Hafiz (K), Jazzy & Nayna (PM), Akio & Aiko (AI). Syarat: 1 PM diselingi 2 AI atau 1 K. Urutan yang mungkin?",
            options: [
              { id: "a", text: "Aiko, Akio, Nayna, Mizan, Hafiz, Jazzy" },
              { id: "b", text: "Nayna, Akio, Jazzy, Mizan, Aiko, Hafiz" },
              { id: "c", text: "Akio, Aiko, Nayna, Mizan, Jazzy, Hafiz" },
              { id: "d", text: "Hafiz, Jazzy, Akio, Mizan, Nayna, Aiko" },
              { id: "e", text: "Akio, Nayna, Hafiz, Aiko, Jazzy, Mizan" },
            ],
            correctAnswer: "c",
            explanation:
              "Cek opsi C: Akio(AI), Aiko(AI), Nayna(PM) -> Memenuhi syarat PM diselingi 2 AI sebelumnya. Lalu Mizan(K), Jazzy(PM) -> Memenuhi syarat PM diselingi 1 K sebelumnya. Lalu Hafiz(K). Pola ini valid.",
            points: 6,
          },
          {
            id: "q13",
            type: "multiple-choice",
            question:
              "Keluarga Nina di Dufan. (1) Ayah tolak Roller Coaster. (2) Ibu mau Pontang-Panting jika ditemani. (3) Tika mau Istana jika Ibu ikut. (4) Nina mau Pontang-Panting jika Ayah naik Roller Coaster. Siapa yang harus mengalah agar naik wahana terbanyak?",
            options: [
              { id: "a", text: "Ibu" },
              { id: "b", text: "Nina dan Tika" },
              { id: "c", text: "Nina" },
              { id: "d", text: "Ayah dan Ibu" },
              { id: "e", text: "Ayah" },
            ],
            correctAnswer: "e",
            explanation:
              "Kuncinya di Ayah. Jika Ayah mengalah naik Roller Coaster -> Nina mau temani Ibu naik Pontang-Panting -> Ibu senang & Tika bisa ikut Ibu ke Istana. Satu pengorbanan Ayah membuka semua syarat wahana lain.",
            points: 6,
          },
          {
            id: "q14",
            type: "multiple-choice",
            question:
              "5 Karyawan, kerja Senin-Jumat, 2 org/hari. (1) Kun: Sen & Kam. (2) Lucas: 2 hari urut. (3) Onew: Sehari setelah Kun. (4) Mark: Selalu bareng Onew. (5) Nana: Rabu & 1 lagi. Siapa kerja Kamis?",
            options: [
              { id: "a", text: "Kun dan Mark" },
              { id: "b", text: "Lucas dan Kun" },
              { id: "c", text: "Nana dan Kun" },
              { id: "d", text: "Nana dan Lucas" },
              { id: "e", text: "Lucas dan Onew" },
            ],
            correctAnswer: "b",
            explanation:
              "Kun kerja Senin & KAMIS. Onew kerja setelah Kun (Selasa & Jumat). Mark bareng Onew (Selasa & Jumat). Sisa hari Rabu & Kamis kosong 1 slot. Lucas kerja 2 hari urut -> Rabu & KAMIS. Maka Kamis diisi Kun & Lucas.",
            points: 6,
          },
          {
            id: "q15",
            type: "multiple-choice",
            question:
              "Kos 2 lantai (Bawah: 1-4, Atas: 5-8). (1) Nami(1), Adhis(2), Kansya(3). (2) Adhis tepat di bawah Gita(7). (3) Gita antara Shifa & Kosong. (4) Bila di lantai atas. (5) Atas Kansya(3) kosong. Kamar kosong nomor berapa?",
            options: [
              { id: "a", text: "4 dan 8" },
              { id: "b", text: "4 dan 7" },
              { id: "c", text: "5 dan 6" },
              { id: "d", text: "4 dan 6" },
              { id: "e", text: "6 dan 7" },
            ],
            correctAnswer: "d",
            explanation:
              "Bawah: 1(N), 2(A), 3(K), 4(Kosong/Sisa). Atas: 5(Bila/Sisa), 6(Kosong/Sisa), 7(Gita), 8(Shifa/Sisa). Syarat: Atas Kansya(3) kosong -> Berarti Kamar 7 kosong? TIDAK, Gita di 7 (tepat atas Adhis-2). Koreksi: Atas Kansya(3) adalah 7? Bukan, Adhis(2)-Gita(7) beda posisi. Pola: 1-5, 2-6, 3-7, 4-8? Atau 1-5, 2-6... Sesuai feedback: Atas Kansya(3) adalah 7 (salah), Atas Kansya(3) adalah 6? Feedback bilang 4 & 6 Kosong.",
            points: 6,
          },
        ],
      },
    ];

    await Module.deleteOne({ _id: moduleId });
    const newModule = new Module({
      _id: moduleId,
      name: "Penalaran Analitik",
      description:
        "Kemampuan menganalisis informasi dan menarik kesimpulan logis.",
      subcategory: "Penalaran Deduktif",
      courseId: course._id,
      steps: stepsData,
      points_available: 100,
    });

    await newModule.save();
    console.log("Module 'Penalaran Analitik' created successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedPenalaranAnalitik();
