/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
      frame:"none",
      id: 'mainWindow',
      innerBounds: 
        {
          width: 800, 
          height: 600,
          maxWidth: 800,
          maxHeight: 600,
          minWidth: 800,
          minHeight: 600
        }
    }
  );
});
