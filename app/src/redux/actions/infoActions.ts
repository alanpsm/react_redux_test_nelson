import { infoActionTypes } from '../constants/infoActionTypes';
import getContent from '../../services/contentService';

export const openModal = () => ({
    type: infoActionTypes.SET_MODAL_VISIBLE
});

export const closeModal = () => ({
    type: infoActionTypes.SET_MODAL_HIDDEN
});

export const setModalInfo = (info: any) => ({
    type: infoActionTypes.SET_MODAL_INFO,
    payload: info
});

export const getModalInfo = () => async ( dispatch: any, getState: any ) => {
    const response = await getContent('/info')
};