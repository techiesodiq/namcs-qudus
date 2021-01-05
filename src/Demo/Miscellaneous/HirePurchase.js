import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {
	render() {
		return (
			<Aux>
				<Row>
					<Col>
						<Card>
							<Card.Header>
								<Card.Title as="h5">Hire Purchase</Card.Title>
							</Card.Header>
							<Card.Body>
								<h6>Please enter your details below</h6>
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

											<Form.Group controlId="formBasicAmount">
												<Form.Label>Product</Form.Label>
												<Form.Control as="select">
													<option>Sewing Machine</option>
													<option>Honda Accord</option>
													<option>Toyota Camry</option>
													<option>Samsung S20</option>
													<option>iPhone 12</option>
												</Form.Control>
											</Form.Group>

											<Button variant="primary">Submit</Button>
										</Form>
									</Col>
									<Col md={6}>
										<Form.Group controlId="returnDate">
											<label for="birthday">Repayment Date</label>
											<br />
											<input type="date" id="repayment" name="repayment" />
											<input type="submit" />
										</Form.Group>
										<Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Label>Guarantor 1</Form.Label>
											<Form.Control as="select">
												<option>John Terry</option>
												<option>Frank Lampard</option>
												<option>Alex Ferguson</option>
												<option>Elon Musk</option>
												<option>Jack Ma</option>
											</Form.Control>
										</Form.Group>
										<Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Label>Guarantor 2</Form.Label>
											<Form.Control as="select">
												<option>John Terry</option>
												<option>Frank Lampard</option>
												<option>Alex Ferguson</option>
												<option>Elon Musk</option>
												<option>Jack Ma</option>
											</Form.Control>
										</Form.Group>
										<Form.Group controlId="exampleForm.ControlTextarea1">
											<Form.Label>Justification</Form.Label>
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

export default FormsElements;
