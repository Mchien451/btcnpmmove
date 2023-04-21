import React, { useEffect } from "react";
import AdminLayout from "../../../HOCs/AdminLayout";
import "./UserStyle.css";
import { useFormik } from "formik";
import { EdituserSchemas } from "../../../schemas/EditUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adminService } from "../services/adminServices";
import { GET_INFO_USER } from "../constants";
import { upLoadUser } from "../thunk";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const Edituser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const infoUser = useSelector((state) => state.adminReducer.infoUser2);
  const param = useParams();
  const { id, GP } = param;
  console.log(param);
  useEffect(() => {
    const loadUer = async () => {
      try {
        const res = await adminService.searchUser(id, GP);
        dispatch({
          type: GET_INFO_USER,
          payload: res.data.content[0],
        });

      } catch (err) {
        console.log(err);
      }
    };
    loadUer();
  }, [dispatch]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: infoUser?.taiKhoan,
      matKhau: infoUser?.matKhau,
      email: infoUser?.email,
      soDt: infoUser?.soDT,
      maNhom: GP,
      maLoaiNguoiDung: infoUser?.maLoaiNguoiDung,
      hoTen: infoUser?.hoTen,
    },
    validationSchema: EdituserSchemas,
    onSubmit: async (value) => {
      await navigate(-1);
      await dispatch(upLoadUser(value));
    },
  });
  return (
    <AdminLayout>
      <Breadcrumb
      >
        <p>Admin </p>
        <p className='mx-2'>/</p>
        <NavLink className='dark:text-white ' to='/admin'>User</NavLink>
        <p className='mx-2'>/</p>
        <p>Cập nhập tài khoản</p>
      </Breadcrumb>
      <div className=" flex justify-center dark:bg-[#ccc] myUser"  >
        <form
          className="bg-white px-10 py-8 my-5"
          style={{ fontSize: "" }}
          onSubmit={formik.handleSubmit}
        >
          <h1 className="mb-3 font-bold text-xl text-center">
            Cập nhập Tài Khoản
          </h1>
          <div className="container">
            <div className="group">
              <h2 className="mb-1 text-start" style={{ color: "#5264AE" }}>
                Tài Khoản
              </h2>
              <input
                name="taiKhoan"
                type="text"
                required
                style={{ width: "100%" }}
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
                disabled={true}
              />
              <span className="highlight"></span>
              <span className="bar" style={{ width: "100%" }}></span>
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <span className="text-red-500  text-base">
                  {formik.errors.taiKhoan}
                </span>
              )}
            </div>
            <div className="">
              <div className="group">
                <input
                  type="password"
                  style={{ width: "100%" }}
                  required
                  name="matKhau"
                  onChange={formik.handleChange}
                  value={formik.values.matKhau}
                />
                <span className="highlight"></span>
                <span className="bar" style={{ width: "100%" }}></span>
                <label className="myStyle">Mật Khẩu</label>
                {formik.errors.matKhau && formik.touched.matKhau && (
                  <span className="text-red-500  text-base">
                    {formik.errors.matKhau}
                  </span>
                )}
              </div>
            </div>
            <div className="group">
              <input
                type="text"
                required
                style={{ width: "100%" }}
                name="hoTen"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
              />
              <span className="highlight"></span>
              <span className="bar" style={{ width: "100%" }}></span>
              <label className="myStyle">Họ Tên</label>
              {formik.errors.hoTen && formik.touched.hoTen && (
                <span className="text-red-500  text-base">
                  {formik.errors.hoTen}
                </span>
              )}
            </div>
            <div className="flex gap-4">
              <div className="group" style={{ width: 300 }}>
                <input
                  type="text"
                  required
                  style={{ width: "100%" }}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <span className="highlight"></span>
                <span className="bar" style={{ width: "100%" }}></span>
                <label className="myStyle">Email</label>
                {formik.errors.email && formik.touched.email && (
                  <span className="text-red-500  text-base">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              <div className="group">
                <input
                  type="number"
                  required
                  style={{ width: "100%" }}
                  name="soDt"
                  onChange={formik.handleChange}
                  value={formik.values.soDt}
                />
                <span className="highlight"></span>
                <span className="bar" style={{ width: "100%" }}></span>
                <label className="myStyle">Số Điện Thoại</label>
                {formik.errors.soDt && formik.touched.soDt && (
                  <span className="text-red-500  text-base">
                    {formik.errors.soDt}
                  </span>
                )}
              </div>
            </div>

            <div className="group">
              <select
                style={{ width: "100%", padding: "10px 10px 10px 5px" }}
                name="maLoaiNguoiDung"
                onChange={formik.handleChange}
              // value={formik.values.maLoaiNguoiDung ? "QuanTri":"KhachHang"}
              >
                <option>Loại Người Dùng</option>
                <option value="QuanTri">Quantri</option>
                <option value="KhachHang">Khachhang</option>
              </select>
              <div
                style={{ width: "100%", height: 1 }}
                className="bg-black"
              ></div>
              {formik.errors.maLoaiNguoiDung &&
                formik.touched.maLoaiNguoiDung && (
                  <span className="text-red-500  text-base">
                    {formik.errors.maLoaiNguoiDung}
                  </span>
                )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white  bg-orange-500 hover:bg-black duration-500 px-5 py-2 rounded  font-medium"
              >
                Cập Nhập
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edituser;
