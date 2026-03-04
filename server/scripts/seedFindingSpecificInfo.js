const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedFindingSpecificInfo = async () => {
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

    const targetId = "finding-specific-information";

    const stepsData = [
      {
        title: "Materi: Finding Specific Information",
        type: "reading",
        status: "active",
        description:
          "Pelajari cara menemukan informasi spesifik dalam teks bacaan bahasa Inggris, termasuk teknik scanning dan strategi menjawab soal.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Specific Information?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Dalam subtes Literasi Bahasa Inggris, bagian "Finding Specific Information" berisi soal-soal yang bertujuan mengukur kemampuan peserta dalam mencari informasi yang sangat spesifik dan jelas dari teks yang diberikan. Jenis pertanyaan ini akan meminta teman-teman untuk mencari fakta, angka, nama, atau detail spesifik yang disebutkan langsung dalam teks.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">How to Find Specific Information in a Text?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Untuk membantu teman-teman menghadapi jenis soal ini, ada beberapa cara yang bisa diterapkan yaitu:
              </p>

              <div class="space-y-4">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
                    Menentukan kata/frasa kunci
                  </h5>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Kata/frasa kunci merupakan informasi utama yang ditanyakan soal, teman-teman perlu terampil memilih yang sesuai dengan kalimat soal lalu mencari informasi tentang kata/frasa kunci di dalam teks.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
                    Lakukan Metode Scanning
                  </h5>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Teman-teman dapat menemukan informasi kata kunci di dalam teks, cukup melakukan scanning agar dapat menghemat waktu pengerjaan soal. Scanning berarti membaca teks secara cepat untuk mencari kata/frasa tertentu. Nah, untuk hal ini informasi yang kita cari adalah kata/frasa kunci.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
                    Pahami sinonim kata/frasa kunci
                  </h5>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Perlu teman-teman pahami bahwa kata/frasa kunci yang sudah ditentukan tidak selalu dinyatakan dengan kata/frasa yang sama persis di teks.</p>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="bg-Primary-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">4</span>
                    Bandingkan Informasi pada teks dan pilihan jawaban
                  </h5>
                  <p class="text-body-l text-Grayscale-900" style="text-align: justify;">Pilih pilihan jawaban yang mengandung informasi yang sama dengan informasi yang dicari di teks.</p>
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
          "Latihan menemukan informasi spesifik menggunakan teks bacaan tentang tren koleksi gantungan kunci Gen Z.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercise Text</h3>
              <p class="text-body-l font-bold text-Primary-800 mb-3">Topic: Gen-Z Keychain Collecting Trend</p>

              <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200 space-y-4">
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">In recent times, keychain collecting has become a popular trend among Gen Z, combining creativity and self-expression. What was once a simple accessory has now turned into a symbol of individuality. From quirky designs to personalized creations, keychains allow young people to showcase their interests, hobbies, and even favorite characters. Many Gen Z individuals see keychains not only as decorative items but also as a way to create meaningful connections with others who share similar tastes.</p>
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">One reason for the growing popularity of keychain collecting is its accessibility. Keychains are affordable, widely available, and come in countless designs, making them an easy entry point for anyone interested in collecting. Additionally, social media platforms like TikTok and Instagram have played a significant role in popularizing this hobby. Users often share videos and photos of their unique collections, sparking curiosity and encouraging others to start their own. The sense of community around keychain collecting has made it even more appealing.</p>
                <p class="text-body-l text-Grayscale-900" style="text-align: justify;">However, this trend is more than just a fad; it also reflects Gen Z's appreciation for small, meaningful items that represent their identity. For some, collecting keychains becomes a way to relieve stress or create a sense of nostalgia. Whether bought during travels, received as gifts, or made by hand, each keychain often carries a story. This blend of personal significance and artistic appeal is why keychain collecting continues to capture the hearts of Gen Z around the world.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Example Question</h3>

              <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                <p class="text-body-l font-bold text-Grayscale-900 mb-4">What is one reason why keychain collecting has become popular among Gen Z?</p>

                <div class="space-y-2 mb-6">
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">A.</span>
                    <span class="text-body-l text-Grayscale-800">Keychains are only available in limited designs.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">B.</span>
                    <span class="text-body-l text-Grayscale-800">Keychains help relieve stress and create a sense of nostalgia.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
                    <span class="text-body-l font-bold text-green-700">C.</span>
                    <span class="text-body-l text-green-700 font-semibold">Social media platforms have encouraged the trend.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">D.</span>
                    <span class="text-body-l text-Grayscale-800">Keychains are used exclusively for travel purposes.</span>
                  </div>
                  <div class="flex items-start gap-2 p-2 rounded">
                    <span class="text-body-l font-bold text-Grayscale-600">E.</span>
                    <span class="text-body-l text-Grayscale-800">Keychain collecting is a temporary fad.</span>
                  </div>
                </div>

                <div class="bg-Primary-50 rounded-lg p-4 border-l-4 border-Primary-500">
                  <p class="text-body-l font-bold text-Primary-800 mb-2">Pembahasan:</p>
                  <p class="text-body-l text-Grayscale-800" style="text-align: justify;">Soal menanyakan alasan populer-nya koleksi gantungan kunci di kalangan Gen Z. Dalam teks disebutkan bahwa media sosial seperti TikTok dan Instagram berperan besar mempopulerkan hobi ini. Pilihan C sesuai dengan informasi tersebut. Pilihan lainnya tidak relevan atau hanya sebagian menjawab pertanyaan.</p>
                </div>
              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Finding Specific Information",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/xTFpNr6PdEA",
        description:
          "Video pembelajaran tentang cara menemukan informasi spesifik dalam teks bacaan bahasa Inggris.",
      },
      {
        title: "Video: Finding Specific Information Practice",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/Y5lgI_Kj7rs",
        description:
          "Video latihan dan pembahasan soal-soal finding specific information untuk persiapan UTBK.",
      },
      {
        title: "Quiz: Finding Specific Information",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question:
              "What caused the rapid spread of the Los Angeles wildfire?",
            options: [
              { id: "a", text: "Climate change and prolonged droughts." },
              { id: "b", text: "Strong winds and dry vegetation." },
              { id: "c", text: "Human activity and lack of firefighters." },
              { id: "d", text: "Challenging terrain and power outages." },
              { id: "e", text: "Aerial water tanker failures." },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states that the fire was 'fueled by strong winds and dry vegetation,' which directly caused its rapid spread across the region.",
            points: 6,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question: "What is the suspected cause of the wildfire?",
            options: [
              { id: "a", text: "Lightning strikes during a storm." },
              { id: "b", text: "Faulty electrical infrastructure." },
              { id: "c", text: "Human activity." },
              { id: "d", text: "Spontaneous combustion due to heat." },
              { id: "e", text: "Climate change." },
            ],
            correctAnswer: "c",
            explanation:
              "The passage states that 'the fire's origin is believed to be human activity, though investigations are ongoing.'",
            points: 6,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question:
              "Which of the following contributed to the Los Angeles fire?",
            options: [
              { id: "a", text: "Heavy rainfall." },
              { id: "b", text: "Strong winds and dry vegetation." },
              { id: "c", text: "Unstable geological faults." },
              { id: "d", text: "Lack of firefighting resources." },
              { id: "e", text: "Construction activities." },
            ],
            correctAnswer: "b",
            explanation:
              "The passage explicitly mentions that strong winds and dry vegetation fueled the fire and contributed to its rapid spread.",
            points: 6,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question:
              "How did the wildfire impact local residents and wildlife?",
            options: [
              {
                id: "a",
                text: "Residents gained improved infrastructure and wildlife habitats expanded.",
              },
              {
                id: "b",
                text: "Residents faced power outages and evacuations, while wildlife habitats were destroyed.",
              },
              {
                id: "c",
                text: "Residents were unaffected but wildlife habitats were severely damaged.",
              },
              {
                id: "d",
                text: "Residents received government compensation and wildlife was relocated safely.",
              },
              {
                id: "e",
                text: "Residents experienced minimal disruption and wildlife remained unharmed.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states the wildfire caused widespread damage to homes, infrastructure, and wildlife habitats, while many residents faced power outages and thousands were forced to evacuate.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question: "What measures were taken to fight the fire?",
            options: [
              {
                id: "a",
                text: "Controlled burns and chemical sprays were used across the region.",
              },
              {
                id: "b",
                text: "Hundreds of firefighters and aerial water tankers were deployed.",
              },
              {
                id: "c",
                text: "The military was called in to manage the evacuation of residents.",
              },
              {
                id: "d",
                text: "Firebreaks were built and rivers were redirected to contain the blaze.",
              },
              {
                id: "e",
                text: "International firefighting teams were brought in from other countries.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states that local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question:
              "Choose TRUE or FALSE for each statement.\n1. The fire consumed over 100,000 acres of land.\n2. Emergency shelters were set up for displaced residents.\n3. The fire was caused by a natural phenomenon.\n4. Climate change has no connection to wildfires.",
            options: [
              { id: "a", text: "True - True - True - True" },
              { id: "b", text: "True - True - False - False" },
              { id: "c", text: "False - False - False - False" },
              { id: "d", text: "False - False - True - True" },
              { id: "e", text: "False - True - False - True" },
            ],
            correctAnswer: "b",
            explanation:
              "Statement 1 is TRUE — the passage confirms the fire consumed over 100,000 acres. Statement 2 is TRUE — emergency shelters were quickly set up. Statement 3 is FALSE — the fire's origin is believed to be human activity, not a natural phenomenon. Statement 4 is FALSE — experts explicitly link climate change to the increasing frequency of wildfires.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Los Angeles recently experienced one of the largest wildfires in its history, consuming over 100,000 acres of land and forcing thousands of residents to evacuate. The fire, fueled by strong winds and dry vegetation, spread rapidly across the region. Local authorities deployed hundreds of firefighters and aerial water tankers to contain the blaze, but challenging terrain made their efforts difficult.\n\nThe wildfire caused widespread damage to homes, infrastructure, and wildlife habitats. Many residents faced power outages, while emergency shelters were quickly set up to accommodate evacuees. The fire's origin is believed to be human activity, though investigations are ongoing. Experts warn that the increasing frequency of such fires is linked to climate change, which has led to prolonged droughts and higher temperatures in California.\n\nDespite the destruction, community efforts have emerged to support affected families, with donations and volunteer aid pouring in. Recovery efforts are expected to take months, but the resilience of the residents shines through in the face of adversity.",
            question:
              "What challenges did firefighters face in containing the wildfire?",
            options: [
              { id: "a", text: "Lack of emergency funds." },
              { id: "b", text: "Difficult terrain." },
              { id: "c", text: "Shortage of firefighters." },
              { id: "d", text: "Miscommunication among authorities." },
              { id: "e", text: "Lack of aerial support." },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states that 'challenging terrain made their efforts difficult,' which was the primary challenge faced by firefighters.",
            points: 6,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question:
              "What was the wind speed of Typhoon Krathon when it made landfall?",
            options: [
              { id: "a", text: "180 km/h" },
              { id: "b", text: "200 km/h" },
              { id: "c", text: "240 km/h" },
              { id: "d", text: "300 km/h" },
              { id: "e", text: "150 km/h" },
            ],
            correctAnswer: "c",
            explanation:
              "The passage explicitly states that Typhoon Krathon had wind speeds reaching 240 kilometers per hour when it made landfall.",
            points: 6,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question: "How many residents were evacuated before the typhoon?",
            options: [
              { id: "a", text: "Over 500,000 people." },
              { id: "b", text: "Over 1 million people." },
              { id: "c", text: "Over 2 million people." },
              { id: "d", text: "Over 5 million people." },
              { id: "e", text: "Over 10 million people." },
            ],
            correctAnswer: "c",
            explanation:
              "The passage states that over 2 million people were relocated to safety following evacuation orders issued by authorities.",
            points: 7,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question:
              "Choose TRUE or FALSE for each statement.\n1. It was one of the strongest storms to hit China in decades.\n2. The typhoon only caused damage in rural areas.\n3. Rising sea surface temperatures contributed to its intensity.\n4. The Chinese government pledged to improve disaster preparedness.",
            options: [
              { id: "a", text: "False - False - True - False" },
              { id: "b", text: "False - False - True - True" },
              { id: "c", text: "True - True - True - False" },
              { id: "d", text: "True - True - False - True" },
              { id: "e", text: "True - False - True - True" },
            ],
            correctAnswer: "e",
            explanation:
              "Statement 1 is TRUE — described as one of the strongest storms to hit China in decades. Statement 2 is FALSE — the typhoon caused widespread destruction including to transportation and communication systems, not just rural areas. Statement 3 is TRUE — scientists attribute the storm's intensity to rising sea surface temperatures. Statement 4 is TRUE — the Chinese government pledged to strengthen disaster preparedness and invest in climate resilience projects.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question:
              "How much is the estimated economic damage caused by the typhoon?",
            options: [
              { id: "a", text: "Over $5 billion." },
              { id: "b", text: "Over $10 billion." },
              { id: "c", text: "Over $15 billion." },
              { id: "d", text: "Over $20 billion." },
              { id: "e", text: "Over $25 billion." },
            ],
            correctAnswer: "c",
            explanation:
              "The passage states that the economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question:
              "What steps are being taken by the Chinese government to address future typhoon risks?",
            options: [
              {
                id: "a",
                text: "Building stronger seawalls along all coastal provinces.",
              },
              {
                id: "b",
                text: "Relocating all residents from coastal areas permanently.",
              },
              {
                id: "c",
                text: "Strengthening disaster preparedness and investing in climate resilience projects.",
              },
              {
                id: "d",
                text: "Banning construction in high-risk typhoon zones.",
              },
              {
                id: "e",
                text: "Requesting international aid for typhoon recovery.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The passage states that the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question: "What are the primary effects of Super Typhoon Krathon?",
            options: [
              { id: "a", text: "Snowstorms and avalanches." },
              {
                id: "b",
                text: "Flooding, landslides, and infrastructure destruction.",
              },
              { id: "c", text: "Earthquakes and seismic activities." },
              { id: "d", text: "Economic growth and improved communication." },
              { id: "e", text: "Rising sea levels." },
            ],
            correctAnswer: "b",
            explanation:
              "The passage explicitly states that the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure as its primary effects.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question:
              "What challenges did emergency response teams face during the typhoon?",
            options: [
              {
                id: "a",
                text: "Insufficient government funding for rescue operations.",
              },
              {
                id: "b",
                text: "Disrupted transportation and communication systems leaving some regions isolated.",
              },
              {
                id: "c",
                text: "Lack of trained personnel to handle the disaster.",
              },
              {
                id: "d",
                text: "Conflicting evacuation orders from different authorities.",
              },
              { id: "e", text: "Language barriers with affected residents." },
            ],
            correctAnswer: "b",
            explanation:
              "The passage states that the typhoon disrupted transportation and communication systems, leaving some regions completely isolated, which was the primary challenge faced by emergency response teams.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Super Typhoon Krathon, one of the strongest storms to hit China in decades, made landfall in the coastal provinces of Fujian and Guangdong in August 2024. With wind speeds reaching 240 kilometers per hour, the typhoon caused massive flooding, landslides, and widespread destruction of infrastructure. Authorities had issued evacuation orders for millions of residents, with over 2 million people relocated to safety.\n\nThe typhoon disrupted transportation and communication systems, leaving some regions completely isolated. Emergency response teams worked around the clock to rescue stranded individuals and provide food, water, and medical assistance. The economic damage caused by Krathon is estimated to exceed $15 billion, with significant losses in agriculture and industry.\n\nScientists attribute the intensity of the storm to rising sea surface temperatures caused by global warming. They warn that typhoons like Krathon are likely to become more frequent and severe in the coming years. In response, the Chinese government has pledged to strengthen disaster preparedness and invest in climate resilience projects to reduce future risks.",
            question:
              "How does global warming contribute to the intensity of typhoons like Krathon?",
            options: [
              {
                id: "a",
                text: "It increases wind resistance in coastal areas, slowing down storms.",
              },
              {
                id: "b",
                text: "It causes rising sea surface temperatures that fuel stronger typhoons.",
              },
              {
                id: "c",
                text: "It reduces rainfall, making typhoons drier but more destructive.",
              },
              {
                id: "d",
                text: "It shifts storm paths away from populated areas.",
              },
              {
                id: "e",
                text: "It weakens ocean currents, making typhoons less predictable.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Scientists in the passage attribute the intensity of Typhoon Krathon to rising sea surface temperatures caused by global warming, which fuels stronger and more severe typhoons.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Finding Specific Information";
      moduleDoc.description =
        "Learn techniques for locating specific information in English reading passages, including scanning and keyword identification strategies.";
      moduleDoc.subcategory = "Organization of Ideas";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Finding Specific Information",
        description:
          "Learn techniques for locating specific information in English reading passages, including scanning and keyword identification strategies.",
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

seedFindingSpecificInfo();
