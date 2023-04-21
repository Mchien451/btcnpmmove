import React from "react";
import AdminLayout from "../../../HOCs/AdminLayout";
import "./UserStyle.css";
import { useFormik } from "formik";
import { addNewUser } from "../../../schemas/AddnewUser";
import { useDispatch } from "react-redux";
import { addUser } from "../thunk";
import { Breadcrumb } from "antd"
import { NavLink, useNavigate } from "react-router-dom";

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
      passwordConfirmation: ""
    },
    validationSchema: addNewUser,
    onSubmit: (value) => {
      navigate(-1)
      dispatch(addUser(value));
    }
  });

  return (
    <AdminLayout>
      <Breadcrumb
      >
        <p>Admin </p>
        <p className='mx-2'>/</p>
        <NavLink className='dark:text-white ' to='/admin'>User</NavLink>
        <p className='mx-2'>/</p>
        <p>Thêm phim tài khoản mới</p>
      </Breadcrumb>
      <div className=" flex justify-center dark:bg-[#ccc] myUser"     >

        <form className="bg-white px-10 py-8 my-5" style={{ fontSize: "" }} onSubmit={formik.handleSubmit}>
          <h1 className="mb-3 font-bold text-xl text-center">Thêm Tài Khoản</h1>
          <div className="container">
            <div className="group">
              <input name="taiKhoan" type="text" required style={{ width: "100%" }} onChange={formik.handleChange} />
              <span className="highlight"></span>
              <span className="bar" style={{ width: "100%" }}></span>
              <label className="myStyle">Tài Khoản</label>
              {formik.errors.taiKhoan && formik.touched.taiKhoan && <span className="text-red-500  text-base">{formik.errors.taiKhoan}</span>}
            </div>
            <div className="flex items-center  gap-4">
              <div className="group">
                <input type="password" required name="matKhau" onChange={formik.handleChange} />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="myStyle">Mật Khẩu</label>
                {formik.errors.matKhau && formik.touched.matKhau && <span className="text-red-500  text-base">{formik.errors.matKhau}</span>}
              </div>

              <div className="group">
                <input type="password" required onChange={formik.handleChange} name="passwordConfirmation" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="myStyle">Xát Thực Mật Khẩu</label>
                {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <span className="text-red-500  text-base">{formik.errors.passwordConfirmation}</span>}
              </div>
            </div>
            <div className="group">
              <input type="text" required style={{ width: "100%" }} name="hoTen" onChange={formik.handleChange} />
              <span className="highlight"></span>
              <span className="bar" style={{ width: "100%" }}></span>
              <label className="myStyle">Họ Tên</label>
              {formik.errors.hoTen && formik.touched.hoTen && <span className="text-red-500  text-base">{formik.errors.hoTen}</span>}
            </div>
            <div className="group">
              <input type="text" required style={{ width: "100%" }} name="email" onChange={formik.handleChange} />
              <span className="highlight"></span>
              <span className="bar" style={{ width: "100%" }}></span>
              <label className="myStyle">Email</label>
              {formik.errors.email && formik.touched.email && <span className="text-red-500  text-base">{formik.errors.email}</span>}
            </div>
            <div className="group">
              <input type="number" required style={{ width: "100%" }} name="soDt" onChange={formik.handleChange} />
              <span className="highlight"></span>
              <span className="bar" style={{ width: "100%" }}></span>
              <label className="myStyle">Số Điện Thoại</label>
              {formik.errors.soDt && formik.touched.soDt && <span className="text-red-500  text-base">{formik.errors.soDt}</span>}
            </div>
            <div className="flex items-center  gap-4">
              <div className="group">
                <select style={{ width: 300, padding: "10px 10px 10px 5px" }} name="maLoaiNguoiDung" onChange={formik.handleChange} >
                  <option>Loại Người Dùng</option>
                  <option>Quantri</option>
                  <option>Khachhang</option>
                </select>
                <div
                  style={{ width: 300, height: 1 }}
                  className="bg-black"
                ></div>
                {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && <span className="text-red-500  text-base">{formik.errors.maLoaiNguoiDung}</span>}
              </div>

              <div className="group">
                <select style={{ width: 300, padding: "10px 10px 10px 5px" }} name="maNhom" onChange={formik.handleChange} >
                  <option>Nhóm</option>
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                </select>
                <div
                  style={{ width: 300, height: 1 }}
                  className="bg-black"
                ></div>
                {formik.errors.maNhom && formik.touched.maNhom && <span className="text-red-500  text-base">{formik.errors.maNhom}</span>}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="text-white  bg-orange-500 hover:bg-black duration-500 px-5 py-2 rounded  font-medium">
                Thêm Người Dùng
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Adduser;
