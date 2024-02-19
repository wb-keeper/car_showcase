import { FC, Fragment } from "react";
import { Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: any;
}

const CarDetails: FC<CarDetailsProps> = ({ isOpen, closeModal, car }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}></Transition>
    </>
  );
};

export default CarDetails;
