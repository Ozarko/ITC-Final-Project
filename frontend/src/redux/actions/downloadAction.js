import { DOWNLOAD_COMPLETE, DOWNLOAD_ERROR, DOWNLOAD_STARTED } from "../types/types"

const downloadStartedAction = () => {
  return {
    type: DOWNLOAD_STARTED,
  }
}

const downloadCompleteAction = () => {
  return {
    type: DOWNLOAD_COMPLETE
  }
}

const downloadErrorAction = (error) => {
  return {
    type: DOWNLOAD_ERROR,
    payload: error.responce && error.responce.data.message
        ? error.responce.data.message
        : error.message,
  };
}

export { downloadStartedAction, downloadCompleteAction, downloadErrorAction };