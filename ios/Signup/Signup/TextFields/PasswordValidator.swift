import UIKit

class PasswordValidator: TextFieldValidator {
    private let minLength = 8
    private let maxLength = 16

    override func validate(_ newText: String) -> Result<Success, Failure> {
        switch newText {
        case newText where notContainsUppercase(newText):
            return .failure(Failure(kind: .NotContainsUppercase, message: "영문 대문자를 최소 1자 이상 포함해주세요."))
        case newText where notContainsNumber(newText):
            return .failure(Failure(kind: .NotContainsNumber, message: "숫자를 최소 1자 이상 포함해주세요."))
        case newText where notContainsSpecialCharacter(newText):
            return .failure(Failure(kind: .NotContainsSpecialCharacter, message: "특수문자를 최소 1자 이상 포함해주세요."))
        case newText where notProperLength(newText):
            return .failure(Failure(kind: .NotProperLength, message: "8자 이상 16자 이하로 입력해주세요."))
        default:
            return .success(Success(message: "안전한 비밀번호입니다."))
        }
    }

    private func notProperLength(_ string: String) -> Bool {
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
