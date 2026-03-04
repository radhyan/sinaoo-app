const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedFutureTenses = async () => {
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

    const targetId = "future-tenses";

    const stepsData = [
      {
        title: "Materi: Future Simple & Perfect Tense",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian future tense secara umum, Future Simple Tense, dan Future Perfect Tense beserta fungsinya.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Future Tense 101</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">Secara umum, Future Tense digunakan untuk <strong>menjelaskan kejadian yang hendak terjadi dan direncanakan untuk masa depan nanti</strong>. Future Tense ini memiliki 3 bentuk yaitu <strong>Future Simple Tense, Future Perfect Tense,</strong> dan <strong>Future Continuous Tense</strong>.</p>
</section>

<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Future Simple Tense</h3>
<p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Future Simple Tense berstruktur <strong class="text-Primary-500">Subjek</strong> + <strong class="text-purple-500">Will</strong>. Future Simple Tense juga dapat diubah menjadi kalimat tanya dengan struktur <strong class="text-purple-500">Will</strong> + <strong class="text-Primary-500">Subjek</strong>. Future Simple tense memiliki fungsi yaitu:</p>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Mengekspresikan prediksi terhadap kejadian di masa depan</h4>
<p class="text-body-l italic text-Grayscale-600">I <strong class="text-purple-500">will</strong> go to the toilet</p>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Mempertanyakan apa yang akan terjadi di masa depan</h4>
<p class="text-body-l italic text-Grayscale-600"><strong class="text-purple-500">Will</strong> I go to the toilet?</p>
</div>
</div>
</section>

<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Future Perfect Tense</h3>
<p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Future Perfect Tense digunakan untuk <strong>memprediksi suatu peristiwa kepada sesuatu yang belum selesai atau belum terjadi sama sekali</strong>. Strukturnya: <strong class="text-Primary-500">Subjek</strong> + <strong class="text-purple-500">Will/Shall</strong> + <strong class="text-purple-500">Have</strong> + <strong class="text-red-500">Verb 3</strong>.</p>
<div class="bg-Primary-50 p-4 rounded-lg mb-4">
<p class="text-body-l font-bold mb-2">Contoh:</p>
<ul class="text-body-l space-y-1">
<li>• I <strong class="text-purple-500">Will have</strong> <strong class="text-red-500">been</strong> there for three weeks due to agendas</li>
<li>• I <strong class="text-purple-500">Shall have</strong> <strong class="text-red-500">finished</strong> those agendas before 17th of December</li>
</ul>
</div>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Kalimat Tanya Future Perfect</h4>
<div class="bg-Primary-50 p-3 rounded-lg mb-3">
<p class="text-body-l"><strong class="text-purple-500">Will/Shall</strong> + <strong class="text-Primary-500">Subjek</strong> + <strong class="text-purple-500">Have</strong> + <strong class="text-red-500">Verb 3</strong></p>
</div>
<p class="text-body-l italic text-Grayscale-600"><strong class="text-purple-500">Will</strong> you <strong class="text-purple-500">have</strong> <strong class="text-red-500">finished</strong> your agenda before 16.00?</p>
</div>
</section>
</div>`,
      },
      {
        title: "Materi: Future Continuous Tense",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian, struktur, dan penggunaan Future Continuous Tense.",
        content: `<div class="space-y-6 text-Grayscale-900">
<section>
<h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Future Continuous Tense</h3>
<p class="text-body-l text-Grayscale-900 leading-relaxed mb-3" style="text-align: justify;">Future Continuous Tense digunakan untuk <strong>menyatakan kejadian yang sedang berlangsung pada waktu yang akan datang dengan keterangan waktu yang lebih spesifik</strong>. Strukturnya: <strong class="text-Primary-500">Subjek</strong> + <strong class="text-purple-500">Will</strong> + <strong class="text-purple-500">Be</strong> + <strong class="text-red-500">Verb 1-Ing</strong>.</p>
<div class="space-y-4">
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Membayangkan aktivitas di masa depan dengan waktu spesifik</h4>
<p class="text-body-l italic text-Grayscale-600"><span class="text-purple-500">Next Year</span>, I <strong class="text-purple-500">will be</strong> <strong class="text-red-500">departing</strong> to Indonesia</p>
</div>
</div>
</section>

<section>
<div class="bg-white p-4 rounded-xl border border-Grayscale-200">
<h4 class="font-bold text-Primary-700 mb-2 text-body-l underline">Kalimat Tanya Future Continuous</h4>
<div class="bg-Primary-50 p-3 rounded-lg mb-3">
<p class="text-body-l"><strong class="text-purple-500">Will</strong> + <strong class="text-Primary-500">Subjek</strong> + <strong class="text-purple-500">be</strong> + <strong class="text-red-500">Verb 1-ing</strong></p>
</div>
<p class="text-body-l italic text-Grayscale-600"><strong class="text-purple-500">Will</strong> you <strong class="text-purple-500">be</strong> <strong class="text-red-500">joining</strong> the concert of Dewa at 19th of January?</p>
</div>
</section>
</div>`,
      },
      {
        title: "Video: Future Tenses Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/qpZW6ZzNAeA",
        description:
          "Penjelasan lengkap tentang future simple, perfect, dan continuous tense.",
      },
      {
        title: "Video: Future Tenses Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/U3dnNsdEhdI",
        description:
          "Latihan soal dan pembahasan mendalam mengenai future tenses.",
      },
      {
        title: "Quiz: Future Tenses",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "He ... his friends to his house for next week sleepover",
            question:
              "Look at the question below!\nHe ... his friends to his house for next week sleepover\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Invites" },
              { id: "b", text: "Will Invite" },
              { id: "c", text: "Invited" },
              { id: "d", text: "Inviting" },
              { id: "e", text: "Will be inviting" },
            ],
            correctAnswer: "b",
            explanation:
              "The phrase 'next week' indicates a future event. Therefore, the Future Simple tense ('will' + base verb) is required. The correct form is 'will invite'.",
            points: 10,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Andrew and I ... the dishes on the table for tonight's dinner",
            question:
              "Look at the question below!\nAndrew and I ... the dishes on the table for tonight's dinner\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Will prepare" },
              { id: "b", text: "Prepared" },
              { id: "c", text: "Was Preparing" },
              { id: "d", text: "Shall Prepare" },
              { id: "e", text: "Prepares" },
            ],
            correctAnswer: "a",
            explanation:
              "The time marker 'tonight's' indicates a plan or action that will happen later in the future. The Future Simple tense 'will prepare' accurately expresses this intention.",
            points: 10,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "... my crush give back her instagram to me?",
            question:
              "Look at the question below!\n... my crush give back her instagram to me?\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Would" },
              { id: "b", text: "Can" },
              { id: "c", text: "Will" },
              { id: "d", text: "Could" },
              { id: "e", text: "Is" },
            ],
            correctAnswer: "c",
            explanation:
              "To form an interrogative sentence (question) asking about a future prediction, possibility, or action, the auxiliary verb 'Will' is used at the beginning of the sentence.",
            points: 10,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "I ... my Father regarding yesterday's accident",
            question:
              "Look at the question below!\nI ... my Father regarding yesterday's accident\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Will Told" },
              { id: "b", text: "Would Told" },
              { id: "c", text: "Will Tell" },
              { id: "d", text: "Tells" },
              { id: "e", text: "Will Telling" },
            ],
            correctAnswer: "c",
            explanation:
              "The modal auxiliary 'will' must always be followed by a bare infinitive (the base form of the verb without 'to' or any suffixes). Thus, 'will tell' is the correct grammatical structure.",
            points: 10,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "The Football Players ... with the coaches next week",
            question:
              "Look at the question below!\nThe Football Players ... with the coaches next week\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Trained" },
              { id: "b", text: "Will be Trained" },
              { id: "c", text: "Must Train" },
              { id: "d", text: "Will Train" },
              { id: "e", text: "Trains" },
            ],
            correctAnswer: "d",
            explanation:
              "The time marker 'next week' shows that the action has not happened yet. The sentence requires the active Future Simple tense, which is 'will train'.",
            points: 10,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "I Must ... before 7 am if she wants to use Whoosh",
            question:
              "Look at the question below!\nI Must ... before 7 am if she wants to use Whoosh\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Be There" },
              { id: "b", text: "Had been there" },
              { id: "c", text: "Having been there" },
              { id: "d", text: "Have been There" },
              { id: "e", text: "Had be there" },
            ],
            correctAnswer: "d",
            explanation:
              "The modal 'must' is followed by the perfect infinitive 'have been' to emphasize that the arrival needs to be already accomplished by that time ('before 7 am'). 'Have been There' expresses a completed state before a specific future deadline.",
            points: 10,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "I ... the exchange program next month",
            question:
              "Look at the question below!\nI ... the exchange program next month\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Joined" },
              { id: "b", text: "Will be Joining" },
              { id: "c", text: "Will Join" },
              { id: "d", text: "Would Join" },
              { id: "e", text: "Joining" },
            ],
            correctAnswer: "c",
            explanation:
              "The keyword 'next month' clearly establishes that the event is in the future. 'Will join' is the standard Future Simple form.",
            points: 10,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "Will she ... the wedding if you arrived at 10 pm today?",
            question:
              "Look at the question below!\nWill she ... the wedding if you arrived at 10 pm today?\n\nThe words to fill in the blank below is ...",
            options: [
              { id: "a", text: "Attends" },
              { id: "b", text: "Attending" },
              { id: "c", text: "Be attending" },
              { id: "d", text: "Had attended" },
              { id: "e", text: "Have been attending" },
            ],
            correctAnswer: "e",
            explanation:
              "'Have been attending' creates a Future Perfect Continuous structure ('Will she have been attending...'). This tense is used to project forward to a future moment ('10 pm today') and ask about an action that will have been in progress up to that point.",
            points: 10,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "I ... the exhibition in the gallery art tomorrow",
            question:
              "Look at the question below!\nI ... the exhibition in the gallery art tomorrow\n\nThe words to fill in the blank below is ...",
            options: [
              { id: "a", text: "Would exhibit" },
              { id: "b", text: "Am to Exhibit" },
              { id: "c", text: "Become Exhibit" },
              { id: "d", text: "Will exhibit" },
              { id: "e", text: "Have been exhibit" },
            ],
            correctAnswer: "d",
            explanation:
              "The time marker 'tomorrow' points directly to a future action. The Future Simple tense 'will exhibit' correctly completes the sentence.",
            points: 10,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Me and Dian will not ... in the next month english competition",
            question:
              "Look at the question below!\nMe and Dian will not ... in the next month english competition\n\nThe word to fill in the blank below is ...",
            options: [
              { id: "a", text: "Participates" },
              { id: "b", text: "Participating" },
              { id: "c", text: "Participate" },
              { id: "d", text: "Participated" },
              { id: "e", text: "Participation" },
            ],
            correctAnswer: "c",
            explanation:
              "The negative auxiliary 'will not' (won't) must be followed by the base form of the verb (bare infinitive). Therefore, 'participate' without any suffixes (-s, -ing, -ed) is the correct answer.",
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
        name: "Future Simple, Perfect, & Continuous",
        description:
          "Learn the three future tenses — Simple, Perfect, and Continuous — including formulas, usage, and interrogative forms.",
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

seedFutureTenses();
