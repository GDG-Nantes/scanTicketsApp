(()=>{

	window.addEventListener('load', ()=>{

		const logElt = document.getElementById('response_log');
		const qrCodeElt = document.querySelector('granite-qrcode-scanner');

		const inputUrl = document.getElementById('input_url');
		const inputImp = document.getElementById('input_imp');
		const inputLane = document.getElementById('input_lane');
		const inputManual = document.getElementById('input_manual');


		const checkBoxUrl = document.getElementById('checkbox-url');
		const checkBoxImp = document.getElementById('checkbox-imp');
		const checkBoxLane = document.getElementById('checkbox-lane');
		const checkBoxManual = document.getElementById('checkbox-manual');
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
		checkBoxManual.addEventListener('change', (evt) =>{
			if (!checkBoxManual.checked){
				document.getElementById('manualArea').style.display = 'none';
				qrCodeElt.style.display = '';
			}else{
				document.getElementById('manualArea').style.display = '';
				qrCodeElt.style.display = 'none';
			}
		});

		inputUrl.value = localStorage['url'] ? localStorage['url'] : 'https://billet.gdgnantes.com/flashbillet.php';
		inputImp.value = localStorage['imp'] ? +localStorage['imp'] : 1;
		inputLane.value = localStorage['lane'] ? localStorage['lane'] : 'accueil';

		function updateLocalStorage(){
			localStorage['url'] = inputUrl.value;
			localStorage['imp'] = inputImp.value;
			localStorage['lane'] = inputLane.value;
		}

		updateLocalStorage();
		let globalUrl = `${inputUrl.value}?imp=${inputImp.value}&lane=${inputLane.value}`;

		function updateInputs(){
			globalUrl = `${inputUrl.value}?imp=${inputImp.value}&lane=${inputLane.value}`;
			document.getElementById('resultUrl').innerHTML = globalUrl;
			updateLocalStorage();
		}
		inputUrl.addEventListener('input', updateInputs);
		inputImp.addEventListener('input', updateInputs);
		inputLane.addEventListener('input', updateInputs);
		updateInputs();

		document.getElementById('manualSend').addEventListener('click', ()=>{
			window.location.href = `${globalUrl}&id=${inputManual.value}`;
		})

		qrCodeElt
		.addEventListener('qrcode-decoded', (evt)=>{
			logElt.innerHTML =  `Scan du billet fait avec succès, code trouvé : ${evt.detail}`;
			if (evt.detail){
				window.location.href = `${globalUrl}&id=${evt.detail}`;
			}
		});

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('./sw.js', {scope : location.pathname}).then(function(reg) {
				console.log('Service Worker Register for scope : %s',reg.scope);
			});
		}

	});
})()