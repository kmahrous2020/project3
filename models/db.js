const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://khaled:asdfgh123@cluster0-xpwmu.mongodb.net/EmployeeDB?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');