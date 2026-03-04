const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedPastTenses = async () => {
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

    const targetId = "past-tenses";

    const stepsData = [
      {
        title: "Materi: Past Simple Tense",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian past tense secara umum dan Past Simple Tense beserta fungsinya.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Past Tense 101</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">Past tense secara umum digunakan untuk <strong>menjelaskan suatu kejadian yang terjadi di masa lalu.</strong> Past tense memiliki tiga kategorisasi tenses yakni <strong>past simple, past perfect,</strong> dan <strong>past continuous.</strong></p>
</section>

<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Past Simple Tense</h3>
<p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Past Simple Tense berstruktur <strong class="text-Primary-500">Subjek</strong> + <strong class="text-red-500">Kata Kerja (Verb) 2</strong>. Past Simple Tense juga dapat diubah menjadi kalimat tanya dengan struktur <strong>Did + Subjek + <span class="text-red-500">Verb 1</span></strong>. Past Simple tense memiliki fungsi seperti:</p>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Memberitahu waktu spesifik dan jelas dari kejadian di masa lalu</h4>
<p class="text-body-l text-Grayscale-500 italic mb-2">(yesterday, last week, 5 years ago, when i was, etc)</p>
<p class="text-body-l italic text-Grayscale-600"><span class="text-purple-500">Last week</span>, I <strong class="text-red-500">ate</strong> sushi in Japan</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Memberitahu waktu tidak spesifik di masa lampau</h4>
<p class="text-body-l text-Grayscale-500 italic mb-2">(days ago, long time ago, years ago, ages ago, etc)</p>
<p class="text-body-l italic text-Grayscale-600">Indonesia Football Federation <strong class="text-red-500">fired</strong> Shin Tae Yong <span class="text-purple-500">weeks ago</span></p>
<div class="bg-Grayscale-50 p-3 rounded-lg mt-3">
<p class="text-body-l text-Grayscale-600">Bentuk ini juga dapat digunakan dengan kategori waktu di awal:</p>
<p class="text-body-l text-Grayscale-700 mt-1">⭐ <span class="text-purple-500">Weeks ago</span>, Indonesia Football Federation <strong class="text-red-500">Fired</strong> Shin Tae Yong</p>
</div>
</div>
</div>
</section>
</div>`,
      },
      {
        title: "Materi: Past Perfect Tense",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian, struktur, dan penggunaan Past Perfect Tense.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Past Perfect Tense</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-3" style="text-align: justify;">Past Perfect Tense digunakan untuk <strong>menyatakan dua kejadian di masa lampau secara beruntun.</strong> Aktivitas yang <strong>pertama terjadi dahulu</strong> akan menggunakan Past Perfect Tense. Strukturnya adalah <strong class="text-Primary-500">Subjek</strong> + <strong class="text-purple-500">Had</strong> + <strong class="text-red-500">Verb 3</strong>.</p>
</section>

<section>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Menyatakan urutan kejadian di masa lalu</h4>
<p class="text-body-l italic text-Grayscale-600"><span class="text-Primary-500">Sultan</span> <strong class="text-purple-500">had</strong> <strong class="text-red-500">fixed</strong> motorcycles before receiving license from his academy</p>
<div class="bg-Grayscale-50 p-3 rounded-lg mt-3">
<p class="text-body-l text-Grayscale-600" style="text-align: justify;">Aktivitas Subjek (Sultan) yang memperbaiki motor terjadi <strong>sebelum</strong> dia mendapatkan lisensi dari akademinya.</p>
</div>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Mengekspresikan harapan yang tidak tercapai / penyesalan</h4>
<p class="text-body-l italic text-Grayscale-600">If We <strong class="text-purple-500">Had</strong> <strong class="text-red-500">Charged</strong> our phone, the battery would not be empty today</p>
</div>
</div>
</section>
</div>`,
      },
      {
        title: "Materi: Past Continuous Tense",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian, struktur, dan penggunaan Past Continuous Tense.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Past Continuous Tense</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-3" style="text-align: justify;">Past Continuous Tense digunakan untuk <strong>memberitahu kejadian yang pernah terjadi di masa lalu sebelum masa kini, dan kejadian ini masih berdampak sampai sekarang.</strong></p>
<p class="text-body-l text-Grayscale-700 mb-2">Struktur:</p>
<div class="bg-Primary-50 p-4 rounded-lg mb-4 space-y-1">
<p class="text-body-l"><strong>Subjek Tunggal (I/He/She/It)</strong> + <strong class="text-purple-500">Was</strong> + <strong class="text-red-500">Verb 1-ing</strong></p>
<p class="text-body-l"><strong>Subjek Jamak (You/They/We)</strong> + <strong class="text-purple-500">Were</strong> + <strong class="text-red-500">Verb 1-ing</strong></p>
</div>
<div class="bg-Primary-50 p-4 rounded-lg mb-4">
<p class="text-body-l font-bold mb-2">Contoh:</p>
<p class="text-body-l italic text-Grayscale-600">We <strong class="text-purple-500">were</strong> <strong class="text-red-500">playing</strong> basketball when the teacher scold us</p>
</div>
</section>

<section>
<div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
<p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;"><strong>⚠️ Take note!</strong> Dalam Past Continuous, ada beberapa kata kerja yang tidak dapat dimodifikasi menjadi verb 1-ing:</p>
<ul class="text-body-l space-y-1 text-Grayscale-700">
<li>• <strong>Kata kerja indera</strong> <span class="text-Grayscale-500">(to see, to hear, etc)</span></li>
<li>• <strong>Kata kerja keadaan mental</strong> <span class="text-Grayscale-500">(to envy, to love, etc)</span></li>
<li>• <strong>Kata kerja pendapat</strong> <span class="text-Grayscale-500">(to doubt, to assume)</span></li>
<li>• <strong>Kata kerja pengukuran</strong> <span class="text-Grayscale-500">(to cost, to weight, to hold)</span></li>
</ul>
<p class="text-body-l text-Grayscale-700 mt-2">dan <strong>hanya menggunakan kata kerja tersebut</strong> (tanpa -ing).</p>
</div>
<div class="bg-Primary-50 p-4 rounded-lg mt-4">
<p class="text-body-l font-bold mb-2">Contoh:</p>
<p class="text-body-l italic text-Grayscale-600">he <strong class="text-purple-500">was</strong> <strong class="text-red-500">measuring</strong> your height to fulfill our class data</p>
</div>
</section>
</div>`,
      },
      {
        title: "Video: Past Tenses Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/2RzVuxsxjpk",
        description:
          "Penjelasan lengkap tentang past simple, continuous, dan perfect tense.",
      },
      {
        title: "Video: Past Tenses Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/vsvRqszAPJU",
        description:
          "Latihan soal dan pembahasan mendalam mengenai past tenses.",
      },
      {
        title: "Quiz: Past Tenses",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "The Jet plane ... at 9 pm yesterday",
            question:
              "Look at the question below!\nThe Jet plane ... at 9 pm yesterday\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Take Off" },
              { id: "b", text: "Took Off" },
              { id: "c", text: "Had Take Off" },
              { id: "d", text: "Have Took Off" },
              { id: "e", text: "Had Took Off" },
            ],
            correctAnswer: "b",
            explanation:
              "The time marker 'yesterday' clearly indicates a completed action in the past. Therefore, the Past Simple tense of the verb 'take off', which is 'took off', is the correct answer.",
            points: 10,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "A: Was it true that Annie always drank espresso each morning?\nB: ....",
            question:
              "Look at the question below!\nA: Was it true that Annie always drank espresso each morning?\nB: \n\nThe sentence to fill in the blank below is ...",
            options: [
              { id: "a", text: "Yes, Annie drank espresso in the morning" },
              {
                id: "b",
                text: "Yes, Annie has always drank espresso in the morning",
              },
              {
                id: "c",
                text: "Yes, Annie had always drank espresso in the morning",
              },
              { id: "d", text: "Yes, Annie drunking espresso in the morning" },
              { id: "e", text: "Yes, Annie drink espresso in the morning" },
            ],
            correctAnswer: "a",
            explanation:
              "The question asks about a past habit using the Past Simple tense ('drank'). The response should correspond to this by also using the Past Simple tense to confirm the past habit.",
            points: 10,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "He ... our house since last week",
            question:
              "Look at the question below!\nHe ... our house since last week\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Has Left" },
              { id: "b", text: "Had Left" },
              { id: "c", text: "Left" },
              { id: "d", text: "Was Leaving" },
              { id: "e", text: "Will Left" },
            ],
            correctAnswer: "c",
            explanation:
              "Based on the provided answer key, 'Left' (Past Simple) is used to state the specific past event of his departure. (Note: Normally, 'since' pairs with Present Perfect 'has left', but 'left' is strictly correct according to the quiz's key focusing on the action that occurred 'last week').",
            points: 10,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "We ... Mobile Legends all day all night",
            question:
              "Look at the question below!\nWe ... Mobile Legends all day all night\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Play" },
              { id: "b", text: "Playing" },
              { id: "c", text: "Were Playing" },
              { id: "d", text: "Played" },
              { id: "e", text: "Has Played" },
            ],
            correctAnswer: "c",
            explanation:
              "The phrase 'all day all night' emphasizes the duration of an ongoing, continuous action in the past. Thus, the Past Continuous tense ('were playing' for the subject 'We') is the best fit.",
            points: 10,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "Sultan .... about his new job",
            question:
              "Look at the question below!\nSultan .... about his new job\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Was Thinking" },
              { id: "b", text: "Think" },
              { id: "c", text: "Had Been Thinking" },
              { id: "d", text: "Were Thinking" },
              { id: "e", text: "Had Think" },
            ],
            correctAnswer: "a",
            explanation:
              "The sentence describes an ongoing mental action in the past. The Past Continuous tense 'was thinking' is appropriate for the singular third-person subject 'Sultan'.",
            points: 10,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "We ... FIFA 23 with our parents",
            question:
              "Look at the question below!\nWe ... FIFA 23 with our parents\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Played" },
              { id: "b", text: "Play" },
              { id: "c", text: "Were Play" },
              { id: "d", text: "Were Playing" },
              { id: "e", text: "Was Playing" },
            ],
            correctAnswer: "d",
            explanation:
              "This sentence is meant to describe an action that was in progress at a certain time in the past. The correct Past Continuous form for the subject 'We' is 'were playing'.",
            points: 10,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "They ... the letter before 2025 came",
            question:
              "Look at the question below!\nThey ... the letter before 2025 came\n\nThe words to fill in the blank below is ...",
            options: [
              { id: "a", text: "Had Write" },
              { id: "b", text: "Wrote" },
              { id: "c", text: "Had Written" },
              { id: "d", text: "Had Wrote" },
              { id: "e", text: "Write" },
            ],
            correctAnswer: "c",
            explanation:
              "The keyword 'before 2025 came' establishes a sequence of two past actions. The action that happened first (writing the letter) must use the Past Perfect tense (had + past participle), which is 'had written'.",
            points: 10,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "I ... Sultan six years ago",
            question:
              "Look at the question below!\nI ... Sultan six years ago\n\nThe words to fill in the blank below is ...",
            options: [
              { id: "a", text: "Saw" },
              { id: "b", text: "See" },
              { id: "c", text: "Seen" },
              { id: "d", text: "Had Saw" },
              { id: "e", text: "Had Seen" },
            ],
            correctAnswer: "e",
            explanation:
              "According to the quiz's answer key, 'Had Seen' (Past Perfect) is the correct choice. This implies that the action of seeing Sultan happened before another unmentioned past event, even though 'six years ago' typically pairs with the Past Simple.",
            points: 10,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "From 6 AM, Andrew ... towards the farm",
            question:
              "Look at the question below!\nFrom 6 AM, Andrew ... towards the farm\n\nThe words to fill in the blank below is ...",
            options: [
              { id: "a", text: "Was Walking" },
              { id: "b", text: "Walks" },
              { id: "c", text: "Is Walking" },
              { id: "d", text: "Walk" },
              { id: "e", text: "Had Been Walking" },
            ],
            correctAnswer: "a",
            explanation:
              "The phrase 'From 6 AM' emphasizes an action that was in progress during a specific time in the past. Therefore, the Past Continuous tense 'was walking' is the correct fit.",
            points: 10,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: "Daffa ... all the cookies",
            question:
              "Look at the question below!\nDaffa ... all the cookies\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Had been eating" },
              { id: "b", text: "Had Ate" },
              { id: "c", text: "Ate" },
              { id: "d", text: "Eats" },
              { id: "e", text: "Eat" },
            ],
            correctAnswer: "c",
            explanation:
              "The sentence simply describes a completed action in the past without emphasizing its continuous nature or its relation to another past event. The Past Simple tense 'ate' is the most appropriate choice.",
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
        name: "Past Simple, Perfect, & Continuous",
        description:
          "Learn the three past tenses — Simple, Perfect, and Continuous — including formulas, usage differences, and verb exceptions.",
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

seedPastTenses();
