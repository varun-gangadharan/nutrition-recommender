import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Nutrition Recommender</h1>
            <nav>
                <Link to="/mealplan">Go to Meal Plan</Link>
                <Link to="/userprofile">Go to User Profile</Link>
                {/* Add more links as needed */}
            </nav>
        </div>
    );
}
export default Home;