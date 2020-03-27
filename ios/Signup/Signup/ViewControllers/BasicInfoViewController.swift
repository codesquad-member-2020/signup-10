import UIKit

class BasicInfoViewController: UIViewController {

    @IBOutlet weak var idField: UITextField!
    @IBOutlet weak var passwordField: UITextField!
    @IBOutlet weak var passwordLabel: UILabel!
    
    var passwordFieldDelegate: PasswordFieldDelegate?

    override func viewDidLoad() {
        super.viewDidLoad()
        idField.delegate = self

        self.passwordFieldDelegate = PasswordFieldDelegate(passwordLabel)
        passwordField.delegate = passwordFieldDelegate
    }

    @IBAction func backToBasicInfo(_ segue: UIStoryboardSegue) {
        print("back To Basic Info")
    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        self.idField.resignFirstResponder()
    }
}

extension BasicInfoViewController: UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        self.idField.resignFirstResponder()

        return true
    }
}
