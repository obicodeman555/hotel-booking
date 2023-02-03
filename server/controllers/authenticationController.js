import User from "../models/user"

export const registerUser = async (req, res) => {
    const { password, email, fullName } = req.body;

    //validate
    if (fullName === "") return res.status(400).send("Full name is required");
    if (password === "") return res.status(400).send("Password is required and minimum of 8 characters long");

    let userExist = await User.findOne({ email }).exec();

    if (userExist) return res.status(400).send("Email is already taken.");

    //register
    const user = new User(req.body);

    //save in database
    try {
        await user.save();
        console.log("USER CREATED", user)
        return res.json({ ok: "true" })

    } catch (error) {
        console.log("CREATING A USER FAILED", error);
        return res.status(400).send("Error. Try again.")
    }
}