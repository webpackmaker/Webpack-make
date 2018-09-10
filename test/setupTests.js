import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';
import 'whatwg-fetch';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = Enzyme.shallow;
global.mount = Enzyme.mount;
