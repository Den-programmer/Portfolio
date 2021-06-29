import { connect } from "react-redux"
import Header from "./header"

const mapStateToProps = (state) => ({
    headerTitle: state.app.headerTitle,
    headerInf: state.app.headerInf
})

const HeaderContainer = connect(mapStateToProps, {})(Header)

export default HeaderContainer