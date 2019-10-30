import {connect} from 'react-redux';
import TimeContainer from './time-container';
import {getTime} from '../../components/time/time-action-creators';

export const mapStateToProps = state => ({ time: state.time });
export const mapDispatchToProps = { getTime };

export default connect(mapStateToProps, mapDispatchToProps)(TimeContainer);
