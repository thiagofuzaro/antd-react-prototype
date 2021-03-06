import React from "react";
import { useTranslation } from "react-i18next";

const Read: React.FC = () => {
	const { t: translate } = useTranslation();

	return <p>{translate("crud.read")}</p>;
};

export default Read;
