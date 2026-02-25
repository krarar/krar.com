// ==============================
// SERVICE WORKER - دليل الخدمات
// ==============================
const CACHE_NAME = 'dal-khidmat-v2';
const STATIC_CACHE = 'dal-static-v2';
const DYNAMIC_CACHE = 'dal-dynamic-v2';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { mode: 'no-cors' })));
    }).catch(err => console.log('[SW] Cache error:', err))
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - cache strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Firebase requests (always network first)
  if (url.hostname.includes('firebase') || 
      url.hostname.includes('googleapis') ||
      url.hostname.includes('firestore')) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first strategy for static assets
  if (url.hostname.includes('cdnjs') || 
      url.hostname.includes('fonts.gstatic') ||
      url.hostname.includes('fonts.googleapis')) {
    event.respondWith(
      caches.match(request).then(cached => {
        return cached || fetch(request).then(response => {
          const clone = response.clone();
          caches.open(STATIC_CACHE).then(cache => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // Network-first with cache fallback for app pages
  if (url.hostname === self.location.hostname) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request).then(cached => {
            return cached || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // Default: try network then cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// Push notification support
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'دليل الخدمات';
  const options = {
    body: data.body || 'لديك إشعار جديد',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-72.png',
    dir: 'rtl',
    lang: 'ar',
    data: data,
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
