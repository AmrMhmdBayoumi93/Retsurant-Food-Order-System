const User = require("../Models/User");
const { loginSchema } = require("../Controllers/Validation/authValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async (req, res) =>{
try {
            const{ error } = loginSchema.validate(requestAnimationFrame.body);
if (error) {
    return res.status(400).json({ message: error.details[0].message });
}
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
}
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });

}
const token = jwt.sign(
    { id: user._id, role: user.role },
    "process.env.JWT_SECRET",
    { expiresIn: "1d" });
res.status(200).json({
});
res.status(200).json({
    message: "Login successful",
    token,

    user: {
        id: user._id,
        username: user.username,
        email: user, email,
        role: user.role,
    },
});
    
} catch (error) {
     res.status(500).json({ message: error.message });
    
}
}
module.exports = { login };