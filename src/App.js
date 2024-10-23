import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <ProductImg />
      <ProductInfo isDiscount="comingsoon" category="HOLIDAY" name="Air Jordan 1 High" />
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

function CheckDiscount(props) {
    const {isDiscount} = props
        if (isDiscount === "yes"){
            return (
                <p>Diskon 50% off.</p>
            );
        } else if (isDiscount === "comingsoon") {
            return (
                <p>Akan ada diskon.</p>
            );
        } else {
            return (
                <p>Belum ada diskon.</p>
            );
        }
}

function ProductInfo(props) {
  const {category, name, isDiscount} = props;
  const price = 12000000;
  const benefit = ["Tidak kusut terkena air","Bahan lebih halus", "Menggunakan material premium"];
  const listBenefit = benefit.map((itemBenefit) =>
  <li>{itemBenefit}</li>
  );

  return (
    <div>
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Price">IDR {price}</p>
            <CheckDiscount isDiscount={isDiscount} />
            <p className="Info">Air Jordan 1 Tinggi “ Universitas Biru ” terinspirasi oleh jalur warna asli sepatu tanda
                tangan pertama Michael Jordan
                Rilis awal 2021 oleh Jordan Brand, “ Universitas Biru ” Jordan 1 hadir dalam siluet tinggi-atas yang
                diinginkan dan merekrut campuran bahan dan warna rasa “ UNC ” untuk desain yang menarik
                Kulit putih full-grain muncul pada panel tengah dan jari kaki berlubang
                University Blue nubuck overlay kulit di kaki depan, lubang tali, kerah, dan tumit kontras dengan dasar
                putih yang tajam
                Jordan Brand menambahkan Swoosh kulit hitam di kedua sisi dan logo hitam “ Sayap ” ke kerah</p>
            <ul>
                {listBenefit}
            </ul>
            {/*<a onClick={TambahCart} href="#">Add to Cart</a>*/}
            <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>

        </div>
    </div>
  );
}

function TambahCart(e) {
    console.log("nambah ke chart.." + e);
}
export default App;
