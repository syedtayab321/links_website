import React from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./../../App.css";

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "linear-gradient(135deg, #ece9e6, #ffffff)" }}
    >
      <Col xs={22} sm={20} md={12} lg={8}>
        <Card
          style={{
            borderRadius: 12,
            boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
            fontFamily: "Poppins, sans-serif",
          }}
          bodyStyle={{ padding: "50px 40px" }}
        >
          <Title level={3} style={{ textAlign: "center", marginBottom: 30, fontFamily: "Poppins, sans-serif" }}>
            Forgot Password
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: 20,
              color: "#7a7a7a",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Enter your email address and we’ll send you a link to reset your password.
          </Text>
          <Form
            layout="vertical"
            name="forgot_password"
            onFinish={onFinish}
            requiredMark={false}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <Form.Item
              name="email"
              label={<span style={{ fontFamily: "Poppins, sans-serif" }}>Email Address</span>}
              rules={[
                { required: true, message: "Please enter your email address!" },
                { type: "email", message: "Please enter a valid email address!" },
              ]}
            >
              <Input
                size="large"
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
                placeholder="example@domain.com"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  background: "#1890ff",
                  borderColor: "#1890ff",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginTop: 20,
              fontFamily: "Poppins, sans-serif",
              color: "#595959",
            }}
          >
            Remember your password? <a href="/login" style={{ color: "#1890ff" }}>Login</a>
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
