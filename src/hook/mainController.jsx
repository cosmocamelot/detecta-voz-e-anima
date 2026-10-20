import { useState } from "react";

/**
 * @param {Object} config
 * @param {HTMLElement} config.animationElementRef
 * @param {HTMLElement} config.animationImageElementRef
 *
 * @param {string} config.basicAnimationCssClass
 * @param {string} config.basicImageSrc
 *
 * @param {string} config.defaultAnimationCssClass
 * @param {string} config.defaultImageSrc
 */
export default ({ config }) => {
  (async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microfone = audioContext.createMediaStreamSource(stream);

      microfone.connect(analyser);
      analyser.fftSize = 512;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      function verificarAudio() {
        analyser.getByteFrequencyData(dataArray);

        let soma = 0;
        for (let i = 0; i < bufferLength; i++) {
          soma += dataArray[i];
        }
        let media = soma / bufferLength;

        const limiteSensibilidade = 18;

        if (media > limiteSensibilidade) {
          if (config.animationElementRef.current) {
            config.animationElementRef.current.classList.add(config.basicAnimationCssClass);
            config.animationElementRef.current.classList.remove(config.defaultAnimationCssClass);
          }
          if (config.animationImageElementRef.current) {
            config.animationImageElementRef.current.src = config.basicImageSrc;
          }
        } else {
          if (config.animationElementRef.current) {
            config.animationElementRef.current.classList.remove(config.basicAnimationCssClass);
            config.animationElementRef.current.classList.add(config.defaultAnimationCssClass);
          }

          if (config.animationImageElementRef.current) {
            config.animationImageElementRef.current.src = config.defaultImageSrc;
          }
        }

        requestAnimationFrame(verificarAudio);
      }

      verificarAudio();

    } catch (erro) {
      console.error("Erro ao acessar o microfone:", erro);
      console.log("Permissão negada ou microfone não encontrado.");
    }
  })();

  return {};
};
