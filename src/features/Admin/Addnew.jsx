import { UploadOutlined } from '@ant-design/icons';
import {
    Breadcrumb,
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import AdminLayout from '../../HOCs/AdminLayout';
import moment from 'moment';
import TextArea from 'antd/es/input/TextArea';
import { addnewSchema } from '../../schemas/AddnewSchema';
import { useDispatch } from 'react-redux';
import { uploadImage } from './thunk';
import { Content } from 'antd/es/layout/layout';
import { NavLink, useNavigate } from 'react-router-dom';

const Addnew = () => {
    const navigate = useNavigate();
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const dispatch = useDispatch()
    const [imgSrc, setImgSrc] = useState("");
    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: null,
            maNhom: ""
        },
        onSubmit: (values) => {
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    // đối với hình ảnh thì có 3 đối số
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            // console.log(formData.get('File'));
            dispatch(uploadImage(formData));
            navigate('/admin/films')
        },
        validationSchema: addnewSchema
    })
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }
    const handleChangeSwitch = (name) => value => {
        return formik.setFieldValue(name, value)
    };
    const handleChangeFile = e => {
        // lấy file ra từ event
        let file = e.target.files[0];
        formik.setFieldValue('hinhAnh', file);

        // tạo đối tượng để đọc file
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            // console.log(e.target.result); // base 64 dùng để load hình
            setImgSrc(e.target.result)
        }
    }
    const handleChangeSelect = (maNhom) => {
        console.log(maNhom)
        formik.setFieldValue('maNhom', maNhom)
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
    function disabledDate(current) {
        // Can not select days before today
        return current && current < moment().startOf('day');
    }
    return (
        <AdminLayout>
            <Breadcrumb
            >
                <p>Admin </p>
                <p className='mx-2'>/</p>
                <NavLink className='dark:text-white ' to='/admin/films'>Danh sách phim</NavLink>
                <p className='mx-2'>/</p>
                <p>Thêm phim mới</p>
            </Breadcrumb>
            <Content style={{ margin: '0 16px', }}   >
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                    }}
                >
                    <h3 className='text-lg font-bold text-center mb-7'>THÊM PHIM MỚI</h3>
                    <Form
                        onSubmitCapture={formik.handleSubmit}
                        className='max-w-full ml-6'
                        labelCol={{
                            span: 6,
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
                                    <Input name='tenPhim' onChangeCapture={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.tenPhim && formik.errors.tenPhim &&
                                        <span className='text-xs text-red-500'>{formik.errors.tenPhim}</span>}
                                </Form.Item>
                                <Form.Item label="Trailer">
                                    <Input name='trailer' onChangeCapture={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.trailer && formik.errors.trailer &&
                                        <span className='text-xs text-red-500'>{formik.errors.trailer}</span>}
                                </Form.Item>
                                <Form.Item label="Mô tả">
                                    <TextArea
                                        style={{ height: 110 }}
                                        name='moTa' onChangeCapture={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.moTa && formik.errors.moTa &&
                                        <span className='text-xs text-red-500'>{formik.errors.moTa}</span>}
                                </Form.Item>
                                <Form.Item label="Mã nhóm">
                                    <Select name='maNhom' className='admin' value={formik.values.maNhom} onChange={handleChangeSelect}
                                        width={100}
                                        options={[
                                            {
                                                value: 'GP01',
                                                label: 'GP01',
                                            },
                                            {
                                                value: 'GP02',
                                                label: 'GP02',
                                            },
                                            {
                                                value: 'GP03',
                                                label: 'GP03',
                                            },
                                            {
                                                value: 'GP04',
                                                label: 'GP04',
                                            },
                                        ]} />
                                    {formik.touched.maNhom && formik.errors.maNhom &&
                                        <span className='text-xs text-red-500'>{formik.errors.maNhom}</span>}
                                </Form.Item>

                            </div>
                            <div>
                                {/* DD/MM/YYYY */}
                                <Form.Item label="Ngày chiếu" className='mb-3'>
                                    <DatePicker disabledDate={disabledDate} format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} placeholder='DD/MM/YYYY' />
                                    <br />
                                    {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu &&
                                        <span className='text-xs text-red-500'>{formik.errors.ngayKhoiChieu}</span>}
                                </Form.Item>
                                {/* TÌNH TRẠNG */}
                                <Form.Item label="Tình trạng" >
                                    <Radio.Group onChange={handleChangeRadio}  >
                                        <Radio value='dangChieu'>Đang chiếu</Radio>
                                        <Radio value='sapChieu'>Sắp chiếu</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Phim Hot" valuePropName="checked" >
                                    <Switch onChange={handleChangeSwitch('hot')} />
                                </Form.Item>
                                {/* Star */}
                                <Form.Item label="Số sao">
                                    <InputNumber defaultValue={5} onChange={handleChangeSwitch('danhGia')} min={1} max={10} />
                                </Form.Item>
                                {/* UPLOAD FILE */}
                                <Form.Item label="Hình ảnh">
                                    <label class="custom-file-upload">
                                        <input type="file" onChange={handleChangeFile} />
                                        <UploadOutlined />  Chọn ảnh
                                    </label>
                                    <br />
                                    {formik.touched.hinhAnh && formik.errors.hinhAnh &&
                                        <span className='text-xs text-red-500'>{formik.errors.hinhAnh}</span>}
                                    {imgSrc && <img className='mt-3 rounded' width={100} src={imgSrc} alt=".."
                                        accept="image/png, image/jpeg"
                                    />}
                                </Form.Item>

                            </div>
                        </div>
                        {/* ===================== */}
                        <hr className='mb-4' />
                        <div className='text-center'>
                            <button
                                type='submit'
                                className='bg-orange-500 p-2 rounded px-6 text-white hover:bg-orange-600 '
                            >Thêm phim</button>
                        </div>

                    </Form>
                </div>
            </Content>
        </AdminLayout>
    );
};
export default Addnew;