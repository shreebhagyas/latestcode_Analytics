// analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('your-tracking-code');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
