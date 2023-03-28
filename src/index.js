import React from 'react';
import { createRoot } from 'react-dom/client';
import { Formulario} from './hooks/effect/Formulario';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Formulario />);
