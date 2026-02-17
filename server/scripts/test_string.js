const stepsData = [
  {
    title: "Materi: Pola & Operasi Bilangan",
    type: "reading",
    status: "active",
    description: "Materi Bacaan",
    content: `
      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Apa itu Pola Bilangan?</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8">
          Pola bilangan merupakan suatu kumpulan atau susunan bilangan yang diurutkan melalui aturan atau pola tertentu. Pola bilangan dapat berupa pola fibonacci, pola larik, pola bertingkat, dan pola kombinasi.
        </p>

        <div class="space-y-8">
          <!-- Pola Fibonacci -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div class="bg-white border-2 border-Primary-50 rounded-xl p-6 shadow-sm">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA FIBONACCI
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Urutan angka di mana setiap angkanya didapat dari hasil penjumlahan dua angka sebelumnya. Pola ini biasanya berbentuk susunan biji matahari.
              </p>
            </div>
            <div class="bg-Primary-50/50 rounded-xl p-6 border border-Primary-100">
              <h6 class="text-h6 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h6>
              <p class="text-body-m font-mono text-Primary-900 mb-3 bg-white p-2 rounded border border-Primary-100 inline-block">1, 1, 2, 3, 5, 8, 13, 21, ...</p>
              <ul class="space-y-2 text-body-m text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2">
                  <span class="text-Primary-500">●</span>
                  Angka pertama and kedua = 1
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-Primary-500">●</span>
                  Angka ketiga = 1 + 1 = 2
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-Primary-500">●</span>
                  Angka keempat = 1 + 2 = 3, dan seterusnya
                </li>
              </ul>
            </div>
          </div>

          <!-- Pola Larik -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div class="bg-white border-2 border-Primary-50 rounded-xl p-6 shadow-sm">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA LARIK
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Susunan angka atau simbol dalam bentuk baris dan kolom yang teratur. Tiap baris, pola angkanya pasti naik atau berubah. Biasanya, pola ini terlihat seperti tabel atau grid.
              </p>
            </div>
            <div class="bg-Primary-50/50 rounded-xl p-6 border border-Primary-100">
              <h6 class="text-h6 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h6>
              <p class="text-body-m font-mono text-Primary-900 mb-3 bg-white p-2 rounded border border-Primary-100 inline-block">1, 3, 5, 7, 9, 11, 13, 15, ...</p>
              <ul class="space-y-2 text-body-m text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+2</span> Angka pertama = 1</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+2</span> Angka kedua = 1 + 2 = 3</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+2</span> Angka ketiga = 3 + 2 = 5, dan seterusnya</li>
              </ul>
            </div>
          </div>

          <!-- Pola Bertingkat -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div class="bg-white border-2 border-Primary-50 rounded-xl p-6 shadow-sm">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA BERTINGKAT
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Pola angka, bentuk, atau simbol yang tersusun seperti tangga atau piramida, yang mana tiap tingkatnya memiliki jumlah elemen yang berbeda.
              </p>
            </div>
            <div class="bg-Primary-50/50 rounded-xl p-6 border border-Primary-100">
              <h6 class="text-h6 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h6>
              <p class="text-body-m font-mono text-Primary-900 mb-3 bg-white p-2 rounded border border-Primary-100 inline-block">1, 3, 6, 10, 15, 21, 28, ...</p>
              <p class="text-body-m text-Grayscale-800 mb-2 italic">Menjumlahkan angka sebelumnya dengan urutan bilangan asli:</p>
              <ul class="space-y-2 text-body-m text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2"><span class="text-Primary-500">●</span> Angka pertama = 1</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+2</span> Angka kedua = 1 + 2 = 3</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+3</span> Angka ketiga = 3 + 3 = 6, dan seterusnya</li>
              </ul>
            </div>
          </div>

          <!-- Pola Kombinasi -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div class="bg-white border-2 border-Primary-50 rounded-xl p-6 shadow-sm">
              <h5 class="flex items-center gap-2 text-h5 font-bold text-Primary-600 mb-3 font-heading">
                <span class="w-2 h-2 rounded-full bg-Primary-500"></span>
                POLA KOMBINASI
              </h5>
              <p class="text-body-l text-Grayscale-700 m-0">
                Pola yang terbentuk dari gabungan dua atau lebih pola, seperti fibonacci dan larik atau pola larik dan pola bertingkat. Lebih kompleks karena menggabungkan dua aturan sekaligus.
              </p>
            </div>
            <div class="bg-Primary-50/50 rounded-xl p-6 border border-Primary-100">
              <h6 class="text-h6 font-bold text-Primary-800 mb-3">Contoh & Cara Kerja:</h6>
              <p class="text-body-m font-mono text-Primary-900 mb-3 bg-white p-2 rounded border border-Primary-100 inline-block">1, 3, 5, 8, 10, 14, 16, ...</p>
              <p class="text-body-m text-Grayscale-800 mb-2 italic">Urutan bilangan asli lalu ditambah 2:</p>
              <ul class="space-y-2 text-body-m text-Grayscale-800 list-none p-0 m-0">
                <li class="flex items-center gap-2"><span class="text-Primary-500">●</span> Angka pertama = 1</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+2</span> Angka kedua = 1 + 2 = 3</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+2</span> Angka ketiga = 3 + 2 = 5</li>
                <li class="flex items-center gap-2"><span class="text-Primary-500 font-bold">+3</span> Angka keempat = 5 + 3 = 8, dan seterusnya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h3 class="text-h3 font-heading text-Primary-900 mb-6 border-l-4 border-Primary-500 pl-4 py-1">Operasi Bilangan</h3>
        <p class="text-body-l text-Grayscale-900 leading-relaxed mb-8">
          Operasi bilangan merupakan proses atau langkah matematis untuk mengolah dua atau lebih bilangan dengan aturan tertentu. Dalam UTBK-SNBT, seringkali dibuat dalam bentuk simbol kreatif seperti #, @, *, &Delta;, dan sebagainya.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contoh 1 -->
          <div class="bg-white rounded-xl border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-500 p-4 text-white">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 1</h5>
            </div>
            <div class="p-6">
              <p class="text-body-l font-bold text-Grayscale-900 mb-4">Diketahui x * y = (x + y) - 1, maka berapa nilai dari 3 * (2 * 3)?</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-lg border border-Primary-50">
                <p class="text-body-m font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-m text-Grayscale-800 space-y-1">
                  <li>Kerjakan yang berada di dalam kurung terlebih dahulu</li>
                  <li>2 * 3 = (2 + 3) - 1 = 5 - 1 = <span class="font-bold text-Primary-600">4</span></li>
                  <li>3 * <span class="text-Primary-600">4</span> = (3 + 4) - 1 = 7 - 1 = <span class="font-bold text-Primary-600">6</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai dari 3 * (2 * 3) = 6</p>
              </div>
            </div>
          </div>

          <!-- Contoh 2 -->
          <div class="bg-white rounded-xl border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-500 p-4 text-white">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 2</h5>
            </div>
            <div class="p-6">
              <p class="text-body-l font-bold text-Grayscale-900 mb-4">Jika @ = (x/y) and &Delta; = (x+y) - 1, maka berapa nilai dari 12 @ (5 &Delta; 2)?</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-lg border border-Primary-50">
                <p class="text-body-m font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-m text-Grayscale-800 space-y-1">
                  <li>Kerjakan yang berada di dalam kurung terlebih dahulu</li>
                  <li>5 &Delta; 2 = (5 + 2) - 1 = 7 - 1 = <span class="font-bold text-Primary-600">6</span></li>
                  <li>12 @ <span class="text-Primary-600">6</span> = 12 / 6 = <span class="font-bold text-Primary-600">2</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai dari 12 @ (5 &Delta; 2) = 2</p>
              </div>
            </div>
          </div>

          <!-- Contoh 3 -->
          <div class="bg-white rounded-xl border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-500 p-4 text-white">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 3</h5>
            </div>
            <div class="p-6">
              <p class="text-body-l font-bold text-Grayscale-900 mb-4">Jika a @ b = a² - 2b, b # c = b + c², dengan x=4, y=3, z=5, maka berapa nilai (x @ y) # z?</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-lg border border-Primary-50">
                <p class="text-body-m font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-m text-Grayscale-800 space-y-1">
                  <li>Kerjakan di dalam kurung: x @ y (4 @ 3)</li>
                  <li>4 @ 3 = 4² - 2(3) = 16 - 6 = <span class="font-bold text-Primary-600">10</span></li>
                  <li><span class="text-Primary-600">10</span> # 5 = 10 + 5² = 10 + 25 = <span class="font-bold text-Primary-600">35</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai (x @ y) # z = 35</p>
              </div>
            </div>
          </div>

          <!-- Contoh 4 -->
          <div class="bg-white rounded-xl border-2 border-Primary-50 overflow-hidden shadow-sm">
            <div class="bg-Primary-500 p-4 text-white">
              <h5 class="text-h5 font-bold m-0 font-heading">Contoh 4</h5>
            </div>
            <div class="p-6">
              <p class="text-body-l font-bold text-Grayscale-900 mb-4">Diketahui a o b = a + &radic;b. Jika (2 o 4) o 4 = x, maka nilai x o 4 adalah...</p>
              <div class="space-y-3 bg-Primary-50/30 p-4 rounded-lg border border-Primary-50">
                <p class="text-body-m font-bold text-Primary-800 m-0">Cara kerja:</p>
                <ul class="list-disc pl-5 text-body-m text-Grayscale-800 space-y-1">
                  <li>Kerjakan di dalam kurung: 2 o 4 = 2 + &radic;4 = 2 + 2 = <span class="font-bold text-Primary-600">4</span></li>
                  <li>Cari nilai x: <span class="text-Primary-600">4</span> o 4 = 4 + &radic;4 = 4 + 2 = <span class="font-bold text-Primary-600">6</span> (x = 6)</li>
                  <li>Hitung x o 4: <span class="text-Primary-600">6</span> o 4 = 6 + &radic;4 = 6 + 2 = <span class="font-bold text-Primary-600">8</span></li>
                </ul>
                <p class="text-body-l font-bold text-Primary-700 m-0 mt-2">Maka, nilai x o 4 = 8</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `,
  },
];
console.log("SUCCESS! stepsData length:", stepsData.length);
console.log("Content length:", stepsData[0].content.length);
