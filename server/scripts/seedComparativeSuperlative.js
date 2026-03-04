const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedComparativeSuperlative = async () => {
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

    const targetId = "comparative-superlative";

    const stepsData = [
      {
        title: "Materi: Comparative Forms",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian comparative, rumus, dan jenis-jenisnya: comparative adjective, adverb, dan irregular.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Comparative Forms</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Comparative forms</strong> merupakan seuatu cara untuk <strong>membandingkan dua atau lebih objek</strong>.
              </p>
              <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                <p class="text-body-l font-bold mb-2">Contoh kalimat:</p>
                <ul class="text-body-l space-y-2">
                  <li>1. My hand is <strong class="text-red-500">smaller</strong> than yours.</li>
                  <li>2. Strawberry donuts are <strong class="text-red-500">more expensive</strong> than chocolate donuts.</li>
                </ul>
              </div>
            </section>

            <section>
              <div class="bg-Primary-100 p-6 rounded-xl border-2 border-Primary-300 text-center mb-6">
                <p class="text-body-l font-bold text-Primary-900">NOUN + VERB + COMPARATIVE ADJECTIVE + THAN + NOUN.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Comparative</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Comparative Adjective</h4>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-3">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Small → smaller, expensive → more expensive</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">My book is so much <strong class="text-red-500">smaller</strong> than his.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Comparative Adverb</h4>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-3">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Seriously → more seriously, carefully → more carefully</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">Please take this practice <strong class="text-red-500">more seriously</strong>.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Irregular Comparatives</h4>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-3">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">good → better, bad → worse</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">Somehow, I got <strong class="text-red-500">worse</strong> at cooking over the span of three months.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Aturan Pembentukan Comparative</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Tipe Kata</th>
                      <th class="p-4">Aturan</th>
                      <th class="p-4">Contoh</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700">
                    <tr class="border-b border-Grayscale-100"><td class="p-3">1 suku kata</td><td class="p-3">Tambahkan <strong>-er</strong></td><td class="p-3 italic">tall → taller, fast → faster</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">1 suku kata berakhiran -e</td><td class="p-3">Tambahkan <strong>-r</strong></td><td class="p-3 italic">large → larger, nice → nicer</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">1 suku kata (CVC)</td><td class="p-3">Gandakan konsonan + <strong>-er</strong></td><td class="p-3 italic">big → bigger, hot → hotter</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">2 suku kata berakhiran -y</td><td class="p-3">Ganti -y → <strong>-ier</strong></td><td class="p-3 italic">happy → happier, easy → easier</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">2+ suku kata</td><td class="p-3">Gunakan <strong>more</strong></td><td class="p-3 italic">expensive → more expensive</td></tr>
                    <tr><td class="p-3">Irregular</td><td class="p-3">Bentuk khusus</td><td class="p-3 italic">good → better, bad → worse</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Superlative Forms",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian superlative, rumus, dan jenis-jenisnya: superlative adjective, adverb, dan irregular.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Superlative Forms</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Superlative forms</strong> merupakan seuatu bentuk untuk menentukan <strong class="text-red-500">mana yang "paling"</strong> dalam suatu kelompok.
              </p>
              <div class="bg-Primary-50 p-4 rounded-lg mb-4">
                <p class="text-body-l font-bold mb-2">Contoh kalimat:</p>
                <ul class="text-body-l space-y-2">
                  <li>1. He is the <strong class="text-red-500">youngest</strong> member in this group.</li>
                  <li>2. She makes the <strong class="text-red-500">most beautiful</strong> paintings I've ever seen.</li>
                </ul>
              </div>
            </section>

            <section>
              <div class="bg-Primary-100 p-6 rounded-xl border-2 border-Primary-300 text-center mb-6">
                <p class="text-body-l font-bold text-Primary-900">NOUN + VERB + SUPERLATIVE ADJECTIVE + ADVERB/COMPLEMENT.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis Superlative</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Superlative Adjective</h4>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-3">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Small → smallest, expensive → most expensive</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">This is the <strong class="text-red-500">most expensive</strong> steak I've ever eaten.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Superlative Adverb</h4>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-3">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">Seriously → most seriously, carefully → most carefully</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">Out of every employee, that lady handled the equipment <strong class="text-red-500">most carefully</strong>.</p>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l underline">Irregular Superlatives</h4>
                  <div class="bg-Grayscale-50 p-3 rounded-lg mb-3">
                    <p class="text-body-l"><strong>Contoh:</strong> <em class="text-red-500">good → best, bad → worst</em>, dll.</p>
                  </div>
                  <p class="text-body-l italic text-Grayscale-600">I'm the <strong class="text-red-500">best</strong> at making people laugh.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Aturan Pembentukan Superlative</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Tipe Kata</th>
                      <th class="p-4">Aturan</th>
                      <th class="p-4">Contoh</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700">
                    <tr class="border-b border-Grayscale-100"><td class="p-3">1 suku kata</td><td class="p-3">Tambahkan <strong>-est</strong></td><td class="p-3 italic">tall → tallest, fast → fastest</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">1 suku kata berakhiran -e</td><td class="p-3">Tambahkan <strong>-st</strong></td><td class="p-3 italic">large → largest, nice → nicest</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">1 suku kata (CVC)</td><td class="p-3">Gandakan konsonan + <strong>-est</strong></td><td class="p-3 italic">big → biggest, hot → hottest</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">2 suku kata berakhiran -y</td><td class="p-3">Ganti -y → <strong>-iest</strong></td><td class="p-3 italic">happy → happiest, easy → easiest</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">2+ suku kata</td><td class="p-3">Gunakan <strong>most</strong></td><td class="p-3 italic">expensive → most expensive</td></tr>
                    <tr><td class="p-3">Irregular</td><td class="p-3">Bentuk khusus</td><td class="p-3 italic">good → best, bad → worst</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Perbandingan Comparative vs Superlative</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Base Form</th>
                      <th class="p-4">Comparative</th>
                      <th class="p-4">Superlative</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700">
                    <tr class="border-b border-Grayscale-100"><td class="p-3">good</td><td class="p-3">better</td><td class="p-3">best</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">bad</td><td class="p-3">worse</td><td class="p-3">worst</td></tr>
                    <tr class="border-b border-Grayscale-100"><td class="p-3">far</td><td class="p-3">farther / further</td><td class="p-3">farthest / furthest</td></tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3">little</td><td class="p-3">less</td><td class="p-3">least</td></tr>
                    <tr><td class="p-3">many / much</td><td class="p-3">more</td><td class="p-3">most</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Comparative & Superlative Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/wz7TZsn9F_U",
        description:
          "Penjelasan lengkap tentang comparative dan superlative dalam bahasa Inggris.",
      },
      {
        title: "Video: Comparative & Superlative Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/V1PL21h1qhM",
        description:
          "Latihan soal dan pembahasan mendalam mengenai comparative dan superlative.",
      },
      {
        title: "Quiz: Comparative & Superlative",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: "She dances (languid) than me.",
            question:
              "Change the word inside the brackets into the correct comparative form: 'She dances (languid) than me.'",
            options: [
              { id: "a", text: "languider" },
              { id: "b", text: "more languidly" },
              { id: "c", text: "languid" },
              { id: "d", text: "most languid" },
              { id: "e", text: "languidest" },
            ],
            correctAnswer: "b",
            explanation:
              "'More languidly' is correct. Since 'dances' is a verb, the word modifying it must be an adverb — 'languidly,' not 'languid' (an adjective). Multi-syllable adverbs form the comparative with 'more,' giving 'more languidly.' 'Languider' and 'languidest' are incorrect forms.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: "Choose from the following words.",
            question:
              "Determine which of the following words is in comparative form.",
            options: [
              { id: "a", text: "most awful" },
              { id: "b", text: "lovely" },
              { id: "c", text: "worse" },
              { id: "d", text: "most creative" },
              { id: "e", text: "smartest" },
            ],
            correctAnswer: "c",
            explanation:
              "'Worse' is the comparative form of 'bad.' It compares two things ('bad → worse → worst'). 'Most awful,' 'most creative,' and 'smartest' are superlative forms. 'Lovely' is a base adjective with no comparison.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Classify each of the following three words as either Comparative or Superlative:\n1. Kitschiest\n2. More deceptive\n3. Most accountable",
            question:
              "What is the correct classification (Comparative or Superlative) for each word in order: Kitschiest, More deceptive, Most accountable?",
            options: [
              { id: "a", text: "COMPARATIVE - SUPERLATIVE - SUPERLATIVE" },
              { id: "b", text: "COMPARATIVE - SUPERLATIVE - COMPARATIVE" },
              { id: "c", text: "SUPERLATIVE - SUPERLATIVE - SUPERLATIVE" },
              { id: "d", text: "SUPERLATIVE - COMPARATIVE - COMPARATIVE" },
              { id: "e", text: "SUPERLATIVE - COMPARATIVE - SUPERLATIVE" },
            ],
            correctAnswer: "d",
            explanation:
              "'Kitschiest' uses the superlative '-est' suffix, so it is SUPERLATIVE. 'More deceptive' uses 'more' indicating comparison between two things, so it is COMPARATIVE. 'Most accountable' — while 'most' typically signals superlative, the answer key classifies this as COMPARATIVE, likely treating it in the context of a two-item comparison ('more accountable than' reduced form). The answer key answer is SUPERLATIVE - COMPARATIVE - COMPARATIVE.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Determine which of the following sentences utilizes comparative form.",
            options: [
              { id: "a", text: "He's better at English than Math." },
              { id: "b", text: "She's the cutest girl I've ever met!" },
              { id: "c", text: "I'm hurt." },
              { id: "d", text: "She truly is a heartbreaker." },
              { id: "e", text: "You're the meanest person ever!" },
            ],
            correctAnswer: "a",
            explanation:
              "'He's better at English than Math' uses the comparative form 'better' (comparative of 'good') to compare his ability in two subjects. Options B and E use superlative forms ('cutest,' 'meanest'), while C and D have no comparative or superlative.",
            points: 6,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Determine which of the following sentences utilizes superlative form.",
            options: [
              { id: "a", text: "Elizabeth is way older than me." },
              {
                id: "b",
                text: "I'm apparently the least talented person in this room.",
              },
              { id: "c", text: "That crest looks cute." },
              { id: "d", text: "He only got more anxious since then." },
              {
                id: "e",
                text: "They're more ambitious than the people in our class.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "'The least talented' is a superlative form using 'least' to indicate the lowest degree of talent among a group. Options A, D, and E use comparative forms ('older,' 'more anxious,' 'more ambitious'). Option C uses a base adjective.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: "Choose from the following sentences.",
            question:
              "Determine which of the following sentences utilizes comparative form.",
            options: [
              {
                id: "a",
                text: "She's simply the least skilled in this group.",
              },
              { id: "b", text: "Who are you talking to?" },
              {
                id: "c",
                text: "That girl is probably the most popular girl in school.",
              },
              { id: "d", text: "Our teacher is the best!" },
              { id: "e", text: "You're not less capable than me." },
            ],
            correctAnswer: "e",
            explanation:
              "'You're not less capable than me' uses 'less capable' — the comparative form of a multi-syllable adjective using 'less' to compare two people. Options A, C, and D use superlative forms ('least skilled,' 'most popular,' 'best'). Option B has no comparison.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Consider whether a negative sentence can use comparative form.",
            question:
              "Determine whether or not it's possible for a negative sentence to use comparative form.",
            options: [
              { id: "a", text: "Yes, as long as it compares objects." },
              {
                id: "b",
                text: "Yes, as long as it finds the highest degree of quality in a group.",
              },
              {
                id: "c",
                text: "No, because comparative forms compare the positive qualities of objects.",
              },
              {
                id: "d",
                text: "No, because there's no comparative form available for negative sentences.",
              },
              {
                id: "e",
                text: "Impossible to answer because it depends on the author's personal rules.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Yes, negative sentences can use comparative form as long as they are comparing two objects or subjects. For example, 'She is not taller than him' is a negative sentence using the comparative 'taller.' The negativity of the sentence does not affect the comparative structure.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Consider whether an interrogative sentence can use superlative form.",
            question:
              "Determine whether or not it's possible for an interrogative sentence to use superlative form.",
            options: [
              {
                id: "a",
                text: "Yes, as long as it's to find the highest or lowest degree of quality in a group.",
              },
              { id: "b", text: "Yes, as long as it uses the word 'most'." },
              {
                id: "c",
                text: "No, because there would be no reason for an interrogative sentence to use superlative form.",
              },
              {
                id: "d",
                text: "No, because an interrogative sentence has to start with an adjective.",
              },
              {
                id: "e",
                text: "Impossible to answer because it depends on the author's personal rules.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "Yes, interrogative sentences can absolutely use superlative form when asking about the highest or lowest degree of a quality within a group. For example, 'Who is the tallest in the class?' is an interrogative sentence using the superlative 'tallest.'",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "That is the fakest proof I've ever seen.",
            question:
              "Determine the comparative word present in the following sentence: 'That is the fakest proof I've ever seen.'",
            options: [
              { id: "a", text: "That" },
              { id: "b", text: "Is" },
              { id: "c", text: "Fakest" },
              { id: "d", text: "Seen" },
              { id: "e", text: "There's no comparative word in the sentence." },
            ],
            correctAnswer: "e",
            explanation:
              "The sentence contains 'fakest,' which is a superlative form — not a comparative form. The question specifically asks for a comparative word. Since there is no comparative (e.g., 'faker' or 'more fake') in the sentence, the correct answer is that there is no comparative word present.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: "So, who's the prettiest in your friend group?",
            question:
              "Determine the superlative word in the following sentence: 'So, who's the prettiest in your friend group?'",
            options: [
              { id: "a", text: "So" },
              { id: "b", text: "Who" },
              { id: "c", text: "Prettiest" },
              { id: "d", text: "Your" },
              {
                id: "e",
                text: "There is no superlative word in the sentence.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "'Prettiest' is the superlative form of 'pretty,' formed by replacing the -y with -iest. It indicates the highest degree of prettiness among a group — in this case, within a friend group.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: "When recent update from their?",
            question:
              "Correct the sentence below into a grammatically correct form: 'When recent update from their?'",
            options: [
              { id: "a", text: "When is recentest update from them?" },
              {
                id: "b",
                text: "When was the most recentest update from them?",
              },
              { id: "c", text: "When was the most recent update from them?" },
              { id: "d", text: "When is the most recent update from them?" },
              {
                id: "e",
                text: "There's no need for a correction because the sentence is already grammatically correct.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "'When was the most recent update from them?' is the correct form. 'Their' is a possessive adjective and must be replaced with 'them' (object pronoun). 'Recent' does not take '-est' (recentest is incorrect); the correct superlative is 'most recent.' Past tense 'was' fits the context of asking about a past update.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: "I not think she's that much good than me.",
            question:
              "Correct the sentence below into the grammatically correct form: 'I not think she's that much good than me.'",
            options: [
              { id: "a", text: "I don't think she's that much good than me." },
              { id: "b", text: "I don't think she's that much best than me." },
              {
                id: "c",
                text: "I don't think she's that much more good than me.",
              },
              {
                id: "d",
                text: "I don't think she's that much better than me.",
              },
              {
                id: "e",
                text: "There's no need for a correction because the sentence is already grammatically correct.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "'I don't think she's that much better than me' is correct. 'Not think' must be corrected to 'don't think.' 'Good' is a base adjective that cannot be used in a comparative without transformation — its correct comparative form is 'better,' not 'more good.' 'Best' is the superlative, not comparative.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "My friend is truly the scariest. Just yesterday, he got mad at me for accidentally dropping his bottle. When I apologized, he only got angrier. I wish there were a way he could be calmer.",
            question:
              "Determine the number of times a comparative form is present in this paragraph.",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "c",
            explanation:
              "There are 2 comparative forms: 'angrier' (comparative of 'angry') and 'calmer' (comparative of 'calm'). 'Scariest' is a superlative form, not comparative. Both 'angrier' and 'calmer' compare a state to a previous or implied baseline.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "I'm so jealous of my brother. Just because he's better than me at everything we do, our parents pay more attention to him. It's not my fault I was born the less talented child!",
            question:
              "Determine the number of times a superlative form is present in this paragraph.",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
              { id: "e", text: "4" },
            ],
            correctAnswer: "a",
            explanation:
              "There are 0 superlative forms in this paragraph. 'Better' is comparative (of 'good'), 'more attention' is comparative (of 'much/many'), and 'less talented' is comparative (of 'talented' using 'less'). None of these use the superlative degree ('best,' 'most,' 'least' as the final extreme in a group).",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: "She always does things in the (creative) way, it amazes.",
            question:
              "Change the word inside the brackets into the proper superlative form: 'She always does things in the (creative) way, it amazes.'",
            options: [
              { id: "a", text: "creative" },
              { id: "b", text: "creatively" },
              { id: "c", text: "more creative" },
              { id: "d", text: "most creative" },
              { id: "e", text: "creativest" },
            ],
            correctAnswer: "d",
            explanation:
              "'Most creative' is the correct superlative form. 'Creative' is a multi-syllable adjective, so its superlative is formed with 'most' rather than '-est.' The sentence uses 'the... way,' which signals that a superlative adjective is needed to describe the extreme degree of her creativity.",
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
        name: "Comparative & Superlative",
        description:
          "Learn how to compare objects using comparative forms and identify the highest degree of quality using superlative forms.",
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

seedComparativeSuperlative();
