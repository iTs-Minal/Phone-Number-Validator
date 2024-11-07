document.addEventListener('DOMContentLoaded', (event) => {
const checkBtn=document.getElementById("check-btn");
const clearBtn=document.getElementById("clear-btn");
const userInput=document.getElementById("user-input");
const resultsDiv=document.getElementById("results-div");

const validatePhoneNumber = (phoneNumber) => { 
    const validPatterns = [
        /^1 \d{3}-\d{3}-\d{4}$/, 
        /^1 \(\d{3}\) \d{3}-\d{4}$/, 
        /^\d{10}$/, 
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/, 
        /^1\(\d{3}\)\d{3}-\d{4}$/, 
        /^1 \d{3} \d{3} \d{4}$/, 
    ]; 
    return validPatterns.some(pattern => pattern.test(phoneNumber)); 
};

const updateResults=(message)=>{
    resultsDiv.textContent=message;
};

checkBtn.addEventListener("click",()=>{
    console.log("Check Button Clicked")
    const phoneNumber=userInput.value.trim();
    if(!phoneNumber){
        alert("Please provide a phone number");
        return;
    }
    if(validatePhoneNumber(phoneNumber)){
        updateResults(`Valid US number: ${phoneNumber}`)
    }
    else{
        updateResults(`Invalid US number: ${phoneNumber}`)
    }
});

clearBtn.addEventListener("click",()=>{
    resultsDiv.textContent="";
    userInput.value="";
});
});