import confettiImage from '../src/assets/images/image-confetti.jpg';
import currencyImage from '../src/assets/images/image-currency.jpg';
import planeImage from '../src/assets/images/image-plane.jpg';
import restaurantImage from '../src/assets/images/image-restaurant.jpg';

import budgetingIcon from '../src/assets/images/icon-budgeting.svg';
import apiIcon from '../src/assets/images/icon-api.svg';
import onboardingIcon from '../src/assets/images/icon-onboarding.svg';
import onlineBankingIcon from '../src/assets/images/icon-online.svg';

export const features = [
  {
    id: 'feature1',
    image: onlineBankingIcon,
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    id: 'feature2',
    image: budgetingIcon,
    title: 'Simple Budgeting',
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    id: 'feature3',
    image: onboardingIcon,
    title: 'Fast Onboarding',
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 'feature4',
    image: apiIcon,
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

export const articles = [
  {
    id: 'Article1',
    image: currencyImage,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    contents:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    id: 'Article2',
    image: restaurantImage,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    contents:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
  },
  {
    id: 'Article3',
    image: planeImage,
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    contents:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
  },
  {
    id: 'Article4',
    image: confettiImage,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    contents:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];
