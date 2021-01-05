import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Box,
} from "@material-ui/core";
import { Row, Col, Form, Button } from "react-bootstrap";
import photo1 from "../../assets/images/insurance.jpg";

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: "100%",
	},
	media: {
		height: "240",
	},
	content: {
		lineSpacing: "40",
	},
	newBody: {
		margin: "20",
	},
}));

const XLifeCover = () => {
	const classes = useStyles();

	return (
		<div>
			<Container>
				<Typography>X-Life Program</Typography>
				<Grid container spacing={3}>
					<Grid item md={2}></Grid>
					<Grid item md={8}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="storyImage"
									className={classes.media}
									image={photo1}
									title="Contemplative Reptile"
								/>
								<CardContent className={classes.content}>
									<Typography gutterBottom variant="h5" component="h2">
										NAMCS X-Life Cover Program
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
									<br />
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
									<br />
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
									<br />
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
								</CardContent>
							</CardActionArea>
							<Box className={classes.newBody}>
								<h6>
									Please enter your details below to apply for the X-Life
									insurance package
								</h6>
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
												<label for="quantity">Amount</label>
												<br />
												<input
													type="number"
													id="quantity"
													name="quantity"
													min="1"
													max="1000000000"
												/>
												<input type="submit" />
											</Form.Group>

											<Button variant="primary">Submit application</Button>
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
							</Box>
						</Card>
					</Grid>
					<Grid item md={2}></Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default XLifeCover;
