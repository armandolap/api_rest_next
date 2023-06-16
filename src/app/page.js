import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center p-24">
        <h1 className='uppercase'>Consumo de una API</h1>
      </main>
      <Footer />
    </>
  )
}
