import * as React from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ children, title }: ModalProps) => (
  <div className="flex flex-col rounded-lg bg-gray-300 px-4 py-2 m-2 md:ml-32 md:mr-32">
    <ModalTitle>{title}</ModalTitle>
    {children}
  </div>
);

const ModalTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-lg md:text-2xl text-gray-900">{children}</h1>
);

export const ModalHeadline = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg md:text-xl text-gray-900">{children}</h2>
);

export const ModalText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-700 my-2">{children}</p>
);

export const ModalElement = ({ children }: { children: React.ReactNode }) => (
  <div className="my-2">{children}</div>
);
