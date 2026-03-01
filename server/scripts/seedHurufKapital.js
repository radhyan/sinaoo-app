const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedHurufKapital = async () => {
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

    const targetId = "huruf-kapital-dan-non-kapital";

    const stepsData = [
      {
        title: "Materi: Huruf Kapital dan Non Kapital",
        type: "reading",
        status: "active",
        description:
          "Pelajari tentang aturan penggunaan huruf kapital dan non kapital dalam bahasa Indonesia berdasarkan pedoman ejaan yang berlaku.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Aturan Penggunaan Huruf Kapital</h3>

              <!-- Bagian 1 -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">
                    
                    <!-- Awal Kalimat -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama awal kalimat.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. <span class="text-red-600 font-bold">K</span>akak sedang membantu ibu memasak.</li>
                        <li class="text-body-l text-Grayscale-900">B. <span class="text-red-600 font-bold">P</span>olisi sedang melakukan pemeriksaan di perempatan jalan.</li>
                        <li class="text-body-l text-Grayscale-900">C. <span class="text-red-600 font-bold">A</span>pakah kamu membawa tanda pengenal?</li>
                      </ul>
                    </div>

                    <!-- Petikan Langsung -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama kalimat petikan langsung.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Rita mengatakan, "<span class="text-red-600 font-bold">A</span>ku sedang sedih."</li>
                        <li class="text-body-l text-Grayscale-900">B. Skay bertanya, "<span class="text-red-600 font-bold">A</span>pakah kamu akan pergi sekarang?"</li>
                        <li class="text-body-l text-Grayscale-900">C. "<span class="text-red-600 font-bold">H</span>ari ini," kata dia, "akan ada pemeriksaan tas."</li>
                      </ul>
                    </div>

                    <!-- Agama, Kitab Suci, Tuhan -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama nama agama, kitab suci, Tuhan, dan kata ganti untuk Tuhan.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. <span class="text-red-600 font-bold">I</span>slam</li>
                        <li class="text-body-l text-Grayscale-900">B. <span class="text-red-600 font-bold">B</span>udha</li>
                        <li class="text-body-l text-Grayscale-900">C. <span class="text-red-600 font-bold">T</span>ripitaka</li>
                        <li class="text-body-l text-Grayscale-900">D. <span class="text-red-600 font-bold">A</span>lkitab</li>
                        <li class="text-body-l text-Grayscale-900">E. <span class="text-red-600 font-bold">A</span>llah</li>
                        <li class="text-body-l text-Grayscale-900">F. <span class="text-red-600 font-bold">T</span>uhan</li>
                        <li class="text-body-l text-Grayscale-900">G. <span class="text-red-600 font-bold">A</span>llah akan selalu memberikan kemudahan kepada hamba-<span class="text-red-600 font-bold">N</span>ya.</li>
                      </ul>
                    </div>

                    <!-- Catatan Tuhan -->
                    <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                      <h4 class="text-h4 font-bold text-Primary-800 mb-3 mt-0">CATATAN</h4>
                      <p class="text-body-l text-Grayscale-900 mb-2">Sifat atau nama Tuhan yang merupakan <span class="font-bold text-Primary-700">kata dasar</span>, penulisannya ditulis serangkai, <span class="font-bold text-Primary-700">kecuali sifat esa</span>.</p>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-4 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Tuhan <span class="text-red-600 font-bold">Maha Esa.</span></li>
                        <li class="text-body-l text-Grayscale-900">B. Tuhan <span class="text-red-600 font-bold">Mahakuasa.</span></li>
                      </ul>
                      
                      <p class="text-body-l text-Grayscale-900 mb-2">Sifat atau nama Tuhan yang merupakan kata berimbuhan, penulisannya ditulis terpisah.</p>
                      <p class="text-body-l text-Grayscale-900 font-bold mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Tuhan <span class="text-red-600 font-bold">Maha Pengampun.</span></li>
                        <li class="text-body-l text-Grayscale-900">B. Allah <span class="text-red-600 font-bold">Maha Penyayang.</span></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Bagian 2 -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">

                    <!-- Tahun, Bulan, Hari dll -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama nama tahun, bulan, hari, hari besar, dan peristiwa bersejarah.</strong></p>
                      <p class="text-body-l text-Tertiary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. tahun <span class="text-red-600 font-bold">H</span>ijriah</li>
                        <li class="text-body-l text-Grayscale-900">B. bulan <span class="text-red-600 font-bold">F</span>ebruari</li>
                        <li class="text-body-l text-Grayscale-900">C. hari <span class="text-red-600 font-bold">S</span>elasa</li>
                        <li class="text-body-l text-Grayscale-900">D. <span class="text-red-600 font-bold">I</span>dulfitri</li>
                        <li class="text-body-l text-Grayscale-900">E. hari raya <span class="text-red-600 font-bold">P</span>askah</li>
                        <li class="text-body-l text-Grayscale-900">F. <span class="text-red-600 font-bold">P</span>roklamasi <span class="text-red-600 font-bold">K</span>emerdekaan <span class="text-red-600 font-bold">I</span>ndonesia</li>
                        <li class="text-body-l text-Grayscale-900">G. <span class="text-red-600 font-bold">P</span>ertempuran <span class="text-red-600 font-bold">S</span>urabaya</li>
                      </ul>
                    </div>

                    <!-- Catatan Peristiwa -->
                    <div class="bg-Tertiary-50 rounded-lg p-5 border-l-4 border-Tertiary-500">
                      <h4 class="text-h4 font-bold text-Tertiary-800 mb-3 mt-0">CATATAN</h4>
                      <p class="text-body-l text-Grayscale-900 mb-2"><strong>Huruf pertama peristiwa bersejarah yang <span class="text-Tertiary-700">tidak digunakan sebagai nama</span>, tidak perlu ditulis dengan huruf kapital.</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Contoh:</p>
                      <p class="text-body-l text-Grayscale-900 mt-0 mb-0">Adit dan Budi sedang berlatih dialog yang <span class="text-red-600 font-bold">memproklamasikan kemerdekaan</span> Indonesia.</p>
                    </div>

                    <!-- Singkatan nama, gelar, sapaan -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama unsur singkatan nama, gelar pendidikan, pangkat, atau sapaan.</strong></p>
                      <p class="text-body-l text-Tertiary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. S.Hum. : Sarjana ilmu-ilmu humaniora</li>
                        <li class="text-body-l text-Grayscale-900">B. M.H. : Magister hukum</li>
                        <li class="text-body-l text-Grayscale-900">C. Ny. : Nyonya</li>
                        <li class="text-body-l text-Grayscale-900">D. Prof. : Professor</li>
                      </ul>
                    </div>

                    <!-- Unsur nama orang -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama unsur-unsur nama orang.</strong></p>
                      <p class="text-body-l text-Tertiary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. <span class="text-red-600 font-bold">D</span>oh <span class="text-red-600 font-bold">K</span>yungsoo</li>
                        <li class="text-body-l text-Grayscale-900">B. <span class="text-red-600 font-bold">S</span>ehun</li>
                        <li class="text-body-l text-Grayscale-900">C. <span class="text-red-600 font-bold">A</span>nak <span class="text-red-600 font-bold">A</span>gung <span class="text-red-600 font-bold">A</span>yu <span class="text-red-600 font-bold">P</span>uspa <span class="text-red-600 font-bold">A</span>ditya <span class="text-red-600 font-bold">K</span>arang</li>
                      </ul>
                    </div>
                    
                    <!-- Catatan Nama Jenis dan Anak Dari -->
                    <div class="bg-Tertiary-50 rounded-lg p-5 border-l-4 border-Tertiary-500">
                      <h4 class="text-h4 font-bold text-Tertiary-800 mb-3 mt-0">CATATAN</h4>
                      <p class="text-body-l text-Grayscale-900 mb-2"><strong>Huruf kapital tidak digunakan sebagai huruf pertama nama jenis atau satuan ukuran.</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-4 mt-0">Contoh: ikan <span class="text-red-600 font-bold">lele</span>, ayam <span class="text-red-600 font-bold">kampung</span>, 20 km, dan 5 watt.</p>
                      
                      <p class="text-body-l text-Grayscale-900 mb-2"><strong>Huruf kapital tidak digunakan sebagai huruf pertama kata yang bermakna '<span class="text-red-600 font-bold">anak dari</span>', seperti kata <span class="text-red-600 font-bold">binti, bin, boru</span>, atau huruf pertama kata tugas.</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-0 mt-0">Contoh: Khair <span class="text-red-600 font-bold">bin</span> Hakim, Naravit <span class="text-red-600 font-bold">boru</span> Simalungun, dan Ayam Kampung <span class="text-red-600 font-bold">dari</span> Betawi.</p>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Bagian 3 -->
              <div class="bg-white rounded-lg shadow-sm border border-Secondary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">

                    <!-- Bangsa, Suku, Bahasa -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama nama bangsa, suku, dan bahasa.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. bangsa <span class="text-red-600 font-bold">I</span>ndonesia</li>
                        <li class="text-body-l text-Grayscale-900">B. bahasa <span class="text-red-600 font-bold">J</span>epang</li>
                        <li class="text-body-l text-Grayscale-900">C. bahasa <span class="text-red-600 font-bold">K</span>orea</li>
                        <li class="text-body-l text-Grayscale-900">D. suku <span class="text-red-600 font-bold">B</span>etawi</li>
                        <li class="text-body-l text-Grayscale-900">E. suku <span class="text-red-600 font-bold">D</span>ayak</li>
                      </ul>
                    </div>

                    <!-- Gelar Kehormatan -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama nama gelar kehormatan, keturunan, dan keagamaan yang diikuti nama orang.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. <span class="text-red-600 font-bold">N</span>abi Muhammad</li>
                        <li class="text-body-l text-Grayscale-900">B. <span class="text-red-600 font-bold">P</span>rofessor Adi Wicaksana</li>
                        <li class="text-body-l text-Grayscale-900">C. <span class="text-red-600 font-bold">R</span>aden <span class="text-red-600 font-bold">A</span>jeng Kartini</li>
                        <li class="text-body-l text-Grayscale-900">D. Doh Kyungsoo, <span class="text-red-600 font-bold">S</span>arjana <span class="text-red-600 font-bold">H</span>ukum</li>
                      </ul>
                    </div>

                    <!-- Geografi -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama nama geografi.</strong></p>
                      <p class="text-body-l text-Secondary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. <span class="text-red-600 font-bold">S</span>urabaya</li>
                        <li class="text-body-l text-Grayscale-900">B. Gunung <span class="text-red-600 font-bold">B</span>romo</li>
                        <li class="text-body-l text-Grayscale-900">C. Kecamatan <span class="text-red-600 font-bold">B</span>uduran</li>
                        <li class="text-body-l text-Grayscale-900">D. Danau <span class="text-red-600 font-bold">T</span>oba</li>
                        <li class="text-body-l text-Grayscale-900">E. Jalan <span class="text-red-600 font-bold">B</span>raga</li>
                      </ul>
                    </div>
                    
                    <!-- Catatan Geografi -->
                    <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                      <h4 class="text-h4 font-bold text-Primary-800 mb-3 mt-0">CATATAN</h4>
                      <p class="text-body-l text-Grayscale-900 mb-2"><strong>Huruf pertama nama geografi yang <span class="text-Primary-700">bukan nama diri</span> tidak ditulis kapital.</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-4 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Rita ingin melihat <span class="text-red-600 font-bold">d</span>anau.</li>
                        <li class="text-body-l text-Grayscale-900">B. Mendaki <span class="text-red-600 font-bold">g</span>unung.</li>
                      </ul>

                      <p class="text-body-l text-Grayscale-900 mb-2"><strong>Huruf pertama nama geografi yang <span class="text-Primary-700">digunakan sebagai nama jenis</span> tidak ditulis kapital.</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-4 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. apel <span class="text-red-600 font-bold">b</span>atu.</li>
                        <li class="text-body-l text-Grayscale-900">B. bika <span class="text-red-600 font-bold">a</span>mbon.</li>
                      </ul>

                      <p class="text-body-l text-Grayscale-900 mb-2"><strong>Huruf kapital <span class="text-Primary-700">digunakan</span> sebagai huruf pertama nama geografi jika frasa bermakna <span class="text-Primary-700">'dari'</span>.</strong></p>
                      <p class="text-body-l text-Grayscale-900 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Kyungsoo sedang mencari batik <span class="text-red-600 font-bold">P</span>ekalongan.</li>
                        <li class="text-body-l text-Grayscale-900">B. Skay tidak hanya menyukai drama <span class="text-red-600 font-bold">C</span>hina saja, tetapi juga drama <span class="text-red-600 font-bold">K</span>orea dan drama <span class="text-red-600 font-bold">J</span>epang.</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Bagian 4 -->
              <div class="bg-white rounded-lg shadow-sm border border-Tertiary-200 overflow-hidden mb-6">
                <div class="p-6">
                  <div class="space-y-6">

                    <!-- Jabatan dan Pangkat -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama nama jabatan dan pangkat yang diikuti dengan nama orang atau yang digunakan sebagai nama sapaan serta digunakan sebagai pengganti instansi atau tempat tertentu.</strong></p>
                      <p class="text-body-l text-Tertiary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Terima kasih, <span class="text-red-600 font-bold">P</span>rof.</li>
                        <li class="text-body-l text-Grayscale-900">B. <span class="text-red-600 font-bold">P</span>residen Prabowo Subianto</li>
                        <li class="text-body-l text-Grayscale-900">C. <span class="text-red-600 font-bold">M</span>enteri <span class="text-red-600 font-bold">L</span>ingkungan <span class="text-red-600 font-bold">H</span>idup dan <span class="text-red-600 font-bold">K</span>ehutanan</li>
                        <li class="text-body-l text-Grayscale-900">D. <span class="text-red-600 font-bold">G</span>ubernur Jawa Barat</li>
                        <li class="text-body-l text-Grayscale-900">E. <span class="text-red-600 font-bold">R</span>ektor Universitas Airlangga</li>
                      </ul>
                    </div>

                    <!-- Kekerabatan -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama penunjuk hubungan kekerabatan.</strong></p>
                      <p class="text-body-l text-Tertiary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. Nara bertanya, "Mengerjakan apa, Ma?"</li>
                        <li class="text-body-l text-Grayscale-900">B. Professor Adi Wicaksana</li>
                        <li class="text-body-l text-Grayscale-900">C. "Silahkan masuk, Bu!"</li>
                      </ul>
                    </div>

                    <!-- Lembaga -->
                    <div>
                      <p class="text-body-l text-Grayscale-900 mb-2 mt-0"><strong>Huruf kapital sebagai huruf pertama setiap kata nama lembaga, badan, organisasi atau judul, kecuali kata tugas, seperti <span class="text-Tertiary-700">di, ke, dari, dan, yang,</span> dan <span class="text-Tertiary-700">untuk</span>, yang tidak terletak pada posisi awal.</strong></p>
                      <p class="text-body-l text-Tertiary-800 mb-1 mt-0">Contoh:</p>
                      <ul class="list-none pl-0 mt-0 mb-0 space-y-1">
                        <li class="text-body-l text-Grayscale-900">A. <span class="text-red-600 font-bold">B</span>adan <span class="text-red-600 font-bold">E</span>ksekutif <span class="text-red-600 font-bold">M</span>ahasiswa akan mengadakan penyuluhan kepada semua mahasiswa baru Universitas Airlangga.</li>
                        <li class="text-body-l text-Grayscale-900">B. Skay akan membaca novel <span class="text-red-600 font-bold">L</span>aut <span class="text-red-600 font-bold">B</span>ercerita.</li>
                        <li class="text-body-l text-Grayscale-900">C. <span class="text-red-600 font-bold">P</span>eraturan <span class="text-red-600 font-bold">P</span>residen menegaskan, bahwa <span class="text-red-600 font-bold">B</span>ahasa <span class="text-red-600 font-bold">I</span>ndonesia wajib digunakan dalam komunikasi resmi di lingkungan kerja pemerintah dan swasta.</li>
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
        title: "Video: Huruf Kapital dan Non Kapital (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/VQ3Ec-j1f5U",
        description:
          "Video pembelajaran tentang penggunaan huruf kapital dan non kapital bagian pertama.",
      },
      {
        title: "Video: Huruf Kapital dan Non Kapital (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/O3w05dCa2U0",
        description:
          "Video pembelajaran tentang penggunaan huruf kapital dan non kapital bagian kedua.",
      },
      {
        title: "Kuis Huruf Kapital dan Non Kapital",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "(1) Pada tahun 2025, Universitas Indonesia akan menyelenggarakan konferensi internasional. (2)  Konferensi ini akan dihadiri oleh berbagai ahli dari seluruh dunia, termasuk Profesor john doe dari Harvard University. (3) Salah satu topik utama yang akan dibahas adalah bagaimana Indonesia dapat beradaptasi dengan dampak perubahan iklim. (4) Para peserta juga akan mengeksplorasi solusi-solusi inovatif untuk mengurangi emisi karbon di negara berkembang.",
            question:
              "Berdasarkan paragraf di atas, kalimat mana yang penulisan huruf kapitalnya SALAH?",
            options: [
              { id: "a", text: "Kalimat (1)" },
              { id: "b", text: "Kalimat (2)" },
              { id: "c", text: "Kalimat (3)" },
              { id: "d", text: "Kalimat (4)" },
              { id: "e", text: "Semua kalimat tidak ada yang salah." },
            ],
            correctAnswer: "b",
            explanation:
              "Pada kalimat (2), penulisan nama orang ('john doe') seharusnya diawali dengan huruf kapital menjadi 'John Doe'.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "(1)Keputusan menteri lingkungan hidup dan kehutanan mengizinkan pembangunan jalan membelah Hutan Harapan di jambi dan sumatera selatan merupakan langkah mundur bagi upaya dunia mengatasi perubahan iklim. (2) Tindakan Menteri Siti Nurbaya itu juga mempermalukan perjuangan keras Indonesia menurunkan emisi 11,2 juta ton setara karbon dioksida pada 2016-2017... (3) Pembukaan jalan tambah di tengah hutan itu bak pisau bermata dua yang menusuk upaya mitigasi perubahan iklim di Indonesia...",
            question:
              "Berdasarkan paragraf di atas, penggunaan huruf kapital yang SALAH terdapat pada kalimat nomor?",
            options: [
              { id: "a", text: "Kalimat (1)" },
              { id: "b", text: "Kalimat (2)" },
              { id: "c", text: "Kalimat (3)" },
              { id: "d", text: "Kalimat (1) dan (2)" },
              { id: "e", text: "Kalimat (2) dan (3)" },
            ],
            correctAnswer: "a",
            explanation:
              "Pada kalimat (1), nama jabatan yang diikuti nama instansi harus dikapitalisasi ('Menteri Lingkungan Hidup dan Kehutanan'). Nama tempat/geografi juga harus dikapitalisasi ('Jambi' dan 'Sumatera Selatan').",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "(1) Olympics adalah salah satu ajang olahraga terbesar di dunia yang diadakan setiap empat tahun sekali.<br/>(2) Pada Olympics 2024, yang akan berlangsung di paris, para atlet dari berbagai negara akan bersaing dalam berbagai cabang olahraga, mulai dari renang hingga atletik.<br/>(3) Salah satu momen yang paling ditunggu adalah pertandingan final sepak bola yang selalu menyedot perhatian jutaan penonton.",
            question:
              "Pernyataan berapa yang penulisan huruf kapitalnya SALAH?",
            options: [
              { id: "a", text: "Pernyataan (1)" },
              { id: "b", text: "Pernyataan (2)" },
              { id: "c", text: "Pernyataan (3)" },
              { id: "d", text: "Pernyataan (1) dan (2)" },
              { id: "e", text: "Pernyataan (2) dan (3)" },
            ],
            correctAnswer: "b",
            explanation:
              "Pada pernyataan (2), kata 'paris' adalah nama kota/geografi, sehingga huruf awalnya wajib ditulis dengan huruf kapital menjadi 'Paris'.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            question:
              "Aku bertobat kepada-Mu, ya Tuhan Yang Maha Pengampun.<br/>Penulisan yang benar adalah . . .",
            options: [
              {
                id: "a",
                text: "Aku bertobat kepada-Mu, ya Tuhan Yang Mahapengampun.",
              },
              {
                id: "b",
                text: "Aku bertobat kepadaMu, ya Tuhan Yang Maha Pengampun.",
              },
              {
                id: "c",
                text: "Aku bertobat kepada-Mu, ya Tuhan yang Mahapengampun.",
              },
              {
                id: "d",
                text: "Aku bertobat kepadaMu, ya Tuhan yang Maha Pengampun.",
              },
              {
                id: "e",
                text: "Aku bertobat kepada-Mu, ya Tuhan Yang Maha Pengampun.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Berdasarkan PUEBI, kata ganti untuk Tuhan (-Mu, -Nya) harus diawali huruf kapital dan dirangkai dengan tanda hubung (-). Sifat Tuhan yang ditulis terpisah (Maha Pengampun) diawali dengan huruf kapital pada setiap unsurnya.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            question:
              "Ibu menyuruhku untuk membeli jeruk Bali dan gula Jawa di Pasar Sirek.<br/>Penulisan yang benar adalah ....",
            options: [
              {
                id: "a",
                text: "Ibu menyuruhku untuk membeli jeruk Bali dan gula Jawa di Pasar Sirek.",
              },
              {
                id: "b",
                text: "Ibu menyuruhku untuk membeli jeruk bali dan gula jawa di pasar Sirek.",
              },
              {
                id: "c",
                text: "Ibu menyuruhku untuk membeli jeruk bali dan gula jawa di pasar sirek.",
              },
              {
                id: "d",
                text: "Ibu menyuruhku untuk membeli jeruk bali dan gula jawa di Pasar Sirek.",
              },
              {
                id: "e",
                text: "Ibu menyuruhku untuk membeli jeruk Bali dan gula Jawa di pasar Sirek.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Nama jenis/spesies yang meminjam nama tempat ('jeruk bali', 'gula jawa') tidak ditulis dengan huruf kapital. Sedangkan 'Pasar Sirek' adalah nama tempat (geografi) yang diikuti nama diri, sehingga ditulis kapital.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            question:
              "Rayhan Bima Bin Abdul Khair menikah dengan Fatimah Binti Nurul Huda<br/>Penulisan yang benar adalah ....",
            options: [
              {
                id: "a",
                text: "Rayhan bima bin Abdul khair menikah dengan Fatimah binti Nurul huda.",
              },
              {
                id: "b",
                text: "Rayhan Bima Bin Abdul Khair menikah dengan Fatimah Binti Nurul Huda.",
              },
              {
                id: "c",
                text: "Rayhan Bima bin Abdul Khair menikah dengan Fatimah Binti Nurul Huda.",
              },
              {
                id: "d",
                text: "Rayhan Bima bin abdul khair menikah dengan Fatimah binti nurul huda.",
              },
              {
                id: "e",
                text: "Rayhan Bima bin Abdul Khair menikah dengan Fatimah binti Nurul Huda.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kata kekerabatan yang berfungsi sebagai penunjuk garis keturunan (seperti bin, binti, boru, van) di tengah nama orang tidak ditulis dengan huruf kapital.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            question:
              "Penulisan huruf kapital di bawah ini yang salah adalah . . .",
            options: [
              {
                id: "a",
                text: "Tahun ini kakak akan pulang ke kampung halaman.",
              },
              {
                id: "b",
                text: "Seharusnya dia berdoa terhadap Tuhan Yang Maha Kuasa.",
              },
              {
                id: "c",
                text: "Proklamasi Kemerdekaan Indonesia menjadi salah satu peristiwa paling bersejarah bagi rakyat Indonesia.",
              },
              {
                id: "d",
                text: "Antikorupsi menjadi hal prinsip yang harus dicantumkan dalam kriteria menjaring caleg.",
              },
              {
                id: "e",
                text: "Aku sedang mempelajari hal-hal tentang Suku Toraja.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Kata 'suku' tidak ditulis dengan huruf kapital jika tidak mengawali kalimat. Yang dikapitalisasi hanya nama sukunya saja (suku Toraja). *Catatan tambahan: Pada opsi (b), 'Mahakuasa' seharusnya ditulis serangkai, namun berdasarkan kunci jawaban, fokus kesalahan fatal ada pada opsi (e).*",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            question:
              "Banjir bandang telah melanda kota medan dan deli serdang 6 bulan yang lalu sehingga penduduk harus mengungsi keluar rumah untuk menyelamatkan keluarganya.<br/>Perbaikan penulisan huruf kapital pada kalimat tersebut adalah . . .",
            options: [
              {
                id: "a",
                text: "Banjir bandang telah melanda Kota Medan dan Deli Serdang 6 bulan yang lalu sehingga penduduk harus mengungsi keluar rumah untuk menyelamatkan keluarganya.",
              },
              {
                id: "b",
                text: "Banjir Bandang telah melanda kota Medan dan Deli Serdang 6 bulan yang lalu sehingga penduduk harus mengungsi keluar rumah untuk menyelamatkan keluarganya.",
              },
              {
                id: "c",
                text: "Banjir bandang telah melanda Kota Medan dan Deli serdang 6 bulan yang lalu sehingga penduduk harus mengungsi keluar rumah untuk menyelamatkan keluarganya.",
              },
              {
                id: "d",
                text: "Banjir Bandang telah melanda Kota Medan dan deli serdang 6 bulan yang lalu sehingga penduduk harus mengungsi keluar rumah untuk menyelamatkan keluarganya.",
              },
              {
                id: "e",
                text: "Banjir Bandang telah melanda kota Medan dan Deli serdang 6 bulan yang lalu sehingga penduduk harus mengungsi keluar rumah untuk menyelamatkan keluarganya.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'kota' diikuti nama kotanya ('Medan') harus ditulis dengan huruf kapital (Kota Medan). Nama tempat 'Deli Serdang' juga harus diawali huruf kapital. 'Banjir bandang' tetap menggunakan huruf kecil karena bukan nama peristiwa sejarah spesifik.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            question:
              "Pemakaian huruf kapital yang benar terdapat pada kalimat . . .",
            options: [
              {
                id: "a",
                text: "Deva akan berangkat ke Medan pada Bulan Januari.",
              },
              { id: "b", text: "Di desa itu terdapat banyak Suku Batak." },
              {
                id: "c",
                text: "Pegunungan yang membentang di daratan Sumatera itu bernama Bukit Barisan.",
              },
              {
                id: "d",
                text: "Semua warga bergembira menyambut Hari Lebaran.",
              },
              {
                id: "e",
                text: "Kita harus menggunakan Bahasa Indonesia yang baik dan benar.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Opsi C benar karena 'Bukit Barisan' adalah nama geografi/tempat. Kesalahan opsi lain: (a) 'Bulan' seharusnya 'bulan'; (b) 'Suku' seharusnya 'suku'; (d) 'Hari' seharusnya 'hari'; (e) 'Bahasa' seharusnya 'bahasa'.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            question:
              "Huruf kapital dipakai sebagai huruf pertama petikan langsung di bawah ini semuanya benar, kecuali . . .",
            options: [
              { id: "a", text: "Adik bertanya, “Kapan kita pulang?”" },
              { id: "b", text: "Bapak menasihatkan, “Berhati-hatilah, Nak!”" },
              { id: "c", text: "“Kemarin engkau terlambat,” katanya." },
              { id: "d", text: "“Besok pagi,” kata ibu, “dia akan berangkat”" },
              { id: "e", text: "“apa yang kau makan itu?” kata Ibu" },
            ],
            correctAnswer: "e",
            explanation:
              "Berdasarkan PUEBI, huruf pertama pada petikan langsung harus ditulis menggunakan huruf kapital. Pada opsi (e), kata 'apa' diawali dengan huruf kecil, yang menyalahi kaidah.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "(1)Partai politik yang akan mengikuti pemilihan umum, harusnya memiliki standar dalam merekrut calon anggota legislatif yang tegas dan ketat. (2) Kriteria calon wakil rakyat itu harus jelas dan bisa menjadi filter untuk mencegah calon Wakil Rakyat bermasalah masuk, misalnya caleg yang pernah tersangkut masalah korupsi. (3) Hal ini penting guna memastikan calon anggota dewan itu benar-benar bukan orang bermasalah, tetapi pribadi-pribadi yang punya integritas. (4) Tentu saja masing-masing partai politik mempunyai mekanisme tersendiri dalam hal fit and proper test. (5) Kriteria tersebut tidak sama bagi para parpol.",
            question:
              "Kesalahan penulisan huruf kapital terdapat pada kalimat?",
            options: [
              { id: "a", text: "Kalimat (1)" },
              { id: "b", text: "Kalimat (2)" },
              { id: "c", text: "Kalimat (3)" },
              { id: "d", text: "Kalimat (4)" },
              { id: "e", text: "Kalimat (5)" },
            ],
            correctAnswer: "b",
            explanation:
              "Pada kalimat (2), penulisan 'Wakil Rakyat' tidak boleh menggunakan huruf kapital karena tidak diikuti nama orang atau instansi resmi sebagai nama diri. Seharusnya ditulis dengan huruf kecil: 'wakil rakyat'.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            question:
              "Penulisan huruf kapital yang tidak tepat terdapat pada kalimat?",
            options: [
              {
                id: "a",
                text: "Dalam beberapa menit lebih dari 200-an rumah di Kawasan Cianjur, Jawa Barat, porak-poranda akibat angin puting beliung.",
              },
              {
                id: "b",
                text: "Volume Waduk Kedung Ombo yang terletak di perbatasan Boyolali, Kabupaten Sragen, dan Kabupaten Grobogan di Jawa Tengah kurang dari 200 juta meter kubik.",
              },
              {
                id: "c",
                text: "Kapal Greenpeace Rainbow Warrior menghalangi kapal tanker MT Westama yang membawa 30.000 metrik ton minyak kelapa sawit yang siap berangkat di Pelabuhan Dumai, Riau.",
              },
              {
                id: "d",
                text: "Sungai Ciliwung yang sering mendatangkan banjir bagi Kota Jakarta mulai diturap.",
              },
              {
                id: "e",
                text: "Di Bantaran Sungai Ciliwung, sedikitnya ada 71.000 keluarga atau 350.000 jiwa yang hidup.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Kata 'kawasan' pada frasa 'Kawasan Cianjur' tidak perlu dikapitalisasi karena bukan merupakan bagian mutlak dari nama geografi tersebut. Seharusnya: 'di kawasan Cianjur'.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            question:
              "Peringatan hari pahlawan dilaksanakan pada Bulan November.<br/>Perbaikan yang tepat untuk kalimat di atas adalah?",
            options: [
              {
                id: "a",
                text: "Peringatan Hari Pahlawan dilaksanakan di Bulan November.",
              },
              {
                id: "b",
                text: "Peringatan Hari Pahlawan dilaksanakan di bulan November.",
              },
              {
                id: "c",
                text: "Peringatan hari pahlawan dilaksanakan di bulan November.",
              },
              {
                id: "d",
                text: "Peringatan hari Pahlawan dilaksanakan di bulan November",
              },
              {
                id: "e",
                text: "Peringatan hari pahlawan dilaksanakan di Bulan November",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Nama hari raya atau hari besar harus diawali huruf kapital ('Hari Pahlawan'). Namun, kata 'bulan' yang diikuti nama bulan tetap ditulis dengan huruf kecil ('bulan November'). Selain itu, penggunaan preposisi 'pada' sering diganti 'di' dalam percakapan, meski 'pada' lebih tepat untuk waktu. Berdasarkan opsi yang tersedia, opsi (b) adalah perbaikan kapitalisasi yang paling benar.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            question:
              "setelah berlibur di pantai, aku akan naik gunung lawu<br/>Perbaikan penggunaan huruf kapital di atas yang tepat adalah?",
            options: [
              {
                id: "a",
                text: "Setelah berlibur di Pantai, aku akan naik gunung Lawu.",
              },
              {
                id: "b",
                text: "Setelah berlibur di pantai, aku akan naik gunung Lawu.",
              },
              {
                id: "c",
                text: "Setelah berlibur di pantai, aku akan naik Gunung Lawu.",
              },
              {
                id: "d",
                text: "Setelah berlibur di Pantai, aku akan naik Gunung Lawu.",
              },
              {
                id: "e",
                text: "Setelah berlibur di pantai, Aku akan naik Gunung lawu.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Awal kalimat diawali huruf kapital ('Setelah'). Kata 'pantai' tidak dikapitalisasi karena tidak diikuti nama diri. Kata 'gunung' diikuti nama diri geografi 'Lawu', sehingga keduanya dikapitalisasi menjadi 'Gunung Lawu'.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            question:
              "setelah makan bika ambon, Thomas membaca buku bahasa korea<br/>Perbaikan penggunaan huruf kapital pada kalimat diatas yang benar adalah?",
            options: [
              {
                id: "a",
                text: "Setelah makan bika ambon, Thomas membaca buku bahasa korea.",
              },
              {
                id: "b",
                text: "Setelah makan bika Ambon, Thomas membaca buku Bahasa Korea.",
              },
              {
                id: "c",
                text: "Setelah makan bika ambon, Thomas membaca buku bahasa Korea.",
              },
              {
                id: "d",
                text: "Setelah makan Bika Ambon, Thomas membaca buku bahasa Korea.",
              },
              {
                id: "e",
                text: "Setelah makan bika Ambon, Thomas membaca buku bahasa Korea.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Awal kalimat menggunakan huruf kapital ('Setelah'). 'bika ambon' adalah nama jenis makanan, bukan geografi, sehingga ditulis dengan huruf kecil. 'Thomas' nama orang (huruf kapital). 'bahasa Korea', kata 'bahasa' ditulis kecil, dan nama bangsa/bahasa 'Korea' ditulis kapital.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Huruf Kapital dan Non Kapital";
      moduleDoc.description =
        "Materi mengenai pedoman penggunaan huruf kapital dan non kapital dalam bahasa Indonesia beserta contohnya pada berbagai situasi.";
      moduleDoc.subcategory = "Penulisan Huruf";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Huruf Kapital dan Non Kapital",
        description:
          "Materi mengenai pedoman penggunaan huruf kapital dan non kapital dalam bahasa Indonesia beserta contohnya pada berbagai situasi.",
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

seedHurufKapital();
