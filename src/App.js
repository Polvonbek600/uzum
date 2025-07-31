import logo from './logo.png';
import katalog from'./katalog.png';
import yulduz from './yulduz.png';
// import 'remixicon/fonts/remixicon.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png"  alt="logo" />
        <button class="btn1" ><img class="katalog" src="katalog.png"  alt="katalog" /></button>
         <input type="search" name="qidirish" id="qidirish" placeholder="Mahsulotlar va turkumlar izlash"></input>
          <button class="btn2" ><i class="ri-search-line"></i></button>
          <button class= "btn3" ><i class="ri-user-3-line"></i> Kirish</button>
          <button class= "btn4" ><i class="ri-heart-line"></i> Saralangan</button>
           <button class= "btn5" ><i class="ri-shopping-bag-line"></i> Savat</button> 
           <main>
            <br></br>
            <img class="imgy" src="yulduz.png"  alt="yulduz" /> <b>Hafta tovarlari</b>
           <ul>
            <li><a href="">Elektronika</a></li>
            <li><a href="">Maishiy texnika</a></li>
            <li><a href="">Kiyimlar</a></li>
            <li><a href="">Poyabzallar</a></li>
            <li><a href="">Aksessuarlar</a></li>
            <li><a href="">Go'zallik va parvaris</a></li>
            <li><a href=""> Salomatlik</a></li>
            <li><a href="">Uy-ro'zg'or buyumlari</a></li>
            <li><a href="">Qurilish va ta'mirlash</a></li>
            <li><a href="">Yana<i class="ri-arrow-down-s-line"></i></a></li>
          </ul>
           
           </main>
      </header>
    </div>
  );
}

export default App;
