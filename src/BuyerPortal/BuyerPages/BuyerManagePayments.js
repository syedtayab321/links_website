import React from "react";
import { Table, Button, Tag, Row, Col, Card, Typography, Space } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, PayCircleOutlined } from "@ant-design/icons";
import "./../css/managePayments.css";
import BuyerNavbar from "../DashboardComponents/BuyerNavbar";

const { Title } = Typography;

const BuyerManagePayments = () => {
  const paymentsData = [
    {
      key: "1",
      paymentId: "PAY12345",
      amount: "$200",
      date: "2024-12-20",
      status: "Pending",
    },
    {
      key: "2",
      paymentId: "PAY12346",
      amount: "$500",
      date: "2024-12-18",
      status: "Completed",
    },
    {
      key: "3",
      paymentId: "PAY12347",
      amount: "$100",
      date: "2024-12-15",
      status: "Failed",
    },
  ];

  const columns = [
    {
      title: "Payment ID",
      dataIndex: "paymentId",
      key: "paymentId",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "Pending" ? "orange" : status === "Completed" ? "green" : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          {record.status === "Pending" && (
            <Button type="primary" icon={<PayCircleOutlined />} onClick={() => handlePayNow(record.paymentId)}>
              Pay Now
            </Button>
          )}
          {record.status === "Failed" && (
            <Button type="default" icon={<CloseCircleOutlined />} onClick={() => handleRetryPayment(record.paymentId)}>
              Retry Payment
            </Button>
          )}
          <Button type="link" onClick={() => handleViewDetails(record.paymentId)}>
            View Details
          </Button>
        </Space>
      ),
    },
  ];

  const handlePayNow = (paymentId) => {
    console.log(`Initiating payment for Payment ID: ${paymentId}`);
  };

  const handleRetryPayment = (paymentId) => {
    console.log(`Retrying payment for Payment ID: ${paymentId}`);
  };

  const handleViewDetails = (paymentId) => {
    console.log(`Viewing details for Payment ID: ${paymentId}`);
  };

  return (
      <>
          <BuyerNavbar/>
          <div className="manage-payments-container">
              <Row gutter={[16, 16]}>
                  <Col span={24}>
                      <Card>
                          <Title level={3}>Manage Payments</Title>
                          <p>View and manage your payments here. You can pay, retry, or view details of each
                              payment.</p>
                      </Card>
                  </Col>

                  <Col span={24}>
                      <Card>
                          <Table
                              columns={columns}
                              dataSource={paymentsData}
                              pagination={false}
                              rowKey="key"
                              bordered
                          />
                      </Card>
                  </Col>
              </Row>
          </div>
      </>
  );
};

export default BuyerManagePayments;
