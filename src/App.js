import { useState } from "react";
// import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import Cart from './routes/Cart.js'

function App() {
  let [item, setItem] = useState(data)
  let [_click, _setClick] = useState(1)

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="">
        <Container>
          <Navbar.Brand href="#home">amondz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/shop')}}>shop</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/0')}}>detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about')}}>about</Nav.Link>
            {/* <Link to="/" className="link"></Link>
            <Link to="/shop" className="link">shop</Link>
            <Link to="/detail" className="link">detail</Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
              {
                item.map((a, i) => {
                  return(
                    <Card item={item[i]} i={i} key={i}/>
                  )
                })}
            </div>
          </div>
          <button onClick={(e)=>{ e.stopPropagation();
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              let copy = [...item,...결과.data];
              setItem(copy);
            })
            .catch(()=>{
              console.log('실패하였습니다.')
            })
          }}>버튼</button>
          </>
        }/>
        {/* <Route path="/detail" element={<Detail item={item}/>}/> */}
        <Route path="/detail/:id" element={<Detail item={item}/>}/>
        <Route path="/cart" element={ <Cart/> } /> 

        {/* <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버페이지입니다.</div>}></Route>
          <Route path="location" element={<div>위치 정보입니다.</div>}></Route>
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route> */}

        {/* <Route path="*" element={<div>존재하지 않는 페이지입니다.</div>}/> */}
      </Routes>

      
    </div>
  );
}

function Event(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props){
  return (
    <div className="col-md-4">
      <img src={props.item.img} width="80%" />
      <h4>{ props.item.title }</h4>
      <p>{ props.item.price }</p>
    </div>
  )
}

export default App;
