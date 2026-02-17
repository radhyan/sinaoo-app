const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSimpulanLogis = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.error("Course 'Penalaran Umum' not found.");
      process.exit(1);
    }

    const moduleId = "simpulan-logis";

    const stepsData = [
      {
        title: "Dasar Logika & Pernyataan Majemuk",
        type: "reading",
        status: "active",
        description: "Pengertian Pernyataan dan Jenis-jenis Pernyataan Majemuk",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pengertian Pernyataan</h3>
              <p class="text-body-l font-sans leading-relaxed">
                Pernyataan adalah kalimat yang bernilai <strong>benar saja</strong> atau <strong>salah saja</strong>, tidak bisa bernilai benar dan salah sekaligus.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Pernyataan Majemuk</h3>
              <p class="text-body-l font-sans leading-relaxed mb-6">
                Pernyataan majemuk adalah kalimat yang dibentuk oleh dua pernyataan atau lebih dan dihubungkan dengan kata hubung tertentu.
              </p>

              <div class="overflow-hidden rounded-lg border-2 border-Primary-400 mb-8">
                <table class="w-full text-left border-collapse my-0">
                  <thead class="bg-Primary-50">
                    <tr>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-1 border-Primary-400 text-h5">Jenis</th>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-1 border-Primary-400 text-h5">Kata Hubung</th>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-1 border-Primary-400 text-h5">Simbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-Grayscale-50">
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-body-l">Konjungsi</td>
                      <td class="p-4 border-b border-Primary-100 text-center text-body-l">... dan ...</td>
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-h4 text-Primary-900">^</td>
                    </tr>
                    <tr class="bg-Grayscale-50">
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-body-l">Disjungsi</td>
                      <td class="p-4 border-b border-Primary-100 text-center text-body-l">... atau ...</td>
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-h4 text-Primary-900">v</td>
                    </tr>
                    <tr class="bg-Grayscale-50">
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-body-l">Implikasi</td>
                      <td class="p-4 border-b border-Primary-100 text-center text-body-l">Jika ..., maka ...</td>
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-h4 text-Primary-900">⇒</td>
                    </tr>
                    <tr class="bg-Grayscale-50">
                      <td class="p-4 text-center font-bold text-body-l">Biimplikasi</td>
                      <td class="p-4 text-center text-body-l">... jika dan hanya jika ...</td>
                      <td class="p-4 text-center font-bold text-h4 text-Primary-900">⇔</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="space-y-6">
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Contoh Penerapan</h3>
              
              <!-- Formula Box Style for Examples -->
              <div class="bg-white p-4 rounded-lg border-2 border-Primary-400 space-y-8">
                <div>
                  <h4 class="text-body-l font-bold text-Primary-600 mb-2">&gt; Konjungsi (p ^ q)</h4>
                  <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Primary-50 text-Primary-900 rounded-md font-bold">Kakak belajar</p>
                    </div>
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Grayscale-100 text-Grayscale-900 rounded-md font-bold">dan</p>
                    </div>
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Secondary-50 text-Secondary-900 rounded-md font-bold">Adik bermain</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 class="text-h5 font-bold text-Primary-600 mb-2">&gt; Implikasi (p ⇒ q)</h4>
                  <div class="flex flex-wrap items-center gap-3">
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Grayscale-100 text-Grayscale-900 rounded-md font-bold">Jika</p>
                    </div>
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Primary-50 text-Primary-900 rounded-md font-bold">Kakak rajin belajar</p>
                    </div>
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Grayscale-100 text-Grayscale-900 rounded-md font-bold">maka</p>
                    </div>
                    <div class="flex flex-col items-center">
                      <p class="text-l py-1 px-4 bg-Secondary-50 text-Secondary-900 rounded-md font-bold">Lulus UTBK</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Jenis Implikasi & Ingkaran",
        type: "reading",
        status: "locked",
        description: "Konvers, Invers, Kontraposisi, dan Ekuivalensi",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Jenis Implikasi</h3>
              <div class="bg-white rounded-lg border-2 border-Primary-400 overflow-hidden mb-6">
                 <table class="w-full text-left border-collapse my-0">
                  <thead class="bg-Primary-50">
                    <tr>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-2 border-Primary-400 text-h5">Nama</th>
                      <th class="p-4 text-center text-Primary-900 font-bold border-b-2 border-Primary-400 text-h5">Bentuk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-body-l">Implikasi</td>
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-h4 text-Primary-600">p ⇒ q</td>
                    </tr>
                    <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-body-l">Konvers</td>
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-h4 text-Primary-600">q ⇒ p</td>
                    </tr>
                    <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-body-l">Invers</td>
                      <td class="p-4 border-b border-Primary-100 text-center font-bold text-h4 text-Primary-600">~p ⇒ ~q</td>
                    </tr>
                    <tr class="bg-white hover:bg-Grayscale-50 transition-colors">
                      <td class="p-4 text-center font-bold text-body-l">Kontraposisi</td>
                      <td class="p-4 text-center font-bold text-h4 text-Primary-600">~q ⇒ ~p</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Ingkaran dan Ekuivalensi</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-Secondary-50 p-6 rounded-md border-2 border-Secondary-400">
                   <h5 class="text-h5 font-heading text-Secondary-900 mb-2 mt-0">Ingkaran / Negasi (~)</h5>
                   <p class="text-body-lg text-Secondary-900 mb-4">Ingkaran adalah pernyataan lawan dari pernyataan semula.</p>
                   <div class="flex items-center gap-4 bg-white px-6 py-4 w-fit rounded-lg border border-Secondary-400 items-center align-center ">
                      <span class="text-h4 font-heading text-Secondary-600">~p</span>
                      <span class="text-Grayscale-400">|</span>
                      <span class="text-body-l font-medium italic">"Tidak benar bahwa p"</span>
                   </div>
                </div>

                <div class="bg-Primary-50 p-6 rounded-md border-2 border-Primary-400">
                   <h5 class="text-h5 font-heading text-Primary-900 mb-2 mt-0">Ekuivalensi (≡)</h5>
                   <p class="text-body-lg text-Primary-900 mb-4">Dua pernyataan yang memiliki nilai kebenaran yang sama.</p>
                   <div class="flex items-center gap-4 bg-white px-6 py-4 w-fit rounded-lg border border-Primary-400 items-center">
                      <span class="text-h4 font-heading text-Primary-600">p ⇒ q ≡ ~p v q ≡ ~q ⇒ ~p</span>
                   </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Macam Ingkaran</h3>
              
              <div class="space-y-12">
                
                <!-- 1. Konjungsi -->
                <div>
                  <h5 class="text-h5 font-heading text-Grayscale-900 mb-4 underline decoration-2 underline-offset-4">Pada kalimat berkonjungsi</h5>
                  
                  <!-- Rumus -->
                  <div class="bg-Primary-100 px-6 py-3 rounded-sm w-fit mb-6">
                     <span class="text-h4 font-heading text-Primary-900">~(p ∧ q) ≡ ~p v ~q</span>
                  </div>

                  <!-- Examples -->
                  <div class="space-y-4">
                    <!-- Row 1 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          p ∧ q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Adi suka sayur dan Ben suka buah
                       </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          ~(p ∧ q)
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          <strong>Tidak benar</strong> bahwa Adi suka sayur dan Ben suka buah
                       </div>
                    </div>

                    <!-- Row 3 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          ~p v ~q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Adi <strong>tidak</strong> suka sayur atau Ben <strong>tidak</strong> suka buah
                       </div>
                    </div>
                  </div>
                </div>

                <!-- 2. Disjungsi -->
                <div>
                  <h5 class="text-h5 font-heading text-Grayscale-900 mb-4 underline decoration-2 underline-offset-4">Pada kalimat berdisjungsi</h5>
                  
                   <!-- Rumus -->
                  <div class="bg-Primary-100 px-6 py-3 rounded-sm w-fit mb-6">
                     <span class="text-h4 font-heading text-Primary-900">~(p v q) ≡ ~p ∧ ~q</span>
                  </div>

                  <!-- Examples -->
                  <div class="space-y-4">
                    <!-- Row 1 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          p v q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Nenek menyulam atau kakek memancing
                       </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          ~(p v q)
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          <strong>Tidak benar</strong> bahwa nenek menyulam atau kakek memancing
                       </div>
                    </div>

                    <!-- Row 3 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          ~p ∧ ~q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Nenek <strong>tidak</strong> menyulam dan kakek <strong>tidak</strong> memancing
                       </div>
                    </div>
                  </div>

                  <!-- Note Pill -->
                  <div class="mt-8 flex justify-center w-full">
                    <div class="bg-Primary-50 border border-Primary-200 px-6 py-4 rounded-sm flex items-center gap-4">
                        <span class="gradient-icon-warning shrink-0"></span>
                        <p class="text-body-l text-Grayscale-900 m-0">
                          <strong>Ingat:</strong> Ingkaran dari <span class="font-bold text-Primary-600">dan (∧)</span> adalah <span class="font-bold text-Primary-600">atau (∨)</span>, sedangkan ingkaran dari <span class="font-bold text-Primary-600">atau (∨)</span> adalah <span class="font-bold text-Primary-600">dan (∧)</span>.
                        </p>
                    </div>
                  </div>
                </div>

                <!-- 3. Implikasi -->
                <div>
                  <h5 class="text-h5 font-heading text-Grayscale-900 mb-4 underline decoration-2 underline-offset-4">Pada kalimat berimplikasi</h5>
                  
                   <!-- Rumus -->
                  <div class="bg-Primary-100 px-6 py-3 rounded-sm w-fit mb-6">
                     <span class="text-h4 font-heading text-Primary-900">~(p ⇒ q) ≡ p ∧ ~q</span>
                  </div>

                  <!-- Examples -->
                  <div class="space-y-4">
                    <!-- Row 1 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          p ⇒ q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Jika Tiar rajin olahraga, maka badannya bugar
                       </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          ~(p ⇒ q)
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          <strong>Tidak benar bahwa</strong> jika Tiar rajin olahraga, maka badannya bugar
                       </div>
                    </div>

                    <!-- Row 3 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[140px] text-center border border-Warning-200">
                          p ∧ ~q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Tiar rajin olahraga dan badannya <strong>tidak</strong> bugar
                       </div>
                    </div>
                  </div>
                </div>

                <!-- 4. Biimplikasi -->
                <div>
                  <h5 class="text-h5 font-heading text-Grayscale-900 mb-4 underline decoration-2 underline-offset-4">Pada kalimat berbiimplikasi</h5>
                  
                   <!-- Rumus -->
                  <div class="bg-Primary-100 px-6 py-3 rounded-sm w-fit mb-6">
                     <span class="text-h4 font-heading text-Primary-900">~(p ⇔ q) ≡ (p ^ ~q) v (~p ^ q)</span>
                  </div>

                  <!-- Examples -->
                  <div class="space-y-4">
                    <!-- Row 1 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[160px] text-center border border-Warning-200">
                          p ⇔ q
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Ibu pergi ke pasar <strong>jika dan hanya jika</strong> hari libur
                       </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[160px] text-center border border-Warning-200">
                          (p ∧ ~q) v (~p ∧ q)
                       </div>
                       <div class="bg-Warning-100/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Ibu pergi ke pasar <strong>dan bukan</strong> hari libur <strong>atau</strong> Ibu <strong>tidak</strong> pergi ke pasar <strong>dan</strong> hari libur
                       </div>
                    </div>

                    <!-- Row 3 -->
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                       <div class="bg-Warning-50/20 text-Warning-900 font-bold text-h5 px-6 py-3 rounded-sm min-w-[160px] text-center border border-Warning-200">
                          (~p v ~q) ∧ (p v q)
                       </div>
                       <div class="bg-Warning-50/20 text-Grayscale-900 text-body-l px-6 py-3 rounded-sm w-full border border-Warning-200">
                          Ibu <strong>tidak</strong> pergi ke pasar <strong>atau bukan</strong> hari libur <strong>dan</strong> Ibu pergi ke pasar <strong>atau</strong> hari libur
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
        title: "Penarikan Kesimpulan",
        type: "reading",
        status: "locked",
        description: "Ingkaran Implikasi & Penarikan Kesimpulan Dasar",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Penarikan Kesimpulan</h3>
              <p class="text-body-l mb-8 font-sans leading-relaxed">Ada tiga metode utama dalam penarikan kesimpulan deduktif:</p>
            </section>

            <!-- Modus Ponens -->
            <section class="space-y-6">
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Modus Ponens</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Ponens Valid -->
                <div class="bg-white p-4 rounded-md border-2 border-Primary-400">
                  <div class="text-h4 font-heading text-Primary-600 text-left mb-4">P1: p ⇒ q<br/>P2: p<br/>∴ q</div>
                  <div class="overflow-hidden rounded-sm border border-Primary-200">
                    <table class="w-full text-left border-collapse my-0">
                      <tbody>
                        <tr>
                          <td class="p-3 bg-Primary-50 font-bold border-b border-Primary-100 w-24 text-body-md">Premis 1</td>
                          <td class="p-3 border-b border-Primary-100 text-body-md italic">Jika Rika lomba, Rina rajin berlatih</td>
                        </tr>
                        <tr>
                          <td class="p-3 bg-Primary-50 font-bold border-b border-Primary-100 w-24 text-body-md">Premis 2</td>
                          <td class="p-3 border-b border-Primary-100 text-body-md italic">Rika ikut lomba (p)</td>
                        </tr>
                        <tr class="bg-Primary-100">
                          <td class="p-4 font-bold w-24 text-body-md text-Primary-900">Kesimpulan</td>
                          <td class="p-4 text-body-md font-bold text-Primary-900">Rina rajin berlatih (q)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Ponens Invalid -->
                <div class="bg-white p-4 rounded-md border-2 border-Error-300">
                  <div class="text-h4 font-heading text-Grayscale-900 text-left mb-4">P1: p ⇒ q<br/>P2: ~p<br/>∴ ???</div>
                  <div class="overflow-hidden rounded-sm border border-Error-200">
                    <table class="w-full text-left border-collapse my-0">
                      <tbody>
                        <tr>
                          <td class="p-3 bg-Error-50/10 font-bold border-b border-Grayscale-100 text-body-md">Premis 1</td>
                          <td class="p-3 border-b border-Grayscale-100 text-body-md italic">Jika Rika lomba, Rina rajin berlatih</td>
                        </tr>
                        <tr>
                          <td class="p-3 bg-Error-50/10 font-bold border-b border-Grayscale-100 text-body-md">Premis 2</td>
                          <td class="p-3 border-b border-Grayscale-100 text-body-md italic">Rika tidak lomba (~p)</td>
                        </tr>
                        <tr class="bg-Error-50">
                          <td class="p-4 font-bold text-body-md text-Grayscale-50">Kesimpulan</td>
                          <td class="p-4 text-body-md font-bold text-Grayscale-50 italic">Tidak dapat disimpulkan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- Modus Tollens -->
            <section class="space-y-6">
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Modus Tollens</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Tollens Valid -->
                <div class="bg-white p-4 rounded-md border-2 border-Primary-400">
                  <div class="text-h4 font-heading text-Primary-600 text-left mb-4">P1: p ⇒ q<br/>P2: ~q<br/>∴ ~p</div>
                  <div class="overflow-hidden rounded-sm border border-Primary-200">
                    <table class="w-full text-left border-collapse my-0">
                      <tbody>
                        <tr>
                          <td class="p-3 bg-Primary-50 font-bold border-b border-Primary-100 w-24 text-body-md">Premis 1</td>
                          <td class="p-3 border-b border-Primary-100 text-body-md italic">Jika rumah dikunci, maka ibu pergi</td>
                        </tr>
                        <tr>
                          <td class="p-3 bg-Primary-50 font-bold border-b border-Primary-100 w-24 text-body-md">Premis 2</td>
                          <td class="p-3 border-b border-Primary-100 text-body-md italic">Ibu tidak pergi (~q)</td>
                        </tr>
                        <tr class="bg-Primary-100">
                          <td class="p-4 font-bold w-24 text-body-md text-Primary-900">Kesimpulan</td>
                          <td class="p-4 text-body-md font-bold text-Primary-900">Rumah tidak dikunci (~p)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Tollens Invalid -->
                <div class="bg-white p-4 rounded-md border-2 border-Error-300">
                  <div class="text-h4 font-heading text-Grayscale-900 text-left mb-4">P1: p ⇒ q<br/>P2: q<br/>∴ ???</div>
                  <div class="overflow-hidden rounded-sm border border-Error-200">
                    <table class="w-full text-left border-collapse my-0">
                      <tbody>
                        <tr>
                          <td class="p-3 bg-Error-50/10 font-bold border-b border-Grayscale-100 text-body-md">Premis 1</td>
                          <td class="p-3 border-b border-Grayscale-100 text-body-md italic">Jika rumah dikunci, maka ibu pergi</td>
                        </tr>
                        <tr>
                          <td class="p-3 bg-Error-50/10 font-bold border-b border-Grayscale-100 text-body-md">Premis 2</td>
                          <td class="p-3 border-b border-Grayscale-100 text-body-md italic">Ibu pergi (q)</td>
                        </tr>
                        <tr class="bg-Error-50">
                          <td class="p-4 font-bold text-body-md text-Grayscale-50">Kesimpulan</td>
                          <td class="p-4 text-body-md font-bold text-Grayscale-50 italic">Tidak dapat disimpulkan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <!-- Silogisme -->
            <section class="space-y-6">
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Silogisme</h3>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div class="bg-white p-6 rounded-md border-2 border-Primary-400">
                    <div class="text-h4 font-heading text-Primary-600 text-left mb-6">P1: p ⇒ q<br/>P2: q ⇒ r<br/>∴ p ⇒ r</div>
                    <p class="text-body-md italic mb-4">Kesimpulan diambil dengan menghubungkan premis pertama dan terakhir (efek domino).</p>
                    <div class="overflow-hidden rounded-sm border border-Primary-200">
                      <table class="w-full text-left border-collapse my-0">
                        <tbody>
                          <tr>
                            <td class="p-3 bg-Primary-50 font-bold border-b border-Primary-100 w-24 text-body-md">Premis 1</td>
                            <td class="p-3 border-b border-Primary-100 text-body-md italic">Jika aku hemat, maka aku menabung</td>
                          </tr>
                          <tr>
                            <td class="p-3 bg-Primary-50 font-bold border-b border-Primary-100 w-24 text-body-md">Premis 2</td>
                            <td class="p-3 border-b border-Primary-100 text-body-md italic">Jika aku menabung, maka aku kaya</td>
                          </tr>
                          <tr class="bg-Primary-100">
                            <td class="p-4 font-bold w-24 text-body-md text-Primary-900">Kesimpulan</td>
                            <td class="p-4 text-body-md font-bold text-Primary-900">Jika aku hemat, maka aku kaya</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                 </div>

                 <div class="relative bg-Secondary-50 p-6 rounded-md border-2 border-Secondary-200 flex flex-col justify-center overflow-hidden">
                    <h4 class="font-heading text-h4 text-Secondary-900 mb-4">Tips Mempermudah</h4>
                    <ul class="space-y-3 relative z-10">
                      <li class="flex gap-3 text-body-md text-Secondary-800">
                         <span class="text-xl">✅</span>
                         <span><strong>Ponens:</strong> Premis 2 harus sama dengan <strong>Awal</strong> P1 (Sebab)</span>
                      </li>
                      <li class="flex gap-3 text-body-md text-Secondary-800">
                         <span class="text-xl">✅</span>
                         <span><strong>Tollens:</strong> Premis 2 harus <strong>Ingkaran Akhir</strong> P1 (Akibat)</span>
                      </li>
                      <li class="flex gap-3 text-body-md text-Secondary-800">
                         <span class="text-xl">✅</span>
                         <span><strong>Silogisme:</strong> Cari kata yang sama di P1 dan P2 untuk dicoret</span>
                      </li>
                    </ul>
                    <img src="/images/characters/mascot-blue.png" alt="Mascot" class="absolute -bottom-0 -right-2 w-40 my-0 h-auto pointer-events-none" />
                 </div>
              </div>
            </section>

            <!-- Strategi -->
            <section class="bg-Grayscale-50 p-8 rounded-md border-2 border-Grayscale-200">
              <h3 class="text-h3 font-heading text-Grayscale-900 mb-6 font-bold mt-0">Strategi Mengerjakan</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-5 rounded-sm border border-Grayscale-200 shadow-sm">
                   <p class="font-bold text-body-l text-Primary-600 mb-1 my-0">1. Identifikasi Hubungan</p>
                   <p class="text-body-md text-Grayscale-900 my-0">Tentukan apakah soal menggunakan konjungsi, disjungsi, atau implikasi. Cari kata kunci (jika, maka, dan, atau).</p>
                </div>
                <div class="bg-white p-5 rounded-sm border border-Grayscale-200 shadow-sm">
                   <p class="font-bold text-body-l text-Primary-600 mb-1 my-0">2. Gunakan Simbol Dasar</p>
                   <p class="text-body-md text-Grayscale-900 my-0">Ubah kalimat menjadi simbol (p, q, r) jika soal terasa rumit untuk menghindari jebakan interpretasi bahasa.</p>
                </div>
                <div class="bg-white p-5 rounded-sm border border-Grayscale-200 shadow-sm">
                   <p class="font-bold text-body-l text-Primary-600 mb-1 my-0">3. Waspadai Jebakan</p>
                   <p class="text-body-md text-Grayscale-900 my-0">Jangan menyimpulkan sesuatu yang tidak ada di premis. Ingat: ~p dalam Ponens dan q dalam Tollens tidak menghasilkan kesimpulan!</p>
                </div>
                <div class="bg-white p-5 rounded-sm border border-Grayscale-200 shadow-sm">
                   <p class="font-bold text-body-l text-Primary-600 mb-1 my-0">4. Prinsip Ekuivalensi</p>
                   <p class="text-body-md text-Grayscale-900 my-0">Jika pilihan jawaban tidak ada yang cocok, coba ubah bentuk kesimpulan menggunakan rumus ekuivalensi (p ⇒ q ≡ ~p v q).</p>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video 1: Penarikan Kesimpulan",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/uv9X26Gzfyk",
        description: "Penjelasan mendalam mengenai logika matematika.",
      },
      {
        title: "Video 2: Strategi Cepat Logika",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/00clYmXcPTE",
        description: "Tips dan trik mengerjakan soal penalaran logis.",
      },
      {
        title: "Kuis Simpulan Logis",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nJika Haikal berlatih dance di sanggar, maka Mahen akan datang.",
            question: "Ekuivalensi dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Haikal tidak berlatih dance di sanggar atau Mahen akan datang.",
              },
              {
                id: "b",
                text: "Jika Mahen akan datang, maka Haikal berlatih dance di sanggar.",
              },
              {
                id: "c",
                text: "Haikal tidak berlatih dance di sanggar dan Mahen akan datang.",
              },
              {
                id: "d",
                text: "Mahen akan datang atau Haikal berlatih di sanggar.",
              },
              { id: "e", text: "Tidak dapat disimpulkan." },
            ],
            correctAnswer: "a",
            explanation:
              "Rumus Ekuivalensi Implikasi: p ⇒ q ≡ ~p ∨ q.\n(p) Haikal berlatih dance.\n(q) Mahen akan datang.\nMaka ekuivalensinya adalah (~p) Haikal TIDAK berlatih dance ATAU (q) Mahen akan datang.",
            points: 7,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nJika aku belajar giat, maka aku akan diterima di PTN impian.",
            question: "Ingkaran dari pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: "Aku tidak belajar giat atau aku diterima di PTN impian.",
              },
              {
                id: "b",
                text: "Aku diterima di PTN impian dan aku belajar giat.",
              },
              {
                id: "c",
                text: "Aku tidak diterima di PTN impian dan aku tidak belajar giat.",
              },
              {
                id: "d",
                text: "Aku belajar giat dan aku tidak diterima di PTN impian.",
              },
              {
                id: "e",
                text: "Aku tidak diterima di PTN impian dan aku belajar giat.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Rumus Negasi Implikasi: ~(p ⇒ q) ≡ p ∧ ~q.\nIngkaran dari 'Jika P maka Q' adalah 'P terjadi DAN Q tidak terjadi'.\nJadi: Aku belajar giat DAN aku TIDAK diterima di PTN impian.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nDani tidak pergi ke hutan sendiri atau ia tersesat.\nJika ia tersesat, maka ia tidak bisa pulang.",
            question:
              "Kesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Dani pergi ke hutan sendiri atau ia tidak bisa pulang.",
              },
              {
                id: "b",
                text: "Jika Dani pergi ke hutan sendirian, maka ia tidak bisa pulang.",
              },
              { id: "c", text: "Dani tidak bisa pulang." },
              {
                id: "d",
                text: "Jika Dani tersesat, maka ia tidak bisa pulang.",
              },
              { id: "e", text: "Dani pergi ke hutan sendiri." },
            ],
            correctAnswer: "b",
            explanation:
              "Ubah Premis 1 ke bentuk implikasi: (~p ∨ q ≡ p ⇒ q). 'Jika Dani ke hutan sendiri, maka ia tersesat'.\nPremis 2: 'Jika ia tersesat, maka ia tidak bisa pulang' (q ⇒ r).\nSilogisme (p ⇒ q, q ⇒ r, maka p ⇒ r): Jika Dani pergi ke hutan sendirian, maka ia tidak bisa pulang.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nJika Dong Yeon tidak pergi ke sekolah, maka ia sakit.\nHari ini, Dong Yeon pergi ke sekolah.",
            question:
              "Berdasarkan informasi tersebut, kesimpulan yang paling tepat…",
            options: [
              { id: "a", text: "Dong Yeon sehat." },
              { id: "b", text: "Dong Yeon sakit." },
              { id: "c", text: "Dong Yeon sehat dan tidak pergi ke sekolah." },
              {
                id: "d",
                text: "Dong Yeon tidak sehat dan tidak pergi ke sekolah.",
              },
              { id: "e", text: "Tidak dapat disimpulkan." },
            ],
            correctAnswer: "e",
            explanation:
              "Premis 1: ~p ⇒ q (Jika tidak sekolah, maka sakit).\nPremis 2: p (Dong Yeon pergi sekolah/sebaliknya dari ~p).\nIni tidak memenuhi modus ponens maupun tollens. Kita tidak bisa menyimpulkan q (sakit/sehat) hanya karena syarat p tidak terpenuhi (Denying the antecedent fallacy).",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nRitsuki tidak tidur dengan cukup atau ia berolahraga.\nJika ia tidak tumbuh tinggi, maka ia tidak berolahraga.\nRitsuki tidak tumbuh tinggi atau orang-orang akan menyukainya.",
            question:
              "Negasi dari kesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Jika Ritsuki tidur dengan cukup, maka orang-orang akan menyukainya.",
              },
              {
                id: "b",
                text: "Ritsuki tidak tumbuh tinggi atau ia berolahraga.",
              },
              {
                id: "c",
                text: "Ritsuki tidur dengan cukup dan orang-orang tidak akan menyukainya.",
              },
              {
                id: "d",
                text: "Ritsuki tidak tidur dengan cukup dan ia berolahraga.",
              },
              {
                id: "e",
                text: "Ritsuki tidur dengan cukup atau orang-orang tidak akan menyukainya.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Langkah 1 (Cari Kesimpulan):\nP1: Tidur Cukup ⇒ Olahraga\nP2: ~Tinggi ⇒ ~Olahraga (Ekuivalen: Olahraga ⇒ Tinggi)\nP3: ~Tinggi ∨ Disukai (Ekuivalen: Tinggi ⇒ Disukai)\nRantai Silogisme: Tidur Cukup ⇒ Olahraga ⇒ Tinggi ⇒ Disukai.\nKesimpulan: Jika Tidur Cukup maka Disukai (p ⇒ q).\n\nLangkah 2 (Cari Negasi):\nNegasi (p ⇒ q) adalah p ∧ ~q.\nJawab: Ritsuki tidur dengan cukup DAN orang-orang TIDAK menyukainya.",
            points: 7,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nJika aku mendapatkan beasiswa, maka aku tidak membayar UKT.\nJika aku tidak membayar UKT, maka aku meringankan beban ibu.\nJika aku meringankan beban ibu, maka adik bisa sekolah.\nAdik tidak bisa sekolah.",
            question:
              "Kesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              { id: "a", text: "Aku mendapatkan beasiswa." },
              { id: "b", text: "Aku tidak meringankan beban ibu." },
              { id: "c", text: "Aku tetap membayar UKT." },
              { id: "d", text: "Aku tidak mendapatkan beasiswa." },
              { id: "e", text: "Aku meringankan beban ibu." },
            ],
            correctAnswer: "d",
            explanation:
              "Tarik kesimpulan berantai dari P1 sampai P3: 'Jika aku dapat beasiswa, maka adik bisa sekolah' (p ⇒ q).\nFakta P4: 'Adik tidak bisa sekolah' (~q).\nModus Tollens (p ⇒ q, ~q, maka ~p): Maka, Aku TIDAK mendapatkan beasiswa.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nSemua penipu pandai bicara dan ramah.\nTuan D tidak ramah, tetapi pandai berbicara.",
            question: "Kesimpulan yang paling tepat adalah…",
            options: [
              { id: "a", text: "Tuan D seorang penipu yang pandai bicara." },
              {
                id: "b",
                text: "Tuan D seorang penipu yang tidak pandai bicara dan tidak ramah.",
              },
              {
                id: "c",
                text: "Tuan D bukan seorang penipu, meskipun pandai bicara.",
              },
              {
                id: "d",
                text: "Tuan D bukan seorang penipu, meskipun tidak ramah.",
              },
              { id: "e", text: "Tuan D bukan seorang penipu yang ramah." },
            ],
            correctAnswer: "c",
            explanation:
              "Syarat mutlak menjadi penipu adalah (Pandai Bicara) DAN (Ramah). Karena Tuan D TIDAK RAMAH, ia gagal memenuhi salah satu syarat wajib. Maka, Tuan D pasti bukan penipu.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nJehan tidak lolos seleksi atau ia menjadi relawan.\nJika Jehan menjadi relawan, maka ia mendapatkan teman baru.\nJika Jehan tidak senang, maka ia tidak mendapatkan teman baru.",
            question:
              "Kesimpulan yang paling tepat dari pernyataan tersebut adalah…",
            options: [
              {
                id: "a",
                text: "Jehan tidak lolos seleksi atau ia menjadi relawan.",
              },
              {
                id: "b",
                text: "Jika Jehan lolos seleksi, maka ia mendapatkan teman baru.",
              },
              { id: "c", text: "Jehan tidak lolos seleksi atau ia senang." },
              {
                id: "d",
                text: "Jika Jehan tidak lolos seleksi, maka ia tidak senang.",
              },
              { id: "e", text: "Jika Jehan lolos seleksi, maka ia senang." },
            ],
            correctAnswer: "e",
            explanation:
              "Ubah ke Implikasi:\nP1: ~Lolos ∨ Relawan ≡ Lolos ⇒ Relawan.\nP2: Relawan ⇒ Teman Baru.\nP3: ~Senang ⇒ ~Teman Baru (Kontraposisi: Teman Baru ⇒ Senang).\nRantai Silogisme: Lolos ⇒ Relawan ⇒ Teman Baru ⇒ Senang.\nKesimpulan: Jika Jehan lolos seleksi, maka ia senang.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nSemua calon mahasiswa menempuh tes bahasa Inggris.\nSebagian calon mahasiswa memiliki skor TOEFL diatas 450.",
            question: "Simpulan yang tepat adalah…",
            options: [
              {
                id: "a",
                text: "Sebagian calon mahasiswa yang tidak memiliki skor TOEFL diatas 450 menempuh tes bahasa Inggris.",
              },
              {
                id: "b",
                text: "Semua calon mahasiswa yang memiliki skor TOEFL diatas 450 tidak menempuh tes bahasa Inggris.",
              },
              {
                id: "c",
                text: "Semua calon mahasiswa yang tidak memiliki skor TOEFL diatas 450 tidak menempuh tes bahasa Inggris.",
              },
              {
                id: "d",
                text: "Sebagian calon mahasiswa yang tidak memiliki skor TOEFL diatas 450 tidak menempuh tes bahasa Inggris.",
              },
              {
                id: "e",
                text: "Semua calon mahasiswa yang menempuh tes bahasa Inggris tidak memiliki skor TOEFL diatas 450.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Himpunan 'Semua calon mahasiswa' wajib tes Inggris. Kelompok 'Sebagian' yang punya TOEFL > 450 maupun kelompok sisa yang TIDAK punya TOEFL > 450, keduanya adalah bagian dari 'Calon Mahasiswa'. Jadi, mereka (yang tidak punya skor tinggi pun) tetap menempuh tes bahasa Inggris.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nTidak ada buah stroberi kecuali berwarna putih dan merah.\nYuko menerima stroberi bukan putih, bukan merah.",
            question:
              "Simpulan yang tepat tentang buah yang diterima oleh Yuko adalah…",
            options: [
              { id: "a", text: "Buah stroberi warna putih." },
              { id: "b", text: "Buah stroberi warna merah." },
              { id: "c", text: "Buah bukan stroberi." },
              { id: "d", text: "Buah stroberi bukan warna putih." },
              { id: "e", text: "Buah stroberi bukan merah dan bukan putih." },
            ],
            correctAnswer: "c",
            explanation:
              "Premis menyatakan Stroberi WAJIB berwarna Putih atau Merah. Yuko menerima buah yang TIDAK Putih dan TIDAK Merah. Karena syarat warna tidak terpenuhi, maka buah tersebut pasti BUKAN Stroberi.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nSemua cangkir berbentuk oval.\nSebagian cangkir berisi kopi.",
            question: "Simpulan yang tepat adalah...",
            options: [
              { id: "a", text: "Cangkir berisi susu bentuknya tidak oval." },
              {
                id: "b",
                text: "Semua cangkir yang berbentuk oval berisi kopi.",
              },
              {
                id: "c",
                text: "Cangkir yang berisi kopi bentuknya tidak oval.",
              },
              {
                id: "d",
                text: "Beberapa cangkir berbentuk oval dan semuanya berisi kopi.",
              },
              {
                id: "e",
                text: "Ada cangkir yang berisi susu dan berbentuk oval.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Karena 'Semua cangkir berbentuk oval', maka cangkir apapun (termasuk yang berisi kopi) pasti oval. Karena 'Sebagian cangkir berisi kopi', maka kesimpulannya adalah irisan keduanya: Ada beberapa cangkir yang oval DAN berisi kopi.",
            points: 6,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nSemua kerabat dekat menghadiri pesta keluarga.\nPutu menghadiri pesta keluarga, sedangkan Made tidak hadir.",
            question: "Simpulan yang tepat adalah...",
            options: [
              { id: "a", text: "Putu bukan kerabat dekat keluarga." },
              { id: "b", text: "Made bukan kerabat dekat keluarga." },
              { id: "c", text: "Made dan Putu kerabat dekat keluarga." },
              { id: "d", text: "Made dan Putu bukan kerabat dekat keluarga." },
              { id: "e", text: "Made dan Putu dua orang kerabat dekat." },
            ],
            correctAnswer: "b",
            explanation:
              "Syarat menjadi kerabat dekat adalah 'Hadir di pesta'. Karena Made 'Tidak Hadir', maka ia secara otomatis gugur dari kategori kerabat dekat (Modus Tollens). Untuk Putu, dia hadir, tapi belum tentu kerabat dekat (bisa jadi teman), tapi Made PASTI bukan kerabat.",
            points: 6,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nPada hari libur nasional, toko pakaian tutup kecuali untuk toko yang menjual kebutuhan pokok.\nHari Jumat adalah salah satu hari libur nasional.",
            question: "Simpulan yang tepat adalah…",
            options: [
              { id: "a", text: "Toko pakaian buka, meskipun pada hari Jumat." },
              {
                id: "b",
                text: "Toko pakaian tetap buka, kecuali pada hari Jumat.",
              },
              {
                id: "c",
                text: "Toko kebutuhan pokok buka, kecuali pada hari Jumat.",
              },
              {
                id: "d",
                text: "Toko pakaian dan toko kebutuhan pokok buka pada hari Jumat.",
              },
              {
                id: "e",
                text: "Toko pakaian dan toko kebutuhan pokok libur pada hari Jumat.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Karena Jumat adalah hari libur nasional, maka aturan libur berlaku: Toko pakaian TUTUP. Pernyataan 'Toko pakaian tetap buka, kecuali pada hari Jumat' secara logika berarti: Hari biasa buka, Hari Jumat (Libur) tutup. Ini konsisten dengan premis.",
            points: 6,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nAli tidak menonton film atau Ali bisa bermain gitar.\nJika Ali bisa bermain gitar, maka Ali bisa bermain musik di acara keluarga.",
            question:
              "Simpulan yang tepat dari dua pernyataan tersebut adalah...",
            options: [
              {
                id: "a",
                text: "Ali menonton film atau Ali bisa bermain musik di acara keluarga.",
              },
              {
                id: "b",
                text: "Ali menonton film atau Ali tidak bisa bermain musik di acara keluarga.",
              },
              {
                id: "c",
                text: "Jika Ali menonton film, maka Ali bisa bermain musik di acara keluarga.",
              },
              {
                id: "d",
                text: "Jika Ali tidak menonton film, maka Ali bisa bermain musik di acara keluarga.",
              },
              {
                id: "e",
                text: "Jika Ali tidak menonton film, maka Ali tidak bisa bermain musik di acara keluarga.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "P1: ~Nonton ∨ Gitar ≡ Nonton ⇒ Gitar.\nP2: Gitar ⇒ Musik Keluarga.\nSilogisme (p ⇒ q, q ⇒ r, maka p ⇒ r): Jika Ali menonton film, maka Ali bisa bermain musik di acara keluarga.",
            points: 6,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Perhatikan pernyataan berikut!\nJika hari ini tidak hujan, maka Dimas latihan basket.\nJika Dimas main sepak bola maka ia tidak latihan basket.\nDimas main sepak bola.",
            question: "Maka kesimpulan yang tepat adalah....",
            options: [
              { id: "a", text: "Dimas malas latihan basket." },
              { id: "b", text: "Dimas tidak latihan basket." },
              { id: "c", text: "Dimas latihan basket dan main bola." },
              { id: "d", text: "Hari ini tidak hujan." },
              { id: "e", text: "Hari ini hujan." },
            ],
            correctAnswer: "e",
            explanation:
              "Fakta: Dimas main bola. Dari P2: Jika main bola ⇒ tidak latihan basket. Dari P1 (Kontraposisi): Jika TIDAK latihan basket ⇒ HARI INI HUJAN. Kesimpulan: Hari ini hujan.",
            points: 6,
          },
        ],
      },
    ];

    await Module.deleteOne({ _id: moduleId });
    const newModule = new Module({
      _id: moduleId,
      name: "Simpulan Logis",
      description: "Materi penalaran logis dan penarikan kesimpulan.",
      subcategory: "Penalaran Deduktif",
      courseId: course._id,
      steps: stepsData,
      points_available: 100,
    });

    await newModule.save();
    console.log(
      "Module 'Simpulan Logis' created successfully with 15 questions and 100 total points.",
    );
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedSimpulanLogis();
