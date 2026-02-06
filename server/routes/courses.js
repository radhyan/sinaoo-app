const express = require("express");
const Course = require("../models/Course");
const Module = require("../models/Module");

const router = express.Router();

// 1. Get All Courses (with seeding)
router.get("/", async (req, res) => {
  try {
    let courses = await Course.find();

    if (courses.length === 0) {
      console.log("Seeding courses...");

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
          // Default limit 20 applies
        },
      ];

      const seedDB = async () => {
        console.log("Seeding courses...");
        await Course.deleteMany({});
        await Module.deleteMany({});

        for (const c of courseData) {
          // Apply course-specific limit or default to 20
          const limit = c.limit || 20;
          const limitedModules = c.modules.slice(0, limit);

          // Create Course
          const newCourse = await new Course({
            name: c.name,
            image: c.image,
            description: `Pelajari materi ${c.name} untuk persiapan UTBK.`,
          }).save();

          // Create Real Modules
          const modules = limitedModules.map((mName, i) => ({
            courseId: newCourse._id,
            name: mName,
          }));

          await Module.insertMany(modules);
        }
        console.log("Seeding complete.");
      };

      await seedDB();
      courses = await Course.find();
    }

    // ... rest of aggregation logic
    const coursesWithStats = await Promise.all(
      courses.map(async (course) => {
        const moduleCount = await Module.countDocuments({
          courseId: course._id,
        });
        const totalPointsData = await Module.aggregate([
          { $match: { courseId: course._id } },
          { $unwind: "$steps" },
          { $match: { "steps.type": "quiz" } },
          { $unwind: "$steps.questions" },
          { $group: { _id: null, total: { $sum: "$steps.questions.points" } } },
        ]);

        return {
          ...course.toObject(),
          totalModules: moduleCount,
          totalPoints: totalPointsData[0]?.total || 0,
        };
      }),
    );

    res.json(coursesWithStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// 2. Get Modules by Course
router.get("/:courseId/modules", async (req, res) => {
  try {
    const modules = await Module.find({ courseId: req.params.courseId });

    // Add totalPoints for each module
    const modulesWithPoints = modules.map((m) => {
      const quizStep = m.steps?.find((s) => s.type === "quiz");
      const totalPoints =
        quizStep?.questions?.reduce((sum, q) => sum + (q.points || 0), 0) || 0;
      return { ...m.toObject(), totalPoints };
    });

    res.json(modulesWithPoints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
