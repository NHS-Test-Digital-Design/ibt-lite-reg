const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// registering-for.html routing
router.post('/registering-for-answer', function (req, res) {
    var whoFor = req.session.data['registering-for']
    if (whoFor == "someone-else"){
        res.redirect('register-kit/login-choice')
    } else {
        res.redirect('register-kit/login-choice')
    }
})

// travel-overseas.html routing
router.post('/overseas-answer', function (req, res) {
    var travelWhere = req.session.data['travel-overseas']
    if (travelWhere == "no"){
        res.redirect('register-kit/test-location')
    } else {
        res.redirect('register-kit/travel-country')
    }
})

// travel-location.html routing
router.post('/test-location-answer', function (req, res) {
    var testWhere = req.session.data['test-location']
    if (testWhere == "no"){
        res.redirect('register-kit/royal-mail-barcode')
    } else {
        res.redirect('register-kit/test-site-code')
    }
})

// confirm-testsite.html routing
router.post('/register-answer', function (req, res) {
    var registerConfirm = req.session.data['test-site-confirmation']
    if (registerConfirm == "no"){
        res.redirect('register-kit/test-site-code')
    } else {
        res.redirect('register-kit/royal-mail-barcode')
    }
})

// travel-work-education.html routing
router.post('/travel-workplace', function (req, res) {
    var travelTo = req.session.data['travel-work-education']
    if (travelTo == "yes-work"){
        res.redirect('register-kit/area-of-work')
    }
    if (travelTo == "yes-education"){
        res.redirect('register-kit/education-place')
    }
    if (travelTo == "no"){
        res.redirect('register-kit/symptoms')
    }
    else {
        res.redirect('register-kit/symptoms')
    }
})

// education-place.html routing
router.post('/education-place-answer', function (req, res) {
    var whichPlace = req.session.data['education-place']
    if (whichPlace == "not-say"){
        res.redirect('register-kit/symptoms')
    } else {
        res.redirect('register-kit/education-place-details')
    }
})

// GP-address.html routing
router.post('/gp-address', function (req, res) {
    var confirmGP = req.session.data['confirmGpAddress']
    if (confirmGP == "no"){
        res.redirect('register-kit/address/gp-address-postcode')
    } else {
        res.redirect('register-kit/email-address')
    }
})

// symptoms.html routing
router.post('/when-did-symptoms-start', function (req, res) {
    var symptomsStart = req.session.data['do-you-have-symptoms']
    if (symptomsStart == "no"){
        res.redirect('register-kit/symptoms-none')
    } else {
        res.redirect('/register-kit/when-did-symptoms-start')
    }
})





module.exports = router
