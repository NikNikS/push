/**
 * Created by selin on 03.08.16.
 */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/push/sw.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope: ',    registration.scope);
	}).catch(function(err) {
		console.log('ServiceWorker registration failed: ', err);
	});
}

function showNotification() {
	Notification.requestPermission(function(result) {
		if (result === 'granted') {
			navigator.serviceWorker.ready.then(function(registration) {
				registration.showNotification('Vibration Sample', {
					body: 'Buzz! Buzz!',
					vibrate: [200, 100, 200, 100, 200, 100, 200],
					tag: 'vibration-sample'
				});
			});
		}
	});
}

showNotification();