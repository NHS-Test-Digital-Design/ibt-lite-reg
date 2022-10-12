const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// registering-for.html routing.
router.post('/registering-for-answer', function (req, res) {
    var whoFor = req.session.data['registering-for']
    if (whoFor == "someone-else"){
        res.redirect('register-kit/barcode')
    } else {
        res.redirect('register-kit/login-choice')
    }
})


module.exports = router
