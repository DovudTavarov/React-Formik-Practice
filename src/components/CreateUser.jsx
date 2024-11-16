import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const validationSchema = Yup.object({
  firstname: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastname: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  avatar: Yup.string().url("Invalid URL format"),
  birthdate: Yup.date()
    .nullable()
    .required("Birthdate is required")
    .max(new Date(), "Birthdate cannot be in the future"),
});

const CreateUser = ({ modal, setModal, setUsers }) => {
  return (
    <>
      <Formik
        initialValues={{
          id: uuidv4(),
          firstname: "",
          lastname: "",
          email: "",
          avatar: "",
          birthdate: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikBag) => {
          setUsers((prev) => {
            return [...prev, values];
          });
          formikBag.resetForm();
          setModal({ active: false });
        }}
      >
        {(formik) => {
          return (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{modal.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.firstname && !!formik.errors.firstname
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.firstname}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.lastname && !!formik.errors.lastname
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lastname}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Avatar URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Avatar URL"
                      name="avatar"
                      value={formik.values.avatar}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.avatar && !!formik.errors.avatar
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.avatar}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Birth date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Birth date"
                      name="birthdate"
                      value={formik.values.birthdate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.birthdate && !!formik.errors.birthdate
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.birthdate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setModal({ active: false })}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  onClick={formik.handleSubmit}
                  variant="primary"
                >
                  Create
                </Button>
              </Modal.Footer>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateUser;
