import { connect } from "react-redux"
import Sidebar from "./sidebar"
import { setSidebarIsOpenStatus, setNavLinkChosenStatus } from '../../redux/reducerSidebar'

const mapStateToProps = (state) => ({
    sidebarWidth: state.sidebar.sidebarWidth,
    isSidebarOpen: state.sidebar.isSidebarOpen,
    navigationLinks: state.sidebar.navigationLinks
})

const SidebarContainer = connect(mapStateToProps, { setSidebarIsOpenStatus, setNavLinkChosenStatus })(Sidebar)

export default SidebarContainer