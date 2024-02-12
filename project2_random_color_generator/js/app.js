// color generation function
function colorGenerator() {

    // for rgba
	// const red = Math.floor(Math.random() * 256);
	// const green = Math.floor(Math.random() * 256);
	// const blue = Math.floor(Math.random() * 256);
	// const rgba = `rgba(${red},${green},${blue})`;
	// console.log(rgba);
    // return rgba;
    // for hex 

    const red = Math.floor(Math.random() * 256).toString(16);
	const green = Math.floor(Math.random() * 256).toString(16);
	const blue = Math.floor(Math.random() * 256).toString(16);
    const hex=`#${red}${blue}${green}`
    // console.log(hex)
    // return hex
    body.style.background=hex
    colorValue.textContent=hex
    navigator.clipboard.writeText(hex)
   
}

// element selection

const body=document.body;
const colorValue=document.querySelector("#color-value");
const  colorGeneratorButton=document.getElementById("color-generator-btn");

// console.log(body);
// console.log(colorValue);
// console.log(colorGeneratorButton);

colorGeneratorButton.addEventListener("click",()=>{
    colorGenerator();
    // body.style.background=colorGenerator();
    // colorValue.textContent=tinycolor(body.style.background).toHexString()
    // colorValue.textContent=body.style.background
    
})


colorGenerator()