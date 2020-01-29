exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Express' })
}

exports.submit_lead = function (req, res, next) {
    email = req.body.lead_email // WTF !! How i get this email in my template
    res.redirect('/')
}

