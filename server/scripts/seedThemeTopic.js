const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedThemeTopic = async () => {
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

    const targetId = "theme-topic";

    const stepsData = [
      {
        title: "Reading: What is Main Idea?",
        type: "reading",
        status: "active",
        description:
          "Learn the concept of main idea, how to identify it, and the key strategies for finding the main idea in a passage.",
        content: `
          <div class="space-y-10 text-Grayscale-900">

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Main Idea?</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Main idea, atau gagasan utama, adalah inti dari sebuah paragraf yang merangkum pesan utama yang ingin disampaikan oleh penulis. Main idea biasanya dinyatakan dalam satu kalimat yang memberikan gambaran umum tentang isi paragraf, sehingga pembaca dapat dengan mudah memahami tujuan dan arah dari tulisan tersebut. Gagasan utama ini bertindak sebagai "panduan" bagi pembaca untuk menghubungkan berbagai informasi atau detail yang ada dalam paragraf. Tanpa main idea, paragraf akan kehilangan fokus dan pembaca mungkin kesulitan untuk menangkap pesan yang ingin disampaikan.
              </p>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Setiap paragraf idealnya memiliki satu main idea yang didukung oleh detail pendukung (supporting details) untuk memperkuat atau menjelaskan gagasan tersebut. Main idea sering kali muncul di awal paragraf sebagai kalimat topik (topic sentence), tetapi dalam beberapa kasus, dapat ditemukan di tengah atau akhir paragraf. Bahkan jika tidak secara eksplisit dinyatakan, main idea tetap dapat diidentifikasi dengan menganalisis hubungan antara detail yang ada. Dengan memahami main idea, pembaca dapat menangkap esensi dari teks tanpa harus membaca setiap kata atau detail secara mendalam.
              </p>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">How to Find It</h3>

              <div class="space-y-6">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    1. Baca Paragraf dengan Seksama
                  </h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-900 space-y-1">
                    <li>Bayangkan kamu sedang mendengarkan cerita. Apa yang paling sering dibicarakan? Itu biasanya petunjuk utama.</li>
                    <li>Jangan fokus pada setiap detail kecil dulu, cukup cari gambaran besarnya.</li>
                  </ul>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    2. Cari Kalimat Utama (Topic Sentence)
                  </h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-900 space-y-1">
                    <li><span class="font-bold">Biasanya di awal paragraf:</span> Penulis sering langsung memberitahu apa yang mereka bicarakan di kalimat pertama.</li>
                    <li><span class="font-bold">Kadang di akhir paragraf:</span> Jika paragrafnya panjang, gagasan utamanya bisa dirangkum di akhir.</li>
                  </ul>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-Primary-500 inline-block"></span>
                    3. Perhatikan Kata-Kata Repetitif
                  </h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-900 space-y-1">
                    <li>Jika ada kata atau ide yang muncul berkali-kali, itu mungkin main idea. Penulis biasanya mengulang hal penting supaya kita ingat.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">1. Main Idea (Gagasan Utama)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Main Idea adalah inti atau gagasan utama dari suatu paragraf atau teks. Ini menjelaskan apa yang paragraf tersebut bicarakan secara spesifik. Main idea biasanya dinyatakan dalam satu kalimat, yang sering disebut sebagai topic sentence. Gagasan utama fokus pada isi paragraf dan memberikan gambaran spesifik tentang informasi yang disampaikan.
              </p>
              <div class="pl-4 border-l-2 border-Secondary-300 space-y-2 mb-4">
                <p class="text-body-l font-bold text-Grayscale-900 mb-1">Ciri-Ciri:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Spesifik dan langsung berkaitan dengan isi paragraf.</li>
                  <li>Menjawab pertanyaan: "Apa yang penulis coba sampaikan dalam paragraf ini?"</li>
                  <li>Didukung oleh detail pendukung (supporting details).</li>
                </ul>
              </div>
              <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                <p class="text-body-l font-bold text-Primary-800 mb-2">Example Paragraph:</p>
                <p class="text-body-l text-Grayscale-800 italic mb-2">"Penguins are birds that cannot fly, but they are excellent swimmers. They live in extremely cold places like Antarctica and have adapted to survive in harsh conditions."</p>
                <p class="text-body-l text-Primary-800"><span class="font-bold">Main Idea:</span> Penguins are birds that live in cold environments and are skilled swimmers.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">2. Topic (Topik)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Topic adalah subjek atau hal utama yang dibahas dalam suatu teks atau paragraf. Topik biasanya lebih umum dibandingkan dengan main idea dan biasanya dinyatakan dalam satu atau dua kata saja. Topik memberikan gambaran tentang apa yang akan dibicarakan dalam paragraf atau teks, tetapi tidak menjelaskan secara spesifik seperti main idea.
              </p>
              <div class="pl-4 border-l-2 border-Secondary-300 space-y-2 mb-4">
                <p class="text-body-l font-bold text-Grayscale-900 mb-1">Ciri-Ciri:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Lebih singkat, biasanya hanya satu atau dua kata.</li>
                  <li>Menjawab pertanyaan: "Tentang apa teks ini?"</li>
                  <li>Tidak memberikan detail atau informasi spesifik.</li>
                </ul>
              </div>
              <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                <p class="text-body-l font-bold text-Primary-800 mb-2">Example Paragraph:</p>
                <p class="text-body-l text-Grayscale-800 italic mb-2">"Penguins are birds that cannot fly, but they are excellent swimmers. They live in extremely cold places like Antarctica and have adapted to survive in harsh conditions."</p>
                <p class="text-body-l text-Primary-800"><span class="font-bold">Topic:</span> Penguins.</p>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">3. Theme (Tema)</h3>
              <p class="text-body-l text-Grayscale-900 leading-relaxed mb-4" style="text-align: justify;">
                Theme adalah ide besar atau pesan moral yang mendasari seluruh cerita, teks, atau karya sastra. Tema biasanya lebih abstrak dan menggambarkan pelajaran atau nilai yang bisa diambil oleh pembaca dari teks tersebut. Tema tidak terbatas pada satu paragraf, melainkan mencakup keseluruhan teks atau cerita.
              </p>
              <div class="pl-4 border-l-2 border-Secondary-300 space-y-2 mb-4">
                <p class="text-body-l font-bold text-Grayscale-900 mb-1">Ciri-Ciri:</p>
                <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                  <li>Bersifat universal, bisa diterapkan dalam berbagai konteks.</li>
                  <li>Menjawab pertanyaan: "Apa pesan atau pelajaran yang ingin disampaikan penulis?"</li>
                  <li>Biasanya tidak dinyatakan secara eksplisit; pembaca perlu menyimpulkannya.</li>
                </ul>
              </div>
              <div class="bg-Primary-50 rounded-lg p-5 border-l-4 border-Primary-500">
                <p class="text-body-l font-bold text-Primary-800 mb-2">Example Story:</p>
                <p class="text-body-l text-Grayscale-800 italic mb-2">"A group of penguins worked together to find food and protect each other from predators during the harsh winter. By cooperating, they managed to survive and thrive despite the challenges."</p>
                <p class="text-body-l text-Primary-800"><span class="font-bold">Theme:</span> Cooperation and teamwork are essential for overcoming challenges.</p>
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
          "Understand the differences between Main Idea, Topic, and Theme, and learn how to identify each one in a passage.",
        content: `
          <div class="space-y-10 text-Grayscale-900">
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
                    <li>"What is the topic of the paragraph?"</li>
                    <li>"The paragraph mainly talks about..."</li>
                    <li>"What is the subject of the passage?"</li>
                    <li>"Which of the following best describes the topic of the text?"</li>
                  </ul>
                </div>

                <div class="bg-Secondary-50 rounded-lg p-5 border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Grayscale-900 mb-2">3. Soal Tentang Theme</h5>
                  <ul class="list-disc pl-5 text-body-l text-Grayscale-800 space-y-1">
                    <li>"What is the theme of the story?"</li>
                    <li>"Which of the following best represents the moral of the passage?"</li>
                    <li>"The underlying message of the text is..."</li>
                    <li>"What is the lesson conveyed by the story?"</li>
                    <li>"Which of the following best describes the theme of the text?"</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-h3 font-heading text-Primary-900 mb-4 border-l-4 border-Primary-500 pl-4 py-1">Exercises</h3>

              <div class="space-y-8">

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Exercise 1</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">"Urbanization is rapidly increasing across the globe, especially in developing countries. While cities offer better economic opportunities and access to education and healthcare, they also face significant challenges. Overcrowding in urban areas often leads to housing shortages and the growth of informal settlements, which lack proper sanitation and infrastructure. Additionally, traffic congestion and pollution are major issues that affect the quality of life in cities. Governments must implement sustainable urban planning to address these challenges, such as improving public transportation systems and providing affordable housing. Without proper planning, the negative effects of urbanization may outweigh its benefits."</p>
                  </div>
                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">1. What is the main idea of the text?</p>
                  <div class="pl-4 text-body-l text-Grayscale-800 space-y-1 mb-3">
                    <p><span class="font-bold">A.</span> Urbanization provides better opportunities for people in cities.</p>
                    <p><span class="font-bold">B.</span> Urbanization leads to overcrowding and infrastructure problems.</p>
                    <p><span class="font-bold text-Primary-700">C.</span> Sustainable urban planning is crucial to addressing urbanization challenges.</p>
                    <p><span class="font-bold">D.</span> Traffic congestion and pollution are the biggest issues in urban areas.</p>
                    <p><span class="font-bold">E.</span> Developing countries are experiencing rapid urbanization.</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-green-800"><span class="font-bold">Jawaban: C.</span> Sustainable urban planning is crucial to addressing urbanization challenges.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Teks ini membahas urbanisasi, yaitu bagaimana banyak orang pindah ke kota. Penulis menjelaskan manfaat urbanisasi, tetapi juga menunjukkan masalah-masalah besar seperti kemacetan, polusi, dan pemukiman kumuh. Lalu, penulis menekankan bahwa perencanaan kota yang berkelanjutan (sustainable urban planning) sangat penting untuk menyelesaikan masalah ini. Jadi, gagasan utamanya adalah perlunya perencanaan yang baik untuk mengatasi tantangan urbanisasi.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Exercise 2</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">"Bees are essential to agriculture and biodiversity because they pollinate a wide variety of plants. Without bees, many crops, including fruits, vegetables, and nuts, would fail to grow, leading to a significant decline in global food production. Unfortunately, bee populations are declining due to habitat loss, pesticide use, and climate change. Farmers and environmentalists are working together to create bee-friendly environments by planting wildflowers, reducing pesticide usage, and preserving natural habitats. These efforts aim to ensure that bees can continue their critical role in maintaining ecosystems and supporting food production."</p>
                  </div>
                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">2. What is the topic of the text?</p>
                  <div class="pl-4 text-body-l text-Grayscale-800 space-y-1 mb-3">
                    <p><span class="font-bold">A.</span> The role of bees in biodiversity.</p>
                    <p><span class="font-bold">B.</span> The impact of climate change on bees.</p>
                    <p><span class="font-bold">C.</span> Efforts to protect bee populations.</p>
                    <p><span class="font-bold text-Primary-700">D.</span> The importance of bees in agriculture and ecosystems.</p>
                    <p><span class="font-bold">E.</span> Declining bee populations due to human activities.</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-green-800"><span class="font-bold">Jawaban: D.</span> The importance of bees in agriculture and ecosystems.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Teks ini membicarakan <span class="font-bold">pentingnya lebah</span> untuk pertanian dan lingkungan. Lebah membantu menyerbuki tanaman, yang sangat penting untuk produksi makanan. Penulis juga menjelaskan bagaimana manusia berusaha melindungi lebah. Topik teks ini adalah "<span class="font-bold">pentingnya lebah dalam pertanian dan ekosistem</span>", yang mencakup seluruh isi teks. Pilihan lain hanya fokus pada bagian tertentu, seperti perubahan iklim atau upaya melindungi lebah.</p>
                  </div>
                </div>

                <div class="bg-white rounded-lg p-5 shadow-sm border border-Secondary-200">
                  <h5 class="text-h5 font-bold text-Primary-700 mb-3">Exercise 3</h5>
                  <div class="bg-Grayscale-50 p-4 rounded-lg mb-4 border border-Grayscale-200">
                    <p class="text-body-l text-Grayscale-900" style="text-align: justify;">"A small village in a remote region faced a severe drought that lasted for months. The villagers depended on a single well for their water supply, which was quickly drying up. Instead of blaming each other, the villagers came together to find a solution. They dug deeper into the well, built water storage tanks, and started using water sparingly. Their cooperation and determination helped them survive the drought, and they even inspired neighboring villages to adopt similar practices. The drought eventually ended, but the villagers continued to work together to prepare for future challenges."</p>
                  </div>
                  <p class="text-body-l font-bold text-Grayscale-900 mb-2">3. What is the theme of the story?</p>
                  <div class="pl-4 text-body-l text-Grayscale-800 space-y-1 mb-3">
                    <p><span class="font-bold text-Primary-700">A.</span> Working together can help overcome difficult situations.</p>
                    <p><span class="font-bold">B.</span> Villages face unique challenges during droughts.</p>
                    <p><span class="font-bold">C.</span> Water conservation is essential for survival.</p>
                    <p><span class="font-bold">D.</span> Natural disasters require immediate action.</p>
                    <p><span class="font-bold">E.</span> Preparation is key to avoiding future problems.</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p class="text-body-l text-green-800"><span class="font-bold">Jawaban: A.</span> Working together can help overcome difficult situations.</p>
                    <p class="text-body-l text-green-800 mt-2" style="text-align: justify;">Cerita ini menunjukkan bagaimana penduduk desa saling membantu untuk mengatasi masalah besar, yaitu kekeringan. Mereka tidak saling menyalahkan, tetapi bekerja sama menggali sumur lebih dalam, menghemat air, dan mempersiapkan masa depan. Pesan atau <span class="font-bold">tema</span> utama cerita ini adalah <span class="font-bold">kerja sama bisa membantu mengatasi situasi sulit</span>. Pilihan lain hanya fokus pada bagian cerita, tetapi tidak mencerminkan pesan keseluruhan.</p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        `,
      },
      {
        title: "Video: Understanding Main Idea",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/8iWnOghayUA",
        description:
          "Video pembelajaran tentang cara menemukan main idea dalam sebuah teks bacaan bahasa Inggris.",
      },
      {
        title: "Video: Theme vs Topic vs Main Idea",
        type: "video",
        status: "locked",
        videoUrl: "https://www.youtube.com/embed/GpQIbdjETMg",
        description:
          "Video pembahasan perbedaan antara Theme, Topic, dan Main Idea beserta contoh-contohnya.",
      },
      {
        title: "Quiz: Theme/Topic",
        type: "quiz",
        status: "locked",
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            context:
              "DeepSeek's breakthrough lies in its ability to develop high-performance AI models with significantly lower computational costs than its Western counterparts. By leveraging innovative training techniques, efficient model architectures, and optimized hardware usage, the company has managed to achieve results that rival those of industry giants like OpenAI and Anthropic.\n\nOne of DeepSeek's key strategies is its focus on efficiency. While companies like OpenAI rely on vast amounts of computing power to train their models, DeepSeek has reportedly developed novel ways to maximize performance with fewer resources. This approach not only reduces operational costs but also makes AI development more accessible, potentially shifting the balance of power in the AI race.\n\nThe excitement surrounding DeepSeek's Reasoning R1 model stems from its ability to perform complex logical reasoning tasks with impressive accuracy. This positions it as a formidable alternative to GPT-4 and Claude, particularly in areas requiring structured thought, such as coding, mathematics, and scientific problem-solving. The subsequent release of a multimodal model that processes both text and images further demonstrates DeepSeek's ambition to compete across multiple AI domains.\n\nDeepSeek's rapid progress raises important questions about the future of AI development. Will its efficiency-driven approach redefine industry standards? How will Western companies respond to this emerging competitor? And most importantly, what does this mean for global AI leadership, particularly as geopolitical tensions shape the tech landscape?\n\nAs DeepSeek continues to push the boundaries of AI with minimal resources, its success could serve as a wake-up call for the broader industry, proving that innovation isn't solely dependent on massive funding, but also on strategic ingenuity and technical excellence.",
            question: "What is the main idea of the passage?",
            options: [
              {
                id: "a",
                text: "DeepSeek's AI models surpass OpenAI and Anthropic in overall performance.",
              },
              {
                id: "b",
                text: "DeepSeek has developed an efficient AI training method that reduces computational costs.",
              },
              {
                id: "c",
                text: "Western AI companies are struggling to keep up with DeepSeek's rapid advancements.",
              },
              {
                id: "d",
                text: "AI development is shifting from the West to China due to DeepSeek's innovations.",
              },
              {
                id: "e",
                text: "The success of DeepSeek's Reasoning R1 model proves that AI no longer needs large-scale data.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage focuses on DeepSeek's breakthrough in developing high-performance AI models with significantly lower computational costs. The supporting details explain how they achieve efficiency and what impact this has on the industry.",
            points: 7,
          },
          {
            id: 2,
            type: "multiple-choice",
            context:
              "DeepSeek's breakthrough lies in its ability to develop high-performance AI models with significantly lower computational costs than its Western counterparts. By leveraging innovative training techniques, efficient model architectures, and optimized hardware usage, the company has managed to achieve results that rival those of industry giants like OpenAI and Anthropic.\n\nOne of DeepSeek's key strategies is its focus on efficiency. While companies like OpenAI rely on vast amounts of computing power to train their models, DeepSeek has reportedly developed novel ways to maximize performance with fewer resources. This approach not only reduces operational costs but also makes AI development more accessible, potentially shifting the balance of power in the AI race.\n\nThe excitement surrounding DeepSeek's Reasoning R1 model stems from its ability to perform complex logical reasoning tasks with impressive accuracy. This positions it as a formidable alternative to GPT-4 and Claude, particularly in areas requiring structured thought, such as coding, mathematics, and scientific problem-solving. The subsequent release of a multimodal model that processes both text and images further demonstrates DeepSeek's ambition to compete across multiple AI domains.\n\nDeepSeek's rapid progress raises important questions about the future of AI development. Will its efficiency-driven approach redefine industry standards? How will Western companies respond to this emerging competitor? And most importantly, what does this mean for global AI leadership, particularly as geopolitical tensions shape the tech landscape?\n\nAs DeepSeek continues to push the boundaries of AI with minimal resources, its success could serve as a wake-up call for the broader industry, proving that innovation isn't solely dependent on massive funding, but also on strategic ingenuity and technical excellence.",
            question: "What is the central theme of the article?",
            options: [
              {
                id: "a",
                text: "The growing competition in the AI industry between China and the West.",
              },
              {
                id: "b",
                text: "The impact of AI on scientific and mathematical research.",
              },
              {
                id: "c",
                text: "How DeepSeek's efficiency challenges the traditional AI development model.",
              },
              {
                id: "d",
                text: "The ethical concerns surrounding AI's rapid advancement.",
              },
              {
                id: "e",
                text: "The importance of multimodal AI models in future technology.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The central theme throughout the article is how DeepSeek's efficiency-driven approach challenges the traditional model of AI development, which relies on massive computing power and funding.",
            points: 7,
          },
          {
            id: 3,
            type: "multiple-choice",
            context:
              "DeepSeek's breakthrough lies in its ability to develop high-performance AI models with significantly lower computational costs than its Western counterparts. By leveraging innovative training techniques, efficient model architectures, and optimized hardware usage, the company has managed to achieve results that rival those of industry giants like OpenAI and Anthropic.\n\nOne of DeepSeek's key strategies is its focus on efficiency. While companies like OpenAI rely on vast amounts of computing power to train their models, DeepSeek has reportedly developed novel ways to maximize performance with fewer resources. This approach not only reduces operational costs but also makes AI development more accessible, potentially shifting the balance of power in the AI race.\n\nThe excitement surrounding DeepSeek's Reasoning R1 model stems from its ability to perform complex logical reasoning tasks with impressive accuracy. This positions it as a formidable alternative to GPT-4 and Claude, particularly in areas requiring structured thought, such as coding, mathematics, and scientific problem-solving. The subsequent release of a multimodal model that processes both text and images further demonstrates DeepSeek's ambition to compete across multiple AI domains.\n\nDeepSeek's rapid progress raises important questions about the future of AI development. Will its efficiency-driven approach redefine industry standards? How will Western companies respond to this emerging competitor? And most importantly, what does this mean for global AI leadership, particularly as geopolitical tensions shape the tech landscape?\n\nAs DeepSeek continues to push the boundaries of AI with minimal resources, its success could serve as a wake-up call for the broader industry, proving that innovation isn't solely dependent on massive funding, but also on strategic ingenuity and technical excellence.",
            question: "What is the primary topic discussed in the passage?",
            options: [
              { id: "a", text: "The development of multimodal AI models." },
              {
                id: "b",
                text: "The computational cost of training AI systems.",
              },
              { id: "c", text: "DeepSeek's unique approach to AI efficiency." },
              {
                id: "d",
                text: "The role of logical reasoning in AI performance.",
              },
              {
                id: "e",
                text: "The limitations of Western AI companies in AI research.",
              },
            ],
            correctAnswer: "c",
            explanation:
              "The primary topic of the passage is DeepSeek's unique approach to AI efficiency. While other aspects like multimodal models and logical reasoning are mentioned, they serve as supporting details.",
            points: 7,
          },
          {
            id: 4,
            type: "multiple-choice",
            context:
              "DeepSeek's breakthrough lies in its ability to develop high-performance AI models with significantly lower computational costs than its Western counterparts. By leveraging innovative training techniques, efficient model architectures, and optimized hardware usage, the company has managed to achieve results that rival those of industry giants like OpenAI and Anthropic.\n\nOne of DeepSeek's key strategies is its focus on efficiency. While companies like OpenAI rely on vast amounts of computing power to train their models, DeepSeek has reportedly developed novel ways to maximize performance with fewer resources. This approach not only reduces operational costs but also makes AI development more accessible, potentially shifting the balance of power in the AI race.\n\nThe excitement surrounding DeepSeek's Reasoning R1 model stems from its ability to perform complex logical reasoning tasks with impressive accuracy. This positions it as a formidable alternative to GPT-4 and Claude, particularly in areas requiring structured thought, such as coding, mathematics, and scientific problem-solving. The subsequent release of a multimodal model that processes both text and images further demonstrates DeepSeek's ambition to compete across multiple AI domains.\n\nDeepSeek's rapid progress raises important questions about the future of AI development. Will its efficiency-driven approach redefine industry standards? How will Western companies respond to this emerging competitor? And most importantly, what does this mean for global AI leadership, particularly as geopolitical tensions shape the tech landscape?\n\nAs DeepSeek continues to push the boundaries of AI with minimal resources, its success could serve as a wake-up call for the broader industry, proving that innovation isn't solely dependent on massive funding, but also on strategic ingenuity and technical excellence.",
            question:
              "Which statement best summarizes the topic of the article?",
            options: [
              {
                id: "a",
                text: "DeepSeek is proving that AI innovation is about efficiency rather than computing power.",
              },
              {
                id: "b",
                text: "Western AI companies are losing their dominance in AI development.",
              },
              {
                id: "c",
                text: "DeepSeek's Reasoning R1 model has surpassed all existing AI models.",
              },
              {
                id: "d",
                text: "The future of AI depends on multimodal capabilities.",
              },
              {
                id: "e",
                text: "AI research is shifting towards logical reasoning and mathematics.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The article consistently emphasizes that DeepSeek's success demonstrates AI innovation depends on efficiency and strategic ingenuity, not just massive computing power and funding.",
            points: 7,
          },
          {
            id: 5,
            type: "multiple-choice",
            context:
              "DeepSeek's breakthrough lies in its ability to develop high-performance AI models with significantly lower computational costs than its Western counterparts. By leveraging innovative training techniques, efficient model architectures, and optimized hardware usage, the company has managed to achieve results that rival those of industry giants like OpenAI and Anthropic.\n\nOne of DeepSeek's key strategies is its focus on efficiency. While companies like OpenAI rely on vast amounts of computing power to train their models, DeepSeek has reportedly developed novel ways to maximize performance with fewer resources. This approach not only reduces operational costs but also makes AI development more accessible, potentially shifting the balance of power in the AI race.\n\nThe excitement surrounding DeepSeek's Reasoning R1 model stems from its ability to perform complex logical reasoning tasks with impressive accuracy. This positions it as a formidable alternative to GPT-4 and Claude, particularly in areas requiring structured thought, such as coding, mathematics, and scientific problem-solving. The subsequent release of a multimodal model that processes both text and images further demonstrates DeepSeek's ambition to compete across multiple AI domains.\n\nDeepSeek's rapid progress raises important questions about the future of AI development. Will its efficiency-driven approach redefine industry standards? How will Western companies respond to this emerging competitor? And most importantly, what does this mean for global AI leadership, particularly as geopolitical tensions shape the tech landscape?\n\nAs DeepSeek continues to push the boundaries of AI with minimal resources, its success could serve as a wake-up call for the broader industry, proving that innovation isn't solely dependent on massive funding, but also on strategic ingenuity and technical excellence.",
            question:
              "Which of the following best describes the overall purpose of the article?",
            options: [
              {
                id: "a",
                text: "To showcase DeepSeek's superior AI performance over OpenAI and Anthropic.",
              },
              {
                id: "b",
                text: "To highlight how DeepSeek's efficiency may reshape the AI industry.",
              },
              {
                id: "c",
                text: "To argue that AI models should prioritize logical reasoning over other capabilities.",
              },
              {
                id: "d",
                text: "To warn about the geopolitical consequences of AI advancements.",
              },
              {
                id: "e",
                text: "To explain why Western companies should adopt DeepSeek's methods.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The overall purpose of the article is to highlight how DeepSeek's efficiency-driven approach could reshape the AI industry, serving as a wake-up call that innovation doesn't solely depend on massive funding.",
            points: 7,
          },
          {
            id: 6,
            type: "multiple-choice",
            context:
              "Environmentalists argue that the government's stance on palm oil threatens not only Indonesia's biodiversity but also its global reputation. The country is already one of the world's largest carbon emitters due to deforestation and land degradation, with forest fires adding to the crisis. Despite international pressure, economic incentives continue to drive deforestation, as palm oil remains a key export commodity.\n\nThe rapid loss of forests has devastating consequences for endangered species like the Sumatran tiger, whose shrinking habitat forces it into closer contact with humans. This often leads to deadly conflicts, with tigers attacking livestock and, in some cases, people. In retaliation, villagers sometimes kill or capture the animals, pushing the species closer to extinction. Conservation groups are working to mitigate these conflicts by creating wildlife corridors and educating communities, but without stronger enforcement against illegal land clearing, their efforts may fall short.\n\nThe Indonesian government has made pledges to reduce deforestation, including commitments to sustainable palm oil production. However, enforcement remains weak, and illegal expansion persists. Large corporations and small-scale farmers alike continue to encroach on protected areas, often with little consequence.\n\nAs Indonesia grapples with the balance between economic growth and environmental protection, the future of its rainforests—and the species that depend on them—remains uncertain. Without a stronger commitment to conservation and sustainable land management, the country risks losing one of its most precious natural resources forever.",
            question: "What is the main idea of the passage?",
            options: [
              {
                id: "a",
                text: "The Indonesian government has completely failed in protecting its forests.",
              },
              {
                id: "b",
                text: "Palm oil production is beneficial for the Indonesian economy but harmful to the environment.",
              },
              {
                id: "c",
                text: "Conservation efforts in Indonesia are sufficient to protect endangered species.",
              },
              {
                id: "d",
                text: "Deforestation in Indonesia has no significant impact on wildlife.",
              },
              {
                id: "e",
                text: "International organizations have successfully pressured Indonesia to stop deforestation.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The passage highlights the tension between palm oil's economic benefits and its environmental harm, covering biodiversity loss, deforestation, and weak government enforcement.",
            points: 7,
          },
          {
            id: 7,
            type: "multiple-choice",
            context:
              "Environmentalists argue that the government's stance on palm oil threatens not only Indonesia's biodiversity but also its global reputation. The country is already one of the world's largest carbon emitters due to deforestation and land degradation, with forest fires adding to the crisis. Despite international pressure, economic incentives continue to drive deforestation, as palm oil remains a key export commodity.\n\nThe rapid loss of forests has devastating consequences for endangered species like the Sumatran tiger, whose shrinking habitat forces it into closer contact with humans. This often leads to deadly conflicts, with tigers attacking livestock and, in some cases, people. In retaliation, villagers sometimes kill or capture the animals, pushing the species closer to extinction. Conservation groups are working to mitigate these conflicts by creating wildlife corridors and educating communities, but without stronger enforcement against illegal land clearing, their efforts may fall short.\n\nThe Indonesian government has made pledges to reduce deforestation, including commitments to sustainable palm oil production. However, enforcement remains weak, and illegal expansion persists. Large corporations and small-scale farmers alike continue to encroach on protected areas, often with little consequence.\n\nAs Indonesia grapples with the balance between economic growth and environmental protection, the future of its rainforests—and the species that depend on them—remains uncertain. Without a stronger commitment to conservation and sustainable land management, the country risks losing one of its most precious natural resources forever.",
            question: "What is the central theme of the passage?",
            options: [
              {
                id: "a",
                text: "The challenges of balancing economic growth and environmental protection.",
              },
              {
                id: "b",
                text: "The importance of palm oil for Indonesia's economy.",
              },
              {
                id: "c",
                text: "The government's success in reducing deforestation.",
              },
              {
                id: "d",
                text: "The role of international organizations in protecting Indonesian rainforests.",
              },
              {
                id: "e",
                text: "The extinction of the Sumatran tiger is inevitable.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The central theme running throughout the passage is the challenge Indonesia faces in balancing economic growth (palm oil production) with environmental protection (biodiversity and forest conservation).",
            points: 7,
          },
          {
            id: 8,
            type: "multiple-choice",
            context:
              "Environmentalists argue that the government's stance on palm oil threatens not only Indonesia's biodiversity but also its global reputation. The country is already one of the world's largest carbon emitters due to deforestation and land degradation, with forest fires adding to the crisis. Despite international pressure, economic incentives continue to drive deforestation, as palm oil remains a key export commodity.\n\nThe rapid loss of forests has devastating consequences for endangered species like the Sumatran tiger, whose shrinking habitat forces it into closer contact with humans. This often leads to deadly conflicts, with tigers attacking livestock and, in some cases, people. In retaliation, villagers sometimes kill or capture the animals, pushing the species closer to extinction. Conservation groups are working to mitigate these conflicts by creating wildlife corridors and educating communities, but without stronger enforcement against illegal land clearing, their efforts may fall short.\n\nThe Indonesian government has made pledges to reduce deforestation, including commitments to sustainable palm oil production. However, enforcement remains weak, and illegal expansion persists. Large corporations and small-scale farmers alike continue to encroach on protected areas, often with little consequence.\n\nAs Indonesia grapples with the balance between economic growth and environmental protection, the future of its rainforests—and the species that depend on them—remains uncertain. Without a stronger commitment to conservation and sustainable land management, the country risks losing one of its most precious natural resources forever.",
            question: "What is the primary topic of the passage?",
            options: [
              {
                id: "a",
                text: "The effects of deforestation on Indonesia's biodiversity.",
              },
              { id: "b", text: "The economic benefits of palm oil exports." },
              {
                id: "c",
                text: "The role of conservation groups in protecting wildlife.",
              },
              {
                id: "d",
                text: "The history of palm oil cultivation in Indonesia.",
              },
              {
                id: "e",
                text: "The government's strict policies on illegal land clearing.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The primary topic is the effects of deforestation on Indonesia's biodiversity. The passage discusses how palm oil-driven deforestation impacts endangered species, habitats, and the broader ecosystem.",
            points: 5,
          },
          {
            id: 9,
            type: "multiple-choice",
            context:
              "Environmentalists argue that the government's stance on palm oil threatens not only Indonesia's biodiversity but also its global reputation. The country is already one of the world's largest carbon emitters due to deforestation and land degradation, with forest fires adding to the crisis. Despite international pressure, economic incentives continue to drive deforestation, as palm oil remains a key export commodity.\n\nThe rapid loss of forests has devastating consequences for endangered species like the Sumatran tiger, whose shrinking habitat forces it into closer contact with humans. This often leads to deadly conflicts, with tigers attacking livestock and, in some cases, people. In retaliation, villagers sometimes kill or capture the animals, pushing the species closer to extinction. Conservation groups are working to mitigate these conflicts by creating wildlife corridors and educating communities, but without stronger enforcement against illegal land clearing, their efforts may fall short.\n\nThe Indonesian government has made pledges to reduce deforestation, including commitments to sustainable palm oil production. However, enforcement remains weak, and illegal expansion persists. Large corporations and small-scale farmers alike continue to encroach on protected areas, often with little consequence.\n\nAs Indonesia grapples with the balance between economic growth and environmental protection, the future of its rainforests—and the species that depend on them—remains uncertain. Without a stronger commitment to conservation and sustainable land management, the country risks losing one of its most precious natural resources forever.",
            question:
              "Which statement best summarizes the topic of the article?",
            options: [
              {
                id: "a",
                text: "Indonesia is successfully preventing illegal deforestation while maintaining economic growth.",
              },
              {
                id: "b",
                text: "Deforestation caused by palm oil production threatens both biodiversity and Indonesia's reputation.",
              },
              {
                id: "c",
                text: "Conservation groups have solved the issue of human-wildlife conflict in Indonesia.",
              },
              {
                id: "d",
                text: "The international community is responsible for stopping deforestation in Indonesia.",
              },
              {
                id: "e",
                text: "The expansion of palm oil plantations has no significant environmental impact.",
              },
            ],
            correctAnswer: "b",
            explanation:
              "The article consistently discusses how deforestation driven by palm oil production threatens Indonesia's biodiversity and global reputation, making option B the best summary.",
            points: 4,
          },
          {
            id: 10,
            type: "multiple-choice",
            context:
              "Environmentalists argue that the government's stance on palm oil threatens not only Indonesia's biodiversity but also its global reputation. The country is already one of the world's largest carbon emitters due to deforestation and land degradation, with forest fires adding to the crisis. Despite international pressure, economic incentives continue to drive deforestation, as palm oil remains a key export commodity.\n\nThe rapid loss of forests has devastating consequences for endangered species like the Sumatran tiger, whose shrinking habitat forces it into closer contact with humans. This often leads to deadly conflicts, with tigers attacking livestock and, in some cases, people. In retaliation, villagers sometimes kill or capture the animals, pushing the species closer to extinction. Conservation groups are working to mitigate these conflicts by creating wildlife corridors and educating communities, but without stronger enforcement against illegal land clearing, their efforts may fall short.\n\nThe Indonesian government has made pledges to reduce deforestation, including commitments to sustainable palm oil production. However, enforcement remains weak, and illegal expansion persists. Large corporations and small-scale farmers alike continue to encroach on protected areas, often with little consequence.\n\nAs Indonesia grapples with the balance between economic growth and environmental protection, the future of its rainforests—and the species that depend on them—remains uncertain. Without a stronger commitment to conservation and sustainable land management, the country risks losing one of its most precious natural resources forever.",
            question:
              "Which of the following best describes the overall purpose of the article?",
            options: [
              {
                id: "a",
                text: "To advocate for stricter conservation laws in Indonesia.",
              },
              {
                id: "b",
                text: "To highlight the economic potential of palm oil exports.",
              },
              {
                id: "c",
                text: "To explain how conservationists are solving the deforestation crisis.",
              },
              {
                id: "d",
                text: "To argue that palm oil production has no negative effects on the environment.",
              },
              {
                id: "e",
                text: "To inform readers about the ongoing environmental challenges caused by deforestation.",
              },
            ],
            correctAnswer: "e",
            explanation:
              "The overall purpose of the article is informational — it aims to inform readers about the ongoing environmental challenges caused by deforestation in Indonesia, including biodiversity loss, weak enforcement, and the balance between economy and ecology.",
            points: 7,
          },
          {
            id: 11,
            type: "multiple-choice",
            context:
              "Kartini's letters, which provide a window into her thoughts on gender equality, education, and social justice, have long been regarded as a cornerstone of Indonesia's feminist movement. Through her writings, she challenged the deeply ingrained patriarchal norms of her time and advocated for greater access to education for women, a cause that remains relevant today.\n\nWardiman Djojonegoro's compilation offers the most comprehensive look yet at Kartini's intellectual journey, highlighting not only her aspirations but also the struggles she faced. Her correspondence with Dutch officials and intellectuals reveals a sharp and progressive mind, one that sought to bridge the gap between colonial rule and Indonesia's own cultural identity.\n\nWhile Kartini did not live to see the changes she envisioned, her legacy continues to inspire generations. Her birthday, April 21, is commemorated annually as Kartini Day, a national celebration of women's empowerment in Indonesia. Yet, despite the progress made, many of the issues she wrote about—women's education, economic independence, and gender equality—remain pressing challenges in modern Indonesia.\n\nThe release of this extensive collection not only reinforces Kartini's place in history but also serves as a reminder that the fight for equality is far from over. Her words continue to inspire a new generation of activists and thinkers who seek to fulfill the vision she once dreamed of—a more just and equal Indonesia.",
            question: "What is the main idea of the passage?",
            options: [
              {
                id: "a",
                text: "Kartini's letters remain relevant in the fight for gender equality in Indonesia.",
              },
              {
                id: "b",
                text: "Kartini was the first Indonesian woman to challenge colonial rule.",
              },
              {
                id: "c",
                text: "Kartini's thoughts on gender equality are no longer relevant in modern society.",
              },
              {
                id: "d",
                text: "The celebration of Kartini Day has significantly improved women's rights in Indonesia.",
              },
              {
                id: "e",
                text: "Kartini's letters mainly focus on Indonesia's independence movement.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The passage emphasizes that Kartini's letters on gender equality, education, and social justice remain relevant today, and her legacy continues to inspire new generations of activists.",
            points: 7,
          },
          {
            id: 12,
            type: "multiple-choice",
            context:
              "Kartini's letters, which provide a window into her thoughts on gender equality, education, and social justice, have long been regarded as a cornerstone of Indonesia's feminist movement. Through her writings, she challenged the deeply ingrained patriarchal norms of her time and advocated for greater access to education for women, a cause that remains relevant today.\n\nWardiman Djojonegoro's compilation offers the most comprehensive look yet at Kartini's intellectual journey, highlighting not only her aspirations but also the struggles she faced. Her correspondence with Dutch officials and intellectuals reveals a sharp and progressive mind, one that sought to bridge the gap between colonial rule and Indonesia's own cultural identity.\n\nWhile Kartini did not live to see the changes she envisioned, her legacy continues to inspire generations. Her birthday, April 21, is commemorated annually as Kartini Day, a national celebration of women's empowerment in Indonesia. Yet, despite the progress made, many of the issues she wrote about—women's education, economic independence, and gender equality—remain pressing challenges in modern Indonesia.\n\nThe release of this extensive collection not only reinforces Kartini's place in history but also serves as a reminder that the fight for equality is far from over. Her words continue to inspire a new generation of activists and thinkers who seek to fulfill the vision she once dreamed of—a more just and equal Indonesia.",
            question: "What is the central theme of the passage?",
            options: [
              {
                id: "a",
                text: "The historical significance of Kartini's letters in Indonesia's feminist movement.",
              },
              {
                id: "b",
                text: "The role of Dutch officials in shaping Kartini's thoughts.",
              },
              {
                id: "c",
                text: "The success of gender equality policies in Indonesia.",
              },
              {
                id: "d",
                text: "The importance of preserving historical letters.",
              },
              {
                id: "e",
                text: "The impact of colonialism on Indonesia's education system.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The central theme of the passage is the historical significance of Kartini's letters in Indonesia's feminist movement and their ongoing relevance to gender equality.",
            points: 7,
          },
          {
            id: 13,
            type: "multiple-choice",
            context:
              "Kartini's letters, which provide a window into her thoughts on gender equality, education, and social justice, have long been regarded as a cornerstone of Indonesia's feminist movement. Through her writings, she challenged the deeply ingrained patriarchal norms of her time and advocated for greater access to education for women, a cause that remains relevant today.\n\nWardiman Djojonegoro's compilation offers the most comprehensive look yet at Kartini's intellectual journey, highlighting not only her aspirations but also the struggles she faced. Her correspondence with Dutch officials and intellectuals reveals a sharp and progressive mind, one that sought to bridge the gap between colonial rule and Indonesia's own cultural identity.\n\nWhile Kartini did not live to see the changes she envisioned, her legacy continues to inspire generations. Her birthday, April 21, is commemorated annually as Kartini Day, a national celebration of women's empowerment in Indonesia. Yet, despite the progress made, many of the issues she wrote about—women's education, economic independence, and gender equality—remain pressing challenges in modern Indonesia.\n\nThe release of this extensive collection not only reinforces Kartini's place in history but also serves as a reminder that the fight for equality is far from over. Her words continue to inspire a new generation of activists and thinkers who seek to fulfill the vision she once dreamed of—a more just and equal Indonesia.",
            question: "What is the primary topic of the passage?",
            options: [
              {
                id: "a",
                text: "The influence of Kartini's letters on modern gender equality movements.",
              },
              {
                id: "b",
                text: "The role of Dutch colonialism in shaping Indonesia's social structure.",
              },
              {
                id: "c",
                text: "The life of Kartini and her contributions to Indonesia's independence.",
              },
              {
                id: "d",
                text: "The significance of Kartini Day in modern Indonesia.",
              },
              {
                id: "e",
                text: "The comparison between Kartini's ideals and present-day policies.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The primary topic is the influence of Kartini's letters on modern gender equality movements. The passage discusses how her writings continue to shape feminist discourse in Indonesia.",
            points: 7,
          },
          {
            id: 14,
            type: "multiple-choice",
            context:
              "Kartini's letters, which provide a window into her thoughts on gender equality, education, and social justice, have long been regarded as a cornerstone of Indonesia's feminist movement. Through her writings, she challenged the deeply ingrained patriarchal norms of her time and advocated for greater access to education for women, a cause that remains relevant today.\n\nWardiman Djojonegoro's compilation offers the most comprehensive look yet at Kartini's intellectual journey, highlighting not only her aspirations but also the struggles she faced. Her correspondence with Dutch officials and intellectuals reveals a sharp and progressive mind, one that sought to bridge the gap between colonial rule and Indonesia's own cultural identity.\n\nWhile Kartini did not live to see the changes she envisioned, her legacy continues to inspire generations. Her birthday, April 21, is commemorated annually as Kartini Day, a national celebration of women's empowerment in Indonesia. Yet, despite the progress made, many of the issues she wrote about—women's education, economic independence, and gender equality—remain pressing challenges in modern Indonesia.\n\nThe release of this extensive collection not only reinforces Kartini's place in history but also serves as a reminder that the fight for equality is far from over. Her words continue to inspire a new generation of activists and thinkers who seek to fulfill the vision she once dreamed of—a more just and equal Indonesia.",
            question:
              "Which statement best summarizes the topic of the article?",
            options: [
              {
                id: "a",
                text: "Kartini's letters serve as an important foundation for the feminist movement in Indonesia.",
              },
              {
                id: "b",
                text: "Kartini's influence was limited to the Dutch colonial period.",
              },
              {
                id: "c",
                text: "The Indonesian government has fully implemented Kartini's vision of gender equality.",
              },
              {
                id: "d",
                text: "Kartini Day is the most significant holiday in Indonesia's history.",
              },
              {
                id: "e",
                text: "Education for women is no longer an issue in Indonesia.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The article highlights that Kartini's letters are foundational to Indonesia's feminist movement and continue to inspire the fight for gender equality today.",
            points: 7,
          },
          {
            id: 15,
            type: "multiple-choice",
            context:
              "Kartini's letters, which provide a window into her thoughts on gender equality, education, and social justice, have long been regarded as a cornerstone of Indonesia's feminist movement. Through her writings, she challenged the deeply ingrained patriarchal norms of her time and advocated for greater access to education for women, a cause that remains relevant today.\n\nWardiman Djojonegoro's compilation offers the most comprehensive look yet at Kartini's intellectual journey, highlighting not only her aspirations but also the struggles she faced. Her correspondence with Dutch officials and intellectuals reveals a sharp and progressive mind, one that sought to bridge the gap between colonial rule and Indonesia's own cultural identity.\n\nWhile Kartini did not live to see the changes she envisioned, her legacy continues to inspire generations. Her birthday, April 21, is commemorated annually as Kartini Day, a national celebration of women's empowerment in Indonesia. Yet, despite the progress made, many of the issues she wrote about—women's education, economic independence, and gender equality—remain pressing challenges in modern Indonesia.\n\nThe release of this extensive collection not only reinforces Kartini's place in history but also serves as a reminder that the fight for equality is far from over. Her words continue to inspire a new generation of activists and thinkers who seek to fulfill the vision she once dreamed of—a more just and equal Indonesia.",
            question: "What is the overall purpose of the article?",
            options: [
              {
                id: "a",
                text: "To emphasize the ongoing relevance of Kartini's ideas on gender equality.",
              },
              {
                id: "b",
                text: "To critique the government's failure in enforcing gender equality policies.",
              },
              {
                id: "c",
                text: "To argue that Indonesia has achieved complete gender equality.",
              },
              {
                id: "d",
                text: "To describe Kartini's personal struggles in her lifetime.",
              },
              {
                id: "e",
                text: "To celebrate the success of Kartini Day in improving women's rights.",
              },
            ],
            correctAnswer: "a",
            explanation:
              "The overall purpose of the article is to emphasize that Kartini's ideas on gender equality remain relevant and continue to inspire new generations in the ongoing fight for a more just and equal Indonesia.",
            points: 7,
          },
        ],
      },
    ];

    let moduleDoc = await Module.findById(targetId);

    if (moduleDoc) {
      console.log(`Updating existing module: ${moduleDoc.name}`);
      moduleDoc.steps = stepsData;
      moduleDoc.name = "Theme/Topic";
      moduleDoc.description =
        "Learn to identify and distinguish between Main Idea, Topic, and Theme in English reading passages for UTBK preparation.";
      moduleDoc.subcategory = "Main Idea";
      moduleDoc.points_available = 100;
      await moduleDoc.save();
    } else {
      console.log(`Creating new module with ID: ${targetId}`);
      moduleDoc = await Module.create({
        _id: targetId,
        courseId: course._id,
        name: "Theme/Topic",
        description:
          "Learn to identify and distinguish between Main Idea, Topic, and Theme in English reading passages for UTBK preparation.",
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

seedThemeTopic();
