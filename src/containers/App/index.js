import { connect } from 'react-redux';
import { getNotes, createNote } from '../../actions';
import App from './App';

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  getNotes: () => dispatch(getNotes()),
  createNote: (title, description) => dispatch(createNote(title, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
