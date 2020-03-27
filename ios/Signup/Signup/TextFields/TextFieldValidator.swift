import UIKit

class TextFieldValidator {
    struct Success {
        let color: UIColor = #colorLiteral(red: 0, green: 0.6927962303, blue: 0, alpha: 1)
        let message: String
    }

    struct Failure: Error {
        enum FailureKind {
            case Duplicated
            case NotProperCharacter
            case NotContainsNumber
            case NotContainsUppercase
            case NotContainsSpecialCharacter
            case NotProperLength
            case NotImplemented
        }

        let kind: FailureKind
        let color: UIColor = #colorLiteral(red: 1, green: 0.2705882353, blue: 0.2274509804, alpha: 1)
        let message: String
    }

    func validate(_ newText: String) -> Result<Success, Failure> {
        return .failure(Failure(kind: .NotImplemented, message: "상속 받아 구현하여 사용할 것!"))
    }

    internal func numberOfMatches(in str: String, pattern: String) -> Int {
        let regex = try! NSRegularExpression(pattern: pattern, options: [])
        return regex.numberOfMatches(in: str, options: [], range: str.fullRange)
    }
}
