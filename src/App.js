import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Student from './components/Props.jsx';
import Condition from './components/ConditionRendering.jsx';
import List from './components/List_Rendering.jsx';

function App() {
    const details = {
            name : "sai",
            age : 20,
            student : true

        }
    
    return(
        <>
            <Header />
            <Card />
            <Student detail={details}/>
            <Condition logged={true} username="Siva"/>
            <Condition logged={false} username="Siva"/>
            <List />
            <Footer />
        </>
    );
}

export default App
