import { connect } from 'react-redux';
import App from '../components/App';
import { goAddForm } from '../actions/index';

const mapStateToProps = state => ({
  currentView: state.currentView,
});

const mapDispatchToProps = dispatch => ({
  goAddForm: () => dispatch(goAddForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);