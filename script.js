const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calculateButton = document.querySelector("#calculateBtn");
const resultBox = document.querySelector("#result");

console.log(heightInput);        
console.log(weightInput);       
console.log(calculateButton);   
console.log(resultBox);          

calculateButton.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultBox.innerHTML = "❗ Please enter valid height and weight.";
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100)); 
  let message = "";

  if (bmi < 18.5) {
    message = `Your BMI is ${bmi.toFixed(2)}. You are underweight 🍽️. Eat well and stay active 💪.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = `Your BMI is ${bmi.toFixed(2)}. Normal weight ✅. Great job! 🌟 Keep it up.`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    message = `Your BMI is ${bmi.toFixed(2)}. Overweight ⚖️. Try regular activity 🚶 and eat light.`;
  } else {
    message = `Your BMI is ${bmi.toFixed(2)}. Obese 🚨. Start small steps toward better health 💚.`;
  }

  resultBox.innerHTML = message;
});

