import axios from "axios";
export function getHomeData(values) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://backends.nnaydemedcare.com/backend/homePage/")
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
      .get("https://backends.nnaydemedcare.com/backend/aboutPage/")
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
      .get("https://backends.nnaydemedcare.com/backend/contactPage/")
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
      .get("https://backends.nnaydemedcare.com/backend/careersPage/")
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
      .get("https://backends.nnaydemedcare.com/backend/siteGlobals/")
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
