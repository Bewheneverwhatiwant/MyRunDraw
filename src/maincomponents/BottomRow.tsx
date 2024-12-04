import { useState } from "react";

import PeopleSearch from "./peopleModal/peopleSearch";
import PeopleTurn from "./peopleModal/peopleTurn";
import PeopleAlert from "./peopleModal/peopleAlert";

import DefaultBottomRow from "./BottomRowStep/DefaultBottomRow";
import TogetherBottomRow from "./BottomRowStep/TogetherBottomRow";
import AloneBottomRow from "./BottomRowStep/AloneBottomRow";
import DrawingBottomRow from "./BottomRowStep/DrawingBottomRow";
import GoFirstBottomRow from "./BottomRowStep/GoFirstBottomRow";

// default: '그리기 시작' 버튼만 있는 상태
// together: '혼자 그리기', '그리기 취소', '같이 그리기' 버튼들 있는 상태
// alone: '혼자 그리기 취소', '혼자 그리기 시작' 버튼들 있는 상태
// draw: '완료', '멈춤/시작' 버튼들 있는 상태
// gofirst: '처음으로' 버튼 있는 상태 

// together 상태에서, '혼자 그리기' 를 클릭하면 alone으로 BottomRow 상태가 변경됨 -> '혼자 그리기 시작' 클릭 시 draw로 변경
// together 상태에서, '같이 그리기' 를 클릭하면 PeopleSearch 모달이 열림 -> PeopleTurn 모달 -> PeopleAlert 모달에서 '확인' 클릭 -> draw로 변경
// draw에서 '완료' 누르면 gofirst로 바뀌고, '처음으로' 누르면 화면이 refresh 되어야 함.

function BottomRow() {
	const [view, setView] = useState<"default" | "together" | "alone" | "draw" | "gofirst">("default");

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModal2Open, setIsModal2Open] = useState(false);
	const [isModal3Open, setIsModal3Open] = useState(false);

	const handleTogetherClick = () => setView("together");
	const handleAloneClick = () => setView("alone");
	const handleCancelClick = () => setView("default");
	const handleDrawingClick = () => setView("draw");
	const handleGoFirstClick = () => setView("gofirst");

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleModal2Close = () => {
		setIsModal2Open(false);
		setIsModal3Open(true);
	};

	const handleConfirm = () => {
		setIsModalOpen(false);
		setIsModal2Open(true);
	};

	const handleModal3Close = () => {
		setIsModal3Open(false);
		setView("draw");
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
			{view === "alone" && <AloneBottomRow onCancelClick={handleCancelClick} onDrawClick={handleDrawingClick} />}
			{view === "draw" && <DrawingBottomRow onGoFirstClick={handleGoFirstClick} />}
			{view === "gofirst" && <GoFirstBottomRow onClick={handleCancelClick} />}

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

			{isModal3Open && (
				<PeopleAlert isModalOpen={isModal3Open} onClose={handleModal3Close} />
			)}
		</>
	);
}

export default BottomRow;
