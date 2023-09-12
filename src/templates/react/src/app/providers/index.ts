import compose from 'compose-function';
import withRouter from "./withRouter";
import withReactquery from './withReactQuery';

export const withHocs = compose(withRouter, withReactquery);