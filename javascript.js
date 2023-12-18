function toggleSection(sectionId) {
    const section = document.getElementById(sectionId + 'Section');
    const isOpen = section.classList.contains('open');
    const allSections = document.querySelectorAll('.section');
  
    // Close all sections
    allSections.forEach((sec) => {
      if (sec.id !== sectionId + 'Section' && sec.classList.contains('open')) {
        sec.classList.remove('open');
        setTimeout(() => {
          sec.style.display = 'none';
        }, 500); // Adjust this value to match the transition duration
      }
    });
  
    if (isOpen) {
      section.classList.remove('open');
      setTimeout(() => {
        section.style.display = 'none';
      }, 500); // Adjust this value to match the transition duration
    } else {
      section.classList.add('open');
      section.style.display = 'block';
    }
    }
    const shapes = document.querySelectorAll('.shape1, .shape2, .shape3');
      let angle = 0;
  
      function moveShapes() {
        shapes.forEach((shape, index) => {
          const containerRect = document.querySelector('.container').getBoundingClientRect();
  
          const radius = containerRect.width / 2 - 50; // Adjusted size to fit within the container
          const x = containerRect.width / 2 + radius * Math.cos(angle + (index * Math.PI * 2) / shapes.length);
          const y = containerRect.height / 2 + radius * Math.sin(angle + (index * Math.PI * 2) / shapes.length);
  
          shape.style.transform = `translate(${x}px, ${y}px)`;
        });
  
        angle += 0.01; // Adjust speed of movement
  
        requestAnimationFrame(moveShapes);
      }
  
      moveShapes();