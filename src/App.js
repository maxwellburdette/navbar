import React, { useState } from "react";
import Navbar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	return (
		<div className="App">
			<Navbar>
				<NavItem
					icon={<FontAwesomeIcon icon={["fas", "adjust"]} size="m" />}
				></NavItem>
				<NavItem
					icon={<FontAwesomeIcon icon={["fas", "comment-alt"]} size="m" />}
				></NavItem>
				<NavItem
					icon={<FontAwesomeIcon icon={["fas", "users"]} size="m" />}
				></NavItem>
				<NavItem
					icon={<FontAwesomeIcon icon={["fas", "caret-down"]} size="lg" />}
				>
					<DropdownMenu />
				</NavItem>
			</Navbar>
		</div>
	);
}

export default App;
