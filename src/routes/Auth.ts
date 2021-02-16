import { Router, Request, Response } from 'express'
import { UserModel } from '../database/models/User'

const router: Router = Router()

router.post('/signup', async (req: Request, res: Response) => {
    const { email, password, passwordCheck, username } = req.body;

    if(!email || !password || !passwordCheck || !username) {
        return res.status(400).json({ error: 'You Need To Complete All The Fields!' })
    }

    if(password.length < 5) {
        return res.status(400).json({ error: 'The Password’s Length Needs To Be 5+'})
    }

    if(password !== passwordCheck) {
        return res.status(400).json({ error: 'The Passwords Need To Be The Same!' })
    }

    const User = await UserModel.findOne({ email: email })

    if(User) {
        return res.status(400).json({ msg: 'A User With This Email Already Exists!' })
    }

    await UserModel.create({
        email: email,
        password: password,
        username: username
    })

    res.status(200).json(req.body)
    console.log(req.body)
})

router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ error: 'You Need To Complete All The Fields!' })
    }

    const User = await UserModel.findOne({ email: email, password: password })

    if(!User) {
        return res.status(400).json({ msg: 'Cannot Find That User!' })
    }

    res.status(200).json({ msg: 'Successfully Logged' })
})

export const AuthRouter = router;