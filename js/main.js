const swiper = new Swiper(".swiper", {
	// =====>>>>> Optional parameters <<=====
	// direction: "vertical",
	// loop: true,

	// =====>>>>>  If we need pagination <<=====
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	effect: "fade", // <<<====== SOME Effects

	// =====>>>>>  If we need AutoPlay <<=====
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	// =====>>>>>  Navigation arrows <<<=====
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },

	//=====>>>>>  And if we need scrollbar <<<<=====
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
