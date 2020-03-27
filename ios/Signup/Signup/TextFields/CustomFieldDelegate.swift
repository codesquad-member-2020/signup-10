import UIKit

class CustomTextFieldDelegate: NSObject, UITextFieldDelegate {
    private let messageLabel: UILabel
    private var validator: TextFieldValidator

    init(_ label: UILabel, validator: TextFieldValidator) {
        self.messageLabel = label
        self.validator = validator
    }

    func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        let text = textField.text! as NSString
        let newText = text.replacingCharacters(in: range, with: string)

        switch validator.validate(newText) {
        case .success(let result):
            messageLabel.text = result.message
            messageLabel.textColor = result.color
        case .failure(let result):
            messageLabel.text = result.message
            messageLabel.textColor = result.color
        }
        messageLabel.isHidden = false

        return true
    }
}


