const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedConjunctionsPrepositions = async () => {
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

    const targetId = "conjunctions-prepositions";

    const stepsData = [
      {
        title: "Materi: Conjunction",
        type: "reading",
        status: "active",
        description:
          "Pelajari pengertian conjunction, tipe-tipe, dan contoh penggunaannya dalam kalimat.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Conjunction</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Conjunction</strong> is a part of speech that connects words, phrases, or clauses. Conjunction may also be extended to idiomatic expressions that behave as a unit with the same function, i.e. <em>as well as</em> and <em>provided that</em>.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Types of Conjunction</h3>

              <div class="space-y-8">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">1. Coordinating Conjunction</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Joins or coordinates two or more items of equal syntactic importance.</p>
                  <ul class="text-body-l space-y-3">
                    <li><strong class="text-Primary-700">For</strong> – an illative (inferential), presents rationale. <em class="text-Grayscale-500">(They do not gamble, for they are ascetics.)</em></li>
                    <li><strong class="text-Primary-700">And</strong> – adds non-contrasting items or ideas. <em class="text-Grayscale-500">(He can play basketball and volleyball.)</em></li>
                    <li><strong class="text-Primary-700">Nor</strong> – presents an alternative non-contrasting and negative idea. <em class="text-Grayscale-500">(He does not attend school A nor do his brother attend school A.)</em></li>
                    <li><strong class="text-Primary-700">But</strong> – adversative, presents a contrast or exception. <em class="text-Grayscale-500">(Indonesia GDP remains stable, but export destination countries' GDP is declining.)</em></li>
                    <li><strong class="text-Primary-700">Or</strong> – presents an alternative non-contrasting items or idea. <em class="text-Grayscale-500">(He usually have omelette for his breakfast or a dragon fruit.)</em></li>
                    <li><strong class="text-Primary-700">Yet</strong> – adversative, presents a strong contrast or exception. <em class="text-Grayscale-500">(This year's sales volume has somewhat outstripped last year's, yet it has not met the BOD's target.)</em></li>
                    <li><strong class="text-Primary-700">So</strong> – an illative (inferential), presents a consequence. <em class="text-Grayscale-500">(He won a competition and got an enormous prize so, he buy his circles two boxes of pizza.)</em></li>
                  </ul>
                  <div class="mt-4 bg-Primary-50 p-4 rounded-lg">
                    <p class="text-body-l text-Grayscale-700"><strong>Other connectors:</strong></p>
                    <ul class="text-body-l space-y-1 mt-2">
                      <li>• <strong>Even though / even if</strong> – presents a contrast</li>
                      <li>• <strong>On the other hand / on the contrary / in contrast</strong> – contrasting two ideas or items</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">2. Correlative Conjunction</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Works in pairs to join words or group of words of equal weight in a sentence.</p>
                  <ul class="text-body-l space-y-3">
                    <li><strong class="text-red-600">Either...or</strong> <em class="text-Grayscale-500">(You can wear either a casual outfit or lavish outfit to go to your campus today.)</em></li>
                    <li><strong class="text-red-600">Not only...but also</strong> <em class="text-Grayscale-500">(He is not only good-looking but also clever.)</em></li>
                    <li><strong class="text-red-600">Neither...nor</strong> <em class="text-Grayscale-500">(Neither our mathematics teachers nor our music teacher came to school yesterday.)</em></li>
                    <li><strong class="text-red-600">Both...and</strong> <em class="text-Grayscale-500">(Both the women and men team won the continental cup last season.)</em></li>
                    <li><strong class="text-red-600">Whether...or</strong> <em class="text-Grayscale-500">(This research is conducted to find out whether the cigarette tax affects the demand for it or not.)</em></li>
                    <li><strong class="text-red-600">Just as...so</strong> <em class="text-Grayscale-500">(Just as many Filipinos love basketball, so many Indonesians love football.)</em></li>
                    <li><strong class="text-red-600">As...as</strong> <em class="text-Grayscale-500">(Indonesia's high speed train is as fast as the one that Japan owns.)</em></li>
                    <li><strong class="text-red-600">As much...as</strong> <em class="text-Grayscale-500">(He likes eating doughnut as much as he likes eating spaghetti.)</em></li>
                    <li><strong class="text-red-600">No sooner...than</strong> <em class="text-Grayscale-500">(No sooner did the orientation unfold than the first quiz is in the offing.)</em></li>
                    <li><strong class="text-red-600">Rather...than</strong> <em class="text-Grayscale-500">(I would rather use formula A than formula B because it is much simpler than B.)</em></li>
                    <li><strong class="text-red-600">Not...but rather</strong> <em class="text-Grayscale-500">(He allocate his time not in playing video game, but rather to prepare for final exams.)</em></li>
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">3. Causal Conjunction</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Explains how things work or why things happen.</p>
                  <ul class="text-body-l space-y-3">
                    <li>I got soaking wet in the rain <strong>(effect)</strong> because I didn't have my umbrella with me <strong>(cause)</strong>.</li>
                    <li>I didn't have my breakfast <strong>(cause)</strong> so, I'm really hungry now <strong>(effect)</strong>.</li>
                    <li>The study involves limited population <strong>(cause)</strong> hence, diminishing the accuracy <strong>(effect)</strong>.</li>
                    <li>The school heating is not working. <strong>(cause)</strong> As a result, the school is closed today <strong>(effect)</strong>.</li>
                    <li>Since my argument is weak <strong>(cause)</strong> I scored a bit low for the last question <strong>(effect)</strong>.</li>
                    <li>I did not pay attention to the task timeline <strong>(cause)</strong> therefore, I missed the colloquium <strong>(effect)</strong>.</li>
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">4. Conjunction of Time (Chronological)</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Used to show chronology or present a story in a chronological fashion.</p>
                  <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                      <thead class="bg-Primary-500 text-white text-body-l">
                        <tr>
                          <th class="p-4">Conjunction</th>
                          <th class="p-4">Example</th>
                        </tr>
                      </thead>
                      <tbody class="text-body-l text-Grayscale-700">
                        <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">After</td><td class="p-3 italic">We'll do after you do this</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">As long as</td><td class="p-3 italic">That's fine as long as you agree to our conditions</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">As soon as</td><td class="p-3 italic">We'll get to that as soon as we finish this</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">By the time</td><td class="p-3 italic">He had left by the time we arrive</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">Now that</td><td class="p-3 italic">We can get going now that they have left</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">Once</td><td class="p-3 italic">We'll have less to worry once the boss leaves</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">Since</td><td class="p-3 italic">We haven't been able to upload our work since the network bogged up</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">Until</td><td class="p-3 italic">We're waiting until you send your confirmation</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">When</td><td class="p-3 italic">They can do what they want when they want</td></tr>
                        <tr class="border-b border-Grayscale-100 bg-Grayscale-50"><td class="p-3 font-bold">While</td><td class="p-3 italic">I appreciate you waiting while I finish up</td></tr>
                        <tr class="border-b border-Grayscale-100"><td class="p-3 font-bold">Moreover / Furthermore</td><td class="p-3 italic">Adding additional information</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section class="text-center">
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-b-2 border-Primary-500 pb-2 inline-block">Exam Tips</h3>
              <ul class="space-y-6">
                <li>
                  <p class="text-body-l">Figure out if the <strong>preceding</strong> sentence is a <strong>cause or effect</strong> of the <strong>succeeding</strong> sentence.</p>
                </li>
                <li>
                  <p class="text-body-l">Figure out if the <strong>succeeding</strong> sentence is a <strong>cause or effect</strong> of the <strong>preceding</strong> sentence.</p>
                </li>
                <li>
                  <p class="text-body-l">Figure out if the <strong>succeeding</strong> sentence <strong>contradicts</strong> with the <strong>preceding</strong> sentence.</p>
                </li>
                <li>
                  <p class="text-body-l">Figure out if a <strong>chronology</strong> can be made if the <strong>preceding</strong> sentence and the <strong>succeeding</strong> sentence is linked by means of conjunction.</p>
                </li>
              </ul>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Preposition",
        type: "reading",
        status: "locked",
        description:
          "Pelajari pengertian preposition, tipe-tipe, dan daftar preposisi yang umum digunakan.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Prepositions</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>A preposition</strong> is a word or group of words used before a noun, pronoun, or noun phrase to show direction, time, place, location, spatial relationship, or to introduce an object. <em>(Walden University)</em>
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Types of Prepositions</h3>

              <div class="space-y-8">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">1. Preposition of Location and Place</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Used to describe spatial relationships, these prepositions give more information about where something is located. Prepositions of location and place tend to answer the simple question: "Where?"</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l font-bold mb-2">Common examples:</p>
                    <p class="text-body-l text-Grayscale-600">aboard, above, across, against, along, amid, among, around, at, away, behind, below, beneath, beside, between, by, close, down, from, in, inside, into, near, on, onto, opposite, out of, outside, over, to, under</p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">2. Preposition of Direction</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Exactly what they sound like — words that refer to the direction in which something moves or travels. Similar to their location and place counterparts, prepositions of direction can also describe the "where" of a sentence — which makes them awfully easy to mix up. The main difference between the two is that prepositions of direction often indicate some type of movement rather than a stagnant or stationary location.</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l font-bold mb-2">Common examples:</p>
                    <p class="text-body-l text-Grayscale-600">above, across, along, among, around, against, at, away from, behind, below, beside, between, by, close to, down, from, in, inside (of), near, next to, off, off of, on, onto, over, past, through, to, toward(s), under, underneath, up</p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-4 text-body-l underline">3. Preposition of Time</h4>
                  <p class="text-body-l text-Grayscale-700 mb-4" style="text-align: justify;">Used to describe when something happened, when something is currently happening, or when something will happen in the future. These prepositions can be easier to classify; they often answer the question: "When?"</p>
                  <div class="bg-Grayscale-50 p-4 rounded-lg">
                    <p class="text-body-l font-bold mb-2">Common examples:</p>
                    <p class="text-body-l text-Grayscale-600">after, ago, at, before, by, during, for, from, in, next, on, since, till, to, until, within</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Example Sentences of Preposition</h3>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l">Preposition of Location and Place:</h4>
                  <ul class="text-body-l space-y-2 text-Grayscale-700">
                    <li>• Jessica stood <strong>at</strong> the corner.</li>
                    <li>• I live <strong>in</strong> Colorado.</li>
                    <li>• The computer sits <strong>on</strong> the desk.</li>
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l">Preposition of Direction:</h4>
                  <ul class="text-body-l space-y-2 text-Grayscale-700">
                    <li>• The puppies ran <strong>toward</strong> their mother.</li>
                    <li>• The coins fell <strong>into</strong> the water.</li>
                    <li>• My fancy jeans came <strong>from</strong> Italy.</li>
                    <li>• Lucy threw the football <strong>to</strong> Charlie.</li>
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 text-body-l">Preposition of Time:</h4>
                  <ul class="text-body-l space-y-2 text-Grayscale-700">
                    <li>• She went to the beach <strong>after</strong> work.</li>
                    <li>• The festival starts <strong>on</strong> Saturday.</li>
                    <li>• People wear spooky costumes <strong>during</strong> Halloween.</li>
                    <li>• We won't be able to move <strong>until</strong> next year.</li>
                    <li>• The bank is open <strong>from</strong> 9 a.m. <strong>to</strong> 5 p.m.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Conjunction & Preposition Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/zagEXnMPRvk",
        description:
          "Penjelasan lengkap tentang conjunction dan preposition dalam bahasa Inggris.",
      },
      {
        title: "Video: Conjunction & Preposition Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/1fLtM_Uh3Ok",
        description:
          "Latihan soal dan pembahasan mendalam mengenai conjunction dan preposition.",
      },
      {
        title: "Quiz: Conjunction & Preposition",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "President Prabowo Subianto has allocated a budget of Rp48.8 trillion (around US$2.98 billion) to ensure the continuity of the development of Indonesia's new capital Nusantara (IKN), especially the core government area, for the next five years. This was confirmed by Coordinating Minister for Infrastructure and Regional Development, Agus Harimurti Yudhoyono, after a meeting with President Prabowo at the Presidential Palace, Jakarta, on Tuesday. He informed that based on President Prabowo's direction, development in the new capital will be continued by following the established timeline. The first phase of development started in 2022 during the term of the 7th President Joko Widodo. The second phase from 2025–2029 will be undertaken under the administration of President Prabowo. According to Yudhoyono, several infrastructure projects in Nusantara were completed in the first phase, such as the Garuda Palace, the Presidential Palace, [...] the coordinating ministries' buildings. The budget for the continuation of development in the second phase will be allocated to complete the construction of supporting facilities and office ecosystems for the legislature and judiciary.",
            question:
              "What is the most suitable conjunction to fill the blank part in paragraph 1: '...such as the Garuda Palace, the Presidential Palace, [...] the coordinating ministries' buildings.'",
            options: [
              { id: "a", text: "And" },
              { id: "b", text: "For" },
              { id: "c", text: "Or" },
              { id: "d", text: "When" },
              { id: "e", text: "Even if" },
            ],
            correctAnswer: "a",
            explanation:
              "'And' is the correct conjunction here as it connects items in a list — the Garuda Palace, the Presidential Palace, and the coordinating ministries' buildings — all of which are examples of completed infrastructure projects.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "The minister informed that funding for the continuation of development in Nusantara is expected to come not only from one source, namely the state budget, but also from the private sector. 'We also hope that the private sector can contribute positively,' he said. [...] the same occasion, head of the Nusantara Capital Authority (OIKN), Basuki Hadimuljono, reported that in the early stage (2022–2024), the government invested Rp89 trillion from the state budget to build key infrastructure in the city. The infrastructure included toll roads, residential towers, sanitation infrastructure, and offices. In addition, as of September 2024, Rp58.41 trillion in private sector investment was also secured for the city's development.",
            question:
              "What is the most suitable preposition to fill the blank part in paragraph 2: '[...] the same occasion, head of the Nusantara Capital Authority (OIKN), Basuki Hadimuljono, reported...'",
            options: [
              { id: "a", text: "Between" },
              { id: "b", text: "Beside" },
              { id: "c", text: "Beyond" },
              { id: "d", text: "On" },
              { id: "e", text: "Abroad" },
            ],
            correctAnswer: "d",
            explanation:
              "'On the same occasion' is a fixed prepositional phrase used to indicate that something happened at the same event or time as something else previously mentioned. 'On' is the correct preposition here.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Germination is the sprouting of a seed, spore, or other reproductive body, usually after a period of dormancy. The absorption of water, the passage of time, chilling, warming, oxygen availability, and light exposure may all operate in initiating the process.\n\nIn the process of seed germination, water is absorbed by the embryo, which results in the rehydration and expansion of the cells. Shortly after the beginning of water uptake, or imbibition, the rate of respiration increases, and various metabolic processes, suspended or much reduced during dormancy, resume. These events are associated with structural changes in the organells (membranous bodies concerned with metabolism), in the cells of the embryo.\n\nGermination sometimes occurs early in the development process; the Mangrove (Rhizophora) embryo develops within the ovule, pushing out a swollen rudimentary root through the still-attached flower. In peas and corn (maize) the cotyledons (seed leaves) remain underground (e.g., hypogeal germination), [...] in other species (beans, sunflowers, etc.) the hypocotyl (embryonic stem) grows several inches above the ground, carrying the cotyledons into the light, in which they become green and often leaflike (e.g., epigeal germination).",
            question:
              "What is the right conjunction to fill the blank part in paragraph 3: 'In peas and corn the cotyledons remain underground [...] in other species the hypocotyl grows several inches above the ground.'",
            options: [
              { id: "a", text: "When" },
              { id: "b", text: "While" },
              { id: "c", text: "And" },
              { id: "d", text: "Or" },
              { id: "e", text: "Since" },
            ],
            correctAnswer: "b",
            explanation:
              "'While' is the correct conjunction as it expresses contrast between two simultaneous or parallel situations — cotyledons staying underground in one type of plant versus growing above ground in another. It effectively signals the contrast between hypogeal and epigeal germination.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              'My friend is waiting for me [1] the corner of the street [2] the baker\'s shop. We promised to meet [3] exactly 3 o\'clock so that we can do some shopping and then go [4] a coffee.\n\n<div class="overflow-x-auto my-4">\n  <table class="min-w-full border border-Grayscale-200">\n    <thead class="bg-Primary-500 text-white">\n      <tr>\n        <th class="p-3 text-left text-body-l font-bold">No</th>\n        <th class="p-3 text-left text-body-l font-bold">Conjunction and Preposition</th>\n        <th class="p-3 text-center text-body-l font-bold">True</th>\n        <th class="p-3 text-center text-body-l font-bold">False</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class="border-b border-Grayscale-100">\n        <td class="border border-Grayscale-200 p-3 text-body-l">1</td>\n        <td class="border border-Grayscale-200 p-3 text-body-l">At</td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n      </tr>\n      <tr class="border-b border-Grayscale-100">\n        <td class="border border-Grayscale-200 p-3 text-body-l">2</td>\n        <td class="border border-Grayscale-200 p-3 text-body-l">With</td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n      </tr>\n      <tr class="border-b border-Grayscale-100">\n        <td class="border border-Grayscale-200 p-3 text-body-l">3</td>\n        <td class="border border-Grayscale-200 p-3 text-body-l">Except</td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n      </tr>\n      <tr>\n        <td class="border border-Grayscale-200 p-3 text-body-l">4</td>\n        <td class="border border-Grayscale-200 p-3 text-body-l">For</td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>',
            question:
              "The best conjunction and preposition to fill the numbered blanks are evaluated below. Which combination of TRUE/FALSE is correct?\n1. [1] At — 'waiting at the corner'\n2. [2] With — 'at the corner with the baker's shop'\n3. [3] Except — 'meet except 3 o'clock'\n4. [4] For — 'go for a coffee'",
            options: [
              {
                id: "a",
                text: "The first, second, and third statements are true.",
              },
              { id: "b", text: "Only the fourth statement is true." },
              { id: "c", text: "All of the statements are true." },
              { id: "d", text: "Only the first statement is false." },
              { id: "e", text: "The second and third statements are false." },
            ],
            correctAnswer: "e",
            explanation:
              "Statement 1 is TRUE — 'At the corner' is correct. Statement 2 is FALSE — the correct preposition is 'by' (next to/near the baker's shop), not 'with.' Statement 3 is FALSE — the correct preposition is 'at' (meet at exactly 3 o'clock), not 'except.' Statement 4 is TRUE — 'go for a coffee' is correct. Therefore, the second and third statements are false.",
            points: 5,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "With the steady rise of digital technology, sitting has become the most common posture in the workplace. Most desk workers spend an average of 10 hours a day sitting in front of a computer which leaves very little opportunity for physical activity throughout the day. And unfortunately, as we've all been made aware, sitting can actually be extremely detrimental to your health — even more so than smoking, as some would claim. Many of us have health issues that we attribute [1] bad genes, poor diet, or possibly even the environment. But now that we have a better understanding of the physiological effects of excessive sitting, it's probably safe to say that our daily behaviours can also play a large role in our health problems. [2] our body burns less fat and blood circulation is poor, there's an increased chance of fatty acids blocking the arteries in the heart.",
            question:
              "What is the right preposition to fill the [1] blank part: 'Many of us have health issues that we attribute [1] bad genes, poor diet, or possibly even the environment.'",
            options: [
              { id: "a", text: "To" },
              { id: "b", text: "As soon as" },
              { id: "c", text: "Because" },
              { id: "d", text: "Even if" },
              { id: "e", text: "Moreover" },
            ],
            correctAnswer: "a",
            explanation:
              "'Attribute to' is a fixed collocation in English meaning to regard something as being caused by. The correct preposition after 'attribute' is always 'to,' making 'attribute to bad genes' the grammatically correct construction.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "With the steady rise of digital technology, sitting has become the most common posture in the workplace. Most desk workers spend an average of 10 hours a day sitting in front of a computer which leaves very little opportunity for physical activity throughout the day. Many of us have health issues that we attribute to bad genes, poor diet, or possibly even the environment. But now that we have a better understanding of the physiological effects of excessive sitting, it's probably safe to say that our daily behaviours can also play a large role in our health problems. [2] our body burns less fat and blood circulation is poor, there's an increased chance of fatty acids blocking the arteries in the heart. This links inactive sitting to elevated cholesterol levels, high blood pressure, and cardiovascular disease.",
            question:
              "What is the most suitable conjunction to fill the [2] blank part: '[2] our body burns less fat and blood circulation is poor, there's an increased chance of fatty acids blocking the arteries in the heart.'",
            options: [
              { id: "a", text: "Until" },
              { id: "b", text: "Since" },
              { id: "c", text: "When" },
              { id: "d", text: "Therefore" },
              { id: "e", text: "Moreover" },
            ],
            correctAnswer: "c",
            explanation:
              "'When' correctly introduces a conditional/temporal clause here — when the body burns less fat and circulation is poor, the consequence is an increased risk of arterial blockage. It best captures the situational relationship between the two clauses.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "In fact, a study has shown that men who spend more than 10 hours a week riding a car or over 23 hours a week watching television had 82% and 64% greater risk of suffering from heart disease compared to those who spent significantly less time on both activities. [3], when you're sitting the whole time, the brain will be unable to get enough blood and oxygen, which it needs to function optimally. As a result, your brain function still slows down, and you don't get to optimize your brain power. And when it doesn't get enough glucose energy, brain cells may get damaged.",
            question:
              "What is the right conjunction to fill the [3] blank part: '[3], when you're sitting the whole time, the brain will be unable to get enough blood and oxygen.'",
            options: [
              { id: "a", text: "Although" },
              { id: "b", text: "Since" },
              { id: "c", text: "When" },
              { id: "d", text: "While" },
              { id: "e", text: "Moreover" },
            ],
            correctAnswer: "e",
            explanation:
              "'Moreover' is the correct connective adverb here as it introduces an additional point building on the previous paragraph's argument about the health risks of sitting. It signals that the brain effects are yet another concern on top of the cardiovascular risks already discussed.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "In the 1960's, a creative performance researcher named George Land conducted a study of 1,600 five-year-olds and 98 percent of children scored in the 'highly creative' range. Dr. Land re-tested each subject during five year increments. When the same children were 10-years-old, only 30 percent scored in the highly creative range. This number dropped to 12 percent by age 15 and just 2 percent by age 25. As the children grew [1] adults they effectively had the creativity trained out of them. In the words of Dr. Land, 'non-creative behaviour is learned.'",
            question:
              "Fill the [1] blank part in paragraph 2 with the right preposition: 'As the children grew [1] adults they effectively had the creativity trained out of them.'",
            options: [
              { id: "a", text: "During" },
              { id: "b", text: "Next" },
              { id: "c", text: "Into" },
              { id: "d", text: "Over" },
              { id: "e", text: "Away from" },
            ],
            correctAnswer: "c",
            explanation:
              "'Grew into adults' is the correct collocation — 'grow into' means to develop and become something over time. It is the standard English expression for describing a person's transition from childhood to adulthood.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Similar trends have been discovered by other researchers. For example, one study of 272,599 students found that although IQ scores have risen since 1990, creative thinking has decreased. This is not to say that creativity is 100 percent learned. Genetics do play a role. According to psychology professor Barbara Kerr, 'approximately 22 percent of variance in creativity is due to the influence of genes.' This discovery was made by studying the differences in creative thinking [2] sets of twins.",
            question:
              "What is the most suitable preposition to fill the [2] blank part: 'This discovery was made by studying the differences in creative thinking [2] sets of twins.'",
            options: [
              { id: "a", text: "Beyond" },
              { id: "b", text: "Along" },
              { id: "c", text: "Across" },
              { id: "d", text: "Beside" },
              { id: "e", text: "Between" },
            ],
            correctAnswer: "e",
            explanation:
              "'Between sets of twins' is correct because 'between' is used to show comparison or difference involving two distinct parties or groups. Studying differences between twins means comparing the two members of each twin pair.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "More than two billion cups of coffee are drunk every day and for many, working life would feel impossible without it. As traditionally tea-drinking countries like China are seduced by coffee's charms, it may soon [1] the world's favourite drink. What is driving this insatiable thirst, and how has the beverage come to conquer the world? Coffee's story starts in the lush highlands of Ethiopia, the natural homeland of the delicate Coffee arabica plant.",
            question:
              "The correct answer to fill the [1] blank part: 'it may soon [1] the world's favourite drink.'",
            options: [
              { id: "a", text: "From" },
              { id: "b", text: "In" },
              { id: "c", text: "Inside" },
              { id: "d", text: "Near" },
              { id: "e", text: "Become" },
            ],
            correctAnswer: "e",
            explanation:
              "'Become' is the correct verb to fill this blank. The sentence structure 'it may soon [verb]' requires a verb, not a preposition. 'Become the world's favourite drink' correctly completes the idea that coffee is gaining global dominance.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "The Oromo people from Ethiopia are thought to have been the first to have noticed the stimulating effects of these 'beans', and coffee still remains an important element of their traditional cuisine. Exactly how and when it spread beyond Ethiopia is still the subject of many legends, but the available historic records suggest that the Sufis of Yemen were the first truly devoted drinkers [2] Africa in the Middle Ages.\n\nIts caffeine helped them to continue their practices late into the night, while the roasting of the bean was apparently taken as an analogy for the transcendence of the human soul.",
            question:
              "According to the passage, what is the most suitable preposition to fill the [2] blank part: 'the Sufis of Yemen were the first truly devoted drinkers [2] Africa in the Middle Ages.'",
            options: [
              { id: "a", text: "Since" },
              { id: "b", text: "After" },
              { id: "c", text: "Ago" },
              { id: "d", text: "Outside" },
              { id: "e", text: "Up" },
            ],
            correctAnswer: "d",
            explanation:
              "'Outside Africa' is correct here — it indicates that the Sufis of Yemen were the first devoted coffee drinkers located beyond (outside of) the African continent, marking the drink's spread from its Ethiopian origins to the Arabian Peninsula.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Some studies suggest that coffee can offer some protection from certain common diseases. A recent review of the evidence by Susanna Larsson at the Karolinska Institute in Sweden found that each cup of coffee per day is associated with a 6% reduction in the risk of type 2 diabetes. Laura Van Dongen at Wageningen University, [3], has found that regular coffee drinkers were at least 20% less likely to die from heart disease.",
            question:
              "Which word below is the best fit for the [3] blank: 'Laura Van Dongen at Wageningen University, [3], has found that regular coffee drinkers were at least 20% less likely to die from heart disease.'",
            options: [
              { id: "a", text: "In" },
              { id: "b", text: "From" },
              { id: "c", text: "Down" },
              { id: "d", text: "Near" },
              { id: "e", text: "Meanwhile" },
            ],
            correctAnswer: "e",
            explanation:
              "'Meanwhile' is a connective adverb used to introduce an additional finding happening in parallel — just as Larsson found benefits for diabetes, Van Dongen meanwhile found benefits for heart disease. It is used parenthetically here to add a related, simultaneous point.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Learning to read is important, we all know that. Research shows that people without good literacy skills do worse in education and are more likely to be unemployed or even suffer [1] health and relationship problems. [2] there is evidence to suggest that the benefit of being read to frequently as a child go way beyond just literacy skills. Former CBeebies presenter Alex Winters went on a mission to find out just what is so important about stories.",
            question:
              "What is the correct answer to fill the [1] blank part: 'people without good literacy skills... are more likely to be unemployed or even suffer [1] health and relationship problems.'",
            options: [
              { id: "a", text: "Without" },
              { id: "b", text: "From" },
              { id: "c", text: "But" },
              { id: "d", text: "And" },
              { id: "e", text: "Or" },
            ],
            correctAnswer: "b",
            explanation:
              "'Suffer from' is a fixed collocation in English meaning to experience something unpleasant or harmful. The correct preposition after 'suffer' when describing an ailment or problem is always 'from.'",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Learning to read is important, we all know that. Research shows that people without good literacy skills do worse in education and are more likely to be unemployed or even suffer from health and relationship problems. [2] there is evidence to suggest that the benefit of being read to frequently as a child go way beyond just literacy skills. Former CBeebies presenter Alex Winters went on a mission to find out just what is so important about stories.",
            question:
              "Fill in the [2] blank with the most suitable conjunction: '[2] there is evidence to suggest that the benefit of being read to frequently as a child go way beyond just literacy skills.'",
            options: [
              { id: "a", text: "From" },
              { id: "b", text: "By" },
              { id: "c", text: "But" },
              { id: "d", text: "For" },
              { id: "e", text: "And" },
            ],
            correctAnswer: "c",
            explanation:
              "'But' is the correct conjunction as it introduces a contrasting idea — despite the problems associated with poor literacy, there is evidence that being read to offers benefits beyond literacy alone. The contrast between the negative consequences mentioned earlier and the positive benefits requires the adversative conjunction 'but.'",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "It gets even more surprising when you look at the effects of reading fiction to children on their social behaviour. Scientists have found that children who have fiction read to them regularly find it easier to understand other people — they show more empathy and have better developed theory of mind (the ability to understand that other people have different thoughts and feelings to us, which is essential [3] understanding and predicting other people's thoughts and behaviour).",
            question:
              "What is the most suitable preposition to fill the [3] blank part: 'which is essential [3] understanding and predicting other people's thoughts and behaviour.'",
            options: [
              { id: "a", text: "For" },
              { id: "b", text: "And" },
              { id: "c", text: "But" },
              { id: "d", text: "After" },
              { id: "e", text: "Or" },
            ],
            correctAnswer: "a",
            explanation:
              "'Essential for' is the correct fixed collocation — 'for' is the standard preposition used after 'essential' to indicate purpose or function. The phrase 'essential for understanding' means that understanding is the purpose or goal for which theory of mind is necessary.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.subcategory = "Words";
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Conjunctions & Prepositions",
        description:
          "Learn about conjunctions and prepositions — how to connect words, phrases, and clauses, and how to express spatial and temporal relationships.",
        subcategory: "Words",
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

seedConjunctionsPrepositions();
