const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedTransitiveIntransitive = async () => {
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

    const targetId = "transitive-intransitive-verb";

    const stepsData = [
      {
        title: "Materi: Transitive & Intransitive Verb",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian transitive dan intransitive verb, rumus, serta cara membedakannya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Transitive Verb (Kata Kerja Transitif)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Transitive verb</strong> merupakan kata kerja yang <strong>memerlukan objek</strong> agar kalimatnya bermakna utuh. Kalimat dengan transitive verb (atau seringkali disebut kalimat transitif) dapat diubah dari bentuk kalimat pasif ke aktif maupun sebaliknya.
              </p>
              <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                <p class="text-body-l font-bold mb-2">Contoh kalimat:</p>
                <ul class="text-body-l space-y-2">
                  <li>1. I <strong class="text-red-500">watched</strong> a horror movie.</li>
                  <li>2. They <strong class="text-red-500">baked</strong> a blueberry pie.</li>
                </ul>
              </div>
              <div class="bg-Primary-100 p-6 rounded-xl border-2 border-Primary-300 text-center mb-6">
                <p class="text-body-l font-bold text-Primary-900">NOUN (SUBJECT) + TRANSITIVE VERB + OBJECT.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Intransitive Verb (Kata Kerja Intransitif)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Intransitive verb</strong> merupakan kata kerja yang <strong>tidak memerlukan objek</strong>. Biasanya, kalimat intransitif menggunakan keterangan dan/atau pelengkap sebagai pengganti objek.
              </p>
              <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                <p class="text-body-l font-bold mb-2">Contoh kalimat:</p>
                <ul class="text-body-l space-y-2">
                  <li>1. I <strong class="text-red-500">am</strong> a professional gymnast.</li>
                  <li>2. They <strong class="text-red-500">study</strong> together every afternoon.</li>
                </ul>
              </div>
              <div class="bg-Primary-100 p-6 rounded-xl border-2 border-Primary-300 text-center mb-6">
                <p class="text-body-l font-bold text-Primary-900">NOUN (SUBJECT) + INTRANSITIVE VERB + ADVERB/COMPLEMENT.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Cara Membedakan Transitive dan Intransitive</h3>
              <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Gunakan rumus <strong class="text-red-500">EO-nya CS-an nih</strong> untuk membedakan:</p>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">EO — Existence of Objects (Adakah Objeknya?)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Salah satu cara untuk membedakan apakah suatu kata dalam kalimat merupakan objek atau lainnya adalah dengan <strong class="text-red-500">mengganti kata tersebut dengan kata tanya dan memastikan apakah jawabannya ada dalam kalimat tersebut</strong>. Namun, ada pengecualian pada kalimat yang menggunakan "be" sebagai verb.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1"><strong>Contoh:</strong> She slept soundly → Slept what? Tidak ada objek.</p>
                    <p class="text-body-l text-Grayscale-600">Oleh karena itu, kalimat tersebut adalah kalimat <strong>INTRANSITIF</strong>.</p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">CS — Complexity of the Sentence (Apakah Kalimat Tersebut Kompleks?)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Mayoritas kalimat intransitif yang hanya menggunakan predikat <strong>lebih singkat</strong> dibandingkan kalimat intransitif yang lebih mendetail.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Standalone (Dapatkah Ia Berdiri Sendiri?)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;"><strong>INTRANSITIVE</strong> sentence dapat berdiri <strong class="text-red-500">tanpa objek</strong> (hanya subjek dan predikat), sementara <strong>TRANSITIVE</strong> sentence hanya dapat memiliki makna <strong class="text-red-500">dengan objek</strong>.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Pola Kalimat</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Tipe</th>
                      <th class="p-4">Pola</th>
                      <th class="p-4">Contoh</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700">
                    <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">Transitive</td><td class="p-3">S + V + O</td><td class="p-3 italic">I watched a movie.</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">Transitive</td><td class="p-3">S + V + O + Adverb</td><td class="p-3 italic">I studied semantics in high school.</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">Intransitive</td><td class="p-3">S + V + Complement</td><td class="p-3 italic">That lady is my cousin's mother.</td></tr>
                    <tr><td class="p-3 font-bold">Intransitive</td><td class="p-3">S + V + Adverb</td><td class="p-3 italic">They study together every afternoon.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Transitive & Intransitive Verb Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/sphc9nj5I0Y",
        description:
          "Penjelasan lengkap tentang transitive dan intransitive verb dalam bahasa Inggris.",
      },
      {
        title: "Video: Transitive & Intransitive Verb Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/fvyTbQoBWR4",
        description:
          "Latihan soal dan pembahasan mendalam mengenai transitive dan intransitive verb.",
      },
      {
        title: "Quiz: Transitive & Intransitive Verb",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "I ran with my dog this morning.",
            question:
              'Determine whether the sentence below uses a transitive or an intransitive verb.\n\n"I ran with my dog this morning."',
            options: [
              { id: "a", text: "Transitive" },
              { id: "b", text: "Intransitive" },
            ],
            correctAnswer: "b",
            explanation:
              "The verb 'ran' in this context does not take a direct object. 'With my dog' is a prepositional phrase acting as an adverb, and 'this morning' is an adverbial phrase of time.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Choose one of the following sentences that uses a transitive verb.",
            options: [
              { id: "a", text: "I tripped and fell yesterday." },
              { id: "b", text: "She wakes up." },
              { id: "c", text: "I like you." },
              { id: "d", text: "I'm in love with you." },
              { id: "e", text: "Someone went missing at that park." },
            ],
            correctAnswer: "c",
            explanation:
              "In the sentence 'I like you', the verb 'like' takes the direct object 'you'. The other sentences use intransitive verbs or verbs followed by prepositional phrases functioning as complements or adverbials.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Choose one of the following sentences that uses an intransitive verb.",
            options: [
              { id: "a", text: "He wrote a novel." },
              { id: "b", text: "The thief stole my money!" },
              { id: "c", text: "She bought a new car." },
              { id: "d", text: "She is a fan of that group." },
              { id: "e", text: "I washed my clothes." },
            ],
            correctAnswer: "d",
            explanation:
              "The sentence 'She is a fan of that group' uses the linking verb 'is', which connects the subject to a subject complement ('a fan...'), rather than taking a direct object. Linking verbs are considered intransitive. Options a, b, c, and e all have direct objects.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "That lady is my cousin's mother.",
            question:
              'Determine the pattern of the following sentence.\n\n"That lady is my cousin\'s mother."',
            options: [
              { id: "a", text: "Subject - Predicate - Complement" },
              { id: "b", text: "Subject - Predicate - Adverb of place" },
              { id: "c", text: "Subject - Predicate - Object" },
              { id: "d", text: "Subject - Predicate - Subject" },
              { id: "e", text: "Subject - Verb - Object" },
            ],
            correctAnswer: "a",
            explanation:
              "'That lady' is the Subject, 'is' is the Predicate (a linking verb), and 'my cousin's mother' is the Complement (specifically, a subject complement or predicate nominative renaming the subject).",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "This bank was robbed last year.",
            question:
              'Determine the reason the author of the following sentence used an intransitive verb.\n\n"This bank was robbed last year."',
            options: [
              { id: "a", text: "To omit the adverb" },
              { id: "b", text: "To omit the object" },
              { id: "c", text: "To omit the subject" },
              { id: "d", text: "To omit the predicate" },
              { id: "e", text: "To omit the complement" },
            ],
            correctAnswer: "b",
            explanation:
              "This sentence is in the passive voice. The verb 'rob' is typically transitive (e.g., 'Someone robbed the bank'). When transformed into the passive ('The bank was robbed'), the original object ('the bank') becomes the subject, and the sentence no longer takes a direct object after the verb. The author used this form to omit the object (and the doer of the action).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "She ate a bowl of soup.",
            question:
              'Determine the reason the author of the following sentence used a transitive verb.\n\n"She ate a bowl of soup."',
            options: [
              { id: "a", text: "To explain the adverb" },
              { id: "b", text: "To explain the subject" },
              { id: "c", text: "To explain the predicate" },
              { id: "d", text: "To explain the complement" },
              { id: "e", text: "To explain the object" },
            ],
            correctAnswer: "e",
            explanation:
              "A transitive verb transfers action from the subject to an object. By using the transitive verb 'ate' followed by the direct object 'a bowl of soup', the author explicitly states what was eaten, thereby providing information about the object of the action.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "I studied semantics in high school.",
            question:
              'Determine the pattern of the following sentence.\n\n"I studied semantics in high school."',
            options: [
              {
                id: "a",
                text: "Subject - Predicate - Object - Adverb of place",
              },
              { id: "b", text: "Subject - Predicate - Adverb of manner" },
              {
                id: "c",
                text: "Subject - Predicate - Complement - Adverb of time",
              },
              { id: "d", text: "Subject - Predicate - Object" },
            ],
            correctAnswer: "a",
            explanation:
              "'I' is the Subject, 'studied' is the Predicate (verb), 'semantics' is the direct Object, and 'in high school' functions as an Adverb of place (or setting).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Determine which of the following sentences is in active voice with a transitive verb.",
            options: [
              { id: "a", text: "I ran into some problems with this task." },
              { id: "b", text: "They brought a cat home." },
              { id: "c", text: "That shirt is currently being ironed." },
              { id: "d", text: "Did you know which one?" },
              { id: "e", text: "I overslept." },
            ],
            correctAnswer: "b",
            explanation:
              "The sentence 'They brought a cat home' is active ('They' perform the action) and uses the transitive verb 'brought', which takes the direct object 'a cat'. Option (a) uses a phrasal verb. Option (c) is passive. Option (e) is intransitive.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Determine which of the following sentences is in active voice with an intransitive verb.",
            options: [
              { id: "a", text: "She spilled her drink." },
              { id: "b", text: "I'm taking extra credits this semester." },
              { id: "c", text: "I'm not giving away my money." },
              { id: "d", text: "The lions escaped from the zoo." },
              { id: "e", text: "Were they being hurt by her?" },
            ],
            correctAnswer: "d",
            explanation:
              "The sentence 'The lions escaped from the zoo' is active, and the verb 'escaped' does not take a direct object ('from the zoo' is a prepositional phrase). Therefore, it is an active intransitive construction.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              'Determine whether the verbs in the following sentences are transitive or intransitive:\n\n1. "This is my property!"\n2. "You\'re having fun, aren\'t you?"\n3. "I\'m so sorry to hear that."',
            question:
              "What is the correct classification for all three sentences above?",
            options: [
              { id: "a", text: "All Transitive" },
              { id: "b", text: "All Intransitive" },
              { id: "c", text: "Transitive - Intransitive - Intransitive" },
              { id: "d", text: "Intransitive - Transitive - Intransitive" },
              { id: "e", text: "Intransitive - Intransitive - Transitive" },
            ],
            correctAnswer: "b",
            explanation:
              "1. 'This is my property!' uses the linking verb 'is', taking a complement, not an object (intransitive). 2. 'You're having fun' — 'fun' acts as a complement describing state (intransitive). 3. 'I'm so sorry...' uses the linking verb 'am' with the adjective complement 'sorry' (intransitive).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "I organized my desk with my father because it was getting messy.",
            question:
              'Determine the transitive verb in the following sentence.\n\n"I organized my desk with my father because it was getting messy."',
            options: [
              { id: "a", text: "With" },
              { id: "b", text: "I" },
              { id: "c", text: "Organized" },
              { id: "d", text: "Was" },
              { id: "e", text: "Getting" },
            ],
            correctAnswer: "c",
            explanation:
              "The verb 'organized' transfers action to the direct object 'my desk', making it a transitive verb.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: "She carried an umbrella in the rain.",
            question:
              'Determine the object in the following transitive sentence.\n\n"She carried an umbrella in the rain."',
            options: [
              { id: "a", text: "She" },
              { id: "b", text: "Carried" },
              { id: "c", text: "An umbrella" },
              { id: "d", text: "Rain" },
              { id: "e", text: "There is no object in the sentence." },
            ],
            correctAnswer: "c",
            explanation:
              "The direct object answers the question 'what' after the transitive verb. 'She carried [what?] an umbrella.'",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Consider whether a transitive sentence can have an adverb.",
            question:
              "Determine whether or not it's possible for a transitive sentence to have an adverb.",
            options: [
              {
                id: "a",
                text: "Yes, because an adverb is necessary in every sentence.",
              },
              {
                id: "b",
                text: "Yes, because the main characteristics of a transitive sentence is the presence of object.",
              },
              {
                id: "c",
                text: "No, because a transitive sentence uses object instead of complement and/or adverb.",
              },
              {
                id: "d",
                text: "No, because an adverb is reserved for interrogative sentences.",
              },
              {
                id: "e",
                text: "Impossible to answer because it depends on the author's personal rules.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "A transitive sentence is defined by having a transitive verb and a direct object. The presence of an object does not preclude the use of an adverb to modify the verb, an adjective, or the sentence as a whole (e.g., 'He quickly ate the apple').",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: "I went on a date with him the other day.",
            question:
              'Determine the object in the following intransitive sentence.\n\n"I went on a date with him the other day."',
            options: [
              { id: "a", text: "I" },
              { id: "b", text: "Date" },
              { id: "c", text: "Him" },
              { id: "d", text: "Day" },
              { id: "e", text: "There's no object in the sentence." },
            ],
            correctAnswer: "e",
            explanation:
              "By definition, an intransitive sentence does not have a direct object receiving the action of the verb. 'On a date', 'with him', and 'the other day' are prepositional and adverbial phrases.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Consider whether a transitive sentence can be interrogative.",
            question:
              "Determine if it's possible for a transitive sentence to be an interrogative one.",
            options: [
              {
                id: "a",
                text: "Yes, as long as there is an object when turned into a positive/negative sentence.",
              },
              {
                id: "b",
                text: 'Yes, as long as the question begins with direct words like "who" instead of "how much".',
              },
              { id: "c", text: "No, because it will not have an object." },
              {
                id: "d",
                text: "No, because an interrogative sentence needs an adjective.",
              },
              {
                id: "e",
                text: "Impossible to answer because it depends on the author's personal rules.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "A sentence's transitivity is based on its verb taking an object. This fundamental structure remains regardless of whether the sentence is declarative, negative, or interrogative (e.g., 'Did you eat the apple?'). The underlying positive statement ('You ate the apple') clearly shows the transitive relationship.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.subcategory = "Parts of Speech";
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Transitive & Intransitive Verb",
        description:
          "Learn the difference between transitive verbs (requiring objects) and intransitive verbs (not requiring objects), along with sentence patterns.",
        subcategory: "Parts of Speech",
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

seedTransitiveIntransitive();
