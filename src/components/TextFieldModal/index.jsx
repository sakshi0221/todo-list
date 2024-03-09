import React, { useState } from "react";

function Modal({ isOpen, onClose, selectedTask, onSave }) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const openModal = () => {
    // Initialize input values if editing an existing task
    if (selectedTask) {
      setInputValue1(selectedTask.title);
      setInputValue2(selectedTask.body);
    }
  };

  const closeModal = () => {
    setInputValue1(""); // Reset input values on close
    setInputValue2("");
    onClose();
  };

  const handleSave = () => {
    // Add your logic for saving here
    onSave({
      title: inputValue1,
      body: inputValue2,
    });
    closeModal();
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
        style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: 'rgba(0, 0, 0, 0.8)',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
                width: "360px",
                padding: "18px",
                borderRadius: "8px 8px 0px 0px",
                background: '#1B1A17',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
                bottom: "0",
              }}
          >
            <input
              type="text"
              placeholder="Mini Input..."
              value={inputValue1}
              onChange={(e) => setInputValue1(e.target.value)}
              style={{
                width: "324px",
                height: "32px",
                borderRadius: "4px",
                border: "1px solid #A35709",
                backgroundColor: "#242320",
                marginBottom: "16px",
                marginRight: "5px",
                color: "#fff",
                paddingLeft: "5px",
              }}
            />

            <textarea
              placeholder="Max Input..."
              value={inputValue2}
              onChange={(e) => setInputValue2(e.target.value)}
              style={{
                width: "324px",
                height: "343px",
                borderRadius: "4px",
                border: "1px solid #A35709",
                backgroundColor: "#242320",
                marginBottom: "16px",
                marginRight: "5px", 
                resize: "none",
                color: "#fff", 
                paddingLeft: "5px",
              }}
            ></textarea>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
                gap: "5%",
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  width: "50%",
                  height: "32px",
                  borderRadius: "4px",
                  backgroundColor: "#242320",
                  border: "1px solid #A35709",
                  color: "#D9D9D9",
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                style={{
                  width: "50%",
                  height: "32px",
                  borderRadius: "4px",
                  backgroundColor: "#242320",
                  border: "1px solid #A35709",
                  color: "#D9D9D9",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export default Modal;
