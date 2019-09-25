import React from "react";
import { useTranslation } from "react-i18next";

const Update: React.FC = () => {
	const { t: translate } = useTranslation();

	return <p>{translate("crud.update")}</p>;
};

export default Update;
