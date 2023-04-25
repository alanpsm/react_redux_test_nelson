import React from 'react';
import { Button, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectInfo } from '../redux/selectors/infoSelector';

export default function InfoModal() {
    const { modalOpen, modalTitle, modalDescription } = useSelector(makeSelectInfo)
    const dispatch = useDispatch();

    return (
        <Modal
            title={modalTitle}
            open={modalOpen}
            onCancel={{}}
            footer={[
                <Button onClick={{}} key={1}>
                    Close
                </Button>,
                <Button type={'primary'} onClick={{}} key={2}>
                    Change info
                </Button>

            ]}
        >
            { modalDescription }
        </Modal>
    )

}