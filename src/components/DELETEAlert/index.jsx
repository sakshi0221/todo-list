import React from "react";
import { Button, Modal, Backdrop, Fade, Typography } from "@material-ui/core";

function DELETEAlert({ open, onClose, deletethis = "Delete this task?", yes = "Yes", no = "No", onClickYes, onClickNo,yesDisabled }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '281px',
          height: '143px',
          borderRadius: '10px',
          background: 'rgba(0, 0, 0, 0.8)',
        }}>
          <div style={{ height: '4px', width: '100%', background: '#DE640D' }} />
          <div style={{ width: '100%', marginTop: '2.5rem' }}>
            <Typography variant="subtitle1" style={{ color: '#FFFFFF', textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', height: '80%' }}>
              {deletethis}
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', gap: '8px',marginTop:"2rem" }}>
              <Button
                color="primary"
                size="small"
                onClick={() => {
                  onClickYes();
                  onClose();
                }}
                disabled={yesDisabled}
                style={{ padding: '5px', color: '#FFFFFF', border: '1px solid #DE640D', minWidth: '64px', borderRadius: '4px' }}
              >
                {yes}
              </Button>
              <Button
                color="secondary"
                size="small"
                onClick={() => {
                  onClickNo();
                  onClose();
                }}
                style={{ padding: '5px', color: '#FFFFFF', border: '1px solid #FF8C00', minWidth: '64px', borderRadius: '4px' }}
              >
                {no}
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default DELETEAlert;
