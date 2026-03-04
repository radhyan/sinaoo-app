const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSupportingIdeas = async () => {
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

    const targetId = "supporting-ideas";

    const stepsData = [
      {
        title: "Materi: Supporting Ideas",
        type: "reading",
        status: "active",
        description:
          "Learn what supporting ideas are, the different types, and how they integrate with main ideas in a passage.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Supporting Ideas?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                "Supporting ideas" atau gagasan pendukung, berperan penting dalam keefektifan penulisan dalam literasi bahasa Inggris. Komponen ini tidak hanya memberikan bukti, tetapi juga rincian, contoh, dan penjelasan yang diperlukan untuk memperkuat serta memperjelas ide pokok dari suatu tulisan.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Definition of Supporting Ideas</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Supporting Ideas merupakan rincian atau informasi tambahan yang berfungsi untuk menjelaskan, memperjelas, atau memvalidasi pokok pikiran atau pernyataan tesis dalam suatu tulisan.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Types of Supporting Ideas</h3>

              <div class="space-y-4">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Bukti Empiris
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Data atau fakta yang diperoleh melalui penelitian, memberikan dasar yang kuat untuk mendukung argumen.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Contoh Konkret
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Contoh spesifik yang menggambarkan suatu hal umum.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Statistik
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Data kuantitatif yang memberikan bukti numerik, menunjukkan tren atau pola yang mendukung argumen.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Anekdot
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Cerita atau pengalaman pribadi yang relevan dengan topik.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Kutipan Ahli
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Pernyataan dari pakar di bidang terkait, meningkatkan kredibilitas tulisan.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Fakta
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Informasi yang dapat diverifikasi, menambah kredibilitas jawaban.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Penalaran Logis
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Penjelasan atau kesimpulan rasional yang menunjukkan mengapa suatu argumen valid.</p>
                </div>

              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Integration of Supporting Ideas</h3>

              <div class="space-y-4">
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Relevansi
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Pastikan setiap ide pendukung berhubungan langsung dengan poin utama.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    Transisi Halus
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Integrasikan ide-ide pendukung ke dalam tulisan menggunakan frasa yang tepat & jelas, sehingga tulisan mudah dipahami.</p>
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
          "Practice identifying main ideas and supporting ideas using an exercise text about AI in Education.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Text</h3>
              <p class="text-body-l font-bold text-Primary-800 mb-3">Topic: The Utilization of Artificial Intelligence (AI) in Education</p>

              <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200 space-y-4">
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Artificial Intelligence (AI) has transformed education by offering opportunities for personalized learning and increased efficiency, while also presenting challenges such as bias and privacy concerns. AI-powered platforms can analyze students' learning patterns and adapt educational content to meet their individual needs. For example, intelligent tutoring systems provide tailored feedback and guidance, helping students grasp complex concepts at their own pace.</p>
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Additionally, AI has revolutionized administrative tasks in education, allowing educators to focus more on teaching. Automation tools, such as AI-driven grading systems and attendance tracking, have significantly reduced the time spent on routine tasks. This efficiency not only lightens educators' workloads but also ensures timely and accurate assessments. For instance, a report by Johnson and Lee (2021) highlights that schools utilizing AI for administrative tasks experienced a 30% increase in teacher productivity.</p>
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">However, the implementation of AI in education also presents certain challenges. One major concern is the potential for bias in AI algorithms, which could inadvertently reinforce existing inequalities in education. Moreover, the reliance on AI tools raises questions about data privacy and security, as students' sensitive information must be safeguarded against misuse. Addressing these issues requires robust ethical frameworks and transparent AI development practices.</p>
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">The integration of AI into education offers immense potential to enhance personalized learning and streamline administrative processes. Nevertheless, it is crucial to address the challenges of bias, privacy, and ethical concerns to fully realize AI's benefits. By leveraging AI responsibly, education systems can create more inclusive and effective learning environments for students worldwide.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Study</h3>

              <div class="space-y-8">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">1) Identify the main ideas in the exercise text</h5>

                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">Main Ideas:</p>
                  <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500 mb-4">
                    <p class="text-body-l text-Primary-800 italic">"Artificial Intelligence (AI) has transformed education by offering opportunities for personalized learning and increased efficiency, while also presenting challenges such as bias and privacy concerns."</p>
                  </div>

                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">Cara menentukan Main Ideas (Gagasan Utama):</p>
                  <ol class="list-decimal pl-5 text-body-l text-Grayscale-800 space-y-1">
                    <li>Baca seluruh paragraf untuk memahami konteks.</li>
                    <li>Identifikasi kalimat utama, biasanya terletak di awal atau akhir paragraf.</li>
                    <li>Perhatikan informasi inti yang menjadi fokus pembahasan.</li>
                    <li>Kalimat penjelas adalah detail pendukung.</li>
                    <li>Simpulkan isi utama dalam satu kalimat sederhana.</li>
                  </ol>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">2) Identify two supporting ideas that provide evidence or examples to support the main ideas</h5>

                  <p class="text-body-l font-bold text-Grayscale-900 mb-2"><em>Identifikasi dua gagasan pendukung (Supporting Ideas) yang memberikan bukti atau contoh untuk mendukung gagasan utama (Main Ideas).</em></p>

                  <div class="space-y-4 mt-4">
                    <div class="pl-4 border-l-2 border-Secondary-300">
                      <p class="text-body-l font-bold text-Primary-700 mb-1">Supporting Idea 1:</p>
                      <p class="text-body-l text-Grayscale-800" style="text-align: justify;">AI personalized learning experiences by analyzing students' learning patterns and providing tailored feedback, as demonstrated by intelligent tutoring systems that adapt content to students' individual needs.</p>
                    </div>

                    <div class="pl-4 border-l-2 border-Secondary-300">
                      <p class="text-body-l font-bold text-Primary-700 mb-1">Supporting Idea 2:</p>
                      <p class="text-body-l text-Grayscale-800" style="text-align: justify;">AI improves efficiency in administrative tasks, such as grading and attendance tracking, freeing up educators to focus more on teaching. A report by Johnson and Lee (2021) highlighted a 30% increase in teacher productivity in schools utilizing AI for these tasks.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">3) Create a new supporting idea for the main ideas and explain how it contributes to the overall argument</h5>

                  <p class="text-body-l text-Grayscale-800 italic mb-4" style="text-align: justify;">Buatlah gagasan pendukung baru untuk gagasan utama dan jelaskan bagaimana ide tersebut berkontribusi terhadap keseluruhan argumen.</p>

                  <div class="pl-4 border-l-2 border-Primary-300">
                    <p class="text-body-l font-bold text-Primary-700 mb-1">New Supporting Idea:</p>
                    <p class="text-body-l text-Grayscale-800" style="text-align: justify;">AI tools foster inclusivity in learning needs. For example, intelligent systems can accommodate different learning paces and preferences, ensuring that all students, regardless of their abilities, receive a supportive and effective learning environment. This inclusivity enhances students' engagement and academic success.</p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Supporting Ideas",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/7vC7gPaez9c",
        description:
          "Video pembelajaran tentang cara mengidentifikasi supporting ideas dalam teks bacaan bahasa Inggris.",
      },
      {
        title: "Video: Supporting Ideas Practice",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/kcRoGgNXZVw",
        description:
          "Video latihan dan pembahasan soal-soal supporting ideas untuk persiapan UTBK.",
      },
      {
        title: "Quiz: Supporting Ideas",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Indonesia, as the largest archipelago nation in the world, plays a significant role in global geopolitics. Its strategic location between the Pacific and Indian Oceans has made it a crucial player in international trade routes. The Malacca Strait, for example, is one of the busiest maritime passages globally, connecting Asia with Europe and the Middle East.\n\nIndonesia's geopolitical influence extends to its active participation in regional organizations such as ASEAN. As a founding member, Indonesia has consistently promoted peace and stability in Southeast Asia. For instance, Indonesia has played a mediating role in resolving regional disputes, including the South China Sea issue.\n\nHowever, Indonesia also faces challenges in maintaining its geopolitical standing. Rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully. The country has adopted a \"free and active\" foreign policy, emphasizing non-alignment while pursuing its national interests.\n\nIn conclusion, Indonesia's geopolitics are shaped by its strategic location, active participation in regional organizations, and the complexities of global power dynamics.",
            question:
              'What is the main point in the "Indonesia\'s Role in Global Geopolitics" text?',
            options: [
              {
                id: "a",
                text: "Indonesia's strategic location makes it a key player in international trade, especially in maritime routes.",
              },
              {
                id: "b",
                text: "Indonesia's active role in global politics stems from its membership in organizations like the United Nations.",
              },
              {
                id: "c",
                text: "Indonesia faces significant geopolitical challenges due to rising tensions between the U.S. and China.",
              },
              {
                id: "d",
                text: "Indonesia maintains a neutral stance in world conflicts by adopting a free and active foreign policy.",
              },
              {
                id: "e",
                text: "Indonesia's role in global geopolitics is shaped by its location, regional organizations like ASEAN, and balancing foreign policy.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "The passage covers three main aspects: Indonesia's strategic location, its role in ASEAN, and its balancing foreign policy. Option E is the only one that encompasses all three points discussed in the text.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Indonesia, as the largest archipelago nation in the world, plays a significant role in global geopolitics. Its strategic location between the Pacific and Indian Oceans has made it a crucial player in international trade routes. The Malacca Strait, for example, is one of the busiest maritime passages globally, connecting Asia with Europe and the Middle East.\n\nIndonesia's geopolitical influence extends to its active participation in regional organizations such as ASEAN. As a founding member, Indonesia has consistently promoted peace and stability in Southeast Asia. For instance, Indonesia has played a mediating role in resolving regional disputes, including the South China Sea issue.\n\nHowever, Indonesia also faces challenges in maintaining its geopolitical standing. Rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully. The country has adopted a \"free and active\" foreign policy, emphasizing non-alignment while pursuing its national interests.\n\nIn conclusion, Indonesia's geopolitics are shaped by its strategic location, active participation in regional organizations, and the complexities of global power dynamics.",
            question:
              "Identify two supporting ideas that provide evidence or examples to support the main point.",
            options: [
              {
                id: "a",
                text: "The Malacca Strait is a major global maritime passage, and Indonesia mediates in regional disputes like the South China Sea.",
              },
              {
                id: "b",
                text: "Indonesia is a founding member of the United Nations and plays a role in international peacekeeping.",
              },
              {
                id: "c",
                text: "Indonesia's economy is driven by maritime trade and its membership in ASEAN.",
              },
              {
                id: "d",
                text: "Indonesia aligns with the U.S. in global disputes and uses the Malacca Strait for military purposes.",
              },
              {
                id: "e",
                text: "Indonesia's free and active policy limits its participation in ASEAN and global trade.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The two key supporting ideas in the text are: (1) the Malacca Strait as a crucial global maritime passage illustrating Indonesia's strategic location, and (2) Indonesia's mediation in the South China Sea dispute as evidence of its active regional role.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Indonesia, as the largest archipelago nation in the world, plays a significant role in global geopolitics. Its strategic location between the Pacific and Indian Oceans has made it a crucial player in international trade routes. The Malacca Strait, for example, is one of the busiest maritime passages globally, connecting Asia with Europe and the Middle East.\n\nIndonesia's geopolitical influence extends to its active participation in regional organizations such as ASEAN. As a founding member, Indonesia has consistently promoted peace and stability in Southeast Asia. For instance, Indonesia has played a mediating role in resolving regional disputes, including the South China Sea issue.\n\nHowever, Indonesia also faces challenges in maintaining its geopolitical standing. Rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully. The country has adopted a \"free and active\" foreign policy, emphasizing non-alignment while pursuing its national interests.\n\nIn conclusion, Indonesia's geopolitics are shaped by its strategic location, active participation in regional organizations, and the complexities of global power dynamics.",
            question:
              "Choose a supporting idea for the main point and explain what contributes to the overall argument.",
            options: [
              {
                id: "a",
                text: "Indonesia's participation in the Sunda Strait's trade route strengthens its geopolitical influence.",
              },
              {
                id: "b",
                text: "Indonesia promotes regional peace by mediating in disputes like the South China Sea issue, reinforcing its active foreign policy role.",
              },
              {
                id: "c",
                text: "Rising tensions between global powers like the U.S. and China challenge Indonesia's non-alignment policy.",
              },
              {
                id: "d",
                text: "The founding role of Indonesia in ASEAN exemplifies its influence on Southeast Asia's peace and stability.",
              },
              {
                id: "e",
                text: "Indonesia's foreign policy focuses on non-alignment, contributing to its strategic autonomy in global geopolitics.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "This option directly supports the main point by linking Indonesia's mediation role in the South China Sea to its broader active foreign policy, showing how the specific example reinforces the overall argument about Indonesia's geopolitical role.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Indonesia, as the largest archipelago nation in the world, plays a significant role in global geopolitics. Its strategic location between the Pacific and Indian Oceans has made it a crucial player in international trade routes. The Malacca Strait, for example, is one of the busiest maritime passages globally, connecting Asia with Europe and the Middle East.\n\nIndonesia's geopolitical influence extends to its active participation in regional organizations such as ASEAN. As a founding member, Indonesia has consistently promoted peace and stability in Southeast Asia. For instance, Indonesia has played a mediating role in resolving regional disputes, including the South China Sea issue.\n\nHowever, Indonesia also faces challenges in maintaining its geopolitical standing. Rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully. The country has adopted a \"free and active\" foreign policy, emphasizing non-alignment while pursuing its national interests.\n\nIn conclusion, Indonesia's geopolitics are shaped by its strategic location, active participation in regional organizations, and the complexities of global power dynamics.",
            question:
              "What is one example of a challenge Indonesia faces in its geopolitical role?",
            options: [
              { id: "a", text: "Managing disputes within ASEAN." },
              { id: "b", text: "Rising tensions between the U.S. and China." },
              { id: "c", text: "Lack of access to the Malacca Strait." },
              { id: "d", text: "Limited influence in Southeast Asia." },
              {
                id: "e",
                text: "Difficulty in balancing relations with ASEAN and global powers.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage explicitly mentions that rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully, making this the challenge directly stated in the text.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Indonesia, as the largest archipelago nation in the world, plays a significant role in global geopolitics. Its strategic location between the Pacific and Indian Oceans has made it a crucial player in international trade routes. The Malacca Strait, for example, is one of the busiest maritime passages globally, connecting Asia with Europe and the Middle East.\n\nIndonesia's geopolitical influence extends to its active participation in regional organizations such as ASEAN. As a founding member, Indonesia has consistently promoted peace and stability in Southeast Asia. For instance, Indonesia has played a mediating role in resolving regional disputes, including the South China Sea issue.\n\nHowever, Indonesia also faces challenges in maintaining its geopolitical standing. Rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully. The country has adopted a \"free and active\" foreign policy, emphasizing non-alignment while pursuing its national interests.\n\nIn conclusion, Indonesia's geopolitics are shaped by its strategic location, active participation in regional organizations, and the complexities of global power dynamics.",
            question:
              "Choose TRUE or FALSE for each statement.\n1. Indonesia is a founding member of ASEAN.\n2. The Malacca Strait is not a significant trade route for global commerce.\n3. Indonesia practices a non-alignment foreign policy while pursuing its goals.",
            options: [
              { id: "a", text: "True - True - True" },
              { id: "b", text: "True - False - True" },
              { id: "c", text: "False - False - True" },
              { id: "d", text: "False - False - False" },
              { id: "e", text: "True - True - False" },
            ],
            correctAnswer: "b",
            explanation:
              "Statement 1 is TRUE — the passage confirms Indonesia is a founding member of ASEAN. Statement 2 is FALSE — the Malacca Strait is described as one of the busiest maritime passages globally. Statement 3 is TRUE — Indonesia's 'free and active' foreign policy emphasizes non-alignment while pursuing national interests.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Indonesia, as the largest archipelago nation in the world, plays a significant role in global geopolitics. Its strategic location between the Pacific and Indian Oceans has made it a crucial player in international trade routes. The Malacca Strait, for example, is one of the busiest maritime passages globally, connecting Asia with Europe and the Middle East.\n\nIndonesia's geopolitical influence extends to its active participation in regional organizations such as ASEAN. As a founding member, Indonesia has consistently promoted peace and stability in Southeast Asia. For instance, Indonesia has played a mediating role in resolving regional disputes, including the South China Sea issue.\n\nHowever, Indonesia also faces challenges in maintaining its geopolitical standing. Rising tensions between global powers like the U.S. and China often force Indonesia to balance its foreign policy carefully. The country has adopted a \"free and active\" foreign policy, emphasizing non-alignment while pursuing its national interests.\n\nIn conclusion, Indonesia's geopolitics are shaped by its strategic location, active participation in regional organizations, and the complexities of global power dynamics.",
            question:
              'What is the primary focus of Indonesia\'s "free and active" foreign policy?',
            options: [
              { id: "a", text: "Aligning with major global powers." },
              {
                id: "b",
                text: "Balancing national interests and non-alignment.",
              },
              { id: "c", text: "Limiting its involvement in global disputes." },
              {
                id: "d",
                text: "Expanding its influence in Europe and the Middle East.",
              },
              {
                id: "e",
                text: "Promoting peace and stability through active regional participation.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states that Indonesia's 'free and active' foreign policy emphasizes non-alignment while pursuing its national interests, making the balance between the two its primary focus.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "The rise of Artificial Intelligence (AI) has led to growing concerns about its potential impact on jobs. Some experts argue that AI will lead to significant job losses, especially in industries that rely on repetitive tasks. For example, manufacturing jobs, where robots can perform tasks more efficiently than humans, are at risk of being automated.\n\nOn the other hand, AI is also expected to create new opportunities. As AI systems become more advanced, there will be a growing demand for workers who can design, develop, and maintain these systems. Additionally, AI is anticipated to create jobs in fields such as data science, AI ethics, and machine learning.\n\nHowever, the challenge lies in ensuring that workers are equipped with the skills needed to thrive in an AI-driven economy. Governments and businesses must invest in retraining programs to help workers transition into new roles that AI will create. AI poses a threat to some jobs, it also holds the potential to create new opportunities, provided that adequate investments in education and training are made.",
            question: "What is the main idea of the text?",
            options: [
              {
                id: "a",
                text: "AI will eliminate all jobs in the manufacturing sector.",
              },
              {
                id: "b",
                text: "The rise of AI will lead to significant job losses and no new opportunities.",
              },
              {
                id: "c",
                text: "AI will create new opportunities but also pose challenges for workers.",
              },
              {
                id: "d",
                text: "Governments should avoid investing in retraining programs for workers.",
              },
              {
                id: "e",
                text: "AI will not have any significant impact on the job market.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The text presents a balanced view: AI threatens some jobs (especially in manufacturing) but also creates new opportunities in fields like data science and machine learning, while highlighting the need for retraining programs.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "The rise of Artificial Intelligence (AI) has led to growing concerns about its potential impact on jobs. Some experts argue that AI will lead to significant job losses, especially in industries that rely on repetitive tasks. For example, manufacturing jobs, where robots can perform tasks more efficiently than humans, are at risk of being automated.\n\nOn the other hand, AI is also expected to create new opportunities. As AI systems become more advanced, there will be a growing demand for workers who can design, develop, and maintain these systems. Additionally, AI is anticipated to create jobs in fields such as data science, AI ethics, and machine learning.\n\nHowever, the challenge lies in ensuring that workers are equipped with the skills needed to thrive in an AI-driven economy. Governments and businesses must invest in retraining programs to help workers transition into new roles that AI will create. AI poses a threat to some jobs, it also holds the potential to create new opportunities, provided that adequate investments in education and training are made.",
            question:
              "Choose TRUE or FALSE for each statement.\n1. AI will only create job opportunities in the tech sector.\n2. Governments and businesses should invest in training programs to help workers adapt to new jobs created by AI.\n3. AI will eliminate all jobs in the manufacturing industry.",
            options: [
              { id: "a", text: "True - True - True" },
              { id: "b", text: "False - False - False" },
              { id: "c", text: "False - False - True" },
              { id: "d", text: "True - False - True" },
              { id: "e", text: "False - True - False" },
            ],
            correctAnswer: "e",
            explanation:
              "Statement 1 is FALSE — AI creates jobs in multiple fields including data science, AI ethics, and machine learning, not only tech. Statement 2 is TRUE — the passage explicitly states governments and businesses must invest in retraining programs. Statement 3 is FALSE — the passage says manufacturing jobs are at risk of automation, not that all jobs will be eliminated.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "The rise of Artificial Intelligence (AI) has led to growing concerns about its potential impact on jobs. Some experts argue that AI will lead to significant job losses, especially in industries that rely on repetitive tasks. For example, manufacturing jobs, where robots can perform tasks more efficiently than humans, are at risk of being automated.\n\nOn the other hand, AI is also expected to create new opportunities. As AI systems become more advanced, there will be a growing demand for workers who can design, develop, and maintain these systems. Additionally, AI is anticipated to create jobs in fields such as data science, AI ethics, and machine learning.\n\nHowever, the challenge lies in ensuring that workers are equipped with the skills needed to thrive in an AI-driven economy. Governments and businesses must invest in retraining programs to help workers transition into new roles that AI will create. AI poses a threat to some jobs, it also holds the potential to create new opportunities, provided that adequate investments in education and training are made.",
            question:
              "According to the text, what sectors will see an increased demand for workers due to AI?",
            options: [
              {
                id: "a",
                text: "Manufacturing, construction, and agriculture.",
              },
              {
                id: "b",
                text: "Data science, AI ethics, and machine learning.",
              },
              { id: "c", text: "Healthcare, education, and law enforcement." },
              { id: "d", text: "Finance, retail, and transportation." },
              { id: "e", text: "Tourism, hospitality, and entertainment." },
            ],
            correctAnswer: "b",
            explanation:
              "The passage specifically mentions that AI is anticipated to create jobs in fields such as data science, AI ethics, and machine learning.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "The rise of Artificial Intelligence (AI) has led to growing concerns about its potential impact on jobs. Some experts argue that AI will lead to significant job losses, especially in industries that rely on repetitive tasks. For example, manufacturing jobs, where robots can perform tasks more efficiently than humans, are at risk of being automated.\n\nOn the other hand, AI is also expected to create new opportunities. As AI systems become more advanced, there will be a growing demand for workers who can design, develop, and maintain these systems. Additionally, AI is anticipated to create jobs in fields such as data science, AI ethics, and machine learning.\n\nHowever, the challenge lies in ensuring that workers are equipped with the skills needed to thrive in an AI-driven economy. Governments and businesses must invest in retraining programs to help workers transition into new roles that AI will create. AI poses a threat to some jobs, it also holds the potential to create new opportunities, provided that adequate investments in education and training are made.",
            question:
              "What must governments and businesses invest in to help workers transition to new jobs created by AI?",
            options: [
              { id: "a", text: "Advanced robotics and automation technology." },
              {
                id: "b",
                text: "Retraining programs to equip workers with new skills.",
              },
              {
                id: "c",
                text: "New manufacturing plants to replace automated ones.",
              },
              { id: "d", text: "Marketing campaigns to promote AI adoption." },
              {
                id: "e",
                text: "Subsidies for companies that reduce AI usage.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage directly states that governments and businesses must invest in retraining programs to help workers transition into new roles that AI will create.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "The rise of Artificial Intelligence (AI) has led to growing concerns about its potential impact on jobs. Some experts argue that AI will lead to significant job losses, especially in industries that rely on repetitive tasks. For example, manufacturing jobs, where robots can perform tasks more efficiently than humans, are at risk of being automated.\n\nOn the other hand, AI is also expected to create new opportunities. As AI systems become more advanced, there will be a growing demand for workers who can design, develop, and maintain these systems. Additionally, AI is anticipated to create jobs in fields such as data science, AI ethics, and machine learning.\n\nHowever, the challenge lies in ensuring that workers are equipped with the skills needed to thrive in an AI-driven economy. Governments and businesses must invest in retraining programs to help workers transition into new roles that AI will create. AI poses a threat to some jobs, it also holds the potential to create new opportunities, provided that adequate investments in education and training are made.",
            question:
              "Which of the following is a potential benefit of AI, according to the text?",
            options: [
              { id: "a", text: "AI will make all jobs obsolete." },
              {
                id: "b",
                text: "AI will create jobs in various sectors, including AI ethics and machine learning.",
              },
              {
                id: "c",
                text: "AI will reduce the demand for workers in the tech industry.",
              },
              {
                id: "d",
                text: "AI will eliminate the need for human workers in all fields.",
              },
              {
                id: "e",
                text: "AI will replace the need for all workers in the education sector.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage highlights that AI will create new job opportunities in fields such as data science, AI ethics, and machine learning, which is presented as a potential benefit.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Lily Blossom Bloom struggles with the challenges of a toxic relationship. She falls in love with Ryle Kincaid, a successful neurosurgeon, but soon discovers that his anger issues make their relationship increasingly difficult. Despite his charming side, Ryle's temper and emotional abuse put a strain on their connection.\n\nLily finds solace in her past relationship with Atlas Corrigan, her first love, who had been a supportive and caring figure during difficult times. As she navigates her relationship with Ryle, Lily faces internal conflict, torn between her feelings for Atlas and her loyalty to Ryle.\n\nEventually, Lily realizes that she cannot continue to live in an unhealthy relationship. After a series of painful events, she makes the decision to break free from Ryle, choosing to prioritize her own well-being and mental health. The film ends with Lily finding peace as she reconnects with Atlas, realizing that her past love has always been there for her.",
            question: 'What is the main conflict in "It Ends With Us"?',
            options: [
              {
                id: "a",
                text: "Lily's struggle between her feelings for Ryle and Atlas.",
              },
              { id: "b", text: "Lily's desire to become a neurosurgeon." },
              {
                id: "c",
                text: "Lily's battle with her emotions for her parents.",
              },
              {
                id: "d",
                text: "Lily's internal conflict between love and personal well-being.",
              },
              { id: "e", text: "Ryle's career conflict." },
            ],
            correctAnswer: "d",
            explanation:
              "The central conflict is Lily's internal struggle between staying in a love relationship with Ryle and prioritizing her own well-being and mental health. This is ultimately resolved when she decides to leave Ryle.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Lily Blossom Bloom struggles with the challenges of a toxic relationship. She falls in love with Ryle Kincaid, a successful neurosurgeon, but soon discovers that his anger issues make their relationship increasingly difficult. Despite his charming side, Ryle's temper and emotional abuse put a strain on their connection.\n\nLily finds solace in her past relationship with Atlas Corrigan, her first love, who had been a supportive and caring figure during difficult times. As she navigates her relationship with Ryle, Lily faces internal conflict, torn between her feelings for Atlas and her loyalty to Ryle.\n\nEventually, Lily realizes that she cannot continue to live in an unhealthy relationship. After a series of painful events, she makes the decision to break free from Ryle, choosing to prioritize her own well-being and mental health. The film ends with Lily finding peace as she reconnects with Atlas, realizing that her past love has always been there for her.",
            question:
              "Choose TRUE or FALSE for each statement.\n1. Lily stayed with Ryle even though their relationship was not healthy.\n2. Lily is comfortable with her toxic relationship and does not think about her well-being.\n3. The movie ends with Lily choosing to stay with Ryle.",
            options: [
              { id: "a", text: "True - False - False" },
              { id: "b", text: "True - False - True" },
              { id: "c", text: "True - True - True" },
              { id: "d", text: "False - True - True" },
              { id: "e", text: "False - False - False" },
            ],
            correctAnswer: "a",
            explanation:
              "Statement 1 is TRUE — Lily stayed with Ryle for a period despite the unhealthy relationship. Statement 2 is FALSE — Lily does face internal conflict and ultimately prioritizes her well-being. Statement 3 is FALSE — the film ends with Lily breaking free from Ryle and reconnecting with Atlas.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Lily Blossom Bloom struggles with the challenges of a toxic relationship. She falls in love with Ryle Kincaid, a successful neurosurgeon, but soon discovers that his anger issues make their relationship increasingly difficult. Despite his charming side, Ryle's temper and emotional abuse put a strain on their connection.\n\nLily finds solace in her past relationship with Atlas Corrigan, her first love, who had been a supportive and caring figure during difficult times. As she navigates her relationship with Ryle, Lily faces internal conflict, torn between her feelings for Atlas and her loyalty to Ryle.\n\nEventually, Lily realizes that she cannot continue to live in an unhealthy relationship. After a series of painful events, she makes the decision to break free from Ryle, choosing to prioritize her own well-being and mental health. The film ends with Lily finding peace as she reconnects with Atlas, realizing that her past love has always been there for her.",
            question: "What is Ryle's main issue?",
            options: [
              {
                id: "a",
                text: "He is unable to control his emotions, which affect his relationship.",
              },
              { id: "b", text: "He is overly dependent on Lily." },
              { id: "c", text: "He struggles with his career." },
              { id: "d", text: "He has no interest in Lily." },
              {
                id: "e",
                text: "He is emotionally abusive and has anger issues.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "The passage directly describes Ryle's anger issues and emotional abuse as the primary problems that strain his relationship with Lily.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Lily Blossom Bloom struggles with the challenges of a toxic relationship. She falls in love with Ryle Kincaid, a successful neurosurgeon, but soon discovers that his anger issues make their relationship increasingly difficult. Despite his charming side, Ryle's temper and emotional abuse put a strain on their connection.\n\nLily finds solace in her past relationship with Atlas Corrigan, her first love, who had been a supportive and caring figure during difficult times. As she navigates her relationship with Ryle, Lily faces internal conflict, torn between her feelings for Atlas and her loyalty to Ryle.\n\nEventually, Lily realizes that she cannot continue to live in an unhealthy relationship. After a series of painful events, she makes the decision to break free from Ryle, choosing to prioritize her own well-being and mental health. The film ends with Lily finding peace as she reconnects with Atlas, realizing that her past love has always been there for her.",
            question:
              'What lesson can be learned from Lily\'s experience in "It Ends With Us"?',
            options: [
              { id: "a", text: "Always put others' needs before your own." },
              {
                id: "b",
                text: "It is important to forgive someone who emotionally hurts you.",
              },
              {
                id: "c",
                text: "It is important to prioritize your mental health and well-being over staying in a toxic relationship.",
              },
              {
                id: "d",
                text: "Staying in a relationship, even if unhealthy, shows loyalty.",
              },
              {
                id: "e",
                text: "You should always choose the career over personal relationships.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The story's resolution — Lily choosing to leave Ryle and prioritize her own well-being and mental health — conveys the lesson that one's mental health and well-being should take priority over remaining in a toxic relationship.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Supporting Ideas";
      moduleDoc.description =
        "Learn to identify supporting ideas — evidence, examples, and details that strengthen the main idea in English reading passages.";
      moduleDoc.subcategory = "Organization of Ideas";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Supporting Ideas",
        description:
          "Learn to identify supporting ideas — evidence, examples, and details that strengthen the main idea in English reading passages.",
        subcategory: "Organization of Ideas",
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

seedSupportingIdeas();
