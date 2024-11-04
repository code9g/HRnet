import Modal from "code9g-modal";
import { XIcon } from "lucide-react";
import PropTypes from "prop-types";
import { Button } from "./ui/button";

function MessageModal({ isOpen, close, children }) {
  return (
    <Modal
      className="flex items-center justify-center bg-slate-500/25 transition-all duration-300"
      closeClass="opacity-0"
      isOpen={isOpen}
      onEscape={close}
      onMouseOut={close}
    >
      <div className="relative w-1/3 rounded-xl bg-white p-10 shadow">
        <Button
          type="button"
          className="absolute right-0 top-0 size-10 -translate-y-1/3 translate-x-1/3 rounded-full p-1"
          onClick={close}
        >
          <XIcon className="size-full" />
        </Button>
        <p className="text-center">{children}</p>
      </div>
    </Modal>
  );
}

MessageModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.any,
};

export default MessageModal;
