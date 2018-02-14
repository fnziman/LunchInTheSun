import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const type = ownProps.location.pathname.slice(1);
  const processForm = (type === 'login') ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    type,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
