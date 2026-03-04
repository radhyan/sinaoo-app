const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedAdjectivesAdverbs = async () => {
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

    const targetId = "adjectives-adverbs";

    const stepsData = [
      {
        title: "Materi: Adjectives",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian adjective, jenis-jenis adjective, dan urutan descriptive adjective (DOSA ShaCOMP).",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Adjectives (Kata Sifat)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Kata sifat atau <em>adjective</em> adalah jenis kata yang digunakan untuk <strong>menjelaskan atau menerangkan sifat maupun keadaan</strong> dari suatu kata benda.
              </p>
              <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                <p class="text-body-l font-bold mb-2">Contoh kalimat dengan adjectives:</p>
                <ul class="text-body-l space-y-2">
                  <li>1. I saw a <strong class="text-red-500">small</strong>, <strong class="text-red-500">white</strong> frog the other day.</li>
                  <li>2. I don't like <strong class="text-red-500">this</strong> episode compared to the last one.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Adjectives</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Possessive Adjective</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata sifat yang menunjukkan kepemilikan suatu kata benda. Possessive adjective berbeda dengan possessive pronouns.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">My, your, his, her, their</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600"><strong class="text-red-500">My</strong> brother bought me a new scarf.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Descriptive Adjective</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata sifat yang menunjukkan sifat atau karakteristik suatu kata benda.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Small, old, red, upset, Indonesian</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">We replaced our <strong class="text-red-500">old</strong> clock with a <strong class="text-red-500">new</strong> one.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Quantitative Adjective</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata sifat yang menunjukkan kuantitas suatu kata benda.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">some, much, several, many</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">She has <strong class="text-red-500">several</strong> tasks waiting.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Interrogative Adjective</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata sifat yang menanyakan suatu kata benda.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">which, what, who</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600"><strong class="text-red-500">Who</strong> called you last night?</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Distributive Adjective</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata sifat yang membagi suatu kata benda.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">each, every, either</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600"><strong class="text-red-500">Every</strong> student in this school is given a textbook for free.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Urutan Descriptive Adjectives</h3>
              <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Descriptive adjective memiliki kaidah urutan tersendiri yang akan diikuti oleh kata benda. Gunakan rumus <strong>DOSA ShaCOMP</strong>:</p>

              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Urutan</th>
                      <th class="p-4">Kategori</th>
                      <th class="p-4">Contoh</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700">
                    <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">D</td><td class="p-3">Determiner</td><td class="p-3 italic">A, the, an</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">O</td><td class="p-3">Opinion</td><td class="p-3 italic">Beautiful, cute, disappointing</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">S</td><td class="p-3">Size</td><td class="p-3 italic">Tiny, giant, small</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">A</td><td class="p-3">Age</td><td class="p-3 italic">Old, young, recent</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">Sha</td><td class="p-3">Shape</td><td class="p-3 italic">Triangular, round, flat</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">C</td><td class="p-3">Color</td><td class="p-3 italic">Red, black, orange</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">O</td><td class="p-3">Origin</td><td class="p-3 italic">Asian, Korean, French</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">M</td><td class="p-3">Material</td><td class="p-3 italic">Wooden, plastic, silicone</td></tr>
                    <tr><td class="p-3 font-bold">P</td><td class="p-3">Purpose</td><td class="p-3 italic">Sleeping, cooking, eating</td></tr>
                  </tbody>
                </table>
              </div>

              <div class="bg-Primary-50 p-4 rounded-lg mt-4 border border-Primary-200">
                <p class="text-body-l"><strong>Contoh:</strong> <strong class="text-red-500">A cute, tiny, new, round, white, Korean, fabric keychain</strong> is sold at that store.</p>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Adverbs",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian adverb, jenis-jenis adverb: manner, time, frequency, place, dan degree.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Adverb (Kata Keterangan)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Adverb</strong> (kata keterangan) adalah kata yang menerangkan kata kerja, kata sifat, atau adverb yang lainnya, serta memodifikasi frasa, klausa, atau keseluruhan kalimat.
              </p>
              <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                <p class="text-body-l font-bold mb-2">Contoh kalimat dengan adverb:</p>
                <ul class="text-body-l space-y-2">
                  <li>1. He danced very <strong class="text-red-500">elegantly</strong>.</li>
                  <li>2. That girl is <strong class="text-red-500">often</strong> late to class.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Adverb</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Adverb of Manner</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata keterangan yang menunjukkan keterangan bagaimana sesuatu terjadi.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Beautifully, crudely, lovingly</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">My mother hugged me <strong class="text-red-500">lovingly</strong>.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Adverb of Time</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata keterangan yang menunjukkan waktu suatu kejadian.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Yesterday, last week, tomorrow</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">I had an exam <strong class="text-red-500">yesterday</strong>.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Adverb of Frequency</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata keterangan yang menunjukkan seberapa sering sesuatu terjadi.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">often, always, seldom, never</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">She <strong class="text-red-500">never</strong> backs down in any situation.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Adverb of Place</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata keterangan yang menjelaskan suatu tempat.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">in, below, above</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">I saw something <strong class="text-red-500">above</strong> the rooftop.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Adverb of Degree</h4>
                  <p class="text-body-l text-Grayscale-700 mb-3" style="text-align: justify;">Merupakan kata keterangan yang menjelaskan tingkatan kejadian.</p>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-2">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">very, really, quite</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">She isn't <strong class="text-red-500">very</strong> talkative nowadays.</p>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Adjectives & Adverbs Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/nOYHrT5lKYs",
        description:
          "Penjelasan lengkap tentang adjectives dan adverbs dalam bahasa Inggris.",
      },
      {
        title: "Video: Adjectives & Adverbs Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/0sTRap3cfwI",
        description:
          "Latihan soal dan pembahasan mendalam mengenai adjectives dan adverbs.",
      },
      {
        title: "Quiz: Adjectives & Adverbs",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "A: ___ did you find this cat?\nB: I found her at that one alleyway near our school. Isn't she adorable?",
            question:
              "Fill in the blank with the correct question word:\nA: '___ did you find this cat?'\nB: 'I found her at that one alleyway near our school.'",
            options: [
              { id: "a", text: "Who" },
              { id: "b", text: "Where" },
              { id: "c", text: "What" },
              { id: "d", text: "When" },
              { id: "e", text: "How much" },
            ],
            correctAnswer: "b",
            explanation:
              "'Where' is the correct question word because the answer refers to a place — 'at that one alleyway near our school.' 'Where' is used to ask about location.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: "Choose from the following options.",
            question:
              "Which of the following is NOT considered a descriptive adjective?",
            options: [
              { id: "a", text: "Purple" },
              { id: "b", text: "Circular" },
              { id: "c", text: "Much" },
              { id: "d", text: "Disappointed" },
              { id: "e", text: "Balinese" },
            ],
            correctAnswer: "c",
            explanation:
              "'Much' is a quantitative adjective — it describes the quantity or amount of a noun (e.g., 'much water'). Descriptive adjectives describe qualities or characteristics of nouns, such as colour (purple), shape (circular), emotion (disappointed), or origin (Balinese).",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: "Choose from the following options.",
            question:
              "Which of the following is NOT considered a possessive adjective?",
            options: [
              { id: "a", text: "His" },
              { id: "b", text: "Her" },
              { id: "c", text: "Their" },
              { id: "d", text: "Yours" },
              { id: "e", text: "My" },
            ],
            correctAnswer: "d",
            explanation:
              "'Yours' is a possessive pronoun, not a possessive adjective. Possessive adjectives (his, her, their, my, your, its, our) must precede a noun to modify it. 'Yours' stands alone as a pronoun and does not modify a noun directly.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "The preservation of our natural world is vital for numerous reasons. Firstly, it ensures that we have a stable and healthy environment. A balanced ecosystem supports a variety of species, including humans. Secondly, conservation efforts can help improve biodiversity, which is crucial for ecosystem resilience. Thirdly, conserving nature aids in the sustainability of resources for future generations.",
            question:
              "Read the text and determine the quantitative adjective present in it.",
            options: [
              { id: "a", text: "Numerous" },
              { id: "b", text: "Vital" },
              { id: "c", text: "Firstly" },
              { id: "d", text: "Balanced" },
              { id: "e", text: "Future" },
            ],
            correctAnswer: "a",
            explanation:
              "'Numerous' is a quantitative adjective — it describes the quantity of 'reasons' (numerous reasons). Quantitative adjectives indicate the amount or number of a noun. 'Vital' and 'balanced' are descriptive adjectives, 'firstly' is an adverb, and 'future' is an attributive adjective here.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "My dad recently bought (new [1] - a [2] - silicone [3] - round [4]) mold for me to make crafts.",
            question:
              "Arrange the adjectives into the correct order for: 'My dad recently bought a mold for me to make crafts.'\nThe adjectives to order are: new [1], a [2], silicone [3], round [4]",
            options: [
              { id: "a", text: "1 - 2 - 3 - 4" },
              { id: "b", text: "2 - 1 - 4 - 3" },
              { id: "c", text: "2 - 4 - 1 - 3" },
              { id: "d", text: "4 - 2 - 3 - 1" },
              { id: "e", text: "2 - 3 - 4 - 1" },
            ],
            correctAnswer: "b",
            explanation:
              "The correct order is: a [2] - new [1] - round [4] - silicone [3] = 'a new round silicone mold.' English adjective order follows: Article → Opinion/Age → Shape → Material. So: article (a), opinion/age (new), shape (round), material (silicone).",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Classify each of the following three words as either Adjective or Adverb:\n1. Strenuous\n2. Inimitable\n3. The day after tomorrow",
            question:
              "What is the correct classification (Adjective or Adverb) for each word in order: Strenuous, Inimitable, The day after tomorrow?",
            options: [
              { id: "a", text: "ADJECTIVE - ADVERB - ADVERB" },
              { id: "b", text: "ADJECTIVE - ADVERB - ADJECTIVE" },
              { id: "c", text: "ADVERB - ADVERB - ADVERB" },
              { id: "d", text: "ADJECTIVE - ADJECTIVE - ADJECTIVE" },
              { id: "e", text: "ADJECTIVE - ADJECTIVE - ADVERB" },
            ],
            correctAnswer: "e",
            explanation:
              "'Strenuous' is an adjective describing the quality of something (e.g., strenuous exercise). 'Inimitable' is an adjective meaning unique or impossible to imitate. 'The day after tomorrow' is an adverb of time — it modifies a verb by indicating when an action takes place, functioning adverbially in a sentence.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "He was working on that song very diligently last month.",
            question:
              "Determine how many adverbs are present in this sentence: 'He was working on that song very diligently last month.'",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "d",
            explanation:
              "There are 3 adverbs: 'very' (adverb of degree, modifying 'diligently'), 'diligently' (adverb of manner, describing how he worked), and 'last month' (adverb of time, indicating when he worked). These three adverbs modify the verb phrase 'was working.'",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Match the correct adverbs with their types:\nVery, Quite, Before, Above, Below",
            question:
              "Which of the following correctly matches the adverbs with their types?",
            options: [
              {
                id: "a",
                text: "Very - frequency / Quite - degree / Before - frequency / Above - time / Below - manner",
              },
              {
                id: "b",
                text: "Very - degree / Quite - degree / Before - time / Above - place / Below - place",
              },
              {
                id: "c",
                text: "Very - manner / Quite - frequency / Before - place / Above - degree / Below - time",
              },
              {
                id: "d",
                text: "Very - time / Quite - manner / Before - degree / Above - frequency / Below - place",
              },
              {
                id: "e",
                text: "Very - degree / Quite - manner / Before - place / Above - time / Below - frequency",
              },
            ],
            correctAnswer: "b",
            explanation:
              "'Very' and 'Quite' are adverbs of degree (they intensify adjectives or other adverbs). 'Before' is an adverb of time (it indicates when). 'Above' and 'Below' are adverbs of place (they indicate where). This is the correct classification for all five.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "A: Could you please take this project ___?\nB: Sorry, I haven't been able to focus lately.",
            question:
              "Fill in the blank with the correct adverb:\nA: 'Could you please take this project ___?'\nB: 'Sorry, I haven't been able to focus lately.'",
            options: [
              { id: "a", text: "Home" },
              { id: "b", text: "Tomorrow" },
              { id: "c", text: "Really" },
              { id: "d", text: "Seriously" },
              { id: "e", text: "Upsettingly" },
            ],
            correctAnswer: "d",
            explanation:
              "'Seriously' is the correct adverb here. Person A is asking B to take the project seriously (with proper focus and effort), which connects logically to B's response about not being able to focus. 'Take this seriously' is a natural and common English expression.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "She was tasked with calculating the rates of in-game currency inflation properly last week.",
            question:
              "Determine how many times an adverb of manner is present in this sentence: 'She was tasked with calculating the rates of in-game currency inflation properly last week.'",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "b",
            explanation:
              "There is 1 adverb of manner: 'properly,' which describes how she was tasked with calculating. 'Last week' is an adverb of time, not manner. Adverbs of manner describe how an action is performed and typically end in -ly.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: "They crossed the street carefully.",
            question:
              "Paraphrase this sentence so that it no longer contains any adverbs: 'They crossed the street carefully.'",
            options: [
              { id: "a", text: "They carefully crossed it." },
              { id: "b", text: "They crossed the street slowly." },
              { id: "c", text: "They were careful when passing the street." },
              { id: "d", text: "They stopped crossing the street." },
              { id: "e", text: "This sentence cannot be paraphrased." },
            ],
            correctAnswer: "c",
            explanation:
              "'They were careful when passing the street' successfully removes the adverb 'carefully' by replacing it with the adjective 'careful' used as a subject complement. Options A and B still contain adverbs ('carefully,' 'slowly'), and option D changes the meaning entirely.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: "He gently tapped his shoulder to catch his attention.",
            question:
              "Determine why the author used the word 'gently' in: 'He gently tapped his shoulder to catch his attention.'",
            options: [
              { id: "a", text: "Because it sounds good." },
              { id: "b", text: "Because the word is an adverb." },
              {
                id: "c",
                text: "Because the word cannot be replaced with any other words.",
              },
              {
                id: "d",
                text: "Because the word is synonymous with 'roughly'.",
              },
              {
                id: "e",
                text: "Because the word is used to explain the manner of the action.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "'Gently' is an adverb of manner that explains how the tapping was done — softly and without force. The purpose of using 'gently' is to describe the manner of the action 'tapped,' distinguishing it from a harder or more forceful tap.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Neither of us knew exactly how we got inside this magical well.",
            question:
              "Choose the word in this sentence that is considered an adverb of place: 'Neither of us knew exactly how we got inside this magical well.'",
            options: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Inside" },
              { id: "c", text: "Exactly" },
              { id: "d", text: "This" },
              { id: "e", text: "Magical well" },
            ],
            correctAnswer: "b",
            explanation:
              "'Inside' is an adverb of place — it describes where they got (inside the well), indicating location or direction. 'Exactly' is an adverb of degree, 'neither' is a pronoun/conjunction, 'this' is a demonstrative adjective, and 'magical well' is a noun phrase.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Match each word with its correct word class:\nHerb, Can, On, Often, His",
            question:
              "Which of the following correctly matches the words with their word class?",
            options: [
              {
                id: "a",
                text: "Herb - adverb / Can - adjective / On - adverb / Often - adjective / His - adverb",
              },
              {
                id: "b",
                text: "Herb - noun / Can - verb / On - preposition / Often - adverb / His - possessive adjective",
              },
              {
                id: "c",
                text: "Herb - adjective / Can - noun / On - adverb / Often - adverb / His - pronoun",
              },
              {
                id: "d",
                text: "Herb - verb / Can - adverb / On - adjective / Often - pronoun / His - adverb",
              },
              {
                id: "e",
                text: "Herb - noun / Can - adjective / On - adverb / Often - adverb / His - adjective",
              },
            ],
            correctAnswer: "b",
            explanation:
              "'Herb' is a noun (a type of plant). 'Can' is a modal verb. 'On' is a preposition (or adverb of place depending on context). 'Often' is an adverb of frequency. 'His' is a possessive adjective. This matches the answer key which awards points for the correct pairing.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: "Choose from the following word-class pairings.",
            question: "Determine which pair is INCORRECT.",
            options: [
              { id: "a", text: "Cutely - adverb of manner" },
              { id: "b", text: "Seldom - adverb of frequency" },
              { id: "c", text: "Seriously - descriptive adjective" },
              { id: "d", text: "Lax - descriptive adjective" },
              { id: "e", text: "Her - possessive adjective" },
            ],
            correctAnswer: "c",
            explanation:
              "'Seriously - descriptive adjective' is incorrect. 'Seriously' is an adverb of manner (it ends in -ly and describes how an action is done), not a descriptive adjective. 'Serious' would be the adjective form. All other pairings are correct: 'cutely' is an adverb of manner, 'seldom' is an adverb of frequency, 'lax' is a descriptive adjective, and 'her' is a possessive adjective.",
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
        name: "Adjectives & Adverbs",
        description:
          "Learn about adjectives and adverbs — how to describe nouns and modify verbs, adjectives, and other adverbs.",
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

seedAdjectivesAdverbs();
