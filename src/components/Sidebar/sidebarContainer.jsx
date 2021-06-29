import { connect } from "react-redux"
import Sidebar from "./sidebar"

const mapStateToProps = (state) => ({
    sidebarWidth: state.sidebar.sidebarWidth
})

const SidebarContainer = connect(mapStateToProps, {})(Sidebar)

export default SidebarContainer