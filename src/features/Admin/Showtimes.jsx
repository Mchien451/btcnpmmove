import { Breadcrumb, DatePicker } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../HOCs/AdminLayout';
import { Form, Select, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { adminService } from '../Admin/services/adminServices'
import { NavLink, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import moment from 'moment';
import { showtimeSchema } from '../../schemas/showtimeSchema';
import Swal from 'sweetalert2';
const Showtimes = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: [],
    });
    const film = JSON.parse(localStorage.getItem('film'))

    const idNumber = +id;
    const formik = useFormik({
        initialValues: {
            maPhim: idNumber,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: 75000,
            maHeThongRap: ""
        },
        onSubmit: async values => {
            console.log('values', values)
            try {
                const res = await adminService.postShowTimes(values);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: `Tạo lịch chiếu thành công`
                })
            }
            catch (err) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: `${err.response.data.content}`
                })
                console.log(err)
            }
        },
        validationSchema: showtimeSchema
    })
    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    useEffect(() => {
        async function callAPI() {
            try {
                const res = await adminService.getInfoTheaterAdmin();
                setState({
                    ...state,
                    heThongRapChieu: res.data.content
                })
            } catch (err) {
                console.log(err)
            }
        }
        callAPI()
    }, [])
    const handleChangeSelectTheater = async (value) => {
        formik.setFieldValue('maHeThongRap', value)
        try {
            const res = await adminService.getInfoCinemaCluster(value);
            setState({
                ...state,
                cumRapChieu: res.data.content
            })

        } catch (err) {
            console.log(err)
        }
    }
    const handleChangeCinemaCluster = (value) => {
        formik.setFieldValue('maRap', value)
    }
    const onChangeDate = (value) => {
        const date2 = moment(value)._i.$d;
        console.log(moment(date2).format('DD/MM/YYYY hh:mm:ss'))
        const date = moment(date2).format('DD/MM/YYYY hh:mm:ss');
        console.log(date)
        formik.setFieldValue('ngayChieuGioChieu', date)
    }
    const onChangeInputNumb = (value) => {
        console.log(value)
        formik.setFieldValue('giaVe', value)
    }
    const onOk = (value) => {
        const date2 = moment(value)._i.$d;
        console.log(moment(date2).format('DD/MM/YYYY hh:mm:ss'))
        const date = moment(date2).format('DD/MM/YYYY hh:mm:ss');
        console.log(date)
        formik.setFieldValue('ngayChieuGioChieu', date)
    }
    const { handleSubmit, values, errors } = formik;
    return (
        <AdminLayout>
            <Breadcrumb   >
                <p>Admin </p>
                <p className='mx-2'>/</p>
                <NavLink className='dark:text-white' to='/admin/films'>Danh sách phim</NavLink>
                <p className='mx-2'>/</p>
                <p>Lịch chiếu phim</p>
            </Breadcrumb>
            <Content >
                <div style={{
                    padding: '12px 50px',
                    minHeight: 360,
                }} >
                    <h3 className='text-lg font-bold text-center mb-7'>TẠO LỊCH CHIẾU</h3>
                    <Form
                        labelCol={{
                            span: 5,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        onSubmitCapture={handleSubmit}
                    >
                        <div className='flex mb-5'>
                            <div className='w-1/4 text-center mr-14'>
                              
                                <img width={140} className='rounded shadow-2xl block mx-auto mb-1' src={film.hinhAnh} alt="1" />
                                <h3 className='font-bold'>{film.tenPhim}</h3>
                            </div>
                            <div className='w-2/4' >
                                <Form.Item
                                    label="Hệ thống rạp"
                                >
                                    <Select
                                        style={{
                                            width: 200
                                        }}
                                        className='admin'
                                        onChange={handleChangeSelectTheater}
                                        options={state.heThongRapChieu?.map(item =>
                                        (
                                            {
                                                label: item.tenHeThongRap,
                                                value: item.maHeThongRap,
                                            }
                                        )
                                        )}
                                    />
                                    <br />
                                    {formik.touched.maHeThongRap && errors.maHeThongRap &&
                                        <span className='text-xs text-red-500'>{errors.maHeThongRap}</span>}
                                </Form.Item>
                                <Form.Item
                                    label="Cụm rạp"
                                >
                                    <Select
                                        style={{
                                            width: 310
                                        }}
                                        className='admin'
                                        onChange={handleChangeCinemaCluster}
                                        options={state.cumRapChieu?.map(item => ({
                                            label: item.tenCumRap,
                                            value: item.maCumRap,
                                        }))}
                                    />
                                    <br />
                                    {formik.touched.maRap && errors.maRap &&
                                        <span className='text-xs text-red-500'>{errors.maRap}</span>}
                                </Form.Item>
                                <Form.Item
                                    label="Ngày chiếu "
                                >
                                    <DatePicker
                                        disabledDate={disabledDate}
                                        placeholder='Chọn ngày và giờ chiếu'
                                        format='DD/MM/YYYY hh:mm:ss'
                                        showTime
                                        onChange={onChangeDate}
                                        onOk={onOk} />
                                    <br />
                                    {formik.touched.ngayChieuGioChieu && errors.ngayChieuGioChieu &&
                                        <span className='text-xs text-red-500'>{errors.ngayChieuGioChieu}</span>}
                                </Form.Item>

                                <Form.Item
                                    label="Giá vé"
                                >
                                    <InputNumber min={75000} max={150000} value={values.giaVe} onChange={onChangeInputNumb} />
                                </Form.Item>
                            </div>
                        </div>
                        <hr className='mb-5' />
                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='px-6 p-2 bg-orange-500 rounded text-white hover:bg-orange-700'
                            >TẠO LỊCH CHIẾU</button>
                        </div>
                    </Form>
                </div>
            </Content>
        </AdminLayout>
    );
};

export default Showtimes;