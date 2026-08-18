let currentQuestion = 0;

let scores = {
  vata: 0,
  pitta: 0,
  kapha: 0
};

const questions = [

  {
    q: "كيف تصفين حجم جسمك؟",
    options: [
      ["نحيف", "vata"],
      ["متوسط", "pitta"],
      ["كبير", "kapha"]
    ]
  },

  {
    q: "كيف تصفين وزن جسمك؟",
    options: [
      ["منخفض", "vata"],
      ["متوسط", "pitta"],
      ["زائد الوزن", "kapha"]
    ]
  },

  {
    q: "كيف تصفين ذقنك؟",
    options: [
      ["نحيل، زاوي، مدبب", "vata"],
      ["متوسط، مستدير", "pitta"],
      ["مزدوج، ممتلئ، مستدير", "kapha"]
    ]
  },

  {
    q: "كيف تصفين خدودك؟",
    options: [
      ["مغضنة، غائرة", "vata"],
      ["مسطحة، ناعمة", "pitta"],
      ["ممتلئة، مستديرة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين عينيك؟",
    options: [
      ["صغيرة، غائرة، جافة، نشطة", "vata"],
      ["حادة، مشرقة، رمادية/خضراء، حساسة للضوء", "pitta"],
      ["واسعة، جميلة، زرقاء/سوداء/بنية، هادئة ومفعمة بالمحبة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أنفك؟",
    options: [
      ["غير متساوية الشكل، منحرفة الحاجز", "vata"],
      ["مدببة، طويلة، ذات رأس أحمر", "pitta"],
      ["مستديرة، قصيرة، منحنية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شفتيك؟",
    options: [
      ["جافة، متشققة، سوداء/بنية اللون", "vata"],
      ["حمراء، ملتهبة، مصفرة", "pitta"],
      ["ناعمة، دهنية، شاحبة/بيضاء", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أسنانك؟",
    options: [
      ["بارزة، كبيرة، لثة رفيعة", "vata"],
      ["متوسطة، ناعمة، لثة طرية", "pitta"],
      ["بيضاء، سليمة، لثة قوية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين بشرتك؟",
    options: [
      ["رقيقة، جافة، باردة، خشنة، داكنة", "vata"],
      ["ناعمة، دهنية، دافئة، وردية", "pitta"],
      ["سميكة، دهنية، باردة، بيضاء، شاحبة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شعرك؟",
    options: [
      ["جاف، بني، أسود، متشابك، هش، متساقط", "vata"],
      ["مستقيم، دهني، أشقر، رمادي، أحمر، أصلع", "pitta"],
      ["كثيف، مجعد، دهني، مموج، طويل", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أظافرك؟",
    options: [
      ["جافة، خشنة، هشة، سهلة الكسر", "vata"],
      ["حادة، مرنة، وردية، لامعة", "pitta"],
      ["سميكة، دهنية، ناعمة، مصقولة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين رقبتك؟",
    options: [
      ["نحيفة، طويلة", "vata"],
      ["متوسطة الحجم", "pitta"],
      ["كبيرة، مطوية الجلد", "kapha"]
    ]
  },

  {
    q: "كيف تصفين صدرك؟",
    options: [
      ["مسطح، غائر", "vata"],
      ["معتدل", "pitta"],
      ["عريض، دائري", "kapha"]
    ]
  },

  {
    q: "كيف تصفين بطنك؟",
    options: [
      ["نحيف، مسطح، غائر", "vata"],
      ["معتدل", "pitta"],
      ["كبير، منتفخ، ذو كرش", "kapha"]
    ]
  },

  {
    q: "كيف تصفين سرتك؟",
    options: [
      ["صغيرة، غير منتظمة", "vata"],
      ["منفتحة، بيضاوية، مسطحة", "pitta"],
      ["كبيرة، عميقة، مستديرة، ممتدة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين وركيك؟",
    options: [
      ["نحيفان، رفيعان", "vata"],
      ["معتدلان، ثقيلان", "pitta"],
      ["كبيرتان", "kapha"]
    ]
  },

  {
    q: "كيف تصفين مفاصلك؟",
    options: [
      ["باردة، خشنة الغضاريف", "vata"],
      ["معتدلة", "pitta"],
      ["كبيرة، لينة الغضاريف", "kapha"]
    ]
  },

  {
    q: "كيف تصفين شهيتك؟",
    options: [
      ["شهية غير منتظمة", "vata"],
      ["قوية بشكل مفرط", "pitta"],
      ["بطيئة لكن منتظمة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين هضمك؟",
    options: [
      ["غير منتظم، يسبب غازات", "vata"],
      ["سريع، يتسبب في حرقة معدة", "pitta"],
      ["بطيء، يشكل المخاط", "kapha"]
    ]
  },

  {
    q: "ما الأذواق التي تفضلينها؟",
    options: [
      ["الحلو، الحامض، المالح", "vata"],
      ["الحلو، المر، القابض", "pitta"],
      ["المر، اللاذع، القابض", "kapha"]
    ]
  },

  {
    q: "كيف تصفين عطشك؟",
    options: [
      ["غير منتظم", "vata"],
      ["مفرط", "pitta"],
      ["نادر", "kapha"]
    ]
  },

  {
    q: "كيف تصفين الإخراج؟",
    options: [
      ["إمساك", "vata"],
      ["إسهال", "pitta"],
      ["سمين، دهني، بطيء", "kapha"]
    ]
  },

  {
    q: "كيف تصفين نشاطك البدني؟",
    options: [
      ["مفرط النشاط", "vata"],
      ["معتدل", "pitta"],
      ["كسول", "kapha"]
    ]
  },

  {
    q: "كيف تصفين نشاطك العملي؟",
    options: [
      ["مفرط النشاط", "vata"],
      ["معتدل", "pitta"],
      ["بليد، بطيء الفهم", "kapha"]
    ]
  },

  {
    q: "كيف تصفين مشاعرك؟",
    options: [
      ["القلق، الخوف، عدم اليقين", "vata"],
      ["الغضب، الكراهية، الغيرة", "pitta"],
      ["الهدوء، الجشع، التعلق", "kapha"]
    ]
  },

  {
    q: "كيف تصفين إيمانك؟",
    options: [
      ["متقلب", "vata"],
      ["متطرف", "pitta"],
      ["ثابت", "kapha"]
    ]
  },

  {
    q: "كيف تصفين فهمك؟",
    options: [
      ["استجابة سريعة لكن خاطئة", "vata"],
      ["استجابة دقيقة", "pitta"],
      ["استجابة بطيئة ومضبوطة", "kapha"]
    ]
  },

  {
    q: "كيف تصفين تذكرك؟",
    options: [
      ["قوي في المدى القصير، ضعيف في المدى البعيد", "vata"],
      ["تذكر حاد", "pitta"],
      ["تذكر بطيء لكن مستمر", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أحلامك؟",
    options: [
      ["سريعة، نشطة، متعددة، مليئة بالمخاوف", "vata"],
      ["حرائق، حروب، عنف", "pitta"],
      ["بحيرات، ثلوج، رومانسية", "kapha"]
    ]
  },

  {
    q: "كيف تصفين نومك؟",
    options: [
      ["هزيل، متقطع، أرق", "vata"],
      ["ليلًا لكن متواصل", "pitta"],
      ["عميق، ممتد", "kapha"]
    ]
  },

  {
    q: "كيف تصفين أسلوب كلامك؟",
    options: [
      ["سريع، غير واضح", "vata"],
      ["حاد، ثاقب", "pitta"],
      ["بطيء، رتيب", "kapha"]
    ]
  },

  {
    q: "كيف تصفين حالتك المادية؟",
    options: [
      ["فقيرة، إنفاق المال على التفاهات", "vata"],
      ["إنفاق المال على الكماليات", "pitta"],
      ["غنية، محافظة، جيدة في ادخار المال", "kapha"]
    ]
  }

];


// ============================
// عرض السؤال
// ============================

function showQuestion() {

  const question = questions[currentQuestion];

  const questionText =
    document.getElementById("question") ||
    document.getElementById("questionText");

  const optionsContainer =
    document.getElementById("options") ||
    document.getElementById("optionsContainer");

  const progress =
    document.getElementById("progress");

  const questionNumber =
    document.getElementById("questionNumber");

  if (!questionText || !optionsContainer) {
    console.error("لم يتم العثور على عناصر السؤال في quiz.html");
    return;
  }

  questionText.textContent = question.q;

  optionsContainer.innerHTML = "";

  question.options.forEach(function(option) {

    const button = document.createElement("button");

    button.textContent = option[0];

    button.className = "answer-btn";

    button.onclick = function() {
      chooseAnswer(option[1]);
    };

    optionsContainer.appendChild(button);

  });

  if (progress) {
    const percent =
      ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width = percent + "%";
  }

  if (questionNumber) {
    questionNumber.textContent =
      "السؤال " +
      (currentQuestion + 1) +
      " من " +
      questions.length;
  }
}


// ============================
// اختيار الإجابة
// ============================

function chooseAnswer(type) {

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
    vata: "فاتا Vata",
    pitta: "بيتا Pitta",
    kapha: "كافا Kapha"
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
    console.error("لم يتم العثور على عنصر النتيجة في quiz.html");
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
        onclick="location.reload()"
        class="restart-btn"
      >
        إعادة الاختبار
      </button>

    </div>

  `;

  const questionArea =
    document.getElementById("quiz") ||
    document.getElementById("quizContainer") ||
    document.querySelector(".quiz-container");

  if (questionArea) {
    questionArea.style.display = "none";
  }

  resultContainer.style.display = "block";
}


// ============================
// بدء الاختبار
// ============================

document.addEventListener("DOMContentLoaded", function() {

  const resultContainer =
    document.getElementById("result") ||
    document.getElementById("resultContainer");

  if (resultContainer) {
    resultContainer.style.display = "none";
  }

  showQuestion();

});
