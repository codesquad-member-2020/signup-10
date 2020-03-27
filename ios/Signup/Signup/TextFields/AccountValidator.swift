import UIKit

class AccountValidator: TextFieldValidator {
    private let minLength = 5
    private let maxLength = 20

    override func validate(_ newText: String) -> Result<Success, Failure> {
        switch newText {
        case newText where isDuplicated(newText):
            return .failure(Failure(kind: .Duplicated, message: "이미 사용중인 아이디입니다."))
        case newText where notProperCharacter(newText) || notProperLength(newText):
            return .failure(Failure(kind: .NotProperCharacter, message: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다."))
        default:
            return .success(Success(message: "사용 가능한 아이디입니다."))
        }
    }

    // FIXME: 미구현
    private func isDuplicated(_ string: String) -> Bool {
        return false
    }

    private func notProperLength(_ string: String) -> Bool {
        return !(string.count >= minLength && string.count <= maxLength)
    }

    private func notProperCharacter(_ string: String) -> Bool {
        return numberOfMatches(in: string, pattern: #"[^a-zA-Z0-9\-\_]"#) > 0
    }
}
