const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedNounsPronouns = async () => {
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

    const targetId = "nouns-pronouns";

    const stepsData = [
      {
        title: "Materi: Nouns",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian noun, klasifikasi berdasarkan wujud dan jumlah, serta contoh-contohnya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Nouns</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Nouns</strong> adalah kata benda. Digunakan pada subjek dan objek dalam kalimat.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">A. Wujud (Form)</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">1. Abstract</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Tidak berwujud dan tidak dapat dirasakan secara langsung oleh indra. <strong class="text-red-500">Bersifat konseptual.</strong></p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg">
                    <p class="text-body-l"><strong>Contoh:</strong> <em>Chance, feelings, idea, philosophy</em></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">2. Concrete (Berwujud)</h4>
                  <div class="space-y-4">
                    <div>
                      <p class="text-body-l text-Grayscale-700 mb-2"><strong>a. Common</strong> — benda umum di sekitar</p>
                      <div class="bg-Grayscale-50 p-3 rounded-lg">
                        <p class="text-body-l"><strong>Contoh:</strong> <em>Ball, cap, bottle, pen</em></p>
                      </div>
                    </div>
                    <div>
                      <p class="text-body-l text-Grayscale-700 mb-2"><strong>b. Proper</strong> — entitas khusus seperti nama orang, kota, negara, lembaga, merek, dll. <strong class="text-red-500">Selalu diawali huruf kapital.</strong></p>
                      <div class="bg-Grayscale-50 p-3 rounded-lg">
                        <p class="text-body-l"><strong>Contoh:</strong> <em>Indonesia, Yamal, LetStudy, Moscow</em></p>
                      </div>
                    </div>
                    <div>
                      <p class="text-body-l text-Grayscale-700 mb-2"><strong>c. Material</strong> — benda dari alam</p>
                      <div class="bg-Grayscale-50 p-3 rounded-lg">
                        <p class="text-body-l"><strong>Contoh:</strong> <em>Soil, sand, water, mineral</em></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">3. Collective</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Terdiri dari banyak noun tetapi bersifat singular.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg">
                    <p class="text-body-l"><strong>Contoh:</strong> <em>Partnership, group, corporation, society</em></p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">B. Jumlah (Number)</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">1. Countable Noun (bisa dihitung)</h4>
                  <div class="space-y-4">
                    <div>
                      <p class="text-body-l text-Grayscale-700 mb-2"><strong>a. Singular (satu)</strong></p>
                      <div class="bg-Grayscale-50 p-3 rounded-lg">
                        <p class="text-body-l"><strong>Contoh:</strong> <em>Watch, hero, book, camera</em></p>
                      </div>
                    </div>
                    <div>
                      <p class="text-body-l text-Grayscale-700 mb-2"><strong>b. Regular Plural</strong> — lebih dari satu. Menambahkan akhiran <strong>s</strong>, atau <strong>es</strong> pada kata berakhiran s, ss, sh, ch*, x, z, dan o* (*terdapat pengecualian).</p>
                      <div class="bg-Grayscale-50 p-3 rounded-lg">
                        <p class="text-body-l"><strong>Contoh:</strong> <em>Watches, heroes, books, cameras</em></p>
                      </div>
                    </div>
                    <div>
                      <p class="text-body-l text-Grayscale-700 mb-2"><strong>c. Irregular Plural</strong> — tidak terikat aturan regular plural dan memiliki ciri khas di setiap kata pluralnya.</p>
                      <div class="bg-Grayscale-50 p-3 rounded-lg">
                        <p class="text-body-l"><strong>Contoh:</strong> <em>People : person, men : man, feet : foot, mice : mouse</em></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">2. Uncountable Noun</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Tidak bisa dihitung karena abstrak atau terlalu kecil, sehingga tidak bisa diawali a/an dan diakhiri s/es untuk plural.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-4">
                    <p class="text-body-l"><strong>Contoh:</strong> <em>Water, sand, money, rice</em></p>
                  </div>
                  <div class="bg-Primary-50 p-4 rounded-lg border border-Primary-200">
                    <p class="text-body-l text-Grayscale-700 mb-2">Untuk menyatakan jumlah dari <strong class="text-red-500">uncountable noun</strong> adalah diawali <strong class="text-red-500">measure word</strong> (kata untuk mengukur).</p>
                    <ul class="text-body-l space-y-2 mt-2">
                      <li>• Dua gelas air → <em class="text-red-500">Two glasses of water</em></li>
                      <li>• Sejumlah besar uang → <em class="text-red-500">A large amount of money</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Pronouns",
        type: "reading",
        status: "locked",
        description:
          "Pelajari jenis-jenis pronoun: subject, object, possessive adjective, possessive pronoun, dan reflexive.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Pronouns</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-6" style="text-align: justify;">
                <strong>Pronouns</strong> adalah kata ganti yang menggantikan kata benda atau frasa kata benda.
              </p>

              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Subject</th>
                      <th class="p-4">Object</th>
                      <th class="p-4">Possessive Adjective</th>
                      <th class="p-4">Absolute Possessive Pronoun</th>
                      <th class="p-4">Reflexive</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700">
                    <tr class="border-b border-Grayscale-100"><td class="p-3">I</td><td class="p-3">Me</td><td class="p-3">My</td><td class="p-3">Mine</td><td class="p-3">Myself</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">You</td><td class="p-3">You</td><td class="p-3">Your</td><td class="p-3">Yours</td><td class="p-3">Yourself / Yourselves</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">We</td><td class="p-3">Us</td><td class="p-3">Our</td><td class="p-3">Ours</td><td class="p-3">Ourselves</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">They</td><td class="p-3">Them</td><td class="p-3">Their</td><td class="p-3">Theirs</td><td class="p-3">Themselves</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">She</td><td class="p-3">Her</td><td class="p-3">Her</td><td class="p-3">Hers</td><td class="p-3">Herself</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">He</td><td class="p-3">Him</td><td class="p-3">His</td><td class="p-3">His</td><td class="p-3">Himself</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">It</td><td class="p-3">It</td><td class="p-3">Its</td><td class="p-3"></td><td class="p-3">Itself</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">D. Reflexive Pronoun</h3>
              <p class="text-body-l text-Grayscale-700 mb-6" style="text-align: justify;">
                <strong class="text-red-500">Kata ganti</strong> yang merujuk pada subjek atau objek yang sama.
              </p>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l">1. As Object</h4>
                  <div class="space-y-3 text-body-l">
                    <p class="text-Grayscale-600">Dia memperlakukan dirinya dengan baik</p>
                    <p class="italic text-red-500">She treat <strong>herself</strong> well <span class="text-Grayscale-500">(herself merujuk pada she)</span></p>
                    <p class="text-Grayscale-600 mt-3">Kamu harus menjadi dirimu sendiri</p>
                    <p class="italic text-red-500">You should be <strong>yourself</strong></p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l">2. To Say "Alone" (menggantikan alone)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3">By + reflexive</p>
                  <div class="space-y-3 text-body-l">
                    <p class="text-Grayscale-600">Aku selalu pergi ke sana sendirian</p>
                    <p class="italic text-red-500">I always go there <strong>by myself</strong></p>
                    <p class="text-Grayscale-600 mt-3">Mengerjakan tugasmu sendiri lebih baik daripada dibantu</p>
                    <p class="italic text-red-500">Do a task <strong>by yourself</strong> is better than getting assistance</p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l">3. Emphasize a Subject (penekanan subjek)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Penekanan bertujuan untuk menunjukkan subjek benar-benar melakukan sesuatu.</p>
                  <div class="space-y-3 text-body-l">
                    <p class="text-Grayscale-600">Dia sendiri membuat kerajinan ini</p>
                    <p class="italic"><span class="text-red-500">He <strong>himself</strong></span> creates this handicraft</p>
                    <p class="text-Grayscale-600 mt-3">Mereka sendiri telah menciptakan mesin ini</p>
                    <p class="italic"><span class="text-red-500">They <strong>themselves</strong></span> invented this machine</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Nouns & Pronouns Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/MnnZpRO0J4U",
        description:
          "Penjelasan lengkap tentang nouns dan pronouns dalam bahasa Inggris.",
      },
      {
        title: "Video: Nouns & Pronouns Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/0JqEhN6-37k",
        description:
          "Latihan soal dan pembahasan mendalam mengenai nouns dan pronouns.",
      },
      {
        title: "Quiz: Nouns & Pronouns",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "He teaches seriously.",
            question:
              "Identify the noun in the following sentence: 'He teaches seriously.'",
            options: [
              { id: "a", text: "teaches" },
              { id: "b", text: "seriously" },
              { id: "c", text: "He" },
              { id: "d", text: "None of the words" },
              { id: "e", text: "All of the words" },
            ],
            correctAnswer: "d",
            explanation:
              "In this sentence, 'teaches' is a verb, 'seriously' is an adverb, and 'He' is a pronoun — not a noun. There is no noun in this sentence, making 'None of the words' the correct answer.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: "A leopard doesn't change its spots.",
            question:
              "Identify the noun in the following sentence: 'A leopard doesn't change its spots.'",
            options: [
              { id: "a", text: "its" },
              { id: "b", text: "a" },
              { id: "c", text: "doesn't" },
              { id: "d", text: "change" },
              { id: "e", text: "leopard" },
            ],
            correctAnswer: "e",
            explanation:
              "'Leopard' is the noun in this sentence — it is a common noun referring to a specific animal. 'Its' is a possessive pronoun, 'a' is an article, 'doesn't' is a verb auxiliary, and 'change' is a verb.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "Yours must be better than ___",
            question:
              "Choose the correct pronoun to fill the blank: 'Yours must be better than ___'",
            options: [
              { id: "a", text: "them" },
              { id: "b", text: "I" },
              { id: "c", text: "my" },
              { id: "d", text: "She" },
              { id: "e", text: "mine" },
            ],
            correctAnswer: "e",
            explanation:
              "'Mine' is the correct possessive pronoun here. The sentence compares 'yours' (possessive pronoun) with another possessive pronoun — 'mine' — meaning 'my [thing].' Using 'my' would be incorrect as it is a possessive adjective that requires a noun after it.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "None of the team could brainstorm ___ fresh idea.",
            question:
              "Fill the blank with the correct pronoun: 'None of the team could brainstorm ___ fresh idea.'",
            options: [
              { id: "a", text: "its" },
              { id: "b", text: "our" },
              { id: "c", text: "their" },
              { id: "d", text: "his" },
              { id: "e", text: "her" },
            ],
            correctAnswer: "a",
            explanation:
              "'Its' is correct because 'team' is a collective noun treated as a singular entity in this context. When referring to a team as a whole unit, the possessive pronoun 'its' is used rather than 'their' (which would treat it as plural individuals).",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "Several clubs offered ___ best benefits.",
            question:
              "Choose the correct pronoun to fill the blank: 'Several clubs offered ___ best benefits.'",
            options: [
              { id: "a", text: "its" },
              { id: "b", text: "our" },
              { id: "c", text: "their" },
              { id: "d", text: "they" },
              { id: "e", text: "his" },
            ],
            correctAnswer: "c",
            explanation:
              "'Their' is correct because 'several clubs' is a plural noun, requiring the plural possessive adjective 'their.' 'Its' would be used for a single club, and 'they' is a subject pronoun, not a possessive adjective.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "The membership is not ___ anymore.",
            question:
              "Fill the blank with the correct pronoun: 'The membership is not ___ anymore.'",
            options: [
              { id: "a", text: "you" },
              { id: "b", text: "your" },
              { id: "c", text: "you're" },
              { id: "d", text: "yourself" },
              { id: "e", text: "yours" },
            ],
            correctAnswer: "e",
            explanation:
              "'Yours' is the correct possessive pronoun here. The sentence needs a standalone possessive pronoun (not followed by a noun), meaning 'the membership is not yours (your membership) anymore.' 'Your' is a possessive adjective that must precede a noun.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "Right now I'm in Turkey.",
            question:
              "Identify the type of pronoun underlined in the following sentence: 'Right now I'm in Turkey.' (The pronoun is 'I')",
            options: [
              { id: "a", text: "Reflexive" },
              { id: "b", text: "Subject" },
              { id: "c", text: "Possessive pronoun" },
              { id: "d", text: "Object" },
              { id: "e", text: "Possessive adjective" },
            ],
            correctAnswer: "b",
            explanation:
              "'I' is a subject pronoun — it is performing the action of the verb 'am' (I'm). Subject pronouns include I, you, he, she, it, we, and they. It is not a reflexive (myself), possessive (mine), or object pronoun (me).",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: "Dan and Amy permit anyone to visit ___ new house.",
            question:
              "Choose the correct pronoun to fill the blank: 'Dan and Amy permit anyone to visit ___ new house.'",
            options: [
              { id: "a", text: "her" },
              { id: "b", text: "its" },
              { id: "c", text: "their" },
              { id: "d", text: "your" },
              { id: "e", text: "his" },
            ],
            correctAnswer: "c",
            explanation:
              "'Their' is correct because the subject 'Dan and Amy' is a plural compound noun (two people), requiring the plural possessive adjective 'their.' Using 'his' or 'her' would only refer to one person.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "I don't want to act like a clique.",
            question:
              "Identify the type of noun in the following sentence: 'I don't want to act like a clique.'",
            options: [
              { id: "a", text: "Abstract noun" },
              { id: "b", text: "Collective noun" },
              { id: "c", text: "Concrete noun" },
              { id: "d", text: "Proper noun" },
              { id: "e", text: "Common noun" },
            ],
            correctAnswer: "b",
            explanation:
              "'Clique' is a collective noun — it refers to a group of people who associate closely together. Collective nouns name a collection or group of individuals as a single unit, such as team, crew, flock, or clique.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Which of the following sentences contains a proper noun?",
            options: [
              { id: "a", text: "All including vista is waiting for me." },
              { id: "b", text: "I have no idea what's going on right now." },
              { id: "c", text: "All roads lead to Rome." },
              { id: "d", text: "I'd rather take a train ride." },
              { id: "e", text: "Family is number one." },
            ],
            correctAnswer: "c",
            explanation:
              "'Rome' in 'All roads lead to Rome' is a proper noun — it is the specific name of a city and is capitalized. Proper nouns refer to unique, specific people, places, or things. None of the other sentences contain a specifically named entity.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: "Choose from the following words.",
            question: "Which of the following is an irregular plural noun?",
            options: [
              { id: "a", text: "Sand" },
              { id: "b", text: "Tuna" },
              { id: "c", text: "Chair" },
              { id: "d", text: "Quotient" },
              { id: "e", text: "Cables" },
            ],
            correctAnswer: "b",
            explanation:
              "'Tuna' is an irregular plural noun — its plural form is the same as its singular form ('one tuna, two tuna'). This is called a zero plural. 'Chairs' and 'cables' follow regular plural rules (adding -s), while 'sand' and 'quotient' are not plural forms.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: "You have lifting weight on your veranda.",
            question:
              "What is the pronoun in the following sentence: 'You have lifting weight on your veranda.'",
            options: [
              { id: "a", text: "have" },
              { id: "b", text: "on" },
              { id: "c", text: "your" },
              { id: "d", text: "veranda" },
              { id: "e", text: "lifting" },
            ],
            correctAnswer: "c",
            explanation:
              "'Your' is a possessive adjective (a type of pronoun) modifying the noun 'veranda.' While 'You' is also a pronoun in this sentence, 'your' is the answer expected here as it is a possessive form. 'Have' is a verb, 'on' is a preposition, 'veranda' is a noun, and 'lifting' is a gerund/verb form.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: "Choose from the following words.",
            question: "Which word is a common noun?",
            options: [
              { id: "a", text: "water" },
              { id: "b", text: "oxygen" },
              { id: "c", text: "philosophy" },
              { id: "d", text: "Kathmandu" },
              { id: "e", text: "corporation" },
            ],
            correctAnswer: "b",
            explanation:
              "According to the answer key, 'oxygen' is the correct answer as a common noun — it is a general, uncapitalized noun referring to a substance. Note: 'Kathmandu' is a proper noun (a specific city), while 'water,' 'philosophy,' and 'corporation' are also common nouns, but 'oxygen' is the designated correct answer for this question.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: "I myself established this business.",
            question:
              "Identify the type of reflexive pronoun used in: 'I myself established this business.'",
            options: [
              { id: "a", text: "As subject" },
              { id: "b", text: "To say 'alone'" },
              { id: "c", text: "As object" },
              { id: "d", text: "As subject complement" },
              { id: "e", text: "To emphasize a subject" },
            ],
            correctAnswer: "e",
            explanation:
              "In 'I myself established this business,' the reflexive pronoun 'myself' is used as an emphatic pronoun to emphasize the subject 'I' — stressing that the speaker personally did it, with no one else's help. This is called an emphatic or intensive use of a reflexive pronoun, not a true reflexive (object) use.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: "Choose from the following words.",
            question: "Which of the following is a possessive adjective?",
            options: [
              { id: "a", text: "Whom" },
              { id: "b", text: "Their" },
              { id: "c", text: "You" },
              { id: "d", text: "is" },
              { id: "e", text: "us" },
            ],
            correctAnswer: "b",
            explanation:
              "'Their' is a possessive adjective — it modifies a noun to show possession (e.g., 'their house'). 'Whom' is a relative/interrogative pronoun, 'You' is a subject/object pronoun, 'is' is a verb, and 'us' is an object pronoun.",
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
        name: "Nouns & Pronouns",
        description:
          "Learn about nouns and pronouns — their types, forms, and how to use them correctly in sentences.",
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

seedNounsPronouns();
