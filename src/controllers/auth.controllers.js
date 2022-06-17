// Import Services
import authService from '../services/auth.service'

const authController = {}

authController.signup = async (req, res, next) => {
  try {
    const { meta, msg } = await authService.signup({ ...req.body })

    res.json({ meta, msg })
  } catch (error) {
    res.send({ error })
  }
}

export default authController
