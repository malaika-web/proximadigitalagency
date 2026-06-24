import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import BookCall from './pages/BookCall.jsx';
import NotFound from './pages/NotFound.jsx';

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedLayout() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
        <Route path="/book-call" element={<PageTransition><BookCall /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return <AnimatedLayout />;
}

export default App;
