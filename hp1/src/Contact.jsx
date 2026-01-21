import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Table,
  Form,
  Badge,
} from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";

export default function Contact() {
  const [data, SetData] = useState([]);
  const [search, setSearch] = useState("");

  const api = () => {
    axios.get("http://localhost:8080/stud").then((res) => {
      SetData(res.data);
    });
  };

  useEffect(() => {
    api();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0">
        <Card.Body>
          {/* Header */}
          <div className="text-center mb-4">
            <FaAddressBook size={45} className="text-primary mb-2" />
            <h2 className="fw-bold">Contact Directory</h2>
            <p className="text-muted">
              View and search student contact details
            </p>
          </div>

          {/* Search */}
          <Form.Control
            type="text"
            placeholder="Search by name..."
            className="mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Table */}
          <Table striped bordered hover responsive className="text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                
                <th>Mobile</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="fw-semibold">{item.name}</td>
                    
                    <td>{item.mob}</td>
                    <td>
                      <Badge bg="success">Active</Badge>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-danger">
                    No contact found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
