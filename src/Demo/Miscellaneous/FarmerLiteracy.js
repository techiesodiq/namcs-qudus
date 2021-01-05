import React from "react";
import { Card, Table } from "react-bootstrap";

const FarmerLiteracy = () => {
	return (
		<div>
			<Card>
				<Card.Header>
					<Card.Title as="h5">Farmer Literacy Programs</Card.Title>
					<span className="d-block m-t-5">
						Stay connected with our Farmer Literacy Programs
					</span>
				</Card.Header>
				<Card.Body>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Event</th>
								<th>Date</th>
								<th>Venue</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>NAMCS Farmer Program</td>
								<td>28th February, 2021</td>
								<td>National Conference Centre, Abuja</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>NAMCS Market Program</td>
								<td>20th March, 2021</td>
								<td>National Museum, Lagos</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>NAMCS Manager Program</td>
								<td>14th March, 2021</td>
								<td>National Defence Headquarters, Abuja</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>NAMCS Manager Program</td>
								<td>10th May, 2021</td>
								<td>National Defence Headquarters, Abuja</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>NAMCS Manager Program</td>
								<td>2nd July, 2021</td>
								<td>National Defence Headquarters, Abuja</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>NAMCS Manager Program</td>
								<td>14th July, 2021</td>
								<td>National Defence Headquarters, Abuja</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>NAMCS Manager Program</td>
								<td>14th August, 2021</td>
								<td>National Defence Headquarters, Abuja</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</div>
	);
};

export default FarmerLiteracy;
