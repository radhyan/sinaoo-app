const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPrediksiData = async () => {
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
    const targetId = "prediksi-data";

    const stepsData = [
      {
        title: "Penalaran Induktif (Prediksi Data/Simpulan)",
        type: "reading",
        status: "active",
        description: "Materi Bacaan",
        content: `
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Penalaran Induktif (Prediksi Data/Simpulan)</h3>
      <p class="mb-6 text-body-l text-Grayscale-900">
        Prediksi data adalah kemampuan kita untuk <strong>memperkirakan atau menebak suatu kejadian di masa depan berdasarkan data yang telah ada</strong>. Artinya <em>studymates</em> perlu mencoba melihat ke depan dengan menggunakan informasi dari masa lalu.
      </p>

      <p class="mb-6 text-body-l text-Grayscale-900">
        Umumnya, kita hanya perlu mengamati pola kecenderungan data yang cenderung <span class="text-Primary-600 font-medium">meningkat</span>, <span class="text-Secondary-600 font-medium">menurun</span>, atau tetap <span class="text-Grayscale-600 font-medium">konstan</span>.
      </p>

      <div class="overflow-hidden mb-6 rounded-md">
        <table class="w-full text-left border-collapse rounded-md">
           <thead>
            <tr>
              <th class="text-h5 p-4 text-center text-Primary-600 font-bold border border-Primary-400" colspan="2" style="border-color: #3a74ea; background-color: #f0f7ff;">
                Jenis Tren Data
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Tren Naik -->
            <tr>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea; width: 50%;">
                <div class="font-bold text-Primary-900 mb-2 text-h5">Tren Naik</div>
                <p>Data secara umum cenderung <strong>meningkat</strong> dari waktu ke waktu.</p>
                <p class="text-Grayscale-600 italic mt-2">Jika data tren nya naik maka kita bisa memprediksi data statistik berikutnya akan naik.</p>
              </td>
              <td class="p-4 border border-Primary-400 text-center bg-white" style="border-color: #3a74ea;">
                <img src="/images/modules/prediksi-data/Naik.png" alt="Tren Naik" class="mx-auto size-1/2 object-contain" />
              </td>
            </tr>
            <!-- Tren Turun -->
            <tr>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea;">
                 <div class="font-bold text-Secondary-600 mb-2 text-h5">Tren Turun</div>
                <p>Data secara umum cenderung <strong>menurun</strong> dari waktu ke waktu.</p>
                <p class="text-Grayscale-600 italic mt-2">Jika data tren nya turun maka kita bisa memprediksi data statistik berikutnya akan turun.</p>
              </td>
              <td class="p-4 border border-Primary-400 text-center bg-white" style="border-color: #3a74ea;">
                <img src="/images/modules/prediksi-data/Turun.png" alt="Tren Turun" class="mx-auto size-1/2 object-contain" />
              </td>
            </tr>
            <!-- Tren Konstan -->
            <tr>
              <td class="text-body-md p-4 align-top text-Grayscale-900 border border-Primary-400" style="border-color: #3a74ea;">
                 <div class="font-bold text-Grayscale-600 mb-2 text-h5">Tren Konstan</div>
                <p>Data <strong>tidak menunjukkan perubahan</strong> yang signifikan dari waktu ke waktu.</p>
                <p class="text-Grayscale-600 italic mt-2">Jika data tren nya konstan atau tetap maka kita bisa memprediksi data statistik berikutnya akan konstan atau tetap.</p>
              </td>
              <td class="p-4 border border-Primary-400 text-center bg-white" style="border-color: #3a74ea;">
                <img src="/images/modules/prediksi-data/Konstan.png" alt="Tren Konstan" class="mx-auto size-1/2 object-contain" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      `,
      },
      {
        title: "Video Pembelajaran: Prediksi Data",
        type: "video",
        status: "active",
        videoUrl: "https://www.youtube.com/embed/kNu-neqzjV4",
        description:
          "Simak video penjelasan mengenai strategi memprediksi data berdasarkan tren yang ada.",
      },
      {
        title: "Kuis Prediksi Data",
        type: "quiz",
        status: "active",
        questions: [
          {
            id: "q1",
            type: "multiple-choice",
            context:
              "Sebuah perusahaan mencatat jumlah pelanggan mereka dalam lima bulan terakhir sebagai berikut:\nJanuari: 5.000 pelanggan\nFebruari: 5.500 pelanggan\nMaret: 6.000 pelanggan\nApril: 6.500 pelanggan\nMei: 7.000 pelanggan",
            question:
              "Jika tren ini berlanjut, berapa perkiraan jumlah pelanggan pada bulan Juni?",
            options: [
              { id: "a", text: "7.200" },
              { id: "b", text: "7.500" },
              { id: "c", text: "8.000" },
              { id: "d", text: "8.200" },
              { id: "e", text: "8.500" },
            ],
            correctAnswer: "b",
            explanation:
              "Pola penambahan jumlah pelanggan setiap bulan adalah konstan sebesar 500 pelanggan (5.500 - 5.000 = 500, dst). Maka, perkiraan untuk bulan Juni adalah 7.000 (Mei) + 500 = 7.500.",
            points: 7,
          },
          {
            id: "q2",
            type: "multiple-choice",
            context:
              "Berdasarkan data dalam grafik tersebut (Grafik Harga Buah per Bulan).",
            imageUrl: "/images/modules/prediksi-data/harga-buah.png",
            question:
              "Manakah pernyataan berikut yang PALING TEPAT untuk memperkirakan harga tiga jenis buah pada bulan Juni?",
            options: [
              {
                id: "a",
                text: "Harga buah apel lebih mahal daripada bulan sebelumnya",
              },
              {
                id: "b",
                text: "Harga buah mangga lebih murah daripada buah jeruk",
              },
              {
                id: "c",
                text: "Harga buah jeruk lebih murah daripada buah apel",
              },
              {
                id: "d",
                text: "Harga buah jeruk lebih murah daripada bulan sebelumnya",
              },
              {
                id: "e",
                text: "Harga buah mangga sama dengan bulan sebelumnya",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Berdasarkan tren fluktuasi harga pada grafik (diasumsikan), harga jeruk menunjukkan tren penurunan menuju bulan Juni.",
            points: 7,
          },
          {
            id: "q3",
            type: "multiple-choice",
            context:
              "Berikut adalah statistik data penetrasi pengguna smarthphone di Indonesia pada tahun 2014-2019.",
            imageUrl: "/images/modules/prediksi-data/penetrasi-smartphone.png",
            question: "Tren data di atas merupakan jenis...",
            options: [
              { id: "a", text: "Tren turun" },
              { id: "b", text: "Tren konstan" },
              { id: "c", text: "Tren naik" },
              { id: "d", text: "Tren maju" },
              { id: "e", text: "Tren naik turun" },
            ],
            correctAnswer: "c",
            explanation:
              "Data penetrasi teknologi (smartphone) di Indonesia pada periode 2014-2019 secara historis selalu menunjukkan peningkatan setiap tahunnya, sehingga disebut tren naik.",
            points: 7,
          },
          {
            id: "q4",
            type: "multiple-choice", // Changed to match schema and consistency
            context:
              "Perhatikan grafik indeks gini, inflasi dan kemiskinan Indonesia tahun 2014-2018.",
            imageUrl:
              "/images/modules/prediksi-data/gini-inflasi-kemiskinan.png",
            question:
              "Manakah pernyataan yang PALING TEPAT mengenai data tersebut?",
            options: [
              {
                id: "a",
                text: "Indeks rasio gini pada tahun 2019 mengalami kenaikan",
              },
              { id: "b", text: "Tren data indeks inflasi merupakan tren naik" },
              {
                id: "c",
                text: "Indeks rasio gini pada tahun 2019 akan menurun",
              },
              { id: "d", text: "Tren kemiskinan di Indonesia terus meningkat" },
              {
                id: "e",
                text: "Inflasi selalu berbanding lurus dengan kemiskinan",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Berdasarkan analisis grafik, rasio gini menunjukkan kecenderungan untuk meningkat menuju 2019.",
            points: 7,
          },
          {
            id: "q5",
            type: "multiple-choice",
            context:
              "Baru-baru ini, kebijakan impor pemerintah kembali disorot masyarakat... (teks dipersingkat)",
            imageUrl: "/images/modules/prediksi-data/impor-daging.png",
            question:
              "Berdasarkan paragraf 4, manakah pernyataan di bawah ini yang PALING MUNGKIN benar mengenai Indonesia yang mengimpor daging ayam dari Brasil?",
            options: [
              {
                id: "a",
                text: "Industri nasional terkena dampak dari pelonggaran impor daging ayam yang dilakukan oleh Indonesia.",
              },
              {
                id: "b",
                text: "Pada 2015, permintaan volume daging di Indonesia tumbuh signifikan.",
              },
              {
                id: "c",
                text: "Dari tahun 2015 sampai tahun 2018, volume impor daging ayam menembus 76,4 ton.",
              },
              {
                id: "d",
                text: "Volume impor daging ayam di Indonesia cukup besar dan tumbuh signifikan.",
              },
              {
                id: "e",
                text: "Permintaan volume impor daging ayam di Indonesia mencapai 236 persen per tahun.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Pernyataan ini dikutip secara eksplisit dari teks paragraf 4 yang menyebutkan 'Rata-rata pertumbuhan volume impor daging ayam mencapai 236 persen per tahun'.",
            points: 7,
          },
          {
            id: "q6",
            type: "multiple-choice",
            context:
              "Baru-baru ini, kebijakan impor pemerintah kembali disorot masyarakat... (teks dipersingkat)",
            imageUrl: "/images/modules/prediksi-data/impor-daging.png",
            question:
              "Pada tahun berapakah kenaikan nilai yang signifikan terjadi?",
            options: [
              { id: "a", text: "2014" },
              { id: "b", text: "2015" },
              { id: "c", text: "2016" },
              { id: "d", text: "2017" },
              { id: "e", text: "2018" },
            ],
            correctAnswer: "d",
            explanation:
              "Sesuai kunci jawaban, lonjakan signifikan pada data tabel terjadi pada tahun 2017.",
            points: 7,
          },
          {
            id: "q7",
            type: "multiple-choice", // Changed to multiple-choice for consistency
            context:
              "Perhatikan grafik produksi dan konsumsi barang mewah RI tahun 2017-2021.",
            imageUrl: "/images/modules/prediksi-data/produksi-konsumsi.png",
            question:
              "Manakah pernyataan yang BENAR berdasarkan grafik tersebut?",
            options: [
              {
                id: "a",
                text: "Produksi barang mewah RI pada tahun 2022 akan mengalami peningkatan.",
              },
              {
                id: "b",
                text: "Konsumsi barang mewah RI pada tahun 2022 tidak mengalami kenaikan maupun penurunan.",
              },
              { id: "c", text: "Konsumsi barang mewah RI mengalami tren naik" },
              { id: "d", text: "Produksi barang mewah RI memiliki tren turun" },
              { id: "e", text: "Tidak dapat disimpulkan" },
            ],
            correctAnswer: "a",
            explanation:
              "Produksi barang mewah menunjukkan tren kenaikan yang konsisten sehingga diprediksi akan meningkat pada 2022.",
            points: 7,
          },
          {
            id: "q8",
            type: "multiple-choice",
            context:
              "Grafik menunjukkan data jumlah pasien positif, persentase pasien sembuh, dan pasien dirawat di ICU karena virus X (April-Agustus).",
            imageUrl: "/images/modules/prediksi-data/pasien-virus.png",
            question:
              "Berdasarkan data dalam grafik tersebut, manakah pernyataan PALING TEPAT untuk menggambarkan kondisi pasien Virus X di rumah sakit tersebut pada bulan September?",
            options: [
              {
                id: "a",
                text: "Jumlah pasien Virus X meningkat dibandingkan dengan bulan Agustus.",
              },
              {
                id: "b",
                text: "Jumlah pasien Virus X sembuh lebih besar daripada bulan Aguatus.",
              },
              {
                id: "c",
                text: "Persentase pasien Virus X yang dirawat ICU lebih kecil daripada bulan Agustus.",
              },
              {
                id: "d",
                text: "Jumlah pasien Virus X yang dirawat di ICU lebih besar daripada bulan Agustus",
              },
              {
                id: "e",
                text: "Persentase pasien Virus X sembuh lebih besar daripada bulan Agustus.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Mengikuti tren kenaikan yang terlihat pada bulan-bulan sebelumnya (terutama Agustus), diprediksi jumlah pasien ICU akan terus meningkat pada bulan September.",
            points: 7,
          },
          {
            id: "q9",
            type: "multiple-choice",
            context:
              "Pada tahun 2012, jumlah mobil listrik yang digunakan masyarakat sangat sedikit. Pada tahun 2020, lebih banyak mobil listrik yang ditemukan di jalanan dibandingkan pada tahun 2012.",
            question:
              "Manakah pernyataan berikut yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?",
            options: [
              {
                id: "a",
                text: "Pada tahun 2020 , jumlah penjualan mobil lebih banyak dibandingkan pada tahun 2012",
              },
              {
                id: "b",
                text: "Sejak tahun 2012 , banyak produsen mobil listrik yang memasarkan produknya.",
              },
              {
                id: "c",
                text: "Pada tahun 2020 , pemerintah memberikan insentif pajak pada mobil listrik.",
              },
              {
                id: "d",
                text: "Mobil listrik dianggap sebagai mobil mewah untuk kelompok konsumen tertentu.",
              },
              {
                id: "e",
                text: "Pemasaran mobil listrik pada tahun 2012 lebih sering dilakukan dibandingkan pada tahun 2020 .",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Kebijakan pemerintah berupa insentif pajak adalah faktor pendorong paling logis dan signifikan yang menjelaskan peningkatan adopsi teknologi baru (mobil listrik) secara drastis dalam periode tersebut.",
            points: 7,
          },
          {
            id: "q10",
            type: "multiple-choice",
            context:
              "Berikut adalah data pendapatan aplikasi game seluler global (2017-2021).",
            imageUrl: "/images/modules/prediksi-data/pendapatan-game.png",
            question: "Berdasarkan data di atas menunjukkan tren...",
            options: [
              { id: "a", text: "Tren konstan" },
              { id: "b", text: "Tren turun" },
              { id: "c", text: "Tren naik" },
              { id: "d", text: "Tidak ada tren" },
              { id: "e", text: "Tren naik turun" },
            ],
            correctAnswer: "c",
            explanation:
              "Industri game seluler global secara konsisten menunjukkan pertumbuhan pendapatan dari tahun ke tahun pada periode 2017-2021.",
            points: 7,
          },
          {
            id: "q11",
            type: "multiple-choice",
            context:
              "Berikut adalah data indeks harga rumah 10 tahun terakhir.",
            imageUrl: "/images/modules/prediksi-data/indeks-harga-rumah.png",
            question:
              "Berapakah jumlah pernyataan benar yang sesuai dengan data tersebut?",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "c",
            explanation:
              "Berdasarkan analisis data, terdapat tepat 2 pernyataan yang fakta/benar dari 4 pernyataan yang diberikan.",
            points: 6,
          },
          {
            id: "q12",
            type: "multiple-choice",
            context:
              "Berikut adalah data Produk Domestik Regional Bruto (PDRB) per Kapita Yogyakarta (2013-2020).",
            imageUrl: "/images/modules/prediksi-data/pdrb-yogyakarta.png",
            question: "Melalui data di atas, pernyataan yang benar adalah...",
            options: [
              {
                id: "a",
                text: "Adhb produk domestik regional bruto (PDRB) per Kapita Yogyakarta (2013-2020) menunjukkan tren naik",
              },
              {
                id: "b",
                text: "Adhb dan Adhk sama-sama menunjukkan tren naik.",
              },
              {
                id: "c",
                text: "Adhb pada tahun 2021 akan lebih tinggi daripada tahun sebelumnya.",
              },
              {
                id: "d",
                text: "Adhk pada tahun 2021 akan lebih tinggi daripada Adhb pada tahun 2021",
              },
              {
                id: "e",
                text: "Adhk pada tahun 2021 akan lebih rendah daripada Adhb pada tahun 2021",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Sesuai kunci jawaban: Nilai PDRB Atas Dasar Harga Konstan (ADHK) diprediksi akan lebih rendah dibandingkan Atas Dasar Harga Berlaku (ADHB) pada tahun 2021, yang umum terjadi karena faktor inflasi pada ADHB.",
            points: 6,
          },
          {
            id: "q13",
            type: "multiple-choice",
            context:
              "Sebuah perusahaan teknologi mencatat jumlah pengguna aplikasi mereka selama lima tahun terakhir: 2019 (2,5 juta), 2020 (3,8 juta), 2021 (4,1 juta), 2022 (5,4 juta), 2023 (6,7 juta).",
            question:
              "Jika tren pertumbuhan pengguna ini terus berlanjut dengan pola yang sama, berapakah perkiraan jumlah pengguna pada tahun 2025?",
            options: [
              { id: "a", text: "11,8 juta" },
              { id: "b", text: "12,4 juta" },
              { id: "c", text: "9,3 juta" },
              { id: "d", text: "14,2 juta" },
              { id: "e", text: "17,3 juta" },
            ],
            correctAnswer: "c",
            explanation:
              "Pola pertambahan pengguna adalah +1,3 juta per tahun (contoh: 5,4 ke 6,7). Maka: 2024 = 6,7 + 1,3 = 8,0 juta. 2025 = 8,0 + 1,3 = 9,3 juta.",
            points: 6,
          },
          {
            id: "q14",
            type: "multiple-choice",
            context: "Sejak 1985 hingga 2022, tarif PPN sebesar 10%",
            question:
              "Berdasarkan informasi di atas, maka tarif PPN mengalami tren...",
            options: [
              { id: "a", text: "Tren naik" },
              { id: "b", text: "Tren konstan" },
              { id: "c", text: "Tren turun" },
              { id: "d", text: "Tidak ada tren" },
              { id: "e", text: "Trem tidak stabil" },
            ],
            correctAnswer: "b",
            explanation:
              "Karena nilai tarif tetap sama (10%) selama periode waktu yang panjang (1985-2022) tanpa perubahan, maka datanya disebut tren konstan.",
            points: 6,
          },
          {
            id: "q15",
            type: "multiple-choice",
            context:
              "Berikut adalah data jumlah penduduk Indonesia (2014-2023).",
            imageUrl: "/images/modules/prediksi-data/jumlah-penduduk.png",
            question:
              "Berdasarkan grafik di atas, pernyataan yang benar adalah...",
            options: [
              {
                id: "a",
                text: "Angka pertumbuhan mengalami kenaikan tiap tahun.",
              },
              {
                id: "b",
                text: "Tren data angka pertumbuhan merupakan tren naik.",
              },
              {
                id: "c",
                text: "Pada tahun 2024, angka jumlah penduduk akan mengalami penurunan sedangkan angka pertumbuhan akan mengalami kenaikan.",
              },
              {
                id: "d",
                text: "Pada tahun 2024, angka jumlah penduduk akan mengalami kenaikan sedangkan angka pertumbuhan akan mengalami penurunan",
              },
              {
                id: "e",
                text: "Jumlah penduduk and angka pertumbuhan tahun 2024 tidak dapat diprediksi",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Berdasarkan tren demografi Indonesia: Jumlah penduduk total terus naik (akumulatif), namun laju/angka pertumbuhannya (%) cenderung melambat/menurun setiap tahunnya.",
            points: 6,
          },
        ],
      },
    ];

    // 3. Find and Update Module
    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(
        `Found existing module: ${moduleDoc.name} (${moduleDoc._id}). Updating...`,
      );
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Prediksi Data/Simpulan";
      moduleDoc.description =
        "Modul mengenai kemampuan memprediksi data masa depan berdasarkan tren.";
      moduleDoc.subcategory = "Penalaran Induktif";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(
        `Creating new module 'Prediksi Data/Simpulan' with ID: ${targetId}`,
      );
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Prediksi Data/Simpulan",
        description:
          "Modul mengenai kemampuan memprediksi data masa depan berdasarkan tren.",
        subcategory: "Penalaran Induktif",
        steps: stepsData,
        points_available: 100,
      });
    }

    console.log("Module Seeded:", moduleDoc.name);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding module:", error);
    process.exit(1);
  }
};

seedPrediksiData();
