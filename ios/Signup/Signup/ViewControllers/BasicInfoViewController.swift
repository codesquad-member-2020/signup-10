import UIKit

class BasicInfoViewController: UIViewController {

    @IBOutlet weak var accountField: UITextField!
    @IBOutlet weak var accountLabel: UILabel!
    @IBOutlet weak var passwordField: UITextField!
    @IBOutlet weak var passwordLabel: UILabel!

    var accountFieldDelegate: AccountFieldDelegate?
    var passwordFieldDelegate: PasswordFieldDelegate?

    override func viewDidLoad() {
        super.viewDidLoad()

        self.accountFieldDelegate = AccountFieldDelegate(accountLabel)
        accountField.delegate = accountFieldDelegate
        self.passwordFieldDelegate = PasswordFieldDelegate(passwordLabel)
        passwordField.delegate = passwordFieldDelegate
    }

    @IBAction func backToBasicInfo(_ segue: UIStoryboardSegue) {
        print("back To Basic Info")
    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        self.accountField.resignFirstResponder()
    }

}
