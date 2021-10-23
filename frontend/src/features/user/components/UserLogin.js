import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


export default function UserLogin() {
  const history = useHistory()
  const SERVER = 'http://localhost:8080'
  const [login, setLogin] = useState({})
  const {userName, password} = login
  
  
  const handleChange = e => {
    const {value, name} = e.target
    setLogin({
      ...login,
      [name] : value
    })
    console.log('sfsdf')
  }
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'JWT fefege..'
  }
  
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    const loginRequest = {userName, password}
    alert('>>>>>>>>>>>>>>>>'+JSON.stringify(loginRequest))
    userLogin(loginRequest)
    .then(res => {
      const user = res.data;
      if(user.userName != null){
        alert('로그인 성공, '+JSON.stringify(res.data))
        localStorage.setItem('sessionUser', JSON.stringify(res.data))
        history.push("/users/detail") 
      }else{
        alert('아이디, 비번 오류로 로그인 실패')
        localStorage.setItem('sessionUser', JSON.stringify(res.data))
        document.getElementById('userName').value = ''
        document.getElementById('password').value = ''
      }
    })
    .catch(err => {
      localStorage.setItem('sessionUser', JSON.stringify(err.data))
      alert('로그인 실패' + err)
    })

  }
  const userLogin = loginRequest => {
    alert('##########'+JSON.stringify(loginRequest))
    return axios.post(`${SERVER}/users/login`, JSON.stringify(loginRequest),{headers})
  }
    

  return (
    <form method="POST">
    <ul>
        <li><label for="id">아이디</label>
        <input type="text" id="userName" 
            name='userName' value={userName} onChange={handleChange}/></li>
        <li><label for="pw">비밀번호</label>
        <input type="password" id="password" name="password" onChange={handleChange}/></li>
        <li><input type="button" title="로그인" value="로그인" onClick={handleClick}/></li>
    </ul>
  </form>
  );
}