import axios, * as others from "axios";

async function query(API_URL, payload) {
  const response = await axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
  });
  const data = response.data;
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

  res.replace(/&nbsp;/g, " ");

  for (let i = 0; i < res.length; i++) {
    let j = res.charAt(i);
    if (j === "<") {
      flag = true;
      continue;
    }

    if (j === ">") {
      flag = false;
      continue;
    }
    if (flag) {
      continue;
    }

    value = value + j;
  }

  return value.replace(/&nbsp;/g, "");
}

export { classify, sentiment, filter, filterTag };
