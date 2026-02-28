const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedMaknaKata = async () => {
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
    const targetId = "makna-kata";

    const stepsData = [
      {
        title: "Materi: Makna Kata (Bagian 1)",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang makna kata berdasarkan sifat unsur bahasa (leksikal & gramatikal) dan ada tidaknya makna tambahan (denotatif & konotatif).",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- BAGIAN 1: Berdasarkan Sifat Unsur Bahasa -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Berdasarkan Sifat Unsur Bahasa</h3>

              <!-- Makna Leksikal -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Makna Leksikal</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Makna leksikal adalah makna yang didasarkan pada kata yang sesungguhnya, dapat disebut sebagai <strong>makna sebenarnya</strong>. Kata dengan makna leksikal memiliki sifat tetap yang tidak berhubungan dengan konteks kalimatnya. Makna ini dapat ditemui pada kamus, karena bersifat asli dan tetap, tanpa ada pemaknaan dan interpretasi khusus.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 italic">"<strong>Kakak Budi sedang tidur</strong>." Kalimat ini berarti kakak Budi sedang tidur, alias melakukan tindakan istirahat, sesuai dengan arti kata tidur dalam kamus tanpa ada pemaknaan khusus.</p>
                  </div>
                </div>
              </div>

              <!-- Makna Gramatikal -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Makna Gramatikal</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Makna gramatikal adalah makna yang terbentuk oleh adanya aktivitas gramatikal berupa reduplikasi, modifikasi, afiksasi, atau transformasi wujud kata. Karena adanya aktivitas tersebut, secara garis besar arti dari makna gramatikal <strong>berubah</strong>.
                  </p>

                  <h5 class="text-h5 font-bold text-Secondary-800 mt-0 mb-3">Proses atau Aktivitas Gramatikal:</h5>

                  <!-- Afiksasi -->
                  <div class="bg-Secondary-50 p-4 rounded-lg mb-4">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">1. Afiksasi</p>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">Penambahan imbuhan pada kata dasar. Dalam penambahan imbuhan ini, kata dasar akan memiliki makna yang berbeda.</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Akhiran (sufiks):</strong> kan, lah, an, i. Contoh: <em>ajar → ajaran</em>, memiliki makna hasil atau isi pengajaran.</li>
                      <li><strong>Awalan (prefiks):</strong> ber, di, pe, ter, me. Contoh: <em>sapu → menyapu</em>, memiliki makna proses atau tindakan membersihkan dengan sapu.</li>
                      <li><strong>Sisipan (infiks):</strong> in, el. Contoh: <em>tapak → telapak</em>, memiliki makna menunjukkan bagian yang lebih spesifik dari tapak.</li>
                      <li><strong>Berurutan (simulfiks):</strong> me-i, me-kan, di-kan. Contoh: <em>ambil → mengambilkan</em>, memiliki makna tindakan mengambil sesuatu untuk orang lain.</li>
                      <li><strong>Gabung (konfiks):</strong> ke-an, pe-an, se-nya. Contoh: <em>hitung → perhitungan</em>, memiliki makna hasil dari proses hitung.</li>
                    </ul>
                  </div>

                  <!-- Reduplikasi -->
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">2. Reduplikasi</p>
                    <p class="text-body-l text-Grayscale-700 mt-0 mb-3 text-justify">Proses pengulangan kata dasar sehingga memiliki makna baru.</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Kata ulang berubah bunyi:</strong> warna-warni, gotong-royong, gerak-gerik.</li>
                      <li><strong>Kata ulang sebagian:</strong> berlari-lari, wewangian, bebuahan, rerumputan.</li>
                      <li><strong>Kata ulang berimbuhan:</strong> berbulan-bulan, tarik-menarik, membanding-bandingkan.</li>
                      <li><strong>Kata ulang utuh/penuh:</strong> kata-kata, buku-buku, rumah-rumah.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- BAGIAN 2: Berdasarkan Ada Tidaknya Makna Tambahan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Berdasarkan Ada Tidaknya Makna Tambahan</h3>

              <!-- Makna Denotatif -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Makna Denotatif</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Makna denotatif adalah makna yang bersifat umum atau <strong>makna yang sebenarnya</strong>.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 italic">"<strong>Di sungai itu ada buaya</strong>." Buaya pada kalimat ini memiliki makna sebenarnya, yaitu binatang reptil.</p>
                  </div>
                </div>
              </div>

              <!-- Makna Konotatif -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Makna Konotatif</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Makna konotatif adalah makna kias dengan arti tidak sebenarnya dan berkaitan dengan <strong>nilai rasa</strong>. Makna konotatif dipengaruhi oleh nilai dan norma yang dipegang oleh masyarakat tertentu, sehingga terdapat perbedaan fungsi sosial kata dengan makna yang hampir sama.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 italic">"<strong>Kelakuannya seperti buaya</strong>." Buaya pada kalimat ini memiliki makna konotatif atau makna kias yang merujuk pada simbol kejahatan.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Makna Kata (Bagian 2)",
        type: "reading",
        status: "locked",
        description:
          "Pelajari tentang makna kata berdasarkan gejala kebahasaan, homonim/homofon/homograf, dan perubahan makna.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <!-- BAGIAN 3: Berdasarkan Gejala Kebahasaan -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Berdasarkan Gejala Kebahasaan</h3>

              <!-- Makna Ambigu -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Makna Ambigu</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Secara umum, ambigu diartikan bermakna ganda. Berdasarkan Kamus Besar Bahasa Indonesia (KBBI), ambigu berarti bermakna <strong>lebih dari satu</strong>, sehingga terkadang menimbulkan keraguan atau kekaburan makna.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 italic">"<strong>Dia melihat orang dengan teropong</strong>." Kalimat ini memiliki makna ambigu yang dapat diartikan sebagai "dia menggunakan teropong untuk melihat orang" atau "dia melihat orang yang sedang memegang teropong".</p>
                  </div>
                </div>
              </div>

              <!-- Polisemi -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Polisemi</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Polisemi adalah relasi makna antarkata yang sering digunakan dalam beberapa kalimat atau <strong>konteks yang berbeda</strong>.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh:</p>
                    <p class="text-body-l text-Grayscale-700 mb-0 italic">Kata <em>akar</em> memiliki banyak makna: <strong>1) akar serabut, 2) akar masalah, 3) jiwaku mengakar</strong>.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- BAGIAN 4: Homonim, Homofon, Homograf -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Homonim, Homofon, dan Homograf</h3>

              <!-- Homonim -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Homonim</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Homonim adalah kata yang memiliki <strong>pelafalan dan ejaan sama</strong>, tetapi memiliki arti yang berbeda.
                  </p>
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-body-l">
                      <thead>
                        <tr class="bg-Primary-600 text-Primary-50">
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Arti I</th>
                          <th class="px-4 py-3 text-left text-Primary-50 font-bold">Arti II</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100">
                          <td class="px-4 py-3 font-medium">Langgar</td>
                          <td class="px-4 py-3">Menentang</td>
                          <td class="px-4 py-3">Tempat salat</td>
                        </tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50">
                          <td class="px-4 py-3 font-medium">Tanggal</td>
                          <td class="px-4 py-3">Waktu</td>
                          <td class="px-4 py-3">Lepas</td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3 font-medium">Baku</td>
                          <td class="px-4 py-3">Standar</td>
                          <td class="px-4 py-3">Saling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Homofon -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Homofon</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Homofon adalah kata yang memiliki <strong>pelafalan sama</strong>, tetapi memiliki arti dan ejaan berbeda.
                  </p>
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-body-l">
                      <thead>
                        <tr class="bg-Secondary-600 text-white">
                          <th class="px-4 py-3 text-left text-Secondary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Secondary-50 font-bold">Arti</th>
                          <th class="px-4 py-3 text-left text-Secondary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Secondary-50 font-bold">Arti</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100">
                          <td class="px-4 py-3 font-medium">Masa</td>
                          <td class="px-4 py-3">Waktu</td>
                          <td class="px-4 py-3 font-medium">Massa</td>
                          <td class="px-4 py-3">Sekumpulan orang</td>
                        </tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50">
                          <td class="px-4 py-3 font-medium">Sangsi</td>
                          <td class="px-4 py-3">Bimbang</td>
                          <td class="px-4 py-3 font-medium">Sanksi</td>
                          <td class="px-4 py-3">Hukuman</td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3 font-medium">Bang</td>
                          <td class="px-4 py-3">Kakak laki-laki</td>
                          <td class="px-4 py-3 font-medium">Bank</td>
                          <td class="px-4 py-3">Lembaga keuangan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Homograf -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Homograf</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Homograf adalah kata dengan <strong>ejaan sama</strong>, tetapi memiliki pelafalan dan arti yang berbeda.
                  </p>
                  <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-body-l">
                      <thead>
                        <tr class="bg-Tertiary-600 text-white">
                          <th class="px-4 py-3 text-left text-Tertiary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Tertiary-50 font-bold">Arti</th>
                          <th class="px-4 py-3 text-left text-Tertiary-50 font-bold">Kata</th>
                          <th class="px-4 py-3 text-left text-Tertiary-50 font-bold">Arti</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-Grayscale-100">
                          <td class="px-4 py-3 font-medium">Tahu</td>
                          <td class="px-4 py-3">Paham</td>
                          <td class="px-4 py-3 font-medium">Tahu</td>
                          <td class="px-4 py-3">Makanan</td>
                        </tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50">
                          <td class="px-4 py-3 font-medium">Sedan</td>
                          <td class="px-4 py-3">Isak</td>
                          <td class="px-4 py-3 font-medium">Sedan</td>
                          <td class="px-4 py-3">Jenis mobil</td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3 font-medium">Apel</td>
                          <td class="px-4 py-3">Buah</td>
                          <td class="px-4 py-3 font-medium">Apel</td>
                          <td class="px-4 py-3">Upacara</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- BAGIAN 5: Perubahan Makna -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Perubahan Makna</h3>

              <!-- Meluas -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Meluas</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Mengubah makna menjadi <strong>lebih luas</strong> dibanding makna yang lampau.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><em>Bapak</em>: ayah dari anak (dahulu).</li>
                      <li><em>Bapak</em>: panggilan untuk orang yang lebih tua atau lebih tinggi kedudukannya (sekarang).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Menyempit -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="bg-Secondary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Menyempit</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Mengubah makna menjadi <strong>lebih sempit</strong> dibanding makna yang lampau.
                  </p>
                  <div class="bg-Secondary-50 p-4 rounded-lg">
                    <p class="font-bold text-Secondary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><em>Pendeta</em>: orang berilmu (dahulu).</li>
                      <li><em>Pendeta</em>: pemuka atau pemimpin agama atau jemaah dalam agama Hindu atau Protestan (sekarang).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Amelioratif -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="bg-Tertiary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Amelioratif</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Mengubah makna menjadi <strong>lebih tinggi atau lebih baik nilainya</strong> dibanding makna yang lampau.
                  </p>
                  <div class="bg-Tertiary-50 p-4 rounded-lg">
                    <p class="font-bold text-Tertiary-800 mt-0 mb-2">Contoh: Wanita</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><strong>Makna Lama:</strong> Dulu dianggap merendahkan karena berasal dari kata <em>wanito</em> (Jawa Kuno) yang berarti "yang di bawah pria."</li>
                      <li><strong>Makna Sekarang:</strong> Menjadi sebutan netral dan terhormat untuk perempuan.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Peyoratif -->
              <div class="bg-white rounded-lg shadow-sm border border-Primary-200 overflow-hidden mb-6">
                <div class="bg-Primary-600 px-6 py-3">
                  <h4 class="text-white font-bold text-h4 my-1">Peyoratif</h4>
                </div>
                <div class="p-6">
                  <p class="text-body-l text-Grayscale-700 mt-0 mb-4 text-justify">
                    Mengubah makna menjadi <strong>lebih rendah nilainya</strong> dibanding makna yang lampau.
                  </p>
                  <div class="bg-Primary-50 p-4 rounded-lg">
                    <p class="font-bold text-Primary-800 mt-0 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700 mb-0">
                      <li><em>Bini</em> merupakan peyorasi dari kata <em>istri</em>.</li>
                      <li><em>Beranak</em> merupakan peyorasi dari kata <em>melahirkan</em>.</li>
                      <li><em>Kawin</em> merupakan peyorasi dari kata <em>nikah</em>.</li>
                      <li><em>Babu</em> merupakan peyorasi dari kata <em>pembantu</em>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Makna Kata",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/nIz-qn4xcGk",
        description: "Video pembelajaran tentang makna kata.",
      },
      {
        title: "Video: Latihan Soal Makna Kata",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/pzPCcOIlI5A",
        description: "Video latihan soal mengenai makna kata.",
      },
      {
        title: "Kuis Makna Kata",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Sebanyak tiga dari empat pembaca media cetak mengaku tidak keberatan saat melihat iklan karena iklan adalah salah satu cara untuk mengetahui produk baru.",
            question:
              "Bentuk konfiks ke-an pada kata keberatan terdapat juga pada kalimat....",
            options: [
              {
                id: "a",
                text: "Kita mengakui keberadaan teknologi saat ini sangat penting",
              },
              {
                id: "b",
                text: "Kemauan berkembang menjadi modal utama perusahaan itu",
              },
              {
                id: "c",
                text: "Kita tidak meragukan kemampuan anak bangsa bersaing di dunia internasional",
              },
              {
                id: "d",
                text: "Keadaan rumah sakit di daerah itu sangat memprihatinkan",
              },
              {
                id: "e",
                text: "Para demonstran masih bersemangat walau kepanasan di tengah lapangan",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Konfiks ke-an pada kata 'keberatan' bermakna 'menderita/merasakan sesuatu (berat)'. Makna yang sejalan terdapat pada kata 'kepanasan' (merasakan panas). Sedangkan keberadaan (hal berada), kemauan (hal mau), kemampuan (hal mampu), dan keadaan (hal ada) menyatakan makna 'hal/perihal'.",
            points: 6,
          },
          {
            id: "q2",
            type: "matrix",
            context:
              "Berdasarkan pemahaman tentang makna kata dan sifat unsur bahasa, tentukan apakah pernyataan berikut benar atau salah.",
            question: "Tentukan apakah pernyataan berikut benar atau salah:",
            rows: [
              {
                id: "r1",
                text: "Kata 'bunga' dalam kalimat 'Saya menanam bunga mawar di taman' bermakna denotatif.",
              },
              {
                id: "r2",
                text: "Kata 'bintang' dalam kalimat 'Dia adalah bintang dalam dunia perfilman' bermakna denotatif.",
              },
              {
                id: "r3",
                text: "Kata 'hati' dalam kalimat 'Hati manusia harus dijaga kebersihannya' bermakna konotatif.",
              },
              {
                id: "r4",
                text: "Kata 'meja' dalam kalimat 'Meja kerja ini sudah sangat usang' bermakna denotatif.",
              },
              {
                id: "r5",
                text: "Kata 'panas' dalam kalimat 'Pembahasan dalam rapat itu sangat panas' bermakna konotatif.",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "true",
              r4: "true",
              r5: "true",
            },
            explanation:
              "1. 'Bunga' mawar = denotatif (makna sebenarnya). 2. 'Bintang' film = konotatif (kiasan untuk orang terkenal), jadi pernyataan bahwa itu denotatif adalah SALAH. 3. 'Hati' dijaga kebersihannya = konotatif (sifat/perasaan, bukan organ fisik). 4. 'Meja' usang = denotatif (benda fisik). 5. Pembahasan 'panas' = konotatif (tegang/emosional).",
            points: 6,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Kata 'menteri' dahulu hanya bermakna pembantu raja. Namun, kini maknanya menjadi lebih luas, yaitu pejabat tinggi negara.",
            question: "Perubahan makna ini termasuk jenis perubahan....",
            options: [
              { id: "a", text: "Spesialisasi" },
              { id: "b", text: "Amelioratif" },
              { id: "c", text: "Peyoratif" },
              { id: "d", text: "Generalisasi" },
              { id: "e", text: "Sinestesia" },
            ],
            correctAnswer: "d",
            explanation:
              "Generalisasi (perluasan makna) adalah proses perubahan makna kata dari yang tadinya sempit/khusus menjadi lebih luas/umum.",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "(1) Industri fesyen kini telah mengalami perkembangan yang sangat cepat... (2) Sekarang, industri fesyen rutin mengeluarkan model busana terbaru... (3) Perkembangan tersebut akhirnya melahirkan industri fast fashion... (4) Sayangnya, produksi fast fashion yang murah dan cepat itu hadir dengan banyak sisi gelap yang tersembunyi, salah satunya yang berkaitan dengan hak asasi manusia. (5) Selama beberapa tahun belakangan, industri fesyen sering dikaitkan dengan kondisi pekerja garmen... (6) Sebagaimana dilansir dari Global Citizen...",
            question:
              "Perumpamaan dalam teks tersebut terdapat pada kalimat ….",
            options: [
              { id: "a", text: "Kalimat 3" },
              { id: "b", text: "Kalimat 5" },
              { id: "c", text: "Kalimat 4" },
              { id: "d", text: "Kalimat 7" },
              { id: "e", text: "Kalimat 2" },
            ],
            correctAnswer: "c",
            explanation:
              "Pada kalimat 4 terdapat frasa 'sisi gelap yang tersembunyi'. Frasa ini merupakan majas/perumpamaan (metafora) untuk menggambarkan aspek-aspek negatif, buruk, atau melanggar hukum (seperti pelanggaran HAM), bukan gelap dalam arti kurang cahaya secara fisik.",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "(8) Pada dasarnya, kalangan tertentu tersebut tidak sepenuhnya menolak pembangunan tol laut. (9) Penolakan mereka sebenarnya didasarkan pada beberapa kekhawatiran, seperti hanya akan digunakannya tol laut untuk kampanye para elite politik.",
            question:
              "Makna kata 'elite' pada kalimat (9) teks tersebut adalah ....",
            options: [
              {
                id: "a",
                text: "Kelompok kecil orang-orang terpandang",
              },
              {
                id: "b",
                text: "Anggota kelompok yang sering berfoya-foya",
              },
              {
                id: "c",
                text: "Segolongan orang dengan kemampuan khusus",
              },
              {
                id: "d",
                text: "Anggota kelompok yang memiliki sifat paling licik",
              },
              {
                id: "e",
                text: "Kumpulan orang yang memiliki barang-barang mewah",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Menurut KBBI, 'elite' bermakna orang-orang terbaik atau pilihan dalam suatu kelompok; kelompok kecil orang-orang terpandang atau berderajat tinggi (karena kedudukan, kekayaan, dsb.).",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "(6) Rumput laut tersebut juga bisa menjadi sumber makanan penting bagi banyak hewan dan ikan, termasuk orang-orang yang tinggal di pesisir selama berabad-abad.",
            question:
              "Makna kata pesisir pada kalimat (6) yang tepat adalah ....",
            options: [
              {
                id: "a",
                text: "Tanah (daratan) yang dikelilingi air",
              },
              {
                id: "b",
                text: "Tanah datar berpasir di pantai (di tepi laut)",
              },
              {
                id: "c",
                text: "Tanah (ujung) yang menjorok ke laut",
              },
              {
                id: "d",
                text: "Tanah atau daerah yang berbatasan dengan laut",
              },
              {
                id: "e",
                text: "Tanah yang rendah (umumnya ada di pantai) dan digenangi air",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan KBBI, makna kata 'pesisir' adalah tanah datar berpasir di pantai (di tepi laut). Opsi D (daerah yang berbatasan dengan laut) adalah definisi 'pantai', bukan spesifik 'pesisir'.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Teks tentang survei Nielsen Consumer & Media View mengenai penetrasi media cetak dan kebiasaan pembacanya.",
            question:
              "Pemakaian kata berimbuhan yang tidak sesuai dalam bacaan tersebut terdapat pada kata.....",
            options: [
              { id: "a", text: "Merajai" },
              { id: "b", text: "Perbankan" },
              { id: "c", text: "Keadaan" },
              { id: "d", text: "Dikonsumsi" },
              { id: "e", text: "Mengaku" },
            ],
            correctAnswer: "c",
            explanation:
              "Dalam kalimat '...sehingga keadaan koran sebagai media beriklan sangat penting...', kata 'keadaan' kurang tepat konteksnya. Kata yang lebih tepat untuk menunjukkan posisi atau peran koran adalah 'keberadaan' atau 'eksistensi'.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Teks tentang survei Nielsen Consumer & Media View mengenai penetrasi media cetak dan kebiasaan pembacanya.",
            question:
              "Proses afiksasi yang TIDAK sesuai dengan kaidah tata bahasa dalam bacaan tersebut terdapat pada kata....",
            options: [
              { id: "a", text: "Mewawancara" },
              { id: "b", text: "Perbankan" },
              { id: "c", text: "Dikonsumsi" },
              { id: "d", text: "Produktif" },
              { id: "e", text: "Keberatan" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'mewawancara' berasal dari kata dasar 'wawancara' + awalan 'me-'. Karena awalan me- bertemu dengan huruf 'w', tidak terjadi peluluhan. Namun, kata bentukan yang baku dalam bahasa Indonesia yang bermakna melakukan wawancara adalah 'mewawancarai' (menggunakan sufiks -i).",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Perhatikan kalimat berikut: 'Persatuan dan kesatuan bangsa harus dipupuk secara terus menerus.'",
            question:
              "Makna imbuhan per-an pada kata persatuan tidak bermakna sama dengan per-an pada kalimat….",
            options: [
              {
                id: "a",
                text: "Perbuatan yang tidak terpuji akan merusak citra pribadi",
              },
              {
                id: "b",
                text: "Para siswa menunjukkan perhatian yang tinggi",
              },
              {
                id: "c",
                text: "Kami akan menyelenggarakan pertemuan ahli tanah se-Indonesia",
              },
              {
                id: "d",
                text: "Perbedaan pendapat bukan berarti adanya perpecahan",
              },
              {
                id: "e",
                text: "Persaingan kualitas sangat menguntungkan konsumen",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'persatuan' (dari kata dasar satu) bermakna 'hal/hasil bersatu'. Pilihan A (perbuatan), B (perhatian), C (pertemuan), dan E (persaingan) juga bermakna 'hal/hasil/proses'. Namun pada pilihan D, kata 'perpecahan' lebih condong bermakna 'keadaan' pecah atau 'akibat' dari memecah.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Penggunaan kata berimbuhan yang tepat terdapat dalam kalimat berikut.",
            question:
              "Penggunaan kata berimbuhan yang tepat terdapat dalam kalimat....",
            options: [
              {
                id: "a",
                text: "Untuk menata kembali koleksi dan administrasi, dibutuhkan program kegiatan penyiangan",
              },
              {
                id: "b",
                text: "Dalam kegiatan tersebut dilakukan penghitungan koleksi untuk mengetahui jumlah keseluruhan koleksi yang ada",
              },
              {
                id: "c",
                text: "Selain itu, dilakukan pula perbaikan atas koleksi yang rusak agar dapat dimanfaatkan lagi",
              },
              {
                id: "d",
                text: "Indonesia membutuhkan revolusi kebijakan investasi untuk mendukung strategi penumbuhan ekonomi",
              },
              {
                id: "e",
                text: "Sudah ada upaya penanaman tetapi hasilnya belum sesuai dengan harapan",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Pada opsi C, kata 'perbaikan' sangat tepat konteksnya untuk subjek 'koleksi yang rusak'. Pada opsi lain, kata berimbuhannya sering kali janggal konteksnya (misal: 'penyiangan' koleksi, 'penumbuhan' ekonomi seharusnya 'pertumbuhan').",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Sejumlah relawan di Kecamatan Balung, Kabupaten Jember, Jawa Timur, menggelar kegiatan peduli lingkungan untuk menyelamatkan ekosistem sungai di wilayah tersebut.",
            question: "Makna istilah ekosistem pada teks tersebut adalah…",
            options: [
              { id: "a", text: "Keanekaragaman" },
              {
                id: "b",
                text: "Hubungan timbal balik yang saling menguntungkan",
              },
              { id: "c", text: "Jenis biota laut" },
              { id: "d", text: "Tempat tinggal" },
              { id: "e", text: "Kawasan" },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan KBBI, ekosistem adalah keanekaragaman suatu komunitas dan lingkungannya yang berfungsi sebagai suatu satuan ekologi dalam alam; sistem timbal balik antara makhluk hidup dan lingkungannya.",
            points: 7,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Untuk mengubah cara pandang masyarakat, diperlukan paradigma baru yang lebih relevan dengan perkembangan zaman.",
            question:
              "Kata paradigma dalam kalimat berikut paling tepat bermakna:",
            options: [
              { id: "a", text: "Pola pikir" },
              { id: "b", text: "Konsep dasar" },
              { id: "c", text: "Anggapan umum" },
              { id: "d", text: "Hipotesis" },
              { id: "e", text: "Ide utama" },
            ],
            correctAnswer: "a",
            explanation:
              "Dalam konteks kalimat tersebut, 'paradigma' bermakna kerangka berpikir atau pola pikir (mindset) yang memengaruhi cara pandang seseorang/masyarakat terhadap suatu fenomena.",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Pemerintah harus melakukan akomodasi terhadap kebutuhan masyarakat marginal.",
            question: "Makna kata akomodasi dalam kalimat berikut adalah:",
            options: [
              { id: "a", text: "Penyelesaian konflik" },
              { id: "b", text: "Penyediaan tempat tinggal" },
              { id: "c", text: "Penyesuaian kebutuhan" },
              { id: "d", text: "Pemberian fasilitas" },
              { id: "e", text: "Perjanjian bersama" },
            ],
            correctAnswer: "c",
            explanation:
              "Meskipun 'akomodasi' sering diartikan sebagai tempat menginap, dalam konteks sosial/kebijakan (mengakomodasi kebutuhan), maknanya adalah penyesuaian (adaptation) untuk memenuhi atau menampung kebutuhan pihak tertentu.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Emansipasi perempuan harus terus didorong untuk menciptakan kesetaraan gender.",
            question: "Makna kata emansipasi dalam kalimat berikut adalah:",
            options: [
              { id: "a", text: "Kebebasan dari penindasan" },
              { id: "b", text: "Kesetaraan hak" },
              { id: "c", text: "Penolakan diskriminasi" },
              { id: "d", text: "Peningkatan kualitas" },
              { id: "e", text: "Pemberdayaan sosial" },
            ],
            correctAnswer: "b",
            explanation:
              "Berdasarkan KBBI, emansipasi adalah pembebasan dari perbudakan; atau persamaan hak dalam berbagai aspek kehidupan masyarakat (seperti persamaan hak kaum wanita dengan kaum pria). Dalam konteks kesetaraan gender, maknanya adalah kesetaraan hak.",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Pemimpin yang memiliki integritas tinggi akan selalu dipercaya oleh rakyat.",
            question: "Makna kata integritas dalam kalimat berikut adalah:",
            options: [
              { id: "a", text: "Kejujuran" },
              { id: "b", text: "Kesungguhan" },
              { id: "c", text: "Kepribadian" },
              { id: "d", text: "Kewibawaan" },
              { id: "e", text: "Ketegasan" },
            ],
            correctAnswer: "a",
            explanation:
              "Integritas bermakna mutu, sifat, atau keadaan yang menunjukkan kesatuan yang utuh sehingga memiliki potensi dan kemampuan yang memancarkan kewibawaan; secara kontekstual dalam kepemimpinan, integritas sangat erat kaitannya dengan kejujuran, moralitas, dan konsistensi tindakan dengan nilai-nilai.",
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
      moduleDoc.name = "Makna Kata";
      moduleDoc.description =
        "Materi mengenai makna kata berdasarkan sifat unsur bahasa, makna tambahan, gejala kebahasaan, homonim/homofon/homograf, dan perubahan makna.";
      moduleDoc.subcategory = "Kata";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Makna Kata",
        description:
          "Materi mengenai makna kata berdasarkan sifat unsur bahasa, makna tambahan, gejala kebahasaan, homonim/homofon/homograf, dan perubahan makna.",
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

seedMaknaKata();
