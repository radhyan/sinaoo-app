const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedCoreSentence = async () => {
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

    const targetId = "core-sentence";

    const stepsData = [
      {
        title: "Materi: Core Sentence",
        type: "reading",
        status: "active",
        description:
          "Learn what a core sentence is, how to identify it in a paragraph, and the types of questions related to core sentences.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Core Sentence</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Core Sentence adalah kalimat inti dalam sebuah paragraf yang mengungkapkan main idea. Kalimat ini sering disebut juga sebagai topic sentence. Biasanya, core sentence berada di awal, tengah, atau akhir paragraf. Namun, terkadang core sentence dapat tersebar atau tersirat (<em>implied main idea</em>).
              </p>

              <div class="pl-4 border-l-2 border-Secondary-300 space-y-2 mb-4">
                <p class="text-body-l font-bold text-Grayscale-900 mb-1">Karakteristik Core Sentence:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-2">
                  <li><span class="font-bold">Spesifik tapi Umum:</span> Core sentence cukup spesifik untuk memberikan fokus, tetapi cukup umum untuk mencakup semua detail pendukung.
                    <ul class="list-disc pl-5 mt-1">
                      <li>Contoh: "<span class="text-Primary-700 font-bold underline">Online education provides flexibility for students.</span>"</li>
                    </ul>
                  </li>
                  <li><span class="font-bold">Menyampaikan Gagasan Utama:</span> Kalimat ini merangkum inti dari paragraf.</li>
                  <li><span class="font-bold">Didukung oleh Detail Pendukung:</span> Detail lain dalam paragraf menjelaskan atau memperkuat core sentence.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">How to Find Core Sentence?</h3>

              <div class="space-y-6">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    1. Karakteristik Core Sentence
                  </h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-900 space-y-1">
                    <li><span class="font-bold">Mengandung Gagasan Utama:</span> Kalimat ini mencerminkan ide besar dari paragraf.</li>
                    <li><span class="font-bold">Tidak Spesifik:</span> Core sentence tidak memberikan detail, tetapi cukup luas untuk mencakup semua ide pendukung.</li>
                  </ul>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    2. Biasanya Terletak di Posisi Tertentu
                  </h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-900 space-y-1">
                    <li><span class="font-bold">Awal Paragraf:</span> Penulis langsung menyatakan gagasan utama.</li>
                    <li><span class="font-bold">Akhir Paragraf:</span> Penulis menyimpulkan ide setelah memberikan detail.</li>
                    <li><span class="font-bold">Tengah Paragraf:</span> Kadang-kadang gagasan utama diletakkan di tengah, diapit oleh kalimat pengantar dan detail pendukung.</li>
                  </ul>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    3. Core Sentence Tersirat (Implied Main Idea)
                  </h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-900 space-y-1">
                    <li>Kadang-kadang, gagasan utama tidak dinyatakan secara langsung. Dalam kasus ini, pembaca perlu menyimpulkan core sentence berdasarkan isi paragraf.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis-Jenis Soal</h3>

              <div class="space-y-6">
                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">1. Soal Tentang Main Idea</h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                    <li>"What is the main idea of the paragraph?"</li>
                    <li>"Which sentence best expresses the main idea of the text?"</li>
                    <li>"What is the main focus of the paragraph?"</li>
                    <li>"The paragraph mainly discusses..."</li>
                    <li>"What does the author emphasize in this paragraph?"</li>
                  </ul>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">2. Soal Tentang Topic</h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                    <li>"Which sentence best expresses the main idea of the paragraph?"</li>
                    <li>"What is the core sentence of this paragraph?"</li>
                    <li>"Which of the following sentences represents the topic sentence?"</li>
                    <li>"Which of the following is the best restatement of the paragraph's main idea?"</li>
                    <li>"Which sentence summarizes the main idea of the paragraph?"</li>
                    <li>"What is the best paraphrase of the core sentence?"</li>
                    <li>"What is the implied main idea of this paragraph?"</li>
                    <li>"Which sentence could be added to express the core idea of the paragraph?"</li>
                    <li>"If the main idea is not explicitly stated, which of the following best represents it?"</li>
                    <li>"Which sentence does NOT contribute to the main idea of the paragraph?"</li>
                    <li>"Which of the following is a supporting detail, not the core sentence?"</li>
                    <li>"Which of the following sentences is NOT part of the main idea?"</li>
                    <li>"In which part of the paragraph is the main idea stated?"</li>
                    <li>"Does the core sentence appear at the beginning, middle, or end of the paragraph?"</li>
                    <li>"How does the title relate to the core sentence of the paragraph?"</li>
                    <li>"Which sentence in the paragraph reflects the title most accurately?"</li>
                    <li>"What is the connection between the title and the main idea?"</li>
                    <li>"What context does the paragraph provide to support the core sentence?"</li>
                    <li>"Which of the following sentences gives context to the main idea?"</li>
                    <li>"What is the background provided for the core sentence?"</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Example Analysis</h3>

              <div class="space-y-6">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Example Analysis 1</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">"Online education has transformed the way people learn. It offers flexibility, allowing students to study at their own pace. Additionally, it reduces the need for commuting, saving both time and money. As a result, online education is becoming increasingly popular among learners worldwide."</p>
                  </div>
                  <div class="pl-4 border-l-2 border-Primary-300 space-y-2">
                    <p class="text-body-l"><span class="font-bold text-Primary-700">1. Core Sentence:</span> "Online education has transformed the way people learn."</p>
                    <p class="text-body-l"><span class="font-bold text-Primary-700">2. Detail Pendukung:</span></p>
                    <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                      <li>Memberikan fleksibilitas.</li>
                      <li>Mengurangi kebutuhan untuk bepergian.</li>
                      <li>Menjadi populer di seluruh dunia.</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Example Analysis 2</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">"The rainforest is home to a vast array of species. From colorful birds to unique plants, the biodiversity in rainforests is unmatched. Unfortunately, deforestation threatens this delicate ecosystem. If action is not taken, many species may face extinction."</p>
                  </div>
                  <div class="pl-4 border-l-2 border-Primary-300 space-y-2">
                    <p class="text-body-l"><span class="font-bold text-Primary-700">1. Core Sentence:</span> "The rainforest is home to a vast array of species."</p>
                    <p class="text-body-l"><span class="font-bold text-Primary-700">2. Detail Pendukung:</span></p>
                    <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                      <li>Keanekaragaman hayati luar biasa.</li>
                      <li>Ancaman deforestasi.</li>
                      <li>Risiko kepunahan.</li>
                    </ul>
                  </div>
                </div>

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
          "Practice identifying core sentences with guided exercises and detailed answer explanations.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercises</h3>

              <div class="space-y-8">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Exercise 1</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">In today's technology-driven world, coding is no longer a skill reserved for adults or professionals. It has become an essential competency for everyone, including children. Introducing coding to kids at an early age provides numerous benefits. First, it enhances their problem-solving and critical thinking skills, which are crucial for tackling real-world challenges. Second, coding fosters creativity, as children learn to design their own games, animations, and applications. Additionally, coding helps kids build resilience by teaching them to embrace failure as part of the learning process. By learning coding, children are also better prepared for future job opportunities in industries where technological literacy is highly valued. As technology continues to advance, equipping children with coding skills ensures they remain competitive and innovative in the global economy.</p>
                  </div>
                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">1. Which sentence best expresses the main idea of the paragraph?</p>
                  <div class="pl-4 text-body-l text-Grayscale-800 space-y-1 mb-3">
                    <p><span class="font-bold">A.</span> Coding fosters creativity, as children learn to design their own games, animations, and applications.</p>
                    <p><span class="font-bold">B.</span> Coding is no longer a skill reserved for adults or professionals.</p>
                    <p><span class="font-bold text-Primary-700">C.</span> Introducing coding to kids at an early age provides numerous benefits.</p>
                    <p><span class="font-bold">D.</span> By learning coding, children are better prepared for future job opportunities.</p>
                    <p><span class="font-bold">E.</span> Equipping children with coding skills ensures they remain competitive in the global economy.</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-green-800"><span class="font-bold">Jawaban: C.</span> Introducing coding to kids at an early age provides numerous benefits.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Kalimat ini adalah core sentence karena menyatakan gagasan utama bahwa mengajarkan coding kepada anak-anak memiliki banyak manfaat. Kalimat lainnya adalah detail pendukung yang menjelaskan manfaat tersebut secara spesifik.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Exercise 2</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Citizen diplomacy is a concept that highlights the role of individuals in fostering international understanding and cooperation. Unlike traditional diplomacy, which is conducted by governments, citizen diplomacy relies on personal interactions between people from different nations. These interactions often take the form of cultural exchanges, educational programs, volunteer work, or grassroots initiatives. By participating in such activities, individuals can build trust and break down stereotypes, paving the way for stronger relationships between countries. For example, hosting a foreign exchange student can help both the host family and the student develop a deeper appreciation for each other's culture. Similarly, volunteering abroad allows individuals to contribute to local communities while promoting goodwill. In an increasingly interconnected world, citizen diplomacy is a powerful tool for addressing global challenges and fostering peace at a personal level.</p>
                  </div>
                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">2. What is the main idea of this paragraph?</p>
                  <div class="pl-4 text-body-l text-Grayscale-800 space-y-1 mb-3">
                    <p><span class="font-bold">A.</span> Citizen diplomacy relies on personal interactions between people from different nations.</p>
                    <p><span class="font-bold text-Primary-700">B.</span> Citizen diplomacy is a powerful tool for addressing global challenges and fostering peace.</p>
                    <p><span class="font-bold">C.</span> Hosting a foreign exchange student promotes cultural understanding.</p>
                    <p><span class="font-bold">D.</span> Citizen diplomacy highlights the role of individuals in fostering international cooperation.</p>
                    <p><span class="font-bold">E.</span> Volunteering abroad allows individuals to contribute to local communities while promoting goodwill.</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-green-800"><span class="font-bold">Jawaban: B.</span> Citizen diplomacy is a powerful tool for addressing global challenges and fostering peace.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Kalimat ini adalah core sentence karena mencerminkan gagasan utama bahwa citizen diplomacy adalah alat yang efektif untuk mengatasi tantangan global dan mempromosikan perdamaian. Kalimat lainnya adalah contoh atau detail pendukung.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Exercise 3</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">"Indonesia is renowned for its rich variety of spices, many of which have been used for centuries for their medicinal properties. Turmeric, a staple in Indonesian cuisine, contains curcumin, a compound known for its powerful anti-inflammatory and antioxidant effects. It is often used to alleviate symptoms of arthritis and boost the immune system. Ginger, another popular spice, is widely recognized for its ability to improve digestion and relieve nausea. It is also believed to have anti-inflammatory properties, making it useful for managing muscle pain and soreness. Meanwhile, cinnamon is celebrated for its ability to regulate blood sugar levels and enhance metabolism, making it a valuable addition to the diets of people with diabetes. By incorporating these spices into their daily meals, Indonesians not only enrich the flavors of their dishes but also promote overall health and well-being. The diverse health benefits of Indonesian spices highlight their importance beyond the kitchen."</p>
                  </div>
                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">3. Which sentence summarizes the main idea of the paragraph?</p>
                  <div class="pl-4 text-body-l text-Grayscale-800 space-y-1 mb-3">
                    <p><span class="font-bold">A.</span> Turmeric contains curcumin, a compound known for its powerful anti-inflammatory and antioxidant effects.</p>
                    <p><span class="font-bold text-Primary-700">B.</span> Indonesian spices have been used for centuries for their medicinal properties.</p>
                    <p><span class="font-bold">C.</span> Ginger improves digestion and relieves nausea.</p>
                    <p><span class="font-bold">D.</span> By incorporating these spices into their daily meals, Indonesians promote overall health and well-being.</p>
                    <p><span class="font-bold">E.</span> The diverse health benefits of Indonesian spices highlight their importance beyond the kitchen.</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-green-800"><span class="font-bold">Jawaban: B.</span> Indonesian spices have been used for centuries for their medicinal properties.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Untuk memahami soal ini, kita harus mencari gagasan utama (main idea) dari paragraf. Gagasan utama biasanya dijelaskan dalam core sentence (kalimat inti). Dalam paragraf ini, topiknya adalah tentang rempah-rempah Indonesia. Paragraf tersebut menjelaskan bahwa rempah-rempah seperti kunyit, jahe, dan kayu manis memiliki banyak manfaat kesehatan.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Untuk menemukan core sentence, kita perlu mencari kalimat yang mencerminkan ide besar dari paragraf tersebut. Biasanya, kalimat ini muncul di awal paragraf. Dalam teks ini, kalimat pertama mengatakan: "Indonesia is renowned for its rich variety of spices, many of which have been used for centuries for their medicinal properties." Kalimat ini adalah core sentence karena menjelaskan ide utama bahwa rempah-rempah Indonesia memiliki manfaat kesehatan yang sudah dikenal sejak lama. Kalimat lainnya, seperti yang menjelaskan kunyit, jahe, dan kayu manis, hanyalah detail pendukung yang memberikan contoh spesifik dari manfaat kesehatan rempah-rempah tersebut.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Pilihan lainnya seperti A, C, D, dan E hanya fokus pada detail tertentu atau kesimpulan, bukan ide utama paragraf.</p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Core Sentence",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/QacruNSkA74",
        description:
          "Video pembelajaran tentang cara menemukan core sentence dalam sebuah paragraf bacaan bahasa Inggris.",
      },
      {
        title: "Video: Core Sentence Practice",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/NCMkg98FkPA",
        description:
          "Video latihan dan pembahasan soal-soal core sentence untuk persiapan UTBK.",
      },
      {
        title: "Quiz: Core Sentence",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "The Indonesian government has long subsidized these small LPG canisters to ensure affordability for low-income households and small businesses. However, the recent shortages suggest inefficiencies in the supply chain, possible hoarding, and issues with distribution mechanisms.\nReports indicate that vendors and households are lining up for hours, often only to find empty shelves. Some have turned to alternative fuels, such as firewood or kerosene, which are less efficient and more environmentally harmful. Meanwhile, unscrupulous distributors may be diverting subsidized LPG to the open market, where it can be sold at a higher price.\nThe crisis underscores the need for better enforcement and transparency in subsidy distribution. Experts argue that digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure that subsidies reach their intended recipients.\nAs the government scrambles to address the shortages, the situation serves as a wake-up call: without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures. Addressing these governance issues is not just about economics—it is about ensuring basic human dignity.",
            question:
              "What is the primary purpose of the Indonesian government subsidizing small LPG canisters?",
            options: [
              { id: "a", text: "To promote the use of alternative fuels" },
              {
                id: "b",
                text: "To boost the national economy through exports",
              },
              {
                id: "c",
                text: "To ensure affordability for low-income households and small businesses",
              },
              {
                id: "d",
                text: "To support large industries with energy needs",
              },
              { id: "e", text: "To create a competitive market for LPG" },
            ],
            correctAnswer: "c",
            explanation:
              "The passage directly states that the Indonesian government subsidizes small LPG canisters to ensure affordability for low-income households and small businesses.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "The Indonesian government has long subsidized these small LPG canisters to ensure affordability for low-income households and small businesses. However, the recent shortages suggest inefficiencies in the supply chain, possible hoarding, and issues with distribution mechanisms.\nReports indicate that vendors and households are lining up for hours, often only to find empty shelves. Some have turned to alternative fuels, such as firewood or kerosene, which are less efficient and more environmentally harmful. Meanwhile, unscrupulous distributors may be diverting subsidized LPG to the open market, where it can be sold at a higher price.\nThe crisis underscores the need for better enforcement and transparency in subsidy distribution. Experts argue that digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure that subsidies reach their intended recipients.\nAs the government scrambles to address the shortages, the situation serves as a wake-up call: without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures. Addressing these governance issues is not just about economics—it is about ensuring basic human dignity.",
            question:
              "According to the article, which of the following factors is NOT mentioned as a possible cause for the LPG shortages?",
            options: [
              { id: "a", text: "Supply chain inefficiencies" },
              { id: "b", text: "Hoarding" },
              { id: "c", text: "Distribution issues" },
              { id: "d", text: "International sanctions" },
              { id: "e", text: "Diversion of subsidized LPG" },
            ],
            correctAnswer: "d",
            explanation:
              "The passage mentions supply chain inefficiencies, hoarding, distribution issues, and diversion of subsidized LPG as possible causes. International sanctions are never mentioned.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "The Indonesian government has long subsidized these small LPG canisters to ensure affordability for low-income households and small businesses. However, the recent shortages suggest inefficiencies in the supply chain, possible hoarding, and issues with distribution mechanisms.\nReports indicate that vendors and households are lining up for hours, often only to find empty shelves. Some have turned to alternative fuels, such as firewood or kerosene, which are less efficient and more environmentally harmful. Meanwhile, unscrupulous distributors may be diverting subsidized LPG to the open market, where it can be sold at a higher price.\nThe crisis underscores the need for better enforcement and transparency in subsidy distribution. Experts argue that digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure that subsidies reach their intended recipients.\nAs the government scrambles to address the shortages, the situation serves as a wake-up call: without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures. Addressing these governance issues is not just about economics—it is about ensuring basic human dignity.",
            question:
              "What consequence is described for households forced to seek alternative fuels?",
            options: [
              {
                id: "a",
                text: "They experience higher efficiency in energy use.",
              },
              { id: "b", text: "They benefit from environmental advantages." },
              {
                id: "c",
                text: "They resort to using less efficient and more harmful fuels like firewood or kerosene.",
              },
              {
                id: "d",
                text: "They obtain free alternative fuels from the government.",
              },
              {
                id: "e",
                text: "They improve their economic situation significantly.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The passage states that some households have turned to alternative fuels such as firewood or kerosene, which are described as less efficient and more environmentally harmful.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "The Indonesian government has long subsidized these small LPG canisters to ensure affordability for low-income households and small businesses. However, the recent shortages suggest inefficiencies in the supply chain, possible hoarding, and issues with distribution mechanisms.\nReports indicate that vendors and households are lining up for hours, often only to find empty shelves. Some have turned to alternative fuels, such as firewood or kerosene, which are less efficient and more environmentally harmful. Meanwhile, unscrupulous distributors may be diverting subsidized LPG to the open market, where it can be sold at a higher price.\nThe crisis underscores the need for better enforcement and transparency in subsidy distribution. Experts argue that digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure that subsidies reach their intended recipients.\nAs the government scrambles to address the shortages, the situation serves as a wake-up call: without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures. Addressing these governance issues is not just about economics—it is about ensuring basic human dignity.",
            question:
              "What solution does the article propose to address the mismanagement of LPG subsidy distribution?",
            options: [
              { id: "a", text: "Increasing the subsidies" },
              {
                id: "b",
                text: "Implementing digital monitoring systems and stricter oversight",
              },
              { id: "c", text: "Banning the sale of LPG on the open market" },
              {
                id: "d",
                text: "Reducing the number of small LPG canisters available",
              },
              { id: "e", text: "Promoting the use of alternative fuels" },
            ],
            correctAnswer: "b",
            explanation:
              "The passage explicitly states that experts argue digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure subsidies reach their intended recipients.",
            points: 5,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "The Indonesian government has long subsidized these small LPG canisters to ensure affordability for low-income households and small businesses. However, the recent shortages suggest inefficiencies in the supply chain, possible hoarding, and issues with distribution mechanisms.\nReports indicate that vendors and households are lining up for hours, often only to find empty shelves. Some have turned to alternative fuels, such as firewood or kerosene, which are less efficient and more environmentally harmful. Meanwhile, unscrupulous distributors may be diverting subsidized LPG to the open market, where it can be sold at a higher price.\nThe crisis underscores the need for better enforcement and transparency in subsidy distribution. Experts argue that digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure that subsidies reach their intended recipients.\nAs the government scrambles to address the shortages, the situation serves as a wake-up call: without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures. Addressing these governance issues is not just about economics—it is about ensuring basic human dignity.",
            question:
              "What broader implication does the article suggest the LPG crisis has on society?",
            options: [
              {
                id: "a",
                text: "It demonstrates the success of government policies.",
              },
              {
                id: "b",
                text: "It shows that only economic issues need to be addressed.",
              },
              {
                id: "c",
                text: "It highlights the need for comprehensive reform to protect vulnerable communities and uphold human dignity.",
              },
              {
                id: "d",
                text: "It indicates that alternative fuels are the better option for energy security.",
              },
              {
                id: "e",
                text: "It suggests that private companies are solely responsible for the crisis.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The article concludes that without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures, and that addressing governance issues is about ensuring basic human dignity.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "This initiative signals a shift in the TNI's approach to modern warfare, recognizing that cyber threats pose as significant a risk to national security as conventional military threats. With increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises, the need for a highly skilled cyber force has become more urgent.\nBy recruiting civilians with IT expertise, the TNI aims to bridge the talent gap and strengthen its cyber capabilities. Many cybersecurity experts in Indonesia work in the private sector or academia, making direct recruitment from these fields a strategic move. However, integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.\nExperts suggest that the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force. Collaboration with universities and technology companies could also help build a sustainable pipeline of cybersecurity professionals.\nAs cyber threats evolve, the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure. However, its implementation will require careful planning to ensure that the country's cyber defense is both robust and adaptive to emerging threats.",
            question:
              "What is the primary reason for the TNI's initiative to recruit civilian IT experts?",
            options: [
              {
                id: "a",
                text: "To replace conventional military forces with cyber specialists",
              },
              {
                id: "b",
                text: "To address the increasing threat of cyberattacks on national security",
              },
              {
                id: "c",
                text: "To expand Indonesia's private cybersecurity sector",
              },
              {
                id: "d",
                text: "To train civilians for combat roles in modern warfare",
              },
              {
                id: "e",
                text: "To reduce military spending on technology development",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states that increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises have made the need for a skilled cyber force more urgent, which is the primary reason for the TNI's recruitment initiative.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "This initiative signals a shift in the TNI's approach to modern warfare, recognizing that cyber threats pose as significant a risk to national security as conventional military threats. With increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises, the need for a highly skilled cyber force has become more urgent.\nBy recruiting civilians with IT expertise, the TNI aims to bridge the talent gap and strengthen its cyber capabilities. Many cybersecurity experts in Indonesia work in the private sector or academia, making direct recruitment from these fields a strategic move. However, integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.\nExperts suggest that the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force. Collaboration with universities and technology companies could also help build a sustainable pipeline of cybersecurity professionals.\nAs cyber threats evolve, the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure. However, its implementation will require careful planning to ensure that the country's cyber defense is both robust and adaptive to emerging threats.",
            question:
              "What challenge might arise from integrating civilian IT experts into the military?",
            options: [
              {
                id: "a",
                text: "Difficulty in adapting to military discipline and protocols",
              },
              {
                id: "b",
                text: "Lack of interest from private sector cybersecurity experts",
              },
              {
                id: "c",
                text: "Insufficient government funding for cybersecurity programs",
              },
              {
                id: "d",
                text: "Declining need for cybersecurity in the military",
              },
              {
                id: "e",
                text: "Over-reliance on traditional warfare strategies",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The passage explicitly mentions that integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "This initiative signals a shift in the TNI's approach to modern warfare, recognizing that cyber threats pose as significant a risk to national security as conventional military threats. With increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises, the need for a highly skilled cyber force has become more urgent.\nBy recruiting civilians with IT expertise, the TNI aims to bridge the talent gap and strengthen its cyber capabilities. Many cybersecurity experts in Indonesia work in the private sector or academia, making direct recruitment from these fields a strategic move. However, integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.\nExperts suggest that the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force. Collaboration with universities and technology companies could also help build a sustainable pipeline of cybersecurity professionals.\nAs cyber threats evolve, the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure. However, its implementation will require careful planning to ensure that the country's cyber defense is both robust and adaptive to emerging threats.",
            question:
              "What factors do experts believe will determine the success of this initiative?",
            options: [
              {
                id: "a",
                text: "The ability of the government to increase military budgets",
              },
              {
                id: "b",
                text: "The expansion of Indonesia's private IT industry",
              },
              {
                id: "c",
                text: "Clear training programs, attractive incentives, and career development",
              },
              {
                id: "d",
                text: "Strict military training for all cybersecurity experts",
              },
              {
                id: "e",
                text: "The development of more advanced cyberattack tools",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The passage states that experts suggest the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "This initiative signals a shift in the TNI's approach to modern warfare, recognizing that cyber threats pose as significant a risk to national security as conventional military threats. With increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises, the need for a highly skilled cyber force has become more urgent.\nBy recruiting civilians with IT expertise, the TNI aims to bridge the talent gap and strengthen its cyber capabilities. Many cybersecurity experts in Indonesia work in the private sector or academia, making direct recruitment from these fields a strategic move. However, integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.\nExperts suggest that the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force. Collaboration with universities and technology companies could also help build a sustainable pipeline of cybersecurity professionals.\nAs cyber threats evolve, the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure. However, its implementation will require careful planning to ensure that the country's cyber defense is both robust and adaptive to emerging threats.",
            question:
              "How could collaboration with universities and technology companies benefit the TNI's cyber force?",
            options: [
              {
                id: "a",
                text: "By ensuring a continuous supply of cybersecurity professionals",
              },
              {
                id: "b",
                text: "By outsourcing all cybersecurity work to the private sector",
              },
              {
                id: "c",
                text: "By replacing traditional military personnel with IT experts",
              },
              {
                id: "d",
                text: "By reducing the need for government involvement in cybersecurity",
              },
              {
                id: "e",
                text: "By preventing all cyberattacks before they occur",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The passage states that collaboration with universities and technology companies could help build a sustainable pipeline of cybersecurity professionals, ensuring a continuous supply of talent for the cyber force.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "This initiative signals a shift in the TNI's approach to modern warfare, recognizing that cyber threats pose as significant a risk to national security as conventional military threats. With increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises, the need for a highly skilled cyber force has become more urgent.\nBy recruiting civilians with IT expertise, the TNI aims to bridge the talent gap and strengthen its cyber capabilities. Many cybersecurity experts in Indonesia work in the private sector or academia, making direct recruitment from these fields a strategic move. However, integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.\nExperts suggest that the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force. Collaboration with universities and technology companies could also help build a sustainable pipeline of cybersecurity professionals.\nAs cyber threats evolve, the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure. However, its implementation will require careful planning to ensure that the country's cyber defense is both robust and adaptive to emerging threats.",
            question:
              "What broader implication does the article suggest about the TNI's focus on cybersecurity?",
            options: [
              {
                id: "a",
                text: "It marks an important step in protecting Indonesia's digital infrastructure.",
              },
              {
                id: "b",
                text: "It signals the decline of traditional military strategies.",
              },
              {
                id: "c",
                text: "It highlights the government's plan to privatize national security.",
              },
              {
                id: "d",
                text: "It indicates that Indonesia no longer faces physical military threats.",
              },
              {
                id: "e",
                text: "It shows that cybersecurity threats are not a serious concern.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The passage concludes that the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              'Many young job seekers find themselves stuck in an endless loop—employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience. As a result, fresh graduates often struggle to secure their first job, leading to prolonged job searches and underemployment.\nOne reason for this shift is the increasing automation and digitization of workplaces. Many routine tasks that were once assigned to entry-level employees are now handled by software or outsourced, leaving only more complex responsibilities that require specialized skills. Employers expect candidates to come in ready to contribute immediately, rather than invest time and resources in extensive training.\nTo adapt, many young professionals turn to internships, freelance work, and online certifications to build their résumés before even entering the job market. While these alternatives provide valuable experience, they also blur the line between unpaid labor and legitimate career-building opportunities. Some argue that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.\nDespite these challenges, entry-level jobs are not entirely obsolete. They remain a crucial gateway into industries, though the definition of "entry-level" has evolved. Job seekers who proactively develop in-demand skills—such as data analysis, coding, digital marketing, or project management—stand a better chance of breaking into competitive fields. Networking and leveraging platforms like LinkedIn can also help fresh graduates connect with opportunities beyond traditional job postings.\nUltimately, while the landscape of entry-level employment has changed, career growth is still possible for those who adapt. The key lies in continuous learning, strategic job searching, and seeking alternative ways to gain experience in a rapidly shifting job market.',
            question:
              "What is the main issue faced by young job seekers according to the article?",
            options: [
              {
                id: "a",
                text: "Employers now prefer older employees over fresh graduates",
              },
              {
                id: "b",
                text: "Entry-level jobs no longer exist in most industries",
              },
              {
                id: "c",
                text: "Employers require experience for jobs meant to provide experience",
              },
              {
                id: "d",
                text: "The government has restricted entry-level job opportunities",
              },
              {
                id: "e",
                text: "Fresh graduates are unwilling to develop new skills",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The passage opens by describing young job seekers stuck in an endless loop where employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              'Many young job seekers find themselves stuck in an endless loop—employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience. As a result, fresh graduates often struggle to secure their first job, leading to prolonged job searches and underemployment.\nOne reason for this shift is the increasing automation and digitization of workplaces. Many routine tasks that were once assigned to entry-level employees are now handled by software or outsourced, leaving only more complex responsibilities that require specialized skills. Employers expect candidates to come in ready to contribute immediately, rather than invest time and resources in extensive training.\nTo adapt, many young professionals turn to internships, freelance work, and online certifications to build their résumés before even entering the job market. While these alternatives provide valuable experience, they also blur the line between unpaid labor and legitimate career-building opportunities. Some argue that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.\nDespite these challenges, entry-level jobs are not entirely obsolete. They remain a crucial gateway into industries, though the definition of "entry-level" has evolved. Job seekers who proactively develop in-demand skills—such as data analysis, coding, digital marketing, or project management—stand a better chance of breaking into competitive fields. Networking and leveraging platforms like LinkedIn can also help fresh graduates connect with opportunities beyond traditional job postings.\nUltimately, while the landscape of entry-level employment has changed, career growth is still possible for those who adapt. The key lies in continuous learning, strategic job searching, and seeking alternative ways to gain experience in a rapidly shifting job market.',
            question: "Why have entry-level jobs become harder to obtain?",
            options: [
              {
                id: "a",
                text: "The rise of automation and outsourcing has reduced available positions",
              },
              { id: "b", text: "Employers are no longer hiring new employees" },
              {
                id: "c",
                text: "Universities are not adequately preparing students for jobs",
              },
              { id: "d", text: "The global economy is in a severe recession" },
              {
                id: "e",
                text: "Companies prefer to train employees after hiring them",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The passage explains that increasing automation and digitization has meant many routine tasks once assigned to entry-level employees are now handled by software or outsourced, reducing available entry-level positions.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              'Many young job seekers find themselves stuck in an endless loop—employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience. As a result, fresh graduates often struggle to secure their first job, leading to prolonged job searches and underemployment.\nOne reason for this shift is the increasing automation and digitization of workplaces. Many routine tasks that were once assigned to entry-level employees are now handled by software or outsourced, leaving only more complex responsibilities that require specialized skills. Employers expect candidates to come in ready to contribute immediately, rather than invest time and resources in extensive training.\nTo adapt, many young professionals turn to internships, freelance work, and online certifications to build their résumés before even entering the job market. While these alternatives provide valuable experience, they also blur the line between unpaid labor and legitimate career-building opportunities. Some argue that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.\nDespite these challenges, entry-level jobs are not entirely obsolete. They remain a crucial gateway into industries, though the definition of "entry-level" has evolved. Job seekers who proactively develop in-demand skills—such as data analysis, coding, digital marketing, or project management—stand a better chance of breaking into competitive fields. Networking and leveraging platforms like LinkedIn can also help fresh graduates connect with opportunities beyond traditional job postings.\nUltimately, while the landscape of entry-level employment has changed, career growth is still possible for those who adapt. The key lies in continuous learning, strategic job searching, and seeking alternative ways to gain experience in a rapidly shifting job market.',
            question:
              "What is one negative consequence of relying on internships and freelance work for experience?",
            options: [
              {
                id: "a",
                text: "It creates financial barriers for those who cannot afford unpaid work",
              },
              {
                id: "b",
                text: "It eliminates the need for traditional employment",
              },
              {
                id: "c",
                text: "It guarantees immediate job placement after completion",
              },
              {
                id: "d",
                text: "It prevents young professionals from developing essential skills",
              },
              { id: "e", text: "It makes entry-level jobs obsolete" },
            ],
            correctAnswer: "a",
            explanation:
              "The passage states that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              'Many young job seekers find themselves stuck in an endless loop—employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience. As a result, fresh graduates often struggle to secure their first job, leading to prolonged job searches and underemployment.\nOne reason for this shift is the increasing automation and digitization of workplaces. Many routine tasks that were once assigned to entry-level employees are now handled by software or outsourced, leaving only more complex responsibilities that require specialized skills. Employers expect candidates to come in ready to contribute immediately, rather than invest time and resources in extensive training.\nTo adapt, many young professionals turn to internships, freelance work, and online certifications to build their résumés before even entering the job market. While these alternatives provide valuable experience, they also blur the line between unpaid labor and legitimate career-building opportunities. Some argue that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.\nDespite these challenges, entry-level jobs are not entirely obsolete. They remain a crucial gateway into industries, though the definition of "entry-level" has evolved. Job seekers who proactively develop in-demand skills—such as data analysis, coding, digital marketing, or project management—stand a better chance of breaking into competitive fields. Networking and leveraging platforms like LinkedIn can also help fresh graduates connect with opportunities beyond traditional job postings.\nUltimately, while the landscape of entry-level employment has changed, career growth is still possible for those who adapt. The key lies in continuous learning, strategic job searching, and seeking alternative ways to gain experience in a rapidly shifting job market.',
            question:
              "How can fresh graduates improve their chances of securing a job?",
            options: [
              { id: "a", text: "By focusing solely on academic achievements" },
              {
                id: "b",
                text: "By acquiring in-demand skills and networking actively",
              },
              {
                id: "c",
                text: "By waiting for companies to lower their hiring standards",
              },
              { id: "d", text: "By applying only to government jobs" },
              {
                id: "e",
                text: "By avoiding online job platforms like LinkedIn",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage advises job seekers to proactively develop in-demand skills and leverage networking platforms like LinkedIn to connect with opportunities beyond traditional job postings.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              'Many young job seekers find themselves stuck in an endless loop—employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience. As a result, fresh graduates often struggle to secure their first job, leading to prolonged job searches and underemployment.\nOne reason for this shift is the increasing automation and digitization of workplaces. Many routine tasks that were once assigned to entry-level employees are now handled by software or outsourced, leaving only more complex responsibilities that require specialized skills. Employers expect candidates to come in ready to contribute immediately, rather than invest time and resources in extensive training.\nTo adapt, many young professionals turn to internships, freelance work, and online certifications to build their résumés before even entering the job market. While these alternatives provide valuable experience, they also blur the line between unpaid labor and legitimate career-building opportunities. Some argue that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.\nDespite these challenges, entry-level jobs are not entirely obsolete. They remain a crucial gateway into industries, though the definition of "entry-level" has evolved. Job seekers who proactively develop in-demand skills—such as data analysis, coding, digital marketing, or project management—stand a better chance of breaking into competitive fields. Networking and leveraging platforms like LinkedIn can also help fresh graduates connect with opportunities beyond traditional job postings.\nUltimately, while the landscape of entry-level employment has changed, career growth is still possible for those who adapt. The key lies in continuous learning, strategic job searching, and seeking alternative ways to gain experience in a rapidly shifting job market.',
            question: "What is the overall message of the article?",
            options: [
              {
                id: "a",
                text: "The job market is becoming increasingly difficult for fresh graduates, but adaptation can lead to success",
              },
              {
                id: "b",
                text: "Traditional employment is no longer a viable option for young professionals",
              },
              {
                id: "c",
                text: "Employers should stop requiring experience for entry-level positions",
              },
              {
                id: "d",
                text: "Automation will eventually replace all human jobs",
              },
              {
                id: "e",
                text: "Only high-paying jobs are worth pursuing in today's job market",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The article concludes that while the landscape of entry-level employment has changed, career growth is still possible for those who adapt through continuous learning and strategic job searching.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Core Sentence";
      moduleDoc.description =
        "Learn to identify core sentences (topic sentences) in paragraphs and practice finding them in English reading passages for UTBK preparation.";
      moduleDoc.subcategory = "Main Idea";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Core Sentence",
        description:
          "Learn to identify core sentences (topic sentences) in paragraphs and practice finding them in English reading passages for UTBK preparation.",
        subcategory: "Main Idea",
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

seedCoreSentence();
