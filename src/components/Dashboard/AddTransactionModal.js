import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';

const AddTransactionModal = ({ open, handleClose }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => handleClose(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
            </Fade>
        </Modal>
    );
};

export default AddTransactionModal;
