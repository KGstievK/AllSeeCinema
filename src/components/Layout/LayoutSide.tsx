import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import scss from './LayoutSide.module.scss'

const LayoutSide = () => {
  return (
    <div className={scss.LayoutSide}>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default LayoutSide