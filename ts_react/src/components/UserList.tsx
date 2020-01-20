import React, { ReactElement, useState, useEffect } from 'react';
import { Layout, Menu, Table, message, Button } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import * as types from '../store/action-types';
import { User, UserListResponse } from '../typings/api';
import request, { AxiosResponse } from '../api/request';
import { CombinedState } from '../store/reducers';
import { UserState } from '../store/reducers/user';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

let mapStateToProps = (state: CombinedState): UserState => state.user;
let mapDispatchToProps = (dispatch: Dispatch) => (
    {
        storeUsers(list: Array<User>) {
            dispatch({ type: types.SET_USER_LIST, payload: list })
        }
    }
)
type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;;
const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        key: '_id',
        render: (val: string, record: User) => {
            return (
                <Link to={`/user/detail/${record._id}`}>{record.username}</Link>
            )
        }
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
    }
]

function UserList(props: Props) {
    let limit = 5;
    let [offset, setOffset] = useState(0);
    let [users, setUsers] = useState<Array<User>>(props.list);
    useEffect(() => {
        if (users.length == 0 || offset == 0) {
            (async function () {
                let response: AxiosResponse<UserListResponse> = await request.get<UserListResponse,
                    AxiosResponse<UserListResponse>>(`/api/users?limit=${limit}&offset=${offset}`);
                let { data, code } = response.data;
                if (code == 0) {
                    setUsers(data);//data users
                    setOffset(offset + data.length);
                    props.storeUsers(data);
                } else {
                    message.error('获取用户列表失败');
                }
            })()
        }
    }, [offset]);
    const refresh = () => {
        setOffset(0);
    }
    return (
        <>
            <Button onClick={refresh}>刷新</Button>
            <Table columns={columns} dataSource={users} rowKey={(row: User) => row._id} />
        </>
    )
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(UserList);
