import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";


export default function Home() {
  const navigate = useNavigate();

  const Studentlist = () => {
    navigate("/studentlist");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Card className="shadow-lg border-0 text-center p-4">
          <Card.Body>
            <FaUserGraduate size={60} className="text-primary mb-3" />

            <h1 className="fw-bold mb-2">Welcome To Student Data</h1>

            <p className="text-muted mb-4">
              Manage student records easily — add, update, and delete student data.
            </p>

            <Button
              variant="primary"
              size="lg"
              className="px-5"
              onClick={Studentlist}
            >
              View Student List
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
