import './App.css'
import { products } from './data/products'
import Card from './components/ui/Card'

function App() {
  return (
    <div className="app">
      <h1>Ecommerce App</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
