import { Table } from "react-bootstrap";

const DataTable = ({ users, handleDeleteUser }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birth date</th>
        </tr>
      </thead>

      <tbody>
        {users.length ? (
          users.map((user) => (
            <tr key={user.id}>
              <td className="field-avatar">
                <img width={100} src={user.avatar} alt={user.firstname} />
              </td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.birthdate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No Record Found!</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
