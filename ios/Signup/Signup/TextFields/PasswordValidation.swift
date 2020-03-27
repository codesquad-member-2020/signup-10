import UIKit

class CustomTextFieldDelegate: NSObject, UITextFieldDelegate {

}

class PasswordFieldDelegate: CustomTextFieldDelegate {
    private var validator = PasswordValidator()
    private let messageLabel: UILabel

    init(_ label: UILabel) {
        self.messageLabel = label
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

struct PasswordValidator {
    private let minLength = 8
    private let maxLength = 16

    struct ValidSuccess {
        let color: UIColor = #colorLiteral(red: 0, green: 0.6927962303, blue: 0, alpha: 1)
        let message: String
    }

    struct ValidFailure: Error {
        enum FailureKind {
            case NotValidLength
            case NotContainsNumber
            case NotContainsUppercase
            case NotContainsSpecialCharacter
        }

        let color: UIColor = #colorLiteral(red: 1, green: 0.2705882353, blue: 0.2274509804, alpha: 1)
        let kind: FailureKind
        let message: String
    }

    func validate(_ newText: String) -> Result<ValidSuccess, ValidFailure> {
        switch newText {
        case newText where notContainsUppercase(newText):
            return .failure(ValidFailure(kind: .NotContainsUppercase, message: "영문 대문자를 최소 1자 이상 포함해주세요."))
        case newText where notContainsNumber(newText):
            return .failure(ValidFailure(kind: .NotContainsNumber, message: "숫자를 최소 1자 이상 포함해주세요."))
        case newText where notContainsSpecialCharacter(newText):
            return .failure(ValidFailure(kind: .NotContainsSpecialCharacter, message: "특수문자를 최소 1자 이상 포함해주세요."))
        case newText where notValidLength(newText):
            return .failure(ValidFailure(kind: .NotValidLength, message: "8자 이상 16자 이하로 입력해주세요."))
        default:
            return .success(ValidSuccess(message: "안전한 비밀번호입니다."))
        }
    }

    private func numberOfMatches(in str: String, pattern: String) -> Int {
           let regex = try! NSRegularExpression(pattern: pattern, options: [])
           return regex.numberOfMatches(in: str, options: [], range: str.fullRange)
    }

    private func notValidLength(_ string: String) -> Bool {
        return !(string.count >= minLength && string.count <= maxLength)
    }

    private func notContainsNumber(_ string: String) -> Bool {
        return numberOfMatches(in: string, pattern: "[0-9]") < 1
    }

    private func notContainsUppercase(_ string: String) -> Bool {
        return numberOfMatches(in: string, pattern: "[A-Z]") < 1
    }

    private func notContainsSpecialCharacter(_ string: String) -> Bool {
        return numberOfMatches(in: string, pattern: #"[!@#$%]"#) < 1
    }
}
