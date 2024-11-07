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
				const distLeft = posX;
				const distRight = rect.width - posX;
				const distTop = posY;
				const distBottom = rect.height - posY;

				const isTopOrBottom = distTop < distBottom;
				const isLeftOrRight = distLeft < distRight;

				if (isTopOrBottom) {
					hoverBg.style.top = `${posY + (distTop < distBottom ? -10 : 10)}px`;
				} else {
					hoverBg.style.left = `${posX + (distLeft < distRight ? -10 : 10)}px`;
				}
      });
    }
  </script>