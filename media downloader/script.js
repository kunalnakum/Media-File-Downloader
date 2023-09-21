const x = document.querySelector("input");
const y = document.querySelector("button");

y.addEventListener("click" , e => {
    e.preventDefault();
    fetchFile(x.value);

})

function fetchFile(url){
    fetch(url).then(rse => rse.blob()).then(file => {
        let tempURl = URL.createObjectURL(file);
        let atag = document.createElement("a");
        atag.href = tempURl;
        atag.download = "filename";
        document.body.appendChild(atag);
        atag.click();
        atag.remove();

    })
}

