import React from "react";
import { Table, Button, Input, Space } from "antd";
import "./../css/listwebsites.css";

const ListWebsites = () => {
  const columns = [
    {
      title: "Website Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Verification",
      dataIndex: "verification",
      key: "verification",
      render: (_, record) => (
        <Space>
          <Button type="primary" className="btn-meta">
            Add Meta Tag
          </Button>
          <Button className="btn-txt">Upload .txt File</Button>
        </Space>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="link" className="btn-view-details">
          View Details
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "example.com",
      verification: "Not Verified",
    },
  ];

  return (
    <div className="container mt-5 list-website-container">
      <div className="row">
        <div className="col-md-12">
          <div className="list-websites-header">
            <h2 className="list-websites-title">List of Websites</h2>
            <Input.Search
              placeholder="Search websites..."
              className="search-input"
            />
          </div>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            className="website-table"
          />
        </div>
      </div>
    </div>
  );
};

export default ListWebsites;
