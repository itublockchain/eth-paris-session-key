import { ModalController } from "hooks/useModal";
import styles from "./EnterGameModal.module.scss";
import { Modal } from "ui";

const EnterGameModal = ({ modal }: { modal: ModalController }) => {
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      Examplenter game modal some infossss
    </Modal>
  );
};
export { EnterGameModal };
