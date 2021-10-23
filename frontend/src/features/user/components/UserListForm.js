import React from "react";

const UserListForm = ({list}) =>{
    return (<table>
        <thead>
        <tr>
            <th>사용자번호</th>
            <th>사용자아이디</th>
            <th>이름</th>
            <th>이메일</th>
        </tr>
        </thead>
        <tbody>
        {list.map((user)=>(
        <tr>
            <td>{user.userId}</td>
            <td>{user.userName}</td>
            <td>{user.name}</td>
            <td>{user.email}</td></tr>
    ))}
    </tbody>
    </table>)
}
export default UserListForm;