<script>
    const customButtons = document.querySelectorAll('.ripple-effect-button');

    for (const button of customButtons) {
      button.addEventListener('mousemove', function(event) {
        const rect = this.getBoundingClientRect();

        const hoverBg = this.querySelector('.bg-hover');

        const posX = event.clientX - rect.left;
        const posY = event.clientY - rect.top;

        hoverBg.style.left = `${posX}px`;
        hoverBg.style.top = `${posY}px`;
      });
    }
  </script>

// TODO:  Put it in elementor code for full site at body end

<script>
    const customButtons = document.querySelectorAll('.ripple-effect-button');

    for (const button of customButtons) {
      button.addEventListener('mousemove', function(event) {
        const rect = this.getBoundingClientRect();

        const hoverBg = this.querySelector('.bg-hover');

        const posX = event.clientX - rect.left;
        const posY = event.clientY - rect.top;

        hoverBg.style.left = `${posX}px`;
        hoverBg.style.top = `${posY}px`;
      });
			button.addEventListener('mouseout', function(event) {
        const rect = this.getBoundingClientRect();

        const hoverBg = this.querySelector('.bg-hover');
      
      const posX = event.clientX - rect.left;
      const posY = event.clientY - rect.top;
//       const halfWidth = rect.width / 2;
//       const halfHeight = rect.height / 2;
      
//       const posXDiff = posX < halfWidth ? posX : rect.width - posX;
//       const posYDiff = posY < halfHeight ? posY : rect.height - posY;

//       hoverBg.style.left = `${posX + posXDiff}px`;
//       hoverBg.style.top = `${posY + posYDiff}px`;
      
				// Calculate the distance from mouse position to button edges
      const distLeft = posX;
      const distRight = rect.width - posX;
      const distTop = posY;
      const distBottom = rect.height - posY;

      // Determine if the mouse leaves from top/bottom or left/right
      const isTopOrBottom = distTop < distBottom;
      const isLeftOrRight = distLeft < distRight;

      // Set the hover background position just beyond the button area based on the hover-out side
      if (isTopOrBottom) {
        hoverBg.style.top = `${posY + (distTop < distBottom ? -10 : 10)}px`;
      } else {
        hoverBg.style.left = `${posX + (distLeft < distRight ? -10 : 10)}px`;
      }

      });
    }
  </script>