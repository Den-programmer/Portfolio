import './App.scss'
import Header from './components/Header/headerContainer'
import MainPage from './components/MainContent/mainContentContainer'
import Sidebar from './components/Sidebar/sidebarContainer'
import Footer from './components/Footer/footerContainer'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/MainContent/Home/home'
import About from './components/MainContent/About/about'
import ErrorPage from './components/common/ErrorPage/errorPage'
import Contact from './components/MainContent/Contact/contact'
import Portfolio from './components/MainContent/Portfolio/portfolioContainer'
import ProjectPage from './components/MainContent/ProjectPage/projectPageContainer'

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path={'/Portfolio/project/' + props.currentProjectId} render={() => <div className="dFlexContainer">
          <Sidebar />
          <div className={props.isSidebarOpen ? "MainActive" : "Main"}>
            <Header />
            <MainPage>
              <ProjectPage />
            </MainPage>
            <Footer />
          </div>
        </div>} />
        <Route path='/Portfolio' render={() => <div className="dFlexContainer">
          <Sidebar />
          <div className={props.isSidebarOpen ? "MainActive" : "Main"}>
            <Header />
            <MainPage>
              <Portfolio />
            </MainPage>
            <Footer />
          </div>
        </div>} />
        <Route path='/About' render={() => <div className="dFlexContainer">
          <Sidebar />
          <div className={props.isSidebarOpen ? "MainActive" : "Main"}>
            <MainPage>
              <About />
            </MainPage>
            <Footer />
          </div>
        </div>} />
        <Route path='/Contact' render={() => <div className="dFlexContainer">
          <Sidebar />
          <div className={props.isSidebarOpen ? "MainActive" : "Main"}>
            <MainPage>
              <Contact />
            </MainPage>
          </div>
        </div>} />
        <Route path='/' render={() => <div className="dFlexContainer">
          <Sidebar />
          <div className={props.isSidebarOpen ? "MainActive" : "Main"}>
            <MainPage>
              <Home />
            </MainPage>
          </div>
        </div>} />
        <Route path='*' render={() => <ErrorPage />} />
      </Switch>
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
