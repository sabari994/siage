
exports.login = (req, res) => {
    const { email, password } = req.body;
    // console.log("req==>",req.body);

    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const ownUser = {
        email: "sabari@gmail.com",
        password: "1234567"
    };

    if (email === ownUser.email && password === ownUser.password){
        return res.status(200).json({
            message: "Login successful"
        });
    }

    return res.status(401).json({
        message: "Invalid credentials"
    });
}

