import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="py-24 px-12 lg:px-48 font-latoBold">
      <Navbar />
      {/* we can use mode={'wait'} to wait until animaton ends so starting and ending animations wouldn't overlap */}
      {/* initial={false} does not load animation at the first page load */}
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
