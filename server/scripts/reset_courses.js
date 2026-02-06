const mongoose = require("mongoose");
const Course = require("./models/Course");
const Module = require("./models/Module");
const dotenv = require("dotenv");

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/sinaoo-app",
    );
    console.log("Connected to MongoDB");

    console.log("Deleting existing courses and modules...");
    await Course.deleteMany({});
    await Module.deleteMany({});
    console.log("Deletion complete.");

    // 1. Penalaran Umum (PU) - 13 Modules
    const puModules = [
      "Kesesuaian Pernyataan",
      "Sebab akibat",
      "Pediksi data/simpulan",
      "Simpulan logis",
      "Penalaran analitik",
      "Kualitas simpulan & opini atau fakta teks",
      "Pola dan operasi bilangan",
      "Barisan bilangan",
      "Barisan aritmatika",
      "Silogisme",
      "Logika ekuator",
      "Tabel",
      "Grafis",
    ];

    // 2. Pengetahuan dan Pemahaman Umum (PPU) - 13 Modules
    const ppuModules = [
      "Ide pokok",
      "Kesimpulan",
      "Jenis paragraf",
      "Sikap dan tujuan penulis",
      "Hubungan antar paragraf",
      "Analisis bacaan dan kepaduan paragraf",
      "Hubungan antar kalimat",
      "Makna kata",
      "Sifat kata",
      "Sinonim",
      "Antonim",
      "Kalimat efektif",
      "Bahasa panda",
    ];

    // 3. Pemahaman Bacaan dan Menulis (PBM) - 18 Modules
    const pbmModules = [
      "Frasa",
      "Pola kalimat",
      "Penentuan judul dan simpulan",
      "Kalimat efektif",
      "Kata baku",
      "Kata tidak baku",
      "Titik, koma, dan titik koma",
      "Huruf kapital dan non kapital",
      "Penggunaan huruf miring",
      "Penulisan angka dan bilangan (rupiah nominal)",
      "Penulisan nama latin dalam judul",
      "Kaidah peleburan KTSP",
      "Akronim dan singkatan",
      "Kata ulang, pemerinci, dan berpasangan tetap",
      "Gabungan kata",
      "Preposisi",
      "Makna konjungsi antarkalimat",
      "Imbuhan per-, ber-, atau be-",
    ];

    // 4. Literasi Bahasa Indonesia (LitBind) - 8 Modules
    const litBindModules = [
      "Strategi membaca",
      "Pengaplikasian 5w+1h",
      "Menentukan tema bacaan",
      "Simpulan bacaan",
      "Kepaduan paragraf",
      "Fakta/data yang relevan",
      "Evaluasi sebab-akibat paragraf",
      "Benar atau salah",
    ];

    // 5. Literasi Bahasa Inggris (LitBing) - 19 Modules
    const litBingModules = [
      "Theme/topic",
      "Core sentence",
      "Supporting ideas",
      "Finding specific information",
      "Restarting sentence",
      "Understand vocabulary cloze",
      "Text comparison",
      "Authors opinion and attitude",
      "Authors writing organisation and coherence",
      "Lost words",
      "Conjunction and prepositions",
      "Nouns and pronoun",
      "Gerund and infinitive",
      "Adjectives and adverbs",
      "Comparative and superlative",
      "Transitive and intransitive verb",
      "Present tense simple/perfect/continuous",
      "Past tense simple/perfect/continuous",
      "Future tense simple/perfect/continuous",
    ];

    // 6. Pengetahuan Kuantitatif dan Penalaran Matematika (PKPM)
    const pkpmAllModules = [
      "Sifat dan operasi bilangan",
      "Pecahan, desimal, dan bentuk persen",
      "Jenis bilangan",
      "KPK, FPB",
      "Sifat himpunan",
      "Perhitungan himpunan/diagram venn",
      "Permodelan dan operasi aljabar",
      "Eksponensial dan akar",
      "Persamaan logaritma",
      "Variabel dan konstanta",
      "Untung, rugi, dan diskon",
      "Bunga tunggal dan majemuk",
      "Rasio dan proposi",
      "Perbandingan senilai dan bertingkat",
      "Kecepatan, menyusul, berpapasan, debit",
      "Baris dan deret aritmatika",
      "Baris dan deret geometri",
      "Linear programming (1/2 var)",
      "Linear programming 3 var",
      "Non linear programming (1/2 var)",
      "Gradien garis",
      "Persamaan garis lurus dan grafik",
      "Sifat sifat, domain, range fungsi",
      "Operasi fungsi dan fungsi komposisi",
      "Fungsi invers",
      "Jenis fungsi",
      "Fungsi kuadrat dan sifatnya",
      "Faktor dan rumus abc",
      "Grafik fungsi kuadrat",
      "Titik, garis, sudut",
      "Bangun datar",
      "Bangun ruang",
      "Koordinat",
      "Phytagoras",
      "Trigonometri sudut istimewa",
      "Mean median modus",
      "Kuartil, data tunggal dan data kelompok",
      "Jangkauan varian simpangan baku dan rata rata",
      "Sifat sifat dan operasi matriks",
      "Transpose dan determinan matriks",
      "Aturan perkalian",
      "Permutasi dan kombinasi",
      "Konsep dasar peluang, peluang satu kejadian",
      "Frekuensi harapan",
      "Kejadian saling/tidak saling lepas, bebas",
      "Peluang kejadian bersyarat",
      "Pengertian limit",
      "Jenis limit",
      "Penyelesaian limit",
    ];

    // Limit to 20 for PKPM
    const pkpmModules = pkpmAllModules.slice(0, 20);

    const courseData = [
      {
        name: "Penalaran Umum",
        image: "penalaran-umum.png",
        modules: puModules,
      },
      {
        name: "Pengetahuan dan Pemahaman Umum",
        image: "ppu.png",
        modules: ppuModules,
      },
      {
        name: "Pemahaman Bacaan dan Menulis",
        image: "pbm.png",
        modules: pbmModules,
      },
      {
        name: "Literasi Bahasa Indonesia",
        image: "indo.png",
        modules: litBindModules,
      },
      {
        name: "Literasi Bahasa Inggris",
        image: "inggris.png",
        modules: litBingModules,
      },
      {
        name: "Pengetahuan Kuantitatif dan Penalaran Matematika",
        image: "math.png",
        modules: pkpmModules,
      },
    ];

    for (const c of courseData) {
      // Create Course
      const newCourse = await new Course({
        name: c.name,
        image: c.image,
        description: `Pelajari materi ${c.name} untuk persiapan UTBK.`,
      }).save();

      console.log(`Created course: ${c.name}`);

      // Create Real Modules
      const modules = c.modules.map((mName) => ({
        courseId: newCourse._id,
        name: mName,
      }));

      await Module.insertMany(modules);
      console.log(`- Added ${modules.length} modules`);
    }

    console.log("Seeding complete!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
