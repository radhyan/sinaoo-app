const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedMaknaKonjungsi = async () => {
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

    const targetId = "makna-konjungsi-antarkalimat";

    const stepsData = [
      {
        title: "Materi: Definisi dan Konjungsi Intrakalimat",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian konjungsi, serta jenis-jenis konjungsi intrakalimat (koordinatif dan subordinatif).",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu konjungsi?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                <span class="font-bold">Konjungsi</span> merupakan kata hubung yang menghubungkan dua atau lebih kata/unsur, frasa, atau klausa dalam sebuah kalimat yang sama.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis-jenis konjungsi</h3>

              <div class="space-y-6">
                
                <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                  <h4 class="text-h4 font-bold text-Primary-800 mb-3 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Konjungsi intrakalimat
                  </h4>
                  <p class="text-body-l text-Grayscale-900 mb-4">
                    Konjungsi intrakalimat digunakan untuk menghubungkan unsur-unsur (baik kata kerja, kata sifat, kata benda, maupun kata lainnya) yang berada <strong>dalam satu kalimat yang sama</strong>.
                  </p>
                  
                  <p class="text-body-l font-bold text-Grayscale-900 mb-4">Konjungsi intrakalimat terbagi atas :</p>

                  <div class="space-y-6 pl-2 md:pl-4 border-l-2 border-Secondary-300">
                    
                    <div>
                      <h5 class="text-h5 font-bold text-Primary-700 mb-2">1. Konjungsi koordinatif (setara)</h5>
                      <p class="text-body-l text-Grayscale-900 mb-3">
                        Konjungsi koordinatif berfungsi untuk menghubungkan 2 unsur yang setara.
                      </p>
                      <p class="text-body-l font-bold text-Grayscale-900 mb-2">Terdiri dari :</p>
                      <ul class="list-disc pl-5 space-y-2 mb-4 text-body-l text-Grayscale-900">
                        <li><strong>Konjungsi penambahan :</strong> <span class="text-red-600 font-bold">Dan, serta</span></li>
                        <li><strong>Konjungsi hubungan :</strong> <span class="text-red-600 font-bold">Atau</span></li>
                        <li><strong>Konjungsi pertentangan :</strong> <span class="text-red-600 font-bold">Sedangkan, padahal</span></li>
                      </ul>
                      <div class="bg-Grayscale-50 p-4 rounded-lg text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300">
                        <span class="font-bold block mb-2">Contoh:</span>
                        <ul class="list-disc pl-5 space-y-1">
                          <li>Dia membeli tas <span class="text-red-600 font-bold">serta</span> sepatu.</li>
                          <li>Apakah kau ingin lulus tes SNBT <span class="text-red-600 font-bold">atau</span> tes mandiri?</li>
                          <li>Ibu sedang pergi, <span class="text-red-600 font-bold">sedangkan</span> ayah tidur di rumah.</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h5 class="text-h5 font-bold text-Primary-700 mb-2">2. Konjungsi bertingkat/subordinatif</h5>
                      <p class="text-body-l text-Grayscale-900 mb-3">
                        Konjungsi subordinatif berfungsi untuk membentuk kalimat kompleks dengan menghubungkan klausa yang saling bergantung satu sama lain.
                      </p>
                      <div class="bg-red-50 text-red-800 p-3 rounded mb-4 text-body-l border border-red-200">
                        <span class="font-bold">Aturan penulisan:</span> <span class="text-red-600 font-bold">Tidak boleh ditulis di awal kalimat</span>
                      </div>
                      <p class="text-body-l font-bold text-Grayscale-900 mb-2">Terdiri atas :</p>
                      <ul class="list-disc pl-5 space-y-2 mb-4 text-body-l text-Grayscale-900">
                        <li><strong>Konjungsi hubungan waktu :</strong> <span class="text-red-600 font-bold">Ketika, setelah, sebelum, sesudah.</span></li>
                        <li><strong>Konjungsi syarat :</strong> <span class="text-red-600 font-bold">Jika, kalau, apabila.</span></li>
                        <li><strong>Konjungsi keterangan sebab :</strong> <span class="text-red-600 font-bold">Karena, sebab</span></li>
                        <li><strong>Konjungsi keterangan tujuan :</strong> <span class="text-red-600 font-bold">Agar, supaya</span></li>
                        <li><strong>Konjungsi komplementasi/penjelasan :</strong> <span class="text-red-600 font-bold">Bahwa</span></li>
                      </ul>
                      <div class="bg-Grayscale-50 p-4 rounded-lg text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300">
                        <span class="font-bold block mb-2">Contoh:</span>
                        <ul class="list-disc pl-5 space-y-1">
                          <li>Kita harus rajin belajar supaya lulus tes SNBT.</li>
                          <li>Aku senang karena lulus tes SNBT.</li>
                          <li>Ibu memasak ketika aku sedang tidur.</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Materi: Konjungsi Korelatif",
        type: "reading",
        status: "locked",
        description:
          "Pelajari tentang konjungsi korelatif (berpasangan) dan penggunaannya secara tepat.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">3. Konjungsi korelatif (berpasangan)</h3>
              
              <div class="mb-6">
                <p class="text-body-l text-Grayscale-900 mb-4 leading-relaxed">
                  Konjungsi korelatif berfungsi untuk menghubungkan dua unsur yang memiliki hubungan saling bergantung atau saling melengkapi.
                </p>
                <div class="bg-red-50 text-red-800 p-4 rounded-lg mb-6 text-body-l border border-red-200 flex flex-col gap-2">
                  <p class="m-0"><span class="font-bold">Aturan penulisan:</span> <span class="text-red-600 font-bold">Selalu ditulis berpasangan dalam suatu kalimat.</span></p>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-4">Terdiri dari :</h5>
                  <ul class="list-disc pl-5 space-y-2 text-body-l font-bold text-red-600 mb-6">
                    <li>Tidak ... tetapi ...</li>
                    <li>Tidak hanya ... tetapi juga ...</li>
                    <li>bukan ... melainkan ...</li>
                    <li>Bukan hanya ... melainkan juga ...</li>
                    <li>Baik ... maupun ...</li>
                    <li>Entah ... entah ...</li>
                    <li>Apa(kah) ... atau ...</li>
                    <li>Mulai dari ... hingga ...</li>
                  </ul>
                  
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-3">Contoh :</h5>
                  <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-900">
                    <li><span class="text-red-600 font-bold">Baik</span> laki-laki <span class="text-red-600 font-bold">maupun</span> perempuan wajib untuk belajar dengan giat.</li>
                    <li>Dinda <span class="text-red-600 font-bold">tidak hanya</span> rajin <span class="text-red-600 font-bold">tetapi</span> juga pintar</li>
                    <li>Krim ini dioleskan di seluruh bagian tubuh <span class="text-red-600 font-bold">mulai dari</span> telapak kaki <span class="text-red-600 font-bold">hingga</span> telapak tangan.</li>
                  </ul>
                </div>
              </div>

              <div class="bg-Primary-50 rounded-lg p-6 border-l-4 border-Primary-500 overflow-x-auto">
                <h5 class="text-h5 font-bold text-Primary-800 mb-4 text-center">Tabel Rangkuman Konjungsi Berpasangan & Tunggal</h5>
                <table class="w-full min-w-max border-collapse border border-Primary-200 text-body-l text-Grayscale-900 bg-white">
                  <thead>
                    <tr class="bg-Primary-600 text-white text-center">
                      <th class="border border-Primary-200 p-3 font-bold w-1/3">Konjungsi koordinatif</th>
                      <th class="border border-Primary-200 p-3 font-bold w-1/3">Konjungsi subordinatif</th>
                      <th class="border border-Primary-200 p-3 font-bold w-1/3">Konjungsi korelatif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-Primary-200 p-3 align-top text-center">
                        <ul class="list-none p-0 m-0 space-y-1 text-Primary-700">
                          <li>Dan</li>
                          <li>Atau</li>
                          <li>Melainkan</li>
                          <li>Padahal</li>
                          <li>Sedangkan</li>
                          <li>Serta</li>
                          <li>Tetapi</li>
                        </ul>
                      </td>
                      <td class="border border-Primary-200 p-3 align-top text-center">
                        <ul class="list-none p-0 m-0 space-y-1 text-Primary-700">
                          <li>Sejak</li>
                          <li>Sedari</li>
                          <li>Semenjak</li>
                          <li>Setelah</li>
                          <li>Sebelum</li>
                          <li>Sehabis</li>
                          <li>Selesai</li>
                          <li>Sesudah</li>
                          <li>Seusai</li>
                          <li>Hingga</li>
                          <li>Sampai</li>
                          <li>Apabila</li>
                          <li>Asalkan</li>
                          <li>Jika</li>
                          <li>Asalkan</li>
                          <li>Jikalau</li>
                          <li>Kalau</li>
                          <li>Manakala</li>
                          <li>andaikan</li>
                          <li>Seandainya</li>
                          <li>Sekiranya</li>
                          <li>Seumpamanya</li>
                          <li>andai kata</li>
                          <li>Untuk</li>
                          <li>Supaya</li>
                          <li>Agar</li>
                          <li>Biar</li>
                          <li>Walaupun</li>
                        </ul>
                      </td>
                      <td class="border border-Primary-200 p-3 align-top text-center text-Primary-700">
                        <ul class="list-none p-0 m-0 space-y-3">
                          <li>baik ... maupun ...</li>
                          <li>tidak hanya ... tetapi juga ...</li>
                          <li>bukan hanya ... melainkan juga ...</li>
                          <li>demikian ... sehingga</li>
                          <li>sedemikian rupa ... sehingga ...</li>
                          <li>apa(kah) ... atau ...</li>
                          <li>entah ... entah ...</li>
                          <li>jangankan ... pun ...</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>

          </div>
        `,
      },
      {
        title: "Materi: Konjungsi Antarkalimat & Tips",
        type: "reading",
        status: "locked",
        description:
          "Pahami penggunaan konjungsi antarkalimat dan kuasai cara cepat untuk mengingat aturan tanda koma.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Konjungsi antarkalimat</h3>
              <p class="text-body-l text-Grayscale-900 mb-6 leading-relaxed">
                Konjungsi antarkalimat berfungsi untuk menghubungkan <strong>dua kalimat berbeda yang terpisah</strong> sehingga menghasilkan suatu hubungan yang jelas.
              </p>

              <div class="bg-red-50 text-red-800 p-4 rounded-lg mb-6 text-body-l border border-red-200">
                <span class="font-bold block mb-2">Aturan penulisan:</span>
                <ul class="list-disc pl-5 space-y-1 text-red-600 font-bold">
                  <li>Diikuti tanda koma setelahnya.</li>
                  <li>Letaknya di awal kalimat</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <h5 class="text-h5 font-bold text-Secondary-800 mb-4">Terdiri dari :</h5>
                  <ul class="list-disc pl-5 space-y-3 mb-6 text-body-l text-Grayscale-900">
                    <li><strong class="text-Grayscale-900">Konjungsi Penegasan :</strong> <span class="text-red-600 font-bold">biarpun begitu, sekalipun demikian, walaupun demikian, meskipun demikian</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Perurutan :</strong> <span class="text-red-600 font-bold">sesudah itu, setelah itu, sebelum itu, selanjutnya.</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Pertambahan :</strong> <span class="text-red-600 font-bold">tambahan pula, lagi pula, selain itu</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Pertentangan :</strong> <span class="text-red-600 font-bold">sebaliknya, namun, akan tetapi, di sisi lain</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Pembenaran :</strong> <span class="text-red-600 font-bold">sejatinya, sebenarnya, sesungguhnya, bahwasanya</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Penguatan :</strong> <span class="text-red-600 font-bold">bahkan, malah/malahan</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Pembatasan :</strong> <span class="text-red-600 font-bold">kecuali itu</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Simpulan :</strong> <span class="text-red-600 font-bold">dengan demikian, maka dari itu, akhirnya</span></li>
                    <li><strong class="text-Grayscale-900">Konjungsi Konsekuensi atau Sebab :</strong> <span class="text-red-600 font-bold">akhirnya, oleh sebab itu, oleh karena itu</span></li>
                  </ul>
                  
                  <div class="bg-Grayscale-50 p-4 rounded-lg text-body-l text-Grayscale-800 border-l-4 border-Grayscale-300">
                    <span class="font-bold block mb-2 text-Grayscale-900">Contoh:</span>
                    <ul class="list-disc pl-5 space-y-1">
                      <li><span class="text-red-600 font-bold">Akan tetapi</span>, reboisasi masih tak berjalan dengan baik.</li>
                      <li><span class="text-red-600 font-bold">Oleh sebab itu</span>, sangat penting untuk belajar agar lulus tes SNBT.</li>
                      <li><span class="text-red-600 font-bold">Setelah itu</span>, tambahkan 2 sendok makan minyak goreng.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </section>

            <section>
              <div class="bg-gradient-to-br from-Primary-50 to-blue-50 rounded-xl p-6 md:p-8 border border-Primary-200">
                <h3 class="text-h3 font-heading text-Primary-800 mb-4 flex items-center gap-3">
                  Tips Mengingat Tanda Koma!
                </h3>
                <p class="text-body-l text-Grayscale-800 mb-6">
                  Bagaimana sih cara cepat untuk mengingat konjungsi apa saja yang didahului dan tidak didahului dengan tanda koma? <br/>
                  <span class="text-body-md text-Grayscale-600 italic mt-1 block">(Ini hanya beberapa yang sangat sering keluar di soal SNBT saja ya, untuk sisanya boleh dibaca-baca saja)</span>
                </p>

                <div class="space-y-6">
                  <div class="bg-white p-5 rounded-lg border border-red-200">
                    <h5 class="flex items-center gap-2 font-bold text-red-600 text-h5 mb-2">
                      <span class="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                      Konjungsi yang TIDAK didahului tanda koma.
                    </h5>
                    <div class="pl-4">
                      <p class="text-h4 font-heading text-Primary-600 mb-1">"ABAH SUKA MANGGA"</p>
                      <p class="text-body-l text-Grayscale-800">(Agar, bahwa, supaya, maka, karena, sehingga)</p>
                    </div>
                  </div>

                  <div class="bg-white p-5 rounded-lg border border-red-200">
                    <h5 class="flex items-center gap-2 font-bold text-red-600 text-h5 mb-2">
                      <span class="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                      Konjungsi yang DIAWALI dengan tanda koma.
                    </h5>
                    <div class="pl-4">
                      <p class="text-h4 font-heading text-Primary-600 mb-1">"SBMPTN"</p>
                      <p class="text-body-l text-Grayscale-800">(Sedangkan, bahkan, melainkan, padahal, tetapi, namun)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Definisi dan Konjungsi Intrakalimat",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/qFAtK5upkqY",
        description:
          "Video penjelasan mengenai penggunaan konjungsi intrakalimat (koordinatif dan subordinatif) yang tepat.",
      },
      {
        title: "Video: Konjungsi Korelatif dan Antarkalimat",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/pjupjkuNd1M",
        description:
          "Lanjutan materi mengenai konjungsi yang berpasangan dan konjungsi yang letaknya di awal kalimat baru.",
      },
      {
        title: "Kuis Konjungsi Antarkalimat",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "matrix",
            question:
              "Tentukan apakah penulisan konjungsi di bawah ini Benar atau Salah!",
            rows: [
              { id: "r1", text: "Dia membeli bakso serta mie ayam" },
              {
                id: "r2",
                text: "Adik sedang bermain, sedangkan kakak sedang belajar",
              },
              {
                id: "r3",
                text: "Bahwa hal itu benar adanya, itu sebabnya Pak Dirman tak terima",
              },
              {
                id: "r4",
                text: "Jika ia lulus tes SNBT, ibu akan membelikannya gawai baru",
              },
              {
                id: "r5",
                text: "Agar terhindar dari masalah, peraturan ini dibuat secara ketat",
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
              r4: "false",
              r5: "false",
            },
            explanation:
              "Konjungsi 'Bahwa', 'Jika', dan 'Agar' merupakan konjungsi subordinatif intrakalimat, sehingga aturan penulisannya adalah TIDAK BOLEH ditulis di awal kalimat. Oleh sebab itu, kalimat nomor 3, 4, dan 5 merupakan tata kalimat yang salah.",
            points: 5,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Penilaian yang saya berikan kepada murid-murid saya ...... tentang akademik tetapi juga perilaku mereka selama di kelas. Hal ini berlaku untuk semua jenjang kelas baik kelas sepuluh maupun kelas dua belas.",
            question:
              "Lengkapi bagian yang rumpang dengan konjungsi yang tepat!",
            options: [
              { id: "a", text: "tidak hanya" },
              { id: "b", text: "bukan hanya" },
              { id: "c", text: "baik" },
              { id: "d", text: "entah" },
              { id: "e", text: "maupun" },
            ],
            correctAnswer: "a",
            explanation:
              "Terdapat konjungsi 'tetapi juga' setelah kalimat rumpang. Pasangan yang tepat untuk membentuk konjungsi korelatif (berpasangan) bersama 'tetapi juga' adalah 'tidak hanya'.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Tapi tidak bisa dipungkiri, siswa yang tidak disiplin adalah masalah utama di sekolah ini.",
            question: "Perbaikan yang tepat untuk kalimat di atas adalah....",
            options: [
              { id: "a", text: "Menghilangkan tanda koma" },
              { id: "b", text: 'Menghilangkan kata "yang"' },
              { id: "c", text: 'Mengubah "di" menjadi "pada"' },
              { id: "d", text: 'Mengubah "tapi" menjadi "akan tetapi"' },
              { id: "e", text: 'Menghilangkan kata "adalah"' },
            ],
            correctAnswer: "d",
            explanation:
              "Kata 'tapi/tetapi' merupakan konjungsi intrakalimat, sehingga tidak boleh berada di awal kalimat. Kata ganti yang tepat untuk membuka kalimat pertentangan di awal di sini adalah konjungsi antarkalimat 'Akan tetapi'.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Belajar merupakan kewajiban setiap murid baik laki-laki ....... perempuan",
            question:
              "Lengkapi kalimat rumpang tersebut dengan konjungsi yang tepat!",
            options: [
              { id: "a", text: "dan" },
              { id: "b", text: "serta" },
              { id: "c", text: "atau" },
              { id: "d", text: "maupun" },
              { id: "e", text: "melainkan" },
            ],
            correctAnswer: "d",
            explanation:
              "Konjungsi korelatif 'baik' selalu berpasangan dengan kata 'maupun' dalam sebuah kalimat yang sama.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Karena jadwal ujian yang cukup padat, Rini jatuh sakit dan dirawat di rumah sakit.",
            question:
              "Kalimat di atas terdapat kesalahan dalam penulisannya, kalimat di atas dapat diperbaiki menjadi....",
            options: [
              {
                id: "a",
                text: "Rini jatuh sakit dan dirawat di rumah sakit karena jadwal ujian yang cukup padat",
              },
              {
                id: "b",
                text: "Karena jadwal ujian cukup padat, Rini jatuh sakit dan dirawat di rumah sakit",
              },
              {
                id: "c",
                text: "Karena jadwal ujian yang cukup padat Rini jatuh sakit dan dirawat di rumah sakit",
              },
              {
                id: "d",
                text: "Jadwal ujian cukup padat Rini, jatuh dan dirawat di rumah sakit",
              },
              {
                id: "e",
                text: "Karena jadwal ujian padat, Rini jatuh sakit dan dirawat di rumah sakit",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'karena' merupakan kelompok konjungsi subordinatif, maknanya konjungsi ini tidak boleh mengawali dan memisahkan antar induk dan anak kalimat. Jadi kalimat perlu dibalik (SPOK) meletakkan 'karena' di tengah kalimat intrakalimat.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "Jika kakak pergi ke museum, adik tidur di rumah",
            question: "Kesalahan pada kalimat di atas terdapat pada...",
            options: [
              { id: "a", text: 'Penggunaan konjungsi "jika"' },
              { id: "b", text: 'Penggunaan preposisi "ke"' },
              { id: "c", text: 'Penggunaan preposisi "di"' },
              { id: "d", text: 'Penggunaan verba "pergi"' },
              { id: "e", text: "Tidak ada kesalahan dalam penulisan kalimat" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'jika' juga termasuk pada konjungsi subordinatif, sehingga tidak boleh ditulis di awal kalimat. Penggunaannya harusnya di tengah untuk merangkai dua frasa.",
            points: 7,
          },
          {
            id: 7,
            type: "matrix",
            question:
              "Tentukan apakah kalimat di bawah ini BENAR atau SALAH atas penggunaan konjungsinya!",
            rows: [
              { id: "r1", text: "Akan tetapi, ia tetap berusaha belajar" },
              {
                id: "r2",
                text: "Baik laki-laki dan perempuan, harus pandai Matematika",
              },
              { id: "r3", text: "Dinda tidak hanya cerdas, tetapi juga ramah" },
              {
                id: "r4",
                text: "Soal ini disusun sedemikian rupa jadi semua dapat belajar dengan baik",
              },
              {
                id: "r5",
                text: "Aku tidak tahu masalahnya entah yang pertama entah yang kedua",
              },
            ],
            columns: [
              { id: "true", text: "BENAR" },
              { id: "false", text: "SALAH" },
            ],
            correctAnswers: {
              r1: "true",
              r2: "false",
              r3: "true",
              r4: "false",
              r5: "true",
            },
            explanation:
              "Row 2 SALAH karena 'baik' harus berpasangan dengan 'maupun' (bukan dan). Row 4 SALAH karena 'sedemikian rupa' harus berpasangan dengan 'sehingga'.",
            points: 5,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "Agar lulus SNBT, kita harus rajin belajar",
            question: "Perbaikan yang tepat untuk kalimat di atas adalah...",
            options: [
              { id: "a", text: "Kita harus rajin belajar agar lulus SNBT" },
              { id: "b", text: "Agar lulus SNBT kita harus rajin belajar" },
              { id: "c", text: "Agar lulus SNBT kita harus, rajin belajar" },
              { id: "d", text: "Kita harus rajin belajar, agar lulus SNBT" },
              { id: "e", text: "Agar lulus SNBT kita, harus rajin belajar" },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'Agar' termasuk konjungsi subordinatif dan aturan penulisannya adalah tidak boleh ditulis di awal kalimat. Sehingga struktur awalannya harus dibalik dan meletakkan 'agar' di antara induk dan anak klausa.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "Apabila adik menangis, ibu akan marah",
            question:
              "Kesalahan dalam penulisan kalimat di atas terletak pada...",
            options: [
              { id: "a", text: 'Penggunaan kata "apabila"' },
              { id: "b", text: 'Penggunaan kata "akan"' },
              { id: "c", text: "Penggunaan tanda koma" },
              { id: "d", text: "Penggunaan huruf kapital" },
              { id: "e", text: "Tidak ada kesalahan penulisan" },
            ],
            correctAnswer: "a",
            explanation:
              "Sama sifatnya dengan kata 'jika', konjungsi syarat berupa 'apabila' (subordinatif) tidak boleh dipakai untuk mengawali kalimat menurut PUEBI.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Jika aku belajar dengan sangat giat, aku akan dinyatakan lulus ke Universitas Indonesia",
            question:
              "Kesalahan penggunaan konjungsi pada kalimat di atas terletak pada kata...",
            options: [
              { id: "a", text: "Dengan" },
              { id: "b", text: "Jika" },
              { id: "c", text: "Ke" },
              { id: "d", text: "Akan" },
              { id: "e", text: "Dinyatakan" },
            ],
            correctAnswer: "b",
            explanation:
              "Sebab kata 'Jika' adalah konjungsi bertingkat (subordinatif), maka kata ini tidak boleh berada di awal kalimat.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Aku pusing mendengar tangisan adik, tapi aku juga tidak tahu apa yang harus aku lakukan agar ia berhenti menangis",
            question: "Kesalahan pada kalimat di atas terdapat pada......",
            options: [
              { id: "a", text: "Penggunaan tanda koma" },
              { id: "b", text: 'Penggunaan konjungsi "tapi"' },
              { id: "c", text: "Penggunaan huruf kapital" },
              { id: "d", text: 'Penggunaan kata "yang"' },
              { id: "e", text: "Tidak ada kesalahan pada kalimat tersebut" },
            ],
            correctAnswer: "e",
            explanation:
              "Kalimat tersebut telah benar. Penggunaan konjungsi 'tapi' (atau tetapi) sudah benar didahului koma, juga penggunaan 'agar' yang menjadi intrakalimat (di tengah kalimat) subordinatif.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Masalah ini memang sudah menjadi masalah utama dari tahun 2010 namun pihak terkait masih saja tutup mulut sampai sekarang.",
            question: "Kalimat di atas dapat diperbaiki dengan cara...",
            options: [
              { id: "a", text: 'Menghilangkan kata "memang"' },
              { id: "b", text: 'Menghilangkan kata "tahun"' },
              { id: "c", text: 'Menambahkan tanda koma sebelum "namun"' },
              { id: "d", text: 'Menambahkan tanda koma sebelum "sampai"' },
              { id: "e", text: 'Menghilangkan kata "sudah"' },
            ],
            correctAnswer: "c",
            explanation:
              "Kata 'namun' adalah salah satu dari konjungsi yang Wajib diawali dengan tanda koma menurut kaidah cepat \"SBMPTN\" (Sedangkan, bahkan, melainkan, padahal, tetapi, namun).",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: "Tak tahu siapa yang salah, entah Adinda ...... Nayla",
            question:
              "Konjungsi korelatif yang tepat untuk melengkapi kalimat di atas adalah.......",
            options: [
              { id: "a", text: "atau" },
              { id: "b", text: "maupun" },
              { id: "c", text: "dan" },
              { id: "d", text: "entah" },
              { id: "e", text: "serta" },
            ],
            correctAnswer: "d",
            explanation:
              "Konjungsi korelatif/berpasangan selalu berpasangan dengan pasangannya. Dalam hal ini, 'entah' harus berpasangan dengan 'entah' (entah Adinda entah Nayla).",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Aku menasihati Naura selama dua jam agar dia jera akan kesalahannya. Aku juga sebenarnya tahu bahwa dia sebetulnya mengerti bahwa yang ia lukakan salah tetapi dia pura-pura tidak tahu saja.",
            question: "Kalimat di atas dapat diperbaiki dengan cara...",
            options: [
              { id: "a", text: 'Menambahkan tanda koma sebelum kata "agar"' },
              { id: "b", text: 'Menambahkan tanda koma sebelum kata "akan"' },
              {
                id: "c",
                text: 'Menambahkan tanda koma setelah kata "mengerti"',
              },
              { id: "d", text: 'Menambahkan tanda koma sebelum kata "tetapi"' },
              { id: "e", text: 'Menambahkan tanda koma setelah kata "Naura"' },
            ],
            correctAnswer: "d",
            explanation:
              "Konjungsi pertentangan intrakalimat 'tetapi' (sesuai kaidah jembatan keledai SBMPTN) harus ditulis dan didahului oleh tanda koma sebelum katanya.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              "Kalimat manakah yang menggunakan konjungsi secara tepat?",
            options: [
              {
                id: "a",
                text: "Sikapnya aneh, bahkan kami pun heran melihat tingkah lakunya",
              },
              { id: "b", text: "Aku lulus tes SNBT, karena rajin belajar" },
              { id: "c", text: "Aku rajin belajar, sedangkan ia tidak" },
              {
                id: "d",
                text: "Dia sangatlah rajin bahkan ia pernah tak tidur satu hari sebelum ujian dimulai",
              },
              { id: "e", text: "Rajinlah belajar, supaya kamu lulus tes SNBT" },
            ],
            correctAnswer: "c",
            explanation:
              "Menurut kaidah cepatnya: 'sedangkan' WAJIB didahului tanda koma (SBMPTN). 'karena' dan 'supaya' TIDAK boleh didahului koma (ABAH SUKA MANGGA), karena itu kalimat C adalah yang paling tepat.",
            points: 6,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Makna Konjungsi Antarkalimat";
      moduleDoc.description =
        "Pelajari penggunaan konjungsi intrakalimat, korelatif, dan antarkalimat beserta aturan penulisan dan tanda komanya.";
      moduleDoc.subcategory = "Penulisan Imbuhan";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Makna Konjungsi Antarkalimat",
        description:
          "Pelajari penggunaan konjungsi intrakalimat, korelatif, dan antarkalimat beserta aturan penulisan dan tanda komanya.",
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

seedMaknaKonjungsi();
