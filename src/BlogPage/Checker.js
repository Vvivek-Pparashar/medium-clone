const fetch = require("node-fetch");

async function query(API_URL, payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data.data;
}

async function classify(phrase) {
  const API_URL =
    "https://namit2111-classification-of-text.hf.space/run/predict";
  const output = await query(API_URL, { data: [phrase] });
  return output;
}

async function sentiment(phrase) {
  const API_URL = "https://namit2111-sentiment-analysis.hf.space/run/predict";
  const output = await query(API_URL, { data: [phrase] });
  return output;
}

function filter(res) {
  const value = res[0].confidences;
  let label = "",
    point = 0;
  for (const d of value) {
    if (d.confidence > point) {
      point = d.confidence;
      label = d.label;
    }
  }
  return [label, point];
}

function filterTag(res) {
  let value = "";
  let flag = false;

 res.replace(/&nbsp;/g, " ")

  for (let i = 0; i < res.length; i++) {
    let j = res.charAt(i);
    if (j === '<') {
      flag = true;
      continue;
    }

    if (j === '>') {
      flag = false;
      continue;
    }
    if (flag) {
      continue;
    }

    value = value + j;
  }

  // console.log(value.replace(/&nbsp;/g, ""));

  return value.replace(/&nbsp;/g, "");
}

// (async function () {
//   const cla = await classify(
//     "Education entails acquiring knowledge to have a greater understanding of the various disciplines that will be used in our everyday lives. ‘Education’ refers to the information we gain and experience outside of books or classrooms, as well as the knowledge that we receive and experience in schools, our homes, and as members of society. Our ideas on life alter as a result of learning, education is crucial for personal development and growth in society. In this blog, we will see why we need education for growth and will also look at some articles on the importance of education."
//   );
//   const sen = await sentiment(
//     "Education entails acquiring knowledge to have a greater understanding of the various disciplines that will be used in our everyday lives. ‘Education’ refers to the information we gain and experience outside of books or classrooms, as well as the knowledge that we receive and experience in schools, our homes, and as members of society. Our ideas on life alter as a result of learning, education is crucial for personal development and growth in society. In this blog, we will see why we need education for growth and will also look at some articles on the importance of education."
//   );
//   console.log(filter(cla), filter(sen));
// })();

export { classify, sentiment, filter, filterTag };
