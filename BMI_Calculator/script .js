const input_height = document.getElementById("height");
const input_weight = document.getElementById("weight");
const btn = document.getElementById("calculate-button");
const resultstatus = document.getElementById("BMI-status");
const resutvalue = document.getElementById("BMI-value");
btn.addEventListener('click', () => {
    const height = parseFloat(input_height.value) / 100;
    const weight = parseFloat(input_weight.value);
    if (!height || !weight || height <= 0 || weight <= 0) {
        resultstatus.innerHTML = "Please enter valid values!";
        resultstatus.style.color = "red";
        return;
    }
    const bmi = (weight / (height * height)).toFixed(1);
    resutvalue.innerHTML = `Your BMI: ${bmi}`;
    if (bmi < 18.5) {
        resultstatus.innerHTML = "Status: Underweight 🟡";
        resultstatus.style.color = "#ffc107";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        resultstatus.innerHTML = "Status: Healthy Weight ✅";
        resultstatus.style.color = "#28a745";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        resultstatus.innerHTML = "Status: Overweight 🟠";
        resultstatus.style.color = "#fd7e14";
    }
    else {
        resultstatus.innerHTML = "Status: Obese 🔴";
        resultStatus.style.color = "#dc3545";
    }
});



