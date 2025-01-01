import React from "react";
import { Layout, Row, Col, Card, Button, Avatar, Typography, Space, Descriptions } from "antd";
import { EditOutlined, UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import BuyerNavbar from "./../DashboardComponents/BuyerNavbar";
import './../css/buyerprofile.css';

const { Title, Text } = Typography;
const { Content } = Layout;

const BuyerProfile = () => {
  return (
    <>
      <BuyerNavbar />
      <Layout className="profile-layout">
        <Content style={{ padding: '50px 0' }}>
          <div className="profile-header">
            <Title level={2} className="text-center">Your Profile</Title>
          </div>

          <Row gutter={16}>
            {/* Profile Information */}
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card
                className="profile-card"
                hoverable
                cover={<Avatar size={150} icon={<UserOutlined />} className="profile-avatar" />}
              >
                <Card.Meta
                  title={<Text className="profile-name">John Doe</Text>}
                  description={<Text className="profile-email">john.doe@example.com</Text>}
                />
                <div className="mt-2">
                  <Button type="primary" icon={<EditOutlined />} block size="large">
                    Edit Profile
                  </Button>
                </div>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col xs={24} sm={24} md={16} lg={16}>
              <Card className="contact-card" title="Contact Information" bordered={false}>
                <Descriptions layout="vertical" column={1}>
                  <Descriptions.Item label="Full Name">John Doe</Descriptions.Item>
                  <Descriptions.Item label="Email">
                    <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Phone">
                    <PhoneOutlined /> +123 456 7890
                  </Descriptions.Item>
                  <Descriptions.Item label="Address">
                    <EnvironmentOutlined /> 1234 Elm Street, City, Country
                  </Descriptions.Item>
                </Descriptions>

                <Space className="mt-3">
                  <Button type="default" icon={<MailOutlined />} size="large">
                    Send Message
                  </Button>
                  <Button type="primary" size="large">
                    Contact Support
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default BuyerProfile;
