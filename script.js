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
      ["🌬️ نحيف", "vata"],
      ["🔥 متوسط", "pitta"],
      ["🌱 كبير", "kapha"]
    ]
  },

  {
    q: "كيف تكون طاقتك غالبًا؟",
    options: [
      ["🌬️ متغيرة وسريعة", "vata"],
      ["🔥 قوية ومركزة", "pitta"],
      ["🌱 هادئة وثابتة", "kapha"]
    ]
  },

  {
    q: "كيف يكون أسلوب تفكيرك؟",
    options: [
      ["🌬️ أفكار كثيرة وخيال واسع", "vata"],
      ["🔥 تحليلي ومنظم", "pitta"],
      ["🌱 هادئ ومتأني", "kapha"]
    ]
  },

  {
    q: "كيف يكون نومك عادةً؟",
    options: [
      ["🌬️ خفيف ومتقطع", "vata"],
      ["🔥 متوسط", "pitta"],
      ["🌱 عميق وطويل", "kapha"]
    ]
  },

  {
    q: "كيف تكون شهيتك؟",
    options: [
      ["🌬️ غير منتظمة", "vata"],
      ["🔥 قوية ومنتظمة", "pitta"],
      ["🌱 هادئة وقد أنسى تناول الطعام", "kapha"]
    ]
  },

  {
    q: "كيف تتعاملين مع الجو البارد؟",
    options: [
      ["🌬️ أشعر بالبرد بسرعة", "vata"],
      ["🔥 لا أحب الحرارة أكثر من البرد", "pitta"],
      ["🌱 أتحمل البرد نسبيًا", "kapha"]
    ]
  },

  {
    q: "كيف تكون بشرتك غالبًا؟",
    options: [
      ["🌬️ جافة", "vata"],
      ["🔥 حساسة أو دافئة", "pitta"],
      ["🌱 ناعمة ورطبة", "kapha"]
    ]
  },

  {
    q: "كيف يكون شعرك عادةً؟",
    options: [
      ["🌬️ جاف وخفيف", "vata"],
      ["🔥 ناعم وقد يكون دهنيًا", "pitta"],
      ["🌱 كثيف وقوي", "kapha"]
    ]
  },

  {
    q: "كيف تتعاملين مع الضغط؟",
    options: [
      ["🌬️ أقلق وأفكر كثيرًا", "vata"],
      ["🔥 أنزعج وأصبح عصبية", "pitta"],
      ["🌱 أهدأ وأميل للانسحاب", "kapha"]
    ]
  },

  {
    q: "كيف يكون أسلوبك في الحركة؟",
    options: [
      ["🌬️ سريعة وكثيرة الحركة", "vata"],
      ["🔥 نشيطة وهادفة", "pitta"],
      ["🌱 هادئة وبطيئة", "kapha"]
    ]
  },

  {
    q: "كيف تتخذين قراراتك؟",
    options: [
      ["🌬️ بسرعة وقد أغير رأيي", "vata"],
      ["🔥 بعد تحليل ودراسة", "pitta"],
      ["🌱 ببطء وبعد تفكير طويل", "kapha"]
    ]
  },

  {
    q: "كيف تكون ذاكرتك؟",
    options: [
      ["🌬️ أتعلم بسرعة وأنسى بسرعة", "vata"],
      ["🔥 قوية ودقيقة", "pitta"],
      ["🌱 أتعلم ببطء لكن أتذكر جيدًا", "kapha"]
    ]
  },

  {
    q: "ما الصفة الأقرب لك؟",
    options: [
      ["🌬️ الإبداع والمرونة", "vata"],
      ["🔥 الطموح والتركيز", "pitta"],
      ["🌱 الصبر والثبات", "kapha"]
    ]
  },

  {
    q: "كيف يكون مزاجك غالبًا؟",
    options: [
      ["🌬️ يتغير بسرعة", "vata"],
      ["🔥 قوي وواضح", "pitta"],
      ["🌱 هادئ ومستقر", "kapha"]
    ]
  },

  {
    q: "كيف تفضلين يومك؟",
    options: [
      ["🌬️ أحب التنوع والتغيير", "vata"],
      ["🔥 أحب التنظيم والإنجاز", "pitta"],
      ["🌱 أحب الروتين والهدوء", "kapha"]
    ]
  }

];


