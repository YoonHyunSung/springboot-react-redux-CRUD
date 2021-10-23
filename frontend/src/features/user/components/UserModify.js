import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function UserModify() {
  const history = useHistory()
  const SERVER = 'http://localhost:8080'
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser')); 
  const [modify, setModify] = useState({
    userId: sessionUser.userId,
    userName:sessionUser.userName,
    password:sessionUser.password,
    email:sessionUser.email,
    name:sessionUser.name, 
    regDate: sessionUser.regDate
  })
  const {userId, userName, password, email, name} = modify
  const handleChange = e => {
      const { value, name } = e.target
      setModify({
          ...modify,
          [name] : value
      })
  }
 
  const UserModify = modifyRequest => 
                axios.put(`${SERVER}/users`, JSON.stringify(modifyRequest),{headers})
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'JWT fefege..'
  }
  const handleSubmit = e => {
    e.preventDefault()
    const modifyRequest = {...modify}
    alert(`회원수정 정보: ${JSON.stringify(modifyRequest)}`)
    UserModify(modifyRequest)
    .then(res =>{
        alert('회원 정보 수정 성공')
        localStorage.setItem('sessionUser', JSON.stringify(res.data))
        history.push("/users/detail")
    })
    .catch(err =>{
        localStorage.setItem('sessionUser', JSON.stringify(err.data))
        alert(`회원수정 실패 : ${err}`)
    })

}


return (
  <div>
    <h1>회원 정보 수정</h1>
    <form onSubmit={handleSubmit} method='POST'>
      <ul>
            <li>
                <label>
                    <span>회원번호 : {sessionUser.userId} </span>
                </label>
                
            </li>
            <li>
                <label>
                    <span>아이디 : {sessionUser.userName} </span>
                </label>
                
            </li>
          <li>
              <label>
                  이메일: <input  type="email" id="email" name="email" placeholder={sessionUser.email}
                          value={email}  onChange={handleChange}/>
              </label>
          </li>
          <li>
              <label>
                  비밀번호: <input  type="password" id="password" name="password" 
                            value={password}  placeholder={sessionUser.password} onChange={handleChange}/>
              </label>
          </li>
          <li>
              <label>
                  이름: <input  type="text" id="name" name="name" value={name} onChange={handleChange}/>
                  <input type="hidden" id="regDate" name="" />
              </label>
          </li>
          <li>
              <input type="submit" value="회원정보수정"/>
          </li>
      </ul>
    </form>
  </div>
);
}