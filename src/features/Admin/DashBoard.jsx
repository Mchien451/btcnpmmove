import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../HOCs/AdminLayout';
import { Stacked } from '../../components/Stacked';
import Pie from '../../components/Pie';
import SparkLine from '../../components/SparkLine';
import LineChart from '../../components/LineChart';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import product9 from '../../data/product9.jpg';
import { Breadcrumb } from 'antd';



const DashBoard = () => {
    return (
        <AdminLayout>
            <Breadcrumb
            >
                Admin / Tổng quan
            </Breadcrumb>
            <Content
            >
                <div className="mb-12">
                    <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
                            {earningData.map((item) => (
                                <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-[#505050] md:w-56  p-4 pt-9 rounded-2xl shadow-lg ">
                                    <button
                                        type="button"
                                        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                                    >
                                        {item.icon}
                                    </button>
                                    <p className="mt-3">
                                        <span className="text-lg font-semibold">{item.amount}</span>
                                        <span className={`text-sm text-${item.pcColor} ml-2`}>
                                            {item.percentage}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex  flex-wrap justify-center">
                        <div>
                            <div
                                className=" rounded-2xl md:w-400 p-4 m-3 bg-white text-black dark:bg-[#505050] dark:text-white shadow-lg"
                            >
                                <div className="flex justify-between items-center ">
                                    <p className="font-semibold  text-2xl">Lợi nhuận </p>
                                    <div>
                                        <p className="text-2xl   font-semibold mt-8">$63,448</p>
                                        <p className="">Doanh thu tháng</p>
                                    </div>
                                </div>

                                <div className="mt-4 ">
                                    <SparkLine id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(243, 155, 54)" />
                                </div>
                            </div>

                            <div className="bg-white dark:text-gray-200 dark:bg-[#505050] rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 shadow-lg">
                                <div>
                                    <p className="text-2xl font-semibold ">$78,126</p>
                                    <p className="text-gray-400">Hoàn vốn trong năm</p>
                                </div>

                                <div className="w-40 rounded-full overflow-hidden">
                                    <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:text-gray-200  m-3 p-4 rounded-2xl md:w-780  dark:bg-[#505050] shadow-lg">
                            <div className="">
                                <p className="font-semibold text-xl">Tổng doanh thu</p>
                            </div>
                            <div className="mt-10 flex gap-6 flex-wrap justify-center"  >
                                <div className=" border-r-1 border-color m-4 pr-10">
                                    <div>
                                        <p>
                                            <span className="text-3xl font-semibold">$93,432</span>
                                            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                                12%
                                            </span>
                                        </p>
                                        <p className="text-gray-400 mt-1">Doanh thu</p>
                                    </div>
                                    <div className="mt-8">
                                        <p className="text-3xl font-semibold">$48,487</p>

                                        <p className="text-gray-400 mt-1">Lãi suất</p>
                                    </div>

                                    <div className="mt-5 rounded overflow-hidden p-1">
                                        <SparkLine id="line-sparkLine" type="Line" height="60px" width="210px" data={SparklineAreaData} />
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            className='bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded'
                                        >Tải File Excel </button>
                                    </div>
                                </div>
                                <div className='p-1 bg-white rounded-md  '>
                                    <Stacked width="320px" height="360px"   />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 m-4 flex-wrap justify-center">
                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-lg  dark:bg-[#505050]">
                            <div className="flex justify-between items-center gap-2">
                                <p className="text-xl font-semibold">Giao dịch gần đây</p>

                            </div>
                            <div className="mt-10 w-72 md:w-400">
                                {recentTransactions.map((item) => (
                                    <div key={item.title} className="flex justify-between mt-4">
                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                style={{
                                                    color: item.iconColor,
                                                    backgroundColor: item.iconBg,
                                                }}
                                                className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                                            >
                                                {item.icon}
                                            </button>
                                            <div>
                                                <p className="text-md font-semibold">{item.title}</p>
                                                <p className="text-sm text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                        <p className={`text-${item.pcColor}`}>{item.amount}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760 shadow-lg  dark:bg-[#505050]">
                            <div className="flex justify-between items-center gap-2 mb-10">
                                <p className="text-xl font-semibold">Tổng quan bán hàng</p>
                                March 2023
                            </div>
                            <div className="md:w-full overflow-hidden p-2 rounded-md bg-white">
                                <LineChart />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 shadow-lg  dark:bg-[#505050]">
                            <div className="flex justify-between">
                                <p className="text-xl font-semibold">Tổng quan tuần trước</p>
                                <button type="button" className="text-xl font-semibold text-gray-500">
                                    ...
                                </button>
                            </div>

                            <div className="mt-10 ">
                                {weeklyStats.map((item) => (
                                    <div key={item.title} className="flex justify-between mt-4 w-full">
                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                style={{ background: item.iconBg }}
                                                className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                            >
                                                {item.icon}
                                            </button>
                                            <div>
                                                <p className="text-md font-semibold">{item.title}</p>
                                                <p className="text-sm text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                        <p className={`text-${item.pcColor}`}>{item.amount}</p>
                                    </div>
                                ))}
                                <div className="mt-4">
                                    <SparkLine id="area-sparkLine" height="120px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                                </div>
                            </div>
                        </div>
                        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 shadow-lg  dark:bg-[#505050]">
                            <div className="flex justify-between">
                                <p className="text-xl font-semibold">Quản lí nhân viên</p>
                                <button type="button" className="text-xl font-semibold text-gray-400">
                                    ...
                                </button>
                            </div>
                            <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
                                Mar 23, 2023
                            </p>

                            <div className="flex gap-4 border-b-1 border-color mt-6">
                                {medicalproBranding.data.map((item) => (
                                    <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                                        <p className="text-xs text-gray-400">{item.title}</p>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-b-1 border-color pb-4 mt-2">
                                <p className="text-md font-semibold mb-2">Teams</p>

                                <div className="flex gap-4">
                                    {medicalproBranding.teams.map((item) => (
                                        <p
                                            key={item.name}
                                            style={{ background: item.color }}
                                            className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                                        >
                                            {item.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-md font-semibold mb-2">Leaders</p>
                                <div className="flex gap-4">
                                    {medicalproBranding.leaders.map((item, index) => (
                                        <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                                <div className="mt-3">
                                    <button
                                        className='bg-orange-500  py-2 px-5 text-white rounded '
                                    >Thành lập Team</button>
                                </div>

                                <p className="text-gray-400 text-sm">12 tin nhắn chưa đọc</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Content>
        </AdminLayout >
    )
}

export default DashBoard