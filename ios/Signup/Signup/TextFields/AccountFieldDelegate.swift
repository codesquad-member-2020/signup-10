import UIKit

class AccountFieldDelegate: CustomTextFieldDelegate {
    init(_ label: UILabel) {
        super.init(label, validator: AccountValidator())
    }
}
