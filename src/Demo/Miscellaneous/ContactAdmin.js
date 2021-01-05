import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

class ContactAdmin extends React.Component {
	render() {
		return (
			<Aux>
				<Row>
					<Col>
						<Card>
							<Card.Header>
								<Card.Title as="h5">Contact Admin</Card.Title>
							</Card.Header>
							<Card.Body>
								<h6>You can contact the Admin by completing the form below</h6>
								<hr />
								<Row>
									<Col md={6}>
										<Form>
											<Form.Group controlId="formBasicName">
												<Form.Label>Name</Form.Label>
												<Form.Control
													type="name"
													placeholder="Enter your name"
												/>
												<Form.Text className="text-muted">
													Enter your name as it is used on this platform.
												</Form.Text>
											</Form.Group>
											<Form.Group controlId="formBasicEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
												<Form.Text className="text-muted">
													We'll never share your email with anyone else.
												</Form.Text>
											</Form.Group>

											<Button variant="primary">Submit</Button>
										</Form>
									</Col>
									<Col md={6}>
										<Form.Group controlId="Form.ControlSelect1">
											<Form.Label>Subject</Form.Label>
											<Form.Control as="textarea" rows="1" />
										</Form.Group>
										<Form.Group controlId="Form.ControlTextarea1">
											<Form.Label>Message</Form.Label>
											<Form.Control as="textarea" rows="3" />
										</Form.Group>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Aux>
		);
	}
}

export default ContactAdmin;
