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
    (currentQuestion / questions.length) * 100;

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


  let title = "";
  let description = "";
  let food = "";
  let foodList = "";
  let yoga = "";
  let yogaRoutine = "";
  let breathing = "";
  let tips = "";
  let icon = "";


  if (dominant === "vata") {

    icon = "🌬️";

    title = "دوشا فاتا";

    description =
      "تميل شخصيتك إلى الحيوية والإبداع وسرعة التفكير والمرونة.";

    food =
      "يفضل في نمط الأيورفيدا اختيار الأطعمة الدافئة والمطبوخة والوجبات المنتظمة.";

    foodList = `
      <ul style="line-height:2;text-align:right;">
        <li>🍚 الأرز والحبوب المطبوخة</li>
        <li>🥣 الشوربات الدافئة</li>
        <li>🥕 الخضار المطبوخة</li>
        <li>🍌 الفواكه الناضجة</li>
        <li>🥜 المكسرات بكميات معتدلة</li>
      </ul>
    `;

    yoga =
      "روتين هادئ وبطيء يركز على الثبات والاسترخاء.";

    yogaRoutine = `
      <ul style="line-height:2;text-align:right;">
        <li>🧘‍♀️ وضعية الطفل — دقيقتان</li>
        <li>🐈 القطة والبقرة — دقيقة واحدة</li>
        <li>🌿 وضعية الجسر اللطيفة — دقيقة واحدة</li>
        <li>🧘‍♀️ جلوس هادئ وتمدد لطيف — 3 دقائق</li>
        <li>😌 استرخاء نهائي — 3 دقائق</li>
      </ul>
    `;

    breathing =
      "تنفس بطيء وهادئ لمدة دقيقتين، مع التركيز على إطالة الزفير.";

    tips =
      "حاولي الحفاظ على روتين يومي منتظم، وامنحي نفسك وقتًا كافيًا للراحة والهدوء.";

  }


  else if (dominant === "pitta") {

    icon = "🔥";

    title = "دوشا بيتا";

    description =
      "تميل شخصيتك إلى التركيز والطموح والتنظيم وحب الإنجاز.";

    food =
      "يفضل في نمط الأيورفيدا اختيار أطعمة خفيفة ومتنوعة ومتوازنة مع الاهتمام بالترطيب.";

    foodList = `
      <ul style="line-height:2;text-align:right;">
        <li>🥒 الخيار والخضار الطازجة</li>
        <li>🥬 الخضار الورقية</li>
        <li>🍉 الفواكه الغنية بالماء</li>
        <li>🍚 الأرز والحبوب الخفيفة</li>
        <li>💧 الماء والسوائل المناسبة</li>
      </ul>
    `;

    yoga =
      "روتين متوسط الهدوء يركز على التمدد والتنفس والاسترخاء.";

    yogaRoutine = `
      <ul style="line-height:2;text-align:right;">
        <li>🌿 تمدد جانبي لطيف — دقيقة واحدة</li>
        <li>🐈 القطة والبقرة — دقيقة واحدة</li>
        <li>🧘‍♀️ وضعية الطفل — دقيقتان</li>
        <li>🌸 وضعية الفراشة — دقيقتان</li>
        <li>😌 استرخاء وتنفس هادئ — 4 دقائق</li>
      </ul>
    `;

    breathing =
      "تنفس هادئ لمدة دقيقتين مع التركيز على التنفس المنتظم وتخفيف التوتر.";

    tips =
      "احرصي على فترات راحة منتظمة، وتجنبي المبالغة في العمل والإنجاز.";

  }


  else {

    icon = "🌱";

    title = "دوشا كافا";

    description =
      "تميل شخصيتك إلى الهدوء والصبر والاستقرار والثبات.";

    food =
      "يفضل في نمط الأيورفيدا اختيار وجبات خفيفة ومتنوعة مع الاهتمام بالحركة وتجنب الإفراط في الطعام.";

    foodList = `
      <ul style="line-height:2;text-align:right;">
        <li>🥦 الخضار المتنوعة</li>
        <li>🥗 السلطات الطازجة</li>
        <li>🫘 البقوليات</li>
        <li>🍎 الفواكه الطازجة</li>
        <li>🌾 الحبوب الكاملة بكميات مناسبة</li>
      </ul>
    `;

    yoga =
      "روتين أكثر نشاطًا وحيوية للمساعدة على تنشيط الجسم.";

    yogaRoutine = `
      <ul style="line-height:2;text-align:right;">
        <li>🐈 القطة والبقرة — دقيقة واحدة</li>
        <li>🌞 تحية الشمس — 3 دقائق</li>
        <li>🧘‍♀️ وضعية المحارب — دقيقتان</li>
        <li>🌿 تمدد نشط — دقيقتان</li>
        <li>😌 تنفس واسترخاء — دقيقتان</li>
      </ul>
    `;

    breathing =
      "تنفس نشط ومنتظم لمدة دقيقتين مع الحفاظ على وتيرة مريحة.";

    tips =
      "حافظي على الحركة اليومية والتغيير في الروتين لتجنب الخمول.";

  }


  result.innerHTML = `

    <div style="
      font-size:52px;
      margin-bottom:5px;
    ">
      ${icon}
    </div>

    <h2 style="
      color:#2E473B;
      font-size:30px;
      margin:5px 0 10px;
    ">
      ${title}
    </h2>

    <p style="
      color:#777;
      margin-bottom:25px;
    ">
      النتيجة مبنية على إجاباتك في هذا الاختبار
    </p>


    <div style="
      background:#F8F5EE;
      padding:20px;
      border-radius:20px;
      margin-bottom:25px;
    ">

      <h3 style="margin-top:0;">
        🌿 توزيع النتيجة
      </h3>

      <p>🌬️ فاتا: ${vataPercent}%</p>

      <div style="
        background:#E5E1D8;
        height:8px;
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
        height:8px;
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
        height:8px;
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


    <h3>✨ ماذا تعني نتيجتك؟</h3>

    <p>
      ${description}
    </p>


    <div style="
      background:#F8F5EE;
      padding:20px;
      border-radius:20px;
      margin-top:20px;
    ">

      <h3>🥗 الأكل المناسب</h3>

      <p>
        ${food}
      </p>

      ${foodList}

    </div>


    <div style="
      background:#F8F5EE;
      padding:20px;
      border-radius:20px;
      margin-top:20px;
    ">

      <h3>🧘‍♀️ روتين اليوغا</h3>

      <p>
        ${yoga}
      </p>

      ${yogaRoutine}

      <p>
        <strong>⏱️ مدة الروتين: حوالي 10 دقائق</strong>
      </p>

    </div>


    <div style="
      background:#F8F5EE;
      padding:20px;
      border-radius:20px;
      margin-top:20px;
    ">

      <h3>🌬️ تمرين التنفس</h3>

      <p>
        ${breathing}
      </p>

    </div>


    <div style="
      background:#F8F5EE;
      padding:20px;
      border-radius:20px;
      margin-top:20px;
    ">

      <h3>🌿 نصيحة يومية</h3>

      <p>
        ${tips}
      </p>

    </div>


    <p style="
      font-size:13px;
      color:#888;
      margin-top:25px;
      line-height:1.8;
    ">
      ملاحظة: المحتوى مستوحى من مفاهيم الأيورفيدا
      ومخصص للتثقيف والاستكشاف العام، ولا يُعد تشخيصًا
      أو علاجًا طبيًا.
    </p>


    <button
      class="restart"
      onclick="location.reload()"
    >
      ✨ إعادة الاختبار
    </button>

  `;

}


showQuestion();
