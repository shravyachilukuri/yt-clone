import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from "react-bootstrap";
import { HomeScreen } from './screens/homescreen/HomeScreen';
import { useState } from 'react';
import Login from "./screens/loginscreen/Login";
import WatchScreen from "./screens/watchscreen/WatchScreen";
import "./_app.scss";
import {Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const Layout = ({children}) => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleSidebar = () => {
    toggleSidebar(!sidebar)
    console.log(sidebar)
  }
  return (
    <>
      <Header handleSidebar={handleSidebar}></Header>
      <div className="app_container">
        <Sidebar sidebar={sidebar}></Sidebar>

        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>

  )
}

function App() {

  const {accessToken, loading} = useSelector(state => state.auth)

  const history = useHistory()

  useEffect(() => {
    if(!loading && !accessToken){
      history.push("/auth")
    }
   
  }, [loading,accessToken,history])

  return (
    
     <Switch>
      <Route exact path="/">
       <Layout>
         <HomeScreen></HomeScreen>
       </Layout>
      </Route>
      <Route path="/auth">
      <Login></Login>
      </Route>
      <Route path="/search">
       <Layout>
      <h1>search</h1>
      </Layout> 
      </Route> 
      <Route path="/watch/:id">
       <Layout>
        <WatchScreen></WatchScreen>
      </Layout> 
      </Route> 
      <Route>
      <Redirect to = "/"></Redirect>
      </Route> 
      </Switch>  
      
  );
}

export default App;
