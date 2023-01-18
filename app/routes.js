const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// registering-for.html routing.
router.post('/registering-for-answer', function (req, res) {
    var whoFor = req.session.data['registering-for']
    if (whoFor == "someone-else"){
        res.redirect('register-kit/login-choice')
    } else {
        res.redirect('register-kit/login-choice')
    }
})


// travel-overseas.html routing.
router.post('/travel-answer', function (req, res) {
    var travelFor = req.session.data['travel-overseas']
    if (travelFor == "no"){
        res.redirect('register-kit/test-location')
    } else {
        res.redirect('register-kit/travel-country')
    }
})

// travel-location.html routing.
router.post('/test-location-answer', function (req, res) {
    var travelFor = req.session.data['test-location']
    if (travelFor == "no"){
        res.redirect('register-kit/test-site-code')
    } else {
        res.redirect('register-kit/test-site-code')
    }
})



module.exports = router
