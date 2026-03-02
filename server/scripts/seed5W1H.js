const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seed5W1H = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Literasi Bahasa Indonesia";
    let course = await Course.findOne({ name: courseName });

    // Create course if it doesn't exist yet
    if (!course) {
      console.log(`Course '${courseName}' not found. Creating it...`);
      course = await Course.create({
        name: courseName,
        description:
          "Materi dan latihan soal untuk Literasi Bahasa Indonesia pada UTBK SNBT.",
        image_url: "https://minio.sinaoo.id/sinaoo-assets/course-literasi.png",
        total_modules: 0,
        published: true,
      });
      console.log("Created Course:", course.name);
    } else {
      console.log("Found Course:", course.name);
    }

    const targetId = "5w-1h";

    const stepsData = [
      {
        title: "Materi: 5W+1H dalam Literasi Bahasa Indonesia",
        type: "reading",
        status: "active",
        description:
          "Kenali keenam unsur utama dalam menggali informasi pada sebuah teks (What, Who, Where, When, Why, How).",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">5W+1H dalam Literasi Bahasa Indonesia</h3>
              <p class="text-body-l text-Grayscale-900 mb-4">
                <span class="font-bold">5W+1H adalah cara untuk memahami informasi dengan menjawab enam pertanyaan dasar</span>. <span class="font-bold">Metode</span> ini sering digunakan <span class="font-bold">untuk memahami cerita, berita, atau teks lainnya dengan lebih mudah</span>. Keenam unsur tersebut yakni sebagai berikut:
              </p>
              
              <ol class="list-decimal pl-5 space-y-1 text-body-l text-Grayscale-900 mb-6">
                <li><span class="font-bold italic">What</span> (<span class="font-bold">Apa</span>): <span class="italic">Apa yang terjadi?</span></li>
                <li><span class="font-bold italic">Who</span> (<span class="font-bold">Siapa</span>): <span class="italic">Siapa yang terlibat?</span></li>
                <li><span class="font-bold italic">Where</span> (<span class="font-bold">Di mana</span>): <span class="italic">Di mana kejadian itu terjadi?</span></li>
                <li><span class="font-bold italic">When</span> (<span class="font-bold">Kapan</span>): <span class="italic">Kapan itu terjadi?</span></li>
                <li><span class="font-bold italic">Why</span> (<span class="font-bold">Mengapa</span>): <span class="italic">Mengapa itu terjadi?</span></li>
                <li><span class="font-bold italic">How</span> (<span class="font-bold">Bagaimana</span>): <span class="italic">Bagaimana kejadiannya?</span></li>
              </ol>

              <div class="bg-Primary-50 rounded-xl p-6 border-l-4 border-Primary-500 mb-8 border border-Primary-200">
                <p class="text-body-l text-Grayscale-900 m-0">
                  <span class="font-bold">Memahami konsep 5W+1H dalam Literasi Bahasa Indonesia</span> sangatlah <span class="font-bold">penting karena membantu</span> peserta ujian dalam <span class="font-bold">menganalisis, memahami</span>, dan <span class="font-bold">menjawab soal-soal terkait pemahaman teks</span>. 5W+1H membantu menemukan informasi-informasi dalam teks seperti siapa yang terlibat, apa yang terjadi, di mana, kapan, mengapa, dan bagaimana peristiwa dalam teks tersebut bisa terjadi. <span class="font-bold">Dengan menguasai 5W+1H, peserta UTBK memiliki kemampuan lebih baik dalam memahami teks dan menjawab soal dengan efisien dan tepat.</span>
                </p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>What
              </h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  Unsur <span class="font-bold italic">what</span> (<span class="font-bold">apa</span>) menanyakan seputar <span class="text-red-500 font-bold">apa yang terjadi</span> atau <span class="text-red-500 font-bold">apa yang menjadi pembahasan</span> dari suatu peristiwa.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800 bg-Grayscale-50 p-4 rounded-lg">
                  <li>Fokus pada <span class="font-bold">inti</span> atau <span class="font-bold">peristiwa utama</span>.</li>
                  <li>Contoh: <span class="italic">Apa yang terjadi? Apakah ada kejadian penting?</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>Who
              </h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  Unsur <span class="font-bold italic">who</span> (<span class="font-bold">siapa</span>) menanyakan <span class="text-red-500 font-bold">subjek</span> atau <span class="text-red-500 font-bold">siapa saja yang terlibat</span> dalam suatu peristiwa.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800 bg-Grayscale-50 p-4 rounded-lg">
                  <li>Bisa berupa <span class="font-bold">individu, kelompok</span>, atau <span class="font-bold">pihak tertentu</span>.</li>
                  <li>Contoh: <span class="italic">Siapa tokoh atau pihak yang terlibat?</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>Where
              </h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  Unsur <span class="font-bold italic">where</span> (<span class="font-bold">di mana</span>) menanyakan seputar <span class="text-red-500 font-bold">tempat</span> atau <span class="text-red-500 font-bold">lokasi</span> terjadinya suatu peristiwa.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800 bg-Grayscale-50 p-4 rounded-lg">
                  <li>Fokus pada <span class="font-bold">lokasi</span> dan <span class="font-bold">tempat kejadian</span>.</li>
                  <li>Contoh: <span class="italic">Di mana peristiwa itu terjadi? Apakah ada tempat tertentu yang disebutkan?</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>When
              </h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  Unsur <span class="font-bold italic">when</span> (<span class="font-bold">kapan</span>) menanyakan seputar <span class="text-red-500 font-bold">waktu</span> terjadinya suatu peristiwa.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800 bg-Grayscale-50 p-4 rounded-lg">
                  <li>Fokus pada <span class="font-bold">kapan hal itu terjadi</span>, misalnya <span class="font-bold">tanggal, jam</span>, atau <span class="font-bold">momen tertentu</span>.</li>
                  <li>Contoh: <span class="italic">Kapan kejadian itu berlangsung?</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>Why
              </h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  Unsur <span class="font-bold italic">why</span> (<span class="font-bold">mengapa</span>) menanyakan <span class="text-red-500 font-bold">alasan</span>, <span class="text-red-500 font-bold">penyebab</span>, atau <span class="text-red-500 font-bold">latar belakang</span> dari suatu peristiwa.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800 bg-Grayscale-50 p-4 rounded-lg">
                  <li>Fokus pada <span class="font-bold">sebab</span> dan <span class="font-bold">alasan</span> terjadinya peristiwa.</li>
                  <li>Contoh: <span class="italic">Mengapa hal ini terjadi? Apa yang menjadi penyebabnya?</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1 flex items-center gap-3">
                <span class="bg-Primary-100 text-Primary-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>How
              </h3>
              <div class="bg-white rounded-lg p-6 shadow-sm border border-Secondary-200">
                <p class="text-body-l text-Grayscale-900 mb-4">
                  Unsur <span class="font-bold italic">how</span> (<span class="font-bold">bagaimana</span>) menanyakan <span class="text-red-500 font-bold">penjelasan</span>, <span class="text-red-500 font-bold">proses</span> dan <span class="text-red-500 font-bold">deskripsi</span> dari suatu peristiwa.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-body-l text-Grayscale-800 bg-Grayscale-50 p-4 rounded-lg">
                  <li>Fokus pada <span class="font-bold">cara</span> dan <span class="font-bold">proses</span> terjadinya peristiwa.</li>
                  <li>Contoh: <span class="italic">Bagaimana peristiwa itu bisa terjadi? Apa urutan kejadiannya?</span></li>
                </ul>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Memahami Teks dengan 5W+1H",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/i1eSDWgE04c",
        description:
          "Video penjelasan konseptual mengenai ADiKSiMBa (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana) dalam menganalisis informasi.",
      },
      {
        title: "Video: Praktik Soal Literasi 5W+1H",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Nf60rb1VD6I",
        description:
          "Video yang mencontohkan bedah soal pemahaman bacaan menggunakan kerangka 5W+1H untuk menjaring inti teks secara cepat.",
      },
      {
        title: "Kuis 5W+1H",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Badai Salju dan Angin Kencang Ancam 75 Juta Warga Amerika\nBadai salju dan angin kencang dari timur-laut berpotensi mengganggu 75 juta warga Amerika Serikat, tepatnya berpotensi memutus suplai listrik berbagai wilayah, menimbulkan banjir wilayah pesisir dan merusak perjalanan.\nBadai yang terbentuk di lepas pantai Carolina, AS Jumat malam ini kemungkinan akan menguat dengan cepat saat mulai naik ke Pantai Timur semalam hingga Sabtu.",
            question:
              "Siapa yang terancam oleh badai salju dan angin kencang yang diperkirakan melanda wilayah timur-laut AS?",
            options: [
              { id: "A", text: "10 juta orang di negara bagian New England" },
              { id: "B", text: "75 juta warga Amerika Serikat" },
              { id: "C", text: "50 juta warga di Pantai Barat" },
              { id: "D", text: "20 juta warga di wilayah pesisir Texas" },
            ],
            correctAnswer: "B",
            explanation:
              "Teks pada paragraf pertama mencantumkan dengan jelas bahwa 'Badai salju dan angin kencang dari timur-laut berpotensi mengganggu 75 juta warga Amerika Serikat', yang merupakan jawaban dari unsur WHO.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Kemenangan Perdana Quartararo di MotoGP 2022\n\nMotoGP Portugal di Sirkuit Algarve Portimao baru saja berakhir dan dimenangkan Fabio Quartararo dari Monster Energy Yamaha MotoGP, Minggu (24/4/2022).\n\nPosisi kedua diisi oleh Johann Zarco dari Pramac Racing Ducati dan di belakangnya ada Aleix Espargaro dari Aprilia Racing.\n\nQuartararo menjadi pembalap keempat yang memenangkan seri MotoGP, setelah Enea Bastianini, Miguel Oliveira, dan Aleix Espargaro. Selain itu, kemenangan di MotoGP Portugal 2022 menjadi kemenangan perdana Quartararo di MotoGP 2022.",
            question: "Dimana MotoGP Portugal 2022 dilaksanakan?",
            options: [
              { id: "A", text: "Sirkuit Sepang" },
              { id: "B", text: "Sirkuit Silverstone" },
              { id: "C", text: "Sirkuit Algarve Portimao" },
              { id: "D", text: "Sirkuit Mugello" },
            ],
            correctAnswer: "C",
            explanation:
              "Pada baris pertama berita tersebut, dinyatakan langsung lokasi ('WHERE') balapan tersebut secara eksplisit: 'MotoGP Portugal di Sirkuit Algarve Portimao baru saja berakhir...'.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Induk Google Disebut akan PHK 10.000 Karyawan Tahun Depan\n\nKOMPAS.com – Industri teknologi masih mengalami turbulensi. Badai PHK konon masih berlanjut hingga 2023 nanti.Kali ini giliran perusahaan induk Google, Alphabet, yang disebut-sebut akan melakukan pemutusan hubungan kerja (PHK) besar-besaran secara global tahun depan.Menurut laporan outlet media Financial Express, Alphabet konon bakal mem-PHK sekitar 10.000 karyawannya.\n\nSaat ini, kabarnya, manajer tim sudah diminta untuk mengevaluasi performa bawahannya. Anggota tim yang dianggap menunjukkan performa di bawah rata-rata kemungkinan akan di-PHK tahun depan.Induk Google ini tidak memberikan komentar apapun soal isu PHK massal ini. Pun, belum jelas apakah PHK akan dilakukan di seluruh divisi perusahaan atau di vertikal tertentu saja.",
            question:
              "Kapan induk Google dikabarkan akan melakukan PHK terhadap 10.000 karyawannya?",
            options: [
              { id: "A", text: "Tahun 2023" },
              { id: "B", text: "Awal tahun 2022" },
              { id: "C", text: "Awal tahun 2024" },
              { id: "D", text: "Tidak disebutkan secara spesifik" },
            ],
            correctAnswer: "A",
            explanation:
              "Teks di awal mengatakan 'Badai PHK konon masih berlanjut hingga 2023 nanti', diikuti kalimat yang menyebutkan mereka mem-PHK 'tahun depan' (merujuk pada tahun 2023). Ini menjelaskan unsur 'WHEN'.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "WHO: Omicron Lebih Cepat Menular daripada Delta, Lemahkan Vaksin\n\nJakarta, CNN Indonesia — Penelitian data awal oleh Organisasi Kesehatan Dunia (WHO) menunjukkan Covid-19 varian Omicron lebih cepat menular ketimbang Delta dan dapat melemahkan vaksin yang ada saat ini.\n\n“Berdasarkan data yang ada saat ini, Omicron kemungkinan bakal mengalahkan varian Delta di tempat di mana terjadi penularan antar-masyarakat,” demikian pernyataan WHO yang dikutip AFP, Minggu (12/12).",
            question:
              "Apa yang menjadi temuan awal WHO terkait varian Omicron berdasarkan penelitian data awal?",
            options: [
              { id: "A", text: "Omicron tidak menular secepat varian Delta." },
              {
                id: "B",
                text: "Omicron hanya menyebar di Afrika Selatan dan Inggris.",
              },
              {
                id: "C",
                text: "Omicron tidak memengaruhi efikasi vaksin yang ada.",
              },
              {
                id: "D",
                text: "Omicron lebih cepat menular daripada Delta dan dapat melemahkan vaksin.",
              },
            ],
            correctAnswer: "D",
            explanation:
              "Inti pernyataan pada paragraf pertama ('WHAT') secara gamblang menyoroti temuan bahwa 'Covid-19 varian Omicron lebih cepat menular ketimbang Delta dan dapat melemahkan vaksin yang ada saat ini'.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Andi pergi berlibur ke Yogyakarta bersama keluarganya. Selama tiga hari, Andi dan keluarganya akan menjelajahi tempat-tempat wisata yang ada di Yogyakarta. Pada hari pertama, Andi dan keluarganya pergi ke Malioboro. Di Malioboro, Andi menemukan kendaraan berbentuk kereta dengan dua roda yang ditarik oleh kuda. Saat Andi bertanya pada Ayah nama kendaraan itu, nama kendaraan itu adalah delman.\n\nKarena penasaran, Andi pun mengajak keluarganya naik delman dan ajakannya disetujui. Andi sangat senang karena bisa naik delman dan bisa melihat kuda dari dekat. Andi baru tahu tentang kendaraan delman ini.",
            question: "Mengapa Andi merasa penasaran dengan kendaraan delman?",
            options: [
              {
                id: "A",
                text: "Karena ia belum pernah melihat delman sebelumnya.",
              },
              {
                id: "B",
                text: "Karena delman memiliki bentuk yang unik dan menarik.",
              },
              {
                id: "C",
                text: "Karena ia ingin mencoba menaiki kendaraan yang berbeda.",
              },
              {
                id: "D",
                text: "Karena delman ditarik oleh lebih dari satu kuda.",
              },
            ],
            correctAnswer: "A",
            explanation:
              "Di penghujung paragraf kedua tertulis 'Andi baru tahu tentang kendaraan delman ini'. Itulah latar belakang/alasan ('WHY') Andi merasa penasaran terhadap delman yang dijumpainya di Malioboro.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Sebanyak 16 Unit Damkar Padamkan Api yang Membakar Dua Rumah di Cipete Utara\n\nDua rumah di Cipete Utara, Jakarta Selatan, terbakar pada Rabu. Kebakaran ini sempat membuat lalu lintas di sekitar lokasi menjadi macet. Dua rumah yang terbakar sekitar pukul 17.35 WIB tersebut berlokasi di kawasan perkampungan Jalan Haji Jian, Cilandak Utara, Jakarta Selatan, Sabtu (15/3/2014). “Itu lokasinya masuk perkampungan. Jadi, masuk Jalan Fatmawati Raya, kemudian masuk Jalan Cipete, dan masuk Jalan Haji Jian. Berdasarkan laporan, kebakaran berawal dari rumah di Jalan Haji Jian nomor 2B,” kata petugas Pemadam Kebakaran Sudin Jakarta Selatan, Dendi.",
            question: "Kapan kebakaran dua rumah di Cipete Utara terjadi?",
            options: [
              { id: "A", text: "Pada Sabtu pagi, pukul 10.00 WIB" },
              { id: "B", text: "Pada Rabu sore, pukul 17.35 WIB." },
              { id: "C", text: "Pada Sabtu sore, pukul 17.35 WIB" },
              { id: "D", text: "Pada Jumat malam, pukul 20.00 WIB" },
            ],
            correctAnswer: "C",
            explanation:
              "Dalam paragraf pertama dicantumkan rincian waktu secara spesifik, yakni 'sekitar pukul 17.35 WIB' dan 'Sabtu (15/3/2014)'. Ini menjawab unsur 'WHEN' pada kejadian tersebut.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "BREAKING NEWS – Legenda Tenis Roger Federer Umumkan Pensiun\n\nRoger Federer akan menyudahi karier panjangnya di dunia tenis. Laver Cup 2022 yang akan berlangsung pada pekan depan, 23-25 September, akan menjadi turnamen terakhir Roger Federer. Cedera menjadi alasan Federer menyudahi kiprahnya sebagai petenis profesional.Federer menghadapi sejumlah masalah fisik dalam beberapa tahun terakhir. Sejumlah operasi pada lutut juga menghalanginya untuk tetap aktif bertanding.",
            question:
              "Mengapa Roger Federer memutuskan untuk pensiun dari dunia tenis profesional?",
            options: [
              {
                id: "A",
                text: "Karena sudah tidak berminat bermain tenis lagi.",
              },
              {
                id: "B",
                text: "Karena mengalami masalah fisik dan cedera berkepanjangan",
              },
              {
                id: "C",
                text: "Karena ingin fokus pada kehidupan keluarga dan bisnis.",
              },
              {
                id: "D",
                text: "Karena merasa sudah cukup dengan prestasi yang diraih",
              },
            ],
            correctAnswer: "B",
            explanation:
              "Untuk menjawab pertanyaan 'Mengapa' (WHY/alasan), paragraf pertama memberikan simpulan gamblang: 'Cedera menjadi alasan Federer menyudahi kiprahnya sebagai petenis profesional. Federer menghadapi sejumlah masalah fisik...'.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Menkes: 75 Persen Pasien Covid Gejala Sedang-Berat Belum Booster\n\nJakarta, CNN Indonesia — Menteri Kesehatan (Menkes) Budi Gunadi Sadikin menyebut pasien Covid-19 yang dirawat di rumah sakit (RS) mengalami kenaikan. Sebanyak 75 persen di antaranya belum mendapat suntikan vaksin ketiga alias booster. Budi mengatakan pasien yang belum booster tersebut rata-rata mendapat gejala sedang sampai berat.\nSelain itu, Budi juga mengungkapkan bawah 84 persen dari pasien Covid-19 yang meninggal dunia juga belum menerima suntikan booster. Oleh sebab itu, dia mewanti-wanti agar seluruh masyarakat segera melakukan suntik booster.",
            question:
              "Bagaimana pemerintah mengajak masyarakat untuk mengurangi risiko terkena gejala Covid-19 yang sedang hingga berat?",
            options: [
              {
                id: "A",
                text: "Dengan mengingatkan masyarakat untuk segera mendapatkan vaksinasi booster.",
              },
              {
                id: "B",
                text: "Dengan melarang masyarakat bepergian ke luar rumah",
              },
              {
                id: "C",
                text: "Dengan mewajibkan karantina mandiri bagi seluruh masyarakat.",
              },
              {
                id: "D",
                text: "Dengan menutup akses ke fasilitas kesehatan tertentu.",
              },
            ],
            correctAnswer: "A",
            explanation:
              "Cara ('HOW') pemerintah dalam menangani kondisi ini dinyatakan pada akhir paragraf kedua, yakni Menkes mengimbau keras (mewanti-wanti) agar masyarakat segera disuntik vaksin booster.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Kerusakan Situs Gunung Padang Akibat Gempa Cianjur\n\nJakarta – Gunung Padang yang berlokasi di Cianjur, Jawa Barat, mengalami kerusakan. Gunung Padang turut terdampak gempa bumi. Dilansir detikJabar, Sabtu (26/11/2022), Koordinator Juru Pelihara Situs Gunung Padang, Nanang Sukmana, menjelaskan kerusakan Gunung Padang di bagian tourist information center (TIC), plafon TIC roboh akibat gempa.\n\n“Jadi yang rusak kantor TIC, itu pun hanya plafonnya yang jatuh. Kalau situs utamanya aman, tidak ada kerusakan apa pun,” ucap Nanang, Sabtu (26/11/2022).",
            question:
              "Kapan kerusakan Situs Gunung Padang akibat gempa Cianjur terjadi?",
            options: [
              { id: "A", text: "Sabtu, 26 November 2022" },
              { id: "B", text: "Jumat, 25 November 2022" },
              { id: "C", text: "Minggu, 27 November 2022" },
              { id: "D", text: "Kamis, 24 November 2022" },
            ],
            correctAnswer: "A",
            explanation:
              "Dalam kutipan berita, unsur waktu ('WHEN') tertulis secara berulang dari sumber detikJabar dan konfirmasi narasumber (Nanang) yaitu 'Sabtu (26/11/2022)'.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Kelinci Baru Ara\n\nAra sangat suka memelihara hewan. Ara sudah pernah memelihara kucing, namun dalam waktu tiga bulan kucingnya itu mati karena sakit. Semenjak saat itu, Ara tidak mau lagi memelihara kucing. Ara kemudian meminta kepada ibunya untuk dibelikan kelinci. Ibu pun menyetujui permintaan Ara, dengan syarat Ara harus menjaga dan merawat kelincinya dengan baik. Ibu tidak ingin kejadian yang lalu terulang lagi.",
            question: "Mengapa Ara meminta ibunya untuk membelikan kelinci?",
            options: [
              {
                id: "A",
                text: "Karena Ara merasa kelinci lebih mudah dirawat dibanding kucing",
              },
              {
                id: "B",
                text: "Karena Ara ingin mencoba memelihara hewan baru",
              },
              {
                id: "C",
                text: "Karena Ara tidak mau lagi memelihara kucing setelah kucingnya mati.",
              },
              {
                id: "D",
                text: "Karena Ara merasa kelinci adalah hewan yang lucu dan menarik.",
              },
            ],
            correctAnswer: "C",
            explanation:
              "Dalam paragraf pertama menceritakan rentetan peristiwa, alasan Ara meminta/memelihara kelinci ('WHY') adalah dikarenakan ia trauma dan tidak mau memelihara kucing lagi semenjak kucingnya mati.",
            points: 6,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Kerusakan Situs Gunung Padang Akibat Gempa Cianjur\n\nJakarta – Gunung Padang yang berlokasi di Cianjur, Jawa Barat, mengalami kerusakan. Gunung Padang turut terdampak gempa bumi. Dilansir detikJabar, Sabtu (26/11/2022), Koordinator Juru Pelihara Situs Gunung Padang, Nanang Sukmana, menjelaskan kerusakan Gunung Padang di bagian tourist information center (TIC), plafon TIC roboh akibat gempa.",
            question:
              "Apa yang rusak di Situs Gunung Padang akibat gempa Cianjur?",
            options: [
              {
                id: "A",
                text: "Struktur utama situs megalitikum Gunung Padang",
              },
              { id: "B", text: "Bebatuan kekar kolom di Gunung Padang" },
              { id: "C", text: "Seluruh kawasan Situs Gunung Padang" },
              { id: "D", text: "Plafon Tourist Information Center (TIC)" },
            ],
            correctAnswer: "D",
            explanation:
              "Pertanyaan ini mencari informasi utama perihal objek kejadian (WHAT). Teks memaparkan bahwa kerusakan Gunung Padang spesifik pada 'bagian tourist information center (TIC), plafon TIC roboh akibat gempa.'",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Insiden Truk Terbakar di Lumajang yang Ditinggal Kabur Sopirnya\n\nTerjadi sebuah insiden yang cukup mengaketgan, yaitu terbakarnya sebuah truk di Jalan Raya Desa Wonorejo, Kecamatan Kedungjajang, Kabupaten Lumajang, Jawa Timur, tepatnya pada hari Jumat (9/8/2024) pukul 04.00 WIB. Dugaan awal dari penyebab kebakaran tersebut adalah adanya cairan yang mudah terbakar dalam truk.",
            question: "Di mana lokasi insiden terbakarnya truk di Lumajang?",
            options: [
              {
                id: "A",
                text: "Jalan Raya Desa Wonorejo, Kecamatan Kedungjajang, Kabupaten Lumajang",
              },
              {
                id: "B",
                text: "Jalan Raya Desa Sumberwuluh, Kecamatan Candipuro, Kabupaten Lumajang",
              },
              {
                id: "C",
                text: "Jalan Raya Desa Klakah, Kecamatan Klakah, Kabupaten Lumajang.",
              },
              {
                id: "D",
                text: "Jalan Raya Desa Yosowilangun, Kecamatan Yosowilangun, Kabupaten Lumajang",
              },
            ],
            correctAnswer: "A",
            explanation:
              "Dalam kalimat pembuka berita langsung diungkapkan posisi atau lokasi insiden (WHERE) secara lengkap yaitu di 'Jalan Raya Desa Wonorejo, Kecamatan Kedungjajang, Kabupaten Lumajang, Jawa Timur'.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Keracunan Ketan di Lumajang Sebabkan 18 Orang Dirawat\n\nBaru-baru ini pada Rabu (7/8/2024) malam setidaknya ada 18 orang dirawat akibat keracunan ketan koro. Kejadian ini terjadi di Lumajang, Jawa Timur.\n\nSyamsul sebagai camat Kedungjajang menjelaskan jika warga datang ke Puskesmas Kedungjajang dengan keluhan mual dan pusing. Hal ini dialami setelah memakan ketan koro saat pengajian di rumah Ahsani, Selasa (6/8/2024) malam.",
            question:
              "Siapa yang menjelaskan kronologi keracunan ketan koro di Lumajang?",
            options: [
              { id: "A", text: "Ahsani" },
              { id: "B", text: "Camat Kedungjajang, Syamsul" },
              { id: "C", text: "Kepala Puskesmas Kedungjajang" },
              { id: "D", text: "Salah satu warga yang keracunan" },
            ],
            correctAnswer: "B",
            explanation:
              "Bagian awal paragraf kedua mengindikasikan unsur penutur utama/subjek informasi (WHO) dengan penyebutan 'Syamsul sebagai camat Kedungjajang menjelaskan jika warga datang ke Puskesmas...'.",
            points: 6,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Detik-detik Kecelakaan Beruntun di Jalan Alternatif Cibubur\n\nKecelakaan beruntun terjadi di Jalan Raya Transyogi, Desa Nabrak, Kecamatan Gunung Putri, Kabupaten Bogor. Kecelakaan melibatkan satu truk dan dua mobil.\n\nDiketahui, kecelakaan beruntun terjadi di Jalan Alternatif Cibubur, Cileungsi, Bogor. Kecelakaan menimbulkan kemacetan parah di lokasi kejadian.\n\n“Informasinya ada kecelakaan, saya sudah tiga jam lebih di Jalan Alternatif Cibubur, macet,” ujar pengendara mobil, Nanda, saat dihubungi detikcom.",
            question:
              "Bagaimana dampak dari kecelakaan tersebut terhadap arus lalu lintas?",
            options: [
              { id: "A", text: "Tidak ada dampak pada lalu lintas" },
              { id: "B", text: "Lalu lintas di sekitar lokasi lancar" },
              { id: "C", text: "Terjadi kemacetan parah di lokasi kejadian" },
              { id: "D", text: "Lalu lintas hanya terganggu sebentar" },
            ],
            correctAnswer: "C",
            explanation:
              "Dampak atau penjelasan mengenai keadaan pascalaka ('HOW') dibeberkan pada teks yang tertulis, '...Kecelakaan menimbulkan kemacetan parah di lokasi kejadian.'. Diperkuat oleh kutipan langsung saksi.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Negeri 5 Menara\n\nAlif lahir di pinggir Danau Maninjau dan tidak pernah menginjak tanah di luar ranah Minangkabau. Masa kecilnya adalah berburu durian runtuh di rimba Bukit Barisan, bermain bola di sawah berlumpur, dan tentu mandi berkecipak di air biru Danau Maninjau.\n\nDipersatukan oleh hukuman jewer berantai, Alif berteman dekat dengan Raja dari Medan, Said dari Surabaya, Dulmajid dari Sumenep, Atang dari Bandung dan Baso dari Gowa. Di bawah menara masjid yang menjulang, mereka berenam kerap menunggu maghrib sambil menatap awan lembayung yang berarak pulang ke ufuk.",
            question:
              "Bagaimana Alif berteman dengan teman-temannya di Pondok Madani?",
            options: [
              { id: "A", text: "Melalui kegiatan di kelas" },
              { id: "B", text: "Melalui hukuman jewer berantai" },
              { id: "C", text: "Karena mereka satu desa" },
              { id: "D", text: "Karena sering berkelahi" },
            ],
            correctAnswer: "B",
            explanation:
              "Pada paragraf akhir (kedua dalam kutipan teks utuh), tertulis jelas gambaran cara dan awal pertemanan ('HOW') di Pondok Madani: 'Dipersatukan oleh hukuman jewer berantai, Alif berteman dekat dengan...'.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "5W+1H";
      moduleDoc.description =
        "Pelajari elemen 5W+1H (What, Who, Where, When, Why, How) untuk mengidentifikasi informasi kunci pada Pemahaman Teks.";
      moduleDoc.subcategory = "Teknik Membaca";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "5W+1H",
        description:
          "Pelajari elemen 5W+1H (What, Who, Where, When, Why, How) untuk mengidentifikasi informasi kunci pada Pemahaman Teks.",
        subcategory: "Teknik Membaca",
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

seed5W1H();
