import React from "react";
import { Button, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DELETE({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[281px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full pb-[13px] gap-[35px] bg-gray-900_01 rounded">
              <div className="h-[4px] w-full bg-deep_orange-900" />
              <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-11">
                <Text size="s" as="p" className="!text-white-A700 text-center">
                  Delete this task?
                </Text>
                <div className="flex flex-row justify-start w-full gap-2.5">
                  <Button
                    color="gray_900"
                    size="xs"
                    className="sm:px-5 !text-blue_gray-100 border-deep_orange-900 border border-solid min-w-[64px] rounded"
                  >
                    Yes
                  </Button>
                  <Button
                    color="gray_900"
                    size="xs"
                    className="sm:px-5 !text-blue_gray-100 border-orange-600 border border-solid min-w-[64px] rounded"
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
