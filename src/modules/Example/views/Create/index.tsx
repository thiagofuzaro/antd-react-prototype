import React from "react";
import { useTranslation } from "react-i18next";

const Create: React.FC = () => {
	const { t: translate } = useTranslation();

	return <p>{translate("crud.create")}</p>;
};

export default Create;
