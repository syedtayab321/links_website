import React from "react";
import { Row, Col, Card, Table, Progress, Button, Divider, Typography } from "antd";
import { FileTextOutlined, CheckCircleOutlined, HourglassOutlined } from "@ant-design/icons";
import "./../css/buyerorder.css";
import BuyerNavbar from "../DashboardComponents/BuyerNavbar";

const { Title } = Typography;

const BuyerOrderDetails = () => {
  // Sample order data
  const orderData = {
    orderId: "ORD123456",
    customerName: "John Doe",
    requirements: [
      { key: "1", requirement: "SEO Optimized Content", status: "Completed" },
      { key: "2", requirement: "Link Insertion", status: "In Progress" },
      { key: "3", requirement: "Content Proofreading", status: "Not Started" },
    ],
    progressUpdates: [
      { key: "1", date: "2024-12-25", update: "Started writing content" },
      { key: "2", date: "2024-12-27", update: "Inserted links into content" },
      { key: "3", date: "2024-12-29", update: "Proofreading in progress" },
    ],
    escrowStatus: "In Progress", // Corrected the reference to orderData.escrowStatus
    paymentStatus: "Pending",
  };

  // Columns for the requirements table
  const requirementsColumns = [
    {
      title: "Requirement",
      dataIndex: "requirement",
      key: "requirement",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          style={{
            color: status === "Completed" ? "green" : status === "In Progress" ? "orange" : "gray",
          }}
        >
          {status}
        </span>
      ),
    },
  ];

  // Columns for the progress updates table
  const progressColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Update",
      dataIndex: "update",
      key: "update",
    },
  ];

  return (
      <>
        <BuyerNavbar/>
        <div className="order-details-container">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card>
                <Title level={3}>Order Details</Title>
                <p>
                  <strong>Order ID:</strong> {orderData.orderId}
                </p>
                <p>
                  <strong>Customer:</strong> {orderData.customerName}
                </p>
              </Card>
            </Col>

            <Col span={12}>
              <Card>
                <Title level={4}>Requirements</Title>
                <Table
                    columns={requirementsColumns}
                    dataSource={orderData.requirements}
                    pagination={false}
                    rowKey="key"
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card>
                <Title level={4}>Progress Updates</Title>
                <Table
                    columns={progressColumns}
                    dataSource={orderData.progressUpdates}
                    pagination={false}
                    rowKey="key"
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card>
                <Title level={4}>Escrow Status</Title>
                <Row>
                  <Col span={4}>
                    <HourglassOutlined style={{fontSize: "24px", color: "#faad14"}}/>
                  </Col>
                  <Col span={20}>
                    <Progress
                        percent={
                          orderData.escrowStatus === "In Progress"
                              ? 50
                              : orderData.escrowStatus === "Completed"
                                  ? 100
                                  : 0
                        }
                        status={orderData.escrowStatus === "In Progress" ? "active" : "normal"}
                    />
                    <p>
                      <strong>Status:</strong> {orderData.escrowStatus}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col span={12}>
              <Card>
                <Title level={4}>Payment Status</Title>
                <Row>
                  <Col span={4}>
                    <FileTextOutlined style={{fontSize: "24px", color: "#1890ff"}}/>
                  </Col>
                  <Col span={20}>
                    <p>
                      <strong>Status:</strong> {orderData.paymentStatus}
                    </p>
                    {orderData.paymentStatus === "Pending" && (
                        <Button type="primary">Pay Now</Button>
                    )}
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );
};

export default BuyerOrderDetails;
