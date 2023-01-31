import './App.css';

import Header  from './components/Header/Headers';
import Footer from './components/Footer/Footers';
import BodyRoutes from './components/Body/BodyRoutes'
import UserPage from './components/User/UserPage';

function App() {
  return (<>
    <Header/>
    <UserPage />
    <BodyRoutes />
    <Footer />
    </>
  )
}

export default App;