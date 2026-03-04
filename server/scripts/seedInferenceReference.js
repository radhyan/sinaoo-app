const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedInferenceReference = async () => {
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

    const targetId = "inference-and-reference";

    const passages = {
      lpg: "The Indonesian government has long subsidized these small LPG canisters to ensure affordability for low-income households and small businesses. However, the recent shortages suggest inefficiencies in the supply chain, possible hoarding, and issues with distribution mechanisms.\nReports indicate that vendors and households are lining up for hours, often only to find empty shelves. Some have turned to alternative fuels, such as firewood or kerosene, which are less efficient and more environmentally harmful. Meanwhile, unscrupulous distributors may be diverting subsidized LPG to the open market, where it can be sold at a higher price.\nThe crisis underscores the need for better enforcement and transparency in subsidy distribution. Experts argue that digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse and ensure that subsidies reach their intended recipients.\nAs the government scrambles to address the shortages, the situation serves as a wake-up call: without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures. Addressing these governance issues is not just about economics—it is about ensuring basic human dignity.",
      cyber:
        "This initiative signals a shift in the TNI's approach to modern warfare, recognizing that cyber threats pose as significant a risk to national security as conventional military threats. With increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises, the need for a highly skilled cyber force has become more urgent.\nBy recruiting civilians with IT expertise, the TNI aims to bridge the talent gap and strengthen its cyber capabilities. Many cybersecurity experts in Indonesia work in the private sector or academia, making direct recruitment from these fields a strategic move. However, integrating civilian specialists into the rigid structure of the military could present challenges, particularly in terms of adapting to military discipline and protocols.\nExperts suggest that the success of this initiative will depend on clear training programs, attractive incentives, and a well-defined career path within the cyber force. Collaboration with universities and technology companies could also help build a sustainable pipeline of cybersecurity professionals.\nAs cyber threats evolve, the TNI's move to prioritize cybersecurity marks an important step in safeguarding Indonesia's digital infrastructure. However, its implementation will require careful planning to ensure that the country's cyber defense is both robust and adaptive to emerging threats.",
      job: 'Many young job seekers find themselves stuck in an endless loop—employers require experience for entry-level positions, but those same roles were traditionally meant to provide that very experience. As a result, fresh graduates often struggle to secure their first job, leading to prolonged job searches and underemployment.\nOne reason for this shift is the increasing automation and digitization of workplaces. Many routine tasks that were once assigned to entry-level employees are now handled by software or outsourced, leaving only more complex responsibilities that require specialized skills. Employers expect candidates to come in ready to contribute immediately, rather than invest time and resources in extensive training.\nTo adapt, many young professionals turn to internships, freelance work, and online certifications to build their résumés before even entering the job market. While these alternatives provide valuable experience, they also blur the line between unpaid labor and legitimate career-building opportunities. Some argue that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate financial returns, exacerbating inequality in career advancement.\nDespite these challenges, entry-level jobs are not entirely obsolete. They remain a crucial gateway into industries, though the definition of "entry-level" has evolved. Job seekers who proactively develop in-demand skills—such as data analysis, coding, digital marketing, or project management—stand a better chance of breaking into competitive fields. Networking and leveraging platforms like LinkedIn can also help fresh graduates connect with opportunities beyond traditional job postings.\nUltimately, while the landscape of entry-level employment has changed, career growth is still possible for those who adapt. The key lies in continuous learning, strategic job searching, and seeking alternative ways to gain experience in a rapidly shifting job market.',
    };

    const stepsData = [
      {
        title: "Materi: Inference (Simpulan Logis)",
        type: "reading",
        status: "active",
        description:
          "Pelajari cara menarik kesimpulan logis berdasarkan fakta dan bukti dalam teks.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">What is Inference?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Inference merupakan suatu ide, gagasan, kesimpulan atau opini yang dihasilkan dari penalaran secara logis berdasarkan observasi, fakta, penalaran, dan bukti. Berbeda dengan fakta yang tertulis jelas, inference membutuhkan kemampuan kita untuk "membaca di antara baris" (reading between the lines).
              </p>
              <div class="bg-Primary-50 p-6 rounded-lg border border-Primary-200">
                <h4 class="text-h4 text-Primary-900 mb-2">Inference vs Conclusion</h4>
                <p class="text-body-m text-Grayscale-800" style="text-align: justify;">
                  <strong>Inferensi</strong> adalah asumsi atau perkiraan tentang apa yang akan terjadi/tersirat, sedangkan <strong>Kesimpulan</strong> adalah apa yang sebenarnya terjadi atau penyusunan ringkasan dari informasi yang telah diberikan.
                </p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Inference Question Keywords</h3>
              <p class="text-body-l mb-4">Soal inferensi umumnya menggunakan kata kunci seperti:</p>
              <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6 font-bold text-center">
                <div class="bg-white p-3 rounded-lg border border-Grayscale-200 shadow-sm text-Primary-700">Infer...</div>
                <div class="bg-white p-3 rounded-lg border border-Grayscale-200 shadow-sm text-Primary-700">Imply...</div>
                <div class="bg-white p-3 rounded-lg border border-Grayscale-200 shadow-sm text-Primary-700">Likely...</div>
                <div class="bg-white p-3 rounded-lg border border-Grayscale-200 shadow-sm text-Primary-700">Assume...</div>
                <div class="bg-white p-3 rounded-lg border border-Grayscale-200 shadow-sm text-Primary-700">Indicate...</div>
              </div>
              <ul class="space-y-2 text-body-m italic text-Grayscale-700 list-disc list-inside bg-Grayscale-50 p-4 rounded-lg">
                <li>It is implied in the passage that...</li>
                <li>Which of the following is most likely true...</li>
                <li>What can we assume from...</li>
                <li>What does the author imply about...</li>
              </ul>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Langkah Menentukan Inference</h3>
              <div class="space-y-4">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-Primary-500 text-white flex items-center justify-center font-bold">1</div>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;"><strong>Bacalah teks secara keseluruhan.</strong> Pahami makna implisit dan informasi yang disebutkan secara tidak langsung.</p>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-Primary-500 text-white flex items-center justify-center font-bold">2</div>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;"><strong>Identifikasi kalimat atau frasa</strong> yang mungkin memberikan petunjuk mengenai apa yang disirat penulis. Temukan bukti pendukung asumsi.</p>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-Primary-500 text-white flex items-center justify-center font-bold">3</div>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;"><strong>Buat kesimpulan dan prediksi</strong> terkait apa yang tidak disampaikan secara langsung. Gunakan logika dan hindari asumsi tanpa dukungan teks.</p>
                </div>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Materi: Reference (Kata Rujukan)",
        type: "reading",
        status: "locked",
        description:
          "Pelajari cara mengidentifikasi kata ganti (pronouns) dan apa yang dirujuknya dalam teks.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">What is Reference?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Reference atau <strong>Kata Rujukan</strong> digunakan ketika seseorang menggunakan bentuk linguistik berupa <em>referring expressions</em> untuk memudahkan lawan bicaranya mengidentifikasi sesuatu. Reference digunakan untuk merujuk ke sesuatu yang telah disebutkan sebelumnya (antecedent) atau yang akan disebutkan.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Jenis-jenis Reference</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-5 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-900 mb-2">Pronominal</h4>
                  <p class="text-body-m text-Grayscale-700 mb-2">Merujuk pada kata ganti (pronoun).</p>
                  <code class="text-Primary-700 bg-Primary-50 px-2 py-1 rounded text-sm">he, she, it, they, its</code>
                </div>
                <div class="bg-white p-5 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-900 mb-2">Demonstrative</h4>
                  <p class="text-body-m text-Grayscale-700 mb-2">Merujuk pada kata tunjuk (demonstrative).</p>
                  <code class="text-Primary-700 bg-Primary-50 px-2 py-1 rounded text-sm">this, that, these, those</code>
                </div>
                <div class="bg-white p-5 rounded-xl border border-Grayscale-200">
                  <h4 class="font-bold text-Primary-900 mb-2">Comparative</h4>
                  <p class="text-body-m text-Grayscale-700 mb-2">Merujuk pada perbandingan.</p>
                  <code class="text-Primary-700 bg-Primary-50 px-2 py-1 rounded text-sm">such, same, similar, other</code>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Langkah Menentukan Reference</h3>
              <div class="bg-Primary-50 p-6 rounded-lg border border-Primary-200">
                <ul class="space-y-4">
                  <li class="flex gap-3 text-body-m text-Grayscale-800">
                    <span class="text-Primary-600 font-bold">•</span>
                    <span>Gunakan teknik <strong>scanning/skimming</strong> untuk menemukan informasi spesifik.</span>
                  </li>
                  <li class="flex gap-3 text-body-m text-Grayscale-800">
                    <span class="text-Primary-600 font-bold">•</span>
                    <span>Identifikasi kata ganti (it, this, those) dan <strong>baca kalimat sebelumnya</strong>.</span>
                  </li>
                  <li class="flex gap-3 text-body-m text-Grayscale-800">
                    <span class="text-Primary-600 font-bold">•</span>
                    <span>Pastikan subjek dan predikat dalam kalimat saling mendukung satu sama lain secara logis.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        `,
      },
      {
        title: "Video: Inference and Reference Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/OKxEl5Lgs9M",
        description:
          "Panduan dasar memahami teknik penarikan kesimpulan dan kata rujukan.",
      },
      {
        title: "Video: Inference and Reference Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/PWmuIgPIQwM",
        description:
          "Contoh soal dan pembahasan intensif mengenai inferensi dan referensi.",
      },
      {
        title: "Quiz: Inference and Reference",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: passages.lpg,
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
            context: passages.lpg,
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
            context: passages.lpg,
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
            context: passages.lpg,
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
              "The passage explicitly states that experts argue digital monitoring systems, stricter oversight, and clearer eligibility criteria could help prevent misuse.",
            points: 5,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: passages.lpg,
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
              "The article concludes that without comprehensive reform, vulnerable communities will continue to bear the brunt of policy failures, and that addressing governance is about ensuring dignity.",
            points: 6,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: passages.cyber,
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
              "The passage states that increasing incidents of cyberattacks targeting government institutions, critical infrastructure, and private enterprises have made the need for a skilled cyber force more urgent.",
            points: 6,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: passages.cyber,
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
              "The passage explicitly mentions that integrating civilian specialists into the rigid structure of the military could present challenges in adapting to discipline.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: passages.cyber,
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
              "The passage states that success will depend on clear training programs, attractive incentives, and well-defined career paths.",
            points: 7,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: passages.cyber,
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
              "Collaboration with universities and technology companies could help build a sustainable pipeline of cybersecurity professionals.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: passages.cyber,
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
            context: passages.job,
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
              "The passage describes young job seekers stuck in an 'endless loop' where employers require experience for entry-level positions.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: passages.job,
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
              "Automation and digitization have meant many routine tasks once assigned to entry-level employees are now handled by software or outsourced.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: passages.job,
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
              "The passage states that unpaid or low-paid internships disproportionately benefit those who can afford to work without immediate returns.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: passages.job,
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
              "The passage advises job seekers to proactively develop in-demand skills and leverage networking platforms.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: passages.job,
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
              "The article concludes that while the landscape has changed, career growth is still possible for those who adapt through continuous learning.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.subcategory = "Inference & Reference"; // Inference/Reference subcategory
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Inference and Reference",
        description:
          "Unlock the ability to draw logical conclusions and identify key referring expressions in English texts.",
        subcategory: "Inference & Reference",
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

seedInferenceReference();
