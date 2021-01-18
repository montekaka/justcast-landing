import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useAtom } from 'jotai';
import { playerAtom, toggleModal } from '../../jotai'
import Playlist from './Playlist';

const PlaylistModal = () => {
  const [player] = useAtom(playerAtom);
  const [, toggleModalSet] = useAtom(toggleModal);

  const { openModal } = player;

  return (
    <Modal isOpen={openModal} toggle={toggleModalSet}>
      <ModalHeader toggle={toggleModalSet}>Episodes</ModalHeader>
      <ModalBody>
        <Playlist/>
      </ModalBody>
    </Modal>
  )
}

export default PlaylistModal;