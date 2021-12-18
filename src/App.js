import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './sections/header/Header';
import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';
import Events from './sections/event_workshop/Events';

function App() {
  return (
    <div>
      <Header />
      <About bgColor="#f3f3f3"/>
      <Technologies />
      <Events bgColor="#f3f3f3" />
    </div>
  );
}

export default App;
