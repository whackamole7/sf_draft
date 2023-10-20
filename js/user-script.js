


window.addEventListener("load", () => {
	const newFaqItems = document.querySelectorAll(".new-faq__item");
	
	Array.from(newFaqItems).forEach(item => {
		const openTrigger = item.querySelector(".new-faq__question");

		openTrigger.addEventListener("click", () => {
			const stateClass = "open";
			if (item.classList.contains(stateClass)) {
				item.classList.remove(stateClass);
			} else {
				item.classList.add(stateClass)
			}
		})
	})
})