const connectDb = require('./config/dbConnection');
const Admin = require('./models/adminModel');
const bcrypt = require('bcrypt');

async function AdminAccount() {
    try {
        connectDb();
        const adminCount = await Admin.countDocuments()

        if (adminCount === 0) {
            const hashPassword = await bcrypt.hash('adminpassword', 10);
            const newAdmin = new Admin(
                {
                    username: 'admin',
                    password: hashPassword
                }
            )
            await newAdmin.save()
            console.log("Account Created")
        }
        else {
            console.log("Account already registered");
        }
    }
    catch (err) {
        console.log(err)
    }
}
AdminAccount();