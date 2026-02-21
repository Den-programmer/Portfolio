import { connect } from "react-redux"
import Portfolio from "./portfolio"
import { setCurrentProjectId } from "../../../redux/reducerPortfolio"
import { setHeaderTitle, setHeaderInf } from "../../../redux/reducerApp"

const mapStateToProps = (state) => ({
    projects: state.portfolio.projects,
    navigation: state.portfolio.navigation,
    isSidebarOpen: state.sidebar.isSidebarOpen
})

const PortfolioContainer = connect(mapStateToProps, { setCurrentProjectId, setHeaderTitle, setHeaderInf })(Portfolio)

export default PortfolioContainer