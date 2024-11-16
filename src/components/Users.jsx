import { useState } from "react";
import DataTable from "./DataTable";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CreateUser from "./CreateUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState({ name: "", active: false });

  return (
    <Container>
      <>
        <Row className="mb-3">
          <Col className="text-end">
            <Button
              variant="primary"
              onClick={() => setModal({ name: "Create User", active: true })}
            >
              Create New User
            </Button>
          </Col>
        </Row>

        <DataTable users={users} />
      </>
      <Modal show={modal.active} onHide={() => setModal({ active: false })}>
        {modal.name === "Create User" && (
          <CreateUser setUsers={setUsers} modal={modal} setModal={setModal} />
        )}
      </Modal>
    </Container>
  );
};

export default Users;
