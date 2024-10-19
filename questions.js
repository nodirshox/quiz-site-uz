// Questions
const data = [
  {
    id: "1",
    title: "Me'yoriy huquqiy hujjatlar",
    questions: [
      {
        id: "1",
        body: `“Axborot-kutubxona a’lochisi” ko‘krak nishoni qachon ta’sis etildi?`,
        options: [
          { id: "1", text: "2020 yilda", correct: true },
          { id: "2", text: "2019 yilda", correct: false },
          { id: "3", text: "2017 yilda", correct: false },
          { id: "4", text: "2016 yilda", correct: false },
        ],
      },
      {
        id: "2",
        body: `Axborot kutubxona muassasalarida axborot-kutubxona resurslarini hisobga olish tartibi to‘g‘risidagi yo‘riqnoma qachon tasdiqlanib Adliya vazirligidan ro‘yxatdan o‘tgan?`,
        options: [
          { id: "1", text: "1996 yil 14 dekabr", correct: false },
          { id: "2", text: "2014 yil 10 yanvar", correct: true },
          { id: "3", text: "2013 yil 10 mart", correct: false },
          { id: "4", text: "2014 yil 10 mart", correct: false },
        ],
      },
      {
        id: "3",
        body: `Oʻzbekiston Respublikasi “Axborot-kutubxona faoliyati to’g’risida”gi qonuni...`,
        options: [
          { id: "1", text: "6 bob 19 moddadan iborat", correct: false },
          { id: "2", text: "7 bob 28 moddadan iborat", correct: true },
          { id: "3", text: "9 bob 18 moddadan iborat", correct: false },
          { id: "4", text: "10 bob 38 moddadan iborat", correct: false },
        ],
      },
      {
        id: "4",
        body: `O‘zbekiston Respublikasi "Axborot-kutubxona faoliyati to‘g‘risida"gi qonunga ko‘ra foydalanuvchilar qanday majburiyatlarga ega?`,
        options: [
          {
            id: "1",
            text: "Axborot-kutubxona muassasalari tomonidan belgilangan qonun-qoidalarga bo‘ysunish;",
            correct: false,
          },
          {
            id: "2",
            text: "axborot-kutubxona muassasalarida foydalanish qoidalariga rioya etish axborot-kutubxona resurslariga extiyotkorlik bilan munosabatda bo‘lish ularni yo‘qolishiga yo‘l qo‘ymaslik;",
            correct: true,
          },
          {
            id: "3",
            text: "axborot-kutubxona muassasalarida foydalanish qoidalariga rioya etish axborot-kutubxona resurslariga extiyotkorlik bilan muunosabatda bo‘lish;",
            correct: false,
          },
          {
            id: "4",
            text: "Axborot-kutubxona resurslariga extiyotkorlik bilan munosabatda bo‘lish ularni yo‘qolishiga yo‘l qo‘ymaslik;",
            correct: false,
          },
        ],
      },
      {
        id: "5",
        body: `O‘zbekiston Respublikasi "Axborot-kutubxona faoliyati to‘g‘risida"gi qonunga ko‘ra foydalanuvchilar qanday huquqlarga ega?`,
        options: [
          {
            id: "1",
            text: "Axborot-kutubxona resurslaridan ko‘rsatiladigan xizmatlardan erkin foydalanish",
            correct: false,
          },
          {
            id: "2",
            text: "Axborotni erkin tanlash ko‘rsatiladigan xizmatlar va so‘ralayotgan resurslar haqida axborot olish;",
            correct: false,
          },
          {
            id: "3",
            text: "Axborot-kutubxona resurslaridan foydalanish o‘z extiyojlariga mos tarzdagi axborotni erkin tanlash ko‘rsatiladigan xizmatlar va so‘ralayotgan resurslar haqida axborot olish;",
            correct: true,
          },
          {
            id: "4",
            text: "Axborot-kutubxona resurslaridan foydalanish o‘z extiyojlariga mos tarzdagi axborotni erkin tanlash",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Axborot-kutubxona resurslarini raqamlashtirish",
    questions: [
      {
        id: "1",
        body: `Qaysi dastur ta'minot bilan tasvirlarni raqamlashtirish mumkin?`,
        options: [
          { id: "1", text: "Adobe Reader", correct: false },
          { id: "2", text: "Foxit o'quvchi", correct: false },
          { id: "3", text: "Adobe Acrobat", correct: false },
          { id: "4", text: "ABBYY Fine Reader", correct: true },
        ],
      },
      {
        id: "2",
        body: `Ma’lumotlarni qaysi qurilmalarda saqlash mumkin?`,
        options: [
          { id: "1", text: "Skaner;Printer;Faks", correct: false },
          {
            id: "2",
            text: "Server; qattiq magnit disklari (HDD); optik DVD kompakt disklari",
            correct: true,
          },
          {
            id: "3",
            text: "Planshet; optik SD kompakt-disklari; RFID o'quvchi",
            correct: false,
          },
          { id: "4", text: "Barcha javoblar to’g’ri", correct: false },
        ],
      },
      {
        id: "3",
        body: `Raqamlangan fayllarni qay formatda saqlash mumkin?`,
        options: [
          { id: "1", text: "JPEG TIFF BMP PDF", correct: false },
          { id: "2", text: "EPUB FB2 DJVU PNG", correct: false },
          { id: "3", text: "Word Excel Power Point", correct: false },
          { id: "4", text: "Barcha javob to’g’ri", correct: true },
        ],
      },
      {
        id: "4",
        body: `Scanerlash va raqamlashtirish xizmati axborot kutubxona resurslarini raqamlashtirish va to'liq matnli ko'rinishga o'tkazish ishlarini qaysi qonunga muvofiq olib boradi?`,
        options: [
          { id: "1", text: "Barcha javoblar to’g’ri", correct: false },
          {
            id: "2",
            text: "“Mualliflik hukukuki va turdosh hukukuklar to’grisida”gi qonuniga rioya kilgan xolda",
            correct: true,
          },
          {
            id: "3",
            text: "“Axborot-kutubxona faoliyati to’g’risida”gi qonuniga rioya kilgan holda",
            correct: false,
          },
          {
            id: "4",
            text: "“Davlat-xususiy sheriklik to’g’risida”gi qonuniga rioya kilgan holda",
            correct: false,
          },
        ],
      },
      {
        id: "5",
        body: `Skaner - bu?`,
        options: [
          {
            id: "1",
            text: "Raqamli va jadval malumotlarni elektron nushasini yaratadigan qurilma",
            correct: true,
          },
          {
            id: "2",
            text: "Lazer disklarda lash va ularga faqat o'qishni saqlashni beraman",
            correct: false,
          },
          {
            id: "3",
            text: "Grafik ma'lumotlarni qog’oz nushasini yaratadigan qurilma",
            correct: false,
          },
          {
            id: "4",
            text: "Matn ma'lumotlarni qog’oz nusxasini yaratadigan qurilma",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: `"Axborot-kutubxona" faoliyatida bibliografiya`,
    questions: [
      {
        id: "1",
        body: `Bibliografiya maqsadiga ko‘ra quyidagi turlarga bo‘linadi:`,
        options: [
          {
            id: "1",
            text: "Shaxs bibliografiyasi; Kundalik bibliografiya; Bibliografiyaning bibliografiyasi;",
            correct: false,
          },
          {
            id: "2",
            text: "Milliy bibliografiya; O‘lkashunoslik bibliografiyasi;",
            correct: false,
          },
          {
            id: "3",
            text: "Universal bibliografiya; Soha bibliografiyasi; Shaxs bibliografiyasi;",
            correct: true,
          },
          {
            id: "4",
            text: "Davlat bibliografiyasi; Ilmiy-yordamchi bibliografiya; Tavsiya bibliografiyasi;",
            correct: false,
          },
        ],
      },
      {
        id: "2",
        body: `Gazeta maqolasiga berilgan tavsifni to’g’ri variantini aniklang:`,
        options: [
          {
            id: "1",
            text: "R. Alimuhamedov Qadimgi uyg‘ur hokonlarining unvonlari qakida / R. Alimuhamedov // Shark mashaali. – 2015. – No 2. – B. 80–83. – Res. rus ingliz;",
            correct: false,
          },
          {
            id: "2",
            text: "Oʻ. Abdurahmonov Sahro go‘zalligi timsoli: [“Sayg‘oqli” qo‘riqxonasi xakida] // O‘zbekiston adabiyoti va san’ati. – 2015 yil – 16 oktyabr;",
            correct: false,
          },
          {
            id: "3",
            text: "Mirtemir. Yorug'lik: [she'r] / Mirtemir // O'zbekiston adabiyoti va san'ati. – 2015 yil iyul – 2 oktyabr;",
            correct: true,
          },
          {
            id: "4",
            text: "N. Abdullaeva Moxir muallim: [taniqli muyqalam ustasi Qutlug Basharov izhodiga nazar solib] / N. Abdullaeva. – “O‘zbekiston adabiyoti va san’ati” 2015 2 oktyabr;",
            correct: false,
          },
        ],
      },
      {
        id: "3",
        body: `Ma’lumot-bibliografik apparat (MBA) nima?`,
        options: [
          {
            id: "1",
            text: "Universal mo‘ljallanishiga ko‘ra umumiy bo‘lib butun kartotekalar tizimi yadrosi funksiyasini bajaradi va u yuritish majburiy bo‘lgan kartotekadir;",
            correct: false,
          },
          {
            id: "2",
            text: "O‘lkashunoslik kartotekasi mazmunan o‘lkaga bag‘ishlangan har qanday bosma matbuot asarlari audiovizual va elektron materiallarni o‘zida jamlovchi kompleks (universal) kartotekadir.",
            correct: false,
          },
          {
            id: "3",
            text: "Axborotni qidirish adabiyotlarni targ‘ib qilish va o‘qishga rahbarlik qilishga mo‘ljallangan ma’lumotnoma va bibliografik nashrlar fondi kutubxona kataloglari va kartotekalarining majmuasidir;",
            correct: true,
          },
          {
            id: "4",
            text: "Axborot-kutubxona muassasalarida foydalanuvchilar uchun turli bibliografik qo‘llanmalar tuzish ko‘rsatkich va adabiyotlar ro‘yxati turli kartotekalardir;",
            correct: false,
          },
        ],
      },
      {
        id: "4",
        body: `O’lkashunoslik bibliografi ko’rsatkichi bu?`,
        options: [
          {
            id: "1",
            text: "Anik kitobxon guruhiga  o’ziga xos kursatkich",
            correct: false,
          },
          {
            id: "2",
            text: "Boshka davlatlarda nasr etgan adabiyotlarni aks ettiruvchi kursatkich",
            correct: false,
          },
          {
            id: "3",
            text: "Bir shakhsga xos bibliografik kursatkich",
            correct: false,
          },
          {
            id: "4",
            text: "Mamlakatning bir hududiga oid adabiyotlarni aks ettiruvchi kursatkich",
            correct: true,
          },
        ],
      },
      {
        id: "5",
        body: `Shahs bibliografiyasi:`,
        options: [
          {
            id: "1",
            text: "Fan, boshkaruv va ishlab chiqarish chikarish sogalarini bibliographer ta'minlashga qaratilgan bibliografiyadir",
            correct: false,
          },
          {
            id: "2",
            text: "Tarbiya masalalari va bilimlar targibotiga bibliographer yordam berisga qaratilgan bibliografiyadir",
            correct: false,
          },
          {
            id: "3",
            text: "BibliografiyaXuzhat istemolchi tizimida vositachilikni ishlatishni “uylash",
            correct: false,
          },
          {
            id: "4",
            text: "Ma'lum bir shaxsning asarlari va u xaqida yozilgan asarlarni uzida aks ettiradi",
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: `Axborot-kutubxona resurslarini katalog lashtirish`,
    questions: [
      {
        id: "1",
        body: `“Axborot kutubxona va nashriyotchilik ishi buicha standartlar tizimi. Axborot-kutubxona manbalari. Kataloglashtirish koidalari" davlat standarti raqami va yilini aniklang?`,
        options: [
          { id: "1", text: "O'z DST 2312:2011", correct: false },
          { id: "2", text: "O'z DST 3053:2016", correct: true },
          { id: "3", text: "O'z DST 1214:2009", correct: false },
          { id: "4", text: "O'z DST 1215:2010", correct: false },
        ],
      },
      {
        id: "2",
        body: `Bibliograf tavsif tarkibi nimadir sohadan iborat?`,
        options: [
          { id: "1", text: "5", correct: false },
          { id: "2", text: "3", correct: false },
          { id: "3", text: "8", correct: true },
          { id: "4", text: "6", correct: false },
        ],
      },
      {
        id: "3",
        body: `Bir muallifi ko‘rsatilgan to‘g‘ri bibliografik tavsifni aniqlang? (Soha va tinish belgilariga e’tibor bering.)`,
        options: [
          {
            id: "1",
            text: "E.Oxunjonov, Vatan kutubxonachiligi tarixi [Matn] : o‘quv qo‘llanma / E. Oxunjonov; O‘zbekiston Respublikasi Madaniyat ishlari vazirligi, Abdulla Qodiriy nomidagi Toshkent Davlat Madaniyat instituti. - Toshkent : Adolat, 2004. - 108 b. - 200 nusxa;",
            correct: true,
          },
          {
            id: "2",
            text: "E.Oxunjonov, Vatan kutubxonachiligi tarixi [Matn] : o‘quv qo‘llanma / E.Oxunjonov; O‘zbekiston Respublikasi Madaniyat ishlari vazirligi, Abdulla Qodiriy nomidagi Toshkent Davlat Madaniyat instituti. - 200 nusxa. - Toshkent ; Adolat: 2004, 108 b.;",
            correct: false,
          },
          {
            id: "3",
            text: "E.Oxunjonov, Vatan kutubxonachiligi tarixi [Matn], o‘quv qo‘llanma / E. Oxunjonov,",
            correct: false,
          },
        ],
      },
      {
        id: "4",
        body: `Универсал Ўнли классификасия жадвалининг 9 чи бўлимнинг номи?`,
        options: [
          { id: "1", text: "Фалсафа. Психология.", correct: false },
          { id: "2", text: "География. Биография. Тарих.", correct: true },
          { id: "3", text: "География. Биография. Тарих.", correct: false },
          { id: "4", text: "Математика. Табиий фанлар.", correct: false },
        ],
      },
      {
        id: "5",
        body: `O‘z DSt 1215:2009 «Axborot, kutubxona va nashriyotchilik ishi bo‘yicha standartlar tizimi. Bibliografik yozuv. Bibliografik tavsif. Umumiy talablar va tuzish koidalari» standarti bibliografik yozuvning qaysi qismida ishlatiladi?`,
        options: [
          { id: "1", text: "Annotatsiyada", correct: false },
          { id: "2", text: "Bibliografik tavsifda", correct: false },
          { id: "3", text: "Tavsif boshida", correct: true },
          { id: "4", text: "Indekslash terminida", correct: false },
        ],
      },
    ],
  },
  {
    id: "5",
    title: `Axborot-kutubxona fondlarini joylashtirish`,
    questions: [
      {
        id: "1",
        body: `Axborot-kutubxona muassasalarining 5 mingdan 100 ming hisobga olish birliklarigacha bo‘lgan axborot-kutubxona fondlarini qaysi muddatlarda tekshiriladi?`,
        options: [
          { id: "1", text: "20-25 yilda bir marta", correct: false },
          { id: "2", text: "7-10 yilda bir marta", correct: true },
          { id: "3", text: "10-15 yilda bir marta", correct: false },
          { id: "4", text: "1 yilda bir marta", correct: false },
        ],
      },
      {
        id: "2",
        body: `Kitob saqlanadigan xonalar uchun qanday havo harorati normasi tavsiya etiladi?`,
        options: [
          { id: "1", text: "(25±2)°S nisbiy namlik (70±5) %", correct: false },
          { id: "2", text: "(18±2)°S nisbiy namlik (55±5) %", correct: true },
          { id: "3", text: "(15±2)°S nisbiy namlik (75±5) %", correct: false },
          { id: "4", text: "(15±2)°S nisbiy namlik (45±5) %", correct: false },
        ],
      },
      {
        id: "3",
        body: `Kutubxona fondlarining yaxshi saqlanishi uchun eng maqbul yorug‘lik?`,
        options: [
          { id: "1", text: "65 lk", correct: false },
          { id: "2", text: "45 lk", correct: false },
          { id: "3", text: "75 lk", correct: true },
          { id: "4", text: "55 lk", correct: false },
        ],
      },
      {
        id: "4",
        body: `Fondni saqlashda ijtimoiy omillar qoidalarini sanab bering.`,
        options: [
          {
            id: "1",
            text: "Fondlarining ijtimoiy ahamiyatini tushuntirish, har bir kitobxonga kutubxona hamda kitobdan foydalanish qoidalarini singdirish, kitob bilan muomala qilishda tegishli malaka, ko‘nikma va odatlarni egallashga yordam berishdir.",
            correct: false,
          },
          {
            id: "2",
            text: "Mo‘rtlanishi, noziklanishi, sarg‘ayishi ijtimoiy omillar qoidalariga kiradi.",
            correct: false,
          },
          {
            id: "3",
            text: "Mikroorganizmlar (bakteriyalar, mog‘orzambrug‘i); Hashoratlar; Kemiruvchilar.",
            correct: false,
          },
          {
            id: "4",
            text: "Kitobni buklamaslik, kitobga yozmaslik, chizmaslik, turli narsalarni ichiga solib qo‘ymaslik, sahifalarini buklamaslik, yirtmaslik, to‘g‘ri varaqlash, to‘g‘ri joyiga qo‘yish.",
            correct: true,
          },
        ],
      },
      {
        id: "5",
        body: `Fonddagi stellajlarning oraliq masofalari necha sm bo‘lishi lozim.`,
        options: [
          { id: "1", text: "75 sm", correct: false },
          { id: "2", text: "55 sm", correct: false },
          { id: "3", text: "30 sm", correct: false },
          { id: "4", text: "40 sm", correct: true },
        ],
      },
    ],
  },
];
