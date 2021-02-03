import '@testing-library/jest-dom'; // librería para testing en JavaScript
import Enzyme from 'enzyme'; // librería para testing en ReactJS7
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // adaptador para poder usar Enzyme junto con React 17
import { createSerializer } from 'enzyme-to-json'; // serializador de la libería EnzymeToJSON

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer( { mode: 'deep' } ) );

