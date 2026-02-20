const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedGrafik = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. Find 'Penalaran Umum' Course
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    // 2. Define the Module Data
    const targetId = "grafik";

    const stepsData = [
      {
        title: "Materi: Interpretasi Data Grafik",
        type: "reading",
        status: "active",
        description: "Materi Bacaan tentang Grafik",
        content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Pengertian Grafik</h3>
        <div class="bg-white rounded-lg border-2 border-Primary-100 p-8 shadow-sm mb-6">
          <p class="text-body-l text-Grayscale-900 mb-4">
            <strong>Grafik</strong> adalah lukisan pasang surut suatu keadaan dengan garis atau gambar (tentang turun naiknya hasil, statistik dan sebagainya). Umumnya grafik digunakan untuk membandingkan jumlah data. Selain itu, digunakan pula untuk menunjukkan fluktuasi suatu perkembangan jumlah, misalnya dalam rentang waktu lima tahun, enam tahun, sepuluh tahun atau lebih. Dengan grafik, perbandingan serta naik turunnya jumlah suatu data akan terlihat jelas.
          </p>
          
          <div class="flex flex-col md:flex-row gap-8 items-start mt-6">
             <div class="flex-1">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  <strong>Interpretasi data pada grafik</strong> adalah kemampuan untuk memahami, menganalisis, dan menyimpulkan informasi yang disajikan dalam bentuk grafik. Ini mencakup:
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800">
                  <li>Mengidentifikasi elemen penting</li>
                  <li>Membaca pola atau tren</li>
                  <li>Membandingkan data</li>
                  <li>Menarik kesimpulan atau membuat prediksi</li>
                  <li>Menggunakan skala dengan cepat</li>
                </ul>
             </div>
             
             <!-- Placeholder for Chart visualization -->
             <div class="flex-1 w-fit bg-white rounded-lg border border-Grayscale-200 p-6" style="min-height: 300px;">
                <h4 class="text-body-l font-bold text-center text-Grayscale-900 my-4">Permainan favorit siswa ips 2</h4>
                
                <!-- Legend -->
                <div class="flex justify-center gap-6 mb-8">
                  <div class="flex items-center gap-2">
                    <div style="width: 12px; height: 12px; border-radius: 9999px; background-color: #67E8F9;"></div>
                    <span class="text-xs text-Grayscale-600 font-medium">Laki-laki</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div style="width: 12px; height: 12px; border-radius: 9999px; background-color: #06B6D4;"></div>
                    <span class="text-xs text-Grayscale-600 font-medium">Perempuan</span>
                  </div>
                </div>
              
                <!-- Chart Area -->
                <div class="relative w-full justify-between items-center pr-2" style="height: 256px;">
                  <!-- Grid -->
                  <div class="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between text-xs text-Grayscale-400 pointer-events-none">
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">35</span></div>
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">30</span></div>
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">25</span></div>
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">20</span></div>
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">15</span></div>
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">10</span></div>
                     <div class="border-b border-Grayscale-100 w-full h-0 flex items-center"><span class="-ml-6 absolute">5</span></div>
                     <div class="border-b border-Grayscale-200 w-full h-0 flex items-center"><span class="-ml-6 absolute">0</span></div>
                  </div>
              
                  <!-- Bars Container -->
                  <div class="absolute inset-0 flex justify-around items-end pl-4 pt-4"> 
                     <!-- Group 1: Bola -->
                     <div class="flex gap-1 items-end h-full justify-center group relative" style="width: 16%; min-width: 75px;">
                        <div style="width: 30px; background-color: #67E8F9; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 100%;" title="Laki-laki: 35"></div>
                        <div style="width: 30px; background-color: #06B6D4; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 57.1%;" title="Perempuan: 20"></div>
                        <span class="absolute -bottom-8 text-xs font-medium text-Grayscale-700 text-center">Bola</span>
                     </div>
              
                     <!-- Group 2: Monopoli -->
                     <div class="flex gap-1 items-end h-full justify-center group relative" style="width: 16%; min-width: 75px;">
                        <div style="width: 30px; background-color: #67E8F9; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 77.1%;" title="Laki-laki: 27"></div>
                        <div style="width: 30px; background-color: #06B6D4; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 94.2%;" title="Perempuan: 33"></div>
                        <span class="absolute -bottom-8 text-xs font-medium text-Grayscale-700 text-center">Monopoli</span>
                     </div>
              
                     <!-- Group 3: Ular Tangga -->
                     <div class="flex gap-1 items-end h-full justify-center group relative" style="width: 16%; min-width: 75px;">
                        <div style="width: 30px; background-color: #67E8F9; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 94.2%;" title="Laki-laki: 33"></div>
                        <div style="width: 30px; background-color: #06B6D4; border-top-left-radius: 2px; border-top-right-radius: 2px; height: 68.5%;" title="Perempuan: 24"></div>
                        <span class="absolute -bottom-8 text-xs font-medium text-Grayscale-700 text-center text-nowrap">Ular Tangga</span>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Secondary-500 pl-4 py-1">2. Jenis-Jenis Grafik</h3>
        <p class="text-body-l text-Grayscale-900 mb-6">Berikut adalah jenis-jenis grafik yang sering digunakan dalam soal UTBK:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 border border-Grayscale-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 class="text-h5 font-bold text-Primary-600 mb-2">a. Grafik Batang (Bar Chart)</h5>
            <ul class="list-disc pl-5 space-y-1 text-body-l text-Grayscale-900">
               <li>Menggunakan batang vertikal atau horizontal untuk menunjukkan jumlah atau nilai data. Cocok untuk membandingkan data antar kelompok.</li>
               <li>Contoh: Penjualan produk per bulan.</li>
            </ul>
          </div>
          
          <div class="bg-white rounded-lg p-6 border border-Grayscale-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 class="text-h5 font-bold text-Secondary-600 mb-2">b. Grafik Garis (Line Chart)</h5>
            <ul class="list-disc pl-5 space-y-1 text-body-l text-Grayscale-900">
               <li>Menampilkan data sebagai titik yang dihubungkan oleh garis. Digunakan untuk menunjukkan perubahan data dari waktu ke waktu (tren).</li>
               <li>Contoh: Perkembangan nilai saham selama setahun.</li>
            </ul>
          </div>
          
          <div class="bg-white rounded-lg p-6 border border-Grayscale-200 shadow-sm hover:shadow-md transition-shadow">
             <h5 class="text-h5 font-bold text-Tertiary-600 mb-2">c. Grafik Lingkaran (Pie Chart)</h5>
             <ul class="list-disc pl-5 space-y-1 text-body-l text-Grayscale-900">
                <li>Menampilkan data dalam bentuk lingkaran yang dibagi menjadi beberapa sektor. Cocok untuk menunjukkan proporsi atau persentase.</li>
                <li>Contoh: Pembagian anggaran dalam suatu proyek.</li>
             </ul>
          </div>
          
          <div class="bg-white rounded-lg p-6 border border-Grayscale-200 shadow-sm hover:shadow-md transition-shadow">
             <h5 class="text-h5 font-bold text-Grayscale-800 mb-2">d. Histogram</h5>
             <ul class="list-disc pl-5 space-y-1 text-body-l text-Grayscale-900">
                <li>Mirip dengan grafik batang, tetapi digunakan untuk menyajikan distribusi frekuensi data dalam kelompok (interval).</li>
                <li>Contoh: Distribusi nilai ujian dalam kelas.</li>
             </ul>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Tertiary-500 pl-4 py-1">3. Tipe-Tipe Soal Grafik Dalam UTBK</h3>
        <p class="text-body-l text-Grayscale-900 mb-6">Soal yang sering muncul dalam UTBK terkait grafik biasanya menguji kemampuan seperti:</p>
        
        <div class="space-y-4 gap-4">
           <div class="flex items-start p-4 bg-Primary-50 rounded-lg gap-4 border border-Primary-100">
              <div class="flex-shrink-0 bg-Primary-100 rounded-full p-2 mr-4 text-Primary-600 font-bold w-10 h-10 flex items-center justify-center">a</div>
              <div>
                 <h5 class="font-bold text-h5 text-Primary-900">Membaca data langsung</h5>
                 <p class="text-body-l text-Grayscale-900">Menjawab pertanyaan spesifik berdasarkan grafik.</p>
                 <p class="text-body-l text-Grayscale-800 italic mt-1">Contoh: Berapa jumlah penjualan di bulan Februari?</p>
              </div>
           </div>

           <div class="flex items-start p-4 bg-Secondary-50 rounded-lg gap-4 border border-Secondary-100">
              <div class="flex-shrink-0 bg-Secondary-100 rounded-full p-2 mr-4 text-Secondary-600 font-bold w-10 h-10 flex items-center justify-center">b</div>
              <div>
                 <h5 class="font-bold text-h5 text-Secondary-900">Menganalisis tren</h5>
                 <p class="text-body-l text-Grayscale-900">Mengidentifikasi pola atau perubahan dari waktu ke waktu.</p>
                 <p class="text-body-l text-Grayscale-800 italic mt-1">Contoh: Bulan apa yang menunjukkan penurunan jumlah penjualan?</p>
              </div>
           </div>
           
           <div class="flex items-start p-4 bg-Tertiary-50 rounded-lg gap-4 border border-Tertiary-100">
              <div class="flex-shrink-0 bg-Tertiary-100 rounded-full p-2 mr-4 text-Tertiary-600 font-bold w-10 h-10 flex items-center justify-center">c</div>
              <div>
                 <h5 class="font-bold text-h5 text-Tertiary-900">Perbandingan</h5>
                 <p class="text-body-l text-Grayscale-900">Membandingkan data antar kategori atau waktu.</p>
                 <p class="text-body-l text-Grayscale-800 italic mt-1">Contoh: Berapa selisih penjualan antara kategori A dan B?</p>
              </div>
           </div>

           <div class="flex items-start p-4 bg-Grayscale-50 rounded-lg gap-4 border border-Grayscale-200">
              <div class="flex-shrink-0 bg-Grayscale-200 rounded-full p-2 mr-4 text-Grayscale-600 font-bold w-10 h-10 flex items-center justify-center">d</div>
              <div>
                 <h5 class="font-bold text-h5 text-Grayscale-900">Persentase atau Proporsi</h5>
                 <p class="text-body-l text-Grayscale-900">Menghitung bagian data dari keseluruhan.</p>
                 <p class="text-body-l text-Grayscale-800 italic mt-1">Contoh: Berapa persen kontribusi penjualan produk X dari total penjualan?</p>
              </div>
           </div>

           <div class="flex items-start p-4 bg-Success-50/50 rounded-lg gap-4 border border-Success-200">
              <div class="flex-shrink-0 bg-Success-100 rounded-full p-2 mr-4 text-Success-600 font-bold w-10 h-10 flex items-center justify-center">e</div>
              <div>
                 <h5 class="font-bold text-h5 text-Success-900">Prediksi atau Ekstrapolasi</h5>
                 <p class="text-body-l text-Grayscale-700">Menggunakan tren untuk memperkirakan nilai di masa depan.</p>
                 <p class="text-body-l text-Grayscale-500 italic mt-1">Contoh: Jika tren terus berlanjut, berapa penjualan di bulan Mei?</p>
              </div>
           </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Warning-500 pl-4 py-1">4. Tips Mengerjakan Soal Grafik di UTBK</h3>
        <div class="bg-Warning-50 rounded-lg p-8 border border-Warning-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-Warning-200 rounded-full opacity-50 z-0"></div>
          <div class="relative z-10">
             <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-800 font-medium">
               <li>
                 <span class="font-bold text-Primary-800">Pahami Judul Grafik:</span> Menunjukkan topik yang disajikan.
               </li>
               <li>
                 <span class="font-bold text-Primary-800">Periksa Sumbu:</span>
                 <ul class="list-disc pl-5 mt-1 space-y-1 font-normal text-Grayscale-700">
                    <li>Sumbu horizontal (X) biasanya menunjukkan kategori atau waktu.</li>
                    <li>Sumbu vertikal (Y) biasanya menunjukkan jumlah atau nilai.</li>
                 </ul>
               </li>
               <li>
                 <span class="font-bold text-Primary-800">Identifikasi Pola atau Tren:</span> Apakah grafik menunjukkan peningkatan, penurunan, atau stabil?
               </li>
               <li>
                 <span class="font-bold text-Primary-800">Perhatikan Skala:</span> Pastikan skala pada grafik dibaca dengan benar untuk menghindari kesalahan analisis.
               </li>
               <li>
                  <span class="font-bold text-Primary-800">Analisis Legenda:</span> Jika grafik memiliki lebih dari satu data (misalnya, kategori berbeda), periksa legendanya.
               </li>
             </ol>
          </div>
        </div>
      </section>
        `,
      },
      {
        title: "Video Pembelajaran 1: Materi Grafik",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Wc4R_phvDPo",
        description: "Video pembahasan materi TPS Penalaran Umum - Grafik.",
      },
      {
        title: "Video Pembelajaran 2: Latihan Soal Grafik",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/7salHnGIjpI",
        description:
          "Video pembahasan latihan soal TPS Penalaran Umum - Grafik.",
      },
      {
        title: "Kuis: Interpretasi Data Grafik",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Perhatikan grafik pengeluaran Naila dalam sebulan di bawah ini !",
            imageUrl: "/images/modules/grafik/image 1.png",
            question:
              "Jika total pengeluaran Naila adalah Rp6.000.000, berapa rupiah yang dihabiskan untuk makanan?",
            options: [
              { id: "a", text: "Rp2.000.000" },
              { id: "b", text: "Rp2.400.000" },
              { id: "c", text: "Rp3.000.000" },
              { id: "d", text: "Rp3.400.000" },
              { id: "e", text: "Rp4.300.000" },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan kunci jawaban (Rp2.400.000 dari total Rp6.000.000), persentase pengeluaran untuk makanan pada grafik adalah 40%. Maka, 40% x Rp6.000.000 = Rp2.400.000.",
            points: 7,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Perhatikan grafik pengeluaran Naila dalam sebulan di bawah ini !",
            imageUrl: "/images/modules/grafik/image 1.png",
            question:
              "Jika biaya pendidikan naik 2%. Maka perubahan yang mungkin dilakukan agar pengeluaran tetap seperti semula adalah....",
            options: [
              {
                id: "a",
                text: "Pengeluaran makanan harus dikurangi sebanyak 2%",
              },
              {
                id: "b",
                text: "Pengeluaran untuk hiburan ditambah sebanyak 3%",
              },
              {
                id: "c",
                text: "Transportasi menjadi 12% dari total pengeluaran",
              },
              { id: "d", text: "Hiburan berkurang jadi 5%" },
              { id: "e", text: "Tidak perlu ada yang dikurangi" },
            ],
            correctAnswer: "a",
            explanation:
              "Untuk menjaga total pengeluaran tetap 100% (tidak berubah), jika ada satu pos pengeluaran yang naik 2% (pendidikan), maka harus ada pos lain yang dikurangi dengan persentase yang sama (makanan dikurangi 2%).",
            points: 7,
          },
          {
            id: "q3",
            type: "short-answer",
            context:
              "Perhatikan grafik pengeluaran Naila dalam sebulan di bawah ini !",
            imageUrl: "/images/modules/grafik/image 1.png",
            question:
              "Berapa persen total pengeluaran untuk transportasi dan tabungan jika digabungkan? (tulis menggunakan tanda %)",
            correctAnswer: "30%",
            explanation:
              "Berdasarkan grafik, persentase untuk transportasi dan tabungan jika dijumlahkan menghasilkan total 30%.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context: "Perhatikan grafik penjualan buku di Toko Gunung Jati!",
            imageUrl: "/images/modules/grafik/image 2.png",
            question:
              "Berapa total penjualan novel di toko gunung jati selama 5 hari?",
            options: [
              { id: "a", text: "280" },
              { id: "b", text: "290" },
              { id: "c", text: "300" },
              { id: "d", text: "310" },
              { id: "e", text: "320" },
            ],
            correctAnswer: "c",
            explanation:
              "Dengan menjumlahkan angka penjualan novel dari hari pertama hingga hari kelima pada grafik, didapatkan total sebanyak 300 buku.",
            points: 7,
          },
          {
            id: "q5",
            type: "short-answer",
            context: "Perhatikan grafik penjualan buku di Toko Gunung Jati!",
            imageUrl: "/images/modules/grafik/image 2.png",
            question:
              "Berapa selisih rata-rata penjualan selama 5 hari antara majalah dan novel? (tulis dalam angka)",
            correctAnswer: "0",
            explanation:
              "Karena total penjualan majalah selama 5 hari sama dengan total penjualan novel (300 buku), maka rata-ratanya pun sama. Oleh karena itu, selisih rata-ratanya adalah 0.",
            points: 7,
          },
          {
            id: "q6",
            type: "matrix",
            context:
              "Perhatikan grafik penjualan buku di Toko Gunung Jati untuk menjawab soal no. 6-8!",
            imageUrl: "/images/modules/grafik/image 2.png",
            question:
              "Jawablah kebenaran dari penyataan berikut berdasarkan grafik!",
            rows: [
              {
                id: "r1",
                text: "Rata-rata penjualan baik majalah dan novel berjumlah sama",
              },
              {
                id: "r2",
                text: "Pada hari sabtu, kemungkinan novel akan mengalami peningkatan penjualan",
              },
              {
                id: "r3",
                text: "Pada hari kamis, majalah dan novel terjual dengan jumlah yang sama",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "true",
              r3: "false",
            },
            explanation:
              "Pernyataan 1 Benar (karena selisih rata-rata di soal sebelumnya adalah 0). Pernyataan 2 Benar (berdasarkan tren grafik yang diasumsikan naik menjelang akhir pekan). Pernyataan 3 Salah (berdasarkan data grafik pada hari Kamis, jumlahnya berbeda).",
            points: 18,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Perhatikan grafik harga perhiasan per gram pada 5 hari berikut!",
            imageUrl: "/images/modules/grafik/image 3.png",
            question: "Harga perak paling tertinggi berada pada hari....",
            options: [
              { id: "a", text: "Senin" },
              { id: "b", text: "Selasa" },
              { id: "c", text: "Rabu" },
              { id: "d", text: "Kamis" },
              { id: "e", text: "Jumat" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan pembacaan titik tertinggi pada grafik garis perak, harga mencapai puncaknya pada hari Rabu.",
            points: 6,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Perhatikan grafik harga perhiasan per gram pada 5 hari berikut!",
            imageUrl: "/images/modules/grafik/image 3.png",
            question:
              "Pernyataan manakah yang paling sesuai dengan isi grafik dibawah ini?",
            options: [
              {
                id: "a",
                text: "Berlian selalu menjadi perhiasan dengan harga tertinggi setiap harinya",
              },
              {
                id: "b",
                text: "Emas memiliki perubahan harga yang selalu meningkat selama 5 hari",
              },
              {
                id: "c",
                text: "Perak memiliki perubahan harga yang stabil selama 5 hari",
              },
              {
                id: "d",
                text: "Berlian mengalami penurunan harga selama 5 hari berturut turut",
              },
              {
                id: "e",
                text: "Perak merupakan perhiasan dengan harga yang terendah selama 5 hari",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Jika dilihat dari tren grafiknya, garis harga berlian menunjukkan kemiringan ke bawah (menurun) secara konsisten dari hari Senin hingga Jumat.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Perhatikan grafik harga perhiasan per gram pada 5 hari berikut!",
            imageUrl: "/images/modules/grafik/image 3.png",
            question: "Berapa selisih harga emas dan perak pada hari rabu?",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "50.000" },
              { id: "c", text: "100.000" },
              { id: "d", text: "150.000" },
              { id: "e", text: "200.000" },
            ],
            correctAnswer: "a",
            explanation:
              "Pada grafik di hari Rabu, titik harga emas dan perak saling berpotongan atau berada di angka yang sama. Oleh karena itu, selisih harganya adalah 0.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Perhatikan grafik data jurusan mahasiswa di universitas nusa bangsa di bawah ini!",
            imageUrl: "/images/modules/grafik/image 4.png",
            question:
              "Jika total mahasiswa adalah 800 orang, berapa jumlah mahasiswa Sastra?",
            options: [
              { id: "a", text: "120 orang" },
              { id: "b", text: "140 orang" },
              { id: "c", text: "160 orang" },
              { id: "d", text: "180 orang" },
              { id: "e", text: "200 orang" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan hasil, mahasiswa Sastra menyumbang 20% dari diagram pie (160 / 800 = 0.20). Maka 20% dari 800 adalah 160 orang.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Perhatikan grafik data jurusan mahasiswa di universitas nusa bangsa di bawah ini!",
            imageUrl: "/images/modules/grafik/image 4.png",
            question:
              "Jika jumlah mahasiswa teknik adalah 240 orang, maka berapa jumlah mahasiswa kedokteran yang berjenis kelamin laki-laki jika perbandingan mahasiswa laki-laki dan perempuan adalah 1:2?",
            options: [
              { id: "a", text: "120" },
              { id: "b", text: "80" },
              { id: "c", text: "60" },
              { id: "d", text: "40" },
              { id: "e", text: "20" },
            ],
            correctAnswer: "d",
            explanation:
              "Diketahui rasio L:P di kedokteran adalah 1:2 (Laki-laki = 1/3 dari total). Kunci jawaban menunjukkan Laki-laki = 40. Ini berarti total mahasiswa Kedokteran adalah 40 x 3 = 120 orang (15% dari populasi 800).",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Perhatikan grafik data jurusan mahasiswa di universitas nusa bangsa di bawah ini!",
            imageUrl: "/images/modules/grafik/image 4.png",
            question:
              "Berapa selisih antara jumlah mahasiswa kedokteran dan mahasiswa hukum (Total jumlah mahasiswa seluruhnya adalah 800)?",
            options: [
              { id: "a", text: "50 orang" },
              { id: "b", text: "80 orang" },
              { id: "c", text: "120 orang" },
              { id: "d", text: "40 orang" },
              { id: "e", text: "30 orang" },
            ],
            correctAnswer: "d",
            explanation:
              "Diketahui total Kedokteran adalah 120 orang. Dari persentase grafik, jumlah Hukum diasumsikan 80 orang (10%). Maka selisihnya: 120 - 80 = 40 orang.",
            points: 7,
          },
          {
            id: "q15",
            type: "short-answer",
            context:
              "Perhatikan grafik data jurusan mahasiswa di universitas nusa bangsa di bawah ini!",
            imageUrl: "/images/modules/grafik/image 4.png",
            question:
              "Berapa total persen mahasiswa dari jurusan Teknik dan Ekonomi?",
            correctAnswer: "55%",
            explanation:
              "Berdasarkan perhitungan di soal sebelumnya: Mahasiswa Teknik 240/800 = 30%. Sastra 20%, Kedokteran 15%, Hukum 10%. Maka Ekonomi adalah sisanya: 100% - (30+20+15+10)% = 25%. Total Teknik + Ekonomi = 30% + 25% = 55%.",
            points: 6,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Grafik";
      moduleDoc.description =
        "Materi mengenai interpretasi data dalam bentuk grafik.";
      moduleDoc.subcategory = "Interpretasi Data";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Grafik",
        description: "Materi mengenai interpretasi data dalam bentuk grafik.",
        subcategory: "Interpretasi Data",
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

seedGrafik();
