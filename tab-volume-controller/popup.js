chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    const volumeControls = document.getElementById('volume-controls');
  
    const input = document.createElement('input');
    input.type = 'range';
    input.min = 0;
    input.max = 1;
    input.step = 0.01;
    input.addEventListener('input', (event) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (volume) => {
          document.querySelectorAll("audio, video").forEach(media => {
            if (media.volumeController) {
              media.volumeController(volume);
            }
          });
        },
        args: [parseFloat(event.target.value)],
      });
    });
  
    volumeControls.appendChild(input);
  });
  