import { connect } from 'react-redux'
import Technologies from './technologies'

const mapStateToProps = (state) => ({
    technologies: state.aboutUs.technologies
})

const TechnologiesContainer = connect(mapStateToProps, {})(Technologies)

export default TechnologiesContainer