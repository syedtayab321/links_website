import React from "react";
import { Layout, Row, Col, Card, Button, Typography, Space } from "antd";
import { FileDoneOutlined, CheckCircleOutlined, ShoppingCartOutlined, GiftOutlined, LinkOutlined } from "@ant-design/icons"; // Add LinkOutlined here
import BuyerNavbar from "./DashboardComponents/BuyerNavbar";
import './css/buyerdashboard.css';

const { Title, Text } = Typography;
const { Content } = Layout;

const BuyerDashboard = () => {
  return (
    <>
      <BuyerNavbar />
      <Layout className="buyer-dashboard-container">
        <Content style={{ padding: '50px 0' }}>
          <div className="dashboard-header">
            <Title level={2} className="text-center">Welcome to Your Buyer Dashboard</Title>
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <Card
                hoverable
                className="dashboard-card"
                cover={<ShoppingCartOutlined style={{ fontSize: '48px', color: '#1890ff' }} />}
              >
                <Card.Meta title="Orders Received" description="Track the status of your orders here." />
                <Space className="mt-2">
                  <Button type="primary" icon={<FileDoneOutlined />} size="large">
                    View Orders
                  </Button>
                </Space>
              </Card>
            </Col>

            <Col span={8}>
              <Card
                hoverable
                className="dashboard-card"
                cover={<CheckCircleOutlined style={{ fontSize: '48px', color: '#faad14' }} />}
              >
                <Card.Meta title="In Progress" description="Check ongoing orders." />
                <Space className="mt-2">
                  <Button type="default" icon={<CheckCircleOutlined />} size="large">
                    View In Progress
                  </Button>
                </Space>
              </Card>
            </Col>

            <Col span={8}>
              <Card
                hoverable
                className="dashboard-card"
                cover={<CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />}
              >
                <Card.Meta title="Completed" description="View completed orders here." />
                <Space className="mt-2">
                  <Button type="success" icon={<CheckCircleOutlined />} size="large">
                    View Completed
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>

          {/* Company Details & Offers */}
          <Row gutter={16} className="mt-4">
            <Col span={12}>
              <Card className="company-details-card">
                <Title level={4}>About Our Company</Title>
                <Text>
                  We provide the best platform for buyers to connect with sellers
                  and ensure a seamless purchasing experience.
                </Text>
                <div className="mt-2">
                  <Button type="link" icon={<LinkOutlined />} size="large">
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>

            <Col span={12}>
              <Card className="special-offers-card">
                <Title level={4}>Special Offers</Title>
                <Text>
                  Don't miss our exclusive deals and discounts for loyal customers.
                </Text>
                <div className="mt-2">
                  <Button type="danger" icon={<GiftOutlined />} size="large">
                    Explore Offers
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default BuyerDashboard;
