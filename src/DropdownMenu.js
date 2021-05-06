import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";

export default function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}
	function DropdownItem(props) {
		return (
			<a
				href="#"
				className="menu-item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	}
	return (
		<div className="dropdown" style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "cog"]} size="m" />}
						goToMenu="settings"
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "arrow-left"]} size="m" />}
						goToMenu="main"
					></DropdownItem>
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "cog"]} size="m" />}
					>
						Settings
					</DropdownItem>
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "cog"]} size="m" />}
					>
						Settings
					</DropdownItem>
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "cog"]} size="m" />}
					>
						Settings
					</DropdownItem>
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "cog"]} size="m" />}
					>
						Settings
					</DropdownItem>
					<DropdownItem
						leftIcon={<FontAwesomeIcon icon={["fas", "cog"]} size="m" />}
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}
