const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedAuthorWritingOrganisation = async () => {
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

    const targetId = "author-writing-organisation";

    const passages = {
      palmoil:
        "Prabowo's statement reflects a long-standing tension between economic development and environmental conservation in Indonesia. As the world's largest producer of palm oil, Indonesia has long relied on the industry for economic growth, job creation, and export revenues. However, this expansion has come at a steep cost—massive deforestation, loss of biodiversity, and increased carbon emissions.\n\nBy downplaying the environmental impact of palm oil plantations, Prabowo risks undermining years of progress in sustainable forestry and conservation efforts. His remarks suggest a fundamental misunderstanding—or deliberate dismissal—of how deforestation works. While oil palm trees are indeed plants, replacing primary rainforests with monoculture plantations does not maintain the same ecological balance. Forests store carbon, support diverse wildlife, and regulate water cycles, whereas palm plantations do not serve these same functions.\n\nEnvironmental groups and climate activists have been quick to criticize Prabowo's stance, warning that further expansion of oil palm plantations will accelerate habitat destruction, particularly in regions like Sumatra and Kalimantan. Deforestation has already pushed species such as the orangutan and Sumatran tiger to the brink of extinction. Additionally, it contributes to frequent forest fires, which release massive amounts of greenhouse gases and cause transboundary haze that affects Indonesia's neighbors.\n\nPrabowo's comments also raise concerns about Indonesia's international commitments. The country has pledged to reduce deforestation under the Paris Agreement and has received funding from global initiatives like the REDD+ program to curb forest loss. A policy shift favoring palm oil expansion over conservation could damage Indonesia's credibility on the world stage and impact trade relations with environmentally conscious markets in Europe and North America.\n\nRather than promoting outdated narratives that pit economic growth against environmental sustainability, Indonesia needs a more balanced approach. Strengthening certification programs like the Indonesian Sustainable Palm Oil (ISPO) system, enforcing stricter land-use regulations, and investing in agroforestry models that integrate conservation with economic benefits could offer a path forward.\n\nUltimately, Indonesia's forests are not just a resource to be exploited—they are a crucial part of the nation's natural heritage and global ecological health. Leadership should recognize that a truly prosperous future must include both economic opportunity and environmental responsibility.",
      wildfires:
        "Many Indonesians affected by the wildfires have been forced to evacuate, seeking temporary shelter in community centers, hotels, and the homes of relatives or friends. Some have lost all their belongings, while others are anxiously waiting to return and assess the damage. The Indonesian Consulate General in Los Angeles has been actively assisting affected citizens, providing emergency aid, temporary housing support, and facilitating communication with local authorities.\n\nIn response to the crisis, Indonesian community organizations in the US have also mobilized efforts to support those in need. Fundraising initiatives, donation drives, and volunteer groups have emerged to help displaced families recover. Meanwhile, Indonesian officials are working closely with the US government and relief agencies to ensure that affected citizens receive the necessary assistance, including legal and immigration support for those who may have lost important documents in the fire.\n\nThe scale of destruction caused by the wildfires has prompted widespread discussions about climate change, disaster preparedness, and the need for stronger wildfire mitigation measures. While authorities continue to battle the remaining fires and assess the full extent of the damage, affected Indonesians in Los Angeles are now focused on rebuilding their lives, demonstrating resilience in the face of one of the worst natural disasters in recent US history.",
      middleincome:
        "For years, Indonesia has been warned about the middle-income trap, a situation where a country's economic growth stagnates before reaching high-income status. While this concern is valid, Indonesia should not allow itself to be defined by this narrative. Instead, it must take decisive steps to accelerate its transformation into a high-income economy.\n\nA key part of this transformation lies in productivity-driven growth. Indonesia must move beyond its traditional reliance on natural resources and low-cost labor by investing in human capital, innovation, and industrial upgrading. Strengthening education, vocational training, and research & development (R&D) will be essential in fostering a workforce capable of competing in the global knowledge economy.\n\nInfrastructure and digitalization are also critical. Continued investment in transportation networks, energy, and smart cities will enhance connectivity and economic efficiency. At the same time, embracing digital transformation particularly in fintech, e-commerce, and AI can unlock new avenues for economic growth and financial inclusion.\n\nHowever, progress will not come without structural reforms. Indonesia needs to improve its business climate, streamline regulations, and ensure legal certainty to attract long-term foreign and domestic investment. Addressing issues such as bureaucratic inefficiencies, labor market rigidity, and corruption will be key to fostering a more dynamic and competitive economy.\n\nFurthermore, sustainability must be at the heart of Indonesia's development strategy. As the world shifts toward green economies, Indonesia has a unique opportunity to position itself as a leader in renewable energy, sustainable agriculture, and carbon trading. Moving away from deforestation-driven economic models and investing in cleaner industries will not only help meet global climate commitments but also create new economic opportunities.\n\nIndonesia's journey beyond the middle-income trap requires a bold yet balanced approach one that combines visionary leadership with pragmatic execution. By embracing innovation, sustainability, and structural reforms, Indonesia can carve its own path toward long-term prosperity, proving that its economic success story is far from over.",
    };

    const stepsData = [
      {
        title: "Materi: Author's Writing Organisation",
        type: "reading",
        status: "active",
        description:
          "Pelajari bagaimana penulis menyusun ide-ide mereka agar koheren dan mudah dipahami.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">What is Writing Organisation?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4">
                Writing Organisation mengacu pada cara penulis menyusun informasi dan ide-ide dalam sebuah teks agar logis dan koheren.
              </p>
            </section>
            <!-- [skipping full HTML content for brevity in seed script update] -->
          </div>
        `,
      },
      {
        title: "Video: Writing Organisation & Coherence Part 1",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/ULaj5yuw6NY",
        description: "Panduan dasar cara penulis menyusun teks agar koheren.",
      },
      {
        title: "Video: Writing Organisation & Coherence Part 2",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/V6bhfQYyhjM",
        description: "Strategi menjawab soal organisasi teks.",
      },
      {
        title: "Quiz: Writing Organisation & Coherence",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context: passages.palmoil,
            question:
              "How does the author introduce the central issue of the passage?",
            options: [
              {
                id: "a",
                text: "By describing Prabowo's perspective on palm oil and its economic benefits.",
              },
              {
                id: "b",
                text: "By providing statistical data on Indonesia's palm oil industry.",
              },
              {
                id: "c",
                text: "By discussing international reactions to Indonesia's environmental policies.",
              },
              {
                id: "d",
                text: "By focusing on the scientific impact of deforestation.",
              },
              {
                id: "e",
                text: "By comparing Indonesia's palm oil industry with other countries.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The author opens by referencing Prabowo's statement and framing it within the tension between economic development and environmental conservation.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context: passages.palmoil,
            question:
              "What role does the second paragraph play in the passage's structure?",
            options: [
              {
                id: "a",
                text: "It provides a counterargument against environmental activists.",
              },
              {
                id: "b",
                text: "It expands on the flaws in Prabowo's reasoning about palm oil plantations.",
              },
              {
                id: "c",
                text: "It presents a neutral perspective on palm oil's economic advantages.",
              },
              {
                id: "d",
                text: "It describes potential economic consequences of stricter environmental policies.",
              },
              {
                id: "e",
                text: "It shifts the focus from deforestation to government policies.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The second paragraph directly challenges Prabowo's logic by explaining why replacing rainforests with palm plantations is ecologically harmful.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context: passages.palmoil,
            question:
              "Why does the author mention endangered species like the orangutan and Sumatran tiger?",
            options: [
              {
                id: "a",
                text: "To evoke an emotional response from the reader.",
              },
              {
                id: "b",
                text: "To criticize Prabowo's policies on wildlife conservation.",
              },
              {
                id: "c",
                text: "To emphasize the real consequences of deforestation caused by palm oil expansion.",
              },
              {
                id: "d",
                text: "To contrast Indonesia's environmental issues with global wildlife conservation efforts.",
              },
              {
                id: "e",
                text: "To illustrate how conservation groups have failed to protect biodiversity.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The mention of orangutans and Sumatran tigers serves as concrete evidence of real-world consequences of deforestation.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context: passages.palmoil,
            question:
              "What is the function of the fourth paragraph in the author's argument?",
            options: [
              {
                id: "a",
                text: "It discusses the effectiveness of Indonesia's conservation policies.",
              },
              {
                id: "b",
                text: "It highlights the international implications of Prabowo's stance on deforestation.",
              },
              {
                id: "c",
                text: "It critiques the role of palm oil companies in environmental destruction.",
              },
              {
                id: "d",
                text: "It explains why global funding programs are ineffective in Indonesia.",
              },
              {
                id: "e",
                text: "It shifts the focus from palm oil expansion to industrial pollution.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The fourth paragraph broadens the argument by connecting Prabowo's stance to international implications like the Paris Agreement.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context: passages.palmoil,
            question: "What is the main purpose of the final paragraph?",
            options: [
              {
                id: "a",
                text: "To propose solutions that balance economic growth and environmental protection.",
              },
              {
                id: "b",
                text: "To argue that economic progress is more important than conservation.",
              },
              {
                id: "c",
                text: "To conclude that sustainable palm oil production is impossible.",
              },
              {
                id: "d",
                text: "To emphasize the need for stronger government enforcement of environmental laws.",
              },
              {
                id: "e",
                text: "To suggest that Indonesia should abandon palm oil production entirely.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The final paragraph closes with a call for balance between economic opportunity and environmental responsibility.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context: passages.wildfires,
            question: "What is the primary function of the first paragraph?",
            options: [
              {
                id: "a",
                text: "To highlight the long-term economic consequences of the wildfires.",
              },
              {
                id: "b",
                text: "To introduce the challenges faced by Indonesians affected by the wildfires.",
              },
              {
                id: "c",
                text: "To analyze the government's response to the disaster.",
              },
              {
                id: "d",
                text: "To emphasize the role of climate change in worsening wildfires.",
              },
              {
                id: "e",
                text: "To describe the environmental destruction caused by the fires.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The first paragraph focuses on the personal hardships of affected Indonesians establecimiento establishing the human impact.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context: passages.wildfires,
            question:
              "How does the second paragraph contribute to the overall structure of the passage?",
            options: [
              {
                id: "a",
                text: "It shifts the focus from the victims to the relief efforts undertaken by various groups.",
              },
              {
                id: "b",
                text: "It critiques the lack of government action in addressing wildfire victims.",
              },
              {
                id: "c",
                text: "It highlights the financial impact of the wildfires on Indonesian citizens.",
              },
              {
                id: "d",
                text: "It explains the scientific causes of wildfires in the US.",
              },
              {
                id: "e",
                text: "It discusses how the Indonesian government is preventing future disasters.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The second paragraph transitions from victims' plight to relief efforts by community organizations and officials.",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context: passages.wildfires,
            question: "What is the main purpose of the third paragraph?",
            options: [
              {
                id: "a",
                text: "To argue that stronger environmental policies are needed to prevent future wildfires.",
              },
              {
                id: "b",
                text: "To describe the broader implications of the wildfires, beyond immediate destruction.",
              },
              {
                id: "c",
                text: "To criticize the lack of preparedness among affected communities.",
              },
              {
                id: "d",
                text: "To conclude that Indonesian citizens will need long-term international aid.",
              },
              {
                id: "e",
                text: "To explain the role of Indonesian consular officials in disaster management.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The third paragraph expands beyond the crisis to discuss climate change, disaster preparedness, and rebuilding.",
            points: 5,
          },
          {
            id: 9,
            type: "multiple-choice",
            context: passages.wildfires,
            question:
              "What is the relationship between the second and third paragraphs?",
            options: [
              {
                id: "a",
                text: "The second paragraph presents a solution, while the third paragraph provides supporting evidence.",
              },
              {
                id: "b",
                text: "The second paragraph describes immediate actions, while the third explores long-term considerations.",
              },
              {
                id: "c",
                text: "The second paragraph criticizes disaster response, while the third offers an alternative approach.",
              },
              {
                id: "d",
                text: "The second paragraph focuses on government efforts, while the third paragraph examines personal stories.",
              },
              {
                id: "e",
                text: "The second paragraph argues against climate change discussions, while the third refutes that argument.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The second paragraph covers immediate relief, while the third shifts to broader, long-term considerations.",
            points: 4,
          },
          {
            id: 10,
            type: "multiple-choice",
            context: passages.wildfires,
            question:
              "What does the final sentence contribute to the passage's overall message?",
            options: [
              {
                id: "a",
                text: "It emphasizes the resilience of affected Indonesians despite the disaster.",
              },
              {
                id: "b",
                text: "It shifts the focus from disaster response to economic recovery.",
              },
              {
                id: "c",
                text: "It highlights the role of political leaders in handling natural disasters.",
              },
              {
                id: "d",
                text: "It suggests that Indonesian citizens will permanently relocate due to wildfires.",
              },
              {
                id: "e",
                text: "It concludes that wildfires are inevitable and cannot be prevented.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The final sentence highlights the resilience of affected Indonesians.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context: passages.middleincome,
            question: "What is the main function of the first paragraph?",
            options: [
              {
                id: "a",
                text: "To explain the causes of the middle-income trap in Indonesia.",
              },
              {
                id: "b",
                text: "To emphasize the importance of overcoming the middle-income trap.",
              },
              {
                id: "c",
                text: "To describe how the middle-income trap is affecting Indonesia's economy.",
              },
              {
                id: "d",
                text: "To analyze the relationship between growth stagnation and income levels.",
              },
              {
                id: "e",
                text: "To propose Indonesia's potential to achieve high-income status.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The first paragraph establishes the middle-income trap as the primary challenge to be overcome.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context: passages.middleincome,
            question:
              "How does the second paragraph build upon the ideas from the first?",
            options: [
              {
                id: "a",
                text: "It introduces solutions for economic stagnation based on natural resource reliance.",
              },
              {
                id: "b",
                text: "It focuses on the role of foreign investments in overcoming the middle-income trap.",
              },
              {
                id: "c",
                text: "It shifts from discussing the challenge to suggesting concrete actions to improve productivity.",
              },
              {
                id: "d",
                text: "It emphasizes the need for short-term solutions to accelerate economic growth.",
              },
              {
                id: "e",
                text: "It critiques Indonesia's reliance on foreign markets for economic progress.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "It moves from the problem to proposing specific solutions like human capital investment.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context: passages.middleincome,
            question:
              "How does the third paragraph contribute to the passage's overall coherence?",
            options: [
              {
                id: "a",
                text: "It discusses the importance of technological advancement in improving Indonesia's infrastructure.",
              },
              {
                id: "b",
                text: "It presents digitalization as an obstacle to economic growth.",
              },
              {
                id: "c",
                text: "It continues the discussion on economic growth by highlighting the need for infrastructure and digital transformation.",
              },
              {
                id: "d",
                text: "It criticizes the lack of digital infrastructure in Indonesia.",
              },
              {
                id: "e",
                text: "It shifts the topic to focus on international relations and trade agreements.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "It adds another pillar of transformation (infrastructure/digitalization) to the earlier human capital points.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context: passages.middleincome,
            question:
              "What is the role of the fourth paragraph in the passage?",
            options: [
              {
                id: "a",
                text: "To describe the current state of Indonesia's business environment.",
              },
              {
                id: "b",
                text: "To suggest the need for structural reforms to support economic growth.",
              },
              {
                id: "c",
                text: "To emphasize the importance of labor market flexibility for long-term prosperity.",
              },
              {
                id: "d",
                text: "To provide examples of countries that have successfully avoided the middle-income trap.",
              },
              {
                id: "e",
                text: "To discuss the role of education in overcoming structural issues in the economy.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "It points out that technical solutions alone are not enough; structural reforms are also required.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context: passages.middleincome,
            question: "How does the final paragraph wrap up the passage?",
            options: [
              {
                id: "a",
                text: "It introduces the idea of economic competition between Indonesia and other nations.",
              },
              {
                id: "b",
                text: "It reinforces the need for balancing innovation, sustainability, and reform for long-term prosperity.",
              },
              {
                id: "c",
                text: "It restates the importance of focusing on short-term solutions to economic challenges.",
              },
              {
                id: "d",
                text: "It focuses on the global challenges faced by Indonesia in the world economy.",
              },
              {
                id: "e",
                text: "It emphasizes the role of foreign investment in Indonesia's development strategy.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "It synthesizes the main points into a coherent final call for a bold and balanced approach.",
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
        name: "Author's Writing Organisation & Coherence",
        description:
          "Analyze how text is structured and how ideas are connected logically to create a coherent argument or narrative.",
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

seedAuthorWritingOrganisation();
