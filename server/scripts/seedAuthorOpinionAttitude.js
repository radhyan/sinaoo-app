const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedAuthorOpinionAttitude = async () => {
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

    const targetId = "author-opinion-attitude";

    const passages = {
      generosity:
        "One of the biggest challenges in maximizing the impact of Indonesia's generosity is the lack of structured and strategic giving. While Indonesians frequently donate to religious causes, disaster relief, and direct aid for the poor, long-term social investments—such as education, healthcare, and sustainable development—often receive less attention. This results in short-term relief rather than systemic change.\n\nMoreover, the digital age has altered the way people give. Online fundraising platforms and social media campaigns make it easier than ever to contribute, but they also create a culture of impulsive giving, where donations are made based on emotional appeals rather than careful consideration of long-term impact. This can lead to inefficiencies, with funds being spread too thin or directed toward immediate needs rather than addressing root causes.\n\nTo better harness this generosity, Indonesia needs stronger collaboration between charitable organizations, government initiatives, and private-sector philanthropy. More transparent reporting and impact assessment can help ensure that donations reach their intended beneficiaries effectively. Additionally, encouraging structured giving—such as endowments, scholarships, and social enterprises—can create sustainable solutions rather than temporary fixes.\n\nUltimately, Indonesia's spirit of giving is an invaluable asset. By channeling it more strategically, we can move beyond short-term charity and towards long-lasting social transformation, ensuring that our generosity creates real, meaningful change for future generations.",
      flood:
        "Teguh attributes this improvement to the city's ongoing infrastructure upgrades, including better drainage systems, increased capacity of water reservoirs, and intensified river dredging efforts. He also highlighted the effectiveness of the early warning system and rapid response teams in mitigating flood impacts.\n\nDespite these advancements, Jakarta's flood problem remains a pressing issue, especially as climate change intensifies extreme weather patterns. Many low-lying and densely populated areas still experience severe flooding, disrupting daily life and causing economic losses. Critics argue that while floodwaters may recede faster, the city has yet to implement long-term solutions, such as better land-use planning and stricter regulations on illegal construction along waterways.\n\nUrban planners emphasize that flood management must go beyond short-term engineering solutions. Addressing deforestation in upstream areas, improving waste management to prevent clogged drains, and accelerating Jakarta's ambitious sea wall and coastal protection projects are crucial steps in tackling the root causes of flooding.\n\nAs Jakarta continues to battle its long-standing flood issues, the government's ability to balance rapid urbanization with sustainable water management will determine the city's resilience in the years to come.",
      dangdut:
        "Dangdut's resurgence isn't just about nostalgia, it's a full-blown cultural movement. Younger audiences are reinterpreting the genre, infusing it with electronic beats, hip-hop influences, and even global music trends. Artists like Happy Asmara and Yeni Inka are attracting millions of views on YouTube, while DJs and remix producers are giving traditional Dangdut hits a fresh, modern twist that resonates with Gen Z.\n\nSocial media platforms like TikTok have played a massive role in Dangdut's revival, turning once-regional hits into nationwide anthems. Viral dance trends and remixes have made the genre more accessible to urban youth, many of whom previously viewed Dangdut as old-fashioned or only popular in rural areas. This blending of traditional and modern styles has given rise to what some are calling the 'new skena' of Indonesia. A fresh cultural wave where Dangdut sits alongside indie music, electronic dance, and K-pop influences.\n\nHowever, as Dangdut evolves, it continues to attract criticism. Some argue that its lyrics, dance moves, and performances have become increasingly provocative, fueling debates over morality and cultural preservation. Traditionalists worry that the genre is losing its original essence, while others see this transformation as a natural evolution of music in a digital era.\n\nDespite the controversies, one thing is clear: Dangdut is no longer confined to kampungs and roadside warungs. It's making its mark on mainstream media, club scenes, and even global stages. Whether as a form of pop expression or a cultural statement, Dangdut's latest wave proves that it's still very much alive and more relevant than ever.",
    };

    const stepsData = [
      {
        title: "Materi: Author's Opinion & Attitude",
        type: "reading",
        status: "active",
        description:
          "Pahami perspektif penulis (POV), perbedaan antara opini dan sikap (attitude), serta cara menemukannya dalam teks.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">What's Author's POV?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Author's Point of View (POV) dalam literasi bahasa Inggris mengacu pada perspektif, sudut pandang, atau cara pandang penulis terhadap topik yang dibahas dalam teks. Ini mencakup bagaimana penulis menyampaikan informasi, pendapat, atau perasaan mereka melalui tulisan.
              </p>
              <div class="bg-Primary-50 p-5 rounded-lg border border-Primary-200">
                <p class="text-body-l font-bold text-Primary-800 mb-2">Author's POV dapat ditemukan melalui:</p>
                <ul class="list-disc list-inside text-body-l text-Grayscale-800 space-y-1 ml-2">
                  <li>Gaya bahasa (tone, diction)</li>
                  <li>Pemilihan fakta atau data yang disajikan</li>
                  <li>Pendapat pribadi atau argumen yang ditonjolkan</li>
                  <li>Sikap emosional yang tersirat dalam teks</li>
                </ul>
              </div>
              <p class="text-body-l text-Grayscale-900 mt-4 italic">Tujuan memahami Author's POV adalah untuk mengevaluasi sudut pandang penulis, apakah netral, mendukung, atau menentang suatu topik.</p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Opinion vs Attitude</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-Grayscale-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr class="bg-Grayscale-100 text-left">
                      <th class="p-4 border border-Grayscale-200 font-bold text-Primary-900">Aspect</th>
                      <th class="p-4 border border-Grayscale-200 font-bold text-Primary-900">Author's Opinion</th>
                      <th class="p-4 border border-Grayscale-200 font-bold text-Primary-900">Author's Attitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-4 border border-Grayscale-200 font-bold bg-Grayscale-50">Definition</td>
                      <td class="p-4 border border-Grayscale-200 text-body-m">Pendapat atau keyakinan penulis tentang suatu topik.</td>
                      <td class="p-4 border border-Grayscale-200 text-body-m">Perasaan atau emosi penulis terhadap suatu topik.</td>
                    </tr>
                    <tr>
                      <td class="p-4 border border-Grayscale-200 font-bold bg-Grayscale-50">How it's shown</td>
                      <td class="p-4 border border-Grayscale-200 text-body-m">Secara eksplisit dalam klaim, argumen, atau pernyataan.</td>
                      <td class="p-4 border border-Grayscale-200 text-body-m">Secara implisit melalui pilihan kata, nada, dan gaya bahasa.</td>
                    </tr>
                    <tr>
                      <td class="p-4 border border-Grayscale-200 font-bold bg-Grayscale-50">Examples</td>
                      <td class="p-4 border border-Grayscale-200 text-body-m italic">"I believe that climate change is a critical issue."</td>
                      <td class="p-4 border border-Grayscale-200 text-body-m italic">Menggunakan nada prihatin, optimis, atau sarkastik.</td>
                    </tr>
                  </tbody>
                </table>
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
          "Latihan soal mengenai sikap dan opini penulis melalui 3 studi kasus: Gravitasi, Diabetes, dan Vtuber.",
        content: `
          <div class="space-y-12 text-Grayscale-900">

            <!-- Exercise 1: Gravity -->
            <section class="bg-white p-6 rounded-xl shadow-sm border border-Grayscale-200">
              <h4 class="text-h4 font-heading text-Primary-900 mb-4">Exercise 1: Gravity and Discovery</h4>
              <div class="bg-Primary-50 p-5 rounded-lg mb-6 border-l-4 border-Primary-400 font-serif italic" style="text-align: justify;">
                Gravity is a force that pulls objects toward the center of the Earth. It is what makes things fall when dropped. However, gravity is not only important on Earth. It affects the movement of planets, moons, and even light. Without gravity, the Earth would not orbit the Sun, and we would float off into space. Many people think of gravity as a constant force, but it is actually quite complex. For instance, gravity is weaker at higher altitudes. This means that astronauts in space experience a reduction in gravity, which is why they float around in their spacecraft. Some scientists believe that understanding gravity could lead to new technological advancements, such as more efficient space travel. In recent years, there has been growing interest in studying gravity waves, which are ripples in spacetime caused by massive objects like black holes. These waves are difficult to detect, but scientists are optimistic that new technology will allow us to observe them more clearly. Some researchers argue that gravity, in its most fundamental form, could hold the key to unlocking the mysteries of the universe. Despite all of this, gravity is often taken for granted in our everyday lives. It's only when we leave Earth or experience extreme conditions that we truly appreciate its significance.
              </div>

              <div class="space-y-4">
                <p class="text-body-l font-bold text-Primary-800">1. What is the author's attitude toward gravity as described in the passage?</p>
                <div class="grid grid-cols-1 gap-2 mb-4">
                  <div class="p-3 rounded border border-Grayscale-200">a) The author is indifferent about gravity and sees it as an unimportant force.</div>
                  <div class="p-3 rounded border border-Grayscale-200">b) The author is skeptical about the importance of gravity in scientific research.</div>
                  <div class="p-3 rounded bg-green-50 border border-green-200 font-semibold text-green-700">c) The author is fascinated by gravity and optimistic about its potential for future discoveries.</div>
                  <div class="p-3 rounded border border-Grayscale-200">d) The author views gravity as a simple force with no significant impact on science.</div>
                  <div class="p-3 rounded border border-Grayscale-200">e) The author believes that gravity is too complicated to study and should be ignored.</div>
                </div>
                <div class="bg-Grayscale-50 p-4 rounded-lg border border-Grayscale-200">
                  <p class="text-body-m font-bold text-Primary-800">Jawaban: c</p>
                  <p class="text-body-m text-Grayscale-800" style="text-align: justify;">
                    Penulis menunjukkan sikap <strong>terpesona dan optimis</strong> terhadap gravitasi. Hal ini terlihat dari bagaimana penulis menjelaskan gravitasi tidak hanya sebagai gaya murni, tetapi sebagai kunci untuk menemukan pengetahuan baru.
                  </p>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Author's Opinion & Attitude Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/dO_zNkRF1ks",
        description:
          "Pelajari konsep Author's Opinion and Attitude dalam teks bahasa Inggris.",
      },
      {
        title: "Video: Author's Opinion & Attitude Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/aeidtOumLNQ",
        description:
          "Latihan dan pembahasan mendalam mengenai sikap penulis dalam berbagai konteks teks.",
      },
      {
        title: "Quiz: Author's Opinion & Attitude",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: passages.generosity,
            question:
              "How does the author perceive the current state of charitable giving in Indonesia?",
            options: [
              {
                id: "a",
                text: "It is already well-structured and highly effective.",
              },
              {
                id: "b",
                text: "It is mainly focused on religious causes for cultural reasons.",
              },
              {
                id: "c",
                text: "It lacks strategic planning and long-term impact.",
              },
              {
                id: "d",
                text: "It has completely failed to address social problems.",
              },
              {
                id: "e",
                text: "It is driven by emotions rather than careful consideration.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The author opens by identifying 'the lack of structured and strategic giving' as the biggest challenge, and throughout the passage emphasizes that Indonesia's giving results in short-term relief rather than systemic change — pointing to a lack of strategic planning and long-term impact.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: passages.generosity,
            question:
              "What is the author's attitude towards online fundraising and social media campaigns?",
            options: [
              {
                id: "a",
                text: "The author believes they are revolutionary and should be fully embraced.",
              },
              {
                id: "b",
                text: "The author thinks they are ineffective and should be avoided.",
              },
              {
                id: "c",
                text: "The author acknowledges their usefulness but warns against impulsive giving.",
              },
              {
                id: "d",
                text: "The author believes they have completely replaced traditional philanthropy.",
              },
              {
                id: "e",
                text: "The author suggests they are the main reason for the failure of structured giving.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The author acknowledges that online platforms 'make it easier than ever to contribute' (usefulness) but immediately follows with a warning that they 'create a culture of impulsive giving' — a balanced, cautionary stance.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: passages.generosity,
            question:
              "What can be inferred about the author's opinion on religious and disaster-related donations?",
            options: [
              {
                id: "a",
                text: "The author believes they are the only effective forms of charity.",
              },
              {
                id: "b",
                text: "The author thinks they are unnecessary and should be reduced.",
              },
              {
                id: "c",
                text: "The author acknowledges their importance but believes long-term solutions are more impactful.",
              },
              {
                id: "d",
                text: "The author argues that they have solved Indonesia's social issues.",
              },
              {
                id: "e",
                text: "The author suggests they should be replaced entirely with structured philanthropy.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The author does not dismiss religious or disaster donations but notes they lead to 'short-term relief rather than systemic change,' implying these forms of giving are acknowledged but insufficient compared to long-term strategic investments.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: passages.generosity,
            question:
              "How does the author feel about Indonesia's overall generosity?",
            options: [
              {
                id: "a",
                text: "The author believes it is insufficient compared to other countries.",
              },
              {
                id: "b",
                text: "The author argues that it is mostly ineffective and should be restructured completely.",
              },
              {
                id: "c",
                text: "The author appreciates Indonesia's generosity but encourages a more strategic approach.",
              },
              {
                id: "d",
                text: "The author believes Indonesia is too focused on social investments rather than direct aid.",
              },
              {
                id: "e",
                text: "The author suggests that generosity is declining and must be revived.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The author calls Indonesia's spirit of giving 'an invaluable asset,' showing appreciation, while the entire passage argues for channeling it more strategically — a combination of praise and constructive guidance.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: passages.generosity,
            question: "What is the tone of the passage?",
            options: [
              { id: "a", text: "Pessimistic and critical" },
              { id: "b", text: "Neutral and philosopher" },
              { id: "c", text: "Analytical and constructive" },
              { id: "d", text: "Harsh and dismissive" },
              { id: "e", text: "Sarcastic and humorous" },
            ],
            correctAnswer: "c",
            explanation:
              "The author examines the issue objectively (analytical), identifying both strengths and weaknesses of Indonesia's giving culture, and proposes concrete improvements (constructive).",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: passages.flood,
            question:
              "What is the author's general opinion on Jakarta's flood management efforts?",
            options: [
              {
                id: "a",
                text: "The efforts have completely solved the problem.",
              },
              {
                id: "b",
                text: "The government's strategies are ineffective and should be abandoned.",
              },
              {
                id: "c",
                text: "Some progress has been made, but long-term solutions are still needed.",
              },
              {
                id: "d",
                text: "The floods are solely caused by climate change, and human efforts cannot solve them.",
              },
              {
                id: "e",
                text: "The problem is exaggerated and does not require immediate attention.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The passage acknowledges real improvements (drainage, early warning systems) while emphasizing that the flood problem 'remains a pressing issue' and that long-term solutions are still lacking.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: passages.flood,
            question:
              "How does the author view the critics' arguments regarding Jakarta's flood control measures?",
            options: [
              {
                id: "a",
                text: "The critics are entirely wrong, as the government's efforts have been flawless.",
              },
              {
                id: "b",
                text: "The critics raise valid points about the need for long-term solutions.",
              },
              {
                id: "c",
                text: "The critics fail to acknowledge the improvements made so far.",
              },
              {
                id: "d",
                text: "The critics should focus only on climate change as the main cause of floods.",
              },
              {
                id: "e",
                text: "The critics are exaggerating the severity of the issue.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The author presents the critics' arguments without dismissing them and follows up with urban planners echoing similar concerns, indicating the author views the critics' points as valid.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: passages.flood,
            question:
              "What is the author's attitude towards Jakarta's urbanization in relation to flood management?",
            options: [
              {
                id: "a",
                text: "Urbanization should be stopped to prevent further flooding.",
              },
              {
                id: "b",
                text: "Urbanization is necessary, but it must be balanced with sustainable water management.",
              },
              {
                id: "c",
                text: "Urbanization has no effect on Jakarta's flood problems.",
              },
              {
                id: "d",
                text: "Urbanization is the only reason Jakarta faces severe flooding.",
              },
              {
                id: "e",
                text: "The government should ignore urbanization concerns and focus only on short-term flood control.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The closing sentence states that the government's ability to 'balance rapid urbanization with sustainable water management' will determine resilience.",
            points: 5,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: passages.flood,
            question:
              "What can be inferred about the author's stance on Jakarta's future flood resilience?",
            options: [
              {
                id: "a",
                text: "Jakarta will never be able to manage its floods effectively.",
              },
              {
                id: "b",
                text: "The city is on the right track, but significant improvements are still necessary.",
              },
              {
                id: "c",
                text: "Jakarta should stop spending money on flood control as it is futile.",
              },
              {
                id: "d",
                text: "Flooding is no longer a major concern for Jakarta.",
              },
              {
                id: "e",
                text: "Jakarta should focus only on engineering solutions like drainage and sea walls.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The author acknowledges positive steps while emphasizing remaining critical gaps, reflecting a stance that progress is happening but not yet complete.",
            points: 4,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: passages.flood,
            question: "What is the tone of the passage?",
            options: [
              { id: "a", text: "Overly optimistic and celebratory" },
              { id: "b", text: "Critical yet hopeful" },
              { id: "c", text: "Indifferent and neutral" },
              { id: "d", text: "Harsh and pessimistic" },
              { id: "e", text: "Sarcastic and dismissive" },
            ],
            correctAnswer: "b",
            explanation:
              "The passage points out shortcomings (critical) while acknowledging progress and future resilience potential (hopeful).",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: passages.dangdut,
            question:
              "What is the author's attitude toward the resurgence of Dangdut?",
            options: [
              {
                id: "a",
                text: "The author sees it as an exciting cultural movement blending tradition with modernity.",
              },
              {
                id: "b",
                text: "The author believes it is only a short-lived trend with no lasting significance.",
              },
              {
                id: "c",
                text: "The author is indifferent to the changes happening within the genre.",
              },
              {
                id: "d",
                text: "The author acknowledges its growth but worries about its impact on traditional values.",
              },
              {
                id: "e",
                text: "The author sees its popularity as proof of its adaptability and relevance in modern times.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The author describes it as a 'full-blown cultural movement' and highlights the blend of tradition and modernity with clear enthusiasm.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: passages.dangdut,
            question:
              "How does the author perceive social media's role in Dangdut's evolution?",
            options: [
              {
                id: "a",
                text: "Social media has been instrumental in making Dangdut more accessible to younger audiences.",
              },
              {
                id: "b",
                text: "Social media has had little effect on Dangdut's resurgence.",
              },
              {
                id: "c",
                text: "Social media has negatively impacted the authenticity of traditional Dangdut.",
              },
              {
                id: "d",
                text: "While social media helps Dangdut gain popularity, it also fuels criticism over its modern adaptations.",
              },
              {
                id: "e",
                text: "Social media has transformed Dangdut into a powerful cultural force that extends beyond its traditional roots.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "The author states TikTok has 'played a massive role' in broadenng the genre's reach to global stages.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: passages.dangdut,
            question:
              "How does the author feel about the criticism that Dangdut has become too provocative?",
            options: [
              {
                id: "a",
                text: "The author acknowledges the debate but does not see it as a reason to dismiss Dangdut's growth.",
              },
              {
                id: "b",
                text: "The author agrees that modern Dangdut is becoming too provocative and should be restricted.",
              },
              {
                id: "c",
                text: "The author is indifferent to the controversy surrounding Dangdut.",
              },
              {
                id: "d",
                text: "The author believes that while there are concerns, cultural evolution is inevitable.",
              },
              {
                id: "e",
                text: "The author views the criticism as part of a broader conversation about musical evolution.",
              },
            ],
            correctAnswer: "d",
            explanation:
              "The author presents the criticism fairly but concludes that despite controversies, Dangdut is more relevant than ever.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: passages.dangdut,
            question:
              "Based on the passage, how does the author view the modernization of Dangdut?",
            options: [
              {
                id: "a",
                text: "The modernization of Dangdut is a sign of its ability to stay relevant across generations.",
              },
              {
                id: "b",
                text: "The modernization of Dangdut weakens its traditional values and cultural significance.",
              },
              {
                id: "c",
                text: "The modernization of Dangdut is unnecessary and forced by social media trends.",
              },
              {
                id: "d",
                text: "While modernization brings new opportunities, it also raises concerns about authenticity.",
              },
              {
                id: "e",
                text: "The modernization of Dangdut represents a dynamic shift that blends tradition and innovation.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "The author frames modernization positively, describing how it blends traditional roots with electronic and global trends.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: passages.dangdut,
            question: "What is the overall tone of the passage?",
            options: [
              { id: "a", text: "Enthusiastic and celebratory" },
              { id: "b", text: "Skeptical and doubtful" },
              { id: "c", text: "Neutral and detached" },
              { id: "d", text: "Analytical yet optimistic" },
              { id: "e", text: "Appreciative and insightful" },
            ],
            correctAnswer: "a",
            explanation:
              "Energetic language like 'full-blown cultural movement' and 'more relevant than ever' indicates enthusiasm.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Author's Opinion & Attitude",
        description:
          "Identify the author's perspective, tone, and feelings toward the subject matter through explicit and implicit clues.",
        subcategory: "Author's POV",
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

seedAuthorOpinionAttitude();
