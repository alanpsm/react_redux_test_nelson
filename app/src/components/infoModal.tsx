import React from 'react';
import { Button, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectInfo } from '../redux/selectors/infoSelector';
import { closeModal, getModalInfo } from 'redux/actions/infoActions';

export default function InfoModal() {
    const { modalOpen, modalTitle, modalDescription } = useSelector(makeSelectInfo)

    const dispatch = useDispatch();

    return (
        <Modal
            title={modalTitle}
            open={modalOpen}
            onCancel={() => dispatch(closeModal())}
            footer={[
                <Button onClick={() => dispatch(closeModal())} key={1} >
                    Close
                </Button>,
                <Button type={'primary'} key={2} onClick={() => dispatch(getModalInfo())}>
                    Change info
                </Button>

            ]}
        >
            { modalDescription }
        </Modal>
    )

}