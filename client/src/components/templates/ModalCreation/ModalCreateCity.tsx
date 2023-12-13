import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import FormCreateCity from '../Form/FormCreateCity';
import * as entityCity from "./../../../network/cities/cities.entities";

type Props = {
    open : boolean
    onClose : () => void;
    pushNewProject : (project : entityCity.ICity) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ModalCreateProject(props: Props) {
    //const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormCreateCity
            pushNewProject={props.pushNewProject}
            onSuccess={props.onClose}
            onFail={() => {}}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default ModalCreateProject;