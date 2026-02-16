import './App.scss'
import Header from './components/Header/headerContainer'
import MainPage from './components/MainContent/mainContentContainer'
import Sidebar from './components/Sidebar/sidebarContainer'
import Footer from './components/Footer/footerContainer'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/MainContent/Home/home'
import About from './components/MainContent/About/about'
import ErrorPage from './components/common/ErrorPage/errorPage'
import Contact from './components/MainContent/Contact/contact'
import Portfolio from './components/MainContent/Portfolio/portfolioContainer'
import ProjectPage from './components/MainContent/ProjectPage/projectPageContainer'

// Layout component for common structure
const LayoutWithHeader = ({ children, isSidebarOpen }) => (
  <div className="dFlexContainer">
    <Sidebar />
    <div className={isSidebarOpen ? "MainActive" : "Main"}>
      <Header />
      <MainPage>
        {children}
      </MainPage>
      <Footer />
    </div>
  </div>
)

const LayoutWithoutHeader = ({ children, isSidebarOpen }) => (
  <div className="dFlexContainer">
    <Sidebar />
    <div className={isSidebarOpen ? "MainActive" : "Main"}>
      <MainPage>
        {children}
      </MainPage>
    </div>
  </div>
)

const App = (props) => {
  const { isSidebarOpen } = props

  return (
    <div className="App">
      <Routes>
        <Route
          path="/Portfolio/project/:projectId"
          element={<LayoutWithHeader isSidebarOpen={isSidebarOpen}><ProjectPage /></LayoutWithHeader>}
        />
        <Route
          path="/Portfolio"
          element={<LayoutWithHeader isSidebarOpen={isSidebarOpen}><Portfolio /></LayoutWithHeader>}
        />
        <Route
          path="/About"
          element={<LayoutWithoutHeader isSidebarOpen={isSidebarOpen}><About /></LayoutWithoutHeader>}
        />
        <Route
          path="/Contact"
          element={<LayoutWithoutHeader isSidebarOpen={isSidebarOpen}><Contact /></LayoutWithoutHeader>}
        />
        <Route
          path="/"
          element={<LayoutWithoutHeader isSidebarOpen={isSidebarOpen}><Home /></LayoutWithoutHeader>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

const mapStateToProps = (state) => ({
  sidebarWidth: state.sidebar.sidebarWidth,
  isSidebarOpen: state.sidebar.isSidebarOpen,
  currentProjectId: state.portfolio.currentProjectId
})

const AppContainer = connect(mapStateToProps, {})(App)

export default AppContainer
