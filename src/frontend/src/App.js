import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MealPlan from './components/MealPlan';
import MealDetail from './components/MealDetail';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mealplan" element={<MealPlan />} />
                <Route path="/meal/:id" element={<MealDetail />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
