import {useLottie, LottieOptions} from 'lottie-react';
import heartJSON from '../assets/heart.json';

const Heart = () => {
  const options: LottieOptions = {
    animationData: heartJSON,
    loop: true,
    autoplay: true,
    style: {width: 300, height: 300},
  };

  const {View} = useLottie(options);

  return View;
};

export default Heart;
