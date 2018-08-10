// Initialize image classifier
const imgClassifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
  console.log('Model loaded');
  imgClassifier.predict(document.getElementById("img_"), gotResults);
}

let gotResults = (err, results) => {
  if (err) return console.error(err);
  else {
    console.log(results);

    img_predict.results.result = results[0].className;
    img_predict.results.probability = results[0].probability;
  } 
}


// Vue
const getNombre = () => 'Riven!';

let content = new Vue({
  el: "#content",
  data: {
    title: 'Welcome ' + getNombre(),
    logo: {
      name: getNombre(),
      src: '../assets/img/image.png'
    }
  }
});

let img_predict = new Vue({
  el: "#img_predict",
  data: {
    msg: 'image to predict',
    imgPredict: '../assets/img/predict.jpg',
    results: {
      result: 'cargando...',
      probability: 'cargando...'
    }
  }
});