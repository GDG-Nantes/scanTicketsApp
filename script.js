(()=>{

	window.addEventListener('load', ()=>{

		const logElt = document.getElementById('response_log');
		const qrCodeElt = document.querySelector('granite-qrcode-scanner');

		const inputUrl = document.getElementById('input_url');
		const inputImp = document.getElementById('input_imp');
		const inputLane = document.getElementById('input_lane');


		const checkBoxUrl = document.getElementById('checkbox-url');
		const checkBoxImp = document.getElementById('checkbox-imp');
		const checkBoxLane = document.getElementById('checkbox-lane');
		checkBoxUrl.addEventListener('change', (evt) =>{
			if (!checkBoxUrl.checked){
				inputUrl.setAttribute('disabled', 'true');
			}else{
				inputUrl.removeAttribute('disabled');
			}
		});
		checkBoxImp.addEventListener('change', (evt) =>{
			if (!checkBoxImp.checked){
				inputImp.setAttribute('disabled', 'true');
			}else{
				inputImp.removeAttribute('disabled');
			}
		});
		checkBoxLane.addEventListener('change', (evt) =>{
			if (!checkBoxLane.checked){
				inputLane.setAttribute('disabled', 'true');
			}else{
				inputLane.removeAttribute('disabled');
			}
		});

		let globalUrl = `${inputUrl.value}?imp=${inputImp.value}&lane=${inputLane.value}`;

		function updateInputs(){
			globalUrl = `${inputUrl.value}?imp=${inputImp.value}&lane=${inputLane.value}`;
			document.getElementById('resultUrl').innerHTML = globalUrl;
		}
		inputUrl.addEventListener('input', updateInputs);
		inputImp.addEventListener('input', updateInputs);
		inputLane.addEventListener('input', updateInputs);
		updateInputs();

		qrCodeElt
		.addEventListener('qrcode-decoded', (evt)=>{
			logElt.innerHTML =  `Scan du billet fait avec succès, code trouvé : ${evt.detail}`;
			console.log(evt);
			if (evt.detail){
				fetch(`${globalUrl}&id${evt.detail}`,{
					method: 'GET',
					mode: 'cors'
				})
				.then((result)=>{
					logElt.innerHTML =  `Envoie du billet fait avec succès, code trouvé : ${evt.detail}`;
					console.log('scan submit sucess');
				})
				.catch((error) =>{
					logElt.innerHTML =  `Erreur pendant la saisie du billet`;
					console.error('scan submit error', error);
				})
			}
		});

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('./sw.js', {scope : location.pathname}).then(function(reg) {
				console.log('Service Worker Register for scope : %s',reg.scope);
			});
		}

	});
})()