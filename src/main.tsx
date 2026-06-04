import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WishlistProvider } from './context/WishlistContext.tsx';
import { ConceptProvider } from './context/ConceptContext.tsx';
import { LanguageProvider } from './i18n/LanguageContext.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ConceptProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </ConceptProvider>
    </LanguageProvider>
  </StrictMode>,
)
