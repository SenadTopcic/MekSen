import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home/Home.jsx'
import QuizPage from './pages/quiz/QuizPage.jsx';
import NotFound from './pages/notfound/NotFound.jsx';

function App() {
  
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz-page" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default App
