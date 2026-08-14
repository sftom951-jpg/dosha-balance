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
    q: "كيف تصفين بشرتك؟",
    options: [
      ["جافة", "vata"],
      ["حساسة أو دافئة", "pitta"],
      ["ناعمة ورطبة", "kapha"]
    ]
  },
  {
    q: "كيف يكون مستوى طاقتك خلال اليوم؟",
    options: [
      ["متغير وسريع", "vata"],
      ["قوي ونشيط", "pitta"],
      ["هادئ ومستقر", "kapha"]
    ]
  },
  {
    q: "كيف تصفين نومك؟",
    options: [
      ["خفيف ومتقطع", "vata"],
      ["متوسط", "pitta"],
      ["عميق وطويل", "kapha"]
    ]
  },
  {
    q: "كيف تكون شهيتك؟",
    options: [
      ["غير منتظمة", "vata"],
      ["قوية ومنتظمة", "pitta"],
      ["هادئة وقد أنسى تناول الطعام", "kapha"]
    ]
  },
  {
    q: "كيف تتعاملين مع الضغط؟",
    options: [
      ["أشعر بالقلق", "vata"],
      ["أصبح عصبية", "pitta"],
      ["أصبح هادئة ومنسحبة", "kapha"]
    ]
  },
  {
    q: "كيف تصفين شخصيتك؟",
    options: [
      ["سريعة التفكير ومبدعة", "vata"],
      ["طموحة وحازمة", "pitta"],
      ["هادئة وصبورة", "kapha"]
    ]
  },
  {
    q: "كيف يكون كلامك عادةً؟",
    options: [
      ["سريع", "vata"],
      ["واضح ومباشر", "pitta"],
      ["هادئ وبطيء", "kapha"]
    ]
  },
  {
    q: "كيف تكون ذاكرتك؟",
    options: [
      ["أتعلم بسرعة وأنسى بسرعة", "vata"],
      ["ذاكرتي جيدة", "pitta"],
      ["أتذكر الأشياء لفترة طويلة", "kapha"]
    ]
  },
  {
    q: "ما نوع الطقس الذي تفضلينه؟",
    options: [
      ["دافئ", "vata"],
      ["بارد", "pitta"],
      ["دافئ وجاف", "kapha"]
    ]
  },
  {
    q: "كيف تكون حركتك؟",
    options: [
      ["سريعة وكثيرة", "vata"],
      ["نشطة ومنظمة", "pitta"],
      ["هادئة وبطيئة", "kapha"]
    ]
  },
  {
    q: "كيف تتعاملين مع الطعام؟",
    options: [
      ["أفضل الوجبات الصغيرة", "vata"],
      ["أشعر بالجوع بسرعة", "pitta"],
      ["أستطيع تأخير الوجبات", "kapha"]
    ]
  },
  {
    q: "كيف تكون مشاعرك؟",
    options: [
      ["متغيرة", "vata"],
      ["قوية وواضحة", "pitta"],
      ["مستقرة وهادئة", "kapha"]
    ]
  },
  {
    q: "كيف تتخذين قراراتك؟",
    options: [
      ["بسرعة ثم قد أغير رأيي", "vata"],
      ["بعد تحليل ودقة", "pitta"],
      ["ببطء وبعد التفكير", "kapha"]
    ]
  },
  {
    q: "أي وصف أقرب لك؟",
    options: [
      ["خفيفة وحيوية", "vata"],
      ["قوية وحماسية", "pitta"],
      ["هادئة وثابتة", "kapha"]
    ]
  }
];

function showQuestion() {
  const container = document.getElementById("quiz");

  if (!container) return;

  const question = questions[currentQuestion];

  let html = `
    <div class="question-card">
      <div class="progress">
        السؤال ${currentQuestion + 1} من ${questions.length}
      </div>

      <h2>${question.q}</h2>

      <div class="options">
  `;

  question.options.forEach(option => {
    html += `
      <button onclick="chooseAnswer('${option[1]}')">
        ${option[0]}
      </button>
    `;
  });

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function chooseAnswer(type) {
  scores[type]++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {

  let result = "";

  if (
    scores.vata >= scores.pitta &&
    scores.vata >= scores.kapha
  ) {

    result = `
      <div class="result-card">

        <img
          src="file_000000009f7881f48290ac5626667807.png"
          alt="Dosha Balance"
          style="
            width:100%;
            max-width:400px;
            border-radius:25px;
            display:block;
            margin:0 auto 25px;
          "
        >

        <h1>🌬️ دوشا فاتا</h1>

        <h2>طاقة الحركة والإبداع</h2>

        <p>
          أنتِ تميلين إلى الحيوية والإبداع وسرعة التفكير.
        </p>

        <h3>🥗 الغذاء المناسب</h3>

        <p>
          الأطعمة الدافئة والمغذية والوجبات المنتظمة.
        </p>

        <h3>🧘‍♀️ اليوغا المناسبة</h3>

        <p>
          يوغا هادئة وبطيئة مع تمارين التنفس والاسترخاء.
        </p>

      </div>
    `;

  } else if (
    scores.pitta >= scores.vata &&
    scores.pitta >= scores.kapha
  ) {

    result = `
      <div class="result-card">

        <img
          src="file_000000009f7881f48290ac5626667807.png"
          alt="Dosha Balance"
          style="
            width:100%;
            max-width:400px;
            border-radius:25px;
            display:block;
            margin:0 auto 25px;
          "
        >

        <h1>🔥 دوشا بيتا</h1>

        <h2>طاقة القوة والتركيز</h2>

        <p>
          أنتِ تميلين إلى القوة والطموح والتركيز والوضوح.
        </p>

        <h3>🥗 الغذاء المناسب</h3>

        <p>
          الأطعمة المنعشة والخفيفة والمتوازنة.
        </p>

        <h3>🧘‍♀️ اليوغا المناسبة</h3>

        <p>
          يوغا هادئة ومتوازنة مع تمارين التبريد والاسترخاء.
        </p>

      </div>
    `;

  } else {

    result = `
      <div class="result-card">

        <img
          src="file_000000009f7881f48290ac5626667807.png"
          alt="Dosha Balance"
          style="
            width:100%;
            max-width:400px;
            border-radius:25px;
            display:block;
            margin:0 auto 25px;
          "
        >

        <h1>🌿 دوشا كافا</h1>

        <h2>طاقة الهدوء والثبات</h2>

        <p>
          أنتِ تميلين إلى الهدوء والصبر والاستقرار.
        </p>

        <h3>🥗 الغذاء المناسب</h3>

        <p>
          الأطعمة الخفيفة والدافئة والمتنوعة.
        </p>

        <h3>🧘‍♀️ اليوغا المناسبة</h3>

        <p>
          يوغا نشطة وحيوية تساعد على تنشيط الجسم والطاقة.
        </p>

      </div>
    `;
  }

  const container = document.getElementById("quiz");

  if (container) {
    container.innerHTML = `
      ${result}

      <button
        onclick="location.reload()"
        style="
          padding:15px 30px;
          margin-top:25px;
          border:none;
          border-radius:30px;
          background:#5D8A63;
          color:white;
          font-size:18px;
          cursor:pointer;
        "
      >
        إعادة الاختبار 🔄
      </button>
    `;
  }
}

showQuestion();
