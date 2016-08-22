this.addEventListener('install', function(event) {
	console.log('Install');
});

this.addEventListener('activate', function(event) {
	console.log('Activate');
});

this.addEventListener('fetch', function(event) {
	console.log('Fetch2', event);
});

this.registration.showNotification('Ура! Я SW5!!!', {body: 'Yahooooo'});