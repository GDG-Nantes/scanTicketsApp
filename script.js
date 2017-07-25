(()=>{

	window.addEventListener('load', ()=>{

		const logElt = document.getElementById('response_log');
		const qrCodeElt = document.querySelector('granite-qrcode-scanner');

		qrCodeElt
		.addEventListener('qrcode-decoded', (evt)=>{
			logElt.innerHTML =  `Scan du billet fait avec succès, code trouvé : ${evt.detail}`;
			console.log(evt);
			if (evt.detail){
				fetch(`http://billet.gdgnantes.com/flashbillet.php?imp=1&lane=accueil&id${evt.detail}`,{
					method: 'GET'
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
	});
})()