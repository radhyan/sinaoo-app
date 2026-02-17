const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSilogisme = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }

    const targetId = "silogisme-analitis";

    const stepsData = [
      {
        title: "Apa itu Silogisme?",
        type: "reading",
        status: "active",
        description: "Pengertian dan Konsep Dasar Silogisme",
        content: `
          <div class="space-y-12 text-Grayscale-900">
            <!-- Pengertian -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Silogisme?</h3>
              <p class="text-body-l leading-relaxed mb-8">
                Definisi <strong>Silogisme</strong> adalah cara berpikir logis untuk <strong>menarik kesimpulan</strong> berdasarkan hubungan antara <strong>dua premis-premis</strong> (pernyataan). Premis yang dimaksud adalah premis mayor dan premis minor.
              </p>

              <div class="bg-Primary-50 rounded-xl p-8 border-2 border-Primary-100 shadow-sm mb-8">
                <h5 class="text-h5 font-bold text-Primary-800 mb-4 flex items-center gap-2 font-heading">
                  <span class="w-2 h-6 bg-Primary-500 rounded-full"></span>
                  Contoh Sederhananya:
                </h5>
                <ul class="space-y-3 text-body-l text-Grayscale-800 list-none p-0 m-0">
                  <li class="flex items-start gap-3">
                    <span class="font-bold text-Primary-600 min-w-[140px]">• Premis mayor:</span>
                    <span>Semua manusia pasti mati.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="font-bold text-Primary-600 min-w-[140px]">• Premis minor:</span>
                    <span>Ani adalah manusia.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="font-bold text-Success-500 min-w-[140px]">• Kesimpulan:</span>
                    <span class="font-bold">Ani pasti mati.</span>
                  </li>
                </ul>
              </div>
              <p class="text-body-l text-Grayscale-600">
                Jadi silogisme terdiri dari premis mayor, premis minor, dan kesimpulan.
              </p>
            </section>

            <!-- Jenis-jenis Silogisme -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis-jenis Silogisme</h3>
              
              <!-- Silogisme Kategorik -->
              <div class="bg-white rounded-2xl border-2 border-Primary-100 p-8 mb-8 shadow-sm">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h5 class="text-h5 font-bold text-Primary-900 font-heading mb-2">Silogisme Kategorik</h5>
                    <p class="text-body-l text-Grayscale-700">Kesimpulan ditarik dari dua pernyataan yang mengandung kategori tertentu. Seperti Semua A adalah B, semua B adalah C, maka semua A adalah C.</p>
                  </div>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-8 items-center bg-Primary-50/50 p-6 rounded-xl border border-Primary-100">
                  <div class="flex-1 space-y-4">
                    <p class="text-h5 font-bold text-Primary-800 mb-4">Contoh :</p>
                    <div class="space-y-6">
                      <!-- Row 1 -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l">
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Primary-500 px-2 pb-1 text-Primary-900 font-bold">Semua kucing</span>
                          <span class="text-Primary-500 font-mono font-bold mt-1">p</span>
                        </div>
                        <span class="pt-1">adalah</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Primary-500 px-2 pb-1 text-Primary-900 font-bold">mamalia</span>
                          <span class="text-Primary-500 font-mono font-bold mt-1">q</span>
                        </div>
                      </div>
                      <!-- Row 2 -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l">
                         <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Primary-500 px-2 pb-1 text-Primary-900 font-bold">Semua mamalia</span>
                          <span class="text-Primary-500 font-mono font-bold mt-1">q</span>
                        </div>
                        <span class="pt-1">memiliki</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Primary-500 px-2 pb-1 text-Primary-900 font-bold">tulang belakang</span>
                          <span class="text-Primary-500 font-mono font-bold mt-1">r</span>
                        </div>
                      </div>
                      <!-- Row Result -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l pt-4 border-t-2 border-Primary-200">
                        <span class="font-bold text-Success-600 pt-1">Maka</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Secondary-500 px-2 pb-1 text-Secondary-900 font-bold">Semua kucing</span>
                          <span class="text-Secondary-500 font-mono font-bold mt-1">p</span>
                        </div>
                        <span class="pt-1">, memiliki</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Secondary-500 px-2 pb-1 text-Secondary-900 font-bold">tulang belakang</span>
                          <span class="text-Secondary-500 font-mono font-bold mt-1">r</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Blue Formula Box -->
                  <div class="bg-Primary-500 rounded-xl p-8 text-white min-w-[180px] shadow-lg shadow-Primary-200 text-center">
                    <div class="text-h3 font-mono font-bold mb-2">p = q</div>
                    <div class="text-h3 font-mono font-bold mb-2">q = r</div>
                    <div class="w-full h-0.5 bg-white/40 my-3"></div>
                    <div class="text-h3 font-mono font-bold">p = r</div>
                  </div>
                </div>
              </div>

              <!-- Silogisme Hipotetik -->
              <div class="bg-white rounded-2xl border-2 border-Secondary-100 p-8 mb-8 shadow-sm">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h5 class="text-h5 font-bold text-Secondary-900 font-heading mb-2">Silogisme Hipotetik</h5>
                    <p class="text-body-l text-Grayscale-700">Premis mayor berbentuk <strong>"jika-maka"</strong>. Seperti Jika A terjadi, maka B terjadi. A terjadi, maka B terjadi.</p>
                  </div>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-8 items-center bg-Secondary-50/50 p-6 rounded-xl border border-Secondary-100">
                  <div class="flex-1 space-y-4">
                    <p class="text-h5 font-bold text-Secondary-800 mb-4">Contoh :</p>
                    <div class="space-y-6">
                      <!-- Row 1 -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l">
                         <span class="pt-1">Jika</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Secondary-500 px-2 pb-1 text-Secondary-900 font-bold uppercase">Holland terlambat ke perpustakaan</span>
                          <span class="text-Secondary-500 font-mono font-bold mt-1">p</span>
                        </div>
                        <span class="pt-1">,</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Secondary-500 px-2 pb-1 text-Secondary-900 font-bold uppercase">Zendaya memarahinya</span>
                          <span class="text-Secondary-500 font-mono font-bold mt-1">q</span>
                        </div>
                      </div>
                      <!-- Row 2 -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l">
                         <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Secondary-500 px-2 pb-1 text-Secondary-900 font-bold uppercase">Holland terlambat ke perpustakaan</span>
                          <span class="text-Secondary-500 font-mono font-bold mt-1">p</span>
                        </div>
                      </div>
                      <!-- Row Result -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l pt-4 border-t-2 border-Secondary-200">
                        <span class="font-bold text-Primary-600 pt-1">Kesimpulan :</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Primary-500 px-2 pb-1 text-Primary-900 font-bold uppercase">Zendaya memarahinya</span>
                          <span class="text-Primary-500 font-mono font-bold mt-1">q</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Blue Formula Box -->
                   <div class="bg-Secondary-500 rounded-xl p-8 text-white min-w-[200px] shadow-lg shadow-Secondary-200 text-center">
                    <div class="text-h3 font-mono font-bold mb-2">p &rarr; q</div>
                    <div class="text-h3 font-mono font-bold mb-2">p</div>
                    <div class="w-full h-0.5 bg-white/40 my-3"></div>
                    <div class="text-h3 font-mono font-bold">q</div>
                  </div>
                </div>
              </div>

               <!-- Silogisme Alternatif -->
              <div class="bg-white rounded-2xl border-2 border-Tertiary-100 p-8 mb-8 shadow-sm">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h5 class="text-h5 font-bold text-Tertiary-900 font-heading mb-2">Silogisme Alternatif</h5>
                    <p class="text-body-l text-Tertiary-700">Premis mayor menawarkan dua kemungkinan, dan salah satu dianggap benar. Seperti A atau B. A tidak terjadi, maka B terjadi.</p>
                  </div>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-8 items-center bg-Tertiary-50/50 p-6 rounded-xl border border-Tertiary-100">
                  <div class="flex-1 space-y-4">
                    <p class="text-h5 font-bold text-Tertiary-800 mb-4">Contoh :</p>
                    <div class="space-y-6">
                      <!-- Row 1 -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l">
                         <span class="pt-1">Saya akan membeli</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Tertiary-500 px-2 pb-1 text-Tertiary-900 font-bold">eskrim</span>
                          <span class="text-Tertiary-500 font-mono font-bold mt-1">p</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <span class="pt-1 font-bold italic">atau</span>
                          <span class="text-Tertiary-500 font-mono font-bold mt-1">v</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Tertiary-500 px-2 pb-1 text-Tertiary-900 font-bold">kue</span>
                          <span class="text-Tertiary-500 font-mono font-bold mt-1">q</span>
                        </div>
                      </div>
                      <!-- Row 2 -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l">
                         <span class="pt-1">Saya membeli</span>
                         <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Tertiary-500 px-2 pb-1 text-Tertiary-900 font-bold">eskrim</span>
                          <span class="text-Tertiary-500 font-mono font-bold mt-1">p</span>
                        </div>
                      </div>
                      <!-- Row Result -->
                      <div class="flex flex-wrap gap-x-4 gap-y-2 text-body-l pt-4 border-t-2 border-Tertiary-200">
                        <span class="font-bold text-Tertiary-500 pt-1">Kesimpulan : Saya</span>
                        <div class="flex flex-col items-center">
                          <span class="border-b-2 border-Tertiary-500 px-2 pb-1 text-Tertiary-900 font-bold underline decoration-Error-300 underline-offset-4">tidak membeli kue</span>
                          <span class="text-Tertiary-500 font-mono font-bold mt-1">-q</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Blue Formula Box -->
                   <div class="bg-Tertiary-500 rounded-xl p-8 text-white min-w-[180px] shadow-lg shadow-Tertiary-200 text-center">
                    <div class="text-h3 font-mono font-bold mb-2">p v q</div>
                    <div class="text-h3 font-mono font-bold mb-2">p</div>
                    <div class="w-full h-0.5 bg-white/40 my-3"></div>
                    <div class="text-h3 font-mono font-bold">~q</div>
                  </div>
                </div>
              </div>

               <!-- Ingat Box -->
              <div class="mt-12 bg-Primary-900 rounded-3xl p-10 text-white relative overflow-hidden">
                 <!-- Background Text Decor -->
                 <div class="absolute right-0 top-1 select-none pointer-events-none -translate-y-1/4 translate-x-1/4 rotate-[-45deg]">
                    <img src="/images/characters/mascot-blue.png" alt="Mascot" class="w-[400px] h-auto object-contain" />
                 </div>
                 
                 <h4 class="text-h4 font-bold mb-10 uppercase tracking-widest text-Primary-200 flex items-center gap-4">
                    <span class="w-12 h-1 bg-Primary-400"></span>
                    Ingat!
                 </h4>
                 
                 <div class="flex flex-wrap justify-center gap-10 relative z-10">
                   <!-- Formula 1 -->
                   <div class="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 rounded-2xl text-start min-w-[200px] transition-transform hover:scale-105">
                      <div class="text-h3 font-mono font-bold text-white mb-2">p = q</div>
                      <div class="text-h3 font-mono font-bold text-white mb-2">q = r</div>
                      <div class="w-full h-1 bg-white/30 my-4"></div>
                      <div class="text-h3 font-mono font-black text-Primary-200">p = r</div>
                   </div>
                   
                   <!-- Formula 2 -->
                   <div class="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 rounded-2xl text-start min-w-[200px] transition-transform hover:scale-105">
                      <h3 class="m-0 text-Secondary-200 text-h3 font-bold mb-4 uppercase tracking-tighter">Silogisme Hipotetik</h3>
                      <div class="text-h2 font-mono font-bold text-white mb-2">p &rarr; q</div>
                      <div class="text-h2 font-mono font-bold text-white mb-2">p</div>
                      <div class="w-full h-1 bg-white/30 my-4"></div>
                      <div class="text-h2 font-mono font-black text-Secondary-200">q</div>
                   </div>
                   
                   <!-- Formula 3 -->
                   <div class="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 rounded-2xl text-start min-w-[200px] transition-transform hover:scale-105">
                      <h3 class=" m-0 text-Tertiary-200 text-h3 font-bold mb-4 uppercase tracking-tighter">Silogisme Alternatif</h3>
                      <div class="text-h2 font-mono font-bold text-white mb-2">p v q</div>
                      <div class="text-h2 font-mono font-bold text-white mb-2">p</div>
                      <div class="w-full h-1 bg-white/30 my-4"></div>
                      <div class="text-h2 font-mono font-black text-Tertiary-200">~q</div>
                   </div>
                 </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Contoh Soal & Pembahasan",
        type: "reading",
        status: "locked",
        description: "Penerapan Silogisme dalam soal SNBT",
        content: `
          <div class="space-y-12 text-Grayscale-900">
            <!-- Contoh Analitis SNBT -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Soal di SNBT</h3>
              
              <div class="bg-white rounded-md border-2 border-Primary-50 overflow-hidden shadow-sm mb-12">
                <div class="bg-Primary-50 p-4 text-Primary-900 border-b-2 border-Primary-100 flex items-center justify-between">
                  <h5 class="text-h5 font-bold m-0 font-heading">Contoh 1: Silogisme Kompleks</h5>
                  <span class="bg-Primary-500 text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">Level: Sulit</span>
                </div>
                
                <div class="p-8">
                  <div class="mb-8 p-6 bg-Grayscale-50 rounded-xl border-l-8 border-Primary-500 shadow-inner">
                    <p class="text-body-l leading-relaxed italic text-Grayscale-800 m-0">
                      "Semua ilmuwan yang terkenal memiliki karya tulis yang berpengaruh. Albert Einstein adalah ilmuwan yang terkenal. Karya tulis yang berpengaruh sering dijadikan acuan dalam penelitian ilmiah."
                    </p>
                  </div>

                  <div class="space-y-4 mb-8">
                     <p class="font-bold text-body-l text-Primary-800">Pertanyaan: Kesimpulan yang tepat adalah...</p>
                     <div class="grid grid-cols-1 gap-3">
                       <div class="p-4 border rounded-xl border-Grayscale-100 text-body-l hover:bg-Grayscale-50 transition-colors">A. Albert Einstein memiliki karya tulis yang berpengaruh.</div>
                       <div class="p-4 border-2 border-Success-200 bg-Success-50 rounded-xl text-body-l font-bold text-Success-900 flex justify-between items-center group shadow-sm transition-all scale-[1.02]">
                          <span>B. Karya tulis Albert Einstein sering dijadikan acuan dalam penelitian ilmiah.</span>
                          <div class="bg-Success-500 text-white text-xs px-2 py-1 rounded font-black">JAWABAN TEPAT</div>
                       </div>
                       <div class="p-4 border rounded-xl border-Grayscale-100 text-body-l hover:bg-Grayscale-50 transition-colors">C. Semua ilmuwan memiliki karya tulis yang berpengaruh.</div>
                       <div class="p-4 border rounded-xl border-Grayscale-100 text-body-l hover:bg-Grayscale-50 transition-colors">D. Albert Einstein adalah ilmuwan yang memiliki karya tulis.</div>
                       <div class="p-4 border rounded-xl border-Grayscale-100 text-body-l hover:bg-Grayscale-50 transition-colors">E. Karya tulis ilmuwan terkenal hanya dijadikan acuan oleh ilmuwan lain.</div>
                     </div>
                  </div>

                  <!-- Pembahasan High Fidelity -->
                  <div class="bg-Primary-50/50 rounded-2xl p-8 border-2 border-Primary-100">
                    <h5 class="text-h5 font-bold text-Primary-800 mb-6 font-heading flex gap-3 items-center">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-Primary-500 text-white shadow-md">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      Pembahasan Logika:
                    </h5>
                    <div class="space-y-8 text-body-l">
                       <!-- Premis 1 -->
                       <div class="flex flex-wrap gap-x-4 gap-y-3 bg-white p-4 rounded-xl shadow-sm border border-Primary-50">
                          <span class="text-Primary-700 font-bold bg-Primary-100 px-3 py-1 rounded-lg">Premis 1 (p &rarr; q)</span>
                          <span class="pt-1">Semua</span>
                          <div class="flex flex-col items-center">
                            <span class="border-b-2 border-Primary-400 px-1 font-bold text-Primary-900">ilmuwan yang terkenal</span>
                            <span class="text-Primary-500 font-mono font-bold text-sm tracking-widest mt-1">label: p</span>
                          </div>
                          <span class="pt-1">, memiliki</span>
                          <div class="flex flex-col items-center">
                            <span class="border-b-2 border-Primary-400 px-1 font-bold text-Primary-900">karya tulis yang berpengaruh</span>
                            <span class="text-Primary-500 font-mono font-bold text-sm tracking-widest mt-1">label: q</span>
                          </div>
                       </div>

                       <!-- Premis 2 -->
                        <div class="flex flex-wrap gap-x-4 gap-y-3 bg-white p-4 rounded-xl shadow-sm border border-Primary-50">
                          <span class="text-Primary-700 font-bold bg-Primary-100 px-3 py-1 rounded-lg">Premis 2 (r)</span>
                          <div class="flex flex-col items-center">
                            <span class="border-b-2 border-Primary-400 px-1 font-bold text-Primary-900 underline decoration-dotted underline-offset-4">Albert Einstein adalah ilmuwan yang terkenal</span>
                            <span class="text-Primary-500 font-mono font-bold text-sm tracking-widest mt-1">label: r</span>
                          </div>
                       </div>

                       <!-- Premis 3 -->
                        <div class="flex flex-wrap gap-x-4 gap-y-3 bg-white p-4 rounded-xl shadow-sm border border-Primary-50">
                          <span class="text-Primary-700 font-bold bg-Primary-100 px-3 py-1 rounded-lg">Premis 3 (q &rarr; s)</span>
                          <div class="flex flex-col items-center">
                            <span class="border-b-2 border-Primary-400 px-1 font-bold text-Primary-900">Karya tulis yang berpengaruh</span>
                            <span class="text-Primary-500 font-mono font-bold text-sm tracking-widest mt-1">label: q</span>
                          </div>
                          <span class="pt-1">sering</span>
                          <div class="flex flex-col items-center">
                            <span class="border-b-2 border-Primary-400 px-1 font-bold italic text-Primary-900">dijadikan acuan dalam penelitian ilmiah</span>
                            <span class="text-Primary-500 font-mono font-bold text-sm tracking-widest mt-1">label: s</span>
                          </div>
                       </div>

                       <div class="bg-Primary-900 p-8 rounded-2xl shadow-xl transform translate-y-2">
                         <p class="mb-4 text-Primary-100 font-sans tracking-wide uppercase text-xs font-bold">Kesimpulan Rantai Logika (Syllogism Chain):</p>
                         <ul class="list-none p-0 m-0 space-y-4 text-white">
                           <li class="flex items-center gap-3">
                              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-Primary-700 flex items-center justify-center font-bold text-sm">1</span>
                              <span class="font-medium text-lg">r (Einstein) &rarr; p (Ilmuwan Terkenal)</span>
                           </li>
                           <li class="flex items-center gap-3">
                              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-Primary-700 flex items-center justify-center font-bold text-sm">2</span>
                              <span class="font-medium text-lg">p &rarr; q (Karya Berpengaruh)</span>
                           </li>
                           <li class="flex items-center gap-3">
                              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-Primary-700 flex items-center justify-center font-bold text-sm">3</span>
                              <span class="font-medium text-lg">q &rarr; s (Acuan Penelitian)</span>
                           </li>
                         </ul>
                         <p class="mt-8 pt-6 border-t border-Primary-700 text-h4 text-Success-400 font-black font-heading tracking-tight leading-tight">
                           &there4; Karya tulis Albert Einstein sering dijadikan acuan dalam penelitian ilmiah.
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Analitis Puzzle High Fidelity -->
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Studi Kasus: Urutan Kedatangan</h3>
              
              <div class="bg-white rounded-md border-2 border-Secondary-50 overflow-hidden shadow-sm mb-12">
                <div class="bg-Secondary-50 p-4 text-Secondary-900 border-b-2 border-Secondary-100 flex items-center justify-between font-heading">
                   <h5 class="text-h5 font-bold m-0 flex items-center gap-2">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                      Puzzle Analitis: Kelompok Drama
                   </h5>
                   <span class="text-sm font-bold opacity-70">METODE ELIMINASI</span>
                </div>

                <div class="p-8">
                  <p class="text-h5 text-Secondary-900 mb-10 leading-relaxed font-heading bg-Secondary-50/50 p-6 rounded-2xl border-l-8 border-Secondary-500 italic shadow-inner">
                    "Kelompok drama terdiri dari <strong>Fira, Gita, Harun, Indra, dan Joko</strong>."
                  </p>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
                    <div class="space-y-6">
                      <h5 class="text-h5 font-bold text-Secondary-800 font-heading flex items-center gap-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-Secondary-200 text-Secondary-700">
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </div>
                        Informasi Kunci:
                      </h5>
                      <div class="space-y-4">
                        <div class="flex items-center gap-4 bg-white p-4 rounded-xl border border-Grayscale-100 shadow-sm transition-transform hover:translate-x-2">
                          <span class="font-black text-Secondary-500 text-2xl">01</span>
                          <span class="text-body-l text-Grayscale-700">Harun masuk sebelum Joko.</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white p-4 rounded-xl border border-Grayscale-100 shadow-sm transition-transform hover:translate-x-2">
                          <span class="font-black text-Secondary-500 text-2xl">02</span>
                          <span class="text-body-l text-Grayscale-700">Fira masuk setelah Gita, tetapi sebelum Indra.</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white p-4 rounded-xl border border-Grayscale-100 shadow-sm transition-transform hover:translate-x-2">
                          <span class="font-black text-Secondary-500 text-2xl">03</span>
                          <span class="text-body-l font-bold text-Secondary-900 uppercase tracking-tight">Joko masuk terakhir.</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white p-4 rounded-xl border border-Grayscale-100 shadow-sm transition-transform hover:translate-x-2">
                          <span class="font-black text-Secondary-500 text-2xl">04</span>
                          <span class="text-body-l text-Grayscale-700">Gita masuk sebelum Harun.</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-Secondary-900 rounded-3xl p-10 text-white relative shadow-2xl overflow-hidden">
                      <div class="absolute -right-8 -bottom-8 opacity-5">
                         <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                      </div>
                      
                      <h5 class="text-h5 font-bold text-Secondary-200 mb-8 font-heading uppercase tracking-widest flex items-center gap-2">
                         <span class="w-8 h-1 bg-Secondary-500"></span>
                         Deduksi Logis:
                      </h5>
                      <ol class="space-y-6 text-body-l relative z-10">
                        <li class="flex gap-4 group">
                          <span class="font-black text-Secondary-400 group-hover:text-Secondary-200 transition-colors">1.</span>
                          <span>Joko posisi 5 (Data 03).</span>
                        </li>
                        <li class="flex gap-4 group">
                          <span class="font-black text-Secondary-400 group-hover:text-Secondary-200 transition-colors">2.</span>
                          <span>Harun posisi 4 (Karena sebelum Joko).</span>
                        </li>
                        <li class="flex gap-4 group">
                          <span class="font-black text-Secondary-400 group-hover:text-Secondary-200 transition-colors">3.</span>
                          <span>Gita, Fira, Indra mengisi pos 1, 2, 3.</span>
                        </li>
                        <li class="flex gap-4 group">
                          <span class="font-black text-Secondary-400 group-hover:text-Secondary-200 transition-colors">4.</span>
                          <span>Gita &rarr; Fira &rarr; Indra (Data 02).</span>
                        </li>
                      </ol>
                      
                      <div class="mt-12 p-1 bg-gradient-to-r from-Secondary-500 to-Primary-500 rounded-xl">
                        <div class="bg-Secondary-900 rounded-lg p-5">
                          <span class="text-Secondary-300 font-bold uppercase text-xs tracking-[0.2em] block mb-3">URUTAN FINAL:</span>
                          <div class="text-h3 font-black flex justify-between tracking-tighter text-white">
                            <span class="text-Secondary-200">Gita</span>
                            <span class="opacity-50">&rarr;</span>
                            <span class="text-Secondary-200">Fira</span>
                            <span class="opacity-50">&rarr;</span>
                            <span class="text-Secondary-200">Indra</span>
                            <span class="opacity-50">&rarr;</span>
                            <span class="text-Secondary-200">Harun</span>
                            <span class="opacity-50">&rarr;</span>
                            <span class="text-Secondary-400">Joko</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-Tertiary-50 rounded-2xl border-2 border-Tertiary-100 p-8 shadow-sm">
                    <h5 class="text-h5 font-bold text-Tertiary-900 mb-6 font-heading flex items-center gap-2 underline decoration-Tertiary-300 decoration-4 underline-offset-8">Kesimpulan Cepat:</h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-body-l">
                      <div class="flex items-center justify-between p-5 bg-white rounded-xl border-2 border-Tertiary-100 shadow-sm">
                        <span class="text-Grayscale-700">Urutan Kedua</span>
                        <span class="bg-Tertiary-500 text-white px-4 py-1 rounded-full text-sm font-black uppercase">Fira</span>
                      </div>
                      <div class="flex items-center justify-between p-5 bg-white rounded-xl border-2 border-Tertiary-100 shadow-sm">
                        <span class="text-Grayscale-700">Urutan Pertama</span>
                        <span class="bg-Tertiary-500 text-white px-4 py-1 rounded-full text-sm font-black uppercase">Gita</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          </div>
          </div>
        `,
      },
      {
        title: "Video 1: Konsep Silogisme Dasar",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/bNq_x-mbkzA",
        description: "Simak video penjelasan mengenai konsep dasar Silogisme.",
      },
      {
        title: "Video 2: Strategi Cepat Silogisme",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/pw_PzW_eG90",
        description:
          "Simak video penjelasan mengenai strategi cepat mengerjakan soal Silogisme.",
      },
      {
        title: "Kuis: Silogisme & Penalaran Analitis",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Semua siswa yang bolos sekolah akan dihukum. Sebagian siswa kelas XI terbukti bolos sekolah.",
            question: "Manakah simpulan yang tepat?",
            options: [
              {
                id: "a",
                text: "Siswa kelas XI tidak dihukum meskipun terbukti bolos sekolah",
              },
              {
                id: "b",
                text: "Siswa kelas XI yang tidak terbukti bolos sekolah dihukum",
              },
              {
                id: "c",
                text: "Siswa kelas XI yang tidak terbukti bolos sekolah tidak dihukum",
              },
              { id: "d", text: "Tidak ada siswa kelas XI yang dihukum" },
              {
                id: "e",
                text: "Tidak ada siswa kelas XI yang terbukti bolos sekolah dihukum",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Logika: Himpunan 'Siswa bolos' ada di dalam himpunan 'Dihukum'. Siswa yang TIDAK bolos berada di luar himpunan 'Dihukum' (dalam konteks premis ini). Maka, siswa yang tidak terbukti bolos, tidak dihukum.",
            points: 6,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Siswa X hasil belajar lebih baik di perpustakaan daripada di rumah.",
            question:
              "Manakah pernyataan PALING MUNGKIN menjelaskan perbedaan tersebut?",
            options: [
              {
                id: "a",
                text: "Siswa X merasa lebih nyaman belajar di rumah daripada di perpustakaan",
              },
              {
                id: "b",
                text: "Siswa X sering terganggu oleh kebisingan di sekitar perpustakaan",
              },
              {
                id: "c",
                text: "Siswa X dapat berinteraksi dengan teman sebaya ketika belajar di rumah",
              },
              {
                id: "d",
                text: "Selain buku pelajaran, perpustakaan juga menyediakan novel legendaris",
              },
              {
                id: "e",
                text: "Perpustakaan menyediakan lebih banyak buku pelajaran",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Ketersediaan sumber belajar yang lebih lengkap (buku pelajaran) di perpustakaan adalah faktor pendukung logis yang meningkatkan kualitas belajar dibandingkan di rumah.",
            points: 6,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Semua cerpen adalah karya. Sebagian cerpen berbentuk fiksi.",
            question: "Simpulan yang tepat adalah...",
            options: [
              { id: "a", text: "sebagian karya berbentuk fiksi" },
              { id: "b", text: "semua karya adalah cerpen" },
              { id: "c", text: "semua cerpen berbentuk fiksi" },
              { id: "d", text: "semua fiksi adalah cerpen" },
              { id: "e", text: "Tidak semua cerpen adalah karya" },
            ],
            correctAnswer: "a",
            explanation:
              "Karena 'Sebagian cerpen berbentuk fiksi' dan semua cerpen itu 'karya', maka irisan keduanya adalah: Ada (sebagian) karya yang berbentuk fiksi (yaitu cerpen fiksi tersebut).",
            points: 6,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Sebagian baju peraga tidak diminati pengunjung apabila model baju tidak mengikuti tema pameran. Kondisi tersebut terjadi apabila penjahit tidak mengikuti tren.",
            question: "Manakah simpulan yang tepat?",
            options: [
              {
                id: "a",
                text: "Penjahit mengikuti tren apabila baju peraga diminati pengunjung.",
              },
              {
                id: "b",
                text: "Sebagian baju peraga tidak diminati pengunjung apabila penjahit tidak mengikuti trend",
              },
              {
                id: "c",
                text: "Sebagian baju peraga diminati pengunjung apabila penjahit tidak mengikuti tren.",
              },
              {
                id: "d",
                text: "Penjahit tidak mengikuti tren apabila baju peraga diminati pengunjung.",
              },
              {
                id: "e",
                text: "Sebagian baju peraga tidak diminati pengunjung apabila penjahit mengikuti tren.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Rantai Kausalitas: Penjahit tidak ikut tren -> Baju tidak ikut tema -> Baju tidak diminati. Berdasarkan premis r -> s (tidak ikut tren -> tidak diminati).",
            points: 6,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Banyak diskon -> Banyak transaksi -> Ekonomi naik. TAPI Masyarakat konsumtif -> Tidak menabung.",
            question: "Manakah simpulan yang tepat?",
            options: [
              {
                id: "a",
                text: "Jika masyarakat di daerah X tidak menabung, Masyarakat tersebut melakukan transaksi pembelian di Supermarket X.",
              },
              {
                id: "b",
                text: "Tidak melakukan pembelian di Supermarket X adalah cara paling efektif untuk dapat menabung.",
              },
              {
                id: "c",
                text: "Jika tidak banyak program diskon belanja di Supermarket X, Masyarakat di daerah X cenderung dapat menabung.",
              },
              {
                id: "d",
                text: "Tingkat konsumtif masyarakat X adalah penyebab Supermarket X melakukan banyak diskon belanja.",
              },
              {
                id: "e",
                text: "Kecenderungan konsumtif pada masyarakat di daerah X disebabkan banyak program diskon belanja yang dilakukan Supermarket X.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Alur logika teks: Diskon Supermarket -> Transaksi Naik -> Ekonomi Naik -> Masyarakat Konsumtif. Jadi, akar penyebab konsumtif adalah adanya program diskon.",
            points: 6,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Data: Bandung (Mendung->Hujan), Cimahi (Mendung->Hujan), Kab. Bandung (Mendung->Hujan). Simpulan: Jika mendung, hujan turun.",
            question: "Bagaimana kualitas simpulan tersebut?",
            options: [
              { id: "a", text: "Simpulan tersebut pasti benar" },
              { id: "b", text: "Simpulan tersebut mungkin benar" },
              { id: "c", text: "Simpulan tersebut pasti salah" },
              {
                id: "d",
                text: "Simpulan tidak dapat dinilai karena informasi tidak cukup.",
              },
              {
                id: "e",
                text: "Simpulan tidak relevan dengan informasi yang diberikan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Ini adalah penalaran induktif. Meskipun 3 kota menunjukkan pola sama, kita tidak bisa memastikan 100% berlaku umum tanpa pengecualian.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Display tidak diminati JIKA model tidak terbaru. Model tidak terbaru JIKA produsen tidak ikut tren.",
            question: "Simpulan yang tepat adalah...",
            options: [
              {
                id: "a",
                text: "Produsen mengikuti trend apabila display smartphone diminati pengunjung.",
              },
              {
                id: "b",
                text: "Sebagian display smartphone tidak diminati pengunjung apabila produsen tidak mengikuti trend.",
              },
              {
                id: "c",
                text: "Sebagian display smartphone diminati pengunjung apabila produsen tidak mengikuti trend.",
              },
              {
                id: "d",
                text: "Produsen tidak mengikuti tren apabila display smartphone diminati pengunjung.",
              },
              {
                id: "e",
                text: "Sebagian display smartphone tidak diminati pengunjung apabila produsen tdk mengikuti trend.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Rantai Silogisme: Produsen tidak ikut tren -> Model tidak baru -> Display tidak diminati.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context: "Semua mamalia adalah vertebrata. Kucing adalah mamalia.",
            question: "Simpulan yang tepat adalah...",
            options: [
              { id: "a", text: "Kucing bukan vertebrata." },
              { id: "b", text: "Kucing adalah hewan darat." },
              { id: "c", text: "Kucing adalah vertebrata" },
              { id: "d", text: "Semua vertebrata adalah hewan mamalia" },
              { id: "e", text: "Kucing tidak memiliki tulang belakang" },
            ],
            correctAnswer: "c",
            explanation: "Semua A adalah B. C adalah A. Maka C adalah B.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "P1: Jika Pak Mulyono menabung, maka ia punya simpanan. P2: Pak Mulyono punya simpanan.",
            question: "Simpulan yang tepat adalah...",
            options: [
              { id: "a", text: "Pak Mulyono pasti menabung." },
              { id: "b", text: "Pak Mulyono tidak menabung." },
              {
                id: "c",
                text: "Pak Mulyono menabung atau tidak menabung tidak diketahui.",
              },
              { id: "d", text: "Pak Mulyono pasti berhutang." },
              { id: "e", text: "Pak Mulyono tidak memiliki uang." },
            ],
            correctAnswer: "c",
            explanation:
              "Affirming the Consequent (Logical Fallacy). Punya simpanan tidak menjamin dia menabung (bisa hibah/warisan).",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Joko masuk terakhir (5). Harun sebelum Joko (4). Gita sebelum Harun (3). Fira setelah Gita tapi sebelum Indra.",
            question: "Siapa yang masuk di urutan pertama?",
            options: [
              { id: "a", text: "Gita" },
              { id: "b", text: "Fira" },
              { id: "c", text: "Indra" },
              { id: "d", text: "Harun" },
              { id: "e", text: "Joko" },
            ],
            correctAnswer: "a",
            explanation:
              "Urutan: 1. Gita, 2. Fira, 3. Indra, 4. Harun, 5. Joko.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Sebagian warga Kota C ikut karnaval Sabtu pagi. Bapak Adi warga Kota C (Kerja Senin-Jumat).",
            question:
              "Simpulan: Adi ikut karnaval. Bagaimana kualitas simpulan tersebut?",
            options: [
              { id: "a", text: "Simpulan tersebut pasti benar." },
              { id: "b", text: "Simpulan tersebut mungkin benar." },
              { id: "c", text: "Simpulan tersebut pasti salah." },
              {
                id: "d",
                text: "Simpulan tidak dapat dinilai karena informasi kurang cukup.",
              },
              {
                id: "e",
                text: "Simpulan tidak relevan dengan informasi yang diberikan.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Informasi tidak cukup untuk mengetahui apakah Adi masuk dalam 'sebagian' yang ikut atau tidak.",
            points: 7,
          },
          {
            id: "q12",
            type: "matrix",
            question:
              "Tentukan Benar/Salah untuk pernyataan berikut (Berdasarkan: Semua ayam bersayap, Semua kucing mamalia, Anjing berkaki 4).",
            rows: [
              { id: "r1", text: "Setiap hewan bersayap adalah ayam." },
              { id: "r2", text: "Beberapa kucing bukan mamalia." },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "false",
            },
            explanation:
              "r1 Salah (Burung juga bersayap). r2 Salah (Karena SEMUA kucing mamalia).",
            points: 7,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Semua ilmuwan terkenal punya karya berpengaruh. Einstein ilmuwan terkenal. Karya berpengaruh jadi acuan.",
            question: "Simpulan yang tepat adalah...",
            options: [
              {
                id: "a",
                text: "Albert Einstein memiliki karya tulis yang berpengaruh.",
              },
              {
                id: "b",
                text: "Karya tulis Albert Einstein sering dijadikan acuan dalam penelitian ilmiah.",
              },
              {
                id: "c",
                text: "Semua ilmuwan memiliki karya tulis yang berpengaruh.",
              },
              {
                id: "d",
                text: "Albert Einstein adalah ilmuwan yang memiliki karya tulis.",
              },
              {
                id: "e",
                text: "Karya tulis ilmuwan terkenal hanya dijadikan acuan oleh ilmuwan lain.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Rantai Silogisme: Einstein -> Terkenal -> Berpengaruh -> Acuan.",
            points: 7,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "P1: Bersih kamar mandi JIKA antar adik selesai. P2: Tidak bersih JIKA tidak ke Taman.",
            question: "Manakah pernyataan yang ekuivalen?",
            options: [
              {
                id: "a",
                text: "Pergi ke taman hiburan dan mengantar adik ke sekolah tidak selesai dilakukan.",
              },
              {
                id: "b",
                text: "Apabila mengantar adik ke sekolah tidak selesai dilakukan, tidak pergi ke taman hiburan.",
              },
              {
                id: "c",
                text: "Apabila pergi ke taman hiburan, mengantar adik ke sekolah selesai dilakukan.",
              },
              {
                id: "d",
                text: "Membersihkan kamar mandi tidak dilakukan apabila mengantar adik ke sekolah tidak dilakukan.",
              },
              {
                id: "e",
                text: "Semua yang selesai mengantar adik ke sekolah pergi ke taman hiburan.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Jika Antar Selesai (p) -> Bersih (q). Jika Tak ke Taman (~r) -> Tak Bersih (~q). Kontraposisi (q -> r). Maka p -> r. Jika Antar Tak Selesai (~p) -> Tak ke Taman (~r).",
            points: 7,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Kepala Dinas: Permintaan pisang meningkat drastis KARENA masyarakat makin kreatif mengolah pisang.",
            question: "Manakah pernyataan yang MEMPERLEMAH argumen tersebut?",
            options: [
              {
                id: "a",
                text: "Jumlah pembuat olahan pisang pada triwulan lalu lebih banyak daripada triwulan ini.",
              },
              {
                id: "b",
                text: "Saat ini komoditas buah selain pisang juga akan mengalami lonjakan permintaan.",
              },
              {
                id: "c",
                text: "Masakan olahan berbahan dasar pisang disukai berbagai lapisan masyarakat.",
              },
              {
                id: "d",
                text: "Dari dulu permintaan pisang selalu tinggi disebabkan konsumsi masyarakat.",
              },
              {
                id: "e",
                text: "Kota A sudah lama menjadi distributor utama buah pisang.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Mematahkan korelasi antara jumlah pengolah (kreativitas) dengan lonjakan permintaan saat ini.",
            points: 7,
          },
        ],
      },
    ];

    console.log(`Searching for existing module with ID: ${targetId}`);
    const moduleCollection = mongoose.connection.collection("modules");

    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Silogisme & Penalaran Analitis",
      description: "Materi penarikan kesimpulan logis dan analisis informasi.",
      subcategory: "Penalaran Analitis",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    console.log("Upserting module data...");
    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log("Module Seeded Successfully: Silogisme & Penalaran Analitis");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:");
    console.error(error);
    process.exit(1);
  }
};

seedSilogisme();
