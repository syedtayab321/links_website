import React, { useRef, useEffect } from "react";
import { Row, Col, Card, Statistic, Table } from "antd";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, BarController, ArcElement,PieController, Title, Tooltip, Legend,} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, ArcElement, PieController,Title, Tooltip, Legend );


const PerformanceAnalytics = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

useEffect(() => {
  const barCtx = barChartRef.current?.getContext("2d");
  const pieCtx = pieChartRef.current?.getContext("2d");

  if (barCtx) {
    if (barChartInstance.current) {
      barChartInstance.current.destroy();
    }
    barChartInstance.current = new ChartJS(barCtx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales Data",
            data: [120, 190, 300, 500, 200, 300],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
        },
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
      },
    });
  }

  if (pieCtx) {
    if (pieChartInstance.current) {
      pieChartInstance.current.destroy();
    }
    pieChartInstance.current = new ChartJS(pieCtx, {
      type: "pie",
      data: {
        labels: ["Electronics", "Fashion", "Groceries", "Others"],
        datasets: [
          {
            label: "Category Distribution",
            data: [40, 25, 20, 15],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
        },
      },
    });
  }

  return () => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (pieChartInstance.current) pieChartInstance.current.destroy();
  };
}, []);


  const columns = [
    { title: "Month", dataIndex: "month", key: "month" },
    { title: "Sales", dataIndex: "sales", key: "sales" },
    { title: "Revenue", dataIndex: "revenue", key: "revenue" },
  ];

  const data = [
    { key: "1", month: "January", sales: 120, revenue: "$1200" },
    { key: "2", month: "February", sales: 190, revenue: "$1900" },
    { key: "3", month: "March", sales: 300, revenue: "$3000" },
    { key: "4", month: "April", sales: 500, revenue: "$5000" },
    { key: "5", month: "May", sales: 200, revenue: "$2000" },
    { key: "6", month: "June", sales: 300, revenue: "$3000" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Performance Analytics</h2>

      <Row gutter={[16, 16]}>
        {/* Statistics */}
        <Col span={8}>
          <Card>
            <Statistic title="Impressions" value={12543} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Views" value={7563} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Orders" value={132} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        {/* Bar Chart */}
        <Col span={12}>
          <Card title="Sales Data (Bar Chart)">
            <canvas ref={barChartRef}></canvas>
          </Card>
        </Col>

        {/* Pie Chart */}
        <Col span={12}>
          <Card title="Category Distribution (Pie Chart)">
            <canvas ref={pieChartRef}></canvas>
          </Card>
        </Col>
      </Row>

      {/* Table */}
      <Row style={{ marginTop: "20px" }}>
        <Col span={24}>
          <Card title="Sales and Revenue Table">
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PerformanceAnalytics;
