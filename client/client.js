console.log('Hello Wolrd!');

// reference to the form  
const form = document.querySelector('form');
// to hide the loading gif when not required ..
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = "none";
// listen for when the user clicks submit
form.addEventListener('submit', (event) => {
  // prevent webpage from refreshing (by default) 
  //so that we can handle the entered user data 
  event.preventDefault();
  // formData is built into the browser and works by
  // passing in a reference to the form (we have created
  // a form variable on line 4)
  const formData = new FormData()
  const name = formData.get('name');
  const content = formData.get('content');

  const mew = {
    name, 
    content
  };

  console.log('mew');
  form.style.display = 'none';
  loadingElement.style.display = '';
})  