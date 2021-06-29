import './App.scss'
import Header from './components/Header/headerContainer'
import MainPage from './components/MainContent/mainContentContainer'
import Sidebar from './components/Sidebar/sidebarContainer'
import Footer from './components/Footer/footerContainer'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' render={() => <div className="dFlexContainer">
          <Sidebar />
          <div style={{ marginLeft: props.sidebarWidth + 'px' }} className="Main">
            <MainPage />
          </div>
        </div>} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => ({
  sidebarWidth: state.sidebar.sidebarWidth
})

const AppContainer = connect(mapStateToProps, {})(App)

export default AppContainer
