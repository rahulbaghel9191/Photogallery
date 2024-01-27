const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
	image.addEventListener('click', () => {
		const modal = document.createElement('div');
		modal.classList.add('modal');
		modal.innerHTML = `
			<div class="modal-content">
				<img src="${image.src}" alt="${image.alt}">
			</div>
		`;
		modal.addEventListener('click', () => {
			modal.remove();
		});
		document.body.appendChild(modal);
	});
});
