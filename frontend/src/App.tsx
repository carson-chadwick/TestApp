import './App.css'

  const bandNames = [
    {name: "Dire Straits", members:"Mark Knopfler, John Illsley, Pick Withers, Alan Clark, Guy Fletcher", albums: "Brothers in Arms, Making Movies, Love Over Gold"},
    {name: "The Band", members:"Robbie Robertson, Levon Helm, Rick Danko, Garth Hudson, Richard Manuel", albums: "Music from Big Pink, The Band, Stage Fright"},
    {name: "The Velvet Underground", members:"Lou Reed, John Cale, Sterling Morrison, Maureen Tucker, Doug Yule", albums: "The Velvet Underground & Nico, White Light/White Heat, The Velvet Underground"},
    {name: "The Zombies", members:"Rod Argent, Colin Blunstone, Chris White, Hugh Grundy, Paul Atkinson", albums: "Odessey and Oracle, Begin Here, The Zombies"},
  ]

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>
}

function Band({name, members, albums} : {name: string, members: string, albums: string}) {

  return (
    <>
      <img></img>
      <h2>{name}</h2>
      <h2>Members: {members}</h2>
      <h2>Albums: {albums}</h2>
    </>
  );
}

function BandList() {

  return (
    <>
    {
      bandNames.map((band) => (
        <Band {...band} />
      ))
    }
    </>
  );
}

function App() {



  return (
    <>
      <Welcome />
      <BandList />
    </>
  )
}

export default App
