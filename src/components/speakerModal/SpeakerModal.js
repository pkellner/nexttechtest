import SpeakersModalHeader from "./SpeakerModalHeader";
import SpeakersModalBody from "./SpeakerModalBody";
import SpeakersModalFooter from "./SpeakerModalFooter";
import { useContext } from "react";
import { SpeakerModalContext } from "../../contexts/SpeakerModalContext";

export default function SpeakerModal() {
  const { modalShow } = useContext(SpeakerModalContext);

  const cssShowHide =
    modalShow && modalShow === true ? "modal show-modal" : "modal hide-modal";

  return (
    <>
      <style jsx>
        {`
          .show-modal {
            display: block;
          }
          .hide-modal {
            display: none;
          }
        `}
      </style>
      <div role="dialog" className={cssShowHide}>
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content border-0"
            style={{ backgroundColor: "#EEEEEE" }}
          >
            <SpeakersModalHeader />
            <SpeakersModalBody />
            <SpeakersModalFooter />
          </div>
        </div>
      </div>
    </>
  );
}
