import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { addItem } from './../store.js'


function Detail(props) {
    let {id} = useParams();
    let [_alert, set_Alert] = useState(true)
    let [탭, 탭변경] = useState(0)
    // let [count, setCount] = useState(0)
    let [num, setNum] = useState('')
    let dispatch = useDispatch()

    const found = props.item.find(function(x){
        return x.id == id
    });

    useEffect(()=>{
        setTimeout(()=>{set_Alert(false)},2000)
    },[]);

    useEffect(()=>{
        if(isNaN(num) == true){
            alert('숫자만 입력하세요')
        }
    },[num])

    return(
        <div className="container">
            {
                _alert == true
                ?
                <div className="_alert _alert-warning">
                    2초 이내 구매시 할인
                </div>
                : null
            }
            {/* <button onClick={()=>{ setCount(count+1) }}>버튼</button> */}
            <div className="row">
                <div className="col-md-6">
                    <img src={found.img} width="100%" />
                </div>

            {/* <input onChange={(e)=>{ setNum(e.target.value)}}></input> */}

                <div className="col-md-6">
                    <h4 className="pt-5">{found.title}</h4>
                    <p>{found.content}</p>
                    <p>{found.price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem({id : 1, name : 'Red Knit', count : 1}))
                    }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  onClick={()=>{ 탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭}/>
        </div>
        )
    }
    function TabContent({탭}){
        let [fade, setFade] = useState('')
        useEffect(()=>{
            setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{
            setFade('')
        }
        }, [탭])
        return (
            <div className={'start ' + fade}>
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
            </div>
        )
    }
    

export default Detail;