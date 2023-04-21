import { UploadOutlined } from '@ant-design/icons';
import {
    Breadcrumb,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from 'antd';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import AdminLayout from '../../HOCs/AdminLayout';
import moment from 'moment';
import TextArea from 'antd/es/input/TextArea';
import { addnewSchema } from '../../schemas/AddnewSchema';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailAdmin, updateFilmsAdmin, uploadImage } from './thunk';
import { Content } from 'antd/es/layout/layout';
import { Navigate, NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { editFilmSchema } from '../../schemas/EditFilmsSchema';
const Edit = () => {
    const dispatch = useDispatch()
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const navigate = useNavigate();
    const { movieDetail } = useSelector(state => state.adminReducer);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getMovieDetailAdmin(id))
    }, [])
    const dateFormat = 'DD/MM/YYYY'
    const [imgSrc, setImgSrc] = useState("");
    const formik = useFormik({
        // edit mới dc dùng
        enableReinitialize: true,
        initialValues: {
            maPhim: movieDetail?.maPhim,
            tenPhim: movieDetail?.tenPhim,
            trailer: movieDetail?.trailer,
            moTa: movieDetail?.moTa,
            ngayKhoiChieu: dayjs(movieDetail?.ngayKhoiChieu).format(dateFormat),
            dangChieu: movieDetail?.dangChieu,
            sapChieu: movieDetail?.sapChieu,
            hot: movieDetail?.hot,
            danhGia: movieDetail?.danhGia,
            hinhAnh: null,
            maNhom: movieDetail?.maNhom,
        },
        onSubmit: (values) => {
            console.log('value', values)
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            dispatch(updateFilmsAdmin(formData));
            navigate(-1)
        },
        validationSchema: editFilmSchema
    })

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    //Fri Apr 21 2023 00:00:00 GMT+0700 (Indochina Time) to 21/04/2023
    // const convertDate = (str) => {
    //     let date = new Date(str);
    //     let month = ("0" + (date.getMonth() + 1)).slice(-2);
    //     let day = ("0" + date.getDate()).slice(-2);
    //     //  let hours  = ("0" + date.getHours()).slice(-2)
    //     //  let minutes = ("0" + date.getMinutes()).slice(-2)
    //     return [day, month, date.getFullYear()].join("/");
    // };

    const handleChangeDatePicker = (value) => {
        // console.log(value);
        let date = dayjs(value).$d;
        const newDta = moment(date).format('DD/MM/YYYY')
        formik.setFieldValue("ngayKhoiChieu", newDta);
    };
    const handleChangeSwitch = (name) => value => formik.setFieldValue(name, value);
    const handleChangeFile = async e => {
        // lấy file ra từ event
        let file = e.target.files[0];
        await formik.setFieldValue('hinhAnh', file);

        // tạo đối tượng để đọc file
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            // console.log(e.target.result); // base 64 dùng để load hình
            setImgSrc(e.target.result)
        }
    }
    const handleChangeRadio = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'dangChieu') {
            formik.setFieldValue('dangChieu', true);
            formik.setFieldValue('sapChieu', false);
        } else {
            formik.setFieldValue('dangChieu', false);
            formik.setFieldValue('sapChieu', true);
        }
    }
    return (
        <AdminLayout>
            <Breadcrumb >
                <p>Admin </p>
                <p className='mx-2'>/</p>
                <NavLink className='dark:text-white' to='/admin/films'>Danh sách phim</NavLink>
                <p className='mx-2'>/</p>
                <p>Cập nhật phim</p>
            </Breadcrumb>
            <Content style={{ margin: '0 16px', }}   >
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                    }}
                >
                    <h3 className='text-lg font-bold text-center mb-7'>CẬP NHẬT PHIM</h3>
                    <Form
                        onSubmitCapture={formik.handleSubmit}
                        className='max-w-full ml-6'
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                    >
                        <div className='grid grid-cols-2 w-full ml-6'>
                            <div>
                                <Form.Item label="Tên phim">
                                    <Input name='tenPhim' onChangeCapture={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tenPhim} />
                                    {formik.touched.tenPhim && formik.errors.tenPhim &&
                                        <span className='text-xs text-red-500'>{formik.errors.tenPhim}</span>}
                                </Form.Item>
                                <Form.Item label="Trailer">
                                    <Input name='trailer' onChangeCapture={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.trailer} />
                                    {formik.touched.trailer && formik.errors.trailer &&
                                        <span className='text-xs text-red-500'>{formik.errors.trailer}</span>}
                                </Form.Item>
                                <Form.Item label="Mô tả">
                                    <TextArea
                                        style={{ height: 110 }}
                                        name='moTa' onChangeCapture={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.moTa} />
                                    {formik.touched.moTa && formik.errors.moTa &&
                                        <span className='text-xs text-red-500'>{formik.errors.moTa}</span>}
                                </Form.Item>
                                <Form.Item label="Ngày chiếu" className='mb-3'>
                                    <DatePicker
                                        // disabled the time past 
                                        disabledDate={disabledDate}
                                        onChange={handleChangeDatePicker}
                                        value={dayjs(formik.values.ngayKhoiChieu, dateFormat)}
                                        format={dateFormat}
                                        placeholder={dateFormat}
                                        allowClear={false}
                                    />
                                    <br />
                                    {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu &&
                                        <span className='text-xs text-red-500'>{formik.errors.ngayKhoiChieu}</span>}
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item label="Tình trạng"  >
                                    <Radio.Group onChange={handleChangeRadio} value={formik.values.dangChieu ? 'dangChieu' : 'sapChieu'} >
                                        <Radio value='dangChieu'>Đang chiếu</Radio>
                                        <Radio value='sapChieu'>Sắp chiếu</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Phim Hot" valuePropName="checked" >
                                    <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                                </Form.Item>
                                <Form.Item label="Số sao">
                                    <InputNumber value={formik.values.danhGia} onChange={handleChangeSwitch('danhGia')} min={1} max={10} />
                                </Form.Item>
                                {/* UPLOAD FILE */}
                                <Form.Item label="Hình ảnh">
                                    <label class="custom-file-upload">
                                        <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg" />
                                        <UploadOutlined />  Chọn ảnh
                                    </label>
                                    <br />
                                    {formik.touched.hinhAnh && formik.errors.hinhAnh &&
                                        <span className='text-xs text-red-500'>{formik.errors.hinhAnh}</span>}
                                    <img className='mt-3 rounded' width={100} src={!imgSrc ? movieDetail?.hinhAnh : imgSrc} alt="..." />
                                </Form.Item>
                            </div>
                        </div>
                        {/* ===================== */}
                        <hr className='mb-4' />
                        <div className='text-center'>
                            <button
                                type='submit'
                                className='bg-orange-500 p-2 rounded px-6 text-white hover:bg-orange-600 '
                            >Cập nhật phim</button>
                        </div>

                    </Form>
                </div>
            </Content>
        </AdminLayout>
    );
};
export default Edit;