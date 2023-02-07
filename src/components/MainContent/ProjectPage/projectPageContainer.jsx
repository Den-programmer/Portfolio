import { connect } from "react-redux"
import ProjectPage from "./projectPage"

const mapStateToProps = (state) => ({
    projects: state.portfolio.projects,
    currentProjectId: state.portfolio.currentProjectId
})

const ProjectPageContainer = connect(mapStateToProps, {})(ProjectPage)

export default ProjectPageContainer