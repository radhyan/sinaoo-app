const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedGerundInfinitive = async () => {
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

    const targetId = "gerund-infinitive";

    const stepsData = [
      {
        title: "Materi: Gerund",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian gerund, fungsi nominal dan adjectival, serta contoh penggunaannya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Gerund</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Gerund</strong> adalah verb yang memiliki fungsi noun (kata benda).
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">A. Nominal Function (fungsi kata benda)</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">1. As Subject</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Gerund sebagai <strong class="text-red-500">subjek</strong>, diikuti <strong class="text-red-500">verb</strong> atau <strong class="text-red-500">linking verb</strong> lalu subject complement.</p>
                  <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                    <p class="text-body-l font-bold mb-2">Contoh linking verb:</p>
                    <p class="text-body-l text-Grayscale-600">Am, Is, Are, Was, Were, Be, Being, Been, Appear, Become, Seem, Grow, Remain, Stay, Look, Sound, Smell, Taste, Feel, Turn, Prove, Act, Get, Keep, Go, Fall, Come, Continue, Stand, Run, Lie, End, Result, Exist, Occur, Happen, Seem, Stay, Resemble, Keep, Appear, Come, Go, Prove</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Lari adalah olahraga</p>
                    <p class="text-body-l italic"><span class="text-red-500">Running</span> is an <span class="text-red-500">exercise</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">2. As Subject After "It"</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat selalu diawali <em>it</em>, diikuti linking verb, <strong class="text-red-500">adjective</strong>, dan <strong class="text-red-500">gerund atau gerund phrase</strong>.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Menantang memperbaiki bagian ini</p>
                    <p class="text-body-l italic">It is <strong class="text-red-500">challenging</strong> <span class="text-red-500">fixing this part</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">3. As Subject Complement</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat diawali subjek, diikuti <strong class="text-red-500">linking verb</strong>, lalu <strong class="text-red-500">gerund atau gerund phrase</strong> sebagai subject complement.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Contoh kalimat:</p>
                    <p class="text-body-l italic">My job <span class="text-red-500">is</span> <span class="text-red-500">guiding tour</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">4. As Object</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat diawali subjek, diikuti <strong class="text-red-500">certain verb</strong>, lalu <strong class="text-red-500">gerund atau gerund phrase</strong> sebagai objek. Certain verbs adalah kata kerja yang hanya bisa diikuti gerund.</p>
                  <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                    <p class="text-body-l font-bold mb-2">Contoh certain verbs:</p>
                    <p class="text-body-l text-Grayscale-600">Admit, Anticipate, Appreciate, Bear, Complete, Defer, Deny, Dislike, Entail, Forget, Intend, Justify, Like, Mention, Miss, Practice, Quit, Recollect, Regret, Resist, Sanction, Stop, Tolerate, Advise, Acknowledge, Avoid, Begin, Consider, Delay, Discuss, Enjoy, Finish, Hate, Involve, Keep, Love, Mind, Postpone, Prefer, Recall, Recommend, Resent, Risk, Start, Suggest, Try</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Mereka berhenti belajar</p>
                    <p class="text-body-l italic">They <span class="text-red-500">stop</span> <span class="text-red-500">studying</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">5. As Object After Preposition</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;"><strong class="text-red-500">Gerund atau gerund phrase</strong> selalu terletak setelah <strong class="text-red-500">preposisi</strong>.</p>
                  <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                    <p class="text-body-l font-bold mb-2">Contoh preposisi:</p>
                    <p class="text-body-l text-Grayscale-600">About, Of, For, In, On, At, By, After, Before, Without, Instead of, Because of, Due to, Through, From</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Aku bosan mengikuti acara</p>
                    <p class="text-body-l italic">I'm bored <strong>of</strong> <span class="text-red-500">joining events</span></p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">B. Adjectival Function (fungsi kata sifat)</h3>
              <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Gerund sebagai <strong class="text-red-500">adjective</strong> berada sebelum <strong><em>noun</em></strong>.</p>
              <div class="bg-Grayscale-50 p-4 rounded-lg">
                <p class="text-body-l text-Grayscale-600 mb-1">Ruang tunggu</p>
                <p class="text-body-l italic"><span class="text-red-500">Waiting</span> room</p>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Infinitive",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian infinitive, fungsi nominal, adjectival, dan adverbial beserta contohnya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Infinitive</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Infinitive</strong> adalah bentuk verb 1 dasar yang selalu diawali <em>to</em>.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">A. Nominal Function</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">1. As Subject</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;"><strong class="text-red-500">Infinitive</strong> sebagai subjek, diikuti <strong class="text-red-500">verb</strong> atau <strong class="text-red-500">linking verb</strong> lalu subject complement.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Berjemur di matahari pagi membuatku sehat</p>
                    <p class="text-body-l italic"><span class="text-red-500">To sunbathe</span> to the morning sun <em>makes me healthy</em></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">2. As Subject After "It"</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat selalu diawali <em>it</em>, diikuti linking verb, <strong class="text-red-500">adjective</strong>, dan <strong class="text-red-500">infinitive</strong>.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Sangat enak untuk membuat masakanku sendiri</p>
                    <p class="text-body-l italic">It is <span class="text-red-500">very delicious</span> <span class="text-red-500">to make my own cuisine</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">3. As Subject Complement</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat diawali subjek, diikuti <strong class="text-red-500">linking verb</strong>, lalu <strong class="text-red-500">infinitive</strong> sebagai subject complement.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Hobi Carl adalah bermain catur</p>
                    <p class="text-body-l italic">Carl's hobby <span class="text-red-500">is</span> <span class="text-red-500">to play chess</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">4. As Object</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat diawali subjek, diikuti <strong class="text-red-500">certain verb</strong>, lalu <strong class="text-red-500">infinitive</strong> sebagai objek. Certain verbs adalah kata kerja yang hanya bisa diikuti infinitive.</p>
                  <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                    <p class="text-body-l font-bold mb-2">Contoh certain verbs (bisa diikuti infinitive atau noun + infinitive):</p>
                    <p class="text-body-l text-Grayscale-600">Ask*, Help*, Beg*, Mean*, Choose, Request*, Dare, Want, Desire*, Wish*, Elect, Expect*</p>
                    <p class="text-body-l text-Grayscale-500 mt-1">*Bisa berubah sesuai tense</p>
                  </div>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Aku mau pergi keluar</p>
                    <p class="text-body-l italic">I <span class="text-red-500">want</span> <span class="text-red-500">to go outside</span></p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">B. Adjectival Function</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">1. As Object Complement</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat diawali subjek, diikuti <strong class="text-red-500">certain verb</strong>, <strong class="text-red-500">objek</strong>, lalu <strong class="text-red-500">infinitive</strong> sebagai object complement.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Temanku mengajakku untuk nongkrong</p>
                    <p class="text-body-l italic">My friend <span class="text-red-500">invited</span> me <span class="text-red-500">to hangout</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">2. As Modifying of Noun</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Infinitive selalu terletak setelah certain noun. Certain nouns adalah kata benda yang mendeskripsikan infinitive.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Akurasinya dalam tembakan tiga poin di pertandingan itu menakjubkan</p>
                    <p class="text-body-l italic"><span class="text-red-500">His accuracy</span> <span class="text-red-500">to three-point shoot</span> in the match is amazing</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">C. Adverbial Function (fungsi kata keterangan)</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">1. Setelah "too" dan "enough"</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Kalimat diawali subjek, diikuti <strong class="text-red-500">adverb</strong>, lalu <strong class="text-red-500">infinitive</strong>.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Kamu terlalu sempurna untuk menjadi siswa biasa</p>
                    <p class="text-body-l italic">You are <span class="text-red-500">too perfect</span> (be) <span class="text-red-500">to be an ordinary student</span></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">2. Penjelas Kalimat (hasil peringkasan Adverbial Clause)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Contoh <strong class="text-red-500">adverbial clause</strong>:</p>
                  <ul class="text-body-l space-y-1 mb-4 text-Grayscale-700">
                    <li>• AVC of Condition: <strong>If</strong></li>
                    <li>• AVC of Reason: <strong>Because</strong></li>
                    <li>• AVC of Result: <strong>So that</strong></li>
                    <li>• AVC of Purpose: <strong>So that</strong></li>
                    <li>• AVC of That: <strong>That</strong></li>
                  </ul>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-600 mb-1">Jika aku membiarkanmu melakukan, aku akan mengetahui pengalamanmu</p>
                    <p class="text-body-l italic mb-1"><em>If</em> I let you do, I will know your experience</p>
                    <p class="text-body-l italic text-red-500"><em>To let</em> you do, I will know your experience</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Gerund & Infinitive Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/v6NmetUyDyg",
        description:
          "Penjelasan lengkap tentang gerund dan infinitive dalam bahasa Inggris.",
      },
      {
        title: "Video: Gerund & Infinitive Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/GVwPWBmWRSk",
        description:
          "Latihan soal dan pembahasan mendalam mengenai gerund dan infinitive.",
      },
      {
        title: "Quiz: Gerund & Infinitive",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "I can't bear eating sweets anymore.",
            question:
              "Identify the form used in the following sentence: 'I can't bear eating sweets anymore.'",
            options: [
              { id: "a", text: "Gerund" },
              { id: "b", text: "Infinitive" },
              { id: "c", text: "Both" },
              { id: "d", text: "Neither" },
              { id: "e", text: "Not enough information" },
            ],
            correctAnswer: "a",
            explanation:
              "'Eating' is a gerund — it is a verb form ending in -ing that functions as a noun (the object of 'bear'). The verb 'bear' is followed by a gerund, not an infinitive. 'I can't bear eating' = 'I cannot tolerate eating.'",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: "I continue drinking a cup of coffee.",
            question:
              "Which type of gerund is used in the following sentence: 'I continue drinking a cup of coffee.'",
            options: [
              { id: "a", text: "As subject" },
              { id: "b", text: "As subject after it" },
              { id: "c", text: "As subject complement" },
              { id: "d", text: "As object complement" },
              { id: "e", text: "As object" },
            ],
            correctAnswer: "e",
            explanation:
              "'Drinking' is used as the direct object of the verb 'continue.' The subject 'I' performs the action of continuing, and 'drinking' is what is being continued — functioning as the object of the verb.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "Tama seems to be excited.",
            question:
              "Identify the form used in the following sentence: 'Tama seems to be excited.'",
            options: [
              { id: "a", text: "Not enough information" },
              { id: "b", text: "Gerund" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Infinitive" },
              { id: "e", text: "Both" },
            ],
            correctAnswer: "d",
            explanation:
              "'To be excited' is an infinitive — it uses the base form 'to + verb.' The verb 'seem' is followed by an infinitive, not a gerund. The construction 'seems to be' is a standard infinitive complement.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "We always prepare ___ (learn) TOEFL weekly.",
            question:
              "Fill the blank with the correct gerund or infinitive form: 'We always prepare ___ (learn) TOEFL weekly.'",
            options: [
              { id: "a", text: "learn" },
              { id: "b", text: "to learn" },
              { id: "c", text: "learning" },
              { id: "d", text: "to learning" },
              { id: "e", text: "both" },
            ],
            correctAnswer: "b",
            explanation:
              "'Prepare' is a verb that is followed by an infinitive (to + base verb). The correct form is 'prepare to learn,' meaning to get ready for the action of learning. 'To learning' is grammatically incorrect.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "No one tolerate ___ (smoke) in this area.",
            question:
              "Choose the correct form in the blank: 'No one tolerate ___ (smoke) in this area.'",
            options: [
              { id: "a", text: "smoke" },
              { id: "b", text: "to smoke" },
              { id: "c", text: "smoking" },
              { id: "d", text: "to smoking" },
              { id: "e", text: "both" },
            ],
            correctAnswer: "c",
            explanation:
              "'Tolerate' is a verb that must be followed by a gerund (-ing form), not an infinitive. The correct phrase is 'tolerate smoking.' Other verbs that follow this pattern include avoid, enjoy, deny, and suggest.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Mr. Pearson suggested ___ (save) a little bit more money.",
            question:
              "Fill the blank with the correct gerund or infinitive form: 'Mr. Pearson suggested ___ (save) a little bit more money.'",
            options: [
              { id: "a", text: "save" },
              { id: "b", text: "to save" },
              { id: "c", text: "saving" },
              { id: "d", text: "to saving" },
              { id: "e", text: "saves" },
            ],
            correctAnswer: "c",
            explanation:
              "'Suggest' is a verb that must be followed by a gerund (-ing form). The correct phrase is 'suggested saving.' Other verbs that follow this pattern include recommend, consider, avoid, and enjoy.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "She often hesitant ___ (do) her job.",
            question:
              "Fill the blank with the correct gerund or infinitive form: 'She often hesitant ___ (do) her job.'",
            options: [
              { id: "a", text: "do" },
              { id: "b", text: "to do" },
              { id: "c", text: "doing" },
              { id: "d", text: "to doing" },
              { id: "e", text: "does" },
            ],
            correctAnswer: "b",
            explanation:
              "'Hesitant' is an adjective that is followed by an infinitive (to + base verb). The correct phrase is 'hesitant to do.' Adjectives such as hesitant, eager, willing, ready, and able are all followed by infinitives.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "He has elected ___ (lead) the class.",
            question:
              "Choose the correct form in the blank: 'He has elected ___ (lead) the class.'",
            options: [
              { id: "a", text: "leads" },
              { id: "b", text: "to leading" },
              { id: "c", text: "leading" },
              { id: "d", text: "to lead" },
              { id: "e", text: "lead" },
            ],
            correctAnswer: "d",
            explanation:
              "'Elect' is a verb followed by an infinitive when used in the pattern 'elect + object + to + verb.' The correct form is 'elected to lead,' meaning he was chosen to lead the class.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Which of the following is an example of a gerund used as an object?",
            options: [
              { id: "a", text: "I quit playing my old game." },
              { id: "b", text: "It is pleasant playing my old game." },
              { id: "c", text: "Playing is my hobby." },
              { id: "d", text: "His hobby is playing my old game too." },
              {
                id: "e",
                text: "He is still passionate of playing my old game.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "In 'I quit playing my old game,' the gerund 'playing' functions as the direct object of the verb 'quit' — it is what the subject stopped doing. In option C, 'playing' is the subject; in D, it is a subject complement; in E, it is an object of a preposition.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: "Ready to go.",
            question:
              "Identify the form used in the following sentence: 'Ready to go.'",
            options: [
              { id: "a", text: "Infinitive" },
              { id: "b", text: "Gerund" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
              { id: "e", text: "Not enough information" },
            ],
            correctAnswer: "a",
            explanation:
              "'To go' is an infinitive — it follows the adjective 'ready' in the pattern 'adjective + to + base verb.' Infinitives frequently follow adjectives like ready, able, happy, and eager to express purpose or inclination.",
            points: 6,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: "You forgot ___ (bring) your materials.",
            question:
              "Fill the blank with the correct gerund or infinitive form: 'You forgot ___ (bring) your materials.'",
            options: [
              { id: "a", text: "bring" },
              { id: "b", text: "to bring" },
              { id: "c", text: "bringing" },
              { id: "d", text: "neither" },
              { id: "e", text: "both" },
            ],
            correctAnswer: "e",
            explanation:
              "Both 'to bring' and 'bringing' are grammatically possible with 'forgot,' but with different meanings. 'Forgot to bring' means the person did not bring the materials (they failed to do it). 'Forgot bringing' means they brought the materials but can't remember doing so. Since both are valid forms, 'both' is the correct answer.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Which of the following is an example of a gerund used as the subject complement?",
            options: [
              { id: "a", text: "I quit playing my old game." },
              { id: "b", text: "It is pleasant playing my old game." },
              { id: "c", text: "Playing is my hobby." },
              { id: "d", text: "His hobby is playing my old game too." },
              {
                id: "e",
                text: "He is still passionate of playing my old game.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "In 'His hobby is playing my old game too,' the gerund 'playing' functions as a subject complement — it follows the linking verb 'is' and describes or renames the subject 'his hobby.' In option C, 'Playing' is the subject itself, not the complement.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: "She regrets ___ (keep) using this service.",
            question:
              "Choose the gerund or infinitive in the blank: 'She regrets ___ (keep) using this service.'",
            options: [
              { id: "a", text: "keep" },
              { id: "b", text: "to keep" },
              { id: "c", text: "keeping" },
              { id: "d", text: "to keeping" },
              { id: "e", text: "both" },
            ],
            correctAnswer: "e",
            explanation:
              "Both forms are possible with 'regret' but convey different meanings. 'Regrets keeping' (gerund) refers to regretting something already done — she regrets that she has been using the service. 'Regrets to keep' (infinitive) is less natural here but can indicate reluctant continuation. As both are technically valid, 'both' is the answer.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: "Lars arranges their team to do each of their part.",
            question:
              "Which type of infinitive is used in the following sentence: 'Lars arranges their team to do each of their part.'",
            options: [
              { id: "a", text: "As subject" },
              { id: "b", text: "As subject after it" },
              { id: "c", text: "As subject complement" },
              { id: "d", text: "As object complement" },
              { id: "e", text: "As object" },
            ],
            correctAnswer: "d",
            explanation:
              "In 'Lars arranges their team to do each of their part,' the infinitive 'to do' is an object complement — it completes the meaning of the object 'their team' by describing what Lars arranges them to do. The pattern is: subject + verb + object + infinitive (object complement).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Which of the following is an example of a gerund used as an object after a preposition?",
            options: [
              { id: "a", text: "I quit playing my old game." },
              { id: "b", text: "It is pleasant playing my old game." },
              { id: "c", text: "Playing is my hobby." },
              { id: "d", text: "His hobby is playing my old game too." },
              {
                id: "e",
                text: "He is still passionate of playing my old game.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "In 'He is still passionate of playing my old game,' the gerund 'playing' follows the preposition 'of,' making it a gerund used as the object of a preposition. When a gerund follows a preposition (of, about, in, at, for, etc.), it functions as the object of that preposition.",
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
        name: "Gerund & Infinitive",
        description:
          "Learn about gerunds and infinitives — verb forms that function as nouns, adjectives, and adverbs in sentences.",
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

seedGerundInfinitive();
