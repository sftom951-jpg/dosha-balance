// ============================
// Dosha Balance
// اختبار الدوشا - 32 سؤال
// ============================

let currentQuestion = 0;

let scores = {
  vata: 0,
  pitta: 0,
  kapha: 0
};


// ============================
// الأسئلة
// ============================

const questions = [

  {
    q: "كيف تصفين حجم جسمك؟",
    options: [
      ["نحيف وصغير البنية", "vata"],
      ["متوسط البنية", "pitta"],
      ["كبير أو ممتلئ البنية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين وزنك بشكل عام؟",
    options: [
      ["وزني منخفض وأجد صعوبة في زيادته", "vata"],
      ["وزني متوسط ومستقر غالبًا", "pitta"],
      ["أزداد في الوزن بسهولة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شكل ذقنك؟",
    options: [
      ["نحيف أو زاوي", "vata"],
      ["مدبب وواضح", "pitta"],
      ["مستدير أو ممتلئ", "kapha"]
    ]
  },

  {
    q: "كيف تبدو خدودك عادةً؟",
    options: [
      ["نحيفة أو غائرة", "vata"],
      ["ناعمة ومسطحة نسبيًا", "pitta"],
      ["ممتلئة ومستديرة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين عينيك؟",
    options: [
      ["صغيرة أو غائرة وقد تبدو جافة أو كثيرة الحركة", "vata"],
      ["حادة ومشرقة وقد تكون حساسة للضوء", "pitta"],
      ["واسعة وهادئة وذات مظهر لطيف", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شكل أنفك؟",
    options: [
      ["غير منتظم أو غير متماثل قليلًا", "vata"],
      ["طويل أو مدبب وقد يكون طرفه محمرًا", "pitta"],
      ["مستدير أو قصير أو منحني", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شفتيك؟",
    options: [
      ["جافتان أو رقيقان وقد يميلان للون الداكن", "vata"],
      ["حمراوان أو دافئتا اللون وقد تبدوان حسّاستين", "pitta"],
      ["ناعمتان وممتلئتان ورطبتان نسبيًا", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أسنانك؟",
    options: [
      ["بارزة أو كبيرة نسبيًا واللثة رقيقة", "vata"],
      ["متوسطة وناعمة", "pitta"],
      ["بيضاء وصحية واللثة قوية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين بشرتك؟",
    options: [
      ["رقيقة وجافة وباردة أو خشنة", "vata"],
      ["ناعمة ودافئة وقد تميل للون الوردي", "pitta"],
      ["سميكة وناعمة ودهنية أو باردة وشاحبة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شعرك؟",
    options: [
      ["جاف وهش أو متشابك وسهل التساقط", "vata"],
      ["مستقيم أو ناعم وقد يكون دهنيًا", "pitta"],
      ["كثيف ومجعد أو مموج ويميل للدهنية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أظافرك؟",
    options: [
      ["جافة وخشنة وهشة وسهلة الكسر", "vata"],
      ["حادة ومرنة ووردية ولامعة", "pitta"],
      ["سميكة وناعمة وملساء", "kapha"]
    ]
  },

  {
    q: "كيف تصفين رقبتك؟",
    options: [
      ["نحيفة وطويلة", "vata"],
      ["متوسطة الحجم", "pitta"],
      ["كبيرة وممتلئة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين منطقة الصدر؟",
    options: [
      ["مسطحة أو غائرة نسبيًا", "vata"],
      ["متوسطة الحجم", "pitta"],
      ["عريضة ومستديرة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين بطنك؟",
    options: [
      ["نحيف ومسطح أو غائر", "vata"],
      ["متوسط الحجم", "pitta"],
      ["كبير أو ممتلئ ويميل لظهور البطن", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شكل السرة؟",
    options: [
      ["صغيرة أو غير منتظمة أو بارزة", "vata"],
      ["بيضاوية ومسطحة نسبيًا", "pitta"],
      ["كبيرة وعميقة ومستديرة أو ممتدة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين الوركين؟",
    options: [
      ["نحيفان ورفيعان", "vata"],
      ["متوسطان وممتلئان بشكل معتدل", "pitta"],
      ["كبيران وممتلئان", "kapha"]
    ]
  },

  {
    q: "كيف تصفين مفاصلك؟",
    options: [
      ["صغيرة أو باردة وخشنة نسبيًا", "vata"],
      ["متوسطة الحجم", "pitta"],
      ["كبيرة ومرنة وناعمة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شهيتك؟",
    options: [
      ["غير منتظمة؛ أحيانًا أشعر بالجوع وأحيانًا لا", "vata"],
      ["قوية جدًا وأشعر بالجوع بوضوح", "pitta"],
      ["هادئة ومنتظمة ويمكنني تأجيل الوجبة دون جوع شديد", "kapha"]
    ]
  },

  {
    q: "كيف تصفين عملية الهضم لديك؟",
    options: [
      ["غير منتظمة وأتعرض للغازات بسهولة", "vata"],
      ["سريعة وقد أشعر بحرقة المعدة", "pitta"],
      ["بطيئة وقد أشعر بالثقل", "kapha"]
    ]
  },

  {
    q: "ما أنواع المذاقات التي تفضلينها غالبًا؟",
    options: [
      ["الحلو والحامض والمالح", "vata"],
      ["الحلو والمر والقابض", "pitta"],
      ["المر واللاذع والقابض", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شعورك بالعطش؟",
    options: [
      ["عطشي غير منتظم؛ أحيانًا أشعر به وأحيانًا لا", "vata"],
      ["أشعر بالعطش كثيرًا", "pitta"],
      ["نادرًا ما أشعر بالعطش", "kapha"]
    ]
  },

  {
    q: "كيف تصفين الإخراج لديك؟",
    options: [
      ["أميل إلى الإمساك", "vata"],
      ["أميل إلى الإسهال", "pitta"],
      ["الإخراج بطيء وقد يكون ثقيلًا", "kapha"]
    ]
  },

  {
    q: "كيف تصفين نشاطك البدني؟",
    options: [
      ["كثيرة الحركة وأميل إلى النشاط الزائد", "vata"],
      ["نشاطي معتدل ومتوازن", "pitta"],
      ["أفضل الراحة وأميل إلى قلة الحركة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين نشاطك في العمل أو إنجاز المهام؟",
    options: [
      ["سريعة جدًا ومليئة بالنشاط", "vata"],
      ["أعمل بوتيرة معتدلة ومنظمة", "pitta"],
      ["أعمل ببطء وأحتاج وقتًا أطول للإنجاز", "kapha"]
    ]
  },

  {
    q: "كيف تتصرفين عندما تشعرين بالضغط أو الانزعاج؟",
    options: [
      ["أشعر بالقلق أو الخوف وأفكر كثيرًا", "vata"],
      ["أغضب بسرعة وأصبح عصبية", "pitta"],
      ["أبقى هادئة وأفضل الاحتفاظ بمشاعري لنفسي", "kapha"]
    ]
  },

  {
    q: "كيف تصفين إيمانك أو قناعاتك؟",
    options: [
      ["قد تتغير قناعاتي بسهولة", "vata"],
      ["أتمسك بقناعاتي بقوة", "pitta"],
      ["قناعاتي ثابتة ومستقرة", "kapha"]
    ]
  },

  {
    q: "كيف يكون فهمك للأمور الجديدة؟",
    options: [
      ["أفهم بسرعة، لكن قد أخطئ بسبب السرعة", "vata"],
      ["أفهم بسرعة ودقة وأنتبه للتفاصيل", "pitta"],
      ["أحتاج وقتًا أطول للفهم، لكن فهمي ثابت", "kapha"]
    ]
  },

  {
    q: "كيف تصفين ذاكرتك؟",
    options: [
      ["أتذكر الأشياء الجديدة بسرعة، لكن قد أنساها مع الوقت", "vata"],
      ["ذاكرتي قوية وأتذكر التفاصيل جيدًا", "pitta"],
      ["أحتاج وقتًا للحفظ، لكن ما أحفظه يبقى طويلًا", "kapha"]
    ]
  },

  {
    q: "كيف تكون أحلامك عادةً؟",
    options: [
      ["كثيرة ومتنوعة وسريعة وقد تتضمن الخوف أو الحركة", "vata"],
      ["قد تتضمن النار أو الحروب أو المواقف العنيفة", "pitta"],
      ["قد تتضمن الماء أو البحيرات أو الثلج أو المشاهد الرومانسية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين نومك؟",
    options: [
      ["خفيف ومتقطع وقد أعاني من الأرق", "vata"],
      ["قليل نسبيًا لكنه متواصل", "pitta"],
      ["عميق وطويل", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أسلوب كلامك؟",
    options: [
      ["أتكلم بسرعة وقد لا يكون كلامي واضحًا أحيانًا", "vata"],
      ["كلامي واضح وحاد ومباشر", "pitta"],
      ["أتكلم ببطء وبهدوء وبنبرة ثابتة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين تعاملك مع المال؟",
    options: [
      ["قد أنفق المال بسرعة أو على أشياء صغيرة وغير ضرورية", "vata"],
      ["أحب الإنفاق على الأشياء الفاخرة أو ذات الجودة", "pitta"],
      ["أحب الادخار والمحافظة على المال", "kapha"]
    ]
  }

];


// ============================
// بيانات النتائج
// ============================

const resultData = {

  vata: {
    name: "دوشا فاتا VATA",
    image: "Vata.png",
    description:
      "الهواء والأثير – الحركة والإبداع. تتميز فاتا بالحساسية والنشاط وسرعة التفكير والإبداع، وقد تميل إلى القلق والتشتت عند الإجهاد.",
    foods: [
      "شوفان دافئ",
      "بطاطا حلوة",
      "حساء العدس",
      "لوز منقوع",
      "زيت السمسم",
      "مشروبات دافئة مثل الزنجبيل والقرفة"
    ],
    yoga: [
      "وضعية الطفل – تساعد على الاسترخاء وتهدئة العقل.",
      "الانحناء الأمامي – يساعد على الهدوء وتخفيف التوتر.",
      "وضعية الساقين على الحائط – وضعية مريحة للاسترخاء."
    ],
    tips: [
      "حافظي على روتين يومي منتظم.",
      "تناولي وجبات دافئة ومطبوخة.",
      "تجنبي البرد والرياح والسهر الطويل.",
      "مارسي التنفس الهادئ والتأمل يوميًا.",
      "امنحي نفسك وقتًا كافيًا للراحة."
    ]
  },

  pitta: {
    name: "دوشا بيتا PITTA",
    image: "Pitta.png",
    description:
      "النار والماء – التحول والطاقة. تتميز بيتا بالذكاء والطموح والتنظيم والطاقة، وقد تميل إلى الغضب أو الانتقاد عند زيادة الضغط.",
    foods: [
      "خيار",
      "بطيخ",
      "كزبرة",
      "أرز بسمتي",
      "شاي النعناع",
      "أطعمة خفيفة ومنعشة"
    ],
    yoga: [
      "وضعيات يوغا لطيفة ومهدئة.",
      "تمارين التنفس الهادئ.",
      "التمدد الخفيف مع التركيز على الاسترخاء."
    ],
    tips: [
      "تجنبي الحر الزائد والحرارة الشديدة.",
      "تناولي أطعمة منعشة باعتدال.",
      "خصصي وقتًا للاسترخاء والطبيعة.",
      "تمرني بلطف وتجنبي الإفراط.",
      "حافظي على التوازن بين العمل والراحة."
    ]
  },

  kapha: {
    name: "دوشا كافا KAPHA",
    image: "Kapha.png",
    description:
      "الأرض والماء – الثبات والبناء. تتميز كافا بالهدوء والصبر والثبات والحب، وقد تميل إلى الكسل أو التعلق عند قلة الحركة.",
    foods: [
      "زنجبيل",
      "تفاح",
      "كينوا أو شوفان",
      "خضار ورقية",
      "شاي أخضر",
      "أطعمة خفيفة ومتنوعة"
    ],
    yoga: [
      "وضعية المحارب – تساعد على تنشيط الجسم.",
      "وضعية القارب – تساعد على تقوية الجسم.",
      "تمارين يوغا نشطة مناسبة لمستوى لياقتك."
    ],
    tips: [
      "تحركي يوميًا وحافظي على نشاطك.",
      "تناولي وجبات خفيفة ومتوازنة.",
      "تجنبي الخمول والنوم الزائد.",
      "ابدئي يومك بنشاط.",
      "حافظي على روتين يومي متوازن."
    ]
  }

};


// ============================
// بدء الاختبار
// ============================

function startQuiz() {

  currentQuestion = 0;

  scores = {
    vata: 0,
    pitta: 0,
    kapha: 0
  };

  document.getElementById("quizArea").classList.remove("hidden");
  document.getElementById("resultArea").classList.add("hidden");

  showQuestion();
}


// ============================
// عرض السؤال
// ============================

function showQuestion() {

  const question = questions[currentQuestion];

  if (!question) {
    showResult();
    return;
  }

  document.getElementById("questionNumber").textContent =
    "السؤال " +
    (currentQuestion + 1) +
    " من " +
    questions.length;

  document.getElementById("question").textContent =
    question.q;

  const optionsContainer =
    document.getElementById("options");

  optionsContainer.innerHTML = "";

  question.options.forEach(function(option) {

    const button =
      document.createElement("button");

    button.className = "option";

    button.textContent = option[0];

    button.onclick = function() {
      chooseAnswer(option[1]);
    };

    optionsContainer.appendChild(button);

  });

  const progress =
    (currentQuestion / questions.length) * 100;

  document.getElementById("progress").style.width =
    progress + "%";
}


// ============================
// اختيار الإجابة
// ============================

function chooseAnswer(type) {

  if (scores[type] !== undefined) {
    scores[type]++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    showResult();

  }
}


// ============================
// تحديد الدوشا
// ============================

function getResultType() {

  const maxScore =
    Math.max(
      scores.vata,
      scores.pitta,
      scores.kapha
    );

  if (scores.vata === maxScore) {
    return "vata";
  }

  if (scores.pitta === maxScore) {
    return "pitta";
  }

  return "kapha";
}


// ============================
// عرض النتيجة
// ============================

function showResult() {

  document.getElementById("quizArea")
    .classList.add("hidden");

  document.getElementById("resultArea")
    .classList.remove("hidden");

  document.getElementById("progress")
    .style.width = "100%";

  const resultType =
    getResultType();

  const data =
    resultData[resultType];


  // الصورة

  const resultImage =
    document.getElementById("resultImage");

  resultImage.style.display = "block";

  resultImage.src = data.image;

  resultImage.alt = data.name;

  resultImage.onerror = function() {
    this.style.display = "none";
  };


  // الاسم

  document.getElementById("resultName")
    .textContent = data.name;


  // الوصف

  document.getElementById("resultDescription")
    .textContent = data.description;


  // الدرجات

  document.getElementById("scoreBox")
    .innerHTML =
      "🌿 فاتا: <strong>" + scores.vata +
      "</strong> &nbsp; | &nbsp; " +
      "🔥 بيتا: <strong>" + scores.pitta +
      "</strong> &nbsp; | &nbsp; " +
      "🌱 كافا: <strong>" + scores.kapha +
      "</strong>";


  // الأطعمة

  let foodHTML = "<ul>";

  data.foods.forEach(function(food) {

    foodHTML +=
      "<li>" + food + "</li>";

  });

  foodHTML += "</ul>";

  document.getElementById("foodContent")
    .innerHTML = foodHTML;


  // اليوغا

  let yogaHTML = "<ul>";

  data.yoga.forEach(function(yoga) {

    yogaHTML +=
      "<li>" + yoga + "</li>";

  });

  yogaHTML += "</ul>";

  document.getElementById("yogaContent")
    .innerHTML = yogaHTML;


  // النصائح

  let tipsHTML = "<ul>";

  data.tips.forEach(function(tip) {

    tipsHTML +=
      "<li>" + tip + "</li>";

  });

  tipsHTML += "</ul>";

  document.getElementById("tipsContent")
    .innerHTML = tipsHTML;

}


// ============================
// إعادة الاختبار
// ============================

function restartQuiz() {

  startQuiz();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ============================
// تشغيل الاختبار تلقائيًا
// ============================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    startQuiz();

  }
);
