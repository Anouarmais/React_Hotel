import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FormularioReserva from './comoponentes/Formulario.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
<div>
<h1>Reserva tu Habitación</h1>
<FormularioReserva />
</div>

</StrictMode>
)
