// ============================
// Dosha Balance - Quiz
// ============================

let currentQuestion = 0;

let scores = {
  vata: 0,
  pitta: 0,
  kapha: 0
};


// ============================
// الأسئلة الـ 32
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
// إظهار السؤال
// ============================

function showQuestion() {

  const questionElement =
    document.getElementById("question") ||
    document.getElementById("questionText");

  const answersElement =
    document.getElementById("answers") ||
    document.getElementById("options");

  const questionNumber =
    document.getElementById("questionNumber") ||
    document.getElementById("progressText");

  if (!questionElement || !answersElement) {
    console.error("لم يتم العثور على عناصر السؤال في الصفحة.");
    return;
  }

  const question = questions[currentQuestion];

  questionElement.textContent = question.q;

  answersElement.innerHTML = "";

  question.options.forEach(function(option) {

    const button = document.createElement("button");

    button.textContent = option[0];

    button.className = "answer";

    button.onclick = function() {
      chooseAnswer(option[1]);
    };

    answersElement.appendChild(button);

  });

  if (questionNumber) {

    questionNumber.textContent =
      "السؤال " +
      (currentQuestion + 1) +
      " من " +
      questions.length;

  }

  updateProgress();

}


// ============================
// شريط التقدم
// ============================

function updateProgress() {

  const progressBar =
    document.getElementById("progressBar") ||
    document.querySelector(".progress-bar");

  if (progressBar) {

    const percent =
      ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = percent + "%";

  }

}


// ============================
// اختيار الإجابة
// ============================

function chooseAnswer(type) {

  if (!scores[type]) {
    scores[type] = 0;
  }

  scores[type]++;

  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    showResult();

  }

}


// ============================
// عرض النتيجة
// ============================

function showResult() {

  let resultType = "";

  const maxScore =
    Math.max(
      scores.vata,
      scores.pitta,
      scores.kapha
    );

  if (scores.vata === maxScore) {
    resultType = "vata";
  }

  if (scores.pitta === maxScore) {
    resultType = "pitta";
  }

  if (scores.kapha === maxScore) {
    resultType = "kapha";
  }


  const resultNames = {

    vata: "فاتا Vata 🌿",

    pitta: "بيتا Pitta 🔥",

    kapha: "كافا Kapha 🌱"

  };


  const resultDescriptions = {

    vata:
      "تتميز فاتا بالحركة والخفة والنشاط. قد تحتاجين إلى روتين أكثر هدوءًا وانتظامًا وتغذية دافئة ومتوازنة.",

    pitta:
      "تتميز بيتا بالقوة والحيوية والتركيز. قد تستفيدين من الهدوء والتوازن وتجنب المبالغة في الحرارة والإجهاد.",

    kapha:
      "تتميز كافا بالثبات والهدوء والتحمل. قد تستفيدين من الحركة والنشاط وروتين يساعد على الحيوية."

  };


  const resultContainer =
    document.getElementById("result") ||
    document.getElementById("resultContainer");


  if (!resultContainer) {

    console.error(
      "لم يتم العثور على عنصر النتيجة في الصفحة."
    );

    return;

  }


  resultContainer.innerHTML = `

    <div class="result-card">

      <h1>🌿 نتيجتك</h1>

      <h2>
        ${resultNames[resultType]}
      </h2>

      <p>
        ${resultDescriptions[resultType]}
      </p>

      <div class="scores">

        <p>
          فاتا:
          <strong>${scores.vata}</strong>
        </p>

        <p>
          بيتا:
          <strong>${scores.pitta}</strong>
        </p>

        <p>
          كافا:
          <strong>${scores.kapha}</strong>
        </p>

      </div>

      <button
        onclick="restartQuiz()"
        class="restart-btn"
      >
        إعادة الاختبار
      </button>

    </div>

  `;


  const questionArea =
    document.getElementById("quiz") ||
    document.getElementById("quizContainer") ||
    document.getElementById("app");


  if (questionArea) {

    questionArea.style.display = "none";

  }


  resultContainer.style.display = "block";

}


// ============================
// إعادة الاختبار
// ============================

function restartQuiz() {

  currentQuestion = 0;

  scores = {
    vata: 0,
    pitta: 0,
    kapha: 0
  };


  const resultContainer =
    document.getElementById("result") ||
    document.getElementById("resultContainer");


  if (resultContainer) {

    resultContainer.innerHTML = "";

    resultContainer.style.display = "none";

  }


  const questionArea =
    document.getElementById("quiz") ||
    document.getElementById("quizContainer") ||
    document.getElementById("app");


  if (questionArea) {

    questionArea.style.display = "block";

  }


  showQuestion();

}


// ============================
// بدء الاختبار
// ============================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    const resultContainer =
      document.getElementById("result") ||
      document.getElementById("resultContainer");


    if (resultContainer) {

      resultContainer.style.display = "none";

    }


    showQuestion();

  }
);
