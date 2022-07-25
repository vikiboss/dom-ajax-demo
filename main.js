let textDiv = document.getElementById("text");
let XHRBtn = document.getElementById("XHRBtn");
let styleBtn = document.getElementById("styleBtn");
let fetchBtn = document.getElementById("fetchBtn");
let axiosBtn = document.getElementById("axiosBtn");
let jqueryBtn = document.getElementById("jqueryBtn");

const api = "https://v1.hitokoto.cn/?encode=text";

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeText = () => {
  const Y = getRandom(-20, 20);
  const r = getRandom(0, 255);
  const g = getRandom(0, 255);
  const b = getRandom(0, 255);

  const randColor = `rgb(${r},${g},${b})`;

  textDiv.style.transform = `translateY(${Y}px)`;
  textDiv.style.color = randColor;
  textDiv.style.borderBottom = `1px solid ${randColor}`;
};

// function setText(text) {
//   textDiv.innerText = text;
// }

const setText = (text) => (textDiv.innerText = text);

const getDataViaXHR = () => {
  setText("XHR请求中...");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", api);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        setText(xhr.responseText);
      } else {
        alert("There was a problem with the request.");
      }
    }
  };
  xhr.send(null);
};

const getDataViaJquery = async () => {
  setText("Jquery请求中...");
  const data = await $.get(api);
  setText(data);
};

// const _getDataViaJquery = () => {
//   setText("Jquery请求中...");
//   $.get(api).then((response) => {
//     setText(response);
//   });
// };

const getDataViaAxios = async () => {
  setText("Axios请求中...");
  const response = await axios.get("v1.hitokoto.cn	");
  const text = response.data;
  setText(text);
};

// const _getDataViaAxios = () => {
//   setText("Axios请求中...");
//   axios.get(api).then((response) => {
//     const text = response.data;
//     setText(text);
//   });
// };

const getDataViaFetch = async () => {
  setText("Fetch请求中...");
  const response = await fetch(api);
  const text = await response.text();
  setText(text);
};

// const _getDataViaFetch = () => {
//   setText("Fetch请求中...");
//   fetch(api).then((response) => {
//     const text = response.text();
//     setText(text);
//   });
// };

XHRBtn.onclick = getDataViaXHR;
fetchBtn.onclick = getDataViaFetch;
axiosBtn.onclick = getDataViaAxios;
jqueryBtn.onclick = getDataViaJquery;
styleBtn.onclick = changeText;
