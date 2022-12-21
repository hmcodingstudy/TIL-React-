import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';


function Detail(props) {

    let {id} = useParams();
    const found = props.item.find(function(x){
        return x.id == id
    });

    // let [count, setCount] = useState(0)
    let [_alert, set_Alert] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{set_Alert(false)},2000)
    },[]);

    let [num, setNum] = useState('')
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

            <input onChange={(e)=>{ setNum(e.target.value)}}></input>

                <div className="col-md-6">
                    <h4 className="pt-5">{found.title}</h4>
                    <p>{found.content}</p>
                    <p>{found.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
        )
    }

export default Detail;