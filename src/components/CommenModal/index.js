"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// This Modal Is Used For Mobile Navigation Bar
export default function CommenModal({
  mainContent,
  showButtons,
  buttonComponent,
  show,
  setShow,

}) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className={"relative z-10"} onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-0">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-900"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className={"w-screen max-w-md"}>
                  <div className="flex h-full flex-col max-full overflow-y-scroll bg-opacity-60 backdrop-blur-lg bg-white shadow-xl">
                    <div className="">
                      <div className="mt-20 ml-0">{mainContent}</div>
                    </div>
                    {showButtons ? (
                      <div className="border-none px-4 py-6 sm:px-6">
                        {buttonComponent}
                      </div>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
