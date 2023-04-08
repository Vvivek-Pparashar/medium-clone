/** */
import axios from "axios";

//const url = "http://localhost:5000/api/"
const url =
  process.env.NODE_ENV === "production"
    ? "/api/"
    : "http://localhost:5000/api/";

export const getArticles = () => async (dispatch) => {
  try {
    const data1 = await axios.get(url);
    console.log("vivek", data1);
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    const data1 = await axios.get(`${url}/${id}`);
//     dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
