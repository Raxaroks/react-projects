import '@testing-library/jest-dom'; // importamos la librería de testing para Javascript
import Enzyme from 'enzyme'; // importamos Enzyme, una librería de testing para React
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';  // importamos el adaptador de Enzyme para React 17
import { createSerializer } from 'enzyme-to-json'; // importamos enzyme-to-json

Enzyme.configure({ adapter: new Adapter() }); // se configura el adaptador
expect.addSnapshotSerializer( createSerializer({mode: 'deep'}) );