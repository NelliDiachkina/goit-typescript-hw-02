import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(40, 40, 40, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    border: 'none',
    borderRadius: '0px',
  },
};

const ImageModal = ({
  bigUrl,
  description,
  isOpen,
  onClose,
}: ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      bodyOpenClassName={css.modalOpen}
      style={customStyles}
    >
      <img src={bigUrl} alt={description || undefined} className={css.img} />
    </Modal>
  );
};

export default ImageModal;
