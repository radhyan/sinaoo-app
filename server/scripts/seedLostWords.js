const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedLostWords = async () => {
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

    const targetId = "lost-words";

    const stepsData = [
      {
        title: "Materi: What is Lost Words?",
        type: "reading",
        status: "active",
        description:
          "Pelajari definisi, tipe-tipe vocab 'lost words', dan strategi pengerjaannya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">What is the "Lost Words"?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                <strong>Lost Words</strong> are English vocabularies that are rarely used in everyday communication but remain essential to understand. These words are often found in academic reading texts, literary works, or exam questions.
              </p>
              <div class="bg-Primary-50 p-6 rounded-lg border border-Primary-200">
                <p class="text-body-l text-Grayscale-800 italic">
                  "When you find a question about lost word, you will be asked to complete a blank with a given choice of word/sentence to complete an extract."
                </p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Type of Lost Words</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-5 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 underline text-body-l">1. Archaic Words</h4>
                  <p class="text-body-l text-Grayscale-600 mb-3">Rarely used in modern life but appear in classical literature.</p>
                  <ul class="text-body-l space-y-1">
                    <li>• Thou (Kamu)</li>
                    <li>• Hence (Oleh karena itu)</li>
                    <li>• Forthwith (Segera)</li>
                  </ul>
                </div>
                <div class="bg-white p-5 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 underline text-body-l">2. Academic Words</h4>
                  <p class="text-body-l text-Grayscale-600 mb-3">Often used in academic or scientific contexts.</p>
                  <ul class="text-body-l space-y-1">
                    <li>• Imminent (Segera terjadi)</li>
                    <li>• Exacerbate (Memperburuk)</li>
                    <li>• Mitigate (Mengurangi dampak)</li>
                  </ul>
                </div>
                <div class="bg-white p-5 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-700 mb-3 underline text-body-l">3. Rarely Used Words</h4>
                  <p class="text-body-l text-Grayscale-600 mb-3">Relevant in specific contexts but not common in daily talk.</p>
                  <ul class="text-body-l space-y-1">
                    <li>• Ephemeral (Sementara)</li>
                    <li>• Obsolete (Usang)</li>
                    <li>• Ineffable (Sulit diungkapkan)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Example Table</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead class="bg-Primary-500 text-white text-body-l">
                    <tr>
                      <th class="p-4">Lost Word</th>
                      <th class="p-4">Meaning</th>
                      <th class="p-4">Example Sentence</th>
                    </tr>
                  </thead>
                  <tbody class="text-body-l text-Grayscale-700 border-b border-Grayscale-100">
                    <tr class="border-b border-Grayscale-100">
                      <td class="p-4 font-bold">Abate</td>
                      <td class="p-4">Berkurang</td>
                      <td class="p-4 italic">The storm suddenly abated after midnight</td>
                    </tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50">
                      <td class="p-4 font-bold">Scrutinized</td>
                      <td class="p-4">Meneliti seksama</td>
                      <td class="p-4 italic">The professor scrutinized the data...</td>
                    </tr>
                    <tr class="border-b border-Grayscale-100">
                      <td class="p-4 font-bold">Eloquent</td>
                      <td class="p-4">Fasih berbicara</td>
                      <td class="p-4 italic">Her speech was eloquent...</td>
                    </tr>
                    <tr class="border-b border-Grayscale-100 bg-Grayscale-50">
                      <td class="p-4 font-bold">Arduous</td>
                      <td class="p-4">Sulit, berat</td>
                      <td class="p-4 italic">Climbing the mountain was an arduous journey</td>
                    </tr>
                    <tr class="border-b border-Grayscale-100">
                      <td class="p-4 font-bold">Pristine</td>
                      <td class="p-4">Murni, belum tersentuh</td>
                      <td class="p-4 italic">The island remained pristine...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="text-center">
              <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-b-2 border-Primary-500 pb-2 inline-block">Exam Tips</h3>
              <ul class="space-y-6">
                <li>
                  <p class="text-body-l"><strong>Comprehend</strong> what the passage talks about / understand the context.</p>
                </li>
                <li>
                  <p class="text-body-l">Identify the <strong>keywords</strong> in the subsequent sentence (if blank is at the beginning), previous sentence (if blank is at the end), or both (if blank is in the middle).</p>
                </li>
                <li>
                  <p class="text-body-l">Identify whether the <strong>noun</strong> is singular/plural and check the <strong>grammar/tense</strong> requested by the text.</p>
                </li>
              </ul>
            </section>
          </div>
        `,
      },
      {
        title: "Case Study: Analyzing the Question",
        type: "reading",
        status: "locked",
        description:
          "Mari kita analisis contoh soal 'Lost Words' menggunakan metode identifikasi keyword.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Sample Case</h3>
              <div class="bg-Grayscale-50 p-6 rounded-xl border border-Grayscale-200 mb-6">
                <p class="text-body-l italic mb-4">"... Most desk workers spend an average of 10 hours a day sitting in front of a computer which leaves very little opportunity for physical activity throughout the day..."</p>
                <p class="font-bold text-Primary-900 text-body-l">Question: The best sentence to begin the paragraph 1 should be ....</p>
              </div>

              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-Primary-700 mb-2 text-body-l">
                    Step 1: Understand the Context
                  </h4>
                  <p class="text-body-l bg-white p-4 rounded-lg border border-Grayscale-100">
                    Teks ini membahas dampak teknologi pada gaya hidup <em>sedentary</em> (kurang gerak) dan efeknya terhadap kesehatan seseorang.
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-Primary-700 mb-2 text-body-l">
                    Step 2: Identify Keywords
                  </h4>
                  <p class="text-body-l bg-white p-4 rounded-lg border border-Grayscale-100">
                    Kalimat setelah bagian kosong memiliki keyword: <br>
                    <strong>"Workers spend 10 hours sitting..."</strong> dan <strong>"little opportunity for physical activity"</strong>.
                  </p>
                </div>

                <div class="bg-Secondary-50 p-6 rounded-xl border border-Secondary-200">
                  <h4 class="font-bold text-Secondary-900 mb-2 text-body-l">Conclusion</h4>
                  <p class="text-body-l text-Secondary-800">
                    Jawaban yang paling tepat adalah <strong>Option C</strong>: <em>"With the steady rise of digital technology, sitting has become the most common posture in the workplace"</em>.
                  </p>
                  <ul class="mt-4 text-body-l space-y-2 text-Secondary-700 italic">
                    <li>• Option B: Terlalu umum, tidak menyebutkan spesifik tentang 'sitting'.</li>
                    <li>• Option D: Tidak menyatakan alasan 'mengapa' duduk menjadi aktivitas penting.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Lost Words Strategy Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/bkEEE_q8V0Y",
        description: "Tips dan trik mengerjakan soal rumpang dengan efektif.",
      },
      {
        title: "Video: Lost Words Strategy Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/kJj4oY4k55w",
        description:
          "Latihan soal dan pembahasan mendalam mengenai pengisian kata kata yang hilang.",
      },
      {
        title: "Quiz: Lost Words",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "With fossil records dating back 400 million years, sharks have outlived the dinosaurs and many other forms of life currently on earth. There are more than 1,000 species of sharks and rays, with new species discovered every year.\n\nThese majestic top predators that are so essential to the natural order of marine ecosystems now face their most severe threat from overfishing. Many species are threatened with extinction, with some families of rays such as sawfishes in peril. While sharks and rays have been an irreplaceable resource for coastal communities in the developing world of centuries, this unique balance is in [...] of being lost forever.\n\nWith our oceans severely degraded, restoring sharks is key to improving the resilience of these water bodies to climate change. While sharks' diverse range of species adds complexity to our conservation efforts, the dwindling numbers of these amazing creatures from overfishing and demand for their fins and meat increases the urgency of the task. Through our multi-pronged strategies, and guided by the Global Priorities for Conserving Sharks and Rays - A 2015-2025 Strategy, we strive to restore the balance between humans and sharks.",
            question:
              "What is the most suitable word to fill the blank part in paragraph 2?",
            options: [
              { id: "a", text: "Diverse" },
              { id: "b", text: "Separate" },
              { id: "c", text: "Danger" },
              { id: "d", text: "Safe" },
              { id: "e", text: "Many" },
            ],
            correctAnswer: "c",
            explanation:
              "The phrase 'in danger of' is a common English idiom used to express that something is at risk of happening. In this context, the balance of nature is at risk of being lost forever.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "With fossil records dating back 400 million years, sharks have outlived the dinosaurs and many other summits of life currently on earth. There are more than 1,000 species of sharks and rays, with new species discovered every year.\n\nThese majestic top predators that are so essential to the natural order of marine ecosystems now face their most severe threat from overfishing. Many species are threatened with extinction, with some families of rays such as sawfishes in peril. While sharks and rays have been an irreplaceable resource for coastal communities in the developing world of centuries, this unique balance is in danger of being lost forever.\n\nWith our oceans severely degraded, restoring sharks is key to improving the resilience of these water bodies to climate change. While sharks' [...] range of species adds complexity to our conservation efforts, the dwindling numbers of these amazing creatures from overfishing and demand for their fins and meat increases the urgency of the task. Through our multi-pronged strategies, and guided by the Global Priorities for Conserving Sharks and Rays - A 2015-2025 Strategy, we strive to restore the balance between humans and sharks.",
            question:
              "What is the most suitable word to fill the blank part in paragraph 3?",
            options: [
              { id: "a", text: "Diverse" },
              { id: "b", text: "Separate" },
              { id: "c", text: "Danger" },
              { id: "d", text: "Safe" },
              { id: "e", text: "Many" },
            ],
            correctAnswer: "a",
            explanation:
              "The text mentions earlier that there are more than 1,000 species. 'Diverse' appropriately describes a wide variety or broad range of species, which adds complexity to the conservation efforts.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Germination is the sprouting of a seed, spore, or other reproductive body, usually after a period of dormancy. The absorption of water, the passage of time, chilling, warming, oxygen availability, and light exposure may all operate in initiating the process.\n\nIn the process of seed germination, water is absorbed by the embryo, which results in the rehydration and expansion of the cells. Shortly after the beginning of water [...], or imbibition, the rate of respiration increases, and various metabolic processes, suspended or much reduced during dormancy, resume. These events are associated with structural changes in the organells (membranous bodies concerned with metabolism), in the cells of the embryo.\n\nGermination sometimes occurs early in the development process; the Mangrove (Rhizophora) embryo develops within the ovule, pushing out a swollen rudimentary root through the still-attached flower. In peas and corn (maize) the cotyledons (seed leaves) remain underground (e.g., hypogeal germination), while in other species (beans, sunflowers, etc.) the hypocotyl (embryonic stem) grows several inches above the ground, carrying the cotyledons into the light, in which they become green and often leaflike (e.g., epigeal germination).",
            question:
              "Fill the blank part in the paragraph 2 with the most suitable word!",
            options: [
              { id: "a", text: "Extensive" },
              { id: "b", text: "Perfect" },
              { id: "c", text: "Rudimentary" },
              { id: "d", text: "Uptake" },
              { id: "e", text: "Expansion" },
            ],
            correctAnswer: "d",
            explanation:
              "The preceding sentence mentions that water is absorbed. The noun form referring to the taking in or absorption of a substance is 'uptake'.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Germination is the sprouting of a seed, spore, or other reproductive body, usually after a period of dormancy. The absorption of water, the passage of time, chilling, warming, oxygen availability, and light exposure may all operate in initiating the process.\n\nIn the process of seed germination, water is absorbed by the embryo, which results in the rehydration and expansion of the cells. Shortly after the beginning of water uptake, or imbibition, the rate of respiration increases, and various metabolic processes, suspended or much reduced during dormancy, resume. These events are associated with structural changes in the organells (membranous bodies concerned with metabolism), in the cells of the embryo.\n\nGermination sometimes occurs early in the development process; the Mangrove (Rhizophora) embryo develops within the ovule, pushing out a swollen [...] root through the still-attached flower. In peas and corn (maize) the cotyledons (seed leaves) remain underground (e.g., hypogeal germination), while in other species (beans, sunflowers, etc.) the hypocotyl (embryonic stem) grows several inches above the ground, carrying the cotyledons into the light, in which they become green and often leaflike (e.g., epigeal germination).",
            question:
              "Fill the blank part in the paragraph 3 with the most suitable word!",
            options: [
              { id: "a", text: "Extensive" },
              { id: "b", text: "Perfect" },
              { id: "c", text: "Rudimentary" },
              { id: "d", text: "Uptake" },
              { id: "e", text: "Expansion" },
            ],
            correctAnswer: "c",
            explanation:
              "In botanical and biological terms, an early, basic, or undeveloped stage of an organ (like a root just starting to develop from an embryo) is referred to as 'rudimentary'.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "... Most desk workers spend an average of 10 hours a day sitting in front of a computer which leaves very little opportunity for physical activity throughout the day. And unfortunately, as we’ve all been made aware, sitting can actually be extremely detrimental to your health-even more so than smoking, as some would claim. Many of us have health issues that we attribute to bad genes, poor diet, or possibly even the environment. But now that we have a better understanding of the physiological effects of excessive sitting, it’s probably safe to say that our daily behaviours can also play a large role in our health problems. When our body burns less fat and blood circulation is poor, there’s an increased chance of fatty acids blocking the arteries in the heart. This links inactive sitting to elevated cholesterol levels, high blood pressure, and cardiovascular disease.",
            question:
              "The best sentence to begin the paragraph 1 should be ....",
            options: [
              {
                id: "a",
                text: "The workers is completely can do anything they want at their workplace.",
              },
              {
                id: "b",
                text: "Digital technology give many side effects to our lives, and one of which also impacts the workers.",
              },
              {
                id: "c",
                text: "With the steady rise of digital technology, sitting has become the most common posture in the workplace",
              },
              {
                id: "d",
                text: "Sitting becomes one important activity that people usually do in many occasion and situation both formal and informal",
              },
              {
                id: "e",
                text: "To overcome many problem in their lives, workers may sit all the time in their office or another formal situation.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "This sentence perfectly sets the context by linking modern work environments (the rise of digital technology) with the core subject of the text: excessive sitting acting as the primary posture in the workplace.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "In fact, a study has shown that men who spend more than 10 hour a week riding a car or over 23 hours a week watching television had 82% and 64% greater risk of suffering from heart disease [1] to those who spent significantly less time on both activities. Moreover, when you’re sitting the whole time, the brain will be unable to get enough blood and oxygen, which it needs to function optimally. As a result, your brain function still slows down, and you don’t get to optimize your brain power. And when it doesn’t get enough glucose energy, brain cells may get damaged. The side effects mentioned above are understandably worrisome, but it doesn’t mean you have to quit your desk job or stop watching movies and going on long car rides.",
            question:
              "Fill the [1] blank part in the paragraph 2 with the most suitable word!",
            options: [
              { id: "a", text: "Compared" },
              { id: "b", text: "Elevated" },
              { id: "c", text: "Equalized" },
              { id: "d", text: "Degraded" },
              { id: "e", text: "Side" },
            ],
            correctAnswer: "a",
            explanation:
              "The sentence presents a statistical contrast between two groups of people (those sitting more vs. those sitting less). The prepositional phrase 'compared to' is the grammatically correct way to highlight this contrast.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "In fact, a study has shown that men who spend more than 10 hour a week riding a car or over 23 hours a week watching television had 82% and 64% greater risk of suffering from heart disease compared to those who spent significantly less time on both activities. Moreover, when you’re sitting the whole time, the brain will be unable to get enough blood and oxygen, which it needs to function optimally. As a result, your brain function still slows down, and you don’t get to optimize your brain power. And when it doesn’t get enough glucose energy, brain cells may get damaged. The side effects mentioned above are understandably [2], but it doesn’t mean you have to quit your desk job or stop watching movies and going on long car rides.",
            question:
              "Fill in the [2] blank part in the paragraph 2 with the most suitable word!",
            options: [
              { id: "a", text: "Seductive" },
              { id: "b", text: "Tantalizing" },
              { id: "c", text: "Worrisome" },
              { id: "d", text: "Handsome" },
              { id: "e", text: "Tempting" },
            ],
            correctAnswer: "c",
            explanation:
              "The text lists several negative physiological impacts of sitting (heart disease, reduced brain function, damaged brain cells). These side effects would naturally cause concern, making 'worrisome' the most fitting adjective.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              'I personally think that reading is a very important activity in our life. Why do I say so?\n\nFirstly, by reading we can get a lot of [1] about many things in the world such as science, technology, sports, etc. written in either books, magazine, newspaper, etc.\nSecondly, reading can give us [2] too. When we are tired, we read books, novel, comic, newspaper, or magazine on the entertainment column such as comedy, short story, quiz, etc. to make us relaxed.\n\n<div class="overflow-x-auto my-4">\n  <table class="min-w-full border border-Grayscale-200">\n    <thead class="bg-Primary-500 text-white">\n      <tr>\n        <th class="p-3 text-left text-body-l font-bold">Statement</th>\n        <th class="p-3 text-center text-body-l font-bold">True</th>\n        <th class="p-3 text-center text-body-l font-bold">False</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border border-Grayscale-200 p-3 text-body-l border-b border-Grayscale-100">The suitable word to fill the [1] blank part is <em>Knowledge</em></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l border-b border-Grayscale-100"></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l border-b border-Grayscale-100"></td>\n      </tr>\n      <tr>\n        <td class="border border-Grayscale-200 p-3 text-body-l">The suitable word to fill the [2] blank part is <em>Pleasure</em></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n        <td class="border border-Grayscale-200 p-3 text-center text-body-l"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>',
            question: "Determine if the statement above is true or false!",
            options: [
              {
                id: "a",
                text: "The first statement is true, the second statement is false",
              },
              {
                id: "b",
                text: "The first statement is false, the second statement is true",
              },
              { id: "c", text: "Both of the statements are true" },
              { id: "d", text: "Both of the statements are false" },
              { id: "e", text: "No correct answer" },
            ],
            correctAnswer: "c",
            explanation:
              "Paragraph 2 lists 'science, technology, sports', making 'Knowledge' highly suitable for blank [1]. Paragraph 3 mentions reading to get 'relaxed' using 'entertainment columns', making 'Pleasure' highly suitable for blank [2]. Therefore, both statements are true.",
            points: 5,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Hey, you should stop. You [...] playing game for 12 hours.",
            question: "The most suitable word to fill the blank part is...",
            options: [
              { id: "a", text: "Have" },
              { id: "b", text: "Have been" },
              { id: "c", text: "Had been" },
              { id: "d", text: "Has" },
              { id: "e", text: "Was" },
            ],
            correctAnswer: "b",
            explanation:
              "The sentence requires the present perfect continuous tense ('have been' + verb-ing) because it describes an action (playing games) that started in the past (12 hours ago) and is still continuing up to the present moment.",
            points: 4,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "More than two billion cups of coffee are drunk every day and for many, working life would feel impossible without it. As traditionally tea-drinking countries like China are seduced by coffee's charms, it may soon become the world's favourite drink. What is driving this insatiable [...], and how has the beverage come to conquer the world? Coffee's story starts in the lush highlands of Ethiopia, the natural homeland of the delicate Coffee arabica plant. Although they are called \"coffee beans\", the plant is not a legume, and the fruits of the coffee tree look more like cherries when they are first picked. The seeds inside are extracted and dried before the process of roasting turns them into the hard, nutty nodules we feed into our grinders.",
            question:
              "What is the most suitable word to fill the blank part in the paragraph 1?",
            options: [
              { id: "a", text: "Drowsiness" },
              { id: "b", text: "Yawning" },
              { id: "c", text: "Full" },
              { id: "d", text: "Thirst" },
              { id: "e", text: "Smell" },
            ],
            correctAnswer: "d",
            explanation:
              "The text discusses the massive global consumption of a beverage (coffee). The word 'thirst' metaphorically and literally fits the context of an 'insatiable' (impossible to satisfy) desire for a drink.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              'The Oromo people from Ethiopia are thought to have been the first to have noticed the stimulating effects of these "beans", and coffee still remains an important element of their traditional [...]. Exactly how and when it spread beyond Ethiopia is still the subject of many legends, but the available historic records suggest that the Sufis of Yemen were the first truly devoted drinkers outside Africa in the Middle Ages.\n\nIts caffeine helped them to continue their practices late into the night, while the roasting of the bean was apparently taken as an analogy for the transcendence of the human soul. Coffee houses soon spread across the Middle East and the Ottoman Empire, where they caught the attention of Western traders, who took the beguiling drink back to their home countries in the 17th Century.',
            question:
              "What is the most suitable word to fill the blank part in the paragraph 2?",
            options: [
              { id: "a", text: "Cuisine" },
              { id: "b", text: "Cooking" },
              { id: "c", text: "Comforts" },
              { id: "d", text: "Welfares" },
              { id: "e", text: "Conveniences" },
            ],
            correctAnswer: "a",
            explanation:
              "The text refers to the cultural consumption of a food/beverage item by the Oromo people. 'Cuisine', meaning a style or method of cooking and preparing food associated with a specific culture, is the most appropriate word here.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              'Its caffeine helped them to continue their practices late into the night, while the roasting of the bean was apparently taken as an analogy for the transcendence of the human soul. Coffee houses soon spread across the Middle East and the Ottoman Empire, where they caught the attention of Western traders, who took the beguiling drink back to their home countries in the 17th Century.\n\n[...]. One newspaper advert in 1657 described the drink as "having many excellent virtues, closes the orifice of the stomach, fortifies the heart within, helps digestion, brights up the spirit." created by hellsxnki on twitter Some studies suggest that coffee can offer some protection from certain common diseases. A recent review of the evidence by Susanna Larsson at the Karolinska Institute in Sweden found that each cup of coffee per day is associated with a 6% reduction in the risk of type 2 diabetes. Laura Van Dongen at Wageningen University, meanwhile, has found that regular coffee drinkers were at least 20% less likely to die from heart disease.',
            question:
              "Which sentence below is the best fit for the blank in paragraph 4?",
            options: [
              {
                id: "a",
                text: "Many businesses grew out of these specialized coffee houses.",
              },
              {
                id: "b",
                text: "The early drinkers were firm believers in its medicinal properties.",
              },
              {
                id: "c",
                text: "Not only did the patrons drink coffee and engage in conversation, but they also listened to music, watched performers, played chess and kept current on the news.",
              },
              {
                id: "d",
                text: "Coffee began to replace the common breakfast drink beverages of the time - beer and wine.",
              },
              {
                id: "e",
                text: "Missionaries and travelers, traders, and colonists continued to carry coffee seeds to new lands, and coffee trees were planted worldwide.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "Based on the provided answer key, Option E connects the spread mentioned in the preceding paragraph (traders taking it back to their home countries) to its global proliferation.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "The five fires that on January 9th were still blazing in and around Los Angeles were already among the most destructive in California’s history. The scale is staggering, even for a state accustomed to natural disasters. Roughly 130,000 people were told to leave their homes; 2,000 buildings have been destroyed. Because wildfires have come to seem more like a [...] than a risk here, a lot will not be insured. State Farm, an insurer, decided not to renew 70% of its policies in Pacific Palisades, one of the worst-hit areas. ABC Los Angeles reckons this has left 1,600 homes there uninsured. Fire crews faced an uneven fight: in the small hours of the morning the neighbourhood fire hydrants ran dry.",
            question:
              "What is the most suitable word to fill the blank part in the paragraph 1?",
            options: [
              { id: "a", text: "Certainty" },
              { id: "b", text: "Impossibility" },
              { id: "c", text: "Likelihood" },
              { id: "d", text: "Chances" },
              { id: "e", text: "Probably" },
            ],
            correctAnswer: "a",
            explanation:
              "The text contrasts the word with 'risk' (which implies a possibility). Because wildfires happen so frequently in California, they are now viewed as a guaranteed occurrence, hence a 'Certainty'.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "People abandoned their cars and fled on foot as the flames approached. Firefighters then bulldozed their vehicles to reach the blaze. Workers evacuated patients in wheelchairs from a nursing home. The sky above the Pacific Coast Highway turned orange and thickened with smoke. Palm fronds smouldered. Extreme winds [...] several firestorms across Los Angeles beginning on January 7th. Nine months without measurable rainfall had primed the city to burn.",
            question:
              "What is the most suitable word to fill the blank part in the paragraph 2?",
            options: [
              { id: "a", text: "Inhibit" },
              { id: "b", text: "Hamper" },
              { id: "c", text: "Sparked" },
              { id: "d", text: "Hinder" },
              { id: "e", text: "Constraint" },
            ],
            correctAnswer: "c",
            explanation:
              "The sentence describes the cause of the firestorms. Extreme winds ignited or triggered them. The verb 'sparked' perfectly fits the context of initiating a fire or disaster.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "By January 9th, two large fires were burning at opposite ends of LA County, home to 10m people. One razed the Pacific Palisades, a wealthy neighbourhood on the coast, and swept into Malibu. Another was burning in the foothills above Pasadena, north-east of LA. Ash fell like snowflakes over the city’s downtown. Flames glowed crimson on the peaks when they were not obscured by black smoke, southern California’s own Mount Doom.\n\nLos Angeles is particularly [...] to fire. Its rich neighbourhoods and exurbs are where cities meet nature, stretching into the region’s rambling mountain ranges: the Santa Monicas, the Verdugos, the San Gabriels. Climate change is causing more extreme and more frequent fires, but ever more people are moving into these areas to find cheaper housing or, for LA’s well-heeled, that perfect mountain view. Until recently, January wouldn’t have been considered part of fire season. But planet-warming greenhouse-gas emissions have also increased the number of days each year with fire-starter weather conditions.",
            question:
              "What is the most suitable word to fill the blank part in the paragraph 4?",
            options: [
              { id: "a", text: "Vulnerable" },
              { id: "b", text: "Hard" },
              { id: "c", text: "Difficult" },
              { id: "d", text: "Hampered" },
              { id: "e", text: "Obstructed" },
            ],
            correctAnswer: "a",
            explanation:
              "The paragraph explains why Los Angeles suffers from so many fires (its geography where cities meet nature). 'Vulnerable' means susceptible to physical attack or harm, which accurately describes the city's relationship with wildfires.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.subcategory = "Words"; // Words subcategory
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Lost Words",
        description:
          "Master the art of contextual vocabulary by filling in missing words in English passages.",
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

seedLostWords();
