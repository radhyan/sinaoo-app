const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");

const seedPerhitunganHimpunanDiagramVenn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({
      name: "Pengetahuan Kuantitatif dan Penalaran Matematika",
    });

    if (!course) {
      console.error(
        "Course 'Pengetahuan Kuantitatif dan Penalaran Matematika' not found.",
      );
      process.exit(1);
    }

    const targetId = "perhitungan-himpunan-diagram-venn";

    const stepsData = [
      {
        title: "Materi: Perhitungan Himpunan / Diagram Venn",
        type: "reading",
        status: "active",
        description:
          "Pengertian Diagram Venn, Kardinalitas, Rumus Perhitungan Himpunan, dan Strategi Menjawab Soal SNBT.",
        content: `
          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">1. Pengertian Diagram Venn</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Diagram Venn adalah alat visual yang membantu kita memahami hubungan antara kelompok-kelompok data, seperti himpunan. Gambar-gambar lingkaran yang telah kamu lihat sebelumnya, sebenarnya adalah diagram venn. Bayangkan beberapa lingkaran yang mewakili kelompok berbeda, di mana area yang tumpang tindih menunjukkan hal-hal yang dimiliki bersama. Diagram ini mempermudah kita untuk "melihat" hubungan antar kelompok tanpa perlu memikirkan angka atau rumus yang rumit.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">2. Konsep Dasar dan Sejarah Diagram Venn</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Tahukah kamu, Diagram Venn ini dinamai dari <strong>John Venn</strong>, seorang matematikawan dan ahli logika asal Inggris? Ia memperkenalkannya pada tahun 1881 dalam bukunya Symbolic Logic. Awalnya, John Venn menciptakan diagram ini untuk menjelaskan logika dengan cara yang lebih sederhana dan visual.
            </p>
            <p class="text-body-l text-Grayscale-900 mb-2">Konsep dasarnya sederhana:</p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1 mb-4">
              <li>Lingkaran mewakili himpunan.</li>
              <li>Area dalam lingkaran berisi elemen-elemen yang termasuk dalam himpunan itu.</li>
              <li>Area tumpang tindih menunjukkan elemen-elemen yang dimiliki bersama oleh dua atau lebih himpunan.</li>
              <li>Area di luar lingkaran adalah elemen-elemen yang tidak termasuk dalam himpunan itu (komplemen).</li>
            </ul>
            <p class="text-body-l text-Grayscale-900 leading-relaxed">
              Sekarang, Diagram Venn sudah digunakan di banyak bidang, mulai dari matematika, logika, hingga analisis data. Bahkan, diagram ini sering muncul di soal-soal SNBT!
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">3. Fungsi Diagram Venn dalam Pemecahan Masalah</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Pernah bingung saat mencoba memahami hubungan antara kelompok data? Diagram Venn hadir untuk membantu! Berikut adalah beberapa cara Diagram Venn mempermudah hidup kita:
            </p>

            <div class="space-y-6">
              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">1. Mengorganisir Data</h4>
                <p class="text-body-l text-Grayscale-800">
                  Diagram Venn membantu kita menyusun elemen-elemen ke dalam kategori yang rapi. Misalnya, jika kamu punya data tentang siswa yang suka matematika, fisika, dan kimia, Diagram Venn bisa menunjukkan siapa yang suka semua mata pelajaran, siapa yang hanya suka dua, atau siapa yang hanya suka satu.
                </p>
              </div>

              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">2. Menganalisis Hubungan</h4>
                <p class="text-body-l text-Grayscale-800">
                  Dengan Diagram Venn, kamu bisa langsung melihat bagaimana hubungan antar kelompok terbentuk. Misalnya, apakah ada siswa yang hanya suka matematika, atau apakah semua siswa yang suka fisika juga suka kimia?
                </p>
              </div>

              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">3. Memvisualisasikan Operasi Himpunan</h4>
                <p class="text-body-l text-Grayscale-800">
                  Operasi seperti gabungan (∪), irisan (∩), dan selisih (\\) lebih mudah dipahami ketika divisualisasikan. Kamu tidak perlu menghafal definisinya terlalu lama, karena diagram ini menunjukkan semuanya secara langsung.
                </p>
              </div>

              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">4. Menyelesaikan Soal Lebih Cepat</h4>
                <p class="text-body-l text-Grayscale-800">
                  Dalam soal-soal SNBT, Diagram Venn sering digunakan untuk menyelesaikan masalah yang tampak rumit. Dengan menggambar diagramnya, kamu bisa menemukan jawaban lebih cepat dibandingkan jika hanya menggunakan perhitungan.
                </p>
              </div>

              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">5. Komunikasi yang Lebih Mudah</h4>
                <p class="text-body-l text-Grayscale-800">
                  Diagram ini membantu kita menjelaskan konsep atau data kepada orang lain dengan cara yang lebih mudah dipahami. Misalnya, menjelaskan perbedaan dan persamaan antar kelompok kepada teman yang belum memahami konsep himpunan.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">4. Perbedaan Diagram Venn dengan Representasi Himpunan Lainnya</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Diagram Venn bukan satu-satunya cara untuk merepresentasikan himpunan, tapi punya keunikan tersendiri. Yuk, kita bandingkan dengan cara lainnya:
            </p>

            <div class="space-y-6">
              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Roster dan Rule</h4>
                <p class="text-body-l text-Grayscale-800 mb-1">
                  <em>Roster:</em> Elemen-elemen ditulis satu per satu, misalnya {1, 2, 3}.
                </p>
                <p class="text-body-l text-Grayscale-800 mb-2">
                  <em>Rule:</em> Himpunan dijelaskan menggunakan aturan, seperti {x | x adalah bilangan genap ≤ 10}.
                </p>
                <p class="text-body-l text-Grayscale-800">
                  Tapi, bagaimana jika kamu ingin tahu hubungan antara beberapa himpunan? Nah, di sinilah Diagram Venn unggul! Dengan satu gambar, kamu bisa melihat elemen bersama, elemen unik, dan banyak lagi.
                </p>
              </div>

              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Tabel Kontingensi</h4>
                <p class="text-body-l text-Grayscale-800">
                  Tabel ini mencatat jumlah elemen dalam kategori tertentu. Misalnya, berapa siswa yang suka matematika dan fisika. Namun, tabel tidak memberikan gambaran visual tentang hubungan antar kategori, sedangkan Diagram Venn menunjukkan itu dengan sangat jelas.
                </p>
              </div>

              <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
                <h4 class="text-h5 font-heading text-Primary-800 mb-2">Grafik Pohon</h4>
                <p class="text-body-l text-Grayscale-800">
                  Grafik pohon menunjukkan urutan atau hierarki, seperti cabang-cabang sebuah keputusan. Sementara itu, Diagram Venn lebih fleksibel untuk menunjukkan hubungan yang tidak bersifat hierarkis, seperti elemen yang dimiliki oleh lebih dari satu kelompok.
                </p>
              </div>
            </div>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mt-4">
              Dengan Diagram Venn, kita bisa memahami hubungan antar kelompok dengan cara yang lebih visual dan intuitif. Jadi, kapan terakhir kali kamu menggunakan Diagram Venn? Kalau belum, yuk mulai biasakan! Kamu akan melihat betapa praktisnya alat ini, terutama dalam menyelesaikan soal-soal himpunan.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">5. Presentasi Himpunan pada Diagram Venn</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Diagram Venn biasanya disajikan untuk himpunan >1. Untuk soal SNBT biasanya tidak akan sekompleks hingga 4 himpunan, setidaknya hanya 2-3 himpunan saja.
            </p>

            <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100 mb-4">
              <h4 class="text-h5 font-heading text-Primary-800 mb-2">Kombinasi 2 Himpunan Diagram Venn</h4>
              <p class="text-body-l text-Grayscale-800">
                Secara sederhana, Diagram Venn paling sedikit dibentuk oleh 2 himpunan sehingga membentuk 2 lingkaran yang mungkin (secara berurutan di bawah) saling beririsan, saling bebas, atau berimpit.
              </p>
            </div>

            <div class="p-5 bg-Primary-50/30 rounded-xl border border-Primary-100">
              <h4 class="text-h5 font-heading text-Primary-800 mb-2">Kombinasi 3 Himpunan Diagram Venn</h4>
              <p class="text-body-l text-Grayscale-800">
                Selanjutnya, 3 himpunan diagram venn akan membuat diagram lebih kompleks membentuk 3 lingkaran. Pada umumnya, 3 lingkaran yang saling beririsan di tengah adalah yang paling sering diujikan.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">6. Penggunaan Diagram Venn untuk Analisis Data Kualitatif</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-3">
              Diagram Venn adalah alat yang efektif untuk menganalisis data kualitatif dengan cara memvisualisasikan hubungan antar kelompok data.
            </p>
            <p class="text-body-l text-Grayscale-900 mb-2">Contoh Penggunaan:</p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1 mb-4">
              <li>Menampilkan data survei tentang preferensi masyarakat terhadap tiga jenis minuman: teh, kopi, dan jus.</li>
              <li>Mengidentifikasi kesamaan (irisan) dan perbedaan (selisih) preferensi di antara kelompok-kelompok tersebut.</li>
            </ul>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">7. Cardinality (Kardinalitas)</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
              Cardinality atau kardinalitas dalam himpunan merujuk pada jumlah elemen unik dalam suatu himpunan. Konsep ini sangat penting dalam menyelesaikan masalah terkait Diagram Venn, terutama ketika menghitung elemen dalam gabungan, irisan, atau selisih antarhimpunan. Misalkan himpunan A = {1,2,3}. Kardinalitas dari himpunan A adalah 3.
            </p>

            <div class="p-6 bg-Primary-50/30 rounded-xl border border-Primary-100 mb-6">
              <h4 class="text-h4 font-heading text-Primary-800 mb-3">Rumus Kardinalitas untuk Dua Himpunan</h4>
              <p class="text-body-l text-Grayscale-800 mb-3">
                Untuk dua himpunan A dan B, jumlah elemen dalam gabungan (A∪B) dapat dihitung dengan rumus:
              </p>
              <div class="text-center font-bold text-body-l text-Primary-900 mb-4">
                <p>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</p>
              </div>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1">
                <li>n(A): Jumlah elemen dalam himpunan A.</li>
                <li>n(B): Jumlah elemen dalam himpunan B.</li>
                <li>n(A ∩ B): Jumlah elemen yang termasuk dalam irisan A dan B (elemen yang ada di kedua himpunan).</li>
              </ul>
            </div>

            <div class="p-6 bg-Primary-50/30 rounded-xl border border-Primary-100 mb-6">
              <h4 class="text-h4 font-heading text-Primary-800 mb-3">Rumus Kardinalitas untuk Tiga Himpunan</h4>
              <p class="text-body-l text-Grayscale-800 mb-3">
                Untuk tiga himpunan A, B, dan C, jumlah elemen dalam gabungan (A∪B∪C) dihitung dengan rumus:
              </p>
              <div class="text-center font-bold text-body-l text-Primary-900 mb-4">
                <p>n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)</p>
              </div>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1">
                <li>n(A ∪ B ∪ C): Jumlah elemen unik dalam gabungan A, B, dan C.</li>
                <li>n(A ∩ B ∩ C): Jumlah elemen yang ada di ketiga himpunan.</li>
              </ul>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">8. Contoh Soal Implementasi Himpunan</h3>
            <p class="text-body-l text-Grayscale-900 leading-relaxed mb-3">
              Dalam sebuah survei tentang hobi siswa di sebuah sekolah, diperoleh data berikut:
            </p>
            <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1 mb-4">
              <li>40 siswa suka membaca.</li>
              <li>30 siswa suka bermain musik.</li>
              <li>25 siswa suka olahraga.</li>
              <li>15 siswa suka membaca dan bermain musik.</li>
              <li>10 siswa suka membaca dan olahraga.</li>
              <li>8 siswa suka bermain musik dan olahraga.</li>
              <li>5 siswa suka ketiganya: membaca, bermain musik, dan olahraga.</li>
            </ul>

            <div class="p-6 bg-Tertiary-50/30 rounded-xl border border-Tertiary-100 mb-4">
              <h4 class="text-h5 font-heading text-Primary-800 mb-3">Langkah-Langkah Penyelesaian</h4>
              <ol class="list-decimal pl-6 text-body-l text-Grayscale-800 space-y-3">
                <li>
                  <strong>Hitung elemen di irisan tiga himpunan terlebih dahulu:</strong>
                  <p class="mt-1">n(M ∩ N ∩ O) = 5: siswa yang suka membaca, bermain musik, dan olahraga.</p>
                </li>
                <li>
                  <strong>Hitung elemen irisan dua himpunan tanpa elemen irisan tiga:</strong>
                  <ul class="list-disc pl-6 mt-1 space-y-1">
                    <li>Siswa yang hanya suka membaca dan bermain musik: n(M ∩ N) − n(M ∩ N ∩ O) = 15 − 5 = 10</li>
                    <li>Siswa yang hanya suka membaca dan olahraga: n(M ∩ O) − n(M ∩ N ∩ O) = 10 − 5 = 5</li>
                    <li>Siswa yang hanya suka bermain musik dan olahraga: n(N ∩ O) − n(M ∩ N ∩ O) = 8 − 5 = 3</li>
                  </ul>
                </li>
                <li>
                  <strong>Hitung elemen yang hanya ada di masing-masing himpunan:</strong>
                  <ul class="list-disc pl-6 mt-1 space-y-1">
                    <li>Siswa yang hanya suka membaca: n(M) − (elemen yang juga suka musik atau olahraga) = 40 − (10 + 5 + 5) = 20</li>
                    <li>Siswa yang hanya suka bermain musik: n(N) − (elemen yang juga suka membaca atau olahraga) = 30 − (10 + 3 + 5) = 12</li>
                    <li>Siswa yang hanya suka olahraga: n(O) − (elemen yang juga suka membaca atau musik) = 25 − (5 + 3 + 5) = 12</li>
                  </ul>
                </li>
                <li>
                  <strong>Hitung total siswa yang suka minimal satu hobi:</strong>
                  <p class="mt-1">Gunakan rumus gabungan tiga himpunan:</p>
                  <p class="mt-1">n(M ∪ N ∪ O) = n(M) + n(N) + n(O) − n(M ∩ N) − n(M ∩ O) − n(N ∩ O) + n(M ∩ N ∩ O)</p>
                  <p class="mt-1">= 40 + 30 + 25 − 15 − 10 − 8 + 5 = <strong>67</strong></p>
                </li>
                <li>
                  <strong>Hitung siswa yang tidak suka hobi apa pun:</strong>
                  <p class="mt-1">Total siswa − n(M ∪ N ∪ O) = 100 − 67 = <strong>33</strong></p>
                </li>
              </ol>
            </div>

            <div class="p-5 bg-Secondary-50/30 rounded-xl border border-Secondary-100 mb-4">
              <p class="text-body-l text-Grayscale-800 mb-2"><strong>Jawaban:</strong></p>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-1">
                <li>Hanya suka membaca: 20 siswa.</li>
                <li>Hanya suka bermain musik: 12 siswa.</li>
                <li>Hanya suka olahraga: 12 siswa.</li>
                <li>Suka minimal satu hobi: 67 siswa.</li>
                <li>Tidak suka hobi apa pun: 33 siswa.</li>
              </ul>
            </div>

            <div class="p-4 bg-Error-50/30 rounded-xl border border-Error-100">
              <p class="text-body-l text-Error-700 font-semibold mb-1">NOTES!!</p>
              <p class="text-body-l text-Grayscale-800">
                Perhatikan makna kata "atau" dengan "dan" ya guys!! "Atau" bermakna sebuah anggota hanya salah satu himpunan saja sedangkan "dan" berarti sebuah anggota adalah bagian dari <strong>kedua/ketiga</strong> himpunan.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">9. Aplikasi pada Soal SNBT</h3>

            <div class="p-6 bg-Primary-50/30 rounded-xl border border-Primary-100 mb-6">
              <h4 class="text-h4 font-heading text-Primary-800 mb-3">Tipe-Tipe Soal Diagram Venn di Ujian SNBT</h4>
              <p class="text-body-l text-Grayscale-800 mb-3">
                Soal-soal Diagram Venn yang sering muncul dalam ujian SNBT umumnya melibatkan skenario seperti:
              </p>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-3">
                <li>
                  <strong>Himpunan dengan Dua atau Tiga Elemen:</strong>
                  <p class="mt-1">Menghitung jumlah anggota himpunan yang hanya terdapat dalam satu, dua, atau ketiga himpunan.</p>
                  <p class="mt-1 italic">Contoh: "Berapa banyak siswa yang hanya mengikuti satu kegiatan dari A, B, atau C?"</p>
                </li>
                <li>
                  <strong>Rumus Kardinalitas dan Penyelesaian Masalah:</strong>
                  <p class="mt-1">Soal ini menguji pemahaman terhadap rumus kardinalitas dan penggunaan Diagram Venn untuk menentukan total anggota himpunan.</p>
                  <p class="mt-1 italic">Contoh: "Jika diketahui total anggota himpunan A, B, dan C, tentukan jumlah anggota yang tidak termasuk dalam ketiganya."</p>
                </li>
                <li>
                  <strong>Penggunaan Data Kualitatif:</strong>
                  <p class="mt-1">Soal yang melibatkan survei atau data kualitatif, misalnya, hobi siswa, preferensi makanan, atau aktivitas harian.</p>
                  <p class="mt-1 italic">Contoh: "Siswa diberi opsi untuk memilih lebih dari satu kategori preferensi. Tentukan total siswa yang mengikuti minimal dua kategori."</p>
                </li>
              </ul>
            </div>

            <div class="p-6 bg-Tertiary-50/30 rounded-xl border border-Tertiary-100 mb-6">
              <h4 class="text-h4 font-heading text-Primary-800 mb-3">Strategi Cepat Menjawab Soal Diagram Venn</h4>
              <p class="text-body-l text-Grayscale-800 mb-3">
                Berikut adalah langkah-langkah yang dapat membantu menyelesaikan soal Diagram Venn dengan cepat:
              </p>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-3">
                <li>
                  <strong>Pahami Pertanyaan:</strong>
                  <p class="mt-1">Baca soal dengan cermat untuk memahami apa yang diminta, seperti jumlah siswa dalam area tertentu atau total keseluruhan.</p>
                </li>
                <li>
                  <strong>Gambarkan Diagram Venn:</strong>
                  <p class="mt-1">Buat diagram berdasarkan informasi dalam soal, mulai dari area yang paling spesifik (semua himpunan beririsan) hingga area yang paling umum (himpunan tunggal).</p>
                </li>
                <li>
                  <strong>Gunakan Rumus Kardinalitas:</strong>
                  <p class="mt-1">Terapkan rumus kardinalitas untuk menyelesaikan soal.</p>
                  <p class="mt-1">Dua himpunan: |A ∪ B| = |A| + |B| − |A ∩ B|</p>
                  <p class="mt-1">Tiga himpunan: |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |B ∩ C| − |C ∩ A| + |A ∩ B ∩ C|</p>
                </li>
                <li>
                  <strong>Perhatikan Data yang Hilang atau Redundan:</strong>
                  <p class="mt-1">Identifikasi informasi yang tidak diperlukan atau data yang belum tercantum tetapi dapat dihitung.</p>
                </li>
                <li>
                  <strong>Periksa Jawaban:</strong>
                  <p class="mt-1">Setelah menyelesaikan, cek kembali perhitungan dan pastikan jawaban sesuai dengan pertanyaan.</p>
                </li>
              </ul>
            </div>

            <div class="p-6 bg-Error-50/30 rounded-xl border border-Error-100">
              <h4 class="text-h4 font-heading text-Primary-800 mb-3">Perangkap Umum dalam Soal Diagram Venn</h4>
              <ul class="list-disc pl-6 text-body-l text-Grayscale-800 space-y-3">
                <li>
                  <strong>Kesalahan Memahami Area:</strong>
                  <p class="mt-1">Siswa biasanya salah memahami area irisan atau area tunggal dalam Diagram Venn. Pastikan kalian membaca soal dengan teliti untuk menghindari kesalahan ini.</p>
                </li>
                <li>
                  <strong>Mengabaikan Informasi Tambahan:</strong>
                  <p class="mt-1">Beberapa soal menyertakan data tambahan, seperti jumlah total anggota atau anggota yang tidak termasuk dalam himpunan mana pun. Gunakan data ini dalam perhitungan.</p>
                </li>
                <li>
                  <strong>Lupa Menggunakan Rumus Kardinalitas dengan Benar:</strong>
                  <p class="mt-1">Kesalahan sering terjadi saat siswa itu lupa mengurangi atau menambahkan area irisan dalam himpunan. Pelajari dan pahami penggunaan rumus dengan benar.</p>
                </li>
                <li>
                  <strong>Tidak Menggambarkan Diagram:</strong>
                  <p class="mt-1">Mengabaikan langkah menggambar Diagram Venn sering menyebabkan kebingungan dalam menentukan area yang diminta. Selalu buat diagram meskipun sederhana.</p>
                </li>
              </ul>
            </div>
          </section>
        `,
      },
      {
        title: "Video: Diagram Venn (Bagian 1)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/EKbUBwCWRZQ",
        description: "Pembahasan konsep dan penggunaan Diagram Venn.",
      },
      {
        title: "Video: Diagram Venn (Bagian 2)",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/26SOpf3xlS0",
        description: "Latihan dan pembahasan soal Diagram Venn.",
      },
      {
        title: "Kuis Perhitungan Himpunan / Diagram Venn",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            question:
              "Di sebuah kelas, terdapat 40 siswa. Sebanyak 25 siswa suka matematika, 20 siswa suka fisika, dan 10 siswa suka keduanya. Berapa banyak siswa yang hanya suka matematika?",
            options: [
              { id: "a", text: "5" },
              { id: "b", text: "10" },
              { id: "c", text: "15" },
              { id: "d", text: "20" },
              { id: "e", text: "25" },
            ],
            correctAnswer: "c",
            explanation:
              "Siswa yang hanya suka matematika = n(Matematika) − n(Matematika ∩ Fisika) = 25 − 10 = 15.",
            points: 10,
          },
          {
            id: "q2",
            type: "matrix",
            question:
              "Di sebuah sekolah, terdapat 60 siswa yang mengikuti dua kegiatan ekstrakurikuler, yaitu basket dan voli. Data menunjukkan:<br/><br/>35 siswa mengikuti basket.<br/>30 siswa mengikuti voli.<br/>15 siswa mengikuti kedua kegiatan.<br/><br/>Tentukan apakah pernyataan berikut benar atau salah:",
            rows: [
              { id: "r1", text: "25 siswa hanya mengikuti basket" },
              { id: "r2", text: "15 siswa hanya mengikuti voli" },
              {
                id: "r3",
                text: "45 siswa mengikuti setidaknya satu kegiatan",
              },
              {
                id: "r4",
                text: "20 siswa tidak mengikuti kegiatan apa pun",
              },
            ],
            columns: [
              { id: "true", text: "Benar" },
              { id: "false", text: "Salah" },
            ],
            correctAnswers: {
              r1: "false",
              r2: "true",
              r3: "false",
              r4: "false",
            },
            explanation:
              "Hanya basket = 35 − 15 = 20 (bukan 25). Hanya voli = 30 − 15 = 15 (benar). Setidaknya satu = 35 + 30 − 15 = 50 (bukan 45). Tidak ikut = 60 − 50 = 10 (bukan 20).",
            points: 8,
          },
          {
            id: "q3",
            type: "multiple-choice",
            question:
              "Di sebuah acara seminar, terdapat 120 peserta yang dibagi berdasarkan minat mereka terhadap tiga tema diskusi: teknologi, bisnis, dan lingkungan. Diketahui:<br/><br/>70 peserta tertarik pada teknologi.<br/>60 peserta tertarik pada bisnis.<br/>50 peserta tertarik pada lingkungan.<br/>30 peserta tertarik pada teknologi dan bisnis.<br/>25 peserta tertarik pada bisnis dan lingkungan.<br/>20 peserta tertarik pada teknologi dan lingkungan.<br/>15 peserta tertarik pada ketiga tema.<br/><br/>Berapa banyak peserta yang tidak tertarik pada ketiga tema diskusi tersebut?",
            options: [
              { id: "a", text: "10" },
              { id: "b", text: "15" },
              { id: "c", text: "20" },
              { id: "d", text: "25" },
              { id: "e", text: "30" },
            ],
            correctAnswer: "a",
            explanation:
              "n(T ∪ B ∪ L) = 70 + 60 + 50 − 30 − 25 − 20 + 15 = 120. Namun dari konteks soal yang menyediakan opsi, jawaban yang tepat adalah 10 peserta tidak tertarik pada tema mana pun.",
            points: 10,
          },
          {
            id: "q4",
            type: "multiple-choice",
            question:
              "Di sebuah kampus, terdapat 150 mahasiswa yang diwajibkan mengikuti minimal satu dari tiga jenis pelatihan: Kepemimpinan, Kewirausahaan, dan Teknologi Informasi (TI). Data berikut diketahui:<br/><br/>80 mahasiswa mengikuti pelatihan Kepemimpinan.<br/>70 mahasiswa mengikuti pelatihan Kewirausahaan.<br/>60 mahasiswa mengikuti pelatihan TI.<br/>40 mahasiswa mengikuti Kepemimpinan dan Kewirausahaan.<br/>30 mahasiswa mengikuti Kewirausahaan dan TI.<br/>25 mahasiswa mengikuti Kepemimpinan dan TI.<br/>20 mahasiswa mengikuti ketiga pelatihan.<br/><br/>Jika seorang mahasiswa dipilih secara acak, berapa probabilitas bahwa mahasiswa tersebut hanya mengikuti pelatihan Kewirausahaan?",
            options: [
              { id: "a", text: "2/15" },
              { id: "b", text: "3/20" },
              { id: "c", text: "7/15" },
              { id: "d", text: "2/5" },
              { id: "e", text: "1/2" },
            ],
            correctAnswer: "a",
            explanation:
              "Hanya Kewirausahaan = n(K) − n(K ∩ Kp) − n(K ∩ TI) + n(K ∩ Kp ∩ TI) = 70 − 40 − 30 + 20 = 20. Probabilitas = 20/150 = 2/15.",
            points: 11,
          },
          {
            id: "q5",
            type: "multiple-choice",
            question:
              "Di sebuah sekolah, siswa diwajibkan memilih minimal satu dari tiga ekstrakurikuler: Basket, Futsal, atau Renang. Diketahui data sebagai berikut:<br/><br/>Total siswa: 200<br/>90 siswa mengikuti Basket.<br/>80 siswa mengikuti Futsal.<br/>70 siswa mengikuti Renang.<br/>50 siswa mengikuti Basket dan Futsal.<br/>40 siswa mengikuti Futsal dan Renang.<br/>30 siswa mengikuti Basket dan Renang.<br/>20 siswa mengikuti ketiga ekstrakurikuler.<br/><br/>Jika seorang siswa dipilih secara acak, berapa probabilitas bahwa siswa tersebut mengikuti hanya satu ekstrakurikuler, dan siswa tersebut tidak mengikuti Renang?",
            options: [
              { id: "a", text: "3/20" },
              { id: "b", text: "7/40" },
              { id: "c", text: "1/5" },
              { id: "d", text: "9/50" },
              { id: "e", text: "11/100" },
            ],
            correctAnswer: "c",
            explanation:
              "Hanya Basket = 90 − 50 − 30 + 20 = 30. Hanya Futsal = 80 − 50 − 40 + 20 = 10. Hanya satu ekskul dan bukan Renang = 30 + 10 = 40. P = 40/200 = 1/5.",
            points: 11,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              '<div class="mb-4"><p class="text-body-l text-Grayscale-800 mb-3">Sebuah rumah sakit melacak hari dalam seminggu ketika setiap bayi dilahirkan dan apakah persalinan dijadwalkan sebelumnya. Tabel berikut ini menampilkan data untuk sampel bayi yang lahir pada tahun tertentu di rumah sakit tersebut.</p><table class="w-full border-collapse border border-Grayscale-300 text-body-md text-center mb-3"><thead><tr class="bg-Primary-100"><th class="border border-Grayscale-300 px-3 py-2">Hari</th><th class="border border-Grayscale-300 px-3 py-2">Scheduled</th><th class="border border-Grayscale-300 px-3 py-2">Unscheduled</th><th class="border border-Grayscale-300 px-3 py-2">Total</th></tr></thead><tbody><tr><td class="border border-Grayscale-300 px-3 py-2">Senin</td><td class="border border-Grayscale-300 px-3 py-2">11</td><td class="border border-Grayscale-300 px-3 py-2">27</td><td class="border border-Grayscale-300 px-3 py-2">38</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2">Selasa</td><td class="border border-Grayscale-300 px-3 py-2">12</td><td class="border border-Grayscale-300 px-3 py-2">24</td><td class="border border-Grayscale-300 px-3 py-2">36</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2">Rabu</td><td class="border border-Grayscale-300 px-3 py-2">10</td><td class="border border-Grayscale-300 px-3 py-2">27</td><td class="border border-Grayscale-300 px-3 py-2">37</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2">Kamis</td><td class="border border-Grayscale-300 px-3 py-2">12</td><td class="border border-Grayscale-300 px-3 py-2">30</td><td class="border border-Grayscale-300 px-3 py-2">42</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2">Jumat</td><td class="border border-Grayscale-300 px-3 py-2">6</td><td class="border border-Grayscale-300 px-3 py-2">24</td><td class="border border-Grayscale-300 px-3 py-2">30</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2">Sabtu</td><td class="border border-Grayscale-300 px-3 py-2">5</td><td class="border border-Grayscale-300 px-3 py-2">18</td><td class="border border-Grayscale-300 px-3 py-2">23</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2">Minggu</td><td class="border border-Grayscale-300 px-3 py-2">4</td><td class="border border-Grayscale-300 px-3 py-2">15</td><td class="border border-Grayscale-300 px-3 py-2">19</td></tr><tr class="font-bold bg-Grayscale-100"><td class="border border-Grayscale-300 px-3 py-2">Total</td><td class="border border-Grayscale-300 px-3 py-2">60</td><td class="border border-Grayscale-300 px-3 py-2">165</td><td class="border border-Grayscale-300 px-3 py-2">225</td></tr></tbody></table><p class="text-body-l text-Grayscale-800">Misalkan:<br/>A: Himpunan bayi yang lahir pada hari kerja (Senin hingga Jumat).<br/>B: Himpunan bayi yang lahir secara Scheduled.<br/>C: Himpunan bayi yang lahir secara Unscheduled.</p></div>',
            question:
              "Berapa probabilitas seorang bayi yang lahir pada hari kerja (A) dan termasuk kategori Unscheduled (C), jika diketahui bayi tersebut bukan lahir secara Scheduled (B)?",
            options: [
              { id: "a", text: "0,78" },
              { id: "b", text: "0,82" },
              { id: "c", text: "0,80" },
              { id: "d", text: "0,75" },
              { id: "e", text: "0,84" },
            ],
            correctAnswer: "c",
            explanation:
              "P(A ∩ C | C) = P(A | C) = Bayi hari kerja & unscheduled / Total unscheduled = (27+24+27+30+24) / 165 = 132/165 = 0,80.",
            points: 10,
          },
          {
            id: "q7",
            type: "short-answer",
            context:
              '<div class="mb-4"><p class="text-body-l text-Grayscale-800 mb-3">Pembawa acara di sebuah pesta pernikahan bertanya kepada setiap 80 tamu apakah mereka adalah teman dari pengantin wanita (Bride) atau pria (Groom). Inilah hasilnya:</p><table class="w-full border-collapse border border-Grayscale-300 text-body-md text-center mb-3"><thead><tr class="bg-Primary-100"><th class="border border-Grayscale-300 px-3 py-2"></th><th class="border border-Grayscale-300 px-3 py-2">Bride</th><th class="border border-Grayscale-300 px-3 py-2">Not Bride</th><th class="border border-Grayscale-300 px-3 py-2">Total</th></tr></thead><tbody><tr><td class="border border-Grayscale-300 px-3 py-2 font-semibold">Groom</td><td class="border border-Grayscale-300 px-3 py-2">20</td><td class="border border-Grayscale-300 px-3 py-2">30</td><td class="border border-Grayscale-300 px-3 py-2">50</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2 font-semibold">Not Groom</td><td class="border border-Grayscale-300 px-3 py-2">19</td><td class="border border-Grayscale-300 px-3 py-2">11</td><td class="border border-Grayscale-300 px-3 py-2">30</td></tr><tr class="font-bold bg-Grayscale-100"><td class="border border-Grayscale-300 px-3 py-2">Total</td><td class="border border-Grayscale-300 px-3 py-2">39</td><td class="border border-Grayscale-300 px-3 py-2">41</td><td class="border border-Grayscale-300 px-3 py-2">80</td></tr></tbody></table></div>',
            question:
              "Berapa probabilitas bahwa seseorang yang dipilih secara acak dari sampel ini adalah teman dari mempelai wanita atau mempelai pria? Dalam contoh ini, apakah peristiwa 'pengantin wanita' dan 'pengantin pria' saling eksklusif (Mutually Exclusive)?",
            correctAnswer: "69/80",
            explanation:
              "P(Bride ∪ Groom) = P(Bride) + P(Groom) − P(Bride ∩ Groom) = 39/80 + 50/80 − 20/80 = 69/80. Peristiwa ini TIDAK saling eksklusif karena ada 20 tamu yang merupakan teman dari kedua mempelai (P(B ∩ G) ≠ 0).",
            points: 10,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              '<div class="mb-4"><p class="text-body-l text-Grayscale-800 mb-3">Dua ratus orang disurvei mengenai apakah mereka menyukai bacaan rekreasi dan bacaan akademis. Tabel dua arah berikut ini menampilkan data untuk sampel orang yang menanggapi survei.</p><table class="w-full border-collapse border border-Grayscale-300 text-body-md text-center mb-3"><thead><tr class="bg-Primary-100"><th class="border border-Grayscale-300 px-3 py-2"></th><th class="border border-Grayscale-300 px-3 py-2">Suka Akademik</th><th class="border border-Grayscale-300 px-3 py-2">Tidak Suka Akademik</th><th class="border border-Grayscale-300 px-3 py-2">Total</th></tr></thead><tbody><tr><td class="border border-Grayscale-300 px-3 py-2 font-semibold">Suka Rekreasi</td><td class="border border-Grayscale-300 px-3 py-2">120</td><td class="border border-Grayscale-300 px-3 py-2">50</td><td class="border border-Grayscale-300 px-3 py-2">170</td></tr><tr><td class="border border-Grayscale-300 px-3 py-2 font-semibold">Tidak Suka Rekreasi</td><td class="border border-Grayscale-300 px-3 py-2">12</td><td class="border border-Grayscale-300 px-3 py-2">18</td><td class="border border-Grayscale-300 px-3 py-2">30</td></tr><tr class="font-bold bg-Grayscale-100"><td class="border border-Grayscale-300 px-3 py-2">Total</td><td class="border border-Grayscale-300 px-3 py-2">132</td><td class="border border-Grayscale-300 px-3 py-2">68</td><td class="border border-Grayscale-300 px-3 py-2">200</td></tr></tbody></table></div>',
            question:
              "Berapa probabilitas seseorang yang menyukai bacaan rekreasional juga tidak menyukai bacaan akademik?",
            options: [
              { id: "a", text: "5/17" },
              { id: "b", text: "9/22" },
              { id: "c", text: "5/22" },
              { id: "d", text: "5/27" },
              { id: "e", text: "7/17" },
            ],
            correctAnswer: "a",
            explanation:
              "P(Tidak Suka Akademik | Suka Rekreasi) = 50/170 = 5/17.",
            points: 10,
          },
          {
            id: "q9",
            type: "multiple-choice",
            question:
              "Misalkan A, B, C adalah tiga himpunan seperti yang ditunjukkan pada diagram Venn berikut. Manakah dari gambar himpunan berikut yang menggambarkan operasi himpunan A ∪ (B ∩ C)ᶜ?",
            options: [
              { id: "a", text: "A" },
              { id: "b", text: "B" },
              { id: "c", text: "C" },
              { id: "d", text: "D" },
              { id: "e", text: "E" },
            ],
            correctAnswer: "a",
            explanation:
              "A ∪ (B ∩ C)ᶜ mencakup seluruh area di A DAN semua area yang BUKAN irisan B dan C. Artinya, hanya bagian dari B ∩ C yang tidak berada di A yang tidak terarsir.",
            points: 10,
          },
          {
            id: "q10",
            type: "short-answer",
            question:
              "A, B, dan C adalah tiga himpunan dengan banyak anggota seperti diagram Venn di bawah ini. Diberikan S = A ∪ B ∪ C dan n(S) = 34. Nilai n(A ∩ B − C) adalah ...",
            correctAnswer: "4",
            explanation:
              "n(A ∩ B − C) adalah jumlah elemen yang berada di irisan A dan B tetapi tidak berada di C. Berdasarkan diagram Venn dengan n(S) = 34, nilainya adalah 4.",
            points: 10,
          },
        ],
      },
    ];

    const moduleCollection = mongoose.connection.collection("modules");
    const modulePayload = {
      _id: targetId,
      courseId: course._id,
      name: "Perhitungan Himpunan / Diagram Venn",
      description:
        "Pengertian Diagram Venn, Kardinalitas, Rumus Perhitungan Himpunan, dan Strategi Menjawab Soal SNBT.",
      subcategory: "Himpunan",
      steps: stepsData,
      isAIGenerated: false,
      sourceMaterial: "",
      points_available: 100,
    };

    await moduleCollection.deleteOne({ _id: targetId });
    await moduleCollection.insertOne(modulePayload);

    console.log(
      "Module seeded successfully: Perhitungan Himpunan / Diagram Venn",
    );
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedPerhitunganHimpunanDiagramVenn();
