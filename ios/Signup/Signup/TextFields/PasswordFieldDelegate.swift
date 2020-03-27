import UIKit

class PasswordFieldDelegate: CustomTextFieldDelegate {
    init(_ label: UILabel) {
        super.init(label, validator: PasswordValidator())
    }
}
