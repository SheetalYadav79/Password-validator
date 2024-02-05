let passwordInput = document.querySelector(".pass-field input");
let eye = document.querySelector(".pass-field i");
let requirementList = document.querySelectorAll(".requirement-list li");

let requirements = [
    {regex:/.{8,}/, index: 0},
    {regex:/.*[0-9].*/, index: 1},
    {regex:/.*[a-z].*/, index: 2},
    {regex:/.*[^A-Za-z0-9].*/, index: 3},
    {regex:/.*[A-Z].*/, index: 4},
]

passwordInput.addEventListener("keyup",(e)=>{
    requirements.forEach(item=> {
        let isValid = item.regex.test(e.target.value);
        let requirementItem = requirementList[item.index];

        if(isValid){
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }
        else{
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });

});

eye.addEventListener("click", () => {
passwordInput.type = passwordInput.type === "password" ? "text": "password";
eye.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});