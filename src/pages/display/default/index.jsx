import { useEffect, useRef } from 'react';
import styles from './style.module.css';

import useMainControllerHook from '../../../hook/mainController'

export default () => {
  const animationElementRef = useRef();
  const animationImageRef = useRef();
  const avatarDefaultAnimationCssClass = styles.avatarDefaultAnimation;
  const avatarBasicAnimationCssClass = styles.avatarBasicAnimation;

  useEffect(() => {
    useMainControllerHook({
      config: {
        animationElementRef: animationElementRef,
        animationImageElementRef: animationImageRef,
        defaultAnimationCssClass: avatarDefaultAnimationCssClass,
        defaultImageSrc: 'images/aurum_normal.png',
        basicAnimationCssClass: avatarBasicAnimationCssClass,
        basicImageSrc: 'images/aurum_falando.png',
      }
    });
  },[]);

  return (
    <figure ref={animationElementRef} className={styles.avatarContainer}>
      <img ref={animationImageRef} width={520} height={720} className={styles.avatarImage} src='images/avatar_silencio.png' alt='' draggable={'false'} />
    </figure>
  );
};
