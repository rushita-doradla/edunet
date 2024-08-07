const sub_btn = document.querySelector("form")
sub_btn.addEventListener("submit",(e)=>{

const f_name = document.getElementById('firstname').value
const l_name = document.getElementById('lastname').value
const about  =  document.getElementById('about').value
const p1title = document.getElementById('p1title').value
const p1desc = document.getElementById('p1desc').value
const p1git = document.getElementById('p1git').value
const p2title = document.getElementById('p2title').value
const p2desc = document.getElementById('p2desc').value
const p2git = document.getElementById('p2git').value
const p3title = document.getElementById('p3title').value
const p3desc = document.getElementById('p3desc').value
const p3git = document.getElementById('p3git').value
const p4title = document.getElementById('p4title').value
const p4desc = document.getElementById('p4desc').value
const p4git = document.getElementById('p4git').value
const skills = document.getElementById('skills').value
// e.preventDefault();

// const data = new FormData(e);

    // window.location.replace("file:///F:/college%20web/react/KalyanCheva/port-copy/index.html")
    // // const name_hed = document.querySelector("#name-hed")
    // // name_hed.setAttribute(src,`"https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=600&size=50&duration=2000&pause=200&color=F7F7F7&vCenter=true&repeat=false&random=false&width=580&lines=I'm+${f_name.value}+${l_name.value}%F0%9F%91%8B"`)
    // // window.location.replace("http://127.0.0.1:5500/port-copy/index.html")
    // const hed = document.querySelector("#hello")
    // hed.innerText = "hello wordld"
    console.log("heloooooooooo")

    const formData = {
        f_name,
        l_name,
        about,
        p1title,
        p1desc,
        p1desc,
        p2desc,
        p2title,
        p2git,
        p3desc,
        p3git,
        p3title,
        p4desc,
        p4git,
        p4title,
        skills
      };
      console.log(formData)
    
      // Convert object to a JSON string
      const jsonData = JSON.stringify(formData);
    
      // Store data in Local Storage
      localStorage.setItem('portfolioData', jsonData);
    
      // Display success message (optional)
      alert('Portfolio details saved successfully!');


})