const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedRestatingSentence = async () => {
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

    const targetId = "restating-sentence";

    const stepsData = [
      {
        title: "Materi: Restating Sentence",
        type: "reading",
        status: "active",
        description:
          "Pelajari konsep restating sentence — cara menyatakan kembali kalimat dengan kata-kata berbeda namun makna tetap sama.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Restating Sentence?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Berdasarkan soal ujian di tahun-tahun sebelumnya, soal mengenai "Restating Sentence" atau Kalimat Pernyataan Kembali, akan menguji pemahaman teman-teman mengenai makna kalimat dan sinonim kata/frasa. Teman-teman perlu mampu menemukan pilihan jawaban yang memiliki informasi yang sama dengan soal.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">How to Restating Sentence from a Text?</h3>

              <div class="space-y-4">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
                    Pahami makna keseluruhan kalimat soal
                  </h5>
                  <p class="text-body-l text-Grayscale-900">Baca dan pahami makna keseluruhan dari kalimat yang diminta untuk di-restate.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
                    Perhatikan detail pada kalimat soal
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;">Perhatikan informasi pada kalimat soal, teman-teman dapat menggunakan metode 5W+1H untuk menganalisis informasi. Selain itu, diperlukan juga prediksi sinonim dari kata/frasa kalimat soal yang bisa digunakan untuk menyatakan kembali ide di pilihan jawaban.</p>
                  <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500">
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Contoh:</strong></p>
                    <p class="text-body-l text-Grayscale-800 mb-1"><strong>Kalimat soal:</strong> Keychains <em>allow</em> <em>young people</em> to <em>showcase</em> their interests.</p>
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Restating Sentence:</strong> Keychains <em>enable</em> <em>teenagers</em> to <em>express</em> their hobbies.</p>
                    <p class="text-body-l text-Primary-800 italic">Kata "allow" bersinonim dengan "enable," "young people" bersinonim dengan "teenagers," dan "showcase" bersinonim dengan "express."</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
                    Identifikasi pilihan jawaban dan makna kalimat soal sama dengan kalimat jawaban
                  </h5>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Saat menentukan sinonim atau padanan kata/frasa, teman-teman perlu mempertimbangkan konteks bacaan dan memperhatikan struktur kalimat yang umumnya bisa berbeda, namun tetap memiliki arti yang sama.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">4</span>
                    Penggunaan struktur kalimat aktif dan pasif
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;">Umumnya, struktur antara kalimat pada soal dengan jawaban akan berbeda. Teman-teman perlu memperhatikan bentuk kalimat pada soal yang bisa saja pasif dan pada jawaban yang benar berbentuk aktif, begitupun sebaliknya.</p>
                  <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500">
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Contoh:</strong></p>
                    <p class="text-body-l text-Grayscale-800 mb-1"><strong>Kalimat soal:</strong> The company plans to reduce production costs to increase profits.</p>
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Restating Sentence:</strong> Production costs will be reduced to boost profits.</p>
                    <p class="text-body-l text-Primary-800 italic">Dalam bentuk kalimat aktif, subjek "the company" boleh dituliskan, tetapi makna kalimat tetap sama.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">5</span>
                    Penggunaan kalimat positif dan negatif
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;">Pada soal, kalimat dinyatakan dalam bentuk kalimat positif dan akan dinyatakan kembali ke dalam bentuk negatif pada jawaban, begitupun sebaliknya.</p>
                  <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500">
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Contoh:</strong></p>
                    <p class="text-body-l text-Grayscale-800 mb-1"><strong>Kalimat soal:</strong> Too much sugar in cakes is <em>not good</em> for health.</p>
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Restating Sentence:</strong> Excessive sugar in cakes <em>can be harmful</em> to health.</p>
                    <p class="text-body-l text-Primary-800 italic">Dapat dipahami bahwa pada soal, kalimat berbentuk negatif, dan pada restating sentence berbentuk positif. Frasa "not good" memiliki arti sepadan dengan frasa "can be harmful."</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">6</span>
                    Penggunaan ungkapan jumlah/kuantitas
                  </h5>
                  <p class="text-body-l text-Grayscale-900 mb-3" style="text-align: justify;">Ungkapan jumlah pada restating sentence bisa saja berbeda dengan kalimat aslinya. Ada yang bersifat sinonim, ada juga yang bersifat tafsiran. Teman-teman juga perlu menginterpretasi dari angka yang ada pada kalimat asal untuk ungkapan jumlah.</p>
                  <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500 space-y-3">
                    <p class="text-body-l text-Grayscale-800"><strong>Contoh 1:</strong></p>
                    <p class="text-body-l text-Grayscale-800 mb-1"><strong>Kalimat soal:</strong> The bakery sells <em>more than 70%</em> of its cakes by the end of the day.</p>
                    <p class="text-body-l text-Grayscale-800 mb-3"><strong>Restating Sentence:</strong> <em>Most</em> of the bakery's cakes are sold by the end of the day.</p>
                    <p class="text-body-l text-Grayscale-800"><strong>Contoh 2:</strong></p>
                    <p class="text-body-l text-Grayscale-800 mb-1"><strong>Kalimat soal:</strong> Farmers grow <em>a large number of</em> crops during the rainy season.</p>
                    <p class="text-body-l text-Grayscale-800 mb-2"><strong>Restating Sentence:</strong> <em>Most</em> crops are grown by farmers during the rainy season.</p>
                    <p class="text-body-l text-Primary-800 italic">Pada kalimat 1, frasa "more than 70%" mendekati "most," sehingga ungkapan jumlah ini dapat diubah menjadi "most of the bakery's cakes." Untuk kalimat 2, frasa "a large number of" dapat diubah tafsirannya menjadi "most" karena keduanya menyatakan jumlah yang signifikan.</p>
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
          "Latihan restating sentence menggunakan teks bacaan tentang tren pertanian organik.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Text</h3>
              <p class="text-body-l font-bold text-Primary-800 mb-3">Topic: Organic Farming Trend</p>

              <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200 space-y-4">
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Organic farming has gained popularity in recent years as a sustainable alternative to conventional farming. By avoiding the use of synthetic fertilizers and pesticides, organic farming helps preserve soil health and protect the environment. Additionally, organic produce is often considered healthier and more environmentally friendly, attracting consumers who are concerned about their well-being and the planet.</p>
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">However, organic farming also faces challenges. It requires more time, labor, and resources compared to traditional farming methods, making organic products more expensive. Despite these challenges, the demand for organic products continues to grow as more people become aware of the benefits of sustainable agriculture.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Study</h3>

              <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                <p class="text-body-l font-bold text-Grayscale-900 mb-2">Example Question</p>
                <p class="text-body-l text-Grayscale-800 mb-4">Restate the following sentence from the text:</p>
                <div class="bg-Grayscale-50 rounded-lg p-3 mb-4 border border-Grayscale-200">
                  <p class="text-body-l text-Grayscale-900 italic">"Organic farming helps preserve soil health and protect the environment."</p>
                </div>

                <div class="space-y-2 mb-6">
                  <div class="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
                    <span class="text-body-l font-bold text-green-700">A.</span>
                    <span class="text-body-l text-green-700 font-semibold">Organic farming contributes to environmental protection and soil preservation.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">B.</span>
                    <span class="text-body-l text-Grayscale-800">Organic farming damages the environment and depletes soil health.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">C.</span>
                    <span class="text-body-l text-Grayscale-800">Organic farming focuses on using synthetic fertilizers for better soil health.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">D.</span>
                    <span class="text-body-l text-Grayscale-800">Organic farming harms the planet and reduces agricultural sustainability.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">E.</span>
                    <span class="text-body-l text-Grayscale-800">Organic farming reduces soil health by using synthetic fertilizers.</span>
                  </div>
                </div>

                <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500">
                  <p class="text-body-l font-bold text-Primary-800 mb-2">Pembahasan:</p>
                  <p class="text-body-l text-Grayscale-800" style="text-align: justify;">Frasa "helps preserve soil health and protect the environment" pada soal memiliki makna yang sama dengan "contributes to environmental protection and soil preservation" pada pilihan A. Kata "helps preserve" dapat disepadankan dengan "contributes to," dan susunan kata pada kalimat tersebut tetap sesuai dengan makna aslinya.</p>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Restating Sentence",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/8zei1BS1ubM",
        description:
          "Video pembelajaran tentang teknik restating sentence dalam literasi bahasa Inggris.",
      },
      {
        title: "Video: Restating Sentence Practice",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Ih6YCPblGWI",
        description:
          "Video latihan dan pembahasan soal-soal restating sentence untuk persiapan UTBK.",
      },
      {
        title: "Quiz: Restating Sentence",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Many studies show that physical exercise has positive effects on mental health. Exercise increases endorphins, which improve mood and reduce feelings of stress and anxiety. Additionally, engaging in physical activities can help individuals develop better self-esteem and enhance their sense of accomplishment. While exercise cannot cure mental illnesses, it is a valuable addition to traditional treatments like therapy and medication.\n\nInterestingly, regular exercise also improves cognitive function. Studies suggest that physical activity enhances memory, concentration, and problem-solving abilities. This improvement is linked to better blood circulation in the brain, which keeps it active and healthy.\n\nAlthough the benefits of exercise are widely recognized, some people struggle to maintain a consistent routine. Lack of motivation, time, and resources can prevent individuals from adopting a healthy lifestyle. Overcoming these barriers often requires personal commitment and support from friends or family.\n\nExercise offers numerous mental and physical benefits. Incorporating regular physical activity into daily life may be challenging at first, but the rewards make the effort worthwhile.",
            question:
              'The sentence "Exercise increases endorphins, which improve mood and reduce feelings of stress and anxiety" in paragraph 1 can be best restated as:',
            options: [
              {
                id: "a",
                text: "Regular exercise enhances mental clarity and productivity.",
              },
              {
                id: "b",
                text: "Exercise triggers the release of chemicals that boost mood and alleviate stress.",
              },
              {
                id: "c",
                text: "Engaging in physical activity guarantees relief from mental illnesses.",
              },
              {
                id: "d",
                text: "Endorphins are unrelated to mood improvement or stress reduction.",
              },
              {
                id: "e",
                text: "Therapy and medication are more effective than exercise for mental health.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The original sentence says exercise increases endorphins that improve mood and reduce stress. Option B restates this by saying exercise triggers chemical release (endorphins) that boost mood and alleviate (reduce) stress — same meaning, different wording.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Many studies show that physical exercise has positive effects on mental health. Exercise increases endorphins, which improve mood and reduce feelings of stress and anxiety. Additionally, engaging in physical activities can help individuals develop better self-esteem and enhance their sense of accomplishment. While exercise cannot cure mental illnesses, it is a valuable addition to traditional treatments like therapy and medication.\n\nInterestingly, regular exercise also improves cognitive function. Studies suggest that physical activity enhances memory, concentration, and problem-solving abilities. This improvement is linked to better blood circulation in the brain, which keeps it active and healthy.\n\nAlthough the benefits of exercise are widely recognized, some people struggle to maintain a consistent routine. Lack of motivation, time, and resources can prevent individuals from adopting a healthy lifestyle. Overcoming these barriers often requires personal commitment and support from friends or family.\n\nExercise offers numerous mental and physical benefits. Incorporating regular physical activity into daily life may be challenging at first, but the rewards make the effort worthwhile.",
            question:
              "Choose the correct TRUE/FALSE combination for each statement based on the third paragraph.\n1. Many people find it easy to commit to exercising daily.\n2. Personal motivation is unnecessary when adopting a healthy lifestyle.\n3. It is difficult to exercise regularly without encouragement and determination.\n4. Overcoming mental illness does not involve exercise.\n5. Physical exercise does not require the support of others.",
            options: [
              { id: "a", text: "True - True - True - True - True" },
              { id: "b", text: "True - True - False - True - False" },
              { id: "c", text: "False - False - True - False - True" },
              { id: "d", text: "False - False - True - False - False" },
              { id: "e", text: "False - False - False - False - False" },
            ],
            correctAnswer: "d",
            explanation:
              "Statement 1 is FALSE — the paragraph says people struggle to maintain a consistent routine. Statement 2 is FALSE — personal commitment is required. Statement 3 is TRUE — overcoming barriers requires determination and support. Statement 4 is FALSE — the paragraph is about exercise barriers, not about mental illness treatment. Statement 5 is FALSE — support from friends or family is mentioned as important.",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Many studies show that physical exercise has positive effects on mental health. Exercise increases endorphins, which improve mood and reduce feelings of stress and anxiety. Additionally, engaging in physical activities can help individuals develop better self-esteem and enhance their sense of accomplishment. While exercise cannot cure mental illnesses, it is a valuable addition to traditional treatments like therapy and medication.\n\nInterestingly, regular exercise also improves cognitive function. Studies suggest that physical activity enhances memory, concentration, and problem-solving abilities. This improvement is linked to better blood circulation in the brain, which keeps it active and healthy.\n\nAlthough the benefits of exercise are widely recognized, some people struggle to maintain a consistent routine. Lack of motivation, time, and resources can prevent individuals from adopting a healthy lifestyle. Overcoming these barriers often requires personal commitment and support from friends or family.\n\nExercise offers numerous mental and physical benefits. Incorporating regular physical activity into daily life may be challenging at first, but the rewards make the effort worthwhile.",
            question:
              'Which of the following best restates the last sentence of the passage: "Incorporating regular physical activity into daily life may be challenging at first, but the rewards make the effort worthwhile"?',
            options: [
              {
                id: "a",
                text: "Physical activity has limited benefits for overall well-being.",
              },
              {
                id: "b",
                text: "Starting an exercise routine is difficult, but its advantages are worth the effort.",
              },
              {
                id: "c",
                text: "Daily exercise routines are impossible to maintain.",
              },
              {
                id: "d",
                text: "The health benefits of exercise are often exaggerated.",
              },
              {
                id: "e",
                text: "The effort required for exercise outweighs its potential rewards.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The original sentence conveys that while starting exercise is difficult (challenging at first), the benefits (rewards) justify the effort (worthwhile). Option B restates this concisely with the same meaning.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Climate change is one of the greatest challenges faced by humanity today. The rising temperatures have led to an increase in natural disasters, such as floods, hurricanes, and droughts. Scientists warn that if global warming continues unchecked, the planet may reach a tipping point where the damage becomes irreversible.\n\nEfforts to combat climate change involve reducing greenhouse gas emissions. Many countries have adopted renewable energy sources, such as solar and wind power, to decrease their dependence on fossil fuels. Transitioning to sustainable energy requires global cooperation and significant investments.\n\nPublic awareness also plays a crucial role in addressing climate change. Educational campaigns encourage individuals to adopt eco-friendly practices, such as recycling, conserving energy, and using public transportation. Small actions by many people can collectively make a significant impact on reducing environmental damage.\n\nCombating climate change demands both individual and collective action. Governments, organizations, and individuals must work together to mitigate its effects and preserve the planet for future generations.",
            question:
              'Which of the following best restates the first sentence of paragraph 1: "Climate change is one of the greatest challenges faced by humanity today"?',
            options: [
              {
                id: "a",
                text: "Natural disasters have no link to rising global temperatures.",
              },
              {
                id: "b",
                text: "Climate change is a minor concern in modern society.",
              },
              {
                id: "c",
                text: "The world is experiencing more disasters due to climate change.",
              },
              {
                id: "d",
                text: "Humanity must face challenges unrelated to climate change.",
              },
              { id: "e", text: "Global warming is an unchanging phenomenon." },
            ],
            correctAnswer: "c",
            explanation:
              "The original sentence highlights climate change as one of humanity's greatest challenges. Option C restates this by describing one of its direct consequences — more disasters — which reflects the same gravity of the issue.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Climate change is one of the greatest challenges faced by humanity today. The rising temperatures have led to an increase in natural disasters, such as floods, hurricanes, and droughts. Scientists warn that if global warming continues unchecked, the planet may reach a tipping point where the damage becomes irreversible.\n\nEfforts to combat climate change involve reducing greenhouse gas emissions. Many countries have adopted renewable energy sources, such as solar and wind power, to decrease their dependence on fossil fuels. Transitioning to sustainable energy requires global cooperation and significant investments.\n\nPublic awareness also plays a crucial role in addressing climate change. Educational campaigns encourage individuals to adopt eco-friendly practices, such as recycling, conserving energy, and using public transportation. Small actions by many people can collectively make a significant impact on reducing environmental damage.\n\nCombating climate change demands both individual and collective action. Governments, organizations, and individuals must work together to mitigate its effects and preserve the planet for future generations.",
            question:
              'The sentence "Efforts to combat climate change involve reducing greenhouse gas emissions" in paragraph 2 can be restated as:',
            options: [
              {
                id: "a",
                text: "Tackling climate change requires cutting down on greenhouse gas output.",
              },
              {
                id: "b",
                text: "Greenhouse gas emissions are beneficial for addressing climate change.",
              },
              {
                id: "c",
                text: "Reducing fossil fuels is not necessary to fight climate change.",
              },
              {
                id: "d",
                text: "Climate change can only be solved through renewable energy alone.",
              },
              {
                id: "e",
                text: "Fighting climate change has no connection to emissions reduction.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The original sentence states that fighting climate change involves reducing greenhouse gas emissions. Option A restates this using synonyms: 'tackling' for 'combat,' 'cutting down on' for 'reducing,' and 'output' for 'emissions.'",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Climate change is one of the greatest challenges faced by humanity today. The rising temperatures have led to an increase in natural disasters, such as floods, hurricanes, and droughts. Scientists warn that if global warming continues unchecked, the planet may reach a tipping point where the damage becomes irreversible.\n\nEfforts to combat climate change involve reducing greenhouse gas emissions. Many countries have adopted renewable energy sources, such as solar and wind power, to decrease their dependence on fossil fuels. Transitioning to sustainable energy requires global cooperation and significant investments.\n\nPublic awareness also plays a crucial role in addressing climate change. Educational campaigns encourage individuals to adopt eco-friendly practices, such as recycling, conserving energy, and using public transportation. Small actions by many people can collectively make a significant impact on reducing environmental damage.\n\nCombating climate change demands both individual and collective action. Governments, organizations, and individuals must work together to mitigate its effects and preserve the planet for future generations.",
            question:
              'The sentence "Governments, organizations, and individuals must work together to mitigate its effects and preserve the planet for future generations" in paragraph 4 has the same meaning as:',
            options: [
              {
                id: "a",
                text: "Individuals cannot contribute to solving environmental issues.",
              },
              {
                id: "b",
                text: "Both individuals and organizations must act to combat climate change.",
              },
              {
                id: "c",
                text: "Governments are solely responsible for preserving the planet.",
              },
              {
                id: "d",
                text: "Individual actions have little impact on climate change.",
              },
              {
                id: "e",
                text: "Combating climate change does not require teamwork.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The original sentence emphasizes that governments, organizations, and individuals must all collaborate. Option B correctly captures this shared responsibility by stating that both individuals and organizations must act together.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Social media has transformed how people communicate and share information. Platforms like Instagram and Twitter allow individuals to connect with friends and family regardless of geographic distance. This ease of communication has also given rise to global communities where people with shared interests can interact and collaborate.\n\nHowever, social media is not without its drawbacks. Excessive use can lead to addiction, reduce productivity, and negatively affect mental health. Studies have shown that people who spend more time on social media are more likely to experience feelings of loneliness and depression.\n\nDespite these challenges, social media remains a powerful tool for raising awareness about important issues. Many organizations use platforms to promote campaigns, share news, and engage with their audiences. For instance, hashtags have been used to support social movements and spread information quickly.\n\nSocial media is a double-edged sword. While it offers incredible opportunities for connection and advocacy, users must be cautious of its potential risks and set healthy boundaries.",
            question:
              'The sentence "Social media has transformed how people communicate and share information" in paragraph 1 can be restated as:',
            options: [
              {
                id: "a",
                text: "Social media has had no significant impact on communication patterns.",
              },
              {
                id: "b",
                text: "The way people exchange information and interact has changed dramatically due to social media.",
              },
              {
                id: "c",
                text: "Social media has made communication more difficult for most people.",
              },
              {
                id: "d",
                text: "People communicated more effectively before the rise of social media.",
              },
              {
                id: "e",
                text: "Social media only affects how businesses share information.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The original sentence states that social media has transformed (changed dramatically) how people communicate and share information. Option B restates this by saying the way people exchange information has changed dramatically due to social media.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Social media has transformed how people communicate and share information. Platforms like Instagram and Twitter allow individuals to connect with friends and family regardless of geographic distance. This ease of communication has also given rise to global communities where people with shared interests can interact and collaborate.\n\nHowever, social media is not without its drawbacks. Excessive use can lead to addiction, reduce productivity, and negatively affect mental health. Studies have shown that people who spend more time on social media are more likely to experience feelings of loneliness and depression.\n\nDespite these challenges, social media remains a powerful tool for raising awareness about important issues. Many organizations use platforms to promote campaigns, share news, and engage with their audiences. For instance, hashtags have been used to support social movements and spread information quickly.\n\nSocial media is a double-edged sword. While it offers incredible opportunities for connection and advocacy, users must be cautious of its potential risks and set healthy boundaries.",
            question:
              'Which of the following best restates the sentence "Studies have shown that people who spend more time on social media are more likely to experience feelings of loneliness and depression" in paragraph 2?',
            options: [
              {
                id: "a",
                text: "Using social media excessively leads to loneliness and depression.",
              },
              {
                id: "b",
                text: "Social media improves mental health and reduces feelings of loneliness.",
              },
              {
                id: "c",
                text: "People who use social media less often experience higher productivity.",
              },
              {
                id: "d",
                text: "Spending time on social media has no effect on mental health.",
              },
              {
                id: "e",
                text: "Social media addiction is unrelated to feelings of depression.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The original sentence links greater social media use to a higher likelihood of loneliness and depression. Option A restates this by saying excessive use leads to those same outcomes.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Social media has transformed how people communicate and share information. Platforms like Instagram and Twitter allow individuals to connect with friends and family regardless of geographic distance. This ease of communication has also given rise to global communities where people with shared interests can interact and collaborate.\n\nHowever, social media is not without its drawbacks. Excessive use can lead to addiction, reduce productivity, and negatively affect mental health. Studies have shown that people who spend more time on social media are more likely to experience feelings of loneliness and depression.\n\nDespite these challenges, social media remains a powerful tool for raising awareness about important issues. Many organizations use platforms to promote campaigns, share news, and engage with their audiences. For instance, hashtags have been used to support social movements and spread information quickly.\n\nSocial media is a double-edged sword. While it offers incredible opportunities for connection and advocacy, users must be cautious of its potential risks and set healthy boundaries.",
            question:
              "Choose the correct TRUE/FALSE combination for each statement based on the last paragraph.\n1. Social media is dangerous and offers no positive benefits.\n2. Users should stop using social media to avoid its risks.\n3. Social media provides both advantages and disadvantages.\n4. Advocacy and connection are impossible on social media.\n5. Setting boundaries is unnecessary for social media use.",
            options: [
              { id: "a", text: "True - True - True - True - True" },
              { id: "b", text: "True - False - True - False - True" },
              { id: "c", text: "True - True - False - True - True" },
              { id: "d", text: "False - False - True - False - True" },
              { id: "e", text: "False - False - True - False - False" },
            ],
            correctAnswer: "e",
            explanation:
              "Statement 1 is FALSE — the paragraph acknowledges incredible opportunities alongside risks. Statement 2 is FALSE — it advises setting boundaries, not stopping use. Statement 3 is TRUE — social media is described as a double-edged sword. Statement 4 is FALSE — connection and advocacy are explicitly mentioned as benefits. Statement 5 is FALSE — users must set healthy boundaries.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Drinking tea is a cherished tradition in many cultures worldwide. From the Japanese tea ceremony to English afternoon tea, the beverage serves as a symbol of hospitality and comfort. Tea lovers often believe that the choice of tea leaves, water temperature, and brewing time significantly affect the flavor.\n\nHowever, recent research shows that the color of the cup can influence the perception of taste and aroma. For instance, participants in one study reported that tea in red cups tasted sweeter, even though the tea itself was identical. While intriguing, these findings remain inconclusive, as taste perception can vary widely among individuals.",
            question:
              'The sentence "The color of the cup can influence the perception of taste and aroma" in paragraph 2 of Text 4 can be best restated as:',
            options: [
              {
                id: "a",
                text: "The flavor of tea is entirely determined by the type of tea leaves used.",
              },
              {
                id: "b",
                text: "A cup's color has no bearing on how tea tastes or smells.",
              },
              {
                id: "c",
                text: "The hue of a cup may affect how drinkers perceive the taste and smell of tea.",
              },
              {
                id: "d",
                text: "Tea always tastes sweeter when served in a red cup.",
              },
              {
                id: "e",
                text: "Only water temperature and brewing time affect the perception of tea flavor.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The original sentence states the cup's color can influence (affect) perception of taste and aroma (smell). Option C restates this using 'hue' for color, 'may affect' for can influence, and 'taste and smell' for taste and aroma.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Coffee, like tea, is deeply embedded in cultural practices. In many countries, coffee is not just a beverage but a social ritual that brings people together. The type of coffee beans, the brewing method, and the choice of milk or sugar all play a role in creating a perfect cup.\n\nInterestingly, some researchers suggest that the color of the coffee mug can impact the drinker's experience. For example, darker mugs may enhance the bitterness of coffee, while lighter mugs might make it taste smoother. Despite these claims, personal preference often overrides such effects.",
            question:
              "Which of the following sentences from Text 5 is an opinion?",
            options: [
              {
                id: "a",
                text: "Coffee is deeply embedded in cultural practices.",
              },
              {
                id: "b",
                text: "The type of coffee beans affects the flavor of the coffee.",
              },
              {
                id: "c",
                text: "Darker mugs may enhance the bitterness of coffee.",
              },
              {
                id: "d",
                text: "Coffee is not just a beverage but a social ritual.",
              },
              {
                id: "e",
                text: "Personal preference often overrides such effects.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "Saying coffee is 'not just a beverage but a social ritual' is a subjective interpretation of its cultural value, making it an opinion. The other statements are either factual observations or research-based claims.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Coffee, like tea, is deeply embedded in cultural practices. In many countries, coffee is not just a beverage but a social ritual that brings people together. The type of coffee beans, the brewing method, and the choice of milk or sugar all play a role in creating a perfect cup.\n\nInterestingly, some researchers suggest that the color of the coffee mug can impact the drinker's experience. For example, darker mugs may enhance the bitterness of coffee, while lighter mugs might make it taste smoother. Despite these claims, personal preference often overrides such effects.",
            question:
              'Which of the following best restates the sentence "The color of the coffee mug can impact the drinker\'s experience" in paragraph 2 of Text 5?',
            options: [
              {
                id: "a",
                text: "Coffee in dark mugs tastes sweeter than in light mugs.",
              },
              {
                id: "b",
                text: "The color of a coffee mug can alter the perceived taste of coffee.",
              },
              {
                id: "c",
                text: "Coffee mugs have no effect on the drinker's experience.",
              },
              {
                id: "d",
                text: "Personal preferences determine coffee flavor entirely.",
              },
              {
                id: "e",
                text: "The brewing method matters more than the color of the mug.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The original sentence says mug color can impact (alter) the drinker's experience (perceived taste). Option B restates this accurately without changing the meaning.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Plastic pollution is a growing concern for environmentalists worldwide. Every year, millions of tons of plastic waste end up in oceans, threatening marine ecosystems and wildlife. Efforts to reduce plastic use include banning single-use plastics and promoting biodegradable alternatives.\n\nDespite these initiatives, plastic production continues to rise globally. Many argue that recycling alone is not enough to combat the crisis. A shift in consumer behavior, coupled with stricter regulations on manufacturers, is essential for long-term sustainability.",
            question:
              'The sentence "Plastic pollution is a growing concern for environmentalists worldwide" in paragraph 1 can be restated as:',
            options: [
              {
                id: "a",
                text: "Plastic pollution is no longer a significant environmental issue.",
              },
              {
                id: "b",
                text: "Only a few environmentalists are worried about plastic pollution.",
              },
              {
                id: "c",
                text: "Plastic waste is an increasingly worrying problem for environmental experts across the globe.",
              },
              {
                id: "d",
                text: "Environmentalists believe plastic pollution has been successfully managed.",
              },
              {
                id: "e",
                text: "Plastic pollution primarily affects urban areas and not marine ecosystems.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The original sentence states plastic pollution is a growing (increasingly worrying) concern for environmentalists (environmental experts) worldwide (across the globe). Option C restates all three elements accurately.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Plastic pollution is a growing concern for environmentalists worldwide. Every year, millions of tons of plastic waste end up in oceans, threatening marine ecosystems and wildlife. Efforts to reduce plastic use include banning single-use plastics and promoting biodegradable alternatives.\n\nDespite these initiatives, plastic production continues to rise globally. Many argue that recycling alone is not enough to combat the crisis. A shift in consumer behavior, coupled with stricter regulations on manufacturers, is essential for long-term sustainability.",
            question:
              'The sentence "Many argue that recycling alone is not enough to combat the crisis" in paragraph 2 has the same meaning as:',
            options: [
              {
                id: "a",
                text: "Recycling alone cannot solve the plastic pollution crisis.",
              },
              {
                id: "b",
                text: "Recycling is sufficient to address plastic waste issues.",
              },
              {
                id: "c",
                text: "Plastic production has no effect on marine ecosystems.",
              },
              {
                id: "d",
                text: "Consumer behavior does not influence sustainability.",
              },
              {
                id: "e",
                text: "Long-term sustainability is achieved through recycling.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The original sentence says recycling alone is not enough (cannot solve) to combat the crisis (plastic pollution crisis). Option A restates this directly and accurately.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Plastic pollution is a growing concern for environmentalists worldwide. Every year, millions of tons of plastic waste end up in oceans, threatening marine ecosystems and wildlife. Efforts to reduce plastic use include banning single-use plastics and promoting biodegradable alternatives.\n\nDespite these initiatives, plastic production continues to rise globally. Many argue that recycling alone is not enough to combat the crisis. A shift in consumer behavior, coupled with stricter regulations on manufacturers, is essential for long-term sustainability.",
            question:
              'Which of the following best restates the last sentence in the text: "A shift in consumer behavior, coupled with stricter regulations on manufacturers, is essential for long-term sustainability"?',
            options: [
              {
                id: "a",
                text: "Reducing plastic waste requires changes in consumer habits and stricter rules for manufacturers.",
              },
              {
                id: "b",
                text: "Recycling and biodegradable plastics are the only solutions to the crisis.",
              },
              {
                id: "c",
                text: "Consumers have no role in addressing plastic pollution.",
              },
              {
                id: "d",
                text: "Manufacturers are not responsible for plastic waste.",
              },
              {
                id: "e",
                text: "Long-term sustainability cannot be achieved through regulations.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The original sentence calls for a shift in consumer behavior (changes in consumer habits) and stricter regulations on manufacturers (stricter rules for manufacturers) for long-term sustainability. Option A is the accurate restatement.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Restating Sentence";
      moduleDoc.description =
        "Learn techniques for restating sentences — expressing the same meaning using different words, synonyms, and sentence structures.";
      moduleDoc.subcategory = "Restating and Cloze Text";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Restating Sentence",
        description:
          "Learn techniques for restating sentences — expressing the same meaning using different words, synonyms, and sentence structures.",
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

seedRestatingSentence();
