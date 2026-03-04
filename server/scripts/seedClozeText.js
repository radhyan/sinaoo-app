const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedClozeText = async () => {
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

    const targetId = "cloze-text";

    const stepsData = [
      {
        title: "Materi: Cloze Text",
        type: "reading",
        status: "active",
        description:
          "Pelajari apa itu Cloze Text dan tips ampuh untuk menjawab soal rumpang dalam bahasa Inggris.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Cloze Text?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Cloze Text adalah jenis soal di mana sebuah teks diberikan dengan beberapa kata yang dihilangkan, dan tugas teman-teman adalah mengisi bagian kosong tersebut dengan kata yang paling sesuai. Jenis soal ini menguji pemahaman konteks, tata bahasa, dan kosakata.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Tips & Trik Mengerjakan Cloze Text</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
                    Baca dan Pahami Teks secara bersamaan
                  </h5>
                  <ul class="list-disc list-inside text-body-l text-Grayscale-800 space-y-1">
                    <li>Baca teks dengan perlahan untuk memahami topik dan alurnya.</li>
                    <li>Soroti kata kunci agar memudahkan pengisian bagian yang rumpang.</li>
                  </ul>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
                    Hubungkan Frasa
                  </h5>
                  <p class="text-body-l text-Grayscale-800">Jangan mengisi setiap bagian kosong secara terpisah. Pastikan setiap kata terhubung logis dengan frasa lainnya.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
                    Identifikasi Jenis Kata
                  </h5>
                  <p class="text-body-l text-Grayscale-800">Perhatikan bagian kosong dan tentukan apakah yang dibutuhkan adalah kata benda, kata kerja, kata sifat atau lainnya.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">4</span>
                    Periksa Tone of Passage
                  </h5>
                  <p class="text-body-l text-Grayscale-800">Identifikasi apakah teks bernada serius, lucu, kritis, atau naratif, agar pilihan kata sesuai konteks.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">5</span>
                    Eliminasi Pilihan Jawaban
                  </h5>
                  <p class="text-body-l text-Grayscale-800">Jika ragu, coba hilangkan jawaban yang kurang sesuai dan berulang dengan konteks atau struktur kalimat.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">6</span>
                    Gunakan Keyword
                  </h5>
                  <p class="text-body-l text-Grayscale-800">Perhatikan kata sebelum dan sesudah bagian kosong untuk menemukan petunjuk jawaban yang paling cocok.</p>
                </div>

              </div>

              <div class="mt-4 bg-Primary-50 rounded-lg p-5 border border-Primary-200">
                <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                  <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">7</span>
                  Perbanyak Membaca dan Latihan Soal
                </h5>
                <p class="text-body-l text-Grayscale-800">Membaca secara rutin dan latih kemampuan dengan mengerjakan soal serupa.</p>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Reading: Exercise",
        type: "reading",
        status: "locked",
        description:
          "Latihan mengisi teks rumpang tentang Sanrio, ikon budaya pop Jepang.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Study</h3>
              <p class="text-body-l font-bold text-Primary-800 mb-3">Topic: Sanrio, Japan's Iconic Company</p>

              <div class="bg-Grayscale-50 p-6 rounded-lg mb-6 border border-Grayscale-200 space-y-4">
                <p class="text-body-l text-Grayscale-900 leading-relaxed" style="text-align: justify;">
                  Sanrio is a famous company in Japan, well-known for its adorable <strong>___ (1) ___</strong> and character designs. Founded in 1960, Sanrio initially started by selling small <strong>___ (2) ___</strong>, such as rubber sandals. The company later expanded its business by creating ___ (3) ___ characters, with Hello Kitty being its most ___ (4) ___ and recognized creation.
                </p>
                <p class="text-body-l text-Grayscale-900 leading-relaxed" style="text-align: justify;">
                  Hello Kitty, introduced in 1974, quickly became a ___ (5) ___ symbol of Japanese pop culture. Sanrio also collaborates with other global brands to ___ (6) ___ its popularity worldwide. Its products include stationery, accessories, and even ___ (7) ___. The company's ___ (8) ___ on spreading happiness and friendship has made it a global phenomenon.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Question 1 -->
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <p class="text-body-l font-bold text-Grayscale-900 mb-3">(1)</p>
                  <div class="space-y-2 mb-4">
                    <div class="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
                      <span class="text-body-l font-bold text-green-700">A. products</span>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded">
                      <span class="text-body-l text-Grayscale-800">B. services</span>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded">
                      <span class="text-body-l text-Grayscale-800">C. customers</span>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded">
                      <span class="text-body-l text-Grayscale-800">D. materials</span>
                    </div>
                  </div>
                  <div class="bg-Primary-50 rounded-lg p-3 border-l-4 border-Primary-500">
                    <p class="text-body-m font-bold text-Primary-800 mb-1">Pembahasan:</p>
                    <p class="text-body-m text-Grayscale-800" style="text-align: justify;">
                      <strong>Soal 1 = A. products</strong>, Kata "adorable" menunjukkan bahwa yang dimaksud adalah sesuatu berbentuk barang, bukan layanan (services) atau pelanggan (customers). Maka, "products" adalah jawaban paling sesuai.
                    </p>
                    <p class="text-body-m text-Primary-700 italic mt-1 font-semibold">Tips: Fokus pada kata sebelum atau sesudah bagian kosong untuk memastikan jawabannya logis.</p>
                  </div>
                </div>

                <!-- Question 2 -->
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <p class="text-body-l font-bold text-Grayscale-900 mb-3">(2)</p>
                  <div class="space-y-2 mb-4">
                    <div class="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
                      <span class="text-body-l font-bold text-green-700">A. merchandise</span>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded">
                      <span class="text-body-l text-Grayscale-800">B. tools</span>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded">
                      <span class="text-body-l text-Grayscale-800">C. souvenirs</span>
                    </div>
                    <div class="flex items-start gap-2 p-2 rounded">
                      <span class="text-body-l text-Grayscale-800">D. accessories</span>
                    </div>
                  </div>
                  <div class="bg-Primary-50 rounded-lg p-3 border-l-4 border-Primary-500">
                    <p class="text-body-m font-bold text-Primary-800 mb-1">Pembahasan:</p>
                    <p class="text-body-m text-Grayscale-800" style="text-align: justify;">
                      <strong>Soal 2 = A. Merchandise</strong>, Frasa "small" mengindikasikan barang dagangan kecil. Kata "merchandise" cocok karena berarti barang dagangan untuk dijual.
                    </p>
                    <p class="text-body-m text-Primary-700 italic mt-1 font-semibold">Tips: Pahami konteks yang menjelaskan barang apa yang dimaksud, seperti "rubber sandals."</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Cloze Text",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Y5741BsEFxI",
        description:
          "Video penjelasan mendalam mengenai langkah-langkah mengerjakan soal Cloze Text.",
      },
      {
        title: "Video: Cloze Text Practice",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/n_r2tbG12vE",
        description:
          "Latihan soal dan pembahasan tips praktis Cloze Text untuk persiapan ujian.",
      },
      {
        title: "Quiz: Cloze Text",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "In 2014, when Ashvin Kumar began filming No Fathers In Kashmir, a feature film set in the disputed region of Kashmir, the director knew it would be fraught — he didn't expect a nine-month battle and censorship now blocking it from 'public exhibition' in India. Kumar had to heavily edit four scenes so that India's Central Board of Film Certification would issue the film with a Universal Adult certificate (equivalent to PG) in April 2019. The Indian director, who received an Academy Award nomination for his 2004 short film Little Terrorist, remains hugely frustrated with the protracted struggle and believes it was politically motivated.",
            question:
              "Choose the correct word to fill in the blank: \"...censorship now [blank] it for 'public exhibition' in India.\"",
            options: [
              { id: "a", text: "To clear" },
              { id: "b", text: "To cleared" },
              { id: "c", text: "To clearing" },
              { id: "d", text: "To clearer" },
              { id: "e", text: "Clearing" },
            ],
            correctAnswer: "e",
            explanation:
              "'Clearing' is the correct form here as it functions as a present participle following the noun 'censorship,' describing the ongoing action of blocking the film from public exhibition. The other options are grammatically incorrect in this context.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Chamomile is a daisy-like plant which is often used in herb teas to help induce sleep. It has long been used for medicinal purposes and is one of the most popular single ingredients in herbal teas or tisanes. Chamomile also contains essential oil, including bisabolol and some of its salts, as well as flavonoids. It is one of the most popular herbs in the world.",
            question:
              'Choose the correct word to fill in the blank: "It has long been used for medicinal purposes [blank] is one of the most popular single ingredients in herbal teas or tisanes."',
            options: [
              { id: "a", text: "Furthermore" },
              { id: "b", text: "As well as" },
              { id: "c", text: "So" },
              { id: "d", text: "And" },
              { id: "e", text: "However" },
            ],
            correctAnswer: "d",
            explanation:
              "'And' is the correct conjunction here as it simply connects two parallel facts about chamomile. 'However' implies contrast, 'So' implies result, 'Furthermore' is too formal for this mid-sentence position, and 'As well as' does not fit the grammatical structure.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Since 2008, Barrack Obama has been president of the United States of America. He is a historic figure primarily because he is the first African American to hold the position of president. His policies have gained many supporters, as well as many detractors. He is possibly one of the most divisive presidents to govern the country in the history of the United States. Obama is a member of the Democratic Party with his presidency coming after the controversial George W. Bush left office.",
            question:
              'Choose the correct word to fill in the blank: "Obama is a member of the Democratic Party with his presidency coming [blank] the controversial George W. Bush left office."',
            options: [
              { id: "a", text: "After" },
              { id: "b", text: "At" },
              { id: "c", text: "Before" },
              { id: "d", text: "On" },
              { id: "e", text: "By" },
            ],
            correctAnswer: "a",
            explanation:
              "'After' correctly indicates that Obama's presidency came following George W. Bush's time in office. The other prepositions do not logically or grammatically fit the context of a time sequence.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "The Nile River is the longest river in the world. It flows northward from the lakes of Central Africa to the Mediterranean Sea. However, the Nile carries less water than many rivers because it flows through the Sahara desert in the north. 97% of Egypt's population lives in the river's valley. Africa's biggest river drains about 10 percent of the continent. It flows through many countries of eastern and northern Africa.",
            question:
              'Choose the correct word to fill in the blank: "However, the Nile carries less water than many rivers [blank], it flows through the Sahara desert in the north."',
            options: [
              { id: "a", text: "Yet" },
              { id: "b", text: "So" },
              { id: "c", text: "Because" },
              { id: "d", text: "Although" },
              { id: "e", text: "And" },
            ],
            correctAnswer: "c",
            explanation:
              "'Because' is correct as it introduces a cause — the reason the Nile carries less water is that it flows through the Sahara desert. The other options either imply contrast or addition, which do not fit the causal relationship being expressed.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "In a welcome piece of conservation news for the world's threatened wildlife, the giant panda has just moved from 'Endangered' to 'Vulnerable' on the global list of species at risk of extinction, demonstrating how an integrated approach can help save our planet's vanishing biodiversity.\n\nThe International Union for Conservation of Nature (IUCN) attributed the positive change to the giant panda's official status in the Red List of Threatened Species, pointing to the 17% rise in population in the decade to 2014, when a nationwide census found 1,864 giant pandas in the wild in China.",
            question:
              'Choose the correct word to fill in the blank: "...on the global list of species at risk of [blank], demonstrating how an integrated approach can help save our planet\'s vanishing biodiversity."',
            options: [
              { id: "a", text: "Alive" },
              { id: "b", text: "Extinction" },
              { id: "c", text: "Existing" },
              { id: "d", text: "Extinct" },
              { id: "e", text: "Survival" },
            ],
            correctAnswer: "b",
            explanation:
              "'Extinction' is correct as the phrase 'at risk of extinction' is a fixed, standard expression used to describe species in danger of disappearing. 'Extinct' is an adjective and cannot follow 'of' as a noun; 'survival' is the opposite meaning; 'alive' and 'existing' do not collocate with 'at risk of' in this context.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Although it has been commonly accepted that cats were domesticated in Egypt 4000 years ago, their history among human beings goes back much further. Wild cats are now known to have lived among the people of Mesopotamia over 100,000 years ago and to have been domesticated there approximately 12,000 BCE at about the same time as dogs, sheep and goats. Excavations in the past ten years have provided evidence that the Near Eastern Wildcat is the closest relative of the modern-day domestic cat and was bred by Mesopotamian farmers, most probably as a means of controlling pests such as mice, which were attracted by grain supplies.",
            question:
              'Choose the correct verb form to fill in the blank: "Although it has been commonly accepted that cats [blank] in Egypt 4000 years ago..."',
            options: [
              { id: "a", text: "Are first domesticated" },
              { id: "b", text: "Be domesticated" },
              { id: "c", text: "Were first domesticated" },
              { id: "d", text: "Been domesticated" },
              { id: "e", text: "Domesticated" },
            ],
            correctAnswer: "c",
            explanation:
              "'Were first domesticated' is correct because the sentence refers to a past event (4000 years ago) and uses passive voice to describe cats being domesticated. The simple past passive 'were domesticated' fits both the tense and the voice required.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "The Great Wall of China is one of the most impressive [blank] in the world. It was built over centuries to protect Chinese territories from invading forces. The wall runs across deserts, mountains, and plains, stretching more than 13,000 miles. It is estimated that the construction of the wall started during the Qin Dynasty and continued through several dynasties, including the Han and Ming Dynasties. The wall also served as a military route for troops and a barrier for trade. Today, it is a UNESCO World Heritage site and one of the most popular tourist attractions in the world.",
            question:
              "The Great Wall of China is one of the most impressive [blank] in the world.",
            options: [
              { id: "a", text: "Inventions" },
              { id: "b", text: "Constructions" },
              { id: "c", text: "Discoveries" },
              { id: "d", text: "Paintings" },
              { id: "e", text: "Routes" },
            ],
            correctAnswer: "b",
            explanation:
              "'Constructions' is the most appropriate word as the Great Wall is a man-made physical structure built over centuries. 'Inventions' refers to new devices or ideas, 'Discoveries' to found things, 'Paintings' to artworks, and 'Routes' to pathways — none of which accurately describe the Wall.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "The Great Wall of China is one of the most impressive constructions in the world. It was built over centuries to protect Chinese territories from invading forces. The wall [blank] across deserts, mountains, and plains, stretching more than 13,000 miles. It is estimated that the construction of the wall started during the Qin Dynasty and continued through several dynasties, including the Han and Ming Dynasties. The wall also served as a military route for troops and a barrier for trade. Today, it is a UNESCO World Heritage site and one of the most popular tourist attractions in the world.",
            question:
              "The Great Wall [blank] across deserts, mountains, and plains, stretching more than 13,000 miles.",
            options: [
              { id: "a", text: "Flies" },
              { id: "b", text: "Expands" },
              { id: "c", text: "Travels" },
              { id: "d", text: "Runs" },
              { id: "e", text: "Crosses" },
            ],
            correctAnswer: "d",
            explanation:
              "'Runs' is the correct verb to describe a wall or road extending across a landscape. It is a common collocation — 'the wall runs across' — meaning it extends continuously through those areas. The other options do not naturally collocate with a physical structure like a wall.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "The Great Wall of China is one of the most impressive constructions in the world. It was built over centuries to protect Chinese territories from invading forces. The wall runs across deserts, mountains, and plains, stretching more than 13,000 miles. It is estimated that the construction of the wall started during the Qin Dynasty and continued through several dynasties, including the Han and Ming Dynasties. The wall also served as a [blank] route for troops and a barrier for trade. Today, it is a UNESCO World Heritage site and one of the most popular tourist attractions in the world.",
            question:
              "The wall also served as a [blank] route for troops and a barrier for trade.",
            options: [
              { id: "a", text: "Defensive" },
              { id: "b", text: "Cultural" },
              { id: "c", text: "Military" },
              { id: "d", text: "Commercial" },
              { id: "e", text: "Historic" },
            ],
            correctAnswer: "c",
            explanation:
              "'Military' is correct because the route was specifically used by troops — soldiers — which indicates a military function. 'Defensive' describes the wall's overall purpose but not a route specifically for troops. 'Commercial' would relate to trade, not troops.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "The Great Wall of China is one of the most impressive constructions in the world. It was built over centuries to protect Chinese territories from invading forces. The wall runs across deserts, mountains, and plains, stretching more than 13,000 miles. It is estimated that the construction of the wall started during the Qin Dynasty and continued through several dynasties, including the Han and Ming Dynasties. The wall also served as a military route for troops and a barrier for trade. Today, it is a UNESCO World Heritage site and one of the most popular tourist attractions in the world.",
            question:
              "What is the main purpose of the Great Wall of China based on the text?",
            options: [
              {
                id: "a",
                text: "To serve as a major trade route between dynasties.",
              },
              {
                id: "b",
                text: "To protect Chinese territories from invading forces.",
              },
              {
                id: "c",
                text: "To showcase the architectural achievements of the Ming Dynasty.",
              },
              {
                id: "d",
                text: "To attract international tourists and boost the economy.",
              },
              {
                id: "e",
                text: "To mark the geographic boundaries of the Qin Dynasty.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The text explicitly states that the Great Wall 'was built over centuries to protect Chinese territories from invading forces,' making this its main stated purpose.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "The Great Wall of China is one of the most impressive constructions in the world. It was built over centuries to protect Chinese territories from invading forces. The wall runs across deserts, mountains, and plains, stretching more than 13,000 miles. It is estimated that the construction of the wall started during the Qin Dynasty and continued through several dynasties, including the Han and Ming Dynasties. The wall also served as a military route for troops and a barrier for trade. Today, it is a UNESCO World Heritage site and one of the most popular tourist attractions in the world.",
            question:
              "Choose the correct TRUE/FALSE combination for each statement about the text.\n1. The Great Wall was built entirely during the Ming Dynasty.\n2. The wall served as a trade barrier.\n3. The Great Wall runs across deserts, mountains, and plains.\n4. It stretches more than 15,000 miles.\n5. The Han Dynasty contributed to extending the Great Wall.",
            options: [
              { id: "a", text: "True - True - True - True - True" },
              { id: "b", text: "False - False - False - False - False" },
              { id: "c", text: "True - False - True - False - True" },
              { id: "d", text: "False - True - True - False - True" },
              { id: "e", text: "False - True - False - False - True" },
            ],
            correctAnswer: "d",
            explanation:
              "Statement 1 is FALSE — construction started in the Qin Dynasty and continued through several dynasties, not just the Ming. Statement 2 is TRUE — the wall served as a barrier for trade. Statement 3 is TRUE — explicitly stated in the text. Statement 4 is FALSE — it stretches more than 13,000 miles, not 15,000. Statement 5 is TRUE — the Han Dynasty is listed as one of the dynasties that continued construction.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "The Amazon Rainforest, often referred to as the \"lungs of the Earth,\" is home to an incredible diversity of plants and animals. It covers approximately 40% of the South American continent and is the world's largest rainforest. This unique ecosystem plays a vital role in regulating the planet's oxygen and carbon dioxide levels. However, human activities like deforestation and agriculture pose significant threats to its survival. Efforts to conserve this vital ecosystem have been increasing, with various organizations working to raise awareness about its importance to global health.",
            question:
              "The Amazon Rainforest is often referred to as the [blank] of the Earth.",
            options: [
              { id: "a", text: "Heart" },
              { id: "b", text: "Eyes" },
              { id: "c", text: "Brain" },
              { id: "d", text: "Lungs" },
              { id: "e", text: "Nerves" },
            ],
            correctAnswer: "d",
            explanation:
              "The text directly states the Amazon Rainforest is 'often referred to as the lungs of the Earth,' referencing its role in regulating oxygen and carbon dioxide levels.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "The Amazon Rainforest, often referred to as the \"lungs of the Earth,\" is home to an incredible diversity of plants and animals. It covers approximately 40% of the South American continent and is the world's largest rainforest. This unique ecosystem plays a vital role in regulating the planet's oxygen and carbon dioxide levels. However, [blank] activities like deforestation and agriculture pose significant threats to its survival. Efforts to conserve this vital ecosystem have been increasing, with various organizations working to raise awareness about its importance to global health.",
            question:
              "[blank] activities like deforestation and agriculture pose significant threats to the Amazon Rainforest.",
            options: [
              { id: "a", text: "Industrial" },
              { id: "b", text: "Governmental" },
              { id: "c", text: "Human" },
              { id: "d", text: "Illegal" },
              { id: "e", text: "Sustainable" },
            ],
            correctAnswer: "c",
            explanation:
              "'Human' is correct because the text refers to 'human activities' as the source of threats like deforestation and agriculture. These are activities carried out by people broadly, not exclusively industrial, governmental, or illegal actors.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "The Amazon Rainforest, often referred to as the \"lungs of the Earth,\" is home to an incredible diversity of plants and animals. It covers approximately 40% of the South American continent and is the world's largest rainforest. This unique ecosystem plays a vital role in regulating the planet's oxygen and carbon dioxide levels. However, human activities like deforestation and agriculture pose significant threats to its survival. Efforts to conserve this vital ecosystem have been increasing, with various organizations working to raise awareness about its importance to global health.",
            question:
              'Choose the correct TRUE/FALSE combination for each statement about the text.\n1. The Amazon Rainforest is referred to as the "Heart of the Earth."\n2. It helps regulate oxygen and carbon dioxide levels on the planet.\n3. Conservation efforts are decreasing awareness about its importance.\n4. The Amazon is home to nearly half of the world\'s species.',
            options: [
              { id: "a", text: "False - False - False - False" },
              { id: "b", text: "False - True - False - True" },
              { id: "c", text: "True - True - False - True" },
              { id: "d", text: "True - False - True - False" },
              { id: "e", text: "False - True - True - True" },
            ],
            correctAnswer: "b",
            explanation:
              "Statement 1 is FALSE — it is referred to as the 'lungs,' not the 'heart.' Statement 2 is TRUE — it plays a vital role in regulating oxygen and carbon dioxide levels. Statement 3 is FALSE — efforts to conserve are increasing awareness, not decreasing it. Statement 4 is TRUE — the text says it is home to incredible biodiversity, implying a vast proportion of species.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "The Amazon Rainforest, often referred to as the \"lungs of the Earth,\" is home to an incredible diversity of plants and animals. It covers approximately 40% of the South American continent and is the world's largest rainforest. This unique ecosystem plays a vital role in regulating the planet's oxygen and carbon dioxide levels. However, human activities like deforestation and agriculture pose significant threats to its survival. Efforts to conserve this vital ecosystem have been increasing, with various organizations working to raise awareness about its importance to global health.",
            question:
              "Based on the text, what can we infer about the importance of the Amazon Rainforest?",
            options: [
              {
                id: "a",
                text: "Its destruction would have little impact on the global climate.",
              },
              {
                id: "b",
                text: "It is important mainly for its economic value to South American countries.",
              },
              {
                id: "c",
                text: "Its role in regulating global oxygen and carbon levels makes it critical to the health of the entire planet.",
              },
              {
                id: "d",
                text: "Conservation efforts have already secured its survival for future generations.",
              },
              {
                id: "e",
                text: "It is only threatened by industrial activities, not agricultural ones.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The text describes the Amazon as the 'lungs of the Earth' that regulates oxygen and carbon dioxide levels globally, and notes it is under serious threat. This implies its survival is critical to planetary health, making option C the best inference.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Cloze Text";
      moduleDoc.description =
        "Learn how to fill in missing words in a passage by understanding context, grammar, and vocabulary clues.";
      moduleDoc.subcategory = "Restating and Cloze Text";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Cloze Text",
        description:
          "Learn how to fill in missing words in a passage by understanding context, grammar, and vocabulary clues.",
        subcategory: "Restating and Cloze Text",
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

seedClozeText();
