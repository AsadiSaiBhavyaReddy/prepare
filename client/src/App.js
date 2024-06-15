

import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Entry from './components/Entry';
import Details from './components/Details';
import Error from './components/Error';
import Home from './components/Home';
import Detail from './components/Detail';
import Footer from './components/Footer';
import SendMail from './components/SendMail';
import Store from './components/Store';

import Shop from './components/Shop';


function App({store}) {
  function Page(){
    switch(store.getState().NavReducer){
      case "Login":
        return(<div><Login store={store}/></div>);
      case "Registration":
        return(<div><Registration /></div>);
      case "Profile":
        if(localStorage.getItem("role") === "1")
          return(<div><Profile/></div>);
        else
          return(<div><Error/></div>);
      case "Entry":
        if(localStorage.getItem("role") === "1")
          return(<div><Entry/></div>);
        else
          return(<div><Error/></div>);
      case "Details":
        if(localStorage.getItem("role") === "1" || localStorage.getItem("role") === "2")
          return(<div><Details/></div>);
        else
          return(<div><Error/></div>);
      case "Detail":
            if(localStorage.getItem("role") === "1" || localStorage.getItem("role") === "2")
              return(<div><Detail/></div>);
            else
              return(<div><Error/></div>);
      case "Home":
        return(<div><Home/></div>);
      
      case "SendMail":
        return(<div><SendMail/></div>);

      case "Footer":
        return(<div><Footer/></div>);
      case "Shop":
          if(localStorage.getItem("role") === "1")
            return(<div><Shop/></div>);
          else
            return(<div><Error/></div>);
      case "Store":
          if(localStorage.getItem("role") === "1" || localStorage.getItem("role") === "2")
            return(<div><Store/></div>);
          else
            return(<div><Error/></div>);

    }
  }

  return (
    <div className="App">
      <div className="App-body">
        <Appbar store={store}/>
        <center><Page/></center>
     
      </div>
    </div>
  );
} 

export default App;