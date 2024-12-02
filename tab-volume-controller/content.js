if (!window.audioControllerInjected) {
    window.audioControllerInjected = true;
  
    const audioCtx = new AudioContext();
    const gainNode = audioCtx.createGain();
  
    const audioElements = document.querySelectorAll("audio, video");
    audioElements.forEach((media) => {
      const source = audioCtx.createMediaElementSource(media);
      source.connect(gainNode).connect(audioCtx.destination);
  
      // Expose a way to control volume
      media.volumeController = (value) => {
        gainNode.gain.value = value;
      };
    });
  }
  