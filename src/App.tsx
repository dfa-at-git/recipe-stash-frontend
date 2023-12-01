import CardList from './components/CardList/CardList.tsx'
import Nav from './components/Navbar/Navbar.tsx'
import './components/Title/Title.css'
import Title from './components/Title/Title.tsx'


function App() {

  const cardData = [
    { title: 'Card 1', content: 'Content for Card 1', height: 300 },
    { title: 'Card 2', content: 'Content for Card 2', height: 200 },
    { title: 'Card 3', content: 'Content for Card 3', height: 300 },
    { title: 'Card 4', content: 'Content for Card 4', height: 200 },
    { title: 'Card 5', content: 'Content for Card 5', height: 300 },
  ];

  return (
    <>
      <div className="body">
        <Nav />
        <Title />
        <CardList data={cardData} />
      </div>
    </>

  )
}

export default App
