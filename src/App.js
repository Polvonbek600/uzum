import logo from './logo.png';
import ka from './ka.png'
import yulduz from './yulduz.png';
import 'remixicon/fonts/remixicon.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png"  alt="logo" />

        <button class="btn1" ><img src="ka.png"  alt="logo" /> Katalog</button>

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
            <div class="mahsulotlar">
             <div class="mahsulotlar2">
              <img class="img-sichqon" src="sichqon.png" alt=""/>
              
              <h5>224 779   <i class="ri-bank-card-fill"></i></h5>
              <p class="p1">236 610</p>
              <p class="p2">16 929 so'm/oy</p>
              <p class="p3" >O'yin simsiz sichqonchasi 2e GAMING MG355 WL, og'irligi 59g, 6 tugma, </p>
              <p class="p4"><i class="ri-star-fill"></i> <p class="p5">4.7(171 ta sharhlar) </p> </p>
              <button class="btn7">Savatga</button>
             </div>

             <div class="mahsulotlar3">
              <img class="img-sichqon" src="gt30.png" alt=""/>
              
              <h5>4 975 680   <i class="ri-bank-card-fill"></i></h5>
              <p class="p41">5 183 000</p>
              <p class="p02">367 129 so'm/oy</p>
              <p class="p3" >Infinix GT 30 Pro 5G smartfoni, 12+12/256GB, AMOLED 144HZ, </p>
              <p class="p4"><i class="ri-star-fill"></i> <p class="p5">5.0(4 ta sharhlar) </p> </p>
              <button class="btn7">Savatga</button>
             </div>

             <div class="mahsulotlar4">
              <img class="img-sichqon" src="key.png" alt=""/>
              
              <h5>483 550  <i class="ri-bank-card-fill"></i></h5>
              <p class="p31">509 000</p>
              <p class="p12">36 054 so'm/oy</p>
              <p class="p3" >Ajazz ak820 mexanik klaviaturasi, yoritilgan ko'k / RGB</p>
              <p class="p4"><i class="ri-star-fill"></i> <p class="p5">4.5(30 ta sharhlar) </p> </p>
              <button class="btn7">Savatga</button>
             </div>

             <div class="mahsulotlar5">
              <img class="img-sichqon" src="noushnik.png" alt=""/>
              
              <h5>141 550   <i class="ri-bank-card-fill"></i></h5>
              <p class="p21">149 000</p>
              <p class="p22">10 554 so'm/oy</p>
              <p class="p3" >O'yin minigarnituralari simli 2e Gaming hg300 LED 2e-hg300bk, mikrofon va </p>
              <p class="p4"><i class="ri-star-fill"></i> <p class="p5">4.5(200 ta sharhlar) </p> </p>
              <button class="btn7">Savatga</button>
             </div>
            </div>
           </main>
      </header>
    </div> 
  );
}

export default App;
