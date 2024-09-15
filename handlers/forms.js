module.exports.displayLoginForms = async function (req, res) {
  const { project_id } = req.params;
  const forms = [5, 3, 53, 35, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  const context = { project_id, forms };
  return res.render("login_forms", context);
};

module.exports.displaySignUpForms = async function (req, res) {
  const { project_id } = req.params;
  const forms = [5, 3, 53, 35, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  const context = { project_id, forms };
  return res.render("signup_forms", context);
};
