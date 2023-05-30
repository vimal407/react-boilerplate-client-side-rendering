import ReactModal from 'react-modal';
import { any, bool, object, string, func } from 'prop-types';
import './styles.css';
import { IoIosClose } from 'react-icons/io';
import { HiOutlineTrash } from 'react-icons/hi';

const Modal = ({
  id,
  isModalOpen,
  title,
  onClose,
  children,
  Icon,
  Iconinfo,
  isForDelete,
  titleStyle,
  iconStyle,
  ...rest
}) => {
  return (
    <ReactModal ariaHideApp={false} id={id} isOpen={isModalOpen} {...rest}>
      {isForDelete ? (
        <div>
          <HiOutlineTrash className="ic-cross" />
        </div>
      ) : Icon ? (
        <div>
          <Icon className={iconStyle} />
        </div>
      ) : Iconinfo ? (
        <Iconinfo className="ic-info" />
      ) : null}
      <IoIosClose className="delete-close" onClick={onClose} />
      <h4 className={titleStyle}>{title}</h4>
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  id: any,
  isModalOpen: bool.isRequired,
  rest: object,
  title: string,
  onClose: func,
  titleStyle: string,
  iconStyle: string,
};

Modal.defaultProps = {
  id: 'react-modal',
  title: 'modal',
  isModalOpen: false,
  onClose: () => {},
  isForDelete: false,
  titleStyle: 'delete-title',
  iconStyle: 'ic-success',
};

export default Modal;
