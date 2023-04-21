import { Breadcrumb, Table, Input, Tooltip, Select, Space, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import AdminLayout from '../../HOCs/AdminLayout';
import { listUser, searchUser } from './thunk';
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons"
import { adminService } from './services/adminServices';
import Swal from 'sweetalert2';
import Highlighter from 'react-highlight-words';

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUser("GP01"))
  }, [dispatch]);
  const navigate = useNavigate();
  const userItemList = useSelector(state => state.adminReducer.ListUser)

  const [group, setgroup] = useState("GP01")
  const deleteUser = (id) => {
    Swal.fire({
      title: 'Bạn có Chắc muốn xóa',
      text: "Sẽ không thể khôi phục sau khi xóa",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa !'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await adminService.deleteUer(id)
          dispatch(listUser(group))
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa Thành Công !',
            showConfirmButton: false,
            timer: 1500
          })

        } catch (err) {
          if (err.response.status === 500) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: err.response.data.content,
              showConfirmButton: true,
            })
          }
          console.log(err);
        }

      }
    })

  }
  const searchListUser = (e) => {
    const key = e.target.value
    !key ? dispatch(listUser(group)) : dispatch(searchUser(key, group))
  }
  const handleChangeSelect = (value) => {
    dispatch(listUser(value))
    setgroup(value);
    // console.log(value)
  }
  const goToEditUser = (id) => {
    navigate("/admin/user/edit/" + id + "/" + group)
  }

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  // ========
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Nhập dữ liệu cần tìm`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <button
            type="button"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
            className='bg-orange-500 text-white rounded hover:bg-orange-600'
          >
            Tìm
          </button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Xóa
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Đóng
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  // ========= 
  const column = [{
    title: "Tài Khoản",
    dataIndex: 'taiKhoan',
    with: "200px",
    ...getColumnSearchProps('taiKhoan'),
  },
  {
    title: "Mật Khẩu",
    dataIndex: 'matKhau'
  },
  {
    title: "Họ Tên",
    dataIndex: 'hoTen',
    ...getColumnSearchProps('hoTen'),
  },
  {
    title: "Email",
    dataIndex: 'email',
    ...getColumnSearchProps('email'),
  },
  {
    title: "Số Điện Thoại",
    dataIndex: 'SoDt',
    ...getColumnSearchProps('SoDt'),
  },
  {
    title: "Loại Người Dùng",
    dataIndex: 'maLoaiNguoiDung',
    ...getColumnSearchProps('maLoaiNguoiDung'),
  },
  {
    title: "Hành Động",
    dataIndex: 'Hanhdong'
  },
  ]
  return (
    <AdminLayout>
      <Breadcrumb
      >
        Admin / User
      </Breadcrumb>
      <Content

      >

        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
          className='myUser'
        >
          <h2 className='font-bold text-2xl mb-1 '>Tài Khoản Người Dùng</h2>
          <div className='flex justify-center items-center my-4'>

            <NavLink to="/admin/user/addnew">
              <button className='border-solid border-2  border-orange-500  text-orange-500 px-3 py-1 hover:bg-black hover:text-white duration-500 hover:border-black  mr-4 rounded-lg'>
                Thêm tài khoản
              </button>
            </NavLink>
            <div className='flex'>
              <input className='p-0 pl-3 py-1 rounded-tl-md rounded-bl-md text-sm' style={{ border: "1px solid #999" }} placeholder='Nhập từ khóa tìm kiếm' onChange={searchListUser} />

              <button className='text-base bg-slate-400 text-white px-3 rounded-tr-md rounded-br-md'><SearchOutlined /></button>
            </div>
            <Select
              className='admin w-40 ml-3'
              defaultValue="GP01"
              onChange={handleChangeSelect}
              options={[
                {
                  value: 'GP01',
                  label: 'Mã nhóm GP01',
                },
                {
                  value: 'GP02',
                  label: 'Mã nhóm GP02',
                },
                {
                  value: 'GP03',
                  label: 'Mã nhóm GP03',
                },
                {
                  value: 'GP04',
                  label: 'Mã nhóm GP04',
                },
              ]}
            />
          </div>

          <Table columns={column} scroll={{ y: 400 }} dataSource={userItemList?.map((items) => ({
            key: items.taiKhoan,
            taiKhoan: items.taiKhoan,
            matKhau: <Input.Password value={items.matKhau} />,
            hoTen: items.hoTen,
            email: items.email,
            SoDt: items.soDT,
            maLoaiNguoiDung: items.maLoaiNguoiDung,
            Hanhdong: <>
              <Tooltip title="Edit" color="green">
                <button className='text-green-500 text-xl ml-4' onClick={() => { goToEditUser(items.taiKhoan) }}><EditOutlined /></button>
              </Tooltip>
              <Tooltip title="Delete" color="red">
                <button className='text-red-500 text-xl ml-4' onClick={() => { deleteUser(items.taiKhoan) }}><DeleteOutlined /></button>
              </Tooltip>
            </>

          }))} />
        </div>
      </Content>
    </AdminLayout>
  );
};

export default User;