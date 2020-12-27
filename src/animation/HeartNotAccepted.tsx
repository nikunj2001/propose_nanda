import {useLottie, LottieOptions} from 'lottie-react';
import heartBreakJSON from '../assets/heartBreak.json';

const HeartBreak = () => {
  const options: LottieOptions = {
    animationData: heartBreakJSON,
    loop: true,
    autoplay: true,
    style: {width: 300, height: 300},
  };

  const {View} = useLottie(options);

  return View;
};

export default HeartBreak;
