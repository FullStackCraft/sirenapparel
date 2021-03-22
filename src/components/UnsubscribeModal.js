import React from 'react'
import { FormattedMessage } from 'react-intl'

class UnsubscribeModal extends React.Component {
  render () {
    let oTitle, oContent;
    if (this.props.bUnsubscribeError) {
      oTitle = <FormattedMessage id="UnsubscribeModal.successTitle"/>
      oContent = <FormattedMessage id="UnsubscribeModal.successContent"/>
    } else {
      oTitle = <FormattedMessage id="UnsubscribeModal.errorTitle"/>
      oContent = <FormattedMessage id="UnsubscribeModal.errorContent"/>
    }
    return (
      <div>
        <div className="modal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{oTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{oContent}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeLocaleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnsubscribeModal;