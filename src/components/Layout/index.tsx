import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "antd/es/button";

const Page: React.FC = ({ children }) => {
	const { t: translate, i18n } = useTranslation();

	const changeLanguage = (language: "en" | "pt") =>
		i18n.changeLanguage(language);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh"
			}}
		>
			<header>
				<h2>{translate("title")}</h2>
				<p>{translate("language.set")}</p>
				<Button onClick={() => changeLanguage("en")}>EN</Button>
				<Button onClick={() => changeLanguage("pt")}>PT</Button>
				<nav>
					<ul>
						<li>
							<Link to="/example/create">
								{translate("crud.create")}
							</Link>
						</li>
						<li>
							<Link to="/example/read">
								{translate("crud.read")}
							</Link>
						</li>
						<li>
							<Link to="/example/update">
								{translate("crud.update")}
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main style={{ flex: "1 0 auto" }}>{children}</main>
			<footer>Lorem ipsum</footer>
		</div>
	);
};

const Loader = () => <div>Loading...</div>;

const Layout: React.FC = ({ children }) => (
	<Suspense fallback={<Loader />}>
		<Page>{children}</Page>
	</Suspense>
);

export default Layout;
