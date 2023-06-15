import Navbar from "../components/Navbar2";
import Product from "../components/Product";
import data from "../data.json"

export default function Shop() {
  return (
    <div>
     <Navbar/>


      <section className='container mx-auto'>
        <h1 className='text-4xl mt-4 text-center'>Our Products</h1>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>

          {data.map(product => <Product product={product} />)}
        
        </div>
      </section>
    </div>
  )
}