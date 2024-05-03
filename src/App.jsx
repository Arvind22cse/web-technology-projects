import MovieCard from "./components/MovieCard";
import MyNavbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <MyNavbar />

      <main className="p-3">
        <div className="row">
          <div className="col-4">
            <MovieCard title="Hp Laptop" image="https://m.media-amazon.com/images/I/71aBK7v4-BL._AC_UY327_FMwebp_QL65_.jpg" desc="HP Laptop 15s, AMD Ryzen 5 5500U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), eq2223AU" />
          </div>
          <div className="col-4">
            <MovieCard title="Dell Laptop" image="https://m.media-amazon.com/images/I/61JQvK1EbwL._AC_UY327_FMwebp_QL65_.jpg" desc="Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6'' (39.62cm) FHD 120Hz 250 nits, Backlit KB Orange,Win 11 + MSO'21, Dark Shadow Gray, 2.65kg" />
          </div>
          <div className="col-4">
            <MovieCard title="Lenovo" image="https://m.media-amazon.com/images/I/41kIqmz4S3L.jpg" desc="Lenovo V15 AMD Ryzen 3 7320U 15.6'' (39.62cm) FHD 250 Nits Antiglare Thin and Light Laptop (8GB/512GB SSD/Windows 11 Home/Arctic Grey/1.65 Kg), 82YU00W7IN" />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App;