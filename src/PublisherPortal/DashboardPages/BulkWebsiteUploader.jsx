import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import "./../css/bulkwebsite.css";

const BulkWebsiteUploadPage = () => {
  const [csvData, setCsvData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split("\n").map((line) => line.split(","));
      setCsvData(lines);
      validateData(lines);
    };
    reader.readAsText(file);
  };

  const validateData = (data) => {
    const errors = [];
    data.forEach((row, index) => {
      if (row.length < 2 || !row[0] || !row[1].startsWith("http")) {
        errors.push(index);
      }
    });
    setErrors(errors);
  };

  const handleSubmit = () => {
    if (errors.length > 0) {
      alert("Please fix validation errors before submission.");
    } else {
      alert("Data submitted successfully!");
    }
  };

  return (
    <Container className="bulk-upload-page">
      <h2 className="text-center">Bulk Website Upload</h2>

      {/* File Upload Section */}
      <Row className="my-4">
        <Col>
          <Card className="p-4 shadow-sm">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="fw-bold">Upload CSV File</Form.Label>
              <Form.Control type="file" accept=".csv" onChange={handleFileUpload} />
              {fileName && <div className="mt-2 text-success">Uploaded File: {fileName}</div>}
            </Form.Group>
          </Card>
        </Col>
      </Row>

      {/* Data Preview Section */}
      {csvData.length > 0 && (
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Header>
                <h5 className="m-0">Preview Data</h5>
              </Card.Header>
              <Card.Body style={{ overflowX: "auto" }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Website Name</th>
                      <th>URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {csvData.map((row, index) => (
                      <tr key={index} className={errors.includes(index) ? "table-danger" : ""}>
                        <td>{index + 1}</td>
                        <td>{row[0] || "Missing Name"}</td>
                        <td>{row[1] || "Invalid URL"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Submit Section */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BulkWebsiteUploadPage;