function showQuestion() {

  const question = questions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    "السؤال " + (currentQuestion + 1) + " من " + questions.length;

  document.getElementById("questionText").textContent =
    question.q;

  const answers = document.getElementById("answers");

  answers.innerHTML = "";

  question.options.forEach(function(option) {

    const button = document.createElement("button");

    button.className = "answer";

    button.textContent = option[0];

    button.onclick = function() {
      chooseAnswer(option[1]);
    };

    answers.appendChild(button);

  });

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  document.getElementById("progressBar").style.width =
    progress + "%";
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

  document.getElementById("quiz").style.display = "none";

  const result = document.getElementById("result");

  result.style.display = "block";

  const total =
    scores.vata + scores.pitta + scores.kapha;

  const vataPercent =
    Math.round((scores.vata / total) * 100);

  const pittaPercent =
    Math.round((scores.pitta / total) * 100);

  const kaphaPercent =
    Math.round((scores.kapha / total) * 100);


  let dominant;

  if (
    scores.vata >= scores.pitta &&
    scores.vata >= scores.kapha
  ) {

    dominant = "vata";

  } else if (
    scores.pitta >= scores.vata &&
    scores.pitta >= scores.kapha
  ) {

    dominant = "pitta";

  } else {

    dominant = "kapha";

  }


  let data = {};


  if (dominant === "vata") {

    data = {

      icon: "🌬️",

      title: "دوشا فاتا",

      subtitle: "طاقة الحركة والإبداع",

      description:
        "تميل شخصيتك إلى الحيوية والإبداع وسرعة التفكير والمرونة.",

      foodIntro:
        "اختاري في هذا النمط أطعمة دافئة ومطبوخة ووجبات منتظمة.",

      foods: [
        "🍚 الأرز والحبوب المطبوخة",
        "🥣 الشوربات الدافئة",
        "🥕 الخضار المطبوخة",
        "🍌 الفواكه الناضجة",
        "🥜 المكسرات بكميات معتدلة"
      ],

      yogaIntro:
        "روتين هادئ وبطيء يساعد على الاسترخاء والثبات.",

      yoga: [
        "🧘‍♀️ وضعية الطفل — دقيقتان",
        "🐈 القطة والبقرة — دقيقة",
        "🌿 وضعية الجسر اللطيفة — دقيقة",
        "🧘‍♀️ تمدد هادئ — 3 دقائق",
        "😌 استرخاء نهائي — 3 دقائق"
      ],

      breathing:
        "تنفس ببطء لمدة دقيقتين مع جعل الزفير أطول قليلًا من الشهيق.",

      routine:
        "ابدئي يومك بهدوء، حافظي على مواعيد منتظمة للطعام والنوم، وخذي فترات راحة قصيرة خلال اليوم.",

      tips:
        "الروتين والهدوء والاسترخاء من الأشياء التي قد تساعدك على الشعور بالتوازن."

    };


  } else if (dominant === "pitta") {

    data = {

      icon: "🔥",

      title: "دوشا بيتا",

      subtitle: "طاقة التركيز والإنجاز",

      description:
        "تميل شخصيتك إلى التركيز والطموح والتنظيم وحب الإنجاز.",

      foodIntro:
        "اختاري أطعمة خفيفة ومتنوعة ومتوازنة، مع الاهتمام بالترطيب.",

      foods: [
        "🥒 الخيار والخضار الطازجة",
        "🥬 الخضار الورقية",
        "🍉 الفواكه الغنية بالماء",
        "🍚 الأرز والحبوب الخفيفة",
        "💧 الماء والسوائل المناسبة"
      ],

      yogaIntro:
        "روتين متوسط الهدوء يركز على التمدد والتنفس والاسترخاء.",

      yoga: [
        "🌿 تمدد جانبي لطيف — دقيقة",
        "🐈 القطة والبقرة — دقيقة",
        "🧘‍♀️ وضعية الطفل — دقيقتان",
        "🌸 وضعية الفراشة — دقيقتان",
        "😌 استرخاء وتنفس — 4 دقائق"
      ],

      breathing:
        "تنفس هادئ ومنتظم لمدة دقيقتين مع التركيز على تخفيف التوتر.",

      routine:
        "قسّمي يومك بين الإنجاز والراحة، واحرصي على شرب الماء وأخذ فترات توقف قصيرة.",

      tips:
        "التوازن بين الإنجاز والراحة مهم حتى لا يتحول الحماس إلى إجهاد."

    };


  } else {

    data = {

      icon: "🌱",

      title: "دوشا كافا",

      subtitle: "طاقة الهدوء والثبات",

      description:
        "تميل شخصيتك إلى الهدوء والصبر والاستقرار والثبات.",

      foodIntro:
        "اختاري وجبات متنوعة وخفيفة مع الاهتمام بالحركة وتجنب الإفراط في الطعام.",

      foods: [
        "🥦 الخضار المتنوعة",
        "🥗 السلطات الطازجة",
        "🫘 البقوليات",
        "🍎 الفواكه الطازجة",
        "🌾 الحبوب الكاملة بكميات مناسبة"
      ],

      yogaIntro:
        "روتين أكثر نشاطًا وحيوية يساعد على تنشيط الجسم.",

      yoga: [
        "🐈 القطة والبقرة — دقيقة",
        "🌞 تحية الشمس — 3 دقائق",
        "🧘‍♀️ وضعية المحارب — دقيقتان",
        "🌿 تمدد نشط — دقيقتان",
        "😌 تنفس واسترخاء — دقيقتان"
      ],

      breathing:
        "تنفس منتظم ونشط لمدة دقيقتين مع الحفاظ على وتيرة مريحة.",

      routine:
        "أضيفي الحركة إلى يومك، وحاولي تغيير الروتين من وقت لآخر، وابدئي اليوم بنشاط بسيط.",

      tips:
        "الحركة والتنوع والروتين النشط يمكن أن يساعدوا على الحفاظ على الشعور بالحيوية."

    };

  }


  const foodHTML = data.foods.map(function(food) {

    return `
      <div style="
        background:white;
        padding:12px 15px;
        border-radius:15px;
        margin:8px 0;
        text-align:right;
        box-shadow:0 2px 8px rgba(0,0,0,.04);
      ">
        ${food}
      </div>
    `;

  }).join("");


  const yogaHTML = data.yoga.map(function(move) {

    return `
      <div style="
        background:white;
        padding:12px 15px;
        border-radius:15px;
        margin:8px 0;
        text-align:right;
        box-shadow:0 2px 8px rgba(0,0,0,.04);
      ">
        ${move}
      </div>
    `;

  }).join("");


  result.innerHTML = `

    <div style="
      max-width:600px;
      margin:auto;
    ">

      <div style="
        font-size:58px;
        margin-bottom:5px;
      ">
        ${data.icon}
      </div>


      <h2 style="
        color:#2E473B;
        font-size:30px;
        margin:5px 0;
      ">
        ${data.title}
      </h2>


      <h3 style="
        color:#5D8A63;
        margin-top:5px;
      ">
        ${data.subtitle}
      </h3>


      <p style="
        color:#777;
        margin-bottom:25px;
      ">
        نتيجتك مبنية على إجاباتك في الاختبار
      </p>


      <div style="
        background:#F8F5EE;
        padding:20px;
        border-radius:22px;
        margin-bottom:20px;
      ">

        <h3>📊 توزيع النتيجة</h3>

        <p>🌬️ فاتا: ${vataPercent}%</p>

        <div style="
          background:#E5E1D8;
          height:9px;
          border-radius:20px;
          overflow:hidden;
        ">
          <div style="
            width:${vataPercent}%;
            height:100%;
            background:#8BAE8E;
          "></div>
        </div>


        <p>🔥 بيتا: ${pittaPercent}%</p>

        <div style="
          background:#E5E1D8;
          height:9px;
          border-radius:20px;
          overflow:hidden;
        ">
          <div style="
            width:${pittaPercent}%;
            height:100%;
            background:#C98A68;
          "></div>
        </div>


        <p>🌱 كافا: ${kaphaPercent}%</p>

        <div style="
          background:#E5E1D8;
          height:9px;
          border-radius:20px;
          overflow:hidden;
        ">
          <div style="
            width:${kaphaPercent}%;
            height:100%;
            background:#7A9A78;
          "></div>
        </div>

      </div>


      <div style="
        background:white;
        padding:22px;
        border-radius:22px;
        margin-bottom:20px;
        border:1px solid #eee;
      ">

        <h3>✨ ماذا تعني نتيجتك؟</h3>

        <p>
          ${data.description}
        </p>

      </div>


      <div style="
        background:#F8F5EE;
        padding:22px;
        border-radius:22px;
        margin-bottom:20px;
        text-align:right;
      ">

        <h3 style="text-align:center;">
          🥗 الأكل المناسب
        </h3>

        <p style="text-align:center;">
          ${data.foodIntro}
        </p>

        ${foodHTML}

      </div>


      <div style="
        background:#F8F5EE;
        padding:22px;
        border-radius:22px;
        margin-bottom:20px;
        text-align:right;
      ">

        <h3 style="text-align:center;">
          🧘‍♀️ روتين اليوغا
        </h3>

        <p style="text-align:center;">
          ${data.yogaIntro}
        </p>

        ${yogaHTML}

        <p style="
          text-align:center;
          color:#5D8A63;
          font-weight:bold;
          margin-top:18px;
        ">
          ⏱️ مدة الروتين حوالي 10 دقائق
        </p>

      </div>


      <div style="
        background:#F8F5EE;
        padding:22px;
        border-radius:22px;
        margin-bottom:20px;
      ">

        <h3>
          🌬️ تمرين التنفس
        </h3>

        <p>
          ${data.breathing}
        </p>

      </div>


      <div style="
        background:#F8F5EE;
        padding:22px;
        border-radius:22px;
        margin-bottom:20px;
      ">

        <h3>
          🌿 روتينك اليومي
        </h3>

        <p>
          ${data.routine}
        </p>

      </div>


      <div style="
        background:#F8F5EE;
        padding:22px;
        border-radius:22px;
        margin-bottom:20px;
      ">

        <h3>
          💚 نصيحة لك
        </h3>

        <p>
          ${data.tips}
        </p>

      </div>


      <div style="
        background:#FFF8E8;
        padding:15px;
        border-radius:18px;
        margin-top:20px;
        font-size:13px;
        color:#777;
        line-height:1.8;
      ">

        🌿 هذا الاختبار للتثقيف والاستكشاف العام
        وليس تشخيصًا أو علاجًا طبيًا.

      </div>


      <button
        class="restart"
        onclick="location.reload()"
        style="
          margin-top:25px;
        "
      >
        ✨ إعادة الاختبار
      </button>

    </div>

  `;

}


showQuestion();
