import axios from "axios";
export function getHomeData(values) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4001/homePage/")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getAboutData(values) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4001/aboutPage/")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getContactData(values) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4001/contactPage/")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getCareersData(values) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4001/careersPage/")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getSiteData(values) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4001/siteGlobals/")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
