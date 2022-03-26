const User = require ("../models/user.js")
const bcryptjs = require ("bcryptjs")

const userController = {
    nuevoUsuario: async (req, res) =>{
        let {firstname, lastname, email, password} = req.body.NuevoUsuario
        console.log(req.body)

        try{
            const usuarioExiste = await User.findOne ({email})

            if(usuarioExiste){
                res.json({success:"falseUE", response:'user already exist, try to use another name'})
            }
            else{
                const passwordHash = bcryptjs.hashSync(password, 10)
                const nuevoUsuario = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash
                })
                await nuevoUsuario.save()
                res.json({success:"trueUE", response:"User created successfully"})
            }
        }
        catch(error){res.json({success:"falseUE", response:null, error:error})}
    }
}

module.exports = userController 