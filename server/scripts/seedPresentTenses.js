const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPresentTenses = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const courseName = "Literasi Bahasa Inggris";
    const course = await Course.findOne({ name: courseName });
    if (!course) {
      console.error(`Course '${courseName}' not found.`);
      process.exit(1);
    }
    console.log("Found Course:", course.name);

    const targetId = "present-tenses";

    const stepsData = [
      {
        title: "Materi: Apa itu Tenses? & Present Simple",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian tenses secara umum dan Present Simple Tense beserta fungsinya.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Tenses?</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">Tenses adalah kalimat untuk menjelaskan suatu kejadian <strong>berdasarkan keterangan waktu pada saat kejadian tersebut terjadi</strong>.</p>
<p class="text-body-l text-Grayscale-700 mb-2">Tenses dibagi menjadi 3 macam yaitu:</p>
<ul class="text-body-l space-y-1 mb-4">
<li>• <strong>Present Tense</strong> — menjelaskan kejadian yang terjadi di <strong>waktu sekarang</strong></li>
<li>• <strong>Past Tense</strong> — menjelaskan kejadian yang terjadi di <strong>masa lampau</strong></li>
<li>• <strong>Future Tense</strong> — menjelaskan kejadian yang <strong>akan terjadi</strong> di <strong>masa depan</strong></li>
</ul>
<p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Setiap tense akan menggunakan variasi <strong class="text-Primary-500">Subjek (S)</strong> dan <strong class="text-red-500">Kata Kerja (Verb)</strong> yang berbeda tergantung konteks kalimatnya. <strong class="text-red-500">Kata Kerja (Verb)</strong> juga memiliki kategorisasi dari jenis <strong>Verb 1 sampai Verb 3</strong>. Konteks kalimat dalam penggunaan tenses dapat dibagi menjadi 3 yaitu: <strong>Simple, Perfect,</strong> dan <strong>Continuous</strong>.</p>
</section>

<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Present Simple Tense</h3>
<p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Present Simple Tense berstruktur <strong class="text-Primary-500">Subjek (I/You/We/They)</strong> + <strong class="text-red-500">Kata Kerja (Verb) 1</strong>. Fungsi dari Present Simple Tense dapat digunakan untuk:</p>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Memberitahu kebiasaan yang dilakukan secara rutin</h4>
<p class="text-body-l italic text-Grayscale-600">I <strong class="text-red-500">Ride</strong> my motorcycle to go to my high school</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Menyatakan pengetahuan/fakta umum</h4>
<p class="text-body-l italic text-Grayscale-600">I <strong class="text-red-500">Breathe</strong> because i am a human</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Menjelaskan Objek yang Menjadi Subjek</h4>
<p class="text-body-l italic text-Grayscale-600">The Moon <strong class="text-red-500">rises</strong> in the evening</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Menjelaskan kewajiban atau pekerjaan</h4>
<p class="text-body-l italic text-Grayscale-600">We must <strong class="text-red-500">finish</strong> the homework from our teacher</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Menyatakan perasaan</h4>
<p class="text-body-l italic text-Grayscale-600">I <strong class="text-red-500">feel</strong> fantastic because of my crush</p>
</div>
</div>
</section>
</div>`,
      },
      {
        title: "Materi: Present Perfect Tense",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian, struktur, dan penggunaan Present Perfect Tense.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Present Perfect Tense</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-3" style="text-align: justify;">Present Perfect Tense digunakan untuk menjelaskan kejadian yang <strong>dimulai di masa lalu dan tetap berhubungan dengan masa kini</strong>. Untuk subjek tunggal ditambah + <strong class="text-purple-500">Has</strong>, sementara subjek jamak + <strong class="text-purple-500">Have</strong>. Lalu diakhiri oleh <strong class="text-red-500">Verb 3</strong>.</p>
<div class="bg-Primary-50 p-4 rounded-lg mb-4 space-y-1">
<p class="text-body-l"><strong>Subjek Tunggal (He/She/It)</strong> + <strong class="text-purple-500">Has</strong> + <strong class="text-red-500">V3</strong></p>
<p class="text-body-l"><strong>Subjek Jamak (I/You/We/They)</strong> + <strong class="text-purple-500">Have</strong> + <strong class="text-red-500">V3</strong></p>
</div>
</section>

<section>
<p class="text-body-l text-Grayscale-700 mb-3">Present Perfect Tense dapat digunakan untuk:</p>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Peristiwa yang hasilnya masih berdampak</h4>
<p class="text-body-l italic text-Grayscale-600">He <strong class="text-purple-500">has</strong> <strong class="text-red-500">suffered</strong> severe headache due to his biological cancer</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Pengalaman tetapi tidak spesifik</h4>
<p class="text-body-l italic text-Grayscale-600">I <strong class="text-purple-500">Have</strong> <strong class="text-red-500">tried</strong> that motorcycle</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Aktivitas yang belum selesai sampai sekarang</h4>
<p class="text-body-l italic text-Grayscale-600">We <strong class="text-purple-500">Have</strong> not <strong class="text-red-500">finished</strong> the assignment from Miss Nancy</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Kejadian yang baru saja selesai terjadi</h4>
<p class="text-body-l text-Grayscale-500 mb-1">(Setelah Have/Has bisa ditambah <strong class="text-purple-500">Just</strong>)</p>
<p class="text-body-l italic text-Grayscale-600">We <strong class="text-purple-500">Have Just</strong> <strong class="text-red-500">finished</strong> the assignment from Miss Nancy</p>
</div>
</div>
</section>

<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Kalimat Tanya Present Perfect</h3>
<div class="bg-Primary-50 p-4 rounded-lg mb-4 space-y-1">
<p class="text-body-l">• <strong class="text-purple-500">Have</strong> + Subjek Jamak + <strong class="text-red-500">V3</strong></p>
<p class="text-body-l">• <strong class="text-purple-500">Has</strong> + Subjek Tunggal + <strong class="text-red-500">V3</strong></p>
</div>
<div class="bg-Primary-50 p-4 rounded-lg">
<p class="text-body-l font-bold mb-2">Contoh:</p>
<ul class="text-body-l space-y-1">
<li>• <strong class="text-purple-500">Have</strong> you <strong class="text-red-500">finished</strong> your assignments?</li>
<li>• <strong class="text-purple-500">Has</strong> she <strong class="text-red-500">confessed</strong> her feelings today?</li>
</ul>
</div>
</section>
</div>`,
      },
      {
        title: "Materi: Present Continuous Tense",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian, struktur, dan penggunaan Present Continuous Tense.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Present Continuous Tense</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-3" style="text-align: justify;">Present Continuous Tense digunakan untuk <strong>menjelaskan aktivitas atau kejadian yang sedang dilakukan sekarang atau kejadian yang direncanakan.</strong></p>
<p class="text-body-l text-Grayscale-700 mb-2">Struktur:</p>
<div class="bg-Primary-50 p-4 rounded-lg mb-4 space-y-1">
<p class="text-body-l">• <strong>Subjek I</strong> + <strong class="text-purple-500">Am</strong> + <strong class="text-red-500">Verb 1-Ing</strong></p>
<p class="text-body-l">• <strong>Subjek Jamak (You/They/We)</strong> + <strong class="text-purple-500">Are</strong> + <strong class="text-red-500">Verb 1-Ing</strong></p>
<p class="text-body-l">• <strong>Subjek Tunggal (He/She/It)</strong> + <strong class="text-purple-500">Is</strong> + <strong class="text-red-500">Verb 1-Ing</strong></p>
</div>
</section>

<section>
<p class="text-body-l text-Grayscale-700 mb-3">Fungsi dan contoh:</p>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Mendeskripsikan aktivitas yang terjadi</h4>
<p class="text-body-l italic text-Grayscale-600">You <strong class="text-purple-500">are</strong> <strong class="text-red-500">Studying</strong> English Tenses from Letstudy</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Mendeskripsikan tren yang sedang terjadi</h4>
<p class="text-body-l italic text-Grayscale-600">They <strong class="text-purple-500">are</strong> <strong class="text-red-500">fasting</strong> because it is Ramadhan</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Kejadian di masa depan yang direncanakan</h4>
<p class="text-body-l italic text-Grayscale-600">I <strong class="text-purple-500">am</strong> <strong class="text-red-500">watching</strong> Football tonight with my bestfriend</p>
</div>
</div>
</section>
</div>`,
      },
      {
        title: "Video: Present Tenses Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/2KyoUyf4DJ8",
        description:
          "Penjelasan lengkap tentang present simple, continuous, dan perfect tense.",
      },
      {
        title: "Video: Present Tenses Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/_tMoBSpEPjE",
        description:
          "Latihan soal dan pembahasan mendalam mengenai present tenses.",
      },
      {
        title: "Quiz: Present Tenses",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "He ... at 9 am everyday",
            question:
              "Look at the question below!\nHe ... at 9 am everyday\n\nThe word to fill in the blank is ...",
            options: [
              { id: "a", text: "Slept" },
              { id: "b", text: "Sleeps" },
              { id: "c", text: "Sleep" },
              { id: "d", text: "Is sleeping" },
              { id: "e", text: "Was sleeping" },
            ],
            correctAnswer: "b",
            explanation:
              "The keyword 'everyday' indicates a routine or habit, which requires the Present Simple tense. Because the subject 'He' is third-person singular, the verb takes an '-s' suffix (sleeps).",
            points: 10,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: "A: Does he like to cook?\nB: ....",
            question:
              "Look at the question below!\nA: Does he like to cook?\nB: ....\n\nThe sentence to fill in the blank is ...",
            options: [
              { id: "a", text: "Yes, he liked to cook" },
              { id: "b", text: "Yes, he is like to cook" },
              { id: "c", text: "Yes, he likes to cook" },
              { id: "d", text: "Yes, he likes cook" },
              { id: "e", text: "Yes, he like cook" },
            ],
            correctAnswer: "c",
            explanation:
              "The question uses the Present Simple auxiliary 'Does', so the answer must also be in the Present Simple. 'He' is a third-person singular subject, requiring the verb 'likes', followed by the infinitive 'to cook'.",
            points: 10,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "The stuntman ... his stunt in Thamrin Tower",
            question:
              "Look at the question below!\nThe stuntman ... his stunt in Thamrin Tower\n\nThe word to fill in the blank is ...",
            options: [
              { id: "a", text: "Did" },
              { id: "b", text: "Will Do" },
              { id: "c", text: "Does" },
              { id: "d", text: "Do" },
              { id: "e", text: "Must Do" },
            ],
            correctAnswer: "c",
            explanation:
              "This sentence is treated as a general fact or a scheduled routine using the Present Simple tense. The subject 'The stuntman' is singular, so the correct verb is 'Does'.",
            points: 10,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "Andrew ... to the restroom",
            question:
              "Look at the question below!\nAndrew ... to the restroom\n\nThe word to fill in the blank is ...",
            options: [
              { id: "a", text: "Go" },
              { id: "b", text: "Is Going" },
              { id: "c", text: "Goes" },
              { id: "d", text: "Went" },
              { id: "e", text: "Was Going" },
            ],
            correctAnswer: "c",
            explanation:
              "The sentence expresses a factual present action using the Present Simple tense. The singular subject 'Andrew' requires the verb 'go' to be conjugated with an '-es' (goes).",
            points: 10,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "He .... Sundanese Language to foreigners in Bali",
            question:
              "Look at the question below!\nHe .... Sundanese Language to foreigners in Bali\n\nThe word to fill in the blank is ...",
            options: [
              { id: "a", text: "Teaches" },
              { id: "b", text: "Teaching" },
              { id: "c", text: "Is Teaching" },
              { id: "d", text: "Was teach" },
              { id: "e", text: "Teach" },
            ],
            correctAnswer: "a",
            explanation:
              "The sentence describes a general fact or routine job. The subject 'He' is third-person singular, so the base verb 'teach' must take the '-es' suffix to become 'teaches'.",
            points: 10,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "As of now, I ... international relations at UCLA",
            question:
              "Look at the question below!\nAs of now, I ... international relations at UCLA\n\nThe word to fill in the blank is ...",
            options: [
              { id: "a", text: "Studies" },
              { id: "b", text: "Am Studying" },
              { id: "c", text: "Was Studying" },
              { id: "d", text: "Study" },
              { id: "e", text: "Studying" },
            ],
            correctAnswer: "b",
            explanation:
              "The time marker 'As of now' indicates an ongoing action happening currently, which requires the Present Continuous tense (am/is/are + verb-ing). For the subject 'I', the correct form is 'am studying'.",
            points: 10,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "He currently ... a videogame right now.",
            question:
              "Look at the question below!\nHe currently ... a videogame right now.\n\nThe words to fill in the blank is ...",
            options: [
              { id: "a", text: "Plays" },
              { id: "b", text: "Play" },
              { id: "c", text: "Is Playing" },
              { id: "d", text: "Will Play" },
              { id: "e", text: "Is Played" },
            ],
            correctAnswer: "c",
            explanation:
              "The time markers 'currently' and 'right now' strongly indicate an action happening at this exact moment, requiring the Present Continuous tense. The third-person singular subject 'He' takes 'is playing'.",
            points: 10,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "The dog ... on the sofa",
            question:
              "Look at the question below!\nThe dog ... on the sofa\n\nThe words to fill in the blank is ...",
            options: [
              { id: "a", text: "Was Sleeping" },
              { id: "b", text: "Sleeping" },
              { id: "c", text: "Is Slept" },
              { id: "d", text: "Slept" },
              { id: "e", text: "Is Sleeping" },
            ],
            correctAnswer: "e",
            explanation:
              "The sentence aims to describe an ongoing action in the present. Therefore, the Present Continuous tense (is sleeping) is the correct choice for the singular subject 'The dog'.",
            points: 10,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "Lionel Messi ... in Miami since 2023",
            question:
              "Look at the question below!\nLionel Messi ... in Miami since 2023\n\nThe words to fill in the blank is ...",
            options: [
              { id: "a", text: "Is Living" },
              { id: "b", text: "Lived" },
              { id: "c", text: "Was Living" },
              { id: "d", text: "Has Lived" },
              { id: "e", text: "Will Lived" },
            ],
            correctAnswer: "d",
            explanation:
              "The keyword 'since 2023' indicates an action that started in the past and continues into the present. This requires the Present Perfect tense (has/have + past participle). For the singular subject 'Lionel Messi', the correct form is 'has lived'.",
            points: 10,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: "My bestie ... me twice today",
            question:
              "Look at the question below!\nMy bestie ... me twice today\n\nThe word to fill in the blank is ...",
            options: [
              { id: "a", text: "Has been Called" },
              { id: "b", text: "Is Calling" },
              { id: "c", text: "Has Called" },
              { id: "d", text: "Called" },
              { id: "e", text: "Have been Calling" },
            ],
            correctAnswer: "c",
            explanation:
              "The keywords 'twice today' describe an action completed multiple times within an unfinished time period ('today'). This condition requires the Present Perfect tense. For the singular subject 'My bestie', the correct form is 'has called'.",
            points: 10,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.subcategory = "Tenses";
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Present Simple, Perfect, & Continuous",
        description:
          "Learn the three present tenses — Simple, Continuous, and Perfect — including formulas, time signals, and usage differences.",
        subcategory: "Tenses",
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

seedPresentTenses();
