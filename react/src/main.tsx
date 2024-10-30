import { StrictMode } from 'react'
import './index.css'
import {createRoot} from "react-dom/client";
import RootLayout from "./RootLayout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RootLayout />
  </StrictMode>,
)
