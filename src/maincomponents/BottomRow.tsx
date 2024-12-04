import { useState } from "react";

import PeopleSearch from "./peopleModal/peopleSearch";
import PeopleTurn from "./peopleModal/peopleTurn";

import DefaultBottomRow from "./BottomRowStep/DefaultBottomRow";
import TogetherBottomRow from "./BottomRowStep/TogetherBottomRow";
import AloneBottomRow from "./BottomRowStep/AloneBottomRow";


function BottomRow() {
	const [view, setView] = useState<"default" | "together" | "alone">("default");

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModal2Open, setIsModal2Open] = useState(false);

	const handleTogetherClick = () => setView("together");
	const handleAloneClick = () => setView("alone");
	const handleCancelClick = () => setView("default");

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleModal2Close = () => {
		setIsModal2Open(false);
	};

	const handleConfirm = () => {
		setIsModalOpen(false);
		setIsModal2Open(true);
	};

	return (
		<>
			{view === "default" && <DefaultBottomRow onClick={handleTogetherClick} />}
			{view === "together" && (
				<TogetherBottomRow
					onAloneClick={handleAloneClick}
					onCancelClick={handleCancelClick}
					onTogetherClick={handleModalOpen}
				/>
			)}
			{view === "alone" && <AloneBottomRow onCancelClick={handleCancelClick} />}

			{isModalOpen && (
				<PeopleSearch
					isModalOpen={isModalOpen}
					onClose={handleModalClose}
					onConfirm={handleConfirm}
				/>
			)}

			{isModal2Open && (
				<PeopleTurn isModalOpen={isModal2Open} onClose={handleModal2Close} />
			)}
		</>
	);
}

export default BottomRow;
