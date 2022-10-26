import Head from 'next/head';
import { motion as m } from 'framer-motion';
import { container, item } from '../animation';

export default function Home() {
  return (
    <m.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16"
    >
      <Head>
        <title>So what agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className="my-96 p-1 overflow-hidden">
          <m.h1
            animate={{ y: '0%' }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            So what Agency
          </m.h1>
        </div>
        <div className="flex justify-between">
          <m.div variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.h2 class variants={item}>
                Design
              </m.h2>
            </div>
            <div className="overflow-hidden">
              <m.h2 class variants={item}>
                Company
              </m.h2>
            </div>

            <div className="overflow-hidden">
              <m.h2 class variants={item}>
                2022
              </m.h2>
            </div>
          </m.div>
          <div>
            <m.div variants={container} initial="hidden" animate="show">
              <div className="overflow-hidden">
                <m.h3 class variants={item}>
                  Webflow agency
                </m.h3>
              </div>
              <div className="overflow-hidden">
                <m.h3 class variants={item}>
                  Designs to bridge the gap
                </m.h3>
              </div>
              <div className="overflow-hidden">
                <m.h3 class variants={item}>
                  Contact us
                </m.h3>
              </div>
            </m.div>
          </div>
        </div>
      </main>
    </m.div>
  );
}
