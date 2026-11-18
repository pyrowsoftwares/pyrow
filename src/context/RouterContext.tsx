import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { soundFX } from '../components/ui/sound-effects';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, scrollToId?: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path && path !== '' ? path : '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path && path !== '' ? path : '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // When path changes, immediately reset scroll to top without fighting user wheel events
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const navigate = (path: string, scrollToId?: string) => {
    soundFX.playClick();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    if (window.location.pathname !== cleanPath) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(cleanPath);
    }

    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
