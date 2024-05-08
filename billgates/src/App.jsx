import './App.css'
import { useState } from "react"
import data from './data.json'

function App() {
  const [totalMoney, setTotalMoney] = useState(100000000000)
  
  let newValue = event.target.value;

  function sellFunc(){
    if(itemInput > 0){
      setItemInput(itemInput - 1)
    }
    inputFunc
  }

  function buyFunc(){
    
    setItemInput(itemInput + 1)
    inputFunc
  }

  
  const inputFunct = (hero) => {
    handleInputChange
    setTotalMoney(totalMoney - (hero.price * value));
  };

  return (
    
    <>
    
    <div className="headerContainer">
        <img src="./img/billgates.jpg" alt="billgates" />
        <h1>Spend Bill Gates' Money</h1>
    </div>
    
    <div className="navbar">
    {totalMoney}
    </div>

    <div className='container'>
        {data.map((hero)=>(
            <div className='heroContainer' key={hero.id}>
                
                <img src={hero.img} alt="" />
                <h3>{hero.name}</h3>
                <div><span className='heroPrice'>${hero.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></div>
                <div className='heroButtonContainer'>
                    <button className='btnHeroSell'onClick={sellFunc}>Sell</button>
                    <input type="number" value={() =>handleInputChange()} onChange={() => inputFunct(hero)}/>
                    <button className='btnHeroBuy' onClick={buyFunc}>Buy</button>  
                </div>
            </div>  
        ))}
      </div>
    </>
  )
}


export default App