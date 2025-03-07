import { Navbar } from './components/Navbar';
import ProjectRoutes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <ProjectRoutes />
        </Router>
    );
}

export default App;
