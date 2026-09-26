const users = [
    {
      fullName: "Aarav Sharma",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      profession: "Frontend Developer",
      description: "Passionate about creating clean and interactive web experiences.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
  
    {
      fullName: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      profession: "UI/UX Designer",
      description: "I love turning ideas into simple and beautiful user interfaces.",
      tags: ["Figma", "UI Design", "UX"]
    },
  
    {
      fullName: "Daniel Smith",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      profession: "Backend Developer",
      description: "Building scalable APIs and reliable backend systems.",
      tags: ["Node.js", "MongoDB", "API"]
    },
  
    {
      fullName: "Sophia Brown",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      profession: "Content Creator",
      description: "Creating engaging content around technology and lifestyle.",
      tags: ["YouTube", "Instagram", "Content"]
    },
  
    {
      fullName: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      profession: "Full Stack Developer",
      description: "Enjoys building complete web applications from frontend to backend.",
      tags: ["React", "Node.js", "Express"]
    }
  ];
  
  var sum = '';
  users.forEach(function(elem) {
    sum += ` <div class="card">
            <img src="${elem.image}" alt="nature image">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p> ${elem.description} </p>
        </div>`
  })
  
var main =   document.querySelector('main');
main.innerHTML = sum;