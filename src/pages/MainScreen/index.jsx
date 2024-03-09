import React, { useState } from "react";
import DELETEAlert from "../../components/DELETEAlert/index";
import { Button, Img, Text, Input, Heading } from "../../components";
import Modal from "../../components/TextFieldModal/index"

export default function MainScreen() {
  const [tasks, setTasks] = useState([
    { title: "Task Title...", body: "Task body about this task..." },
    { title: "Task Title...", body: "Task body about this task..." },
    { title: "Task Title...", body: "Task body about this task..." },
    { title: "Task Title...", body: "Task body about tjfnjn jsefjh his jfefjhej task..." },
    { title: "Task Title...", body: "Task body about this task..." },
    { title: "Task Title...", body: "Task body about this task..." },
    { title: "Task Title...", body: "Task body about this task..." },
    { title: "Task Title...", body: "Task body about this task..." },
  ]);


  const [inputValue, setInputValue] = useState("");
  const [showButtons, setShowButtons] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isMobileEditModalOpen, setIsMobileEditModalOpen] = useState(false);
  const [selectedMobileEditIndex, setSelectedMobileEditIndex] = useState(null);
  const [showTaskList, setShowTaskList] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(false);

  const handleAddClick = () => {
    setShowTaskList(true);
  };

  const handleEditClick = (index) => {
    const task = tasks[index];
    setIsEditMode(true);
    setShowButtons(index);
    setInputBody("Lorem ipsum dolor sit amet consectetur. Tristique donec congue massa vehicula in. Enim rutrum proin sem velit sodales sem sapien. Euismod tristique massa tellus nisi sem in aliquam sed donec. Cras at morbi vivamus ultrices....");
    setInputTitle(task.title);
  };
  const handleEditMobileClick = (index) => {
    console.log("Opening mobile edit modal for index:", index);
    setSelectedMobileEditIndex(index);
    setIsMobileEditModalOpen(true);
  };
  const handleDeleteClick = (index) => {
    setShowDeleteConfirmation(true);
  };

  const handleIClick = (index) => {
    setShowButtons((prev) => (prev === index ? null : index));
    setIsEditMode(false);
    setInputTitle("");
    setInputBody("");
  };

  const handleInputChange = (e, inputType) => {
    if (e && e.target) {
      const inputValue = e.target.value;
      console.log(e.target.value, "e.target.value")
      if (inputType === "title") {
        setInputTitle(inputValue);
      } else if (inputType === "body") {
        setInputBody(inputValue);
        console.log("Input Body:", inputBody);
      }
    }
  };


  const handleUpdateClick = () => {
    setIsEditMode(false);
    setShowButtons(null);
    const updatedTasks = tasks.map((task, index) =>
      index === showButtons ? { title: inputTitle, body: inputBody } : task
    );
    setTasks(updatedTasks);
    setInputTitle("");
    setInputBody("");
  };

  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((_, index) => index !== showButtons);
    setTasks(updatedTasks);
    setShowButtons(null);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowButtons(null);
    setShowDeleteConfirmation(false);
  };
  const handleTaskBarClick = (index) => {
    if (selectedTaskIndex === index) {
      setSelectedTaskIndex(null);
    } else {
      setSelectedTaskIndex(index);
    }
  };

  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "#1B1A17", color: "white" }}>
        <div className="flex flex-row justify-center w-full pb-[228px] bg-gray-900_01">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-start w-full p-[15px] rounded-bl-lg rounded-br-lg border-deep_orange-900 border-2 border-solid bg-gray-900 sm:hidden">
              <div className="flex flex-row justify-start w-[12%] mb-0.5 ml-8 sm:ml-5">
                <div className="flex flex-col items-center justify-start w-full">
                  <Heading size="s" as="h1" className="!text-white-A700">
                    GYIZER
                  </Heading>
                  <Heading as="h3" style={{ whiteSpace: "nowrap" }}>TODO APP</Heading>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-start w-[38%] md:w-[60%] sm:w-[82%] mt-[62px] gap-2 sm:gap-5 ">
              <div className="flex flex-col items-center justify-start w-[86%] sm:w-full gap-1.5">
                <div className="flex flex-row justify-center w-full">
                  <Input shape="round" name="input" placeholder="Title..." className="w-full sm:w-full" onChange={(e) => handleInputChange(e, "title")} disabled={inputBody}
                  />
                </div>
                <div className="flex flex-row justify-center w-full">
                  <textarea
                    placeholder="Input..."
                    value={inputBody}
                    className="w-full sm:w-full border-orange-600 border border-solid bg-gray-900 rounded"
                    onChange={(e) => handleInputChange(e, "body")}
                    style={{
                      height: inputBody === "Lorem ipsum dolor sit amet consectetur. Tristique donec congue massa vehicula in. Enim rutrum proin sem velit sodales sem sapien. Euismod tristique massa tellus nisi sem in aliquam sed donec. Cras at morbi vivamus ultrices...." ? "132px" : " 32px",
                      borderRadius: "4px",
                      border: "1px solid #A35709",
                      backgroundColor: "#242320",
                      padding: "5px 38px",
                      resize: "none",
                      color: "#F0E3CAA3",
                    }}
                    disabled={inputBody === "Lorem ipsum dolor sit amet consectetur. Tristique donec congue massa vehicula in. Enim rutrum proin sem velit sodales sem sapien. Euismod tristique massa tellus nisi sem in aliquam sed donec. Cras at morbi vivamus ultrices...." || isEditMode}

                  ></textarea>


                </div>
              </div>
              {isEditMode ? (
                <Button
                  style={{ color: "#ffffff", borderRadius: "8px", fontSize: "small" }}
                  size="large"
                  variant="contained"
                  color="primary"
                  className="w-[70px] h-[70px] border-orange-600 border-2 border-solid"
                  onClick={handleUpdateClick}
                >
                  UPDATE
                </Button>
              ) : (
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "8px", fontSize: "small" }}
                  className="w-[70px] h-[70px] border-orange-600 border-2 border-solid"
                  onClick={handleAddClick}
                >
                  <Img src="images/img_button_add.svg" />
                </Button>
              )}


            </div>
            {!showTaskList && (
              <div className="flex flex-col items-center justify-center w-[90%] mt-[156px] gap-2.5 px-14 py-[183px] md:p-5 border-deep_orange-900 border-2 border-solid bg-gray-900 max-w-[1306px] rounded-lg sm:border-none sm:bg-transparent">
                <div className="h-[3px] w-[6%] mt-1 bg-orange-600" />
                <Text size="lg" as="p" className="!text-white-A700 !font-inter text-center">
                  No tasks
                </Text>
                <div className="h-[3px] w-[6%] bg-orange-600" />
              </div>
            )}


            {showTaskList && (
              <div className="flex flex-row justify-center w-[90%] mt-[156px] px-14 py-[70px] md:p-5 border-deep_orange-900 border-2 border-solid bg-gray-900 max-w-[1306px] rounded-lg sm:border-none sm:bg-transparent sm:w-[96%] sm:mt-[50px]">
                <div className="w-[95%] gap-[45px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  {tasks.map((task, index) => (
                    <div key={index} className={`flex flex-row justify-between items-start w-full h-20 p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg ${selectedTaskIndex === index ? 'mb-10' : ''}`}>
                      <div
                        onClick={() => window.innerWidth < 550 && handleTaskBarClick(index)}
                        className="flex flex-col items-start justify-start gap-1"
                        style={{
                          marginTop: selectedTaskIndex === true ? "10%" : "",
                          whiteSpace: window.innerWidth > 550 ? "nowrap" : "",
                          width: window.innerWidth > 550 ? "200px" : "100%",
                          overflow: window.innerWidth > 550 ? "hidden" : "",
                          textOverflow: window.innerWidth > 550 ? "ellipsis" : ""
                        }}
                      >
                        <Text size="md" as="p">
                          Task Title...
                        </Text>
                        <Text as="p">Task body about this task...</Text>
                        {selectedTaskIndex === index && window.innerWidth < 550 && (
                          <div className="flex flex-row justify-end items-center mt-[20px] ml-[90%]">
                            <Button
                              size="sm"
                              shape="round"
                              className="w-[32px] border-orange-600 border-2 border-solid !rounded-md"
                            >
                              i
                            </Button>
                            <Button
                              size="sm"
                              shape="round"
                              className="w-[32px] ml-[9px] border-orange-600 border-2 border-solid !rounded-[5px]"
                              onClick={() => handleEditMobileClick(index)}
                            >
                              <Img src="images/img_edit.svg" />
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center justify-start h-[36px] w-[36px] mt-[7px] mr-[7px]">
                        {showButtons !== index && (
                          <Button
                            color="gray_900"
                            size="sm"
                            shape="round"
                            className={`font-bold border-orange-600 border border-solid border-width-2 min-w-[36px] !rounded-md ${window.innerWidth < 550 ? 'sm:min-w-full' : ''
                              }`}
                            onClick={() => window.innerWidth < 550 ? handleDeleteClick(index) : handleIClick(index)}
                          >
                            {window.innerWidth < 550 ? <Img src="images/img_button_dell.svg" /> : 'i'}
                          </Button>
                        )}
                      </div>
                      {showButtons === index && (
                        <>
                          <Button
                            size="sm"
                            shape="round"
                            className="w-[32px] mt-[7px]  border-orange-600 border-2 border-solid !rounded-md"
                            onClick={() => handleEditClick(index)}
                          >
                            <Img src="images/img_edit.svg" />
                          </Button>
                          <Button
                            size="sm"
                            shape="round"
                            className="w-[32px] mt-[7px] ml-[9px] border-orange-600 border-2 border-solid !rounded-[5px]"
                            onClick={() => handleDeleteClick(index)}
                          >
                            <Img src="images/img_button_dell.svg" />
                          </Button>

                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showDeleteConfirmation && (
        <DELETEAlert
          open={showDeleteConfirmation}
          onClose={handleCancelDelete}
          deletethis="Delete this task?"
          yes="Yes"
          no="No"
          onClickYes={handleConfirmDelete}
          onClickNo={handleCancelDelete}
          yesDisabled={true}
        />
      )}
      {isMobileEditModalOpen && (
        <Modal
          isOpen={isMobileEditModalOpen}
          onClose={() => {
            console.log("Closing mobile edit modal");
            setIsMobileEditModalOpen(false);
            setSelectedMobileEditIndex(null);
          }}
          selectedTask={tasks[selectedMobileEditIndex]}
          onSave={() => {
            console.log("Saving in mobile edit modal");
            setIsMobileEditModalOpen(false);
            setSelectedMobileEditIndex(null);
          }}
        />
      )}
    </>
  );
}
