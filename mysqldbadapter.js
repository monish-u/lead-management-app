const mysql = require("mysql");
const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "lead_db"
};
const APP_URL = "http://crm.aimst.edu.my";
class MySqlDBAdapter {
  constructor() {
    this.__db = mysql.createConnection(config);
    console.log("===");
  }
  loginBorrower() {}
  logOut() {}
  // getCampaignDetailsForDashboard(callback) {
  //   this.__db.query(
  //     "SELECT * FROM enquiry_form ef,campaign_list cl WHERE cl.id = ef.campaign_id",
  //     (err, result) => {
  //       if (err) console.log(err);
  //       //console.log(result[0]["id"]);
  //       callback(result);
  //     }
  //   );
  // }

  registerUser(data, callback) {
    let first_name = data.firstName;
    let last_name = data.lastName;
    let mobile_number = data.phone;
    let email_id = data.email;
    let dob = data.dob;
    let user_id = data.userid;
    let password = data.password;
    let confirm_password = password;
    let sql =
      "INSERT INTO user (first_name, last_name, mobile_number, email_id, dob, user_id, password,confirm_password) VALUES(?,?, ?, ? ,?, ?, ?,?) ";
    let self = this;
    this.__db.query(
      sql,
      [
        first_name,
        last_name,
        mobile_number,
        email_id,
        dob,
        user_id,
        password,
        confirm_password
      ],
      function(err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  }
}
module.exports = new MySqlDBAdapter();
