import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, addItem  } from './../store.js'
import { changeName, increase } from '../user/userSlice.js'


function Cart(){
    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()

    return(
        <div>
            <button onClick={()=>{dispatch(addItem({id : 1, name : 'red knit', count : 2}))}}>추가</button>
            <button onClick={()=>{dispatch(addItem())}}>추가</button>

            <h6>{state.user.name} 나이{state.user.age}의 장바구니</h6>
            <button onClick={()=>{dispatch(increase(100))}}>age</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                state.cart.map((a, i) => {
                    return(
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(addCount(state.cart[i].id))
                                }}>+</button>
                            </td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;