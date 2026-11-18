import { Footer } from '../../components/Layout/Footer.jsx'
import { Header } from '../../components/Layout/Header.jsx'

export function PageLayout({ children, sidebar }) {
  return (
    <div className="page-layout-demo">
      <Header />
      <div className={`page-layout-content ${sidebar ? 'has-sidebar' : ''}`}>
        <main>{children}</main>
        {sidebar && <aside>{sidebar}</aside>}
      </div>
      <Footer />
    </div>
  )
}
