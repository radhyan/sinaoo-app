const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// Load env vars
dotenv.config({ path: path.join(__dirname, "../.env") });

// Import Models
const Module = require("../models/Module");
const Course = require("../models/Course");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const seedLogikaKuantor = async () => {
  try {
    const moduleId = "logika-kuantor";

    // -------------------------------------------------------------------------
    // 1. Reading Content: Definisi & Jenis
    // -------------------------------------------------------------------------
    const readingDefinisi = `
            <div class="space-y-12 text-Grayscale-900">
              
              <!-- Definisi Kuantor -->
              <section>
                <div class="bg-white rounded-lg border-2 border-Primary-100 p-8 shadow-sm">
                  <h3 class="text-h3 mt-0 font-heading text-Primary-900 mb-6 border-b-2 border-Primary-100 pb-2">Definisi Kuantor</h3>
                  <p class="text-body-l mb-4">
                    Kuantor adalah suatu istilah yang menyatakan <strong>"berapa banyak"</strong> dari suatu objek dalam suatu sistem. Setidaknya ada tiga jenis tipe soal logika kuantor yang sering muncul. Yang pertama adalah soal hubungan "jika, maka", yang kedua "dan, atau" dan yang ketiga "semua ada, beberapa dan sebagian".
                  </p>
                  
                  <div class="bg-Primary-50 p-6 rounded-md border-l-4 border-Primary-500 mb-4">
                    <p class="text-h5 font-bold text-Primary-800 mb-2">Contoh:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-800">
                      <li>"Semua orang suka pizza," atau</li>
                      <li>"Ada beberapa kucing di sana."</li>
                    </ul>
                  </div>
                  
                  <p class="text-body-l m-0 font-medium">
                    Intinya, kuantor itu merupakan hal yang ngomongin soal <span class="text-Primary-600 font-bold">jumlah</span> benda!
                  </p>
                </div>
              </section>

              <!-- Kuantor Universal -->
              <section>
                <div class="bg-white rounded-lg border-2 border-Secondary-100 p-8 shadow-sm">
                  <div class="flex items-center gap-4 mb-6 border-b-2 border-Secondary-100 pb-2">
                    <h3 class="text-h3 font-heading mt-0 text-Secondary-900">Kuantor Universal (∀)</h3>
                  </div>
                  
                  <p class="text-body-l my-4">
                    Pernyataan dengan kuantor universal ditandai dengan penggunaan kata <span class="font-bold">setiap</span> atau <span class="font-bold">semua</span> atau <span class="font-bold">seluruhnya</span>.
                  </p>

                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l mb-8">
                    <li>Kuantor yang ditandai dengan awalan kata "semua" atau "setiap"</li>
                    <li><strong>∀</strong> &rarr; bermakna "semua" atau "setiap"</li>
                  </ul>

                  <div class="flex flex-col md:flex-row gap-8 items-center">
                     <div class="flex-1 space-y-4">
                        <p class="font-bold text-Secondary-800 text-h5">Contoh:</p>
                        <ul class="list-disc list-outside pl-5 space-y-4 text-body-l">
                          <li>"Semua siswa pandai menjawab soal UTBK" artinya setiap siswa bisa jawab soal UTBK, nggak ada yang ketinggalan.</li>
                          <li>"Semua A adalah B, tapi nggak semua B adalah A" artinya, misalnya, semua apel (A) itu buah (B), tapi tidak semua buah (B) itu apel (A). Jadi, ada buah yang bukan apel.</li>
                        </ul>
                     </div>
                     
                     <!-- Diagram Circles visualization -->
                     <div class="flex gap-4 items-center justify-center">
                        <div class="flex flex-col items-center">
                           <div class="w-24 h-24 rounded-full border-4 border-Secondary-600 flex items-center justify-center text-h4 font-bold text-Secondary-900 relative">
                              AB
                           </div>
                           <p class="text-xs text-center mt-2 font-bold text-Grayscale-500 uppercase tracking-widest">Invalid<br/>(Mungkin)</p>
                        </div>
                        <div class="flex flex-col items-center">
                           <div class="w-24 h-24 rounded-full border-4 border-Secondary-600 flex items-center justify-center relative">
                              <span class="absolute top-2 font-bold text-Secondary-900 text-h4">B</span>
                              <div class="w-12 h-12 rounded-full border-2 border-Secondary-400 flex items-center justify-center text-h5 font-bold text-Secondary-700">A</div>
                           </div>
                           <p class="text-xs text-center mt-2 font-bold text-Grayscale-500 uppercase tracking-widest">Valid<br/>(Pasti)</p>
                        </div>
                     </div>
                  </div>
                </div>
              </section>

              <!-- Kuantor Eksistensial -->
              <section>
                 <div class="bg-white rounded-lg border-2 border-Tertiary-100 p-8 shadow-sm">
                  <div class="flex items-center gap-4 mb-6 border-b-2 border-Tertiary-100 pb-2">
                    <h3 class="text-h3 font-heading mt-0 text-Tertiary-900">Kuantor Eksistensial (∃)</h3>
                  </div>
                  
                  <p class="text-body-l my-4">
                    Pernyataan dengan kuantor eksistensial memiliki karakteristik adanya kata <span class="font-bold">sebagian, ada, beberapa, terdapat</span>, atau <span class="font-bold">kata-kata semakna lainnya</span>.
                  </p>

                  <ul class="list-disc list-outside pl-5 space-y-2 text-body-l mb-8">
                    <li>Kuantor yang ditandai dengan awalan kata "ada"</li>
                    <li>Kata "beberapa" atau "sebagian" termasuk kuantor eksistensial, tetapi lebih baik diganti kata "ada" agar tidak menimbulkan asumsi</li>
                    <li><strong>∃</strong> &rarr; bermakna "ada"</li>
                  </ul>

                  <div class="bg-Tertiary-50 p-6 rounded-md border-l-4 border-Tertiary-500">
                    <p class="font-bold text-Tertiary-800 text-h5 mb-2">Contoh:</p>
                    <p class="text-body-l">
                      “Sebagian siswa lolos UTBK" artinya ada siswa yang berhasil lolos, tapi tidak menjelaskan yang lain. Namun bukan berarti otomatis "sebagian siswa tidak lolos UTBK" ya. Itu kesimpulannya <strong>TIDAK VALID</strong> karena hanya disebutkan sebagian yang lolos, tapi tidak diberitahu sisanya. Mungkin saja yang tidak disebut juga lolos semua.
                    </p>
                  </div>
                  </div>
                 </div>
              </section>

              <!-- Negasi Kuantor (Merged) -->
              <section>
                 <div class="bg-Grayscale-50 text-Grayscale-900 rounded-lg p-8 relative overflow-hidden">
                    <div class="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
                       <div class="w-64 h-64 rounded-full bg-Gradient-1 blur-3xl"></div>
                    </div>
                    
                    <h3 class="text-h3 font-heading mb-8 relative z-10">Negasi Kuantor</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                       <!-- Negasi Universal -->
                       <div class="bg-white/10 backdrop-blur-md rounded-md p-6 border border-white/20">
                          <h5 class="text-h5 font-bold text-Primary-200 mb-4">Negasi Kuantor Universal</h5>
                          <ul class="list-disc list-outside pl-5 space-y-2 text-body-l">
                             <li>Negasi kata "semua" adalah "ada"</li>
                             <li>Contoh: <strong>~ [Semua A adalah B] = Ada A yang bukan B</strong></li>
                          </ul>
                       </div>
                       
                       <!-- Negasi Eksistensial -->
                       <div class="bg-white/10 backdrop-blur-md rounded-md p-6 border border-white/20">
                          <h5 class="text-h5 font-bold text-Secondary-200 mb-4">Negasi Kuantor Eksistensial</h5>
                          <ul class="list-disc list-outside pl-5 space-y-2 text-body-l">
                             <li>kata "ada" adalah "semua"</li>
                             <li>Contoh: <strong>~ [Ada A yang B] = Semua A yang bukan B</strong></li>
                          </ul>
                       </div>
                    </div>
                    
                    <div class=" bg-white/5 rounded-md p-6 border border-white/10 relative z-10">
                       <p class="font-bold text-Tertiary-500 mb-2">Contoh Soal:</p>
                       <p class="text-body-l mb-2">Apa negasi dari "Semua murid kelas A wajib mengikuti ujian"</p>
                       <p class="text-body-l font-bold text-Tertiary-500">Jawab : Ada murid kelas A yang tidak wajib mengikuti ujian</p>
                    </div>
                 </div>
              </section>
            </div>
    `;

    // -------------------------------------------------------------------------
    // 3. Reading Content: Rumus-Rumus Penting
    // -------------------------------------------------------------------------
    const readingRumus = `
            <div class="space-y-12 text-Grayscale-900">
              <!-- Rumus-rumus -->
              <section class="space-y-8">
                 <h3 class="text-h3 font-heading text-Primary-900 mb-4">Rumus-Rumus Penting</h3>
                 
                 <!-- Rumus 1 -->
                 <div class="bg-white rounded-xl shadow-sm border border-Primary-200 overflow-hidden">
                    <div class="bg-Primary-600 px-6 py-3 flex items-center justify-between">
                       <h4 class="text-white font-bold text-h4 mx-6 my-4">Rumus 1</h4>
                    </div>
                    <div class="p-6">
                       <div class="flex flex-col md:flex-row gap-4 items-center mb-6 bg-Primary-50 p-4 rounded-md">
                          <div class="font-bold text-body-l text-Primary-900 text-center md:text-left">
                             <div>Semua A adalah B</div>
                             <div>Sebagian A adalah C</div>
                          </div>
                          <div class="text-Primary-500 font-bold text-2xl">&rarr;</div>
                          <div class="text-Primary-700 font-medium italic">Pernyataan yang sama ada di depan</div>
                       </div>
                       
                       <p class="font-bold mb-2">Kesimpulan yang Benar ada 3 jawaban :</p>
                       <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-700">
                          <li>
                             <strong>Sebagian A adalah C dan B.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Artinya, ada sebagian A yang masuk ke dalam C, dan karena semua A juga merupakan B, maka sebagian A yang C juga termasuk B.</p>
                          </li>
                          <li>
                             <strong>Sebagian A adalah B tetapi bukan C.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Karena semua A adalah B, namun hanya sebagian A yang merupakan C, berarti ada sebagian A yang B tetapi tidak termasuk C.</p>
                          </li>
                          <li>
                             <strong>Semua A yang C adalah B.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Artinya, jika A masuk ke dalam C, maka A tetap merupakan B. Karena semua A adalah B, maka A yang menjadi C juga pasti B.</p>
                          </li>
                       </ol>
                       
                       <div class="mt-6 pt-6 border-t border-Grayscale-100">
                          <p class="font-bold mt-0 text-Primary-800 mb-2">Contoh Soal:</p>
                          <p class="mb-1 text-body-l">Semua siswa (A) belajar matematika (B).</p>
                          <p class="mb-4 text-body-l">Sebagian siswa (A) ikut les (C).</p>
                          <p class="font-bold mt-0 text-Primary-800 mb-2">Kesimpulan:</p>
                          <ol class="list-decimal list-outside pl-5 space-y-1 text-body-l">
                             <li>Sebagian siswa ikut les (C) dan belajar matematika (B).</li>
                             <li>Sebagian siswa belajar matematika (B) tetapi tidak ikut les (bukan C).</li>
                             <li>Semua siswa yang ikut les (C) belajar matematika (B)</li>
                          </ol>
                       </div>
                    </div>
                 </div>

                 <!-- Rumus 2 -->
                 <div class="bg-white rounded-xl shadow-sm border border-Secondary-200 overflow-hidden">
                    <div class="bg-Secondary-600 px-6 py-3 flex items-center justify-between">
                       <h4 class="text-white font-bold text-h4 mx-6 my-4">Rumus 2</h4>
                    </div>
                    <div class="p-6">
                       <div class="flex flex-col md:flex-row gap-4 items-center mb-6 bg-Secondary-50 p-4 rounded-md">
                          <div class="font-bold text-body-l text-Secondary-900 text-center md:text-left">
                             <div>Semua A adalah B</div>
                             <div>Sebagian B adalah C</div>
                          </div>
                          <div class="text-Secondary-500 font-bold text-2xl">&rarr;</div>
                          <div class="text-Secondary-700 font-medium italic">Pernyataan yang sama bersilangan</div>
                       </div>
                       
                       <p class="font-bold mb-2">Kesimpulan yang TEPAT ada 3 jawaban yaitu (Pernyataan yang sama bisa hilang jika bersilangan):</p>
                       <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-700">
                          <li>
                             <strong>Sebagian A adalah C.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Karena semua A adalah B, dan sebagian B adalah C, maka ada sebagian A yang termasuk C.</p>
                          </li>
                          <li>
                             <strong>Sebagian A bukan C.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Karena tidak semua B adalah C, maka ada A yang tidak termasuk C.</p>
                          </li>
                          <li>
                             <strong>Sebagian C bukan A.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Karena tidak semua B adalah A, maka ada sebagian C yang tidak termasuk A.</p>
                          </li>
                       </ol>

                       <div class="mt-6 pt-6 border-t border-Grayscale-100">
                          <p class="font-bold mt-0 text-Secondary-800 mb-2">Contoh Soal:</p>
                          <p class="mb-1 text-body-l">Semua film superhero (A) tayang di bioskop (B).</p>
                          <p class="mb-4 text-body-l">Sebagian film yang tayang di bioskop (B) adalah film aksi (C).</p>
                          <p class="font-bold text-Secondary-800 mb-2">Kesimpulan:</p>
                          <ol class="list-decimal list-outside pl-5 space-y-1 text-body-l">
                             <li>Sebagian film superhero (A) adalah film aksi (C).</li>
                             <li>Sebagian film superhero (A) bukan film aksi (C).</li>
                             <li>Sebagian film aksi (C) bukan film superhero (A).</li>
                          </ol>
                       </div>
                    </div>
                 </div>

                 <!-- Rumus 3 -->
                 <div class="bg-white rounded-xl shadow-sm border border-Tertiary-200 overflow-hidden">
                    <div class="bg-Tertiary-600 px-6 py-3 flex items-center justify-between">
                       <h4 class="text-white font-bold text-h4 mx-6 my-4">Rumus 3</h4>
                    </div>
                    <div class="p-6">
                       <div class="flex flex-col md:flex-row gap-4 items-center mb-6 bg-Tertiary-50 p-4 rounded-lg">
                          <div class="font-bold text-Tertiary-900 text-center md:text-left">
                             <div>Semua A adalah B</div>
                             <div>Sebagian C adalah A</div>
                          </div>
                          <div class="text-Tertiary-500 font-bold text-2xl">&rarr;</div>
                          <div class="text-Tertiary-700 font-medium italic">Pernyataan yang sama bersilangan</div>
                       </div>
                       
                       <p class="font-bold mb-2">Kesimpulan yang TEPAT ada 3 jawaban yaitu (Pernyataan yang sama bisa hilang jika bersilangan) :</p>
                       <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-700">
                          <li>
                             <strong>Sebagian C adalah B.</strong>
                             <p class="text-sm mt-1 text-Grayscale-500">Karena sebagian C adalah A, dan semua A adalah B, maka sebagian C juga termasuk B.</p>
                          </li>
                          <li>
                             <strong>Sebagian bukan C adalah B.</strong>
                             <p class="text-sm mt-1 text-Grayscale-500">Karena tidak semua C adalah A, maka ada yang bukan C tetapi tetap B, karena semua A adalah B.</p>
                          </li>
                          <li>
                             <strong>Semua A yang merupakan C adalah B.</strong>
                             <p class="text-sm mt-1 text-Grayscale-500">Jika A adalah C, maka A juga pasti B, karena semua A otomatis adalah B.</p>
                          </li>
                       </ol>

                       <div class="mt-6 pt-6 border-t border-Grayscale-100">
                          <p class="font-bold mt-0 text-Tertiary-800 mb-2">Contoh Soal:</p>
                          <p class="mb-1 text-body-l">Semua tanaman (A) membutuhkan air (B).</p>
                          <p class="mb-4 text-body-l">Sebagian pohon (C) adalah tanaman (A).</p>
                          <p class="font-bold text-Tertiary-800 mb-2">Kesimpulan:</p>
                          <ol class="list-decimal list-outside pl-5 space-y-1 text-body-l">
                             <li>Sebagian pohon (C) membutuhkan air (B).</li>
                             <li>Sebagian yang bukan pohon (bukan C) juga membutuhkan air (B).</li>
                             <li>Semua tanaman yang berupa pohon (A yang C) pasti membutuhkan air (B).</li>
                          </ol>
                       </div>
                    </div>
                 </div>
                 
                  <!-- Rumus 4 -->
                 <div class="bg-white rounded-xl shadow-sm border border-Primary-200 overflow-hidden">
                    <div class="bg-Primary-600 px-6 py-3 flex items-center justify-between">
                       <h4 class="text-white font-bold text-h4 mx-6 my-4">Rumus 4</h4>
                    </div>
                    <div class="p-6">
                       <div class="flex flex-col md:flex-row gap-4 items-center mb-6 bg-Primary-50 p-4 rounded-lg">
                          <div class="font-bold text-Primary-900 text-center md:text-left">
                             <div>Semua A adalah B</div>
                             <div>Sebagian C adalah B</div>
                          </div>
                          <div class="text-Primary-500 font-bold text-2xl">&rarr;</div>
                          <div class="text-Primary-700 font-medium italic">Pernyataan yang sama ada di belakang</div>
                       </div>
                       
                       <p class="font-bold mb-2">Kesimpulan yang TEPAT ada 2 kemungkinan jawaban yaitu:</p>
                       <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-700">
                          <li>
                             <strong>Sebagian A bukan C.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Karena semua A adalah B, tetapi tidak semua C adalah A, maka ada A yang bukan C.</p>
                          </li>
                          <li>
                             <strong>Sebagian C bukan A.</strong>
                             <p class="text-body-l mt-1 text-Grayscale-500">Karena sebagian C adalah B tetapi tidak semua C adalah A, maka ada C yang bukan A.</p>
                          </li>
                       </ol>
                       
                       <div class="mt-6 pt-6 border-t border-Grayscale-100">
                          <p class="font-bold mt-0 text-Primary-800 mb-2">Contoh Soal:</p>
                          <p class="mb-1 text-body-l">Semua kucing (A) berbulu (B).</p>
                          <p class="mb-4 text-body-l">Sebagian hewan (C) berbulu (B).</p>
                          <p class="font-bold mt-0 text-Primary-800 mb-2">Kesimpulan:</p>
                          <ol class="list-decimal list-outside pl-5 space-y-1 text-body-l">
                             <li>Sebagian kucing (A) bukan hewan lain (C).</li>
                             <li>Sebagian hewan berbulu (C) bukan kucing (A).</li>
                          </ol>
                       </div>
                    </div>
                 </div>

                 <!-- Rumus 5 -->
                 <div class="bg-white rounded-xl shadow-sm border border-Secondary-200 overflow-hidden">
                    <div class="bg-Secondary-600 px-6 py-3 flex items-center justify-between">
                       <h4 class="text-white font-bold text-h4 mx-6 my-4">Rumus 5</h4>
                    </div>
                    <div class="p-6">
                       <div class="flex flex-col md:flex-row gap-4 items-center mb-6 bg-Secondary-50 p-4 rounded-lg">
                          <div class="font-bold text-Secondary-900 text-center md:text-left">
                             <div>Semua A adalah B</div>
                             <div>Semua C adalah A</div>
                          </div>
                          <div class="text-Secondary-500 font-bold text-2xl">&rarr;</div>
                          <div class="text-Secondary-700 font-medium italic">Pernyataan yang sama bersilangan</div>
                       </div>
                       
                       <p class="font-bold mb-2">Kesimpulan dari TEPAT ada 2 jawaban yaitu (pernyataan yang sama bisa hilang jika bersilangan)</p>
                       <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-700">
                          <li>
                             <strong>Semua C adalah B.</strong>
                             <p class="text-sm mt-1 text-Grayscale-500">Karena semua C adalah A, dan semua A adalah B, maka semua C juga merupakan B.</p>
                          </li>
                          <li>
                             <strong>Sebagian B bukan C.</strong>
                             <p class="text-sm mt-1 text-Grayscale-500">Karena semua C adalah B, maka ada B yang tidak termasuk C.</p>
                          </li>
                       </ol>

                       <div class="mt-6 pt-6 border-t border-Grayscale-100">
                          <p class="font-bold mt-0 text-Secondary-800 mb-2">Contoh Soal:</p>
                          <p class="mb-1 text-body-l">Semua kendaraan roda empat (A) memiliki mesin (B).</p>
                          <p class="mb-4 text-body-l">Semua mobil (C) adalah kendaraan roda empat (A).</p>
                          <p class="font-bold text-Secondary-800 mb-2">Kesimpulan:</p>
                          <ol class="list-decimal list-outside pl-5 space-y-1 text-body-l">
                             <li>Semua mobil (C) memiliki mesin (B).</li>
                             <li>Sebagian kendaraan bermesin (B) bukan mobil (C).</li>
                          </ol>
                       </div>
                    </div>
                 </div>
              </section>
            </div>
    `;

    // Example & Explanation Content
    const exampleContent = `
            <div class="space-y-12 text-Grayscale-900">
              <section>
                <div class="bg-white rounded-lg border-2 border-Primary-100 p-8 shadow-sm">
                   <h3 class="text-h3 font-heading text-Primary-900 mb-6 mt-0 border-l-4 border-Primary-500 pl-4 py-1">Contoh Soal di SNBT :</h3>
                   
                   <div class="bg-Primary-50/50 p-6 rounded-md border border-Primary-100 mb-8">
                      <ol class="list-decimal list-outside pl-5 space-y-2 text-body-l">
                         <li>Semua orang yang kedinginan akan menggigil.</li>
                         <li>Sebagian pendaki gunung tidak menggigil.</li>
                      </ol>
                      
                      <div class="mt-4">
                         <p class="font-bold text-body-l text-Primary-800">Dapat kita simpulkan bahwa...</p>
                         <ol class="list-[upper-alpha] list-outside pl-5 space-y-2 mt-2 text-body-l">
                            <li>Ada pendaki yang kedinginan dan ada pendaki yang menggigil</li>
                            <li>Semua orang yang menjadi pendaki tidak akan menggigil</li>
                            <li>Semua pendaki gunung akan menggigil</li>
                            <li>Sebagian pendaki gunung tidak akan menggigil</li>
                            <li class="font-bold text-Success-600">Sebagian pendaki gunung tidak kedinginan</li>
                         </ol>
                      </div>
                   </div>
                   
                   <div class="p-6 bg-white rounded-md border border-Grayscale-200">
                      <h4 class="text-h4 font-bold text-Grayscale-900 mb-4">Pembahasan:</h4>
                      <ol class="list-decimal list-outside pl-5 space-y-4 text-body-l text-Grayscale-700">
                         <li>
                            Semua orang yang kedinginan (A) akan menggigil (B).
                            <ul class="list-disc list-outside pl-5 mt-1 text-sm text-Grayscale-500">
                               <li>Artinya, kedinginan adalah syarat untuk menggigil; jika seseorang menggigil, mereka pasti kedinginan.</li>
                            </ul>
                         </li>
                         <li>
                            Sebagian pendaki gunung (C) tidak menggigil (bukan B).
                            <ul class="list-disc list-outside pl-5 mt-1 text-sm text-Grayscale-500">
                               <li>Artinya, ada pendaki gunung yang tidak masuk ke kategori orang yang menggigil.</li>
                            </ul>
                         </li>
                      </ol>
                      
                      <div class="mt-6">
                         <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">Maka:</h5>
                         <ul class="list-disc list-outside pl-5 space-y-2 text-body-l">
                            <li>Berdasarkan Premis 1, jika seseorang tidak menggigil, maka mereka pasti tidak kedinginan (karena kedinginan menyebabkan menggigil).</li>
                            <li>Premis 2 menyatakan bahwa sebagian pendaki gunung tidak menggigil. Oleh karena itu, sebagian pendaki gunung pasti tidak kedinginan.</li>
                         </ul>
                      </div>
                      
                      <div class="mt-6">
                         <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">Kesimpulan:</h5>
                         <p class="text-body-l mb-4">Jawaban yang benar adalah <strong>E. Sebagian pendaki gunung tidak kedinginan.</strong></p>
                         <p class="font-bold text-Grayscale-800 mb-2">Penjelasan untuk opsi lain:</p>
                         <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700">
                            <li>A salah, karena tidak ada informasi bahwa ada pendaki yang kedinginan dan menggigil.</li>
                            <li>B salah, karena tidak semua pendaki tidak menggigil, hanya sebagian.</li>
                            <li>C salah, karena premis menunjukkan sebagian pendaki tidak menggigil, jadi tidak semua pendaki akan menggigil.</li>
                            <li>D kurang tepat, karena lebih spesifik bahwa mereka tidak kedinginan (sesuai dengan premis).</li>
                         </ul>
                      </div>
                   </div>
                   
                   <div class="mt-8 pt-8 border-t border-Grayscale-200">
                      <ol start="2" class="list-decimal list-outside pl-5 space-y-2 text-body-l">
                         <li>
                            Semua guru matematika cerdas.<br/>
                            Ada beberapa guru bahasa yang juga cerdas.<br/>
                            Simpulan yang tepat adalah....
                         </li>
                      </ol>
                      <ol class="list-[upper-alpha] list-outside pl-5 space-y-2 mt-2 text-body-l">
                         <li>Ada guru bahasa yang tidak cerdas</li>
                         <li>Tidak ada guru matematika yang cerdas</li>
                         <li>Semua guru bahasa cerdas</li>
                         <li class="font-bold text-Success-600">Ada individu yang cerdas bukan guru matematika</li>
                         <li>Tidak ada guru bahasa yang cerdas</li>
                      </ol>
                      
                      <!-- Pembahasan Soal 2 -->
                      <div class="mt-4 p-4 bg-Grayscale-50 rounded-md border border-Grayscale-200">
                         <h5 class="font-bold text-body-l text-Grayscale-900 mb-2">Pembahasan:</h5>
                         <ol class="list-decimal list-outside pl-5 space-y-2 text-body-l text-Grayscale-700">
                            <li>
                               Semua guru matematika (A) adalah cerdas (B).
                               <ul class="list-disc list-outside pl-5 mt-1 text-sm text-Grayscale-500">
                                  <li>Artinya, jika seseorang adalah guru matematika, maka dia pasti cerdas.</li>
                               </ul>
                            </li>
                            <li>
                               Sebagian guru bahasa (C) juga cerdas (B).
                               <ul class="list-disc list-outside pl-5 mt-1 text-sm text-Grayscale-500">
                                  <li>Artinya, ada beberapa guru bahasa yang termasuk kategori cerdas.</li>
                               </ul>
                            </li>
                         </ol>
                         
                         <h5 class="font-bold text-body-l text-Grayscale-900 mt-4 mb-2">Maka:</h5>
                         <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700">
                            <li>Premis 1 menyatakan hubungan langsung antara guru matematika (A) dan cerdas (B).</li>
                            <li>Premis 2 menegaskan bahwa sebagian guru bahasa (C) masuk kategori cerdas (B), tetapi tidak semua guru bahasa disebutkan demikian.</li>
                            <li>Oleh karena itu, pasti ada individu yang cerdas (B) yang bukan guru matematika (A), yaitu guru bahasa.</li>
                         </ul>
                         
                         <h5 class="font-bold text-body-l text-Grayscale-900 mt-4 mb-2">Kesimpulan:</h5>
                         <p class="text-body-l mb-2">Jawaban yang tepat adalah <strong>D. Ada individu yang cerdas bukan guru matematika.</strong></p>
                         <p class="font-bold text-Grayscale-800 mb-1">Penjelasan untuk opsi lain:</p>
                         <ul class="list-disc list-outside pl-5 space-y-1 text-body-l text-Grayscale-700">
                            <li>A salah, karena tidak ada informasi bahwa guru bahasa tidak cerdas, hanya sebagian yang disebut cerdas.</li>
                            <li>B salah, karena premis pertama justru menyatakan semua guru matematika cerdas.</li>
                            <li>C salah, karena hanya sebagian guru bahasa disebut cerdas, bukan semua.</li>
                            <li>E salah, karena premis kedua menyatakan bahwa ada guru bahasa yang cerdas.</li>
                         </ul>
                      </div>
                   </div>
                   
                   <!-- Soal 3 -->
                   <div class="mt-8 pt-8 border-t border-Grayscale-200">
                      <ol start="3" class="list-decimal list-outside pl-5 space-y-2 text-body-l">
                         <li>
                            Tentukan negasi (ingkaran) dari pernyataan-pernyataan berikut:
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                               <li>p: Semua dokter memakai baju putih saat bekerja.</li>
                               <li>p: Semua jenis burung bisa terbang.</li>
                               <li>p: Semua anak mengikuti ujian fisika hari ini.</li>
                            </ul>
                         </li>
                      </ol>
                      
                      <!-- Pembahasan Soal 3 -->
                      <div class="mt-4 p-4 bg-Grayscale-50 rounded-md border border-Grayscale-200">
                         <h5 class="font-bold text-body-l text-Grayscale-900 mb-2">Pembahasan:</h5>
                         <p class="text-body-l mb-2">Pernyataan yang memuat kata "Semua" atau "Setiap" negasinya memuat "Beberapa" atau "Ada" seperti berikut:</p>
                         <ul class="list-disc list-outside pl-5 space-y-2 text-body-l text-Grayscale-700">
                            <li><strong>~p: Ada dokter tidak memakai baju putih saat bekerja.</strong></li>
                            <li><strong>~p: Beberapa jenis burung tidak bisa terbang.</strong></li>
                            <li><strong>~p: Beberapa anak tidak mengikuti ujian fisika hari ini.</strong></li>
                         </ul>
                      </div>
                   </div>
                </div>
              </section>
            </div>
    `;

    const quizQuestions = [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Tidak seorangpun peserta UTBK diizinkan memotret soal-soal ujian. Sebagian siswa SMAN 15 Medan menjadi peserta UTBK. Simpulan dari kedua pernyataan di atas?",
        options: [
          {
            id: "a",
            text: "Semua siswa yang tidak diizinkan memotret soal-soal ujian bukan siswa SMAN 15 Medan",
          },
          {
            id: "b",
            text: "Semua siswa SMAN 15 Medan yang menjadi peserta UTBK tidak diizinkan memotret soal soal ujian",
          },
          {
            id: "c",
            text: "Sebagian siswa SMAN 15 Medan yang menjadi peserta UTBK diizinkan memotret soal soal ujian",
          },
          {
            id: "d",
            text: "Sebagian siswa yang diizinkan memotret soal-soal ujian adalah siswa SMAN 15 Medan",
          },
          {
            id: "e",
            text: "Sebagian siswa yang bukan SMAN 15 Medan tidak diizinkan memotret soal-soal ujian",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Silogisme Kategorik: Himpunan 'Peserta UTBK' ada di dalam aturan 'Tidak boleh memotret'. Sebagian siswa SMAN 15 masuk dalam himpunan 'Peserta UTBK'. Maka, sebagian siswa tersebut otomatis terkena aturan 'Tidak boleh memotret'.",
        points: 6,
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Jika komputer TIDAK layak kerja -> Booting lama, Not Responding, Blue Screen. Fakta: Komputer booting sebentar, jarang not responding, tidak blue screen. Simpulan?",
        options: [
          { id: "a", text: "Tidak layak digunakan untuk bekerja" },
          { id: "b", text: "Layak digunakan untuk bekerja" },
          { id: "c", text: "Layak digunakan untuk bermain" },
          { id: "d", text: "Tidak dapat dijual kembali" },
          { id: "e", text: "Dapat dijual kembali" },
        ],
        correctAnswer: "b",
        explanation:
          "Modus Tollens: Jika P maka Q (~P -> Q). Faktanya ~Q (gejala buruk tidak terjadi). Kesimpulannya adalah negasi dari ~P, yaitu P (Komputer Layak).",
        points: 6,
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "Kuda hewan berkaki berempat. Harimau hewan karnivora. Simpulan?",
        options: [
          { id: "a", text: "Hewan berkaki empat adalah karnivora" },
          { id: "b", text: "Harimau dan kuda adalah karnivora" },
          { id: "c", text: "Harimau adalah hewan pemakan daging" },
          { id: "d", text: "Kaki harimau sama dengan kaki kuda" },
          { id: "e", text: "Tidak dapat ditarik kesimpulan" },
        ],
        correctAnswer: "e",
        explanation:
          "Kedua premis tidak memiliki 'term penengah' (middle term) yang menghubungkan keduanya. Kuda dan Harimau dibahas dalam kategori yang berbeda (kaki vs jenis makanan). Tidak ada hubungan logis.",
        points: 6,
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Ada sayur yang hijau. Semua yang hijau itu bergizi. Kesimpulan?",
        options: [
          { id: "a", text: "Sayur dan sesuatu yang hijau itu bergizi" },
          { id: "b", text: "Ada sayur yang tidak bergizi" },
          { id: "c", text: "Semua sayur itu bergizi" },
          { id: "d", text: "Ada sesuatu yang hijau yang bergizi" },
          { id: "e", text: "Ada sesuatu yang hijau yang bukan sayur" },
        ],
        correctAnswer: "d",
        explanation:
          "Irisan Himpunan: Karena 'Semua hijau = Bergizi', maka objek apapun yang hijau (termasuk sayur hijau tersebut) pasti bergizi. Maka benar bahwa 'Ada sesuatu yang hijau (yaitu sayur tadi) yang bergizi'.",
        points: 6,
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Jika haus -> minum. Jika minum -> pakai gelas. Kesimpulan?",
        options: [
          { id: "a", text: "Sebagian yang minum merasa haus" },
          { id: "b", text: "Sebagian yang memakai gelas merasa haus." },
          { id: "c", text: "Semua yang memakai gelas, tentu haus." },
          { id: "d", text: "Semua yang memakai gelas, tidak haus." },
          { id: "e", text: "Semua yang haus memakai gelas." },
        ],
        correctAnswer: "e",
        explanation:
          "Silogisme Hipotetis (Chain Rule): P -> Q, Q -> R. Kesimpulan: P -> R (Jika haus, maka memakai gelas).",
        points: 6,
      },
      {
        id: "q6",
        type: "multiple-choice",
        question:
          "Semua gunung dihuni binatang liar. Salak adalah gunung yang berada di Jawa Barat. Simpulan?",
        options: [
          { id: "a", text: "Salak hanya dihuni bukan binatang liar." },
          { id: "b", text: "Salak tidak dihuni binatang liar." },
          { id: "c", text: "Bukan Salak yang dihuni binatang liar." },
          { id: "d", text: "Kecuali Salak, gunung dihuni binatang liar." },
          { id: "e", text: "Salak dihuni binatang liar" },
        ],
        correctAnswer: "e",
        explanation:
          "Karena Salak adalah anggota himpunan 'Gunung', dan semua 'Gunung' memiliki sifat 'dihuni binatang liar', maka Salak otomatis memiliki sifat tersebut.",
        points: 7,
      },
      {
        id: "q7",
        type: "multiple-choice",
        question:
          "Jika Duta berminat musik -> rajin berlatih. Duta berprestasi jika rajin berlatih. Tahun ini, Duta rajin berlatih.",
        options: [
          {
            id: "a",
            text: "Duta dapat berprestasi pada bidang musik tahun ini.",
          },
          { id: "b", text: "Duta berminat pada bidang musik tahun ini." },
          {
            id: "c",
            text: "Tahun lalu, Duta belum berminat pada bidang musik.",
          },
          { id: "d", text: "Duta ingin berprestasi pada bidang musik." },
          {
            id: "e",
            text: "Duta tidak rajin berlatih bidang musik tahun lalu.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "Premis: Rajin Berlatih -> Dapat Berprestasi. Fakta: Duta Rajin Berlatih. Kesimpulan: Duta dapat berprestasi. (Catatan: Kita tidak bisa menyimpulkan Duta 'Berminat' karena itu adalah affirming the consequent/menegaskan akibat).",
        points: 7,
      },
      {
        id: "q8",
        type: "multiple-choice",
        question:
          "Semua mahasiswa lulus ujian bahasa Inggris. Ada beberapa mahasiswa yang tidak lulus ujian bahasa Spanyol.",
        options: [
          { id: "a", text: "Semua mahasiswa lulus ujian bahasa Spanyol" },
          {
            id: "b",
            text: "Tidak ada mahasiswa yang lulus ujian bahasa Inggris.",
          },
          {
            id: "c",
            text: "Ada mahasiswa yang lulus ujian bahasa Inggris namun tidak lulus ujian bahasa Spanyol",
          },
          {
            id: "d",
            text: "Semua mahasiswa lulus ujian bahasa Inggris dan Spanyol",
          },
          {
            id: "e",
            text: "Sedikit mahasiswa yang lulus ujian bahasa Spanyol.",
          },
        ],
        correctAnswer: "c",
        explanation:
          "Karena 'Semua' lulus Inggris, maka mahasiswa yang 'tidak lulus Spanyol' itu pun pasti lulus Inggris. Jadi, ada mahasiswa yang lulus Inggris (syarat umum) tapi gagal Spanyol (syarat khusus).",
        points: 7,
      },
      {
        id: "q9",
        type: "multiple-choice",
        question:
          "Perjanjian: Mundur dengan pesangon ATAU Perusahaan ditutup. Ternyata perusahaan tidak ditutup. Kesimpulan?",
        options: [
          { id: "a", text: "Perusahaan memberi pesangon kepada karyawan." },
          { id: "b", text: "Karyawan memilih perusahaan ditutup." },
          { id: "c", text: "Sebagian karyawan tidak diberi pesangon." },
          { id: "d", text: "Direktur memberhentikan sebagian karyawan." },
          { id: "e", text: "Sebagian karyawan tidak mau mengundurkan diri" },
        ],
        correctAnswer: "a",
        explanation:
          "Silogisme Disjungtif: A atau B. Tidak B. Maka A. (Pesangon ATAU Tutup. Tidak Tutup. Maka Pesangon).",
        points: 7,
      },
      {
        id: "q10",
        type: "multiple-choice",
        question:
          'Negasi dari pernyataan "Hari ini tidak hujan DAN saya tidak membawa payung" adalah...',
        options: [
          { id: "a", text: "Hari ini hujan tetapi saya tidak membawa payung" },
          { id: "b", text: "Hari ini tidak hujan tetapi saya membawa payung" },
          {
            id: "c",
            text: "Hari ini tidak hujan atau saya tidak membawa payung",
          },
          { id: "d", text: "Hari ini hujan atau saya membawa payung" },
          { id: "e", text: "Saya tidak membawa payung" },
        ],
        correctAnswer: "d",
        explanation:
          "Hukum De Morgan: Negasi dari (P DAN Q) adalah (Tidak P ATAU Tidak Q). Negasi 'Tidak Hujan' = Hujan. Negasi 'Tidak bawa payung' = Bawa payung. Penghubung 'DAN' berubah jadi 'ATAU'.",
        points: 7,
      },
      {
        id: "q11",
        type: "multiple-choice",
        question:
          "Semua guru matematika cerdas. Ada beberapa guru bahasa yang juga cerdas. Simpulan?",
        options: [
          { id: "a", text: "Ada guru bahasa yang tidak cerdas" },
          { id: "b", text: "Tidak ada guru matematika yang cerdas" },
          { id: "c", text: "Ada individu yang cerdas bukan guru matematika" },
          { id: "d", text: "Semua guru bahasa cerdas" },
          { id: "e", text: "Tidak ada guru bahasa yang cerdas" },
        ],
        correctAnswer: "c",
        explanation:
          "Himpunan orang cerdas berisi: Semua Guru MTK + Beberapa Guru Bahasa. Artinya, ada orang di dalam himpunan 'Cerdas' yang merupakan Guru Bahasa (Bukan Guru MTK).",
        points: 7,
      },
      {
        id: "q12",
        type: "multiple-choice",
        question:
          "Premis: (1) IT + Sertifikat -> Bonus. (2) Beberapa IT punya (Sertifikat ATAU Pengalaman > 5th). (3) Tidak semua IT dapat bonus. Simpulan?",
        options: [
          {
            id: "a",
            text: "Ada karyawan di divisi IT yang memiliki pengalaman kerja lebih dari 5 tahun tetapi tidak mendapatkan bonus",
          },
          {
            id: "b",
            text: "Semua karyawan yang memiliki sertifikasi internasional tidak mendapatkan bonus.",
          },
          {
            id: "c",
            text: "Ada karyawan yang mendapatkan bonus tetapi tidak memiliki sertifikasi internasional.",
          },
          {
            id: "d",
            text: "Semua karyawan di divisi IT mendapatkan bonus hanya jika memiliki pengalaman kerja lebih dari 5 tahun.",
          },
          {
            id: "e",
            text: "Semua karyawan di divisi IT yang memiliki pengalaman kerja lebih dari 5 tahun mendapatkan bonus",
          },
        ],
        correctAnswer: "a",
        explanation:
          "Syarat bonus adalah Sertifikat. Pengalaman > 5 tahun BUKAN syarat bonus (hanya deskripsi tambahan di premis 2). Maka, karyawan IT dengan pengalaman > 5 tahun TAPI tanpa sertifikat, tidak akan dapat bonus.",
        points: 7,
      },
      {
        id: "q13",
        type: "multiple-choice",
        question:
          "Semua orang yang kedinginan akan menggigil. Sebagian pendaki gunung tidak menggigil. Simpulan?",
        options: [
          {
            id: "a",
            text: "Ada pendaki yang kedinginan dan ada pendaki yang menggigil",
          },
          {
            id: "b",
            text: "Semua orang yang menjadi pendaki tidak akan menggigil",
          },
          { id: "c", text: "Semua pendaki gunung akan menggigil" },
          { id: "d", text: "Sebagian pendaki gunung tidak akan menggigil" },
          { id: "e", text: "Sebagian pendaki gunung tidak kedinginan" },
        ],
        correctAnswer: "e",
        explanation:
          "Modus Tollens pada sebagian himpunan: Jika Kedinginan -> Menggigil. Fakta: Tidak Menggigil. Kesimpulan: Tidak Kedinginan. Karena ini berlaku pada 'Sebagian pendaki', maka 'Sebagian pendaki tidak kedinginan'.",
        points: 7,
      },
      {
        id: "q14",
        type: "matrix",
        context:
          "Konteks: Semua jeruk oranye. Beberapa apel manis. Pisang selalu kuning.",
        question: "Jawab pertanyaan dari kolom berikut! (Benar/Salah)",
        rows: [
          {
            id: "r1",
            text: "Jika suatu buah berwarna oranye, apakah itu jeruk?",
          },
          {
            id: "r2",
            text: "Jika suatu buah memiliki rasa manis, apakah itu apel?",
          },
          {
            id: "r3",
            text: "Jika suatu buah berwarna kuning, apakah itu pisang?",
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
          "Soal asli tidak memuat pernyataan spesifik untuk dinilai. Jawaban disesuaikan dengan kunci: Benar, Benar, Salah.",
        points: 7,
      },
      {
        id: "q15",
        type: "multiple-choice",
        question:
          "Tentukan negasi (ingkaran) dari pernyataan-pernyataan berikut:\np: Semua dokter memakai baju putih saat bekerja.\np : Semua jenis burung bisa terbang\np: Semua anak mengikuti ujian fisika hari ini.",
        options: [
          {
            id: "a",
            text: "1. Ada/Beberapa dokter tidak memakai baju putih saat bekerja.\n2. Ada/Beberapa jenis burung tidak bisa terbang.\n3. Ada/Beberapa anak tidak mengikuti ujian fisika hari ini.",
          },
          {
            id: "b",
            text: "1. Tidak ada dokter yang memakai baju putih saat bekerja.\n2. Tidak ada jenis burung yang bisa terbang.\n3. Tidak ada anak yang mengikuti ujian fisika hari ini.",
          },
          {
            id: "c",
            text: "1. Beberapa dokter memakai baju putih saat bekerja.\n2. Beberapa jenis burung bisa terbang.\n3. Beberapa anak mengikuti ujian fisika hari ini.",
          },
          {
            id: "d",
            text: "1. Semua dokter tidak memakai baju putih saat bekerja.\n2. Semua jenis burung tidak bisa terbang.\n3. Semua anak tidak mengikuti ujian fisika hari ini.",
          },
          {
            id: "e",
            text: "1. Dokter mungkin memakai baju putih.\n2. Burung mungkin bisa terbang.\n3. Anak mungkin mengikuti ujian.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "Negasi dari kuantor Universal (Semua P adalah Q) adalah kuantor Eksistensial (Ada/Beberapa P yang BUKAN Q).",
        points: 7,
      },
    ];

    const stepsData = [
      {
        title: "Konsep Dasar & Negasi Kuantor",
        type: "reading",
        status: "unlocked",
        description:
          "Pelajari konsep dasar kuantor universal, eksistensial, dan negasinya.",
        content: readingDefinisi,
      },
      {
        title: "Rumus Penarikan Kesimpulan",
        type: "reading",
        status: "locked",
        description:
          "Kumpulan rumus penting untuk menarik kesimpulan yang valid.",
        content: readingRumus,
      },
      {
        title: "Video Pembahasan Logika Kuantor",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/nsNSQC1bjfc",
        description: "Video pembahasan mendalam mengenai logika kuantor.",
      },
      {
        title: "Contoh Soal & Pembahasan",
        type: "reading",
        status: "locked",
        description: "Contoh soal Logika Kuantor tipe SNBT.",
        content: exampleContent,
      },
      {
        title: "Tes Penalaran Umum: Silogisme dan Logika Matematika",
        type: "quiz",
        status: "locked",
        description: "Uji pemahamanmu tentang logika kuantor dan silogisme.", // Updated description
        questions: quizQuestions,
      },
    ];

    console.log("Creating module payload...");

    // Instead of using Module model directly (which might fail validation if schema is strict and we have mixed fields),
    // we use the direct mongo collection insertion similar to seedSilogisme.js for safety,
    // OR ensure we match the Mongoose schema exactly.
    // The previous error in my thought process was that I assumed seedSilogisme.js was using direct insertion because of `moduleCollection.insertOne`,
    // and yes it is. So I should probably follow that pattern to be safe and consistent.

    const moduleCollection = mongoose.connection.collection("modules");

    // Find course first to get ID
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.warn("Course 'Penalaran Umum' not found.");
    }

    const modulePayload = {
      _id: moduleId,
      courseId: course ? course._id : new mongoose.Types.ObjectId(), // Fallback if course not found
      name: "Logika Kuantor",
      description:
        "Memahami logika kuantor universal dan eksistensial, serta negasinya dalam penalaran analitis.",
      subcategory: "Penalaran Analitis",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100, // Fixed points
    };

    console.log("Upserting module data...");
    await moduleCollection.deleteOne({ _id: moduleId });
    await moduleCollection.insertOne(modulePayload);
    console.log(`Module Seeded Successfully: ${modulePayload.name}`);

    // Disconnect
    await mongoose.disconnect();
    console.log("Done.");
  } catch (error) {
    console.error("Seeding error:", error);
    const fs = require("fs");
    // Using simple object for error serialization or custom JSON stringify
    const errorObj = {
      message: error.message,
      stack: error.stack,
      errors: error.errors,
    };
    fs.writeFileSync("seed_error.json", JSON.stringify(errorObj, null, 2));

    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
    }
    process.exit(1);
  }
};

seedLogikaKuantor();
