import React from "react";
import { Typography, Row, Col, Card, Form, Input, Button } from "antd";
import "./../../App.css";

const { Title, Text } = Typography;

const EmailConfirmation = () => {
  const onFinish = (values) => {
    console.log("Confirmation Code:", values.code);
  };

  const handleResendCode = () => {
    console.log("Resend code clicked");
  };

  const formatCode = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/(\d{3})(?=\d)/g, "$1-")
      .slice(0, 7);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "linear-gradient(135deg, #e3f2fd, #ffffff)" }}
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
          <Title level={3} style={{ textAlign: "center", marginBottom: 20, fontFamily: "Poppins, sans-serif" }}>
            Confirm Your Email
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: 30,
              color: "#595959",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            We have sent a confirmation code to <strong>your email address</strong>. Please enter the code below to verify your email.
          </Text>
          <Form
            layout="vertical"
            name="email_confirmation"
            onFinish={onFinish}
            requiredMark={false}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <Form.Item
              name="code"
              label={<span style={{ fontFamily: "Poppins, sans-serif" }}>Confirmation Code</span>}
              rules={[
                { required: true, message: "Please enter the confirmation code!" },
                {
                  pattern: /^\d{3}-\d{3}$/,
                  message: "The code must be in the format 123-456",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="123-456"
                maxLength={7}
                onChange={(e) => {
                  e.target.value = formatCode(e.target.value);
                }}
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
                Verify Email
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
            Didn’t receive the code?
            <Button type="link" onClick={handleResendCode} style={{ fontFamily: "Poppins, sans-serif", padding: 0 }}>
              Resend Code
            </Button>
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default EmailConfirmation;