function svmOF()
{
    document.querySelector("#mainO").innerHTML = "Support Vector Machine"
}

function gbOF()
{
    document.querySelector("#mainO").innerHTML = "Gradient Boost"
}

document.querySelector("#svmO").addEventListener("click",svmOF)
document.querySelector("#gbO").addEventListener("click",gbOF)