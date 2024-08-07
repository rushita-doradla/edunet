// Get form data on page load
window.onload = function () {
    const storedData = localStorage.getItem('portfolioData');
  
    // Check if data exists
    if (storedData) {
      // Parse JSON string back to object
      const formData = JSON.parse(storedData);
       
      // Update elements in index.html
    document.getElementById('name-hed').setAttribute('src',`https://readme-typing-svg.demolab.com?font=Montserrat&weight=600&size=50&duration=2000&pause=200&color=F7F7F7&vCenter=true&repeat=false&random=false&width=580&lines=I'm+${formData.f_name}+${formData.l_name}%F0%9F%91%8B`);
    document.getElementById("about-desc").innerText = formData.about
    document.getElementById("p1title").innerText = formData.p1title
    document.getElementById("p1desc").innerText = formData.p1desc
    document.getElementById("p1git").setAttribute("href", formData.p2git) 
    document.getElementById("p2title").innerText = formData.p2title
    document.getElementById("p2desc").innerText = formData.p2desc
    document.getElementById("p2git").setAttribute("href", formData.p3git) 
    document.getElementById("p3title").innerText = formData.p3title
    document.getElementById("p3desc").innerText = formData.p3desc
    document.getElementById("p3git").setAttribute("href", formData.p3git) 
    document.getElementById("p4title").innerText = formData.p4title
    document.getElementById("p4desc").innerText = formData.p4desc
    document.getElementById("p4git").setAttribute("href", formData.p4git) 
    document.getElementById("skills1").setAttribute("src", `https://skillicons.dev/icons?i=${formData.skills}` ) 
    //   console.log(storedData)
    //   document.getElementById('lastname').textContent = `Lastname: ${formData.lastname}`;
    //   document.getElementById('about').textContent = `About: ${formData.about}`;  
      // ... update other elements based on form data properties
    }
  };
  
