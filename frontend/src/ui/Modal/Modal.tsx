import { useOnClickOutside } from "hooks/useOnClickOutside";
import { ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Icon } from "ui";
import { clsnm } from "utils/clsnm";
import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  closeOnClickOutside?: boolean;
  className?: string;
  width?: string;
};

const Modal = ({
  children,
  isOpen,
  close,
  closeOnClickOutside = true,
  className,
  width,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const closeModal = (e: any) => {
      if (e.keyCode === 27) {
        close();
      }
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  const outsideRef = useOnClickOutside<HTMLDivElement>(() => {
    if (closeOnClickOutside) {
      close();
    }
  });

  return isOpen ? (
    <div
      style={{ animationTimingFunction: "linear" }}
      className={styles.layout}
    >
      <div
        ref={outsideRef}
        className={clsnm(styles.body, className)}
        style={{
          width: width,
        }}
      >
        <Icon
          hoverable
          onClick={() => {
            close();
          }}
          className={styles.close}
          borderRadius="50%"
        >
          <IoMdClose />
        </Icon>
        {children}
      </div>
    </div>
  ) : null;
};

export { Modal };
