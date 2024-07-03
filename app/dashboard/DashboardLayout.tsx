// This will be the conditional layout for the dashboard of various users
import React from "react";
import "@/globals.css";
import { RNChildProp } from "@/@types/interface/Interface";
import { ubuntu } from "@/@types/font/Font";

const DashboardLayout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
	return (
		<main className={ubuntu.className}>
			<div>{children}</div>
		</main>
	);
};

export default DashboardLayout;
