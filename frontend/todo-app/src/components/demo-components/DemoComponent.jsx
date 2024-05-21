import FirstComponent from './FirstComponent';
import { FifthComponent } from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import DemoJavaScript from './DemoJavaScript';

export default function DemoComponent() {
    return (
      <div className="App">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        <FifthComponent></FifthComponent>
        <DemoJavaScript></DemoJavaScript>
      </div>
    );
  }