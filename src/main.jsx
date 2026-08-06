import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initAttribution } from './lib/attribution.js'
import { initCtaTracking } from './lib/track.js'
import './globals.css'

// Capture UTMs / click ids from this landing (or a saved cookie) and
// install a click-time href rewriter so any link to a getdragonsheets.com
// URL carries them through the visit. See src/lib/attribution.js.
initAttribution()

// Fire a GA4/Clarity/Meta `cta_click` event whenever an install CTA (link
// to /install or the Chrome Web Store) is clicked. See src/lib/track.js.
initCtaTracking()

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
