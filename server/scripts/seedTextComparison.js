const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedTextComparison = async () => {
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

    const targetId = "text-comparison";

    const stepsData = [
      {
        title: "Materi: Text Comparison",
        type: "reading",
        status: "active",
        description:
          "Pelajari cara menganalisis dua atau lebih teks dengan membandingkan kesamaan dan perbedaan di antara keduanya.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Text Comparison?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Text Comparison adalah jenis soal yang meminta teman-teman untuk menganalisis dua atau lebih teks dengan membandingkan kesamaan dan perbedaan di antara keduanya. Pendekatan ini membantu dalam memahami bagaimana teks yang berbeda menyajikan ide, tema, atau argumen, dan memungkinkan pemahaman yang lebih mendalam tentang topik yang dibahas.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Tips & Trik mengerjakan Text Comparison</h3>

              <div class="space-y-4">
                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
                    Baca Teks dengan Teliti
                  </h5>
                  <p class="text-body-l text-Grayscale-800" style="text-align: justify;">
                    Mulai dengan membaca kedua teks secara menyeluruh untuk memahami isi kontennya. Perhatikan poin-poin utama, nada, dan tujuan dari setiap teks.
                  </p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
                    Identifikasi Kesamaan dan Perbedaan Keyword
                  </h5>
                  <p class="text-body-l text-Grayscale-800" style="text-align: justify;">
                    Teman-teman dapat mencari tema, ide, atau argumen yang serupa dalam kedua teks. Selain itu, fokus pada bagaimana teks-teks tersebut berbeda dalam hal pendekatan, gaya, dan perspektif.
                  </p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
                    Gunakan Penghubung Perbandingan
                  </h5>
                  <p class="text-body-l text-Grayscale-800" style="text-align: justify;">
                    Gunakan kata-kata penghubung seperti "similarly," "on the other hand," "in contrast," atau "however" untuk menunjukkan hubungan antara teks-teks tersebut.
                  </p>
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
          "Latihan membandingkan dua teks ulasan film Thailand yang populer.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Text</h3>
              
              <div class="space-y-6 bg-Grayscale-50 p-6 rounded-lg border border-Grayscale-200">
                <div>
                  <h5 class="text-h5 font-bold text-Primary-800 mb-2">All-Time Best Thai Romance Movie: OMG! Oh My Girl (2022)</h5>
                  <p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;">Thailand has produced several films that have captivated audiences both locally and internationally. One such film is OMG! Oh My Girl, which tells the story of June, a young woman who, after a series of misadventures, meets Guy. Both characters struggle with personal insecurities, and through their evolving relationship, they embark on a journey of self-discovery and love. The film's romantic storyline revolves around how June and Guy navigate their feelings, face obstacles, and learn valuable life lessons along the way.</p>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">At its core, OMG! Oh My Girl explores themes of love, self-acceptance, and overcoming barriers. June's character development centers on learning to accept herself and embrace love, despite the emotional challenges she faces. The film is a heartwarming exploration of the power of love to transform lives and foster personal growth.</p>
                </div>

                <hr class="border-Grayscale-300" />

                <div>
                  <h5 class="text-h5 font-bold text-Primary-800 mb-2">Blockbuster Thai Family Movie: How to Make a Million Before Grandma Dies (2024)</h5>
                  <p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;">A playful but poignant box office hit, How to Make a Billion Before Grandma Dies, tells the story of Bank, a young man determined to earn a billion baht before his grandmother passed away. As he works towards this ambitious goal, Bank discovers the importance of family, love, and balancing ambition with personal relationships. The film blends comedy and drama, offering a unique perspective on ambition and success.</p>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">The central themes of How to Make a Billion Before Grandma Dies include family responsibility, ambition, and the realization that true success lies in the relationships we cherish. Bank's journey reveals that material wealth is not as valuable as the love and support of family. The film serves as a reminder of the importance of nurturing personal connections while pursuing one's dreams.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Study</h3>

              <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                <p class="text-body-l font-bold text-Grayscale-900 mb-2">Example Question</p>
                <p class="text-body-l text-Grayscale-800 mb-4">Which of the following statements best compares the main themes of OMG! Oh My Girl and How to Make a Billion Before Grandma Dies?</p>
                
                <div class="space-y-2 mb-6">
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">A.</span>
                    <span class="text-body-l text-Grayscale-800">Both films focus on romance as the central theme, with one including family responsibilities.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
                    <span class="text-body-l font-bold text-green-700">B.</span>
                    <span class="text-body-l text-green-700 font-semibold">OMG! Oh My Girl centers on self-discovery and love, while How to Make a Billion Before Grandma Dies is about ambition, family, and the importance of relationships.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">C.</span>
                    <span class="text-body-l text-Grayscale-800">Both films are primarily about the pursuit of wealth and success at all costs.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">D.</span>
                    <span class="text-body-l text-Grayscale-800">OMG! Oh My Girl explores ambition, while How to Make a Billion Before Grandma Dies focuses solely on romance.</span>
                  </div>
                </div>

                <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500">
                  <p class="text-body-l font-bold text-Primary-800 mb-2">Pembahasan:</p>
                  <p class="text-body-l text-Grayscale-800" style="text-align: justify;">
                    Soal ini menguji kemampuan untuk membandingkan tema utama kedua film tersebut. Berdasarkan teks, OMG! Oh My Girl fokus pada romansa dan penemuan diri, sementara How to Make a Billion Before Grandma Dies lebih menekankan pada ambisi, keluarga, dan hubungan.
                  </p>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Text Comparison",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ArH6BUO9Ajk",
        description:
          "Panduan strategi membandingkan dua teks dalam soal literasi bahasa Inggris.",
      },
      {
        title: "Quiz: Text Comparison",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Indonesia, Southeast Asia's largest economy, has been undergoing significant transformation in recent years. Despite facing challenges such as fluctuating global oil prices, political instability, and natural disasters, Indonesia has experienced steady growth in GDP. The country's economy is primarily driven by manufacturing, agriculture, and services sectors, with a growing middle class contributing to domestic consumption. However, income inequality remains a challenge, with a significant portion of the population still living below the poverty line. The government is focusing on infrastructure development, aiming to boost economic growth and attract foreign investment. Efforts to strengthen the banking system and improve financial literacy are underway to ensure long-term economic stability.",
            question:
              "Which of the following statements is an opinion from Text 1?\n1. Indonesia's economy is primarily driven by agriculture and services sectors.\n2. The government is focusing on infrastructure development to boost economic growth.\n3. Indonesia has faced challenges such as natural disasters and political instability.\n4. Income inequality remains a challenge in Indonesia.",
            options: [
              { id: "a", text: "False - False - False - True" },
              { id: "b", text: "False - False - True - True" },
              { id: "c", text: "True - True - False - True" },
              { id: "d", text: "False - True - False - True" },
              { id: "e", text: "True - True - True - True" },
            ],
            correctAnswer: "d",
            explanation:
              "Statement 1 is FALSE as an opinion — it is a stated fact in the text. Statement 2 is TRUE as an opinion — 'focusing on' and 'aiming to boost' reflect the government's intentions, which is a subjective claim. Statement 3 is FALSE as an opinion — it is a factual observation. Statement 4 is TRUE as an opinion — 'remains a challenge' is a subjective assessment of the situation.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Financial education is crucial for ensuring individuals can make informed and responsible decisions about money. Experts agree that teaching children about money from a young age can equip them with the skills necessary for financial independence in the future. Various programs are now being implemented in schools worldwide to educate students about budgeting, saving, and investing. These programs emphasize practical financial skills, such as managing allowances, understanding the importance of saving, and the impact of debt. Financial education is seen as a necessary tool to reduce future financial crises, promote savings habits, and prevent individuals from falling into financial traps.",
            question: "What is the main idea of Text 2?",
            options: [
              {
                id: "a",
                text: "Schools worldwide should replace traditional subjects with financial education.",
              },
              {
                id: "b",
                text: "Financial education is essential for helping individuals make sound financial decisions and achieve independence.",
              },
              {
                id: "c",
                text: "Children who learn about money early are more likely to become wealthy adults.",
              },
              {
                id: "d",
                text: "Financial crises can only be prevented through government intervention.",
              },
              {
                id: "e",
                text: "Budgeting and saving are the only skills needed for financial independence.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Text 2 consistently emphasizes that financial education is crucial for informed decision-making and future independence. The supporting details — school programs, budgeting, saving, reducing financial crises — all reinforce this central idea.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Indonesia, Southeast Asia's largest economy, has been undergoing significant transformation in recent years. Despite facing challenges such as fluctuating global oil prices, political instability, and natural disasters, Indonesia has experienced steady growth in GDP. The country's economy is primarily driven by manufacturing, agriculture, and services sectors, with a growing middle class contributing to domestic consumption. However, income inequality remains a challenge, with a significant portion of the population still living below the poverty line. The government is focusing on infrastructure development, aiming to boost economic growth and attract foreign investment. Efforts to strengthen the banking system and improve financial literacy are underway to ensure long-term economic stability.",
            question: "From the last paragraph of Text 1, we can infer that:",
            options: [
              {
                id: "a",
                text: "Indonesia is not focusing on long-term economic stability.",
              },
              {
                id: "b",
                text: "The government is making efforts to address financial literacy.",
              },
              {
                id: "c",
                text: "Indonesia's financial system is facing a crisis.",
              },
              { id: "d", text: "The middle class in Indonesia is shrinking." },
              {
                id: "e",
                text: "Natural disasters are preventing economic growth.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The last paragraph states that 'efforts to strengthen the banking system and improve financial literacy are underway,' which directly supports the inference that the government is actively working to address financial literacy.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "TEXT 1: Indonesia, Southeast Asia's largest economy, has been undergoing significant transformation in recent years... [truncated context for brevity in script, but included in actual quiz content] ...TEXT 2: Financial education is crucial for ensuring individuals can make informed and responsible decisions about money...",
            question:
              "Based on information from both texts, which of the following is most likely to happen in the future?",
            options: [
              {
                id: "a",
                text: "Indonesia will experience a financial crisis.",
              },
              {
                id: "b",
                text: "South Korea will see an increase in its fertility rate.",
              },
              {
                id: "c",
                text: "Financial literacy programs will become a standard part of education worldwide.",
              },
              {
                id: "d",
                text: "India's population will begin to decrease significantly.",
              },
              {
                id: "e",
                text: "The middle class in Indonesia will no longer drive economic growth.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Text 1 highlights Indonesia's push for financial literacy, while Text 2 discusses the global expansion of financial education programs in schools. Together, they support the inference that financial literacy programs will become increasingly widespread worldwide.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Financial education is crucial for ensuring individuals can make informed and responsible decisions about money. [truncated for script length limit]",
            question: "The purpose of Text 2 is to:",
            options: [
              {
                id: "a",
                text: "Encourage people to start investing at a young age.",
              },
              {
                id: "b",
                text: "Discuss the challenges faced by South Korea in terms of birth rate.",
              },
              {
                id: "c",
                text: "Explain why financial education is important for future independence.",
              },
              {
                id: "d",
                text: "Discuss how to manage a growing population in India.",
              },
              {
                id: "e",
                text: "Criticize current financial education programs in schools.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The text opens by stating financial education is 'crucial' and goes on to explain how it equips people with skills for financial independence and helps prevent crises. The overall purpose is to explain its importance.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Indonesia, Southeast Asia's largest economy, has been undergoing significant transformation in recent years. [truncated]",
            question:
              "According to Text 1, the Indonesian government is focused on?",
            options: [
              {
                id: "a",
                text: "Reducing the size of the middle class to control consumption.",
              },
              {
                id: "b",
                text: "Infrastructure development, attracting foreign investment, and improving financial literacy.",
              },
              {
                id: "c",
                text: "Expanding the agriculture sector to replace manufacturing.",
              },
              {
                id: "d",
                text: "Stabilizing global oil prices to support GDP growth.",
              },
              {
                id: "e",
                text: "Eliminating income inequality through direct cash transfers.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The text explicitly states the government is focusing on infrastructure development to boost growth and attract foreign investment, and that efforts to improve financial literacy are underway.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: "TEXT 1 and TEXT 2 comparison. [truncated]",
            question:
              "Which of the following is a similarity between Text 1 and Text 2?",
            options: [
              {
                id: "a",
                text: "Both texts discuss the challenges related to poverty.",
              },
              {
                id: "b",
                text: "Both texts mention policies implemented by the government.",
              },
              {
                id: "c",
                text: "Both texts focus on financial crises in developing countries.",
              },
              {
                id: "d",
                text: "Both texts talk about issues related to an aging population.",
              },
              {
                id: "e",
                text: "Both texts focus on the importance of manufacturing for economic growth.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Text 1 mentions government policies on infrastructure and financial literacy, while Text 2 discusses programs being implemented in schools worldwide. Both reference policies or initiatives.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "South Korea's birth rate has been steadily declining for decades... [truncated]",
            question:
              "Which of the following statements is true based on Text 3?",
            options: [
              {
                id: "a",
                text: "South Korea has successfully increased its fertility rate in recent years.",
              },
              {
                id: "b",
                text: "South Korea's population is declining at a rapid pace.",
              },
              {
                id: "c",
                text: "Government policies have effectively reversed the declining birth rate.",
              },
              {
                id: "d",
                text: "South Korea's fertility rate is one of the lowest in the world.",
              },
              {
                id: "e",
                text: "High living costs are not a concern for couples in South Korea.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "The text explicitly states that 'the fertility rate remains one of the lowest in the world.'",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: "South Korea's birth rate analysis. [truncated]",
            question:
              "In Text 3, which of the following is a reason for the low birth rate in South Korea?",
            options: [
              { id: "a", text: "True - True - True - True" },
              { id: "b", text: "True - True - False - False" },
              { id: "c", text: "False - False - True - True" },
              { id: "d", text: "True - False - False - True" },
              { id: "e", text: "True - True - False - True" },
            ],
            correctAnswer: "b",
            explanation:
              "Statement 1 (cost/childcare) is TRUE. Statement 2 (aging pop) is TRUE. Statement 3 (no policies) is FALSE. Statement 4 (rising rate) is FALSE.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: "India's population density. [truncated]",
            question:
              "Based on Text 4, what is the main issue India faces due to its population density?",
            options: [
              {
                id: "a",
                text: "A declining workforce due to an aging population.",
              },
              {
                id: "b",
                text: "Overcrowding, inadequate infrastructure, and strain on resources.",
              },
              {
                id: "c",
                text: "Rapid decrease in urban population due to migration.",
              },
              {
                id: "d",
                text: "Lack of government interest in managing population growth.",
              },
              {
                id: "e",
                text: "Environmental improvements caused by reduced industrial activity.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The text states rapid population growth led to congestion, inadequate infrastructure, and environmental degradation.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: "India population over 1.4 billion. [truncated]",
            question: "The population of India is:",
            options: [
              { id: "a", text: "Declining rapidly." },
              { id: "b", text: "Moderately increasing." },
              { id: "c", text: "Among the lowest in the world." },
              { id: "d", text: "Among the highest in the world." },
              { id: "e", text: "Not a major concern for the government." },
            ],
            correctAnswer: "d",
            explanation:
              "With over 1.4 billion people, India has one of the highest populations globally.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: "India's growth inference. [truncated]",
            question:
              "What can be inferred from Text 4 about India's population growth?",
            options: [
              { id: "a", text: "India's population is not growing." },
              {
                id: "b",
                text: "The government is not concerned about population growth.",
              },
              {
                id: "c",
                text: "India must manage its population to ensure resource sustainability.",
              },
              {
                id: "d",
                text: "India's population is expected to decrease significantly in the future.",
              },
              {
                id: "e",
                text: "The population growth is not affecting India's urban areas.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The text concludes India must find ways to manage growth while ensuring resource access.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: "Comparison Text 3 and Text 4. [truncated]",
            question:
              "Which of the following is true about the relationship between Text 3 and Text 4?",
            options: [
              {
                id: "a",
                text: "Both discuss strategies for reducing population growth.",
              },
              {
                id: "b",
                text: "Both highlight issues related to the aging population.",
              },
              {
                id: "c",
                text: "Both focus on demographic challenges that have economic and social implications.",
              },
              {
                id: "d",
                text: "Both focus on declining birth rates in their respective countries.",
              },
              {
                id: "e",
                text: "Both texts emphasize urban planning to manage population growth.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "Both address demographic challenges (low birth rate vs overpopulation) with economic/social consequences.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: "Shared challenges of Korea and India. [truncated]",
            question:
              "Based on both Text 3 and Text 4, which of the following challenges do both countries face?",
            options: [
              { id: "a", text: "A rapidly declining population." },
              {
                id: "b",
                text: "Significant economic and social challenges stemming from population issues.",
              },
              { id: "c", text: "Excessive reliance on foreign investment." },
              { id: "d", text: "An increasing fertility rate." },
              { id: "e", text: "The absence of government interventions." },
            ],
            correctAnswer: "b",
            explanation:
              "Both countries face economic and social pressures driven by their specific demographic situations.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: "India management strategy. [truncated]",
            question:
              "According to Text 4, India is managing its population growth by?",
            options: [
              {
                id: "a",
                text: "Implementing strict birth control policies nationwide.",
              },
              {
                id: "b",
                text: "Encouraging migration of citizens to rural areas.",
              },
              {
                id: "c",
                text: "Pursuing urban planning initiatives and developing new cities.",
              },
              {
                id: "d",
                text: "Reducing industrial activity to slow urban growth.",
              },
              {
                id: "e",
                text: "Investing in foreign countries to reduce domestic pressure.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The text explicitly mentions urban planning initiatives and developing new cities as the management strategy.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Text Comparison";
      moduleDoc.description =
        "Learn how to analyze and compare multiple texts to find similarities, differences, and thematic connections.";
      moduleDoc.subcategory = "Restating and Cloze Text";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Text Comparison",
        description:
          "Learn how to analyze and compare multiple texts to find similarities, differences, and thematic connections.",
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

seedTextComparison();
