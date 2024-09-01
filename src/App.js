import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <ProductImg />
      <ProductInfo category="HOLIDAY" name="Air Jordan 1 High" />
    </div>
  );
}

function ProductImg() {
  return (
    <div className="Foto">
        <img src="sneaker.png"></img>
      </div>
  );
}


function ProductInfo(props) {
  const {category, name} = props;
  const price = 12000000;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">Air Jordan 1 Tinggi “ Universitas Biru ” terinspirasi oleh jalur warna asli sepatu tanda tangan pertama Michael Jordan
          Rilis awal 2021 oleh Jordan Brand, “ Universitas Biru ” Jordan 1 hadir dalam siluet tinggi-atas yang diinginkan dan merekrut campuran bahan dan warna rasa “ UNC ” untuk desain yang menarik
          Kulit putih full-grain muncul pada panel tengah dan jari kaki berlubang
          University Blue nubuck overlay kulit di kaki depan, lubang tali, kerah, dan tumit kontras dengan dasar putih yang tajam
          Jordan Brand menambahkan Swoosh kulit hitam di kedua sisi dan logo hitam “ Sayap ” ke kerah</p>
      </div>
    </div>
  );
}
export default App;
