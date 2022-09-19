import React from 'react'
import { Modal as MUIModal, ModalProps } from '@mui/material'

const Modal:React.FC<ModalProps> = props => (
	<MUIModal {...props}>
		{props?.children}
	</MUIModal>
)

export default Modal
