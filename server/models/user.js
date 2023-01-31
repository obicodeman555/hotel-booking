import mongoose from "mongoose";
import bcrypt from "bcrypt"


const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: [true, "Full name is required"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,

        required: true,
        min: 6,
        max: 64
    },

    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {}

},
    {
        timestamps: true
    });

userSchema.pre("save", function (next) {
    let user = this;
    //hash password only if user is changing the password or registering
    if (user.isModified('password')) {
        return bcrypt.hash(user.password, 12, function (err, hash) {
            if (err) {
                console.log("BCRYPT HAS ERROR", err);

                return next(err);
            }

            user.password = hash;
            return next();
        });
    } else {
        return next();
    }
})

export default mongoose.model("User", userSchema)