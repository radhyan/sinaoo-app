const express = require("express");
const Course = require("../models/Course");
const Module = require("../models/Module");
const User = require("../models/User");

const router = express.Router();

// ADMIN: Force Re-seed Courses
router.post("/reset-courses", async (req, res) => {
  try {
    // 1. Penalaran Umum (PU)
    const puModules = [
      "Kesesuaian Pernyataan",
      "Sebab akibat",
      "pediksi data/simpulan",
      "simpulan logis",
      "penalaran analitik",
      "kualitas simpulan & opini atau fakta teks",
      "Pola dan operasi bilangan",
      "Barisan bilangan",
      "barisan aritmatika",
      "silogisme",
      "logika ekuator",
      "tabel",
      "grafis",
    ];

    // 2. Pengetahuan dan Pemahaman Umum (PPU)
    const ppuModules = [
      "ide pokok",
      "kesimpulan",
      "jenis paragraf",
      "sikap dan tujuan penulis",
      "hubungan antar paragraf",
      "analisis bacaan dan kepaduan paragraf",
      "hubungan antar kalimat",
      "makna kata",
      "sifat kata",
      "sinonim",
      "antonim",
      "kalimat efektif",
      "bahasa panda",
    ];

    // 3. Pemahaman Bacaan dan Menulis (PBM)
    const pbmModules = [
      "Frasa",
      "Pola kalimat",
      "penentuan judul dan simpulan",
      "kalimat efektif",
      "kata baku",
      "kata tidak baku",
      "titk, koma, dan titik koma",
      "huruf kapital dan non kapital",
      "penggunaan huruf miring",
      "penulisan angka dan bilangan (rupuiah nominal)",
      "penulisan nama latin dalam judul",
      "kaidah peleburan KTSP",
      "akronim dan singkatan",
      "kata ulang, pemerinci, dan berpasangan tetap",
      "gabungan kata",
      "preposisi",
      "makna konjungsi antarkalimat",
      "imbuhan per-, ber-, atau be-",
    ];

    // 4. Literasi Bahasa Indonesia (LitBind)
    const litBindModules = [
      "strategi membaca",
      "pengaplikasian 5w+1h",
      "menentukan tema bacaan",
      "simpulan bacaan",
      "kepaduan paragraf",
      "fakta/data yang relevan",
      "evaluasi sebab-akibat paragraf",
      "benar atau salah",
    ];

    // 5. Literasi Bahasa Inggris (LitBing)
    const litBingModules = [
      "theme/topic",
      "core sentence",
      "supporting ideas",
      "finding specific information",
      "restarting sentence",
      "understand vocabulary cloze",
      "text comparison",
      "authors opinion and attitude",
      "authors writing organisation and coherence",
      "lost words",
      "conjunction and prepositions",
      "nouns and pronoun",
      "gerund and infinitive",
      "adjectives and adverbs",
      "comparative and superlative",
      "transitive and intransitive verb",
      "present tense simple/perfect/continuous",
      "past tense simple/perfect/continuous",
      "future tense simple/perfect/continuous",
    ];

    // 6. Pengetahuan Kuantitatif dan Penalaran Matematika (PKPM)
    const pkpmModules = [
      "Sifat dan operasi bilangan",
      "pecahan, desimal, dan bentuk persen",
      "jenis bilangan",
      "kpk, fpb",
      "sifat himpunan",
      "perhitungan himpunan/diagram venn",
      "permodelan dan operasi aljabar",
      "eksponensial dan akar",
      "persamaan logaritma",
      "variabel dan konstanta",
      "untung, rugi, dan diskon",
      "bunga tunggal dan majemuk",
      "rasio dan proposi",
      "perbandingan senilai dan bertingkat",
      "kecepatan, menyusul, berpapasan, debit",
      "baris dan deret aritmatika",
      "baris dan deret geometri",
      "linear programming (1/2 var)",
      "linear programming 3 var",
      "non linear programming (1/2 var)",
    ];

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
        limit: 18,
      },
      {
        name: "Pengetahuan Kuantitatif dan Penalaran Matematika",
        image: "math.png",
        modules: pkpmModules,
      },
    ];

    await Course.deleteMany({});
    await Module.deleteMany({});

    for (const c of courseData) {
      const limit = c.limit || 20;
      const limitedModules = c.modules.slice(0, limit);
      const newCourse = await new Course({
        name: c.name,
        image: c.image,
        description: `Pelajari materi ${c.name} untuk persiapan UTBK.`,
      }).save();

      const modules = limitedModules.map((mName) => ({
        courseId: newCourse._id,
        name: mName,
      }));

      await Module.insertMany(modules);
    }

    res.json({ message: "Courses reset and seeded successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DEBUG: Reset Achievements
router.post("/:username/debug/reset-achievements", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.achievements = []; // clear all
    await user.save();

    console.log(`[DEBUG] Reset achievements for ${username}`);
    res.json({ message: "Achievements cleared", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
