/* Необходимо реализовать отрисовку 10 картинок собак из API 
https://dog.ceo/dog-api/ с интервалом в 3 секунды. */

const url = "https://dog.ceo/api/breeds/image/random";
const div = document.querySelector(".dogs");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

try {
  const dogs = [];
  while (dogs.length < 15) {
    const data = await getData(url);
    console.log(data);
    dogs.push(data.message);
  }
  console.log(dogs);

  div.insertAdjacentHTML(
    "beforeend",
    `
    <img class="dog" id="img" src=""  />
    
    `
  );
  let count = 0;
  (function () {
    
    let i = 0;
    const photo = document.getElementById("img");
    // setTimeout- исключительно для демонстрации 
    setTimeout(function () {
      photo.src = dogs[i];
      i = (i + 1) % dogs.length;
    },0)
    const changing = setInterval(function slider() {
      photo.src = dogs[i];
      i = (i + 1) % dogs.length;
      count++;
      
      if (count > 9) {
        clearInterval(changing);
        photo.src = "";
      }
    }, 3000);
  })();
} catch (error) {
  console.error("что-то не так! ");
}









/* const url = "https://dog.ceo/api/breeds/image/random";
const div = document.querySelector(".dogs");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

try {
  const dogs = [];
  while (dogs.length < 15) {
    const data = await getData(url);
    console.log(data);
    dogs.push(data.message);
  }
  console.log(dogs);

  div.insertAdjacentHTML(
    "beforeend",
    `
    <img class="dog" id="img" src=""  />
    
    `
  );
  let count = 0;
  (function () {
    
    let i = 0;
    const photo = document.getElementById("img");
    // setTimeout- исключительно для демонстрации 
    setTimeout(function () {
      photo.src = dogs[i];
      i = (i + 1) % dogs.length;
    },0)
    const changing = setInterval(function slider() {
      photo.src = dogs[i];
      i = (i + 1) % dogs.length;
      count++;
      
      if (count > 9) {
        clearInterval(changing);
        photo.src = "";
      }
    }, 3000);
  })();
} catch (error) {
  console.error("что-то не так! ");
}
 */
