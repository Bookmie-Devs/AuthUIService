const { LoginFormRepository } = require("../repository/forms");
const { localMediaUrl } = require("../utils/utils");

const login_form_repo = new LoginFormRepository();

module.exports.displayLoginForms = async function (req, res) {
  const { project_id } = req.params;
  const forms = await login_form_repo.getAllForms();

  console.log(forms);
  const context = { project_id, forms, localMediaUrl };
  return res.render("login_forms", context);
};

module.exports.displaySignUpForms = async function (req, res) {
  const { project_id } = req.params;
  const forms = [5, 3, 53, 35, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  const context = { project_id, forms };
  return res.render("signup_forms", context);
};

// module.exports.addForm = async function (req, res) {
//   if (req.)
//   return res.render("add_forms");
// };
